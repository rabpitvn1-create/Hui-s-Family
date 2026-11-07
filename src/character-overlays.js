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
  "bon_moc": "assets/overlay/bon-moc.webp",
  // Kỳ III (hệ 9 agent, 2026-11-07): mười overlay mới — bảy lõi của Q5
  // (năm trưởng đường + Tống Nguyên Phúc + Bé Sáu) và ba OPTIONAL cao đã
  // duyệt (Tư Nếp, Bùi Tấn Lễ, Hứa Tế Nguyên). Cả mười đều có khóa
  // speaker (xem SPEAKER_OVERLAYS) theo đặc tả tích hợp ảnh bước 9.
  "tong_nguyen_phuc": "assets/overlay/tong-nguyen-phuc.webp",
  "nguyen_van_thao": "assets/overlay/nguyen-van-thao.webp",
  "dao_nhat_but": "assets/overlay/dao-nhat-but.webp",
  "phan_bay_nen": "assets/overlay/phan-bay-nen.webp",
  "duong_that_nuong": "assets/overlay/duong-that-nuong.webp",
  "do_thi_hanh": "assets/overlay/do-thi-hanh.webp",
  "be_sau": "assets/overlay/be-sau.webp",
  "tu_nep": "assets/overlay/tu-nep.webp",
  "bui_tan_le": "assets/overlay/bui-tan-le.webp",
  "hua_te_nguyen": "assets/overlay/hua-te-nguyen.webp",
  // Kỳ IV (hệ 9 agent, 2026-11-07): bảy overlay NEED của bước 7 + một
  // OPTIONAL đã duyệt (Lê Thị Nhiên). Trương Bá Hòe có overlay riêng —
  // khóa speaker của ông ĐỔI ĐÍCH từ npc_porter sang đây (xem
  // SPEAKER_OVERLAYS). Võ Văn Đực: bản chuẩn của anh ta CHÍNH LÀ bản
  // đồng phục Hạ Ô Môn (anh gia nhập trước khi lên khung) — trỏ thẳng
  // về file đồng phục; character-appearance.js cũng có override tương
  // ứng nên hiển thị nhất quán ở cả khung chính lẫn avatar thoại.
  "phan_tuong": "assets/overlay/phan-tuong.webp",
  "vo_muoi_ro": "assets/overlay/vo-muoi-ro.webp",
  "huong_quan_hau": "assets/overlay/huong-quan-hau.webp",
  "cai_bien": "assets/overlay/cai-bien.webp",
  "vo_van_duc": "assets/overlay/vo-van-duc-uniform.webp",
  "lucien_vauclerc": "assets/overlay/lucien-vauclerc.webp",
  "truong_ba_hoe": "assets/overlay/truong-ba-hoe.webp",
  "le_thi_nhien": "assets/overlay/le-thi-nhien.webp"
});

