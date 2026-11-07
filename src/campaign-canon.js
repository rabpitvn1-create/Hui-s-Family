const freeze = (value) => Object.freeze(value);

export const CAMPAIGN_STAGE_IDS = freeze([
  "long_hai",
  "vung_tau",
  "can_gio",
  "prenn",
  "backrooms",
  "cho_lon_return",
  "dong_thap",
  "hue",
  "cho_lon_final"
]);

// Arc I hợp nhất (HA_O_MON_ARC_V1, khóa chủ nhân 2026-11-07): ba stageId
// long_hai / vung_tau / can_gio là MỘT arc duy nhất, hiển thị một HỒI I.
// arcId tách khỏi stageId; 5 kỳ là nhịp nội bộ của arc, không phải stage.
export const HA_O_MON_ARC = freeze({
  id: "ha_o_mon_1899",
  title: "Hạ Ô Khai Tông: Tam Giang Tranh Bá",
  displayKicker: "HỒI I // HẠ Ô KHAI TÔNG // 1899",
  stageIds: freeze(["long_hai", "vung_tau", "can_gio"]),
  phases: freeze([
    freeze({ id: "ky1_villa_seed", label: "Kỳ I — Biệt thự Hứa Gia, gieo mầm Hạ Ô Môn", sceneBudget: 80 }),
    freeze({ id: "ky2_phuc_tho_route", label: "Kỳ II — Phúc Thọ, tuyến quan tài", sceneBudget: 25 }),
    freeze({ id: "ky3_founding", label: "Kỳ III — Khai tông, Vạn Phàm Thụ Pháp", sceneBudget: 45 }),
    freeze({ id: "ky4_five_power_struggle", label: "Kỳ IV — Ngũ phương tranh lợi", sceneBudget: 44 }),
    freeze({ id: "ky5_can_gio_finale", label: "Kỳ V — Cần Giờ, Tam Giang Huyết Chiến", sceneBudget: 49 })
  ]),
  // Sổ ký ức của Tiểu Lan trong Arc I: khóa cứng, không mốc nào khác.
  memoryLedger: freeze([100, 92, 84, 79, 68]),
  // Vòng Không Gian tại neo thứ ba Cần Giờ: chỉ hai người sang Prenn.
  prennTransfer: freeze({
    travellers: freeze(["Cao Minh", "Hứa Tiểu Lan"]),
    othersRemainIn1899: true
  })
});

