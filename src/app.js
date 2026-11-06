import { initMissionInterface } from "./ui-shell.js";
import { initGame } from "./game.js";
import { initDialogueAvatars } from "./dialogue-avatars.js";
import { initCharacterSnapshot } from "./character-snapshot.js";
import { initGameStart } from "./game-start.js";

initGameStart(() => {
  initMissionInterface();
  initDialogueAvatars();
  initCharacterSnapshot();
  const bridge = initGame();
  // AI-GM intentionally disabled: VN choices are played by initGame().
});
