import assert from "node:assert/strict";
import { initGame } from "../src/game.js";
import { INITIAL_STATE } from "../src/world-canon.js";
import { VN_SCENES, VN_START_SCENE } from "../src/vn-scenes.js";
import { validateVnScenes } from "../src/vn-schema.js";
const AUTO_SAVE_KEY = "hua-family-campaign-v4-auto";
const MANUAL_SAVE_KEY = "hua-family-campaign-v4-manual";
class Element extends EventTarget {
  children = []; textContent = ""; 
  append(...children) { this.children.push(...children); }
  replaceChildren(...children) { this.children = children; }
  click() { this.dispatchEvent(new Event("click")); }
}
function launch(saves) {
  const elements = new Map();
  globalThis.document = {
    querySelector(selector) {
      if (!elements.has(selector)) elements.set(selector, new Element());
      return elements.get(selector);
    },
    createElement: () => new Element()
  };
  globalThis.window = new EventTarget();
  window.localStorage = {
    getItem: k => saves.get(k) ?? null,
    setItem: (k,v) => saves.set(k,String(v)),
    removeItem: k => saves.delete(k)
  };
  return { bridge: initGame(), elements };
}
assert.deepEqual(validateVnScenes(VN_SCENES, VN_START_SCENE), []);

{
  // Regression: the fixed game-layout scroller must return to the beginning
  // after every scene-changing choice, including dead ends and retries.
  const reader = launch(new Map());
  const scroller = document.querySelector(".game-layout");
  const frames = [];
  window.requestAnimationFrame = callback => frames.push(callback);
  scroller.scrollTop = 800;
  assert.equal(reader.bridge.applyScriptChoice(99), false);
  assert.equal(scroller.scrollTop, 800, "invalid choice must not change scroll");

  assert.equal(reader.bridge.applyScriptChoice(1), true); // dead end
  assert.equal(scroller.scrollTop, 0, "dead-end scene must start at top");
  scroller.scrollTop = 600; // emulate browser scroll anchoring after DOM replacement
  frames.shift()();
  assert.equal(scroller.scrollTop, 0, "next frame must also restore the reader");

  scroller.scrollTop = 700;
  assert.equal(reader.bridge.applyScriptChoice(0), true); // retry checkpoint
  assert.equal(scroller.scrollTop, 0, "retry must start at top");
  scroller.scrollTop = 900;
  assert.equal(reader.bridge.applyScriptChoice(0), true); // normal transition
  assert.equal(scroller.scrollTop, 0, "ordinary choice must start at top");

  scroller.scrollTop = 300;
  reader.bridge.saveGame();
  assert.equal(scroller.scrollTop, 300, "saving must preserve manual scroll");
  reader.bridge.applyScriptChoice(0);
  scroller.scrollTop = 500;
  reader.bridge.loadGame();
  assert.equal(reader.bridge.getSnapshot().scene.id, "lh_gate");
  assert.equal(scroller.scrollTop, 0, "loading a scene must start at top");

  scroller.scrollTop = 400;
  reader.bridge.restartGame();
  assert.equal(reader.bridge.getSnapshot().scene.id, VN_START_SCENE);
  assert.equal(scroller.scrollTop, 0, "new campaign must start at top");
}
assert.equal(VN_SCENES.lh_prologue.contentStatus, "approved");
// Nội dung chính thức đã vào (Muse, 2026-11-06): mọi scene gắn nhãn
// "approved" tuyệt đối không được còn chữ placeholder kỹ thuật.
for (const scene of Object.values(VN_SCENES)) {
  if (scene.contentStatus === "approved") {
    assert.equal(JSON.stringify(scene).includes("[PLACEHOLDER"), false);
  }
}
const saves = new Map();
let game = launch(saves);
assert.equal(game.bridge.getSnapshot().scene.id, VN_START_SCENE);
assert.equal(game.bridge.getSnapshot().version, INITIAL_STATE.version);
assert.throws(()=>game.bridge.applyAiTurn({}, ""), /AI-GM.*tắt/);
assert.equal(game.bridge.applyScriptChoice(1), true);
assert.equal(game.bridge.getSnapshot().scene.id, "lh_dead_blade");
assert.equal(game.bridge.applyScriptChoice(0), true);
assert.equal(game.bridge.getSnapshot().scene.id, VN_START_SCENE);
assert.equal(game.bridge.applyScriptChoice(0), true);
assert.equal(game.bridge.getSnapshot().scene.id, "lh_gate");
// Mạch Hồi 1 mở rộng (Phương án B): prologue → gate → saloon → rules → hall.
game.bridge.applyScriptChoice(0);
assert.equal(game.bridge.getSnapshot().scene.id, "lh_saloon");
game.bridge.applyScriptChoice(0);
assert.equal(game.bridge.getSnapshot().scene.id, "lh_rules");
game.bridge.applyScriptChoice(0);
assert.equal(game.bridge.getSnapshot().scene.id, "lh_hall");
assert.equal(game.bridge.getSnapshot().progression.completedObjectiveIds.includes("infiltrate_villa"), true);
// Mạch Hồi 1 sau Đợt 1B: hall → lan_room → lan_talk → morning_tea →
// Mạch chính 80 cảnh (mọi lựa chọn đều lấy nhánh đầu tiên) đi liền một
// mạch tới lh_escape_begins, thử dead end đồng thuận, rồi ra cổng tới
// lh_slice_end.
for (const expected of ["lh_lan_room", "lh_lan_talk", "lh_morning_tea", "lh_garden", "lh_night_bell", "lh_night_corridor", "lh_doctor_visit", "lh_medicine_store", "lh_servants", "lh_register_room", "lh_kitchen", "lh_lan_knots", "lh_old_servant", "lh_well_anchor", "lh_lan_sleepwalk", "lh_altar", "lh_thu_nguyet_errand", "lh_market", "lh_letter", "lh_council", "lh_lan_question", "lh_anchor_bell", "lh_scout_coast", "lh_inspector_notice", "lh_eve_inspection", "lh_accident_beam", "lh_poison_tea", "lh_corridor_fight", "lh_aftermath", "lh_lan_pushback_big", "lh_retelling", "lh_kitchen_fire", "lh_hearth_anchor", "lh_storm", "lh_night_attack", "lh_blade_wound", "lh_ba_confession", "lh_lan_plan", "lh_inspector_early", "lh_ambush_well", "lh_hide_lan", "lh_first_sweep", "lh_audit_table", "lh_nghiem", "lh_certification", "lh_lan_faces", "lh_move_tonight", "lh_so_retrieval", "lh_ngoc_chi_keepsake", "lh_nghiem_offer", "lh_refusal", "lh_lockdown", "lh_servants_choose", "lh_anchor_map", "lh_lan_farewell", "lh_ba_stays", "lh_thu_nguyet_choice", "lh_escape_eve", "lh_escape_begins"]) {
  game.bridge.applyScriptChoice(0);
  assert.equal(game.bridge.getSnapshot().scene.id, expected);
}
assert.equal(game.bridge.getSnapshot().flags.vnLinks.danh, "intervened");
// Đợt sửa 2026-11-06 (P0-06/P0-08): tại lh_escape_begins mới xong 3 mục
// tiêu — break_long_hai_ritual chỉ hoàn thành khi cụm khóa cổng bị vô hiệu
// thật ở lh_gate_hold, escape_long_hai khi đoàn đã ra tới lh_coast_road.
// Hiệu ứng bắt buộc tại cảnh lh_lan_pushback_big đã trừ ký ức đúng một lần.
assert.equal(game.bridge.getSnapshot().progression.completedObjectiveIds.length, 3);
assert.equal(game.bridge.getSnapshot().campaignStats.memoryIntegrity, 92);
// Dead end đồng thuận rẽ từ lh_escape_begins: bế nàng đi không hỏi.
const beforeDead = structuredClone(game.bridge.getSnapshot());
game.bridge.applyScriptChoice(1);
assert.equal(game.bridge.getSnapshot().scene.id, "lh_dead_consent");
game.bridge.applyScriptChoice(0);
assert.equal(game.bridge.getSnapshot().scene.id, "lh_escape_begins");
assert.deepEqual(game.bridge.getSnapshot().campaignStats, beforeDead.campaignStats);
// Hỏi nàng (ask_her) rồi đánh ra cổng, khép chặng ở lh_slice_end.
game.bridge.applyScriptChoice(0);
assert.equal(game.bridge.getSnapshot().scene.id, "lh_gate_fight");
// Tại trận cổng, cả hai mục tiêu cuối vẫn chưa hoàn thành.
assert.equal(game.bridge.getSnapshot().progression.completedObjectiveIds.length, 3);
game.bridge.applyScriptChoice(0);
assert.equal(game.bridge.getSnapshot().scene.id, "lh_gate_hold");
assert.equal(game.bridge.getSnapshot().progression.completedObjectiveIds.includes("break_long_hai_ritual"), true);
game.bridge.applyScriptChoice(0);
assert.equal(game.bridge.getSnapshot().scene.id, "lh_coast_road");
for (const expected of ["lh_road_choice", "lh_last_pushback", "lh_names_price", "lh_open_road", "lh_dawn_after", "lh_names_restored", "lh_slice_end"]) {
  game.bridge.applyScriptChoice(0);
  assert.equal(game.bridge.getSnapshot().scene.id, expected);
}
// escape_long_hai hoàn thành tại lh_coast_road → engine lật chặng:
// stageId sang vung_tau và danh sách mục tiêu làm mới cho chặng mới.
assert.equal(game.bridge.getSnapshot().progression.completedObjectiveIds.length, 0);
// Đợt sửa 2026-11-06 (II.B): DANH kết thúc chặng Long Hải ở intervened —
// quyền hồ sơ của Giới Phòng trên toàn mạng chưa bị cắt.
assert.equal(game.bridge.getSnapshot().flags.vnLinks.danh, "intervened");
// 100 − 8 (phản kháng lớn, hiệu ứng bắt buộc tại cảnh) − 8 (phản kháng cuối).
assert.equal(game.bridge.getSnapshot().campaignStats.memoryIntegrity, 84);
assert.equal(game.bridge.getSnapshot().flags.lanDepartureConsent, true);
assert.equal(game.bridge.getSnapshot().progression.stageId, "vung_tau");
// Hồi 1 khép ở lh_slice_end nhưng mạch truyện đi tiếp xuống Vũng Tàu
// (phần mở đầu chặng 2, hệ thống 5 agent 2026-11-06): đúng một lựa chọn.
assert.equal(game.bridge.getSnapshot().scene.choices.length, 1);
assert.ok(JSON.parse(saves.get(AUTO_SAVE_KEY)).scene.id === "lh_slice_end");
game.bridge.saveGame();
const saved = saves.get(MANUAL_SAVE_KEY);
game = launch(saves);
// Khởi động lại có bản lưu hợp lệ: tự khôi phục đúng cảnh đã lưu (lệnh chủ
// nhân 2026-11-06), bản lưu thủ công không bị đụng tới.
assert.equal(game.bridge.getSnapshot().scene.id, "lh_slice_end");
assert.equal(saves.get(MANUAL_SAVE_KEY), saved);
game.bridge.loadGame();
assert.equal(game.bridge.getSnapshot().scene.id,"lh_slice_end");
// Phần mở đầu chặng 2 — Vũng Tàu (hệ thống 5 agent, 2026-11-06): đi tiếp
// từ lh_slice_end qua 7 cảnh vt_*, khép phần ở vt_hook.
game.bridge.applyScriptChoice(0);
assert.equal(game.bridge.getSnapshot().scene.id, "vt_arrival");
assert.equal(game.bridge.getSnapshot().scene.kicker, "HỒI I // HẠ Ô KHAI TÔNG // 1899");
for (const expected of ["vt_coffin_wharf", "vt_coal_store", "vt_ledger", "vt_first_jamming", "vt_restitution", "vt_hook"]) {
  game.bridge.applyScriptChoice(0);
  assert.equal(game.bridge.getSnapshot().scene.id, expected);
}
// Giá của lần gây nhiễu chủ động đầu tiên (hiệu ứng bắt buộc tại
// vt_first_jamming): 84 − 5 = 79. Mắt xích Nợ nhận diện tại vt_restitution.
assert.equal(game.bridge.getSnapshot().campaignStats.memoryIntegrity, 79);
assert.equal(game.bridge.getSnapshot().flags.vnLinks.no, "identified");
assert.equal(game.bridge.getSnapshot().scene.choices.length, 0);
assert.equal(game.bridge.applyScriptChoice(0), false);
// Khôi phục khi khởi động chọn bản MỚI NHẤT theo savedAt (phản biện ChatGPT
// vòng 1): bản thủ công cũ (lh_gate, t=1000) thua bản tự động mới (lh_saloon, t=2000).
const olderManual = JSON.parse(saved);
olderManual.scene.id = "lh_gate";
olderManual.savedAt = 1000;
const newerAuto = JSON.parse(saved);
newerAuto.scene.id = "lh_saloon";
newerAuto.savedAt = 2000;
saves.set(MANUAL_SAVE_KEY, JSON.stringify(olderManual));
saves.set(AUTO_SAVE_KEY, JSON.stringify(newerAuto));
game = launch(saves);
assert.equal(game.bridge.getSnapshot().scene.id, "lh_saloon");
// Đợt 1 (kết luận tranh luận 2026-11-06): ô lưu riêng + xuất/nhập file.
// Lưu ô 2 tại lh_saloon, đi tiếp một cảnh, tải ô 2 phải quay lại lh_saloon.
assert.equal(game.bridge.saveToSlot(2), true);
assert.equal(game.bridge.listSaveSlots()[1].sceneId, "lh_saloon");
assert.equal(game.bridge.applyScriptChoice(0), true);
assert.notEqual(game.bridge.getSnapshot().scene.id, "lh_saloon");
assert.equal(game.bridge.loadFromSlot(2), true);
assert.equal(game.bridge.getSnapshot().scene.id, "lh_saloon");
assert.equal(game.bridge.loadFromSlot(3), false);
// Ghi lại ô 2 sau khi tải để nó thành bản mới nhất trong gói xuất (bản tự
// động trong gói đang ở cảnh kế tiếp với dấu thời gian sớm hơn).
assert.equal(game.bridge.saveToSlot(2), true);
// Xuất gói bản lưu rồi nhập vào một môi trường trắng: khởi động tiếp tục
// được đúng tiến độ mới nhất trong gói.
const bundle = game.bridge.exportSaves();
assert.equal(JSON.parse(bundle).format, "hua-family-saves");
assert.equal(JSON.parse(bundle).slots[1].scene.id, "lh_saloon");
const freshSaves = new Map();
game = launch(freshSaves);
assert.equal(game.bridge.importSaves(bundle), true);
assert.equal(game.bridge.getSnapshot().scene.id, "lh_saloon");
// Đợt 3: backlog nguyên văn + điểm lựa chọn. Gói nhập mang runId của lượt
// chơi gốc nên backlog của lượt tạm ở prologue bị thay bằng lượt được nhập
// (backlog gắn với runId — chiến dịch mới không bao giờ thấy lịch sử cũ).
const backlogNow = game.bridge.getBacklog();
assert.deepEqual(backlogNow.map((entry) => entry.sceneId), ["lh_saloon"]);
assert.ok(backlogNow[0].narration.length > 0);
assert.equal(game.bridge.applyScriptChoice(0), true);
const backlogAfter = game.bridge.getBacklog();
assert.equal(backlogAfter[0].sceneId, "lh_saloon");
assert.ok(backlogAfter[0].choiceLabel.length > 0);
assert.equal(backlogAfter.at(-1).sceneId, "lh_rules");
// Điểm lựa chọn = cảnh quyết định gần nhất: từ lh_rules đi tiếp tới
// lh_hall (cũng 2 lựa chọn) thì điểm lựa chọn cập nhật thành lh_hall, và
// tải điểm lựa chọn đứng yên tại cảnh quyết định hiện tại.
assert.equal(game.bridge.applyScriptChoice(0), true);
assert.equal(game.bridge.getSnapshot().scene.id, "lh_hall");
assert.equal(game.bridge.loadChoiceCheckpoint(), true);
assert.equal(game.bridge.getSnapshot().scene.id, "lh_hall");
assert.equal(game.bridge.importSaves("{not-json"), false);
assert.equal(game.bridge.importSaves(JSON.stringify({ format: "other" })), false);
const old = structuredClone(INITIAL_STATE);
old.version = "campaign-v3";
old.scene.id = "origin";
saves.set(MANUAL_SAVE_KEY, JSON.stringify(old));
saves.delete(AUTO_SAVE_KEY);
// Cô lập kịch bản canon cũ: các ô lưu phụ từ khối đợt 1 phía trên không
// được rò sang (boot giờ quét cả ba ô).
saves.delete("hua-family-campaign-v4-manual-2");
saves.delete("hua-family-campaign-v4-manual-3");
game = launch(saves);
game.bridge.loadGame();
assert.equal(game.bridge.getSnapshot().scene.id,VN_START_SCENE);
const malformed = new Map([[AUTO_SAVE_KEY, "{not-json}"]]);
game = launch(malformed);
game.bridge.loadGame();
assert.equal(game.bridge.getSnapshot().scene.id, VN_START_SCENE);
for (const card of Object.values(VN_SCENES)) {
  for (const choice of card.choices || []) {
    if (!choice.retry) assert.ok(VN_SCENES[choice.next], "Broken scene link: " + choice.next);
  }
}

