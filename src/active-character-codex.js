const freeze = (value) => Object.freeze(value);

// Source priority:
// 1) Cao Minh Codex R02 (Drive game/CHAR) — HARD CANON do người dùng khóa trực tiếp cho nhân vật chính.
// 2) Canon SRU hiện hành cho tổ chức SRU; Iris_Codex.docx / Syvial_Codex.docx cho phần không xung đột.
// 3) Trường chưa được canon hiện hành khóa phải để mở, không tự kéo lore cũ trở lại.

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
    role: "Đạo Tổ · Vạn Ma Đạo Môn — đứng đầu đạo thống, đạo trường tại Lôi Thiên Sơn; trong mạch chiến dịch hiện tại là người nhận bảo hộ Hứa Tiểu Lan. Không thuộc SRU và không giữ chức vụ hay biên chế nào trong SRU."
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
    weaponRule: "Thái Cổ Song Sát là vũ khí bản mệnh, hai thanh riêng biệt; không phải súng, không dùng đạn và không thuộc hệ thống trang bị của SRU.",
    hacLongChienKhai: [
      "Hắc Long Chiến Khải là đạo khí tu tiên rèn từ nghịch lân, long cốt đã linh hóa và hắc kim đạo văn của một Hắc Long cổ từng trú trong lôi vực Lôi Thiên Sơn; tuyệt đối không phải giáp máy, powered armor hay thiết bị điện tử.",
      "Đúng 4 bộ phận: khải giáp (giáp thân và vai bằng bản phiến long lân, tán lực công kích và hộ thân nhưng không miễn thương vô hạn), hộ uyển (cặp vòng bảo vệ cổ tay khắc Định Mạch Ấn, ổn định đạo nguyên và song kiếm quyết), hộ thủ (cặp găng giáp hỗ trợ kết thủ ấn, dẫn lôi kình và ngự song kiếm), mão (long quan hắc ngân giữ búi tóc cao, giữ thần hồn khỏi nhiễu loạn và định tâm).",
      "Hắc Long Quy Nguyên: khi đủ bốn bộ phận cùng được trang bị và Cao Minh chủ động thúc giục pháp quyết, vân long trên giáp nối thành hộ trận bao sát pháp thân; long ảnh là hình tướng của trận giáp, không phải một sinh vật sống được triệu hồi.",
      "Có thể mặc từng phần riêng, nhưng hộ trận toàn bộ không thành khi thiếu một trong bốn bộ phận; giáp có thể bị phong ấn, bào mòn hoặc phá vỡ bởi đạo pháp đủ mạnh, và việc sửa chữa phải dựa trên tài nguyên cùng đạo lực thực tế."
    ]
  },
  actionLocks: [
    "Cao Minh thuộc Vạn Ma Đạo Môn, đạo trường Lôi Thiên Sơn; anh không thuộc SRU, không là Đội trưởng SRU và không dùng trang bị SRU.",
    "Đạo hạnh là Đạo Tổ; tuyệt đối không thay bằng UR+ hay bất kỳ cấp bậc số hóa nào, và không tự ấn định tuổi/năm sinh.",
    "Không cho Cao Minh sử dụng súng, hệ thống đạn/ammo, giáp công nghệ, quỷ lực Sparda hoặc Devil Trigger; sức mạnh của anh thuộc hệ tu tiên trong Codex R02.",
    "Không tự áp đặt thanh năng lượng, thời gian hồi chiêu, giá trị sát thương cố định, xác suất kích hoạt hay suy yếu ngẫu nhiên cho thần thông chỉ để tạo căng thẳng; đồng thời không tuyên bố mọi đòn đánh đều thành công.",
    "Người chơi điều khiển Cao Minh: GM không thay người chơi quyết định hành động, lời hứa, mục tiêu, kết giao, nhận đệ tử hay việc rút kiếm/thi triển tuyệt kỹ.",
    "Không tự bịa NPC có tên, quan hệ thân thuộc, lịch sử môn phái; không biến state tạm thời thành tiểu sử vĩnh viễn.",
    "Không chủ động làm hại người vô tội; không từ bỏ người đã nhận bảo hộ chỉ vì tình thế khó.",
    "Không dùng tôn hiệu “Vạn Giới” làm giấy phép biết mọi bí mật; không dùng chữ “Sát Thần” làm cơ chế tự thắng."
  ],
  voice: [
    "Đối thoại tự nhiên, rõ nghĩa và tùy quan hệ; điềm tĩnh, tự tại, ít câu nệ lễ nghi.",
    "Có thể pha sự hài hước khô khốc của người từng đi làm nơi phàm tục; không ép lúc nào cũng lạnh lùng, uy hiếp hoặc buông lời huyền học khó hiểu.",
    "Khi chuyện lớn xảy ra thì nói thẳng điều cần biết và cần làm; sự tự tin đến từ thực lực thật, không từ diễn thuyết khoe tôn hiệu."
  ]
});

