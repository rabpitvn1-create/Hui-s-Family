// Fullscreen must be requested inside the player's click gesture.
// On Android APK, the native WebView host owns the system bars.
export function requestGameFullscreen() {
  const native = window.HuaAndroid;
  if (native && typeof native.enterFullscreen === "function") {
    try {
      native.enterFullscreen();
      return Promise.resolve();
    } catch {
      // An older/broken native bridge should not block the browser fallback.
    }
  }

  if (document.fullscreenElement || document.webkitFullscreenElement) {
    return Promise.resolve();
  }

  const root = document.documentElement;
  try {
    if (typeof root.requestFullscreen === "function") {
      return Promise.resolve(root.requestFullscreen({ navigationUI: "hide" }))
        .catch(() => {
          // Embedded browsers may disallow fullscreen. Keep the game playable.
        });
    }
    if (typeof root.webkitRequestFullscreen === "function") {
      return Promise.resolve(root.webkitRequestFullscreen())
        .catch(() => {});
    }
  } catch {
    // Fullscreen may be unavailable; continue to the game in that case.
  }
  return Promise.resolve();
}

export function initGameStart(startGame) {
  const screen = document.querySelector("#start-screen");
  const button = document.querySelector("#start-game-button");
  const shell = document.querySelector("#game-shell");
  let started = false;

  // Có bản lưu thì nút bắt đầu là lời mời tiếp tục (việc khôi phục do
  // initGame xử lý); không có thì giữ "Bắt đầu game".
  try {
    if (window.localStorage.getItem("hua-family-campaign-v4-manual")
      || window.localStorage.getItem("hua-family-campaign-v4-auto")) {
      button.textContent = "Tiếp tục chơi";
    }
  } catch {
    // localStorage bị chặn: giữ nhãn mặc định.
  }

  button.addEventListener("click", async () => {
    if (started) return;
    started = true;
    button.disabled = true;

    // Do not put another await/timeout before this call: web browsers
    // require transient user activation for the Fullscreen API.
    await requestGameFullscreen();

    screen.hidden = true;
    shell.hidden = false;
    startGame();
    document.querySelector("#story-panel")?.focus({ preventScroll: true });
  });
}
