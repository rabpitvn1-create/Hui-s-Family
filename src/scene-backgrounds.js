export const SCENE_BACKGROUNDS = Object.freeze({
  // Chặng 2 (Vũng Tàu): ảnh riêng chưa sản xuất — tạm dùng ảnh nền hiện có
  // gần nhất làm giữ chỗ, thay khi có ảnh của tuyến Phúc Thọ.
  "vung-tau-roadstead": "assets/snapshots/long-hai-coast.webp",
  // Kỳ IV (hệ 9 agent, 2026-11-07): bến quan tài có art chuyên dụng —
  // đổi ánh xạ khỏi bản giữ chỗ long-hai-exterior (không đổi
  // backgroundId trong bất kỳ cảnh nào).
  "coffin-wharf": "assets/snapshots/coffin-wharf.webp",
  "coal-store": "assets/snapshots/medicine-store.webp",
  // Kỳ IV (hệ 9 agent, 2026-11-07): bốn nền mới — sân phân đàn Tam
  // Giang (IV37–IV44 + cầu Kỳ V), cửa sông Cần Giờ (IV36/39/41), chợ
  // Long Hải sau cháy (IV28/29), khúc sông phục kích (IV12/13/15/20 —
  // trước đây id này CHƯA có trong bảng, cảnh sẽ trống nền).
  "tam-giang-branch-yard": "assets/snapshots/tam-giang-branch-yard.webp",
  "can-gio-estuary": "assets/snapshots/can-gio-estuary.webp",
  "long-hai-burned-market": "assets/snapshots/long-hai-burned-market.webp",
  "river-ambush-bend": "assets/snapshots/river-ambush-bend.webp",
  // Kỳ II (hệ 5 agent, 2026-11-07): ảnh riêng sản xuất ở Kỳ III (hệ 9
  // agent, bước 8) — tàu quan tài / sân Phúc Thọ đã có art thật.
  "river-coffin-ship": "assets/snapshots/river-coffin-ship.webp",
  "phuc-tho-tang-quan-yard": "assets/snapshots/phuc-tho-tang-quan-yard.webp",
  // Kỳ III (hệ 9 agent, 2026-11-07): bốn nền đạo quán Hạ Ô Môn, art thật.
  "ha-o-assembly-yard": "assets/snapshots/ha-o-assembly-yard.webp",
  "ha-o-scripture-hall": "assets/snapshots/ha-o-scripture-hall.webp",
  "ha-o-spirit-field": "assets/snapshots/ha-o-spirit-field.webp",
  "ha-o-spirit-spring": "assets/snapshots/ha-o-spirit-spring.webp",
  // Kỳ I (hệ 9 agent, 2026-11-07): ảnh riêng cho hai cảnh gieo mầm —
  // trạm cân bến cá nhỏ (I01) và đường đất ven biển lúc rạng sáng (I06).
  "long-hai-fish-wharf": "assets/snapshots/long-hai-fish-wharf.webp",
  "long-hai-coastal-road": "assets/snapshots/long-hai-coastal-road.webp",
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