const BACKROOMS_FLOORS = freeze([
  {
    floor: 0,
    name: "Khu mê cung văn phòng không người",
    boss: "Nhân viên Mực Đen",
    environment: "Văn phòng hành chính vô tận, giấy dán tường vàng úa, thảm nỉ ẩm và hồ sơ ghi lại hành động vừa xảy ra.",
    rule: "Bản đồ không đáng tin; không mở cửa đỏ khi có tiếng gõ phía sau, vì tiếng gõ có thể phát ra từ chính phía người mở.",
    threats: ["Nhân viên Mực Đen bò ra từ ngăn kéo, gầm bàn và vết mực", "Nạn nhân bị biến thành hồ sơ"],
    exit: "Tìm cánh cửa đỏ đứng riêng và mở đúng lúc không có tiếng gõ."
  },
  {
    floor: 1,
    name: "Khu cửa đỏ vô tận",
    boss: "Người Gõ Cửa",
    environment: "Hành lang khách sạn hẹp với hàng triệu cửa đỏ có số thứ tự liên tục thay đổi.",
    rule: "Người Gõ Cửa chỉ tồn tại khi cửa khép; tay nắm nóng chỉ an toàn trước khi bị chạm.",
    threats: ["Cửa tự mở đồng loạt", "Người Gõ Cửa xuất hiện gần hơn sau mỗi lần đóng cửa"],
    exit: "Bước qua cánh cửa không số xuất hiện giữa hai cửa mang cùng một con số."
  },
  {
    floor: 2,
    name: "Nhà ga không đường ray",
    boss: "Hành Khách Trễ Giờ",
    environment: "Nhà ga mái kính không có đường ray, bảng giờ ghi những nơi không tồn tại và một đầu máy vô hình đi xuyên đại sảnh.",
    rule: "Không trả lời câu hỏi về thời gian bằng bất kỳ con số nào; người trả lời sẽ bị nhận diện là chuyến tàu.",
    threats: ["Hành Khách Trễ Giờ", "Đầu máy vô hình", "Bị đánh dấu là chuyến tàu"],
    exit: "Lên toa tàu không có đầu máy và không chọn toa có hành khách nhìn ra ngoài."
  },
  {
    floor: 3,
    name: "Đại khách sạn không có khách",
    boss: "Người Hầu Không Lưng",
    environment: "Khách sạn Belle Époque vô tận với phòng đã chuẩn bị sẵn cho người chưa từng đến.",
    rule: "Ngủ trong phòng khóa kín sẽ tỉnh ở hành lang; ngủ giữa hành lang sẽ tỉnh trong phòng bị khóa từ ngoài.",
    threats: ["Người Hầu Không Lưng", "Sinh vật chui ra từ khoảng rỗng sau thân chúng"],
    exit: "Đi thang máy xuống tầng hầm bằng cách nói tên một tầng không tồn tại."
  },
  {
    floor: 4,
    name: "Nhà máy hơi nước đang thở",
    boss: "Thợ Máy Rỗng",
    environment: "Nhà máy gạch đỏ co giãn như lồng ngực; máy móc chỉ vận hành máy móc khác mà không tạo sản phẩm.",
    rule: "Mỗi nhịp thở ra phủ hơi nóng kín hành lang; tiếng động cho phép Thợ Máy Rỗng tạo công cụ săn mồi từ cơ thể chúng.",
    threats: ["Thợ Máy Rỗng", "Hình người bị ép khỏi van hơi và nồi hơi khóa"],
    exit: "Chui qua một nồi hơi đã nguội, bên trong lớn hơn toàn bộ nhà máy."
  },
  {
    floor: 5,
    name: "Bệnh viện không bệnh nhân",
    boss: "Y Tá Màn Trắng",
    environment: "Bệnh viện gạch trắng có giường lõm, chuông gọi từ phòng bị xây kín và bệnh án về những chứng bệnh không thể tồn tại.",
    rule: "Người bị thương ít bị săn hơn người khỏe; tự gây thương tích khiến bệnh viện coi người đó là nhân viên.",
    threats: ["Y Tá Màn Trắng sửa cơ thể cho khớp bệnh án", "Bệnh nhân vô hình"],
    exit: "Đẩy một giường vào phòng phẫu thuật số 0 khi toàn bộ đèn cùng tắt."
  },
  {
    floor: 6,
    name: "Nhà hát không sân khấu",
    boss: "Diễn Viên Chưa Ra Đời",
    environment: "Nhà hát không có sân khấu, mọi ghế quay về một hố trống và dàn nhạc vô hình luôn chơi sai một nốt.",
    rule: "Mỗi nốt sai tạo thêm khán giả; gây tiếng động khiến toàn khán phòng vỗ tay và thực thể bò qua ghế.",
    threats: ["Khán Giả Nhìn Ngược", "Diễn Viên Chưa Ra Đời mang gương mặt từ ký ức người nhìn"],
    exit: "Ngồi vào chiếc ghế duy nhất quay khỏi hố và chờ màn hạ từ trần."
  },
  {
    floor: 7,
    name: "Kho lưu trữ mất chữ",
    boss: "Thủ Thư Không Miệng",
    environment: "Kho hồ sơ vô tận nơi mực bò khỏi trang và việc đọc xóa từ, khái niệm hoặc ký ức tương ứng.",
    rule: "Đọc làm mất ký ức; đốt tài liệu trả chữ lại nhưng chữ xuất hiện trên tường, da hoặc bên trong mí mắt.",
    threats: ["Con dấu xóa tên, kỹ năng, ký ức hoặc giác quan", "Mất khái niệm về đường thoát"],
    exit: "Tìm bản đồ trắng và gấp thành hình cánh cửa."
  },
  {
    floor: 8,
    name: "Phố mái kính không bầu trời",
    boss: "Người Đi Dạo",
    environment: "Thành phố thương mại dưới mái kính, mưa bay ngược và biển hiệu đổi ngôn ngữ sau mỗi lần chớp mắt.",
    rule: "Bóng đổ có thể tách khỏi chủ thể, mọc cơ thể và tiếp tục tồn tại độc lập.",
    threats: ["Người Đi Dạo", "Ma-nơ-canh", "Bàn tay thò xuống từ mái kính"],
    exit: "Vào ngôi trường chỉ mở khi tiếng chuông nhà thờ vang dưới lòng đất."
  },
  {
    floor: 9,
    name: "Trường nội trú lúc nửa đêm",
    boss: "Giám Thị Dài Tay",
    environment: "Trường học nằm trong đêm bất biến; bảng đen tự viết bài học về người đang có mặt.",
    rule: "Giám thị xuất hiện khi có người chạy, nói lớn hoặc mở cửa không được phép, nhưng không ai biết cửa nào được phép.",
    threats: ["Học Sinh Trong Tường", "Giám Thị Dài Tay"],
    exit: "Viết tên mình lên bảng rồi xóa trước khi viên phấn tự viết tên lần thứ hai."
  },
  {
    floor: 10,
    name: "Con tàu mắc cạn trong hành lang",
    boss: "Thủy Thủ Trương Nở",
    environment: "Tàu viễn dương bị nhét vào hành lang đá, cửa sổ nhìn ra đại dương dựng đứng và nước rơi từ trần.",
    rule: "Không gian rộng làm thủy thủ phình lên; khe hẹp ép chúng mỏng như giấy.",
    threats: ["Thủy Thủ Trương Nở", "Người Chết Đuối Khô kéo nạn nhân về mặt nước dưới sàn"],
    exit: "Leo xuống đáy khoang cho đến khi thang biến thành giếng gạch."
  },
  {
    floor: 11,
    name: "Cống ngầm và lò than",
    boss: "Phu Lò",
    environment: "Cống, hầm lò và đường than đan nhau trong không khí nóng đặc; xe goòng chở giày, răng người và cửa đỏ.",
    rule: "Lửa xua phần lớn quái vật nhưng làm đường hầm dài thêm.",
    threats: ["Phu Lò chỉ có mắt trong bóng tối", "Sinh vật trồi khỏi than, nước và kim loại nóng"],
    exit: "Đi theo đường ống có luồng khí lạnh tới cổng triển lãm dát vàng."
  },
  {
    floor: 12,
    name: "Hội chợ thế giới đã đóng cửa",
    boss: "Nhà Phát Minh",
    environment: "Khu triển lãm về một thế kỷ mới không bao giờ đến, đầy máy móc có hình dạng hợp lý nhưng chức năng vô nghĩa.",
    rule: "Người Tham Quan Bằng Sáp bất động khi nhìn trực diện nhưng chạy trong kính phản chiếu.",
    threats: ["Người Tham Quan Bằng Sáp", "Nhà Phát Minh lắp bộ phận nạn nhân vào máy"],
    exit: "Bước vào gian trưng bày mang tên năm sinh của chính mình dù năm đó chưa tới."
  },
  {
    floor: 13,
    name: "Nhà thờ đồng hồ không giờ",
    boss: "Thánh Tượng Quay Lưng",
    environment: "Thánh đường đá đen có đồng hồ chỉ về phía người nhìn và chuông xóa sự kiện khỏi lịch sử cá nhân.",
    rule: "Không quan sát thì tượng đứng sau lưng; nhìn quá lâu khiến da hóa đá.",
    threats: ["Tu Sĩ Không Chuông", "Thánh Tượng Quay Lưng", "Mất ký ức cá nhân"],
    exit: "Leo lên tháp chuông có bóng đổ hướng lên trời."
  },
  {
    floor: 14,
    name: "Thành phố ban công chồng lên nhau",
    boss: "Cư Dân Ban Công",
    environment: "Thành phố không có mặt đất, gồm căn hộ và ban công chồng lên nhau trong vực sâu vô tận.",
    rule: "Đi xuống làm thành phố sáng hơn; đi lên chỉ nghe phố xá mà không bao giờ tới mặt đất.",
    threats: ["Cư Dân Ban Công", "Căn hộ bò về phía người hỏi", "Quái vật chui từ đồ gia dụng"],
    exit: "Nhảy vào cửa sổ phản chiếu một căn phòng không tồn tại phía sau."
  },
  {
    floor: 15,
    name: "Đại sảnh của thế kỷ chưa từng xảy ra",
    boss: "Đám Đông Chưa Sinh",
    environment: "Mọi tầng trước bị ép chung vào một kiến trúc; ký ức sai trở thành hành lang và người quen trở thành thực thể.",
    rule: "Tầng dùng ký ức người sống để xây thêm Backrooms; một bản sao thế giới thật có thể khiến cả nhóm tin rằng đã thoát.",
    threats: ["Mọi thực thể từ các tầng trước", "Đám Đông Chưa Sinh", "Bản sao của người quen và thế giới thật"],
    exit: "Tìm văn phòng vàng và quyết định có ký tờ giấy: Bạn chưa từng rời khỏi đây."
  }
]);