// ===== Đợt sửa lỗi toàn diện 2026-11-06: khóa hồi quy theo Mục VIII của
// lệnh triển khai (hash prologue, mật độ mọi đường tới được, vắng choice xe
// tang, overlay theo giới, hai nhánh Thu Nguyệt/đường bộ, effect một lần).
import { createHash } from "node:crypto";
import { resolveCompanionId } from "../src/character-overlays.js";
const prologueHash = createHash("sha256")
  .update(JSON.stringify(VN_SCENES.lh_prologue)).digest("hex");
assert.equal(prologueHash, "b65b94742f93950cea8f8babdad5830eb26b6688d96cc457221bc94ed1b226ac",
  "lh_prologue đã bị thay đổi — cảnh này khóa tuyệt đối (chủ nhân mở khóa 2026-11-06 để rà soát theo canon tính cách mới, khóa lại tại hash này)");
// Mật độ: đếm theo đúng công thức của lệnh (narration + dialogue, tách
// khoảng trắng) trên MỌI tổ hợp flags tới được của từng cảnh.
const EXCLUSIVE = [["thuNguyetEscorted","thuNguyetSolo"],["councilOath","councilQuiet"],
  ["boatPromised","boatBought"],["thuNguyetFollows","thuNguyetStays"],
  ["vtHeardInspection","vtRestedEvening"]];