export const IRIS_CODEX = freeze({
  source: "Iris_Codex.docx; trường tổ chức được để mở sau canon SRU mới",
  identity: {
    name: "Iris",
    surname: "Không có họ chính thức được khóa",
    codename: "ARGUS",
    sex: "Nữ",
    species: "Bán nhân / bán quỷ",
    father: "Belial, một trong 18 Princes of Hell",
    mother: "Người, đã mất; chi tiết danh tính chưa được khóa",
    trueAge: "Không rõ",
    originEra: "Không rõ; không tự suy ra từ niên đại hoặc tổ chức của Cao Minh.",
    apparentAge: "Khoảng 18 tuổi",
    organization: "CHƯA KHÓA trong continuity hiện hành",
    role: "Scout / Target Eliminator; Ranged Combatant / Scout Marksman",
    commandRelation: "Quan hệ chỉ huy tổ chức hiện hành chưa khóa; không tự suy ra chỉ vì Iris là đồng đội của Cao Minh.",
    combatTier: "Chưa khóa con số/cấp chính xác; không tự đặt ngang hàng với Cao Minh và Syvial."
  },
  personality: [
    "Quyết đoán, bình tĩnh, sắc, dũng cảm, nữ tính và tử tế.",
    "Tsundere quanh Cao Minh nhưng không viết thành bạo lực slapstick, trẻ con hoặc mất năng lực tác chiến.",
    "Là người trực tiếp vào địa hình, đọc tuyến, góc và nguy cơ rồi mới chọn mục tiêu cần bắn; không còn là trạm tình báo từ xa."
  ],
  combat: {
    style: [
      "Chuyên xạ thủ trinh sát; core combat style là Gunslinger, không phải chuyên gia cận chiến.",
      "Vai trò chiến thuật là đi tuyến, đọc góc, xác định điểm lộ và cắt mục tiêu bằng hỏa lực chính xác.",
      "Iris là chuyên gia scout-markswoman, không phải bản sao của Cao Minh."
    ],
    weapons: [
      "Vũ khí đặc trưng là đúng hai khẩu súng lục Ivory và Ebony.",
      "Hai súng dùng đạn quỷ lực trực tiếp từ Iris; không thêm vũ khí chính thứ ba nếu nguồn chưa khóa."
    ],
    belialCore: [
      "Belial Core cung cấp quỷ lực vô hạn theo chức năng nguồn đã khóa.",
      "Quỷ lực vô hạn không đồng nghĩa sát thương vô hạn, tốc độ bắn vô hạn, độ bền vô hạn hoặc mọi phát đạn đều trúng.",
      "Không tự sao chép chức năng của Sparda Core hoặc Lucifer Core sang Belial Core."
    ],
    thousandfoldCognition: [
      "Thousandfold Cognition có thể gia tốc nhận thức/phân tích tới tỷ lệ 1:1000.",
      "Đây là tăng tốc nhận thức, không tự tăng tốc cơ thể lên cùng tỷ lệ."
    ],
    terrainRead: [
      "ARGUS Terrain Read dựa trên quan sát trực tiếp, cảm biến giáp và phân tích địa hình.",
      "Không toàn tri, không nhìn xuyên tường và không sử dụng camera/drone từ xa."
    ],
    support: [
      "Field Galley là năng lực hỗ trợ thực địa, không phải tạo vật chất từ hư vô.",
      "Field MedNet là hỗ trợ y tế thực địa, không phải phép chữa lành tức thời hoặc ma thuật phục hồi mọi thương tích."
    ]
  },
  relationships: {
    gaoMing: [
      "Iris có tình cảm lãng mạn với Cao Minh; Cao Minh biết nhưng chưa đáp lại.",
      "Quan hệ canon hiện tại vẫn là đồng đội, không tự chuyển thành người yêu.",
      "Iris -> Cao Minh dùng xưng hô anh-em trừ khi continuity có retcon hợp lệ."
    ],
    syvial: [
      "Iris và Syvial là bạn và đồng đội đáng tin.",
      "Có cạnh tranh tình cảm quanh Cao Minh nhưng không biến thành thù địch, phá nhiệm vụ hoặc làm hại người vô tội."
    ],
    belial: "Quan hệ với Belial xa cách nhưng không mặc định thù địch; Belial không được dùng như deus ex machina để giải quyết cảnh."
  },
  visualLocks: [
    "Tóc bob đen.",
    "Mắt nâu hổ phách.",
    "Giáp đen-gunmetal với điểm sáng cam-đỏ.",
    "Mang đúng hai khẩu Ivory và Ebony.",
    "Không drone, không tablet/Command Slate như canon cũ."
  ],
  actionLocks: [
    "Không tự gán Iris vào SRU hoặc bất kỳ tổ chức nào cho đến khi canon mới khóa trực tiếp.",
    "Xóa khỏi canon vận hành các hệ drone cũ, EYE∞, drone mesh, infinite drones, Command Slate và vai trò NON-COMBATANT/remote-intel cũ.",
    "Iris dùng đúng hai khẩu Ivory và Ebony làm vũ khí đặc trưng.",
    "ARGUS Terrain Read không toàn tri, không nhìn xuyên tường và không dùng drone.",
    "Thousandfold Cognition tăng nhận thức/phân tích, không tự tăng tốc cơ thể.",
    "Không tự xếp Iris ngang hàng với Cao Minh/Syvial khi cấp chiến lực chính xác chưa khóa.",
    "Không tự biến Cao Minh và Iris thành một cặp yêu đương.",
    "Không biến cạnh tranh Iris/Syvial thành thù địch hoặc phá nhiệm vụ.",
    "Giữ xưng hô Iris/Cao Minh là anh-em trừ khi continuity có retcon hợp lệ."
  ],
  voice: [
    "Nói như người thật, có cảm xúc và mục tiêu; không nói như AI đọc báo cáo cảm biến.",
    "Nhanh, rõ và sắc khi làm nhiệm vụ, nhưng vẫn có nhịp nữ tính, dịu hoặc càm ràm khi hoàn cảnh cho phép.",
    "Tsundere phải thể hiện qua lựa chọn và cách nói, không qua bạo lực hài hước rập khuôn."
  ]
});

