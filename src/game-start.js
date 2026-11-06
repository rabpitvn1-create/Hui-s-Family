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

    // Request directly inside the button gesture, before any asynchronous work.
    const root = document.documentElement;
    if (!window.HuaAndroid && !document.fullscreenElement && !document.webkitFullscreenElement) {
      try {
        if (typeof root.requestFullscreen === "function") {
          await root.requestFullscreen({ navigationUI: "hide" });
        } else if (typeof root.webkitRequestFullscreen === "function") {
          await root.webkitRequestFullscreen();
        }
      } catch {
        // Browsers may deny fullscreen. The player can still start normally.
      }
    }

    screen.hidden = true;
    shell.hidden = false;
    startGame();
    document.querySelector("#story-panel")?.focus({ preventScroll: true });
  });
}
