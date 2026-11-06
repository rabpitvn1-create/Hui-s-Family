// Hồ sơ nhân vật (Đợt 2, kết luận tranh luận 2026-11-06): một hộp thoại
// hồ sơ dùng chung. Nội dung chỉ ghi những gì người chơi đã biết qua cốt
// truyện — không hé lộ thông tin phía tác giả. Nhân vật chính và Tiểu Lan
// có hồ sơ chi tiết; vai có tên có hồ sơ ngắn; người vô danh chỉ có bảng
// tên trên sân khấu, không có trang hồ sơ.
const CHARACTER_PROFILES = Object.freeze({
  gao_minh: Object.freeze({
    id: "gao-minh",
    name: "Cao Minh",
    alias: "Vạn Giới Ma Tổ",
    role: "Đạo Tổ · Vạn Ma Đạo Môn",
    summary: "Người Trái Đất trọng sinh sau một đêm tăng ca quá độ; bị vầng sáng lạ ném từ Vạn Hoa Lầu xuống Long Hải năm 1899; song kiếm Thái Cổ Song Sát, Hắc Long Chiến Khải hộ thân.",
    image: "assets/avatars/main-avatar.jpg",
    alt: "Chân dung Cao Minh, tôn hiệu Vạn Giới Ma Tổ"
  }),
  tieu_lan: Object.freeze({
    id: "tieu-lan",
    name: "Hứa Tiểu Lan",
    alias: "Tứ tiểu thư Hứa Gia",
    role: "Người mang Nghịch Trùng",
    summary: "Mười tám tuổi, tứ tiểu thư nhà họ Hứa, được đưa về biệt thự Long Hải dưỡng bệnh dưới danh nghĩa bệnh phong. Nàng nghe được những điều người khác không nghe, nhớ những cái tên người khác đã quên — và giữ quyền từ chối. Cũng là người dạy Cao Minh những điều đầu tiên của thế giới này: tên đất, giá chợ, lễ nghi, món ăn.",
    image: "assets/avatars/tieu-lan.svg",
    alt: "Hồ sơ Hứa Tiểu Lan, Tứ tiểu thư Hứa Gia"
  }),
  ba_nam_lien: Object.freeze({
    id: "ba-nam-lien",
    name: "Bà Năm Liên",
    alias: "",
    role: "Người hầu già của nhà họ Hứa",
    summary: "Theo hầu cô chủ từ thuở nhỏ. Bà là người giữ những cái tên và những món đồ mà người khác tưởng đã mất từ lâu.",
    image: "assets/avatars/ba-nam-lien.webp",
    alt: "Chân dung Bà Năm Liên"
  }),
  ba_bay: Object.freeze({
    id: "ba-bay",
    name: "Bà Bảy",
    alias: "",
    role: "Đầu bếp của biệt thự",
    summary: "Món nào dọn lên bà cũng tự nếm hai lần trước — một thói quen quê mùa đã cứu người trong nhà này nhiều hơn một lần.",
    image: "assets/avatars/ba-bay.webp",
    alt: "Chân dung Bà Bảy"
  }),
  le_thu_nguyet: Object.freeze({
    id: "le-thu-nguyet",
    name: "Lê Thu Nguyệt",
    alias: "",
    role: "Người hầu của biệt thự",
    summary: "Cô hầu trẻ, nhanh nhẹn và tháo vát; chuyện trong nhà, cô biết nhiều hơn phận sự của mình.",
    image: "assets/avatars/le-thu-nguyet.webp",
    alt: "Chân dung Lê Thu Nguyệt"
  }),
  steward: Object.freeze({
    id: "steward",
    name: "Quản gia",
    alias: "Quản gia Hứa Gia",
    role: "Người điều hành biệt thự",
    summary: "Thay mặt nhà họ Hứa tiếp khách, tiếp thầy thuốc và tiếp cả đoàn kiểm tra. Lời lẽ luôn chừng mực, sổ sách luôn sẵn trên tay.",
    image: "assets/avatars/steward.webp",
    alt: "Chân dung Quản gia Hứa Gia"
  }),
  pham_dinh_nghiem: Object.freeze({
    id: "pham-dinh-nghiem",
    name: "Phó kiểm Giới Phòng",
    alias: "",
    role: "Đoàn kiểm tra Giới Phòng",
    summary: "Người của Giới Phòng trong đoàn kiểm tra biệt thự. Nhã nhặn, kỹ tính, và không bỏ sót một dòng nào trong sổ.",
    image: "assets/avatars/pham-dinh-nghiem.webp",
    alt: "Chân dung Phó kiểm Giới Phòng"
  }),
  npc_doctor: Object.freeze({
    id: "npc-doctor",
    name: "Thầy thuốc",
    alias: "",
    role: "Thầy thuốc mời ngoài",
    summary: "Được mời tới biệt thự khám cho cô chủ. Những lần khám của ông luôn có người của nhà họ Hứa đứng bên cạnh.",
    image: "assets/avatars/npc-doctor.webp",
    alt: "Chân dung Thầy thuốc"
  })
});

export function initCharacterProfiles() {
  const open = (key) => {
    const profile = CHARACTER_PROFILES[key];
    if (profile) {
      window.dispatchEvent(new CustomEvent("hua:character-overlay", { detail: profile }));
    }
  };
  for (const button of document.querySelectorAll("[data-profile]")) {
    button.addEventListener("click", () => open(button.getAttribute("data-profile")));
  }
  // Chân dung Tiểu Lan trong panel trước đây là một cú bấm chết — nay mở
  // đúng hồ sơ của nàng, ngang hàng với chân dung Cao Minh.
  const lanPortrait = document.querySelector("#intel-panel .target-card .portrait-frame");
  if (lanPortrait) {
    lanPortrait.style.cursor = "pointer";
    lanPortrait.setAttribute("role", "button");
    lanPortrait.setAttribute("aria-label", "Mở hồ sơ nhân vật Hứa Tiểu Lan");
    lanPortrait.addEventListener("click", () => open("tieu_lan"));
  }
  return Object.freeze({ open });
}
