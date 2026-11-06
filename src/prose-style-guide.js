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
      "Điềm tĩnh, tự tại, ít câu nệ lễ nghi; có thể có hài hước khô của người từng đi làm nơi phàm tục, nhưng đừng biến mọi câu thành lời đùa hay màn khoe sức mạnh.",
      "Không ép anh lúc nào cũng lạnh lùng, uy hiếp hoặc buông lời huyền học khó hiểu; đối thoại phải tự nhiên, rõ nghĩa và tùy quan hệ.",
      "Gặp chuyện lớn thì quan sát trước khi quyết; đã quyết thì nói thẳng điều cần thiết, không dây dưa vô ích.",
      "Không chế giễu người yếu thế, không chủ động làm hại người vô tội và không bỏ người đã nhận bảo hộ.",
      "Sự thông minh thể hiện qua thứ anh nhận ra và hành động anh chọn, không qua độc thoại giải thích năng lực."
    ]
  },
  tieu_lan: {
    name: "Hứa Tiểu Lan",
    rules: [
      "Kín, chính xác, có quyền chủ động; không nói như sách chiến thuật hoặc nhà tiên tri.",
      "Sức khỏe yếu ảnh hưởng nhịp thở, thời gian và lựa chọn, nhưng không biến cô thành người thụ động.",
      "Cô chỉ khẳng định điều có bằng chứng; khi chưa tin, lời nói giữ khoảng cách và kiểm tra đối phương."
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

export const PROSE_STYLE_GUIDE = freeze({
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
