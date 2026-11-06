import { initMissionInterface } from "./ui-shell.js";
import { initGame } from "./game.js";
import { initDialogueAvatars } from "./dialogue-avatars.js";
import { initCharacterSnapshot } from "./character-snapshot.js";
import { initCharacterProfiles } from "./character-profiles.js";
import { initGameStart } from "./game-start.js";

initGameStart(() => {
  initMissionInterface();
  initDialogueAvatars();
  initCharacterSnapshot();
  initCharacterProfiles();
  const bridge = initGame();
  // AI-GM intentionally disabled: VN choices are played by initGame().
});