const objectives = (entries) => freeze(entries.map(([id,label]) => freeze({id,label})));
const longHaiObjectives = objectives([
 ["infiltrate_villa","Tiếp cận biệt thự, bảo vệ những gia nhân còn tỉnh táo."],
 ["locate_tieu_lan","Gặp Hứa Tiểu Lan và nhận diện sự thay thế chức năng tự chủ."],
 ["classify_servants","Phân biệt gia nhân bị ép, bị lừa và tự nguyện."],
 ["break_long_hai_ritual","Phá điểm neo nghi thức mà không sát hại vật chủ."],
 ["escape_long_hai","Đưa Tiểu Lan ra khỏi biệt thự với sự đồng thuận của nàng."]
]);
const vungTauObjectives = objectives([
 ["inspect_coffin_route","Khảo sát đường thoát quan tài ở cửa biển."],
 ["identify_living_hosts","Phân biệt vật chủ còn tỉnh táo với hàng hóa được khai báo."],
 ["trace_finance","Truy vết việc Tài Phòng tài trợ tuyến vận chuyển."],
 ["recover_ledger_two","Thu hồi và xác thực mảnh Sổ Lục Môn số hai."],
 ["secure_sea_exit","Bảo toàn người được cứu và tìm đường tới Cần Giờ."]
]);
const canGioObjectives = objectives([
 ["secure_transport","Bảo đảm đường thủy và sức khỏe Tiểu Lan."],
 ["investigate_smuggling_route","Điều tra tuyến ghe, vật chủ và điểm neo."],
 ["destroy_anchor_one","Vô hiệu điểm neo thứ nhất."],
 ["destroy_anchor_two","Vô hiệu điểm neo thứ hai."],
 ["destroy_anchor_three","Vô hiệu điểm neo thứ ba; bảo toàn dấu vết mảnh Sổ."],
 ["resist_collective_command","Tiểu Lan dùng phản thanh để trì hoãn lệnh tập thể."],
 ["survive_reality_breach","Sống sót qua biến cố không gian; những người còn lại ở lại năm 1899."]
]);
const prennObjectives = objectives([
 ["establish_survival","Tìm quy luật sinh tồn và tránh phá lịch sử bất biến."],
 ["compare_three_versions","Đối chiếu ký ức của ba dị bản Bạch Y Vô Danh."],
 ["separate_true_soul","Tách linh hồn thật khỏi mạng lời đồn mà không chém hủy chứng cứ."],
 ["reach_backrooms","Tìm lối vào Backrooms độc lập để trở về thực tại gốc."]
]);
const returnObjectives = objectives([
 ["recover_long_hai_ledger","Xác thực mảnh Sổ tại rương thuốc Long Hải."],
 ["recover_cho_lon_ledger","Nhận và đối chiếu mảnh Sổ Bà Năm Liên giữ."],
 ["map_six_fragments","Ghép bản đồ truy xuất sáu phần Sổ Lục Môn."],
 ["restore_name_evidence","Giữ chứng cứ tên Hứa Tiểu Lan đã bị xóa khỏi gia phả."]
]);
const dongThapObjectives = objectives([
 ["investigate_western_branch","Điều tra cánh tay miền Tây của Lục Môn."],
 ["protect_living_hosts","Bảo vệ những vật chủ còn tỉnh táo."],
 ["disable_blood_network","Cắt mạng Huyết mà không hủy cơ thể vật chủ."],
 ["recover_ledger_five","Xác thực mảnh Sổ trong sổ nợ của Tài Phòng."]
]);
const hueObjectives = objectives([
 ["trace_rescue_letter","Truy nguồn thư cầu cứu của vật chủ Huế."],
 ["verify_image_records","Đối chiếu chứng cứ thật và hồ sơ của Ảnh Phòng."],
 ["recover_ledger_six","Giải mật mã và xác thực phần thứ sáu của Sổ."],
 ["protect_memory","Bảo vệ nhân chứng và phần ký ức còn lại của Tiểu Lan."]
]);
const finalObjectives = objectives([
 ["map_hua_network","Lập bản đồ mạng lưới Hứa Gia và đối chiếu sáu mảnh Sổ."],
 ["confront_hua_bon_hoa","Đối diện Hứa Bổn Hoả, cha ruột và Đại Tế Chủ."],
 ["prevent_six_birth_rite","Ngăn Đại Lễ Lục Sinh và quyền giáng thế của La Sát Lục Thủ."],
 ["dismantle_six_gates","Phá Lục Môn mà không giết sạch người họ Hứa."]
]);
export const CAMPAIGN_ROUTE = freeze([
 {id:"long_hai",label:"Long Hải",act:"Chặng 1",allowedLocations:["Biệt thự Hứa Gia","Long Hải"],premise:"Giải cứu Tiểu Lan, nhận diện liên kết Danh.",objectives:longHaiObjectives,next:"vung_tau"},
 {id:"vung_tau",label:"Vũng Tàu",act:"Chặng 2",allowedLocations:["Vũng Tàu","cửa biển","tuyến quan tài"],premise:"Điều tra tuyến vận chuyển và mảnh Sổ số hai.",objectives:vungTauObjectives,next:"can_gio"},
 {id:"can_gio",label:"Cần Giờ",act:"Chặng 3",allowedLocations:["Cần Giờ","rừng ngập mặn","ba điểm neo"],premise:"Phá ba điểm neo; hai người rời khỏi năm 1899, nơi đến chưa rõ.",objectives:canGioObjectives,next:"prenn"},
 // Nhãn chặng 4 trên bề mặt người chơi giữ trung tính theo luật che
 // giấu kết Arc I (Kỳ V bước 9, 2026-11-07): không nêu điểm đến hay
 // mốc thời đại; dữ kiện canon nội bộ nằm ở hồ sơ hậu trường.
 {id:"prenn",label:"Chặng chưa rõ",act:"Chặng 4",allowedLocations:["Đèo Prenn","mạng ký ức Bạch Y"],premise:"Quá khứ bất biến, ba dị bản Bạch Y Vô Danh.",objectives:prennObjectives,next:"backrooms"},
 {id:"backrooms",label:"Backrooms Chợ Lớn",act:"Chặng 5",allowedLocations:BACKROOMS_FLOORS.map(f=>`Tầng ${f.floor}: ${f.name}`),premise:"16 tầng độc lập; mỗi tầng có luật và điều kiện mở lối riêng.",objectives:[],next:"cho_lon_return"},
 {id:"cho_lon_return",label:"Trở về Chợ Lớn",act:"Chặng 6",allowedLocations:["Chợ Lớn","nhà Hứa Gia","kho hồ sơ"],premise:"Truy xét sáu mảnh Sổ, phục dựng tên Tiểu Lan.",objectives:returnObjectives,next:"dong_thap"},
 {id:"dong_thap",label:"Đồng Tháp",act:"Chặng 7",allowedLocations:["Đồng Tháp","tuyến ghe gạo"],premise:"Điều tra Huyết Phòng và mảnh Sổ số năm.",objectives:dongThapObjectives,next:"hue"},
 {id:"hue",label:"Huế",act:"Chặng 8",allowedLocations:["Huế","Ảnh Phòng"],premise:"Giải thư mật mã và bảo vệ nhân chứng.",objectives:hueObjectives,next:"cho_lon_final"},
 {id:"cho_lon_final",label:"Chợ Lớn chung kết",act:"Chặng 9",allowedLocations:["Chợ Lớn","nhà chính Hứa Gia","Lục Môn"],premise:"Ngăn Đại Lễ Lục Sinh, trả lại quyền tự quyết cho Tiểu Lan.",objectives:finalObjectives,next:null}
]);
export const NARRATIVE_RULES = freeze({
  sourcePriority: [
    "Mệnh lệnh mới nhất của người dùng",
    "Xương sống chiến dịch và trạng thái hiện tại",
    "Canon thế giới và hồ sơ nhân vật hiện hành",
    "Sự kiện đã phát sinh trong bản lưu sau khi loại bỏ dữ kiện legacy",
    "Quy tắc kỹ thuật viết",
    "Sáng tạo của model"
  ],
  abilities: [
    "Chỉ active-character-codex.js được định nghĩa kỹ năng, trang bị, tính cách và quan hệ của Cao Minh.",
    "Không hạ thấp nhân vật để bảo vệ cốt truyện; đối trọng phải đến từ quy luật, thông tin, mục tiêu, môi trường hoặc hậu quả có căn cứ.",
    "Nhân vật luôn nhớ kỹ năng, trang bị, khả năng tiếp cận, thương tích và giới hạn đã khóa trong canon hiện hành.",
    "Không hồi tố rằng thiết bị hết pin, bị bỏ quên hoặc kỹ năng bị khóa nếu canon hiện hành không thiết lập điều đó.",
    "Không sáng tác kỹ năng, vũ khí, tổ chức, cooldown, phản phệ hoặc tính cách mới chỉ để tạo kịch tính.",
    "Căng thẳng đến từ đối thủ, thông tin thiếu, mục tiêu xung đột, đạo đức, thời gian, môi trường và nguồn lực hữu hạn; không đến từ việc nhân vật quên."
  ],
  dialogue: [
    "Mỗi lượt thoại có mục đích và làm thay đổi thông tin, lòng tin, quan hệ, quyền chủ động, nguy hiểm hoặc kế hoạch.",
    "Không biến hội thoại thành hai nhân vật đọc lại cốt truyện; không để mọi câu đều sắc bén hoặc cân xứng.",
    "Nhân vật có thể né, trả lời một phần, im lặng hoặc đổi chiến thuật khi cách nói cũ thất bại.",
    "Xưng hô phản ánh quan hệ trong active character canon và chỉ thay đổi khi có nguyên nhân.",
    "Cảm xúc phải đổi điều nhân vật chú ý, cách nói và quyết định; không biến nhãn tsundere/yandere thành trò hề làm mất năng lực."
  ],
  language: [
    "Viết tiếng Việt rõ nghĩa, cụ thể, đúng kết hợp từ và đúng tầng giọng của người nói.",
    "Không dùng ẩn dụ khó hiểu, câu trailer giả sâu, cân xứng quá mức hoặc cử chỉ AI lặp lại.",
    "Không thay tên nhân vật bằng hàng loạt từ đồng nghĩa chỉ để tránh lặp.",
    "Cô đọng không đồng nghĩa cắt mất mệnh lệnh, chủ thể hoặc thông tin cần thiết.",
    "Kinh dị ưu tiên vật quen thuộc, sai lệch nhỏ, chuyển động đang tiếp diễn và phản ứng bị kìm nén."
  ],
  scene: [
    "Mỗi cảnh phải có mục tiêu, đối trọng, lựa chọn, cái giá và trạng thái đầu-cuối khác nhau.",
    "Không tạo NPC, địa điểm, vật phẩm, bí mật hoặc năng lực mới nếu chúng làm thay đổi xương sống ngoài phạm vi hiện tại.",
    "Được sáng tạo vi mô trong khu vực hiện tại: cử chỉ, nhịp thoại, tiểu địa điểm, NPC chức năng và vật dụng không phá canon.",
    "Mỗi boss có quy luật riêng và có thể được giết, vô hiệu hóa hoặc vượt qua bằng đánh đổi khi canon tầng cho phép.",
    "Người nhiễm Tử Mẫu Trùng không mặc nhiên đáng chết; phân loại trách nhiệm và khả năng khống chế."
  ]
});

