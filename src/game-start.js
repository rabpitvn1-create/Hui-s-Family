export function initGameStart(startGame) {
  const screen = document.querySelector("#start-screen");
  const button = document.querySelector("#start-game-button");
  const shell = document.querySelector("#game-shell");
  let started = false;

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
