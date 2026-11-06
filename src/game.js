import { INITIAL_STATE, WORLD_CANON } from "./world-canon.js";
import { VN_SCENES, VN_START_SCENE } from "./vn-scenes.js";
import { validateVnScenes, VN_LINK_PHASES } from "./vn-schema.js";
import { INCOMPATIBLE_SAVE_KEYS, isCurrentCanonSave, sanitizeLegacyCanonState } from "./canon-migration.js";
import {
  applyProgressionUpdate,
  getBackroomsFloor,
  getCurrentObjectives,
  getStageById
} from "./campaign-canon.js";

// Save version v3: bản lưu v2 thuộc thế hệ nhân vật chính trước, không còn được đọc nữa.
const AUTO_SAVE_KEY = "hua-family-campaign-v4-auto";
const MANUAL_SAVE_KEY = "hua-family-campaign-v4-manual";

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function cleanText(value, maxLength = 500) {
  return typeof value === "string"
    ? value.replace(/\u0000/g, "").replace(/\s+/g, " ").trim().slice(0, maxLength)
    : "";
}

function clamp(value, min, max) {
  const numeric = Number(value);
  return Math.min(max, Math.max(min, Number.isFinite(numeric) ? Math.round(numeric) : 0));
}

function createStorage() {
  try {
    const probe = "__hua_campaign_probe__";
    window.localStorage.setItem(probe, probe);
    window.localStorage.removeItem(probe);
    return window.localStorage;
  } catch (error) {
    const memory = new Map();
    console.warn("localStorage không khả dụng; dùng bộ nhớ tạm.", error);
    return {
      getItem: (key) => memory.has(key) ? memory.get(key) : null,
      setItem: (key, value) => memory.set(key, String(value)),
      removeItem: (key) => memory.delete(key)
    };
  }
}

function appendUnique(target, values, limit, maxLength = 240) {
  const output = Array.isArray(target) ? target.slice() : [];
  const existing = new Set(output.map((item) => cleanText(item, maxLength).toLowerCase()));
  (Array.isArray(values) ? values : []).forEach((value) => {
    const text = cleanText(value, maxLength);
    const key = text.toLowerCase();
    if (text && !existing.has(key)) {
      output.push(text);
      existing.add(key);
    }
  });
  return output.slice(-limit);
}

function normalizeDialogue(rawDialogue) {
  return (Array.isArray(rawDialogue) ? rawDialogue : [])
    .filter((line) => line && typeof line === "object")
    .map((line) => ({
      speaker: cleanText(line.speaker, 80),
      text: cleanText(line.text, 700)
    }))
    .filter((line) => line.speaker && line.text)
    .slice(0, 8);
}

function normalizeItem(rawItem, fallbackIndex = 0) {
  if (!rawItem || typeof rawItem !== "object") return null;
  const name = cleanText(rawItem.name, 100);
  if (!name) return null;
  const id = cleanText(rawItem.id, 100)
    || `${name.toLowerCase().replace(/[^a-z0-9à-ỹ]+/gi, "-").replace(/^-|-$/g, "")}-${fallbackIndex}`;
  return {
    id,
    name,
    type: cleanText(rawItem.type, 60) || "item",
    rarity: cleanText(rawItem.rarity, 40) || "thường",
    description: cleanText(rawItem.description, 500),
    effect: cleanText(rawItem.effect, 300),
    limitations: cleanText(rawItem.limitations, 300),
    imagePrompt: cleanText(rawItem.imagePrompt, 1000),
    imageStatus: cleanText(rawItem.imageStatus, 40) || "pending"
  };
}

function normalizeProgression(rawProgression, baseProgression) {
  const candidate = rawProgression && typeof rawProgression === "object" ? rawProgression : {};
  return {
    ...baseProgression,
    ...candidate,
    stageId: cleanText(candidate.stageId, 60) || baseProgression.stageId,
    stageIndex: clamp(candidate.stageIndex ?? baseProgression.stageIndex, 0, 8),
    backroomsFloor: clamp(candidate.backroomsFloor ?? baseProgression.backroomsFloor, -1, 15),
    completedObjectiveIds: (Array.isArray(candidate.completedObjectiveIds) ? candidate.completedObjectiveIds : [])
      .map((item) => cleanText(item, 80)).filter(Boolean).slice(-20),
    backroomsMarks: (Array.isArray(candidate.backroomsMarks) ? candidate.backroomsMarks : [])
      .map((item) => cleanText(item, 180)).filter(Boolean).slice(-20),
    partySeparated: Boolean(candidate.partySeparated),
    campaignComplete: Boolean(candidate.campaignComplete)
  };
}

