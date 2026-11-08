import { SCENE_BACKGROUNDS, resolveSceneBackground } from "./scene-backgrounds.js";
import { CHARACTER_OVERLAYS, companionDisplayName, resolveCompanionId } from "./character-overlays.js";
import { resolveCharacterOverlay } from "./character-appearance.js";
import { ENTITY_OVERLAYS, ENTITY_DISPLAY_NAMES, resolveEntityId, resolveEntitySrc } from "./entity-overlays.js";

const STAGES = Object.freeze([
  {
    "id": "long_hai",
    "label": "Chặng 1 · Long Hải"
  },
  {
    "id": "vung_tau",
    "label": "Chặng 2 · Vũng Tàu"
  },
  {
    "id": "can_gio",
    "label": "Chặng 3 · Cần Giờ"
  },
  {
    "id": "prenn",
    "label": "Chặng 4 · Chưa rõ"
  },
  {
    "id": "backrooms",
    "label": "Chặng 5 · Backrooms"
  },
  {
    "id": "cho_lon_return",
    "label": "Chặng 6 · Chợ Lớn"
  },
  {
    "id": "dong_thap",
    "label": "Chặng 7 · Đồng Tháp"
  },
  {
    "id": "hue",
    "label": "Chặng 8 · Huế"
  },
  {
    "id": "cho_lon_final",
    "label": "Chặng 9 · Chung kết"
  }
]);