const BACKROOMS_OBJECTIVES = freeze([
  { id: "discover_floor_rule", label: "Phát hiện và kiểm chứng quy luật vô nghĩa của tầng." },
  { id: "secure_floor_requirement", label: "Thu thập vật, dữ kiện hoặc điều kiện cần để mở lối." },
  { id: "resolve_floor_boss", label: "Tiêu diệt, vô hiệu hóa hoặc vượt boss bằng cái giá hợp lệ." },
  { id: "open_floor_exit", label: "Thực hiện chính xác điều kiện chuyển sang tầng kế." }
]);

export function getStageById(stageId) {
  return CAMPAIGN_ROUTE.find((stage) => stage.id === stageId) || CAMPAIGN_ROUTE[0];
}

export function getBackroomsFloor(floor) {
  const numeric = Number.isInteger(Number(floor)) ? Number(floor) : 0;
  return BACKROOMS_FLOORS[Math.min(15, Math.max(0, numeric))];
}

export function getCurrentObjectives(progression = {}) {
  const stage = getStageById(progression.stageId);
  return stage.id === "backrooms" ? BACKROOMS_OBJECTIVES : stage.objectives;
}

export function getDirectorContext(state = {}) {
  const progression = state.progression && typeof state.progression === "object" ? state.progression : {};
  const stage = getStageById(progression.stageId);
  const objectives = getCurrentObjectives(progression);
  const completed = new Set(Array.isArray(progression.completedObjectiveIds) ? progression.completedObjectiveIds : []);
  const context = {
    stage: {
      id: stage.id,
      label: stage.label,
      act: stage.act,
      premise: stage.premise,
      boss: stage.boss,
      allowedLocations: stage.allowedLocations,
      objectives: objectives.map((objective) => ({ ...objective, completed: completed.has(objective.id) })),
      rule: "Mỗi lượt chỉ được hoàn thành tối đa một mục tiêu chưa hoàn thành; không được nhảy khu vực."
    },
    finalConsequences: {
      worldEaterPhaseDisabled: Boolean(state.flags?.pheGioiDefeated),
      enemyReinforcementsReduced: Boolean(state.flags?.laHauDefeated),
      falsePartyMembersDisabled: Boolean(state.flags?.voDienDefeated)
    }
  };

  if (stage.id === "backrooms") {
    context.backrooms = {
      independentReality: true,
      independentExitMark: "living_anchor_1899",
      floor: getBackroomsFloor(progression.backroomsFloor),
      floorsCleared: Number(state.campaignStats?.floorsCleared) || 0,
      memoryIntegrity: Number(state.campaignStats?.memoryIntegrity) || 0,
      marks: Array.isArray(progression.backroomsMarks) ? progression.backroomsMarks.slice(-12) : [],
      partySeparated: Boolean(progression.partySeparated)
    };
  }

  return context;
}


