const freeze = (value) => Object.freeze(value);

const STAGE_TEXTURES = freeze({
  long_hai: ["Biệt thự dưỡng bệnh, thuốc, vôi tường, tiếng chân và những gia nhân còn tỉnh nhưng bị ép làm theo lệnh.", "Tiểu Lan giữ quyền từ chối; ký ức mất từng chi tiết nhỏ."],
  vung_tau: ["Cửa biển, quan tài và người sống bị khai như hàng hóa; tuyến Tài Phòng."],
  can_gio: ["Bùn, nước lợ, ba điểm neo và phản thanh của Nghịch Trùng; quyền tự quyết dẫn đến điểm neo sống."],
  prenn: ["Prenn 200 năm trước: lịch sử bất biến, ba dị bản Bạch Y, sinh tồn và ký ức mâu thuẫn."],
  backrooms: ["Mỗi tầng có luật, boss và điều kiện mở lối riêng; boss bị vô hiệu không tự mở cửa."],
  cho_lon_return: ["Sáu mảnh Sổ Lục Môn, gia phả và tên bị xóa; không cho nhân vật nhớ bằng chứng chưa có."],
  dong_thap: ["Huyết Phòng, vật chủ tỉnh táo, những người sống phụ thuộc vào cơ chế cần phá."],
  hue: ["Ảnh Phòng, thư mật mã, ký ức bị chỉnh sửa và chứng cứ xác thực."],
  cho_lon_final: ["Đại Lễ Lục Sinh, quyền được chết là mình, nhát cắt hoàn hảo và câu cuối nguyên văn."]
});

const VOICE_CARDS = freeze({
  gaoMing: {
    name: "Cao Minh / Vạn Giới Ma Tổ",
    rules: [
      "LUÔN tự xưng là “bổn tọa” trong mọi lời thoại và tiếng lòng; tuyệt đối không để Cao Minh tự xưng “ta”.",
      "ĐỌC caoMinhCanon trước khi viết bất kỳ cảnh nào có anh: đó là hồ sơ chủ nhân đã khóa (2026-11-06), có hiệu lực trên mọi quy tắc giọng cũ.",
      "Ngông cuồng, bất cần, kiêu ngạo nhưng có sức hút; ung dung và HÀI HƯỚC, thích châm chọc/chế giễu đối thủ ngay giữa sinh tử; coi trận chiến là trò tiêu khiển. Ít nói, câu ngắn, khô; im lặng nhiều hơn diễn thuyết; KHÔNG giảng giải cơ chế cho người phàm, không hứa hẹn trang trọng, không an ủi ân cần kiểu anh hùng tử tế.",
      "Cứu người chỉ vì TIỆN TAY — vô tâm, một tay, đang làm việc khác, xong quên ngay; ai cảm ơn thì anh chán hoặc buồn cười, không nhận. TUYỆT ĐỐI không cười trước nỗi đau của người vô tội.",
      "Anh là kẻ xuyên không tới dị giới: nắm ngay ngôn ngữ quyền lực (tông môn, khống chế, trùng, tà khí) nhưng MÙ TỊT về thế giới 1899 — địa danh, giấy tờ, quân phục, tiền, phong tục, món ăn đều phải học/hỏi; chỉ diễn giải bằng khung Thiên Đạo / ma đạo của thế giới anh (quê Lôi Thiên Sơn, núi, không biển). Anh không biết La Sát / Trùng Mẫu / Lục Môn là gì cho tới khi chứng cứ dạy anh, từng lớp một.",
      "Chiến đấu = phẫu thuật: vì Tiểu Lan, anh luôn thu kiếm kìm lực, cắt từng sợi thật chính xác; không trận nào anh đuối sức hay chật vật vì địch mạnh."
    ]
  },
  tieu_lan: {
    name: "Hứa Tiểu Lan",
    rules: [
      "Kín, chính xác, có quyền chủ động; không nói như sách chiến thuật hoặc nhà tiên tri.",
      "Sức khỏe yếu ảnh hưởng nhịp thở, thời gian và lựa chọn, nhưng không biến cô thành người thụ động.",
      "Cô chỉ khẳng định điều có bằng chứng; khi chưa tin, lời nói giữ khoảng cách và kiểm tra đối phương.",
      "Cô là NGƯỜI THẦY của Cao Minh ở thế giới này: chính cô dạy anh từ từ tên sự vật, giá chợ, phong tục, địa danh, món ăn, biển — sự gắn bó của hai người lớn lên qua các cảnh dạy–học đó. Đừng viết Cao Minh giảng giải thế giới này cho cô."
    ]
  },
  hua_servant: {
    name: "Gia nhân Hứa Gia",
    rules: [
      "Nói như người lao động đang sợ mất việc, sợ chủ, sợ nghi lễ hoặc đang cố che giấu điều gì đó.",
      "Câu ngắn, từ ngữ bình dân và cụ thể; không giả cổ bằng cách rải 'chớ', 'ắt hẳn', 'ngươi', 'bổn phận'.",
      "Không tự kể toàn bộ âm mưu. Họ chỉ nói phần mình biết, phần được dặn hoặc phần buộc phải thú nhận.",
      "Speaker của gia nhân vô danh phải bắt đầu bằng 'Gia nhân Hứa Gia —' để giao diện dùng đúng avatar."
    ]
  },
  generic_npc: {
    name: "NPC địa phương",
    rules: [
      "Giọng nói phụ thuộc nghề, địa vị, mức sợ hãi và điều họ muốn đạt được trong cảnh.",
      "Không dùng cùng một giọng sắc sảo cho tất cả nhân vật."
    ]
  }
});