function numberOr(value, fallback = 0) {
  const numeric = Number(value);
  return Number.isFinite(numeric) ? numeric : fallback;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function isTypingTarget(target) {
  return target instanceof HTMLInputElement
    || target instanceof HTMLTextAreaElement
    || target instanceof HTMLSelectElement
    || Boolean(target?.isContentEditable);
}

function routePercent(snapshot) {
  const progression = snapshot?.progression || {};
  const stageIndex = clamp(numberOr(progression.stageIndex), 0, STAGES.length - 1);
  let subProgress = 0.08;

  if (progression.stageId === "backrooms") {
    subProgress = clamp((numberOr(progression.backroomsFloor, -1) + 1) / 16, 0, 1);
  } else if (progression.campaignComplete) {
    subProgress = 1;
  }

  const denominator = Math.max(1, STAGES.length - 1);
  return clamp(((stageIndex + subProgress) / denominator) * 100, 2, 100);
}

export function initMissionInterface() {
  const body = document.body;
  const intelPanel = document.querySelector("#intel-panel");
  const intelToggle = document.querySelector("#intel-toggle");
  const intelClose = document.querySelector("#intel-close");
  const intelScrim = document.querySelector("#intel-scrim");
  const storyPanel = document.querySelector("#story-panel");
  const routeProgress = document.querySelector("#route-progress");
  const routeStepLabel = document.querySelector("#route-step-label");
  const lanHealth = document.querySelector("#lan-health-rail");
  const lanInfluence = document.querySelector("#lan-influence-rail");
  const routeItems = [...document.querySelectorAll("[data-route-stage]")];
  const actionInput = document.querySelector("#ai-action");
  const actionsToggle = document.querySelector("#actions-toggle");
  const stageEntity = document.querySelector("#stage-entity");
  const stageTieuLan = document.querySelector("#stage-tieu-lan");
  const stageCompanion = document.querySelector("#stage-companion");
  const stageEntityFigure = document.querySelector("#stage-entity-figure");
  const stageLanFigure = document.querySelector("#stage-lan-figure");
  const stageCompanionFigure = document.querySelector("#stage-companion-figure");
  const stageEntityName = document.querySelector("#stage-entity-name");
  const stageCompanionName = document.querySelector("#stage-companion-name");
  const stageSceneName = document.querySelector("#stage-scene-name");
  const stageBackground = document.querySelector("#stage-background");
  const stageCharacter = document.querySelector("#stage-character");
  const stageCharacterWrap = document.querySelector(".stage-character-wrap");
  let lastSceneId = "";
  let sceneAnimationTimer = 0;

  if (window.HuaAndroid) body.classList.add("native-apk");

  // v5: #intel-panel là drawer ở MỌI bề rộng (burger nằm trong header).
  // Không còn matchMedia gating: trạng thái mở/đóng chỉ do class .intel-open quyết định.
  function syncIntelAccessibility() {
    const isOpen = body.classList.contains("intel-open");
    if (intelPanel) intelPanel.setAttribute("aria-hidden", String(!isOpen));
    if (intelToggle) intelToggle.setAttribute("aria-expanded", String(isOpen));
    if (intelScrim) intelScrim.tabIndex = isOpen ? 0 : -1;
  }

  function setIntelOpen(value) {
    body.classList.toggle("intel-open", Boolean(value));
    syncIntelAccessibility();
    if (value) {
      window.setTimeout(() => intelClose?.focus(), 50);
    } else {
      intelToggle?.focus({ preventScroll: true });
    }
  }

  // v5: nút "Thao Tác" (#actions-toggle) ẩn/hiện .choice-deck qua class
  // .choices-collapsed trên #story-panel; CSS chịu trách nhiệm display.
  function setChoicesOpen(value) {
    const expanded = Boolean(value);
    storyPanel?.classList.toggle("choices-collapsed", !expanded);
    actionsToggle?.setAttribute("aria-expanded", String(expanded));
  }

  function animateScene(sceneId) {
    if (!storyPanel || !sceneId || sceneId === lastSceneId) return;
    lastSceneId = sceneId;
    window.clearTimeout(sceneAnimationTimer);
    storyPanel.classList.remove("is-entering");
    void storyPanel.offsetWidth;
    storyPanel.classList.add("is-entering");
    sceneAnimationTimer = window.setTimeout(() => {
      storyPanel.classList.remove("is-entering");
    }, 620);
  }

  function syncRoute(snapshot) {
    const stageId = String(snapshot?.progression?.stageId || "long_hai");
    const activeIndex = Math.max(0, STAGES.findIndex((stage) => stage.id === stageId));
    body.dataset.stage = stageId;

    routeItems.forEach((item, index) => {
      item.classList.toggle("is-active", item.dataset.routeStage === stageId);
      item.classList.toggle("is-complete", index < activeIndex);
    });

    const stage = STAGES[activeIndex] || STAGES[0];
    if (routeStepLabel) {
      const floor = stageId === "backrooms"
        ? ` · tầng ${clamp(numberOr(snapshot?.progression?.backroomsFloor, 0), 0, 15)}`
        : "";
      routeStepLabel.textContent = `${stage.label}${floor}`;
    }
    if (routeProgress) routeProgress.style.width = `${routePercent(snapshot).toFixed(1)}%`;
  }

  function syncTarget(snapshot) {
    if (lanHealth) lanHealth.textContent = `${clamp(numberOr(snapshot?.campaignStats?.lanHealth, 100), 0, 100)}%`;
    if (lanInfluence) lanInfluence.textContent = `${clamp(numberOr(snapshot?.campaignStats?.lanMaterInfluence), 0, 100)}%`;
  }

  // Cao Minh có HAI overlay riêng biệt (lệnh chủ nhân 2026-11-06): ảnh khám phá
  // bình thường và ảnh lúc gặp thực thể (tư thế giơ tay kết ấn). Cùng ngưỡng
  // encounter quyết định cả hai: entity hiện + Cao Minh đổi sang tư thế gặp
  // thực thể; hết encounter thì quay lại ảnh khám phá.
  const POSE_EXPLORE = "assets/overlay/main-character.png";
  const POSE_ENCOUNTER = "assets/overlay/main-character-encounter.png";
  let poseSwapTimer = 0;

  // Tiểu Lan đang có thoại trong cảnh hiện tại? Tên người nói do Writer trả
  // về thường là "Hứa Tiểu Lan" / "Tiểu Lan": bỏ dấu rồi so khớp "tieu lan".
  function isTieuLanSpeaking(snapshot) {
    const dialogue = Array.isArray(snapshot?.scene?.dialogue) ? snapshot.scene.dialogue : [];
    return dialogue.some((line) => {
      const speaker = String(line?.speaker || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D")
        .toLowerCase();
      return speaker.includes("tieu lan");
    });
  }

  // v5: đồng bộ khung Snapshot (#snapshot-stage).
  // - #stage-scene-name: caption cảnh, lấy snapshot.scene.title; rỗng thì giữ text mặc định trong HTML.
  // - #stage-entity: overlay Entity, hiện khi encounter active. Encounter active khi
  //   threat score >= 42 (cơ chế cũ) HOẶC cảnh VN khai báo entity: true — chỉ đạo
  //   sân khấu của kịch bản (sửa sau chơi thử 2026-11-06: lát cắt Long Hải không
  //   bao giờ đẩy threat tới 42 nên Thực Thể không xuất hiện được). Cơ chế: class
  //   .stage-entity-on trên chính #stage-entity (CSS mặc định ẩn, .stage-entity-on thì hiện).
  // - #stage-character: đổi tư thế theo encounter (xem POSE_* ở trên), fade 160ms.
  function syncStage(snapshot) {
    const backgroundId = resolveSceneBackground(snapshot);
    const source = SCENE_BACKGROUNDS[backgroundId];
    if (stageBackground) {
      if (source && stageBackground.getAttribute("src") !== source) stageBackground.setAttribute("src", source);
      stageBackground.hidden = !source;
    }
    const title = String(snapshot?.scene?.title || "").trim();
    if (stageSceneName && title) stageSceneName.textContent = title;

    // Encounter là chỉ đạo kịch bản thuần túy (lệnh chủ nhân 2026-11-06):
    // chỉ cảnh VN khai báo entity mới mở encounter — cơ chế điểm threat
    // thời AI-GM đã gỡ cùng khối cảm biến.
    const active = Boolean(snapshot?.scene?.entity);
    // Gương mặt thực thể do cảnh chọn (entity: "<id>"); cảnh không khai
    // báo thì giữ ảnh mặc định trong HTML.
    const entitySrc = resolveEntitySrc(snapshot?.scene?.entity);
    if (stageEntity && entitySrc && stageEntity.getAttribute("src") !== entitySrc) {
      stageEntity.setAttribute("src", entitySrc);
    }
    stageEntityFigure?.classList.toggle("stage-entity-on", active);
    if (stageEntityName) {
      stageEntityName.textContent = ENTITY_DISPLAY_NAMES[resolveEntityId(snapshot?.scene?.entity)] || "Gia nhân bị khống chế";
    }

    // Tiểu Lan hiện bên trái Snapshot suốt cảnh có thoại của cô, fade out ở
    // cảnh đầu tiên không còn thoại của cô. Encounter active thì Entity
    // chiếm ô trái, cô không hiện.
    const lanOn = !active && isTieuLanSpeaking(snapshot);
    stageLanFigure?.classList.toggle("stage-lan-on", lanOn);

    // Nhân vật phụ: hiện khi scene khai báo companions hoặc có thoại của
    // nhân vật có tên (xem character-overlays.js). NPC đứng đúng ô trái
    // của Entity với cùng chiều cao; nếu Tiểu Lan cũng đang hiện ở ô trái
    // thì NPC lùi sang vị trí thứ hai (.stage-companion-shifted) nhưng giữ
    // nguyên kích cỡ. Encounter active thì ẩn — cùng luật với Tiểu Lan.
    const companionId = active ? null : resolveCompanionId(snapshot?.scene);
    const companionSrc = companionId ? resolveCharacterOverlay(companionId, snapshot?.scene) : "";
    if (stageCompanion) {
      if (companionSrc && stageCompanion.getAttribute("src") !== companionSrc) {
        stageCompanion.setAttribute("src", companionSrc);
      }
      stageCompanionFigure?.classList.toggle("stage-companion-on", Boolean(companionSrc));
      stageCompanionFigure?.classList.toggle("stage-companion-shifted", Boolean(companionSrc) && lanOn);
      if (stageCompanionName) {
        stageCompanionName.textContent = companionId ? companionDisplayName(companionId, snapshot?.scene) : "";
      }
    }

    // Cảnh khai báo showProtagonist: false (chỉ đạo kịch bản, vd cảnh
    // trạm ngày 63): ẩn cả khối nhân vật chính + hai thanh kiếm; cảnh
    // sau không khai báo thì hiện lại như thường.
    stageCharacterWrap?.classList.toggle("stage-protagonist-off", snapshot?.scene?.showProtagonist === false);

    const pose = active ? POSE_ENCOUNTER : POSE_EXPLORE;
    if (stageCharacter && stageCharacter.getAttribute("src") !== pose) {
      stageCharacter.classList.add("is-swapping");
      window.clearTimeout(poseSwapTimer);
      poseSwapTimer = window.setTimeout(() => {
        stageCharacter.setAttribute("src", pose);
        stageCharacter.classList.remove("is-swapping");
      }, 160);
    }
  }

  function sync(snapshot) {
    if (!snapshot || typeof snapshot !== "object") return;
    syncRoute(snapshot);
    syncTarget(snapshot);
    syncStage(snapshot);
    animateScene(String(snapshot?.scene?.id || `turn-${numberOr(snapshot?.turn)}`));
  }

  function resizeActionInput() {
    if (!(actionInput instanceof HTMLTextAreaElement)) return;
    actionInput.style.height = "auto";
    actionInput.style.height = `${clamp(actionInput.scrollHeight, 112, 260)}px`;
  }

  intelToggle?.addEventListener("click", () => {
    setIntelOpen(!body.classList.contains("intel-open"));
  });
  intelClose?.addEventListener("click", () => setIntelOpen(false));
  intelScrim?.addEventListener("click", () => setIntelOpen(false));
  actionsToggle?.addEventListener("click", () => {
    const expanded = actionsToggle.getAttribute("aria-expanded") !== "false";
    setChoicesOpen(!expanded);
  });
  actionInput?.addEventListener("input", resizeActionInput);

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && body.classList.contains("intel-open")) {
      event.preventDefault();
      setIntelOpen(false);
      return;
    }

    if (isTypingTarget(event.target) || event.altKey || event.ctrlKey || event.metaKey) return;

    if (/^[1-3]$/.test(event.key)) {
      const choice = document.querySelectorAll("#choices .choice")[Number(event.key) - 1];
      if (choice instanceof HTMLButtonElement) {
        event.preventDefault();
        choice.click();
      }
    } else if (event.key.toLowerCase() === "i") {
      event.preventDefault();
      setIntelOpen(!body.classList.contains("intel-open"));
    }
  });

  window.addEventListener("hua:game-rendered", (event) => sync(event.detail));

  // Nạp trước ảnh tư thế gặp thực thể để lần chạm trán đầu không chớp hình.
  const posePreload = new Image();
  posePreload.src = POSE_ENCOUNTER;
  // Nạp trước overlay Tiểu Lan để lần fade in đầu tiên không bị trống hình.
  const lanPreload = new Image();
  lanPreload.src = "assets/overlay/tieu-lan.png";
  // Nạp trước các overlay nhân vật phụ (WebP nhẹ) cho lần xuất hiện đầu tiên.
  for (const src of Object.values(CHARACTER_OVERLAYS)) {
    const preload = new Image();
    preload.src = src;
  }
  // Nạp trước các gương mặt thực thể (gia nhân nhiễm trùng) để lần hiện
  // hình đầu tiên không chớp hình.
  for (const src of Object.values(ENTITY_OVERLAYS)) {
    const preload = new Image();
    preload.src = src;
  }
  // Mặc định: deck phương án đang hiện (aria-expanded="true"), trừ khi HTML ghi rõ "false".
  setChoicesOpen(actionsToggle ? actionsToggle.getAttribute("aria-expanded") !== "false" : true);
  syncIntelAccessibility();
  resizeActionInput();

  return Object.freeze({ sync, setIntelOpen });
}
