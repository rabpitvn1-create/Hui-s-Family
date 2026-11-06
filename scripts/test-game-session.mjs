import assert from "node:assert/strict";
import { initGame } from "../src/game.js";
import { INITIAL_STATE } from "../src/world-canon.js";
import { VN_SCENES, VN_START_SCENE } from "../src/vn-scenes.js";
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
assert.equal(game.bridge.getSnapshot().scene.id, "lh_hall");
assert.equal(game.bridge.getSnapshot().progression.completedObjectiveIds.includes("infiltrate_villa"), true);
game.bridge.applyScriptChoice(0);
game.bridge.applyScriptChoice(0);
game.bridge.applyScriptChoice(0);
game.bridge.applyScriptChoice(0);
assert.equal(game.bridge.getSnapshot().scene.id, "lh_depart");
assert.equal(game.bridge.getSnapshot().progression.completedObjectiveIds.length, 4);
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
for (const card of Object.values(VN_SCENES)) {
  for (const choice of card.choices || []) {
    if (!choice.retry) assert.ok(VN_SCENES[choice.next], "Broken scene link: " + choice.next);
  }
}
console.log("VN session passed: deterministic scenes, five Long Hai objectives, dead-end rollback, versioned save, AI disabled.");
