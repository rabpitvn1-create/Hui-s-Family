import assert from "node:assert/strict";
import { initGame } from "../src/game.js";
import { INITIAL_STATE } from "../src/world-canon.js";

const AUTO_SAVE_KEY = "hua-family-campaign-v3-auto";
const MANUAL_SAVE_KEY = "hua-family-campaign-v3-manual";

class Element extends EventTarget {
  children = [];
  textContent = "";
  append(...children) { this.children.push(...children); }
  replaceChildren(...children) { this.children = children; }
  click() { this.dispatchEvent(new Event("click")); }
}

function launchGame(saves) {
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
    getItem: (key) => saves.get(key) ?? null,
    setItem: (key, value) => saves.set(key, String(value)),
    removeItem: (key) => saves.delete(key)
  };
  const bridge = initGame();
  return { bridge, elements };
}

function savedCampaign(turn, title) {
  const state = structuredClone(INITIAL_STATE);
  state.turn = turn;
  state.scene.title = title;
  state.history = [{ turn, action: "Quan sát", summary: title }];
  return JSON.stringify(state);
}

function assertFresh(bridge) {
  const snapshot = bridge.getSnapshot();
  assert.equal(snapshot.turn, INITIAL_STATE.turn);
  assert.equal(snapshot.scene.title, INITIAL_STATE.scene.title);
  assert.deepEqual(snapshot.recentHistory, INITIAL_STATE.history);
}

const auto = savedCampaign(7, "Bản tự lưu cũ");
const manual = savedCampaign(4, "Bản lưu thủ công cũ");
const saves = new Map([[AUTO_SAVE_KEY, auto], [MANUAL_SAVE_KEY, manual]]);
let game = launchGame(saves);
assertFresh(game.bridge);
assert.equal(saves.get(AUTO_SAVE_KEY), auto, "Opening the game must preserve the old autosave.");
assert.equal(saves.get(MANUAL_SAVE_KEY), manual, "Opening the game must preserve the manual save.");

game.elements.get("#load-button").click();
assert.equal(game.bridge.getSnapshot().turn, 4);
assert.equal(game.bridge.getSnapshot().scene.title, "Bản lưu thủ công cũ");

game = launchGame(saves);
assertFresh(game.bridge);
saves.delete(MANUAL_SAVE_KEY);
game.elements.get("#load-button").click();
assert.equal(game.bridge.getSnapshot().turn, 7, "Load must fall back to the autosave.");

game = launchGame(saves);
assertFresh(game.bridge);
game.bridge.applyAiTurn({
  narration: "Cao Minh quan sát hành lang.",
  choices: ["Quan sát", "Lắng nghe", "Tiến lên"],
  summary: "Đã quan sát hành lang."
}, "Quan sát");
assert.equal(game.bridge.getSnapshot().turn, INITIAL_STATE.turn + 1);
assert.equal(JSON.parse(saves.get(AUTO_SAVE_KEY)).turn, INITIAL_STATE.turn + 1);
game.elements.get("#save-button").click();
assert.equal(JSON.parse(saves.get(MANUAL_SAVE_KEY)).turn, INITIAL_STATE.turn + 1);
game = launchGame(saves);
assertFresh(game.bridge);
game.elements.get("#load-button").click();
assert.equal(game.bridge.getSnapshot().turn, INITIAL_STATE.turn + 1);

game = launchGame(new Map());
assertFresh(game.bridge);
game.elements.get("#load-button").click();
assertFresh(game.bridge);

const brokenSaves = new Map([[AUTO_SAVE_KEY, "invalid JSON"]]);
game = launchGame(brokenSaves);
assertFresh(game.bridge);
assert.equal(brokenSaves.get(AUTO_SAVE_KEY), "invalid JSON");

console.log("Game session check passed: every launch starts fresh, old saves survive startup and load only on request, saving still works.");
