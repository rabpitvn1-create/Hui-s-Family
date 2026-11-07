// LIBERA-1899: overlay nhân vật phụ cho khung Snapshot.
// Nhân vật có tên dùng overlay riêng; người vô danh dùng mẫu khuôn mặt người thường chung.
// Cách scene khai báo người xuất hiện:
//   1) scene.companions: ["ba_nam_lien"] — khai báo tường minh, ưu tiên cao nhất;
//   2) nếu không khai báo, suy ra từ dialogue[].speaker của nhân vật có tên.
// Người vô danh KHÔNG tự suy ra từ speaker — scene phải khai báo companions
// để chọn đúng mẫu (gia nhân nữ / gia nhân lớn tuổi / phu gánh).
export const CHARACTER_OVERLAYS = Object.freeze({
  "ba_nam_lien": "assets/overlay/ba-nam-lien.webp",
  "ba_bay": "assets/overlay/ba-bay.webp",
  "le_thu_nguyet": "assets/overlay/le-thu-nguyet.webp",
  "npc_servant_male": "assets/overlay/npc-servant-male.webp",
  "npc_servant_female": "assets/overlay/npc-servant-female.webp",
  "npc_servant_elder": "assets/overlay/npc-servant-elder.webp",
  "npc_servant_elder_male": "assets/overlay/npc-servant-elder-male.webp",
  "npc_porter": "assets/overlay/npc-porter.webp",
  "pham_dinh_nghiem": "assets/overlay/pham-dinh-nghiem.webp",
  "npc_fisherman": "assets/overlay/npc-fisherman.webp",
  "npc_doctor": "assets/overlay/npc-doctor.webp",
  "npc_official": "assets/overlay/npc-official.webp",
  "steward": "assets/overlay/steward.webp",
  // Kỳ I (hệ 9 agent, 2026-11-07): overlay riêng cho năm nhân vật có tên
  // của tuyến Bách Trảo/chợ Long Hải, gieo ở Kỳ I, dùng tiếp Kỳ III–IV.
  "cai_lam": "assets/overlay/cai-lam.webp",
  "bay_luoc": "assets/overlay/bay-luoc.webp",
  "ly_kha": "assets/overlay/ly-kha.webp",
  "tran_thi_men": "assets/overlay/tran-thi-men.webp",
  "ba_chin_lai": "assets/overlay/ba-chin-lai.webp",
  // Gói OPTIONAL Kỳ I (2026-11-07): năm overlay còn lại của Kỳ I. Cả năm
  // đều đăng ký ở đây; chỉ ba người có khóa speaker (xem SPEAKER_OVERLAYS),
  // Nguyễn Văn Nhân và Bốn Mọc đăng ký chờ, chưa map.
  "ba_suong": "assets/overlay/ba-suong.webp",
  "ky_luong": "assets/overlay/ky-luong.webp",
  "chau_van_loi": "assets/overlay/chau-van-loi.webp",
  "nguyen_van_nhan": "assets/overlay/nguyen-van-nhan.webp",
  "bon_moc": "assets/overlay/bon-moc.webp"
});