function normalizeState(rawState) {
  const base = clone(INITIAL_STATE);
  const candidate = rawState && typeof rawState === "object" ? rawState : {};
  const state = {
    ...base,
    ...candidate,
    version: base.version,
    scene: { ...base.scene, ...(candidate.scene || {}), backgroundId: cleanText(candidate.scene?.backgroundId, 60) },
    progression: normalizeProgression(candidate.progression, base.progression),
    stats: { ...base.stats, ...(candidate.stats || {}) },
    campaignStats: { ...base.campaignStats, ...(candidate.campaignStats || {}) },
    flags: { ...base.flags, ...(candidate.flags || {}) },
    campaignCanon: { ...base.campaignCanon, ...(candidate.campaignCanon || {}) },
    inventory: Array.isArray(candidate.inventory) ? candidate.inventory : [],
    log: Array.isArray(candidate.log) ? candidate.log.slice(0, 14) : base.log,
    history: Array.isArray(candidate.history) ? candidate.history.slice(-60) : [],
    vnCheckpoint: candidate.vnCheckpoint && typeof candidate.vnCheckpoint === "object" ? candidate.vnCheckpoint : null
  };

  // Cặp flags loại trừ lẫn nhau không bao giờ cùng đúng sau load: lựa chọn
  // đặt ra sau trong mạch thắng (đợt sửa lỗi toàn diện 2026-11-06).
  if (state.flags.thuNguyetFollows && state.flags.thuNguyetStays) state.flags.thuNguyetStays = false;
  if (state.flags.thuNguyetEscorted && state.flags.thuNguyetSolo) state.flags.thuNguyetSolo = false;

  state.scene.narration = Array.isArray(state.scene.narration)
    ? state.scene.narration.map((item) => cleanText(item, 2800)).filter(Boolean).slice(0, 12)
    : base.scene.narration;
  state.scene.dialogue = normalizeDialogue(state.scene.dialogue);
  state.scene.choices = (Array.isArray(state.scene.choices) ? state.scene.choices : base.scene.choices)
    .map((item) => cleanText(item, 260)).filter(Boolean).slice(0, 3);
  state.inventory = state.inventory.map(normalizeItem).filter(Boolean).slice(-50);

  const statBounds = {
    alert: [0, 100], ritual: [0, 100], civilianSafety: [0, 100], evidence: [0, 999],
    time: [0, 100], control: [0, 100], signalRisk: [0, 100]
  };
  Object.entries(statBounds).forEach(([key, [min, max]]) => {
    state.stats[key] = clamp(state.stats[key], min, max);
  });

  const campaignBounds = {
    lanHealth: [0, 100], lanTrust: [0, 100], lanMaterInfluence: [0, 100],
    partyHealth: [0, 100], supplies: [0, 99], ammunition: [0, 999],
    memoryIntegrity: [0, 100], cluesHuaGia: [0, 999], civiliansSaved: [0, 999],
    anchorsDestroyed: [0, 4], floorsCleared: [0, 16], falseMemoryCount: [0, 10]
  };
  Object.entries(campaignBounds).forEach(([key, [min, max]]) => {
    state.campaignStats[key] = clamp(state.campaignStats[key], min, max);
  });

  return state;
}