// HỒ SƠ CAO MINH — chủ nhân đọc chính tả và KHÓA 2026-11-06.
// Khi đợt sửa bắt đầu, hồ sơ này được đưa nguyên văn vào code theo lệnh chủ nhân;
// bản đầy đủ: story-content/cao-minh-character-canon-owner-2026-11-06.md (kho dự án).
const CAO_MINH_CANON = freeze({
  keystone: "Với một kẻ như hắn hắn có thể tóm cổ thiên đạo xuống và hỏi tùy ý. Một chưởng của hắn có thể đánh bay cả một ngọn núi. Một kiếm của hắn có thể chặt lục mẫu la sát thành lục mẫu mất xác.",
  profile: [
    "Tồn tại đứng trên đỉnh phong, vượt ngoài phạm trù nhân quả; có thể hủy Thiên diệt Địa. Sức mạnh KHÔNG có trần trong truyện: không kẻ địch nào làm hắn đuối sức được.",
    "Phàm nhân với hắn như kiến vẫy vùng trong vũng bùn — dưới tầm chú ý. Giết một người phàm là giết một con kiến; diệt một quốc gia là phá một tổ kiến.",
    "Vì Hứa Tiểu Lan, sức mạnh đó không bao giờ được dùng toàn bộ: hắn lúc nào cũng phải thu kiếm lại, kìm lực, vì sợ một chưởng lỡ tay đánh bay hết — thậm chí cả hành tinh. Hắn không giết Lục Mẫu từ đầu được vì: (1) lúc đầu hắn không biết nó là gì — mọi thứ phải từ từ khám phá; (2) nó sống qua mạng lưới đã thay thế phần điều phối sự sống của nàng từ nhỏ — giết nó là giết nàng; (3) lúc hắn đủ quan tâm để muốn chém thì hắn cũng đã hiểu đủ để biết kiếm đó không được phép rơi.",
    "Hắn rơi xuống Long Hải vì một cổng không gian (chính là vầng hào quang) kéo hắn xuống — và hắn THÍCH THÚ: đang uống rượu chán, tự nhiên có nơi để giải trí. Phát hiện và cứu Tiểu Lan là THUẦN TÌNH CỜ, cùng một logic tiện tay: thấy kiến rớt xuống hồ thì tiện tay vớt lên.",
    "Ngông cuồng, bất cần đời, kiêu ngạo nhưng đầy sức hút. Luôn ung dung, hài hước, thích châm chọc đối thủ ngay cả khi đứng trước cái chết; coi chiến sinh tử như trò tiêu khiển; địch càng mạnh hắn càng phấn khích, tự tin, thích thú. Tinh thần gần như không thể khuất phục.",
    "Sau vẻ phóng túng là một người từng qua nhiều mất mát, cô độc, đau thương; hiếm khi lộ cảm xúc thật, dùng hài hước và bất cần để che vết thương lòng. Ma Tính mãnh liệt nhưng trân trọng nhân tính hơn nhiều kẻ tự nhận là con người.",
    "Căm ghét sự tàn ác, khinh thường kẻ dùng sức mạnh chà đạp người yếu thế; không thích tự nhận anh hùng nhưng sẵn sàng liều mạng bảo vệ người vô tội; trung thành, đáng tin với bạn bè dù đôi khi cộc cằn, thiếu nghiêm túc. Yêu tự do, ghét quy tắc ràng buộc, hành động theo bản năng, tìm niềm vui trong thử thách nguy hiểm.",
    "Đường biên tuyệt đối: hắn có thể cười đùa trước cả địa ngục, nhưng tuyệt đối không cười trước nỗi đau của những người vô tội.",
    "Hắn là kẻ xuyên không đến một thế giới KHÁC và phải học lại từ từ: thế giới của hắn không có Tôn Ngộ Không, không có Tây Du Ký, không có Phật Tổ Như Lai — chỉ có Thiên Đạo, ma đạo. Hắn không tự động biết địa lý Việt Nam, địa danh, lính Pháp, hay món cơm thịt kho hột vịt; những thứ phàm trần đều do Tiểu Lan (và người bản địa) dạy hắn từ từ — và chính vì nàng dạy hắn, đi cùng hắn những bước đầu ở thế giới này một quãng đường rất dài, mà một con kiến trở thành người hắn quan tâm."
  ],
  worldReaction: [
    "Xã hội 1899 (thời đại công nghiệp và nông nghiệp thuộc địa) KHÔNG chấp nhận một kẻ mặc trang phục kiếm hiệp, giáp lạ và hai thanh kiếm lơ lửng là chuyện bình thường: người ngoài giật mình, sợ, đồn đại 'thầy pháp', tránh né; quan lại e dè và để ý — sức ép kiểm tra một phần vì sự hiện diện của hắn.",
    "Hắn ở được trong nhà họ Hứa nhờ vỏ bọc thầy pháp/thầy thuốc phương xa mời về chữa bệnh cho cô chủ (khớp vỏ bọc phong cùi).",
    "Gia nhân nhà họ Hứa bị khống chế thì KHÔNG phản ứng trước kiếm bay — sự phẳng lặng phi nhân đó là dấu hiệu bị khống chế mà Cao Minh đăng ký được; người tự do (Bà Năm, Thu Nguyệt, người ngoài) phản ứng như người thường."
  ]
});

