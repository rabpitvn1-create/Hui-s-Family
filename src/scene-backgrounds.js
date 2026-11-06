export const SCENE_BACKGROUNDS = Object.freeze({
  "long-hai-exterior": "assets/snapshots/long-hai-exterior.webp",
  "long-hai-corridor": "assets/snapshots/long-hai-corridor.webp",
  "tieu-lan-room": "assets/snapshots/tieu-lan-room.webp",
  "van-hoa-lau": "assets/snapshots/van-hoa-lau.webp",
  "long-hai-saloon": "assets/snapshots/long-hai-saloon.webp",
  "long-hai-dawn-gate": "assets/snapshots/long-hai-dawn-gate.webp",
  "long-hai-coast": "assets/snapshots/long-hai-coast.webp"
});

export function resolveSceneBackground(snapshot = {}) {
  const explicit = snapshot.scene?.backgroundId;
  if (explicit === "none") return "";
  if (Object.hasOwn(SCENE_BACKGROUNDS, explicit)) return explicit;
  if (snapshot.progression?.stageId !== "long_hai") return "";
  // Compatibility for older saves: use the actual location, never narration
  // that may merely mention a room the player has not entered.
  const location = String(snapshot.currentLocation || "").normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "").toLowerCase();
  if (/(phong|buong).*(tieu lan)|tieu lan.*(phong|buong)/.test(location)) return "tieu-lan-room";
  if (/hanh lang|corridor/.test(location)) return "long-hai-corridor";
  if (/ngoai|san|cong|vuon|long hai, nam ky/.test(location)) return "long-hai-exterior";
  return "";
}
