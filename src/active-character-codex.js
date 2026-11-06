const freeze = (value) => Object.freeze(value);

// Source priority:
// 1) Cao Minh Codex R02 (Drive game/CHAR) — HARD CANON do người dùng khóa trực tiếp cho nhân vật chính.
// 2) Trường chưa được Codex R02 khóa phải để mở, không tự kéo lore cũ trở lại.
// (Lệnh chủ nhân 2026-11-06: các nhân vật và tổ chức legacy đã gỡ khỏi thế giới game hoàn toàn — không khôi phục.)

export const GAO_MING_CODEX = freeze({
  source: "Cao Minh Codex R02 (CHAR.GAO_MING, Drive game/CHAR) — HARD CANON do người dùng khóa trực tiếp",
  identity: {
    recordId: "CHAR.GAO_MING",
    identityRecord: "CHAR.GAO_MING.IDENTITY",
    name: "Cao Minh",
    hanName: "高明",
    pinyin: "Gāo Míng",
    codename: "Vạn Giới Ma Tổ",
    titles: ["Vạn Giới Ma Tổ", "Đạo Tổ Vạn Ma"],
    sex: "Nam",
    publicRecordSpecies: "Người",
    species: "Người Trái Đất trọng sinh; tu sĩ tu tiên, không phải bán quỷ và không mang huyết thống quỷ.",
    father: "Chưa khóa trong Codex R02; không tự suy đoán gia tộc hay thân tộc.",
    mother: "Chưa khóa trong Codex R02; không tự suy đoán gia tộc hay thân tộc.",
    originEra: "Trái Đất phàm tục hiện đại; kiếp sống cũ kết thúc sau chuỗi tăng ca quá độ. Đây là xuất thân phàm nhân, không phải năm sinh tu luyện.",
    trueAge: "Không rõ",
    apparentAge: "Không ấn định; Codex cấm tự đặt tuổi thật, tuổi biểu kiến, năm sinh hoặc số năm tu luyện.",
    religion: "Không theo tôn giáo phàm tục; tu theo Vạn Ma Đạo Kinh của Vạn Ma Đạo Môn.",
    organization: "Vạn Ma Đạo Môn",
    organizationRole: "Đạo thống ma đạo lấy tự chủ tâm tính, hiểu hậu quả và giữ lời thề đã nhận làm gốc; không dùng danh nghĩa tông môn để biện hộ cho việc tàn hại sinh linh vô cớ.",
    position: "Đạo Tổ",
    combatTier: "Đạo Tổ",
    role: "Đạo Tổ · Vạn Ma Đạo Môn — đứng đầu đạo thống, đạo trường tại Lôi Thiên Sơn; trong mạch chiến dịch hiện tại là người lạ bị vầng sáng ném xuống Long Hải năm 1899, ra tay vì tà khí đang xâm thực Hứa Tiểu Lan."
  },
  personality: [
    "Điềm tĩnh, tự tại, ít câu nệ lễ nghi; không lúc nào cũng lạnh lùng, uy hiếp hay buông lời huyền học khó hiểu.",
    "Đôi lúc có sự hài hước khô khốc của người từng đi làm nơi phàm tục; ký ức Trái Đất còn nguyên và là một phần của con người hiện tại.",
    "Biết rõ thực lực của mình nhưng không coi thường sự thật chưa rõ; gặp chuyện lớn thì quan sát trước khi quyết, đã quyết thì không dây dưa vô ích.",
    "Không tự nhận nghĩa vụ cứu cả thế giới; bảo vệ những gì đã nhận và không để kẻ khác tùy tiện viết lại sinh tử của người yếu thế.",
    "Không tìm kiếm vương triều để cai trị; muốn nắm vận mệnh của chính mình."
  ],
  principles: [
    "Không chủ động làm hại người vô tội.",
    "Không từ bỏ người đã nhận bảo hộ chỉ vì tình thế khó.",
    "Giữ lời thề đã nhận; môn quy Vạn Ma Đạo Môn lấy tự chủ tâm tính và hiểu hậu quả làm gốc.",
    "Đánh giá con người qua hành vi và hậu quả cụ thể, không dán nhãn thiện/ác theo xuất thân hay đạo tu hành.",
    "“Ma” là một đạo tu hành, không đồng nghĩa với mất lý trí hoặc tàn sát vô tội."
  ],
  combat: {
    style: [
      "Kiếm đạo làm chủ đạo: Song Sát Kiếm Quyết phối hợp Sát Thần và Sát Ma; thanh đỏ phá thần ấn và thế áp chế, thanh đen tím chém lớp tâm chướng.",
      "Thi triển bằng ngự kiếm theo thần niệm, hai tay hoặc kiếm khí phân tuyến; cả hai kiếm có thể được cầm hoặc ngự bằng thần niệm, không dung hợp thành thanh thứ ba.",
      "Thân pháp Lôi Thiên Độn Bộ mượn lôi quang đổi vị trí để né, áp sát, rút lui hoặc đổi góc chém; Hư Không Hoán Ảnh bước qua nếp gấp không gian và để lại ảnh đạo niệm đánh lạc hướng.",
      "Trước trận dùng thần thức kiểm tra khí cơ, kiếm trận, lối thoát, dân thường và mức độ thù địch nếu thông tin hợp lệ để cảm nhận.",
      "Khi cứu hộ, ưu tiên hạn chế tổn thất lan và bảo vệ người đã nhận trách nhiệm thay vì tung đòn mạnh vô tội vạ."
    ],
    physiology: [
      "Đạo Tổ Pháp Thể: pháp thân đã trải lôi kiếp và vô số lần luyện thể; chịu đựng thương tổn và môi trường khắc nghiệt hơn tu sĩ thường, có khả năng tự điều tức và chữa lành khi thần hồn cùng đạo nguyên còn vững.",
      "Kháng tính cao với độc, huyễn thuật, sát ý và lôi kiếp thông thường, nhưng không miễn nhiễm mọi pháp tắc và không bất tử trong mọi điều kiện.",
      "Đạo tâm giữ bản ngã trong lúc vận ma khí; ma đạo không tự tạo trạng thái cuồng hóa, phản phệ hay mất kiểm soát nếu chưa có nguyên nhân cụ thể trong câu chuyện."
    ],
    daoKinh: [
      "Vạn Ma Đạo Kinh là tâm pháp nền tảng: hợp nhất ma đạo đã thuần hóa với căn cơ Đạo Tổ, cho phép vận hóa linh khí, dẫn đạo nguyên qua kinh mạch và điều hòa các pháp môn tương thích.",
      "Đạo nguyên là căn cơ tu hành ổn định; ma khí dưới sự khống chế của Cao Minh có thể mang sát phạt, áp chế hoặc bảo hộ tùy pháp quyết.",
      "Vạn Giới Thần Niệm: thả thần thức cảm ứng khí cơ, sinh linh, lôi vân, dao động trận pháp và vết tích kiếm ý; không tiết lộ bí mật chưa có dấu hiệu, không tự mở khóa mọi kết giới và không đọc trọn ký ức người khác khi chưa có pháp môn, điều kiện hợp lệ."
    ],
    songSat: [
      "Thái Cổ Song Sát gồm hai thanh riêng biệt: Sát Thần Kiếm và Sát Ma Kiếm; hai thanh cùng nhận đạo niệm của Cao Minh.",
      "Sát Thần Kiếm: đại kiếm có hộ kiếm tạo hình quỷ diện, đôi mắt đỏ cháy sâu, lưỡi đen đỏ với sát văn uốn như mạch dung nham; hung mãnh nhất trong Song Sát — Thần Quyền Phá Ấn, Huyết Lôi Trảm, Quỷ Diện Trấn Hồn.",
      "Sát Ma Kiếm: trường kiếm đen ánh bạc, hộ kiếm chĩa hai cánh cong đối xứng, tâm thạch đỏ hình thoi phát sáng; chém ma chướng và sự tha hóa — Đoạn Ma Chướng, Tịnh Niệm Phản Quang, Huyền Minh Kiếm Vực.",
      "Song Sát hợp đạo: Sát Thần phá quyền uy bề ngoài, Sát Ma đoạn ràng buộc bên trong; Thần Ma Song Phán không có hiệu ứng tất sát mặc định; Song Sát Quy Vị có thể gọi từng thanh về tay khi liên kết bản mệnh không bị phong ấn."
    ],
    thanThong: [
      "13 thần thông theo Codex R02: Vạn Ma Đạo Kinh · Đạo Tổ Pháp Thể · Vạn Giới Thần Niệm · Lôi Thiên Độn Bộ · Hư Không Hoán Ảnh · Song Sát Kiếm Quyết · Tứ Kiếm Đoạn Mạch · Tĩnh Tâm Kiếm Minh · Vạn Ma Quy Tông · Trấn Thiên Đạo Ấn · Cửu Tiêu Lôi Ngục · Hắc Long Quy Nguyên · Vạn Giới Song Sát.",
      "Tứ Kiếm Đoạn Mạch: bốn đường kiếm chớp nhoáng nhắm vào điểm nối của kinh mạch vận lực hoặc các khớp trọng yếu; ưu tiên phá thế, không tự gán tỷ lệ chảy máu hay sát thương.",
      "Tĩnh Tâm Kiếm Minh: tiếng kiếm ngân mảnh mà sâu hướng về thần hồn đang dao động; không phải lệnh khống chế tuyệt đối mọi ý thức.",
      "Vạn Ma Quy Tông: gom các dòng ma khí đã khống chế thành văn ấn làm màn chắn, xiềng đạo lực hoặc kiếm ảnh phân hướng; không triệu hồi sinh vật có tên, không tạo đội quân NPC từ hư vô.",
      "Trấn Thiên Đạo Ấn: dựng đạo ấn áp chế một pháp thuật, khóa điểm vận hành của trận pháp hoặc giữ một mục tiêu tại vị trí; tác dụng tùy lực đối kháng và việc ấn đã hoàn tất.",
      "Cửu Tiêu Lôi Ngục: dẫn lôi khí thành chín tầng sấm nối tiếp tạo pháp vực gây sức ép lên đường lui và kết giới của đối thủ; lôi pháp không mặc định vô hại cho người bên cạnh và không kích hoạt tự động khi chưa có quyết định.",
      "Vạn Giới Song Sát: tuyệt kỹ dùng Vạn Giới Thần Niệm phân tích cấu trúc pháp tắc rồi khiến Song Sát đồng xuất; không đóng băng thời gian toàn thế giới, không đặt số lần chém cố định và không đồng nghĩa sát thương tất sát."
    ]
  },
  equipment: {
    currentWeapons: [
      "Sát Thần Kiếm",
      "Sát Ma Kiếm"
    ],
    weaponRule: "Thái Cổ Song Sát là vũ khí bản mệnh, hai thanh riêng biệt; không phải súng, không dùng đạn.",
    hacLongChienKhai: [
      "Hắc Long Chiến Khải là đạo khí tu tiên rèn từ nghịch lân, long cốt đã linh hóa và hắc kim đạo văn của một Hắc Long cổ từng trú trong lôi vực Lôi Thiên Sơn; tuyệt đối không phải giáp máy, powered armor hay thiết bị điện tử.",
      "Đúng 4 bộ phận: khải giáp (giáp thân và vai bằng bản phiến long lân, tán lực công kích và hộ thân nhưng không miễn thương vô hạn), hộ uyển (cặp vòng bảo vệ cổ tay khắc Định Mạch Ấn, ổn định đạo nguyên và song kiếm quyết), hộ thủ (cặp găng giáp hỗ trợ kết thủ ấn, dẫn lôi kình và ngự song kiếm), mão (long quan hắc ngân giữ búi tóc cao, giữ thần hồn khỏi nhiễu loạn và định tâm).",
      "Hắc Long Quy Nguyên: khi đủ bốn bộ phận cùng được trang bị và Cao Minh chủ động thúc giục pháp quyết, vân long trên giáp nối thành hộ trận bao sát pháp thân; long ảnh là hình tướng của trận giáp, không phải một sinh vật sống được triệu hồi.",
      "Có thể mặc từng phần riêng, nhưng hộ trận toàn bộ không thành khi thiếu một trong bốn bộ phận; giáp có thể bị phong ấn, bào mòn hoặc phá vỡ bởi đạo pháp đủ mạnh, và việc sửa chữa phải dựa trên tài nguyên cùng đạo lực thực tế."
    ]
  },
  actionLocks: [
    "Cao Minh thuộc Vạn Ma Đạo Môn, đạo trường Lôi Thiên Sơn; anh không dùng súng, đạn hay trang bị công nghệ.",
    "Đạo hạnh là Đạo Tổ; tuyệt đối không thay bằng UR+ hay bất kỳ cấp bậc số hóa nào, và không tự ấn định tuổi/năm sinh.",
    "Không cho Cao Minh sử dụng súng, hệ thống đạn/ammo, giáp công nghệ, quỷ lực Sparda hoặc Devil Trigger; sức mạnh của anh thuộc hệ tu tiên trong Codex R02.",
    "Không tự áp đặt thanh năng lượng, thời gian hồi chiêu, giá trị sát thương cố định, xác suất kích hoạt hay suy yếu ngẫu nhiên cho thần thông chỉ để tạo căng thẳng; đồng thời không tuyên bố mọi đòn đánh đều thành công.",
    "Người chơi điều khiển Cao Minh: GM không thay người chơi quyết định hành động, lời hứa, mục tiêu, kết giao, nhận đệ tử hay việc rút kiếm/thi triển tuyệt kỹ.",
    "Không tự bịa NPC có tên, quan hệ thân thuộc, lịch sử môn phái; không biến state tạm thời thành tiểu sử vĩnh viễn.",
    "Không chủ động làm hại người vô tội; không từ bỏ người đã nhận bảo hộ chỉ vì tình thế khó.",
    "Không dùng tôn hiệu “Vạn Giới” làm giấy phép biết mọi bí mật; không dùng chữ “Sát Thần” làm cơ chế tự thắng."
  ],
  voice: [
    "Luôn tự xưng là “bổn tọa” trong mọi lời nói và tiếng lòng; tuyệt đối không tự xưng “ta”.",
    "Đối thoại tự nhiên, rõ nghĩa và tùy quan hệ; điềm tĩnh, tự tại, ít câu nệ lễ nghi.",
    "Có thể pha sự hài hước khô khốc của người từng đi làm nơi phàm tục; không ép lúc nào cũng lạnh lùng, uy hiếp hoặc buông lời huyền học khó hiểu.",
    "Khi chuyện lớn xảy ra thì nói thẳng điều cần biết và cần làm; sự tự tin đến từ thực lực thật, không từ diễn thuyết khoe tôn hiệu."
  ]
});

export const ACTIVE_CHARACTER_CODEX = freeze({
  gaoMing: GAO_MING_CODEX
});

export const ACTIVE_CHARACTER_PROMPT_CANON = freeze({
  gaoMing: {
    identity: GAO_MING_CODEX.identity,
    personality: GAO_MING_CODEX.personality,
    principles: GAO_MING_CODEX.principles,
    combat: GAO_MING_CODEX.combat,
    equipment: GAO_MING_CODEX.equipment,
    actionLocks: GAO_MING_CODEX.actionLocks,
    voice: GAO_MING_CODEX.voice
  },
});