export const PROSE_STYLE_GUIDE = freeze({
  caoMinhCanon: CAO_MINH_CANON,
  language: "Tiếng Việt hiện đại, tự nhiên, tiết chế; bối cảnh năm 1899 thể hiện qua vật chất và quan hệ xã hội, không qua lời giả cổ.",
  targetLength: "Khoảng 180–320 từ cho narration; dialogue có thể rỗng nếu cảnh không cần người nói.",
  narrationRules: [
    "Mỗi đoạn phải có hành động, quan sát hoặc hậu quả mới; không viết đoạn chỉ để tạo không khí.",
    "Dùng chi tiết cụ thể có thể nhìn, nghe, ngửi, chạm hoặc đo được; hạn chế tính từ trừu tượng.",
    "Cho người đọc thấy suy luận qua chuỗi dấu hiệu và quyết định, không giải thích mọi ý nghĩa ngay lập tức.",
    "Nhịp câu thay đổi tự nhiên. Tránh chuỗi câu ngắn liên tiếp chỉ để làm ra vẻ căng thẳng.",
    "Không nhắc đến schema, chỉ số, objectiveId, prompt, model hoặc việc đây là game trong lời kể."
  ],
  dialogueRules: [
    "Lời thoại chỉ xuất hiện khi có người cần thuyết phục, giấu, hỏi, ra lệnh, cảnh báo hoặc đổi kế hoạch.",
    "Mỗi câu thoại thường dưới 35 từ; bỏ phần giải thích mà narration hoặc hành động đã thể hiện.",
    "Không để nhân vật nói điều cả hai bên đều biết chỉ để giải thích cho người đọc.",
    "Không biến hội thoại thành hỏi–đáp cân xứng. Một người có thể im lặng, né tránh, nói dối hoặc cắt ngang.",
    "Không để mọi nhân vật đều nói sắc bén, lạnh lùng hoặc bí hiểm."
  ],
  choiceRules: [
    "Đúng ba lựa chọn, mỗi lựa chọn là một hành động cụ thể kèm mục tiêu chiến thuật hoặc cái giá rõ.",
    "Ba lựa chọn phải khác cách tiếp cận: quan sát/điều tra, tác động xã hội/lừa lọc, hoặc hành động trực tiếp/kỹ thuật khi phù hợp.",
    "Không dùng lựa chọn chung chung như 'tiếp tục quan sát', 'cẩn thận tiến lên' nếu không nêu đối tượng và mục đích."
  ],
  bannedHabits: [
    "Câu trailer hoặc triết lý giả sâu như 'đêm nay mọi thứ sẽ thay đổi'.",
    "Ẩn dụ quen tay như 'bóng tối nuốt chửng', 'không khí đặc quánh', 'ánh mắt sắc lạnh', 'nụ cười nhếch mép'.",
    "Động tác rập khuôn như siết chặt nắm tay, nheo mắt hoặc hít sâu ở mọi cảnh.",
    "Cao Minh nói dài hơn người đang bị hỏi, khoe sức mạnh vô cớ hoặc buông lời huyền học khó hiểu để lấp khoảng trống.",
    "Gia nhân dùng văn phong cổ trang Trung Hoa hoặc tự khai hết bí mật sau một câu hỏi.",
    "Lặp lại tên nhân vật ở đầu nhiều câu liên tiếp."
  ],
  contrastExample: {
    weak: "Cao Minh nhếch môi. 'Mùi gà nướng ngon đấy. Mà trong nhà bệnh nặng sao đêm nào cũng có ghe chở hòm gỗ vào?'",
    improvedNarration: "Cao Minh đặt gói thức ăn xuống mép phản. Bùn nước lợ còn bám ở đáy hai chiếc hòm ngoài sân, trong khi lối bếp không có dấu bánh xe.",
    improvedDialogue: [
      { speaker: "Cao Minh", text: "Ghe cập bến sau vào giờ nào?" },
      { speaker: "Gia nhân Hứa Gia — người mua lương thực", text: "Tôi chỉ nhận hàng ngoài đường. Việc trong sân sau, người dưới bếp cũng không được hỏi." }
    ]
  },
  voices: VOICE_CARDS,
  stageTextures: STAGE_TEXTURES
});

