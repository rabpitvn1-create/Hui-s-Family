export const SCENE_BACKGROUNDS = Object.freeze({
  // Chặng 2 (Vũng Tàu): ảnh riêng chưa sản xuất — tạm dùng ảnh nền hiện có
  // gần nhất làm giữ chỗ, thay khi có ảnh của tuyến Phúc Thọ.
  "vung-tau-roadstead": "assets/snapshots/long-hai-coast.webp",
  "coffin-wharf": "assets/snapshots/long-hai-exterior.webp",
  "coal-store": "assets/snapshots/medicine-store.webp",
  "long-hai-exterior": "assets/snapshots/long-hai-exterior.webp",
  "long-hai-corridor": "assets/snapshots/long-hai-corridor.webp",
  "tieu-lan-room": "assets/snapshots/tieu-lan-room.webp",
  "van-hoa-lau": "assets/snapshots/van-hoa-lau.webp",
  "long-hai-saloon": "assets/snapshots/long-hai-saloon.webp",
  "long-hai-dawn-gate": "assets/snapshots/long-hai-dawn-gate.webp",
  "long-hai-coast": "assets/snapshots/long-hai-coast.webp",
  "medicine-store": "assets/snapshots/medicine-store.webp",
  "altar-hall": "assets/snapshots/altar-hall.webp",
  "kitchen": "assets/snapshots/kitchen.webp",
  "register-room": "assets/snapshots/register-room.webp",
  "storm-coast": "assets/snapshots/storm-coast.webp",
  "long-hai-market": "assets/snapshots/long-hai-market.webp"
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