function renderedWords(scene, flags) {
  let n = 0;
  const vis = (x) => (!x.if || flags.has(x.if)) && (!x.unless || !flags.has(x.unless));
  for (const item of scene.narration) {
    if (typeof item === "string") n += item.split(/\s+/).filter(Boolean).length;
    else if (vis(item)) n += item.text.split(/\s+/).filter(Boolean).length;
  }
  for (const line of scene.dialogue) if (vis(line)) n += line.text.split(/\s+/).filter(Boolean).length;
  return n;
}
for (const [sid, scene] of Object.entries(VN_SCENES)) {
  const keys = new Set();
  for (const item of scene.narration) if (typeof item === "object") keys.add(item.if || item.unless);
  for (const line of scene.dialogue) if (line.if || line.unless) keys.add(line.if || line.unless);
  keys.delete(undefined);
  const [lo, hi] = scene.deadEnd ? [700, 900] : [1200, 1400];
  const list = [...keys];
  for (let mask = 0; mask < (1 << list.length); mask++) {
    const flags = new Set(list.filter((_, i) => mask & (1 << i)));
    if (EXCLUSIVE.some(([a, b]) => flags.has(a) && flags.has(b))) continue;
    const w = renderedWords(scene, flags);
    assert.ok(w >= lo && w <= hi, `${sid}: ${w} từ ngoài dải ${lo}–${hi} (flags: ${[...flags]})`);
  }
}
// P0-12: choice xe tang đã xóa; choice thay thế đặt đúng flag.
for (const scene of Object.values(VN_SCENES))
  for (const choice of scene.choices || [])
    assert.notEqual(choice.id, "use_their_carriage");