export function initGame() {
  const elements = {
    kicker: document.querySelector("#scene-kicker"),
    progress: document.querySelector("#scene-progress"),
    title: document.querySelector("#scene-title"),
    story: document.querySelector("#story-text"),
    choices: document.querySelector("#choices"),
    alertMeter: document.querySelector("#alert-meter"),
    alertValue: document.querySelector("#alert-value"),
    ritualMeter: document.querySelector("#ritual-meter"),
    ritualValue: document.querySelector("#ritual-value"),
    civilianMeter: document.querySelector("#civilian-meter"),
    civilianValue: document.querySelector("#civilian-value"),
    timeMeter: document.querySelector("#time-meter"),
    timeValue: document.querySelector("#time-value"),
    controlMeter: document.querySelector("#control-meter"),
    controlValue: document.querySelector("#control-value"),
    signalMeter: document.querySelector("#signal-meter"),
    signalValue: document.querySelector("#signal-value"),
    lanTrustMeter: document.querySelector("#lan-trust-meter"),
    lanTrustValue: document.querySelector("#lan-trust-value"),
    memoryMeter: document.querySelector("#memory-meter"),
    memoryValue: document.querySelector("#memory-value"),
    partyMeter: document.querySelector("#party-meter"),
    partyValue: document.querySelector("#party-value"),
    evidenceValue: document.querySelector("#evidence-value"),
    routeValue: document.querySelector("#route-value"),
    verificationValue: document.querySelector("#verification-value"),
    contactStyleValue: document.querySelector("#contact-style-value"),
    stageValue: document.querySelector("#campaign-stage-value"),
    toast: document.querySelector("#save-toast"),
    objectiveProgressValue: document.querySelector("#objective-progress-value"),
    backroomsFloorValue: document.querySelector("#backrooms-floor-value"),
    suppliesValue: document.querySelector("#supplies-value"),
    ammunitionValue: document.querySelector("#ammunition-value"),
    cluesValue: document.querySelector("#clues-value"),
    savedValue: document.querySelector("#saved-value"),
    log: document.querySelector("#log-list"),
    threads: document.querySelector("#threads-list"),
    inventory: document.querySelector("#inventory-list"),
    save: document.querySelector("#save-button"),
    load: document.querySelector("#load-button"),
    restart: document.querySelector("#restart-button")
  };

  const required = [elements.kicker, elements.progress, elements.title, elements.story, elements.choices];
  if (required.some((element) => !element)) {
    document.body.textContent = "Không thể khởi tạo giao diện chiến dịch canon.";
    return null;
  }

  const storage = createStorage();
  const sceneErrors = validateVnScenes(VN_SCENES, VN_START_SCENE);
  if (sceneErrors.length) throw new Error("VN scene contract invalid: " + sceneErrors.join("; "));
  let state = normalizeState(INITIAL_STATE);
  function applyLinkMilestone(milestone) {
    if (!milestone) return;
    const links = state.flags.vnLinks || {};
    const previous = links[milestone.id] || "unknown";
    if (VN_LINK_PHASES.indexOf(milestone.phase) >= VN_LINK_PHASES.indexOf(previous)) {
      state.flags.vnLinks = {...links, [milestone.id]: milestone.phase};
    }
  }

  // VN is the only playable route; legacy AI entrypoints cannot change state.
  function presentScene(sceneId) {
    const card = VN_SCENES[sceneId];
    if (!card) throw new Error("Scene viết sẵn chưa tồn tại: " + sceneId);
    // Văn bản có điều kiện theo flags (đợt sửa lỗi toàn diện 2026-11-06):
    // đoạn narration/dialogue mang { if } chỉ hiện khi flag đúng, { unless }
    // hiện khi flag không đúng; thiếu flags luôn rơi về văn bản mặc định.
    const flagOn = (key) => state.flags?.[key] === true;
    const condVisible = (item) => (!item.if || flagOn(item.if)) && (!item.unless || !flagOn(item.unless));
    state.scene = {
      id: card.id,
      backgroundId: card.backgroundId || "long-hai-exterior",
      kicker: "HỒI 1 // LONG HẢI // 1899",
      title: card.title,
      narration: (card.narration || []).filter((item) => typeof item === "string" || condVisible(item))
        .map((item) => typeof item === "string" ? item : item.text),
      dialogue: (card.dialogue || []).filter((line) => condVisible(line))
        .map((line) => ({ speaker: line.speaker, text: line.text })),
      companions: [...(card.companions || [])],
      entity: card.entity || false,
      choices: (card.choices || []).map((item) => item.text)
    };
    // Hiệu ứng bắt buộc tại cảnh: áp đúng MỘT lần cho mỗi lượt chơi, kể cả
    // khi load save tại cảnh đó hay retry dead end quay lại (dấu đã áp được
    // lưu trong flags.vnSceneEffects và đi cùng save/checkpoint).
    if (card.sceneEffects) {
      const applied = state.flags.vnSceneEffects || {};
      if (!applied[card.id]) {
        const previousProgression = state.progression;
        applyCampaignEffects(card.sceneEffects);
        state.flags.vnSceneEffects = { ...applied, [card.id]: true };
        updateDerivedCampaignStats(previousProgression);
      }
    }
    applyLinkMilestone(card.link);
    state.currentLocation = card.location || (card.backgroundId === "tieu-lan-room"
      ? "Phòng Hứa Tiểu Lan, biệt thự Long Hải" : "Biệt thự Hứa Gia, Long Hải");
  }

  function applyScriptChoice(index) {
    const card = VN_SCENES[state.scene.id];
    const choice = card?.choices?.[index];
    if (!choice || card.sliceEnd) return false;
    if (choice.retry) {
      if (!state.vnCheckpoint) return false;
      state = normalizeState(state.vnCheckpoint);
      state.vnCheckpoint = null;
      presentScene(state.scene.id);
      autoSave();
      render({ resetScroll: true });
      return true;
    }
    if (!VN_SCENES[choice.next]) throw new Error("Nhánh không có scene đích: " + choice.next);
    if (VN_SCENES[choice.next].deadEnd) {
      state.vnCheckpoint = clone({ ...state, vnCheckpoint: null });
      presentScene(choice.next);
      autoSave();
      render({ resetScroll: true });
      return true;
    }
    const previousProgression = clone(state.progression);
    applyCampaignEffects(choice.effects || {});
    applyLinkMilestone(choice.link);
    if (choice.route) {
      const scores = state.flags.vnRouteScores || {};
      state.flags.vnRouteScores = {
        ...scores, [choice.route.id]: (scores[choice.route.id] || 0) + choice.route.delta
      };
    }
    if (choice.flags) {
      for (const [key, value] of Object.entries(choice.flags)) {
        if (typeof value !== "boolean") throw new Error("Flag VN phải là boolean");
        state.flags[key] = value;
      }
    }
    const next = VN_SCENES[choice.next];
    const objective = choice.objective || next.objective;
    if (objective) {
      const result = applyProgressionUpdate(state.progression, state.flags, {
        completedObjectiveIds: [objective]
      });
      state.progression = result.progression;
      state.flags = { ...state.flags, ...result.flags };
      result.notes.forEach((note) => state.log.unshift(note));
      updateDerivedCampaignStats(previousProgression);
    }
    state.turn += 1;
    state.history.push({
      turn: state.turn,
      action: choice.text,
      summary: next.title,
      stageId: state.progression.stageId,
      sceneTitle: next.title
    });
    state.history = state.history.slice(-60);
    state.log.unshift("Cảnh: " + next.title);
    state.log = state.log.slice(0, 14);
    presentScene(next.id);
    autoSave();
    render({ resetScroll: true });
    return true;
  }

  // Tự khôi phục khi mở lại trang (lệnh chủ nhân 2026-11-06): có bản lưu
  // canon hợp lệ (thủ công trước, tự động sau — cùng thứ tự với nút Tải) thì
  // tiếp tục đúng chỗ cũ thay vì bắt đầu lại từ đầu; bản lưu hỏng/khác canon
  // thì im lặng bắt đầu mới, nút "Chiến dịch mới" vẫn là đường xóa chủ động.
  function tryRestoreSavedState() {
    // Chọn bản lưu MỚI NHẤT theo dấu thời gian đã đóng khi lưu (phản biện
    // ChatGPT vòng 1, 2026-11-06: ưu tiên cứng bản thủ công có thể khôi phục
    // về tiến độ CŨ hơn bản tự động). Bản lưu đời trước không có savedAt thì
    // tính là 0 và vẫn giữ thứ tự thủ công trước khi hòa.
    const candidates = [];
    for (const key of [MANUAL_SAVE_KEY, AUTO_SAVE_KEY]) {
      try {
        const raw = storage.getItem(key);
        if (!raw) continue;
        const decoded = JSON.parse(raw);
        if (isCurrentCanonSave(decoded) && VN_SCENES[decoded.scene?.id]) {
          candidates.push({ decoded, savedAt: Number(decoded.savedAt) || 0 });
        }
      } catch {
        // Bản lưu hỏng ở một khóa không được chặn bản còn lại.
      }
    }
    if (!candidates.length) return false;
    candidates.sort((a, b) => b.savedAt - a.savedAt);
    try {
      const decoded = candidates[0].decoded;
      state = normalizeState(sanitizeLegacyCanonState(decoded));
      presentScene(state.scene.id);
      state.log.unshift("Đã khôi phục tiến độ đã lưu.");
      state.log = state.log.slice(0, 14);
      render();
      return true;
    } catch {
      return false;
    }
  }

  if (!tryRestoreSavedState()) presentScene(VN_START_SCENE);

  function applyStatEffects(rawEffects) {
    const effects = rawEffects && typeof rawEffects === "object" ? rawEffects : {};
    const bounds = {
      alertDelta: ["alert", -8, 15, 0, 100],
      ritualDelta: ["ritual", -8, 12, 0, 100],
      civilianSafetyDelta: ["civilianSafety", -12, 3, 0, 100],
      evidenceDelta: ["evidence", 0, 2, 0, 999],
      timeDelta: ["time", -15, 3, 0, 100],
      controlDelta: ["control", -12, 12, 0, 100],
      signalRiskDelta: ["signalRisk", -8, 15, 0, 100]
    };

    Object.entries(bounds).forEach(([source, [target, minDelta, maxDelta, minValue, maxValue]]) => {
      const delta = clamp(effects[source], minDelta, maxDelta);
      state.stats[target] = clamp((Number(state.stats[target]) || 0) + delta, minValue, maxValue);
    });
  }

  function applyCampaignEffects(rawEffects) {
    const effects = rawEffects && typeof rawEffects === "object" ? rawEffects : {};
    const bounds = {
      lanHealthDelta: ["lanHealth", -12, 8, 0, 100],
      lanTrustDelta: ["lanTrust", -10, 12, 0, 100],
      lanMaterInfluenceDelta: ["lanMaterInfluence", -8, 12, 0, 100],
      partyHealthDelta: ["partyHealth", -15, 8, 0, 100],
      suppliesDelta: ["supplies", -3, 2, 0, 99],
      ammunitionDelta: ["ammunition", -20, 10, 0, 999],
      memoryIntegrityDelta: ["memoryIntegrity", -15, 5, 0, 100],
      cluesHuaGiaDelta: ["cluesHuaGia", 0, 3, 0, 999],
      civiliansSavedDelta: ["civiliansSaved", 0, 5, 0, 999],
      falseMemoryCountDelta: ["falseMemoryCount", -1, 2, 0, 10]
    };

    Object.entries(bounds).forEach(([source, [target, minDelta, maxDelta, minValue, maxValue]]) => {
      const delta = clamp(effects[source], minDelta, maxDelta);
      state.campaignStats[target] = clamp((Number(state.campaignStats[target]) || 0) + delta, minValue, maxValue);
    });
  }

  function applyWorldUpdates(rawUpdates) {
    const updates = rawUpdates && typeof rawUpdates === "object" ? rawUpdates : {};
    const canon = state.campaignCanon;
    const currentLocation = cleanText(updates.currentLocation, 180);
    if (currentLocation) state.currentLocation = currentLocation;

    canon.facts = appendUnique(canon.facts, updates.newCanonFacts, 100, 400);
    canon.events = appendUnique(canon.events, [updates.eventSummary], 100, 400);
    canon.unresolvedThreads = appendUnique(canon.unresolvedThreads, updates.newThreads, 36, 280);
    canon.characters = appendUnique(canon.characters, updates.newCharacters, 50, 240);
    canon.locations = appendUnique(canon.locations, updates.newLocations, 50, 240);

    const resolved = (Array.isArray(updates.resolvedThreads) ? updates.resolvedThreads : [])
      .map((item) => cleanText(item, 280)).filter(Boolean);
    if (resolved.length) {
      canon.resolvedThreads = appendUnique(canon.resolvedThreads, resolved, 50, 280);
      const resolvedSet = new Set(resolved.map((item) => item.toLowerCase()));
      canon.unresolvedThreads = canon.unresolvedThreads.filter((item) => !resolvedSet.has(cleanText(item, 280).toLowerCase()));
    }

    const knownItemIds = new Set(state.inventory.map((item) => item.id));
    const items = (Array.isArray(updates.itemsFound) ? updates.itemsFound : [])
      .map(normalizeItem).filter(Boolean);
    items.forEach((item) => {
      if (!knownItemIds.has(item.id)) {
        state.inventory.push(item);
        knownItemIds.add(item.id);
        state.log.unshift(`Nhận vật phẩm: ${item.name}.`);
      }
    });
    state.inventory = state.inventory.slice(-50);
  }

  function updateDerivedCampaignStats(previousProgression) {
    state.campaignStats.anchorsDestroyed = clamp(
      (state.flags.longHaiAnchorDestroyed ? 1 : 0) + (Number(state.flags.canGioAnchorCount) || 0),
      0,
      4
    );

    if (state.flags.escapedBackrooms || state.progression.stageIndex > 2) {
      state.campaignStats.floorsCleared = 16;
    } else if (state.progression.stageId === "backrooms") {
      const advancedFloor = state.progression.backroomsFloor > previousProgression.backroomsFloor;
      state.campaignStats.floorsCleared = clamp(
        Math.max(state.campaignStats.floorsCleared, state.progression.backroomsFloor + (advancedFloor ? 0 : 0)),
        0,
        16
      );
    }
  }

  function syncLocationToProgression(previousProgression) {
    const stageChanged = previousProgression.stageId !== state.progression.stageId;
    const floorChanged = previousProgression.backroomsFloor !== state.progression.backroomsFloor;
    if (!stageChanged && !floorChanged) return;

    const stage = getStageById(state.progression.stageId);
    if (stage.id === "backrooms") {
      const floor = getBackroomsFloor(state.progression.backroomsFloor);
      state.currentLocation = `Backrooms tầng ${floor.floor} — ${floor.name}`;
    } else {
      state.currentLocation = stage.label;
    }
  }

  function applyAiTurn(rawTurn, playerAction) {
    throw new Error("AI-GM đã tắt trong Visual Novel kịch bản viết sẵn.");
    const turn = rawTurn && typeof rawTurn === "object" ? rawTurn : {};
    const updates = turn.worldUpdates && typeof turn.worldUpdates === "object" ? turn.worldUpdates : {};
    const narration = cleanText(turn.narration, 8000);
    const choices = (Array.isArray(turn.choices) ? turn.choices : [])
      .map((item) => cleanText(item, 260)).filter(Boolean).slice(0, 3);

    if (!narration || choices.length !== 3) {
      throw new Error("Lượt AI không có đủ lời kể và ba gợi ý hành động.");
    }

    const previousProgression = clone(state.progression);
    applyStatEffects(turn.effects);
    applyCampaignEffects(turn.campaignEffects);
    applyWorldUpdates(updates);

    const progressionResult = applyProgressionUpdate(state.progression, state.flags, turn.progressionUpdate);
    state.progression = progressionResult.progression;
    state.flags = { ...state.flags, ...progressionResult.flags };
    updateDerivedCampaignStats(previousProgression);
    syncLocationToProgression(previousProgression);
    progressionResult.notes.forEach((note) => state.log.unshift(note));

    state.turn += 1;
    const stage = getStageById(state.progression.stageId);
    const floor = stage.id === "backrooms" ? getBackroomsFloor(state.progression.backroomsFloor) : null;
    state.scene = {
      backgroundId: cleanText(updates.snapshotBackground, 60),
      id: `turn-${state.turn}`,
      kicker: cleanText(updates.sceneKicker, 120)
        || (floor ? `BACKROOMS // TẦNG ${floor.floor}` : `${stage.act.toUpperCase()} // ${stage.label.toUpperCase()}`),
      title: cleanText(updates.sceneTitle, 200) || "Tình thế mới",
      narration: narration.split(/\n{2,}/).map((item) => cleanText(item, 2800)).filter(Boolean).slice(0, 12),
      dialogue: normalizeDialogue(turn.dialogue),
      choices
    };

    const action = cleanText(playerAction, 600);
    const summary = cleanText(turn.summary, 400) || cleanText(updates.eventSummary, 400) || `Lượt ${state.turn} đã hoàn tất.`;
    state.history.push({
      turn: state.turn,
      action,
      summary,
      location: state.currentLocation,
      stageId: state.progression.stageId,
      backroomsFloor: state.progression.backroomsFloor,
      sceneTitle: state.scene.title
    });
    state.history = state.history.slice(-60);
    state.log.unshift(`Lượt ${state.turn}: ${summary}`);
    state.log = state.log.slice(0, 14);
    autoSave();
    render();
    return getSnapshot();
  }

  function getSnapshot() {
    return {
      version: state.version,
      campaignId: state.campaignId,
      worldId: WORLD_CANON.id,
      turn: state.turn,
      scene: clone(state.scene),
      vnCheckpointAvailable: Boolean(state.vnCheckpoint),
      currentLocation: state.currentLocation,
      progression: clone(state.progression),
      stats: clone(state.stats),
      campaignStats: clone(state.campaignStats),
      flags: clone(state.flags),
      campaignCanon: clone(state.campaignCanon),
      inventory: clone(state.inventory),
      recentHistory: clone(state.history.slice(-16)),
      log: clone(state.log.slice(0, 14))
    };
  }

  function renderParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
  }

  function renderDialogue(line) {
    const paragraph = document.createElement("p");
    paragraph.className = "dialogue";
    const speaker = document.createElement("span");
    speaker.className = "speaker";
    speaker.textContent = line.speaker;
    const text = document.createElement("span");
    text.textContent = line.text;
    paragraph.append(speaker, text);
    return paragraph;
  }

  function renderChoices() {
    elements.choices.replaceChildren();
    state.scene.choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "choice";
      const number = document.createElement("span");
      number.className = "choice-number";
      number.textContent = String(index + 1);
      const label = document.createElement("span");
      label.textContent = choice;
      button.append(number, label);
      button.addEventListener("click", () => applyScriptChoice(index));
      elements.choices.append(button);
    });
  }

  function setMeter(meter, label, value) {
    if (meter) meter.value = value;
    if (label) label.textContent = `${value}%`;
  }

  function renderList(element, items, emptyText) {
    if (!element) return;
    element.replaceChildren();
    const source = items.length ? items : [emptyText];
    source.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      element.append(li);
    });
  }

  function renderObjectives() {
    if (!elements.threads) return;
    const objectives = getCurrentObjectives(state.progression);
    const completed = new Set(state.progression.completedObjectiveIds);
    const objectiveLines = objectives.map((objective) => `${completed.has(objective.id) ? "✓" : "○"} ${objective.label}`);
    const extraThreads = state.campaignCanon.unresolvedThreads.slice(0, 4).map((thread) => `Đầu mối: ${thread}`);
    renderList(elements.threads, [...objectiveLines, ...extraThreads], "Chưa có mục tiêu.");
  }

  function renderInventory() {
    if (!elements.inventory) return;
    elements.inventory.replaceChildren();
    if (!state.inventory.length) {
      const li = document.createElement("li");
      li.textContent = "Chưa có vật phẩm phát sinh.";
      elements.inventory.append(li);
      return;
    }
    state.inventory.slice(-12).forEach((item) => {
      const li = document.createElement("li");
      const name = document.createElement("strong");
      name.textContent = `${item.name} — ${item.rarity}`;
      const description = document.createElement("span");
      description.textContent = item.description ? ` ${item.description}` : "";
      li.append(name, description);
      elements.inventory.append(li);
    });
  }

  function resetReaderScroll() {
    // .game-layout is the reading scroller; the page itself is fixed.
    const scrollRegion = document.querySelector(".game-layout");
    if (!scrollRegion) return;

    scrollRegion.scrollTop = 0;
    // Run once more after layout to prevent the old choice-button anchor
    // from returning the reader to the bottom of the new scene.
    window.requestAnimationFrame?.(() => {
      scrollRegion.scrollTop = 0;
    });
  }

  function render({ resetScroll = false } = {}) {
    const stage = getStageById(state.progression.stageId);
    const objectives = getCurrentObjectives(state.progression);
    const completedCount = objectives.filter((objective) => state.progression.completedObjectiveIds.includes(objective.id)).length;
    const floor = stage.id === "backrooms" ? getBackroomsFloor(state.progression.backroomsFloor) : null;

    elements.kicker.textContent = state.scene.kicker;
    elements.progress.textContent = String(state.turn).padStart(2, "0");
    elements.title.textContent = state.scene.title;
    elements.story.replaceChildren(
      ...state.scene.narration.map(renderParagraph),
      ...state.scene.dialogue.map(renderDialogue)
    );
    renderChoices();

    setMeter(elements.alertMeter, elements.alertValue, state.stats.alert);
    setMeter(elements.ritualMeter, elements.ritualValue, state.stats.ritual);
    setMeter(elements.civilianMeter, elements.civilianValue, state.stats.civilianSafety);
    setMeter(elements.timeMeter, elements.timeValue, state.stats.time);
    setMeter(elements.controlMeter, elements.controlValue, state.stats.control);
    setMeter(elements.signalMeter, elements.signalValue, state.stats.signalRisk);
    setMeter(elements.lanTrustMeter, elements.lanTrustValue, state.campaignStats.lanTrust);
    setMeter(elements.memoryMeter, elements.memoryValue, state.campaignStats.memoryIntegrity);
    setMeter(elements.partyMeter, elements.partyValue, state.campaignStats.partyHealth);

    if (elements.evidenceValue) elements.evidenceValue.textContent = state.stats.evidence;
    if (elements.routeValue) elements.routeValue.textContent = state.currentLocation;
    if (elements.verificationValue) elements.verificationValue.textContent = String(state.turn);
    if (elements.contactStyleValue) elements.contactStyleValue.textContent = state.currentLocation;
    if (elements.stageValue) elements.stageValue.textContent = `${stage.act} — ${stage.label}`;
    if (elements.objectiveProgressValue) elements.objectiveProgressValue.textContent = `${completedCount}/${objectives.length}`;
    if (elements.backroomsFloorValue) elements.backroomsFloorValue.textContent = floor ? `${floor.floor} — ${floor.name}` : "Chưa vào";
    if (elements.suppliesValue) elements.suppliesValue.textContent = state.campaignStats.supplies;
    if (elements.ammunitionValue) elements.ammunitionValue.textContent = state.campaignStats.ammunition;
    if (elements.cluesValue) elements.cluesValue.textContent = state.campaignStats.cluesHuaGia;
    if (elements.savedValue) elements.savedValue.textContent = state.campaignStats.civiliansSaved;

    renderObjectives();
    renderInventory();
    renderList(elements.log, state.log, "Chưa có sự kiện.");
    document.title = `${state.scene.title} — Hứa Gia: LIBERA-1899`;
    window.dispatchEvent(new CustomEvent("hua:game-rendered", { detail: getSnapshot() }));
    if (resetScroll) resetReaderScroll();
  }

  function autoSave() {
    try {
      state.savedAt = Date.now();
      storage.setItem(AUTO_SAVE_KEY, JSON.stringify(state));
    } catch (error) {
      console.warn("Không thể tự động lưu chiến dịch.", error);
    }
  }

  let toastTimer = 0;
  function showToast(message, isError = false) {
    const toast = elements.toast;
    if (!toast?.classList) return;
    toast.textContent = message;
    toast.classList.toggle("is-error", isError);
    toast.hidden = false;
    // Buộc trình duyệt áp trạng thái đầu trước khi bật transition.
    void toast.offsetWidth;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      toast.classList.remove("is-visible");
      window.setTimeout(() => { toast.hidden = true; }, 240);
    }, 2600);
  }

  function saveGame() {
    state.savedAt = Date.now();
    try {
      storage.setItem(MANUAL_SAVE_KEY, JSON.stringify(state));
    } catch (error) {
      console.error(error);
      showToast("Không lưu được — bộ nhớ trình duyệt đã đầy hoặc bị chặn.", true);
      return;
    }
    state.log.unshift("Đã tạo bản lưu thủ công.");
    state.log = state.log.slice(0, 14);
    render();
    showToast(`Đã lưu mốc thủ công — ${state.scene.title}`);
  }

  function loadGame() {
    const raw = storage.getItem(MANUAL_SAVE_KEY) || storage.getItem(AUTO_SAVE_KEY);
    if (!raw) {
      const oldSavePresent = INCOMPATIBLE_SAVE_KEYS.some((key) => storage.getItem(key));
      state.log.unshift(oldSavePresent
        ? "Phát hiện bản lưu canon cũ; không thể nạp vào tuyến VN chín chặng."
        : "Chưa có bản lưu chiến dịch canon.");
      render();
      return;
    }
    try {
      const decoded = JSON.parse(raw);
      if (!isCurrentCanonSave(decoded)
        || !VN_SCENES[decoded.scene?.id]) {
        state.log.unshift("Bản lưu thuộc canon cũ, không tương thích với VN hiện hành.");
        state.log = state.log.slice(0, 14);
        render();
        return;
      }
      state = normalizeState(sanitizeLegacyCanonState(decoded));
      presentScene(state.scene.id);
      state.log.unshift("Đã tải chiến dịch canon.");
      state.log = state.log.slice(0, 14);
      render({ resetScroll: true });
      showToast(`Đã tải mốc thủ công — ${state.scene.title}`);
    } catch (error) {
      console.error(error);
      state = normalizeState(INITIAL_STATE);
      presentScene(VN_START_SCENE);
      state.log.unshift("Bản lưu hỏng; đã tạo chiến dịch mới.");
      render({ resetScroll: true });
    }
  }

  function restartGame() {
    state = normalizeState(INITIAL_STATE);
    presentScene(VN_START_SCENE);
    storage.removeItem(AUTO_SAVE_KEY);
    state.log.unshift("Đã khởi tạo lại chiến dịch từ Long Hải.");
    autoSave();
    render({ resetScroll: true });
  }

  elements.save?.addEventListener("click", saveGame);
  elements.load?.addEventListener("click", loadGame);
  elements.restart?.addEventListener("click", () => {
    // Chống mất tiến độ vì một cú chạm nhầm (rà soát chơi thật 2026-11-06):
    // bắt đầu chiến dịch mới phải qua một bước xác nhận tường minh.
    if (window.confirm("Bắt đầu chiến dịch mới? Tiến độ tự động lưu hiện tại sẽ bị thay thế (bản lưu thủ công vẫn giữ nguyên).")) {
      restartGame();
    }
  });

  window.HUA_GAME_BRIDGE = Object.freeze({
    getSnapshot,
    applyAiTurn,
    applyScriptChoice,
    saveGame,
    loadGame,
    restartGame
  });

  // Always open a fresh campaign. Keep existing saves untouched until the player loads or plays.
  render();
  return window.HUA_GAME_BRIDGE;
}