export function applyProgressionUpdate(currentProgression = {}, currentFlags = {}, rawUpdate = {}) {
 const stageId = CAMPAIGN_STAGE_IDS.includes(currentProgression.stageId) ? currentProgression.stageId : "long_hai";
 const progression = {
   ...currentProgression,
   stageId,
   stageIndex: CAMPAIGN_STAGE_IDS.indexOf(stageId),
   backroomsFloor: Number.isInteger(currentProgression.backroomsFloor) ? currentProgression.backroomsFloor : -1,
   completedObjectiveIds: Array.isArray(currentProgression.completedObjectiveIds) ? [...currentProgression.completedObjectiveIds] : [],
   backroomsMarks: Array.isArray(currentProgression.backroomsMarks) ? [...currentProgression.backroomsMarks] : [],
   campaignComplete: Boolean(currentProgression.campaignComplete)
 };
 const flags = {...currentFlags};
 const notes = [];
 const objectives = getCurrentObjectives(progression);
 const requested = Array.isArray(rawUpdate.completedObjectiveIds) ? rawUpdate.completedObjectiveIds : [];
 const nextObjective = objectives.find(o => requested.includes(o.id) && !progression.completedObjectiveIds.includes(o.id));
 if (nextObjective) {
   progression.completedObjectiveIds.push(nextObjective.id);
   notes.push("Hoàn thành: " + nextObjective.label);
 }
 for (const mark of (rawUpdate.backroomsMarksAdded || []).slice(0,2)) {
   if (typeof mark === "string" && !progression.backroomsMarks.includes(mark)) progression.backroomsMarks.push(mark);
 }
 progression.backroomsMarks = progression.backroomsMarks.slice(-20);
 if (stageId === "long_hai") {
   if (progression.completedObjectiveIds.includes("break_long_hai_ritual")) flags.longHaiAnchorDestroyed = true;
   if (progression.completedObjectiveIds.includes("escape_long_hai")) flags.tieuLanRescued = true;
 }
 if (stageId === "can_gio") {
   flags.canGioAnchorCount = ["destroy_anchor_one","destroy_anchor_two","destroy_anchor_three"]
     .filter(id=>progression.completedObjectiveIds.includes(id)).length;
   if (progression.completedObjectiveIds.includes("survive_reality_breach")) {
     flags.routeLocked = true;
     if (!progression.backroomsMarks.includes("living_anchor_1899")) progression.backroomsMarks.push("living_anchor_1899");
   }
 }
 const allDone = objectives.every(o=>progression.completedObjectiveIds.includes(o.id));
 const canAdvance = stageId !== "long_hai" || (flags.longHaiAnchorDestroyed && flags.tieuLanRescued);
 if (allDone && canAdvance) {
   if (stageId === "backrooms" && progression.backroomsFloor < 15) {
     progression.backroomsFloor += 1;
     progression.completedObjectiveIds = [];
   } else if (stageId === "cho_lon_final") {
     flags.materDescentPrevented = true;
     flags.huaCultDismantled = true;
     progression.campaignComplete = true;
   } else {
     const stage = getStageById(stageId);
     progression.stageId = stage.next;
     progression.stageIndex = CAMPAIGN_STAGE_IDS.indexOf(stage.next);
     progression.completedObjectiveIds = [];
     if (stage.next === "backrooms") progression.backroomsFloor = 0;
     if (stageId === "backrooms") {
       flags.escapedBackrooms = true;
       progression.backroomsFloor = -1;
     }
     notes.push("Chuyển chặng: " + getStageById(stage.next).label);
   }
 }
 return {progression,flags,notes};
}
