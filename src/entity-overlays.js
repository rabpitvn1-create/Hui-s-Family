// Danh mục Thực Thể hiện hình trên Snapshot.
//
// Lệnh chủ nhân 2026-11-06: BỎ ảnh thực thể đầu tiên (entity-01, hình
// người gầy dài tay) — thực thể của nhà họ Hứa là GIA NHÂN BỊ LÂY NHIỄM:
// người làm trong phủ bị mạng lưới chiếm, mắt trắng dã, áo bà ba rách
// nát dính máu, có kẻ cầm cuốc/cầm dao. Bộ 5 ảnh chủ nhân gửi trực tiếp,
// nền đen đã được tách thành alpha thật (flood-fill từ biên + bảo vệ
// vùng tối nội thất), chuyển WebP ≤ 250 KB.
//
// Cảnh VN khai báo entity: "<id>" để chọn đúng gương mặt cho nhịp truyện,
// hoặc entity: true để dùng ảnh mặc định.
export const ENTITY_OVERLAYS = Object.freeze({
  entity_guard: "assets/overlay/entity-guard.webp",
  entity_hoe: "assets/overlay/entity-hoe.webp",
  entity_blade: "assets/overlay/entity-blade.webp",
  entity_claw: "assets/overlay/entity-claw.webp",
  entity_maid: "assets/overlay/entity-maid.webp",
  entity_maid2: "assets/overlay/entity-maid2.webp",
  entity_youth: "assets/overlay/entity-youth.webp"
});

const DEFAULT_ENTITY_ID = "entity_guard";

// entity có thể là true (mặc định), một id trong ENTITY_OVERLAYS, hoặc
// trống/false (không hiện). Trả về đường dẫn ảnh hoặc "" khi không hiện.
export function resolveEntitySrc(entity) {
  if (typeof entity === "string" && Object.hasOwn(ENTITY_OVERLAYS, entity)) {
    return ENTITY_OVERLAYS[entity];
  }
  if (entity) return ENTITY_OVERLAYS[DEFAULT_ENTITY_ID];
  return "";
}

// Bảng tên trên đầu Thực Thể ở Snapshot: gia nhân bị mạng lưới khống chế.
export const ENTITY_DISPLAY_NAMES = Object.freeze({
  entity_guard: "Gia nhân bị khống chế",
  entity_hoe: "Gia nhân bị khống chế",
  entity_blade: "Gia nhân bị khống chế",
  entity_claw: "Gia nhân bị khống chế",
  entity_maid: "Gia nhân bị khống chế",
  entity_maid2: "Gia nhân bị khống chế",
  entity_youth: "Gia nhân bị khống chế"
});

export function resolveEntityId(entity) {
  if (typeof entity === "string" && Object.hasOwn(ENTITY_OVERLAYS, entity)) return entity;
  if (entity) return DEFAULT_ENTITY_ID;
  return "";
}