const delayChoice = VN_SCENES.lh_move_tonight.choices.find((c) => c.id === "delay_the_carriage");
assert.ok(delayChoice && delayChoice.flags && delayChoice.flags.carriageDelayed === true);
// G01–G06: companion resolve đúng giới/vai trên sân khấu.
assert.equal(resolveCompanionId(VN_SCENES.lh_saloon), "steward");
assert.equal(resolveCompanionId(VN_SCENES.lh_rules), "steward");
assert.equal(resolveCompanionId(VN_SCENES.lh_certification), "pham_dinh_nghiem");
assert.equal(resolveCompanionId({ companions: [], dialogue: [{ speaker: "Người gác", text: "x" }] }), "npc_servant_male");
assert.equal(resolveCompanionId({ companions: [], dialogue: [{ speaker: "Quản gia", text: "x" }] }), "steward");
// Đi bộ các nhánh: dùng lại mạch chính, ghi đè lựa chọn tại điểm rẽ.
const MAIN_CHAIN = ["lh_gate","lh_saloon","lh_rules","lh_hall","lh_lan_room","lh_lan_talk","lh_morning_tea","lh_garden","lh_night_bell","lh_night_corridor","lh_doctor_visit","lh_medicine_store","lh_servants","lh_register_room","lh_kitchen","lh_lan_knots","lh_old_servant","lh_well_anchor","lh_lan_sleepwalk","lh_altar","lh_thu_nguyet_errand","lh_market","lh_letter","lh_council","lh_lan_question","lh_anchor_bell","lh_scout_coast","lh_inspector_notice","lh_eve_inspection","lh_accident_beam","lh_poison_tea","lh_corridor_fight","lh_aftermath","lh_lan_pushback_big"];
function walk(overrides, tail) {
  const g = launch(new Map());
  assert.equal(g.bridge.getSnapshot().scene.id, "lh_prologue");
  for (const expected of [...MAIN_CHAIN, ...tail]) {
    const current = g.bridge.getSnapshot().scene.id;
    g.bridge.applyScriptChoice(overrides[current] ?? 0);
    assert.equal(g.bridge.getSnapshot().scene.id, expected);
  }
  return g;
}
// Nhánh nghỉ trước: cảnh mới lh_retelling_rest, ký ức −8 đúng một lần kể cả
// sau save/load tại cảnh đó.
{
  const g = walk({ lh_lan_pushback_big: 1 }, ["lh_retelling_rest"]);
  assert.equal(g.bridge.getSnapshot().campaignStats.memoryIntegrity, 92);
  g.bridge.saveGame();
  g.bridge.loadGame();
  assert.equal(g.bridge.getSnapshot().scene.id, "lh_retelling_rest");
  assert.equal(g.bridge.getSnapshot().campaignStats.memoryIntegrity, 92);
}
// Nhánh Thu Nguyệt ở lại: thuyền ba người. Nhánh đi theo: bốn người.
// Nhánh đường bộ: đoạn xe cỏ xuất hiện ở lh_last_pushback.
const TAIL_DEFAULT = ["lh_retelling","lh_kitchen_fire","lh_hearth_anchor","lh_storm","lh_night_attack","lh_blade_wound","lh_ba_confession","lh_lan_plan","lh_inspector_early","lh_ambush_well","lh_hide_lan","lh_first_sweep","lh_audit_table","lh_nghiem","lh_certification","lh_lan_faces","lh_move_tonight","lh_so_retrieval","lh_ngoc_chi_keepsake","lh_nghiem_offer","lh_refusal","lh_lockdown","lh_servants_choose","lh_anchor_map","lh_lan_farewell","lh_ba_stays","lh_thu_nguyet_choice","lh_escape_eve","lh_escape_begins","lh_gate_fight","lh_gate_hold","lh_coast_road","lh_road_choice","lh_last_pushback","lh_names_price","lh_open_road","lh_dawn_after","lh_names_restored","lh_slice_end"];
{
  // Đi bộ tới lh_names_restored với lựa chọn Thu Nguyệt ghi đè tại điểm rẽ.
  function walkToRestored(thuNguyetChoice) {
    const g = launch(new Map());
    assert.equal(g.bridge.getSnapshot().scene.id, "lh_prologue");
    const chain = [...MAIN_CHAIN, ...TAIL_DEFAULT.slice(0, -1)];
    for (const expected of chain) {
      const current = g.bridge.getSnapshot().scene.id;
      g.bridge.applyScriptChoice((current === "lh_thu_nguyet_choice") ? thuNguyetChoice : 0);
      assert.equal(g.bridge.getSnapshot().scene.id, expected);
    }
    return g.bridge.getSnapshot().scene.narration.join(" ");
  }
  assert.ok(walkToRestored(1).includes("ba người trên thuyền"), "nhánh ở lại phải kể thuyền ba người");
  assert.ok(walkToRestored(0).includes("bốn người"), "nhánh đi theo phải kể thuyền bốn người");
  const cart = launch(new Map());
  const chainCart = [...MAIN_CHAIN, ...TAIL_DEFAULT.slice(0, TAIL_DEFAULT.indexOf("lh_last_pushback") + 1)];
  for (const expected of chainCart) {
    const current = cart.bridge.getSnapshot().scene.id;
    cart.bridge.applyScriptChoice((current === "lh_road_choice") ? 1 : 0);
    assert.equal(cart.bridge.getSnapshot().scene.id, expected);
  }
  assert.ok(cart.bridge.getSnapshot().scene.narration.join(" ").includes("hết an toàn"),
    "nhánh đường bộ phải có đoạn chuyển tuyến xe cỏ");
}
console.log("VN scene contract and session passed: deterministic scenes, five Long Hai objectives, dead-end rollback, versioned save, AI disabled.");