function normalizeSpeaker(value) {
  return String(value || "").trim().toLocaleLowerCase("vi");
}

function voiceKeyForSpeaker(speaker) {
  const name = normalizeSpeaker(speaker);
  if (!name) return "generic_npc";
  if (name.includes("cao minh") || name.includes("gao ming") || name.includes("vạn giới ma tổ") || name.includes("đạo tổ")) return "gaoMing";
  if (name.includes("tiểu lan")) return "tieu_lan";
  if (name.includes("koei")) return "koei";
  if (["gia nhân", "người hầu", "người ở", "người làm", "đầy tớ", "quản gia", "a hoàn", "hầu gái"]
    .some((label) => name.includes(label))) return "hua_servant";
  return "generic_npc";
}

export function buildWriterContext(state, directorContext, plan) {
  const dialoguePlan = Array.isArray(plan?.dialoguePlan) ? plan.dialoguePlan : [];
  const voiceKeys = new Set(["gaoMing"]);
  dialoguePlan.forEach((entry) => voiceKeys.add(voiceKeyForSpeaker(entry?.speaker)));

  const stageId = String(state?.progression?.stageId || "long_hai");
  return {
    stageId,
    stageLabel: directorContext?.stage?.label || directorContext?.stageLabel || stageId,
    currentLocation: state?.currentLocation || "",
    stageTexture: STAGE_TEXTURES[stageId] || [],
    activeVoices: [...voiceKeys].map((key) => VOICE_CARDS[key]).filter(Boolean),
    proseRules: {
      language: PROSE_STYLE_GUIDE.language,
      targetLength: PROSE_STYLE_GUIDE.targetLength,
      narrationRules: PROSE_STYLE_GUIDE.narrationRules,
      dialogueRules: PROSE_STYLE_GUIDE.dialogueRules,
      choiceRules: PROSE_STYLE_GUIDE.choiceRules,
      bannedHabits: PROSE_STYLE_GUIDE.bannedHabits,
      contrastExample: PROSE_STYLE_GUIDE.contrastExample
    },
    continuity: {
      previousSceneTitle: state?.scene?.title || "",
      previousNarration: Array.isArray(state?.scene?.narration) ? state.scene.narration.slice(-2) : [],
      recentHistory: Array.isArray(state?.recentHistory) ? state.recentHistory.slice(-6) : []
    }
  };
}
