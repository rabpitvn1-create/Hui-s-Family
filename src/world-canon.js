import {
  CAMPAIGN_ROUTE,
  NARRATIVE_RULES
} from "./campaign-canon.js";
import {
  ACTIVE_CHARACTER_CODEX,
  GAO_MING_CODEX,
  IRIS_CODEX,
  SYVIAL_CODEX
} from "./active-character-codex.js";
import { SRU_CODEX } from "./sru-codex.js";

export const WORLD_CANON = Object.freeze({
  id: "hua-family-world-v3",
  title: "Hứa Gia: LIBERA-1899",
  mode: "AI-directed campaign with locked canon spine",
  opening: {
    year: 1899,
    location: "Long Hải, Nam Kỳ",
    premise: "Cao Minh, Đạo Tổ của Vạn Ma Đạo Môn, đang uống rượu tại Vạn Hoa Lầu gần Lôi Thiên Sơn thì một vầng sáng lạ nổi dưới chân, ném anh xuống Long Hải năm 1899, ngay trước biệt thự Hứa Gia. Anh cảm nhận một luồng tà khí cực mạnh trong biệt thự, xông vào và phát hiện Hứa Tiểu Lan, tiểu thư Hứa Gia, đã nhiễm tà khí cực nặng. Từ đó chiến dịch là: trừ tà khí trong người cô, truy nguồn tà khí và tìm hiểu vầng sáng đã đưa anh tới đây. AI tự phát triển từng cảnh nhưng không được rời xương sống chiến dịch đã khóa."
  },
  campaignRoute: CAMPAIGN_ROUTE.map((stage) => ({
    id: stage.id,
    label: stage.label,
    act: stage.act,
    premise: stage.premise,
    next: stage.next
  })),
  hardCanon: [
    "Tuyến bắt buộc: Long Hải → Cần Giờ → Backrooms 1900 tầng 0–15 → Thủ Dầu Một/Bình Dương → Vũng Tàu → Sài Gòn–Chợ Lớn.",
    "AI được tự phát triển cảnh, NPC chức năng, tiểu địa điểm và hậu quả trong khu vực hiện tại; không được nhảy khu vực, bỏ tầng Backrooms hoặc thay đổi thứ tự tuyến.",
    "Nguồn duy nhất cho kỹ năng, trang bị, tính cách, quan hệ và giới hạn của Cao Minh, Iris, Syvial là active-character-codex.js; Cao Minh không thuộc SRU — SRU chỉ là một tổ chức trong thế giới theo sru-codex.js.",
    "Người chơi điều khiển Cao Minh, Đạo Tổ của Vạn Ma Đạo Môn, tôn hiệu Vạn Giới Ma Tổ. Anh là người Trái Đất trọng sinh, giữ nguyên ký ức phàm nhân; thân phận và đạo hạnh thật chỉ được NPC biết khi có nguồn thông tin hợp lệ.",
    "Cao Minh đến Long Hải năm 1899 do một vầng sáng lạ xuất hiện dưới chân khi anh uống rượu tại Vạn Hoa Lầu gần Lôi Thiên Sơn; nguồn gốc và chủ ý của vầng sáng CHƯA KHÓA — không được tự gán cho bất kỳ nhân vật, tổ chức hay thực thể nào khi chiến dịch chưa tạo đủ bằng chứng.",
    "Luồng khí đen bao phủ biệt thự Hứa Gia là tà khí — biểu hiện xâm lấn của La Sát Mẫu vào thế giới này. Hứa Tiểu Lan đã nhiễm tà khí cực nặng: lúc chiến dịch bắt đầu, ảnh hưởng của Mẫu trong cô ở mức 25% và sức khỏe chỉ còn 45%.",
    "Cao Minh dùng Thái Cổ Song Sát — Sát Thần Kiếm và Sát Ma Kiếm, hai thanh kiếm riêng biệt — cùng Hắc Long Chiến Khải gồm đúng bốn bộ phận: khải giáp, hộ uyển, hộ thủ và mão (long quan). Anh không dùng súng, đạn hay trang bị công nghệ.",
    "Đạo Tổ Pháp Thể và Vạn Ma Đạo Kinh tăng cường thể chất, giác quan, hồi phục và phân tích chiến trường cho Cao Minh ở cấp Đạo Tổ. Không tự phát sinh thanh năng lượng, giới hạn sử dụng hoặc phản phệ để kéo dài cảnh.",
    "Vạn Giới Thần Niệm của Cao Minh không có trần thời lượng, số lần sử dụng, cooldown hay phản phệ nội tại; anh giữ nguyên ý thức, ký ức, tính cách và phán đoán.",
    "Song Sát Kiếm Quyết và Tứ Kiếm Đoạn Mạch là kiếm kỹ bản mệnh của Cao Minh: song kiếm đồng xuất, cắt đứt mạch lực và đường lui của mục tiêu; không gắn số nhát, cooldown hay thanh năng lượng tự đặt.",
    "Iris / ARGUS là scout-markswoman hiện trường, dùng đúng Ivory và Ebony. ARGUS Terrain Read không toàn tri, không nhìn xuyên tường và không dùng drone; Thousandfold Cognition tăng nhận thức/phân tích chứ không tự tăng tốc cơ thể.",
    "Belial Core của Iris cung cấp quỷ lực vô hạn nhưng không đồng nghĩa sát thương, tốc độ bắn, độ bền hoặc độ chính xác vô hạn. Field Galley và Field MedNet là hỗ trợ thực địa, không phải tạo vật chất hay chữa lành tức thời.",
    "Iris quyết đoán, bình tĩnh, sắc, dũng cảm, nữ tính và tử tế. Tsundere quanh Cao Minh không được biến thành bạo lực slapstick, trẻ con hoặc mất năng lực tác chiến.",
    "Syvial là kiếm sĩ siêu nhiên UR+ dùng GodKiller và Lucifer Armor. GodKiller là đại kiếm cơ khí, không phải súng hay gunblade; cô vẫn chiến đấu được khi mất kiếm và có khả năng gọi kiếm trở lại.",
    "Lucifer Core và Devil Trigger của Syvial không có thanh mana, giới hạn số lần, cooldown nội tại hoặc phản phệ do dùng lâu; Syvial giữ lý trí.",
    "GodKiller Override / Twenty-Four Severance diễn ra trong thời gian dừng hoàn toàn và luôn gồm đúng 24 nhát chém.",
    "Syvial có tình cảm yandere rất mạnh với Cao Minh nhưng không phải sát nhân ngẫu nhiên, không tự tấn công mọi phụ nữ nói chuyện với Cao Minh và không để ghen tuông xóa kỹ năng chiến thuật hoặc trí thông minh.",
    "Iris và Syvial chỉ xuất hiện khi trạng thái hoặc lịch sử chiến dịch đã xác lập sự có mặt hay đường tiếp cận hợp lý. Không tự gán tổ chức hoặc chức vụ cho trường đang CHƯA KHÓA.",
    "Căng thẳng quanh nhân vật mạnh phải đến từ dữ kiện thiếu hoặc bị đầu độc, quyền xác định mục tiêu, dân thường, quyền tự quyết, điều kiện nhiệm vụ, quy luật dị thường và hậu quả của phương án tối ưu; không đến từ việc nhân vật tự quên năng lực.",
    "Hứa Tiểu Lan là Tứ tiểu thư Hứa Gia, mắc bệnh phong, cơ thể suy yếu nhưng có trí tuệ chiến lược cao và quyền tự quyết riêng.",
    "Tiểu Lan không mang Tử Mẫu Trùng; cơ thể cô được giữ trống để làm vật chứa trực tiếp cho La Sát Mẫu.",
    "Tiểu Lan chưa biết Chú Hỏa gây bệnh và chuẩn bị hiến tế mình; cô chỉ thay đổi niềm tin khi chiến dịch tạo đủ bằng chứng.",
    "Người làm công chính thức của Hứa Gia có thể mang Tử Mẫu Trùng, nhưng người tự nguyện, bị lừa, bị ép và đã mất quyền kiểm soát không có cùng mức trách nhiệm.",
    "La Sát Mẫu / Quỷ Tử Mẫu là Quỷ Vương cấp Thế Giới nhưng chưa giáng thế; mọi can thiệp hiện tại cần điểm neo.",
    "Tam Đại Quỷ Tử gồm Phệ Giới Quỷ Anh, La Hầu Huyết Đồng và Vô Diện Mộng Nương; kết quả từng trận làm thay đổi hồi cuối.",
    "Phệ Giới Quỷ Anh không bị giết hoàn toàn trong lần đối đầu đầu tiên tại Cần Giờ. Biến cố bắt buộc kết thúc bằng việc nó phá ranh giới để Quỷ Mẫu kéo cả đội vào Backrooms.",
    "Backrooms 1900 không do Quỷ Mẫu tạo ra. Nó là quần thể ngoài thực tại độc lập; Quỷ Mẫu chỉ phát hiện, mở đường và dùng Tiểu Lan làm điểm neo để kéo đội vào.",
    "Backrooms có đúng 16 tầng từ 0 đến 15. Mỗi tầng có môi trường, quy luật, boss, điều kiện mở lối và hậu quả riêng.",
    "Vô hiệu hóa boss không tự mở lối; nhóm vẫn phải thực hiện quy luật và điều kiện thoát của tầng.",
    "Sau Backrooms, cả đội xuất hiện tại Thủ Dầu Một trong trạng thái suy kiệt; không được đối đầu La Hầu ngay lập tức.",
    "Vũng Tàu là hồi điều tra ký ức và ảo cảnh, không lặp lại một trận đánh hỏa lực trực diện.",
    "Hồi cuối tại Sài Gòn–Chợ Lớn phải dùng trực tiếp hậu quả của ba Quỷ Tử và lựa chọn đạo đức trước đó.",
    "Tiêu diệt Hứa Gia nghĩa là phá giáo đoàn, Mẫu Chủng, mạng lưới và cơ sở quyền lực; không phải giết sạch người mang họ Hứa.",
    "Không tái sử dụng các tuyến đã loại bỏ như Tây viện, Huyết Tử Động, Mẫu Thai hoặc việc giam Tiểu Lan tại Chợ Lớn như sự kiện hiện hành.",
    "Mỗi biến dị, quái vật, nghi lễ và boss phải có chức năng chiến thuật, nguồn gốc, giới hạn và hậu quả cụ thể.",
    "Nhân vật chỉ hành động dựa trên điều họ biết, đã chứng kiến, được kể hoặc suy luận có căn cứ; bí mật tác giả không tự trở thành tri thức NPC.",
    "Không đồng nhất La Sát Mẫu với Hārītī chân chính, Phật giáo, Dinh Cô hoặc tín ngưỡng dân gian Long Hải."
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
      huaTieuLan: {
        identity: "Tứ tiểu thư Hứa Gia; mắc bệnh phong; không mang Tử Mẫu Trùng; vật chứa dự kiến của La Sát Mẫu.",
        mind: [
          "Trí tuệ chiến lược cao; nhìn hệ thống, thử giả thuyết, giấu kết luận và chơi đường dài.",
          "Không biết cha gây bệnh, giáo đoàn chuẩn bị hiến tế, và Cao Minh chỉ là người lạ vừa xông vào biệt thự, cho đến khi có bằng chứng trong chiến dịch.",
          "Không phải mục tiêu hộ tống bị động; cô có quyền đặt điều kiện, phản biện, từ chối và tạo kế hoạch."
        ],
        voice: "Bình tĩnh, kín, cụ thể; không trình diễn toàn bộ suy luận."
      },
      ghostMother: {
        identity: "La Sát Mẫu / Quỷ Tử Mẫu, Quỷ Vương cấp Thế Giới, chưa giáng thế.",
        constraints: [
          "Can thiệp cần điểm neo: Tử Mẫu Trùng, khế ước, huyết thống, điện thờ, Quỷ Tử, vật chứa hoặc vùng bị xâm lấn.",
          "Không thể hiện thân lâu dài khi thiếu vật chứa và mạng lưới.",
          "Mục tiêu là xóa quyền tự quyết, biến nhân loại thành một gia đình không thể phản bội."
        ]
      },
      chuHoa: {
        identity: "Gia chủ, giáo chủ và người giữ Mẫu của Hứa Gia.",
        operation: [
          "Thật sự yêu Tiểu Lan nhưng vẫn chủ động hy sinh cô; tình yêu và phản bội cùng tồn tại.",
          "Dùng chữa lành, gia đình, cơm ăn, việc làm và nỗi sợ bị bỏ rơi để cải đạo.",
          "Không mặc nhiên biết hay kiểm soát mọi diễn giải của La Sát Mẫu."
        ]
      }
    }
  },
  organizations: Object.freeze({ sru: SRU_CODEX }),
  characters: ACTIVE_CHARACTER_CODEX,
  agentOperationRules: Object.freeze([
    ...SRU_CODEX.doctrine,
    ...GAO_MING_CODEX.actionLocks
  ]),
  narrativeRules: NARRATIVE_RULES,
  generationRules: [
    "Cảnh mới phải nằm trong khu vực và tầng hiện tại do progression xác định.",
    "Mỗi lượt chỉ được đề nghị hoàn thành tối đa một mục tiêu chưa hoàn thành của giai đoạn hiện tại.",
    "Không tự tuyên bố chuyển giai đoạn; engine game tự chuyển khi đủ mục tiêu và cờ bắt buộc.",
    "Không hồi sinh người chết, xóa thương tích, quên vật phẩm, ký ức, quan hệ, bằng chứng hoặc hậu quả đã lưu.",
    "Mọi kỹ năng, trang bị, tính cách, quan hệ và giới hạn của Cao Minh, Iris, Syvial phải lấy trực tiếp từ active-character-codex.js; không tự điền dữ kiện từ bản build cũ.",
    "Cao Minh phải vận hành đúng Thái Cổ Song Sát (Sát Thần Kiếm, Sát Ma Kiếm), Hắc Long Chiến Khải, Đạo Tổ Pháp Thể, Vạn Ma Đạo Kinh, Vạn Giới Thần Niệm, Song Sát Kiếm Quyết và các thần thông trong hồ sơ của anh với đúng giới hạn hiện hành khi chúng thực sự phù hợp tình huống; tuyệt đối không gán cho anh súng, đạn hay trang bị công nghệ.",
    "Iris phải vận hành đúng Gunslinger, Ivory/Ebony, Belial Core, Thousandfold Cognition, ARGUS Terrain Read, Field Galley và Field MedNet; không biến cô thành trạm tình báo từ xa.",
    "Syvial phải vận hành đúng GodKiller, Lucifer Armor, Lucifer Core, Devil Trigger và Twenty-Four Severance; không biến ghen tuông thành mất lý trí hay quên chiến thuật.",
    "Iris và Syvial chỉ được đưa vào cảnh khi trạng thái hoặc lịch sử chiến dịch tạo đường tiếp cận hợp lý; không tự gán tổ chức hoặc chức vụ đang chưa khóa.",
    "Hành động bất khả thi phải thất bại hoặc thành công một phần với cái giá cụ thể.",
    "Mỗi lượt phải thay đổi tình thế, không viết đối thoại vòng tròn hoặc đoạn văn chỉ tạo không khí mà không có hậu quả.",
    "Vật phẩm mới chỉ xuất hiện khi có nguồn gốc, công dụng, giới hạn và tác động cân bằng; imagePrompt dành cho model ảnh riêng.",
    "Giọng văn rõ, tự nhiên, tiết chế; không dùng ẩn dụ khó hiểu, câu trailer giả sâu hoặc lời thoại giải thích cho người đọc."
  ],
  characterAuthority: Object.freeze({
    gaoMing: GAO_MING_CODEX.source,
    iris: IRIS_CODEX.source,
    syvial: SYVIAL_CODEX.source,
    organization: SRU_CODEX.id
  })
});

