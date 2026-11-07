import assert from "node:assert/strict";
import { initGameStart } from "../src/game-start.js";

function setup({ request, webkitRequest, fullscreen = false, native = false, enterFullscreen } = {}) {
  let click;
  let starts = 0;
  let focused = false;
  const screen = { hidden: false };
  const shell = { hidden: true };
  const button = { disabled: false, addEventListener(type, handler) {
    assert.equal(type, "click");
    click = handler;
  } };
  const elements = {
    "#start-screen": screen,
    "#game-shell": shell,
    "#start-game-button": button,
    "#story-panel": { focus() { focused = true; } }
  };
  globalThis.window = { HuaAndroid: native ? { enterFullscreen: enterFullscreen || (() => {}) } : undefined };
  globalThis.document = {
    documentElement: { requestFullscreen: request, webkitRequestFullscreen: webkitRequest },
    fullscreenElement: fullscreen ? {} : null,
    querySelector: (selector) => elements[selector]
  };
  initGameStart(() => {
    assert.equal(screen.hidden, true);
    assert.equal(shell.hidden, false);
    starts += 1;
  });
  return { screen, shell, button, click: () => click(), starts: () => starts, focused: () => focused };
}

let requests = 0;
let finishFullscreen;
const game = setup({ request(options) {
  requests += 1;
  assert.equal(this, document.documentElement);
  assert.deepEqual(options, { navigationUI: "hide" });
  return new Promise((resolve) => { finishFullscreen = resolve; });
} });
assert.equal(game.starts(), 0);
assert.equal(requests, 0);
assert.equal(game.shell.hidden, true);
const starting = game.click();
assert.equal(requests, 1, "Fullscreen must be requested synchronously in the click gesture.");
assert.equal(game.starts(), 0, "Wait for the fullscreen request before starting.");
assert.equal(game.button.disabled, true);
await game.click();
assert.equal(requests, 1, "Repeated clicks must not make duplicate requests.");
finishFullscreen();
await starting;
assert.equal(game.starts(), 1);
assert.equal(game.focused(), true);
await game.click();
assert.equal(game.starts(), 1, "The game must initialize only once.");

let nativeRequests = 0;
for (const options of [
  {},
  { request: () => Promise.reject(new Error("Fullscreen denied")) },
  { request: () => { throw new Error("Fullscreen unavailable"); } },
  { native: true, enterFullscreen: () => { throw new Error("Old native bridge"); }, request: () => { requests += 1; } },
  { webkitRequest: () => { requests += 1; } },
  { fullscreen: true, request: () => assert.fail("Already in fullscreen") },
  { native: true, enterFullscreen: () => { nativeRequests += 1; }, request: () => assert.fail("Native bridge must own fullscreen") }
]) {
  const fallback = setup(options);
  assert.equal(fallback.starts(), 0);
  await fallback.click();
  assert.equal(fallback.starts(), 1);
  assert.equal(fallback.screen.hidden, true);
  assert.equal(fallback.shell.hidden, false);
}
assert.equal(requests, 3, "The browser fallback must work if the native bridge throws.");
assert.equal(nativeRequests, 1, "Native APK must request immersive mode on Start Game.");

console.log("Game start check passed: wait for Start, request fullscreen from the click, initialize once and keep playing when fullscreen is unavailable.");
