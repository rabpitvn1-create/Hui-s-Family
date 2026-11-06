import {
  CAMPAIGN_ROUTE,
  NARRATIVE_RULES
} from "./campaign-canon.js";
import {
  ACTIVE_CHARACTER_CODEX,
  GAO_MING_CODEX
} from "./active-character-codex.js";

export const WORLD_CANON = Object.freeze({
  id: "hua-family-world-v4",
  title: "Hứa Gia: LIBERA-1899",
  mode: "Fixed-script visual novel with no runtime AI-GM",
  opening: {year:1899,location:"Long Hải, Nam Kỳ",premise:"Cao Minh tới Long Hải vì vầng sáng chưa rõ nguồn gốc; gặp Tiểu Lan mang Nghịch Trùng, bị giam dưới vỏ bệnh phong."},
  campaignRoute: CAMPAIGN_ROUTE.map((stage) => ({
    id: stage.id,
    label: stage.label,
    act: stage.act,
    premise: stage.premise,
    next: stage.next
  })),
  hardCanon: [
    "Tuyến chín chặng: Long Hải → Vũng Tàu → Cần Giờ → Prenn 200 năm trước → Backrooms Chợ Lớn 16 tầng → trở về Chợ Lớn → Đồng Tháp → Huế → chung kết Chợ Lớn.",
    "Visual Novel viết sẵn hoàn toàn; AI-GM không được phát sinh diễn biến khi chơi.",
    "Codex R02 tại active-character-codex.js là nguồn duy nhất cho năng lực và giới hạn Cao Minh; không chỉnh Codex R02.",
    "Cao Minh là Đạo Tổ, Vạn Giới Ma Tổ, tự xưng bổn tọa; không dùng súng hoặc giáp công nghệ.",
    "Vầng sáng đưa Cao Minh từ Vạn Hoa Lầu tới Long Hải năm 1899 có nguồn gốc CHƯA KHÓA.",
    "Cao Minh chém nát được mọi thứ, nhưng thứ cần chém nằm trong người Tiểu Lan; chém toàn bộ khiến nàng chết, nên cuộc chiến là phẫu thuật gỡ từng sợi liên kết, trả giá bằng thần kinh và trí nhớ.",
    "Mục tiêu của Cao Minh là giữ Hứa Tiểu Lan sống và bảo đảm nàng được chết như con người, dưới đúng tên nàng đã bị Hứa gia xóa khỏi gia phả.",
    "Tiểu Lan cuối cùng chết thanh thản với nụ cười nhẹ, vẫn mang hình dạng con người; nàng đạt quyền chết là mình, hắn không giữ được nàng sống.",
    "Bổn tọa đã có thể hủy Thiên diệt Địa, nhưng Bổn Tọa vẫn không cứu được nàng...",
    "Cao Minh có vô hạn kỳ trân, tiên khí, linh đan; sức mạnh và tài sản không thay thế được quyền lựa chọn hay bản ngã gốc của Tiểu Lan.",
    "Tiểu Lan 18 tuổi, mang NGHỊCH TRÙNG; có thể nghe lệnh mạng nhưng từ chối và phản thanh, mỗi lần trả giá tổn thương thần kinh cùng ký ức.",
    "Lục Huyết Tửu khiến mạng trùng thay thế dần chức năng phối hợp tự chủ; tái tạo mô hoặc cung cấp năng lượng không khôi phục cấu trúc tự chủ độc lập.",
    "Sợi Tử cuối duy trì thân xác nhờ mạng; cắt giải phóng tư cách con người nhưng cơ thể chỉ còn dư lực sinh tồn, qua đời trước bình minh chung kết.",
    "Quyết định cuối của Tiểu Lan cần đủ thông tin, khả năng chọn và không cưỡng ép trực tiếp; Cao Minh được phản đối nhưng không chọn thay.",
    "La Sát Lục Thủ là thần sáu đầu, cần được nhớ/gọi đúng danh, điểm neo, vật chủ nối mạng và sự TỰ NGUYỆN trao quyền; cám dỗ bằng sự thật về cái giá.",
    "Hứa Bổn Hoả là cha ruột Tiểu Lan, gia chủ, Đại Tế Chủ mang Vương Trùng, đang bệnh và mất kiểm soát.",
    "Lâm Ngọc Chi, mẹ Tiểu Lan, chết khi nàng bảy tuổi và từng giúp người hầu trốn; không tự gán bà nguồn gốc Nghịch Trùng.",
    "Tiểu Lan xé Sổ Lục Môn thành sáu phần ở Tây Viện trước khi về Long Hải; giấu qua tuyến ghe, chi nhánh, trung gian và mật mã thương mại.",
    "Sáu phòng Tài, Giới, Ảnh, Huyết, Dược, Tàng nắm tiền nợ, gia phả, hồ sơ, vật chủ, thuốc và lưu trữ.",
    "Sáu liên kết Danh, Nợ, Lệnh, Ký, Thân, Tử trải qua nhận diện, can thiệp, tháo bỏ; không đồng nhất với sáu mảnh Sổ.",
    "Vật chủ bị điều khiển vẫn có thể tỉnh táo; không đánh đồng người bị ép với thủ phạm.",
    "Codex R02 không có phục sinh, đảo ngược thời gian hay tái tạo ký ức người khác; thần niệm có giới hạn thông tin.",
    "Cao Minh sử dụng Sát Ma Kiếm chém đoạn ma chướng và Tứ Kiếm Đoạn Mạch xử lý điểm nối; không phát minh kỹ năng.",
    "Cần Giờ: Nghịch Trùng phản thanh khi phá neo cuối, Tiểu Lan thành điểm neo sống đưa đội tới Prenn 200 năm trước.",
    "Quá khứ Prenn bất biến; ba dị bản Bạch Y cần đối chiếu trước khi tách linh hồn thật; không tự khóa danh tính Bạch Y và Hắc Kỵ.",
    "Backrooms là quần thể độc lập, có 16 tầng mỗi tầng luật, boss, cửa thoát riêng; đánh boss không tự mở cửa.",
    "backroomsMarks living_anchor_1899 chỉ định vị lối ra hợp lệ về năm 1899, không mở cửa hay thuộc La Sát.",
    "Mỗi lần mở game là campaign mới, save chỉ tải khi người chơi yêu cầu và phải tương thích canonVersion.",
    "Các nhân vật và tổ chức legacy đã bị xóa không tồn tại trong thế giới mới.",
    "Chung kết ngăn Đại Lễ Lục Sinh và phá Lục Môn mà không giết sạch người họ Hứa; chín ending khác hậu quả nhưng giữ nguyên cái chết và câu cuối Cao Minh."
],
  world: {
    era: "Nam Kỳ năm 1899 dưới chế độ thuộc địa trực tiếp của Pháp.",
    powerLayers: [
      "Bộ máy thuộc địa nắm luật, quân sự, thuế và giấy phép.",
      "Hương chức, hào mục và chủ đất nắm sổ bộ, đất, lao dịch và quan hệ làng.",
      "Thương nhân, chủ nợ, chủ kho và vận tải nắm tiền, gạo, thuốc, ghe thuyền và việc làm.",
      "Hứa Gia mua đúng mắt xích thay vì điều khiển toàn bộ chính quyền."
    ],
    huaFamily: {
      publicFace: "Đại gia tộc người Hoa có nhà chính tại Chợ Lớn, hoạt động thương nghiệp, tín dụng, vận tải, từ thiện và dưỡng bệnh.",
      hiddenNature: "Giáo đoàn Quỷ Tử Mẫu kết hợp huyết tộc, thương nghiệp, ký sinh và thần học của sự lệ thuộc.",
      expansion: "Lãnh địa được tạo bằng nợ, cơm ăn, việc làm, chỗ ở, bến ghe, thuốc và người đã Nhập Mẫu.",
      visualLanguage: ["miếu kín", "nhà dưỡng bệnh", "kho hàng", "bến ghe", "chuông đồng nhỏ", "bài khấn nửa Hoa nửa Việt", "tiếng trẻ khóc ở nơi không có trẻ"]
    },
    locales: {
      longHai: "Thánh địa giả dạng biệt thự dưỡng bệnh, đồng thời là nơi trung chuyển, giữ người và chuẩn bị vật chứa.",
      canGio: "Cổ họng đường thủy của giáo đoàn, mê cung bùn, rễ cây, nước lợ và vật chủ định hướng bằng rung động.",
      thuDauMot: "Xương sống lao động, đất nợ, gỗ, kho nội địa và dòng trùng thiên về cơ bắp.",
      vungTau: "Không gian dưỡng thương bị ký ức và ảo cảnh xâm lấn.",
      saiGonChoLon: "Trung tâm thuộc địa, thương nghiệp, nhà chính, kho ngầm và nội đường của Hứa Gia."
    },
    storyCharacters: {
      huaTieuLan: {identity:"Hứa Tiểu Lan, 18 tuổi, mang Nghịch Trùng; giữ quyền từ chối.",mind:["Lý trí, tự quyết, cần bằng chứng."],voice:"Kín, cụ thể."},
      huaBonHoa: {identity:"Hứa Bổn Hoả, cha ruột, gia chủ, Đại Tế Chủ mang Vương Trùng; bệnh và mất kiểm soát."},
      laSatLucThu: {identity:"La Sát Lục Thủ, thần sáu đầu, muốn nhận sự tự nguyện trao quyền điều khiển.",constraints:["Cần điểm neo.", "Không tạo ra Backrooms."]}

    }
  },
  characters: ACTIVE_CHARACTER_CODEX,
  agentOperationRules: Object.freeze([
    ...GAO_MING_CODEX.actionLocks
  ]),
  narrativeRules: NARRATIVE_RULES,
  generationRules: [
    "Cảnh mới phải nằm trong khu vực và tầng hiện tại do progression xác định.",
    "Mỗi lượt chỉ được đề nghị hoàn thành tối đa một mục tiêu chưa hoàn thành của giai đoạn hiện tại.",
    "Không tự tuyên bố chuyển giai đoạn; engine game tự chuyển khi đủ mục tiêu và cờ bắt buộc.",
    "Không hồi sinh người chết, xóa thương tích, quên vật phẩm, ký ức, quan hệ, bằng chứng hoặc hậu quả đã lưu.",
    "Mọi kỹ năng, trang bị, tính cách, quan hệ và giới hạn của Cao Minh phải lấy trực tiếp từ active-character-codex.js; không tự điền dữ kiện từ bản build cũ.",
    "Cao Minh phải vận hành đúng Thái Cổ Song Sát (Sát Thần Kiếm, Sát Ma Kiếm), Hắc Long Chiến Khải, Đạo Tổ Pháp Thể, Vạn Ma Đạo Kinh, Vạn Giới Thần Niệm, Song Sát Kiếm Quyết và các thần thông trong hồ sơ của anh với đúng giới hạn hiện hành khi chúng thực sự phù hợp tình huống; tuyệt đối không gán cho anh súng, đạn hay trang bị công nghệ.",
    "Hành động bất khả thi phải thất bại hoặc thành công một phần với cái giá cụ thể.",
    "Mỗi lượt phải thay đổi tình thế, không viết đối thoại vòng tròn hoặc đoạn văn chỉ tạo không khí mà không có hậu quả.",
    "Vật phẩm mới chỉ xuất hiện khi có nguồn gốc, công dụng, giới hạn và tác động cân bằng; imagePrompt dành cho model ảnh riêng.",
    "Giọng văn rõ, tự nhiên, tiết chế; không dùng ẩn dụ khó hiểu, câu trailer giả sâu hoặc lời thoại giải thích cho người đọc."
  ],
  characterAuthority: Object.freeze({
    gaoMing: GAO_MING_CODEX.source
  })
});