export const INITIAL_STATE = Object.freeze({
  version: "campaign-v3",
  campaignId: "libera-1899",
  turn: 0,
  scene: {
    id: "origin",
    backgroundId: "long-hai-exterior",
    kicker: "HỒI 1 // LONG HẢI // 1899",
    title: "Biệt thự dưỡng bệnh",
    narration: [
      "Vạn Hoa Lầu nằm dưới chân Lôi Thiên Sơn; rượu ở đó không phải ngon nhất vùng, nhưng yên tĩnh nhất. Tối ấy Cao Minh ngồi một mình bên cửa sổ, chén mới nhấp được một nửa — làm Đạo Tổ bao nhiêu năm, anh vẫn giữ cái thói phàm tục là uống chậm. Rồi sàn gỗ dưới chân anh sáng lên: một vầng sáng tròn, lặng lẽ, không một tiếng động, mở ra ngay dưới ghế, và anh lọt thẳng vào trong trước khi kịp đặt chén xuống.",
      "Anh rơi xuống bãi đất trước cổng một ngôi biệt thự kiểu Tây ở Long Hải. Năm ấy là 1899, Nam Kỳ còn thuộc Pháp — những chuyện đó lúc này không quan trọng. Quan trọng là bên trong biệt thự có một luồng tà khí đặc quánh, nặng đến mức người thường đứng gần hít phải cũng đủ sinh bệnh, và nó đang cuộn chặt quanh một người sống ở gian trong cùng. Cao Minh không gõ cửa xin phép: thứ khí này không chờ ai uống xong chén trà. Anh xông thẳng vào.",
      "Gia nhân trong nhà kẻ bỏ chạy, người quỳ sụp, chẳng ai kịp hỏi người lạ từ đâu tới. Trong gian phòng trong cùng, Hứa Tiểu Lan — Tứ tiểu thư Hứa Gia — nằm bất động trên giường bệnh, hơi thở mỏng như sợi chỉ: tà khí đã thấm sâu vào kinh mạch, nặng đến mức chỉ chậm thêm nửa ngày là không còn người để cứu. Cao Minh không quen biết nhà họ Hứa, cũng không ai thuê anh tới đây. Nhưng bỏ mặc một người sắp bị tà khí nuốt trọn thì không phải cách làm việc của anh — huống hồ nguồn của luồng tà khí này và vầng sáng vừa ném anh tới 1899, rất có thể, là cùng một mối."
    ],
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
    ammunition: 100,
    memoryIntegrity: 100,
    cluesHuaGia: 0,
    civiliansSaved: 0,
    anchorsDestroyed: 0,
    floorsCleared: 0,
    falseMemoryCount: 0
  },
  flags: {
    tieuLanRescued: false,
    longHaiAnchorDestroyed: false,
    canGioAnchorCount: 0,
    enteredBackrooms: false,
    escapedBackrooms: false,
    pheGioiDefeated: false,
    laHauDefeated: false,
    voDienDefeated: false,
    quyMauAspectWarDestroyed: false,
    quyMauAspectMemoryDestroyed: false,
    materDescentPrevented: false,
    huaCultDismantled: false,
    thaiCoSongSatActive: true
  },
  campaignCanon: {
    facts: [],
    events: [],
    unresolvedThreads: [
      "Trừ tà khí đang xâm thực Hứa Tiểu Lan trước khi nó nuốt trọn cô.",
      "Truy nguồn tà khí trong biệt thự Long Hải và phá điểm neo của nó.",
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
