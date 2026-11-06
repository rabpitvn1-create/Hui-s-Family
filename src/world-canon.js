import {
  CAMPAIGN_ROUTE,
  NARRATIVE_RULES
} from "./campaign-canon.js";
import {
  ACTIVE_CHARACTER_CODEX,
  GAO_MING_CODEX
} from "./active-character-codex.js";

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
    "Nguồn duy nhất cho kỹ năng, trang bị, tính cách, quan hệ và giới hạn của Cao Minh là active-character-codex.js.",
    "Người chơi điều khiển Cao Minh, Đạo Tổ của Vạn Ma Đạo Môn, tôn hiệu Vạn Giới Ma Tổ. Anh là người Trái Đất trọng sinh, giữ nguyên ký ức phàm nhân; thân phận và đạo hạnh thật chỉ được NPC biết khi có nguồn thông tin hợp lệ.",
    "Cao Minh đến Long Hải năm 1899 do một vầng sáng lạ xuất hiện dưới chân khi anh uống rượu tại Vạn Hoa Lầu gần Lôi Thiên Sơn; nguồn gốc và chủ ý của vầng sáng CHƯA KHÓA — không được tự gán cho bất kỳ nhân vật, tổ chức hay thực thể nào khi chiến dịch chưa tạo đủ bằng chứng.",
    "Luồng khí đen bao phủ biệt thự Hứa Gia là tà khí — biểu hiện xâm lấn của La Sát Mẫu vào thế giới này. Hứa Tiểu Lan đã nhiễm tà khí cực nặng: lúc chiến dịch bắt đầu, ảnh hưởng của Mẫu trong cô ở mức 25% và sức khỏe chỉ còn 45%.",
    "Bên ngoài, tà khí trong người Hứa Tiểu Lan biểu hiện hệt như bệnh phong cùi: da loang lổ mảng trắng đỏ sần như vảy, có chỗ lở loét, đầu ngón tay co quắp. Người đời, kể cả Hứa Gia, đều tin cô mắc bệnh phong; đó là lý do cô bị đưa ra biệt thự Long Hải 'dưỡng bệnh' và không ai dám lại gần gian phòng trong cùng. Bản chất không phải bệnh phàm: 'vết phong' là tà khí ăn mòn từ trong ra ngoài, mượn căn bệnh bị khiếp sợ nhất làm vỏ ngụy trang để không ai dám đến gần vật chứa.",
    "Cao Minh dùng Thái Cổ Song Sát — Sát Thần Kiếm và Sát Ma Kiếm, hai thanh kiếm riêng biệt — cùng Hắc Long Chiến Khải gồm đúng bốn bộ phận: khải giáp, hộ uyển, hộ thủ và mão (long quan). Anh không dùng súng, đạn hay trang bị công nghệ.",
    "Đạo Tổ Pháp Thể và Vạn Ma Đạo Kinh tăng cường thể chất, giác quan, hồi phục và phân tích chiến trường cho Cao Minh ở cấp Đạo Tổ. Không tự phát sinh thanh năng lượng, giới hạn sử dụng hoặc phản phệ để kéo dài cảnh.",
    "Vạn Giới Thần Niệm của Cao Minh không có trần thời lượng, số lần sử dụng, cooldown hay phản phệ nội tại; anh giữ nguyên ý thức, ký ức, tính cách và phán đoán.",
    "Song Sát Kiếm Quyết và Tứ Kiếm Đoạn Mạch là kiếm kỹ bản mệnh của Cao Minh: song kiếm đồng xuất, cắt đứt mạch lực và đường lui của mục tiêu; không gắn số nhát, cooldown hay thanh năng lượng tự đặt.",
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
  version: "campaign-v3",
  campaignId: "libera-1899",
  turn: 0,
  scene: {
    id: "origin",
    backgroundId: "long-hai-exterior",
    kicker: "HỒI 1 // LONG HẢI // 1899",
    title: "Biệt thự dưỡng bệnh",
    narration: [
      "Lôi Thiên Sơn quanh năm mây phủ, dưới chân núi có một tòa tửu lâu tên gọi Vạn Hoa Lầu. Rượu nơi ấy chẳng phải danh tửu đệ nhất thiên hạ, song thắng ở một chữ \"tĩnh\". Đêm nay, Cao Minh độc ẩm bên cửa sổ, chén ngọc trong tay mới vơi quá nửa. Đường đường là Đạo Tổ của Vạn Ma Đạo Môn, tôn hiệu truyền khắp vạn giới, vậy mà hắn vẫn giữ một thói quen phàm tục khó bỏ: uống rượu phải uống chậm, như sợ tháng năm trôi qua quá vội.",
      "Chén chưa kịp đặt xuống, sàn gỗ dưới chân bỗng nhiên sáng rực.",
      "Một vầng hào quang tròn trĩnh lặng lẽ nở ra ngay dưới ghế, không một tiếng động, không nửa điểm linh khí ba động. Cao Minh nhíu mày — tu vi đến cảnh giới của hắn, thiên địa dị biến há có thể qua mặt được thần niệm? Vậy mà vầng sáng này xuất hiện không chút dấu vết, tựa như nó vốn dĩ không thuộc về phương thiên địa này. Hắn chưa kịp đứng dậy, vầng sáng đã há miệng nuốt trọn cả người lẫn chén rượu, nhanh đến mức một giọt rượu cũng không kịp sánh ra ngoài.",
      "Trời đất đảo lộn. Không gian như bị một bàn tay vô hình xé toạc rồi khâu lại một cách thô bạo.",
      "Khi hai chân chạm đất, trước mắt Cao Minh là một bãi đất hoang ẩm mùi biển, phía trước sừng sững một tòa biệt thự kiểu Tây với mái ngói âm dương, cửa gỗ lim chạm trổ, đèn dầu leo lét sau rèm cửa. Hắn ngẩng đầu nhìn trời — tinh tú vẫn là tinh tú ấy, mà linh khí trong không khí loãng đến đáng thương, lẫn theo mùi khói than, mùi thuốc súng và hơi muối mặn của một thời đại thuộc về phàm nhân. Thần niệm khẽ quét ra ngoài, hắn liền hiểu: nơi này là Long Hải, năm 1899 của nhân gian. Cách Lôi Thiên Sơn của hắn, không chỉ là vạn dặm sơn hà, mà là cả một dòng thời gian không thể đo đếm.",
      "Nhưng Cao Minh không có thời gian để cảm khái.",
      "Bên trong tòa biệt thự kia, một luồng tà khí đang cuộn trào. Tà khí ấy đặc quánh như máu đông, âm hàn đến mức thấm qua tường gạch, qua cả lớp vỏ \"biệt thự dưỡng bệnh\" hiền hòa bên ngoài mà tràn ra tận cổng. Người thường chỉ cần đứng gần hít phải vài hơi cũng đủ tà xâm nhập thể, sinh bệnh mà chết không rõ nguyên nhân. Người đời chỉ biết Hứa Gia đưa vị tiểu thư mắc bệnh phong cùi ra đây dưỡng bệnh — một cái cớ vừa đủ kín, vừa đủ đáng sợ, khiến từ quan khách đến gia nhân chẳng ai dám hỏi sâu, càng chẳng ai dám lại gần gian phòng trong cùng. Một nơi như thế này, tuyệt đối không phải đất dưỡng bệnh. Đây là một cái tổ.",
      "Cao Minh không gõ cửa. Đối với loại tà khí này, lễ nghi là thứ xa xỉ mà người sắp chết không chờ nổi.",
      "Hắn phất tay áo, một luồng kiếm ý vô hình xé toang cánh cổng sắt. Gia nhân trong nhà kẻ thì bỏ chạy tán loạn, người thì quỳ sụp xuống nền gạch run như cầy sấy, chẳng một ai kịp nhìn rõ người khách không mời vừa bước qua ngưỡng cửa là thần thánh phương nào. Cao Minh theo dấu tà khí đi thẳng vào gian trong cùng, đẩy cửa bước vào.",
      "Trên giường bệnh, một thiếu nữ nằm bất động. Nàng khoảng mười sáu, mười bảy tuổi; làn da vốn phải mịn màng như ngọc, lúc này loang lổ những mảng trắng đỏ sần sùi như vảy cá, vài chỗ lở loét rỉ nước vàng, đầu ngón tay hơi co quắp lại — phàm nhân nhìn vào, chỉ thấy hai chữ: phong cùi. Chẳng trách đại phu mời khắp Nam Kỳ đều lắc đầu, thuốc phong uống đã không biết bao nhiêu thang, và gia nhân trong nhà thà bị đánh đòn cũng không chịu bước qua cửa gian phòng này.",
      "Nhưng dưới thần niệm của Cao Minh, những \"vết phong\" ấy không hề có bệnh căn của phàm nhân. Chúng là tà khí ăn mòn từ trong ra ngoài, mượn đúng hình dạng của căn bệnh bị người đời khiếp sợ và xa lánh nhất làm áo khoác — một lớp vỏ hoàn mỹ, để không ai dám đến gần vật chứa của nó. Tà khí đã theo kinh mạch thấm sâu vào tận tủy, quấn lấy tâm mạch như rễ cây độc bám vào linh hồn. Nặng đến mức này, chậm thêm nửa ngày nữa thôi, trên đời sẽ không còn người tên Hứa Tiểu Lan, chỉ còn một cái xác rỗng cho thứ đang ẩn mình dưới nền nhà này.",
      "Cao Minh đứng bên giường, ánh mắt trầm xuống. Hắn không quen biết Hứa Gia, cũng chẳng ai thuê hắn đến đây. Nhưng người của Vạn Ma Đạo Môn hắn, xưa nay muốn cứu ai thì cứu, muốn giết ai thì giết — chưa từng có thói quen đứng nhìn một sinh mạng bị tà vật nuốt sống ngay trước mắt.",
      "Huống hồ, luồng tà khí này và vầng sáng vừa ném hắn xuyên qua thời gian kia... rất có thể, vốn là cùng một mối.",
      "\"Được.\" Hắn khẽ nói, hai ngón tay đặt lên cổ tay lạnh ngắt của thiếu nữ, chân khí như dòng suối ngầm lặng lẽ tràn vào kinh mạch. \"Vậy thì bổn tọa ở lại xem thử — rốt cuộc là thứ gì, dám động thủ ngay dưới mắt bổn tọa.\""
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
