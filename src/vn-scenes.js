// LIBERA-1899 · Kịch bản viết sẵn chính thức — Hồi 1: Long Hải (lát cắt dọc).
// Toàn bộ văn xuôi và thoại do Muse viết theo Hồ sơ Cốt truyện Chung V1
// và VN Scene Contract V1. ID, objective, rẽ nhánh và trần hiệu ứng giữ
// nguyên như bản khung kiến trúc để các kiểm thử không đổi.
export const VN_START_SCENE = "lh_prologue";
export const VN_SCENES = Object.freeze({
  "lh_prologue": {
    "id": "lh_prologue",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Vầng sáng dưới Vạn Hoa Lầu",
    "backgroundId": "long-hai-exterior",
    "location": "Bãi đất hoang trước biệt thự, Long Hải",
    "narration": [
      "Lôi Thiên Sơn quanh năm mây phủ, dưới chân núi có một tòa tửu lâu tên gọi Vạn Hoa Lầu. Rượu nơi ấy chẳng phải danh tửu đệ nhất thiên hạ, song thắng ở một chữ \"tĩnh\". Đêm nay, Cao Minh độc ẩm bên cửa sổ, chén ngọc trong tay mới vơi quá nửa. Đường đường là Đạo Tổ của Vạn Ma Đạo Môn, tôn hiệu truyền khắp vạn giới, vậy mà hắn vẫn giữ một thói quen phàm tục khó bỏ: uống rượu phải uống chậm, như sợ tháng năm trôi qua quá vội.",
      "Chén chưa kịp đặt xuống, sàn gỗ dưới chân bỗng nhiên sáng rực.",
      "Một vầng hào quang tròn trĩnh lặng lẽ nở ra ngay dưới ghế, không một tiếng động, không nửa điểm linh khí ba động. Cao Minh nhíu mày — tu vi đến cảnh giới của hắn, thiên địa dị biến há có thể qua mặt được thần niệm? Vậy mà vầng sáng này xuất hiện không chút dấu vết, tựa như nó vốn dĩ không thuộc về phương thiên địa này. Hắn chưa kịp đứng dậy, vầng sáng đã há miệng nuốt trọn cả người lẫn chén rượu, nhanh đến mức một giọt rượu cũng không kịp sánh ra ngoài.",
      "Trời đất đảo lộn. Không gian như bị một bàn tay vô hình xé toạc rồi khâu lại một cách thô bạo.",
      "Khi hai chân chạm đất, trước mắt Cao Minh là một bãi đất hoang ẩm mùi biển, phía trước sừng sững một tòa biệt thự kiểu Tây với mái ngói âm dương, cửa gỗ lim chạm trổ, đèn dầu leo lét sau rèm cửa. Hắn ngẩng đầu nhìn trời — tinh tú vẫn là tinh tú ấy, mà linh khí trong không khí loãng đến đáng thương, lẫn theo mùi khói than, mùi thuốc súng và hơi muối mặn của một thời đại thuộc về phàm nhân. Thần niệm khẽ quét ra ngoài, hắn liền hiểu: nơi này là Long Hải, năm 1899 của nhân gian. Cách Lôi Thiên Sơn của hắn, không chỉ là vạn dặm sơn hà, mà là cả một dòng thời gian không thể đo đếm.",
      "Nhưng Cao Minh không có thời gian để cảm khái.",
      "Bên trong tòa biệt thự kia, một luồng tà khí đang cuộn trào. Tà khí ấy đặc quánh như máu đông, âm hàn đến mức thấm qua tường gạch, qua cả lớp vỏ \"biệt thự dưỡng bệnh\" hiền hòa bên ngoài mà tràn ra tận cổng. Người thường chỉ cần đứng gần hít phải vài hơi cũng đủ tà xâm nhập thể, sinh bệnh mà chết không rõ nguyên nhân. Người đời chỉ biết Hứa Gia đưa vị tiểu thư mắc bệnh phong cùi ra đây dưỡng bệnh — một cái cớ vừa đủ kín, vừa đủ đáng sợ, khiến từ quan khách đến gia nhân chẳng ai dám hỏi sâu, càng chẳng ai dám lại gần gian phòng trong cùng. Một nơi như thế này, tuyệt đối không phải đất dưỡng bệnh. Đây là một cái tổ.",
      "Cao Minh không gõ cửa ngay. Thần niệm vừa chạm vào những con người sau bức tường, hắn đã khựng lại: trong nhà ấy có những thân thể đang cử động trái với ý chí của chính họ — tay làm một việc, mắt van một việc khác. Người trong nhà vẫn còn tỉnh. Họ chỉ không còn được tự quyết đôi tay của mình.",
      "Hắn có thể chém nát cả tòa biệt thự này trong một nhịp thở. Nhưng một kiếm ấy sẽ không phân biệt được đâu là thứ đáng chém, đâu là người đang bị mượn tay."
    ],
    "dialogue": [],
    "choices": [
      {
        "id": "enter",
        "text": "Bước vào biệt thự, giữ nguyên mạng sống của tất cả gia nhân.",
        "next": "lh_hall"
      },
      {
        "id": "strike",
        "text": "Một kiếm phá hết cả biệt thự để kết thúc tà khí.",
        "next": "lh_dead_blade"
      }
    ]
  },
  "lh_dead_blade": {
    "id": "lh_dead_blade",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Dead End · Một kiếm quá dễ",
    "backgroundId": "long-hai-exterior",
    "location": "Bãi đất hoang trước biệt thự, Long Hải",
    "narration": [
      "Kiếm quang đi qua cổng sắt, qua tường gạch, qua bàn thờ, qua từng mắt nối vô hình đang bám lấy tòa nhà. Không trận pháp nào đỡ nổi, không thứ tà khí nào chạy thoát. Trong một nhịp thở, mọi thứ Cao Minh muốn chém đều đã đứt.",
      "Rồi từ dưới đống ngói đổ nát, có tiếng một người đàn bà già khóc gọi tên một cô gái. Gọi mãi, không ai trả lời.",
      "Hắn đã thắng thứ hắn định chém. Nhưng trong tòa nhà ấy, không còn lại một người nào nguyên vẹn để hắn hỏi một câu đơn giản nhất: họ có muốn được cứu theo cách này hay không.",
      "Sức mạnh của hắn không hề yếu đi. Chỉ là ở nơi này, nó không có quyền được dùng như thế."
    ],
    "dialogue": [],
    "choices": [
      {
        "id": "retry",
        "text": "Trở lại trước khi kiếm rời vỏ",
        "retry": true
      }
    ],
    "deadEnd": true
  },
  "lh_hall": {
    "id": "lh_hall",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Hành lang biệt thự",
    "backgroundId": "long-hai-corridor",
    "location": "Hành lang biệt thự Hứa Gia, Long Hải",
    "narration": [
      "Cánh cửa lim mở ra không một tiếng động. Cao Minh bước vào hành lang dài hun hút, nơi chân đèn đã cháy ngắn mà vẫn có người thay dầu đúng giờ — đúng đến mức không giống thói quen của người đang sống, mà giống một mệnh lệnh không cho phép trễ.",
      "Cuối hành lang, trước gian phòng trong cùng, một người gác đứng chắn lối. Khi Cao Minh tới gần, đôi mắt người ấy bỗng trợn lên nhìn hắn — ánh mắt của một người đang van xin. Nhưng đôi tay của người gác lại chậm rãi giơ lên, tự mình kéo then ngang, bịt kín lối vào.",
      "Miệng người gác mấp máy mãi mới thành tiếng, khàn đặc như đã lâu không được dùng để nói điều mình muốn nói.",
      "Cao Minh dừng bước. Hắn không rút kiếm. Một người đang bị bắt phải canh cửa, không phải là kẻ đã ra lệnh canh cửa."
    ],
    "dialogue": [
      {
        "speaker": "Người gác",
        "text": "Ông… đi đi… Tay tôi… nó không nghe tôi…"
      },
      {
        "speaker": "Cao Minh",
        "text": "Bổn tọa hỏi ngươi một lần. Trong phòng có người còn sống, phải không?"
      }
    ],
    "choices": [
      {
        "id": "observe",
        "text": "Dùng Vạn Giới Thần Niệm phân biệt đâu là mệnh lệnh, đâu là ý chí của người gác.",
        "next": "lh_lan_room",
        "effects": {
          "cluesHuaGiaDelta": 1
        }
      },
      {
        "id": "restrain",
        "text": "Khống chế người gác thật nhẹ, không để hắn tự làm mình bị thương.",
        "next": "lh_lan_room",
        "effects": {
          "lanTrustDelta": 1
        }
      }
    ],
    "objective": "infiltrate_villa"
  },
  "lh_lan_room": {
    "id": "lh_lan_room",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Gian phòng trong cùng",
    "backgroundId": "tieu-lan-room",
    "location": "Phòng Hứa Tiểu Lan, biệt thự Long Hải",
    "narration": [
      "Trên giường bệnh, một thiếu nữ ngồi dựa gối. Nàng vừa tròn mười tám tuổi; làn da vốn phải mịn màng như ngọc, lúc này loang lổ những mảng trắng đỏ sần sùi như vảy cá, vài chỗ lở loét rỉ nước vàng, đầu ngón tay hơi co quắp lại — phàm nhân nhìn vào, chỉ thấy hai chữ: phong cùi. Chẳng trách đại phu mời khắp Nam Kỳ đều lắc đầu, thuốc phong uống đã không biết bao nhiêu thang, và gia nhân trong nhà thà bị đánh đòn cũng không chịu bước qua cửa gian phòng này.",
      "Nhưng dưới thần niệm của Cao Minh, những \"vết phong\" ấy không hề có bệnh căn của phàm nhân. Chúng là tà khí ăn mòn từ trong ra ngoài, mượn đúng hình dạng của căn bệnh bị người đời khiếp sợ và xa lánh nhất làm áo khoác — một lớp vỏ hoàn mỹ, để không ai dám đến gần vật chứa của nó.",
      "Hắn đặt hai ngón tay lên cổ tay lạnh ngắt của nàng, chân khí như dòng suối ngầm lặng lẽ tràn vào kinh mạch — rồi khựng lại. Thứ hắn nhìn thấy còn đáng sợ hơn mọi thứ hắn từng chém: tà khí không chỉ bám vào kinh mạch. Nó đã luồn vào tận hệ thần kinh, và từng chút một, nó đang làm thay những việc vốn thuộc về chính cơ thể nàng — nhịp tim, hơi thở, sự co duỗi của từng thớ thịt. Không phải nó sắp giết nàng. Nó đang học cách sống thay nàng.",
      "Sát Ma Kiếm có thể chém đứt toàn bộ ma chướng. Hắn biết chính xác phải chém ở đâu, chém bao nhiêu phân. Hắn cũng biết, nếu cắt hết trong một lần, người con gái trên giường này sẽ ngừng thở — vì phần điều phối sự sống của nàng, từ lâu đã không còn nằm trọn trong tay nàng nữa.",
      "Lần đầu tiên kể từ khi đặt chân đến thời đại này, Cao Minh rời tay khỏi chuôi kiếm.",
      "Cao Minh đứng bên giường, ánh mắt trầm xuống. Hắn không quen biết Hứa Gia, cũng chẳng ai thuê hắn đến đây. Nhưng người của Vạn Ma Đạo Môn hắn, xưa nay muốn cứu ai thì cứu, muốn giết ai thì giết — chưa từng có thói quen đứng nhìn một sinh mạng bị tà vật nuốt sống ngay trước mắt. Huống hồ, luồng tà khí này và vầng sáng vừa ném hắn xuyên qua thời gian kia... rất có thể, vốn là cùng một mối."
    ],
    "dialogue": [
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài, người trong nhà này nhìn tôi đều quay mặt đi. Ngài là người đầu tiên nhìn thẳng. Vậy trong mắt ngài, tôi là người bệnh… hay là một thứ gì khác?"
      },
      {
        "speaker": "Cao Minh",
        "text": "Bổn tọa thấy một người còn sống. Và chưa đến lượt kẻ khác quyết định thay nàng."
      }
    ],
    "choices": [
      {
        "id": "truth",
        "text": "Nói đúng điều vừa quan sát được — không hứa sẽ chữa khỏi ngay trong đêm nay.",
        "next": "lh_servants",
        "effects": {
          "lanTrustDelta": 4
        }
      },
      {
        "id": "promise",
        "text": "Hứa sẽ giữ nàng sống trước, rồi mới tìm đường tháo gỡ từng phần một.",
        "next": "lh_servants",
        "effects": {
          "lanTrustDelta": 2
        }
      }
    ],
    "objective": "locate_tieu_lan"
  },
  "lh_servants": {
    "id": "lh_servants",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Người giữ tên nàng",
    "backgroundId": "long-hai-corridor",
    "location": "Hành lang biệt thự Hứa Gia, Long Hải",
    "narration": [
      "Bà Năm Liên đã đứng đợi ở khúc quanh hành lang từ lúc nào, tay ôm chặt một bọc vải lót đã sờn. Bà là người hầu già nhất còn lại trong căn nhà này. Thấy Cao Minh, bà không chạy, cũng không quỳ — bà chỉ nhìn hắn rất lâu, như cân nhắc xem người khách lạ này có đáng để bà đánh cược nốt quãng đời còn lại hay không.",
      "Trong bọc vải là một tập giấy mỏng. Bà mở ra một trang ghi chép cũ của nhà bếp, nơi góc giấy còn chép tay ba chữ: Hứa Tiểu Lan. Bà nói, bà từng nhìn thấy gia phả của Hứa Gia — ở đó, ba chữ ấy bị gạch đi bằng một nét mực khác, lạnh và đều, như gạch bỏ một món nợ đã thanh toán xong. Còn nét chữ trên trang giấy này run và vội, là nét của người chép lén.",
      "Bà kể thêm một việc nữa, giọng hạ xuống thật thấp. Con Thu Nguyệt — đứa nhỏ chạy việc trong nhà, vẫn bị người ta nghi là tai mắt của quản gia — mấy hôm trước lén dúi cho bà một tờ danh sách đóng gói của rương thuốc theo hầu cô chủ từ Tây Viện sang. Bà không đọc được: tờ danh sách không viết bằng chữ thường, mà bằng một lối ký hiệu tính toán của dân thương hồ. Bà giữ nó, vì linh cảm rằng một người viết được như thế thì không phải người điên, cũng không phải người sắp chết.",
      "Ngoài hành lang, người gác vẫn còn run, một tay ôm lấy cánh tay vừa bị mượn. Cao Minh nhìn bà, nhìn người gác, rồi nhìn về phía gian phòng trong cùng. Hắn đã hiểu ra điều đầu tiên của căn nhà này: thứ đang ngự ở đây không bắt đầu từ gân mạch. Nó bắt đầu từ việc một con người bị tước mất cái tên — vì một người không còn tên, thì không ai còn phải hỏi ý nàng nữa."
    ],
    "dialogue": [
      {
        "speaker": "Bà Năm Liên",
        "text": "Dạ, thưa ông… Tôi giữ tờ giấy này lâu quá, lâu đến nỗi suýt quên mất vì sao mình không dám đốt. Nhị phu nhân ngày xưa từng cứu tôi một lần. Tôi không có gì trả, chỉ còn giữ được cái tên của cô chủ… cho đến hôm nay."
      },
      {
        "speaker": "Cao Minh",
        "text": "Tên của nàng không phải thứ ai muốn gạch là gạch được."
      }
    ],
    "choices": [
      {
        "id": "protect",
        "text": "Ghi nhận lời khai của bà Năm Liên và bảo vệ những người đang bị cưỡng ép.",
        "next": "lh_ritual",
        "effects": {
          "cluesHuaGiaDelta": 2,
          "lanTrustDelta": 2
        }
      },
      {
        "id": "separate",
        "text": "Tách người tự nguyện giữ cửa khỏi người bị điều khiển, giữ nguyên mọi chứng cứ.",
        "next": "lh_ritual",
        "effects": {
          "cluesHuaGiaDelta": 2
        }
      }
    ],
    "objective": "classify_servants",
    "link": {
      "id": "danh",
      "phase": "identified"
    }
  },
  "lh_ritual": {
    "id": "lh_ritual",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Lời từ chối đầu tiên",
    "backgroundId": "tieu-lan-room",
    "location": "Phòng Hứa Tiểu Lan, biệt thự Long Hải",
    "companions": ["ba_nam_lien"],
    "narration": [
      "Một mệnh lệnh vô hình bỗng lan qua căn phòng như gợn nước lạnh. Ở hành lang, người gác đứng bật dậy, cánh tay tự giơ lên hướng về phía bà Năm Liên — trong khi miệng anh ta van vỉ thành tiếng, xin đừng để chính tay mình làm điều đó.",
      "Tiểu Lan nhắm mắt lại. Nàng không ra lệnh ngược lại, cũng không tranh giành. Nàng chỉ đẩy vào khoảng ngừng rất nhỏ giữa hai nhịp điều khiển một tiếng phản thanh yếu ớt — như người lấy ngón tay chạm khẽ vào dây đàn đang rung. Cánh tay người gác khựng lại giữa không trung, run lên, rồi buông xuống.",
      "Chỉ chờ đúng khoảnh khắc ấy, Cao Minh ra tay. Tứ Kiếm Đoạn Mạch điểm vào những mắt nối của nghi thức nằm ngoài cơ thể nàng; Sát Ma Kiếm chém đứt ma chướng bám trên ngưỡng cửa. Điểm neo trong gian phòng vỡ tan. Người gác ngã khuỵu xuống nền gạch — nhưng ngực anh ta vẫn phập phồng, và lần này, đôi tay buông thõng là do chính anh ta buông.",
      "Trong phòng, Tiểu Lan mở mắt. Trán nàng rịn mồ hôi, đầu ngón tay vẫn còn run vì cơn đau chạy dọc thần kinh. Nàng nhìn bà Năm Liên, mỉm cười rất nhẹ — rồi nụ cười chợt khựng lại. Nàng nhớ bà vừa đưa cho người khách lạ xem một tập giấy. Nhưng bà đã nói câu gì khi đưa nó… thì nàng không còn nhớ nữa. Chỉ một câu nói thôi, vừa rời khỏi trí nhớ của nàng như chưa từng tồn tại.",
      "Cao Minh đã nghe rõ câu nói ấy. Và hắn hiểu, từ giây phút này, mỗi lần nàng chống lại thứ trong người mình, cái giá sẽ được tính bằng chính ký ức của nàng."
    ],
    "dialogue": [
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Tôi vẫn nghe được tiếng lệnh đó, thưa ngài. Nhưng tôi có thể không làm theo. Chỉ là… khi nãy, bà ấy đã nói gì với ngài vậy?"
      },
      {
        "speaker": "Cao Minh",
        "text": "Bổn tọa nhớ từng chữ. Bổn tọa sẽ kể lại cho nàng nghe — nhưng nàng phải nhớ rõ một điều: đó là lời bổn tọa kể, không phải ký ức của nàng. Bổn tọa không cho phép ai, kể cả chính bổn tọa, bảo nàng rằng nàng đã nhớ những gì nàng không còn nhớ."
      }
    ],
    "choices": [
      {
        "id": "listen",
        "text": "Để nàng tự quyết định khi nào muốn nghe lại — không ép nàng nhận lại ký ức ngay.",
        "next": "lh_depart",
        "effects": {
          "lanTrustDelta": 3,
          "memoryIntegrityDelta": -3,
          "lanHealthDelta": -2
        }
      },
      {
        "id": "repeat",
        "text": "Kể lại nguyên văn lời bà Năm Liên, nói rõ ngay từ đầu đây là lời thuật lại.",
        "next": "lh_depart",
        "effects": {
          "lanTrustDelta": 2,
          "memoryIntegrityDelta": -3,
          "lanHealthDelta": -2
        }
      }
    ],
    "objective": "break_long_hai_ritual"
  },
  "lh_depart": {
    "id": "lh_depart",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Trước cổng, trời sắp sáng",
    "backgroundId": "long-hai-dawn-gate",
    "location": "Cổng biệt thự Hứa Gia, Long Hải",
    "companions": ["le_thu_nguyet"],
    "narration": [
      "Nghi thức trong gian phòng đã bị phá, nhưng tiếng gọi từ mạng lưới ngoài biệt thự vẫn chưa dừng — nó chỉ lùi ra xa, như thủy triều rút mà chưa tan. Bà Năm Liên khép lại bọc vải của mình. Người gác ngồi tựa vào cột hiên, lần đầu tiên sau nhiều năm được tự chọn có đứng dậy hay không.",
      "Trời gần sáng. Ở bậc thềm, con Thu Nguyệt đứng nép bên cánh cổng, tay vẫn ôm khay trà đã nguội từ lúc nào. Nó lấy hết can đảm nói nhanh một câu: xe ngựa của nhà sẽ về Chợ Lớn trong hôm nay, và đường xuống Vũng Tàu mấy bữa nay có người lạ mặt canh ở bến. Nó nói xong liền cúi đầu, như sợ chính cái bóng của mình nghe thấy.",
      "Tiểu Lan vịn tay vào khung cửa, tự mình bước qua ngưỡng cửa mà nàng đã bị giam sau nó không biết bao nhiêu lâu. Những vết sẹo trên mặt nàng không biến mất. Nàng cũng không đòi Cao Minh hứa một điều gì mà chính hắn chưa biết có làm được hay không.",
      "Cao Minh nhìn cánh cổng đang mở. Một kiếm của hắn đủ dọn sạch mọi vật cản từ đây đến tận chân trời. Nhưng người đang đứng cạnh hắn không phải một món đồ được mang đi — và quyền quyết định bước tiếp hay dừng lại, từ giây phút này, phải là của nàng."
    ],
    "dialogue": [
      {
        "speaker": "Lê Thu Nguyệt",
        "text": "Dạ… thưa ông, em chỉ dám nói một câu này thôi. Đường xuống Vũng Tàu không yên đâu. Ông đi thì… ông coi chừng ở bến."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Đã lâu lắm rồi, tôi mới lại nhìn thấy trời sắp sáng ở bên ngoài cánh cổng này."
      }
    ],
    "choices": [
      {
        "id": "ask",
        "text": "Hỏi Tiểu Lan: nàng có muốn rời khỏi biệt thự này cùng mình không.",
        "next": "lh_slice_end",
        "effects": {
          "lanTrustDelta": 3
        },
        "objective": "escape_long_hai",
        "flags": {
          "lanDepartureConsent": true
        }
      },
      {
        "id": "order",
        "text": "Không cần hỏi — tự quyết định đưa Tiểu Lan rời khỏi đây ngay.",
        "next": "lh_dead_consent"
      }
    ]
  },
  "lh_dead_consent": {
    "id": "lh_dead_consent",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Dead End · Người được cứu không được hỏi",
    "backgroundId": "long-hai-dawn-gate",
    "location": "Cổng biệt thự Hứa Gia, Long Hải",
    "narration": [
      "Cao Minh đưa nàng qua cổng mà không hỏi một lời. Không một ai trong căn nhà ấy đủ sức ngăn hắn, và nàng cũng không chống cự. Nàng đi theo, yên lặng suốt từ bậc thềm ra đến đường cái.",
      "Đi được một quãng, hắn hỏi nàng có đau ở đâu không. Nàng đáp, giọng nhẹ như nói về người khác: lần sau ngài muốn đưa tôi đi đâu, xin cứ quyết định trước. Tôi khỏi cần phải nói nữa.",
      "Con đường thoát đã mở. Nhưng quyền được từ chối — thứ nàng vừa phải trả bằng một phần trí nhớ để giành lại trong đêm nay — đã bị chính người cứu nàng tước mất, nhẹ nhàng và không hề ác ý.",
      "Đây không phải con đường mà câu chuyện này có thể đi tiếp."
    ],
    "dialogue": [],
    "choices": [
      {
        "id": "retry",
        "text": "Trở lại quyết định trước cổng biệt thự",
        "retry": true
      }
    ],
    "deadEnd": true
  },
  "lh_slice_end": {
    "id": "lh_slice_end",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Hết hồi một · Long Hải",
    "backgroundId": "long-hai-dawn-gate",
    "location": "Cổng biệt thự Hứa Gia, Long Hải",
    "narration": [
      "Tiểu Lan ngoái nhìn lại tòa biệt thự một lần cuối. Nàng không còn bị khóa sau cánh cửa ấy nữa — nhưng thứ đang sống trong người nàng thì vẫn còn đó, và trên trang giấy cũ của một bà hầu già, cái tên của nàng vẫn còn nguyên vẹn nét mực.",
      "Cao Minh không nói lời an ủi nào. Hắn chỉ đi chậm lại, để người con gái với đôi chân còn yếu có thể bước ngang hàng với mình, thay vì bị kéo theo phía sau.",
      "Phía trước là con đường xuống Vũng Tàu, nơi bến nước và những chuyến hàng không có tên đang chờ. Hồi một khép lại ở đây — câu chuyện thì chưa."
    ],
    "dialogue": [
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Đi thôi, thưa ngài. Lần này, là tôi tự mình muốn đi."
      }
    ],
    "choices": [],
    "sliceEnd": true
  }
});