export const INITIAL_STATE = Object.freeze({
  version: "campaign-v4",
  campaignId: "libera-1899",
  turn: 0,
  scene: {
    id: "lh_prologue",
    backgroundId: "long-hai-exterior",
    kicker: "HỒI 1 // LONG HẢI // 1899",
    title: "Biệt thự dưỡng bệnh",
    narration: ["Long Hải, năm 1899. Một vầng sáng đưa Cao Minh tới biệt thự Hứa Gia."],
    dialogue: [],
    choices: [
      "Ra tay cứu người trước: dùng chân khí cùng kiếm ý trấn áp tà khí trong kinh mạch Hứa Tiểu Lan, giữ lại mạng cô rồi mới tính tiếp.",
      "Phong tỏa gian phòng, phóng Vạn Giới Thần Niệm truy ngược dòng tà khí để tìm nguồn phát và điểm neo của nó trong biệt thự.",
      "Giữ lại một gia nhân đang hoảng loạn để tra hỏi: tà khí xuất hiện từ bao giờ, 'bệnh' của tiểu thư thực chất là gì, và những ai đã ra vào phòng cô."
    ]
  },
  currentLocation: "Long Hải, Nam Kỳ",
  progression: {
    stageId: "long_hai",
    stageIndex: 0,
    backroomsFloor: -1,
    completedObjectiveIds: [],
    backroomsMarks: [],
    partySeparated: false,
    campaignComplete: false
  },
  stats: {
    alert: 0,
    ritual: 10,
    civilianSafety: 100,
    evidence: 0,
    time: 100,
    control: 50,
    signalRisk: 0
  },
  campaignStats: {
    lanHealth: 45,
    lanTrust: 5,
    lanMaterInfluence: 25,
    partyHealth: 100,
    supplies: 6,
    ammunition: 0,
    memoryIntegrity: 100,
    cluesHuaGia: 0,
    civiliansSaved: 0,
    anchorsDestroyed: 0,
    floorsCleared: 0,
    falseMemoryCount: 0
  },
  flags: {tieuLanRescued:false,longHaiAnchorDestroyed:false,canGioAnchorCount:0,enteredBackrooms:false,escapedBackrooms:false,routeLocked:false,lanDepartureConsent:false,materDescentPrevented:false,huaCultDismantled:false,thaiCoSongSatActive:true},
  campaignCanon: {
    facts: [],
    events: [],
    unresolvedThreads: [
      "Nhận diện liên kết Danh và bảo toàn quyền tự quyết Tiểu Lan.",
      "Vô hiệu hóa nghi thức mà không sát hại gia nhân bị điều khiển.",
      "Tìm hiểu vầng sáng đã ném Cao Minh từ Vạn Hoa Lầu tới Long Hải năm 1899.",
      "Phân loại gia nhân trước khi quyết định mức độ vũ lực."
    ],
    resolvedThreads: [],
    characters: ["Cao Minh"],
    locations: ["Long Hải, Nam Kỳ"]
  },
  inventory: [],
  log: ["Chiến dịch canon LIBERA-1899 được khởi tạo tại Long Hải với hồ sơ nhân vật hiện hành."],
  history: []
});
