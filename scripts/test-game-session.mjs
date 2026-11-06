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
// garden → night_bell → night_corridor → doctor_visit → servants →
// ritual → depart (mọi lựa chọn đều lấy nhánh đầu tiên).
for (const expected of ["lh_lan_room", "lh_lan_talk", "lh_morning_tea", "lh_garden", "lh_night_bell", "lh_night_corridor", "lh_doctor_visit", "lh_servants", "lh_ritual"]) {
  game.bridge.applyScriptChoice(0);
  assert.equal(game.bridge.getSnapshot().scene.id, expected);
}
game.bridge.applyScriptChoice(0);
assert.equal(game.bridge.getSnapshot().scene.id, "lh_depart");
assert.equal(game.bridge.getSnapshot().progression.completedObjectiveIds.length, 4);
assert.equal(game.bridge.getSnapshot().flags.vnLinks.danh, "identified");
assert.equal(game.bridge.getSnapshot().campaignStats.memoryIntegrity, 97);
const beforeDead = structuredClone(game.bridge.getSnapshot());
game.bridge.applyScriptChoice(1);
assert.equal(game.bridge.getSnapshot().scene.id, "lh_dead_consent");
game.bridge.applyScriptChoice(0);
assert.equal(game.bridge.getSnapshot().scene.id, "lh_depart");
assert.deepEqual(game.bridge.getSnapshot().campaignStats, beforeDead.campaignStats);
game.bridge.applyScriptChoice(0);
assert.equal(game.bridge.getSnapshot().scene.id, "lh_slice_end");
assert.equal(game.bridge.getSnapshot().flags.lanDepartureConsent, true);
assert.equal(game.bridge.getSnapshot().progression.stageId, "vung_tau");
assert.equal(game.bridge.getSnapshot().scene.choices.length, 0);
assert.equal(game.bridge.applyScriptChoice(0), false);
assert.ok(JSON.parse(saves.get(AUTO_SAVE_KEY)).scene.id === "lh_slice_end");
game.bridge.saveGame();
const saved = saves.get(MANUAL_SAVE_KEY);
game = launch(saves);
assert.equal(game.bridge.getSnapshot().scene.id, VN_START_SCENE);
assert.equal(saves.get(MANUAL_SAVE_KEY), saved);
game.bridge.loadGame();
assert.equal(game.bridge.getSnapshot().scene.id,"lh_slice_end");
const old = structuredClone(INITIAL_STATE);
old.version = "campaign-v3";
old.scene.id = "origin";
saves.set(MANUAL_SAVE_KEY, JSON.stringify(old));
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
console.log("VN scene contract and session passed: deterministic scenes, five Long Hai objectives, dead-end rollback, versioned save, AI disabled.");