// Tên người nói (đã bỏ dấu, viết thường) → id overlay, chỉ cho nhân vật có tên.
const SPEAKER_OVERLAYS = Object.freeze({
  "ba nam lien": "ba_nam_lien",
  "ba bay": "ba_bay",
  "le thu nguyet": "le_thu_nguyet",
  "thu nguyet": "le_thu_nguyet",
  "pham dinh nghiem": "pham_dinh_nghiem",
  "truong ba hoe": "npc_porter",
  "ta van do": "npc_servant_male",
  "thay thuoc": "npc_doctor",
  "ngu ong": "npc_fisherman",
  "pho kiem": "npc_official",
  "nguoi cua gioi phong": "npc_official",
  "quan gia": "steward",
  "quan gia hua gia": "steward",
  "lao boc": "npc_servant_elder_male",
  "quan kho": "npc_servant_elder_male",
  "lao thu ky": "npc_servant_elder_male",
  "ong ba luoi": "npc_fisherman",
  "nguoi gac": "npc_servant_male",
  "nguoi phu": "npc_porter",
  "anh thoi": "npc_porter",
  // Kỳ I (hệ 9 agent, 2026-11-07): năm nhân vật có tên có overlay riêng.
  "cai lam": "cai_lam",
  "bay luoc": "bay_luoc",
  "ly kha": "ly_kha",
  "tran thi men": "tran_thi_men",
  "ba chin lai": "ba_chin_lai",
  // Gói OPTIONAL Kỳ I (2026-11-07): Bà Sương / Ký Lương / Châu Văn Lợi
  // ĐÃ map (mô phỏng sân khấu xác nhận không phá cảnh nào đã phát hành:
  // Bà Sương chiếm ô I01 đúng thiết kế; I03 vẫn thuộc Lý Kha; I05 vẫn
  // thuộc Bà Chín Lãi). Nguyễn Văn Nhân và Bốn Mọc vẫn CHƯA map:
  // Nhân map vào I04 sẽ chiếm ô toàn cảnh (4 dòng > mốc 1 của Bà Năm
  // Liên) và xóa nhịp kết của bà — chỉ map ở cụm ông từ Kỳ III hoặc khi
  // chủ nhân ra lệnh riêng; Bốn Mọc map sớm sẽ hất Bảy Lược khỏi ô sân
  // khấu ở chính cảnh ra mắt I02 (hòa 2–2 dòng, Bốn Mọc nói trước nên
  // thắng tie-break) — chỉ map ở cụm IV09 hoặc cảnh khai tường minh.
  "ba suong": "ba_suong",
  "ky luong": "ky_luong",
  "chau van loi": "chau_van_loi"
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
  const declared = (Array.isArray(scene?.companions) ? scene.companions : [])
    .filter((id) => Object.hasOwn(CHARACTER_OVERLAYS, id));
  const dialogue = Array.isArray(scene?.dialogue) ? scene.dialogue : [];
  // Ưu tiên speaker chiếm ưu thế trong cảnh (G03/G06, đợt sửa 2026-11-06):
  // nếu một speaker có overlay hợp lệ và số dòng thoại của họ NHIỀU HƠN hẳn
  // người đứng sân khấu được khai báo, sân khấu thuộc về speaker đó — một
  // cảnh do Quản gia dẫn dắt không còn hiển thị người khác chỉ vì mảng
  // companions xếp họ trước. Khai báo vẫn thắng khi bằng điểm hoặc hơn.
  const counts = new Map();
  const speakerOrder = [];
  for (const line of dialogue) {
    const id = SPEAKER_OVERLAYS[normalizeSpeaker(line?.speaker)];
    if (id && Object.hasOwn(CHARACTER_OVERLAYS, id)) {
      if (!counts.has(id)) { counts.set(id, 0); speakerOrder.push(id); }
      counts.set(id, counts.get(id) + 1);
    }
  }
  let dominant = null;
  let dominantCount = 0;
  for (const id of speakerOrder) {
    if (counts.get(id) > dominantCount) { dominant = id; dominantCount = counts.get(id); }
  }
  if (dominant && dominantCount > (declared.length ? (counts.get(declared[0]) || 0) : 0)) return dominant;
  if (declared.length) return declared[0];
  return dominant;
}

// Bảng tên trên đầu nhân vật ở Snapshot (lệnh chủ nhân 2026-11-06: mỗi nhân
// vật có tên trong khung trên đầu để người đọc phân biệt ai là ai).
const CHARACTER_DISPLAY_NAMES = Object.freeze({
  "ba_nam_lien": "Bà Năm Liên",
  "ba_bay": "Bà Bảy",
  "le_thu_nguyet": "Lê Thu Nguyệt",
  "npc_servant_male": "Gia nhân",
  "npc_servant_female": "Gia nhân",
  "npc_servant_elder": "Gia nhân lớn tuổi",
  "npc_servant_elder_male": "Gia nhân lớn tuổi",
  "npc_porter": "Phu khuân vác",
  "pham_dinh_nghiem": "Phạm Đình Nghiêm",
  "npc_fisherman": "Ngư dân",
  "npc_doctor": "Thầy thuốc",
  "npc_official": "Người của Giới Phòng",
  "steward": "Quản gia",
  "cai_lam": "Cai Lẫm",
  "bay_luoc": "Bảy Lược",
  "ly_kha": "Lý Kha",
  "tran_thi_men": "Trần Thị Mến",
  "ba_chin_lai": "Bà Chín Lãi",
  "ba_suong": "Bà Sương",
  "ky_luong": "Ký Lương",
  "chau_van_loi": "Châu Văn Lợi",
  "nguyen_van_nhan": "Nguyễn Văn Nhân",
  "bon_moc": "Bốn Mọc"
});

// Tên trên bảng tên có thể khác theo cảnh khi danh tính chưa được lộ trong
// văn: ở lh_audit_table, Phạm Đình Nghiêm mới chỉ được gọi là "phó kiểm"
// (tên đầy đủ lộ ở cảnh lh_nghiem ngay sau đó trên tuyến chính) — bảng tên
// không được đi trước văn bản. Điểm phản biện ChatGPT vòng 1, Muse kiểm
// chứng theo tuyến chính: audit_table ở vị trí 47, lh_nghiem ở 48.
const SCENE_DISPLAY_NAME_OVERRIDES = Object.freeze({
  lh_audit_table: Object.freeze({ pham_dinh_nghiem: "Phó kiểm Giới Phòng" }),
  // Chặng 2: Trương Bá Hòe và Tạ Văn Độ chưa có overlay riêng — dùng mẫu
  // phu bến/gia nhân nam làm giữ chỗ, bảng tên theo đúng nhân vật của cảnh.
  vt_coffin_wharf: Object.freeze({ npc_porter: "Trương Bá Hòe" }),
  vt_coal_store: Object.freeze({ npc_porter: "Trương Bá Hòe" }),
  vt_restitution: Object.freeze({ npc_servant_male: "Tạ Văn Độ" }),
  // Kỳ II (hệ 5 agent, 2026-11-07): cùng quy ước giữ chỗ như trên cho các
  // cảnh Phúc Thọ mở rộng — Bá Hòe là npc_porter, Văn Độ là npc_servant_male.
  vt_two_paper_deaths: Object.freeze({ npc_porter: "Trương Bá Hòe" }),
  vt_river_mouth_turn: Object.freeze({ npc_servant_male: "Tạ Văn Độ" }),
  vt_wharf_shelter: Object.freeze({ npc_porter: "Trương Bá Hòe" }),
  vt_lid_sign_again: Object.freeze({ npc_porter: "Trương Bá Hòe" }),
  vt_port_inspection: Object.freeze({ npc_porter: "Trương Bá Hòe" }),
  vt_rescue_debt_second: Object.freeze({ npc_porter: "Trương Bá Hòe" }),
  vt_hidden_man_route: Object.freeze({ npc_porter: "Trương Bá Hòe", npc_servant_male: "Tạ Văn Độ" }),
  vt_names_returned: Object.freeze({ npc_servant_male: "Tạ Văn Độ" }),
  vt_wharf_contained: Object.freeze({ npc_porter: "Trương Bá Hòe" }),
  vt_rice_seed_yard: Object.freeze({ npc_porter: "Trương Bá Hòe" })
});

export function companionDisplayName(id, scene) {
  const override = scene?.id ? SCENE_DISPLAY_NAME_OVERRIDES[scene.id] : null;
  if (override && Object.hasOwn(override, id)) return override[id];
  return CHARACTER_DISPLAY_NAMES[id] || "";
}
