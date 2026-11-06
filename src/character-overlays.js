// LIBERA-1899: overlay nhân vật phụ cho khung Snapshot.
// Nhân vật có tên dùng overlay riêng; người vô danh dùng mẫu "?" chung.
// Cách scene khai báo người xuất hiện:
//   1) scene.companions: ["ba_nam_lien"] — khai báo tường minh, ưu tiên cao nhất;
//   2) nếu không khai báo, suy ra từ dialogue[].speaker của nhân vật có tên.
// Người vô danh KHÔNG tự suy ra từ speaker — scene phải khai báo companions
// để chọn đúng mẫu (gia nhân nữ / gia nhân lớn tuổi / phu gánh).
export const CHARACTER_OVERLAYS = Object.freeze({
  "ba_nam_lien": "assets/overlay/ba-nam-lien.webp",
  "le_thu_nguyet": "assets/overlay/le-thu-nguyet.webp",
  "npc_servant_male": "assets/overlay/npc-servant-male.webp",
  "npc_servant_female": "assets/overlay/npc-servant-female.webp",
  "npc_servant_elder": "assets/overlay/npc-servant-elder.webp",
  "npc_porter": "assets/overlay/npc-porter.webp",
  "pham_dinh_nghiem": "assets/overlay/pham-dinh-nghiem.webp",
  "npc_fisherman": "assets/overlay/npc-fisherman.webp",
  "npc_doctor": "assets/overlay/npc-doctor.webp",
  "npc_official": "assets/overlay/npc-official.webp"
});

// Tên người nói (đã bỏ dấu, viết thường) → id overlay, chỉ cho nhân vật có tên.
const SPEAKER_OVERLAYS = Object.freeze({
  "ba nam lien": "ba_nam_lien",
  "le thu nguyet": "le_thu_nguyet",
  "thu nguyet": "le_thu_nguyet",
  "pham dinh nghiem": "pham_dinh_nghiem",
  "thay thuoc": "npc_doctor",
  "ngu ong": "npc_fisherman",
  "pho kiem": "npc_official",
  "nguoi cua gioi phong": "npc_official"
});

const COMBINING_MARKS = new RegExp("[\\u0300-\\u036f]", "g");

function normalizeSpeaker(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(COMBINING_MARKS, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .trim();
}

export function resolveCompanionId(scene) {
  const declared = Array.isArray(scene?.companions) ? scene.companions : [];
  for (const id of declared) {
    if (Object.hasOwn(CHARACTER_OVERLAYS, id)) return id;
  }
  const dialogue = Array.isArray(scene?.dialogue) ? scene.dialogue : [];
  for (const line of dialogue) {
    const id = SPEAKER_OVERLAYS[normalizeSpeaker(line?.speaker)];
    if (id) return id;
  }
  return null;
}