// Tên người nói (đã bỏ dấu, viết thường) → id overlay, chỉ cho nhân vật có tên.
const SPEAKER_OVERLAYS = Object.freeze({
  "ba nam lien": "ba_nam_lien",
  "ba bay": "ba_bay",
  "le thu nguyet": "le_thu_nguyet",
  "thu nguyet": "le_thu_nguyet",
  "pham dinh nghiem": "pham_dinh_nghiem",
  "truong ba hoe": "truong_ba_hoe",
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
  "chau van loi": "chau_van_loi",
  // Kỳ III (hệ 9 agent, 2026-11-07): bảy khóa lõi + ba OPTIONAL cao đã
  // duyệt. Hệ quả sân khấu đã mô phỏng trước (đặc tả bước 9): III13 về
  // tu_nep đúng cảnh của ông; III04 giữ tong_nguyen_phuc (13 > 11 dòng
  // của Bùi Tấn Lễ); III29 giữ ba_chin_lai (5 > 4 dòng của Hứa Tế
  // Nguyên); hai cảnh Kỳ II mang tên Bé Sáu lật sang be_sau đúng ý.
  "tong nguyen phuc": "tong_nguyen_phuc",
  "nguyen van thao": "nguyen_van_thao",
  "dao nhat but": "dao_nhat_but",
  "phan bay nen": "phan_bay_nen",
  "duong that nuong": "duong_that_nuong",
  "do thi hanh": "do_thi_hanh",
  "be sau": "be_sau",
  "tu nep": "tu_nep",
  "bui tan le": "bui_tan_le",
  "hua te nguyen": "hua_te_nguyen",
  // Kỳ IV (hệ 9 agent, 2026-11-07): sáu khóa MỚI + khóa OPTIONAL đã
  // duyệt của Lê Thị Nhiên (mô phỏng bước 7: 0 lật ngoài ý đồ). Khóa
  // "truong ba hoe" ở trên đã ĐỔI ĐÍCH npc_porter → truong_ba_hoe:
  // 11 cảnh đã phát hành lật sang overlay riêng của Bá Hòe, đúng ý đồ.
  // CẤM thêm khóa cho "chin bac" (sẽ cướp khung IV29 của Cai Lẫm) và
  // "armand delmas" (sẽ phá III36 đã phát hành) — giữ luật bước 7.
  "phan tuong": "phan_tuong",
  "vo muoi ro": "vo_muoi_ro",
  "huong quan hau": "huong_quan_hau",
  "cai bien": "cai_bien",
  "vo van duc": "vo_van_duc",
  "lucien vauclerc": "lucien_vauclerc",
  "le thi nhien": "le_thi_nhien"
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
  const addCount = (id) => {
    if (!counts.has(id)) { counts.set(id, 0); speakerOrder.push(id); }
    counts.set(id, counts.get(id) + 1);
  };
  // Vá Kỳ IV bước 9 — DẠNG THU HẸP (đặc tả step9-image-spec §5, đã mô
  // phỏng ở bước 7): companion ĐÃ KHAI BÁO nhưng không có khóa speaker
  // (trường hợp bon_moc ở IV08/IV09) vốn bị tính 0 dòng nên thua mọi
  // speaker đã map, trái ý đồ "khai báo thắng khi bằng điểm hoặc hơn".
  // Cách vá: dòng KHÔNG được khóa speaker nào nhận thì đối chiếu nhãn
  // speaker đã chuẩn hóa với TÊN HIỂN THỊ của các companion đã khai báo
  // và cộng cho companion khớp tên. Thu hẹp ở hai điểm: (1) chỉ áp cho
  // companion nằm trong scene.companions — KHÔNG tạo khóa speaker toàn
  // cục cho Bốn Mọc (khóa "bon moc" sẽ phá hòa 2–2 ở lh_i02); (2) chỉ
  // áp cho id KHÔNG thuộc mẫu npc_* — khớp tên cho npc_porter sẽ lật
  // nhánh follows của lh_i06_roadside_writ (phu vô danh trùng tên hiển
  // thị "Phu khuân vác" với mẫu). Dòng đã có khóa speaker giữ nguyên
  // chủ — không đếm trùng.
  const declaredNameCredit = new Map();
  for (const id of declared) {
    if (id.startsWith("npc_")) continue;
    const display = CHARACTER_DISPLAY_NAMES[id];
    if (display) declaredNameCredit.set(normalizeSpeaker(display), id);
  }
  for (const line of dialogue) {
    const key = normalizeSpeaker(line?.speaker);
    const id = SPEAKER_OVERLAYS[key];
    if (id && Object.hasOwn(CHARACTER_OVERLAYS, id)) { addCount(id); continue; }
    const credited = declaredNameCredit.get(key);
    if (credited) addCount(credited);
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
  "bon_moc": "Bốn Mọc",
  "tong_nguyen_phuc": "Tống Nguyên Phúc",
  "nguyen_van_thao": "Nguyễn Văn Thạo",
  "dao_nhat_but": "Đào Nhất Bút",
  "phan_bay_nen": "Phan Bảy Nện",
  "duong_that_nuong": "Dương Thất Nương",
  "do_thi_hanh": "Đỗ Thị Hạnh",
  "be_sau": "Bé Sáu",
  "tu_nep": "Tư Nếp",
  "bui_tan_le": "Bùi Tấn Lễ",
  "hua_te_nguyen": "Hứa Tế Nguyên",
  "phan_tuong": "Phan Tường",
  "vo_muoi_ro": "Võ Mười Rọ",
  "huong_quan_hau": "Hương quản Hậu",
  "cai_bien": "Cai Biện",
  "vo_van_duc": "Võ Văn Đực",
  "lucien_vauclerc": "Lucien Vauclerc",
  "truong_ba_hoe": "Trương Bá Hòe",
  "le_thi_nhien": "Lê Thị Nhiên"
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
  vt_rice_seed_yard: Object.freeze({ npc_porter: "Trương Bá Hòe" }),
  // Kỳ III (hệ 9 agent, 2026-11-07): cùng quy ước giữ chỗ như Kỳ II —
  // Bá Hòe vẫn là npc_porter ở phân đàn Phúc Thọ, Văn Độ là
  // npc_servant_male khi mang tin Cần Giờ về.
  ky3_18_phuc_tho_ba_dien: Object.freeze({ npc_porter: "Trương Bá Hòe" }),
  ky3_42_tin_tu_tam_giang: Object.freeze({ npc_servant_male: "Tạ Văn Độ" }),
  // Kỳ IV (hệ 9 agent, 2026-11-07): sau khi Bá Hòe có overlay riêng và
  // Cai Biện có khóa speaker, bốn override này chỉ còn vai trò DỰ PHÒNG
  // thuần túy (khung đích IV19/IV34 = truong_ba_hoe, IV22 = phan_tuong,
  // IV35 = cai_bien — mẫu npc không còn lên khung ở các cảnh đó). Vẫn
  // thêm đủ theo đơn thuốc integration-notes §6: vô hại, và là bảo hiểm
  // nếu đăng ký/asset bị gỡ trong tương lai. Mọi override cũ GIỮ NGUYÊN.
  ky4_19_ba_hoe_cuu_ghe: Object.freeze({ npc_porter: "Trương Bá Hòe" }),
  ky4_22_tien_den_truoc_ghe: Object.freeze({ npc_porter: "Trương Bá Hòe" }),
  ky4_34_ba_hoe_giu_so: Object.freeze({ npc_porter: "Trương Bá Hòe" }),
  ky4_35_ben_khong_nguoi_chet: Object.freeze({ npc_servant_male: "Tạ Văn Độ" })
});

export function companionDisplayName(id, scene) {
  const override = scene?.id ? SCENE_DISPLAY_NAME_OVERRIDES[scene.id] : null;
  if (override && Object.hasOwn(override, id)) return override[id];
  return CHARACTER_DISPLAY_NAMES[id] || "";
}