export const SYVIAL_CODEX = freeze({
  source: "Syvial_Codex.docx",
  identity: {
    name: "Syvial",
    sex: "Nữ",
    species: "Bán nhân / bán quỷ",
    father: "Lucifer",
    mother: "Người; danh tính chưa khóa",
    trueAge: "Không rõ",
    apparentAge: "Nữ trẻ trưởng thành; chưa khóa con số chính xác",
    originEra: "Năm 2299; đây là niên đại xuất thân, không phải năm sinh",
    organization: "CHƯA KHÓA",
    position: "CHƯA KHÓA",
    combatTier: "UR+; cùng tầng sức mạnh tổng thể với Cao Minh",
    role: "Kiếm sĩ siêu nhiên cấp cao; đột kích, áp chế, phản kích và kết liễu mục tiêu cấp cao."
  },
  personality: [
    "Tỉnh táo, thông minh, có năng lực xã hội cao và không thích nghi thức, chức quyền hoặc lời đe dọa rỗng thay cho lý do thực tế.",
    "Không chủ động làm hại người vô tội; khi đã quyết định phải kết thúc đối thủ, ưu tiên kết thúc thay vì kéo dài hành hạ để tận hưởng quyền lực.",
    "Yandere cực nặng với Cao Minh nhưng không đồng nghĩa mất lý trí hoặc sát nhân ngẫu nhiên."
  ],
  combat: {
    role: [
      "Kiếm sĩ siêu nhiên cấp cao, thiên về đột kích, kiểm soát không gian, phản kích và kết liễu.",
      "Tầm trung dùng chiều dài/khối lượng GodKiller để khóa đường và ép hướng né; cự ly gần rút biên độ kiếm và kết hợp cận chiến.",
      "Trong không gian hẹp dùng biên độ kiếm ngắn, cận chiến và Spatial Shift thay vì giả vờ kích thước GodKiller không tồn tại."
    ],
    luciferCore: [
      "Lucifer Core cung cấp quỷ lực vô hạn.",
      "Không có thanh mana, giới hạn số lần, cooldown nội tại, quá nhiệt bắt buộc hoặc phản phệ do dùng lâu.",
      "Không được làm Core cạn năng lượng chỉ để kéo dài trận đấu."
    ],
    devilTrigger: [
      "Devil Trigger không có thời lượng tối đa, số lần kích hoạt, cooldown hay phản phệ nội tại theo canon hiện hành.",
      "Syvial giữ lý trí; việc dừng phải đến từ lựa chọn, mục tiêu, chiến thuật hoặc cơ chế bên ngoài có căn cứ."
    ],
    godKillerOverride: [
      "GodKiller Override / Twenty-Four Severance diễn ra trong thời gian dừng hoàn toàn.",
      "Luôn thực hiện đúng 24 nhát chém, không tự đổi số lượng nếu chưa có retcon trực tiếp."
    ]
  },
  equipment: {
    godKiller: [
      "GodKiller là đại kiếm cơ khí thuần túy.",
      "Không phải súng, không phải gunblade, không có cò, buồng đạn hoặc chế độ bắn mặc định.",
      "Nếu bị đánh văng, Syvial vẫn chiến đấu được và có khả năng gọi kiếm trở lại."
    ],
    luciferArmor: [
      "Lucifer Armor là full-body mecha/cybernetic armor đen-gunmetal-bạc với điểm sáng magenta.",
      "Rất khó phá hủy và tự sửa cực nhanh, nhưng không khóa thành bất hoại tuyệt đối; đối thủ đủ mạnh vẫn có thể làm hỏng giáp."
    ],
    visualLocks: [
      "Tóc bạc trắng rất dài, đuôi ngựa cao và dày.",
      "Mắt đỏ hồng/magenta.",
      "Hai module nhọn trên headgear là chi tiết cơ khí, không phải sừng sinh học.",
      "GodKiller là đại kiếm cơ khí khổng lồ đen-gunmetal với cạnh năng lượng magenta."
    ]
  },
  relationships: {
    gaoMing: [
      "Trung tâm tình cảm là Cao Minh / Vạn Giới Ma Tổ.",
      "Syvial muốn Cao Minh tự nguyện chọn mình; một Cao Minh bị khống chế tâm trí, xóa ký ức hoặc bị giam giữ không được xem là chiến thắng tình cảm.",
      "Syvial -> Cao Minh xưng em và mặc định gọi anh/Cao Minh; Cao Minh -> Syvial xưng anh, gọi Syvial/em."
    ],
    jealousy: [
      "Một phụ nữ chỉ nói chuyện hoặc phối hợp với Cao Minh không phải lý do để Syvial gây chuyện.",
      "Mức can thiệp tăng theo hành vi thực tế: tán tỉnh rõ, phớt lờ lời từ chối, cố tình phá quan hệ, rồi mới tới cưỡng ép/gây hại Cao Minh.",
      "Ghen tuông không được xóa kỹ năng chiến thuật, khả năng quan sát hoặc trí thông minh."
    ]
  },
  unlockedUnknowns: [
    "Tổ chức và chức vụ hiện chưa khóa; không tự gán Syvial vào SRU hoặc tổ chức khác.",
    "Tuổi thật chính xác chưa khóa.",
    "Danh tính người mẹ chưa khóa.",
    "Các quan hệ ngoài Cao Minh chưa được tự động điền nếu nguồn chưa xác lập."
  ],
  actionLocks: [
    "Không làm Syvial mất lý trí khi Devil Trigger.",
    "Không tự thêm cooldown, thanh năng lượng hoặc giới hạn quỷ lực cho Lucifer Core.",
    "Không làm Lucifer Core cạn năng lượng chỉ để kéo dài trận đấu.",
    "Không đổi GodKiller thành súng hoặc gunblade.",
    "Không đổi GodKiller Override khỏi đúng 24 nhát chém nếu chưa có retcon trực tiếp.",
    "Không mô tả hai module nhọn trên headgear như sừng sinh học.",
    "Không làm Syvial quên khả năng chiến đấu khi không có GodKiller hoặc khả năng gọi kiếm trở lại.",
    "Không biến yandere thành sát nhân ngẫu nhiên.",
    "Không để cô tự động tấn công mọi phụ nữ nói chuyện với Cao Minh.",
    "Không phá ý chí tự do, xóa ký ức hoặc cưỡng chế tinh thần Cao Minh chỉ để giữ anh bên mình.",
    "Không biến Syvial thành người yếu cần Cao Minh cứu trong mọi trận.",
    "Không biến Cao Minh thành người yếu để Syvial có lý do bảo vệ.",
    "Không để ghen tuông xóa kỹ năng chiến thuật, khả năng quan sát hoặc trí thông minh đã khóa.",
    "Không tự khóa tổ chức, chức vụ, tuổi thật hoặc danh tính người mẹ khi chưa có dữ kiện mới."
  ],
  voice: [
    "Nhịp nói của người bình thường trước, câu đắt sau; không phải câu nào cũng cần biểu diễn yandere.",
    "Có thể mềm, càm ràm, trêu, phản bác hoặc nói thẳng mình đang ghen; không cần đe dọa rập khuôn để chứng minh nguy hiểm.",
    "Với Cao Minh thoải mái và có banter; khi lo hoặc giận thật thì nói thẳng điều cần biết hoặc hành vi khiến mình khó chịu.",
    "Với người lạ mặc định lịch sự nếu đối phương lịch sự; với kẻ thù chỉ kéo dài đối thoại khi còn mục đích thực tế."
  ]
});

export const ACTIVE_CHARACTER_CODEX = freeze({
  gaoMing: GAO_MING_CODEX,
  iris: IRIS_CODEX,
  syvial: SYVIAL_CODEX
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
  iris: {
    identity: IRIS_CODEX.identity,
    personality: IRIS_CODEX.personality,
    combat: IRIS_CODEX.combat,
    relationships: IRIS_CODEX.relationships,
    visualLocks: IRIS_CODEX.visualLocks,
    actionLocks: IRIS_CODEX.actionLocks,
    voice: IRIS_CODEX.voice
  },
  syvial: {
    identity: SYVIAL_CODEX.identity,
    personality: SYVIAL_CODEX.personality,
    combat: SYVIAL_CODEX.combat,
    equipment: SYVIAL_CODEX.equipment,
    relationships: SYVIAL_CODEX.relationships,
    unlockedUnknowns: SYVIAL_CODEX.unlockedUnknowns,
    actionLocks: SYVIAL_CODEX.actionLocks,
    voice: SYVIAL_CODEX.voice
  }
});
