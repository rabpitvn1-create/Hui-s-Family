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
      "Khi hai chân chạm đất, trước mắt Cao Minh là một bãi đất hoang ẩm mùi biển, phía trước sừng sững một tòa biệt thự kiểu Tây với mái ngói âm dương, cửa gỗ lim chạm trổ, đèn dầu leo lét sau rèm cửa. Hắn ngẩng đầu nhìn trời — tinh tú vẫn là tinh tú ấy, mà linh khí trong không khí loãng đến đáng thương, lẫn theo mùi khói than, mùi thuốc súng và hơi muối mặn của một thời đại thuộc về phàm nhân. Thần niệm khẽ quét ra ngoài, rồi quay về tay không: nơi này tên là gì, đang là năm tháng nào của nhân gian — thần niệm của hắn không đọc được những thứ ấy; chúng thuộc về miệng của người sống ở đây. Cái hắn đo được chỉ là khoảng cách: cách Lôi Thiên Sơn của hắn, không chỉ là vạn dặm sơn hà, mà là cả một dòng thời gian không thể đo đếm.",
      "Cao Minh nhướng mày. Vầng sáng câm lặng nãy giờ, hóa ra cũng biết chọn chỗ ném người.",
      "Bên trong tòa biệt thự kia, một luồng tà khí đang cuộn trào. Tà khí ấy đặc quánh như máu đông, âm hàn đến mức thấm qua tường gạch, tràn ra tận cổng. Người thường chỉ cần đứng gần hít phải vài hơi cũng đủ tà xâm nhập thể, sinh bệnh mà chết không rõ nguyên nhân. Bề ngoài, tòa nhà này yên tĩnh như một nơi nghỉ mát của nhà giàu. Bên trong, nó mục ruỗng đến tận thớ gạch. Ở cõi của hắn, những chỗ như thế này có một tên gọi ngắn gọn: tổ.",
      "Cao Minh không gõ cửa ngay. Thần niệm vừa chạm vào những con người sau bức tường, hắn đã khựng lại: trong nhà ấy có những thân thể đang cử động trái với ý chí của chính họ — tay làm một việc, mắt van một việc khác. Người trong nhà vẫn còn tỉnh. Họ chỉ không còn được tự quyết đôi tay của mình.",
      "Hắn có thể chém nát cả tòa biệt thự này trong một nhịp thở. Nhưng một kiếm ấy sẽ không phân biệt được đâu là thứ đáng chém, đâu là người đang bị mượn tay.",
      "Hắn bước về phía biệt thự. Con đường đất chạy dọc bờ biển vắng tanh, hai bên là hàng phi lao gầy guộc, gió thổi qua nghe như tiếng thở dài nối nhau không dứt. Một xóm chài nghèo tựa vào vách đá, thuyền thúng nằm úp trên cát, lưới phơi đầy sân — vậy mà ở cuối đường, tòa biệt thự kia sáng đèn như một con thú nằm phục, cửa nào cửa nấy đều có người đứng chờ sẵn từ trước khi hắn xuất hiện trong tầm mắt.",
      "Đèn trước cổng đã thắp, dù trời còn chưa tối hẳn. Hai người phu khuân vác đứng hai bên cổng sắt, lưng thẳng, mắt nhìn thẳng — khi Cao Minh tới gần, cả hai cùng cúi chào một lượt, góc cúi giống nhau đến từng phân, như hai con rối cùng giật một sợi dây. Ở góc sân, một người đàn bà đang phơi áo; tay bà ta gấp từng chiếc áo theo đúng một nếp, treo lên, quay đi, lại lấy chiếc khác — đều đặn như guồng nước, không nhanh không chậm, và hoàn toàn không giống một con người đang làm việc nhà lúc hoàng hôn.",
      "Cao Minh dừng lại cách cổng ba bước. Vầng sáng ném hắn tới đúng nơi này, vào đúng lúc này, trước đúng cánh cổng này — thiên hạ ít có sự tình cờ nào hào phóng đến thế. Hắn khẽ cười. Chén rượu ở Vạn Hoa Lầu hắn uống dở vì chán; cơn chán ấy, xem ra, vừa tự tìm được thuốc chữa.",
      "Trong sân, tiếng chân người dịch chuyển nghe rất khẽ mà rất đều. Cả tòa nhà như đang nín thở — không, không phải nín thở. Là đang thở theo một nhịp không thuộc về bất cứ người nào trong số họ.",
      "Hắn đưa tay lên. Chỉ cần một kiếm. Rồi hắn lại nghĩ tới những đôi mắt ban nãy trong thần niệm — những đôi mắt còn tỉnh táo, đang van xin từ bên trong những thân thể không còn nghe lời chúng nữa.",
      "Hắn hạ tay xuống, chậm rãi, như đặt xuống một vật rất nặng. Cao Minh đứng yên giữa bãi đất hoang, hít một hơi dài của thời đại này: mùi cá khô phơi trên giàn tre ở xóm chài phía xa, mùi khói củi bếp lẫn trong gió biển, mùi đất ẩm sau một cơn mưa đã qua từ buổi trưa — tất cả đều mỏng manh đến tội nghiệp. Ở cõi của hắn, một hơi thở tùy tiện của cường giả cũng đủ san phẳng một dãy núi; ở đây, hắn phải thu thần niệm lại như người cầm một bát nước đầy đi qua cửa hẹp, vì thế giới này mỏng đến mức không chịu nổi một lần hắn lỡ tay — mà hắn thì xưa nay ghét nhất việc phải dọn dẹp hậu quả của chính mình. Cuối con đường, một con chó sủa hai tiếng về phía biệt thự rồi im bặt, như bị ai bịt miệng.",
      "Cái lạ nhất không nằm ở độ đậm của tà khí. Cái lạ nằm ở cách nó nghe ngóng. Ban nãy, khi thần niệm của hắn vừa lướt qua tòa nhà, thứ ở bên trong đã khẽ điều chỉnh theo — như một người đang ngủ say mà vẫn trở mình né một tiếng động, như con thú đã quen bị săn nên học được cách thở mà không thành tiếng. Cả tòa biệt thự là một cái tai áp sát vào thế gian. Và ở rất sâu bên dưới lớp tà khí đặc quánh ấy, Cao Minh nghe thấy một nhịp khác hẳn: nhỏ, yếu, nhưng ngoan cố giữ lấy nhịp riêng của mình, như có kẻ đang âm thầm đếm từng nhịp một trong bóng tối, quyết không để cái nhịp chung của cả tòa nhà nuốt chửng mình.",
      "Hắn sửa lại vạt áo, thu hết khí tức vào trong, bước nốt mấy bước còn lại tới trước cổng sắt — một lữ khách đường xa gõ cửa nhà người ta lúc chiều tà, đàng hoàng và không vội. Một Ma Tôn bước vào nhà của những con rối bằng cửa chính: chuyện này mà truyền về Vạn Giới, đủ cho thiên hạ cười ba năm. Nhưng bổn tọa không vội. Kẻ trong kia đã nấp sau lưng những con người còn tỉnh ấy, thì bổn tọa sẽ lôi nó ra từng sợi một — còn tên tuổi của từng người trong nhà này, hắn chưa biết một cái nào. Khách đã tới trước cửa, thì cứ để chủ nhà tự ra mắt. Hắn đứng trước cánh cổng đóng kín, đưa tay lên."
    ],
    "dialogue": [],
    "choices": [
      {
        "id": "enter",
        "text": "Bước vào biệt thự, giữ nguyên mạng sống của tất cả gia nhân.",
        "next": "lh_gate"
      },
      {
        "id": "strike",
        "text": "Một kiếm phá hết cả biệt thự để kết thúc tà khí.",
        "next": "lh_dead_blade"
      }
    ]
  },
  "lh_gate": {
    "id": "lh_gate",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Cổng biệt thự",
    "backgroundId": "long-hai-exterior",
    "location": "Cổng biệt thự Hứa Gia, Long Hải",
    "companions": [
      "npc_porter"
    ],
    "narration": [
      "Cổng mở ra gần như ngay sau tiếng gõ thứ ba — nhanh đến mức phép lịch sự chỉ còn là hình thức. Người phu khuân vác bước ra đón khách, và điều đầu tiên ông ta làm, trước cả khi bài chào thuộc lòng kịp mở miệng, là khựng lại. Hai thanh kiếm đang lơ lửng ngang vai vị khách, không chuôi tay nào cầm, không sợi dây nào treo. Đôi chân người phu chùn xuống nửa bước, miệng há ra, vai giật lên như người vừa dẫm phải than hồng — rồi, như có bàn tay nào giật mạnh một sợi dây sau gáy, nụ cười đúng mực chụp ngay xuống mặt ông ta, nuốt trọn cái giật mình ấy không còn một vết. Cao Minh đứng nhìn: cái thân thì giật mình như người, còn cái mặt thì không được phép.",
      "Then cổng rút ra phát một tiếng sắt chạm sắt khô và gọn — gọn đến mức Cao Minh hiểu ngay: người bên trong không phải nghe tiếng gõ mới ra mở. Cả tòa nhà đã biết hắn đứng ngoài cổng từ trước khi bàn tay hắn chạm vào cửa. Ba tiếng gõ của hắn, suy cho cùng, chỉ là một phép lịch sự hắn dành cho chính mình: vào nhà người ta như một người khách, chứ không phải như một cơn bão.",
      "Bài chào của người phu dùng toàn những chữ của người đọc sách: 'nghênh tiếp quý khách', 'hàn xá hân hạnh' — những chữ không thuộc về một người gánh nước ở nhà bếp. Chúng nằm trên miệng ông ta như một chiếc áo mượn, vừa vặn một cách kỳ lạ, vì đã có kẻ đo ni đóng giày cho từng chữ một. Trong toàn bộ màn tiếp đón hoàn hảo ấy, chỉ có đôi tay run là không vay mượn của ai.",
      "Kỳ lạ là đôi tay của người phu ấy. Chúng run. Không phải run vì sợ một vị khách lạ mặt cao lớn — cái run này đều và mảnh, như dây đàn bị ai gảy liên hồi không cho nghỉ. Còn lại mọi thứ ở người phu đều hoàn hảo: áo bà ba nâu sạch sẽ, khăn đóng ngay ngắn, lời chào không vấp một chữ.",
      "Móng tay người phu cắt ngắn, kẽ móng còn in vết đen của tro bếp và vảy cá — bàn tay của một người lao động thật sự, quen làm những việc nặng nhọc nhất trong cái nhà này. Vậy mà đôi bàn tay lao động ấy, giữa lúc chắp lại chào khách, lại run lên như tay một ông già trúng phong. Cao Minh nhìn sự tương phản ấy rất lâu. Tay làm lụng thì thật. Cái run cũng thật. Chỉ có chủ nhân của đôi tay là không được phép sống thật.",
      "Ở đầu kia của sân, một người phu khác cũng đang cúi chào — hướng về phía không có ai. Anh ta không giật mình, không ngẩng đầu, không hề hay biết vừa có một vị khách rất lạ bước qua cổng. Hai người, hai đầu sân, cùng một góc cúi, cùng một nhịp đứng thẳng dậy. Một người thì giật mình rồi bị kéo lại ngay; một người thì đến giật mình cũng không còn. Cao Minh nhìn cảnh ấy thêm một lúc, rồi bước qua cổng.",
      "Cánh cổng sắt sau lưng hắn tự khép lại — không thấy ai đẩy. Tiếng then cài vang lên gọn và dứt khoát như một câu trả lời: khách đã vào, nhà đã nhận. Cao Minh không quay đầu. Kể từ khoảnh khắc then cài xuống, mọi đôi mắt trong nhà này — kể cả những đôi mắt chẳng hề nhìn về phía hắn — đều đã biết hắn đang đứng ở đâu.",
      "Xóm chài vào giờ này lẽ ra phải ồn ào nhất trong ngày: tiếng trẻ con gọi nhau í ới, tiếng gà lục tục lên chuồng, tiếng ai đó mắng một con chó lảng vảng gần giàn cá khô. Vậy mà sau bức tường của tòa biệt thự, mọi âm thanh đời thường đều bị cắt cụt, như có một bàn tay vô hình bịt miệng cả xóm. Chỉ còn tiếng sóng rất xa, và tiếng đèn dầu cháy — mà đèn dầu, theo lẽ thường, không bao giờ cháy thành tiếng đều như thế.",
      "Sân gạch rộng, quét sạch đến mức không thấy một chiếc lá rụng, dù hai hàng cau hai bên đang mùa thay lá. Dọc lối vào, đèn lồng đã thắp hàng loạt — thắp trước khi trời tối, sáng đều như ban ngày, và không một ngọn đèn nào cháy lệch tim. Trong các tòa nhà của phàm nhân, đèn dầu là thứ bừa bộn nhất: ngọn cao ngọn thấp, ngọn khói ngọn trong. Còn ở đây, chúng cháy như đang đứng nghiêm chờ điểm danh.",
      "Trong không khí của sân, ngoài mùi đèn dầu còn có một mùi nữa rất nhạt: mùi thuốc bắc đăng đắng, từ dãy nhà trong thoảng ra theo từng đợt, đều đặn như hơi thở. Một 'biệt thự dưỡng bệnh' thơm mùi thuốc là chuyện phải lẽ. Chỉ có cái đều đặn của nó là không phải lẽ: mùi thuốc đến rồi đi theo nhịp, như thể căn nhà đang hít vào một thứ và thở ra một thứ khác.",
      "Gió biển tối nay không yếu. Ngoài kia, hàng phi lao đang nghiêng cả về một phía, cát bị thổi thành từng vệt dài xiên qua mặt đường. Vậy mà hai mươi mấy ngọn đèn lồng trong sân cháy đứng thẳng như cắm vào đá. Cao Minh đi ngang một ngọn đèn treo thấp vừa tầm mặt: ngọn lửa không hề né hơi thở của hắn. Nó không biết hắn vừa đi qua. Hoặc nó biết — và kẻ giữ lửa đã ra lệnh cho nó không được phép né.",
      "Hắn rơi xuống cái vũng bùn này giữa lúc chén rượu còn chưa cạn, bụng nghĩ thế nào cũng tìm được một trò tiêu khiển qua ngày. Một tòa nhà mà đến ngọn lửa cũng phải đứng nghiêm chờ lệnh — kể cũng không đến nỗi tệ.",
      "Đường từ cổng tới bậc thềm dài chừng ba mươi bước. Người phu đi hết ba mươi bước ấy không một lần vấp, không một lần tránh chỗ gạch lún — ông ta đi như người nhắm mắt cũng thuộc đường, thuộc đến từng viên gạch thấp cao. Hai bên lối đi, những luống hoa giấy được cắt tỉa thành hàng thẳng tắp; hoa giấy vốn là thứ cây hoang, leo đâu sống đó, vậy mà trong sân này chúng leo đúng hàng, nở đúng hướng, như một đội lính đang đứng gác. Cả khoảng sân này, suy cho cùng, cũng chỉ là một gian phòng nữa của cùng một cỗ máy.",
      "Người phu dẫn đường đi trước ba bước, không hề quay đầu lại, mà cũng không cần quay: bước chân của ông ta và tiếng chân của Cao Minh không bao giờ chạm nhau, như thể cả sân này đã biết trước khách sẽ đi tới đâu. Đến bậc thềm nhà chính, người phu dừng lại, cúi đầu, và nói câu đầu tiên không nằm trong bài bản tiếp khách.",
      "Đến bậc thềm, người phu làm một việc mà không bài bản tiếp khách nào dạy nổi: ông ta đưa cả hai tay nắm chặt lấy nhau, như người ta nắm một vật đang cố vùng thoát, rồi mới ngẩng đầu lên. Trong một thoáng, nụ cười đúng mực trên mặt ông ta trượt đi, để lộ một gương mặt khác — gương mặt của một người đàn ông đã ngoài bốn mươi, mệt đến tận xương, đang gom hết chút sức tàn để nói một câu không phải của mình. Rồi ông ta mở miệng."
    ],
    "dialogue": [
      {
        "speaker": "Người phu",
        "text": "Dạ… thưa ông, trong nhà này… ông thấy ai làm gì lạ, ông cũng đừng… đừng trách họ. Họ không có muốn vậy đâu."
      },
      {
        "speaker": "Cao Minh",
        "text": "Ngươi tên gì?"
      },
      {
        "speaker": "Người phu",
        "text": "Dạ, con tên Thới, gánh nước ở bếp. Ông… ông hỏi tên con làm gì, thưa ông?"
      },
      {
        "speaker": "Cao Minh",
        "text": "Không có gì. Tiện miệng thì hỏi."
      },
      {
        "speaker": "Người phu",
        "text": "Dạ… thưa ông, ở nhà này… lâu lắm rồi, không có ai hỏi tên con."
      },
      {
        "speaker": "Cao Minh",
        "text": "Thế à. Lui đi."
      }
    ],
    "choices": [
      {
        "id": "ask_lan",
        "text": "Hỏi người phu về vị tiểu thư trong gian phòng trong cùng.",
        "next": "lh_saloon",
        "effects": {
          "cluesHuaGiaDelta": 1
        }
      },
      {
        "id": "observe_gate",
        "text": "Không hỏi gì thêm, lặng lẽ quan sát cả sân một lượt.",
        "next": "lh_saloon"
      }
    ]
  },
  "lh_saloon": {
    "id": "lh_saloon",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Phòng khách",
    "backgroundId": "long-hai-saloon",
    "location": "Phòng khách biệt thự Hứa Gia, Long Hải",
    "companions": [
      "steward"
    ],
    "narration": [
      "Phòng khách của biệt thự bày biện theo lối các nhà giàu Nam Kỳ vẫn chuộng: cột lim đen bóng, tràng kỷ chạm rồng, trên tường treo cặp câu đối sơn son và một bức tranh thủy mặc đã ngả màu. Mọi thứ đều đắt tiền, và mọi thứ đều nằm đúng chỗ của nó — đúng đến mức căn phòng giống một bức ảnh hơn là một nơi có người ở.",
      "Trong phòng không có lấy một hạt bụi. Cao Minh liếc qua nóc chiếc tủ cao sát trần — nơi ở bất cứ nhà nào cũng là chỗ bụi đóng dày nhất — và thấy mặt gỗ lim bóng loáng, như vừa có người trèo lên lau chùi sáng nay. Một phòng khách sạch đến mức này không phải để sống; nó là để được nhìn vào từ bên ngoài, như một gian hàng trưng bày mà chủ nhân không bao giờ bước vào ở thật. Ngay cả mùi hương cũng được bài trí sẵn: trầm thoang thoảng, không khét, không nồng — mùi của một nơi thờ cúng mà không có thần.",
      "Trên vách, một chiếc đồng hồ quả lắc kiểu Tây gõ nhịp tích tắc, đều và lạnh. Cao Minh nghe một lúc rồi nhận ra cái khó chịu không nằm ở tiếng đồng hồ — mà ở chỗ nhịp tích tắc ấy khớp một cách kỳ lạ với nhịp bước chân của gia nhân ngoài hành lang, khớp cả với nhịp người phu châm dầu đèn ngoài sân. Như thể cả tòa nhà này mượn chung một quả tim bằng đồng và dây cót.",
      "Quản gia là một ông lão ngoài sáu mươi, tóc bạc chải ngược, áo dài the đen không một nếp nhăn. Ông ta rót trà bằng cả hai tay, chén trà đặt xuống chiếu không kêu một tiếng. Lời ông ta nói sau đó rõ ràng đã được nói ra rất nhiều lần, cho rất nhiều vị khách khác nhau — nó trơn tru như nước chảy qua đá đã mòn.",
      "Trước khi bài nói ấy bắt đầu, đôi mắt ông lão có đi qua người vị khách một lượt, chậm rãi và lịch sự. Nó đi qua bộ áo lạ, qua mái tóc, qua hai thanh kiếm đang treo lơ lửng ngang vai hắn — và không dừng lại ở đâu cả, không đổi sắc, không chớp thêm một cái nào. Người phu ngoài cổng còn giật mình trước khi bị kéo vào bài bản; còn ông lão này, đến cái giật mình cũng không có. Như thể khách khứa vác kiếm bay tới nhà này là chuyện mỗi tuần đều có. Cao Minh nhấp một ngụm trà, bụng thấy buổi ghé chơi này bắt đầu đáng công.",
      "Giọng ông lão ấm và đều, mỗi chữ rơi xuống đúng chỗ của nó. Trong suốt bài nói dài, đôi mắt ấy vẫn không hề đổi sắc — không tự hào khi khoe gia thế nhà họ Hứa, không xót xa khi nhắc tới cô chủ bệnh tật, không e dè khi nói đến hai chữ 'lây lan'. Một con người thật, khi kể về bất hạnh của chủ mình, ít nhất cũng phải chớp mắt sai một nhịp. Ông lão này kể như người ta đọc một tờ giấy đã thuộc lòng — và tờ giấy thì không biết xót xa.",
      "Bài bản ấy đại để như sau: Hứa Gia là nhà buôn lớn ở Chợ Lớn. Vị tiểu thư con ông Hội đồng mắc chứng phong quái ác, thầy thuốc khắp nơi bó tay, bệnh lại hay lây; gia đình đành đưa cô ra biệt thự Long Hải này dưỡng bệnh cho khuất mắt người đời, vừa để cô yên tĩnh, vừa để khỏi liên lụy tiếng tăm nhà họ Hứa. Khách có lòng thương thì xin cứ ngồi chơi ở gian ngoài, uống chén trà, ngắm cảnh biển — còn khu nhà trong, vì phép vệ sinh của quan thầy thuốc Tây đã dặn, thiệt tình không dám mời khách bước vào.",
      "Cao Minh ngồi nghe, đầu ngón tay xoay nhẹ chén trà. Bài kể hoàn hảo đến mức không còn một kẽ hở: nguyên nhân có, thầy thuốc có, quan Tây có, phép vệ sinh có — mọi câu hỏi một vị khách có thể đặt ra đều đã được trả lời trước khi được hỏi. Chỉ có một thứ vắng mặt trong suốt bài kể, vắng mặt gọn gàng như ai đã dùng dao gọt đi từ trước: tên của vị tiểu thư. Từ đầu đến cuối, ông lão chỉ gọi nàng bằng 'cô chủ', bằng 'vị tiểu thư nhà con'. Một người con gái dưỡng bệnh ngay trong nhà mình, mà tên của nàng không được phép xuất hiện ngay trong chính phòng khách nhà nàng.",
      "Trong lúc ông lão nói, có bảy lượt gia nhân đi ngang qua khung cửa phòng khách. Cao Minh không quay đầu nhìn; hắn chỉ đếm bằng thần niệm. Bảy người, bảy lượt bước qua ngưỡng cửa — và cả bảy đều bước bằng chân trái trước, khoảng cách giữa hai người liên tiếp đều nhau đúng mười nhịp thở. Không một người nào trong số họ liếc vào phòng khách lấy một cái, dù trong phòng đang có một vị khách lạ mà cả xóm chài sẽ bàn tán tới mai.",
      "Cao Minh còn nhận ra một điều nữa: không một ai trong bảy người ấy dẫm lên ván kêu. Sàn phòng khách lát gỗ lim lâu năm, người thường đi qua thế nào cũng phải có một hai tiếng cọt kẹt; vậy mà bảy lượt người bước qua ngưỡng cửa, sàn nhà im phăng phắc — họ bước đúng lên đầu xà, từng người một, không sai một phân, như thể cả bảy đang dùng chung một đôi chân đã thuộc đường từ rất lâu rồi.",
      "Trà rất ngon. Chén của hắn vừa vơi, ông lão quản gia đã châm thêm — và trước khi châm, theo một thói quen vô thức, ông ta đưa tay nắn lại chiếc chén của chính mình cho thẳng hàng với mép bàn. Chiếc chén vốn đã thẳng. Ông ta nắn nó hai lần.",
      "Ở Vạn Hoa Lầu, rượu uống chậm vì người uống muốn chậm. Ở đây, mọi sự đúng mực đều là vì có kẻ bắt phải đúng. Tự do và khuôn phép nhìn qua giống hệt nhau; chúng chỉ khác nhau ở chỗ ai là người đặt ra nhịp. Hắn uống cạn phần trà còn lại, một nửa để thưởng trà, một nửa để xem ông lão quản gia sẽ làm gì tiếp theo.",
      "Cao Minh đặt chén xuống. Hắn đã nghe đủ bài bản. Bây giờ là lúc xem căn nhà này giữ bài bản ấy bằng cách nào, khi có kẻ không chịu ngồi yên ở gian ngoài.",
      "Chén sứ vừa chạm xuống mặt gỗ, ngoài cửa bỗng có một tiếng động rất nhỏ: một gia nhân đang đi ngang khựng lại nửa nhịp — chỉ nửa nhịp — rồi bước tiếp đều như cũ. Căn nhà vừa nghe thấy tiếng hắn đặt chén. Nó nghe thấy mọi thứ trong nhà này. Cao Minh mỉm cười rất nhạt: tốt. Đã nghe thấy rồi thì lát nữa, hắn đỡ phải gõ cửa từng phòng một."
    ],
    "dialogue": [
      {
        "speaker": "Quản gia",
        "text": "Dạ, thưa ông, cô chủ nhà con bệnh nặng, phép nhà lại nghiêm. Ông có điều chi cần, cứ dạy con một tiếng, con xin lo liệu hết ở gian ngoài này."
      },
      {
        "speaker": "Cao Minh",
        "text": "Trà thì thôi. Người bệnh trong nhà này ở đâu? Bổn tọa muốn xem."
      },
      {
        "speaker": "Quản gia",
        "text": "Dạ… thưa ông, việc ấy thiệt tình con không dám. Lỡ ông lây lấy chứng phong ấy thì tội nhà con gánh không hết…"
      },
      {
        "speaker": "Cao Minh",
        "text": "Cứ dẫn đường. Lây hay không, là việc của bổn tọa."
      }
    ],
    "choices": [
      {
        "id": "press",
        "text": "Đứng dậy, đi thẳng về phía hành lang khu trong.",
        "next": "lh_rules",
        "effects": {
          "lanMaterInfluenceDelta": 2
        }
      },
      {
        "id": "polite",
        "text": "Nhận lời để quản gia dẫn đi xem nhà trước một vòng.",
        "next": "lh_rules",
        "effects": {
          "cluesHuaGiaDelta": 1
        }
      }
    ]
  },
  "lh_rules": {
    "id": "lh_rules",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Gia quy",
    "backgroundId": "long-hai-corridor",
    "location": "Hành lang khu nhà chính, biệt thự Hứa Gia",
    "companions": [
      "steward",
      "le_thu_nguyet"
    ],
    "narration": [
      "Quản gia dẫn đường qua dãy nhà chính. Ông lão đi không nhanh không chậm, gót giày gõ xuống nền gạch thành một nhịp đều — và Cao Minh nhận ra, không hiểu từ lúc nào, bước chân của chính mình cũng đã rơi vào đúng nhịp ấy. Hắn cố ý chậm lại nửa bước. Ông lão phía trước không hề quay đầu, vậy mà nhịp gõ giày của ông ta cũng chậm theo nửa bước, như thể cả hành lang này cùng thở bằng một lá phổi.",
      "Hắn thử một việc rất nhỏ: đang đi, hắn bỗng dừng hẳn lại, như người chợt nhớ ra một điều gì. Ông lão phía trước — không hề quay đầu, không một dấu hiệu cho thấy ông ta nhìn thấy — cũng dừng lại ngay trong cùng khoảnh khắc ấy, gót giày không chệch một phân. Rồi cả hành lang lặng theo: tiếng chổi quét sân ở đâu đó tắt ngấm, tiếng nước đổ vào chum ngừng giữa chừng. Một nhịp. Hai nhịp. Cao Minh bước tiếp, và cả tòa nhà như vừa được phép thở, đồng loạt sống lại quanh hắn.",
      "Hai bên hành lang là những cánh cửa đóng kín, cửa nào cũng treo một thẻ gỗ nhỏ ghi giờ thay dầu đèn, giờ quét dọn, giờ đóng then — chữ viết tay nắn nót của cùng một người, nét nào cũng ngay hàng thẳng lối. Quản gia vừa đi vừa đọc gia quy như đọc một bài văn tế đã thuộc lòng: đèn trong nhà thay dầu hai lượt, trước trống canh một và sau trống canh ba; bữa ăn dọn đúng giờ, thừa thiếu không được hỏi; sau trống canh đầu, gia nhân ai về phòng nấy, không được đi lại; khách có nghe tiếng gì trong đêm cũng xin cứ yên giấc, nhà này gần biển, gió lùa qua khe cửa nghe như tiếng người là chuyện thường.",
      "Hắn ghé mắt nhìn kỹ một tấm thẻ gỗ treo trên cánh cửa gần nhất: 'Giờ thay dầu: trống canh một, trống canh ba. Giờ quét dọn: trước giờ cơm sáng.' Chữ viết nhỏ, đều, đẹp như nét chữ của người có học — nhất định không phải tay gia nhân viết. Ai đó có học thức đã ngồi viết từng tấm thẻ như thế này cho từng cánh cửa trong nhà, kiên nhẫn như một người ghi sổ sách cho một nhà kho. Chỉ khác một điều: thứ được ghi sổ ở đây là con người.",
      "Cao Minh vừa nghe vừa dịch từng điều quy sang thứ ngôn ngữ của người bày trận. Đèn thay dầu hai lượt một đêm — nghĩa là luôn có người đi dọc các hành lang vào những giờ cố định. Bữa ăn không được hỏi thừa thiếu — nghĩa là không ai được phép rời khỏi vị trí của mình để đi tìm phần ăn. Sau trống canh đầu, ai về phòng nấy — nghĩa là đến đêm, mọi con người trong nhà này đều tự nhốt mình vào từng ô riêng, đúng giờ, không cần đến một chiếc khóa nào. Một bản nội quy, đọc xuôi là gia phong nề nếp; đọc ngược, là một bản đồ tuần tra.",
      "Cao Minh nghe mà không nói gì. Một gia đình giàu có giữ nề nếp nghiêm là chuyện thường. Nhưng nề nếp của nhà này không giống để giữ người — nó giống để giữ cho mọi người luôn ở đúng vị trí của mình, vào đúng giờ của mình, như những con cờ trên một bàn cờ mà nước đi đã định sẵn từ trước.",
      "Hành lang rẽ ngang qua một cửa bếp hé mở. Bên trong, tiếng dao thớt vang lên đều như máy dệt: thái, gạt; thái, gạt — không một tiếng nói chuyện, không một tiếng cười, không một lần lưỡi dao trượt khỏi nhịp trong suốt quãng hắn đi ngang qua. Một gian bếp nấu cho mấy chục miệng ăn mà không có lấy một câu nói thừa. Mùi cơm mới và mùi cá kho thơm phức bốc ra, ấm áp và đời thường đến mức khiến cái im lặng kia càng thêm gai người.",
      "Đến khúc quanh gần nhà bếp, một cô hầu bưng khay thuốc đi ngược chiều. Cô còn rất trẻ, tóc vấn gọn, áo bà ba xám tro sạch sẽ; trên khay là ba chén thuốc còn bốc khói, xếp thành một hàng thẳng tắp. Lúc rẽ qua cây cột lớn, cô ngẩng lên — và thấy vị khách lạ đứng cách mình mấy bước, cùng hai thanh kiếm đang treo lơ lửng ngang vai hắn. Khay thuốc chao đi một cái; một chén thuốc trượt nửa vòng, sóng sánh tới miệng chén, rồi được cô chụp lại bằng cả hai tay run lên thấy rõ. Mặt cô trắng bệch đi một thoáng. Rồi bài bản của căn nhà kéo cô lại: cô tránh sang một bên nhường đường, cúi đầu chào quản gia rồi chào khách, bước chân lại đều như cũ — chỉ có tiếng chén sứ còn rung nhè nhẹ trên khay là không giấu được ai.",
      "Cô không dừng bước, không nghiêng đầu; câu nói khẽ thoát ra đúng khoảnh khắc cô đi ngang qua cây cột lớn giữa hành lang, như một người đã tính sẵn rằng ở đó, giọng nói sẽ bị thân cột gỗ nuốt đi một nửa. Một cô hầu còn ít tuổi, đôi chân đang bước theo nhịp của kẻ khác, một tay còn chưa hết run vì sợ, vậy mà vẫn biết chọn đúng một khoảnh khắc mù của cả tòa nhà để gửi đi một câu nói của riêng mình. Can đảm, ở nơi này, phải đo bằng những thứ nhỏ nhặt như thế.",
      "Quản gia vẫn bước đều phía trước. Nhưng bàn tay phải của ông lão, buông thõng bên hông áo dài, vừa siết lại một cái — rất nhanh, rồi buông ra, như chính ông ta cũng không biết tay mình vừa làm gì. Hoặc như chính ông ta cũng đang sợ điều cô hầu vừa nói.",
      "Một cái siết tay như thế, ở một ông lão đã bị mài nhẵn đến gần như hoàn hảo, là một vết nứt. Cao Minh nhìn vết nứt ấy và hiểu: trong người ông quản gia, phần 'người' vẫn chưa chết hẳn — nó còn biết sợ thay cho cô hầu, dù đôi chân ông ta chẳng hề chậm lại một phân nào vì điều đó.",
      "Cô hầu đi khuất vào dãy nhà bếp. Mùi thuốc trong khay của cô còn vương lại trong hành lang: đăng sâm, xuyên khung, và một vị đắng rất lạ mà Cao Minh chưa từng ngửi thấy trong bất cứ thang thuốc nào — một vị đắng không thuộc về cây cỏ, mà thuộc về đất sâu và nước ngầm.",
      "Hắn ghi nhớ vị đắng ấy như ghi nhớ một dấu chân lạ trên đường mòn. Thần niệm của hắn khẽ chạm xuống dưới nền gạch: sâu dưới tòa nhà này là một khoảng tối ẩm ướt, lạnh hơn hẳn phần đất xung quanh, như thể có một cái giếng không đáy đang mở miệng ngay dưới chân nhà. Hắn chưa kết luận điều gì. Hắn chỉ cất kỹ chi tiết ấy lại, như cất một quân cờ chưa tới nước đi."
    ],
    "dialogue": [
      {
        "speaker": "Quản gia",
        "text": "Dạ, thưa ông, nhà con xưa nay giữ lệ: khách quý tới nhà, trước xem nhà, sau dùng cơm. Khu trong là chỗ cô chủ dưỡng bệnh, để con dẫn ông đi đường vòng ngoài này cũng tới được phòng khách phía đông."
      },
      {
        "speaker": "Lê Thu Nguyệt",
        "text": "Thưa ông… đêm ở đây dài lắm. Ông có nghe tiếng gì, cũng đừng ra hành lang một mình."
      },
      {
        "speaker": "Cao Minh",
        "text": "Tên gì?"
      },
      {
        "speaker": "Lê Thu Nguyệt",
        "text": "Dạ, em là Thu Nguyệt, hầu hạ thuốc thang cho cô chủ. Thưa ông, em lỡ lời, ông đừng để bụng…"
      },
      {
        "speaker": "Quản gia",
        "text": "Thu Nguyệt. Khay thuốc nguội rồi đấy. Đi đi."
      }
    ],
    "choices": [
      {
        "id": "ask_steward",
        "text": "Hỏi quản gia về cô hầu vừa rồi và vị đắng lạ trong khay thuốc.",
        "next": "lh_hall",
        "effects": {
          "lanMaterInfluenceDelta": 2
        }
      },
      {
        "id": "silent_rules",
        "text": "Im lặng đi tiếp, ghi nhớ từng điều gia quy vào lòng.",
        "next": "lh_hall",
        "effects": {
          "cluesHuaGiaDelta": 1
        }
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
    "entity": "entity_blade",
    "narration": [
      "Kiếm quang đi qua cổng sắt, qua tường gạch, qua bàn thờ, qua từng mắt nối vô hình đang bám lấy tòa nhà. Không trận pháp nào đỡ nổi, không thứ tà khí nào chạy thoát. Trong một nhịp thở, mọi thứ Cao Minh muốn chém đều đã đứt.",
      "Điều khiến hắn nhíu mày là nó dễ dàng đến mức nào. Hắn thậm chí không cần dùng tới một phần công lực trọn vẹn; kiếm khí đi qua tòa nhà như đi qua một tờ giấy ướt. Hàng trăm sợi chỉ vô hình đứt cùng một lúc — cảm giác truyền về qua chuôi kiếm nhẹ như cắt phải một tấm mạng nhện. Và chính cái nhẹ ấy là thứ đầu tiên khiến hắn không vui lên nổi, nửa nhịp sau khi đường kiếm đã đi xong.",
      "Cổng sắt đổ xuống trước. Rồi đèn trong nhà tắt — không phải tắt từng ngọn, mà tắt theo một hàng, từ cổng vào tới gian trong cùng, như một hơi thở dài bị cắt ngang giữa chừng. Những điểm neo vô hình vỡ ra từng cái một; mỗi lần một mắt nối đứt, đâu đó trong nhà lại có một thân người khụy xuống — người phu đang gánh nước đổ gánh ngay bậc thềm, cô hầu đang bưng khay trà quỵ giữa hành lang, người gác trước gian phòng trong cùng ngã sấp xuống, tay vẫn còn giữ nguyên thế kéo then cửa.",
      "Một người phu khuân vác ngã gục ngay trên bậc thềm, vẫn giữ nguyên tư thế cúi chào một vị khách không còn đứng đó. Ở hành lang, một chén trà tuột khỏi tay ai đó và vỡ tan trên nền gạch — tiếng vỡ giòn tan, lạc lõng; và lạ lùng thay, đó lại là âm thanh 'người' nhất mà tòa nhà này phát ra kể từ lúc hắn bước vào: một âm thanh không nằm trong bất cứ kịch bản nào. Rồi im lặng ùa tới, đặc quánh như nước sâu.",
      "Giữa sân, một gã gia nhân đứng bật dậy từ đống đổ nát. Mắt gã trắng dã, tay lăm lăm con dao phay, miệng há ra như muốn gào một mệnh lệnh không thuộc về gã. Thứ đang mượn thân người ấy nhìn Cao Minh đúng một nhịp — rồi mắt nối cuối cùng đứt, gã đổ xuống như một con rối bị cắt hết dây, con dao rơi trên nền gạch, kêu một tiếng khô khốc.",
      "Điều ở lại trong hắn lâu nhất về khoảnh khắc ấy không phải là tiếng đổ vỡ. Là một khoảnh khắc rất ngắn — ngắn đến mức người thường sẽ ngỡ mình nhìn lầm — khi đôi mắt trắng dã của gã gia nhân kia, ngay trước lúc thân người đổ xuống, bỗng trong veo trở lại. Người đàn ông ở bên trong nhìn thấy Cao Minh. Trong cái nhìn ấy không có oán hận; chỉ có một sự ngỡ ngàng mệt mỏi, như kẻ bị giam cầm rất lâu bỗng thấy cánh cửa mở ra — rồi thân thể hắn đổ xuống, trước khi hắn kịp hiểu cánh cửa ấy mở ra là để đưa mình đi đâu.",
      "Trong gian phòng trong cùng, không còn tiếng thở nữa. Thân thể trên giường bệnh vẫn nguyên vẹn, da dẻ vẫn hồng hào, tóc vẫn xõa trên gối — chỉ là không còn ai ở bên trong để thở tiếp. Phần điều phối sự sống của nàng đã bị thứ kia chiếm làm thay từ lâu; hắn chém đứt thứ kia, cũng là chém đứt luôn sợi dây duy nhất đang giữ nàng ở lại cõi này. Hắn đã thắng thứ hắn định chém. Nhưng cô gái ấy không nằm trong danh sách những thứ hắn được quyền thắng như thế.",
      "Hắn bước vào gian phòng trong cùng qua dãy hành lang tối om, bước qua người gác đang nằm sấp trước ngưỡng cửa, lưng vẫn còn phập phồng rất nhẹ. Bên giường bệnh, khung thêu vẫn căng sẵn: nửa đóa sen dở dang, và dọc mép vải, hàng nút thắt bằng chỉ đỏ — cuốn lịch đếm ngày của nàng — thắt dở ở một nút cuối cùng, từ nay sẽ không bao giờ được thắt tiếp. Hắn đứng nhìn hàng nút ấy rất lâu. Một người đã kiên nhẫn đếm từng ngày, chỉ để chứng minh rằng mình vẫn còn sống. Và hắn đã tới — để biến tất cả sự kiên nhẫn ấy thành vô nghĩa, chỉ trong một nhịp thở.",
      "Rồi từ dưới đống ngói đổ nát, có tiếng một người đàn bà già khóc gọi tên một cô gái. Gọi mãi, không ai trả lời.",
      "Cao Minh đứng rất lâu giữa sân. Kiếm trong tay hắn vẫn sạch, vẫn sắc, vẫn có thể hủy thiên diệt địa như mọi ngày. Sức mạnh của hắn không hề yếu đi. Chỉ là ở nơi này, nó là thứ duy nhất không có quyền được dùng bừa."
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
    "companions": [
      "npc_servant_male"
    ],
    "entity": "entity_guard",
    "narration": [
      "Cánh cửa lim mở ra không một tiếng động. Cao Minh bước vào hành lang dài hun hút, nơi chân đèn đã cháy ngắn mà vẫn có người thay dầu đúng giờ — đúng đến mức không giống thói quen của người đang sống, mà giống một mệnh lệnh không cho phép trễ.",
      "Càng vào sâu, hành lang càng lạnh. Không phải cái lạnh của gió biển — cửa nẻo khu trong đóng kín mít — mà là cái lạnh tỏa ra từ chính những bức tường, như thể hắn đang đi vào một gian nhà kho chứa đá lạnh quanh năm. Mùi thuốc theo đó cũng đậm dần, đắng dần; và lẫn dưới mùi thuốc, Cao Minh ngửi thấy mùi trầm cháy dở — thứ hương người ta thắp cho người chết. Ở một nơi mang tiếng là 'biệt thự dưỡng bệnh', mùi trầm tang là thứ không nên xuất hiện.",
      "Hành lang này dài hơn vẻ ngoài của tòa nhà rất nhiều — hoặc nó chỉ có vẻ dài, vì hai dãy đèn dầu hai bên cháy quá đều. Ngọn lửa nào cũng đứng thẳng, lặng, vàng như sáp ong, dù hành lang thỉnh thoảng vẫn có gió lùa từ các khe cửa. Gió thổi mà lửa không lay. Cao Minh đi giữa hành lang ấy và hiểu ra: không phải lửa không lay — là có một thứ gì đó đang giữ cho chúng đứng yên, từng ngọn một, như giữ một hàng lính đứng nghiêm.",
      "Đi được chừng hai mươi bước, hắn nhận ra một điều nhỏ mà gai người: vạt áo của hắn không hề lay động. Hành lang có gió — hắn nghe thấy gió quẩn trong các khe cửa, thấy lớp bụi mỏng bay ngang qua những vệt sáng — vậy mà vạt áo dài của hắn buông thẳng như đang đứng trong phòng kín. Sự tĩnh lặng của nơi này không phải là không có gió. Là gió cũng bị buộc phải đi theo đường của nó, né qua những chỗ không được phép chạm vào.",
      "Cuối hành lang, trước gian phòng trong cùng, một người gác đứng chắn lối. Khi Cao Minh tới gần, đôi mắt người ấy bỗng trợn lên nhìn hắn — ánh mắt của một người đang van xin. Nhưng đôi tay của người gác lại chậm rãi giơ lên, tự mình kéo then ngang, bịt kín lối vào. Và trong suốt quãng ấy, mắt anh ta không một lần liếc sang hai thanh kiếm đang treo lơ lửng bên vai vị khách: một người còn tự do, đứng gần thế này, không thể không nhìn chúng. Cái nhìn của anh ta bị ghim chặt vào cửa và vào mặt khách, như thể trong lệnh của anh ta, kiếm không hề tồn tại.",
      "Cái then sắt ngang cửa nặng ít nhất vài chục cân, một người kéo lên đã phải dùng cả hai tay. Người gác kéo nó không nhanh — không phải vì yếu, mà vì trong cùng một đôi tay ấy đang có hai ý chí giành nhau: một ý chí muốn kéo then xuống cho bằng được, và một ý chí khác, yếu hơn nhưng nhất quyết không chịu chết, đang ghì lại từng phân một. Cơ bắp trên cánh tay anh ta nổi lên cuồn cuộn, mồ hôi rịn ở thái dương dù hành lang lạnh buốt, và giữa hai hàm răng cắn chặt, một tiếng nghiến rất khẽ thoát ra.",
      "Đến gần hơn, Cao Minh mới thấy rõ người gác. Anh ta còn trẻ, chưa tới ba mươi, vai rộng, tay chai sần của người quen cầm vũ khí lẫn cuốc cày. Ở cổ áo anh ta có một hàng chỉ khâu vụng về bằng sợi chỉ đỏ đã bạc màu: ai đó — hẳn là người vợ ở mé sông của anh ta — đã khâu tên anh ta vào gấu áo, chữ \"Sáu\" xiêu vẹo. Người trong nhà này có tên. Có người ở đâu đó vẫn đang chờ anh ta về, và đã khâu tên anh ta vào áo như khâu một lời dặn: đừng để lạc mất mình.",
      "Một chân của người gác khẽ nhích sang bên — nửa bước thôi, như muốn nhường lối. Rồi cả thân người anh ta giật lại, đứng thẳng băng như cũ. Đôi tay kéo then vẫn đang run lên từng hồi. Trong thần niệm của Cao Minh, từ sống lưng người gác có một sợi chỉ vô hình vươn thẳng lên, xuyên qua mái ngói, nối vào một chùm những sợi chỉ khác đang tỏa đi khắp tòa nhà — và tất cả chúng đều đang giật rất nhẹ, đều đặn, theo cùng một nhịp như nhịp gõ giày của ông quản gia.",
      "Cao Minh ngước nhìn theo sợi chỉ vô hình ấy. Thần niệm leo qua mái ngói, và ở trên cao, hắn 'thấy' một cảnh mà mắt thường không bao giờ thấy được: hàng trăm sợi chỉ mảnh như tơ, từ khắp các gian phòng của tòa nhà, chụm lại thành một búi rồi đổ dồn về một điểm duy nhất — gian phòng trong cùng, sau lưng người gác. Và bên dưới cái nhịp đều đặn lạnh lẽo của búi chỉ ấy, hắn nghe thấy một nhịp thứ hai, rất khẽ, cứ thỉnh thoảng lại đập lệch đi một nhịp rồi bị kéo giật trở lại hàng — như một trái tim nhỏ đang cố đập theo ý mình bên trong lồng ngực của một người khổng lồ đang ngủ say.",
      "Miệng người gác mấp máy mãi mới thành tiếng, khàn đặc như đã lâu không được dùng để nói điều mình muốn nói.",
      "Cao Minh dừng bước. Hắn không rút kiếm. Một người đang bị bắt phải canh cửa, không phải là kẻ đã ra lệnh canh cửa. Từ chỗ hắn đứng đến người gác là bảy bước; trong bảy bước ấy, những gì hắn có thể làm nhiều không đếm xuể: đoạt then, điểm huyệt, xé toang cả dãy nhà trong. Hắn chọn việc tốn ít sức nhất: đứng yên, hai tay buông thõng. Một con rối thì không đáng rút kiếm, mà một người đang bị mượn tay thì đọc một đôi tay trống không nhanh hơn đọc bất cứ lời nào.",
      "Cao Minh nhìn người gác thêm một lúc. Một kiếm chém đứt sợi chỉ kia thì dễ như trở bàn tay. Nhưng sợi chỉ ấy đang luồn qua sống lưng một con người còn tỉnh táo — và ở đầu kia của nó, có thứ gì đó đang cầm giữ không chỉ một người này.",
      "Trên xà ngang đầu hắn, bụi đóng thành một lớp dày và nguyên vẹn — trừ một vệt dài sạch bong chạy dọc theo sống xà, đúng nơi những sợi chỉ vô hình neo vào: chúng cọ qua gỗ mỗi ngày, đều đặn, cho tới khi mặt gỗ mòn sáng lên như có người lau chùi. Thứ gì lặp lại đủ lâu cũng để lại dấu vết. Hắn vừa ghi nhớ vệt sáng ấy thì tất cả đèn trong hành lang bỗng đồng loạt bùng lên một nhịp — như thể cả tòa nhà vừa nghiêng tai về phía này, để nghe cho rõ hơn."
    ],
    "dialogue": [
      {
        "speaker": "Người gác",
        "text": "Ông… đi đi… Tay tôi… nó không nghe tôi…"
      },
      {
        "speaker": "Cao Minh",
        "text": "Bổn tọa hỏi ngươi một lần. Trong phòng có người còn sống, phải không?"
      },
      {
        "speaker": "Người gác",
        "text": "Ông… ông đừng… đừng giết tôi… Nhà tôi… còn má già…"
      },
      {
        "speaker": "Cao Minh",
        "text": "Bổn tọa không chém kẻ bị mượn tay. Đứng yên đó. Việc của ngươi hôm nay chỉ có một: đứng yên."
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
        "id": "detour",
        "text": "Đi vòng qua sân trong, tránh đối đầu với người gác.",
        "next": "lh_courtyard"
      }
    ],
    "objective": "infiltrate_villa"
  },
  "lh_courtyard": {
    "id": "lh_courtyard",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Sân trong",
    "backgroundId": "long-hai-exterior",
    "location": "Sân trong biệt thự Hứa Gia, Long Hải",
    "companions": [
      "npc_servant_female"
    ],
    "narration": [
      "Bước ra khỏi hành lang tối, nắng chiều đâm thẳng vào mắt khiến Cao Minh khẽ nheo lại. Trên cao là trời mỏng mây, hải âu kêu rất xa ngoài vách đá, và ở đâu đó phía bên kia bức tường thấp, tiếng một chiếc thuyền thúng gõ vào mạn ghe nghe cộc cộc — những âm thanh của một Long Hải còn đang sống bình thường. Vậy mà chỉ cần bước qua khung cửa này vào khoảng sân trong, mọi âm thanh ấy đều như bị cắt cụt, giống hệt một câu nói bị chém ngang giữa chừng.",
      "Sân trong của biệt thự lát gạch tàu, giữa sân là một giếng đá cổ, quanh miệng giếng mòn nhẵn vì dây thừng kéo qua nhiều năm. Một hàng gia nhân đang gánh nước từ giếng về phía nhà bếp: người kéo, người đỡ, người gánh — mỗi người một việc, việc nào cũng khớp vào việc kia như bánh răng trong một cỗ máy bằng thịt người. Thùng nước nào cũng đầy đúng một mức, sóng sánh mà không hề sánh ra ngoài một giọt, dù người gánh bước qua những phiến gạch gồ ghề.",
      "Hắn nhìn kỹ cái giếng. Miệng giếng xây bằng đá ong đã mòn vẹt, thành trong đen bóng vì bao năm thùng kéo chạm vào; sợi dây thừng sờn đến gần đứt mà vẫn là sợi dây cũ, chưa ai thay. Nước trong các thùng gánh đi đều đầy tới đúng một vạch ngấn đen bên trong lòng thùng — không hơn một giọt, không kém một giọt. Và khi một cơn gió từ phía biển lùa qua sân, Cao Minh bắt gặp trong hơi ẩm từ những thùng nước vừa kéo lên một vị đắng rất nhạt mà rất quen: chính là thứ mùi đắng không thuộc về cây cỏ trong khay thuốc của cô hầu ngoài hành lang.",
      "Bên hiên, một bà lão ngồi nhặt đậu. Đậu đã nhặt xong từ lâu — cái rổ trước mặt bà chỉ còn trơ đáy — vậy mà tay bà vẫn tiếp tục nhặt, nhặt lấy những hạt đậu không có thật, bỏ vào một cái rổ không. Mặt bà bình thản như đang ngủ. Cao Minh nhìn đôi tay ấy một lúc lâu. Không phải bà lão lẩn thẩn. Là có kẻ đang bắt đôi tay ấy tập đi tập lại một động tác, như người ta bắt lính tập đi nghiêm — tập cho tới khi thân thể thuộc làu, không cần tới ý nghĩ nữa.",
      "Cao Minh để thần niệm khẽ chạm vào bà lão — và lặng đi theo một cách rất hiếm khi hắn lặng đi. Bên trong thân thể gầy gò ấy vẫn có người. Tỉnh táo. Nhưng cái tỉnh táo ấy, qua không biết bao nhiêu năm lặp lại cùng một động tác, đã bị mài thu lại chỉ còn bằng kích thước của một cái rổ: thế giới của bà bây giờ là đậu, là rổ, là động tác nhặt. Không phải bà không muốn nghĩ đến điều gì khác. Là sau bao nhiêu năm, phần người trong bà đã tự co lại cho vừa với thứ duy nhất mình còn được phép làm — như một ngọn đèn tự thu nhỏ lửa, để khỏi bị gió thổi tắt hẳn.",
      "Một cô hầu trẻ bưng chậu nước đi ngang qua sân. Khi tới gần Cao Minh, bước chân cô vẫn đều, vai vẫn thẳng, chậu nước vẫn không sánh — chỉ có đôi mắt cô là quay về phía hắn. Đôi mắt ấy nhìn hắn rất lâu, rất gấp, như người chết đuối nhìn thấy một khúc gỗ trôi qua: không thành tiếng được, mà cũng không dám thành tiếng. Rồi cô đi qua, đôi mắt bị buộc phải quay về phía trước, nhìn thẳng vào khoảng không như mọi đôi mắt khác trong căn nhà này. Cao Minh nhìn theo cho tới khi cô khuất hẳn sau dãy nhà bếp.",
      "Cô hầu đi khỏi rồi, Cao Minh vẫn nhìn xuống nền gạch chỗ cô vừa bước qua. Trên một phiến gạch nóng vì nắng chiều, có một giọt nước — chỉ một giọt duy nhất sánh ra khỏi chậu của cô, thứ bất đồng bộ duy nhất mà hắn trông thấy trong cả tòa nhà này kể từ lúc bước qua cổng. Giọt nước nằm đó long lanh, rồi bốc hơi dần ngay trước mắt hắn. Hắn đứng nhìn cho đến khi nó biến mất hẳn, và tự hỏi không biết đó là một sơ suất — hay là một lời chào câm lặng của một người chưa bị mài nhẵn.",
      "Cao Minh đứng giữa sân trong, nắng chiều xiên qua mái ngói. Tòa nhà này không giam người bằng xích sắt. Nó giam người bằng chính đôi tay của họ, bằng những thói quen bị tập đi tập lại cho tới khi không còn phân biệt được đâu là việc mình muốn làm, đâu là việc bị bắt làm. Một nhà tù mà tù nhân tự khóa cửa phòng mình mỗi đêm, đúng giờ, đúng lệ.",
      "Vạn Ma Đạo Môn của hắn cũng có quy củ, và quy củ của ma đạo thì tàn khốc có tiếng khắp Vạn Giới: kẻ trái lệnh, chết không toàn thây. Nhưng ma đầu dưới trướng hắn, ít nhất, còn được quyền sợ, được quyền hận, được quyền thà chết chứ không tuân lệnh. Còn ở tòa nhà này, sự tuân phục đã ăn sâu xuống dưới cả sợ hãi — xuống tận nơi ý chí còn chưa kịp thành hình. Đây không phải là cai trị một đám người. Đây là một thứ đã ngồi vào đúng chiếc ghế điều khiển trong từng thân thể, để mặc cho chính chủ nhân của thân thể ấy phải ngồi nhìn từ bên trong: tỉnh táo, bất lực, bị buộc phải xem đôi tay mình sống một cuộc đời không phải của mình.",
      "Ở cuối sân, qua khung cửa tò vò, là dãy nhà trong cùng — nơi có gian phòng của vị tiểu thư mà cả căn nhà này đang quay xung quanh như quay xung quanh một cái trục vô hình. Mái ngói của dãy nhà ấy hiện ra thấp và sẫm màu hơn hẳn dãy nhà chính, như một vùng trời riêng lúc nào cũng âm u. Một khung cửa sổ ở gian trong khẽ động: tấm rèm vải lay một nhịp rồi nằm im, dù trong sân lúc này không có cơn gió nào đủ mạnh để lay rèm. Cao Minh biết đó không phải gió. Nhịp của cả khoảng sân — tiếng guồng giếng quay, bước chân người gánh nước, tiếng dao thớt xa xa từ nhà bếp — đều vô hình chung lấy nhịp từ sau khung rèm ấy mà ra, như một dàn nhạc lớn chơi theo cây đũa của một nhạc trưởng giấu mặt.",
      "Hắn thu thần niệm về. Cả cỗ máy này quay quanh một cái trục, và cái trục ấy nằm sau khung rèm kia. Đi xem một cái trục thì có gì khó. Hắn chỉ tò mò một điều: thứ đang ngồi ở đầu kia của ngần ấy sợi chỉ, là cái gì mà phải mượn tay cả một tòa nhà để giữ một cô gái."
    ],
    "dialogue": [
      {
        "speaker": "Cao Minh",
        "text": "Người sống cả một nhà, mà sinh hoạt không khác gì một cỗ máy. Ở chỗ của bổn tọa, ma đầu dưới trướng ít ra còn được quyền chửi chủ của chúng."
      }
    ],
    "choices": [
      {
        "id": "well_look",
        "text": "Tới gần miệng giếng xem thử trước khi vào nhà trong.",
        "next": "lh_lan_room",
        "effects": {
          "cluesHuaGiaDelta": 1
        }
      },
      {
        "id": "straight_in",
        "text": "Đi thẳng qua cửa tò vò tới gian phòng trong cùng.",
        "next": "lh_lan_room"
      }
    ]
  },
  "lh_lan_room": {
    "id": "lh_lan_room",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Gian phòng trong cùng",
    "backgroundId": "tieu-lan-room",
    "location": "Phòng Hứa Tiểu Lan, biệt thự Long Hải",
    "entity": "entity_claw",
    "narration": [
      "Trên giường bệnh, một thiếu nữ ngồi dựa gối. Nàng vừa tròn mười tám tuổi; làn da vốn phải mịn màng như ngọc, lúc này loang lổ những mảng trắng đỏ sần sùi như vảy cá, vài chỗ lở loét rỉ nước vàng, đầu ngón tay hơi co quắp lại — phàm nhân nhìn vào, chỉ thấy hai chữ: phong cùi. Chẳng trách đại phu mời khắp Nam Kỳ đều lắc đầu, thuốc phong uống đã không biết bao nhiêu thang, và gia nhân trong nhà thà bị đánh đòn cũng không chịu bước qua cửa gian phòng này.",
      "Căn phòng rộng mà trống. Đồ đạc chỉ có một chiếc giường gỗ lim kê sát tường, một bàn nhỏ với chồng sách đã sờn gáy, và bên cửa sổ là một khung thêu căng sẵn vải — trên vải, ai đó đã thêu được nửa đóa sen, và dọc theo mép vải là một hàng nút thắt bằng chỉ đỏ, thắt rất đều, rất nhiều, như một thứ lịch không ai dạy mà nàng tự nghĩ ra cho mình. Trên bàn, các chén thuốc xếp thành hàng theo giờ uống, chén nào cũng cạn — nàng uống thuốc rất ngoan, ngoan đến mức khiến người nhìn thấy phải lạnh lòng: một người bệnh không còn tin vào thuốc từ lâu, vẫn uống đúng giờ, vì đó là một trong những việc hiếm hoi trong ngày còn do chính nàng quyết định.",
      "Hắn liếc nhìn khung thêu bên cửa sổ thêm một lần nữa. Nửa đóa sen thêu bằng chỉ màu đã bạc: những mũi thêu đầu còn vụng về, càng về sau càng đều tay — dấu vết của một người tự học trong cảnh không thầy, không bạn, chỉ có thời gian là thừa thãi. Còn hàng nút thắt chỉ đỏ dọc mép vải, hắn đếm thầm được hơn một trăm nút; ở quãng giữa, có một đoạn các nút bỗng thắt sát hẳn vào nhau, dồn dập, như những ngày tháng bị dồn nén đến mức không còn chỗ thở — rồi sau đó lại thưa dần ra, kiên nhẫn như cũ. Ở thế giới của hắn, tù nhân trong động phủ cũng vạch tường mà đếm ngày như thế. Nàng thắt cái gì vào mép vải này, hắn chưa hỏi, nên chưa biết. Hắn chỉ ghi nhớ: đó là một cuốn sổ của tù nhân, viết bằng thứ mực không ai tịch thu nổi.",
      "Nhưng dưới thần niệm của Cao Minh, những \"vết phong\" ấy không hề có bệnh căn của phàm nhân. Chúng là tà khí ăn mòn từ trong ra ngoài, mượn đúng hình dạng của căn bệnh bị người đời khiếp sợ và xa lánh nhất làm áo khoác — một lớp vỏ hoàn mỹ, để không ai dám đến gần vật chứa của nó.",
      "Hắn đặt hai ngón tay lên cổ tay lạnh ngắt của nàng, chân khí như dòng suối ngầm lặng lẽ tràn vào kinh mạch — rồi khựng lại. Tà khí không chỉ bám vào kinh mạch. Nó đã luồn vào tận hệ thần kinh của nàng, và ở những chỗ đáng lẽ thân thể nàng tự cử động, hắn chạm vào nó trước — như một bàn tay lạ đã luồn sẵn vào trong bao tay của người khác. Ở thế giới của hắn, khôi lỗi thuật cũng làm được việc tương tự, nhưng thô và nông hơn nhiều. Thứ này mảnh hơn, sâu hơn, và kiên nhẫn hơn bất cứ thứ gì hắn từng chém. Nó đang sống trong nàng theo một cách mà hắn chưa gọi được tên.",
      "Sâu trong thân thể ấy, hắn vẫn chạm được vào phần thuộc về chính nàng: một điểm sáng nhỏ và ương bướng, như ngọn đèn dầu bị ai úp một chiếc bát lên mà vẫn không chịu tắt. Chính điểm sáng ấy đang giành lại từng việc nhỏ nhất — một cái chớp mắt đúng lúc nàng muốn chớp, một ngón tay khẽ co khi nàng muốn nắm lấy thứ gì — và mỗi lần giành như thế, nó phải trả giá bằng một cơn đau mà người ngoài không nhìn thấy được. Nàng không nằm yên chờ chết. Nàng đang đánh một trận chiến không một tiếng động ngay trong chính thân thể mình, và đã đánh như thế không biết bao nhiêu năm rồi.",
      "Và hắn còn thấy một điều nữa, sâu hơn. Từ thân thể nàng, vô số sợi chỉ vô hình mảnh như tơ nhện tỏa ra bốn phía — xuyên tường, xuyên mái, chạy về mọi gian phòng của tòa biệt thự này, nối vào sống lưng của từng người trong nhà. Cả cỗ máy người của căn nhà này, bằng cách nào đó, đang lấy nhịp từ nàng mà quay. Và ở chiều ngược lại, dọc theo những sợi chỉ ấy, hắn cảm được một sức nặng rất xa, rất lớn — như thể ở đầu kia của sợi dây có thứ gì đó đang ngồi yên nghe ngóng. Nó là cái gì, của ai, hắn chưa biết. Tà khí thì hắn gặp nhiều rồi. Thứ tà khí biết ngồi yên mà nghe, thì đây là lần đầu.",
      "Sát Ma Kiếm có thể chém đứt toàn bộ ma chướng. Hắn biết chính xác phải chém ở đâu, chém bao nhiêu phân. Hắn cũng biết, nếu cắt hết trong một lần, người con gái trên giường này sẽ ngừng thở — vì phần điều phối sự sống của nàng, từ lâu đã không còn nằm trọn trong tay nàng nữa.",
      "Lần đầu tiên kể từ khi đặt chân đến thời đại này, Cao Minh rời tay khỏi chuôi kiếm.",
      "Hắn kéo chiếc ghế đẩu lại gần giường và ngồi xuống — không đứng nhìn xuống một người bệnh như người ta nhìn một món đồ lạ. Rồi hắn thu hết uy áp quanh thân vào trong, gọn gàng như người ta gấp một tấm áo choàng quá khổ vào một chiếc rương nhỏ. Không phải lòng tốt: một Ma Tôn đứng cạnh giường bệnh mà quên thu áp, thì riêng sự hiện diện của hắn cũng đủ làm tim phàm nhân đập loạn — và món đồ hắn còn chưa xem xong này, hắn không muốn nó hỏng vì một sự bất cẩn của chính mình. Căn phòng bỗng yên tĩnh hẳn: chỉ còn tiếng sóng rất xa, và hai nhịp thở — một của hắn, một của nàng. Nhịp thở của nàng, dù yếu ớt, là nhịp duy nhất trong cả tòa nhà này không đi theo cái nhịp chung ngoài kia.",
      "Không ai thuê hắn đến đây. Một vầng sáng xé trời ném hắn từ Vạn Hoa Lầu xuống cái vũng bùn này giữa lúc chén rượu còn chưa cạn, và hắn đã tính chuyện tìm một trò tiêu khiển qua ngày. Bây giờ thì trò tiêu khiển tự tìm đến: một tòa nhà vận hành như một cỗ máy bằng người, và ở trung tâm của nó, một thứ tà khí — nhìn cũng có vẻ mạnh đấy — mà hắn không biết là của thứ gì. Với một kẻ chán đến mức ấy, hai chữ 'không biết' là thứ gia vị hiếm nhất trên đời. Hắn quyết định ở lại xem thêm ít lâu."
    ],
    "dialogue": [
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài, người trong nhà này nhìn tôi đều quay mặt đi. Ngài là người đầu tiên nhìn thẳng. Vậy trong mắt ngài, tôi là người bệnh… hay là một thứ gì khác?"
      },
      {
        "speaker": "Cao Minh",
        "text": "Người thì còn sống. Còn trong người nàng có một thứ không phải của nàng. Bổn tọa đang xem nó."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài, ngài vẫn chưa cho tôi biết quý danh."
      },
      {
        "speaker": "Cao Minh",
        "text": "Cao Minh."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Cao Minh… Tôi xin phép được nhớ cái tên này cho kỹ. Ở nhà này, tên người là thứ hay… mất lắm, thưa ngài."
      }
    ],
    "choices": [
      {
        "id": "truth",
        "text": "Nói đúng điều vừa quan sát được — không hứa sẽ chữa khỏi ngay trong đêm nay.",
        "next": "lh_lan_talk",
        "effects": {
          "lanTrustDelta": 4
        }
      },
      {
        "id": "promise",
        "text": "Giữ nàng sống trước, tháo gỡ từng phần sau — hắn nói điều hắn sẽ làm, không phải một lời hứa.",
        "next": "lh_lan_talk",
        "effects": {
          "lanTrustDelta": 2
        }
      }
    ],
    "objective": "locate_tieu_lan"
  },
  "lh_lan_talk": {
    "id": "lh_lan_talk",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Người đầu tiên nhìn thẳng",
    "backgroundId": "tieu-lan-room",
    "location": "Phòng Hứa Tiểu Lan, biệt thự Long Hải",
    "narration": [
      "Câu nói ấy rơi xuống căn phòng lặng như một hòn sỏi chìm vào mặt nước sâu. Tiểu Lan không trả lời ngay. Nàng khẽ ngồi thẳng dậy thêm một chút — một động tác rất nhỏ, nhưng với một thân thể mà từng thớ thịt đều đang bị những sợi chỉ vô hình giữ lấy, Cao Minh biết nó tốn của nàng nhiều sức hơn người ngoài tưởng. Nàng nhìn hắn lâu, không chớp mắt, như đang đối chiếu người khách trước mặt với tất cả những người đã từng bước vào gian phòng này.",
      "Trong bao nhiêu năm, những người bước vào đây chỉ có ba hạng: thầy thuốc nhìn vào da nàng rồi lắc đầu; gia nhân nhìn xuống đất rồi lui ra; còn người nhà họ Hứa thì không bao giờ bước vào. Chưa từng có ai ngồi xuống ngang tầm mắt nàng, đặt hai ngón tay lên mạch nàng, rồi ngồi yên nghe nàng nói như nghe một người tỉnh táo. Hắn là người đầu tiên. Và nàng, với sự thận trọng của một người đã quen bị kẻ khác nói thay, quyết định thử hắn một lần trước khi tin hắn.",
      "Nàng kể, giọng đều và chậm, như người đọc lại một cuốn sách mình đã thuộc lòng. Năm nàng mười một tuổi, nàng ốm một trận gần như không qua khỏi. Người trong nhà nói nàng bị phong hàn nhập cốt; thầy thuốc châm cứu, bốc thuốc suốt ba tháng trời. Nàng chỉ nhớ mang máng có một đêm rất dài, có ai đó bưng cho nàng một chén thuốc đỏ sẫm, đắng đến mức nàng khóc hết nước mắt — và từ sau đêm ấy, nàng bắt đầu nghe thấy những âm thanh mà không một ai khác trong căn nhà này nghe được.",
      "Âm thanh ấy không phải tiếng người. Ban đêm, qua vách tường, nàng nghe như có rất nhiều người đang cùng thở — nhưng tất cả cùng thở một nhịp, lên cùng một lúc, xuống cùng một lúc, đều như một lá phổi khổng lồ đang ngủ yên sau lưng cả tòa nhà. Có đêm, trong tiếng thở ấy còn lẫn một thứ nhịp chậm rãi như tiếng tụng niệm vọng về từ rất xa, không thành lời. Thuở đầu nàng có kể cho một cô hầu nghe. Cô hầu ấy ngay hôm sau bị đổi đi nơi khác. Từ đó, nàng không kể cho ai nữa.",
      "Rồi nàng đưa mắt về phía khung thêu căng bên cửa sổ, nơi dọc mép vải là hàng nút thắt bằng chỉ đỏ mà hắn đã trông thấy từ lúc bước vào. Có những ngày, nàng nói, nàng mở mắt ra thì trời đã tối hẳn, còn buổi sáng của ngày ấy không hề tồn tại trong trí nhớ nàng — như thể có kẻ đã cắt mất một đoạn đời nàng rồi khâu hai đầu lại với nhau, khâu vụng đến mức nàng vẫn sờ thấy được vết sẹo. Từ mấy năm nay, mỗi buổi sáng nàng thắt thêm một nút chỉ. Không hẳn để đếm ngày. Là để biết mình đã mất bao nhiêu ngày.",
      "Và còn một điều nữa, nàng nói khẽ hơn, điều này nàng chưa từng nói với bất cứ ai. Có những đêm, thứ tiếng thở sau vách ấy sai nàng làm những việc rất nhỏ: rót một chén nước đặt lên bậu cửa sổ, mở hé một cánh cửa, đứng dậy đi ba bước rồi quay về giường. Lúc đầu nàng làm theo vì tò mò. Về sau nàng bắt đầu từ chối — và mỗi lần từ chối, sáng hôm sau nàng lại tỉnh dậy với một khoảng trống mới trong trí nhớ. Có lần nàng quên mất bài thơ mẹ dạy thuộc lòng từ năm lên sáu. Có lần nàng quên mất tên con chó nhỏ nuôi hồi còn ở Chợ Lớn. Có lần nàng ngơ ngác nhìn cây đàn tranh trong góc phòng, biết chắc những ngón tay mình từng rất quen với dây đàn, mà không còn nhớ nổi mình đã học nó từ bao giờ.",
      "Để kiểm chứng, nàng còn làm một việc rất nhỏ mà mãi sau này hắn mới hiểu hết ý nghĩa. Đang kể, nàng bất chợt ngắt lời hắn bằng một câu hỏi hoàn toàn lạc đề: hỏi rằng ở quê của hắn, mùa mưa có kéo dài như ở Long Hải không. Người của căn nhà này, hắn đã kịp nhận ra, mỗi khi bị ngắt lời đều khựng lại đúng nửa nhịp rồi mới đáp — cái nửa nhịp của kẻ phải chờ một thứ gì đó ở đâu đó duyệt qua câu trả lời thay cho mình. Còn hắn thì đáp ngay, chẳng cần nghĩ: chỗ của hắn, mưa là mây sà xuống núi nằm lì cả tháng, ướt mà không thành sông. Rồi hắn hỏi lại, tiện miệng như hỏi đường: thế mưa ở đây thì thế nào. Nàng nhìn hắn một lúc, rồi — lần đầu tiên trong bao nhiêu năm — nàng là người giảng giải: mưa ở Long Hải đi theo gió biển, tới mùa giông thì thuyền thúng gác mái chèo cả tháng, sóng đánh lên tận chân gò đất sau nhà. Tiểu Lan khẽ gật đầu, rất nhẹ, như người vừa thử xong một ổ khóa và thấy nó mở bằng đúng chiếc chìa mình đang cầm.",
      "Nàng kể những điều ấy mà mắt vẫn khô, hai tay vẫn đặt ngay ngắn trên chăn. Chỉ đến cuối cùng, giọng nàng mới khẽ run lên một chút — không phải vì sợ thứ đang ở trong người mình, mà vì một nỗi sợ khác, cũ hơn và người hơn nhiều: sợ rằng vị khách này, cũng như tất cả những người trước, sẽ đứng dậy, lùi lại một bước, và từ nay nhìn nàng như nhìn một vật chứa của quỷ dữ, chứ không phải một con người đang ngồi nói chuyện cùng hắn."
    ],
    "dialogue": [
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài, tôi hỏi câu này không phải để thử lòng tốt của ngài. Thầy thuốc nói tôi mang bệnh truyền nhiễm. Người nhà nói tôi là nỗi ô nhục cần phải giấu đi. Gia nhân thì không ai dám nói gì với tôi cả. Ngài vừa chạm vào mạch của tôi — vậy tôi xin hỏi thẳng: ngài có thấy trong người tôi có một thứ gì đó… không phải là tôi, hay không?"
      },
      {
        "speaker": "Cao Minh",
        "text": "Có. Nó mượn thân nàng, mượn cả nhịp sống của nàng. Nhưng mượn không có nghĩa là sở hữu."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Vậy còn những vết này trên da tôi thì sao, thưa ngài? Người ta nói đó là phong cùi, hễ ai chạm vào thì lây, mà lây thì chết."
      },
      {
        "speaker": "Cao Minh",
        "text": "Da nàng không có bệnh căn. Mấy vết đó chỉ là hình nó mượn để khoác lên nàng."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài, ở xứ này, mang cái hình ấy là đủ rồi. Không ai cần biết thật giả — người ta chỉ cần một cái cớ để quay mặt đi. Quan Tây còn cho người bắt người bệnh phong về trại, nhà nào giấu thì mang tội giấu bệnh. Cho nên cả nhà này mới giấu tôi được yên ổn ngần ấy năm: họ chỉ việc nói đúng một chữ 'phong', là không ai dám hỏi thêm câu thứ hai."
      },
      {
        "speaker": "Cao Minh",
        "text": "Ra vậy. Một chữ mà bịt được miệng cả thiên hạ. Kẻ nghĩ ra lớp áo này, đầu óc không tệ."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Ngài có chữa được cho tôi không? Tôi hỏi không phải vì dám trông mong quá phận. Tôi chỉ muốn biết mình nên trông mong tới đâu, để còn liệu mà sống cho qua ngày."
      },
      {
        "speaker": "Cao Minh",
        "text": "Chém thì một hơi là xong. Nhưng bổn tọa nhìn nhịp thở của nàng chạy theo nhịp của nó — chém nó bây giờ, hơi thở ấy chắc cũng dừng theo. Đó là bổn tọa đoán. Còn tháo từng nút: bổn tọa chưa nhìn thấy hết các nút. Biết tới đâu, bổn tọa nói tới đó."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "…Ít nhất, ngài là người đầu tiên không nói dối tôi để cho tôi yên lòng. Thưa ngài, ở nhà này, người ta nói dối tôi mỗi ngày — nói dối rất khéo, và rất đỗi nhân từ."
      },
      {
        "speaker": "Cao Minh",
        "text": "Nói dối một người bệnh thì phải tốn công nghĩ. Bổn tọa lười."
      }
    ],
    "choices": [
      {
        "id": "full_truth",
        "text": "Nói thêm điều cuối cùng hắn đã chắc chắn: cả căn nhà này đang quay quanh nàng như quanh một cái trục — và hắn sẽ không động vào bất cứ sợi chỉ nào nếu chưa biết chắc nó nối tới đâu.",
        "next": "lh_morning_tea",
        "effects": {
          "lanTrustDelta": 4
        }
      },
      {
        "id": "measured_truth",
        "text": "Giữ lại phần nặng nhất cho một ngày khác. Đêm nay, để nàng được yên lòng với một phần sự thật vừa đủ sức nàng mang.",
        "next": "lh_morning_tea",
        "effects": {
          "lanTrustDelta": 2,
          "cluesHuaGiaDelta": 1
        }
      }
    ]
  },
  "lh_morning_tea": {
    "id": "lh_morning_tea",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Chén trà buổi sớm",
    "backgroundId": "tieu-lan-room",
    "location": "Phòng Hứa Tiểu Lan, biệt thự Long Hải",
    "companions": [
      "ba_nam_lien"
    ],
    "narration": [
      "Sáng hôm sau, trời còn chưa sáng hẳn, bà Năm Liên đã bưng khay vào phòng. Trên khay là một ấm trà nhỏ, chén thuốc còn bốc khói, một thau nước ấm và mấy chiếc khăn sạch xếp ngay ngắn. Bà làm những việc này theo một trình tự đã thuộc lòng: đặt thuốc xuống trước, thử độ ấm của nước bằng mu bàn tay, vắt khăn, rồi mới đánh thức cô chủ dậy. Vừa bước qua ngưỡng cửa, bà khựng lại. Trong góc phòng, vị khách lạ đang ngồi yên từ lúc nào, và bên vai hắn, hai thanh kiếm treo lơ lửng giữa không trung như hai con cá đứng nước. Khay trên tay bà chao hẳn đi một cái, nước thuốc sóng sánh suýt tràn ra miệng chén; bà vội ôm chặt khay vào ngực bằng cả hai tay, cúi đầu chào một cái thật thấp, thật nhanh — cái chào của người vừa thấy điều không nên thấy. Nhưng mười mấy năm hầu hạ đã dạy bà nuốt mọi sự giật mình vào bụng trong vòng ba hơi thở. Bà đặt khay xuống, và đôi tay, sau một thoáng run, lại làm việc như chưa từng run.",
      "Mà thật ra, Tiểu Lan đã tỉnh từ lâu, nằm yên nghe tiếng bà lụi cụi như nghe một thứ âm thanh duy nhất trong nhà còn thuộc về con người. Cao Minh ngồi ở góc phòng, nhìn đôi tay của bà lão. Trong căn nhà này, mọi đôi tay khác đều cử động theo một nhịp chung: đều, trơn, không thừa một động tác. Chỉ có tay bà Năm Liên là khác. Bà rót trà tràn ra một giọt, phải lấy khăn chấm lại. Bà quên chiếc muỗng, lật đật quay ra cửa lấy, miệng còn lẩm bẩm trách mình già cả lẩn thẩn. Cao Minh nhìn sự vụng về ấy rất lâu. Ở nơi này, vụng về chính là bằng chứng của tự do: chỉ người còn làm chủ được đôi tay mình mới có quyền làm sai.",
      "Có một chi tiết nhỏ mà bà Năm Liên làm lặng lẽ như một thói quen không cần ai hay biết: thang thuốc của cô chủ do nhà bếp sắc theo lệnh, nhưng chén trà bà bưng vào phòng thì bà tự tay pha bằng chiếc ấm đất nhỏ của riêng bà, nước cũng do bà tự ra giếng sau múc từ lúc trời chưa sáng. Bà chưa bao giờ giải thích vì sao. Tiểu Lan cũng chưa bao giờ hỏi. Giữa hai người — một già một trẻ, một người hầu một cô chủ — có những sự che chở không cần phải nói thành lời; nói ra là nó mất thiêng, mà trong căn nhà này, mất thiêng là mất mạng.",
      "Bà rửa mặt cho Tiểu Lan, xem kỹ từng vết loét trên má và trên mu bàn tay nàng, bôi lên một lớp cao thuốc màu nâu sẫm, rồi chải mái tóc dài của nàng từng lọn một. Mái tóc ấy đen và dày, được chăm sóc cẩn thận suốt mười mấy năm dù không một vị khách nào từng được thấy nó. Bà chải tóc cho nàng không phải để ai ngắm — bà chải như một cách nói rằng cô chủ của bà vẫn là một con người, vẫn đáng được chăm chút, bất kể tờ giấy của thầy thuốc viết thế nào.",
      "Vừa làm, bà vừa kể chuyện ngoài sân cho nàng nghe, cái kiểu kể của người biết người bệnh nằm một chỗ thèm tin tức đến mức nào: con mèo bếp mới đẻ bốn con; cơn mưa đêm qua làm đổ một giàn mướp; thằng Thới gánh nước hát nghêu ngao bị quản gia mắng. Tiểu Lan nằm nghe, thỉnh thoảng khẽ cười. Trong chốc lát, gian phòng này giống một gian phòng bình thường của một nhà bình thường — và chính sự bình thường mong manh ấy làm nổi rõ hơn tất cả những gì không bình thường đang bủa vây quanh nó.",
      "Bà Năm Liên theo hầu nhà họ Hứa đã hai đời. Trước khi hầu hạ Tiểu Lan, bà là người hầu thân cận của nhị phu nhân Lâm Ngọc Chi — người mẹ đã mất của nàng. Khi Cao Minh nhắc tới hai chữ Ngọc Chi, đôi tay đang chải tóc của bà khựng lại một thoáng rất ngắn giữa lưng chừng tóc. Tiểu Lan không nhìn thấy. Nhưng Cao Minh thì thấy.",
      "Trước khi lui ra, bà còn đứng lại kể thêm một chuyện cũ, kể bằng cái giọng đều đều của người ru trẻ ngủ. Rằng nhị phu nhân ngày trước, mỗi lần phải ký tên vào sổ sách của nhà, đều tự tay mình viết lấy, không bao giờ cho người làm viết thay. Phu nhân nói: tên của một người là thứ duy nhất người ấy dùng để tự xưng với trời đất; để kẻ khác cầm thay cái tên của mình hết ngày này qua ngày khác, lâu dần người ta sẽ quên mất mình là ai. Bà kể xong mới giật mình, vội vàng quay sang dọn dẹp khay trà, như thể vừa lỡ nhắc tới một điều mà cả vách tường căn nhà này cũng không muốn nghe.",
      "Một lúc sau, khi Tiểu Lan đã thiếp đi vì mệt sau thang thuốc sớm, bà lão thu dọn khay, rồi đứng lại ở cửa lâu hơn thường lệ. Bà nhìn người khách lạ đang ngồi yên trong góc phòng, môi mấp máy như đang cân nhắc một việc đã cân nhắc suốt mười mấy năm chưa từng dám quyết. Cuối cùng bà nói, giọng nhỏ đến mức chỉ vừa đủ cho một người có thần niệm nghe rõ — vì bà đã học được rằng trong căn nhà này, đến vách tường cũng có tai.",
      "Bà đi rồi, Cao Minh vẫn ngồi yên trong góc. Một bà già, một món đồ của người đã khuất, giữ kín mười mấy năm như giữ một hũ tro — trong căn nhà mà mọi sợi chỉ đều bị giật từ một trung tâm, lòng trung thành cũ kỹ và quê mùa ấy là thứ duy nhất cái trung tâm kia giật không nổi. Hắn ghi nhớ. Người già ở cái thế giới bùn lầy này, hóa ra cũng có thứ đáng xem."
    ],
    "dialogue": [
      {
        "speaker": "Bà Năm Liên",
        "text": "Dạ, thưa ông, ông ngủ có được không? Phòng khách phía đông ẩm lắm, để tôi biểu con Thu Nguyệt nó hun thêm bồ kết cho khô. Cô ơi, cô ngồi dậy chậm chậm thôi, để bà đỡ tay cho cô."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Bà cứ để tôi tự ngồi dậy. Bà ngồi xuống chiếc ghế kia nghỉ một lát đi, bà đứng suốt từ sớm tới giờ rồi."
      },
      {
        "speaker": "Bà Năm Liên",
        "text": "Dạ, thân già này còn đứng được, cô đừng lo. Cô uống thang thuốc này trước đã, thuốc phải uống lúc còn ấm mới nên. Đắng thì có đắng, cô ráng uống cho hết, nghe cô."
      },
      {
        "speaker": "Cao Minh",
        "text": "Bà hầu hạ cô chủ từ bao giờ?"
      },
      {
        "speaker": "Bà Năm Liên",
        "text": "Dạ, thưa ông, từ hồi cô còn đỏ hỏn. Trước đó nữa, tôi theo hầu nhị phu nhân, là mẹ của cô. Nhị phu nhân là người hiền nhất mà tôi từng gặp trong cái nhà này… Thưa ông, có những chuyện cũ, người già như tôi chỉ dám giữ trong bụng thôi, nói ra không khéo lại mang họa cho cô."
      },
      {
        "speaker": "Cao Minh",
        "text": "Cứ giữ lấy. Bổn tọa không ép ai mở miệng — trong nhà này, người ta mở miệng theo lệnh đã đủ nhiều rồi."
      },
      {
        "speaker": "Bà Năm Liên",
        "text": "Dạ… thưa ông, tôi chỉ xin ông biết một điều này thôi: có một món đồ của nhị phu nhân, tôi còn giữ cho cô chủ cho tới tận bây giờ. Mười mấy năm rồi, tôi không dám đưa cho cô, cũng không dám hé cho ai — vì chưa gặp được người nào tôi dám tin là sẽ không làm hại cô. Ông… ông ở lại thêm ít lâu nữa, để tôi coi cho chắc, thưa ông."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Bà… bà giữ đồ của mẹ tôi ư? Sao ngần ấy năm bà chưa từng nói với tôi một lời?"
      },
      {
        "speaker": "Bà Năm Liên",
        "text": "Dạ, cô tha lỗi cho bà. Có những thứ, nói ra sớm thì mất sớm, cô ơi. Bà già này vô dụng, chỉ còn biết giữ của người ta gửi gắm cho thật kín, vậy thôi."
      }
    ],
    "choices": [
      {
        "id": "ask_mother",
        "text": "Hỏi thêm về nhị phu nhân Lâm Ngọc Chi — người mẹ mà cả căn nhà này đều tránh nhắc tên.",
        "next": "lh_garden",
        "effects": {
          "cluesHuaGiaDelta": 1,
          "lanTrustDelta": 1
        }
      },
      {
        "id": "let_secret_rest",
        "text": "Không hỏi thêm nữa. Một bí mật đã được giữ kín mười mấy năm không cần phải mở ra ngay trong một buổi sáng.",
        "next": "lh_garden",
        "effects": {
          "lanTrustDelta": 2
        }
      }
    ]
  },
  "lh_garden": {
    "id": "lh_garden",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Mười bước sau lưng",
    "backgroundId": "long-hai-coast",
    "location": "Vườn sau biệt thự Hứa Gia, nhìn ra biển Long Hải",
    "narration": [
      "Quá trưa, sương biển tan hết, trời quang và gió nhẹ. Tiểu Lan nói hôm nay là một ngày khỏe — thứ ngày mà căn nhà cho phép nàng ra khỏi phòng, ra vườn sau hít thở khí trời một lát. Bà Năm Liên đỡ nàng đi từng bước qua hành lang. Cao Minh đi phía sau, và hắn đếm: từ cửa phòng nàng ra tới bậc thềm vườn là bốn mươi bảy bước chân của nàng, bước nào cũng chậm, cũng phải dừng lại một lần để thở.",
      "Vườn sau của biệt thự nằm trên một gò đất cao nhìn thẳng xuống bãi biển Long Hải. Xa xa là thuyền thúng nằm san sát trên cát, lưới phơi trên những cọc tre, và mặt biển phẳng lặng xanh ngắt tới tận chân trời. Cảnh trí đẹp như tranh. Chỉ có điều, vườn hoa được cắt tỉa quá ngay ngắn, lối đi rải sỏi không lệch một viên, và băng đá nàng ngồi cũng đã được lau sẵn từ trước khi nàng ra tới — căn nhà đã chuẩn bị cả sự thư giãn của nàng theo đúng bài bản của nó.",
      "Và có một người nữa. Một gia nhân trẻ đứng yên ở đầu lối đi, cách nàng đúng mười bước chân. Khi nàng bước tới một bước, anh ta bước tới một bước. Khi nàng dừng lại nhìn biển, anh ta dừng lại. Khi bà Năm Liên dìu nàng đi chéo sang phía hàng phi lao, anh ta cũng xê dịch theo, vẫn đúng mười bước, không thiếu một gang, không thừa một gang — như thể giữa anh ta và nàng có một sợi dây vô hình dài đúng mười bước, căng ra là giật, chùng xuống là kéo.",
      "Cao Minh đã thấy những sợi chỉ nối vào sống lưng từng người trong nhà này. Nhưng đứng giữa ban ngày, nhìn một con người bị giữ ở đầu một sợi dây dài mười bước như người ta giữ một con diều, hắn vẫn thấy thứ tà ác của căn nhà này có một vẻ gì đó nhỏ nhen và tỉ mỉ đến ghê người. Nó không cần xiềng xích ồn ào. Nó chỉ cần khoảng cách. Đúng mười bước, mỗi ngày, mười mấy năm.",
      "Cao Minh đứng ở mép gò, nhìn xuống mặt nước trải dài tới tận chân trời — nhìn lâu hơn mức một cảnh đẹp đáng được nhìn. Ở quê hắn chỉ có núi, và mây nằm trên đá; một thứ nước mênh mông đến nuốt cả chân trời như thế này, hắn chưa từng thấy tận mắt. Tiểu Lan ngồi trên băng đá nhìn hắn ngắm biển, không nói gì. Nàng đã quá quen với việc người ta nhìn nàng như một vật lạ; còn vị khách này, vật lạ đầu tiên hắn ngắm đến quên cả giờ giấc, lại là mặt biển quê nàng.",
      "Tiểu Lan ngồi trên băng đá, nhìn biển rất lâu. Nàng kể rằng nàng thuộc từng bãi đá ngầm ngoài khơi như thuộc lòng một bài thơ, dù chưa một lần được đặt chân xuống bãi cát. Nàng biết tháng nào cá cơm vào bờ, tháng nào biển động, nhà chài nào mới gả con gái, nhà nào vừa mất người trong chuyến khơi xa — tất cả do bà Năm Liên và con Thu Nguyệt kể lại từng mảnh, qua nhiều năm, như người ta chuyền tay nhau vá một tấm áo. Cả một đời người đang diễn ra dưới kia, cách nàng mười mấy trượng và một bức tường vô hình.",
      "Nàng còn kể, bằng cái bình thản của người đã biến sự thiếu thốn thành một môn học riêng, rằng nàng thuộc tên từng chiếc ghe lớn neo ở bến Long Hải như người ta thuộc tên họ hàng trong nhà: ghe nào là của ông Sáu Rô, ghe nào của vợ chồng chị Ba Mộng, ghe nào năm ngoái ra khơi mất một người con trai không về nữa. Bà Năm Liên và con Thu Nguyệt là hai cánh cửa sổ duy nhất của nàng nhìn ra thế giới. Những gì hai người ấy kể còn thiếu, nàng tự bù bằng sách, bằng trí tưởng tượng, và bằng những buổi chiều đứng ở vườn sau thế này.",
      "Rồi một việc nhỏ xảy ra. Nàng đứng dậy hơi vội, người chao đi một cái vì cơn choáng quen thuộc. Cao Minh đưa một tay ra, đỡ đúng khuỷu tay nàng, mắt vẫn không rời mặt biển — cái đỡ tiện tay của người ta giữ một món đồ sắp nghiêng khỏi mép bàn, không hơn. Còn người gia nhân đứng cách mười bước kia — anh ta không nhúc nhích. Không phải anh ta ác: đôi mắt anh ta hốt hoảng, vai anh ta giật lên như muốn lao tới. Nhưng không có một mệnh lệnh nào cho phép anh ta đỡ người sắp ngã, nên thân thể anh ta đứng yên như tượng, trong khi ánh mắt thì gào thét. Cao Minh nhìn cảnh ấy và ghi nhớ: thứ ngự trong nhà này không cần gia nhân của nó tàn nhẫn. Nó chỉ cần chúng không được phép làm điều tốt khi chưa có lệnh.",
      "Nàng vịn tay hắn đứng lại vững vàng, khẽ nói lời cảm tạ, rồi tự mình buông tay ra trước — một sự tự trọng lặng lẽ của người không muốn biến sự yếu đuối của mình thành thói quen dựa dẫm. Gió biển thổi tung mấy sợi tóc mai của nàng. Trong một thoáng, bỏ qua những vết loét trên má và sợi dây mười bước sau lưng, nàng chỉ là một cô gái mười tám tuổi đang đứng nhìn biển trong một buổi chiều đẹp.",
      "Chuông của nhà chính vang lên báo giờ. Từ những gian nhà khác nhau, tiếng chân người bắt đầu dồn về những vị trí cố định của buổi chiều. Người gia nhân mười bước kia quay đầu về phía nhà chính cùng một nhịp với tất cả những âm thanh ấy. Tiểu Lan cũng nghe thấy. Nàng nhìn biển thêm một lần cuối, rồi tự mình quay bước về phía hành lang tối, không đợi ai nhắc."
    ],
    "dialogue": [
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài, ngài nhìn xem, hôm nay biển lặng lắm. Người Long Hải nói biển lặng quá là sắp có giông. Tôi ở đây mười mấy năm, thuộc tính khí của biển như thuộc một người trong nhà — vậy mà chưa một lần được bước xuống tới bãi cát dưới kia."
      },
      {
        "speaker": "Cao Minh",
        "text": "Nàng muốn xuống bãi cát lắm sao?"
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Muốn thì có ích gì, thưa ngài. Năm tôi mười ba tuổi, tôi từng chạy một lần — chạy thật sự, qua sân, qua cổng phụ, hướng về phía biển. Chưa ra khỏi đầu đường thì cả nhà đã đứng thành hàng ở hai bên lối đi. Không ai la mắng, không ai chạy theo bắt lại. Họ chỉ đứng đó mà nhìn. Tôi đi được thêm mấy bước, rồi tự mình quay về phòng. Từ đó tôi không chạy nữa. Một người khôn ngoan không nên thử lại mãi một cánh cửa mà mình đã biết là có người giữ."
      },
      {
        "speaker": "Cao Minh",
        "text": "Đó không phải là cửa khóa. Đó là kẻ giữ cửa muốn nàng tin rằng cửa khóa, để nàng tự giam mình thay cho chúng."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài, quê quán của ngài ở đâu? Ngài nói năng không giống người Nam Kỳ, cũng không giống người Bắc. Áo ngài mặc, kiếm ngài đeo, tôi chưa từng trông thấy trong bất cứ cuốn sách nào."
      },
      {
        "speaker": "Cao Minh",
        "text": "Bổn tọa tới từ một nơi núi cao quanh năm mây phủ, cách đây xa hơn nàng có thể tưởng rất nhiều. Ở nơi ấy không có biển. Người ta gọi bổn tọa bằng một cái tên khác."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Ngài nói cứ như nhân vật trong những cuốn truyện tôi đọc trộm hồi nhỏ. …Thưa ngài, xin ngài đừng giận — đã lâu lắm rồi tôi mới được nói chuyện với một người mà tôi không phải ngồi đoán xem họ đang nói thật, hay đang nói theo lệnh của ai khác."
      }
    ],
    "choices": [
      {
        "id": "linger_sea",
        "text": "Đi cùng nàng thêm một vòng dọc bờ tường hướng ra biển, bất chấp tiếng chuông báo giờ của nhà chính.",
        "next": "lh_night_bell",
        "effects": {
          "lanTrustDelta": 3
        }
      },
      {
        "id": "escort_back",
        "text": "Đưa nàng về phòng trước khi căn nhà kịp ghi nhận nàng đã vắng mặt quá lâu.",
        "next": "lh_night_bell",
        "effects": {
          "cluesHuaGiaDelta": 1
        }
      }
    ]
  },
  "lh_night_bell": {
    "id": "lh_night_bell",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Trống điểm danh",
    "backgroundId": "long-hai-corridor",
    "location": "Phòng khách nghỉ phía đông, biệt thự Hứa Gia",
    "narration": [
      "Đêm xuống trên biệt thự Hứa Gia theo đúng trình tự của gia quy: đèn hành lang hạ nhỏ, cửa các gian lần lượt đóng then, tiếng chân người thưa dần rồi tắt hẳn. Cao Minh được thu xếp nghỉ ở phòng khách phía đông. Hắn không ngủ. Hắn ngồi yên trong bóng tối, thần niệm trải ra mỏng như một lớp sương phủ lên cả tòa nhà, và chờ xem căn nhà này làm gì khi nó tưởng không còn ai thức để nhìn nó.",
      "Câu dặn của con Thu Nguyệt ở hành lang ban chiều vẫn còn văng vẳng: đêm ở đây dài lắm, nghe tiếng gì cũng đừng ra hành lang một mình. Lúc ấy hắn tưởng đó là lời dặn của một đứa nhỏ sợ ma. Bây giờ, nằm trong bóng tối của căn nhà này, hắn hiểu ra đó không phải là lời dặn về ma quỷ. Đó là lời dặn về một nghi thức.",
      "Trước khi nghi thức ấy bắt đầu, căn nhà còn đi qua một màn dạo đầu mà chỉ kẻ không ngủ mới nghe thấy được. Sau trống canh hai, đèn ở các gian lần lượt hạ nhỏ xuống — nhưng không tắt hẳn, và thứ tự cũng không hề ngẫu nhiên: bắt đầu từ dãy nhà bếp, qua dãy nhà kho, tới dãy phòng của gia nhân, và sau cùng mới là dãy nhà chính. Như thể có một bàn tay vô hình đang đi dọc cả tòa nhà, vuốt nhẹ từng ngọn đèn cho nhỏ lại, kiểm tra từng ổ khóa, từng then cài — một vòng tuần tra mà không có người tuần tra. Dưới xóm chài, một con chó sủa lên hai tiếng về phía biệt thự, rồi bỗng im bặt giữa chừng, như vừa bị ai bịt miệng.",
      "Canh hai qua đi trong im lặng hoàn toàn. Im lặng đến mức hắn nghe được tiếng sóng biển vỗ vào bãi đá dưới gò, tiếng gió luồn qua hàng phi lao, tiếng một con thạch sùng chặc lưỡi trên xà nhà. Rồi, vừa sang canh ba, từ sâu trong dãy nhà chính vọng ra ba tiếng gõ rất khẽ. Không phải tiếng gõ cửa. Giống tiếng ai đó gõ nhẹ lên mặt bàn gỗ, ba tiếng, cách đều nhau, như một hiệu lệnh đã được quy ước từ rất lâu rồi.",
      "Điều xảy ra tiếp theo làm hắn ngồi thẳng dậy một chút trong bóng tối — phần đáng xem của đêm nay, rốt cuộc, cũng bắt đầu. Mọi cánh cửa trong biệt thự cùng mở ra một lúc. Không phải lần lượt từng cánh, không phải từ gần tới xa. Tất cả — hắn đếm được hơn bốn mươi cánh cửa ở các dãy nhà — cùng khẽ kẽo kẹt trong cùng một khoảnh khắc, như cả tòa nhà vừa mở mắt. Sau đó là tiếng chân người. Rất nhiều người, bước rất khẽ, từ các gian phòng dồn về phía hành lang chính, cùng một nhịp bước, cùng một tốc độ, không một tiếng ho, không một tiếng thì thầm lạc nhịp.",
      "Qua khe cửa phòng mình, Cao Minh nhìn thấy ánh đèn lồng di chuyển ngoài hành lang thành một hàng dài, trôi qua đều đặn như một dòng sông lửa nhỏ. Bóng người nối nhau đi qua khe sáng: người phu gánh nước, cô hầu bưng trà, bà lão nhặt đậu, người đầu bếp — ai cũng đi với đôi mắt mở mà trống rỗng của người đang ngủ, hai tay buông thõng, mặt không một biểu cảm. Và lẫn trong tiếng chân đều đặn ấy, hắn nghe thấy một thứ âm thanh khác, trầm và đều: tiếng người đếm. Không rõ là một người đếm, hay tất cả cùng đếm trong cổ họng.",
      "Tiếng đếm ấy đi dọc các hành lang như một con nước chậm. Nó không thành lời rõ rệt — chỉ là những âm trầm đều đặn bật ra cùng lúc từ nhiều cổ họng, nửa như đếm số người, nửa như đọc một thứ kinh không có chữ. Khi dòng người đi qua dãy phòng phía đông, Cao Minh nghe rõ hơn: mỗi lần đi ngang một cánh cửa, tiếng đếm lại dừng đúng một nhịp, rồi mới đi tiếp. Cửa phòng bà Năm Liên: một nhịp. Cửa gian kho thuốc: một nhịp. Cửa phòng con Thu Nguyệt: một nhịp. Mỗi cánh cửa là một cái tên trong một cuốn sổ vô hình, và đêm nào cuốn sổ ấy cũng được lật ra điểm lại từ đầu, không sót một ai.",
      "Đúng như lời Tiểu Lan kể: nhiều người, một lá phổi. Cả tòa nhà đang thở trong hành lang ngoài kia, và buổi lễ nửa đêm này chính là lúc lá phổi ấy hít vào sâu nhất. Hắn nghe tiếng đếm đi dần về phía dãy nhà trong cùng, chậm lại ở đó lâu hơn ở mọi nơi khác — như thể người đếm phải đếm đi đếm lại một thứ gì ở gian phòng cuối hành lang, một thứ quý nhất và cũng dễ mất nhất trong cả căn nhà.",
      "Và ở cuối buổi điểm danh, khi dòng người đã dồn cả về phía dãy nhà trong cùng, thần niệm của hắn chạm được vào điều hắn đã ngờ từ ngày đầu bước vào đây. Tiếng đếm chậm lại, nhẹ hẳn đi, gần như kính cẩn — và lẫn giữa muôn vàn nhịp thở đồng loạt ngoài kia, có một nhịp thở nhỏ hơn, yếu hơn, được tất cả những nhịp thở còn lại bọc ở chính giữa như lòng đỏ nằm trong lòng trắng trứng. Đó là nhịp thở của Tiểu Lan. Xét cho cùng, cả buổi lễ nửa đêm rùng rợn này chỉ nhằm kiểm tra một điều duy nhất: cái trục của cỗ máy còn nằm nguyên ở chỗ của nó, hay không.",
      "Ngay lúc ấy, then cửa của chính căn phòng hắn đang ở khẽ nhúc nhích. Then gỗ nâng lên chừng nửa phân — rồi dừng lại. Không có tiếng gõ, không có ai lên tiếng gọi. Chỉ là một sự ngập ngừng rất nhỏ, như thể thứ đang đi dọc hành lang điểm qua từng cánh cửa kia vừa chạm tới cửa của hắn, cảm nhận được một sự hiện diện không thuộc về danh sách của nó, và quyết định — hoặc bị buộc phải — bỏ qua. Then gỗ hạ xuống. Tiếng chân đi tiếp, xa dần.",
      "Một lúc lâu sau, buổi điểm danh kết thúc theo đúng cách nó bắt đầu: hơn bốn mươi cánh cửa cùng đóng lại trong một khoảnh khắc, then cài đồng loạt, và sự im lặng ập xuống đầy đủ đến mức tai người ù đi. Cao Minh ngồi yên trong bóng tối. Đêm nào căn nhà này cũng đếm lại người của nó, từng thân thể một, như chủ nhà đếm lại đồ đạc trước khi đi ngủ. Đếm đủ hết — trừ một người khách mà danh sách của nó chưa biết phải xếp vào đâu. Ở cuối danh sách ấy, được đếm đi đếm lại cẩn thận nhất, là một cô gái mười tám tuổi nằm trong gian phòng trong cùng."
    ],
    "dialogue": [
      {
        "speaker": "Gia nhân",
        "text": "…ba mươi sáu… ba mươi bảy… ba mươi tám…"
      },
      {
        "speaker": "Cao Minh",
        "text": "Điểm danh. Nhà nào đêm đêm cũng phải đếm lại người của mình cho đủ số, là nhà đang sợ mất đồ. Bổn tọa muốn xem, khi đếm thiếu mất một người, nó sẽ làm gì."
      }
    ],
    "choices": [
      {
        "id": "step_out",
        "text": "Mở cửa, bước ra hành lang ngay giữa buổi điểm danh của căn nhà.",
        "next": "lh_night_corridor"
      },
      {
        "id": "stay_listen",
        "text": "Ở yên trong phòng, nghe cho hết buổi điểm danh và ghi nhớ toàn bộ trình tự của nó.",
        "next": "lh_doctor_visit",
        "effects": {
          "cluesHuaGiaDelta": 1
        }
      }
    ]
  },
  "lh_night_corridor": {
    "id": "lh_night_corridor",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Hành lang ngủ đứng",
    "backgroundId": "long-hai-corridor",
    "location": "Hành lang biệt thự Hứa Gia, giữa đêm",
    "entity": "entity_guard",
    "narration": [
      "Cao Minh mở cửa đúng lúc hàng người cuối cùng vừa đi khuất vào dãy hành lang chính. Hắn bước ra, khép cửa lại sau lưng không một tiếng động, và đi ngược chiều dòng người vừa đi qua — đi vào giữa buổi điểm danh của căn nhà như một vị khách không có tên trong bất cứ danh sách nào.",
      "Hành lang chính hiện ra dưới ánh đèn lồng hạ nhỏ. Hai bên, gia nhân đứng thành hai hàng dài dựa lưng vào vách, ngủ đứng. Tất cả đều nhắm mắt. Tất cả cùng thở một nhịp: ngực bên này phồng lên thì ngực bên kia cũng phồng lên, xẹp xuống cùng một lúc, đều đến mức nếu chỉ nghe tiếng thở, người ta sẽ tưởng trong hành lang này chỉ có một người duy nhất, rất lớn, đang nằm ngủ. Đèn lồng treo trên đầu họ cháy lặng, lửa đứng yên như lửa trong tranh vẽ.",
      "Đi thêm mấy bước, hắn nhận ra người phu gánh nước tên Thới — người đã ra mở cổng đón hắn hôm đầu tiên. Anh ta ngủ đứng gần cửa bếp, hai vai vẫn đội một đòn gánh vô hình, và đôi bàn tay buông thõng của anh ta vẫn còn run: cái run đều và mảnh như dây đàn bị gảy không ngừng nghỉ mà hắn đã thấy từ buổi đầu. Đến trong giấc ngủ, đến giữa buổi điểm danh của cả căn nhà, đôi tay ấy cũng không được phép nghỉ. Kế bên anh ta, bà đầu bếp ôm ghì một cái vá rỗng vào ngực như ôm một đứa con, môi mấp máy nhẩm đi nhẩm lại thực đơn của ngày mai theo đúng thứ tự sẽ nấu.",
      "Hắn đi giữa hai hàng người ấy. Không ai tỉnh dậy. Một cô hầu trẻ đứng gần cửa bếp, hai tay vẫn giữ nguyên tư thế bưng một cái khay không có thật, môi mấp máy lập đi lập lại một động tác rót trà vô hình — căn nhà bắt người của nó tập cả trong giấc ngủ, tập những việc họ sẽ phải làm vào ngày mai, cho tới khi thân thể thuộc làu và không cần tới ý thức nữa. Một người phu lớn tuổi đứng ở góc cầu thang, đầu gật gù, miệng lẩm bẩm đếm những con số đã đếm xong từ lâu. Hắn đi thong thả như đi dạo trong vườn nhà mình, tay chắp sau lưng. Căn nhà này có sổ cho từng con người trong đó — chỉ chưa có trang nào dành cho hắn. Hắn cũng không vội ghi tên mình vào: khách không mời mà tự ghi tên vào sổ nhà người ta thì bất lịch sự.",
      "Ở cuối hành lang, trước cửa gian phòng trong cùng, là người gác. Anh ta đứng ngủ ngay tại vị trí ban ngày anh ta vẫn đứng: lưng thẳng, chân chia đều, một bàn tay đặt lên then cửa phòng của Tiểu Lan — canh gác cả trong giấc ngủ. Hàng chỉ đỏ khâu hai chữ Sáu ở cổ áo anh ta vẫn còn đó. Cao Minh đứng nhìn anh ta một lúc lâu. Bỗng mí mắt người gác run lên, rồi hé mở: tròng mắt trắng dã, không tiêu điểm, nhìn thẳng vào khoảng không như nhìn một mệnh lệnh chỉ mình anh ta thấy được. Cái nhìn ấy kéo dài đúng ba hơi thở — rồi mí mắt khép lại, đầu anh ta lại cúi xuống, và anh ta lại là một người đang ngủ đứng như mọi người khác.",
      "Ngay cạnh cầu thang, một lão bộc già hơn tất cả những người còn lại đang mớ. Ông ta ngủ mà miệng vẫn gọi, gọi rất khẽ, bằng cái giọng của người hầu hạ đã quen nói khẽ suốt cả một đời: gọi một cái tên mà cả căn nhà này ban ngày không ai dám nhắc tới. Ông ta gọi đi gọi lại, như đang chờ một người chủ cũ bước ra từ một gian phòng nào đó đã khóa kín từ mười mấy năm trước, để ông ta còn bưng lên một khay trà đã nguội từ mười mấy năm rồi.",
      "Ở độ cao ngang tầm xà nhà, thần niệm của hắn nhìn thấy điều mà ban ngày ánh sáng đã che khuất. Từ mỗi thân người đang ngủ đứng kia, một sợi chỉ vô hình mảnh như tơ nhện vươn ra, bò dọc theo vách, theo xà ngang, rồi tất cả cùng đổ về một hướng duy nhất: gian phòng trong cùng ở cuối hành lang. Chúng giống như rễ cây đang tìm về một mạch nước ngầm, hay như muôn vàn sợi dây đàn cùng căng về một cái trục chung. Mỗi khi có người trong hàng khẽ cựa mình, sợi chỉ của người ấy lại giật nhẹ một cái, và cái giật lan sang những sợi bên cạnh như gợn sóng trên mặt nước — cả mạng lưới cùng biết, dù không một ai trong số họ tỉnh dậy.",
      "Trên khung cửa gian phòng trong cùng có dán một mảnh giấy nhỏ đã ngả màu vàng, bên trên đóng con dấu đỏ của nhà họ Hứa và ghi một dòng ngày tháng — chính là ngày của kỳ giấy chứng bệnh gần đây nhất. Căn nhà này dán lên cửa phòng nàng thứ giấy vốn dùng để niêm phong một kho hàng. Trong sổ sách của nó, nàng không phải một người đang nằm dưỡng bệnh. Nàng là một món đồ quý được kiểm kê định kỳ, dán niêm phong cẩn thận, và tuyệt đối không được mở ra nếu không có lệnh.",
      "Rồi thần niệm của Cao Minh chạm được vào gian phòng trong cùng. Tiểu Lan đang ngủ, nhưng giấc ngủ của nàng không yên. Qua bức vách, hắn cảm nhận được những sợi chỉ vô hình từ khắp các gian nhà đang đổ về phía nàng như nước đổ về chỗ trũng: buổi điểm danh không chỉ là đếm người — nó là lúc cả mạng lưới kiểm tra lại cái trục của nó, kéo nhẹ từng sợi một, xem sợi nào chùng, sợi nào căng, và siết lại những chỗ cần siết. Bàn tay nàng đặt trên chăn khẽ co duỗi theo một nhịp không phải của nàng, như đang gảy một cây đàn không có dây trong mơ.",
      "Cao Minh đứng rất lâu trong hành lang ngủ đứng ấy, giữa hai hàng con người còn sống mà không được sống theo ý mình. Hắn có thể cắt đứt mọi sợi chỉ trong tầm mắt ngay trong đêm nay — dễ như trở bàn tay. Chỉ có điều, tất cả chúng đều chảy về một cái trục, và cái trục ấy là một cô gái đang nằm ngủ, đang thở bằng phần sự sống bị kẻ khác làm thay. Cắt đêm nay, sáng mai chưa chắc nàng đã dậy được nữa. Đêm nay là đêm để nhìn cho kỹ, nhớ cho hết — và để lại một dấu vết nhỏ mà sáng mai không ai nhìn thấy được."
    ],
    "dialogue": [
      {
        "speaker": "Lão bộc",
        "text": "Ngọc Chi ơi… cô Ngọc Chi… trà của cô… để tôi bưng… cô đừng đi xa quá, trời tối rồi…"
      },
      {
        "speaker": "Cao Minh",
        "text": "Ngủ cũng không được yên. Người nhà này đến mơ cũng phải hầu hạ cho đúng bài."
      },
      {
        "speaker": "Cao Minh",
        "text": "Sáu. Ngươi canh cửa cho nó cả trong lúc ngủ. Chủ ngươi dùng người còn rẻ hơn dùng trâu — trâu, đêm đến còn được nằm."
      }
    ],
    "choices": [
      {
        "id": "tripwire",
        "text": "Để lại một sợi thần niệm mỏng như tơ ở ngưỡng cửa phòng nàng — mạo hiểm, nhưng từ đêm mai, hắn sẽ biết thứ gì ra vào nơi này.",
        "next": "lh_doctor_visit",
        "effects": {
          "cluesHuaGiaDelta": 2,
          "lanMaterInfluenceDelta": 2
        }
      },
      {
        "id": "withdraw",
        "text": "Rút lui về phòng trước khi buổi điểm danh kết thúc. Đêm nay, thấy bấy nhiêu là đủ rồi.",
        "next": "lh_doctor_visit",
        "effects": {
          "cluesHuaGiaDelta": 1
        }
      }
    ],
    "companions": [
      "npc_servant_elder_male"
    ]
  },
  "lh_doctor_visit": {
    "id": "lh_doctor_visit",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Chữ ký của thầy thuốc",
    "backgroundId": "long-hai-saloon",
    "location": "Phòng khách biệt thự Hứa Gia, Long Hải",
    "companions": [
      "steward",
      "npc_doctor"
    ],
    "narration": [
      "Sáng hôm sau, biệt thự Hứa Gia lại khoác lên vẻ bình thường của nó như người ta khoác áo đi lễ. Một chiếc xe ngựa dừng ở cổng trước giờ Tỵ; quản gia đích thân ra đón, gia nhân đứng hai hàng cúi chào. Vị khách ấy là thầy thuốc của nhà này — người mỗi kỳ tới một lần, chỉ để ký tên vào tờ giấy chứng bệnh của vị tiểu thư trong gian phòng trong cùng.",
      "Ông là một người đàn ông ngoài năm mươi, mặc bộ âu phục cũ đã sờn cổ, tay xách chiếc cặp da nâu, đeo cặp kính gọng sắt. Ông hành nghề ở phố dưới Long Hải đã hai mươi năm, đỡ đẻ cho nửa xóm chài, bó xương cho dân phu phen — một thầy thuốc nhà quê tử tế và biết điều, cả đời không làm hại ai và cũng không dám đắc tội với nhà giàu. Khi bước qua sân, ông cúi chào gia nhân còn thấp hơn gia nhân cúi chào ông.",
      "Ít ai ở phố dưới biết rằng việc ký giấy cho nhà họ Hứa không phải do ông tự tìm đến. Hai mươi năm trước, vị thầy thuốc tiền nhiệm — người thầy đã dạy ông nghề này — trước lúc mất đã dặn: ở Long Hải có một nhà giàu, mỗi kỳ chỉ cần tới ký một cái tên, tiền công hậu hĩnh, một điều kiện duy nhất: không được hỏi gì cả. Ông đã giữ đúng giao ước ấy suốt mười hai kỳ giấy. Nhà họ Hứa chữa bệnh không công cho vợ con ông, cho ông vay tiền không lấy lãi — cái ơn ấy và tờ giấy ấy, lâu dần ông không còn phân biệt nổi đâu là ranh giới của chúng nữa.",
      "Buổi ký giấy diễn ra ở phòng khách, theo một trình tự trơn tru như mọi nghi lễ khác của căn nhà này. Quản gia trải sẵn tờ giấy chứng lên bàn: chữ đã viết sẵn từ trước, nét chữ ngay ngắn — chứng nhận rằng tiểu thư Hứa Tiểu Lan mắc chứng phong cùi hiểm nghèo, bệnh đã vào tới xương tủy, lây lan dữ dội, phải cách ly vĩnh viễn, không được tiếp xúc với người ngoài, sống chết đều do gia đình toàn quyền lo liệu. Chỉ còn thiếu hai thứ: chữ ký của thầy thuốc và con dấu tay của ông. Mực đã mài sẵn. Nghiên đã đầy.",
      "Có một việc không nằm trong bài bản: sáng nay trong phòng khách còn có một vị khách lạ. Thầy thuốc vừa bước qua ngưỡng cửa thì khựng lại — bên vai người khách ấy, hai thanh kiếm treo lơ lửng giữa không trung. Chiếc cặp da tuột khỏi tay ông; cặp kính gọng sắt trượt xuống sống mũi. Quản gia đỡ lời ngay, trơn tru như đã tập sẵn từ trước: 'Dạ, thưa thầy, đây là vị thầy lang từ phương xa, nhà con lặn lội mời về xem bệnh cho cô chủ.' Ông thầy thuốc nghe được một cái danh để gọi, thì như người chết đuối vớ được khúc gỗ: thầy lang — thầy lang thì làm gì cũng là việc của thầy lang. Ông cúi chào vị 'thầy lang' ấy thấp hơn cả chào quản gia, và từ đó không dám nhìn thẳng vào hai thanh kiếm nữa. Cao Minh ngồi yên, không cãi một chữ. Căn nhà vừa may cho hắn một chiếc áo để mặc ra đường; mặc vào cũng tiện.",
      "Điều đầu tiên Cao Minh để ý sau đó: không ai dẫn thầy thuốc vào thăm bệnh nhân. Không ai nhắc tới bắt mạch, xem lưỡi, nghe phổi — những việc tối thiểu của một người thầy thuốc ký giấy chứng bệnh. Ông ngồi ở phòng khách phía ngoài, cách gian phòng người bệnh hai dãy hành lang và một sân trong, ký tên chứng nhận cho một căn bệnh mà ông chưa từng được nhìn tận mắt. Quản gia đứng bên cạnh, mỉm cười, hai tay chắp trước bụng, như thể đó là việc thiên kinh địa nghĩa nhất trên đời.",
      "Rồi cây bút lông được đặt vào tay ông thầy thuốc. Ba nét đầu của chữ ký, tay ông run run theo cái run của người già — rất người. Nhưng đến nét thứ tư, bàn tay ấy bỗng đổi nhịp: trơn tru hẳn đi, di chuyển theo đúng cái nhịp đều đặn mà Cao Minh đã nghe trong tiếng chân gia nhân ngoài hành lang đêm qua. Trán ông thầy thuốc rịn mồ hôi. Bàn tay còn lại của ông bấu chặt vào mép bàn đến trắng khớp. Ông cố nhấc cây bút lên — trong ba hơi thở, cây bút không nhấc lên nổi — và chữ ký cứ thế tự hoàn thành, tròn vành vạnh, đẹp hơn bất cứ chữ ký nào ông từng ký bằng chính ý chí của mình.",
      "Trước khi cất tờ giấy vừa ký, quản gia mở chiếc hộp gỗ lim ra ngay trước mắt Cao Minh — như một người làm sổ sách cẩn thận muốn chứng tỏ nhà mình làm việc gì cũng có nề nếp. Trong hộp, những tờ giấy chứng giống hệt nhau xếp thành một xấp dày: kỳ nào cũng cùng một nội dung, chỉ khác ngày tháng và nét chữ ký. Những kỳ đầu tiên là chữ của một thầy thuốc khác hẳn, mực đã ngả màu nâu cũ, có từ thời cô chủ còn là một đứa bé. Căn nhà này đã ký giấy cách ly cho nàng từ rất lâu. Thầy thuốc thì có thể thay người. Tờ giấy thì không bao giờ thay.",
      "Chữ ký xong, bàn tay ông mới được trả lại cho ông. Ông đặt bút xuống, nhìn chằm chằm vào bàn tay phải của mình như nhìn một vật lạ vừa mượn tạm, rồi vội vàng giấu nó xuống dưới vạt áo. Quản gia lấy con dấu của nhà họ Hứa đóng xuống góc giấy, thổi khô mực, gấp tờ giấy lại làm tư và cất vào chiếc hộp gỗ lim khóa đồng. Một kỳ giấy nữa đã xong. Vị tiểu thư trong gian phòng trong cùng lại tiếp tục là một người bệnh truyền nhiễm không được phép gặp ai — trên giấy tờ, hợp lệ, và hoàn toàn hợp lệ.",
      "Ở gian phòng trong cùng, Tiểu Lan nghe thấy tiếng xe ngựa lăn bánh rời cổng. Nàng không cần ai báo cũng biết đó là xe của ai: nó đã tới đều đặn như thế suốt bao nhiêu năm, mỗi lần tới là một lần nàng bị tuyên bố — bằng chữ ký của một người chưa từng thấy mặt nàng — rằng nàng là một mối nguy cần phải giấu kín khỏi thế gian. Cao Minh bước ra thềm nhìn theo chiếc xe, rồi quay lại nhìn quản gia mỉm cười tiễn khách ở bậc cửa. Căn nhà này không cần xiềng xích cho cô chủ của nó. Nó chỉ cần giấy tờ."
    ],
    "dialogue": [
      {
        "speaker": "Quản gia",
        "text": "Dạ, thưa thầy, giấy tờ kỳ này cũng như mọi kỳ. Thầy ký vào chỗ này, điểm chỉ vào chỗ này. Nhà con xin gửi thầy tiền xe, với chút quà quê như lệ cũ — thầy đừng chê."
      },
      {
        "speaker": "Thầy thuốc",
        "text": "Dạ… dạ, tôi ký. …Ông quản gia, kỳ này… tôi có được vào thăm cô chủ một chút không? Hành nghề hai mươi năm, tôi chưa một lần bắt mạch cho người bệnh mà tôi ký giấy chứng."
      },
      {
        "speaker": "Quản gia",
        "text": "Thầy lại quên phép rồi. Quan trên đã dặn kỹ: chứng này nhìn bằng mắt còn lây, huống chi là bắt mạch. Thầy ký mau cho kịp giờ tốt, kẻo trễ việc của nhà."
      },
      {
        "speaker": "Cao Minh",
        "text": "Thầy thuốc. Bổn tọa hỏi ông một câu: ông đã ký tờ giấy này bao nhiêu lần rồi?"
      },
      {
        "speaker": "Thầy thuốc",
        "text": "Dạ… thưa ông, mười hai lần. Mười hai kỳ giấy, tôi chưa một lần được thấy mặt cô chủ. Ông là người đầu tiên hỏi tôi câu đó, thưa ông."
      },
      {
        "speaker": "Cao Minh",
        "text": "Tên ông là gì?"
      },
      {
        "speaker": "Thầy thuốc",
        "text": "Dạ, tôi là Nguyễn Văn Sáu, hành nghề ở phố dưới. Thưa ông… lúc nãy, cái tay của tôi… ông có thấy không? Nó không nghe tôi. Mười hai lần rồi, lần nào tới chữ ký cuối, nó cũng tự đi theo một nhịp khác. Thưa ông, tôi phải về thôi. Tôi… tôi không dám nói nữa."
      }
    ],
    "choices": [
      {
        "id": "witness",
        "text": "Để thầy thuốc ra về bình yên — và ghi nhớ: ở phố dưới Long Hải có một nhân chứng còn sống, còn tỉnh táo, và đang sợ hãi.",
        "next": "lh_medicine_store",
        "effects": {
          "cluesHuaGiaDelta": 1
        }
      },
      {
        "id": "declare",
        "text": "Nói một câu vừa đủ cho quản gia nghe rõ: giấy tờ của nhà này, bổn tọa đã thấy đủ rồi.",
        "next": "lh_medicine_store",
        "effects": {
          "lanMaterInfluenceDelta": 2
        }
      }
    ]
  },
  "lh_medicine_store": {
    "id": "lh_medicine_store",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Kho thuốc và rương thuốc",
    "backgroundId": "medicine-store",
    "location": "Kho thuốc biệt thự Hứa Gia, Long Hải",
    "companions": [
      "npc_servant_elder_male"
    ],
    "narration": [
      "Buổi sáng ấy, Cao Minh nói với quản gia rằng hắn muốn xem thang thuốc mà vị tiểu thư trong nhà đang dùng. Quản gia ngần ngừ đúng một nhịp, rồi cười xởi lởi dẫn đường. Căn nhà này có một bài bản ứng khách rất giỏi: bất cứ chỗ nào khách đòi xem, nó đều có sẵn một bộ mặt sạch sẽ để đưa ra xem. Kho thuốc nằm ở dãy nhà ngang phía đông, cửa gỗ lim khóa hai lớp, chìa khóa đeo ở thắt lưng một ông lão quản kho đã ngoài bảy mươi.",
      "Bên trong kho, mùi thuốc bắc xộc lên nồng và khô: quế chi, xuyên khung, bạch chỉ, cam thảo — từng vị đựng trong hũ sành, xếp theo từng kệ cao sát nóc. Điều khiến Cao Minh chú ý không phải sự phong phú, mà là sự chính xác. Hũ nào cũng dán hai nhãn: một nhãn viết chữ quốc ngữ ngay ngắn ghi tên thuốc và ngày nhập kho, một nhãn nữa chỉ toàn những vạch ngắn dài và chấm tròn — thứ ký hiệu tính toán của dân thương hồ Chợ Lớn, dùng để ghi số lượng và giá tiền mà không cần viết chữ. Đến một kho thuốc ở biệt thự dưỡng bệnh cũng phải ghi sổ bằng mật hiệu, thì chủ nhân của nó hẳn không muốn người ngoài vòng đọc được sổ sách.",
      "Lão quản kho tên gọi ông Tư, tóc bạc như cước, lưng đã còng mà tay chân còn nhanh nhẹn lạ thường. Ông mở khóa, rót trà, và khi Cao Minh hỏi tới một vị thuốc bất kỳ trên kệ cao, ông không cần ngẩng đầu nhìn: tay ông với đúng hũ đó, miệng đọc luôn trọng lượng còn lại, ngày nhập, và thang thuốc gần nhất đã lấy ra bao nhiêu. Ông thuộc lòng cả ngàn hũ thuốc như người ta thuộc kinh — thuộc đến mức không rõ đó là trí nhớ của một đời người gắn với cái kho này, hay là thứ gì khác đang mượn trí nhớ của ông để giữ kho cho gọn.",
      "Kệ ngoài cùng còn có một chồng sổ xuất nhập kho, bìa vải đã mốc, gáy khâu chỉ. Hắn lật thử cuốn trên cùng: từ đầu chí cuối không một chữ thường, toàn là vạch và chấm — vạch dài là lượng, vạch ngắn là giá, chấm tròn là ngày. Cả một kho thuốc nuôi sống một con người, ghi lại bằng thứ chữ mà chỉ người trong vòng của phủ Chợ Lớn mới đọc được. Ông Tư nói, mỗi tháng, vào ban đêm, có người của phủ Chợ Lớn xuống đối chiếu sổ này với kho thật; người đó không bao giờ ở lại ăn cơm, đối chiếu xong là đi ngay trong đêm. Một kho thuốc mà phải kiểm kê trong đêm bởi người không dám ở lại — nó giống một kho tang vật hơn.",
      "Ở góc trong cùng của kho, trên một bệ gỗ riêng, đặt một chiếc rương gỗ mun bọc đai sắt, khóa đồng đã xanh rỉ. Quản gia giới thiệu bằng giọng tự hào được tập dượt: đây là rương thuốc theo hầu cô chủ từ Tây Viện ở Chợ Lớn chuyển ra, bên trong là những vị thuốc quý và hồ sơ thang thuốc của cô, niêm phong từ ngày rời phủ, chưa từng mở. Cao Minh nhìn kỹ: trên nắp rương, dọc theo mép đai sắt, có một hàng dấu niêm bằng đồng dập số — và những con số ấy cũng viết bằng ký hiệu thương hồ. Rương khóa kín, mà danh sách những thứ chứa trong rương cũng khóa kín bằng một lối chữ khác. Hai lớp khóa cho một chiếc rương thuốc của người bệnh — khóa thứ nhất giữ thuốc, khóa thứ hai giữ sự thật về thuốc.",
      "Ông Tư kể, giọng nhỏ đi: thuốc của cô chủ thì kho này chỉ giữ phần thang thường ngày, còn một vị thuốc đắng đặc biệt — đen như mực, đựng trong bình sành nhỏ niêm sáp — thì không ai được tự ý đong. Mỗi ngày đúng giờ, quản gia tự tay rót ra một chén đồng nhỏ, đưa tận tay người hầu phòng của cô. Có lần ở Tây Viện, ngày ông còn theo hầu ngoài đó, chiếc xe chở bình thuốc ấy bị lật ở dọc đường, thuốc tới trễ mất một canh giờ. Ông nói tới đó thì ngừng, như chính ông cũng không muốn nhớ tiếp: ông chỉ nói rằng đêm ấy, cả dãy Tây Viện không ai ngủ được, vì tiếng cô chủ la hét suốt một canh giờ — la như người bị rút từng sợi gân ra khỏi thân thể, mà thầy thuốc chích bao nhiêu kim cũng không ăn thua. Thuốc tới, uống vào, cô mới yên.",
      "Cao Minh đã nghe đủ để đoán. Thứ thuốc đắng ấy, nếu hắn đoán không sai, chẳng phải để chữa bệnh phong — bệnh phong chỉ là lớp áo khoác khoác lên người nàng cho thiên hạ sợ mà tránh xa. Vị thuốc kia giống thức nuôi hơn: nuôi thứ đang làm thay phần điều phối trong thân thể nàng. Cho nó ăn đều, nó làm việc đều, nhịp tim hơi thở của nàng mới yên. Ngừng cho ăn, nó đói, nó cựa quậy — và người phải trả bằng đau đớn là nàng, chứ không phải nó. Một cơ chế tàn nhẫn ở chỗ nó trói cả hai đầu: nàng không bỏ được nó, mà nó cũng không cần giết nàng, vì nàng chết thì nó mất vật chứa.",
      "Dưới thần niệm của hắn, kho thuốc còn là một nút thắt nữa. Từ dưới nền gạch, những sợi liên kết vô hình của căn nhà chạy ngang qua đây, mỏng như tơ, hướng về phía sân sau — nơi có miệng giếng cũ. Hắn ghi nhớ hướng đi của chúng mà không chạm vào.",
      "Lúc sắp ra khỏi kho, Cao Minh thấy ở góc kệ thấp nhất có một hũ sành không dán nhãn, nắp đậy bằng lá chuối khô. Ông Tư bắt gặp ánh nhìn ấy thì cười ngượng: đó là kẹo gừng ông tự làm, không có trong sổ, mỗi khi cô chủ uống thuốc đắng xong, bà Năm lại xin ông vài viên cho cô ngậm. Ông nói: thuốc đắng quá, cô ấy còn nhỏ, tội nghiệp. Trong căn nhà mà mọi thứ đều bị tính bằng ký hiệu và giờ giấc, một hũ kẹo gừng ngoài sổ sách là bằng chứng nhỏ nhoi rằng người trong nhà này vẫn còn là người — vẫn còn biết lén lút thương nhau ngoài tầm mắt của thứ đang ngự trên đầu họ.",
      "Trước khi ra về, hắn đi quanh bệ rương một vòng nữa. Hàng dấu niêm bằng đồng trên nắp rương có bảy dấu, dập theo một hàng cong, mỗi dấu một ký hiệu — hắn ghi nhớ thứ tự của chúng như ghi nhớ một hàng chữ. Ở thế giới của hắn cũng có cái lệ ấy: không ai niêm bảy lớp cho một thứ mà mất nó lại không mất đầu. Trong rương của một vị tiểu thư bệnh tật, ngoài thuốc ra, còn thứ gì đáng bảy lớp niêm và một tội chết?"
    ],
    "dialogue": [
      {
        "speaker": "Quản kho",
        "text": "Dạ, thưa ông, kho này con giữ bốn mươi năm rồi. Thuốc của cô chủ thì không thiếu một vị nào, ông coi sổ thì biết. Chỉ có cái rương kia là con không dám đụng tới — niêm của phủ Chợ Lớn, mở ra là mất đầu như chơi."
      },
      {
        "speaker": "Cao Minh",
        "text": "Danh sách trong rương ghi những gì, để ở đâu?"
      },
      {
        "speaker": "Quản kho",
        "text": "Dạ… bản kê thì hồi đó có một tờ đi kèm, mà không để ở kho này, thưa ông. Hình như bên nhà bếp giữ một bản sao, viết cũng bằng cái lối ký hiệu ấy. Con chữ nghĩa không rành, chỉ biết đếm vạch thôi."
      },
      {
        "speaker": "Cao Minh",
        "text": "Bổn tọa không cần mở rương. Bổn tọa chỉ cần biết, ai trong nhà này còn đọc được lối chữ không phải để cho người ngoài đọc ấy."
      },
      {
        "speaker": "Quản kho",
        "text": "Dạ, cuốn sổ kia thì mỗi tháng có người của phủ xuống coi, thưa ông. Người đó tới lúc tối, đi lúc chưa sáng. Bốn mươi năm giữ kho, con chưa từng thấy rõ mặt ông ta."
      }
    ],
    "choices": [
      {
        "id": "inspect_seals",
        "text": "Xem kỹ hàng dấu niêm trên rương thuốc và ghi nhớ thứ tự của chúng.",
        "next": "lh_servants",
        "effects": {
          "cluesHuaGiaDelta": 2
        }
      },
      {
        "id": "ask_late_dose",
        "text": "Hỏi sâu về lần thuốc đắng tới trễ ở Tây Viện năm xưa.",
        "next": "lh_servants",
        "effects": {
          "cluesHuaGiaDelta": 1
        }
      }
    ]
  },
  "lh_servants": {
    "id": "lh_servants",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Người giữ tên nàng",
    "backgroundId": "long-hai-corridor",
    "location": "Hành lang biệt thự Hứa Gia, Long Hải",
    "companions": [
      "ba_nam_lien"
    ],
    "link": {
      "id": "danh",
      "phase": "identified"
    },
    "objective": "classify_servants",
    "narration": [
      "Cao Minh tìm gặp bà Năm Liên vào lúc nhà bếp vừa dọn xong bữa trưa, khi hành lang dãy ngang vắng người qua lại nhất. Bà đã đứng đợi ở khúc quanh hành lang từ lúc nào, tay ôm chặt một bọc vải lót đã sờn, như thể bà biết trước sẽ có người tới hỏi, và đã ôm bọc vải ấy đi đi lại lại trong bụng suốt mấy hôm nay. Bà là người hầu già nhất còn lại trong căn nhà này. Thấy Cao Minh, bà không chạy, cũng không quỳ — bà chỉ nhìn hắn rất lâu, như cân nhắc xem người khách lạ này có đáng để bà đánh cược nốt quãng đời còn lại hay không.",
      "Trong bọc vải là một tập giấy mỏng. Bà mở ra một trang ghi chép cũ của nhà bếp, nơi góc giấy còn chép tay ba chữ: Hứa Tiểu Lan. Bà nói, bà từng nhìn thấy gia phả của Hứa Gia — ở đó, ba chữ ấy bị gạch đi bằng một nét mực khác, lạnh và đều, như gạch bỏ một món nợ đã thanh toán xong. Còn nét chữ trên trang giấy này run và vội, là nét của người chép lén. Bà chép lại từ năm cô chủ mới bị đưa ra Long Hải, chép vào góc sổ bếp — chỗ sổ sách tầm thường nhất, nơi không ai buồn kiểm tra — vì bà sợ một ngày nào đó, trong căn nhà này sẽ không còn một chỗ nào còn ghi đúng tên cô nữa.",
      "Bà kể: nhà họ Hứa đối với bên ngoài vẫn nói cô chủ còn sống, đang dưỡng bệnh. Nhưng trong gia phả — cuốn sổ quyết định ai là người của dòng họ, ai được thờ cúng, ai được đứng tên — cô chủ đã bị gạch từ lâu. Người bị gạch tên trong gia phả mà vẫn còn sống, thì sống cũng như không: không ai phải hỏi ý nàng, không ai phải khai báo về nàng, nàng có biến mất khỏi cõi đời này thì sổ sách cũng đã khai tử nàng xong xuôi từ trước. Gạch một cái tên là bước đầu tiên và rẻ nhất để biến một con người thành một vật chứa.",
      "Bà kể thêm cách căn nhà này giữ cho việc xóa tên được bền: trong nhà, không ai được gọi cô chủ bằng tên. Người mới vào làm, hễ gọi một lần Hứa Tiểu Lan là bị quản gia sửa ngay — gọi cô chủ, gọi cô bệnh, gọi gì cũng được, trừ cái tên. Lâu dần, cái tên thành thứ chỉ còn tồn tại trong bụng người già như bà và trong góc cuốn sổ bếp. Bà nói, có những đêm bà tự gọi thầm tên cô một mình trong buồng, như người ta gọi tên người đã khuất — gọi để chính tai mình còn nhớ âm thanh của nó, vì bà sợ tới một ngày bà cũng quên mất cách đọc ba chữ ấy cho đúng.",
      "Bà kể thêm một việc nữa, giọng hạ xuống thật thấp. Con Thu Nguyệt — đứa nhỏ chạy việc trong nhà, vẫn bị người ta nghi là tai mắt của quản gia — mấy hôm trước lén dúi cho bà một tờ danh sách đóng gói của rương thuốc theo hầu cô chủ từ Tây Viện sang. Bà không đọc được: tờ danh sách không viết bằng chữ thường, mà bằng một lối ký hiệu tính toán của dân thương hồ. Bà giữ nó, vì linh cảm rằng một người viết được như thế thì không phải người điên, cũng không phải người sắp chết. Sáng nay ở kho thuốc, Cao Minh đã thấy tận mắt hàng dấu niêm trên rương và lối ký hiệu giống hệt — tờ giấy của bà và chiếc rương kia là hai đầu của cùng một ổ khóa.",
      "Bà còn nhớ ngày cô chủ được đưa từ Tây Viện ra đây. Cô tới vào một đêm mưa, nằm ngủ li bì trong xe, tay ôm chặt một chiếc khăn tay thêu dở — vật duy nhất người ta cho cô mang theo. Tỉnh dậy sáng hôm sau trong gian phòng lạ, câu đầu tiên cô hỏi bà không phải đây là đâu, cũng không phải cha cô đâu. Cô hỏi: ở đây, có ai biết tên của con không. Bà Năm nghe câu ấy mà khóc. Một đứa trẻ mới lên bảy, vừa tỉnh dậy ở một nơi giam lỏng, điều đầu tiên nó cần biết là còn ai trên đời gọi đúng tên nó hay không. Bà đã trả lời: có, bà biết. Và từ hôm đó, giữ cái tên ấy thành việc của đời bà.",
      "Bà nói bà không biết tờ danh sách kê những gì. Nhưng con Thu Nguyệt lúc dúi giấy cho bà, tay nó run, miệng nó nói một câu mà bà nhớ mãi: nó nói, trong rương không phải chỉ có thuốc. Rồi nó không dám nói nữa, vì tới giờ thay dầu đèn, cả nhà phải về vị trí. Cao Minh nghe tới đó thì nhìn ra hành lang: người gác ở đầu dãy vẫn đứng yên, một tay ôm lấy cánh tay vừa bị mượn hôm trước, như người ôm một vết thương không phải của mình mà cũng không phải của ai khác.",
      "Cao Minh nhìn bà, nhìn người gác, rồi nhìn về phía gian phòng trong cùng. Ở thế giới của hắn, một tông môn muốn hủy một đệ tử cũng bắt đầu đúng như thế này: gạch tên khỏi sổ, trước khi đụng tới người. Tên mất trước, người mất sau — vì một kẻ không còn tên thì không ai phải hỏi ý, cũng chẳng ai phải khai báo khi hắn biến mất. Căn nhà này làm y hệt, chỉ khác là giấy của nó nhiều lớp hơn: gia phả gạch, thầy thuốc ký, quản gia đọc. Còn người đàn bà già này, suốt bao nhiêu năm, một mình giữ lại ba chữ trong góc một cuốn sổ bếp. Hắn nhìn bà thêm một lúc. Trong cái nhà toàn người bị giật dây này, bà là người duy nhất còn tự làm việc của mình."
    ],
    "dialogue": [
      {
        "speaker": "Bà Năm Liên",
        "text": "Dạ, thưa ông… Tôi giữ tờ giấy này lâu quá, lâu đến nỗi suýt quên mất vì sao mình không dám đốt. Nhị phu nhân ngày xưa từng cứu tôi một lần. Tôi không có gì trả, chỉ còn giữ được cái tên của cô chủ… cho đến hôm nay."
      },
      {
        "speaker": "Cao Minh",
        "text": "Sổ của chúng gạch thì mặc chúng. Nàng còn thở, còn nói — chưa tới lượt một nét mực định đoạt."
      },
      {
        "speaker": "Bà Năm Liên",
        "text": "Dạ… ông nói vậy, chứ trong cuốn gia phả ở gian thờ, tên cô đã bị gạch rồi, thưa ông. Gạch bằng mực của phủ Chợ Lớn đưa xuống, có đóng dấu hẳn hoi. Tôi chữ nghĩa không có, chỉ biết giữ lại được có ba chữ này thôi."
      },
      {
        "speaker": "Cao Minh",
        "text": "Ba chữ là đủ. Còn một người chép đúng, thì cái tên còn. Bà giữ được từng ấy năm một mình — từ nay có thêm một người biết chỗ giấu."
      },
      {
        "speaker": "Bà Năm Liên",
        "text": "Dạ, còn một chuyện tôi chưa dám nói với ai. Hồi cô mới bị đưa ra đây, có đêm cô khóc, cô hỏi tôi: bà ơi, sao trong nhà này ai cũng gọi con là cô chủ, không ai gọi tên con. Tôi nghe mà tôi đứt ruột, thưa ông. Từ đó tôi mới chép lén cái tên ấy vào sổ bếp."
      },
      {
        "speaker": "Cao Minh",
        "text": "Gọi đi. Trước mặt bổn tọa, bà không cần gọi thầm. Tên người ta, sinh ra là để gọi thành tiếng."
      }
    ],
    "choices": [
      {
        "id": "protect",
        "text": "Ghi nhận lời khai của bà Năm Liên và bảo vệ những người đang bị cưỡng ép.",
        "next": "lh_register_room",
        "effects": {
          "cluesHuaGiaDelta": 2,
          "lanTrustDelta": 2
        }
      },
      {
        "id": "separate",
        "text": "Tách người tự nguyện giữ cửa khỏi người bị điều khiển, giữ nguyên mọi chứng cứ.",
        "next": "lh_register_room",
        "effects": {
          "cluesHuaGiaDelta": 2
        }
      }
    ]
  },
  "lh_register_room": {
    "id": "lh_register_room",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Gian gia phả",
    "backgroundId": "register-room",
    "location": "Gian lưu trữ gia phả, biệt thự Hứa Gia",
    "companions": [
      "npc_servant_elder_male"
    ],
    "narration": [
      "Gian lưu trữ nằm kề bên từ đường, là căn phòng khô nhất của biệt thự: nền lát gạch cao, bốn phía là tủ gỗ đóng kín, trong không khí có mùi long não và giấy cũ. Muốn vào đây phải qua quản gia, mà quản gia thì chỉ đồng ý sau khi Cao Minh nói một câu rất nhẹ: hắn là khách của phủ, muốn thắp cho tổ tiên Hứa Gia một nén nhang và xem qua gia phả để biết mà xưng hô cho phải phép. Bài bản lễ nghĩa là thứ căn nhà này không từ chối được, vì chính nó sống bằng bài bản.",
      "Lão thư ký giữ gian này là một ông già gầy, đeo kính lão, cả đời chỉ làm một việc là chép sổ. Ông mở tủ bằng chìa đồng, lấy ra cuốn gia phả chính của chi Long Hải: bìa bọc lụa điều đã sờn, gáy đóng chỉ. Các trang trước ghi chép nhiều đời của họ Hứa ở đất Nam Kỳ — sinh, tử, hôn thú, chức tước — nét chữ thay đổi theo từng đời thư ký mà quy củ không đổi. Rồi lão lật tới trang của thế hệ gần nhất, và tay lão bắt đầu run trước khi mắt Cao Minh kịp nhìn thấy gì.",
      "Hai bên tủ gia phả là những kệ thấp hơn, chứa sổ sách của các chi và các đời quản gia: sổ cưới hỏi, sổ tang ma, sổ phân chia gia sản. Cao Minh để ý một ngăn riêng ở góc trong, khóa kỹ hơn các ngăn khác, trên cánh cửa ngăn có dán một tờ giấy ghi hai chữ: sổ đóng. Lão thư ký nhìn theo ánh mắt hắn, giọng càng nhỏ: đó là sổ của những người đã bị gạch tên qua các đời — người bị gạch thì trang của họ bị cắt ra khỏi gia phả chính, đem đóng riêng vào đó, để dòng họ còn nhớ mà… không nhớ. Căn nhà này có cả một ngăn tủ dành cho những con người đã bị biến thành khoảng trống, và ngăn tủ ấy đầy hơn hắn tưởng.",
      "Trên kệ thấp ấy còn một cuốn sổ bìa vải mỏng nhất: sổ ghi người làm của biệt thự. Cao Minh giở qua — tên người, việc làm, quê quán, từng dòng ngắn ngủn. Sáu, gác cổng, nhà ở mé sông, vợ mới sinh con thứ hai. Tư Rỗ, làm vườn, cha già ở quê, mắt đã lòa. Phụng, hầu phòng, con gái gửi ở quê, năm nay tới tuổi vào trường làng. Mụ coi vườn sau, già nhất nhà, vào làm từ thuở còn con gái — hàng cau sau vườn là một tay mụ trồng. Hắn nhớ hết.",
      "Tên của Hứa Bổn Hoả đứng đầu trang, nét chữ son còn tươi. Dưới đó, hàng của con gái ông — Hứa Tiểu Lan, sinh năm 1882 — đã bị gạch ngang bằng một nét mực đen, dài, đều và lạnh, kéo từ đầu tên tới cuối tên không hề ngập ngừng. Cạnh nét gạch có một con dấu nhỏ hình vuông, mực đỏ đã khô: dấu kiểm của Giới Phòng. Không ghi ngày mất. Không ghi nguyên nhân. Chỉ gạch, và đóng dấu — như người ta nghiệm thu một món hàng đã xử lý xong.",
      "Nghiêng trang giấy ra ánh sáng, dưới nét mực đen đều và lạnh ấy còn thấy mờ mờ một hàng chữ cũ hơn đã bị cạo đi — như thể trang này từng ghi một điều gì khác về nàng, rồi bị cạo, viết lại, rồi mới gạch. Việc xóa một con người ở nhà này không làm một lần. Nó làm thành từng lớp, như người ta trát vôi lên một bức vách có chữ nghĩa: lớp này khô lại trát lớp khác, cho tới khi không ai còn đọc được chữ đầu tiên là chữ gì. Chỉ có điều bức vách này là một đời người, và người đó vẫn đang thở ở gian phòng trong cùng của chính căn nhà này.",
      "Cao Minh lật ngược lại nhiều đời trước. Hắn tìm, và hắn thấy: trong gia phả này, nàng không phải người con gái đầu tiên bị gạch tên như thế. Rải rác qua các thế hệ, cứ vài chục năm lại có một cái tên nữ bị gạch bằng cùng một lối mực đều và lạnh, cùng một thứ dấu đỏ nhỏ đóng cạnh. Có tên còn ghi thêm hai chữ nhỏ: táng thất — chết yểu. Có tên không ghi gì cả. Căn nhà này, hay đúng hơn là cái họ này, đã làm việc gạch tên người sống từ rất lâu trước khi Tiểu Lan ra đời. Nàng chỉ là người mới nhất trong một hàng dài những cái tên bị biến thành khoảng trống.",
      "Lão thư ký đứng bên, mồ hôi rịn trên trán dù phòng khô và mát. Ông nói nhỏ, như sợ cuốn sổ nghe thấy: nét gạch đó không phải tay ông. Năm ấy, phủ Chợ Lớn gửi xuống một phong thư niêm kín kèm con dấu, dặn ngày giờ mở sổ, gạch tên, đóng dấu kiểm, rồi khóa sổ lại. Ông làm theo. Ông nói, ông còn nhớ rõ hôm ấy tay ông cầm bút mà như có người cầm tay ông viết — ông tưởng mình sợ quá nên run. Mãi sau này ông mới biết, trong căn nhà này, có những việc tay người ta làm mà không phải ý người ta.",
      "Ra khỏi gian gia phả, Cao Minh đã có thêm một mảnh của bức tranh: con dấu đỏ nhỏ ấy là của Giới Phòng — nơi giữ luật lệ và sổ sách của họ Hứa, đóng dấu kiểm lên cả những việc như gạch tên một người sống. Hắn chưa biết trên nó còn những ai. Chỉ biết rằng bàn tay vừa gạch tên nàng, từ nay đã có một cái tên để hắn nhớ tới.",
      "Trước khi khóa tủ, lão thư ký bỗng níu tay áo Cao Minh, thì thầm một việc mà ông nói ông chưa từng nói với ai: người chép sổ như ông, ai cũng có một cuốn nháp riêng — chép nháp trước, chép thật sau. Cuốn nháp của ông còn giữ ở nhà ngang, trong một cái hốc trên mái, bọc dầu cẩn thận. Trong nháp có cả những trang đã bị gạch, chép từ trước khi gạch. Ông không dám đưa ra bây giờ — đưa là chết cả nhà ông — mà ông cũng không dám đốt. Ông nói: tui chép chữ cả đời, tui biết chữ bị gạch thì người ta còn cãi được là chưa từng có. Chữ trong nháp còn, thì cái tên đó còn cãi được. Ông buông tay áo hắn ra, run rẩy khóa tủ lại, như vừa tự tay ký vào một bản án treo của chính mình."
    ],
    "dialogue": [
      {
        "speaker": "Lão thư ký",
        "text": "Dạ, thưa ông, sổ này con chép từ hồi còn để chỏm. Ai sinh ai mất con đều ghi đủ, không dám sót một người. Chỉ có… chỉ có cái nét gạch kia là không phải bụng con muốn gạch, thưa ông."
      },
      {
        "speaker": "Cao Minh",
        "text": "Bổn tọa không hỏi bụng ngươi. Bổn tọa hỏi tay ngươi: hôm gạch tên nàng, tay ngươi có run không?"
      },
      {
        "speaker": "Lão thư ký",
        "text": "Dạ… run lắm. Mà lạ, thưa ông, tay thì run mà nét gạch lại đều. Đều như kẻ thước. Tới giờ con nghĩ lại vẫn còn sợ."
      },
      {
        "speaker": "Cao Minh",
        "text": "Sợ là phải. Nhớ lấy: nét gạch đều như thế, không phải nét của người đang sợ. Là nét của kẻ không hề xem đó là một con người."
      },
      {
        "speaker": "Lão thư ký",
        "text": "Dạ, thưa ông, trong ngăn sổ đóng kia… con không dám nói có bao nhiêu người. Con chỉ biết, đời con chép sổ, con gạch tên người ta còn nhiều hơn con ghi tên trẻ mới sinh. Ông nói coi, cái nghề của con, nó là nghề gì vậy, thưa ông?"
      },
      {
        "speaker": "Cao Minh",
        "text": "Nghề của ngươi là nghề giữ chữ. Kẻ ra lệnh gạch mới là kẻ có tội. Còn ngươi — lo mà giữ cho kỹ cuốn nháp trên mái nhà ngang. Sẽ có ngày người ta cần đến nó, và ngày đó ngươi không được vắng mặt."
      }
    ],
    "choices": [
      {
        "id": "memorize_page",
        "text": "Ghi nhớ từng chi tiết của trang gia phả và hàng dấu đỏ Giới Phòng.",
        "next": "lh_kitchen",
        "effects": {
          "cluesHuaGiaDelta": 1
        }
      },
      {
        "id": "press_clerk",
        "text": "Hỏi lão thư ký về phong thư niêm kín từ Chợ Lớn năm ấy.",
        "next": "lh_kitchen",
        "effects": {
          "cluesHuaGiaDelta": 2,
          "lanMaterInfluenceDelta": 1
        }
      }
    ]
  },
  "lh_kitchen": {
    "id": "lh_kitchen",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Nhà bếp nếm hai lần",
    "backgroundId": "kitchen",
    "location": "Nhà bếp biệt thự Hứa Gia, Long Hải",
    "companions": [
      "ba_bay"
    ],
    "narration": [
      "Căn bếp nằm tách khỏi nhà chính một khoảng sân sau, mái ngói thấp, khói bếp quanh năm không dứt — theo lời quản gia, vì cô chủ thân thể yếu, bếp phải đỏ lửa suốt ngày để lúc nào cũng có nước nóng và cháo nóng. Bà Bảy, người đầu bếp chính, đã đứng bếp cho nhà này hơn hai mươi năm; bà to béo, mặt đỏ au vì hơi lửa, tiếng nói sang sảng — là người ồn ào nhất trong một căn nhà im lặng đến rợn người.",
      "Cao Minh đứng ở cửa bếp một lúc lâu, xem bà nấu bữa chiều. Hai thanh kiếm lơ lửng sau vai hắn, bóng đổ dài trên nền gạch — mà không một ai trong bếp ngẩng đầu lên nhìn lần thứ hai. Thằng nhỏ bóc tỏi không ngẩng. Bà Bảy không ngẩng. Người thường trông thấy cảnh ấy phải đứng sững mà nhìn; người nhà này thì không. Hắn ghi nhớ điều đó như ghi một triệu chứng: căn nhà này không chỉ mượn tay người ta — nó đã lấy luôn cả cái giật mình của người ta.",
      "Và rồi hắn thấy điều mà người nhà này không còn để ý nữa, vì nó đã lặp quá nhiều năm: mỗi món nấu xong, bà Bảy nếm hai lần. Lần thứ nhất, bà múc một muỗng nhỏ, thổi, nếm, gật gù — đó là cái nếm của người đầu bếp thử mặn nhạt, thử độc theo lệ nhà giàu. Rồi bà đặt muỗng xuống. Và đúng mười nhịp thở sau, tay bà lại tự cầm muỗng lên, múc đúng chỗ cũ trong nồi, nếm lại lần thứ hai — với vẻ mặt hoàn toàn trống rỗng. Lần nếm thứ hai không phải của bà.",
      "Điều rợn nhất là sự đồng bộ. Khi tay bà Bảy tự nếm lần hai, thì cùng lúc đó, tay thằng nhỏ phụ việc khựng lại giữa một củ tỏi, mắt đờ ra đúng một khắc rồi lại bóc tiếp; ngoài sân, người phu gánh nước khựng lại một nhịp giữa bước; trong hành lang, cô hầu đang quét nhà dừng chổi đúng một khắc; cả căn nhà như cùng nuốt xuống một cái gì đó, cùng một lúc, qua tay của nhiều người khác nhau. Bà Bảy đặt muỗng xuống, tỉnh lại, lại cười nói sang sảng như không có gì — bà không biết mình vừa nếm lại. Hay nói đúng hơn: bà biết, mà không dám biết thành lời.",
      "Bữa chiều hôm ấy, phần ăn dọn cho khách có một đĩa thịt kho vàng óng, trứng luộc ngả màu nâu cánh gián nằm lẫn trong thịt. Cao Minh nhìn đĩa thức ăn một lúc, gắp một miếng trứng lên xem như xem một thứ đồ lạ, rồi hỏi tên món. Bà Bảy cười sang sảng: thịt kho hột vịt — nhà nào ở xứ này cúng giỗ cũng có; bà nói ông khách hỏi lạ như người trên trời rớt xuống. Hắn ăn hai miếng, gật đầu một cái rất thật lòng: thịt phàm trần kho với nước dừa, vậy mà có thứ vị mà đan dược thượng phẩm không có. Hắn không nói thêm. Nhưng đó là lần đầu tiên kể từ khi rơi xuống chốn này, hắn ăn một thứ của thế giới này mà không phải vì phép lịch sự.",
      "Bà Bảy còn kể một chuyện cũ mà bà nói bà giữ kín vì nói ra cũng không ai tin: bà vào nhà này từ hồi nhị phu nhân còn sống, chính tay bà nấu tiệc cưới của nhị phu nhân kia. Bà nhớ phu nhân thích ăn canh chua cá bông lau, thích vị me chua thanh. Còn thực đơn hàng tháng gửi xuống cho cô chủ bây giờ — bà liếc quanh rồi hạ giọng — trong đó cấm hẳn mấy món phu nhân từng thích, không ghi lý do. Bà nói, nấu ăn cho người ta mà phải tránh đúng những món mẹ người ta từng nấu cho ăn, thì đó không phải thực đơn chữa bệnh. Đó là người ta muốn đứa nhỏ này quên dần cả mùi vị của nhà mình. Bà nói xong thì quay đi quấy nồi cháo, vai rung — không rõ vì hơi lửa hay vì điều gì khác.",
      "Bà kể, phần ăn của cô chủ được nấu riêng trong một nồi đất nhỏ, cân đong từng món theo một tờ thực đơn từ Chợ Lớn gửi xuống, thay đổi theo tháng, không được tự ý thêm bớt. Trong thực đơn có một món không ghi tên, chỉ ghi ký hiệu: một thứ thuốc đắng đen, mỗi ngày một chén, nấu lẫn vào cháo buổi sớm. Bà Bảy nói bà từng một lần quên bỏ — chỉ một lần, hồi mới ra Long Hải — và đêm đó cô chủ lên cơn, la hét, tay chân co giật đến gần sáng. Từ đó bà không dám quên nữa. Bà nói câu ấy mà tay vẫn thoăn thoắt nhặt rau, như thể tội lỗi và bữa cơm trong nhà này đã trộn vào nhau từ lâu, không gỡ ra được nữa.",
      "Hắn nhìn nồi cháo riêng của Tiểu Lan đang sôi nhỏ lửa. Nồi cháo riêng, chén thuốc đúng giờ, kho thuốc khóa hai lớp, bếp đỏ lửa quanh năm: cả một biệt thự vận hành như một trại nuôi, mà người trong trại tưởng mình đang chăm bệnh. Hắn không lạ cách nuôi vật chứa — tông môn nào ở thế giới của hắn mà chẳng có một cái lồng tử tế hơn thế này. Cái lạ là người trong lồng ai cũng tưởng mình là người nhà.",
      "Lúc ra khỏi bếp, bà Bảy bỗng gọi với theo, giọng nhỏ hẳn đi, không còn sang sảng: bà nói ông khách coi chừng, ở nhà này, ăn gì uống gì cũng phải coi chừng, không phải sợ độc — độc thì bà còn biết đường tránh — mà sợ cái không phải độc. Bà chỉ nói được tới đó, vì chuông điểm giờ trong nhà vừa reo, và bà phải quay lại bếp, như mọi người khác trong căn nhà này phải quay về vị trí của mình khi chuông reo.",
      "Chiếc muỗng dùng để quậy vị thuốc đắng trong nồi cháo riêng được treo riêng trên một cái móc có khóa, chìa khóa do quản gia giữ. Bà Bảy kể, có lần bà tò mò chấm đầu lưỡi vào muỗng sau khi quậy thuốc: đắng thì đắng thật, mà cái lạ là sau đó suốt một canh giờ, hai tay bà tê dại, cầm dao thái rau mà như tay người khác cầm. Từ đó bà không dám thử nữa. Cao Minh nghe, ghi nhớ một điều: thứ thuốc ấy người thường chạm vào đã tê tay — nó không phải thuốc cho người bệnh uống để khỏe lên. Nó là thức cho thứ trong người bệnh ăn, để nó chịu khó làm việc thay nàng."
    ],
    "dialogue": [
      {
        "speaker": "Bà Bảy",
        "text": "Dạ, thưa ông, ông đừng cười, bếp này con nấu hai mươi năm, món nào con nếm một lần là biết mặn nhạt. Mà không hiểu sao mười năm nay, món nào con cũng phải nếm tới hai lần mới yên. Tay nó tự nếm, thưa ông. Con nói ra, người ta cười con già lẩm cẩm."
      },
      {
        "speaker": "Cao Minh",
        "text": "Bổn tọa không cười. Lần nếm thứ hai — vào đúng khắc nào, ngươi nhớ không?"
      },
      {
        "speaker": "Bà Bảy",
        "text": "Dạ… cùng một khắc với cả nhà này, thưa ông. Giờ nghĩ lại mới thấy: hễ tới khắc đó là sân trước sân sau đều im đi một chút. Như cả nhà cùng nín thở vậy."
      },
      {
        "speaker": "Cao Minh",
        "text": "Nhớ kỹ khắc đó. Sau này nó còn dùng được."
      },
      {
        "speaker": "Bà Bảy",
        "text": "Dạ, thưa ông, con nói ông nghe một câu này rồi ông đừng nói lại với ai: con nấu cho cô chủ ăn mười mấy năm, mà con chưa từng được nấu cho cô một bữa theo ý cô muốn ăn. Thực đơn người ta đưa xuống, con nấu y như vậy. Có bữa cô chỉ ăn hai muỗng rồi thôi. Con nhìn mà con xót, thưa ông."
      },
      {
        "speaker": "Cao Minh",
        "text": "Muốn nấu cho nàng một bữa theo ý nàng? Thì nấu. Hôm nào bếp này nổi lửa vì nàng chứ không vì tờ giấy kia, bổn tọa ghé ăn ké một chén."
      }
    ],
    "choices": [
      {
        "id": "taste_medicine",
        "text": "Nếm thử vị thuốc đắng trong nồi cháo riêng của Tiểu Lan để phân tích.",
        "next": "lh_lan_knots",
        "effects": {
          "cluesHuaGiaDelta": 1
        }
      },
      {
        "id": "ask_dose_keeper",
        "text": "Hỏi ai là người định liều thuốc đắng và thay thực đơn mỗi tháng.",
        "next": "lh_lan_knots",
        "effects": {
          "cluesHuaGiaDelta": 1,
          "lanMaterInfluenceDelta": 1
        }
      }
    ]
  },
  "lh_lan_knots": {
    "id": "lh_lan_knots",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Cuộn chỉ đếm ngày",
    "backgroundId": "tieu-lan-room",
    "location": "Phòng Hứa Tiểu Lan, biệt thự Long Hải",
    "companions": [],
    "narration": [
      "Chiều ấy, Cao Minh vào phòng Tiểu Lan thì thấy nàng đang ngồi bên khung thêu đặt cạnh cửa sổ. Khung thêu căng một tấm lụa trắng mới thêu được vài mũi hoa dở dang — thêu thùa là việc duy nhất trong ngày của nàng mà không ai lên thực đơn, không ai định giờ. Nhưng thứ khiến hắn dừng mắt không phải tấm lụa. Bên cạnh khung thêu, vắt trên thành ghế, là một cuộn chỉ lụa dài đã thắt đầy những nút thắt nhỏ, nút nọ nối nút kia dày như hạt chuỗi, và cạnh cuộn chỉ là một xấp giấy nhỏ cắt vụng, chi chít chữ viết tay của chính nàng.",
      "Nàng không giấu. Nàng cầm cuộn chỉ lên, đưa cho hắn xem như đưa một món đồ rất đỗi bình thường của đời mình: mỗi nút là một ngày. Từ ngày bị đưa ra biệt thự Long Hải này, ngày nào nàng còn tỉnh táo đến tối, nàng thắt một nút. Có những đoạn chỉ dài trơn tru không nút — đó là những tuần nàng không nhớ gì cả, tỉnh dậy thì chỉ đã dài thêm, có ai đó — hoặc thứ gì đó — đã sống thay nàng những ngày ấy, và tới lúc nàng tỉnh, nàng thắt bù một nút lớn cho cả quãng, để những ngày đó, ít nhất trên cuộn chỉ, không bị coi như chưa từng tồn tại.",
      "Cửa sổ phòng nàng nhìn ra vườn sau và xa hơn là một dải biển hẹp qua kẽ lá. Rèm cửa quanh năm buông gần kín, vì thầy thuốc dặn người bệnh phong phải tránh gió tránh nắng. Nàng nghe tiếng biển nhiều hơn thấy biển. Nàng nói, có những hôm trái gió, tiếng sóng rõ lắm, nàng ngồi đếm nhịp sóng như đếm một thứ thời gian khác — thời gian của ngoài kia, nơi ngày tháng trôi đi mà không cần ai cho phép. Trong phòng nàng, thời gian là thứ bị chia phần: giờ uống thuốc, giờ điểm danh, giờ thay đèn. Chỉ có tiếng sóng là không ai chia phần được, và nàng giữ nó làm của riêng, như giữ cuộn chỉ này vậy.",
      "Còn xấp giấy vụn là những lời nàng viết cho chính mình của ngày mai. Chữ nàng viết đẹp, nét bút của người được dạy dỗ tử tế, mà nội dung thì nhỏ nhặt đến xót xa: sáng nay bà Năm dặn không uống chén thuốc thứ hai khi bụng đói. Người khách lạ tên là Cao Minh, đừng quên. Hôm qua đã hứa may lại đường viền áo cho Thu Nguyệt. Nàng viết mọi thứ, kể cả những điều một người bình thường không bao giờ phải viết, vì nàng không còn tin vào ngày mai của trí nhớ mình nữa. Trí nhớ của nàng, nàng nói, như cái rá thưa: giữ được chuyện lớn — tên mình, tên mẹ, chuyện nhà — mà chuyện nhỏ thì rơi mất dần, rơi không tiếng động, rơi đến mức nàng không biết mình đã mất những gì.",
      "Nàng chỉ cho hắn xem thêm một chi tiết mà thoạt đầu hắn không để ý: phần lớn nút thắt bằng chỉ trắng thường, nhưng rải rác có những nút bằng chỉ đỏ — rất ít, cách nhau rất xa. Nàng nói, nút đỏ là những ngày nàng đã chống lại nó và thắng — thắng theo cách của nàng: giữ được một việc không làm, một chữ không ký, một câu không nói. Đếm hết cuộn chỉ hơn bốn trăm nút, số nút đỏ chỉ hơn hai chục. Nàng cười khi nói điều đó, một nụ cười không chút tự thương: ít thì ít, mà nút nào cũng là của tôi, không phải của nó. Giữa những nút đỏ còn có đúng một nút đen — nàng nói đó là ngày giỗ mẹ nàng. Hắn hỏi giỗ là gì. Nàng nhìn hắn một lúc, như cân nhắc xem hắn đùa hay thật, rồi giảng cho hắn nghe, chậm rãi: ngày giỗ là ngày người ta cúng cơm, thắp nhang cho người đã mất, mỗi năm một lần; nhà nào còn nhớ thì còn bày mâm. Hắn nghe, gật đầu: ở thế giới của hắn, người chết là hết, chẳng ai bày mâm cho ai. Rồi nàng nói tiếp, giọng nhỏ đi: năm nào tới gần ngày giỗ ấy, trí nhớ nàng cũng mờ đi như có người cố tình phủ sương lên đúng chỗ ấy, đến mức nàng phải nhờ bà Năm nhắc mới biết ngày giỗ của chính mẹ mình.",
      "Nàng kể cho hắn nghe cái giá, bằng giọng bình thản của người đã quen trả giá. Thứ trong người nàng không lừa nàng. Đó mới là điều đáng sợ nhất của nó: mỗi khi nàng không nghe theo một mệnh lệnh nó đưa xuống, nó nói trước, rõ ràng, trong đầu nàng, rằng nàng sẽ phải quên đi một thứ gì — và nó không bao giờ nói sai. Năm ngoái, một lần nó bắt tay nàng ký tên vào một tờ sổ của nhà — nàng không biết tờ sổ đó là gì, chỉ biết không thể ký — nàng giữ tay mình lại suốt một đêm. Sáng hôm sau, nàng tỉnh dậy và phát hiện mình không còn nhớ được đoạn kết của câu chuyện bà Năm kể tối hôm trước, dù bà đã kể câu chuyện ấy cho nàng nghe suốt từ bé. Bà kể lại. Nàng viết đoạn kết ra giấy, cất kỹ. Tới giờ nàng vẫn đọc lại đoạn kết ấy như đọc chuyện của người khác.",
      "Nàng nói: tôi không giận nó lấy mất. Tôi chỉ sợ một điều — là có những thứ nó đã lấy mà tôi không hề biết để mà giận. Cuộn chỉ này, xấp giấy này, là cách nàng tự canh giữ phần người của mình: nếu một ngày nào đó nàng quên cả việc mình từng chống lại, thì ít nhất nút chỉ và nét chữ còn đó, làm chứng rằng đã từng có một người con gái ở đây, ngày ngày giành lại chính mình từng mẩu nhỏ một, và biết rõ mình đang mất gì.",
      "Cao Minh cầm cuộn chỉ trên tay rất lâu. Hắn đã gặp những kẻ thù mạnh hơn thứ này nhiều — nhưng chưa từng gặp một cách giam cầm nào tỉ mỉ đến thế: không xiềng xích, không đòn roi, chỉ lấy đi của tù nhân từng mẩu ký ức nhỏ, đủ nhỏ để không ai ngoài nàng nhận ra, đủ đều để một đời người bị gặm hết mà bề ngoài vẫn nguyên vẹn. Và cô gái ngồi trước mặt hắn, mười tám tuổi, bệnh tật đầy mình, tên bị gạch khỏi gia phả, vẫn thắt nút đếm từng ngày mình còn là mình — như một người giữ đèn trong gió, biết gió sẽ không ngừng thổi."
    ],
    "dialogue": [
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài, ngài đừng nhìn tôi như nhìn một người sắp chết. Tôi vẫn còn đếm được ngày của mình, như thế này. Ngày nào tôi còn thắt được một nút, ngày đó tôi còn là tôi."
      },
      {
        "speaker": "Cao Minh",
        "text": "Đếm được bao nhiêu rồi?"
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Dạ, từ ngày ra tới biệt thự này, tôi thắt được hơn bốn trăm nút. Còn những ngày không có nút… tôi không đếm. Đếm làm gì, thưa ngài. Những ngày đó có phải của tôi đâu."
      },
      {
        "speaker": "Cao Minh",
        "text": "Những ngày không có nút, bổn tọa nhớ thay. Nhưng nhớ cho rõ: đó là nhớ của bổn tọa, không phải của nàng. Bổn tọa kể lại thì nàng nghe như nghe chuyện người khác — đừng bao giờ nhận nó làm ký ức của mình."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài… ngài là người đầu tiên nói với tôi câu đó. Ai cũng bảo: quên thì thôi, có gì đâu. Chỉ có ngài nói: quên là mất, và mất thì phải gọi đúng là mất."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài, tôi hỏi ngài một câu không phải phép, ngài đừng giận. Ở cái nơi ngài từ đó tới đây — ở đó, người ta có bị mất tên như tôi không?"
      },
      {
        "speaker": "Cao Minh",
        "text": "Ở nơi của bổn tọa, kẻ mạnh cướp của kẻ yếu đủ thứ: mạng sống, tu vi, tông môn. Nhưng cướp tên một người để người đó còn sống mà không được làm người — bổn tọa đi khắp các giới, mới thấy lần đầu ở căn nhà này."
      }
    ],
    "choices": [
      {
        "id": "promise_record",
        "text": "Ghi nhớ thay nàng những ngày nàng không thắt được nút — hắn nói như nói một việc đã rồi.",
        "next": "lh_old_servant",
        "effects": {
          "lanTrustDelta": 3
        }
      },
      {
        "id": "ask_first_knot",
        "text": "Hỏi về nút chỉ đầu tiên — ngày nàng bắt đầu đếm.",
        "next": "lh_old_servant",
        "effects": {
          "cluesHuaGiaDelta": 1,
          "lanTrustDelta": 1
        }
      }
    ]
  },
  "lh_old_servant": {
    "id": "lh_old_servant",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Người nhớ chuyện xưa",
    "backgroundId": "long-hai-corridor",
    "location": "Gian nhà ngang phía sau biệt thự Hứa Gia",
    "companions": [
      "npc_servant_elder_male"
    ],
    "narration": [
      "Ở gian nhà ngang phía sau, nơi gia nhân già yếu được cho ở lại dưỡng già thay vì bị trả về quê, có một ông lão ngoài tám mươi mà cả nhà gọi là ông Sáu. Ông vào làm cho họ Hứa từ năm mười bốn tuổi, chèo đò, gánh nước, rồi giữ ngựa, rồi chẳng giữ gì nữa ngoài trí nhớ. Người trong nhà nói ông lẩm cẩm. Nhưng khi Cao Minh ngồi xuống bên chiếc chõng tre của ông, đôi mắt đục của ông nhìn hắn một lúc, rồi sáng lên cái sáng của người chờ câu hỏi này đã rất lâu.",
      "Ông kể về Lâm Ngọc Chi — nhị phu nhân, mẹ của Tiểu Lan. Bà Chi về làm dâu họ Hứa năm mười bảy tuổi, người Chợ Lớn, học chữ Nho lẫn chữ quốc ngữ, tính tình hiền mà không mềm. Bà là người đầu tiên trong nhà nhận ra những điều không ổn: gia nhân thay phiên nhau ngủ mà như không ngủ, sổ sách có những trang chữ không phải tay người trong nhà, và chồng bà — ông Hội đồng Bổn Hoả — mỗi tháng lại vào gian thờ một đêm, sáng ra thì như già thêm một tuổi. Bà Chi không nói to những điều đó. Bà ghi lại. Ông Sáu nói, bà có một cuốn sổ tay riêng, bìa bọc vải dầu, đi đâu cũng mang theo, ngủ cũng để dưới gối.",
      "Cao Minh nghe chuyện của người đàn bà ấy như nghe chuyện của một thế giới khác — mà đúng là một thế giới khác: tang lễ làm trong ba ngày, họ hàng bên ngoại, người giữ ngựa, giấy dầu bọc sổ. Có những từ ông Sáu nói, hắn phải hỏi lại. Hồi hương là gì? Ông lão ngớ ra một lúc rồi mới hiểu vị khách này không biết thật: hồi hương là bị cho về quê, không làm nữa. Hắn gật đầu, ghi nhớ cả từ lẫn việc: ở căn nhà này, 'về quê' là một cách biến mất có giấy tờ đàng hoàng.",
      "Năm cô chủ lên bảy, bà Chi mất. Nhà nói bà mất vì bạo bệnh, tang lễ làm qua loa trong ba ngày, không cho họ hàng bên ngoại vào viếng sâu. Nhưng trước khi mất chừng một tháng, ông Sáu — hồi đó còn giữ ngựa — đã hai lần thấy bà Chi nửa đêm ra dãy nhà kho, tay ôm một bọc vải dầu. Bà đi rất khẽ, không thắp đèn. Lần thứ hai trở về, hai tay bà trống không. Ông hỏi dò một câu, bà chỉ cười và nói: Sáu à, có những thứ giấu cho con nít thì phải giấu ở nơi người lớn không thèm ngó tới. Sau khi bà mất, người của phủ Chợ Lớn xuống lục soát phòng bà suốt mấy tuần, lật từng viên gạch, rạch từng nệm giường. Họ không tìm thấy gì. Hoặc họ tìm thấy, mà ông không biết.",
      "Ông còn nhớ cô chủ hồi nhỏ, trước khi mọi sự đổi khác. Có một mùa hè, khi cô chừng năm tuổi, cả nhà ra Long Hải nghỉ mát ở chính biệt thự này, hồi đó nơi này còn là nhà mát bình thường, có tiếng cười trẻ con. Cô bé con chạy chân trần trên bãi cát, nhặt vỏ ốc, gọi ông là ông Sáu ơi ới từ đầu bãi tới cuối bãi. Rồi mùa đông năm đó, ở Chợ Lớn, nhà làm một cái lễ gì ở Tây Viện mà gia nhân ngoài như ông không được biết — chỉ biết đêm ấy trống trong từ đường đánh suốt đêm, cô bé được bế ra lúc gần sáng, ngủ mê không tỉnh, và từ đó cô ít cười hẳn. Ông nói, người ta bảo sau lễ ấy cô đổ bệnh. Ông thì nói: sau lễ ấy, cái nhà này bắt đầu có những giờ giấc không phải của người. Ông không nói được lễ ấy là lễ gì. Ông chỉ là người giữ ngựa. Nhưng ông nhớ tiếng trống — và nhớ ông Hội đồng, cha cô, đứng ngoài sân từ đường khóc một mình lúc trời chưa sáng, khóc như người vừa tự tay làm một việc không rút lại được.",
      "Kể tới đó, ông Sáu hạ giọng: đêm bà Chi mất, cả nhà không ai thắp đèn mà đèn trong từ đường tự sáng hết một lượt, cháy đến sáng thì tắt cùng một lúc. Từ đêm đó, nhà này bắt đầu có những lệ lạ: thay dầu đèn đúng giờ, điểm danh ban đêm, gia nhân không được tự ý rời vị trí sau trống canh. Người ta nói đó là gia quy mới của ông Hội đồng để tang vợ. Ông Sáu thì nói: từ đêm đó, cái nhà này nó thức. Nó thức tới bây giờ.",
      "Hai điều Cao Minh tự ghi lấy, theo lối của hắn. Một: người đàn bà tên Lâm Ngọc Chi đã thấy cái lưới này trước tất cả, và ghi lại vào một cuốn sổ bọc vải dầu — sổ còn thì là chứng cứ, là chìa khóa. Hai: bà chôn một thứ cho con gái mình ở nơi người lớn không thèm ngó, và người của Bổn Hoả lục tung cả phòng bà mà không thấy — nghĩa là thứ đó nhiều phần còn nguyên ở chỗ cũ. Một người mẹ biết mình sắp chết dùng chút tỉnh táo cuối cùng chừa cho con một con đường. Hắn chưa biết đường đó dẫn đi đâu. Nhưng hắn đã ngửi thấy mùi của nó: mùi vải dầu và mùi đất thấp.",
      "Ông Sáu nắm lấy tay áo Cao Minh trước khi hắn đứng dậy, bàn tay già run mà siết chặt lạ thường. Ông nói, ông già rồi, chẳng giúp được gì, chỉ còn nhớ được chuyện xưa. Nhưng ông dặn: trong nhà này, muốn tìm đồ người chết giấu, đừng tìm ở chỗ cao sang. Tìm ở chỗ thấp hèn nhất, chỗ gia nhân ra vào hằng ngày mà quan khách không bao giờ bước chân tới. Rồi ông buông tay, nhắm mắt, như vừa trút xong một món nợ giữ suốt mười mấy năm.",
      "Ông kể thêm, sau khi bà Chi mất, ông từng một lần đánh bạo hỏi quản gia thời đó — người tiền nhiệm của quản gia bây giờ — rằng nhị phu nhân giấu đồ ở đâu mà người ta lục dữ vậy. Quản gia ấy chỉ cười mà nói: đồ của người chết thì để cho người chết giữ, ai đào lên là người ấy xui. Rồi ít lâu sau, quản gia ấy cũng biến mất khỏi nhà này không một lời từ biệt — sổ gia nhân chỉ ghi hai chữ: hồi hương. Ông Sáu hạ giọng xuống mức thấp nhất: ở cái nhà này, người biết nhiều thì hay hồi hương lắm, thưa ông. Cho nên ông già này mới phải lẩm cẩm. Lẩm cẩm là cái áo giáp cuối cùng của gia nhân nhà này."
    ],
    "dialogue": [
      {
        "speaker": "Lão bộc",
        "text": "Dạ, thưa ông, người ta nói tui lẩm cẩm. Tui lẩm cẩm thiệt, quên trước quên sau. Mà chuyện nhị phu nhân thì tui không quên được một chữ. Bà ấy tốt lắm, thưa ông. Tốt mà chết sớm."
      },
      {
        "speaker": "Cao Minh",
        "text": "Cuốn sổ của bà ấy — sau khi bà mất, ngươi có thấy lại không?"
      },
      {
        "speaker": "Lão bộc",
        "text": "Dạ không, thưa ông. Người của phủ lục tung cả phòng bà mà không thấy. Tui nghĩ… tui nghĩ bà ấy không giấu sổ trong phòng mình đâu. Bà ấy khôn lắm. Bà ấy giấu cho cô chủ, thì phải giấu ở chỗ cô chủ sau này với tay tới được."
      },
      {
        "speaker": "Cao Minh",
        "text": "Nhớ được chừng đó, đủ rồi. Từ nay ai hỏi, cứ lẩm cẩm như cũ. Quên hết đi là hơn."
      },
      {
        "speaker": "Lão bộc",
        "text": "Dạ, thưa ông, nhị phu nhân hồi đó ra bãi cạn toàn vào lúc chạng vạng, lúc nhà này thay ca gác. Bà ấy tính giờ giấc của cái nhà này còn rành hơn người trong nhà. Bà ấy không sợ đâu, thưa ông. Bà ấy chỉ sợ không kịp giờ thôi."
      }
    ],
    "choices": [
      {
        "id": "ask_hiding_places",
        "text": "Hỏi kỹ những nơi Lâm Ngọc Chi từng lui tới trong những đêm cuối.",
        "next": "lh_well_anchor",
        "effects": {
          "cluesHuaGiaDelta": 2
        }
      },
      {
        "id": "ask_young_master",
        "text": "Hỏi về Hứa Bổn Hoả thuở trẻ, trước khi ông ta thành chủ nhân căn nhà này.",
        "next": "lh_well_anchor",
        "effects": {
          "cluesHuaGiaDelta": 1
        }
      }
    ]
  },
  "lh_well_anchor": {
    "id": "lh_well_anchor",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Điểm neo thứ nhất: miệng giếng",
    "backgroundId": "long-hai-exterior",
    "location": "Giếng sau biệt thự Hứa Gia, Long Hải",
    "companions": [
      "npc_porter"
    ],
    "narration": [
      "Chiều xuống, Cao Minh ra giếng sau của biệt thự — một miệng giếng đá ong cũ, rêu phong, nằm giữa khoảng sân đất nơi gia nhân gánh nước suốt ngày. Ban sáng, ở kho thuốc, hắn đã thấy những sợi liên kết của căn nhà chạy dưới nền gạch hướng về phía này. Giờ đứng bên miệng giếng, thần niệm của hắn xác nhận: giếng này không chỉ là chỗ lấy nước. Nó là một nút — nơi vô số sợi từ khắp căn nhà tụ về, xoắn lại, rồi tỏa đi tiếp. Ở thế giới của hắn, người ta gọi những chỗ như thế là mắt trận. Cái tên ở đây là gì, hắn chưa biết, cũng chưa cần biết.",
      "Thành giếng, dưới lớp rêu, có khắc một vòng chữ đã mòn — không phải chữ của thợ xây giếng, mà là ấn văn dùng để đóng dấu lên một cơ chế. Nước trong giếng đen và yên một cách không tự nhiên: trời đang gió mà mặt nước không gợn. Cao Minh thử đưa một tia thần niệm dọc theo một sợi lớn, và hắn thấy nó chạy từ miệng giếng lên dãy nhà ngang, qua kho thuốc, chẻ làm nhiều nhánh nhỏ bám vào từng gian phòng — và bó lớn nhất, dày nhất, chạy thẳng về gian phòng trong cùng, phòng của Tiểu Lan. Căn nhà này dệt như một tấm lưới, và nàng nằm ở chỗ nút thắt chặt nhất của tấm lưới đó.",
      "Hắn làm một thí nghiệm nhỏ: dùng đầu ngón tay chạm nhẹ vào sợi liên kết ở miệng giếng, kéo căng nó thêm một phần — chỉ một phần. Ngay lập tức, ở đằng xa trong bếp, có tiếng nồi niêu khua; một người phu đang gánh nước qua sân khựng lại, đánh rơi một gánh, nước đổ tung tóe; rồi mọi thứ yên lại như chưa từng có gì. Các sợi này không phải dây thừng vô tri. Mỗi sợi đều đang buộc vào một con người. Giật mạnh một sợi ở đây, là một người ở đầu kia ngã xuống. Hắn buông tay ra, hơi thấy thú: cái lưới này làm cũng khéo. Khéo, và tàn.",
      "Hắn lần theo từng sợi một cách kiên nhẫn, như người thợ lần đầu cầm một cuộn chỉ lạ. Một sợi từ miệng giếng chạy về nhà bếp, quấn quanh vị trí của bà bếp chính — và hắn hiểu ra cái nếm hai lần của bà: sợi ấy là sợi vị giác, sợi kiểm tra, mạng lưới dùng miệng bà để nếm thay cho cả nhà. Một sợi khác chạy về chòi gác, quấn vào đôi tay người gác — sợi ra lệnh cho đôi tay. Các sợi không giống nhau: có sợi truyền lệnh, có sợi truyền cảm giác, có sợi chỉ đơn giản giữ cho người ta ở yên vị trí. Cách dệt này hắn quen: bất cứ tông môn nào biết dùng người làm trận cũng dệt như thế — một hệ thần kinh thứ hai mọc chồng lên cả một tòa nhà đầy người, điều phối từng việc nhỏ nhất, kể cả việc nếm một muỗng canh.",
      "Có một điều hắn tự rút ra, và hắn ghi nó như ghi một luật tạm — tạm, vì hắn mới ở đây mấy ngày: những nút như miệng giếng này phải tháo từ ngoài vào trong, từ ngọn về gốc, từng nút một, như tháo một cuộn chỉ rối. Tháo đúng thứ tự, sợi chỉ dài nguyên vẹn; cắt bừa ở giữa, hai đầu bật ngược lại, quật vào chính những người đang bị buộc. Và bó sợi chạy vào phòng nàng là bó không được phép để bị quật ngược, vì phần điều phối sự sống của nàng đang treo trên chính những sợi ấy. Cắt sai một nút ở ngoại vi, cái giá có thể không phải là một gánh nước đổ — mà là một nhịp tim của nàng bị giật đứt.",
      "Hắn còn nhận ra một điều nữa khi thần niệm lần theo các sợi ra tới hàng rào sau: càng ra xa miệng giếng, các sợi càng thưa và yếu; ra khỏi vòng tường của biệt thự chừng vài trăm bước, chúng mỏng như khói, như không còn bám được vào ai nữa. Cái lưới này mạnh vì nó có nút để bám; nút với tới đâu, tay nó với tới đó. Ngoài tầm nút, mệnh lệnh của nó tới chậm, tới yếu — như tiếng gọi qua một khoảng đồng xa. Hắn ghi nhớ ranh giới ấy như ghi nhớ bờ của một vùng nước độc.",
      "Anh Thới, người phu gánh nước quen thuộc, bấy giờ mới dám lên tiếng. Anh nói anh gánh nước ở giếng này sáu năm, tối nào về nhà ngang, hai bắp tay anh cũng đau nhức đúng một kiểu, mỏi đúng một chỗ, như thể cả ngày có ai cầm tay anh mà kéo. Anh nói anh không dám nghỉ một buổi nào: không phải sợ quản gia phạt — mà tới giờ là chân anh tự bước ra giếng, như con trâu tới giờ tự ra đồng. Cao Minh nhìn đôi bắp tay nổi gân của người phu, và đánh dấu nút miệng giếng bằng một sợi khí vô hình của chính mình. Hắn chưa cắt gì cả. Chưa phải lúc.",
      "Dân chài quanh vùng, anh Thới kể thêm, từ lâu đã tránh miệng giếng này dù nó nằm ngoài hàng rào sau — trẻ con bị dặn không được soi mặt xuống giếng của nhà họ Hứa. Có một người đàn bà trong xóm, nhiều năm trước, gánh nước ở đây lúc chạng vạng, về nhà cứ nói mãi một câu: cái bóng của bà dưới giếng nó cử động khác bà. Ít lâu sau bà mất, nhà nói là bệnh. Cao Minh nghe xong không nói gì. Hắn đã hiểu: mặt nước đen và yên bất thường của giếng này là mặt của mạng lưới — và người đàn bà ấy, trong một khắc chạng vạng, đã nhìn thấy phần không thuộc về mình trong chính bóng mình."
    ],
    "dialogue": [
      {
        "speaker": "Anh Thới",
        "text": "Dạ, thưa ông, ông coi giếng thì coi, mà ông đừng đứng lâu ở miệng giếng sau giờ này. Người trong nhà không ai đứng lâu ở đây hết. Đứng lâu là tối về mỏi tay, mỏi như bị ai vặn, thưa ông."
      },
      {
        "speaker": "Cao Minh",
        "text": "Ngươi gánh nước ở giếng này, mỗi ngày bao nhiêu gánh?"
      },
      {
        "speaker": "Anh Thới",
        "text": "Dạ, con không đếm được, thưa ông. Con chỉ biết tới giờ là con đi gánh. Tay con nó thuộc đường hơn con nữa."
      },
      {
        "speaker": "Cao Minh",
        "text": "Tay ngươi thuộc đường là việc của tay ngươi. Nó không phải của ngươi để mà sợ thay."
      },
      {
        "speaker": "Anh Thới",
        "text": "Dạ, ông khách, con hỏi thiệt một câu. Người ta ngoài chợ đồn ông là thầy pháp mà nhà họ Hứa thỉnh về chữa bệnh cho cô chủ. Ông coi giếng nãy giờ chăm chú vậy — thiệt ông là thầy pháp phải không ông? Nếu ông là thầy pháp, ông coi giùm con: chừng nào thì tay con nó mới là tay của con lại?"
      },
      {
        "speaker": "Cao Minh",
        "text": "Thầy pháp? Người của bổn tọa mà nghe được cái danh ấy, chắc cười ba ngày. Còn tay ngươi — sắp rồi. Giữ nó cho sạch tới lúc đó: đừng để nó làm điều gì mà sau này chính ngươi không tha nổi cho ngươi."
      }
    ],
    "choices": [
      {
        "id": "mark_and_leave",
        "text": "Đánh dấu điểm neo miệng giếng rồi rời đi, không động vào sợi nào.",
        "next": "lh_lan_sleepwalk",
        "effects": {
          "cluesHuaGiaDelta": 1
        }
      },
      {
        "id": "test_thread",
        "text": "Thử kéo căng một sợi liên kết nhỏ để đo phản ứng của cả mạng lưới.",
        "next": "lh_lan_sleepwalk",
        "effects": {
          "cluesHuaGiaDelta": 1,
          "lanMaterInfluenceDelta": 2
        }
      }
    ]
  },
  "lh_lan_sleepwalk": {
    "id": "lh_lan_sleepwalk",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Người đi trong đêm",
    "backgroundId": "long-hai-corridor",
    "location": "Hành lang biệt thự Hứa Gia, Long Hải",
    "entity": "entity_maid",
    "narration": [
      "Đêm ấy, quá canh hai, Cao Minh đang ngồi thiền trong phòng khách dành cho khách thì thần niệm của hắn chạm phải một chuyển động không đúng nhịp của căn nhà. Cả biệt thự ban đêm có một nhịp riêng — hắn đã thuộc: tiếng dầu đèn, tiếng gia nhân trở mình, tiếng chuông canh. Chuyển động này nằm ngoài nhịp đó, mà lại đều đặn một cách đáng sợ. Hắn mở cửa phòng, đứng vào bóng tối của hành lang. Và hắn thấy nàng.",
      "Hắn đã nằm lòng nhịp đêm của biệt thự sau mấy ngày ở đây: canh một, gia nhân gác cổng đổi ca, tiếng chân đều như một; canh hai, đèn các dãy được vặn nhỏ, chỉ chừa đèn hành lang; giữa canh hai và canh ba là quãng lặng nhất, khi ngay cả tiếng dế ngoài vườn cũng nghe rõ. Chính trong quãng lặng ấy, thần niệm của hắn bắt được sợi liên kết dày nhất — sợi chạy vào gian phòng trong cùng — bỗng căng lên từ từ, như một người khổng lồ trở mình trong giấc ngủ. Rồi cánh cửa gian phòng trong cùng mở ra, không một tiếng kẹt, vì bản lề của nó được tra dầu mỗi ngày theo một lệ mà bây giờ hắn mới hiểu lý do.",
      "Tiểu Lan đi chân trần trên nền gạch lạnh, áo ngủ trắng, tóc xõa, mắt mở mà không nhìn thấy gì. Nàng đi không nhanh không chậm, qua từng ngưỡng cửa đều dừng đúng một nhịp rồi mới bước tiếp — cái dừng nhịp ấy giống hệt nhịp dừng của mọi gia nhân trong nhà này khi bị mượn tay mượn chân. Chỉ khác một điều: ở họ, mệnh lệnh mượn một cánh tay, một cái miệng. Ở nàng, mệnh lệnh đang mượn cả một con người — dắt nàng đi như dắt một con rối biết thở, bằng chính hệ thần kinh của nàng, bằng thứ đã thay nàng điều phối sự sống từ khi nàng còn là một đứa trẻ.",
      "Đi qua mỗi dãy phòng, nàng đều đưa tay lên, chạm nhẹ vào từng khung cửa — một cái chạm rất khẽ, đúng vào giữa khung, rồi buông xuống, đi tiếp. Cao Minh đếm: mười hai khung cửa, mười hai cái chạm, không thiếu một cái, không thừa một cái. Hắn hiểu ra nàng đang bị dắt đi làm một việc cụ thể: điểm danh ngược. Ban ngày, căn nhà điểm danh nàng và mọi người; ban đêm, nó dùng chính tay nàng điểm lại từng ngưỡng cửa — như một chủ nhà đi kiểm tra khóa trước khi ngủ, mà đôi chân dùng để đi kiểm tra lại là đôi chân của vật chứa quý giá nhất của nó. Mỗi cái chạm là một lần mạng lưới xác nhận: mọi thứ vẫn thuộc về nó.",
      "Cao Minh đi theo, cách nàng mười bước, không phát ra một tiếng động, và nhất là — không đánh thức nàng. Hắn hiểu cơ chế đủ rõ để biết sự tàn nhẫn của nó: thân thể nàng lúc này đang vận hành hoàn toàn bằng điều phối của mạng lưới; nếu hắn chặt đứt mệnh lệnh giữa chừng, hoặc đánh thức ý thức nàng dậy đột ngột giữa đường, phần điều phối bị giật về bất ngờ có thể làm ngưng một nhịp thở, một nhịp tim — như giật phắt sợi chỉ đang treo một vật nặng. Muốn cứu người đang bị dắt đi trong mộng, cách duy nhất là đi theo tới cùng, xem nó dắt nàng đi đâu, làm gì.",
      "Đứng trước cửa từ đường, nàng không chỉ cúi chào. Nàng đứng rất lâu — lâu hơn mọi điểm dừng trước — và Cao Minh cảm nhận được, qua thần niệm, một sự trao đổi đang diễn ra mà mắt thường không thấy: nhịp tim của nàng bị chậm lại từng chút, hơi thở bị kéo dài ra, như có một bàn tay vô hình đang cầm lấy trái tim nàng mà nắn, mà đo, mà kiểm tra độ bền của nó. Đó là một lần kiểm kê vật chứa: thứ ngự trong từ đường đang đọc nàng như người ta đọc một cuốn sổ — trang này còn tốt, trang kia đã mòn, chỗ này cần giữ gìn vì một cái lễ nào đó còn cần tới nàng nguyên vẹn. Nàng được giữ gìn kỹ nhất nhà này — như người ta giữ một món đồ tế lễ chưa tới ngày dùng.",
      "Gia nhân trực đêm đứng nép trong các ô cửa dọc hành lang, mắt mở trừng, không một ai ngăn nàng, không một ai đỡ nàng khi nàng suýt vấp ở bậc thềm. Họ đứng đó như một phần của căn nhà — và trong mắt vài người, Cao Minh thấy nước mắt chảy: họ tỉnh, họ thấy cô chủ của mình bị dắt đi như thế, mà tay chân họ không được phép cử động. Căn nhà này không thiếu người tốt. Nó chỉ không cho người tốt được làm người.",
      "Nàng dừng lại trước cửa từ đường. Ở đó, nàng đứng thẳng, gập người cúi chào ba lần — lễ phép, đúng mực, như con cháu về thưa với tổ tiên. Rồi nàng cất tiếng, giọng của nàng mà không phải ý của nàng, nói một câu ngắn ngủn vào cánh cửa đóng kín: Con nghe. Hai tiếng ấy rơi vào hành lang tối, và Cao Minh cảm thấy từ sau cánh cửa từ đường, một sự chú ý mênh mông và cổ xưa khẽ nghiêng về phía nàng — như một cái đầu khổng lồ quay lại nghe một tiếng chuông nhỏ. Thứ ngự trong căn nhà này vừa kiểm tra vật chứa của nó, và vật chứa vừa đáp lời bằng chính miệng mình.",
      "Rồi nàng quay người, đi trở về phòng, từng bước đều như lúc đi, nằm xuống giường, khép mắt, thở đều — như chưa từng rời khỏi giường. Sáng mai tỉnh dậy, nàng sẽ không nhớ gì về chuyến đi này; trên cuộn chỉ của nàng, đêm nay hoặc sẽ là một nút thắt cho một ngày nàng tưởng mình đã ngủ yên, hoặc là một khoảng trống nữa. Cao Minh đứng ngoài cửa phòng nàng rất lâu. Hắn vừa nhìn thấy tận mắt điều mà ban ngày hắn chỉ đọc được qua mạch tượng: nàng không phải tù nhân bị nhốt trong căn nhà này. Nàng là một căn phòng trong chính căn nhà này — căn phòng mà chủ nhà đi lại kiểm tra mỗi đêm.",
      "Hắn theo nàng về tới cửa phòng, nhìn nàng nằm xuống, và đứng đó nghe nhịp thở của nàng trở lại đều đặn — đều đặn một cách máy móc, mười sáu nhịp một phút, không sai một nhịp, như có ai đang đếm thay cho nàng ngay cả trong giấc ngủ yên nhất. Chính lúc ấy, hắn mới cho phép mình nghĩ trọn vẹn một ý nghĩ mà ban ngày hắn chỉ dám nghĩ từng nửa: nếu bây giờ, ngay tại đây, hắn chém đứt sợi đang dắt nàng — chỉ một sợi thôi — nàng sẽ không tỉnh dậy la hét. Nàng sẽ ngừng thở trong yên lặng, ngay trên giường này. Vì sợi đó không chỉ là sợi ra lệnh. Từ năm nàng bảy tuổi, nó đã là sợi điều phối hơi thở của nàng những lúc nàng ngủ say không tự giữ được. Nó đã dệt chính sự sống của nàng vào tấm lưới, để ai muốn phá lưới đều phải cân nhắc việc giết nàng trước tiên. Cao Minh khép cửa phòng nàng lại, rất khẽ. Muốn cứu nàng, phải tháo từng sợi một, theo đúng thứ tự, trong khi nàng vẫn còn thở — và đó là một việc của nhiều ngày, không phải của một kiếm."
    ],
    "dialogue": [
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Con nghe."
      },
      {
        "speaker": "Cao Minh",
        "text": "Ngủ đi. Từ mai, con đường này có thêm một người đi."
      },
      {
        "speaker": "Cao Minh",
        "text": "Một trăm mười hai bước đi, mười hai khung cửa, một lần cúi chào. Nó dắt nàng đi như dắt một quan viên đi duyệt binh. Bổn tọa đã thuộc đường của nó rồi — đêm sau, bổn tọa đi trước nó một bước."
      }
    ],
    "choices": [
      {
        "id": "follow_silently",
        "text": "Đi theo tới cùng, không đánh thức, ghi nhớ toàn bộ đường đi của nàng.",
        "next": "lh_altar",
        "effects": {
          "cluesHuaGiaDelta": 1
        }
      },
      {
        "id": "block_at_altar",
        "text": "Chặn nàng lại trước cửa từ đường, chấp nhận giật nàng ra khỏi mệnh lệnh giữa chừng.",
        "next": "lh_altar",
        "effects": {
          "lanMaterInfluenceDelta": -3
        }
      }
    ]
  },
  "lh_altar": {
    "id": "lh_altar",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Ô bài vị trống",
    "backgroundId": "altar-hall",
    "location": "Từ đường biệt thự Hứa Gia, Long Hải",
    "narration": [
      "Sáng hôm sau, lấy cớ là khách phương xa muốn thắp nhang tạ ơn gia chủ đã tiếp đãi, Cao Minh bước vào từ đường một lần nữa — lần này là ban ngày, cửa mở, và hắn có đủ thời gian để nhìn kỹ nơi mà đêm qua Tiểu Lan đã bị dắt tới đứng chào. Từ đường của biệt thự là một gian nhà ba gian xây gạch, bàn thờ sơn son thếp vàng, hai bên là các kệ cao xếp bài vị của nhiều đời họ Hứa — từ đời ông tổ vào đất Nam Kỳ lập nghiệp, xuống tới các chi, các phòng. Hương khói ngát một mùi trầm cũ, thứ mùi của những nơi người sống nói chuyện với người chết bằng lễ nghi.",
      "Hắn để ý ngay đến nén hương trên bàn thờ chính: nó cháy đều, tàn cong mà không rụng, và theo lời người coi từ đường thì hương ở đây không bao giờ tắt — đêm nào cũng có người thay, dù không ai trong nhà nhận mình là người thay. Căn nhà này tự chăm sóc bàn thờ của nó. Cũng như nó tự thay dầu đèn, tự điểm danh, tự nếm lại thức ăn: mọi nghi thức giữ cho bộ máy vận hành đều được bảo trì bằng chính tay của những người bị nó mượn.",
      "Hắn lật xem cuốn sổ cúng giỗ đặt trên bàn thờ phụ — sổ ghi các lễ cúng trong năm của biệt thự. Lễ giỗ tổ, lễ cúng đất, lễ tạ ơn biển: toàn những lễ bình thường của nhà giàu Nam Kỳ. Nhưng xen giữa chúng, cứ mỗi tháng một lần, vào đúng đêm không trăng, có ghi một khoản chi không tên: hương, dầu, và một thứ ghi bằng ký hiệu thương hồ — cùng lối ký hiệu trên sổ kho thuốc và nắp rương. Khoản chi ấy năm nào cũng có, tháng nào cũng đều, và người ký nhận luôn là quản gia. Căn nhà này, mỗi tháng một lần, nuôi thứ ngự trong từ đường bằng một nghi thức có sổ sách đàng hoàng — và ghi nó vào sổ như ghi tiền mua gạo, bình thản đến mức nếu không biết đọc ký hiệu, không ai thấy có gì lạ.",
      "Trên kệ bài vị của thế hệ hiện tại, hắn tìm thấy khoảng trống. Giữa bài vị của Hứa Bổn Hoả và bài vị của người vợ cả đã mất, có một ô trống vừa đúng kích thước một bài vị con gái trong nhà — mặt gỗ trong ô sáng hơn xung quanh, gần như không bám bụi, chứng tỏ bài vị ở đó bị rút đi chưa lâu, và có người vẫn lau chùi cả chỗ trống. Một cái tên bị gạch trong gia phả, một ô bài vị bị rút trong từ đường: nàng bị xóa ở cả hai nơi người ta ghi nhớ một con người — sổ của người sống và kệ của người chết. Nàng còn thở, còn nói, còn thắt nút chỉ đếm ngày — nhưng trong giấy tờ của dòng họ, nàng đã được xử lý như một người không tồn tại.",
      "Ở mép kệ bài vị, hắn còn phát hiện một bài vị khác thường: một bài vị bị quay mặt vào tường. Bài vị gỗ mun, không chữ, hoặc có chữ đã bị cạo sạch. Lão coi từ đường — một ông già câm gần như hoàn toàn — ban nãy còn lùi lại một bước khi thấy hai thanh kiếm lơ lửng sau lưng khách, giờ thấy hắn nhìn vào bài vị ấy thì ra hiệu bằng tay, loay hoay một lúc, rồi viết lên lớp bụi trên mặt bàn bốn chữ nguệch ngoạc: của cô lớn trước. Rồi ông vội lấy tay áo xóa đi ngay, mặt tái mét. Của cô lớn trước — trước Tiểu Lan, trong nhà này đã có một người con gái khác giữ vai trò của nàng, và kết cục của người ấy là một bài vị không tên quay mặt vào tường: còn tệ hơn cả bị rút đi. Bị rút đi là bị quên. Quay mặt vào tường là còn bị giữ lại để mà sỉ nhục — hoặc để cảnh cáo kẻ thay thế mình.",
      "Dưới thần niệm, từ đường hiện ra như một cái gốc của tấm lưới trong biệt thự này. Các sợi liên kết từ giếng sau, từ kho thuốc, từ các dãy phòng đều chạy về đây, tụ vào sau bàn thờ như rễ cây tụ vào thân — và từ đây, một bó sợi lớn hơn hẳn chạy xuyên ra khỏi biệt thự, hướng về phía tây, về phía Chợ Lớn. Gốc ở đây chưa phải là đầu não; nó giống một trạm cắm rễ xuống đất Long Hải, nối căn nhà này vào một thân thể lớn hơn nhiều mà hắn chưa thấy mặt. Hắn tự nhắc mình phần hệ trọng nhất: muốn tháo lưới ở đây mà đụng vào gốc trước, là tự tay giật đứt mọi sợi đang treo trên nó — kể cả sợi đang giữ nhịp thở của nàng. Gốc phải là thứ được tháo sau cùng, khi mọi ngọn đã yên.",
      "Quản gia xuất hiện ở cửa từ đường đúng lúc ấy — không sớm một khắc, không muộn một khắc, như thể căn nhà biết khách đã nhìn đủ lâu. Ông ta bưng một khay nhang mới, cười hiền hòa, và nói câu xã giao mà Cao Minh nghe ra hai lớp nghĩa: khách lạ thắp nhang cho tổ tiên nhà này là quý lắm, chỉ mong khách nhớ cho, nhà họ Hứa xưa nay trọng người biết dừng đúng chỗ. Ông ta không nhìn ô bài vị trống. Ông ta không cần nhìn. Cả căn nhà này đều biết chỗ trống đó là của ai, và cả căn nhà này đều đã được dạy là không nhìn thấy nó.",
      "Cao Minh thắp đủ ba nén nhang, cắm ngay ngắn, và cố ý cắm một nén lệch về phía ô trống — như thắp cho một người mà sổ sách nói là không có. Hắn nhìn quản gia và nói rõ ràng, vừa đủ cho cả căn phòng nghe thấy: nhà có người còn sống mà bài vị đã rút, sổ đã gạch — bổn tọa đi khắp các giới, đây là lần đầu thấy một dòng họ lo hậu sự cho người còn đang thở. Quản gia vẫn cười. Nhưng nén nhang lệch kia cháy nghiêng, và trong một thoáng, Cao Minh thấy bàn tay quản gia run lên đúng cái run mà hắn đã thấy ở người phu ngoài cổng hôm đầu tiên."
    ],
    "dialogue": [
      {
        "speaker": "Quản gia",
        "text": "Dạ, thưa ông, ông thắp nhang thật có tâm. Chỉ là nhà con có lệ, chuyện trong từ đường, khách ngoài không nên hỏi sâu. Người mất thì đã mất, người sống thì… cũng có phần của người sống, thưa ông."
      },
      {
        "speaker": "Cao Minh",
        "text": "Bổn tọa chỉ hỏi một câu: ô trống trên kệ kia, là của ai?"
      },
      {
        "speaker": "Quản gia",
        "text": "Dạ… thưa ông, ô đó bỏ trống lâu rồi. Cô chủ nhà con còn đang dưỡng bệnh ở gian trong, bài vị là chuyện của người đã khuất, đâu có liên can."
      },
      {
        "speaker": "Cao Minh",
        "text": "Không liên can. Vậy mà mặt gỗ trong ô không có bụi. Ngươi lau chùi cả một chỗ trống mỗi ngày — là lau cho ai xem, quản gia?"
      },
      {
        "speaker": "Quản gia",
        "text": "Dạ, thưa ông tinh mắt quá. Tro nhang ở từ đường này, mỗi tháng nhà con gom lại, gói giấy dầu, gửi về phủ Chợ Lớn. Lệ của nhà này xưa nay vẫn vậy: tro cũng là của phủ, không dám bỏ đi, thưa ông."
      },
      {
        "speaker": "Cao Minh",
        "text": "Tro của người chết cũng phải gửi về nghiệm thu. Nhà này quản người sống chưa đủ, còn quản tới tro người chết. Bổn tọa thật mở rộng tầm mắt."
      }
    ],
    "choices": [
      {
        "id": "incense_properly",
        "text": "Thắp nhang đủ lễ cho cả ô trống, không nói thêm lời nào.",
        "next": "lh_thu_nguyet_errand",
        "effects": {}
      },
      {
        "id": "ask_missing_tablet",
        "text": "Hỏi thẳng quản gia về bài vị bị rút và cuốn sổ bị gạch.",
        "next": "lh_thu_nguyet_errand",
        "effects": {
          "cluesHuaGiaDelta": 1,
          "lanMaterInfluenceDelta": 2
        }
      }
    ]
  },
  "lh_thu_nguyet_errand": {
    "id": "lh_thu_nguyet_errand",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Việc chạy ra phố",
    "backgroundId": "long-hai-exterior",
    "location": "Cổng biệt thự Hứa Gia, Long Hải",
    "companions": [
      "le_thu_nguyet"
    ],
    "narration": [
      "Sáng ấy, quản gia gọi Thu Nguyệt ra sân trước, trao cho cô một tờ giấy kê và một giỏ mây: ra phố chợ mua dầu đèn, chỉ thêu, và mấy vị thuốc khô. Việc chạy chợ vốn là của người phu, hôm nay lại giao cho một đứa con gái mười bảy tuổi trong nhà — và giao ngay trước mặt vị khách lạ đang đứng ở hiên. Cao Minh nhìn cảnh ấy: căn nhà này vừa thả một sợi dây ra khỏi cổng, vừa muốn xem sợi dây ấy đi tới đâu, và vị khách lạ có bước theo hay không.",
      "Thu Nguyệt nhận giỏ, dạ một tiếng nhỏ, đi ra cổng. Cô đi qua sân với dáng đi của mọi gia nhân trong nhà này — đều bước, không ngoái đầu — nhưng khi qua mặt Cao Minh, mắt cô liếc lên rất nhanh, đúng một cái liếc của người đang cầu cứu mà không dám cầu cứu. Xuống khỏi bậc thềm cuối, qua khỏi cánh cổng sắt, cô dừng lại ở gốc cây bàng ngoài đường, và hắn thấy vai cô sụp xuống một cái, như người vừa bước ra khỏi mặt nước sâu: hơi thở đầu tiên của một người tạm thời được là mình.",
      "Trước khi đi, quản gia dặn việc rất kỹ: mua dầu đèn hiệu cũ, không mua hiệu mới; chỉ thêu thì mua đủ ba màu, trong đó phải có chỉ đỏ; thuốc khô thì chỉ mua ở tiệm quen đầu phố, không mua hàng rong. Và cô phải về trước giờ thay đèn buổi chiều — trễ một khắc là tự ý thức lấy. Thu Nguyệt dạ dạ, ôm giỏ đi. Sau này hắn mới biết, trong ba việc ấy có một việc là của riêng cô chủ: chỉ đỏ. Chỉ đỏ để thắt nút cho những ngày thắng trận của nàng, và nó không có trong bất cứ sổ sách nào của nhà — nó đi qua tay Thu Nguyệt, từ tiền chợ thừa ra từng đồng, như một đường dây tiếp tế nhỏ xíu cho cuộc kháng chiến im lặng của một người con gái bị giam.",
      "Trên con đường đất ra phố, xa dần khỏi vòng tường của biệt thự, Thu Nguyệt mới dám nói chuyện thành lời dài. Cô nói, trong nhà, tới một giờ nhất định là không ai dám nói chuyện riêng — không phải vì bị cấm, mà vì tới giờ ấy, miệng ai cũng bận, tay ai cũng bận, đầu ai cũng như có tiếng vo ve. Ra tới ngoài này, cách nhà chừng một quãng đồng, cái vo ve ấy mới nhỏ dần. Tay cô hết run. Cô xòe bàn tay ra nhìn, cười một cái cười buồn: cô nói, mỗi lần ra khỏi cổng là một lần cô biết chắc tay này vẫn còn là tay của mình.",
      "Đi một đoạn, cô vừa đi vừa nói cho hắn nghe những thứ mà với cô là hiển nhiên như hơi thở: dầu đèn mua bằng chai, trả bằng tiền kẽm đếm từng đồng; đi chợ là phải mặc cả, nói thách một đồng thì trả sáu hào mới là biết mua; người bán hàng rong không được tin, tiệm có bảng hiệu mới được tin. Hắn nghe, hỏi một câu làm cô phải cắn môi mới không bật cười giữa đường: mặc cả là một thứ lễ nghi, hay là một thứ trận pháp của chợ? Cô đáp, nửa đùa nửa thật: là lễ nghi, thưa ông — ai không mặc cả, người ta tưởng mình có tiền hoặc có bệnh. Hắn gật gù như vừa học được một môn quy củ mới của thế giới này.",
      "Ra tới đường cái, một đứa nhỏ trong xóm đang chơi gần đó trông thấy cái giỏ mây có thêu dấu của biệt thự thì vội chạy nép vào sau lưng mẹ nó. Người mẹ kéo con lại, cười trừ với Thu Nguyệt một nụ cười sợ sệt, rồi dắt con đi vòng qua phía bên kia đường. Thu Nguyệt đứng nhìn theo, không giận, chỉ buồn. Cô nói nhỏ: người trong xóm không ghét tụi em, họ sợ cái nhà. Đứa nhỏ đó hồi trước còn chơi với em mỗi lần em ra chợ. Từ hồi có đứa gia nhân trong nhà đi chợ về rồi… không còn là nó nữa, người ta bắt đầu sợ lây sang cả tụi em. Cô nói câu ấy nhẹ tênh, như nói chuyện thường ngày — mà đó là số phận của mọi người trong căn nhà kia: bị thế giới bên ngoài xa lánh không phải vì điều họ làm, mà vì điều đang sống nhờ trong họ.",
      "Cô kể thêm, giọng vẫn giữ phép tắc của một đứa ở: người trong nhà không ai ghét cô chủ, mà cũng không ai dám thương cô chủ ra mặt. Thương cô chủ là thứ tình cảm không có trong bài bản của căn nhà. Bà Năm thương lén. Bà Bảy thương bằng cách nấu nồi cháo riêng cho ngon hơn một chút. Còn cô — cô thương bằng cách chạy việc cho nhanh, để có cớ đi ngang phòng cô chủ nhiều lần trong ngày, mỗi lần đi ngang là một lần biết cô chủ còn ngồi đó, còn thở. Câu nói ấy, thốt ra từ một đứa con gái mười bảy tuổi bị cả nhà nghi là tai mắt của quản gia, nói lên điều rõ hơn mọi lời khai: con bé này không phải mắt của căn nhà. Nó là một trong những tù nhân trẻ nhất của căn nhà.",
      "Đi hết con đường đất, phố chợ Long Hải hiện ra trước mặt: mái lá, hàng quán, tiếng người mua bán — một thế giới ồn ào, lộn xộn, sống động, hoàn toàn không đồng nhịp. Thu Nguyệt đứng ở đầu phố hít một hơi dài, rồi quay lại nhìn hắn, lần đầu tiên nói một câu không có dạ thưa mở đầu — rồi vội sửa lại, hai tai đỏ lên. Cô hỏi: hồi hôm ở cổng, sao ông lại hỏi tên anh phu gánh nước. Người trong nhà này, mười năm nay, không ai hỏi tên ai nữa. Tên là thứ người ta chỉ còn giữ trong bụng, gọi thầm, như giữ một món đồ cấm.",
      "Câu hỏi của con bé chạm vào đúng một điều hắn đã thấy ở gian gia phả và ô bài vị trống: căn nhà này xóa tên người ta trước, rồi mới chiếm tay chân người ta sau. Hắn trả lời cô rất ngắn: vì bổn tọa muốn nhớ. Và từ đây ra phố, cô cứ đi như mọi bận — chỉ khác một điều: hôm nay có một người ngoài nhà đi cùng cô, giữa ban ngày, như đi cùng một con người có tên."
    ],
    "dialogue": [
      {
        "speaker": "Lê Thu Nguyệt",
        "text": "Dạ… thưa ông, ông đừng đi gần em quá, người của nhà mà thấy thì em chết. Mà ông đi xa quá thì… thì em cũng sợ. Em nói thiệt, ra khỏi cái cổng đó là em mới dám thở mạnh."
      },
      {
        "speaker": "Cao Minh",
        "text": "Ngươi sợ điều gì nhất trong căn nhà đó?"
      },
      {
        "speaker": "Lê Thu Nguyệt",
        "text": "Dạ, em sợ tới một ngày em không còn biết mình sợ nữa, thưa ông. Cô chủ thì quên chuyện nọ chuyện kia. Còn tụi em… tụi em sợ mình quên mất là mình đang bị quên."
      },
      {
        "speaker": "Cao Minh",
        "text": "Còn biết sợ là còn chưa mất. Đi đi — bổn tọa sau ngươi mười bước. Ai hỏi, cứ nói không quen."
      },
      {
        "speaker": "Lê Thu Nguyệt",
        "text": "Dạ, còn một chuyện em chưa nói. Hồi em mười hai tuổi vào nhà này, người ta ghi tên em vào sổ gia nhân. Em xin tự tay em viết. Cả nhà này, chắc chỉ có tên em là do chính tay em viết thôi, thưa ông. Em giữ cái đó làm bùa hộ mệnh đó."
      }
    ],
    "choices": [
      {
        "id": "escort",
        "text": "Đi theo Thu Nguyệt ra phố, cách mười bước, để cô an tâm làm việc.",
        "next": "lh_market",
        "effects": {
          "cluesHuaGiaDelta": 1
        },
        "flags": {
          "thuNguyetEscorted": true
        }
      },
      {
        "id": "let_her_go",
        "text": "Để Thu Nguyệt tự đi chợ một mình như lệ thường, tránh gây chú ý.",
        "next": "lh_market",
        "effects": {
          "cluesHuaGiaDelta": 2
        },
        "flags": {
          "thuNguyetSolo": true
        }
      }
    ]
  },
  "lh_market": {
    "id": "lh_market",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Chợ Long Hải",
    "backgroundId": "long-hai-market",
    "location": "Chợ Long Hải, Nam Kỳ",
    "narration": [
      "Chợ Long Hải họp trên một bãi đất ven đường cái, lều lá chen nhau, hàng cá hàng muối, tiếng mặc cả, mùi nước mắm và mùi khói — tất cả những ồn ào của một buổi chợ quê Nam Kỳ. Cao Minh đi vào chợ như đi vào một thế giới khác hẳn biệt thự: ở đây không ai bước cùng nhịp với ai, người ta chen nhau, cãi nhau, cười đùa. Nhưng hắn đi tới đâu, tiếng ồn ở đó nhỏ xuống một bậc. Người ta nhìn hai thanh kiếm lơ lửng sau vai hắn trước, rồi mới nhìn mặt hắn. Một đứa nhỏ kéo tay mẹ chỉ trỏ, bị mẹ bịt miệng kéo vụt đi. Một bà hàng cá ghé tai bà hàng muối: thầy pháp đó — người mà nhà họ Hứa thỉnh về chữa bệnh cho cô chủ. Cái danh ấy chạy qua chợ nhanh hơn cả hắn đi.",
      "Mỗi khi có gia nhân của biệt thự lách vào chợ, đám đông lại dạt ra nhường đường, tiếng nói nhỏ xuống, rồi mới rộ lên sau lưng họ — như tránh một đám tang đi ngang. Hai nỗi sợ chen nhau trên cùng một bãi đất: sợ căn nhà trên đồi, và sợ người khách lạ đi ra từ căn nhà đó.",
      "Ở cuối chợ, sát bến nước, một ông lão chài đang ngồi vá lưới. Ông ngoài sáu mươi, da đen cháy, lưng trần xăm một con cá đã mờ, và bàn tay trái của ông chỉ còn ba ngón. Người chợ gọi ông là Ba Lưới. Thấy Cao Minh dừng lại, ông ngẩng lên, nhìn một lượt từ đầu đến chân, dừng lâu ở hai thanh kiếm, và im lặng một lúc lâu hơn người thường — dân biển gặp thứ lạ thì không vội nói. Rồi ông hỏi một câu không đầu không đuôi: khách ở trong cái nhà trên đồi ra, phải không. Không phải ông đoán giỏi. Ông nói, người ở nhà đó ra chợ đều có một cái vẻ — vẻ của người đang bị ai nhìn từ trong đầu mình. Ông nhận ra cái vẻ đó, vì ông từng có nó suốt hai năm.",
      "Chợ Long Hải còn là nơi đóng thuế cá và cấp giấy phép thuyền của quan Pháp: ở đầu bến có một trạm gác nhỏ, mấy người lính mặc đồ lạ đứng gác, súng dài dựa tường, và một con chó béc-giê nằm dài dưới hiên. Cao Minh không biết những người lính ấy là lính của ai — với hắn, họ chỉ là một thứ quyền lực có vũ khí của xứ này; hắn chỉ ghi nhận một điều: dân chợ đi ngang trạm đều vô thức bước nhanh hơn. Khi Thu Nguyệt xách giỏ đi ngang trạm, con chó đang ngủ bỗng ngẩng đầu, gầm gừ rất khẽ, lông gáy dựng lên — không phải gừ người, mà gừ vào khoảng không ngay sau lưng cô, như nó ngửi thấy một thứ gì đi kèm mà mắt người không thấy. Lính gác quát nó nằm xuống. Nó nằm, mà mắt vẫn không rời khoảng không ấy cho tới khi cô đi khuất. Thú vật không biết đọc sổ sách — chúng chỉ biết sợ đúng thứ đáng sợ.",
      {
        "text": "Đi sau cô mười bước, chuyến chợ khác hẳn lệ thường: người ta nhìn cô lâu hơn — đúng hơn, nhìn cái bóng đi sau cô. Bà hàng muối ghé sát hỏi: ông thầy trên đồi đi theo canh cô đấy à. Thu Nguyệt không quay đầu lại lần nào. Cô mua nhanh, trả gọn theo giấy kê; cô nói nhỏ cho hắn nghe giá — dầu mười hai đồng một chai, chỉ thêu tính bằng xu, thuốc khô phải cân tận mắt. Hắn ghi nhớ hết: ở chợ, không ai tin ai, mà chợ vẫn chạy. Và lúc cả sạp còn bận nhìn theo, cuộn chỉ đỏ đã nằm gọn giữa đống chỉ mua cho nhà.",
        "if": "thuNguyetEscorted"
      },
      {
        "text": "Thu Nguyệt đi chợ một mình. Không ai sau lưng, cô lại là một đôi tay của căn nhà trên đồi — người ta dạt ra nhường đường, cười trừ, bán nhanh. Chỉ bà hàng muối ghé lại hỏi nhỏ: con đi một mình vậy, ông thầy pháp nhà thỉnh về không đi theo sao. Cô lắc đầu — cái danh ấy, cả chợ đã biết rồi. Cô mặc cả từng đồng, mua dầu đèn đúng hiệu cũ, thuốc khô đúng tiệm quen. Ở sạp chỉ, cô mua ba màu theo giấy kê — và giữa ba màu ấy là cuộn chỉ đỏ, trả bằng tiền chợ thừa dành dụm. Xong việc, cô quay về một mình.",
        "if": "thuNguyetSolo"
      },
      "Ông Ba kể: thuở còn sức, ông từng làm chèo đò và gánh nước cho biệt thự. Hai năm. Năm đầu không có gì lạ ngoài gia quy nghiêm. Năm thứ hai, ông bắt đầu có những buổi sáng tỉnh dậy với hai bàn tay ướt sũng, đau nhức, mà không nhớ mình đã làm gì trong đêm. Cái đêm ông mất hai ngón tay là đêm bão: tay ông tự cho tay vào tời kéo lưới — ông nhớ rõ lúc đó đầu ông hét lên bảo rút tay ra, mà tay ông thì cứ ấn xuống, từ tốn, như tay của người khác. Sáng hôm sau ông xin nghỉ, quản gia cười và cho nghỉ ngay, dễ dàng đến lạ — như thể nhà chỉ cần ông quên đi, chứ không cần giữ ông.",
      "Và ông đã quên thật. Cả năm cuối cùng trong nhà đó, ông nhớ lại chỉ còn như nhìn qua một lớp khói: có những người, những việc ông biết chắc đã xảy ra mà không nhớ ra mặt mũi. Ông chỉ nhớ rõ một người — nhị phu nhân. Có một dạo, bà hay thuê ông chèo đò ra phía bãi cạn lúc chạng vạng, ôm theo một bọc vải dầu. Bà không nói đi đâu, ông không hỏi. Đò cập bãi, bà lên bờ một mình chừng tàn một nén nhang rồi quay xuống. Ba lần như thế. Rồi bà mất. Ông nói tới đó thì ngừng vá lưới, nhìn ra mặt biển một lúc lâu, như thể mười mấy năm nay ông vẫn còn chờ người đàn bà ấy quay xuống đò.",
      "Câu chuyện của người chài già khớp với lời ông Sáu như hai mảnh gương vỡ: Lâm Ngọc Chi, trước khi mất, đã nhiều lần mang bọc vải dầu ra khỏi biệt thự lúc chạng vạng — khi cái lưới trong nhà chuyển ca, sự chú ý của nó lơi lỏng nhất. Bà không giấu đồ trong phòng mình. Bà đưa nó ra ngoài, tới một nơi nào đó ở bãi cạn ven biển Long Hải. Một người mẹ sắp chết đã dùng những chuyến đò cuối cùng chôn một con đường thoát cho con gái bảy tuổi của mình — và con đường ấy đã nằm yên ngoài bãi này mười một năm, chờ người tới đào lên.",
      "Chia tay ở bến, ông Ba chỉ cho hắn xem chiếc đò của mình, gõ vào sàn nghe cốp cốp: dưới sàn có một ngăn bí mật, hồi trẻ ông dùng giấu hàng lậu qua trạm thuế. Ngăn ấy giờ trống, sạch. Ông nói nửa đùa nửa thật: già rồi không giấu hàng nữa, mà biết đâu có ngày lại giấu người. Cao Minh ghi nhớ cái ngăn ấy như ghi nhớ mọi đường lui: một chiếc đò, một chỗ giấu người, một ông chài mất hai ngón tay vì căn nhà kia mà vẫn sẵn lòng quay lại gần nó một lần nữa.",
      "Trước khi chia tay, ông Ba hạ giọng như nói về ma: người trong nhà đó, ai bỏ đi cũng không bỏ được trọn vẹn. Kẻ mất ngón tay như ông, kẻ mất trí nhớ như mấy đứa nhỏ bị trả về quê, kẻ mất cả tên như cô chủ. Rồi ông hỏi một câu thẳng của dân biển: ông khách vào nhà đó, tính khi nào ra, và ra thì mang theo cái gì. Dân chài không hỏi thừa. Họ biết ở cái nhà trên đồi kia, vào thì dễ — ra mới là chuyện phải tính từ bây giờ."
    ],
    "dialogue": [
      {
        "speaker": "Ông Ba Lưới",
        "text": "Tui ở trong cái nhà đó hai năm, ông. Ra được mười mấy năm rồi mà đêm nào trở trời, hai ngón tay cụt này nó cũng nhức trước hết. Cái nhà đó nó không thả ai ra trọn vẹn đâu, ông khách."
      },
      {
        "speaker": "Cao Minh",
        "text": "Nhị phu nhân thuê đò của ngươi ra bãi cạn. Bà ấy lên bờ một mình, ngươi có từng thấy bà ấy đào đất, hay khuân đá không?"
      },
      {
        "speaker": "Ông Ba Lưới",
        "text": "Tui không thấy, mà tui nghe. Tiếng xẻng một lần, tiếng đá khua một lần. Bà ấy về đò, tay sạch, mặt bình thản như đi dạo. Người đàn bà đó gan lắm, ông. Gan hơn hết thảy đàn ông tui từng gặp."
      },
      {
        "speaker": "Cao Minh",
        "text": "Bổn tọa vào nhà đó chơi, chưa chán thì chưa ra. Còn đò của ngươi — vá cho kỹ vào. Sẽ có một đêm bổn tọa mượn."
      }
    ],
    "choices": [
      {
        "id": "ask_last_year",
        "text": "Hỏi kỹ ông Ba về năm cuối làm trong biệt thự và những chuyến đò của Lâm Ngọc Chi.",
        "next": "lh_letter",
        "effects": {
          "cluesHuaGiaDelta": 2
        }
      },
      {
        "id": "buy_catch",
        "text": "Mua hết mẻ cá sớm của ông Ba gửi vào bếp biệt thự, không mặc cả.",
        "next": "lh_letter",
        "effects": {
          "suppliesDelta": -1,
          "cluesHuaGiaDelta": 1
        },
        "flags": {
          "fishermanKindness": true
        }
      }
    ]
  },
  "lh_letter": {
    "id": "lh_letter",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Thư từ Chợ Lớn",
    "backgroundId": "long-hai-exterior",
    "location": "Sân trước biệt thự Hứa Gia, Long Hải",
    "narration": [
      "Chiều hôm ấy, khi Cao Minh vừa từ chợ trở về tới cổng, một kỵ mã từ hướng Chợ Lớn cũng vừa thắng ngựa trước biệt thự. Người đưa thư của phủ chính, áo khoác còn đẫm bụi đường, tay cầm một ống tre đựng công văn có dấu niêm đỏ. Tiếng vó ngựa vừa dứt, cả biệt thự như nhận được một tín hiệu vô hình: gia nhân đang làm việc khắp sân đồng loạt ngừng tay một nhịp, ngẩng đầu về phía cổng, rồi mới cúi xuống làm tiếp. Một phong thư từ Chợ Lớn tới, và cả căn nhà nín thở chờ nghe nó nói gì — như một thân thể chờ nghe lệnh từ cái đầu ở xa của nó.",
      "Quản gia đón ống thư bằng cả hai tay, cúi đầu về hướng tây — hướng Chợ Lớn — rồi mở niêm ngay tại sân, đọc lớn cho toàn nhà nghe, theo lệ của phủ: thư của chủ nhân là để mọi người cùng nghe và cùng thi hành. Nội dung thư trang trọng và ngắn gọn: ông Hội đồng thương con gái bệnh lâu không khỏi, đã thỉnh được danh y ở Sài Gòn, quyết định đưa cô về Tây Viện điều trị cho gần thầy gần thuốc. Đêm trăng rằm tháng này — tức là ba ngày nữa — đoàn của phủ sẽ tới Long Hải đón cô. Nhà phải chuẩn bị sẵn: người, rương thuốc, và hồ sơ thang thuốc, không được thiếu một thứ.",
      "Người đưa thư cũng đáng chú ý: hắn là người của phủ chính, cưỡi ngựa đi hai ngày đường không nghỉ, tới nơi mà áo còn khô, mặt không một giọt mồ hôi — và trong suốt lúc quản gia đọc thư, hắn đứng yên sau lưng ngựa của mình, mắt không chớp trước cảnh cả nhà ngừng tay nghe lệnh. Hắn không phải gia nhân của biệt thự này, mà là người của cái đầu ở Chợ Lớn; sự hiện diện của hắn cho thấy cái lưới này không chỉ ở trong biệt thự. Nó có những người đi lại giữa các nhà, các phòng, như mạch máu chạy giữa các chi thể của một thân thể lớn — và những người đó, nhìn qua, đều hoàn toàn bình thường, trừ cái không chớp mắt khi nghe lệnh.",
      "Ba ngày. Con số ấy rơi xuống sân gạch như một hòn đá. Cao Minh đứng ở hiên nhà, nghe tiếng đọc thư đều đều của quản gia mà nhìn khắp một lượt những gương mặt đang nghe: bà Năm Liên đứng ở cửa bếp, mặt cắt không còn giọt máu. Thu Nguyệt ở góc sân làm rơi chiếc rổ trong tay, vội cúi xuống nhặt, tay run đến mức nhặt hai lần mới được. Người phu gánh nước đứng yên như tượng. Không một ai trong sân này ngạc nhiên. Họ chỉ sợ — sợ điều họ biết trước sẽ đến, nay đã có ngày giờ hẳn hoi.",
      "Quản gia đọc tiếp phần dặn dò chuẩn bị, và có một chi tiết nhỏ làm bà Năm đứng ở cửa bếp phải đưa tay lên bịt miệng. Đồ đạc của cô chủ khi chuyển đi chỉ gồm: y phục, thuốc thang, và hồ sơ. Những thứ không thuộc ba khoản ấy — kể cả khung thêu và các vật lặt vặt trong phòng — sẽ để lại, xử lý sau. Khung thêu thì thôi, nhưng Cao Minh biết trong phòng nàng còn một thứ còn quan trọng hơn mạng sống của nàng trong mắt chính nàng: cuộn chỉ đếm ngày. Theo tờ dặn dò kia, cuộn chỉ ấy là rác. Hắn nhìn bà Năm, và thấy trong mắt bà một quyết định vừa được hạ xuống: bằng cách nào đó, cuộn chỉ ấy sẽ không bị bỏ lại. Căn nhà này có nhiều cách giam người — và cũng có nhiều bàn tay già, trong bóng tối, đang lặng lẽ gỡ từng mắt giam một.",
      "Cuối thư, sau phần lời lẽ trang trọng của người thư ký viết thay, có một dòng chữ viết tay thêm vào, nét bút của chính Hứa Bổn Hoả, quản gia đọc chậm lại: Cha già rồi, con bé ở ngoài đó lâu quá rồi. Cao Minh nghe tới đó, suýt nữa thì bật cười giữa sân. Một người cha gạch tên con ra khỏi gia phả, rút bài vị của con khỏi từ đường, nhốt con mười một năm trong một cái lồng dưỡng bệnh — rồi viết thêm một câu thương con vào cuối tờ lệnh thu hồi, cho đủ lễ. Hắn đi qua nhiều giới, gặp không ít kẻ tàn ác; nhưng loại tàn ác biết chải chuốt cho ra vẻ nhân từ này thì ở giới nào cũng hiếm. Bổn Hoả không cần dọa ai. Với ông ta, đón nàng về chỉ là thu một tài sản về kho chính — và câu chữ tình cảm kia không phải viết cho nàng đọc. Nó viết cho sổ sách đọc.",
      "Thư đọc xong, quản gia cuộn lại cẩn thận, và cả nhà tản ra làm việc tiếp — nhanh hơn, gấp hơn, như một guồng máy vừa được lên dây cót đếm ngược. Từ giờ phút này, biệt thự Long Hải bước vào ba ngày chuẩn bị đón chủ. Và ở gian phòng trong cùng, sau hai lớp cửa, Tiểu Lan chắc chắn đã nghe thấy hết — không cần ai báo, vì thứ trong người nàng là một phần của cùng cái đầu đã viết phong thư đó. Cao Minh nghĩ đến cuộn chỉ đếm ngày của nàng: từ nay, mỗi nút chỉ nàng thắt sẽ là một ngày đếm ngược. Ba ngày — cho hắn, là thời gian để tháo một cái lưới đã dệt mười mấy năm. Cho nàng, là ba ngày cuối cùng còn được ở nơi duy nhất, dù là nhà tù, mà nàng còn có bà Năm, có bà Bảy, có cuộn chỉ của mình.",
      "Hắn bước xuống sân, đi qua những con người đang tất bật chuẩn bị cho việc đưa cô chủ của họ đi — nhiều người trong số họ thương nàng thật lòng, và tay chân họ vẫn sẽ xếp đồ, đóng rương, mở cổng cho đoàn người tới bắt nàng đi, vì đó là cách căn nhà này vận hành: nó không cần người xấu. Nó chỉ cần người tốt bị trói tay. Cao Minh đi thẳng về phía gian phòng trong cùng. Trước khi tính đến ba ngày, hắn cần nàng biết một điều từ chính miệng hắn — không phải qua mạng lưới, không phải qua bài bản của ai: là hắn đã nghe thấy hạn chót ấy, và hắn không có ý định đứng nhìn nó tới."
    ],
    "dialogue": [
      {
        "speaker": "Quản gia",
        "text": "Dạ, thư của ông Hội đồng, cả nhà nghe rõ cả rồi. Đêm rằm, phủ cho đoàn xuống đón cô chủ về Tây Viện. Mọi sự phải chu tất trước giờ đó, ai trái lệnh thì hỏi tội người ấy trước."
      },
      {
        "speaker": "Bà Năm Liên",
        "text": "Dạ… thưa ông khách, ông nghe rồi đó. Ba ngày. Cô chủ mà về lại chỗ đó thì… thì tôi già này chắc không còn thấy mặt cô nữa đâu."
      },
      {
        "speaker": "Cao Minh",
        "text": "Ba ngày là đủ. Bà đừng khóc trước mặt người của phủ — nước mắt cũng là một thứ nhà này ghi sổ."
      },
      {
        "speaker": "Cao Minh",
        "text": "Một cuộn chỉ mà trong tờ giấy đó gọi là vật lặt vặt. Trong mắt kẻ viết, nàng cũng chỉ là một khoản hồ sơ. Nghe đây, bà Năm: lúc nàng rời nhà này, đồ của nàng đi theo đủ. Một sợi chỉ cũng không ở lại cho người ta xử lý."
      }
    ],
    "choices": [
      {
        "id": "question_courier",
        "text": "Giữ người đưa thư lại, hỏi về đoàn đón người: bao nhiêu xe, bao nhiêu người, ai dẫn đoàn.",
        "next": "lh_council",
        "effects": {
          "cluesHuaGiaDelta": 1
        }
      },
      {
        "id": "go_to_her_door",
        "text": "Đi thẳng tới cửa phòng Tiểu Lan, để nàng biết hắn đã nghe và sẽ không đứng nhìn.",
        "next": "lh_council",
        "effects": {
          "lanTrustDelta": 1
        }
      }
    ]
  },
  "lh_council": {
    "id": "lh_council",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Ba người trong bếp sau",
    "backgroundId": "long-hai-corridor",
    "location": "Gian bếp sau biệt thự Hứa Gia, Long Hải",
    "companions": [
      "ba_nam_lien",
      "le_thu_nguyet"
    ],
    "narration": [
      "Đêm đó, sau trống canh một, Cao Minh xuống gian bếp sau. Đây là chỗ khuất nhất của biệt thự: bếp đã tắt lửa, chỉ còn một ngọn đèn dầu nhỏ để trên chạn bát. Bà Năm Liên đã đợi sẵn. Và một lúc sau, Thu Nguyệt lách vào qua cửa sau, áo còn ướt sương — con bé đã đi một vòng sân trong bóng tối để tới được đây mà không qua hành lang chính. Ba người ngồi quanh chiếc bàn gỗ mộc của nhà bếp: một bà già giữ tên, một đứa nhỏ chạy việc giữ danh sách, và một vị khách lạ. Đó là toàn bộ lực lượng chống lại căn nhà này, tính tới giờ phút đó.",
      "Thu Nguyệt nói trước, và điều cô nói làm rõ thêm một mảnh của ổ khóa. Tờ danh sách đóng gói rương thuốc mà cô dúi cho bà Năm — cô không chỉ có một mình nó. Hồi ở Tây Viện, cô từng phải chép lại danh sách ấy một lần cho nhà kho, và cô nhớ: cuối danh sách có ghi thứ tự mở các dấu niêm trên rương, bằng chính lối ký hiệu thương hồ đó. Mở sai thứ tự, ổ khóa trong nắp rương sẽ tự cắn lại và làm rách nát những giấy tờ mỏng đựng ở ngăn trên — người thương hồ xưa giấu hàng cấm trong rương hai đáy vẫn dùng mẹo ấy: phá hộp thì được, chứ còn nguyên vẹn được giấy tờ bên trong thì không. Cao Minh nghe, ghi nhớ mà không lấy làm lạ: thứ luật đóng nhiều dấu có thứ tự này, tông môn nào ở thế giới của hắn giữ kho tàng cũng dùng. Dân buôn ở đây và tu sĩ ở kia, hễ sợ mất đồ thì nghĩ giống nhau.",
      "Bà Năm Liên thì đưa ra thứ bà giữ: lịch thay dầu đèn và điểm danh của cả nhà, bà thuộc nằm lòng sau bao nhiêu năm. Bà nói ra một điều mà trước nay bà chỉ dám nghĩ: mỗi đêm, tới lúc thay dầu đèn canh ba, cả nhà có một quãng ngắn — chừng tàn nửa nén nhang — mà mọi việc đều chậm lại, như người ta chớp mắt. Đèn cũ rút ra, đèn mới chưa thắp, gia nhân ai cũng đang cúi đầu vào việc của mình. Bà không biết vì sao có quãng ấy. Hắn thì đọc nó theo lối của hắn: đó là lúc cái lưới chuyển nhịp, nới tay trên mọi vật chủ cùng một lúc, như một người thợ phải buông cả cuộn chỉ xuống để đếm lại từng mối. Một cái chớp mắt của căn nhà — ngắn, nhưng là kẽ hở duy nhất lặp lại mỗi đêm.",
      "Ngay giữa buổi bàn việc, một chuyện nhỏ xảy ra làm cả ba người cùng im lặng: ở gian bếp chính bên kia sân, đúng khắc nếm lại của cả nhà, tiếng muỗng chạm vào nồi vang lên một lần — và tại bàn này, tay Thu Nguyệt đang rót nước cũng khựng lại đúng một nhịp, chén nước sóng ra một giọt, rồi cô mới rót tiếp được. Con bé nhìn bàn tay mình, mặt tái đi. Bà Năm nắm lấy tay nó, giữ chặt. Cao Minh nói khẽ: thấy chưa — ngay cả ở đây, ngay cả giờ này, nó vẫn với tới được. Cho nên mọi việc bàn ở đây, nói xong là phải quên đi một nửa: ai nhớ hết, người đó thành cái kho cho nó lục. Đó là lý do cuộc họp này diễn ra sau canh một, và mọi kế hoạch lớn đều chỉ được giữ mỗi người một mảnh.",
      "Rồi ba người nói đến những người còn lại trong nhà, từng người một, như điểm lại một danh sách trước trận đánh. Bà Bảy đầu bếp: bụng tốt, miệng cứng, thân thì bị mượn đã sâu — tin được cái bụng của bà, đừng tin đôi tay bà vào giờ điểm danh. Ông Tư quản kho: không biết gì, chỉ biết giữ kho — vô hại và cũng vô dụng. Lão thư ký gia phả: sợ đến mức sẽ khai hết nếu bị hỏi — phải tránh xa chuyện này. Anh Thới gánh nước và anh gác cổng: người tốt, bị mượn tay nhiều nhất, tới lúc cần sẽ phải có người giữ họ lại mà không làm họ bị thương. Quản gia: không điểm lại được — không ai trong ba người dám chắc quản gia là người đang bị mượn, hay là người tự nguyện cầm roi cho căn nhà này. Câu hỏi ấy để ngỏ, và nó là câu hỏi nguy hiểm nhất trong phòng bếp đêm đó.",
      "Bà Năm còn nói thêm về cuốn sổ bếp của bà — mối nguy mà cả ba đều thấy rõ: nếu đoàn kiểm tra ngày mai kia, hoặc đoàn đón người đêm rằm, lục tới cuốn sổ ấy và đọc được ba chữ ở góc trang, bà sẽ là người đầu tiên bị hỏi. Bà đã tính sẵn đường lui của riêng bà: bà chép lại toàn bộ chi tiêu của một cuốn sổ mới, sạch sẽ, từ mấy hôm nay; cuốn sổ cũ có chữ, bà giấu dưới đáy rương quần áo của mình, bọc trong tấm áo dài của nhị phu nhân để lại. Bà nói: sổ giả thì để cho người ta kiểm, sổ thật thì để dành cho ngày ra tòa — vì bà tin, dù không biết tin vào đâu, rằng sẽ có một ngày những việc trong căn nhà này phải được nói ra trước mặt người ngoài, và hôm đó bà muốn có cái mà đưa ra. Một bà già không biết chữ nghĩa bao nhiêu, đã một mình chuẩn bị hồ sơ cho một phiên tòa chưa ai hẹn ngày.",
      "Kế hoạch hình thành qua những lời thì thầm, từng mảnh một, chưa thành hình mà đã có xương sống: đoàn đón người tới vào đêm rằm, cổng chính sẽ là nơi bận rộn và được canh giữ kỹ nhất — nhưng cũng là lúc cả nhà phải dồn về phía cổng theo bài bản tiếp đoàn, để sân sau và đường mòn ra bãi biển trống người. Điểm neo không cắt trong đêm trốn — cắt là đánh động cả nhà — mà chỉ lợi dụng tầm của chúng: ra khỏi vòng tường, qua khỏi bãi cạn, sợi của căn nhà sẽ mỏng dần. Và quan trọng nhất, cả ba người đều đồng ý một điều trước khi Cao Minh kịp nói: cô chủ phải được hỏi. Không ai trong phòng bếp này được phép quyết thay cô, dù là quyết để cứu cô.",
      "Họ chia tay nhau khi đèn dầu gần cạn. Bà Năm đi trước, về dãy ngang bằng lối sân sau. Thu Nguyệt chờ thêm một lúc mới lách ra, miệng còn dặn lại: thứ tự mở niêm, cô nhớ được bảy dấu — tới lúc cần, cô sẽ đọc lại cho mà nghe, dù có phải trả bằng cái gì. Cao Minh ngồi lại một mình trong bếp tối. Ba ngày. Một cái chớp mắt mỗi đêm. Một cuộn chỉ đếm ngày sắp bị cắt đứt giữa chừng. Hắn bắt đầu tính, không phải cách phá căn nhà này — phá thì dễ — mà là cách đưa một người con gái ra khỏi nó, nguyên vẹn, còn là chính nàng, và được chính nàng gật đầu."
    ],
    "dialogue": [
      {
        "speaker": "Lê Thu Nguyệt",
        "text": "Dạ, thưa ông, em nói thiệt một câu này: trong nhà ai cũng tưởng em là tai mắt của quản gia. Em để cho họ tưởng vậy, vì có thế em mới chạy qua chạy lại được mà không ai để ý. Em là tai mắt của cô chủ. Từ hồi em mười hai tuổi tới giờ."
      },
      {
        "speaker": "Bà Năm Liên",
        "text": "Dạ, thưa ông, tôi già rồi, tôi chỉ xin ông một việc. Đưa được cô đi thì đưa. Mà lỡ không đưa được… thì ông đừng để cô về Tây Viện một mình không có ai gọi tên cô. Ở đó người ta không gọi tên cô đâu, thưa ông."
      },
      {
        "speaker": "Cao Minh",
        "text": "Nghe cho rõ. Bổn tọa không hứa chuyện ngoài tay mình. Một chuyện thì chắc: nàng sẽ được hỏi. Nàng gật hay lắc, việc đi theo tiếng của nàng — kể cả khi tiếng đó trái ý bổn tọa."
      }
    ],
    "choices": [
      {
        "id": "council_oath",
        "text": "Thề trước hai người: trước đêm rằm, sẽ đưa Tiểu Lan ra khỏi căn nhà này.",
        "next": "lh_lan_question",
        "effects": {
          "lanTrustDelta": 2
        },
        "flags": {
          "councilOath": true
        }
      },
      {
        "id": "council_quiet",
        "text": "Dặn hai người giữ kín từng phần việc, không ai biết việc của ai ngoài phần mình.",
        "next": "lh_lan_question",
        "effects": {
          "cluesHuaGiaDelta": 1
        },
        "flags": {
          "councilQuiet": true
        }
      }
    ]
  },
  "lh_lan_question": {
    "id": "lh_lan_question",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Nếu tôi không còn là tôi",
    "backgroundId": "tieu-lan-room",
    "location": "Phòng Hứa Tiểu Lan, biệt thự Long Hải",
    "companions": [],
    "narration": [
      "Cao Minh vào phòng Tiểu Lan khi đêm đã khuya, sau cuộc gặp ở bếp sau. Nàng chưa ngủ. Nàng ngồi bên cửa sổ đóng kín, cuộn chỉ đếm ngày để trên đùi, và rõ ràng nàng đã biết hết về phong thư — không ai cần báo cho nàng, vì mệnh lệnh đón nàng về Tây Viện đã đi qua chính mạng lưới trong người nàng, rõ ràng từng chữ, như mọi mệnh lệnh khác. Nàng nói, giọng bình thản đến lạnh người: nó không giấu tôi chuyện gì cả. Nó cho tôi nghe hết. Nó muốn tôi biết là ba ngày nữa tôi về Tây Viện, và nó muốn tôi tự tính xem chống cự thì được gì.",
      "Nàng pha trà cho hắn bằng chính tay mình — chậm rãi, vụng về hơn gia nhân nhiều, mà hắn không nói gì, chỉ ngồi chờ. Nàng nói, tối nay tay nàng là của nàng, từ lúc chuông điểm canh một tới giờ chưa bị mượn lần nào; những tối như thế không nhiều, và nàng học cách dùng chúng cho những việc quan trọng nhất: thắt nút chỉ, viết giấy dặn mình, và suy nghĩ những câu hỏi không dám nghĩ vào lúc nó đang nghe rõ nhất. Rồi nàng nhìn hắn: có điều, thưa ngài, tôi phải hỏi ngài câu này vào một tối tay tôi còn là của tôi — vì nếu hỏi vào lúc khác, tôi không chắc câu trả lời của ngài sẽ tới được chỗ của tôi, hay chỉ tới chỗ của nó.",
      "Rồi nàng im lặng một lúc lâu, tay vân vê một nút chỉ. Khi nàng ngẩng lên, câu hỏi nàng hỏi không phải về đêm rằm, không phải về Tây Viện, cũng không phải về việc trốn đi. Nàng hỏi về một chuyện xa hơn và sâu hơn — chuyện mà có lẽ nàng đã hỏi chính mình trong đầu suốt nhiều năm, và đây là lần đầu nàng hỏi thành tiếng với một người ngoài.",
      "Nàng kể cho hắn nghe cảm giác ấy, một lần duy nhất, bằng những lời chính xác của một người đã sống trong đó mười một năm. Nàng nói: nó giống như ngồi trong một căn buồng nhỏ, nghe tiếng chân của chính mình đi ngoài hành lang. Có những sáng nàng tỉnh dậy, chân lạnh ngắt và đau, gót chân dính cát biển mà nàng không nhớ đã đi đâu — nàng biết thân nàng đã đi trong đêm, chỉ không biết đi đâu và làm gì. Có những lúc đang nói chuyện với bà Năm, nàng nghe câu tiếp theo của chính mình nói ra trước khi nàng kịp nghĩ — lễ phép hơn, đúng mực hơn, và không phải của nàng. Nàng nói: cái đáng sợ không phải là bị điều khiển. Cái đáng sợ là bị thay thế một cách hoàn hảo, đến mức người ngoài nhìn vào không thấy thiếu một ai — vì cái ghế của nàng vẫn có người ngồi, chỉ không phải là nàng.",
      "Nàng nói: giả sử một ngày nào đó, thứ trong người tôi thắng hẳn. Không phải nó giết tôi — nó không cần giết — mà là nó thay tôi sống trọn vẹn: nó điều khiển nhịp tim tôi, hơi thở tôi, tay chân tôi, và sau cùng là cả miệng tôi, cả mắt tôi. Người ngồi đây khi ấy, nói năng lễ phép, biết cười biết khóc, lại chính là nó mượn thân này. Còn tôi — cái phần biết mình là Hứa Tiểu Lan — hoặc đã tan, hoặc bị đẩy vào một góc tối nào đó trong chính đầu mình, không nói được, không cử động được, chỉ còn biết nhìn ra. Nàng hỏi: tới ngày đó, ngài sẽ làm gì?",
      "Câu hỏi ấy là trái tim của mọi chuyện trong căn nhà này. Cao Minh đã gặp đủ loại chiếm xác, đoạt hồn ở các giới — mà chưa ai hỏi hắn câu này từ phía của người bị chiếm. Nàng không hỏi ngài có cứu được tôi không. Nàng hỏi: ngài có nhận ra tôi không. Và nếu không còn tôi nữa, ngài có dám thừa nhận điều đó không — hay ngài sẽ tự dối mình, giữ lại cái thân này, gọi nó bằng tên tôi, và bảo thiên hạ rằng ngài đã cứu được tôi?",
      "Hắn trả lời nàng rất chậm. Có những câu trả lời, nói sai một chữ là thành nói dối — mà với nàng, hắn không định nói dối. Hắn không hứa những điều không chắc. Hắn chỉ nói phần hắn chắc: chừng nào tiếng nói ra từ miệng nàng còn là của nàng, hắn nghe nàng. Ngày nào tiếng ấy không còn là của nàng nữa, hắn sẽ không tự dối mình rằng đó là nàng — và cũng không để ai khác dối thay.",
      "Nàng nghe xong, im lặng rất lâu. Rồi nàng làm một việc nhỏ: nàng thắt thêm một nút vào cuộn chỉ — không phải nút cho hôm nay, hôm nay nàng đã thắt rồi. Nàng nói, nút này là cho câu hỏi vừa rồi. Lâu nay, mỗi nút của nàng đều là một ngày nàng còn là mình. Từ giờ, có những nút không đếm ngày — chúng đếm những lần có người đối xử với nàng như một người còn quyền quyết định đời mình, dù chỉ là trong một câu nói. Nàng nói: thưa ngài, những nút như thế này, mười tám năm nay, đếm trên đầu ngón tay cũng chưa hết một bàn tay.",
      "Trước khi hắn ra về, nàng nói thêm một điều, và điều này nàng dặn hắn phải nghe cho kỹ: ngài đừng nói cho tôi biết hết kế hoạch của ngài. Nàng nói câu ấy rất bình tĩnh, như đã nghĩ rất lâu. Nếu nàng biết, nó sẽ biết — không phải vì nàng khai, mà vì nó ở ngay trong đầu nàng, nghe bằng tai nàng, đọc bằng mắt nàng. Có những điều, để cứu nàng, phải giấu chính nàng. Nàng nói: tôi không giận điều đó đâu, thưa ngài. Người ta giấu một đứa trẻ chuyện đau lòng vì thương nó. Ngài giấu tôi kế hoạch vì trong đầu tôi có kẻ thù ngồi nghe — hai việc khác nhau, tôi phân biệt được. Chỉ xin ngài một điều: khi mọi việc xong, ngài kể lại hết cho tôi nghe. Kể như kể cho một người có quyền được biết đời mình. Hắn nhận lời — nhận như ghi một món nợ, không thề thốt."
    ],
    "dialogue": [
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài, tôi hỏi ngài một câu, ngài phải trả lời thật. Nếu một ngày, tôi không còn là tôi nữa — nếu thứ trong người tôi thắng, và cái ngồi đây nói chuyện với ngài chỉ còn là tiếng của nó mượn miệng tôi — ngài sẽ làm gì?"
      },
      {
        "speaker": "Cao Minh",
        "text": "Bổn tọa sẽ gọi đúng tên của thứ đang ngồi đó. Và bổn tọa sẽ không gọi nó là nàng."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Còn nếu tôi vẫn còn ở trong đó, thưa ngài? Ở một góc nào đó, không nói được, không ra được — mà ngài không chắc?"
      },
      {
        "speaker": "Cao Minh",
        "text": "Thì bổn tọa xử nó như một kẻ chiếm chỗ — không phải như nàng. Sai một lần, bổn tọa chịu. Còn quyết định sau cùng — sống thế nào, đi đâu — là của nàng, chừng nào nàng còn quyết được. Phần của bổn tọa là giữ cho nàng còn nguyên cái quyền đó. Không hơn."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Dạ. Vậy thì tôi yên lòng một nửa rồi, thưa ngài. Nửa còn lại… đợi qua đêm rằm hẵng tính."
      }
    ],
    "choices": [
      {
        "id": "vow_protect_self",
        "text": "Nói điều hắn đã quyết: giữ nàng lại là nàng, gỡ từng sợi một cho đến sợi cuối — hắn không thề, hắn chỉ thông báo.",
        "next": "lh_anchor_bell",
        "effects": {
          "lanTrustDelta": 2
        },
        "route": {
          "id": "bao_ho",
          "delta": 1
        }
      },
      {
        "id": "vow_her_choice",
        "text": "Nhắc nàng một điều hắn coi là hiển nhiên: quyết định thuộc về nàng; phần của hắn là giữ cho tới ngày đó nàng còn là người được quyết.",
        "next": "lh_anchor_bell",
        "effects": {
          "lanTrustDelta": 2
        },
        "route": {
          "id": "tu_quyet",
          "delta": 1
        }
      }
    ]
  },
  "lh_anchor_bell": {
    "id": "lh_anchor_bell",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Điểm neo thứ hai: chuông cổng",
    "backgroundId": "long-hai-dawn-gate",
    "location": "Cổng biệt thự Hứa Gia, Long Hải",
    "companions": [
      "npc_servant_male"
    ],
    "narration": [
      "Trước khi trời sáng hẳn, Cao Minh ra cổng biệt thự, nơi treo quả chuông đồng nhỏ mà cả nhà gọi là chuông điểm giờ. Người gác đêm — chính là người hôm trước bị mượn tay kéo then chắn lối vào của hắn — đang đứng trực bên cổng, mắt thâm quầng. Thấy Cao Minh, anh ta giật mình, rồi cái giật mình ấy bị đè xuống rất nhanh, như một con cá vừa nhô lên mặt nước đã bị kéo xuống lại. Cao Minh không nói gì về chuyện hôm trước. Hắn chỉ đứng xem quả chuông.",
      "Chuông không lớn, đúc bằng đồng đen, trên thân có khắc một vòng ấn văn cùng một hệ với vòng triện ở miệng giếng sau. Điều khác biệt là ở sợi dây chuông và cái dùi: chúng được thay mới đều đặn, sờn tới đâu thay tới đó, như thể việc chuông kêu đúng tiếng là việc sống còn. Dưới thần niệm, quả chuông hiện rõ là nút thứ hai của căn nhà — và là nút của vòng ngoài: nó không giữ người, nó giữ NHỊP. Mỗi tiếng chuông là một lần mạng lưới gõ nhịp xuống toàn bộ biệt thự: tới giờ thay đèn, giờ điểm danh, giờ nếm lại thức ăn, giờ các cánh tay bị mượn cử động. Âm thanh là sợi dây rẻ nhất và xa nhất — chuông kêu tới đâu, vòng ngoài của lưới căng tới đó.",
      "Đứng ở cổng, hắn ráp lại những gì đã thấy thành một tấm bản đồ theo lối của hắn. Miệng giếng sau: nút giữ người ở vòng trong của sân sau và dãy ngang. Bàn thờ từ đường: cái gốc, nơi mọi sợi tụ về và nối lên phía Chợ Lớn. Chuông cổng này: nút giữ nhịp cho vòng ngoài, cổng và sân trước. Ba nút, ba tầng, và thứ tự tháo tự nó đã rõ: tháo chuông trước, cả nhà mất nhịp một lúc nhưng gốc vẫn còn, lưới sẽ tự dệt lại nhịp khác; tháo giếng trước, người ở vòng trong bị giật; tháo gốc từ đường trước — là giật cả tấm lưới cùng một lúc, với nhịp tim của Tiểu Lan treo ở giữa. Gốc phải sau cùng. Ngọn trước, gốc sau, và vòng gần nàng nhất phải được tháo khi nàng đã ở ngoài tầm của nó.",
      "Hắn còn lần được một điều nữa từ quả chuông này: nhịp lệnh của nó không chạy đều ra mọi hướng. Từ cổng, nhịp đi vào sân trước, qua hành lang, qua các dãy phòng — và gian phòng trong cùng, phòng của nàng, luôn là điểm tới cuối cùng của mỗi lượt nhịp, chậm hơn mọi nơi đúng một khắc. Nghĩa là trong cái trật tự của căn nhà này, nàng ở cuối hàng — không phải vì nàng ít quan trọng nhất, mà vì nhịp phải chạy qua tất cả mọi người rồi mới tới nàng, như người ta để dành món quý nhất đến cuối bữa. Hay nói cho đúng hơn: mọi người trong nhà này bị điều khiển một phần là để làm đường dẫn cho mệnh lệnh chạy tới chỗ nàng. Cả căn nhà là một sợi dây dài, và nàng là cái chuông ở đầu kia của sợi dây đó.",
      "Hắn bỗng nhớ tới chiếc rương thuốc và lời Thu Nguyệt trong bếp: thứ tự mở niêm. Cái rương kia và tấm lưới này dùng chung một lối: đóng bằng nhiều dấu, và các dấu có thứ tự — lối của dân buôn mà con bé đã chép danh sách đến thuộc lòng. Hắn không lạ thứ luật ấy; ở thế giới của hắn, tông môn nào giữ kho tàng cũng đóng ấn theo thứ tự, mở sai là ấn tự cắn lại. Nhưng hắn cũng nhìn ra mặt trái của luật ấy, mặt mà có lẽ người đặt ra nó không tính đến: hộp hỏng không có nghĩa là đồ trong hộp mất. Giấy bị xé vẫn đọc được nếu nhặt đủ mảnh. Hộp bị phá vẫn lấy được đồ, chỉ là không còn nguyên vẹn để đóng lại như cũ. Thứ tự sai phải trả giá bằng sự nguyên vẹn — chứ không phải bằng sự tồn tại. Hắn ghi nhớ điều này như ghi nhớ một đường lui cuối cùng: nếu có ngày buộc phải tháo sai thứ tự, cái mất sẽ là sự lành lặn, không phải là con người.",
      "Người gác đêm bỗng lên tiếng, giọng khàn đặc vì thức và vì sợ. Anh nói, chuông này anh kéo mỗi ngày bốn lượt, mười một năm rồi. Có những lượt không phải giờ gì cả — nửa đêm, chuông tự có lệnh kéo; anh đang ngủ trong chòi gác, tay anh đã cầm dây chuông trước khi anh tỉnh hẳn. Anh hỏi Cao Minh một câu mà có lẽ anh đã hỏi chính mình mười một năm: kéo chuông cho cái nhà này điểm danh người ta, thì tội đó có tính là tội của anh không. Cao Minh trả lời anh ta như đã trả lời người phu gánh nước ở miệng giếng: tội của kẻ ra lệnh, không phải của sợi dây. Anh gác cúi đầu, và lần đầu tiên sau mười một năm, anh khóc không thành tiếng ngay bên quả chuông của mình.",
      "Trời hửng sáng. Cao Minh không chạm vào quả chuông. Hắn đã có được thứ hắn cần: nút thứ hai, vị trí của nó trong thứ tự, và một hiểu biết nữa về lối đóng dấu có thứ tự của nhà này — rằng mọi ổ khóa của họ đều có thể phá, và cái giá của việc phá sai cách luôn được báo trước, không giấu giếm. Còn chưa đầy ba ngày nữa là tới đêm rằm. Hắn quay vào, đi qua sân trước còn đẫm sương, và bắt đầu tính quãng đường ra biển — vì tháo lưới là việc của sau này; việc của bây giờ là tìm cho nàng một con đường ra khỏi tầm của nó.",
      "Anh gác kể thêm một con số mà anh nói anh không bao giờ quên: đêm cô chủ được đưa từ Tây Viện ra tới biệt thự này, mười một năm trước — anh gật đầu, đúng mười một năm, năm ấy cô mới lên bảy — chuông cổng kêu một trăm lẻ tám tiếng trong đêm, không ai kéo mà nó tự kêu, gia nhân cả nhà quỳ hết xuống sân không ai dám đứng. Anh là người kéo chuông nên anh đếm. Anh nói, từ đêm đó anh biết cái chuông này không phải để báo giờ cho người. Nó báo giờ cho một thứ khác, và người chỉ là kẻ đứng gần nhất để nghe thay. Cao Minh ghi nhớ cả điều này: mạng lưới đã đánh dấu ngày nàng tới bằng một trăm lẻ tám tiếng chuông. Rất có thể, đêm rằm sắp tới, nó cũng định đánh dấu ngày nàng đi bằng một lượt chuông như thế — và hắn sẽ phải có mặt ở đây trước khi tiếng chuông đầu tiên kịp vang."
    ],
    "dialogue": [
      {
        "speaker": "Người gác",
        "text": "Ông… ông đừng đứng gần chuông lâu. Tới giờ là nó kêu. Không phải con kéo đâu, thưa ông. Tay con nó tự kéo. Mười một năm nay, con không biết con đã điểm danh cho cái nhà này bao nhiêu lượt người nữa."
      },
      {
        "speaker": "Cao Minh",
        "text": "Ngươi kéo chuông, hay chuông kéo ngươi — bổn tọa phân biệt được. Ngươi không phải sợ bổn tọa tính sổ với một sợi dây thừng."
      },
      {
        "speaker": "Người gác",
        "text": "Dạ… ông nói vậy, con đội ơn ông. Mà ông khách ơi, con nói nhỏ ông nghe: đêm rằm này, chuông sẽ kêu một lượt dài lắm. Hồi cô chủ bị đưa từ Tây Viện ra đây, nó cũng kêu một lượt dài như vậy."
      },
      {
        "speaker": "Cao Minh",
        "text": "Lần này, khi chuông kêu dứt, người nó điểm danh sẽ không còn ở đây để nó điểm nữa."
      },
      {
        "speaker": "Người gác",
        "text": "Dạ, đêm rằm, nếu chuông kêu mà con còn đứng đây… ông đừng trách con. Tay con nó không nghe con, ông biết rồi đó."
      },
      {
        "speaker": "Cao Minh",
        "text": "Bổn tọa biết. Đêm rằm, tay ngươi có giơ lên chắn đường, bổn tọa giữ lại — không làm ngươi đau. Còn ngươi, cứ việc làm sợi dây của ngươi."
      }
    ],
    "choices": [
      {
        "id": "ring_once",
        "text": "Tự tay kéo chuông một tiếng để cảm nhận phản ứng của toàn bộ mạng lưới.",
        "next": "lh_scout_coast",
        "effects": {
          "cluesHuaGiaDelta": 1,
          "lanMaterInfluenceDelta": 2
        }
      },
      {
        "id": "memorize_knots",
        "text": "Không chạm vào chuông, chỉ ghi nhớ thứ tự các nút dây và vòng ấn văn.",
        "next": "lh_scout_coast",
        "effects": {
          "cluesHuaGiaDelta": 2
        }
      }
    ]
  },
  "lh_scout_coast": {
    "id": "lh_scout_coast",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Đường biển rút lui",
    "backgroundId": "long-hai-coast",
    "location": "Bờ biển Long Hải, Nam Kỳ",
    "narration": [
      "Buổi chiều cuối cùng trước ngày đoàn kiểm tra tới, Cao Minh đi dọc bờ biển Long Hải một mình, từ chân đồi biệt thự ra tới bãi cạn thứ ba. Hắn đi không phải để ngắm biển. Hắn đi để đo một thứ vô hình: tầm của mạng lưới. Thần niệm của hắn quét liên tục về phía căn nhà sau lưng — và đúng như hắn đã thấy ở hàng rào sau hôm ở miệng giếng, càng đi xa, những sợi liên kết bám theo những người hắn gặp trên đường càng mỏng đi. Tới bãi cạn thứ nhất, chúng còn như tơ. Tới bãi cạn thứ hai, như khói. Qua khỏi bãi cạn thứ ba, nơi mỏm đá đen chìa ra biển, chúng đứt hẳn: không còn một sợi nào với tới đây được nữa.",
      "Đó là ranh giới sống còn của mọi kế hoạch: điểm neo cắm ở đâu, tay của căn nhà với tới đó; ngoài tầm neo, mệnh lệnh của nó không còn chỗ bám, chỉ còn vọng lại yếu ớt như tiếng gọi qua đồng. Một người bị mượn tay mà được đưa ra khỏi tầm neo sẽ dần dần lấy lại tay mình — không ngay lập tức, không dễ dàng — nhưng sợi dây đã không còn ai giữ đầu kia nữa. Và với Tiểu Lan, người mà phần điều phối sự sống đang nằm trong tay mạng lưới, việc ra khỏi tầm neo là con dao hai lưỡi: thoát khỏi mệnh lệnh của nó, nhưng cũng thoát khỏi sự điều phối của nó. Hắn sẽ phải tính toán quãng đường ấy như tính một ca phẫu thuật đang chạy: nhanh, chính xác, và phải có người giữ nhịp thở cho nàng trong suốt quãng chuyển tiếp. Hắn ghi nhớ từng mỏm đá, từng khúc quanh của đường bờ biển như ghi nhớ một bản đồ tháo lui.",
      "Hắn cắm một nhánh cây khô ở mỏm đá thứ ba làm dấu — một cái dấu chỉ mình hắn hiểu, cho một đêm trăng sáng mà mọi con đường đều phải thuộc lòng như thuộc một bài quyền.",
      "Ông Ba kể, cho lời nói của mình có thêm một bằng chứng mà ông đã giữ mười mấy năm: hồi ông còn làm trong nhà, có một đứa nhỏ phụ bếp bị đánh oan, nửa đêm bỏ trốn qua đường bờ biển này. Cả nhà không ai đuổi theo bằng chân — họ chỉ đứng ở cổng nhìn. Đứa nhỏ chạy được tới bãi cạn thứ ba thì đứng khựng lại, như đâm sầm vào một bức tường không có ở đó. Nó đứng yên ở mỏm đá đúng một khắc, rồi quay đầu, tự đi bộ trở về biệt thự, bước đều như đi trong đội ngũ, về tới cổng thì quỳ xuống xin tội. Ông Ba nói: từ đó tui biết cái nhà đó nó có một cái vòng. Vòng tới mỏm đá đen là hết. Ai ra khỏi vòng đó mà còn đi được bằng chân của mình, người đó mới thiệt là ra.",
      "Ở bãi cạn thứ ba, chiếc đò của ông Ba Lưới đang nằm úp trên cát, và ông già đang ngồi vá lại một tấm lưới rách, ba ngón tay trái khéo léo không thua gì tay lành. Ông ngẩng lên nhìn vị khách từ căn nhà trên đồi đi tới, không ngạc nhiên. Dân biển sống bằng dự cảm thời tiết và dự cảm người. Ông nói: tui biết ông sẽ tới. Từ hôm ở chợ, tui về tui coi lại đò rồi. Đò của tui nhỏ, chở được bốn người với thúng mủng, sóng lớn thì chịu, sóng vừa thì qua được bãi cạn trong đêm.",
      {
        "text": "Ông Ba còn nhớ chuyện ở chợ: vị khách này đã mua trọn mẻ cá sớm của ông, không trả một lời giá, lại biểu gửi hết vào bếp của căn nhà kia. Dân chài không quên ơn bằng cách nói nhiều lời. Đêm đó về tới nhà, ông coi lại chiếc đò của mình: thay một tấm ván mục ở đáy, vá chỗ rò nơi mũi thuyền. Người chịu mua cá cho kẻ khác mà không mặc cả, ông nghĩ, thì khi nhờ tới chiếc đò của một lão chài cụt hai ngón tay, cũng không phải hạng người tính thiệt hơn.",
        "if": "fishermanKindness"
      },
      "Cao Minh nói thẳng kế hoạch ở mức cần thiết: đêm rằm, có một người bệnh nặng phải rời khỏi căn nhà trên đồi bằng đường biển, không trống không kèn, không để ai thấy. Ông Ba nghe, gật gù, rồi hỏi đúng một câu của dân biển thực thụ: người bệnh đó, là người hay là hàng. Cao Minh đáp: là người, và là người đã bị đối xử như hàng quá lâu rồi. Ông già cười khùng khục, nói vậy thì được — đò của ông chở người thì lấy tiền công, mà chở người thoát khỏi cái nhà đó thì ông không lấy tiền. Ông ra giá khác: tới đêm đó, nếu trên bãi có thêm người của nhà đó chạy ra — gia nhân nào thoát được theo — thì phải cho họ lên đò hết, không bỏ ai lại. Và khi mọi chuyện xong, ông muốn biết tên của người bệnh, để ông còn biết mình đã chở ai qua bãi cạn này.",
      "Cao Minh nhìn ông già một lúc. Một đời người bị căn nhà kia lấy mất hai ngón tay và một năm trí nhớ, vậy mà giá ông đòi không phải tiền, không phải thù — là không bỏ ai lại, và được biết một cái tên. Ở thế giới của hắn, kẻ yếu mà dám ra giá như thế này trước mặt kẻ mạnh, hắn chưa từng gặp. Hắn nhận cả hai điều, không bớt một chữ. Thỏa thuận xong, ông Ba chỉ tay ra phía mỏm đá: đêm rằm trăng sáng, đò không thể đậu ở bến chính; ông sẽ chờ ở sau mỏm đá đen, tắt đèn, từ giờ hợi. Nếu qua giờ hợi một khắc mà không thấy ai, ông sẽ chèo về và coi như không có chuyện gì — dân biển không chờ quá một con nước.",
      "Trên đường quay về biệt thự, Cao Minh đi chậm qua từng bãi cạn, đếm lại số bước và khắc sâu vào trí nhớ địa hình trong ánh chiều tà: đường mòn từ cổng sau xuống bãi, chỗ cát lún phải tránh, chỗ rạn đá người bệnh không qua nổi nếu phải tự đi bộ — nàng sẽ phải được cõng qua đoạn đó, và người cõng phải là hắn, vì chỉ hắn mới giữ được nhịp thở cho nàng khi ra khỏi tầm neo. Mọi mảnh của kế hoạch đang dần khép lại: một cái chớp mắt mỗi đêm, một con đường bờ biển, một chiếc đò không lấy tiền, một hạn chót đêm rằm. Chỉ còn một biến số chưa nằm trong tính toán của hắn: ngày mai, đoàn kiểm tra của Giới Phòng sẽ tới — và căn nhà này sắp phải diễn vai một gia đình bình thường trước mặt chính những người đã gạch tên cô chủ của nó."
    ],
    "dialogue": [
      {
        "speaker": "Ông Ba Lưới",
        "text": "Đò tui đậu sau mỏm đá đen, tắt đèn, từ giờ hợi đêm rằm. Qua một khắc mà không thấy ai, tui chèo về. Biển không chờ ai, ông khách, mà tui cũng già rồi, không chờ nổi hai con nước đâu."
      },
      {
        "speaker": "Cao Minh",
        "text": "Giá của ngươi, bổn tọa nhận đủ hai điều. Không bỏ ai lại trên bãi. Còn tên nàng — qua được bãi cạn, ngươi sẽ nghe đầy đủ."
      },
      {
        "speaker": "Ông Ba Lưới",
        "text": "Vậy là xong. Ông nhớ cho kỹ: người của cái nhà đó mà ra tới bãi này rồi, thì đừng để họ quay đầu lại nhìn nhà. Nhìn lại là chân nó mềm ra. Tui chở nhiều người chạy trốn rồi, tui biết."
      },
      {
        "speaker": "Cao Minh",
        "text": "Đêm rằm, sau mỏm đá đen. Bổn tọa sẽ có mặt — và không đi một mình."
      }
    ],
    "choices": [
      {
        "id": "accept_price",
        "text": "Nhận cái giá của ông Ba: không bỏ ai lại, và nói tên nàng khi qua bãi.",
        "next": "lh_inspector_notice",
        "flags": {
          "boatPromised": true
        }
      },
      {
        "id": "offer_silver",
        "text": "Vẫn trả thêm một nén bạc tiền công, dù ông Ba đã nói không lấy.",
        "next": "lh_inspector_notice",
        "effects": {
          "suppliesDelta": -1
        },
        "flags": {
          "boatBought": true
        }
      }
    ]
  },
  "lh_inspector_notice": {
    "id": "lh_inspector_notice",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Trát của Giới Phòng",
    "backgroundId": "long-hai-saloon",
    "location": "Phòng khách biệt thự Hứa Gia, Long Hải",
    "companions": [
      "steward"
    ],
    "narration": [
      "Sáng hôm sau — ngày thứ hai trong ba ngày đếm ngược — một trát chính thức được đưa tới biệt thự, đóng dấu đỏ của Giới Phòng. Không phải thư của Bổn Hoả. Đây là trát kiểm tra của phòng giữ sổ sách — thứ bộ máy mà người trong nhà chỉ dám nhắc tới bằng cái tên in trên đầu trát: Lục Môn. Theo trát, ngày mai một đoàn kiểm tra sẽ tới biệt thự Long Hải, đối chiếu gia phả, kiểm kê rương thuốc và hồ sơ, và — theo đúng nguyên văn — xác minh tình trạng của người bệnh đang dưỡng tại biệt thự, để sổ sách được khép lại cho khớp. Cao Minh đọc trát mà thấy rõ hai bàn tay của cùng một thân thể: đêm rằm đón người đi là việc của phủ; ngày mai kiểm tra là việc của Giới Phòng. Một tay thu hồi, một tay nghiệm thu.",
      "Căn nhà phản ứng với trát như một ổ kiến bị động. Quản gia triệu tập gia nhân ngay tại sân trước, phân việc với tốc độ và sự chính xác của một viên quan tập trận: quét dọn từ đường, lau lại các kệ bài vị, kiểm tra từng dấu niêm trên rương thuốc, chép lại sổ bếp ba tháng gần nhất cho sạch đẹp, và — đáng chú ý nhất — tập cho từng người thuộc sẵn câu trả lời của mình. Ai được hỏi về cô chủ thì đáp một câu duy nhất: cô chủ bệnh nặng, đang ngủ yên, thầy thuốc dặn không được kinh động. Cao Minh đứng xem buổi phân công ấy và nhận ra một điều lạnh gáy: căn nhà này không sợ đoàn kiểm tra phát hiện ra sự thật. Nó sợ đoàn kiểm tra phát hiện ra nó diễn chưa đủ giống sự thật mà sổ sách đã ghi.",
      "Trong các việc quản gia phân, có một việc Cao Minh đọc được nguyên do không cần ai giải thích: kê khai khách lạ đang trọ trong nhà. Cái danh mà cả chợ Long Hải đã gọi hắn — thầy pháp, thầy thuốc phương xa nhà thỉnh về chữa bệnh cho cô chủ — giờ được quản gia đọc lên thành một dòng khai báo hẳn hoi, để đoàn kiểm tra nghe mà không phải hỏi thêm. Hắn hơi thấy thú: căn nhà đang mượn chính tin đồn của dân chợ để may cho hắn một cái vỏ. Và một vị khách mang hai thanh kiếm lơ lửng trong một biệt thự dưỡng bệnh, hẳn là thứ tin tức không nằm yên trong vòng tường được lâu.",
      "Trong trát còn một dòng làm hắn dừng lại lâu hơn: đoàn kiểm tra sẽ xem mặt người bệnh từ xa để đối chiếu chân dung trong hồ sơ. Xem mặt từ xa — bốn chữ viết bằng giọng công văn vô cảm, mà dịch ra đời thật là: nàng sẽ bị đưa ra đứng ở một khoảng sân, cho những người không quen biết nhìn, đo, ghi chép, như người ta nghiệm thu một món đồ sắp chuyển kho. Tên bị gạch, bài vị bị rút, và bây giờ là xem mặt để đối chiếu hồ sơ — bộ máy ấy có đủ mọi nghi thức để biến một con người thành một hồ sơ, và nghi thức nào cũng lịch sự, cũng đóng dấu, cũng không một giọt máu. Hắn gấp trát lại, và ý nghĩ về đêm rằm trong hắn đổi khác một chút: không chỉ là đưa nàng ra khỏi nhà này trước khi bị đưa về Tây Viện — mà là đưa nàng ra trước khi nàng phải đứng cho người ta xem mặt như một món hàng thêm một lần nào nữa.",
      "Có một khoảnh khắc, và chỉ một khoảnh khắc, mặt nạ của quản gia tuột xuống. Khi đọc tới dòng trát ghi rằng đoàn sẽ trực tiếp đối chiếu trang gia phả của chi này, bàn tay cầm trát của ông ta dừng lại giữa không trung lâu hơn bình thường một chút — rồi mới đặt xuống. Cao Minh hiểu cái dừng tay ấy: nét gạch trên tên Tiểu Lan là việc của phủ gửi xuống, có dấu kiểm của Giới Phòng hẳn hoi; nhưng người cầm bút là người của biệt thự này, và sổ thì giữ ở biệt thự này. Kiểm tra là dịp bộ máy tự soi lại tay chân của mình — và trong một bộ máy như thế, kẻ bị soi luôn có lý do để sợ hơn kẻ ngoài cuộc.",
      "Bà Năm Liên lén gặp Cao Minh ở hành lang sau, giọng run: đoàn kiểm tra tới là sẽ hỏi đến sổ bếp — vì hồ sơ thang thuốc phải khớp với sổ xuất nhập của nhà bếp. Mà góc cuốn sổ bếp của bà là nơi bà chép lén ba chữ tên cô chủ. Bà hỏi có nên xé trang đó đi không. Hắn bảo đừng xé: xé sổ là tự khai có tội, giấy rách còn dễ thấy hơn chữ viết. Trang đó cứ để nguyên — một trang chi tiêu, ba chữ viết vội ở góc, giữa hàng trăm con số. Người kiểm tra đọc sổ để tìm sai lệch tiền bạc, không ai đọc sổ bếp để tìm một cái tên. Điều nguy hiểm nhất đôi khi lại an toàn nhất ở nơi tầm thường nhất — đúng như cách Lâm Ngọc Chi đã giấu đồ cho con gái mình năm xưa.",
      "Đêm mai kiểm tra, đêm rằm đón người: hai cái hạn chồng lên nhau, và Cao Minh bỗng thấy rõ sự may mắn giấu trong áp lực đó. Đoàn kiểm tra sẽ mở gian gia phả, mở kho thuốc, đối chiếu rương niêm — tức là mọi ổ khóa của căn nhà này sẽ được mở ra cùng một lượt, trước mặt hắn, theo đúng thứ tự của chúng, bởi chính tay người trong nhà. Một kẻ muốn học cách tháo một ổ khóa mà được xem thợ khóa mở nó một lần từ đầu tới cuối, thì còn cần gì hơn. Hắn quyết định: ngày mai, hắn sẽ có mặt ở mọi nơi đoàn kiểm tra đi tới — với tư cách một vị khách tò mò và vô hại, người mà căn nhà này đã quen với việc phải diễn cho xem.",
      "Chiều hôm đó, quản gia cho người thay toàn bộ rèm cửa phòng Tiểu Lan bằng rèm mới, giặt hồ cứng, trắng tinh — để đoàn kiểm tra thấy nhà chăm sóc người bệnh chu đáo. Cao Minh đi ngang hành lang, thấy hai cô hầu khiêng rèm cũ ra: thứ rèm đã che cửa sổ của nàng mấy năm nay, bạc màu, có một góc vá bằng chỉ đỏ. Căn nhà đang trang điểm lại sân khấu của nó. Rèm mới cho người ta thấy nhà này sạch sẽ; rèm cũ — góc vá bằng chỉ đỏ của một người con gái tự vá lấy cửa sổ đời mình — thì đem đi như rác. Mọi thứ thuộc về nàng như một con người đều đang bị thay bằng những thứ thuộc về nàng như một hồ sơ. Hắn dặn Thu Nguyệt, lúc đi ngang không dừng lại: giữ lại tấm rèm cũ ấy. Con bé không gật đầu. Nhưng chiều đó, tấm rèm cũ biến mất khỏi đống đồ bỏ, không ai biết đi đâu."
    ],
    "dialogue": [
      {
        "speaker": "Quản gia",
        "text": "Dạ, thưa ông khách, mai có đoàn của Giới Phòng xuống kiểm tra sổ sách, việc nhà có phần bận rộn, có điều chi sơ suất xin ông bỏ qua cho. Việc kiểm tra này cũng là lệ thường năm nào cũng có, không có gì đáng lo đâu, thưa ông."
      },
      {
        "speaker": "Cao Minh",
        "text": "Bổn tọa đi qua nhiều nhà giàu, chưa thấy nhà nào nghe tin kiểm tra sổ sách mà mừng như nhà này. Ngươi yên tâm: bổn tọa chỉ xem, không hỏi. Người ta diễn hay thì bổn tọa còn vỗ tay nữa."
      },
      {
        "speaker": "Bà Năm Liên",
        "text": "Dạ… thưa ông, ông nói trang sổ bếp của tôi cứ để nguyên. Tôi nghe ông. Mà tôi run quá, thưa ông. Mai kia mà người ta hỏi tới tôi, tôi sợ miệng tôi nó không nghe tôi nữa."
      },
      {
        "speaker": "Cao Minh",
        "text": "Mai bổn tọa ngồi trong phòng khách coi hát. Miệng bà có không nghe bà, thì đã có tai bổn tọa nghe thay."
      }
    ],
    "choices": [
      {
        "id": "volunteer_witness",
        "text": "Ngỏ ý ở lại phòng khách ngày mai với tư cách khách chứng kiến buổi kiểm tra.",
        "next": "lh_eve_inspection",
        "effects": {
          "cluesHuaGiaDelta": 1
        }
      },
      {
        "id": "watch_from_outside",
        "text": "Rút về vai khách ngoài, quan sát đoàn kiểm tra từ xa mà không ló mặt.",
        "next": "lh_eve_inspection",
        "effects": {}
      }
    ]
  },
  "lh_eve_inspection": {
    "id": "lh_eve_inspection",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Tập làm người một nhà",
    "backgroundId": "long-hai-saloon",
    "location": "Phòng khách biệt thự Hứa Gia, Long Hải",
    "companions": [
      "steward"
    ],
    "narration": [
      "Đêm trước ngày kiểm tra, biệt thự Long Hải không ngủ. Nó tập diễn. Cao Minh đứng trong bóng tối của hành lang nhìn vào phòng khách sáng đèn, và chứng kiến một trong những cảnh rợn người nhất kể từ khi hắn đặt chân tới thời đại này: toàn bộ gia nhân của căn nhà, dưới sự điều khiển của quản gia, đang tập làm một gia đình bình thường. Một bàn tiệc được bày ra đầy đủ như có khách quý. Gia nhân ngồi vào các vị trí không phải của mình — người đóng vai quản gia tiếp khách, người đóng vai bà chủ nhà, có cả một cô hầu được chọn đóng vai người nhà ra đón đoàn kiểm tra — và họ tập cười, tập nói, tập rót trà, từng động tác một, lặp đi lặp lại.",
      "Quản gia đi vòng quanh bàn tiệc như một ông bầu gánh hát khó tính: nụ cười của cô hầu phải tập lại vì cười chưa đủ tự nhiên; câu chào của người phu phải nói lại bảy lần vì nghe còn cứng. Và điều khiến cảnh tượng từ kỳ quặc chuyển thành đáng sợ là chuyện này: mỗi lần ai đó diễn chưa đạt, không phải quản gia sửa cho họ bằng lời — mà cả người họ khựng lại một nhịp, như bị ai nắm lấy từ bên trong, chỉnh lại tư thế, rồi làm lại từ đầu, đúng hơn, đều hơn. Căn nhà đang dùng chính mạng lưới của nó để nắn từng diễn viên. Người phu đóng vai chủ nhà, tới lần thứ chín, đã cười một nụ cười hoàn hảo — và trong mắt anh ta, nước mắt chảy xuống hai bên má, vì anh ta biết nụ cười đó không phải của mình.",
      "Cô hầu được giao câu nói quan trọng nhất buổi kiểm tra ngày mai — câu trả lời khi đoàn hỏi tới cô chủ — phải tập riêng ở góc phòng: cô chủ bệnh nặng, đang ngủ yên, thầy thuốc dặn không được kinh động. Cô nói câu ấy hai mươi lần. Mười lần đầu còn vấp. Mười lần sau, giọng cô trôi chảy, êm ái, không một kẽ hở — và cũng không còn một chút gì là giọng của một con người đang nói về một người khác. Cao Minh nghe câu nói hoàn hảo ấy mà hiểu rằng ngày mai, trước mặt đoàn kiểm tra, sẽ không có một lời nói dối nào bị phát hiện — vì căn nhà này không nói dối bằng miệng người nữa. Nó nói dối bằng cả một cơ thể đã tập dượt.",
      "Sau đó, buổi tập còn một phần cuối mà quản gia gọi là phần khó nhất: tập đứng yên tự nhiên. Từng gia nhân phải đứng ở vị trí ngày mai của mình — cổng, hành lang, cửa kho, cửa gian gia phả — và đứng như người đang rảnh việc, không được thẳng đơ, không được giống đang trực. Người phu ở cổng tập đi tập lại cái dáng đứng tựa cột, tay buông thõng: mười lần như một, tay anh ta cứ tự đưa lên nắm lấy then cổng mỗi khi có tiếng chân ngoài đường — thói quen của mười một năm kéo then, mạng lưới đã khắc nó vào tay anh sâu hơn cả ý chí. Quản gia nhìn, lắc đầu, và cuối cùng đành đổi anh ta sang vị trí trong bếp cho ngày mai. Hắn ghi nhớ: đêm rằm, cổng chính sẽ do một người khác giữ — điều đó phải tính vào.",
      "Giữa buổi tập, chuông điểm giờ reo một tiếng ngắn — và toàn bộ phòng khách đông cứng lại. Mọi người đứng yên giữa một động tác dở dang: kẻ đang rót trà giữ nguyên tay nghiêng ấm, kẻ đang cười giữ nguyên nụ cười nửa chừng, không ai chớp mắt. Một phút trọn. Như thể căn nhà nín thở để nghe ngóng một điều gì đó từ rất xa — hoặc để cái đầu ở Chợ Lớn nhìn qua một lượt đàn con của nó trước ngày nghiệm thu. Rồi chuông reo tiếng thứ hai, và tất cả chuyển động trở lại, liền mạch, như một cuộn phim vừa qua một chỗ nối. Không một ai trong phòng tỏ ra thấy điều vừa xảy ra là lạ. Chỉ có Thu Nguyệt, đứng ở cửa bếp với khay trà, là nhìn thẳng về phía Cao Minh trong bóng tối — và rất khẽ, lắc đầu một cái: đừng lên tiếng.",
      "Duy nhất một người trong nhà không phải tập diễn: Tiểu Lan. Vai của nàng trong vở kịch ngày mai là không xuất hiện. Phòng nàng sẽ khóa, rèm buông, và câu trả lời đã tập sẵn sẽ thay nàng nói. Nàng là trung tâm của mọi buổi tập này mà cũng là người duy nhất vắng mặt trong đó — như một cái tên bị gạch: mọi thứ xung quanh đều được sắp xếp để người ta không cần nhìn thấy nàng nữa. Cao Minh đứng dậy khỏi bóng tối hành lang. Hắn đã thuộc lòng lịch trình và bài bản của ngày mai. Và hắn cũng đã quyết định xong vị trí của mình trong vở kịch đó: hắn sẽ là khán giả duy nhất biết đây là kịch — và là người chờ đúng khoảnh khắc sân khấu sơ hở nhất, cái chớp mắt của căn nhà lúc chuyển nhịp, để ghi nhớ nốt những gì còn thiếu cho đêm rằm.",
      "Khuya lắm, buổi tập mới tan. Gia nhân tản về vị trí của mình theo hàng lối im lặng. Thu Nguyệt đi ngang qua chỗ hắn đứng, không dừng lại, chỉ để rơi xuống một câu nói nhỏ như tiếng muỗi: mai, đoàn sẽ đọc lớn các số niêm trên rương thuốc để đối chiếu, và sẽ hỏi bà Năm về sổ bếp trước hết. Rồi cô đi thẳng, không quay đầu. Cao Minh nhìn theo bóng con bé khuất vào dãy nhà ngang tối om. Ngày mai sẽ là ngày dài nhất của căn nhà này. Và của bà Năm Liên — người đàn bà già giữ một cái tên trong góc sổ bếp — có thể là ngày nguy hiểm nhất.",
      "Mọi người tản đi hết, phòng khách tắt đèn, Cao Minh còn đứng lại một mình trong hành lang tối nhìn ra sân. Ở góc sân phía từ đường, có một người vẫn còn đứng đó — cô hầu trẻ, chính là người ban ngày dâng trà, đêm nay đứng quay mặt vào bức tường sau, bất động, từ lúc buổi tập tan. Không ai gọi cô. Không ai để ý. Cái mạng lưới đã buông mọi người ra để ngủ, mà như thể nó quên mất một người — hoặc cố ý để một người đứng như thế suốt đêm, quay mặt vào tường, như một hình phạt câm lặng cho một lỗi không ai biết. Cao Minh đứng nhìn một lúc rất lâu. Rồi hắn bước ra sân, đi ngang qua cô, và nói khẽ một câu không đầu không đuôi: đứng cả đêm thì mỏi, ngồi xuống một chút cũng được. Hắn không chạm được vào sợi đang giữ cô. Nhưng đi được mười bước, hắn nghe sau lưng có tiếng vải sột soạt rất nhẹ — cô hầu đã ngồi xuống, ôm gối, mặt vẫn quay vào tường. Một câu nói của người ngoài, đôi khi cũng len được vào một kẽ hở mà mệnh lệnh chưa kịp lấp."
    ],
    "dialogue": [
      {
        "speaker": "Quản gia",
        "text": "Cười lại. Nhà này mai có khách quý của phủ, không phải đám giỗ. Ai nấy làm cho tự nhiên vào. Tự nhiên lên — nghe rõ chưa?"
      },
      {
        "speaker": "Lê Thu Nguyệt",
        "text": "Dạ… thưa ông, em chỉ nói được một câu thôi. Mai người ta đọc số niêm rương thuốc trước, rồi hỏi sổ bếp của bà Năm. Ông… ông ở gần bà một chút, được không, thưa ông?"
      },
      {
        "speaker": "Cao Minh",
        "text": "Mai bổn tọa ngồi trong phòng khách coi hát từ đầu tới cuối. Ai bị hỏi, bổn tọa nghe thấy hết."
      },
      {
        "speaker": "Cao Minh",
        "text": "Ngủ đi. Mai là ngày dài. Ngoài những câu đã tập, ngươi còn một việc không ai giao: thấy bà Năm run quá, thì đứng gần bà một chút. Chỉ vậy thôi."
      }
    ],
    "choices": [
      {
        "id": "memorize_rehearsal",
        "text": "Ghi nhớ toàn bộ lịch trình và bài bản của buổi kiểm tra ngày mai.",
        "next": "lh_accident_beam",
        "effects": {
          "cluesHuaGiaDelta": 2
        }
      },
      {
        "id": "loosen_thread",
        "text": "Âm thầm nới lỏng một sợi liên kết nhỏ trong phòng khách để vở kịch ngày mai có một kẽ hở chỉ mình hắn biết.",
        "next": "lh_accident_beam",
        "effects": {
          "lanMaterInfluenceDelta": -2
        }
      }
    ]
  },
  "lh_accident_beam": {
    "id": "lh_accident_beam",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Xà nhà rơi",
    "backgroundId": "long-hai-corridor",
    "location": "Hành lang dãy nhà chính, biệt thự Long Hải",
    "companions": [
      "npc_servant_female"
    ],
    "narration": [
      "Buổi sáng sau đêm tập diễn, căn nhà tỉnh dậy ngoan ngoãn như một đứa trẻ vừa được dỗ. Gia nhân quét sân, lau cột, thay dầu đèn — từng việc một, theo đúng thứ tự của mọi buổi sáng khác. Nhưng Cao Minh không còn tin vào thứ tự ấy nữa. Hắn đi dọc hành lang dãy nhà chính, chậm rãi, thần niệm trải ra mỏng như mặt nước, đếm từng nhịp thở của tòa nhà. Và tòa nhà, lần đầu tiên kể từ khi hắn bước qua cổng, nín thở lại.",
      "Tiếng kêu đầu tiên không phải tiếng người. Đó là tiếng gỗ lim rên lên trên đỉnh đầu — một thanh xà ngang nặng mấy tạ, nằm yên trên mái hành lang đã hơn ba mươi năm, bỗng trượt khỏi mộng gỗ như vừa có ai rút mất cái chốt cuối cùng. Nó rơi thẳng xuống, nhắm ngay khoảng sân gạch mà Cao Minh sắp bước tới, mang theo cả một mảng ngói và bụi mù trời đất của ba thập kỷ.",
      "Cao Minh không né. Hắn ngẩng đầu, nhìn thanh xà đang xuống, và nhìn xuyên qua nó — lên cao hơn nữa, tới gian gác xép tối om phía trên mái, nơi một sợi dây thừng vừa bị buông thõng xuống còn đang đung đưa. Đầu dây kia buộc vào chốt xà. Đầu dây này, một đôi tay vừa mới rời khỏi.",
      "Thanh xà rơi xuống giữa buổi sáng trong trẻo ấy còn mang theo một thông điệp mà chỉ mình Cao Minh đọc được: căn nhà đã thôi đóng vai bị hại. Mấy ngày trước, nó còn giấu mình sau những cử động đồng nhịp và những lời chối quanh của quản gia. Bây giờ nó ra tay giữa ban ngày, trước mặt cả nhà — vì nó đã tính được rằng hạn chót của đoàn kiểm tra đang tới gần, và một vị khách dù mạnh đến đâu, hễ bị cuốn vào một vụ 'tai nạn chết người' trong nhà họ Hứa, thì lời nói của hắn trước mặt Giới Phòng sẽ nhẹ đi rất nhiều.",
      "Cao Minh đã thấy nhiều kiểu ám sát trong vạn năm. Có kiểu dùng độc, kiểu dùng trận pháp, kiểu dùng mỹ nhân và rượu ngon. Nhưng kiểu ám sát bằng một cô hầu gái đang khóc — ép một con người vô tội tự tay giết khách, để rồi dù khách có chết hay không, cô ta cũng sống cả đời với tội danh giết người trong đầu — là kiểu ám sát chỉ có thứ không còn coi người là người mới nghĩ ra nổi. Hắn ghi nhớ cảm giác lạnh đi trong ngực mình lúc này. Không phải sợ. Là giận — thứ giận mà hắn đã không nếm trải từ rất lâu, kể từ trước khi hắn trở thành kẻ mà thiên hạ gọi là Ma Tổ.",
      "Trước khi rời gác xép, Cao Minh còn làm một việc nhỏ: hắn nhặt sợi dây thừng lên, cuộn lại ngay ngắn và treo lên cái đinh trên cột gác, đúng chỗ mà bất cứ ai bước vào cũng nhìn thấy đầu tiên. Không phải để dọa. Mà để căn nhà biết rằng hắn đã tới đây, đã thấy hết, và không có ý định giả vờ như chưa từng thấy. Trong những trận đánh dài hơi, đôi khi một sợi dây được treo lại ngay ngắn còn nặng ký hơn một lời tuyên chiến — vì nó nói rằng kẻ địch của ngươi không hoảng, không vội, và đang ghi sổ từng việc một.",
      "Trên gác xép còn vương mùi dầu đèn và mùi sợ hãi của một người đã ngồi đây suốt từ gà gáy. Bên cạnh sợi dây là nửa ổ bánh khô và một ca nước chưa uống — cô hầu đã bị đưa lên đây từ sớm, ngồi chờ trong bóng tối với đôi tay không phải của mình, nghe tiếng chân của cả nhà đi lại bên dưới mà không kêu cứu được một tiếng. Chi tiết ấy làm Cao Minh đứng yên thêm một lúc lâu trong gian gác chật. Căn nhà này không chỉ điều khiển người. Nó còn biết cách hành hạ người bằng sự chờ đợi.",
      "Khi hắn dắt cô hầu xuống, cả hành lang đã được dọn sạch như chưa có chuyện gì xảy ra — chỉ trừ thanh xà gãy còn nằm chỏng chơ giữa lối đi vì không ai khiêng nổi nó đi trước khi hắn quay lại. Đám gia nhân đứng hai bên, mắt nhìn xuống đất. Không ai nói. Nhưng trong sự im lặng ấy, Cao Minh cảm được một điều vừa đổi khác: lần đầu tiên, có những ánh mắt lén nhìn hắn không phải để canh chừng — mà như người ta nhìn một cái phao giữa dòng nước xiết.",
      "Thanh xà chạm đất cách mũi giày hắn đúng một gang tay. Hắn thừa sức đánh nát nó giữa không trung thành bụi — và hắn đã không làm. Căn nhà đang xem. Nó mới chỉ biết hắn là một vị khách khó giết; chưa cần cho nó biết tay hắn nặng tới đâu, và càng chưa cần cho nó biết hắn đang thu tay vì cái gì. Gạch vỡ tung, bụi bay mù mịt, cả dãy hành lang rung lên như bị búa nện. Gia nhân hai đầu hành lang đứng sững lại — không ai kêu, không ai chạy tới. Họ chỉ đứng đó, mắt mở to, nhìn vị khách lạ còn nguyên vẹn giữa đống gỗ vụn, như một dàn tượng vừa bị ai tắt mất tiếng.",
      "Hắn bước qua thanh xà, đi thẳng lên cầu thang gác xép. Cửa gác không khóa. Trong bóng tối nồng mùi ẩm mốc và dầu đèn cũ, một cô hầu gái đang ngồi bệt trên sàn, hai tay ôm chặt lấy đầu gối, toàn thân run như lên cơn sốt rét. Tay phải của cô còn vương vệt bụi gỗ và một đường xước dài rớm máu — dấu của sợi dây thừng vừa trượt qua.",
      "Cô ta không chạy. Cũng không giấu tay đi. Cô chỉ ngước lên nhìn hắn, đôi mắt đỏ hoe, miệng mấp máy mãi mới thành lời — lời của chính cô, giành lại được trong khoảnh khắc sợi dây vừa rời tay:",
      "Cao Minh ngồi xuống, ngang tầm mắt cô hầu. Hắn không hỏi ai ra lệnh — hỏi thế là hỏi một câu mà cô không có cách nào trả lời. Hắn chỉ nhìn đường xước trên tay cô một lúc, rồi lấy trong tay áo ra một lọ cao nhỏ, đặt xuống sàn, đẩy về phía cô.",
      "Ở dưới hành lang, tiếng quét sân đã vang lên trở lại. Căn nhà tự tay dọn dẹp hiện trường của chính nó, nhanh và sạch, như chưa từng có thanh xà nào rơi. Nhưng từ giây phút này, cả hai phía đều đã hiểu nhau: nó không còn giả vờ hiền lành nữa — và hắn thì không còn giả vờ như không biết."
    ],
    "dialogue": [
      {
        "speaker": "Cô hầu",
        "text": "Thưa ông… tay con… nó tự leo lên gác từ lúc gà gáy. Con ngồi đây, con nhìn nó mở chốt, con kéo dây… miệng con la không ra tiếng, thưa ông. Ông đừng… ông đừng nói với quản gia là con đã khóc."
      },
      {
        "speaker": "Cao Minh",
        "text": "Thanh xà đó không phải ngươi làm rơi. Tay ngươi chỉ là chỗ nó mượn. Bổn tọa phân biệt được — ngươi cũng phải tập phân biệt, kẻo nó chưa giết được ai, ngươi đã tự kết tội mình trước."
      },
      {
        "speaker": "Cô hầu",
        "text": "Dạ… dạ, thưa ông. Nhưng nếu lần sau nó mượn tay con… mà người đứng dưới là cô chủ thì sao, thưa ông?"
      },
      {
        "speaker": "Cao Minh",
        "text": "Thì bổn tọa đứng ở giữa. Việc của ngươi là nhớ lấy câu hỏi vừa rồi — chừng nào ngươi còn biết hỏi, chừng đó ngươi chưa phải là tay của nó."
      }
    ],
    "choices": [
      {
        "id": "comfort_maid",
        "text": "Ở lại thêm một lúc, chờ cô hầu hết run rồi mới xuống — để căn nhà thấy rằng người của nó không bị bỏ mặc.",
        "next": "lh_poison_tea",
        "effects": {
          "cluesHuaGiaDelta": 1
        }
      },
      {
        "id": "inspect_beam",
        "text": "Xem kỹ mộng xà và sợi dây ngay: căn nhà ra tay còn vụng, dấu vết nó để lại đáng giá hơn lời an ủi.",
        "next": "lh_poison_tea",
        "effects": {
          "cluesHuaGiaDelta": 2
        }
      }
    ]
  },
  "lh_poison_tea": {
    "id": "lh_poison_tea",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Chén trà thứ hai",
    "backgroundId": "long-hai-saloon",
    "location": "Phòng khách, biệt thự Long Hải",
    "entity": "entity_claw",
    "narration": [
      "Chưa đầy một canh giờ sau, phòng khách đã bày sẵn trà. Quản gia đích thân bưng khay vào, cúi chào, và nói rằng nhà có lỗi để khách kinh động, xin dọn chén trà nóng gọi là tạ tội. Mọi thứ đúng lễ đến từng phân — chỉ trừ một điều: người dâng trà không phải quản gia. Ông ta đặt khay xuống rồi lui ra, và người bước lên rót trà là một cô hầu mà Cao Minh nhận ra ngay: gương mặt mà đêm trước hắn đã thấy hiện trong khung cảnh của căn nhà — gương mặt của thứ đang nhìn ra từ bên trong người khác.",
      "Nàng — không, nó — rót trà rất đẹp. Tay không run, nước không sánh, chén đặt xuống không một tiếng động. Nhưng khi chén trà được đẩy về phía Cao Minh, hắn nhìn thấy dưới đáy chén một vệt đục rất mỏng chưa kịp tan, và trong hơi trà bốc lên có một mùi hăng ngọt mà phàm nhân ngửi vào chỉ thấy thơm. Thứ thuốc ấy không giết được hắn. Nó thậm chí không giết nổi một con trâu. Nó chỉ đủ làm chậm một người thường trong nửa ngày, làm nặng mí mắt một đứa trẻ trong một đêm.",
      "Riêng trà thì là trà ngon — lộc trà đầu mùa, nước pha đúng độ. Chỉ có thứ thuốc bỏ vào là vụng: hăng, ngọt gắt, nằm trơ dưới đáy chén như một kẻ nói dối chưa thuộc bài. Cao Minh hơi lấy làm tiếc cho chén trà. Ở thế giới của hắn, kẻ muốn hạ độc một vị khách cỡ hắn ít nhất cũng bỏ công được hơn thế này. Cái nhà này mạnh thật, nhưng tay nghề thì còn quê mùa lắm.",
      "Chén trà này không phải để hạ hắn. Nó là một phép thử — và là một cái cớ câu giờ: trong lúc khách còn quanh quẩn bên chén trà tạ tội, sau lưng họ, căn nhà được thêm một canh giờ để sắp xếp những việc khác. Cao Minh nhìn chén trà, thấy buồn cười nhiều hơn là giận. Lâu lắm rồi mới có kẻ dám lấy một chén thuốc ngủ trẻ con ra thử hắn, như trẻ con lấy que chọc vào chuồng hổ để xem hổ có ngủ thật hay không.",
      "Hắn cầm chén trà lên. Cô hầu đứng hầu một bên, hai tay buông thõng, mắt nhìn thẳng vào khoảng không giữa phòng — đôi mắt trắng dã không chớp. Nhưng khi hắn đưa chén lên gần môi, từ trong đôi mắt ấy, rất sâu, có một thứ gì đó vùng lên: một cái nhìn của chính cô ta, hoảng loạn và van nài, như người chết đuối nhìn thấy mặt nước ngay trên đầu mà không tài nào ngoi lên được. Có một thoáng, hắn định uống thật — uống cho kẻ đang nấp sau đôi mắt kia thất vọng chơi. Nhưng thôi. Chậu cây ở cửa sổ có công giữ nhà này xanh; để nó nếm thay, sáng mai xem nó có còn xanh nổi không, cũng là một cách đọc đáp án.",
      "Có một chi tiết nhỏ trong lúc rót trà mà chỉ người tu luyện vạn năm như hắn mới bắt được: cô hầu rót cho hắn chén thứ nhất đầy tới miệng — theo đúng lễ của nhà này dành cho khách quý. Nhưng thói quen của người hầu trà lâu năm là không bao giờ rót đầy tới miệng cho người trên, vì sợ sánh ra tay khách. Chén trà đầy tràn ấy là dấu vết của một kẻ đang điều khiển một thân thể mà nó chưa từng thật sự học qua lễ nghi của thân thể đó — nó biết mệnh lệnh, nhưng nó không biết thói quen. Một kẽ hở nhỏ. Hắn ghi nhớ, không nói ra.",
      "Quản gia đứng ở cửa, hai tay chắp trước bụng, mặt không đổi sắc trong suốt buổi trà — trừ đúng một khoảnh khắc: khi cô hầu bắt đầu vươn tay ra, khóe miệng ông ta giật nhẹ một cái, rất nhanh, như người vừa bị ai giật tóc từ phía sau. Ông lão này cũng đang bị giữ; vai diễn quản gia ngoan ngoãn không phải do ông ta tự chọn đóng. Chỉ có điều cái giật miệng ấy là phần người còn sót lại đang phản đối, hay là mạng lưới đang ra hiệu — thì hắn chưa phân biệt được. Trong căn nhà này, ngay cả việc phân biệt đâu là người, đâu là lệnh, cũng phải lần từng chút một.",
      "Sau khi cô hầu khuỵu xuống, phòng khách rơi vào một sự im lặng kỳ lạ. Tiếng chim ngoài sân vẫn hót. Nắng vẫn chiếu xiên qua cửa sổ, soi rõ bụi trà bay trong không khí. Mọi thứ đều bình thường đến mức tàn nhẫn — như thể việc một cô gái vừa bị mượn tay để đầu độc khách, rồi được đỡ dậy, chỉ là một chuyện vặt trong ngày của tòa biệt thự dưỡng bệnh này.",
      "Ngoài hành lang, một cô hầu khác đi ngang qua cửa phòng khách đúng lúc ấy. Cô ta nghe tiếng khóc nghẹn trong phòng — và đi tiếp, mắt không hề liếc vào, chân không hề chậm lại. Ở một nhà thường, người ta đã bu lại ngoài cửa rồi. Nhà này thì không. Cái phẳng lặng ấy, Cao Minh ghi nhớ kỹ hơn cả chén trà độc: người trong nhà này không còn biết giật mình nữa.",
      "Cao Minh đặt chén xuống, chưa uống một giọt nào. Hắn đổ chén trà vào chậu cây cảnh bên cửa sổ — chậu cây ấy lá đang xanh, và hắn muốn xem sáng mai nó còn xanh hay không. Rồi hắn nhìn thẳng vào cô hầu, nói chậm rãi, như nói với hai người cùng một lúc:",
      "Cô hầu khựng lại. Cả thân người cô cứng đờ đúng một nhịp — rồi đôi tay buông thõng kia từ từ nâng lên, không phải để rót trà, mà vươn ra phía trước, mười ngón tay cong lại như móng vuốt, đúng cái thế mà căn nhà này vẫn dùng khi nó muốn nắm lấy một thứ gì. Còn miệng cô thì bật ra một tiếng khóc nghẹn, nhỏ đến mức chỉ người đứng gần mới nghe thấy.",
      "Cô vừa khóc vừa vươn tay tới. Thân thể cô tấn công; con người trong cô thì gào thét xin lỗi bằng một thứ tiếng không thành lời. Cao Minh không lùi. Hắn để mặc đôi tay ấy chạm vào ngực mình — chúng yếu như tay trẻ con — rồi giữ lấy hai cổ tay cô, nhẹ nhàng, như giữ một con chim đang giãy.",
      "Hắn giữ như thế cho đến khi cơn điều khiển qua đi như một cơn sóng rút. Cô hầu khuỵu xuống sàn, thở dốc, nước mắt chảy dài, miệng lặp đi lặp lại một câu dạ thưa ông lẫn trong tiếng nấc. Ngoài cửa sổ, chậu cây cảnh vẫn xanh. Nhưng trong phòng khách, từ nay, căn nhà đã biết: phép thử của nó bị nhìn thấu — và vị khách này không định bỏ đi."
    ],
    "dialogue": [
      {
        "speaker": "Cao Minh",
        "text": "Trà này, nó pha rồi mượn tay ngươi bưng — phải không? Kẻ đang nghe lén qua tai ngươi, nghe cho rõ: thuốc này đến trâu còn không buồn ngủ. Muốn thử bổn tọa, lần sau mang thứ khá hơn."
      },
      {
        "speaker": "Cô hầu",
        "text": "Thưa ông… thưa ông, con xin lỗi… tay con nó vươn ra, con giữ không nổi… con không có muốn…"
      },
      {
        "speaker": "Cao Minh",
        "text": "Khóc cái gì. Tay vừa rồi không phải tay ngươi. Bổn tọa phân biệt được tay người với dây giật."
      },
      {
        "speaker": "Quản gia",
        "text": "Dạ, thưa ông, con hầu này nó vụng về từ nhỏ, để con đưa nó xuống bếp dạy lại. Ông đừng chấp…"
      },
      {
        "speaker": "Cao Minh",
        "text": "Không cần dạy. Nó rót trà rất khéo. Khéo đến mức bổn tọa phải tự hỏi — trong nhà này, còn bao nhiêu người cũng đang 'khéo' như thế, hả ông quản gia?"
      }
    ],
    "choices": [
      {
        "id": "spare_maid",
        "text": "Không cho quản gia đưa cô hầu đi 'dạy lại' — giữ cô ở lại gian ngoài, dưới mắt mình.",
        "next": "lh_corridor_fight",
        "effects": {
          "civiliansSavedDelta": 1
        }
      },
      {
        "id": "warn_house",
        "text": "Nói thẳng cho cả nhà nghe: từ nay, mỗi lần nó mượn tay một người, bổn tọa sẽ tính sổ với kẻ ra lệnh, không tính với bàn tay.",
        "next": "lh_corridor_fight",
        "effects": {
          "lanMaterInfluenceDelta": 3,
          "cluesHuaGiaDelta": 1
        }
      }
    ]
  },
  "lh_corridor_fight": {
    "id": "lh_corridor_fight",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Phục kích ở hành lang",
    "backgroundId": "long-hai-corridor",
    "location": "Hành lang biệt thự Hứa Gia, Long Hải — chập tối, bão đang kéo đến",
    "entity": "entity_guard",
    "narration": [
      "Chập tối ngày rằm, bão kéo vào từ phía biển làm trời sầm xuống trước giờ, và hành lang tắt đèn sớm hơn lệ thường. Cao Minh đi từ phòng khách về phía gian trong cùng — hắn muốn xem Tiểu Lan sau một ngày căn nhà đã lộ mặt. Hắn đi được nửa hành lang thì nghe tiếng chân. Không phải tiếng chân chạy. Là tiếng chân bước đều, từ hai đầu hành lang cùng lúc, như hai đầu của một sợi dây đang thít lại.",
      "Đầu hành lang phía trước, người gác hiện ra dưới ánh đèn dầu cuối cùng chưa tắt. Anh ta cầm cây đèn lồng đã tắt ngấm như cầm một cây gậy, hai mắt trắng dã, miệng mím chặt đến bật máu — và Cao Minh biết anh ta đang dùng hết sức người của mình để cắn vào môi, chỉ để khỏi phải hét lên báo động cho hắn. Sau lưng hắn, tiếng cuốc gõ xuống nền gạch: gã gia nhân làm vườn, vai vác cây cuốc bổ củi, bước đi như người mộng du đi ra trận.",
      "Có một điều hắn đăng ký ngay từ lúc tiếng chân vang lên: khắp dãy hành lang và các buồng hai bên, không một tiếng người nào kêu lên. Đèn tắt, cửa đóng, và mấy chục con người nghe hết mọi tiếng động mà im lặng như nhà không có người. Ở bất cứ nhà thường nào, giờ này đã có tiếng la hét, tiếng bà già niệm Phật, tiếng trẻ con khóc. Sự im lặng đồng loạt ấy tự nó đã là một lời khai: cả nhà này đang bị giữ cùng một lúc, bằng cùng một bàn tay.",
      "Người gác xông tới trước. Cây đèn lồng vung lên vụng về mà nặng trịch. Miệng anh ta, cuối cùng, bật ra được tiếng — không phải tiếng gào của kẻ tấn công, mà là tiếng van xin đứt quãng giữa hai nhịp vung tay:",
      "Cao Minh nghiêng người. Đòn thứ nhất trượt qua vai. Đòn thứ hai, hắn đưa tay ra — không phải để đỡ cây đèn, mà để nắm lấy sợi dây nối vô hình đang giật từ đốt sống của người gác lên xà nhà. Sợi dây ấy nằm ngoài thân thể, mảnh như tơ, rung lên theo từng nhịp lệnh. Chặt nó, người gác sẽ ngã xuống như người kiệt sức — nguyên vẹn. Nhưng ngay khoảnh khắc tay hắn chạm vào sợi tơ, gã làm vườn phía sau đã bổ cây cuốc xuống, nhắm thẳng vào gáy người gác — căn nhà sẵn sàng hy sinh vật chủ này để ép hắn phải đỡ bằng một đòn chết chóc hơn.",
      "Hai người. Hai thứ vũ khí nhà quê. Đặt trước mặt Cao Minh — kẻ một kiếm có thể bổ đôi quả núi — đây không phải một trận đánh. Đây là một cái bẫy được bày bằng thịt người. Nếu hắn ra tay như thường lệ, ngày mai cả Long Hải sẽ biết vị khách lạ đã giết gia nhân nhà họ Hứa. Nếu hắn không ra tay, hai thân thể kia sẽ tự làm mình be bét máu trên chính những món đồ họ đang cầm, cho đến khi hắn buộc phải chọn. Hắn nhìn cái bẫy ấy, và thấy nó bày cũng khéo — khéo kiểu của kẻ biết rõ mình không đánh nổi hắn, nên đánh vào chỗ hắn không được phép đánh.",
      "Hắn có thừa thời gian để nghĩ, vì đối với hắn, hai thân người đang lao tới kia chậm như người đi dưới nước. Trong khoảng lặng kéo dài của một nhịp thở, hắn đã kịp nhìn rõ từng chi tiết: sợi lệnh của người gác chạy từ gáy lên, rẽ thành ba nhánh bám vào xà nhà và hai bên khung cửa — một điểm neo nhỏ ngay trong hành lang này đang nuôi cả hai người họ. Sợi của gã làm vườn thì chạy dọc theo nền gạch, ướt và đậm hơn, như đã được dùng nhiều lần. Và cả hai sợi đều cố tình đi qua những chỗ mà muốn cắt nhanh thì phải chém xuyên qua người — căn nhà đã dệt chính các vật chủ của nó thành lá chắn cho các sợi lệnh.",
      "Đòn đèn lồng thứ ba không nhắm vào hắn nữa. Người gác — hay đúng hơn là thứ đang cầm tay người gác — bỗng quay ngoắt lại, vung cây đèn về phía gã làm vườn đang lảo đảo phía sau. Nếu hai vật chủ tự đánh nhau đến chết trong hành lang này, căn nhà vẫn thắng: sáng mai sẽ có hai cái xác gia nhân và một vị khách lạ đứng giữa hiện trường. Cao Minh lướt tới, bàn tay chém xuống không phải vào người mà vào khoảng không giữa hai người họ — một luồng chân khí mỏng như lưỡi dao vô hình cắt đứt sợi lệnh nhánh đang điều phối cả hai cùng lúc. Hai thân người khựng lại nửa nhịp, đủ cho hắn chen vào giữa, một tay giữ cổ tay người gác, một tay đỡ lấy cán cuốc đang rơi.",
      "Hắn giữ thế ấy — một mình đứng giữa hai người đàn ông lực lưỡng đang bị giật dây — và không hề thấy vội. Mồ hôi lăn trên trán người gác, rơi xuống tay hắn, nóng hổi. Đó là thứ duy nhất trong trận đánh này thuộc về con người thật: mồ hôi của một kẻ đang dùng hết sức mình để không giết người khác. Hành lang hẹp. Ba thân người. Hai thứ vũ khí. Và một kẻ mạnh nhất thiên hạ đang gỡ từng nút thắt bằng lưỡi dao — vì cả hai cái nút trước mặt hắn đều là người sống, đang tỉnh, đang nhìn hắn bằng đôi mắt van nài ngay trong lúc tay họ cố giết hắn. Trong lúc giữ, hắn làm nốt phần việc còn lại bằng thần niệm: lần theo sợi nhánh vừa cắt, tháo thêm hai nút nhỏ đang buộc cổ tay gã làm vườn phải nhấc cuốc lần nữa. Làm việc đó trong lúc hai tay bận giữ hai thân người đang giãy, đối với hắn, cũng chỉ như người ta vừa gắp thức ăn vừa lật một trang sách. Khi nút cuối cùng tuột ra, cây đèn lồng trong tay người gác ngừng rung trước, rồi tới cán cuốc. Hai người đàn ông mềm nhũn xuống như hai bao gạo hết hơi, và hắn đỡ cả hai ngồi dựa vào tường, ngay ngắn, trước khi buông tay.",
      "Hắn có thể kết thúc chuyện này trong một nhịp thở, bằng cách đơn giản nhất: một luồng kiếm khí xuyên qua ngực người gác, cắt đứt sợi lệnh ngay tại gốc của nó. Nhanh. Sạch. Và người gác sẽ chết trước khi kịp hiểu mình được 'giải thoát'. Hắn không làm. Không phải vì không nỡ — mà vì đó chính là nước cờ căn nhà đang chờ, và hắn không có thói quen đi đúng nước cờ kẻ khác bày sẵn cho mình.",
      "Về sau, khi kể lại đêm này, đám gia nhân trong nhà chỉ nhớ một hình ảnh: vị khách lạ đứng giữa hành lang tối, hai tay giữ hai thứ vũ khí của hai người đang bị điều khiển, đứng yên như một cây cột chống trời — không đánh ai, không chửi ai, chỉ đứng đó cho tới khi từng sợi dây vô hình một tự mỏi đi và buông."
    ],
    "dialogue": [
      {
        "speaker": "Người gác",
        "text": "Ông… né đi… tay tôi nó không dừng được… ông né đi, tôi xin ông… đừng để nó giết ông bằng tay tôi…"
      },
      {
        "speaker": "Cao Minh",
        "text": "Tay ngươi cứ vung. Bổn tọa đứng đây lo phần còn lại. Còn ngươi — cái thứ đang giật dây kia — nghe cho rõ: đêm nay, ở hành lang này, không có ai chết để ngươi vừa lòng."
      },
      {
        "speaker": "Người làm vườn",
        "text": "Thưa ông… cuốc của con… nó nặng quá… con giữ không nổi nữa… ông ơi…"
      }
    ],
    "choices": [
      {
        "id": "sever_outside",
        "text": "Chặt các sợi lệnh nằm NGOÀI thân thể hai người, rồi đỡ cả hai xuống nhẹ nhàng khi họ kiệt sức ngã ra.",
        "next": "lh_aftermath",
        "effects": {
          "civiliansSavedDelta": 2,
          "lanMaterInfluenceDelta": 2
        }
      },
      {
        "id": "shield_body",
        "text": "Lấy thân mình chen vào giữa hai thứ vũ khí, đánh ngất từng người bằng một điểm huyệt thật nhẹ sau gáy.",
        "next": "lh_aftermath",
        "effects": {
          "civiliansSavedDelta": 1,
          "partyHealthDelta": -4,
          "lanTrustDelta": 1
        }
      },
      {
        "id": "cut_through",
        "text": "Một kiếm xuyên qua người gác để cắt sợi lệnh tại gốc — nhanh nhất, sạch nhất.",
        "next": "lh_dead_host"
      }
    ]
  },
  "lh_dead_host": {
    "id": "lh_dead_host",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Dead End · Bàn tay nhuốm máu",
    "backgroundId": "long-hai-corridor",
    "location": "Hành lang biệt thự",
    "entity": "entity_guard",
    "narration": [
      "Kiếm khí đi ra nhanh hơn một ý nghĩ. Nó xuyên qua ngực người gác, tìm đúng sợi lệnh đang bám vào đốt sống anh ta, và cắt đứt nó gọn gàng như cắt một sợi chỉ. Người gác khựng lại giữa hành lang. Cây đèn lồng rơi xuống gạch, vỡ tan, dầu chảy loang ra, cháy một lúc rồi tắt.",
      "Trong khoảnh khắc sợi lệnh đứt, đôi mắt anh ta trong lại — lần đầu tiên sau bao nhiêu ngày, và cũng là lần cuối cùng. Anh ta nhìn Cao Minh, không oán, không giận; chỉ có một sự ngạc nhiên rất người: hóa ra được là mình lại đau đến thế này. Anh ta cố nói một câu gì đó — có lẽ là cảm ơn, có lẽ là tên vợ mình — nhưng máu đã lên tới miệng trước cả tiếng nói.",
      "Sau lưng, gã làm vườn buông cây cuốc, quỵ xuống, gào lên bằng giọng của chính gã — sợi lệnh trong người gã tự rút đi như con rắn bỏ hang. Căn nhà không cần gã nữa. Nó đã có được thứ nó muốn: một cái xác nằm giữa hành lang nhà họ Hứa, và một vị khách lạ với bàn tay nhuốm máu của người vô tội.",
      "Cao Minh tự tay khiêng người gác vào gian trong, đặt lên chiếc giường sạch nhất. Bàn tay anh ta còn ấm. Đêm qua, cũng bàn tay này còn van xin hắn né đi. Hắn ngồi xuống bên cạnh và chờ — không phải để canh xác, mà để chắc chắn sợi lệnh trong người anh ta đã rút hẳn, không quay lại mượn cái thân này lần nữa. Hắn đã ngồi như thế bên những kẻ thù mạnh hơn người này vạn lần khi họ tắt thở. Chưa lần nào việc chờ đợi lại lâu như lần này. Người này không có tu vi, không có tên tuổi trong thiên hạ. Anh ta chỉ là một người gác cổng còn chưa kịp nhìn mặt đứa con gái mới sinh của mình — và anh ta chết vì một nước cờ của căn nhà, kết liễu bởi chính kẻ tới cứu mình. Rẻ rúng đến mức hắn không tìm được một tiếng cười nào cho nó, dù là cười khinh.",
      "Tin dữ đi nhanh hơn cả lệnh của mạng lưới. Trước khi trời sáng, cả xóm chài Long Hải đã râm ran câu chuyện: trong biệt thự nhà họ Hứa có án mạng, khách lạ giết gia nhân. Đúng như căn nhà đã tính. Hay nói cho đúng hơn — đó chính là thứ duy nhất căn nhà này tính, ngay từ thanh xà đầu tiên, từ chén trà đầu tiên. Nó không bao giờ định giết hắn. Nó chỉ cần hắn giết. Một lần là đủ. Người ta còn kể thêm những phần không hề xảy ra: rằng kiếm của vị khách tự bay, rằng hắn giết người bằng một cái phẩy tay, rằng hắn là thầy pháp phương Bắc tới đòi nợ nhà họ Hứa. Chỉ sau một đêm, câu chuyện đã tự mọc thêm tay chân — và mọi phiên bản của nó đều kết thúc ở cùng một chỗ: trong nhà ấy có một kẻ giết người.",
      "Tiếng hét vang lên từ gian phòng trong cùng. Không phải tiếng hét sợ hãi. Tiểu Lan hét tên người gác — nàng thuộc tên từng người trong nhà này — và tiếng hét ấy đi qua bao nhiêu lớp cửa cũng không mất đi chút sức nào. Rồi nó tắt. Không phải vì nàng hết đau, mà vì thứ trong người nàng vừa học được một điều mới về vị khách lạ: hắn cũng như mọi kẻ mạnh khác. Hắn cũng sẽ, đến một lúc nào đó, tính mạng nàng vào sổ chi phí.",
      "Cao Minh ở lại bên giường rất lâu. Đem cả tòa nhà này biến mất trước khi trời sáng, đối với hắn, là việc dễ hơn phủi một hạt bụi. Nhưng người đàn ông nằm đây thì không quay lại được nữa. Sức mạnh của hắn không hề yếu đi một phân. Nó chỉ vừa cho hắn thấy tận mắt một điều: ở nơi này, có những quyết định một khi đã ra khỏi vỏ, mạnh đến đâu cũng không thu về được.",
      "Căn nhà im lặng suốt đêm đó. Một sự im lặng thỏa mãn. Nó không cần thắng hắn. Nó chỉ cần hắn tự tay phá vỡ điều duy nhất khiến hắn khác với nó: hắn không giết người bị mượn tay. Từ nay, mỗi lần hắn giơ kiếm lên trong tòa nhà này, mọi đôi mắt — kể cả đôi mắt trong gian phòng trong cùng — sẽ nhìn bàn tay hắn trước, và nhìn hắn sau."
    ],
    "dialogue": [
      {
        "speaker": "Người gác",
        "text": "Ông… ông né rồi mà… sao ông không né… tay tôi…"
      },
      {
        "speaker": "Cao Minh",
        "text": "Tay giết ngươi là tay của bổn tọa. Bổn tọa không chối. Nhưng cái lệnh giết ngươi là của nó — câu này, bổn tọa nói với ngươi, không phải với nó."
      }
    ],
    "choices": [
      {
        "id": "retry",
        "text": "Trở lại khoảnh khắc trước khi kiếm khí rời tay",
        "retry": true
      }
    ],
    "deadEnd": true
  },
  "lh_aftermath": {
    "id": "lh_aftermath",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Băng bó",
    "backgroundId": "tieu-lan-room",
    "location": "Phòng Hứa Tiểu Lan, biệt thự Long Hải",
    "companions": [
      "npc_servant_male"
    ],
    "narration": [
      "Hai người được khiêng vào gian phòng trong cùng — vì Tiểu Lan nhất định đòi như thế. Quản gia lúng túng nói gian phòng của cô chủ không tiện để gia nhân nằm, nàng chỉ đáp một câu, giọng nhẹ mà không ai dám cãi: đây là những người bị thương vì nhà này, và trong nhà này, phòng của nàng là nơi duy nhất còn coi người bị thương là người. Người gác nằm trên tấm chiếu trải dưới sàn, gã làm vườn ngồi dựa tường, cả hai đều đã tỉnh, mặt mày xám ngoét vì kiệt sức và vì xấu hổ.",
      "Không có vết thương nào nặng. Một đường rách trên trán người gác do ngã vào cạnh cửa, mấy đốt ngón tay trầy xước của gã làm vườn, và khắp người hai kẻ là những vết bầm tím cũ mới chồng nhau — dấu tích của những ngày thân thể họ bị dùng như công cụ mà không ai buồn băng bó. Tiểu Lan quỳ xuống bên chiếu, tự tay xé vải áo của chính mình làm băng. Nàng làm chậm, vì tay nàng cũng run, nhưng không một động tác nào là thừa.",
      "Vải băng trong nhà này khan hiếm đến lạ — một tòa biệt thự giàu có bậc nhất vùng mà tủ thuốc chỉ có mấy cuộn vải cũ và một lọ dầu. Tiểu Lan không ngạc nhiên về điều đó. Nàng nói, trong lúc tay vẫn thoăn thoắt xé vải, rằng trong nhà này người ta chỉ chữa cho những vết thương nhìn thấy được từ bên ngoài cổng — còn gia nhân bị thương bên trong rào thì tự lành, vì họ có được coi là người đâu mà chữa. Câu nói ấy nhẹ như không. Cao Minh đứng nghe ở ngưỡng cửa, không nói gì. Hắn chỉ ghi nhớ: thói quen không coi gia nhân là người trong nhà này có trước cả thứ tà vật kia — nó đến sau, và thấy sẵn một cái nhà đã quen tay.",
      "Người gác tên Sáu, khi được nàng hỏi thăm đứa con mới sinh, đã khóc không giấu giếm. Anh ta nói đứa nhỏ là con gái, đặt tên là Hạt — vì vợ anh ta nói, nhà nghèo, đặt tên hèn cho dễ nuôi. Anh ta còn chưa được nhìn mặt con. Ngày vợ sinh, anh ta đang đứng gác ngoài cổng biệt thự này, và 'nó' không cho anh ta về — hai chân anh ta cứ đứng yên ở cổng, trong khi đầu anh ta gào lên đòi chạy về với vợ suốt một đêm mưa. Tiểu Lan nghe, tay không ngừng băng bó, và nói một câu mà cả phòng đều nghe rõ: 'Anh Sáu, khi nào ra khỏi đây, anh về ôm con gái anh trước. Cái tên Hạt hay lắm. Hạt nào rồi cũng mọc thành cây, anh đừng lo.'",
      "Khi nàng buộc đến mối băng cuối cùng trên trán người gác, anh ta bỗng đưa tay lên — rất chậm, như người tập cử động lại từ đầu — và tự mình giữ lấy mép băng cho nàng buộc. Một cử động nhỏ xíu, tầm thường đến mức không ai để ý. Nhưng Cao Minh để ý: lần đầu tiên trong đêm ấy, đôi tay của người gác làm một việc do chính anh ta chọn, giúp cho chính anh ta, theo ý của chính anh ta.",
      "Gã làm vườn tên Tư Rỗ thì không khóc. Anh ta ngồi nhìn chằm chằm vào hai bàn tay mình đang đặt trên đùi — hai bàn tay vừa mấy canh giờ trước còn bổ cuốc xuống đầu khách — rồi bỗng hỏi Tiểu Lan một câu làm cả gian phòng lặng đi: 'Cô chủ… tay tôi nó còn là tay tôi không, cô?' Nàng đặt tay mình lên hai bàn tay thô ráp ấy, giữ yên một lúc, rồi đáp rằng tay này vừa run khi sợ làm đau nàng lúc băng bó, tay biết run như thế là tay của người có lòng — 'nó' mượn được việc của tay anh, chứ không mượn được cái run ấy. Anh ta gật đầu, và lần đầu tiên trong đêm, thở ra được một hơi dài.",
      "Cao Minh đứng ngoài ngưỡng cửa, nghe hết, không chen vào. Hắn nhìn nàng băng bó, gọi tên từng người, hỏi chuyện vợ con, chuyện cây ổi sau bếp — những việc hắn không làm được, không phải vì thiếu sức, mà vì hắn không biết gì về những con người này ngoài cái tên trên sổ. Nàng thì biết từng người một. Trong căn phòng ấy, kẻ biết cách trả người ta về làm người là cô gái đang bị thứ tà vật nuốt dần, chứ không phải kẻ mạnh nhất thiên hạ đang đứng ở cửa.",
      "Nàng gọi tên từng người khi băng bó. Không phải gọi để sai bảo. Nàng hỏi người gác vợ anh ta ở quê đã nhận được tiền tháng này chưa; hỏi gã làm vườn cây ổi sau bếp năm nay có đậu trái không, vì năm ngoái anh ta từng khoe với nàng qua khung cửa sổ. Hai người đàn ông lực lưỡng nằm im, nước mắt chảy ngang má, không dám lau — vì tay họ hễ cử động là lại sợ chính đôi tay ấy.",
      "Giữa chừng, nàng nhờ hắn đưa lọ dầu. Hắn cầm lên lọ thuốc ngủ đặt cạnh đó — hai cái lọ giống nhau đến từng cái nắp, và trong thế giới của hắn, thứ đựng trong lọ nào cũng chỉ là thứ đựng trong lọ. Nàng nhìn, không cười, chỉ nói khẽ: 'Lọ có buộc sợi chỉ đỏ ở cổ, thưa ngài. Lọ kia là thuốc của tôi.' Hắn đổi lọ, ghi nhớ thêm một điều nữa về căn nhà này: ở đây, người ta phân biệt thuốc cứu người với thuốc giữ người bằng một sợi chỉ đỏ mảnh như tơ.",
      "Băng bó xong, nàng bảo bà Năm Liên nấu cháo loãng cho hai người, dặn thêm gừng — 'anh Sáu hay bị lạnh bụng khi sợ', nàng nói, tự nhiên như một người chị trong nhà chứ không phải cô chủ. Rồi nàng quay sang Cao Minh. Đôi mắt nàng mệt đến trong veo, nhưng giọng nàng khi nói về những người này thì vững như người đang giao lại một món nợ thiêng liêng:",
      "Đêm đó, người gác và gã làm vườn được khiêng về buồng gia nhân. Trước khi đi, người gác nắm lấy vạt áo Cao Minh — bằng bàn tay của chính anh ta, run rẩy mà chủ động — và nói một câu mà anh ta đã tập trong đầu suốt từ lúc tỉnh lại. Câu nói ấy không lớn, nhưng nó là thứ đầu tiên trong căn nhà này thuộc về anh ta hoàn toàn, kể từ rất lâu rồi."
    ],
    "dialogue": [
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài, tôi xin ngài một điều. Người gác tên là Sáu, nhà ở mé sông, vợ mới sinh con thứ hai. Anh làm vườn tên Tư Rỗ, cha già còn ở quê, mắt đã lòa. Trong nhà này, họ không phải 'gia nhân' — họ là từng người một. Sau này, dù có chuyện gì xảy ra, xin ngài nhớ giùm tôi điều đó, như tôi vẫn nhớ."
      },
      {
        "speaker": "Cao Minh",
        "text": "Sáu — mé sông, vợ mới sinh. Tư Rỗ — cha lòa ở quê. Nghe rồi. Bổn tọa nhớ dai lắm, nàng khỏi lo."
      },
      {
        "speaker": "Người gác",
        "text": "Thưa ông… cảm ơn ông đã không… đã không chém con hồi nãy. Con biết ông chém được. Cả nhà này ai cũng biết."
      },
      {
        "speaker": "Cao Minh",
        "text": "Cảm ơn cái gì. Ngủ đi, mai còn phải đứng gác."
      }
    ],
    "choices": [
      {
        "id": "learn_names",
        "text": "Ngồi xuống, nhờ Tiểu Lan kể hết tên và gốc gác của từng người trong nhà — học thuộc như học một bộ công pháp.",
        "next": "lh_lan_pushback_big",
        "effects": {
          "lanTrustDelta": 3,
          "cluesHuaGiaDelta": 1
        }
      },
      {
        "id": "guard_watch",
        "text": "Tự mình gác ngoài hành lang đêm nay, để hai người bị thương và cả nhà được ngủ một đêm không lệnh gọi.",
        "next": "lh_lan_pushback_big",
        "effects": {
          "civiliansSavedDelta": 1,
          "lanTrustDelta": 2
        }
      }
    ]
  },
  "lh_lan_pushback_big": {
    "id": "lh_lan_pushback_big",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Một giờ tự do",
    "backgroundId": "long-hai-corridor",
    "location": "Hành lang và sân trong, biệt thự Long Hải",
    "entity": "entity_maid",
    "narration": [
      "Gần nửa đêm, căn nhà gọi người. Không có tiếng chuông nào vang lên, nhưng Cao Minh cảm được nó — một đợt sóng lệnh chạy qua từng bức tường như gió lạnh lùa qua khe cửa. Khắp các dãy buồng gia nhân, người ta đứng dậy trong bóng tối. Người gác vừa mới ngủ thiếp sau chén cháo cũng bật ngồi dậy, hai mắt mở trừng, tay tự tìm cây đèn lồng đã vỡ. Căn nhà sắp sửa làm lại trò cũ — lần này là tất cả cùng một lúc, để hắn không thể đỡ xuể, và để ai đó trong cơn hỗn loạn phải chết, dù là chết dưới tay nhau.",
      "Nhưng trước khi đợt sóng ấy chạm tới đầu hành lang, từ gian phòng trong cùng, một tiếng phản thanh bật ra. Không ồn ào. Không dữ dội. Nó giống như có người đưa một ngón tay chạm vào giữa một bản nhạc đang chơi và giữ yên ở đó — khiến mọi nốt nhạc sau đó đều phải chờ. Tiểu Lan đã ra tay. Lần này không phải đẩy lùi một cánh tay như trong đêm nghi thức đầu tiên. Lần này nàng ôm lấy cả một mạng lưới đang rung, và gồng mình giữ nó đứng yên.",
      "Hiệu quả đến tức thì và đáng sợ. Khắp tòa nhà, những thân người đang đứng dậy khựng lại giữa chừng. Người gác buông cây đèn, ngồi phịch xuống, ôm đầu khóc thành tiếng — khóc vì mừng, như người vừa được tháo ách giữa đường. Gã làm vườn gục mặt vào hai bàn tay. Cô hầu ở dãy bếp hát lên một câu ru con đứt quãng rồi nín bặt vì ngạc nhiên trước chính giọng mình. Trong một giờ đồng hồ, căn nhà này trả lại cho từng người cái quyền đơn giản nhất: muốn khóc thì khóc, muốn ngồi thì ngồi.",
      "Cao Minh chạy vào gian phòng trong cùng. Tiểu Lan ngồi trên giường, lưng thẳng, hai tay đặt trên đùi, mắt nhắm — và máu đang rỉ ra từ một bên khóe mũi, từng giọt, đều như nước nhỏ từ mái hiên. Mặt nàng trắng đến mức hắn tưởng như nhìn xuyên qua được. Khi hắn gọi, nàng mở mắt, mỉm cười — một nụ cười nhẹ nhõm thật sự, của người vừa làm xong một việc rất khó.",
      "Trong một giờ tự do ấy, căn nhà hiện nguyên hình là một nơi hoàn toàn khác. Ở dãy bếp, bà đầu bếp tự tay nấu cho mình một chén chè — việc mà bà nói sau này là xa xỉ nhất đời bà: nấu một thứ chỉ vì mình thèm. Ở sân sau, mấy người phu khuân ngồi xuống bậc thềm, tháo khăn, lau mặt, nói chuyện nhà bằng những câu rời rạc như người mới ốm dậy học nói lại. Có một cô hầu trẻ chạy thẳng ra cổng, đứng nhìn con đường ven biển vắng tanh một lúc lâu — không phải để bỏ trốn, chỉ để tự mình quyết định rằng hôm nay mình chưa đi. Rồi cô quay vào, tự tay khép cổng lại. Cao Minh nhìn cảnh ấy từ xa và không nói gì. Hắn ghi nhớ nó như ghi nhớ một thói quen của kẻ thù: thứ đã được nếm qua một lần, thân thể người ta sẽ còn nhớ đường quay lại, dù trí nhớ có bị lấy đi.",
      "Cái giá nàng vừa trả không chỉ là một cái tên. Khi ôm lấy cả một mạng lưới để giữ nó đứng yên, nàng đã phải mở toang chính mình ra cho nó nhìn ngược vào — như hai kẻ vật nhau mà ai cũng thấy hết bài của nhau. Từ đêm nay, thứ trong người nàng biết rõ nàng mạnh đến đâu, mệt đến đâu, và sợ điều gì nhất. Nó cũng biết về hắn — biết hắn để mắt tới những ai trong căn nhà này, và biết rằng muốn thắng hắn, không cần đánh với hắn, chỉ cần buộc hắn đứng nhìn những người này bị dùng đến kiệt quệ. Từ nay, cả hai phía đều đã lật bài.",
      "Bà Năm Liên là người đầu tiên chạy tới gian phòng trong cùng sau khi đợt sóng rút, và bà là người đầu tiên nhận ra điều đã mất. Bà kể sau đó rằng lúc bước vào, thấy cô chủ nhìn vị khách lạ bằng ánh mắt của người gặp khách lần đầu, bà già đã phải vịn vào khung cửa mới đứng vững. Mười mấy năm nuôi một đứa trẻ lớn lên, bà học được cách chịu đựng mọi thứ về nó — bệnh tật, đau đớn, cả những cơn mộng du nửa đêm. Chỉ có một điều bà chưa từng tập chịu: nhìn nó quên đi, ngay trước mắt mình, một người mà nó vừa mới bắt đầu tin tưởng — quên sạch, quên tử tế, quên kèm theo một nụ cười lễ phép dành cho người lạ.",
      "Cái giá đến sau đó, lặng lẽ như mọi cái giá trong căn nhà này. Nàng nhìn hắn, nụ cười dần dần biến thành một vẻ lịch sự xa lạ. Nàng chắp tay, cúi đầu đúng lễ của một tiểu thư tiếp khách lần đầu, và hỏi hắn là ai, từ đâu tới, có phải người nhà họ Hứa phái tới thăm bệnh hay không. Nàng nhớ căn nhà. Nàng nhớ bà Năm Liên. Nàng nhớ cả việc mình vừa làm và vì sao phải làm. Chỉ có một khoảng trống sạch sẽ, gọn gàng, ngay đúng chỗ đáng lẽ phải có tên của hắn, mặt của hắn, và mấy ngày vừa qua của hai người.",
      "Hắn đứng yên một lúc lâu. Vạn năm qua, mất mát nào tới tay hắn cũng đều tính được: mất bao nhiêu, được bao nhiêu, đáng hay không. Lần này hắn không tính. Một cô gái vừa đổi chính tên hắn trong trí nhớ của nàng để mua một giờ tự do cho đám gia nhân — những người, theo mọi phép tính trên đời, chẳng liên quan gì tới sự sống còn của chính nàng. Hắn đứng đó, nhìn nàng cúi đầu chào mình như chào khách lạ, và để mặc sự im lặng kéo dài.",
      "Một giờ tự do trôi qua như một hơi thở dài. Đúng lúc trống canh xa xa điểm, đợt sóng lệnh quay lại, nhẹ nhàng lấy lại từng người một như thủy triều lấy lại bãi cát. Nhưng lần này, trong tòa nhà, có những người đã kịp giấu vào lòng một điều: họ từng được là mình suốt một giờ. Và ở gian phòng trong cùng, Cao Minh ngồi xuống ghế, bắt đầu làm một việc mà hắn chưa từng làm cho bất cứ ai trong vạn năm qua: kể lại từ đầu, cho một người vừa quên hắn, nghe xem hắn là ai."
    ],
    "dialogue": [
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài, xin ngài lượng thứ, tôi thất lễ quá. Ngài là… người quen của nhà tôi phải không? Tôi nhìn ngài, trong lòng cứ thấy như mình nợ ngài một lời cảm ơn rất lớn — mà tôi không nhớ nổi là vì chuyện gì."
      },
      {
        "speaker": "Cao Minh",
        "text": "Nàng không nợ bổn tọa. Ngược lại là đằng khác. Đêm nay còn dài — nàng ngồi yên, nghe bổn tọa kể. Chuyện của chúng ta, bổn tọa nhớ đủ cho cả hai người."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Ngài nói 'chúng ta'… Thưa ngài, tôi không nhớ ngài, nhưng tai tôi nghe hai chữ ấy, lòng tôi lại yên. Lạ thật. Như có một chỗ trong người tôi vẫn nhớ, dù đầu tôi thì không."
      }
    ],
    "choices": [
      {
        "id": "retell_now",
        "text": "Kể lại ngay trong đêm — từ Vạn Hoa Lầu, từ lần bắt mạch đầu tiên, không giấu nàng điều gì, kể cả việc nàng vừa quên.",
        "next": "lh_retelling",
        "effects": {
          "lanHealthDelta": -2,
          "lanMaterInfluenceDelta": 6,
          "lanTrustDelta": 3
        }
      },
      {
        "id": "rest_first",
        "text": "Để nàng ngủ yên một đêm trước đã; lời kể có thể chờ đến sáng, sức nàng thì không.",
        "next": "lh_retelling_rest",
        "effects": {
          "lanHealthDelta": -2,
          "lanMaterInfluenceDelta": 6,
          "lanTrustDelta": 1
        }
      }
    ],
    "sceneEffects": {
      "memoryIntegrityDelta": -8
    }
  },
  "lh_retelling": {
    "id": "lh_retelling",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Lời hứa kể lại",
    "backgroundId": "tieu-lan-room",
    "location": "Phòng Hứa Tiểu Lan, biệt thự Long Hải",
    "narration": [
      "Hắn kể từ cuối canh hai tới gần canh ba. Không phải kể như một người đọc hồ sơ. Hắn kể Vạn Hoa Lầu và chén rượu chưa vơi, kể vầng sáng dưới sàn gỗ, kể con đường ven biển và tòa biệt thự sáng đèn trước khi trời tối. Hắn kể người phu tên Thới có đôi tay run như dây đàn, kể người gác tên Sáu van xin hắn né đi, kể chính nàng — lần đầu tiên nhìn thẳng vào hắn mà không quay mặt — và câu nàng đã hỏi hắn trong gian phòng này: trong mắt ngài, tôi là người bệnh, hay là một thứ gì khác.",
      "Tiểu Lan ngồi nghe, hai tay ôm chén trà đã nguội từ lâu. Thỉnh thoảng nàng gật đầu, không phải gật đầu của người nhớ ra, mà của người đang nhận về một món đồ quý từ tay kẻ khác — nâng niu, và biết rõ món đồ ấy không phải của mình nữa. Đến đoạn nàng tự tay băng bó cho hai người bị thương, nàng bật cười rất khẽ, nói rằng nghe như chuyện của một người chị nào đó mà nàng vẫn hằng muốn trở thành.",
      "Hắn kể luôn cả phần khó nhất: cái giá. Mỗi lần nàng chống lại thứ trong người, nó lấy đi của nàng một mảnh ký ức — không báo trước, không cho chọn, lấy gọn gàng như người ta rút một tờ giấy khỏi giữa cuốn sổ mà không làm ai hay biết cuốn sổ đã mỏng đi. Đêm nay nó lấy tên hắn. Mai kia, nếu nàng còn phải ra tay, nó có thể lấy một ngày, một người, một mùa hè. Hắn nói hết, không bớt một chữ. Với người con gái này, sự thật là thứ hắn không tiết kiệm.",
      "Có những đoạn hắn kể mà chính hắn cũng phải dừng lại. Đoạn nàng đứng giữa phòng, hỏi hắn rằng trong mắt ngài, tôi là người bệnh hay là một thứ gì khác — hắn kể nguyên văn câu hỏi ấy, rồi nói thêm một điều chưa từng nói lúc đó: rằng trong vạn năm, chưa có ai hỏi hắn một câu như thế. Người ta hỏi hắn về công pháp, về đan dược, về thù oán, về sống chết. Chỉ có một cô gái mười tám tuổi, mang trong người thứ tà vật đang ăn mòn mình, mới hỏi kẻ mạnh nhất thiên hạ rằng hắn nhìn nàng bằng con mắt nào. Nàng nghe đoạn ấy, hai tay bất giác siết chặt chén trà đã nguội, và nói khẽ rằng dù không nhớ, nàng tin câu hỏi ấy là của mình — vì đến tận bây giờ, đó vẫn là điều nàng muốn biết nhất về bất cứ ai bước vào phòng này.",
      "Hắn kể luôn cả những điều nhỏ nhặt nhất, vì hắn hiểu những điều nhỏ nhặt mới là thứ làm nên một con người trong trí nhớ của người khác: nàng thích uống trà nhạt, tay trái nàng hơi run khi mệt, nàng cười bằng mắt trước khi cười bằng miệng, nàng thuộc tên từng người trong nhà này và cả tên con chó giữ bếp. Nàng nghe mà thỉnh thoảng bật cười, thỉnh thoảng lặng đi. Đến một lúc, nàng giơ tay xin hắn dừng một chút — không phải vì mệt, mà vì nàng muốn tự mình nói lại một đoạn vừa nghe, nói bằng lời của nàng, để kiểm chứng rằng câu chuyện ấy, dù không còn là ký ức của nàng, vẫn có thể đi qua lòng nàng mà không bị biến dạng.",
      "Có một điều hắn không kể trong đêm ấy — không phải vì giấu nàng, mà vì chính hắn cũng chưa nhìn thẳng vào nó: nếu cứ mỗi lần nàng ra tay là một mảnh ký ức rơi xuống, thì sẽ có một ngày nàng quên cả việc mình đã từng muốn sống như một con người. Và ngày ấy, kẻ duy nhất còn nhớ nàng từng muốn gì, sẽ là hắn. Hắn cất điều đó vào lòng như cất một thanh kiếm chưa tới lúc rút — và tiếp tục kể, giọng đều đều, cho đến khi canh ba đã gần kề.",
      "Nghe xong, nàng im lặng rất lâu. Rồi nàng hỏi hắn một câu mà hắn không ngờ tới — không phải hỏi về bệnh của mình, không phải hỏi về kẻ thù, mà hỏi về chính lời kể vừa rồi: nếu sau này nàng quên nữa, quên nhiều hơn nữa, thì những lời hắn kể lại cho nàng nghe — chúng có thành ký ức của nàng không?",
      "Hắn nói rõ từng chữ: lời bổn tọa kể là lời của bổn tọa. Nó là sợi dây thừng thả xuống giếng cho nàng bám, không phải là nước trong giếng. Nàng nghe để biết đường đi, để ra quyết định của chính nàng — chứ bổn tọa thà để nàng quên hẳn, còn hơn để nàng sống bằng một ký ức giả mang tên mình mà do kẻ khác viết hộ. Thứ trong người nàng đã cướp quyền điều khiển thân thể nàng; nếu bổn tọa lại viết hộ ký ức cho nàng, thì bổn tọa với nó khác nhau ở chỗ nào.",
      "Tiểu Lan nhìn hắn hồi lâu. Rồi, bằng một giọng bình tĩnh đến lạ, nàng nói rằng bây giờ nàng đã hiểu vì sao — dù đầu nàng trống rỗng — lòng nàng lại yên khi nghe tiếng hắn. Người ta có thể quên một cái tên. Nhưng cách một người đối xử với phần trống rỗng trong mình, thì thân thể ghi lại, dù trí nhớ không còn gì để ghi.",
      "Trước khi trời sáng, nàng xin hắn một điều ngược lại: từ nay, mỗi lần nàng quên, hắn hãy kể lại — kể cả những chuyện đau, kể cả những chuyện về chính nàng mà nàng nghe sẽ thấy xa lạ. Và nếu có ngày nàng quên đến mức không còn tin lời kể của ai nữa, thì hắn cứ kể, vì biết đâu thân thể nàng sẽ tin thay. Hắn nhận lời bằng một cái gật đầu, không thêm một chữ. Việc ấy, từ đêm nay, là việc của hắn — như việc gác cửa, việc giữ kiếm trong vỏ — không cần ai đòi, cũng không cần ghi vào sổ nợ nào.",
      "Câu chuyện còn chưa kể hết thì hắn dừng lại giữa một câu. Trong không khí khép kín của gian phòng, lẫn vào mùi thuốc và mùi trầm cũ, có một mùi khác vừa len tới: mùi khói gỗ, khét và mỏng. Phía dãy bếp sau, có tiếng gỗ cháy lách tách, rồi một tiếng kèo gãy nhỏ. Hắn đứng dậy. Câu chuyện phải chờ; có kẻ trong căn nhà này vừa chọn đúng giờ này để châm lửa."
    ],
    "dialogue": [
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài… ngài kể chuyện tôi, mà tôi nghe như nghe chuyện một người khác. Vậy mà lạ lắm — tôi không thấy sợ. Chắc vì ngài kể mà không hề bảo tôi rằng: 'nàng phải nhớ ra đi'. Ngài chỉ kể, rồi để tôi tự quyết tôi là ai trong câu chuyện đó."
      },
      {
        "speaker": "Cao Minh",
        "text": "Nghe cho kỹ, Hứa Tiểu Lan. Bổn tọa kể thì kể đúng như nó đã xảy ra — không thêm, không bớt, không nắn lại cho vừa lòng ai. Nhưng lời bổn tọa kể là lời của bổn tọa. Không bao giờ bổn tọa nói dối nàng rằng đó là ký ức của nàng."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Dạ. Vậy từ nay, tôi giao cho ngài giữ giùm tôi những ngày tôi đánh rơi. Nhưng ngài cũng phải hứa: khi tôi hỏi, ngài kể như kể cho một người còn đủ sức nghe — đừng thương hại tôi mà giấu bớt. Tôi thà đau vì sự thật của người khác kể, còn hơn yên ổn trong một câu chuyện được nắn nót cho vừa lòng mình."
      },
      {
        "speaker": "Cao Minh",
        "text": "Được. Ngủ đi."
      }
    ],
    "choices": [
      {
        "id": "write_names",
        "text": "Ngay trong đêm, viết lại danh sách tên tuổi từng người trong nhà và những chuyện đã qua — một bản ghi bằng giấy, để không chỉ trí nhớ của hắn giữ chúng.",
        "next": "lh_kitchen_fire",
        "effects": {
          "cluesHuaGiaDelta": 1,
          "lanTrustDelta": 2
        }
      },
      {
        "id": "watch_dawn",
        "text": "Ở lại bên cửa sổ tới sáng, canh cho nàng ngủ — đêm nay căn nhà vừa nếm mùi thất bại, nó sẽ chưa chịu yên.",
        "next": "lh_kitchen_fire",
        "effects": {
          "lanTrustDelta": 2
        }
      }
    ]
  },
  "lh_kitchen_fire": {
    "id": "lh_kitchen_fire",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Lửa trong bếp",
    "backgroundId": "long-hai-exterior",
    "location": "Nhà bếp và kho thuốc, biệt thự Long Hải",
    "companions": [
      "le_thu_nguyet"
    ],
    "narration": [
      "Lửa bốc lên ở nhà bếp vào lúc canh ba — cái giờ mà cả biệt thự còn ngái ngủ giữa hai đợt lệnh. Khói đen cuộn qua sân sau trước cả tiếng kêu. Cao Minh ra tới nơi thì gian bếp đã cháy được một nửa: lửa không lan theo gió như lửa thường, mà len thẳng về phía kho thuốc sát vách, men theo đúng đường mà một bàn tay hiểu rõ căn nhà này mới vạch ra được. Trong kho thuốc ấy có rương thuốc bị giữ từ ngày Tiểu Lan chuyển tới — và trong rương, theo lời bà Năm Liên, có những thứ mà nhà họ Hứa không bao giờ muốn lọt ra ngoài.",
      "Đám gia nhân đứng thành một vòng ngoài sân. Họ đứng yên — không phải vì sợ, mà vì chưa có lệnh cho phép họ chữa cháy trong chính căn nhà của mình. Có người tay đã nắm sẵn thùng nước mà chân không nhấc lên nổi, mắt nhìn ngọn lửa, nước mắt chảy vì khói và vì căm giận chính đôi chân mình. Cao Minh nhìn cái vòng người ấy lâu hơn nhìn ngọn lửa: một căn nhà đang cháy ngay trước mắt chủ nhân của nó, và mọi đôi tay đều bị trói bằng những sợi dây không ai nhìn thấy. Kỷ luật đến thế này thì không còn là sợ nữa. Đó là thứ đã ăn vào xương.",
      "Người đầu tiên phá vỡ vòng tròn là Lê Thu Nguyệt. Cô gái nhỏ không chờ lệnh của ai — cô xách váy chạy thẳng vào gian kho đang bén lửa, một mình, giữa lúc kèo cột bắt đầu kêu răng rắc. Cao Minh vào theo ngay sau, dùng chân khí ép ngọn lửa lùi lại thành một hành lang hẹp, vừa đủ cho một người gầy nhỏ chui qua. Khói đặc đến mức hắn phải nhắm mắt và đi bằng thần niệm; còn Thu Nguyệt thì đi bằng trí nhớ của mười mấy năm chạy việc trong căn nhà này.",
      "Cái rương được kéo ra khỏi kho trong tiếng kèo cột cháy đổ ầm ầm sau lưng. Thu Nguyệt ngồi bệt xuống sân, ôm chặt cái rương ướt vào lòng như ôm một đứa trẻ, ho sặc sụa vì khói mà không chịu buông tay cho ai khiêng phụ. Cao Minh phải nói đến lần thứ hai, và phải nói bằng giọng ra lệnh, cô mới chịu để hắn đỡ một đầu rương. Sau này hắn mới biết vì sao cô giữ chặt đến thế: mười hai tuổi, ngày đầu tiên vào làm trong phủ, chính bà Năm Liên đã dắt cô tới trước cái rương này và dặn — dặn một đứa trẻ con một việc của người lớn, vì trong căn nhà này, người lớn lần lượt đều đã bị lấy mất tiếng nói, chỉ còn trẻ con là chưa bị để ý tới.",
      "Trong lúc đám cháy còn chưa tắt hẳn, Cao Minh để ý một việc lạ: lửa cháy rất 'khéo'. Nó ăn theo đúng những dãy kệ đựng thuốc khô dễ bén nhất, vòng qua những thùng thuốc ướt, và dừng lại — như bị ai giữ cương — ngay trước gian buồng của bà đầu bếp, nơi bà đang ngủ mê mệt sau một ngày bị điều khiển. Một ngọn lửa cũng có kỷ luật như một đạo quân. Kẻ thù của hắn không chỉ dùng được người; nó dùng được cả những thứ vô tri, miễn là chúng nằm trong tầm của các điểm neo trong căn nhà.",
      "Chiếc rương được mở ra kiểm tra ngay sau đó, chỉ có ba người chứng kiến, trong gian bếp đã cháy rụi một nửa. Bên trong không phải vàng bạc. Là giấy — rất nhiều giấy: những bản kê khai thuốc men chép tay bằng một thứ mật mã lạ mà Thu Nguyệt nhận ra là ký hiệu của giới thương hồ Chợ Lớn, những cuộn vải lụa bọc ngoài các gói giấy dầu, và một mùi hương trầm rất cũ thoang thoảng bay lên, như mùi của một người đã khuất từ lâu vẫn còn phảng phất trong đồ đạc của mình. Cao Minh không đọc được mật mã ấy. Nhưng hắn nhìn nét chữ trên lớp giấy ngoài cùng — nét chữ của một người đàn bà học rộng, viết vội mà vẫn đẹp — và hiểu rằng cái rương này không phải kho thuốc. Nó là một cái kho báu bằng giấy, được người ta cất giấu ngay giữa lòng căn nhà của kẻ thù, dưới danh nghĩa tầm thường nhất: thuốc thang cho một cô gái bệnh.",
      "Cô kéo cái rương ra bằng cả hai tay và sức nặng của cả thân người. Rương gỗ lim, khóa đồng, nặng đến mức khi ra được tới sân, hai bàn tay cô phồng rộp đỏ lòm, tóc cháy xém một bên, mà câu đầu tiên cô nói khi thấy Cao Minh không phải kêu đau — cô hỏi rương có sao không, và nói một câu khiến hắn phải nhìn cô gái này bằng con mắt khác:",
      "Căn nhà tự chữa cháy ngay sau đó — khi lệnh cho phép được thả ra, đám gia nhân lao vào như một đàn kiến vỡ tổ, nước chuyền tay nhau đều tăm tắp, và ngọn lửa tắt nhanh đến mức đáng ngờ, như thể nó chỉ được phép cháy đến đúng cái mức cần thiết. Nhưng rương thuốc thì đã nằm ngoài sân, ướt sũng, nguyên vẹn — nằm ngoài tầm tay của ngọn lửa, và từ giây phút ấy, nằm ngoài tầm kiểm soát tuyệt đối của căn nhà.",
      "Bà đầu bếp quỳ xuống bên đống tro, khóc không thành tiếng. Bà thú thật, trong nước mắt, rằng chính tay bà đã nhận 'lệnh' châm lửa từ lúc canh ba — tay bà nhóm bếp như mọi ngày, chỉ khác là hôm nay nó không cho bà rút tay về khi lửa bén vào đống củi khô chất sẵn ở góc kho. Lại một bàn tay nữa bị mượn. Lại một con người nữa phải xin lỗi vì tội ác mà ý chí của họ chưa từng đồng ý.",
      "Cao Minh nhìn cái rương ướt nước giữa sân rất lâu. Căn nhà này vừa làm một việc mà trước đây nó chưa từng làm: nó hoảng. Nó thà đốt kho thuốc của chính mình còn hơn để những thứ trong rương ấy còn nguyên vẹn đến ngày đoàn kiểm tra tới. Mà một kẻ đã hoảng thì sẽ còn làm nhiều việc dại dột hơn nữa — hắn nhìn lên dãy nhà chính đang im lìm trong khói sớm, và biết rằng từ hôm nay, mọi chuyện sẽ dồn dập hơn nhiều."
    ],
    "dialogue": [
      {
        "speaker": "Lê Thu Nguyệt",
        "text": "Thưa ông, ông đừng mắng em. Cái rương này… bà Năm dặn em từ hồi em mười hai tuổi: nhà có cháy cũng phải cứu nó trước, cứu người xong là cứu nó. Em không biết trong đó có gì. Em chỉ biết bà dặn thì em làm."
      },
      {
        "speaker": "Cao Minh",
        "text": "Mắng cái gì. Rương còn nguyên là được. Tay bỏng thì nhúng vào thùng nước kia, đừng để nó phồng to — mai ngươi còn phải làm việc."
      },
      {
        "speaker": "Cao Minh",
        "text": "Mấy dấu nguệch ngoạc trên giấy này là chữ gì?"
      },
      {
        "speaker": "Lê Thu Nguyệt",
        "text": "Dạ, không phải chữ, thưa ông. Đó là ký hiệu của giới thương hồ Chợ Lớn — dân buôn họ ghi hàng, ghi nợ bằng dấu riêng, người ngoài nhìn vào như nhìn tranh vẽ. Em chạy việc chợ mấy năm mới thuộc được ít nhiều."
      },
      {
        "speaker": "Bà đầu bếp",
        "text": "Thưa ông… con lạy ông, ông đừng nói với ai là tay con châm lửa. Con còn mặt mũi nào nhìn cô chủ nữa… con nuôi cô từ hồi cô còn đỏ hỏn…"
      },
      {
        "speaker": "Cao Minh",
        "text": "Bà nuôi cô ấy lớn, chuyện đó là của bà. Chuyện châm lửa đêm nay là của nó. Đừng trộn hai chuyện vào nhau."
      }
    ],
    "choices": [
      {
        "id": "hide_trunk",
        "text": "Giấu rương thuốc vào nơi chỉ ba người biết, khóa lại câu chuyện về nó cho tới khi thật cần mở ra.",
        "next": "lh_hearth_anchor",
        "effects": {
          "cluesHuaGiaDelta": 2,
          "lanTrustDelta": 1
        }
      },
      {
        "id": "confront_house",
        "text": "Mang rương ra đặt giữa sân, cho cả nhà cùng thấy: thứ nó muốn đốt đã không cháy — một lời tuyên chiến công khai.",
        "next": "lh_hearth_anchor",
        "effects": {
          "lanMaterInfluenceDelta": 4,
          "lanTrustDelta": 1
        }
      }
    ]
  },
  "lh_hearth_anchor": {
    "id": "lh_hearth_anchor",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Điểm neo ở bếp",
    "backgroundId": "kitchen",
    "location": "Nhà bếp sau, biệt thự Long Hải",
    "entity": "entity_hoe",
    "narration": [
      "Sau đám cháy, Cao Minh đi một vòng quanh đống tro còn ấm và làm một việc hắn đã định làm từ lâu: tìm điểm neo của khu bếp. Hắn đã học được luật của căn nhà này — mạng lưới không treo lơ lửng trong không khí; nó bám vào những vật có thật, ở những chỗ có thật, và điều khiển thân thể con người qua những sợi nối chạy từ các điểm neo ấy. Điểm neo ở bếp, theo thần niệm của hắn, nằm ngay dưới bếp lò lớn: một vật cũ kỹ chôn sâu trong lòng đất, lạnh và nặng như một hòn đá không thuộc về vùng biển này.",
      "Hắn không cắt ngay. Thứ tự là luật sắt của căn nhà này: cắt sai thứ tự, hoặc cắt một điểm neo đang gánh phần điều phối sự sống của Tiểu Lan, là lấy mạng nàng ra đánh bạc. Điểm neo ở bếp này — hắn lần theo từng sợi nối của nó suốt một buổi — chỉ gánh việc điều khiển đám gia nhân khu sau và giữ 'nhịp' cho nửa phía tây của tòa nhà. Nó là một cái nút có thể tháo. Nhưng phải tháo cho khéo, và phải tháo lúc căn nhà không kịp trở tay.",
      "Việc tháo nút bắt đầu vào lúc bếp núc lo bữa trưa — giờ mà khu sau đông người nhất, ồn ào nhất, và mạng lưới bận rộn nhất với trăm công việc vụn vặt. Cao Minh ngồi ở góc bếp như một vị khách chờ cơm, hai tay đặt trên đầu gối, mắt nhắm hờ. Không ai thấy Tứ Kiếm Đoạn Mạch của hắn đang làm việc dưới lòng đất: từng sợi nối một, theo đúng thứ tự từ ngoài vào trong, như người tháo một cuộn chỉ rối mà không được làm đứt sợi nào không đúng lượt.",
      "Việc tháo một điểm neo, hóa ra, giống hệt việc gỡ một cuộn chỉ rối trong bóng tối — chậm, và không được phép sai một sợi. Mỗi sợi nối hắn lần theo đều dẫn tới một con người cụ thể: sợi này là của bà đầu bếp, sợi kia của anh phụ bếp, sợi mỏng nhất là của đứa bé rửa chén mới mười ba tuổi. Điểm neo không phân biệt người quan trọng hay không quan trọng — nó buộc cả những người hèn mọn nhất vào chung một bó, để kẻ muốn gỡ phải đi qua từng người một. Một cách dệt khiên rất rẻ và rất bẩn. Cao Minh ghi nhớ cái bẩn ấy, rồi tiếp tục gỡ, sợi nào ra sợi nấy, không nhanh hơn cũng không chậm đi một nhịp.",
      "Khi điểm neo bếp vừa tắt, cả khu sau như vừa được tháo một cái vòng cổ vô hình. Tiếng cười đầu tiên vang lên từ chỗ giếng — một cô hầu cười vì anh phụ bếp té ngồi vào thùng nước trong lúc đang ngơ ngác nhìn hai tay mình. Rồi tiếng cười lan ra, ngắt quãng, dè dặt, như tiếng của những người đã quên mất cười là làm thế nào và đang tập lại. Cao Minh đứng giữa sân sau, nghe những tiếng cười ấy. Hắn từng san bằng những pháo đài của ma tộc và chưa từng nghe thứ gì giống thế này.",
      "Nhưng niềm vui của khu bếp chỉ kéo dài tới đầu giờ chiều. Quản gia đi xuống bếp — một mình, không mang theo lệnh gì rõ ràng — đứng nhìn gian bếp đang hoạt động lộn xộn như một cái chợ quê, nhìn rất lâu. Rồi ông ta làm một việc mà không ai ngờ: ông ta lặng lẽ nhặt một cái chén sứt mà bà đầu bếp đánh rơi lúc sáng, đặt ngay ngắn lên kệ, và đi lên, không nói một lời nào. Không ai trong bếp dám chắc cái hành động ấy là của chính ông ta, hay là của thứ đang ngồi sau mắt ông ta, đang học cách bắt chước lòng thương người để dùng vào việc khác. Trong căn nhà này, ngay cả lòng tốt cũng phải bị kiểm chứng như tiền giả.",
      "Được nửa chừng, căn nhà phát hiện ra. Bà đầu bếp đang thái rau bỗng khựng lại, dao dừng giữa không trung. Rồi từ ngoài sân, gã làm vườn Tư Rỗ bước vào — vai vác cuốc, mắt trắng dã, không nói một lời, bổ thẳng cây cuốc xuống chỗ Cao Minh đang ngồi. Lần này không có tiếng van xin nào từ miệng gã. Căn nhà đã rút kinh nghiệm: nó bịt miệng vật chủ trước khi ra lệnh cho đôi tay.",
      "Cao Minh nghiêng đầu đúng một tấc — lưỡi cuốc sượt qua tai hắn, cắm phập xuống nền đất, cách điểm neo dưới bếp lò đúng một gang tay. Hắn hiểu ra ý đồ thật của đòn ấy: căn nhà không mong giết được hắn. Nó mong hắn phải đứng dậy, phải rút kiếm, phải gián đoạn việc tháo nút giữa chừng — và một điểm neo bị tháo dở dang, theo đúng luật thứ tự, sẽ giật ngược lại như một sợi dây đứt, quật vào chính những thân thể đang nối với nó.",
      "Hắn không đứng dậy. Một tay hắn vẫn giữ nguyên thế ngồi, thần niệm vẫn lần theo từng sợi nối dưới đất; tay còn lại đưa lên, nắm lấy cán cuốc đang rung rung trong tay gã làm vườn — nắm nhẹ như nắm tay một người bạn đang say rượu. Rồi hắn nói, rất khẽ, không phải với gã, mà với thứ đang ngồi sau đôi mắt trắng dã kia:",
      "Câu nói ấy không làm sợi lệnh đứt. Nhưng nó làm gã làm vườn khựng lại — vì từ trong thân thể bị bịt miệng kia, con người thật của Tư Rỗ nghe thấy có người vừa gọi đúng tên mình, và chút sức người còn lại của gã dồn hết vào hai bàn tay: giữ cây cuốc đứng yên, không cho nó nhấc lên lần nữa. Chỉ cần bấy nhiêu. Ba nhịp thở sau, sợi nối cuối cùng của điểm neo bếp tách ra gọn gàng. Khu bếp bỗng nhẹ đi như một người vừa trút được gánh nặng đeo suốt mấy mươi năm: bà đầu bếp bật khóc vì thấy tay mình lại nghe lời mình, tiếng dao thớt vang lên lộn xộn, sống động — tiếng của một gian bếp của người sống.",
      "Cái giá của chiến thắng nhỏ này đến ngay trong bữa trưa hôm đó: không có. Không ai bị thương, không ai mất thêm ký ức nào. Nhưng Cao Minh không tự lừa mình. Hắn mới tháo được một nút ở rìa mạng lưới, lúc căn nhà còn chưa dồn hết sức. Và từ trong gian bếp vừa được trả lại hơi người, hắn nghe rõ tiếng tòa nhà chính đang lặng lẽ sắp xếp lại hàng ngũ của nó — như một bàn tay vừa mất một ngón, đang học cách nắm chặt hơn bằng bốn ngón còn lại."
    ],
    "dialogue": [
      {
        "speaker": "Cao Minh",
        "text": "Mượn tay người ta thì giữ cho khéo vào. Đừng để bổn tọa phải nhìn lâu — bổn tọa nhìn lâu, thường có thứ phải đứt."
      },
      {
        "speaker": "Cao Minh",
        "text": "Tư Rỗ. Giữ cây cuốc yên ba nhịp thở. Ba nhịp thôi."
      },
      {
        "speaker": "Bà đầu bếp",
        "text": "Thưa ông… thưa ông, tay con nó tự thái rau theo ý con rồi… con thái lệch một lát, lệch thiệt nè ông — mà sao con mừng quá, con khóc nè ông…"
      },
      {
        "speaker": "Cao Minh",
        "text": "Thái lệch là tay người. Từ nay bếp này thái lệch cũng được. Bổn tọa ăn."
      }
    ],
    "choices": [
      {
        "id": "eat_with_servants",
        "text": "Ngồi lại ăn bữa trưa cùng đám gia nhân khu bếp — bữa ăn đầu tiên trong nhà này mà mọi người được tự gắp cho mình.",
        "next": "lh_storm",
        "effects": {
          "civiliansSavedDelta": 2
        }
      },
      {
        "id": "report_lan",
        "text": "Lên gian trong ngay, kể cho Tiểu Lan nghe khu bếp đã tự do — nàng cần biết mỗi chiến thắng nhỏ này, bằng lời kể rõ ràng.",
        "next": "lh_storm",
        "effects": {
          "lanTrustDelta": 1,
          "cluesHuaGiaDelta": 1
        }
      }
    ]
  },
  "lh_storm": {
    "id": "lh_storm",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Bão biển",
    "backgroundId": "storm-coast",
    "location": "Biệt thự Long Hải và bờ biển, đêm bão đạt đỉnh",
    "narration": [
      "Bão đã gầm trên biển Long Hải suốt từ buổi chiều, báo trước bằng một thứ im lặng còn đáng sợ hơn cả gió. Biển rút ra xa bất thường, chim biển bay vào bờ thành đàn kêu inh ỏi, và những người dân chài già nhất xóm nhìn trời rồi lắc đầu: cơn bão này không nhỏ. Suốt buổi chiều, trong biệt thự, quản gia cho đóng hết cửa chớp, chằng chống các mái hiên — mọi việc đâu ra đấy, nhanh và gọn, như thể căn nhà đã chờ cơn bão này từ lâu. Giờ thì đêm đã xuống và gió đang đạt đỉnh; Cao Minh đứng ở hành lang nhìn ra biển, và hiểu rằng đúng là nó đã chờ.",
      "Bão là đồng minh tự nhiên của một căn nhà biết điều khiển người. Tiếng gió gào át mọi tiếng kêu cứu. Bóng tối của mây bão nuốt trọn ánh ngày từ quá trưa. Mưa quất ngang khiến không một ai trong xóm chài dám ra khỏi cửa — không nhân chứng, không hàng xóm, không con mắt thứ ba nào nhìn vào sau hàng rào biệt thự. Và trong một đêm như thế, dù có chuyện gì xảy ra sau cánh cổng sắt kia, sáng mai người ta cũng chỉ nói với nhau rằng: bão to quá, nhà ai mà chẳng hư hại.",
      "Việc đầu tiên căn nhà làm khi gió nổi lên là khóa cổng — nhưng khóa theo một cách rất người: phu khuân Thới được 'lệnh' kéo sợi xích lớn vòng qua hai cánh cổng, ổ khóa bấm lại, chìa khóa bỏ vào túi áo quản gia. Việc thứ hai là tắt đèn. Từng dãy đèn trong nhà phụt tắt theo thứ tự từ ngoài vào trong, như một con mắt đang từ từ nhắm lại. Đến khi trời tối hẳn, cả tòa biệt thự chỉ còn le lói mấy ngọn đèn ở gian chính — và gian phòng trong cùng, nơi Tiểu Lan nằm, sáng lên đơn độc như một ngọn hải đăng giữa biển đen.",
      "Dân chài Long Hải có một kinh nghiệm truyền đời: bão mà đến vào lúc biển rút nhanh và chim bay loạn, thì đó là bão 'có ma' — thứ bão mà người già dặn nhau phải thắp nhang và đóng kín cửa từ sớm. Chiều hôm ấy, cả xóm chài đóng cửa gần như cùng một lúc, tiếng then cài vang lên dọc con đường đất ven biển như một hiệu lệnh buồn. Chỉ có tòa biệt thự trên cao là sáng đèn lâu hơn cả — và những người dân chài nhìn lên ánh đèn ấy qua màn mưa bắt đầu nặng hạt, không ai nói ra, nhưng ai cũng nghĩ cùng một điều: cái nhà ấy, đêm nay, có khi còn đáng sợ hơn cả bão.",
      "Cao Minh để ý cả những chi tiết nhỏ nhất trong cách căn nhà chuẩn bị đón bão, vì hắn biết một kẻ thù khôn ngoan nhất là khi nó chuẩn bị. Thùng nước mưa được đổ đầy — để sẵn cho việc chữa cháy nếu cần, hay để sẵn cho những việc khác cần nước trong đêm. Các cửa sổ được chèn bằng khăn ướt — chống gió, và cũng chống tiếng kêu thoát ra ngoài. Bếp nấu sớm hơn lệ thường hai canh giờ, phần ăn dọn ra cho cả nhà cùng một lượt — như người ta cho quân ăn trước trận đánh. Xếp chúng lại với nhau, chúng là hình ảnh của một bộ máy đang lên dây cót cho một đêm dài.",
      "Có một lúc, gió quật mạnh đến mức cả tòa nhà rung lên, và trong khoảnh khắc ấy — chỉ một khoảnh khắc — Cao Minh cảm được mạng lưới trong nhà chao đảo theo. Các sợi nối rung như dây đàn bị gió thổi qua. Hắn ghi nhớ cảm giác ấy như ghi nhớ một huyệt đạo: thứ này, dù mạnh đến đâu, vẫn phải bám vào nhà, vào đất, vào những vật hữu hình — mà những thứ hữu hình thì bão lay được, lửa đốt được. Một kẻ thù có chỗ bám là một kẻ thù gỡ ra được từng chỗ bám một. Hắn đã gỡ được bếp. Ngoài kia trong đêm tối còn chuông cổng, còn giếng sau, còn những điểm neo hắn chưa tìm thấy — và còn điểm neo lớn nhất, đang ngồi bên cửa sổ đóng kín, nghe tiếng gió bằng một đôi tai mà trong đó có hai kẻ cùng đang lắng nghe.",
      "Cao Minh đi một vòng quanh nhà trong mưa. Hắn kiểm tra từng thứ bằng cả mắt lẫn thần niệm: cổng đã xích, cửa sau đã chèn, chuồng ngựa trống — ngựa đã được dắt đi từ lúc nào hắn không hay, nghĩa là căn nhà không chừa cho ai một con đường chạy nhanh ra khỏi đây, kể cả chạy bộ. Ở bờ biển, sóng đã lên cao bằng mái nhà chài; chiếc thuyền nào ra khơi đêm nay cũng là đi vào chỗ chết. Mọi ngả đường đều đóng. Căn nhà đã biến cơn bão thành bốn bức tường thứ hai bao quanh nó.",
      "Hắn vào gian phòng trong cùng. Tiểu Lan ngồi bên cửa sổ đóng kín, nghe tiếng gió như nghe một bản nhạc xa. Nàng đã biết bão tới — không ai nói với nàng, nhưng thứ trong người nàng biết, và nó đang vui một niềm vui không phải của nàng. Nàng nói điều đó với hắn bằng giọng bình thản đến rợn người, như người ta báo thời tiết:",
      "Đêm đó, Cao Minh không về phòng khách nữa. Hắn kéo một chiếc ghế, ngồi ở hành lang ngay trước cửa phòng nàng, hai thanh kiếm lơ lửng hai bên vai lặng lẽ như hai con thú đang ngủ mà một mắt vẫn mở. Bà Năm Liên mang ra cho hắn một chén trà nóng và một cái áo tơi — bà không nói gì nhiều, chỉ dặn một câu của người già Nam Bộ trước đêm giông: 'Đêm nay ông coi chừng, ở xứ này, bão lớn thì ma cũng lớn theo.' Rồi bà quay vào, khép cửa, và thắp thêm một ngọn đèn nhỏ trước bàn thờ vọng trong buồng của nàng.",
      "Ngoài kia, gió bắt đầu gào thật sự. Mái ngói kêu lạch cạch như hàm răng va vào nhau. Và trong tiếng gào ấy, rất khẽ, rất đều, bắt đầu lẫn vào một thứ âm thanh khác: tiếng chân. Rất nhiều chân, bước đi trong mưa, không vội, không chậm — đang từ các dãy nhà phụ tiến về phía gian nhà chính, như nước triều dâng không gì cản nổi."
    ],
    "dialogue": [
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài, nó đang mừng. Tôi cảm được nó mừng, như đứa trẻ biết sắp được thả ra sân chơi. Đêm nay, dù tôi có dặn ngài điều gì, ngài cũng đừng tin đó là lời của tôi — trừ một câu này, tôi nói ngay bây giờ, lúc tôi còn là tôi: dù tay tôi có làm gì, lòng tôi không hề muốn."
      },
      {
        "speaker": "Cao Minh",
        "text": "Nghe rõ. Câu này là của nàng, bổn tọa nhớ. Còn đêm nay, thứ gì mang gương mặt nàng mà nói khác đi — bổn tọa coi như gió bão nói, không đáng nghe."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Tôi không ngủ được đâu, thưa ngài. Nhưng biết có người ngồi ngoài cửa, nghe tôi nói nhảm mà phân biệt được câu nào của tôi, câu nào không… như vậy là đủ để tôi ngồi yên tới sáng rồi."
      }
    ],
    "choices": [
      {
        "id": "guard_door",
        "text": "Ngồi gác ngay trước cửa phòng nàng suốt đêm bão — biến chính mình thành cánh cửa cuối cùng của căn nhà.",
        "next": "lh_night_attack",
        "effects": {
          "lanTrustDelta": 2
        }
      },
      {
        "id": "patrol_house",
        "text": "Đi tuần khắp nhà trong bão, gặp đợt người nào thì hóa giải đợt ấy trước khi chúng kịp kéo tới gian trong.",
        "next": "lh_night_attack",
        "effects": {
          "civiliansSavedDelta": 1,
          "partyHealthDelta": -3
        }
      }
    ]
  },
  "lh_night_attack": {
    "id": "lh_night_attack",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Đêm nhà tấn công",
    "backgroundId": "long-hai-exterior",
    "location": "Sân và các hành lang biệt thự, đêm bão",
    "entity": "entity_youth",
    "narration": [
      "Chúng đến không một tiếng hô. Hàng chục người — phu khuân, gia nhân bếp, người làm vườn, mấy cô hầu, cả lão quản gia tóc bạc — từ ba phía sân và hai hành lang cùng lúc tiến vào, ướt sũng nước mưa, tay cầm bất cứ thứ gì họ vẫn cầm ban ngày: cuốc, dao phay, đòn gánh, kéo cắt cành, gậy gộc. Mặt ai cũng trắng dã, miệng ai cũng mím chặt. Tiếng duy nhất là tiếng mưa và tiếng chân trần dẫm trên nền gạch ngập nước. Một đạo quân lặng im nhất mà Cao Minh từng đối mặt trong vạn năm — và cũng là đạo quân duy nhất mà hắn không được phép đánh trả.",
      "Hắn lùi dần theo hành lang, giữ mình luôn ở giữa đám người và cánh cửa gian phòng trong cùng. Chiến thuật của hắn đêm nay không có trong bất cứ binh pháp nào: hắn không tấn công, hắn mở đường. Mỗi khi một nhóm gia nhân dồn tới, hắn điểm nhẹ vào những sợi nối ngoài thân mà thần niệm bắt được, tháo từng nút một — người được tháo nút gục xuống ngủ say như trẻ con, và hắn đỡ họ nằm xuống chỗ khô ráo trước khi nhóm tiếp theo kéo tới. Đánh nhau với một tòa nhà, hóa ra là công việc của một người đỡ đẻ và một người gác đêm cộng lại.",
      "Nhưng căn nhà học rất nhanh. Khi nó thấy các sợi nối ngoài thân bị tháo, nó đổi cách đánh: nó ra lệnh cho đám người không cầm vũ khí nữa, mà ôm. Hàng chục thân thể ướt lạnh ùa vào ôm chặt lấy hắn, níu tay, níu áo, trèo lên người hắn như một bức tường bằng thịt đang tự xây. Không một đòn nào trong số đó làm hắn đau. Nhưng một kẻ bị ôm cứng bởi ba mươi con người thì không thể bảo vệ một cánh cửa — và từ phía sân sau, một nhóm khác đã bắt đầu đi vòng.",
      "Cao Minh đứng yên giữa vòng vây ôm, và làm một việc mà không ai trong căn nhà này ngờ tới: hắn nói. Không phải nói với thứ đang điều khiển. Hắn gọi tên. Tên người phu Thới đang ôm cánh tay trái hắn. Tên anh bếp Bảy đang níu vạt áo hắn. Tên Sáu, người gác cổng: ở mé sông, đứa con gái mới sinh tên Hạt của anh ta còn chờ cha về. Tên Tư Rỗ làm vườn: ở quê, cha già mắt lòa của anh ta còn ngóng con. Tên cô hầu Phụng ôm chân hắn mà toàn thân run như cầy sấy: ở quê, đứa con gái của cô sắp tới tuổi vào trường làng. Những cái tên và mảnh đời ấy, hắn biết không phải nhờ thần thông đọc lòng người — nàng đã kể cho hắn nghe từng người một, trong những buổi hắn ngồi nghe như nghe một thứ học vấn kỳ lạ của thế giới này. Tiếng nói của hắn không lớn, xuyên qua tiếng mưa, rơi vào những đôi tai mà chủ nhân của chúng tưởng như đã mất quyền nghe từ lâu.",
      "Có một khoảnh khắc căn nhà đánh được một nước khá: một bà lão làm vườn — người già nhất trong đám gia nhân, lưng còng đến mức gần như gập đôi — ôm lấy chân hắn và không chịu buông, miệng lắp bắp xin lỗi, trong khi hai tay bà cụ siết chặt như hai gọng kìm. Gỡ tay bà ra bằng sức thì gãy ngón tay bà. Hắn đành quỳ xuống, ngay giữa vòng vây, ngang tầm với bà, và nói chuyện với bà suốt mười mấy hơi thở — về cây cau sau vườn mà bà trồng từ hồi còn con gái — cho tới khi chính bà, run rẩy, tự mở từng ngón tay ra. Mười mấy hơi thở ấy, phía sân sau, nhóm người thứ hai đã đi vòng được nửa đường. Hắn ghi nhận nước cờ này: dùng người yếu nhất làm nút thắt chậm nhất. Tốn thời gian thật — nhưng hắn có thừa thời gian; thứ hắn không có thừa là xác người.",
      "Khi trời gần sáng mà đám đông cuối cùng cũng tan, Cao Minh mới để ý hai tay áo của mình đã bị níu rách, và trên người hắn — kẻ mà vạn năm qua không một thứ vũ khí nào chạm tới được — chi chít những vết cào, vết cấu của những bàn tay tuyệt vọng. Không vết nào sâu. Hắn nhìn chúng một lúc như nhìn một món đồ lạ: lần đầu tiên trong vạn năm, hắn mang thương tích do những người hoàn toàn không muốn làm hắn đau gây ra.",
      "Hiệu quả không đến ngay, và không đến với tất cả. Nhưng từng người một, những cánh tay đang ôm hắn bắt đầu run theo một nhịp khác — nhịp của người đang cố sức giành lại chính cánh tay mình. Thới là người đầu tiên buông ra, quỵ xuống ôm mặt khóc giữa mưa. Rồi đến anh bếp. Rồi một cô hầu. Bức tường thịt nứt ra từng mảng, không phải vì bị phá, mà vì từng viên gạch trong đó nhớ ra mình là người.",
      "Căn nhà phản ứng bằng đòn cuối cùng của đêm: từ trong đám đông, một gã gia nhân cầm con dao phay dài bước ra — gương mặt mà nó vẫn để dành cho những việc nặng nhất. Gã không ôm, không níu. Gã chém — chém thật, chém liên tiếp, mỗi nhát đều nhắm vào những chỗ mà một người thường sẽ phải đỡ bằng kiếm hoặc bằng mạng. Và miệng gã, lần này, được phép mở ra — để gào lên những câu không phải của gã, bằng giọng của gã:",
      "Cao Minh đỡ ba nhát dao bằng sống kiếm không rời vỏ — hắn chưa rút kiếm ra khỏi vỏ suốt từ đầu đêm tới giờ, và hắn định giữ nguyên như thế tới sáng. Nhát thứ tư, hắn tháo sợi nối của gã cầm dao ngay giữa đà chém; gã đổ xuống như người kiệt sức sau một ngày đồng áng, con dao rơi xuống nước, và gã nằm khóc trong vũng nước mưa, miệng lặp đi lặp lại rằng gã không muốn, gã không muốn. Sau lưng hắn, hành lang đã đầy những người nằm ngủ say và những người ngồi khóc — và cánh cửa gian phòng trong cùng vẫn đóng, ngọn đèn sau cửa vẫn sáng.",
      "Bão quật suốt đêm đó, nhưng không một ai trong tòa nhà bước qua được chiếc ghế gác trước cửa phòng nàng. Khi trời gần sáng, mưa ngớt dần, đám người tự dìu nhau về các dãy buồng như sau một cơn ác mộng tập thể. Căn nhà im lặng — lần đầu tiên, một sự im lặng có mùi của thất bại. Còn Cao Minh thì ngồi xuống bậc thềm ướt, nhìn hai bàn tay mình: sạch nguyên, không một giọt máu nào không phải của hắn. Một đêm không ngủ, một thân áo rách, đổi lấy con số không tròn trĩnh ấy. Hắn thấy cái giá đó rẻ."
    ],
    "dialogue": [
      {
        "speaker": "Gã cầm dao",
        "text": "Giết ta đi! Sao ngươi không giết ta?! Ngươi sợ rồi phải không — ngươi sợ bàn tay ngươi dơ, sợ cô chủ của ta nhìn ngươi như nhìn một con thú! Vậy thì đứng đó mà nhìn chúng ta tự làm thịt nhau!"
      },
      {
        "speaker": "Cao Minh",
        "text": "Mượn miệng người ta mà gào cũng to nhỉ. Đáp án vẫn như cũ: không. Ngươi muốn có người chết đêm nay, thì tự mình xuống đây. Bổn tọa tiếp."
      },
      {
        "speaker": "Người phu Thới",
        "text": "Thưa ông… tay con buông ra được rồi… con buông ra được rồi, ông ơi… con cảm ơn ông đã kêu tên con…"
      }
    ],
    "choices": [
      {
        "id": "carry_wounded",
        "text": "Tự tay khiêng từng người kiệt sức vào hiên khô, đắp chăn, chờ họ tỉnh — để khi mở mắt, thứ đầu tiên họ thấy là mình còn sống và không ai trách mình.",
        "next": "lh_blade_wound",
        "effects": {
          "civiliansSavedDelta": 3,
          "lanTrustDelta": 2
        }
      },
      {
        "id": "count_anchors",
        "text": "Tranh thủ lúc căn nhà kiệt sức sau trận đêm, đi kiểm lại toàn bộ điểm neo đã biết — ghi nhớ cho một việc lớn hơn sắp tới.",
        "next": "lh_blade_wound",
        "effects": {
          "cluesHuaGiaDelta": 2
        }
      }
    ]
  },
  "lh_blade_wound": {
    "id": "lh_blade_wound",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Lưỡi dao quay ngược",
    "backgroundId": "long-hai-corridor",
    "location": "Hành lang biệt thự, cuối đêm bão",
    "companions": [
      "npc_servant_male"
    ],
    "narration": [
      "Trời chưa sáng, đám đông ngoài sân vừa tan, trong lúc Cao Minh khiêng người cuối cùng vào hiên, anh bếp Bảy lặng lẽ đứng dậy. Anh ta là người hiền nhất trong đám gia nhân — người mà đêm qua, giữa vòng vây ôm, đã buông tay khỏi vạt áo hắn sớm nhất và khóc lâu nhất. Bây giờ anh ta đi vào bếp, lấy con dao thái thịt lớn nhất, và quay lại hành lang, đứng ngay trước mặt Cao Minh, hai tay nâng dao lên ngang ngực — mũi dao không hướng ra ngoài. Nó hướng vào chính anh ta.",
      "Không ai kịp la lên. Anh bếp đâm — không phải một cái đâm do dự của người tự tử, mà là một cái đâm dứt khoát, đúng kỹ thuật, của một bàn tay đã thái thịt mười mấy năm và biết chính xác chỗ nào trên một thân thể là chỗ mềm nhất. Căn nhà đã tính rất kỹ nước cờ này: vị khách lạ sẽ phải chọn trong một tích tắc — hoặc chém bay con dao cùng cánh tay đang cầm nó, hoặc đứng nhìn một người tự đâm xuyên ngực mình ngay trước cửa phòng cô chủ. Cả hai cách, khi trời sáng, đều có máu của gia nhân nhà họ Hứa trên tay hoặc trên lương tâm của hắn.",
      "Cao Minh chọn cách thứ ba, cách không có trong tính toán của căn nhà: hắn bước tới và đưa tay ra nắm lấy lưỡi dao. Không phải sống dao. Là lưỡi dao — bằng lòng bàn tay trần. Lưỡi dao thái thịt cứa qua da thịt hắn, máu chảy xuống dọc cán dao, trong khi tay kia của hắn giữ chặt cổ tay anh bếp, và chân khí từ lòng bàn tay bị thương chạy ngược theo lưỡi dao, khóa cứng cả cánh tay đang đâm lại giữa chừng — mũi dao chỉ vừa kịp rạch một đường nông trên ngực anh bếp.",
      "Điều đáng sợ nhất của cái đêm dài ấy không nằm ở lưỡi dao, mà nằm ở sự bình thản của anh bếp trước khi đâm. Anh ta chào Cao Minh như mọi ngày. Anh ta còn hỏi han rằng đêm qua ông ngủ có ngon không, tay còn rót sẵn một chén trà đặt lên bàn đá ngoài hiên. Tức là sợi lệnh đã nằm sẵn trong người anh ta từ trước đó rất lâu, êm như một con rắn nằm trong cỏ, chờ đúng khoảnh khắc thích hợp mới ngóc đầu. Cao Minh nhìn chén trà còn bốc khói trên bàn đá một lúc. Căn nhà này giấu răng của nó trong những khoảnh khắc bình yên nhất — hắn ghi nhớ, theo cái cách hắn vẫn ghi nhớ thói quen của mọi kẻ thù: không giận, chỉ ghi.",
      "Anh bếp Bảy sau đó nhất định không chịu về buồng nghỉ. Anh ta quay xuống bếp, tự tay nấu một nồi cháo trắng lớn, múc ra từng bát, bưng đi phát cho từng người trong nhà — kể cả những người đêm qua đã ôm níu Cao Minh, kể cả chính anh ta sau cùng. Anh ta nói, bằng cái giọng khàn đặc của người vừa khóc cạn nước mắt, rằng tay anh ta phải làm một việc tốt trước khi trời sáng, để lát nữa nằm xuống, anh ta còn dám ngủ. Không ai trong nhà ngăn anh ta. Bà đầu bếp chỉ lặng lẽ nêm thêm vào nồi cháo một nắm hành — cách của người già Nam Bộ để nói một lời an ủi mà miệng không nói nên lời.",
      "Tiểu Lan nghe kể lại chuyện lưỡi dao khi nàng tỉnh giấc, trời còn chưa sáng. Nàng im lặng một lúc rất lâu, rồi bảo bà Năm Liên mời anh bếp lên — không phải để trách, mà để tự tay xem vết rạch trên ngực anh ta và thay lại miếng băng. Khi anh ta quỳ xuống xin lỗi, nàng đỡ anh ta dậy và nói một câu mà cả hành lang hôm ấy đều nghe thấy, và câu ấy sau này được đám gia nhân nhắc lại cho nhau nghe như một lời kinh: 'Anh Bảy, trong nhà này đã có đủ người quỳ rồi. Từ nay ai muốn xin lỗi tôi, cứ đứng thẳng mà nói — tôi nghe rõ hơn.'",
      "Anh bếp Bảy gào lên — lần này là tiếng gào của chính anh ta, vì sợi lệnh vừa bị cắt bởi chính dòng máu đang chảy trên lưỡi dao kia. Anh ta quỵ xuống, ôm lấy bàn tay đẫm máu của Cao Minh mà khóc như một đứa trẻ, miệng nói không thành câu, chỉ lặp đi lặp lại tên của chính mình như để tự nhắc mình còn sống. Gia nhân đứng quanh hành lang im phăng phắc. Lần đầu tiên, tất cả bọn họ cùng nhìn thấy một điều mà căn nhà này không bao giờ muốn họ thấy: kẻ mạnh nhất ở đây vừa tự làm mình bị thương, để một người yếu nhất trong họ không phải chết.",
      "Bà Năm Liên băng bó cho cả hai người — cho anh bếp trước, rồi cho Cao Minh, đôi tay già run run mà miệng thì mắng yêu bằng cái giọng của người đã coi hắn như người nhà từ lúc nào không hay. Bà nói một câu mà hắn nhớ rất lâu sau đó, vì nó là lời của người đã sống trong căn nhà này mấy mươi năm và hiểu nó hơn bất cứ ai:",
      "Cao Minh nhìn vết thương trên tay mình đang khép lại chậm rãi — hắn để mặc nó khép theo nhịp của nó. Chữa lành trong một cái chớp mắt trước mặt đám gia nhân này, e rằng chỉ tổ làm họ sợ thêm; vả lại vết cứa ấy nông, và hắn không vội. Rồi hắn nói, đủ lớn cho cả hành lang, và cho thứ đang nghe lén qua hàng chục đôi tai cùng nghe:",
      "Từ giờ phút đó, trong đám gia nhân lan đi một câu chuyện mới — không phải câu chuyện về một vị khách lạ mạnh đến đáng sợ, mà về một người đã nắm lấy lưỡi dao bằng tay trần. Căn nhà vẫn còn điều khiển được thân thể họ. Nhưng trong đầu họ, một thứ khác đã bắt đầu lớn lên, thứ mà không sợi lệnh nào chạm tới được: họ bắt đầu tin rằng mình đáng được cứu theo cách không phải chết."
    ],
    "dialogue": [
      {
        "speaker": "Bà Năm Liên",
        "text": "Ông nghe bà già này nói một câu, thưa ông. Chúng nó không cần thắng ông đâu. Từ đầu tới giờ, chúng nó chỉ cần một việc: làm cho ông thành kẻ giết người trong mắt con bé — hay thành một cái xác biết đi trong mắt nó. Ông mà chém xuống một lần, là chúng nó thắng hết cả bàn cờ, ông có biết không?"
      },
      {
        "speaker": "Cao Minh",
        "text": "Bà già nói đúng. Bổn tọa biết từ đêm hành lang. — Còn ngươi, kẻ đang mượn tai cả nhà này: nghe cho rõ. Bàn tay này nắm dao quen rồi. Muốn bổn tọa chém một người bị mượn tay, ngươi còn phải chờ lâu."
      },
      {
        "speaker": "Cao Minh",
        "text": "Anh bếp. Vết trên ngực ngươi là của nó, đừng nhận. Đứng dậy đi — cháo của ngươi nguội mất."
      },
      {
        "speaker": "Anh bếp Bảy",
        "text": "Thưa ông… con tên Bảy, con nấu bếp… con còn sống, thưa ông… con còn sống mà tay ông chảy máu vì con…"
      }
    ],
    "choices": [
      {
        "id": "keep_wound",
        "text": "Không chữa lành vết thương ngay — để cả nhà nhìn thấy nó suốt mấy ngày, như một lời nhắc không cần nói thành lời.",
        "next": "lh_ba_confession",
        "effects": {
          "partyHealthDelta": -3
        }
      },
      {
        "id": "reassure_cook",
        "text": "Xuống bếp ăn ngay một bát cháo do chính anh bếp nấu, trước mặt mọi người — trả lại cho anh ta cái nghề và cái tên của mình.",
        "next": "lh_ba_confession",
        "effects": {
          "civiliansSavedDelta": 1,
          "lanTrustDelta": 2
        }
      }
    ]
  },
  "lh_ba_confession": {
    "id": "lh_ba_confession",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Chén rượu năm xưa",
    "backgroundId": "tieu-lan-room",
    "location": "Phòng Hứa Tiểu Lan, biệt thự Long Hải",
    "companions": [
      "ba_nam_lien"
    ],
    "narration": [
      "Bà Năm Liên xin gặp riêng Cao Minh lúc trời còn chưa sáng, ở gian phòng trong cùng, trước mặt Tiểu Lan đang ngủ. Bà già ngoài bảy mươi, lưng đã còng, hai tay đặt ngay ngắn trên đùi như một người chờ nghe tuyên án. Bà nói bà có một món nợ phải khai ra trước khi quá muộn — vì đoàn kiểm tra sắp tới, vì căn nhà đang dồn đến bước đường cùng, và vì bà không muốn mang bí mật này xuống mộ trong lúc cô chủ của bà còn đang cần mọi sự thật trên đời để tự quyết đời mình.",
      "Câu chuyện của bà bắt đầu từ mười mấy năm trước, khi Tiểu Lan còn là một đứa bé con. Ngày ấy bà chỉ là một người làm công trong Hứa phủ ở Chợ Lớn, được việc bưng bê trong các bữa tiệc của nhà họ Hứa. Bà kể về một đêm nhà có lễ lớn — khách khứa đông, đèn đuốc sáng như ngày hội — và giữa bữa tiệc, có người đưa cho bà một chén rượu nhỏ, dặn bưng tới cho cô chủ nhỏ đang ngồi với mẹ, nói rằng đó là rượu lễ gia truyền, trẻ con nhà này tới tuổi ấy đều phải uống một ngụm để lấy phước.",
      "Bà đã bưng chén rượu ấy bằng hai tay. Bà còn nhớ đứa bé con ngẩng lên nhìn bà cười, nhớ mình đã dỗ nó uống cho hết vì 'ngoan nào, uống đi con, phước của nhà mình đó'. Chén rượu ấy về sau bà mới biết tên — Lục Huyết Tửu — và mới hiểu, chầm chậm theo năm tháng, rằng thứ mình bưng cho đứa bé hôm ấy không phải phước lộc gì. Nó là hạt giống của thứ đang sống trong người nàng bây giờ, là sợi dây đầu tiên buộc một đứa trẻ vào cái mạng lưới mà cả đời nàng sau này không thoát ra được.",
      "Bà kể thêm những chi tiết mà một người ngoài không bao giờ biết được: chén rượu ấy nhỏ hơn chén thường, miệng chén có viền bạc, rượu trong chén không trong như rượu lễ mà hơi đục và ánh lên một màu đỏ rất nhạt khi đưa ra ánh đèn. Người đưa chén cho bà là một ông khách của nhà — mặt mũi thế nào bà không còn nhớ, chỉ nhớ bàn tay ông ta rất trắng và móng tay cắt vuông, không giống tay của người làm ăn buôn bán. Và bà nhớ tiếng của mẹ con bé — bà Lâm Ngọc Chi — cười nói cảm ơn, vì đến tận lúc chén rượu được bưng tới, không một ai trong bữa tiệc ấy, kể cả nhị phu nhân, biết rằng mình đang dự một buổi lễ chứ không phải một bữa tiệc mừng.",
      "Điều làm bà Năm Liên dằn vặt nhất, bà nói, không phải là việc bà đã bưng chén. Mà là những năm sau đó, khi con bé lớn dần và bắt đầu có những cơn bệnh lạ, bà đã vài lần định hỏi, định nói — và lần nào cũng thôi. Bà sợ. Sợ mất việc thì ít, sợ phải nghe câu trả lời thì nhiều. Bà cứ tự nhủ rằng chắc không phải do chén rượu ấy đâu, chắc con bé yếu sẵn, chắc mình nghĩ quá. Mười mấy năm tự nhủ như thế, cho tới cái đêm nghe tiếng đợt lệnh chạy qua các dãy buồng và nhìn đám gia nhân đứng dậy như mộng du, bà mới hiểu rằng sự im lặng của mình cũng là một thứ đã nuôi căn nhà này lớn lên. Bà khai ra hôm nay không phải để được tha. Bà khai ra vì nếu bà còn im lặng thêm một lần nữa, bà sẽ không còn là bà nữa.",
      "Cao Minh nghe hết câu chuyện mà không ngắt lời một lần. Khi bà dứt, hắn ngồi im một lúc. Hắn không nói lời tha thứ — tha thứ không phải việc của hắn, và bà cũng không xin hắn điều đó. Hắn chỉ hỏi một câu về ông khách mặt trắng năm ấy, nghe bà đáp rằng không nhớ nổi mặt, rồi thôi. Món nợ này, trong đầu hắn, đã tự sắp xếp lại đúng tên người nợ: kẻ bày lễ, kẻ ra lệnh, cả một phủ đông người ngồi nhìn mà không ai hỏi một câu. Bà chỉ là mắt xích cuối cùng và yếu nhất của cái chuỗi ấy — và là mắt xích duy nhất, suốt mười mấy năm, tự mình đau vì nó.",
      "Bà kể hết, không giấu một chi tiết nào để tự bào chữa: rằng bà không biết, rằng bà chỉ là người bưng bê, rằng trong Hứa phủ ngày ấy, người làm công không có quyền hỏi trong chén là gì. Rồi bà nói câu mà bà đã mang theo như một hòn đá trong ngực suốt mười mấy năm — rằng không biết, không có nghĩa là tay bà sạch. Chính tay bà. Chính chén rượu ấy. Chính đứa bé ấy, bây giờ nằm ngủ cách bà ba bước chân, thỉnh thoảng trong mơ vẫn gọi tên bà như gọi một người thân nhất trên đời.",
      "Tiểu Lan không ngủ. Nàng đã tỉnh từ lúc nào, nằm yên nghe hết, nước mắt chảy ngang thái dương xuống gối mà không đưa tay lau. Khi bà Năm Liên nức nở xin nàng một lời tha thứ — hoặc một lời oán trách, thứ nào bà cũng xin nhận — nàng chống tay ngồi dậy, với qua, nắm lấy bàn tay già nua đang run rẩy kia. Câu nàng nói sau đó khiến Cao Minh, người đứng ở cuối giường, phải quay mặt đi một lúc:",
      "Đêm ấy, bà Năm Liên quỳ rất lâu mới chịu đứng dậy, và khi đứng dậy, lưng bà như thẳng hơn được một chút — không phải vì món nợ đã hết, mà vì lần đầu tiên sau mười mấy năm, món nợ ấy được nói ra thành lời trước mặt người duy nhất có quyền phán xét nó. Cao Minh nhìn hai người đàn bà, một già một trẻ, nắm tay nhau trong gian phòng im lặng. Căn nhà này sống bằng sợ hãi, bằng mệnh lệnh — và bằng những bí mật không ai dám nói. Đêm nay, một bí mật vừa được nói ra."
    ],
    "dialogue": [
      {
        "speaker": "Bà Năm Liên",
        "text": "Dạ, thưa ông, bà già này xin khai thiệt. Cái chén rượu năm xưa đưa con bé vào cái kiếp này… là tay tôi bưng. Tôi không biết trong chén có gì, thiệt tình không biết. Nhưng tay tôi thì bưng thiệt. Mười mấy năm nay, đêm nào tôi cũng nghe tiếng chén rượu đó đặt xuống bàn. Ông cứ chửi tôi đi, thưa ông — hay cô chửi tôi đi — chửi cho tôi nhẹ cái ngực này một chút."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Bà ơi, bà đừng quỳ. Tôi không trách bà. Năm ấy bà bưng một chén rượu trong một bữa tiệc mà bà không có quyền hỏi han — cũng như anh Sáu kéo then cửa, như anh Bảy cầm dao. Cái nhà này nó khéo lắm: nó toàn mượn tay người hiền để làm việc ác, để người hiền tự dằn vặt nhau mà không ai nhìn lên kẻ ra lệnh. Tôi không để nó thắng thêm một lần như vậy nữa, bà nghe tôi chưa?"
      },
      {
        "speaker": "Cao Minh",
        "text": "Đứng dậy đi, bà già. Người phải quỳ trong chuyện này không có mặt trong phòng này. Nợ của bà, từ nay trả bằng cách khác: ở lại — và khi cần, nói lại hết những gì bà vừa nói, trước mặt những kẻ phải nghe."
      }
    ],
    "choices": [
      {
        "id": "ba_witness",
        "text": "Khuyên bà giữ sức và giữ kín chuyện này cho tới ngày cần nói ra trước mặt đoàn kiểm tra — lời chứng của bà là một con dao chưa tới lúc rút.",
        "next": "lh_lan_plan",
        "effects": {
          "cluesHuaGiaDelta": 2,
          "lanTrustDelta": 2
        }
      },
      {
        "id": "ba_forgive",
        "text": "Để hai người ở lại với nhau thêm một lúc — có những món nợ chỉ người trong cuộc mới gỡ được cho nhau.",
        "next": "lh_lan_plan",
        "effects": {
          "lanTrustDelta": 3
        }
      }
    ]
  },
  "lh_lan_plan": {
    "id": "lh_lan_plan",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Kế hoạch của nàng",
    "backgroundId": "tieu-lan-room",
    "location": "Phòng Hứa Tiểu Lan, biệt thự Long Hải",
    "narration": [
      "Trời còn chưa sáng, Tiểu Lan đã cho gọi Cao Minh vào phòng — không phải bằng một lời nhắn qua bà Năm Liên như lệ thường, mà bằng một mảnh giấy viết tay, nét chữ thanh tú và vững vàng: 'Mời ngài vào, tôi có việc cần bàn. Việc của tôi.' Hắn bước vào thì thấy nàng đã ngồi ngay ngắn bên bàn, trước mặt là một tờ giấy lớn gấp tư, trên đó nàng vẽ — bằng ký ức của mười một năm sống trong căn nhà này — sơ đồ của cả tòa biệt thự.",
      "Nàng trình bày kế hoạch của mình như một người đã suy nghĩ rất lâu và rất kỹ. Đoàn kiểm tra của Giới Phòng sẽ tới — nàng biết, vì thứ trong người nàng biết, và nó không giấu nàng điều mà nó cho là nàng không làm gì được. Khi đoàn tới, căn nhà sẽ phải dồn sức diễn vai một gia đình bình thường và đối phó với khách lạ; đó là lúc mạng lưới bận rộn và mỏng nhất. Nàng sẽ không trốn trong phòng nữa. Nàng muốn tự mình bước ra, đối diện đoàn kiểm tra bằng chính tên thật của mình — để ít nhất một lần, trên giấy tờ của chính nhà họ Hứa, có một dòng ghi rằng Hứa Tiểu Lan còn sống và còn tự nói được.",
      "Kế hoạch có cả phần của Cao Minh, được nàng giao việc rõ ràng như một vị chủ tướng trẻ: hắn không được ra tay trước, không được đe dọa ai; việc của hắn là đứng đó — đứng như một ngọn núi mà mọi người trong phòng đều biết không thể xô ngã — để đoàn kiểm tra phải cân nhắc từng lời trước khi nói dối, và để đám gia nhân trong nhà, lần đầu tiên, dám nhìn lên. Còn phần nguy hiểm nhất, phần đối mặt và cất tiếng, nàng giữ lại cho chính mình. Nàng nói điều đó không chút run rẩy:",
      "Tờ sơ đồ của nàng vẽ không đẹp, nhưng đầy đủ đến kinh ngạc: từng dãy nhà, từng cửa ngách, chỗ nào gia nhân hay đứng, giờ nào quản gia đi tuần, kho nào khóa hai ổ. Có những chỗ nàng chua thêm bằng nét chữ nhỏ: 'cửa này kêu', 'chỗ này tối', 'từ đây nghe được tiếng ở cổng'. Mười một năm sống như một người bị giam trong chính nhà mình, nàng đã biến sự giam cầm ấy thành một thứ học vấn — học vấn của kẻ bị nhốt quan sát cái lồng của mình kỹ hơn bất cứ kẻ nào nhốt nàng. Cao Minh xem sơ đồ, và nhận ra một điều hơi lạ đối với hắn: trong căn nhà này, người thuộc đường đi nước bước là nàng, không phải hắn. Hắn là kẻ mù đường đang được người ta vẽ cho tấm bản đồ đầu tiên của thế giới này.",
      "Trong kế hoạch còn có một phần nàng viết riêng ra một mảnh giấy nhỏ, gấp lại, dặn hắn chỉ mở khi nàng đã rời khỏi căn nhà này — dù là rời theo cách nào. Hắn nhận mà không hỏi. Về sau, khi mọi chuyện đã qua, hắn mới mở mảnh giấy ấy ra xem; nhưng đó là chuyện của một ngày khác. Còn trong đêm nay, điều quan trọng nhất là một cô gái mười tám tuổi, người mà cả một bộ máy đã dành mười mấy năm để biến thành một món đồ trong hồ sơ, vừa ngồi thẳng lưng và trình bày kế hoạch giành lại tên mình — rành mạch, bình tĩnh, và không xin phép một ai.",
      "Hắn đồng ý với kế hoạch, và nói rõ giới hạn của mình trong đúng hai câu: nếu đoàn kiểm tra động tay vào nàng, hoặc nếu thứ trong người nàng nhân lúc đối diện mà chiếm lấy miệng nàng để nói những lời không phải của nàng, thì kế hoạch dừng ngay tại đó, và phần còn lại thuộc về kiếm của hắn. Nàng nghe, gật đầu, và đáp lại bằng một sự tin cậy làm hắn phải im lặng: 'Tôi biết. Vì thế tôi mới dám đứng ra. Người ta chỉ dám bước tới khi biết sau lưng mình có người giữ cho mình khỏi ngã — chứ không phải có người bước thay mình.'",
      "Có một đoạn nàng phải dừng lại để giảng cho hắn nghe như giảng cho một đứa trẻ mới tới xứ này: đoàn kiểm tra không phải quan binh, họ không bắt người giữa phòng khách; vũ khí của họ là sổ sách — họ sẽ hỏi vòng, ghi chéo, đối chiếu lời người này với chữ người kia, và thứ họ sợ nhất không phải kiếm mà là một nhân chứng nói trơn tru quá mức cần thiết. Hắn nghe, gật đầu. Giấy tờ giết người không đổ máu — ở thế giới của hắn không có thứ vũ khí nào kỳ cục như vậy, và hắn thấy nó đáng xem hơn nhiều trận đánh ầm ĩ.",
      "Hắn nghe hết, không ngắt lời một câu. Trong vạn năm, hắn quen là người vạch kế hoạch cho kẻ khác tuân theo — hoặc không cần kế hoạch gì, vì sức mạnh của hắn tự nó là kế hoạch. Lần này, một người yếu hơn hắn vạn lần giao việc cho hắn, và việc được giao lại là… đứng yên. Hắn im lặng lâu đến mức nàng tưởng hắn không đồng ý. Thật ra hắn đang ghi nhớ từng chi tiết trong tờ sơ đồ — cả những chỗ nàng vẽ sai vì chưa từng được ra khỏi khu nhà này, hắn cũng không sửa tại chỗ, chỉ ghi nhớ để khi cần sẽ lặng lẽ bù vào.",
      "Cuối buổi, nàng gấp tờ sơ đồ lại, trao cho hắn giữ — vì trí nhớ của nàng, như cả hai đều biết, không còn là một nơi an toàn để cất đồ nữa. Rồi nàng dặn thêm một điều ngoài kế hoạch, nhỏ thôi, mà hắn nghe xong thì đứng dậy, ra cửa, và đứng ngoài hành lang một lúc lâu trước khi đi làm việc khác:",
      "Sau đó, Cao Minh trải tờ sơ đồ của nàng ra trên bàn phòng khách, ngồi xem lại từng nét. Căn nhà im lặng chung quanh hắn — không phải im lặng đầu hàng, mà là im lặng của một con thú đang nín hơi trước cú vồ lớn nhất. Ngoài biển, bão vẫn chưa tan, sóng quật vào bờ đá từng đợt như trống trận. Hắn gấp tờ giấy lại, cất vào ngực áo. Việc của hắn đêm nay lạ thật, và đơn giản đến mức hắn suýt bật cười: đứng yên, đúng chỗ nàng chỉ, và đừng để ai đẩy nàng lùi lại."
    ],
    "dialogue": [
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài, tôi biết ngài có thể đưa tôi ra khỏi nhà này ngay đêm nay — bế tôi lên, chặt hết mọi sợi dây, mặc kệ hậu quả tính sau. Nhưng tôi không muốn được cứu như một món đồ người ta khuân ra khỏi đám cháy. Tôi muốn tự bước ra, bằng chân của tôi, và trước khi đi, tôi muốn nhìn thẳng vào mặt những người đã xóa tên tôi mà nói cho họ nghe: tôi còn đây. Ngài giúp tôi làm được việc đó — chứ đừng làm thay tôi, thưa ngài."
      },
      {
        "speaker": "Cao Minh",
        "text": "Nghe rõ. Mai này ra sao, bổn tọa đứng ở vị trí nàng chỉ, kiếm ở yên trong vỏ. Trừ khi có kẻ dám động vào nàng trước mặt bổn tọa — điều đó, bổn tọa không hứa là mình nhịn được."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Còn một điều nữa, ngoài tờ giấy này. Nếu có ngày… tôi quên mất cả kế hoạch này, quên mất tôi đã từng muốn bước ra — ngài đừng vì thế mà nghĩ tôi đã đổi ý. Ngài cứ làm như lời tôi dặn hôm nay. Tôi của hôm nay xin gửi gắm cho ngài, để ngài giữ giùm tôi khỏi tôi của những ngày tệ hơn."
      }
    ],
    "choices": [
      {
        "id": "her_plan_first",
        "text": "Nhận kế hoạch của nàng làm kế hoạch chính — từ giờ mọi chuẩn bị đều xoay quanh ngày nàng tự bước ra đối diện đoàn kiểm tra.",
        "next": "lh_inspector_early",
        "effects": {
          "lanTrustDelta": 3
        },
        "route": {
          "id": "tu_quyet",
          "delta": 2
        }
      },
      {
        "id": "plan_plus_guard",
        "text": "Nhận kế hoạch của nàng, nhưng âm thầm chuẩn bị thêm một đường rút lui bằng vũ lực — phòng khi đoàn kiểm tra không tới để nói chuyện.",
        "next": "lh_inspector_early",
        "effects": {
          "lanTrustDelta": 2,
          "cluesHuaGiaDelta": 1
        },
        "route": {
          "id": "bao_ho",
          "delta": 1
        }
      }
    ]
  },
  "lh_inspector_early": {
    "id": "lh_inspector_early",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Khách tới trong bão",
    "backgroundId": "long-hai-dawn-gate",
    "location": "Cổng biệt thự Long Hải, đêm rằm bão lớn",
    "narration": [
      "Đoàn kiểm tra tới đúng đêm rằm như thư đã hẹn — chỉ khác ở một điều: thay vì chờ tới giờ Ngọ hôm sau mới bắt đầu làm việc, họ vào cổng ngay trong đêm, giữa cơn bão. Ba cỗ xe ngựa phủ bạt kín dừng trước cổng biệt thự, đèn bão trong tay những người đánh xe cháy lập lòe mà không tắt, dù gió giật đến nghiêng cả người. Nhà họ Hứa không bao giờ để khách của Giới Phòng phải chờ ngoài mưa: cổng xích vừa tháo, cả đoàn đã được đón vào như nước chảy vào một cái phễu đã chờ sẵn.",
      "Cao Minh đứng trên thềm nhà chính nhìn xuống. Đoàn người không đông — chừng một tá — nhưng cách họ di chuyển khiến hắn phải chú ý: họ không đi như khách, cũng không đi như quân lính. Họ đi như những người đã thuộc lòng sơ đồ của tòa nhà này, chia nhau ra các hướng mà không cần một lời phân công. Hai người ở lại cổng. Hai người đi về phía dãy nhà phụ. Số còn lại theo quản gia vào phòng khách, áo mưa cởi ra gấp gọn, và người đi đầu cởi mũ, để lộ một gương mặt mà quản gia — lão già đã diễn cả trăm vai trong căn nhà này — cũng phải cúi đầu thấp hơn thường lệ một bậc.",
      "Hắn không cần ai giới thiệu cũng biết đó là người của Giới Phòng — cái phòng chuyên giữ gia phả, giấy tờ và tên tuổi của nhà họ Hứa. Họ không mang theo binh khí gì đáng kể. Họ mang theo những cái cặp da khóa đồng, và trong những cái cặp ấy, theo thần niệm của Cao Minh lướt qua, là giấy, là mực, là con dấu — thứ vũ khí mà nhà họ Hứa dùng để giết một con người mà không cần làm đổ một giọt máu: chỉ cần gạch một nét, và Hứa Tiểu Lan chưa từng tồn tại.",
      "Có một chi tiết trong đoàn người ấy khiến Cao Minh chú ý hơn cả: họ không hề tỏ ra ngạc nhiên trước bất cứ thứ gì trong tòa nhà. Đèn tắt sớm — họ không hỏi. Gia nhân đứng thành hàng hai bên lối đi, đồng loạt cúi chào — họ không nhìn. Một tòa biệt thự mà mọi thứ đều hoàn hảo như một vở diễn tập dượt kỹ, đối với người thường sẽ là dấu hiệu đáng ngờ nhất; còn đối với những người này, đó là cảnh tượng họ đã quen thuộc đến mức nhàm chán. Hắn hiểu: Giới Phòng không đến để khám phá xem căn nhà này có điều gì lạ. Họ đến để kiểm tra xem cái điều lạ ấy còn nằm trong khuôn phép hay không — như người ta kiểm tra một cái kho, chứ không phải điều tra một tội ác.",
      "Người cầm đầu đoàn — về sau hắn biết tên ông ta chỉ qua một chữ ký: một người đàn ông trạc ngũ tuần, mặt mũi hiền hậu, nói năng nhỏ nhẹ, tay lúc nào cũng cầm một cây quạt xếp dù trời đang mưa bão — đi qua sân mà bước chân không hề ngập ngừng trước các vũng nước, như đã đi con đường này nhiều lần trong bóng tối. Khi ngang qua gian bếp mới cháy rụi một nửa đêm nay, ông ta dừng lại đúng hai hơi thở, nhìn đống tro, rồi đi tiếp, không hỏi một câu. Trong sổ tay của Cao Minh về con người này, dòng đầu tiên được ghi như sau: kẻ nguy hiểm nhất trong nhà họ Hứa không phải thứ đang điều khiển gia nhân — mà là người đàn ông coi tất cả những chuyện này là chuyện thường ngày.",
      "Trong lúc trà được dọn lên phòng khách, ở các dãy nhà phụ, hai người của đoàn đã lặng lẽ làm việc của họ: họ không hỏi han ai, họ chỉ đếm. Đếm số buồng, số giường, số bát đũa phơi trên sào, số đôi dép trước các ngưỡng cửa. Cao Minh theo dõi bằng thần niệm: họ đếm để biết trong nhà này có bao nhiêu con người — vì với Giới Phòng, gia nhân cũng là một thứ tài sản phải khớp với sổ sách. Và hắn tự hỏi, trong những con số họ đếm đêm nay, có con số nào dành cho một cô gái mà trên giấy tờ đã không còn tồn tại hay không.",
      "Phản ứng của căn nhà mới là thứ hắn để mắt nhất. Suốt từ lúc xe ngựa dừng trước cổng, mạng lưới bỗng im bặt — không một đợt lệnh nào, không một sợi nối nào rung lên. Đám gia nhân đứng thẳng, mắt trong, tay chân nghe lời như những người làm công bình thường nhất trên đời. Căn nhà đã thu hết móng vuốt của nó vào, ngay trước mặt những người duy nhất có quyền hỏi về những móng vuốt ấy. Nó diễn vai một gia đình — và diễn giỏi đến mức, nếu không có những ngày vừa qua, chính hắn cũng khó buộc tội nó bằng một bằng chứng cầm được trên tay.",
      "Ở gian phòng trong cùng, Tiểu Lan đã nghe tiếng xe. Bà Năm Liên kể lại sau đó rằng nàng ngồi dậy, tự chải lại tóc, thay chiếc áo dài sạch nhất, và ngồi chờ — bình thản như một người chờ khách tới thăm bệnh thật sự. Chỉ có một điều khác thường: nàng dặn bà, nếu có ai hỏi, cứ nói cô chủ mệt, ngủ rồi. Còn chính nàng thì nói với bà một câu làm bà già nhớ mãi:",
      "Đoàn kiểm tra được mời dùng trà trong phòng khách. Người cầm đầu nâng chén, khen trà ngon, hỏi quản gia mấy câu về sức khỏe của mọi người trong nhà bằng giọng thân tình của một người trong họ lâu ngày mới ghé. Rồi ông ta đặt chén xuống, mở cặp da, và nói câu đầu tiên thuộc về công việc — câu mà cả căn nhà, qua hàng chục đôi tai, cùng nín thở nghe:",
      "Hắn vào phòng khách không cần ai mời. Mấy cây bút trong tay đám thư ký của đoàn khựng lại cùng một lúc. Một người trẻ tuổi nhất lùi nửa bước, lưng chạm vào khung cửa. Hai thanh kiếm lơ lửng sau vai hắn — thứ mà người trong nhà này đã thôi không dám nhìn — đối với những con người của giấy tờ và con dấu là một cảnh không có trong bất cứ sổ sách nào: họ nhìn, họ nuốt khan, và họ quay lại với cặp da của mình nhanh hơn cần thiết. Người cầm đầu lấy lại vẻ mặt trước nhất; cây quạt xếp trong tay ông ta chỉ ngừng đúng một nhịp, rồi phe phẩy tiếp, đều như chưa từng ngừng.",
      "Ngoài sân, mưa vẫn quật. Trong phòng khách, đèn cháy đều. Và ở gian trong cùng, một cô gái mười tám tuổi ngồi thẳng lưng trong bóng tối, chờ tới lượt mình bị người ta bàn về như một hồ sơ. Cao Minh đứng dậy khỏi thềm. Đêm nay, theo đúng kế hoạch của nàng, hắn sẽ không ra tay trước. Nhưng hắn sẽ có mặt trong căn phòng đó — vì có những lời nói dối, chỉ cần một người biết sự thật đứng nghe, là đã khó nói ra hơn rất nhiều."
    ],
    "dialogue": [
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Bà đừng lo. Họ tới sớm hay muộn, tôi cũng phải gặp. Chỉ là… bà nhớ lời tôi: lát nữa dù có nghe tôi nói gì lạ, bà cũng đừng chạy vào. Hôm nay, để tôi tự nói phần của tôi."
      },
      {
        "speaker": "Người của Giới Phòng",
        "text": "Nghe nói trong nhà đang có khách lạ lưu lại đã mấy ngày. Nhà họ Hứa xưa nay trọng lễ — khách của nhà, chúng tôi cũng xin được diện kiến, để còn ghi vào sổ cho phải phép."
      },
      {
        "speaker": "Quản gia",
        "text": "Dạ, thưa ông, vị khách ấy đang ở gian ngoài… để con vào mời ông ấy ra hầu chuyện các ông…"
      },
      {
        "speaker": "Cao Minh",
        "text": "Không cần mời. Bổn tọa ngồi đây uống trà. Các ông cứ giở sổ ra ghi — ghi cho đúng vào: Cao Minh. Đêm nay bổn tọa xem các ông ghi."
      }
    ],
    "choices": [
      {
        "id": "stay_in_room",
        "text": "Ở lại trong phòng khách, ngồi vào bàn trà như một bên liên quan — buộc đoàn kiểm tra phải nói mọi chuyện trước mặt mình.",
        "next": "lh_ambush_well",
        "effects": {
          "lanMaterInfluenceDelta": 2,
          "cluesHuaGiaDelta": 1
        }
      },
      {
        "id": "watch_shadows",
        "text": "Nhường ghế ngoài cho quản gia đối đáp, còn mình lùi vào bóng tối hành lang — nghe cho hết những gì họ chỉ nói khi tưởng không có mặt mình.",
        "next": "lh_ambush_well",
        "effects": {
          "cluesHuaGiaDelta": 2
        }
      }
    ]
  },
  "lh_ambush_well": {
    "id": "lh_ambush_well",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Tiếng động ở giếng sau",
    "backgroundId": "long-hai-exterior",
    "location": "Giếng sau và dãy nhà phụ, biệt thự Long Hải",
    "companions": [
      "npc_porter"
    ],
    "narration": [
      "Cuộc nói chuyện ở phòng khách mới được một tuần trà thì phía sau nhà có tiếng động. Không lớn — một tiếng thùng gỗ rơi, một tiếng kêu khẽ bị bịt lại ngay, rồi tiếng chân chạy trên nền đất ướt. Hai người của đoàn kiểm tra đứng bật dậy. Người cầm đầu không hề biến sắc; ông ta chỉ gật đầu rất nhẹ với quản gia, như thể tiếng động sau nhà là một tiết mục đã nằm trong chương trình của đêm nay. Cao Minh hiểu ngay: trong lúc phòng khách giữ chân hắn bằng trà và giấy tờ, một cánh tay khác của đoàn — hoặc của chính căn nhà — đang làm việc ở phía sau.",
      "Hắn ra tới giếng sau thì thấy cảnh này: ba người lạ mặt — không mặc áo của đoàn kiểm tra, mà mặc đồ gia nhân của biệt thự, lẫn vào đám người làm như cá lẫn vào đàn — đang lôi một người về phía dãy nhà phụ. Người bị lôi là phu khuân Thới, miệng bị bịt bằng một bàn tay, hai chân quẫy đạp yếu ớt trên bùn. Thới là người đã run tay chào hắn ở cổng ngày đầu tiên, là người biết nhiều chuyện nhỏ trong nhà này hơn bất cứ ai — và rõ ràng, có kẻ muốn anh ta im lặng trước khi đoàn kiểm tra kịp hỏi tới những chuyện nhỏ ấy.",
      "Cao Minh không rút kiếm. Hắn chỉ bước ra khỏi bóng mái hiên, đứng vào giữa đường đất ướt mưa, và lên tiếng — tiếng nói không lớn, nhưng trong đêm bão, nó đến được tai của cả ba người lạ kia như thể hắn đang đứng ngay sát bên họ:",
      "Cái giếng sau là nơi cổ nhất của cả khu đất — có từ trước khi Hứa phủ dựng biệt thự, miệng giếng xây bằng đá ong đã mòn nhẵn, và dân quanh vùng vẫn truyền nhau rằng nước giếng này 'nặng', uống vào hay nằm mơ thấy người xưa. Đối với Cao Minh, giếng còn là một thứ khác: một trong những điểm neo hắn đã tìm thấy, nơi các sợi nối chạy xuống lòng đất sâu hơn mọi nơi khác trong nhà. Đánh nhau ngay trên miệng một điểm neo là việc phải tính: một sợi nối bị giật đứt bất cẩn ở đây có thể quật ngược vào bất cứ ai đang nối với nó trong cả dãy nhà phụ, kể cả những người đang ngủ. Vì vậy hắn chọn cách chậm nhất: không cắt, không chém, chỉ giật cương — cho ba kẻ lạ mặt tự hiểu rằng đêm nay, ở cái giếng này, có một kẻ còn nắm cương chắc hơn cả chủ của chúng.",
      "Thới, sau khi thoát ra, không chạy vào nhà như Cao Minh tưởng. Anh ta chạy tới bên giếng, ôm lấy cái gàu nước cũ, và đứng đó run rẩy mà không chịu vào trong — vì theo lời anh ta lắp bắp kể lại, chúng đã hỏi anh ta không phải bằng lời dọa nạt thường tình: chúng hỏi anh ta đã nói gì với 'ông khách' ở cổng hôm đầu tiên, hỏi đêm cô chủ mộng du có ai đi theo sau, và hỏi — câu này làm mặt Thới trắng bệch — hỏi rằng bà Năm Liên dạo này có hay nói chuyện một mình trước bàn thờ vọng hay không. Tức là đoàn người này không lục soát căn nhà một cách mù quáng. Họ có một danh sách. Và trong danh sách ấy, những người hèn mọn nhất — người gánh nước, bà lão giữ buồng — lại nằm ở những dòng đầu tiên.",
      "Khi Cao Minh quay vào nhà chính, ngang qua dãy hành lang tối, hắn thoáng thấy một bóng người đứng ở cuối hành lang — quản gia. Ông lão đứng đó, hai tay buông thõng, nhìn hắn đi qua mà không nói một lời nào, mặt không biểu cảm trong bóng tối. Không ai biết ông ta đã đứng đó bao lâu, đã thấy những gì ở giếng sau, và cái ông ta vừa thấy sẽ được báo lại cho ai — cho người cầm quạt ở phòng khách, hay cho thứ đang ngồi sau đôi mắt của chính ông ta. Cao Minh gật đầu chào ông ta như chào một người quen. Ông lão, sau một lúc rất lâu, cũng gật đầu lại — chậm chạp, như một người đang gật đầu dưới nước sâu.",
      "Ba người kia khựng lại đúng một nhịp — đủ để Thới vùng ra, chạy về phía sau lưng Cao Minh, ôm lấy cột hiên mà thở như người vừa ngoi lên khỏi mặt nước. Nhưng chúng không lui. Một đứa rút trong tay áo ra một vật ngắn và đen — không phải dao, mà là một ống trúc bọc đồng, thứ dụng cụ lạ mà thần niệm của Cao Minh chạm vào đã thấy lạnh buốt: một thứ để phong kín tiếng kêu và ý chí của một người, hàng của Giới Phòng dành cho những việc không được để lại tiếng động. Chúng định, ngay trước mặt hắn, bịt miệng nhân chứng duy nhất vừa thoát ra.",
      "Việc xảy ra tiếp theo chỉ kéo dài ba hơi thở. Cao Minh không chạm vào một người nào trong ba người đó. Hắn chạm vào mặt đất dưới chân chúng — không, chính xác hơn, hắn chạm vào những sợi nối đang chạy dưới nền đất ướt, nối ba thân thể lạ mặt kia với điểm neo ở gần giếng mà hắn đã đánh dấu từ mấy ngày trước. Hắn không cắt. Hắn chỉ… nắm lấy những sợi nối ấy và giật nhẹ, như người giật cương một con ngựa đang hoảng. Ba kẻ lạ mặt đồng loạt khuỵu xuống bùn, ôm đầu — không bị thương một sợi tóc, nhưng mệnh lệnh trong đầu chúng vừa bị ai đó hét thẳng vào mặt bằng một thứ tiếng không phải tiếng người.",
      "Chúng bỏ chạy về phía cổng sau, bỏ lại ống trúc bọc đồng rơi trên bùn. Thới nhặt nó lên bằng hai ngón tay, như nhặt một con rắn chết, đưa cho Cao Minh. Tay anh ta vẫn run — nhưng lần này, trong cái run ấy có một điều mới: anh ta đã chọn chạy về phía sau lưng vị khách lạ, chứ không chạy về phía căn nhà đã nuôi anh ta mười mấy năm. Trong một đêm mà mọi người đều phải chọn một phía để đứng, người phu khuân gánh nước đã chọn xong phía của mình.",
      "Cao Minh cất ống trúc vào tay áo. Đây là bằng chứng đầu tiên hắn cầm được trên tay — bằng chứng bằng đồng rằng có người muốn bịt miệng nhân chứng ngay trong đêm kiểm tra, dưới mái nhà của chính họ. Hắn quay lại nhìn tòa nhà chính sáng đèn: trong phòng khách kia, trà vẫn đang được rót, giấy tờ vẫn đang được giở. Đoàn kiểm tra sẽ còn ngồi lâu. Việc ở giếng sau này chỉ là ngón tay đầu tiên của một bàn tay lớn hơn đang lần vào căn nhà — trước khi trời sáng, bàn tay ấy sẽ còn thọc sâu hơn nữa, tới tận gian phòng trong cùng."
    ],
    "dialogue": [
      {
        "speaker": "Cao Minh",
        "text": "Ba ngươi. Đêm bão thế này mà còn bày trò bịt miệng người ta trước mặt bổn tọa — gan cũng to. Thả hắn ra. Muốn hỏi gì hắn, hỏi bổn tọa trước."
      },
      {
        "speaker": "Người phu Thới",
        "text": "Thưa ông… chúng nó hỏi con về cái đêm cô chủ mộng du, hỏi con thấy ai đi theo sau cô… con chưa nói gì hết, thưa ông… con sợ quá, con chỉ biết chạy về phía ông…"
      },
      {
        "speaker": "Cao Minh",
        "text": "Chạy đúng hướng rồi. Sợ thì cứ chạy hướng đó — bổn tọa hay đứng ở đó."
      }
    ],
    "choices": [
      {
        "id": "keep_thoi",
        "text": "Giữ Thới lại bên mình suốt đêm nay, và giữ cả ống trúc — nhân chứng và vật chứng đều không rời khỏi mắt mình.",
        "next": "lh_hide_lan",
        "effects": {
          "civiliansSavedDelta": 1,
          "cluesHuaGiaDelta": 2
        }
      },
      {
        "id": "send_thoi_lan",
        "text": "Cho Thới lẻn ngay vào gian trong cùng, kể hết cho Tiểu Lan và bà Năm Liên nghe — nàng cần biết đoàn kiểm tra không chỉ mang theo giấy tờ.",
        "next": "lh_hide_lan",
        "effects": {
          "lanTrustDelta": 2,
          "cluesHuaGiaDelta": 1
        }
      }
    ]
  },
  "lh_hide_lan": {
    "id": "lh_hide_lan",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Sau vách giả",
    "backgroundId": "long-hai-corridor",
    "location": "Kho thuốc, biệt thự Long Hải",
    "companions": [
      "le_thu_nguyet"
    ],
    "narration": [
      "Tin tức đến từ một cô hầu bếp chạy hớt hải trong mưa: đoàn kiểm tra xin 'thăm bệnh' cô chủ ngay trong đêm. Không phải ngày mai, không phải sau khi trà nước xong — ngay bây giờ, với lý do trời sắp sáng, đường về Chợ Lớn xa, họ muốn tận mắt thấy người bệnh để còn ghi sổ cho trọn. Quản gia không cản được. Giấy tờ đã dọn sẵn. Chỉ còn thiếu một thứ để đêm nay thành một cuộc kiểm tra hoàn hảo: một cô gái bệnh phong nằm mê man trên giường, được nhìn, được ghi, được đóng dấu — mà không cần nói một lời nào.",
      "Kế hoạch của Tiểu Lan là tự mình bước ra đối diện. Nhưng kế hoạch ấy được dựng cho một đoàn kiểm tra tới ban ngày, ngồi đàng hoàng ở phòng khách. Còn đoàn người tới trong đêm bão, mang theo ống trúc bịt miệng nhân chứng, thì không tới để nghe nàng nói. Cao Minh vào gian phòng trong cùng, nói rõ mọi chuyện trong đúng mười hơi thở — theo cái lệ hắn vẫn giữ với nàng: nói hết, rồi để nàng tự quyết. Nàng nghe xong, im lặng đúng một lúc, rồi gật đầu:",
      "Kho thuốc có một vách giả — chuyện này chỉ ba người trong nhà biết: bà Năm Liên, Thu Nguyệt, và giờ thêm hai người nữa. Sau lớp vách gỗ lim là một khoảng hẹp vừa đủ cho một người ngồi, nơi đời trước của Hứa phủ từng cất những thứ không muốn ai thấy. Thu Nguyệt đã chờ sẵn ở đó từ lúc nào, tay cầm đèn lồng che kín, miệng dặn dò liên hồi bằng cái giọng vừa run vừa nhanh của một cô gái đang làm việc lớn nhất trong đời mình:",
      "Khoảng hẹp sau vách giả không phải nơi dành cho người sống lâu. Nó vừa đủ cho một người ngồi co, không đứng thẳng được, không duỗi chân được, và tối đến mức sau khi tấm vách khép lại, Tiểu Lan không còn nhìn thấy cả hai bàn tay của chính mình. Bà Năm Liên đã lót sẵn dưới sàn một tấm chiếu mỏng và một cái gối nhỏ — những chuẩn bị của một người đã giấu người khác, hoặc đã từng nghĩ đến việc phải giấu người, từ rất lâu trước đêm nay. Thu Nguyệt còn nhét vào tay nàng một chai nước nhỏ và nói câu dặn cuối cùng trước khi vách khép: 'Cô mà khát thì uống từng ngụm một, đừng uống hết. Em biết tính cô, cô hay nhịn cho người khác lắm — lần này cô đừng nhịn.'",
      "Trong bóng tối ấy, thời gian trôi theo một cách khác. Tiểu Lan về sau kể rằng nàng nghe được mọi thứ rõ hơn cả khi ngồi trong phòng mình: tiếng giấy lật, tiếng chén trà đặt xuống, tiếng người cầm quạt hỏi về liều thuốc ngủ của 'người bệnh' bằng một giọng quan tâm đúng mực — và câu trả lời trơn tru của quản gia. Nàng nghe người ta bàn về nàng như bàn về một món đồ trong kho: còn hay mất, hư hay lành, có cần 'thay mới' hay không. Nhưng lần này, nàng nghe chúng từ một chỗ mà nàng tự chọn để ngồi, với một người đang đứng gác cho nàng cách đó một bức tường — và điều đó làm mọi lời tàn nhẫn kia nhẹ đi một nửa.",
      "Có một lúc, tiếng bước chân trong phòng nàng đi về phía gian kho — hai người, dừng lại ngay ngoài cửa kho thuốc, nói với nhau mấy câu về mùi cháy còn vương trong không khí. Thu Nguyệt, đang đứng sắp xếp lại các hũ thuốc như một cô hầu bình thường, trả lời họ bằng giọng lễ phép và chán chường của một đứa ở: cháy bếp thì kho nào mà không ám mùi, các ông cứ vào xem, chỉ tổ ho tới mai. Hai người kia cười, rồi bỏ đi. Sau vách gỗ, Tiểu Lan đưa tay lên miệng, và nhận ra mình đang cười theo — một cái cười không thành tiếng, của một người vừa phát hiện ra rằng những người quanh mình, những người bé nhỏ nhất, hóa ra đều đang đánh trận của riêng họ, giỏi hơn nàng tưởng rất nhiều.",
      "Tiểu Lan chui vào sau vách, ngồi xuống trên tấm chiếu nhỏ đã trải sẵn, ôm lấy đầu gối. Trước khi tấm vách khép lại, nàng với tay ra, nắm lấy tay áo Cao Minh — một cái nắm rất nhẹ, rất nhanh, của một người không muốn ai thấy mình đang sợ. Rồi nàng buông ra, tự tay kéo tấm vách vào từ bên trong. Trong bóng tối của gian kho, chỉ còn tiếng mưa trên mái và tiếng thở cố nén của mấy con người đang đánh cược cả mạng mình vào một lớp gỗ dày hai phân.",
      "Trên giường của nàng, bà Năm Liên đã sắp xếp xong một 'cô chủ đang ngủ mê': gối dài bọc trong chăn, tóc giả xõa trên gối là tóc của chính nàng cắt từ lần bệnh nặng năm ngoái — bà già giữ lại, không ngờ có ngày dùng đến cách này. Căn phòng được trả lại đúng dáng vẻ của một phòng bệnh: mùi thuốc, ánh đèn leo lét, hơi thở đều đều của một bà lão ngồi canh bên giường, chắp tay như đang cầu nguyện.",
      "Bước chân của đoàn kiểm tra dừng lại ngoài hành lang. Cao Minh đứng ở ngưỡng cửa gian kho thuốc, cách phòng nàng đúng một bức tường, nghe tiếng quản gia giới thiệu, tiếng người cầm đầu của Giới Phòng hỏi han bệnh tình bằng giọng nhỏ nhẹ, tiếng giấy sột soạt. Hắn không nhìn thấy gì. Hắn chỉ nghe — và đếm từng hơi thở của chính mình, giữ cho hai thanh kiếm sau lưng nằm yên trong vỏ, trong khi ở phía bên kia của hai phân gỗ, người con gái ấy đang ngồi co ro trong bóng tối, tự bịt miệng mình bằng hai bàn tay để một cơn ho cũng không được lọt ra ngoài.",
      "Rồi tiếng bước chân trong phòng nàng dừng lại lâu hơn bình thường ở đầu giường. Một giọng nói — giọng của người cầm đầu — vang lên, chậm rãi, như nói với bà lão canh giường, mà cũng như nói vào khoảng không cho bất cứ ai đang nghe lén cùng nghe:"
    ],
    "dialogue": [
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài, tôi đổi ý — không phải vì tôi sợ họ, mà vì tôi vừa hiểu ra: đối diện cũng phải chọn lúc. Đêm nay họ tới không phải để nghe, mà để bịt miệng. Tôi sẽ không trao cho họ cái cớ ấy. Ngài giấu tôi đi — và mai này, khi tôi bước ra, phải là lúc tôi chọn, không phải lúc họ ép."
      },
      {
        "speaker": "Lê Thu Nguyệt",
        "text": "Dạ, thưa ông, ông đi lối này, coi chừng cái thùng cam thảo, nó kêu đó. Cô vô trong rồi thì ngồi sát vách trái, chỗ đó nghe được hết ngoài này mà ngoài này không nghe được trong. Bà Năm dặn em ở đây chờ tới khi nào có tiếng gõ hai tiếng vào vách mới được mở — ông nhớ giùm em, hai tiếng, không phải một."
      },
      {
        "speaker": "Người của Giới Phòng",
        "text": "Cô chủ ngủ say quá nhỉ. Bệnh phong tới năm thứ mấy rồi mà người bệnh ngủ… yên đến thế. Người làm thuốc trong nhà này, khéo tay thật."
      }
    ],
    "choices": [
      {
        "id": "stay_wall",
        "text": "Đứng chết tại ngưỡng cửa kho thuốc suốt thời gian đoàn kiểm tra ở trong phòng nàng — không rời nửa bước, dù nghe điều gì.",
        "next": "lh_first_sweep",
        "effects": {
          "lanTrustDelta": 2
        }
      },
      {
        "id": "shadow_inspectors",
        "text": "Lẻn theo sau đoàn kiểm tra ở khoảng cách một bức tường, ghi nhớ từng câu hỏi họ đặt ra về nàng — họ hỏi gì, là họ đang sợ điều đó.",
        "next": "lh_first_sweep",
        "effects": {
          "cluesHuaGiaDelta": 2,
          "lanMaterInfluenceDelta": 2
        }
      }
    ]
  },
  "lh_first_sweep": {
    "id": "lh_first_sweep",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Đợt lục soát đầu tiên",
    "backgroundId": "long-hai-saloon",
    "location": "Biệt thự Long Hải, trước khi trời sáng",
    "companions": [
      "npc_porter"
    ],
    "narration": [
      "Sau 'thăm bệnh', đoàn kiểm tra xin phép xem qua nhà kho và các dãy phụ — lý do ghi vào sổ là đối chiếu thuốc men với bệnh án, một lý do hoàn toàn hợp lệ và hoàn toàn là cái cớ. Đợt lục soát đầu tiên của đêm bắt đầu: đèn lồng đi từng dãy, cửa mở từng gian, giấy tờ trong tay áo họ đối chiếu với từng thùng, từng rương. Căn nhà im lặng đến mức nghe được tiếng mưa nhỏ giọt ngoài hiên — và tiếng tim của mấy chục con người đang cùng nín thở ở những chỗ khác nhau.",
      "Họ đến kho thuốc sau cùng. Gian kho nồng mùi cam thảo và khói của đám cháy đêm nay còn chưa tan hết. Người dẫn đầu đợt lục soát đi dọc các kệ thuốc, tay lướt qua từng hộp, từng lọ — rồi dừng lại trước vách gỗ lim ở cuối gian. Ông ta gõ nhẹ lên vách. Một tiếng. Âm thanh đục và đặc của gỗ xịn trả lời lại. Nhưng Cao Minh, đứng ở cửa kho với tư cách khách được mời chứng kiến, nhìn thấy một điều mà có lẽ không ai khác trong gian kho thấy: bàn tay của phu khuân Thới — người được gọi vào để phụ khiêng dỡ đồ cho đoàn kiểm tra — đang lặng lẽ, rất lặng lẽ, gạt một cái thùng rỗng tới sát chân vách, che đi đúng cái khe hở nhỏ nhất ở gờ gỗ.",
      "Thới không nhìn ai. Mặt anh ta tái mét, mồ hôi chảy thành dòng trong đêm lạnh. Tay anh ta bị căn nhà giữ — Cao Minh thấy rõ sợi nối đang căng ra sau gáy người phu, vì kho thuốc nằm trong tầm của điểm neo dãy sau, và căn nhà không đời nào bỏ qua cơ hội dùng một bàn tay sẵn có để chỉ ra chỗ nó muốn chỉ. Nhưng đôi chân và cái miệng của Thới thì vẫn là của anh ta. Và anh ta dùng cái miệng ấy, đúng vào lúc người dẫn đầu đợt lục soát quay lại, để nói một câu to và rõ — câu nói ngu ngơ nhất, quê mùa nhất, và can đảm nhất của đêm nay:",
      "Bổn tọa có thể san phẳng gian kho này bằng một hơi thở, và hắn biết điều đó rõ như đoàn kiểm tra không hề biết. Nhưng sau hai phân gỗ kia là một cô gái đang tự bịt miệng mình — ở khoảng cách ấy, sức mạnh của hắn vô dụng như một cơn bão trong gian phòng chật: thổi bay được cả đoàn người, và thổi bay luôn cả người hắn chưa muốn thổi bay. Cho nên hắn đứng yên ở cửa, hai thanh kiếm chưa rời vỏ, và xem một người phu gánh nước làm thay hắn việc mà kiếm của hắn không làm nổi: cứu một mạng người bằng một cái thùng rỗng và một câu nói dối về bụi. Hắn ghi nhớ việc ấy như ghi nhớ một điều lạ — ở thế giới của hắn, kiến không bao giờ che cho kiến. Ở đây thì có.",
      "Người dẫn đầu nhìn Thới một lúc lâu. Nhìn cái thùng rỗng. Nhìn vách gỗ. Rồi ông ta nhìn sang vị khách đang đứng ở cửa kho — vị khách mà dưới bến ghe người ta đã bắt đầu gọi là thầy pháp, mà hai thanh kiếm không rời người của hắn thì không nằm trong bất cứ mục nào của biên bản. Có lẽ ông ta cân nhắc cả hai thứ: một người phu vừa 'hảo tâm' nhắc chuyện bụi ngay sau khi tự tay che đi chỗ bụi nhất, và một người khách mà Giới Phòng chưa biết phải ghi vào đâu. Ông ta gật đầu, ghi một dòng vào sổ, và ra lệnh chuyển sang dãy nhà bên. Vách giả đứng yên. Sau hai phân gỗ, một cô gái ngồi ôm đầu gối, hai bàn tay tự bịt miệng mình, nước mắt chảy xuống vì không dám khóc thành tiếng — khóc vì mừng, và vì vừa nghe, qua lớp gỗ, một người gánh nước hèn mọn nhất nhà đã lấy thân mình che cho cô chủ của anh ta.",
      "Trời sáng dần trên mái ngói ướt. Ở phía đông, mây bão rách ra một vệt xám nhạt. Trong gian phòng trong cùng, tấm vách giả được gõ hai tiếng — không phải một — và từ từ mở ra. Tiểu Lan bước ra, chân tê cứng, tóc rối, áo nhăn — và đôi mắt sáng hơn bất cứ lúc nào Cao Minh từng thấy. Nàng nhìn quanh gian kho, nhìn cái thùng rỗng còn kê ở chân vách, nhìn vệt mồ hôi chưa khô trên trán người phu khuân đang ngủ gục bên hiên vì kiệt sức. Rồi nàng làm một việc mà không ai trong gian kho ấy quên được: nàng cúi đầu chào Thới — cúi đầu thật thấp, theo đúng cái lễ mà một cô chủ không bao giờ dùng với người làm — và gọi anh ta bằng hai tiếng mà ở đất Nam Kỳ này, người ta chỉ dành cho người mình mang ơn: 'Anh Thới. Tôi nhớ ơn anh.'",
      "Đợt lục soát kết thúc khi trời gần sáng. Đoàn kiểm tra rút về phòng khách, khép cửa, nói chuyện riêng với nhau rất lâu sau cánh cửa đóng kín — và lần này, không qua một sợi lệnh nào, căn nhà cũng nín thở theo. Cao Minh tiễn Thới ra tới hiên kho. Người phu khuân ngồi bệt xuống bậc thềm, hai tay ôm đầu gối, cười mà nước mắt chảy ròng ròng — cái cười của người vừa làm xong việc đáng sợ nhất đời mình và phát hiện ra mình vẫn còn sống, vẫn còn là mình.",
      "Nhưng cả hai người đều hiểu: đợt một qua được là nhờ một cái thùng rỗng và một câu nói quê mùa. Đoàn kiểm tra không ngốc — người dẫn đầu đã ghi vào sổ một dòng gì đó khi rời kho thuốc, và ánh mắt ông ta lúc quay đi không phải ánh mắt của người đã hết nghi ngờ. Trời sắp sáng. Mưa sắp tạnh. Và trong phòng khách, một cuộc nói chuyện khác sắp bắt đầu — cuộc nói chuyện mà ở đó, giấy tờ, con dấu và những cái tên sẽ được đặt lên bàn, và Tiểu Lan sẽ phải bước ra khỏi sau vách gỗ bằng chính đôi chân của mình, đúng như kế hoạch nàng đã vạch, vào lúc nàng đã chọn."
    ],
    "dialogue": [
      {
        "speaker": "Người phu Thới",
        "text": "Dạ, thưa ông, cái vách đó ông đừng có mở, bụi nó bay mù lên, ho cả đêm đó ông. Hồi trước con dọn kho, con mở thử một lần, về nhà con ho ba ngày. Cái thùng này để con kê lại cho kín, kẻo gió nó lùa…"
      },
      {
        "speaker": "Cao Minh",
        "text": "Thới. Ngồi xuống. Việc của ngươi đêm nay xong rồi — tay run thế kia, kê thêm được cái thùng nào nữa mà kê. Bụi, ừ. Bụi nhiều thật."
      },
      {
        "speaker": "Người phu Thới",
        "text": "Thưa ông… con sợ muốn chết. Tay con nó cứ chực chỉ vào cái vách, con phải lấy chuyện bụi ra con nói lảng đi, miệng con run muốn rớt răng… mà con làm được rồi, phải không ông? Con làm được thiệt rồi…"
      }
    ],
    "choices": [
      {
        "id": "honor_thoi",
        "text": "Trước mặt những gia nhân đang có mặt, gọi Thới bằng tên đầy đủ và cảm ơn anh ta như một người ngang hàng — để cả nhà cùng nghe thấy lòng can đảm có tên gọi là gì.",
        "next": "lh_audit_table",
        "effects": {
          "civiliansSavedDelta": 1
        }
      },
      {
        "id": "prepare_audit",
        "text": "Không lãng phí một khắc: về phòng khách trước, sắp lại toàn bộ bằng chứng — ống trúc, rương thuốc, danh sách tên người — cho cuộc đối diện sắp tới.",
        "next": "lh_audit_table",
        "effects": {
          "cluesHuaGiaDelta": 2
        }
      }
    ]
  },
  "lh_audit_table": {
    "id": "lh_audit_table",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Bàn kiểm tra",
    "backgroundId": "long-hai-saloon",
    "location": "Phòng khách biệt thự Hứa Gia, Long Hải",
    "companions": [
      "pham_dinh_nghiem",
      "steward"
    ],
    "narration": [
      "Sau đợt lục soát đầu tiên, phòng khách của biệt thự bị trưng dụng thành một văn phòng. Chiếc bàn dài giữa phòng — nơi ban tối còn bày khay trà tiếp khách — nay chất đầy giấy tờ: từng xấp hồ sơ buộc dây gai, từng cuốn sổ gáy bọc vải xanh, con dấu gỗ của Giới Phòng đặt trên một miếng lót đỏ, và bên cạnh nó, một trát lệnh còn nguyên triện son của Hứa Bổn Hoả, người chủ nhà mà Cao Minh chưa từng gặp mặt, chỉ mới thấy quyền lực của ông ta qua những tờ giấy đi trước ông ta khắp nơi.",
      "Người chủ trì buổi kiểm tra là phó kiểm của Giới Phòng, một người đàn ông ngoài bốn mươi, gầy, đeo kính gọng đồng, tên gọi Trần Văn Lễ. Ông ta không có vẻ gì là người ác. Ông ta có vẻ của một người đã quen tin rằng thế gian này vận hành được là nhờ mọi thứ đều có tên trong sổ, có dấu trong mục, có người chịu trách nhiệm cho từng dòng chữ — và bất cứ thứ gì nằm ngoài sổ sách đều là một mối nguy, không phải vì nó xấu, mà vì nó không ai quản.",
      "Quản gia lần lượt bày từng thứ lên bàn theo đúng thứ tự phó kiểm yêu cầu, hai tay nâng như nâng đồ thờ. Trước hết là mười hai kỳ giấy chứng bệnh, xếp theo năm tháng, mỗi tờ đều có chữ ký của thầy thuốc Nguyễn Văn Sáu và triện của nhà. Kế đến là sổ gia nhân: bốn mươi bảy cái tên, mỗi tên kèm theo quê quán, năm vào phủ, việc được giao — và lác đác vài cái tên có một chấm son đỏ nhỏ bên cạnh, là những người đã chết trong phủ những năm qua, chết có ghi, có ngày, có người đứng ra lo liệu. Giới Phòng, hóa ra, ghi chép cái chết của gia nhân tử tế hơn nhiều gia đình tử tế khác.",
      "Sau cùng mới là cuốn gia phả. Nó nặng hơn hẳn các cuốn sổ khác, bìa da đã mòn góc, và khi quản gia đặt nó xuống, phó kiểm vô thức đưa cả hai tay ra đỡ. Ông ta mở đến trang giữa, dừng lại lâu hơn mọi trang khác. Cao Minh không cần dùng thần niệm cũng biết đó là trang nào: trang có một cái tên đã bị gạch đi bằng một nét mực đều và lạnh, gạch từ nhiều năm trước, và bên dưới, trong cột ghi chú, chỉ vỏn vẹn mấy chữ viết tay: đã xử lý, không còn trách nhiệm.",
      "Xấp hồ sơ thứ tư là sổ thuốc thang — cuốn sổ ghi từng thang thuốc đã sắc cho 'người bệnh' suốt mười hai năm, vị nào, lượng bao nhiêu, ngày nào, ai ký nhận. Phó kiểm lật từng trang, đối chiếu với một bản kê khác rút từ hồ sơ Tây Viện chuyển sang: bản kê đóng gói của chiếc rương thuốc theo hầu cô chủ từ ngày nàng về Long Hải, một tờ danh sách viết bằng một lối ký hiệu tính toán lạ mà phó kiểm phải nheo mắt nhìn hồi lâu mới bỏ qua, ghi vào biên bản vỏn vẹn một dòng: 'rương thuốc còn nguyên niêm phong, chưa từng mở.' Cao Minh ngồi ở cuối bàn, nghe tới dòng ấy thì khẽ đổi thế ngồi. Một chiếc rương mười mấy năm không ai mở, một tờ danh sách không ai đọc được — trong một buổi làm việc mà mọi thứ đều phải có người chịu trách nhiệm, đó là hai thứ duy nhất không ai chịu trách nhiệm cả. Hắn ghi nhớ điều ấy, như ghi nhớ một cánh cửa không khóa trong một tòa nhà khóa kín.",
      "Buổi kiểm tra diễn ra như một buổi điểm danh của cả tòa nhà, chỉ khác là điểm bằng giấy. Phó kiểm đọc từng tên trong sổ gia nhân bằng giọng đều đều; quản gia đáp 'có' cho mỗi cái tên, thi thoảng thêm một câu giải thích ngắn: người này đau chân, người kia mới vào thay chỗ người chết hồi tháng ba. Mỗi lần ghi nhận xong một mục, phó kiểm chấm bút hai lần vào nghiên, gạch một nét kiểm — và rồi, theo một thói quen mà Cao Minh phải nhìn tới lần thứ ba mới nhận ra, ông ta ghi lại y hệt nét kiểm ấy vào một cuốn sổ tay riêng mang theo bên mình. Mọi thứ, ở Giới Phòng, đều có hai bản. Một bản cho người ta xem. Một bản cho người chịu trách nhiệm.",
      "Cao Minh ngồi ở chiếc ghế phía cuối bàn, vị trí của một người khách chưa được mời mà cũng không ai dám đuổi. Phó kiểm đã hai lần liếc về phía hắn với vẻ khó xử: trong mọi cuốn sổ trên bàn này đều không có một dòng nào dành cho người khách lạ mặt đang ngồi xem nhà người ta kiểm sổ, và sự tồn tại của hắn, đối với bộ máy giấy tờ này, là một lỗi không có mục để ghi. Dưới bến ghe, người ta đã bắt đầu gọi hắn là thầy pháp; trong phòng này, không ai dám gọi thành tiếng, nhưng cũng không ai dám đuổi — vì đuổi một thầy pháp ra khỏi nhà đang có bệnh, theo lệ của người đời ở đây, là việc không ai muốn ký tên mình vào. Cuối cùng phó kiểm cũng phải lên tiếng hỏi, lịch sự mà rành rọt, rằng ông khách đây là ai, thuộc phần trách nhiệm của ai trong nhà này.",
      "Trước khi quản gia kịp nói hết câu trả lời an toàn của mình, bên ngoài sân có tiếng xe ngựa thắng lại gấp, tiếng vó ngựa gõ xuống nền gạch, và tiếng gia nhân chạy ra đón rộn lên một lượt rồi im bặt — cái im bặt đột ngột của một đám người vừa nhận ra ai là người mới tới. Phó kiểm đứng bật dậy, lưng thẳng như thước. Quản gia hai tay chắp trước bụng. Ngay cả ngọn đèn dầu trên bàn cũng như chao đi một cái, dù trong phòng không có gió."
    ],
    "dialogue": [
      {
        "speaker": "Phó kiểm",
        "text": "Thưa ông, quản gia, sổ sách nhà này tôi xem qua thì nền nếp lắm. Mười hai kỳ giấy chứng bệnh, đủ cả. Sổ gia nhân bốn mươi bảy người, kẻ mất người còn đều có ghi. Giới Phòng làm việc chỉ cần có thế: mỗi cái tên một người chịu trách nhiệm, mỗi việc làm một dòng trong sổ. Còn ông khách đây… thứ lỗi, tôi chưa rõ ông thuộc phần ai quản trong nhà này?"
      },
      {
        "speaker": "Quản gia",
        "text": "Dạ, thưa ngài phó kiểm, ông đây là thầy thuốc phương xa mà nhà con mời về chữa bệnh cho cô chủ, mới tới ít hôm nay thôi. Thuốc thang của cô chủ mười mấy năm vẫn chưa dứt, nhà con nghe tiếng ông giỏi nên rước về. Ông không phải người của nhà, việc trong nhà ông không dự vào đâu, thưa ngài."
      },
      {
        "speaker": "Cao Minh",
        "text": "Thầy thuốc. Ừ, cứ ghi thế đi. Bổn tọa ngồi đây là để xem một điều: sổ sách của các ngươi ghi người sống, hay ghi người đã bị các ngươi cho là chết?"
      },
      {
        "speaker": "Phó kiểm",
        "text": "Thưa ông, ông nói vậy là nặng lời. Giới Phòng không giết ai bằng giấy cả. Giấy chỉ ghi lại sự thật mà thôi. Có điều… có những sự thật, ghi ra thì hại người, giấu đi thì cứu người. Phần ấy, không phải ai cũng hiểu được."
      },
      {
        "speaker": "Cao Minh",
        "text": "Vậy thì bổn tọa càng phải ngồi xem cho hết buổi hôm nay."
      },
      {
        "speaker": "Quản gia",
        "text": "Dạ… thưa ngài phó kiểm, xe đã vào sân rồi. Ngài… ngài chủ phòng đã tới."
      }
    ],
    "choices": [
      {
        "id": "watch_register",
        "text": "Ngồi yên, xem cho hết buổi điểm danh bằng giấy này, ghi nhớ từng cái tên và từng chấm son đỏ.",
        "next": "lh_nghiem",
        "effects": {
          "cluesHuaGiaDelta": 2
        }
      },
      {
        "id": "ask_unmarked",
        "text": "Hỏi phó kiểm vì sao trong sổ gia nhân có một cái tên không chấm son mà cũng không còn ai trong nhà nhắc tới nữa.",
        "next": "lh_nghiem",
        "effects": {
          "cluesHuaGiaDelta": 1,
          "lanMaterInfluenceDelta": 1
        }
      }
    ]
  },
  "lh_nghiem": {
    "id": "lh_nghiem",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Người của Giới Phòng",
    "backgroundId": "long-hai-saloon",
    "location": "Phòng khách biệt thự Hứa Gia, Long Hải",
    "narration": [
      "Phạm Đình Nghiêm bước vào phòng không ồn ào. Ông ta ngoài năm mươi, người gầy và cao, mặc áo dài gấm đen đã cũ nhưng phẳng phiu đến mức không tìm thấy một nếp gấp thừa, khăn xếp ngay ngắn, tay không cầm gì ngoài một cuốn sổ nhỏ bọc da đã mòn. Gia nhân hai bên cúi đầu thấp hơn hẳn lúc nãy. Phó kiểm đứng nghiêm như lính. Hai người của đoàn kiểm tra vẫn ở lại bên cửa, không ngồi, tay buông mà không hề thả lỏng — từ lúc vị khách lạ có mặt trong nhà này, Giới Phòng làm việc gì cũng để lại người đứng cửa. Nhưng điều khiến căn phòng lặng đi không phải là uy quyền của ông ta — mà là cảm giác mọi thứ trong phòng, kể cả những xấp giấy, vừa được sắp lại đúng vị trí của chúng chỉ vì ông ta đã có mặt.",
      "Ông ta cúi chào Cao Minh trước, một cái cúi chào đúng lễ đến từng phân — lễ dành cho một vị khách không rõ lai lịch, không thừa không thiếu. Rồi ông ta mới ngồi xuống đầu bàn, tự tay mở cuốn gia phả tới đúng trang có cái tên bị gạch, không cần lật tìm, như một người mở cuốn sổ của chính mình ra ở trang mình đã đọc một nghìn lần. Ông ta đặt một ngón tay khô và sạch lên nét gạch ấy, rất nhẹ, như người ta chạm vào một vết sẹo cũ trên thân thể mình.",
      "Giọng ông ta đều, rõ, không cao không thấp, là thứ giọng của người cả đời chỉ nói những câu đã cân nhắc xong. Ông ta không giấu Cao Minh điều gì về nét gạch ấy: chính tay ông ta đã gạch, mười một năm trước, sau chuyện ở Tây Viện. Và ông ta nói lý do của mình ra rành rọt như đọc một bản kê: một người thừa kế còn mang tên trong sổ là một món nợ treo trên đầu cả nhà — chủ nợ sẽ đòi, đối thủ sẽ dùng, quan Tây sẽ vin vào mà tra xét, các phòng khác trong Lục Môn sẽ lấy đó làm cớ để chia phần. Một cái tên còn sống trong giấy tờ là một cánh cửa mở cho tai họa bước vào. Gạch nó đi, tai họa không còn chỗ bám. Cô gái ấy, từ ngày bị gạch tên, chưa từng bị một kẻ thù nào của nhà họ Hứa tìm tới — vì trên đời này, đối với mọi sổ sách, cô ta đã không còn tồn tại.",
      "Ông ta nói tiếp, vẫn bằng giọng ấy, về bốn mươi bảy người làm trong tòa nhà này. Họ ăn cơm của nhà họ Hứa được là vì tòa nhà này, trong sổ sách, chỉ là một nơi dưỡng bệnh kín đáo và yên tĩnh. Nếu cái tên kia còn đó, nếu người ta biết nhà họ Hứa giấu một người thừa kế ở đây, thì nơi này thành một điểm tranh chấp, và điểm tranh chấp thì không nuôi nổi bốn mươi bảy miệng ăn. Ông ta hỏi Cao Minh, không một chút khiêu khích, như hỏi một phép tính: một cái tên trên giấy, đổi lấy bốn mươi bảy con người bằng xương bằng thịt đang sống — ông là người ngoài, ông thử tính xem, vế nào nặng hơn?",
      "Rồi ông ta nói thêm một điều, bằng giọng còn đều hơn: buổi kiểm tra này vốn chưa tới kỳ. Nó được đẩy lên sớm, một phần vì trát của ông chủ — và một phần vì ông khách đây. Mấy hôm nay, tin đồn về một người lạ vận đồ kỳ lạ, mang hai thanh kiếm không rời người, ở trong biệt thự này, đã đi tới tai Giới Phòng qua đường bến ghe và chợ. Một 'thầy pháp' không có tên trong bất cứ sổ nào, ở trong một tòa nhà mà Giới Phòng chịu trách nhiệm — đó là thứ ông ta không thể để nằm ngoài sổ lâu hơn được. Ông ta nói: tôi tới hôm nay, một nửa là để kiểm nhà này. Một nửa là để xem ông là ai.",
      "Rồi ông ta hỏi lại, và đây mới là câu hỏi mà cả buổi kiểm tra thực ra chỉ để dẫn tới. Ông ta hỏi Cao Minh chịu trách nhiệm cho cô gái ấy được không. Không phải che chở một buổi một đêm — mà là chịu trách nhiệm theo sổ sách: nếu mai này cô ta bệnh, ai ký? Nếu cô ta gây ra chuyện, ai đứng tên? Nếu ông, vị khách không tên không tuổi không gia phả này, một ngày nào đó bỏ đi như cách ông đã tới, thì cái tên ông khăng khăng đòi giữ lại ấy sẽ rơi xuống đầu ai? Ông ta nói: tôi gạch tên cô ta, ít nhất tôi biết rõ mình đã làm gì, và tôi ký tên mình dưới nét gạch ấy. Còn ông, ông giữ tên cô ta bằng cái gì — bằng một lời nói gió bay?",
      "Cao Minh nghe hết, không ngắt lời một lần nào. Hắn nhìn người đàn ông ngồi ở đầu bàn — một kẻ đã tự tay xóa bỏ một con người khỏi thế gian bằng một nét mực, và mười một năm nay ngủ yên vì tin rằng đó là việc làm có trách nhiệm nhất đời mình. Ở thế giới của hắn, người ta giết nhau bằng kiếm, bằng trận, bằng trùng độc — ồn ào và rõ ràng. Ở đây, một con người bị giết bằng một nét gạch và một con dấu, và kẻ giết còn cảm thấy mình nhân từ. Hắn thấy việc ấy gần như… thú vị. Gần như thôi. Rồi hắn đứng dậy khỏi ghế, thong thả, như người đã nghe đủ một buổi diễn."
    ],
    "dialogue": [
      {
        "speaker": "Phạm Đình Nghiêm",
        "text": "Thưa ông, tôi là Phạm Đình Nghiêm, giữ Giới Phòng của nhà họ Hứa. Việc trong nhà này, phần giấy tờ, phần trách nhiệm, đều qua tay tôi. Nét gạch trong gia phả mà ông đang nhìn — là của tôi. Tôi không chối, cũng không giấu. Giới Phòng làm việc gì cũng ký tên mình vào việc ấy."
      },
      {
        "speaker": "Cao Minh",
        "text": "Ngươi gạch tên một người còn sống, rồi gọi đó là chịu trách nhiệm."
      },
      {
        "speaker": "Phạm Đình Nghiêm",
        "text": "Thưa ông, ông nói chưa hết. Tôi gạch tên cô ta trong sổ, để không một ai có thể vin vào cái tên ấy mà làm hại cô ta, hay làm hại cả nhà này. Mười một năm nay, cô ta sống yên ở đây, có người hầu hạ, có thầy thuốc ký giấy, có cơm ăn áo mặc. Người chết trên giấy thì không ai truy nữa. Đó là cái yên ổn duy nhất mà cái thế gian này cho phép cô ta có."
      },
      {
        "speaker": "Cao Minh",
        "text": "Yên ổn. Bổn tọa vào gian phòng trong cùng rồi. Nàng còn thở. Còn nhớ. Còn tự xưng tên mình được — ngoài sổ của ngươi. Ngươi bảo vệ nàng bằng cách chôn nàng trong giấy, mười một năm, và gọi đó là yên ổn của nàng. Đó là yên ổn của ngươi."
      },
      {
        "speaker": "Phạm Đình Nghiêm",
        "text": "Ông là khách lạ, ông nói chữ 'người' nghe nhẹ lắm. Tôi ở trong nhà này, tôi phải nói chữ 'trách nhiệm'. Ông che chở cô ta được một đêm nay. Nhưng sổ sách thì tính bằng năm. Ông đi rồi, cái tên ấy ở lại với ai? Tôi hỏi ông một câu thôi, và tôi mong ông trả lời cho thật: ông lấy gì để chịu trách nhiệm cho cô ta — ngoài một thanh kiếm?"
      },
      {
        "speaker": "Cao Minh",
        "text": "Chịu trách nhiệm — là thứ các ngươi bày ra để có cái mà ký. Bổn tọa không ký, không điểm chỉ, không hứa. Từ hôm nay, cái tên ngươi sợ nó rơi không ai đỡ — nó rơi vào bổn tọa. Đỡ được hay không, ngươi cứ đứng mà xem."
      },
      {
        "speaker": "Phạm Đình Nghiêm",
        "text": "…Ông nói nghe như một người chưa từng phải ký tên vào cái gì cả. Thôi được. Buổi nay, Giới Phòng còn một việc phải làm cho xong kỳ: giấy chứng sau cùng. Ký xong, mọi trách nhiệm của nhà này đối với cô ta sẽ chấm dứt một cách sạch sẽ. Ông cứ ngồi xem, như ông đã muốn."
      }
    ],
    "choices": [
      {
        "id": "answer_accountability",
        "text": "Đáp lại câu hỏi của Nghiêm đến cùng: bổn tọa chịu trách nhiệm bằng chính mình, không cần một cuốn sổ nào.",
        "next": "lh_certification",
        "route": {
          "id": "bao_ho",
          "delta": 2
        }
      },
      {
        "id": "question_eraser",
        "text": "Hỏi ngược lại Nghiêm: kẻ gạch tên người khác thì ai ghi tên kẻ ấy vào sổ — và ai chịu trách nhiệm cho nét gạch?",
        "next": "lh_certification",
        "effects": {
          "cluesHuaGiaDelta": 2
        }
      }
    ],
    "companions": [
      "pham_dinh_nghiem"
    ]
  },
  "lh_certification": {
    "id": "lh_certification",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Giấy khai tử",
    "backgroundId": "long-hai-saloon",
    "location": "Phòng khách biệt thự Hứa Gia, Long Hải",
    "companions": [
      "pham_dinh_nghiem",
      "npc_doctor"
    ],
    "link": {
      "id": "danh",
      "phase": "intervened"
    },
    "narration": [
      "Trước khi trời sáng, tờ giấy chứng sau cùng được trải ra giữa bàn. Nó đã được viết sẵn từ trước bằng một nét chữ thư lại đẹp và đều, chỉ chừa lại ngày tháng và chỗ ký tên: 'Hứa Tiểu Lan, con gái ông Hứa Bổn Hoả, mắc bệnh phong quái ác, thuốc thang không chữa được, đã chết tại biệt thự Long Hải, gia đình đã lo liệu xong xuôi, nay làm giấy này để trình các nơi liên quan, từ nay không còn ai phải chịu trách nhiệm về người này nữa.' Mười hai kỳ giấy trước chứng nhận nàng bệnh. Tờ giấy này chứng nhận nàng chết. Cao Minh đọc hết một lượt và hiểu ra bước đi cuối cùng của Giới Phòng: người bệnh thì còn có thể bị đòi xem mặt; người chết thì không ai đòi nữa. Từ hôm nay, thân thể còn sống của nàng sẽ được đưa đi như người ta đưa một cái xác — hợp lệ, kín đáo, không một ai có quyền hỏi han.",
      "Nghiêm giải thích việc này bằng đúng cái giọng điểm lịch trình của ông ta, và đó là điều khiến nó rợn người hơn bất cứ lời đe dọa nào. Ông ta nói đây là ân huệ sau cùng mà Giới Phòng dành cho cô gái: một cái chết trên giấy, sạch sẽ, có chữ ký, có làm chứng — để đổi lấy một đời còn lại không ai truy tìm. Ông ta nói: người sống mà không tên thì khổ vì người ta còn đòi hỏi ở cái tên; người đã chết hẳn trên giấy thì được yên. Ông ta tin điều đó. Ông ta tin đến mức có thể nói nó ra trước mặt chính người con gái mà tờ giấy sắp sửa giết chết lần thứ hai.",
      "Bởi vì nàng đang ở trong phòng. Theo đúng phép của buổi làm việc, 'người bệnh vô danh' được đưa vào ngồi ở ghế bên để đoàn kiểm tra đối chiếu — một người sống bị bắt ngồi nghe người ta làm giấy khai tử cho chính mình. Nàng ngồi rất thẳng, hai tay đặt trên gối, mắt nhìn xuống một điểm cố định trên mặt bàn, bình tĩnh như một người khách dự một buổi lễ không liên quan tới mình. Chỉ có Cao Minh, bằng thần niệm, mới nghe được nhịp tim của nàng đang chạy nhanh gấp đôi người thường — và mới thấy được rằng sự bình tĩnh ấy không phải là cam chịu: đó là một người đang dùng hết sức mình để không run, vì nàng đã quyết rằng buổi hôm nay, nàng sẽ không cho những người này thấy nàng run.",
      "Thầy thuốc Nguyễn Văn Sáu được dẫn vào sau cùng, hai người gia nhân đi hai bên như áp giải mà lại như dìu đỡ. Chiếc cặp da của ông run lên từng hồi. Mười hai lần trước, ông ký giấy chứng bệnh cho một người ông chưa từng gặp mặt. Lần này, người ấy ngồi ngay trong phòng, sống, thở, và nhìn ông — ông nhìn nàng đúng một cái rồi vội cúi mặt xuống, như người vừa bị ánh sáng chói vào mắt. Lúc đi ngang qua ghế của vị khách lạ, mắt ông còn liếc rất nhanh về phía hai thanh kiếm đang lơ lửng yên hai bên vai hắn — và chiếc cặp trong tay ông run thêm một nhịp nữa. Nghiêm tự tay đặt cây bút vào tay ông, lịch sự như mời trà, và nói một câu duy nhất: 'Thầy cứ ký như mọi kỳ. Kỳ này là kỳ chót, ký xong thì thầy cũng được yên.'",
      "Bàn tay của thầy thuốc viết hai chữ đầu của tên mình theo cái run quen thuộc của người già — rồi đến nét thứ ba, cái trơn tru lạnh lẽo ấy lại tới, như mười hai lần trước: bàn tay bỗng đi đều, đi đẹp, đi như của một người khác. Nhưng lần này, ở nét cuối cùng của chữ ký, bàn tay khựng lại. Cả căn phòng nghe được tiếng ngòi bút rít trên giấy rồi dừng hẳn, một giọt mực đọng lại, đen và tròn như một con mắt. Mồ hôi trên trán ông Sáu rơi xuống mặt bàn. Miệng ông mấp máy một câu xin lỗi không thành tiếng, hướng về phía cô gái đang ngồi — người duy nhất trong phòng mà câu xin lỗi ấy thuộc về. Quản gia khẽ ho một tiếng. Bàn tay lại chuyển động, hoàn thành nét cuối, đều và đẹp như chưa từng khựng lại.",
      "Tờ giấy được phó kiểm cầm lên bằng hai tay, đọc lại một lượt để đối chiếu chữ nghĩa, rồi sao thêm một bản vào cuốn sổ tay riêng của Giới Phòng như lệ thường — mọi việc hôm nay đều có hai bản. Khi sao tới dòng ghi tên người chết, cây bút của phó kiểm đi chậm hẳn lại, dù nét chữ vẫn đều. Ông ta là người của sổ sách, và sổ sách thì không biết đau; nhưng bàn tay cầm bút của ông ta, trong một thoáng rất ngắn, đã biết thay cho cả cuốn sổ. Không ai trong phòng nói gì về sự chậm lại ấy. Nó không được ghi vào bất cứ biên bản nào.",
      "Giấy được nhấc lên, hơ qua hơi đèn cho mực khô, rồi đặt vào xấp hồ sơ đã hoàn tất. Từ giờ phút ấy, trong mọi sổ sách của nhà họ Hứa và của Giới Phòng, Hứa Tiểu Lan đã chết. Nghiêm nhìn tờ giấy một lúc, gật đầu rất khẽ — cái gật đầu của người vừa thanh toán xong một món nợ mười hai năm. Rồi ông ta cho người đưa 'người bệnh vô danh' về phòng trong, và quay sang phần việc tiếp theo của buổi kiểm tra như không có chuyện gì vừa xảy ra.",
      "Suốt buổi ký, không một ai trong phòng dám lên tiếng mời vị khách lạ ra ngoài — dù theo phép, một người ngoài không thuộc phần trách nhiệm của ai thì không được ngồi dự. Phó kiểm đã mấy lần mở miệng rồi lại thôi; mắt ông ta cứ trở về chỗ hai thanh kiếm chưa từng rời vỏ. Cao Minh không động đậy. Hắn ngồi yên, nhìn từng khuôn mặt, từng bàn tay, từng nét bút — và ghi nhớ tất cả, theo đúng cái cách mà Giới Phòng vẫn tự hào: không sót một chi tiết nào. Chỉ đến khi tờ giấy đã khô mực, hắn mới nói một câu, không lớn, nhưng rõ đến mức phó kiểm đang ghi chép cũng phải ngừng bút."
    ],
    "dialogue": [
      {
        "speaker": "Phạm Đình Nghiêm",
        "text": "Thầy Sáu, mời thầy ngồi. Giấy đã viết sẵn, thầy chỉ việc ký tên và điểm chỉ như mọi kỳ. Mười hai kỳ trước thầy ký chứng bệnh. Kỳ này, thầy ký chứng tử. Ký xong kỳ này, từ nay thầy không còn phải tới đây nữa. Đó cũng là một cách nhà này trả ơn thầy hai mươi năm qua."
      },
      {
        "speaker": "Thầy thuốc",
        "text": "Dạ… thưa ngài… tôi… hai mươi năm hành nghề, tôi ký giấy cho người chết nhiều rồi. Nhưng người chết thì người ta nằm yên cho tôi ký. Còn cô… cô ấy đang ngồi kia, cô ấy đang nhìn tôi…"
      },
      {
        "speaker": "Phạm Đình Nghiêm",
        "text": "Thầy nhìn lầm rồi. Trong phòng này không có cô nào cả. Chỉ có một người bệnh vô danh mà nhà này giữ hộ. Thầy cứ ký cho đúng phép. Phép thì không có mắt, thầy ạ."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa thầy, thầy cứ ký đi. Tay thầy run, tôi thấy được. Người ta bắt thầy ký, cũng như người ta bắt tôi ngồi đây. Tôi không trách thầy đâu."
      },
      {
        "speaker": "Thầy thuốc",
        "text": "Cô ơi… tôi… cô tha cho tôi…"
      },
      {
        "speaker": "Cao Minh",
        "text": "Khoan. Trước khi mực khô, bổn tọa nói một câu để các ngươi ghi vào trí nhớ, vì sổ của các ngươi không có mục nào ghi được câu này: người còn sống."
      }
    ],
    "choices": [
      {
        "id": "hold_back",
        "text": "Ngồi yên đến cùng, ghi nhớ từng khuôn mặt và từng nét bút — sự trả thù của bổn tọa không nằm ở buổi hôm nay.",
        "next": "lh_lan_faces",
        "effects": {
          "cluesHuaGiaDelta": 2
        }
      },
      {
        "id": "speak_record",
        "text": "Nói câu ấy cho cả phòng nghe và nhìn thẳng Nghiêm: một người còn sống vừa bị các ngươi ký giấy giết chết.",
        "next": "lh_lan_faces",
        "effects": {
          "lanTrustDelta": 2
        },
        "route": {
          "id": "bao_ho",
          "delta": 1
        }
      }
    ]
  },
  "lh_lan_faces": {
    "id": "lh_lan_faces",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Đối diện",
    "backgroundId": "long-hai-saloon",
    "location": "Phòng khách biệt thự Hứa Gia, Long Hải",
    "narration": [
      "Sau khi tờ giấy khai tử đã vào hồ sơ, buổi kiểm tra còn một mục chót, ghi trong trát bằng mấy chữ khô khốc: đối chiếu người bệnh. Đây là mục mà cả đoàn kiểm tra đều muốn làm cho qua thật nhanh, vì nó là mục duy nhất trong buổi hôm nay không thể làm bằng giấy. Nàng được đưa trở lại phòng khách — lần này không phải để ngồi bên lề, mà để đứng giữa phòng, dưới ánh đèn, cho những người vừa ký giấy giết nàng được nhìn nàng cho rõ. Nàng đứng thẳng, áo bà ba trắng đã cũ nhưng sạch, tóc chải gọn, hai tay buông xuôi. Một người con gái mười tám tuổi đứng giữa một phòng đầy đàn ông và giấy tờ, bình tĩnh như đang đứng trong sân nhà mình ngày Tết.",
      "Nghiêm chủ trì mục này bằng đúng phép tắc của ông ta. Ông ta không hỏi nàng. Ông ta hỏi quản gia về nàng, từng câu một, như hỏi về một món đồ trong kho: người bệnh ăn uống thế nào — dạ, cháo loãng ngày hai bữa. Ngủ có yên không — dạ, ngủ nhiều, có khi ngủ suốt ngày không dậy. Có nói năng gì lạ không — dạ, thưa, ít nói, hỏi gì đáp nấy, không quấy phá. Mỗi câu trả lời đều được phó kiểm ghi vào biên bản. Trong biên bản ấy, nàng hiện lên như một thân thể biết ăn biết ngủ và không gây phiền hà cho ai — một vật chủ hoàn hảo, một món đồ không có ý kiến. Căn nhà này giết người theo một cách rất riêng: không dùng dao. Nó nói về người ta như thể người ta không có mặt trong phòng.",
      "Trong phòng, ngoài đoàn kiểm tra, còn có những người phải đứng dự vì phận sự: hai gia nhân nam đứng hai bên cửa, mắt nhìn xuống đất theo đúng phép — hai người ấy, từ đầu buổi tới giờ, chưa một lần dám ngước nhìn về phía cô chủ, cũng chưa một lần dám nhìn về phía vị khách có hai thanh kiếm lơ lửng sau lưng; mắt họ chọn sàn gạch, vì sàn gạch là thứ duy nhất trong phòng không đòi hỏi họ điều gì. Cô hầu bưng khay nước đứng ở góc phòng, là người duy nhất trong số gia nhân dám thỉnh thoảng ngước lên nhìn cô chủ của mình bằng ánh mắt của một con người nhìn một con người. Ở dãy ghế bên, bà Năm Liên không có mặt — bà đã bị giữ lại ở khu nhà trong với lý do 'người bệnh cần yên tĩnh', một sự vắng mặt được sắp đặt để buổi đối chiếu này không có lấy một người nào đứng về phía cô gái đang đứng giữa phòng. Họ sợ cả một bà già. Cao Minh ghi nhớ điều ấy như ghi nhớ một tội chứng khác.",
      "Rồi Nghiêm làm một việc không ai ngờ tới. Có lẽ vì phép tắc của Giới Phòng đòi hỏi mọi mục đều phải khép kín, ông ta quay sang nàng và hỏi trực tiếp — câu hỏi duy nhất trong cả buổi hôm nay được đặt cho chính nàng, và cũng là câu hỏi tàn nhẫn nhất, dù ông ta hỏi bằng giọng hoàn toàn vô tư của người đọc một mục trong danh sách: 'Cô có tên không?'",
      "Một chi tiết nhỏ nữa không qua được mắt hắn: cô hầu bưng khay ở góc phòng, khi nàng đi ngang qua, đã rất khẽ — khẽ tới mức chỉ người trong nhà mới hiểu — nghiêng khay sang một bên nhường lối, đúng như cách gia nhân vẫn nhường lối cho cô chủ trong những ngày thường, trước mặt cả đoàn kiểm tra. Một phép tắc bé nhỏ, và là một sự phản kháng bé nhỏ.",
      "Căn phòng yên lặng hẳn. Quản gia cúi đầu. Phó kiểm ngừng bút giữa chừng. Thầy thuốc Sáu, ngồi ở góc phòng với chiếc cặp ôm trong lòng, ngẩng lên nhìn nàng bằng đôi mắt đỏ hoe của một người vừa ký tên mình vào tội lỗi và giờ phải ngồi xem nốt hậu quả của nó. Nàng im lặng một lúc lâu — lâu đến mức Nghiêm khẽ nhíu mày, chuẩn bị ghi vào biên bản hai chữ 'không đáp' — rồi nàng trả lời, giọng nhỏ, đều, đúng mực, là câu trả lời mà căn nhà này đã dạy nàng suốt mười một năm:",
      "Nàng nói: người bệnh thì không cần tên. Nghiêm gật đầu, thỏa mãn như người vừa đóng được nắp một cái hòm, và ra hiệu ghi vào biên bản. Nhưng Cao Minh thấy — chỉ mình hắn thấy, vì chỉ mình hắn đang nhìn nàng bằng cả thần niệm — rằng trong khoảnh khắc nàng cúi đầu sau câu trả lời, đôi môi nàng đã mấp máy thêm một lần nữa, không thành tiếng, tự nói với chính mình như người ta lẩm nhẩm một điều phải thuộc cho bằng được: tên của nàng, nàng vẫn còn thuộc. Căn nhà này lấy được tiếng nói của nàng trước mặt người đời, nhưng chưa lấy được tiếng nói nàng dành cho chính nàng.",
      "Khi mục đối chiếu kết thúc, hai gia nhân đưa nàng ra khỏi phòng khách để về gian trong. Hàng người trong phòng tự động dạt ra nhường lối. Nàng đi qua dãy ghế, qua chiếc bàn đầy hồ sơ, qua ông thầy thuốc đang cúi gằm mặt — và khi đi ngang chiếc ghế của Cao Minh, ở khoảng cách của một hơi thở, không dừng bước, không quay đầu, nàng nói một câu rất khẽ, khẽ tới mức trong căn phòng đầy người ấy chỉ có một người nghe được. Nàng xưng tên mình. Đầy đủ. Rõ ràng. Có họ, có tên, có cả tên người mẹ đã sinh ra nàng — như một người đọc lại gia phả của chính mình từ một cuốn sách mà không một nét mực nào gạch nổi.",
      "Ngòi bút của phó kiểm khựng lại nửa nhịp — ông ta hình như vừa nghe thấy một tiếng gì đó rất nhỏ, như tiếng lá chạm vào cửa sổ. Nghiêm ngẩng lên, nhìn về phía nàng đang đi khuất qua khung cửa, rồi nhìn sang Cao Minh. Cao Minh ngồi yên, không đổi sắc mặt, tay đặt trên gối, không một biểu cảm nào để ghi vào sổ. Hai người đàn ông nhìn nhau qua chiếc bàn đầy giấy tờ. Rồi Nghiêm cúi xuống trước, tiếp tục buổi làm việc của mình — nhưng Cao Minh biết, từ giây phút ấy, trong cuốn sổ tay riêng của người chủ Giới Phòng, có một mục vừa bị ghi thêm mà ông ta chưa biết phải ghi vào cột nào."
    ],
    "dialogue": [
      {
        "speaker": "Phạm Đình Nghiêm",
        "text": "Mục chót: đối chiếu người bệnh. Quản gia, người bệnh ăn uống thế nào?"
      },
      {
        "speaker": "Quản gia",
        "text": "Dạ, thưa ngài, cháo loãng ngày hai bữa, thuốc thang đủ kỳ, không bỏ bữa nào."
      },
      {
        "speaker": "Phạm Đình Nghiêm",
        "text": "Có nói năng gì không? Có quấy phá gì không?"
      },
      {
        "speaker": "Quản gia",
        "text": "Dạ, thưa, cô… người bệnh ít nói lắm. Hỏi gì đáp nấy. Mười mấy năm nay không gây một điều phiền hà nào cho nhà."
      },
      {
        "speaker": "Phạm Đình Nghiêm",
        "text": "Tốt. Còn một điều theo phép tôi phải hỏi cho đủ mục. Cô — cô có tên không?"
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài, người bệnh thì không cần tên. Ở nhà này, tôi chỉ là người bệnh thôi."
      },
      {
        "speaker": "Phạm Đình Nghiêm",
        "text": "Ghi vào: người bệnh không có tên, không tự xưng tên. Mục đối chiếu xong. Đưa người bệnh về phòng trong."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Hứa Tiểu Lan. Con gái của Lâm Ngọc Chi. Tên của tôi, thưa ngài, tôi vẫn còn nhớ."
      }
    ],
    "choices": [
      {
        "id": "let_her",
        "text": "Để nàng tự mình đi qua buổi đối chiếu này — không đỡ lời, không che chắn. Nàng đã làm được, bằng chính sức của nàng.",
        "next": "lh_move_tonight",
        "effects": {
          "lanTrustDelta": 2
        },
        "route": {
          "id": "tu_quyet",
          "delta": 2
        }
      },
      {
        "id": "shield_her",
        "text": "Đáp thay câu hỏi sau cùng của Nghiêm để kéo sự chú ý của cả phòng về phía bổn tọa, cho nàng được đi qua nhẹ nhàng hơn.",
        "next": "lh_move_tonight",
        "route": {
          "id": "bao_ho",
          "delta": 2
        }
      }
    ],
    "companions": [
      "pham_dinh_nghiem"
    ]
  },
  "lh_move_tonight": {
    "id": "lh_move_tonight",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Lệnh chuyển đi",
    "backgroundId": "long-hai-corridor",
    "location": "Hành lang biệt thự Hứa Gia, Long Hải",
    "companions": [
      "steward"
    ],
    "narration": [
      "Buổi kiểm tra chưa kịp tan thì lệnh mới đã tới. Một người đưa tin của Giới Phòng phóng ngựa từ đường cái quan vào sân, áo đẫm mồ hôi, tay giữ một ống tre đựng công văn dán kín hai đầu bằng sáp đỏ. Quản gia đón lấy bằng cả hai tay, đưa thẳng vào phòng khách không dám mở. Nghiêm tự tay bẻ sáp, rút ra một tờ lệnh ngắn — ngắn hơn mọi tờ giấy khác trong buổi hôm nay, và nặng hơn tất cả. Ông ta đọc một lượt, gấp lại, rồi tuyên bố bằng giọng điểm việc thường ngày: lệnh của ông chủ, hạn trăng rằm cũ bãi bỏ. Việc chuyển đi làm ngay đêm nay.",
      "Người đưa thư thứ hai được phái đi ngay sau đó, về hướng bến tàu, mang theo một trát khác niêm kín: giữ một chiếc ghe lớn neo sẵn từ nửa đêm, không hỏi lý do. Chi tiết ấy cho hắn biết thêm một điều: đoàn chuyển đi đêm nay không chỉ có xe — chúng đã chuẩn bị cả đường thủy dự phòng, như thể chúng đã tính trước rằng con đường bộ có thể không dùng được.",
      "Theo tờ lệnh ấy, đúng giờ Dần đêm nay, một chiếc xe kín mui cùng sáu người hộ tống từ phía Tây Viện sẽ tới cổng biệt thự. Người bệnh — mà từ trưa nay, trên giấy tờ, đã là một người chết — sẽ được đưa lên xe như người ta đưa một quan tài chưa đóng nắp về nơi an táng. Mọi giấy tờ tưởng đã đủ: giấy chứng tử ký lúc giờ Ngọ, biên bản đối chiếu ký lúc xế chiều — chỉ còn thiếu con dấu của Giới Phòng trên tờ chứng tử, việc quản gia định để tới mai mới hoàn tất. Trên đường đi, nếu có ai hỏi, đoàn xe chỉ việc chìa giấy ra: nhà họ Hứa đang đưa người chết về quê. Không một trạm gác nào, không một quan chức nào, không một người quen nào có quyền mở mui xe ra nhìn vào trong.",
      "Cao Minh đứng ở hành lang ngoài phòng khách, nghe qua cánh cửa khép hờ từng chữ của bản lệnh được đọc lại cho quản gia ghi chép. Hắn tính lại giờ giấc trong đầu, nhanh và lạnh: kế hoạch của hắn cần thêm một ngày — một ngày để kiểm lại bản đồ điểm neo, để dò lại đường ra bến lần chót, để mọi thứ chín muồi. Cái ngày ấy vừa bị cắt mất bởi một tờ giấy dán sáp đỏ. Hắn không giận. Căn nhà này ra đòn bằng giấy tờ và giờ giấc — vậy thì hắn sẽ đi trước giờ giấc của chúng một bước. Đêm nay, hoặc là chúng đưa nàng đi theo cách của chúng, hoặc là hắn đưa nàng đi theo cách của hắn.",
      "Hắn xếp lại những việc còn phải xong trước giờ Dần, việc nào việc nấy rõ ràng: chiếc hộp của bà Năm Liên phải tới tay nàng; chiếc rương ở kho thuốc phải được mở trước khi đoàn xe tới — vì sau giờ Dần, kho thuốc sẽ là nơi đầu tiên bị niêm phong lại khi có biến; bản đồ điểm neo phải đi lại một lượt chót bằng thần niệm; và Thu Nguyệt phải được dặn dò vị trí của mình trong đêm. Bốn việc, chưa đầy hai canh giờ. Hắn đã quen với những ván cờ ít giờ hơn thế này. Chỉ khác một điều: ván này, quân cờ quan trọng nhất không được phép vỡ.",
      "Nhưng tin tức trong căn nhà này không chỉ chạy theo đường giấy. Trước khi quản gia kịp bước ra khỏi phòng khách, ở gian phòng trong cùng, Tiểu Lan đã biết. Nàng nghe thấy nó — không phải qua vách tường, mà qua cái mạng vô hình đang căng lên trong thân thể nàng như một sợi dây đàn bị lên dây quá mức: cả tòa nhà vừa nhận được một mệnh lệnh mới, và mệnh lệnh ấy đi qua người nàng trước khi tới tai bất cứ gia nhân nào. Các điểm neo trong nhà bắt đầu giật đều hơn, nhanh hơn, như một trái tim vừa nghe tin dữ. Nàng ngồi dậy trên giường, ôm lấy hai vai mình, và chờ — chờ một người duy nhất trong nhà này sẽ tới nói cho nàng biết bằng lời của con người, thay vì bằng những sợi chỉ trong máu.",
      "Người tới phòng nàng trước tiên lại là Thu Nguyệt. Cô được giao một việc mà quản gia nói ra nhẹ như giao việc quét sân: chuẩn bị vải liệm và dây buộc cho 'người chết' — để tới giờ Dần, khi xe tới, mọi thứ đã sẵn sàng theo đúng nghi thức của một đám đưa tang. Cô ôm bó vải trắng đứng ở cửa phòng nàng một lúc lâu, không dám bước vào, mặt cắt không còn giọt máu. Rồi, thay vì đi lo việc được giao, cô chạy thẳng tới tìm Cao Minh ở hành lang — lần đầu tiên trong đời làm gia nhân của mình, cô bỏ một mệnh lệnh giữa chừng để đi báo một tin mà cô biết là sẽ giết nàng nếu tới tai nàng qua đường khác.",
      "Hành lang chạng vạng tối nhanh. Đèn dầu được thắp sớm hơn lệ thường — không phải vì trời tối, mà vì cả nhà phải 'lo liệu cho xong việc đêm nay'. Cao Minh nhìn dãy đèn cháy đều hai bên hành lang, nhìn những bóng gia nhân đi lại nhanh hơn, lặng hơn thường ngày, và biết rằng từ giờ phút này, mỗi canh giờ trôi qua là một vòng dây siết thêm quanh cổ tất cả những người trong nhà. Hắn quyết định rất nhanh, theo cái cách hắn vẫn quyết định mọi việc hệ trọng: không bàn, không dền dứ — chỉ dời giờ hành động lên trước mũi đối thủ một bước."
    ],
    "dialogue": [
      {
        "speaker": "Quản gia",
        "text": "Dạ, thưa ông, lệnh trên mới về: đêm nay giờ Dần, xe của Tây Viện tới đón… đón người đi. Nhà con phải lo liệu vải vóc, giấy tờ cho xong trước giờ ấy. Ông là khách, xin ông cứ yên giấc trong phòng, đêm nay nhà có việc tang, không tiện tiếp đãi."
      },
      {
        "speaker": "Lê Thu Nguyệt",
        "text": "Thưa ông… em không dám giấu ông. Họ biểu em chuẩn bị vải liệm cho cô. Vải liệm, thưa ông! Cô còn sống mà họ biểu em may vải liệm. Em chạy tới đây, em bỏ việc giữa chừng — ông liệu mà tính, chớ để tới giờ Dần thì không còn kịp nữa đâu."
      },
      {
        "speaker": "Cao Minh",
        "text": "Ngươi làm đúng. Vải liệm để đó. Từ giờ, ngươi nhớ một việc: xe tới cổng lúc giờ Dần, thì chúng ta đã ra khỏi nhà này trước đó một canh giờ. Không cổng chính. Không đường của chúng."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài, tôi đã nghe rồi. Cả căn nhà này vừa rung lên một lượt, như người ta rung một tấm lưới. Đêm nay, phải không thưa ngài? Đêm nay họ đưa tôi đi — hay là… đêm nay ngài đưa tôi đi?"
      },
      {
        "speaker": "Cao Minh",
        "text": "Đêm nay đi. Nàng ở yên trong phòng, nghe lời bà Năm Liên. Ngoài hành lang có động tĩnh gì, cũng không ra. Phần còn lại, để bổn tọa."
      }
    ],
    "choices": [
      {
        "id": "move_dusk",
        "text": "Đi ngay trong đêm, trước xe hộ tống một canh giờ, theo đường đã dò từ trước.",
        "next": "lh_so_retrieval",
        "effects": {
          "lanTrustDelta": 1,
          "cluesHuaGiaDelta": 1
        }
      },
      {
        "id": "delay_the_carriage",
        "text": "Cầm chân đoàn xe bằng giấy tờ của chính chúng: dặn bà Năm Liên và Thu Nguyệt, khi xe tới, cứ giữ đoàn hộ tống ở phòng khách đối chiếu giấy chứng tử — tờ giấy ấy còn thiếu dấu của Giới Phòng.",
        "next": "lh_so_retrieval",
        "effects": {
          "cluesHuaGiaDelta": 1
        },
        "route": {
          "id": "tu_quyet",
          "delta": 1
        },
        "flags": {
          "carriageDelayed": true
        }
      }
    ]
  },
  "lh_so_retrieval": {
    "id": "lh_so_retrieval",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Mảnh sổ thứ nhất",
    "backgroundId": "medicine-store",
    "location": "Kho thuốc, biệt thự Hứa Gia, Long Hải",
    "companions": [
      "le_thu_nguyet"
    ],
    "narration": [
      "Trong lúc phòng khách còn bận giấy tờ chuyển giao, Thu Nguyệt dẫn Cao Minh vòng qua sân bếp tới kho thuốc ở dãy nhà ngang. Lần thứ hai hắn vào kho này. Lần trước, hắn tới giữa ban ngày, quản gia dẫn đường, ông Tư quản kho mở khóa hai lớp mà tiếp; lần này chỉ có một chiếc đèn nhỏ trong tay Thu Nguyệt, che gần hết ánh sáng, bước chân cô thuộc lòng từng phiến gạch gồ. Cửa gỗ lim khép lại sau lưng, mùi dược liệu khô xộc lên — đủ thứ mùi hắn không gọi nổi tên một thứ nào. Với người trong nhà, cái kho này là một cuốn sách mở: từng hũ sành hai nhãn — một nhãn chữ, một nhãn vạch chấm theo lối thương hồ — ông Tư quản kho đọc vanh vách trọng lượng không cần ngẩng đầu. Còn hắn, hắn chỉ nhận ra đúng một mùi trong tất cả: cái mùi đắng lạ, đen như mực, mà hắn đã ngửi thấy trong khay thuốc của nàng. Ở góc trong cùng, trên bệ gỗ riêng, là thứ hắn tới lấy: chiếc rương ông Tư từng nói mở ra là mất đầu như chơi.",
      "Chiếc rương nằm ở góc trong cùng, trên chiếc bệ gỗ riêng của nó. Đó là rương thuốc theo hầu cô chủ từ Tây Viện sang ngày nàng được đưa về Long Hải — một chiếc rương gỗ mun bọc đai sắt, khóa đồng đã xanh, và dọc mép đai sắt còn nguyên hàng dấu niêm của Giới Phòng từ ngày nó chở vào nhà này. Suốt mười mấy năm không ai được phép mở nó; nó nằm đó như món đồ của người chết — mà với căn nhà này, chủ nhân của nó quả thật đã chết trên giấy từ lâu, chỉ là đến hôm nay giấy tờ mới theo kịp.",
      "Thu Nguyệt lấy từ trong tay áo ra một tờ giấy đã mềm vì gấp nhiều lần: bản sao tờ danh sách đóng gói của chiếc rương, thứ cô đã lén chép và dúi cho bà Năm Liên giữ, và bà vừa trao lại cho cô sáng nay với một câu dặn duy nhất. Thu Nguyệt trải tờ giấy lên nắp rương, tay run đến mức phải đè cả hai tay xuống mới giữ yên. Cô nói, giọng đứt quãng: danh sách này không viết bằng chữ thường. Nó viết bằng ký hiệu tính toán của dân thương hồ Chợ Lớn — thứ ký hiệu cô học lỏm được hồi còn chạy việc ở bến tàu, trước khi bị đưa vào nhà này. Mỗi dòng là một món đồ và số cân lạng của nó, ký hiệu nào cũng có nghĩa — trừ một dòng.",
      "Dòng ấy kê: 'sơn tra khô, ba cân'. Thu Nguyệt nói, trong rương thuốc theo hầu một cô chủ bệnh phong, không bao giờ có sơn tra khô — đó là thứ quả rẻ tiền bán ngoài chợ cho trẻ con ăn vặt, không phải thuốc. Hắn nhìn dòng ký hiệu một lúc rồi đoán, tự tin như mọi khi: ba cân sơn tra — để ăn dần cho đỡ đắng miệng. Thu Nguyệt lắc đầu, suýt nữa thì bật cười giữa lúc sợ đến xanh mặt: thưa ông, ký hiệu ghi số lượng của dòng ấy không giống các dòng khác — thay vì ký hiệu cân lạng, nó là một chuỗi chấm và vạch mà dân thương hồ chỉ dùng khi cần ghi một điều không muốn cho người ngoài đọc được. Cô đọc chậm rãi, môi mấp máy đếm từng chấm: chuỗi ký hiệu ấy không nói về số lượng. Nó nói về một vị trí — ngăn thứ ba từ dưới lên, phía sau lớp lót, bên tay trái khi mở rương. Nói cách khác: nhiều năm về trước, có một người đã dùng chính bản danh sách đóng gói của chiếc rương này để giấu đi đường tới một thứ nằm trong rương — và người viết được lối ký hiệu thương hồ ấy, theo lời bà Năm Liên, là một cô bé mới mười mấy tuổi, viết trong những ngày cuối cùng trước khi bị đưa khỏi Tây Viện.",
      "Cao Minh tự tay bẻ dấu niêm phong. Trong rương, các gói dược liệu xếp ngay ngắn theo đúng danh sách, khô và giòn sau mười mấy năm. Hắn luồn tay vào sau lớp lót phía tay trái, ở ngăn thứ ba từ dưới lên, và chạm vào một gói vải dầu mỏng, dẹt, được khâu kín bằng một đường chỉ đều đặn. Hắn rạch lớp vải dầu bằng đầu ngón tay. Bên trong là mấy tờ giấy gấp tư, giấy đã ngả màu nhưng chữ còn rõ: một bản kê viết tay bằng nét chữ thư lại, có đóng dấu triện của Giới Phòng ở cuối mỗi trang — cùng con dấu hắn vừa thấy trên bàn kiểm tra cách đây một canh giờ.",
      "Bản kê ấy là một danh sách. Cột thứ nhất là tên người — tên của những đứa trẻ được 'tiếp nhận' ở Tây Viện trong mấy năm liền, đứa nhỏ nhất mới lên sáu. Cột thứ hai ghi tuổi và quê quán — hai cột ấy chữ thường, hắn đọc được. Cột thứ ba ghi những ký hiệu hắn không đọc nổi: không phải lối thương hồ, Thu Nguyệt ghé mắt vào cũng lắc đầu — đó là lối ghi riêng của nhà này, và đêm nay không ai trong kho thuốc đọc được nó. Trang cuối cùng, kẹp riêng như phụ lục, là bản sao một tờ lệnh chuyển đi cũ: lệnh đưa một cô gái từ Tây Viện về biệt thự Long Hải để 'dưỡng bệnh', có đủ chữ ký, đủ triện — con đường của chính nàng, được ghi lại bằng giấy tờ, từng chặng một. Đây là mảnh thứ nhất của cuốn Sổ mà nàng đã xé ra và giấu đi khắp nơi khi còn là một đứa trẻ — không phải phép thuật, không phải bùa chú. Là bằng chứng. Là tên người, ngày tháng, và con dấu của chính những kẻ đã làm việc ấy.",
      "Cao Minh không đọc hết ngay tại chỗ. Hắn nhìn Thu Nguyệt đang đứng chết lặng nhìn danh sách những cái tên — có thể trong đó có những cái tên cô từng biết mặt. Hắn gấp các tờ giấy lại theo đúng nếp gấp cũ, bọc lại trong vải dầu, và cất vào trong áo, sát ngực. Chiếc rương không niêm lại được. Từ giờ, nó là một cái đồng hồ đếm ngược khác: Khi có người phát hiện dấu niêm đã bị bẻ, căn nhà này sẽ biết có kẻ đã lấy được thứ nó giấu kín nhất. Nhưng đến lúc ấy — nếu mọi việc đúng kế — thì người và bằng chứng đều đã ở ngoài cổng."
    ],
    "dialogue": [
      {
        "speaker": "Lê Thu Nguyệt",
        "text": "Thưa ông, dòng này… dòng này không phải kê thuốc đâu. Sơn tra khô thì trị bệnh gì cho cô được? Mà ký hiệu số lượng của nó… em chạy việc ở bến Chợ Lớn hai năm, em nhận ra: đây là ký hiệu ghi chỗ, không phải ghi cân. Ngăn thứ ba… phía sau lớp lót… bên tay trái. Thưa ông, là có người giấu đồ trong rương, rồi ghi lại chỗ giấu bằng chính tờ danh sách này."
      },
      {
        "speaker": "Cao Minh",
        "text": "Người viết tờ danh sách này năm ấy bao nhiêu tuổi?"
      },
      {
        "speaker": "Lê Thu Nguyệt",
        "text": "Dạ… bà Năm Liên nói, hồi rương này đóng ở Tây Viện, cô chủ mới mười một, mười hai. Thưa ông, một đứa nhỏ mười mấy tuổi mà đã biết… biết giấu một thứ như vầy, và viết ra được một tờ giấy mà mười mấy năm sau đọc lại vẫn dẫn tới nơi…"
      },
      {
        "speaker": "Cao Minh",
        "text": "Nàng không giấu đồ chơi. Nàng giấu bằng chứng — theo một lối chữ bổn tọa đọc không thông, phải nhờ một cô hầu đọc hộ. Mười mấy tuổi đã biết nhà này sẽ chối, bèn để giấy lại cho một người chưa từng gặp. Giữ chặt tờ danh sách của ngươi."
      },
      {
        "speaker": "Lê Thu Nguyệt",
        "text": "Thưa ông, trong danh sách này… em đọc mấy cái tên đầu. Có đứa mới sáu tuổi. Sáu tuổi, thưa ông. Em xin ông — ông mang được tờ này ra ngoài, thì mang. Để ở đây, sớm muộn họ cũng đốt hết."
      }
    ],
    "choices": [
      {
        "id": "read_now",
        "text": "Đọc kỹ bản kê ngay tại chỗ, ghi nhớ từng cột, từng con dấu — bằng chứng phải được hiểu trước khi được mang đi.",
        "next": "lh_ngoc_chi_keepsake",
        "effects": {
          "cluesHuaGiaDelta": 3
        }
      },
      {
        "id": "seal_first",
        "text": "Niêm phong gói giấy vào trong áo ngay, không đọc thêm — đêm nay thời gian quý hơn sự tò mò.",
        "next": "lh_ngoc_chi_keepsake",
        "effects": {
          "cluesHuaGiaDelta": 1,
          "lanTrustDelta": 2
        }
      }
    ]
  },
  "lh_ngoc_chi_keepsake": {
    "id": "lh_ngoc_chi_keepsake",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Vật lưu của người mẹ",
    "backgroundId": "long-hai-corridor",
    "location": "Buồng nhỏ của bà Năm Liên, khu gia nhân, biệt thự Long Hải",
    "companions": [
      "ba_nam_lien"
    ],
    "narration": [
      "Bà Năm Liên đợi hắn ở buồng nhỏ của bà ở khu gia nhân — một căn buồng vừa đủ kê một chiếc chõng tre, một rương gỗ nhỏ và một bàn thờ con trên vách, nơi chỉ có một bát hương và một tấm bài vị không khắc chữ, chỉ khắc một đóa lan. Bà đóng cửa lại, cài then, rồi quỳ xuống bên chõng, lật tấm ván thứ ba từ trong ra — tấm ván bà đã lật không biết bao nhiêu lần trong mười một năm, đến mức mép gỗ mòn bóng. Dưới ván là một chiếc hộp gỗ sơn then, bọc trong hai lớp vải thô đã mục, mà bà nâng lên bằng cả hai tay như nâng một đứa trẻ đang ngủ.",
      "Bà kể, và khi bà kể tới những năm tháng ấy, giọng bà đổi khác — không còn là giọng của một người hầu đang thưa trình, mà là giọng của một người đàn bà già đang mở ra phần đời mình đã chôn kín nhất. Bà theo hầu nhị phu nhân Lâm Ngọc Chi từ ngày phu nhân về làm dâu nhà họ Hứa. Phu nhân là người thế nào, bà không cần kể dài: chỉ một điều thôi — phu nhân ký tên vào sổ sách nhà chồng luôn tự tay viết, không cho người làm viết thay, và nói tên của một người là thứ duy nhất người ấy dùng để tự xưng với trời đất. Một người đàn bà như thế, bà nói, khi bắt đầu giấu đồ vào những chỗ không ai ngờ tới, thì cả nhà nên biết là bà đã nhìn thấy trước một điều gì rất xấu đang tới.",
      "Năm Tiểu Lan lên bảy, mọi thứ đổi khác. Bà không kể hết — có những đoạn bà chỉ lắc đầu, nói người chết rồi thì để họ yên, và người sống thì chưa tới lúc phải biết. Chỉ biết, trong những ngày cuối cùng còn được gần con gái, phu nhân làm hai việc lạ. Việc thứ nhất: bà trở lại 'nơi con bé hay trốn' — chỗ trốn của trẻ con trong tòa nhà cũ ở Chợ Lớn, nơi cô bé Lan hay chui vào đọc sách — để lại trong đó một đầu mối viết bằng chính tay bà: một cái lệ để phân thật giả. Rằng sau này, hễ thứ gì xưng là của bà để lại cho con gái bà, phải có chữ của bà đi cùng dấu tay của con bé mới được tin; thiếu một trong hai, đều là giả. Ngày ấy, cuốn Sổ còn nguyên trong tay nhà họ Hứa — người sẽ xé nó ra và giấu đi từng mảnh, nhiều năm sau, là con gái bà; khi giấu, nàng giấu theo đúng cái lệ mẹ nàng gieo xuống từ ngày nàng chưa biết chữ ký là gì. Việc thứ hai: bà soạn chiếc hộp này, trao cho bà Năm Liên trong một đêm không đèn, với lời dặn thuộc lòng như thuộc kinh.",
      "Trong hộp, đặt trên một lớp vải lụa đã ngả màu, là hai thứ. Thứ nhất: một tờ giấy viết tay của chính phu nhân — chữ viết chậm, đều, đẹp, là một đoạn như thư mà như ghi chép, mở đầu bằng tên con gái mình viết đầy đủ cả họ lẫn tên. Phu nhân viết tờ này không phải để gửi ai: bà viết để làm mẫu chữ, để sau này bất cứ thứ gì xưng là do bà để lại đều phải đối chiếu với nét chữ này mà phân thật giả. Thứ hai: một vuông vải thêu nhỏ, đường kim mũi chỉ vụng về của một đứa trẻ lên sáu — một đóa lan thêu lệch, chỉ thừa thòi ra ở mặt sau. Đó là thứ đầu tiên Tiểu Lan tự tay thêu, và là dấu riêng của nàng trước khi nàng biết chữ ký là gì: thứ gì là của nàng, nàng đều đánh dấu bằng một đóa lan thêu tay.",
      "Bà đọc lại lời dặn của phu nhân, từng chữ một, bằng cái giọng của người đã giữ một câu nói suốt mười một năm như giữ một ngọn lửa trong tay áo: 'Sau này, nếu có người tới hỏi con gái tôi bằng đúng tên của nó, thì đưa hộp này cho người ấy. Và nói với người ấy: thứ tôi giấu, chỉ mở ra được khi thấy chữ của tôi đi cùng với dấu tay của con bé. Thiếu một trong hai, đừng tin.' Cao Minh nghe xong, im lặng một lúc. Người đàn bà đã mất cách đây mười một năm ấy — một người hắn chưa từng gặp, một 'con kiến' theo mọi thước đo của thế giới hắn — đã bày một cái bẫy bằng giấy và chỉ thêu, tính trước cả việc sẽ có kẻ giả mạo di vật của bà để lừa con gái bà — và cái bẫy ấy nằm yên dưới một tấm ván giường, qua mặt cả một tòa nhà đầy sổ sách, mười một năm. Bà không để lại cho con mình một món đồ. Bà để lại cho nó một cách để phân biệt thật giả giữa một rừng dối trá.",
      "Bà Năm Liên chắp tay, và lần đầu tiên trong buổi hôm ấy, bà khóc — khóc không thành tiếng, nước mắt chảy xuống theo những nếp nhăn đã sâu như rãnh. Bà nói bà giữ hộp này mười một năm, qua bốn đời quản gia, qua bao nhiêu kỳ ký giấy chứng bệnh, chưa từng hé với một ai, kể cả chính cô chủ — vì phu nhân dặn: đưa sớm thì mất sớm. Bà đã chờ một người 'hỏi tới cô bằng đúng tên của cô' — và suốt mười một năm, trong căn nhà này, không một ai gọi cô gái ấy bằng tên của nàng. Cho tới khi có một người khách lạ bước vào, gọi nàng bằng cả họ lẫn tên.",
      "Bà đẩy chiếc hộp về phía Cao Minh — nhưng không phải để hắn giữ. Bà xin hắn một việc: đêm nay, trước giờ đi, hắn hãy trao hộp này tận tay cô chủ, và nói với nàng rằng mẹ nàng đã sắp đặt việc này từ khi nàng còn nhỏ, rằng đã từng có một người tính trước để bảo vệ nàng bằng cả cái chết của mình. 'Cô nó chưa từng được ai trao cho một thứ gì của mẹ nó,' bà nói. 'Đồ của phu nhân trong nhà này, họ đốt hết từ lâu rồi. Chỉ còn cái này, vì nó nằm dưới ván giường của một bà già không ai thèm để ý.'"
    ],
    "dialogue": [
      {
        "speaker": "Bà Năm Liên",
        "text": "Dạ, thưa ông, hộp này là của nhị phu nhân gửi tôi giữ. Phu nhân mất năm cô chủ lên bảy. Trước đó ít lâu, phu nhân gọi tôi vào, trao hộp này, dặn đi dặn lại: sau này có người hỏi tới con gái tôi bằng đúng tên của nó, thì đưa. Mười một năm nay, thưa ông, tôi chờ hoài mà không thấy ai hỏi như vậy hết."
      },
      {
        "speaker": "Cao Minh",
        "text": "Trong hộp có gì, bà nói cho bổn tọa nghe trước khi bổn tọa nhận."
      },
      {
        "speaker": "Bà Năm Liên",
        "text": "Dạ, một tờ giấy chữ của phu nhân, viết tay đàng hoàng — phu nhân viết để làm mẫu chữ, phòng sau này có kẻ giả chữ của phu nhân mà lừa cô. Với một vuông vải, cô chủ thêu hồi lên sáu, thêu đóa lan, vụng lắm, chỉ thòi ra cả mặt sau. Phu nhân nói: thứ phu nhân giấu, chỉ mở khi thấy chữ của phu nhân đi cùng dấu tay của con bé. Thiếu một trong hai thì đừng tin, thưa ông."
      },
      {
        "speaker": "Cao Minh",
        "text": "Mười một năm, một lời cũng không hé. Được. Đêm nay bổn tọa trao tận tay nàng — việc ấy để bổn tọa. Còn cảm ơn thì đừng cảm ơn qua lại nữa, đêm nay không còn mấy canh giờ đâu."
      },
      {
        "speaker": "Bà Năm Liên",
        "text": "Dạ, ông đừng cảm ơn tôi. Tôi chỉ xin ông một điều: đêm nay ông trao hộp này tận tay cô, ông nói với cô là mẹ cô sắp đặt hết rồi. Cô nó lớn lên trong cái nhà này, ai cũng nói mẹ cô bỏ cô. Cô phải được biết — mẹ cô không bỏ cô ngày nào hết, thưa ông."
      }
    ],
    "choices": [
      {
        "id": "take_box",
        "text": "Nhận chiếc hộp, hứa sẽ trao tận tay nàng trước giờ đi và nói rõ từng lời bà dặn.",
        "next": "lh_nghiem_offer",
        "effects": {
          "lanTrustDelta": 2,
          "cluesHuaGiaDelta": 1
        }
      },
      {
        "id": "ask_hiding",
        "text": "Hỏi thêm cho kỹ về 'nơi con bé hay trốn' mà phu nhân nhắc — manh mối cho một ngày rất xa sau này.",
        "next": "lh_nghiem_offer",
        "effects": {
          "cluesHuaGiaDelta": 3
        }
      }
    ]
  },
  "lh_nghiem_offer": {
    "id": "lh_nghiem_offer",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Cái giá của Giới Phòng",
    "backgroundId": "long-hai-exterior",
    "location": "Sân trước biệt thự Hứa Gia, đêm trước rạng sáng",
    "narration": [
      "Đêm đã khuya, khi Cao Minh vừa từ khu gia nhân trở ra sân trước, Phạm Đình Nghiêm đã đứng đợi ở đó — một mình, không phó kiểm, không gia nhân, đứng bên gốc cây sứ già ngoài sân với cuốn sổ nhỏ cất trong tay áo. Ông ta giữ một khoảng cách vừa phải — khoảng cách của người đối diện một vị khách mà hai thanh kiếm của hắn, trong bóng tối, vẫn lơ lửng yên hai bên vai như hai vật sống. Ông ta nói ngay lý do, không vòng vo: việc ông ta sắp nói đây không nằm trong biên bản nào, và ông ta xin nói như hai người đàn ông nói chuyện phải trái với nhau, ngoài sổ sách. Đây là lần đầu tiên trong ngày, Cao Minh nghe người chủ Giới Phòng xin một điều gì đó — và hắn hiểu, chính sự ngoài-lề ấy mới là phần việc quan trọng nhất của buổi kiểm tra hôm nay.",
      "Cái giá được đưa ra rành rọt như một bản kê, đúng phong cách của người đàn ông ấy. Một: nếu Cao Minh giao nàng lại cho đoàn chuyển đi đêm nay, không chống cự, không gây chuyện, thì Giới Phòng cam kết bằng chính chữ ký của Phạm Đình Nghiêm — thứ duy nhất ông ta coi là nặng hơn vàng — rằng nàng về Tây Viện sẽ được ở một gian riêng, có người hầu hạ tử tế, thuốc thang đầy đủ, và trong vòng một năm, không một nghi lễ nào của Lục Môn được động tới nàng. Hai: toàn bộ gia nhân trong biệt thự này sẽ được gạch khỏi danh sách xét hỏi — những việc họ đã làm, những chậm trễ, những sơ suất, những lần 'không nghe lời' trong mấy ngày qua, Giới Phòng sẽ không ghi, không truy, kể cả việc của cô hầu Thu Nguyệt và bà già Năm Liên. Ba: Cao Minh ra đi với một rương vàng của nhà họ Hứa để làm lộ phí, và Giới Phòng sẽ quên khuôn mặt của hắn như chưa từng gặp.",
      "Ông ta nói tiếp, và đây là phần khiến cái giá ấy trở nên khó từ chối hơn bất cứ lời đe dọa nào: ông ta tính cho Cao Minh nghe bài toán của một người giữ sổ. Một bên là một cô gái — đã chết trên giấy, thân thể bị một thứ không ai hiểu nổi chiếm giữ từng phần, mà ngay cả Cao Minh, theo lời ông ta dò hỏi được, cũng không dám hứa sẽ chữa khỏi. Một bên là bốn mươi bảy con người trong tòa nhà này, toàn những người Cao Minh đã nhìn thấy mặt, đã biết tên — người gác, người phu, bà bếp, cô hầu — những người sẽ phải trả giá đầu tiên nếu đêm nay có chuyện, vì Giới Phòng không bắt được kẻ mạnh thì sẽ ghi sổ lên đầu kẻ yếu. Ông ta hỏi: ông cứu một người mà làm hại bốn mươi bảy người, thì trong sổ của ông, món nợ ấy ghi vào đâu?",
      "Khi nói tới rương vàng, Nghiêm làm một việc rất nhỏ mà chỉ một người làm nghề sổ sách mới làm: ông ta rút cuốn sổ tay riêng ra, mở tới một trang còn trống, và đặt nó lên bàn tay mình như một lời hứa chưa viết. 'Trang này,' ông ta nói, 'là trang tôi để dành cho việc đêm nay. Ông nhận lời, tôi ghi một cách. Ông không nhận, tôi ghi một cách khác. Nhưng dù ghi cách nào, tôi cũng ký tên tôi ở dưới. Ở Giới Phòng, không có việc gì quan trọng mà lại không có người ký tên chịu trách nhiệm — kể cả việc mua sự im lặng.'",
      "Và rồi, nhẹ nhàng như đặt một con dấu, ông ta nói thêm một câu cho thấy người đàn ông này biết nhiều hơn những gì buổi kiểm tra đã lộ ra. Ông ta nói: trong nhà này, hôm nay đã có những thứ bị động vào. Có một dấu niêm phong không còn nguyên. Có những ngăn kéo đã mở ra rồi đóng lại không đúng nếp cũ. Ông ta chưa ghi những điều ấy vào sổ. Ông ta nói: 'Tôi chưa ghi, nghĩa là chúng chưa từng xảy ra. Nhưng tôi ghi hay không, là tùy ở câu trả lời của ông đêm nay.' Đó không còn là một lời đề nghị. Đó là một bàn tay đang nắm sẵn cán cân: một bên là sự im lặng của Giới Phòng về mọi việc đã xảy ra trong ngày, một bên là sự truy cứu đến từng người một.",
      "Cao Minh đứng yên giữa sân nghe hết. Sau lưng Nghiêm, đèn trong dãy nhà chính vẫn cháy đều — từng ngọn, từng ngọn, đều đặn như mọi đêm, như thể căn nhà không hề biết rằng đêm nay là đêm cuối cùng của một thời kỳ. Hắn nhìn người đàn ông trước mặt: một kẻ ra giá bằng mạng người mà giọng nói không hề run. Cái lồng mà Giới Phòng dọn sẵn cho nàng — gian phòng riêng ở Tây Viện, thuốc thang đầy đủ, một năm bình yên có chữ ký bảo đảm — là một cái lồng êm ái thật sự, và nó không dối trá một chữ nào. Chính sự thật thà ấy mới là thứ khiến nó đáng sợ: một lời nói dối thì còn xé được; một bản kê đúng từng con số, thì chỉ có thể không ký."
    ],
    "dialogue": [
      {
        "speaker": "Phạm Đình Nghiêm",
        "text": "Thưa ông, tôi nói ngoài sổ sách, chỉ một lần này. Đêm nay, ông giao cô ta lại cho đoàn xe. Đổi lại, tôi lấy tên tôi ra mà bảo đảm: về Tây Viện, cô ta ở gian riêng, hầu hạ tử tế, một năm không nghi lễ nào động tới. Bốn mươi bảy người làm trong nhà này, việc hôm nay tôi không ghi một chữ. Còn ông, nhà họ Hứa gửi ông một rương vàng lộ phí. Ông đi đường ông, tôi làm sổ của tôi, cô ta sống yên phần cô ta. Ba bên đều có lợi, thưa ông."
      },
      {
        "speaker": "Cao Minh",
        "text": "Ngươi ra giá rất rành rọt. Chỉ có một điều ngươi tính thiếu: ngươi đang ra giá cho một người không thuộc về ngươi, với một người không có quyền bán nàng."
      },
      {
        "speaker": "Phạm Đình Nghiêm",
        "text": "Tôi không mua bán ai cả. Tôi đang dọn một con đường ít đổ máu nhất cho tất cả mọi người. Ông tưởng tượng thử đêm nay của ông đi: ông đánh ra cổng, gia nhân của tôi — những người ông đã biết tên — sẽ phải đứng ra cản ông, vì đó là việc của họ trong sổ. Ông không nỡ giết họ, tôi biết. Vậy thì sẽ có người chết vì những việc ở giữa: chết vì chen lấn, vì ngã, vì những thứ trong người họ giật họ vào lưỡi kiếm của ông. Những cái chết ấy, ông ghi vào đâu?"
      },
      {
        "speaker": "Cao Minh",
        "text": "Ha. Ngươi trói bổn tọa bằng chính chỗ bổn tọa không buồn ra tay. Kẻ giữ sổ mà cũng tìm được thứ không nằm trong sổ để mà dùng. Khá lắm — chỉ tiếc, dây ấy trói được người biết sợ. Bổn tọa thì không."
      },
      {
        "speaker": "Phạm Đình Nghiêm",
        "text": "Tôi dùng sự thật, thưa ông. Đó là nghề của tôi. Còn một sự thật nữa ông nên biết trước khi trả lời: hôm nay, trong nhà này, có dấu niêm bị động vào. Tôi chưa ghi. Ông trả lời khéo, thì tôi sẽ không bao giờ ghi. Ông trả lời dở… thì đêm nay, trước khi xe tới, tôi sẽ phải làm một cuộc điểm danh rất kỹ, bắt đầu từ kho thuốc."
      }
    ],
    "choices": [
      {
        "id": "feign_weigh",
        "text": "Gật đầu chậm rãi, nói cần nghĩ tới trước canh hai — câu giờ cho kế hoạch đêm nay, và để Nghiêm tin rằng cái giá của hắn đang có tác dụng.",
        "next": "lh_refusal",
        "effects": {
          "cluesHuaGiaDelta": 1
        },
        "route": {
          "id": "nghi_le",
          "delta": 2
        }
      },
      {
        "id": "shut_now",
        "text": "Ngắt lời ngay tại sân: đừng ra giá nữa. Có những thứ, nghe hết câu đã là một sự xúc phạm đối với người bị ra giá.",
        "next": "lh_refusal",
        "route": {
          "id": "bao_ho",
          "delta": 2
        }
      }
    ],
    "companions": [
      "pham_dinh_nghiem"
    ]
  },
  "lh_refusal": {
    "id": "lh_refusal",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Lời từ chối",
    "backgroundId": "long-hai-exterior",
    "location": "Sân trước biệt thự Hứa Gia, đêm trước rạng sáng",
    "narration": [
      "Một canh giờ sau, buổi làm việc được nhóm lại lần chót ở phòng khách, để Giới Phòng làm cho xong thủ tục sau cùng của một cuộc bàn giao: tờ biên bản. Phó kiểm đọc to từng điều khoản bằng giọng trịnh trọng — việc tiếp nhận người bệnh, việc chấm dứt trách nhiệm của biệt thự, việc xác nhận không còn khiếu nại nào giữa các bên — rồi đặt biên bản lên bàn, chừa một ô trống ở cuối trang, ghi sẵn hai chữ: người làm chứng. Theo phép của Giới Phòng, một cuộc bàn giao chỉ có giá trị khi có một người ngoài đứng ra làm chứng và ký tên. Và người ngoài duy nhất trong tòa nhà này, từ đầu đêm tới giờ, chính là vị khách mà không cuốn sổ nào ghi nổi.",
      "Nghiêm tự tay đẩy tờ biên bản về phía Cao Minh, cùng với cây bút đã chấm sẵn mực. Ông ta không nói lại cái giá ban nãy — người như ông ta không bao giờ ra giá hai lần. Ông ta chỉ nói: ký vào đây, thì mọi việc hôm nay đều thành việc đã có người chịu trách nhiệm; không ký, thì đêm nay sẽ là một đêm không ai chịu trách nhiệm cho ai cả, và những đêm như thế, trong kinh nghiệm mấy chục năm giữ sổ của ông ta, luôn là những đêm có người chết mà không ai biết ghi vào đâu. Đó là lời đe dọa cuối cùng, và cũng là lời thật lòng cuối cùng: người đàn ông này sợ sự hỗn loạn hơn sợ bất cứ điều gì, kể cả sợ cái chết.",
      "Cao Minh cầm tờ biên bản lên. Hắn đọc nó từ đầu tới cuối, chậm rãi — đọc như một người xem qua một thứ đồ chơi tinh xảo của người đời: giấy tốt, chữ đều, điều khoản kín kẽ, chỉ sai đúng một chỗ, là chúng viết về một người còn sống như viết về một kiện hàng đã kiểm kê xong. Đọc xong, hắn đặt tờ giấy xuống bàn, ngay ngắn, đúng vào vị trí cũ của nó, và đẩy cây bút trở lại phía Nghiêm bằng một ngón tay.",
      "Phó kiểm, theo thói quen của nghề, đã chấm bút định ghi lại mấy lời từ chối ấy vào biên bản — rồi ngẩng lên nhìn Nghiêm, chờ. Nghiêm khẽ lắc đầu một cái, rất nhỏ. Phó kiểm đặt bút xuống. Có những lời, Giới Phòng chỉ dám ghi vào trí nhớ: giấy mà chứa được chúng, thì chính tờ giấy sẽ thành tội chứng cho người viết. Thay vào đó, ông ta ghi vào biên bản một dòng khô khốc: 'người làm chứng từ chối ký, không nêu lý do thuộc danh mục.' Ghi xong, chính ông ta cũng nhìn dòng chữ ấy một lúc lâu — mười mấy năm giữ bút, đây là lần đầu ông ta viết một câu mà ông ta biết là không đúng sự thật, chỉ vì sự thật không có mục nào để vào.",
      "Ở cửa phòng khách, một gia nhân trẻ đang đứng hầu trà nghe được phần lớn những lời qua cánh cửa khép hờ. Đôi tay bưng khay của cậu ta — đôi tay đã run suốt từ đầu đêm vì những mệnh lệnh không phải của mình — bỗng yên lại được một lúc. Không phải vì cái mạng trong người cậu buông tha. Mà vì có một điều vừa xảy ra trong căn nhà này mà cậu chưa từng thấy trong mười mấy năm làm người ở: một người đã nói 'không' với Giới Phòng, nói rõ ràng, nói đến nơi đến chốn, và vẫn còn đứng vững ở đó sau khi nói. Cậu ta không biết điều ấy sẽ thay đổi được gì. Cậu chỉ biết, đêm nay, khi tới lượt đôi tay mình phải làm một việc gì đó, có thể chúng sẽ nhớ lại khoảnh khắc yên lại này.",
      "Căn phòng lặng đi rất lâu. Phó kiểm ngồi chết trân với cây bút ghi chép trong tay, không biết có nên ghi lại những lời vừa rồi hay không — và ghi vào mục nào. Quản gia cúi đầu nhìn xuống chân mình. Chỉ có Nghiêm là không đổi sắc mặt. Ông ta thong thả cầm lấy tờ biên bản chưa ai ký, gấp làm tư, rồi mở cuốn sổ tay riêng của mình ra — cuốn sổ thứ hai, cuốn sổ không cho ai xem — và viết vào đó mấy dòng, ngay trước mặt Cao Minh, nét chữ chậm và rõ như khắc. Viết xong, ông ta ngẩng lên, và trong một khoảnh khắc rất ngắn, hai người đàn ông nhìn nhau với một thứ gần như là kính trọng: một người vừa nhận ra đối thủ của mình cũng là kẻ có nguyên tắc, chỉ là nguyên tắc ấy nằm ở phía bên kia của thế gian.",
      "Nghiêm gấp sổ lại và đứng dậy. Ông ta nói, vẫn bằng giọng điểm việc: vậy thì Giới Phòng sẽ làm theo cách của Giới Phòng. Kể từ giờ này, biệt thự này đặt dưới sự phong tỏa của Giới Phòng cho tới khi việc chuyển đi hoàn tất: cổng khóa, người không ra vào, gia nhân về đúng vị trí trong sổ. Ông ta nói cảm ơn người khách đã ngồi dự suốt buổi, và rằng trong sổ của ông ta, ngày hôm nay sẽ được ghi là một ngày có một vị khách lạ từ chối ký tên — điều duy nhất trong mấy chục năm làm nghề mà ông ta chưa biết phải xếp vào loại nào. Rồi ông ta bước ra sân, và tiếng lệnh truyền đi dọc hành lang như một làn sóng lạnh. Ở hành lang, tiếng khóa cổng đầu tiên đã vang lên, khô và nặng."
    ],
    "dialogue": [
      {
        "speaker": "Phạm Đình Nghiêm",
        "text": "Thưa ông, biên bản đã sẵn. Ông chỉ cần ký vào ô người làm chứng. Ký, thì đêm nay mọi việc đều có người chịu trách nhiệm. Không ký… thưa ông, tôi giữ sổ mấy chục năm, tôi sợ nhất là những việc không ai chịu trách nhiệm. Những việc ấy bao giờ cũng kết thúc bằng người chết không ai ghi."
      },
      {
        "speaker": "Cao Minh",
        "text": "Bổn tọa đã đọc kỹ biên bản của ngươi. Giấy rất đẹp. Chữ rất đều. Chỉ có một điều sai: ở trang đầu, các ngươi viết về một người còn sống như viết về một món hàng đã kiểm kê xong."
      },
      {
        "speaker": "Phạm Đình Nghiêm",
        "text": "Đó là phép làm việc, thưa ông."
      },
      {
        "speaker": "Cao Minh",
        "text": "Phép của các ngươi, bổn tọa không theo. Nghe cho rõ, bổn tọa chỉ nói một lần: bổn tọa không ký vào sổ của Giới Phòng. Không làm chứng cho việc bàn giao một con người. Cái giá ngươi ra ngoài sân ban nãy, bổn tọa trả lại nguyên vẹn. Nàng không phải món nợ để các ngươi thanh toán. Nàng là một người. Muốn lấy nàng từ đêm nay, đừng qua giấy tờ nữa — qua bổn tọa."
      },
      {
        "speaker": "Phạm Đình Nghiêm",
        "text": "…Mấy chục năm giữ sổ, tôi gặp nhiều người từ chối ký. Người ta từ chối vì sợ, vì giận, vì tham. Ông là người đầu tiên từ chối vì một lý do không có trong danh mục của tôi. Tôi sẽ ghi lại ngày hôm nay, thưa ông — dù tôi chưa biết ghi vào đâu. Còn bây giờ, Giới Phòng làm theo cách của Giới Phòng: phong tỏa biệt thự. Xin ông lượng thứ."
      }
    ],
    "choices": [
      {
        "id": "warn_house",
        "text": "Quay vào trong ngay: báo cho bà Năm Liên và Thu Nguyệt biết giờ hành động không đổi, và căn nhà sắp bị khóa lại.",
        "next": "lh_lockdown",
        "effects": {
          "lanTrustDelta": 2
        }
      },
      {
        "id": "check_gate_anchor",
        "text": "Đi thẳng ra cổng, kiểm tra lại điểm neo ở cổng và nhịp canh giữ của đoàn Giới Phòng trước khi phong tỏa khép kín.",
        "next": "lh_lockdown",
        "effects": {
          "cluesHuaGiaDelta": 2
        }
      }
    ],
    "companions": [
      "pham_dinh_nghiem"
    ]
  },
  "lh_lockdown": {
    "id": "lh_lockdown",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Phong tỏa",
    "backgroundId": "long-hai-dawn-gate",
    "location": "Cổng biệt thự Hứa Gia, Long Hải",
    "entity": "entity_guard",
    "narration": [
      "Phong tỏa đến với biệt thự như một cơn thủy triều ngược: nhanh, lặng, và không gì cản được. Cổng chính được kéo khép lại và quấn hai vòng xích sắt, khóa bằng hai ổ khóa đồng của Giới Phòng; cổng phụ phía bếp bị chèn then từ bên ngoài; các cửa sổ dọc hành lang lần lượt đóng sập. Người của đoàn kiểm tra không ở lại trong nhà — họ rút ra chòi gác ngoài cổng, thắp đèn, và ngồi đó như những người thợ săn không cần vào rừng, vì khu rừng đã tự khóa mình lại. Từ giờ phút ấy, tòa nhà này không cần ai canh giữ nữa. Chính nó là nhà tù, và chính những người trong nó là khóa.",
      "Người của đoàn kiểm tra rút ra chòi gác và dãy nhà ngang ngoài cổng, nhưng trước khi rút, họ làm một việc sau cùng theo đúng bài bản phong tỏa của Giới Phòng: đi một vòng quanh tường rào, kiểm tra từng cổng, từng cửa sổ, từng chỗ tường thấp, và ghi lại tất cả vào biên bản bàn giao cho người gác đêm. Họ làm việc ấy thong thả, chuyên nghiệp, không một chút ác ý — những người thợ khóa đang kiểm tra một ổ khóa lớn trước khi ra về. Chính sự thong thả ấy làm cho buổi phong tỏa trở nên đáng sợ hơn mọi tiếng quát tháo: từ đầu tới cuối, không một ai trong đoàn này coi việc nhốt hơn bốn mươi con người trong một tòa nhà qua đêm là một việc gì khác thường. Ở ngoài cổng, mấy người phu khuân dưới bến được gọi lên phụ việc đứng túm lại ở xa, không ai chịu lại gần tường rào: tin đồn về vị 'thầy pháp' trong nhà đã đi trước họ một bước, và không người làm công nào muốn đứng gần một căn nhà mà cả Giới Phòng phải khóa lại qua đêm.",
      "Đèn trong nhà bị tắt đi từng dãy, theo đúng thứ tự ngược lại của buổi sáng: nhà ngang trước, rồi dãy bếp, rồi hành lang — chỉ còn phòng khách của đoàn kiểm tra và gian phòng trong cùng là sáng đèn. Gia nhân được lệnh về phòng: tiếng cửa đóng vang lên khắp nhà, không phải từng cái một như mọi đêm, mà gần như cùng một lúc, như một tiếng vỗ tay khổng lồ bằng gỗ. Cao Minh đứng giữa sân trong, nghe căn nhà tự khép mình lại, và cảm nhận qua thần niệm cái mạng lưới vô hình đang căng lên: các điểm neo giật đều hơn, mạnh hơn — căn nhà vừa được lệnh siết chặt, và nó đang vâng lời theo cái cách mà nó vâng mọi mệnh lệnh: hoàn toàn, im lặng, không một chút do dự của con người.",
      "Cao Minh đếm lại số người trong sổ điểm danh khi tiếng chuông cuối dứt: bốn mươi bảy người, không thiếu một ai. Bốn mươi bảy con người bị khóa lại trong một tòa nhà cùng với thứ đang sống trong người họ — và trong số bốn mươi bảy người ấy, chỉ có ba người biết rằng đêm nay, tòa nhà này sẽ mất đi thứ quý nhất nó từng giữ.",
      "Ở cổng chính, người gác Sáu bị đưa ra đứng gác bên trong cánh cổng đã xích — vị trí danh dự của một buổi phong tỏa, và cũng là vị trí của một con tin. Khi Cao Minh đi ngang qua để xem xét cổng, anh ta đang đứng thẳng như một pho tượng, hai tay buông xuôi, mắt trắng dã nhìn thẳng vào khoảng không — thứ trong người anh ta đang cầm quyền hoàn toàn, không cần giấu giếm nữa vì trong nhà này không còn ai ngoài để mà giấu. Cái cảnh ấy chỉ kéo dài mấy nhịp thở: rồi đôi mắt anh ta chớp một cái, rất khẽ, và trong một khoảnh khắc ngắn ngủi, ánh nhìn của chính anh ta trở về — nhìn Cao Minh, nhận ra hắn, và khẩn cầu không thành tiếng. Rồi sự trắng dã lại phủ xuống như mặt nước khép lại. Cao Minh gật đầu với anh ta rất nhẹ, một cái gật đầu dành cho người đàn ông bên trong, không phải cho thứ đang đứng gác.",
      "Thu Nguyệt tìm tới hắn ở góc sân tối, bước chân nhẹ như mèo, mang theo tin tức mà cô đổi bằng cách lén nghe ở cửa phòng khách: đoàn xe sẽ tới sớm hơn dự kiến nếu đường khô; Nghiêm đã cho người về Tây Viện báo trước; và quan trọng nhất — bà Năm Liên sai cô nhắn một câu: 'Bà già này vẫn còn ở đúng vị trí của bà.' Còn Tiểu Lan, qua cái mạng đang siết chặt trong người, đã cảm nhận được lệnh phong tỏa trước cả khi xích cổng khép lại; nàng sai Thu Nguyệt nói lại đúng bốn chữ: 'Nó đang siết lại.' — và thêm một câu của riêng nàng, câu khiến Cao Minh đứng yên thêm một lúc giữa sân tối: 'Ngài đừng vì tôi mà chậm tay.'",
      "Trong dãy cửa sổ đã tối om của khu nhà chính, chỉ còn hai ô cửa sáng đèn: phòng khách của đoàn kiểm tra ở phía trước, và — cách hai dãy hành lang — ô cửa nhỏ của gian phòng trong cùng. Cao Minh nhìn ô cửa ấy một lúc. Rồi hắn quay đi, bước tiếp vòng tuần cuối, và nhẩm lại trong đầu từng bước chân từ ô cửa ấy ra tới cổng: mười bảy bước trong phòng, một hành lang, một sân trong, một dãy bếp, một khoảng sân trước — và hai vòng xích sắt.",
      "Cao Minh đi một vòng quanh tường rào trong bóng tối, đếm lại những gì một vòng phong tỏa đã thay đổi: cổng chính hai xích, cổng bếp chèn ngoài, tường phía đông cao hai thước có mảnh chai, tường phía sau giếng thấp hơn một đoạn vì đất bồi — điểm yếu duy nhất của vòng vây, và cũng là nơi hắn đã tính từ trước. Hắn thử đặt một bàn tay lên sợi xích cổng: lạnh, chắc, và rung rất nhẹ theo một nhịp mà người thường không cảm được — sợi xích này, qua ổ khóa, qua cánh cổng sắt, cũng đã thành một phần của cái mạng đang giữ cả nhà. Hắn rút tay về. Mọi thứ đã vào vị trí của nó, kể cả hắn. Giờ chỉ còn chờ nhịp chuông điểm danh cuối cùng của đêm — và sau nhịp chuông ấy, một khoảng lỏng ngắn ngủi mà cả hắn lẫn căn nhà đều biết là có thật."
    ],
    "dialogue": [
      {
        "speaker": "Lê Thu Nguyệt",
        "text": "Thưa ông, bà Năm Liên nhắn: bà vẫn ở đúng vị trí của bà, ông đừng lo phần trong này. Còn cô… cô biểu em nói lại với ông: nó đang siết lại. Và cô nói thêm một câu nữa, em không dám bớt chữ nào: ngài đừng vì tôi mà chậm tay."
      },
      {
        "speaker": "Cao Minh",
        "text": "Ngươi về nói với nàng: bổn tọa nghe rõ cả hai câu. Câu sau, bổn tọa không vâng theo được. Tay của bổn tọa chậm hay nhanh là việc của bổn tọa — chưa tới lượt nàng phải lo thay."
      },
      {
        "speaker": "Người gác",
        "text": "Ông… ông Cao… cổng… xích… hai vòng… tay tôi… nó khóa… nó không cho tôi… mở…"
      },
      {
        "speaker": "Cao Minh",
        "text": "Sáu. Đứng yên đó. Cổng để bổn tọa lo — tội mở cổng không tới lượt ngươi gánh."
      }
    ],
    "choices": [
      {
        "id": "calm_lan",
        "text": "Tới phòng nàng ngay: trấn an nàng bằng chính giọng nói của mình và nói rõ giờ đi đêm nay.",
        "next": "lh_servants_choose",
        "effects": {
          "lanTrustDelta": 3
        }
      },
      {
        "id": "test_chain",
        "text": "Thử sợi xích cổng một lần nữa cho chắc — đo xem cái mạng giữ cổng chặt tới đâu và lỏng ra vào lúc nào.",
        "next": "lh_servants_choose",
        "effects": {
          "cluesHuaGiaDelta": 2,
          "lanMaterInfluenceDelta": 1
        }
      }
    ]
  },
  "lh_servants_choose": {
    "id": "lh_servants_choose",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Những bàn tay chậm lại",
    "backgroundId": "long-hai-exterior",
    "location": "Sân trong biệt thự Hứa Gia, Long Hải",
    "companions": [
      "npc_porter"
    ],
    "narration": [
      "Buổi phong tỏa có một vòng tuần tra chót trước giờ điểm danh: người của đoàn kiểm tra đi dọc hành lang đọc tên từng phòng, quản gia theo sau điểm lại gia nhân theo sổ. Đáng lẽ vòng tuần ấy phải xong trong một khắc. Nó kéo dài gần gấp đôi — và nguyên do nằm ở những sự chậm trễ nhỏ đến mức không một biên bản nào ghi nổi. Ở cổng, phu khuân Thới kéo vòng xích thứ hai chậm như kéo một gánh nước đầy, và khi khóa lại, có một mắc xích ở phía sau trụ cổng — đúng chỗ khuất mắt người đứng ngoài — đã không móc vào nhau. Đôi tay ông ta run đến mức sợi xích hát lên khe khẽ, vậy mà ông ta vẫn làm xong việc, cúi đầu, và lùi về vị trí của mình như không có gì xảy ra.",
      "Ở nhà bếp, bà bếp — người đàn bà đã nếm mỗi món ăn hai lần suốt bao nhiêu năm theo lệnh của cái mạng trong nhà — bưng một khay bát ra sân thì vấp phải bậc thềm mà bà đã bước qua mười mấy năm không hề vấp. Khay bát vỡ tan trên nền gạch, mảnh sành văng khắp lối đi hẹp nhất giữa bếp và nhà ngang. Bà quỳ xuống nhặt, nhặt rất chậm, miệng rối rít xin lỗi, và cứ nhặt được một mảnh lại đặt chéo qua đường đi thay vì dọn sang một bên. Ai muốn chạy qua lối ấy đêm nay sẽ phải chậm lại mà tránh mảnh vỡ — hoặc dẫm lên và kêu thành tiếng. Bà bếp không nhìn ai khi làm việc ấy. Bà chỉ làm, như một người vừa nhớ ra rằng đôi tay mình, trước khi thuộc về cái mạng kia, đã từng thuộc về mình.",
      "Người gánh nước để quên hai thùng nước đầy ở khúc quanh hẹp nhất của hành lang nhà ngang — quên một cách rất đúng chỗ. Cô hầu có đôi tay hay vươn ra như móng vuốt, người mà cái mạng vẫn mượn mặt mỗi khi nó muốn hiện hình trong phòng cô chủ, được giao việc gấp đống vải liệm cho đêm nay: cô gấp chậm hơn lệ thường một nửa, và gấp mặt trái ra ngoài — một lỗi mà khi tới giờ dùng, người ta sẽ phải tháo ra gấp lại, mất thêm một khắc quý giá. Cô không biết vì sao mình gấp như thế. Hỏi cô, chắc cô sẽ khóc. Nhưng đôi tay cô, trong một khoảnh khắc hiếm hoi, đã tự quyết định thay cho cô.",
      "Cao Minh đi qua sân trong giữa những việc ấy và không dừng lại một lần nào. Hắn không cảm ơn, không gật đầu, không để lại một dấu hiệu nào cho thấy hắn đã trông thấy — vì hắn biết, trong căn nhà này, sự biết ơn cũng có thể bị ghi vào sổ. Nếu Giới Phòng biết những con người này đã chậm lại vì ai, thì món nợ của họ sẽ được tính ngay trong đêm nay. Cách duy nhất để che cho họ là đi qua như một người khách dửng dưng, để những hành động ấy mãi mãi vô danh trong mọi cuốn sổ. Hắn chỉ ghi hết vào trí nhớ của chính mình, nơi không một con dấu nào chạm tới được. Đi ngang góc sân, ánh kiếm lơ lửng sau lưng hắn lướt qua mặt một người phu đang đứng nép — người ấy giật mình lùi hẳn một bước, rồi vội cúi đầu sát đất: mấy ngày rồi, người trong nhà này vẫn chưa ai quen được với hai thanh kiếm bay không tiếng động ấy, và nỗi sợ của họ, ít ra, vẫn là nỗi sợ của người thật.",
      {
        "text": "Những cái chậm ấy không hề rời rạc như chúng có vẻ. Đêm ở gian bếp sau, một lời thề đã được nói thành tiếng trước ba con người — và lời thề ấy đã đi theo những con đường chỉ người trong nhà mới biết, từ miệng người này sang tai người khác. Cho nên tối nay, mỗi lần một người chậm tay ở phía đông, thì ở phía tây có một tiếng động đúng lúc kéo mắt người ta đi: một cái nồi đặt mạnh xuống bếp, một tràng ho, một gánh nước đổ ào ra sân. Phó kiểm bực vì nhà này 'lóng ngóng lạ' — ông ta không biết mình đang nghe tiếng một lời thề làm việc.",
        "if": "councilOath"
      },
      {
        "text": "Những cái chậm ấy cũng không cần ai điều khiển. Đêm ở gian bếp sau, không ai thề một lời nào: mỗi người chỉ giữ phần việc của riêng mình, không biết việc của người bên cạnh. Cho nên tối nay, sự phối hợp đi bằng những dấu hiệu không tiếng: một ngọn đèn ở cửa sổ phía đông hạ xuống hai lần là vòng tuần đã rẽ; một chiếc khăn trắng vắt trên tay nắm cửa bếp là lối đi đang trống. Ai bị gọi lên hỏi, người ấy cũng chỉ khai được phần của mình — vì trong đầu mỗi người, thật sự không có phần của người khác để mà khai.",
        "if": "councilQuiet"
      },
      "Và ở lối ra giếng sau — con đường ít ai để ý nhất của tòa nhà — người quét sân già đã quét đi quét lại cùng một lối đi đến lần thứ ba trong buổi tối hôm ấy. Ông quét sạch lá, sạch sỏi, sạch cả những mảnh sành lạc từ khay bát vỡ của bà bếp, để lại một lối đi bằng phẳng và im lặng dưới chân người nào sẽ đi qua đó trong đêm. Ông không biết ai sẽ đi, cũng không biết đi lối nào; ông chỉ biết rằng mười mấy năm nay, hễ nhà này sắp có việc lớn, là tự nhiên tay ông lại muốn quét cái lối ấy cho sạch. Có những sự giúp đỡ trong căn nhà này không có người ra lệnh, không có người nhận — chúng chỉ đơn giản xảy ra, như nước chảy về chỗ trũng, như một thứ bản năng của những con người đã bị lấy đi gần hết mọi thứ, chỉ còn chừa lại mỗi việc tử tế là chưa bị lấy mất.",
      "Khi đi ngang qua góc bếp tối, hắn ngửi được mùi khói nhang rất nhẹ lẫn trong mùi tro lạnh: ở bếp Táo Quân, ai đó vừa thắp thêm một nén nhang mới — có lẽ là cô hầu nhỏ, cầu cho một đêm mà cô không biết rõ sẽ ra sao. Hắn không dừng lại. Một nén nhang, một mắc xích không khép, một khay bát vỡ — hắn đếm chúng như đếm những thứ vũ khí kỳ lạ nhất mà hắn từng thấy được huy động cho một cuộc ra đi: không gươm, không trận, chỉ toàn những giây khắc bị đánh cắp.",
      "Mỗi cái chậm ấy đều có giá của nó, và cái giá ấy Cao Minh cảm được qua thần niệm: một cơn đau đầu như búa bổ, một khoảng ký ức nhỏ nữa vừa bị rút đi, một đêm nữa không ngủ được vì tiếng thở sau vách. Họ biết giá ấy. Họ vẫn trả — vì một cô gái mà hầu hết trong số họ chưa từng được nói chuyện tử tế, và vì một người khách lạ, trong mười mấy năm, là người đầu tiên gọi họ bằng tên thay vì bằng phận sự. Đêm nay, khi hắn hành động, những con người này sẽ không ra theo hắn. Họ ở lại — ở lại với căn nhà, với sổ sách, với những gì sẽ tới sau khi hắn đi. Hắn không mang theo được người ở lại. Việc ấy, cũng không ai đòi ở hắn.",
      "Khi vòng tuần tra cuối cùng cũng khép lại và phó kiểm quay về phòng khách, có phần bực dọc vì 'gia nhân nhà này hôm nay lóng ngóng lạ', Cao Minh đứng ở góc sân tối nhìn lên dãy cửa đã đóng của khu gia nhân. Trời chưa điểm chuông cuối. Mọi thứ đã sẵn sàng theo cái cách sẵn sàng duy nhất mà căn nhà này cho phép: rời rạc, câm lặng, và không ai ghi công cho ai."
    ],
    "dialogue": [
      {
        "speaker": "Người phu",
        "text": "Dạ… thưa ông… xích con khóa xong rồi. Hai vòng, chắc lắm. Ông… ông đi đường ông, đừng có… đừng có lo cái cổng này quá. Xích sắt thì nó cũng có mắc yếu của nó, thưa ông."
      },
      {
        "speaker": "Cao Minh",
        "text": "Thới. Bổn tọa nghe rồi. Ngươi về vị trí đi — và đêm nay, dù nghe thấy gì, cũng đừng chạy ra sân."
      },
      {
        "speaker": "Bà bếp",
        "text": "Ối giời ơi, già này lú lẫn quá, có cái khay bát cũng làm vỡ. Thưa ông, ông đi qua thì coi chừng mảnh sành, kẻo đứt chân. Lối này trơn lắm, ai đi nhanh cũng phải chậm lại thôi…"
      },
      {
        "speaker": "Cao Minh",
        "text": "Bà cứ nhặt thong thả. Đêm còn dài."
      }
    ],
    "choices": [
      {
        "id": "memorize_names",
        "text": "Ghi nhớ từng người, từng việc chậm lại ấy vào lòng — vô danh trong sổ của Giới Phòng, nhưng phải có tên trong trí nhớ của bổn tọa.",
        "next": "lh_anchor_map",
        "effects": {
          "cluesHuaGiaDelta": 2
        }
      },
      {
        "id": "silent_thanks",
        "text": "Để lại một dấu hiệu cảm ơn không lời trên đường đi — một ngọn đèn được chỉnh lại cho ngay, như một câu đáp lễ chỉ người trong nhà mới hiểu.",
        "next": "lh_anchor_map",
        "effects": {
          "lanTrustDelta": 2
        }
      }
    ]
  },
  "lh_anchor_map": {
    "id": "lh_anchor_map",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Bản đồ điểm neo",
    "backgroundId": "long-hai-corridor",
    "location": "Hành lang biệt thự Hứa Gia, đêm",
    "narration": [
      "Đã gần giờ Dần, Cao Minh đi một vòng cuối cùng — không phải bằng chân, mà bằng thần niệm trải ra khắp tòa nhà như một tấm lưới ngược lại tấm lưới đang trùm lên nó. Suốt những ngày qua, hắn đã tìm thấy từng điểm neo một: cái giếng sau nhà, nơi sợi chỉ đầu tiên chạm vào nước ngầm; bếp lửa nhà ngang, nơi một điểm neo khác uống nhiệt của bếp lửa không bao giờ tắt hẳn; từ đường, nơi các bài vị giữ một đầu của cái mạng bằng chính lòng thờ kính của con cháu; chuông cổng, nơi mệnh lệnh gõ thành tiếng mà lan đi; và cổng chính, nơi hai vòng xích đêm nay vừa khép thêm một lớp neo bằng sắt thật. Đêm nay hắn nhìn thấy tất cả cùng một lúc, nối thành một hình thù hoàn chỉnh: một cái sao năm cánh úp xuống tòa nhà, với tâm sao nằm đúng ở gian phòng trong cùng. Còn đầu kia của những sợi chỉ chạy ra khỏi tòa nhà, về hướng Chợ Lớn và xa hơn, nằm ngoài tầm nhìn của hắn: hắn biết hướng chúng chạy, không biết chúng buộc vào thứ gì. Thứ cầm đầu cái mạng này, đêm nay, vẫn chưa có tên trong đầu hắn.",
      "Luật của thứ tự, nghề phá trận của hắn đọc được như chữ của chính mình. Các điểm neo không đứng riêng: chúng chia nhau gánh nặng điều phối của cái mạng, như năm người cùng khiêng một cái kiệu. Cắt một điểm, phần gánh của nó dồn sang các điểm còn lại — và dồn về tâm, nơi nàng nằm. Cho nên nếu một ngày phải tháo CẢ cái mạng này, thứ tự duy nhất đúng là từ ngoài vào trong, từ xa tới gần: giếng trước hết — điểm xa nhất, yếu nhất; rồi bếp; rồi từ đường; rồi chuông cổng; và cổng chính sau cùng, đúng vào khoảnh khắc nàng bước qua nó. Đó là thứ tự của một cuộc vây hãm, của một đêm giật sập cả tòa nhà. Đêm nay không phải đêm đó. Đêm nay hắn cần một điều nhỏ hơn nhiều, và khó hơn nhiều: cánh cổng buông tay ra, trong khi bốn điểm neo còn lại vẫn đứng nguyên, vẫn gánh phần của chúng.",
      "Hắn dừng thần niệm lại ở điểm neo giếng sau lâu hơn các điểm khác, vì đó là điểm hắn biết rõ nhất — nơi hắn đã đứng, đã chạm vào sợi chỉ vô hình căng trên mặt nước tối. Sợi chỉ ấy đêm nay căng hơn mọi đêm: cái mạng đang dồn sức về phía tâm sao, và các điểm vòng ngoài chính là những cái van giữ cho sức ép ấy khỏi vỡ tung. Hắn ghi nhớ độ căng ấy — lát nữa, khi cuộc ra đi bắt đầu, hắn phải nhận ra ngay sợi nào đang chịu lực đến đâu, chỉ bằng cái rung đầu tiên dưới đầu ngón tay.",
      "Hắn diễn lại toàn bộ cuộc ra đi trong đầu, từng bước một, như diễn lại một ván cờ trước giờ ngồi vào bàn. Từ phòng nàng ra hành lang: mười bảy bước. Hành lang tới sân trong: qua khúc quanh có hai thùng nước để quên đúng chỗ hẹp nhất — người gánh nước đã tính phần của mình rồi. Đi ngang bếp mà không động vào điểm neo bếp: nó phải ngủ yên, vì mỗi điểm neo bị đánh thức là một hồi chuông báo động trong lòng căn nhà. Từ đường ở cánh đông cũng vậy — sợi chỉ của nó chạy thẳng về phía Chợ Lớn; chạm vào nó đêm nay là gõ cửa nhà chính giữa đêm. Rồi sân trước, rồi cổng. Ở cổng, điểm neo chuông và điểm neo cổng chính đã quấn vào nhau thành một cụm khóa: chuông là cái miệng ra lệnh, đôi đèn là đôi mắt điều phối, sợi xích sắt là thân của điểm neo cổng, gánh toàn bộ sức nặng của cụm. Cụm ấy có biên: nó chỉ gánh sân trước, hàng hiên và cánh cổng — phần tải của cụm dừng ở ranh sân trong. Cho nên cụm tháo riêng được: chuông trước, đèn sau, xích sau cùng thật chậm — cho sức nặng tan ra ngoài thay vì giật ngược vào nàng. Mỗi bước một nhịp chuông trong đầu hắn. Sai một nhịp, cái giá không phải do hắn trả.",
      "Có một điều hắn quyết định giữ cho riêng mình: toàn bộ bản đồ này. Không nói hết cho Thu Nguyệt, không nói hết cho bà Năm Liên, và chỉ nói với nàng phần nàng cần biết: khi đi, nàng nắm tay áo hắn và bước đều, còn lại để hắn. Không phải vì hắn không tin họ. Mà vì cái mạng kia có thể nghe qua tai của chính những người bị nó cầm giữ, kể cả khi họ không hề muốn phản bội ai. Một kế hoạch chỉ một người biết hết là kế hoạch kẻ địch không moi ra được từ bất cứ ai. Giới Phòng giữ hai cuốn sổ; hắn giữ một bản đồ không nằm trên giấy.",
      "Cuối vòng tuần, hắn ghé cửa phòng nàng, trên tay là chiếc hộp gỗ nhỏ bà Năm Liên trao kèm lời nhờ cậy tha thiết. Hắn gõ rất khẽ, hai tiếng. Cửa mở hé: nàng đã thức, áo khoác chỉnh tề như người chờ sẵn. Hắn đưa hộp bằng hai tay; nàng đón bằng hai tay, đầu ngón tay chạm vào tay hắn — lạnh, run rất nhẹ. Nàng không hỏi trong hộp có gì. Của mẹ để lại — chỉ cần biết nó đã về đúng tay mình là đủ.",
      "Gần cuối vòng tuần thần niệm, hắn dừng lại lâu nhất ở tâm sao — gian phòng trong cùng. Nàng chưa ngủ. Nàng ngồi trên giường trong bóng tối, cuộn chỉ thêu đếm ngày đã quấn quanh cổ tay, chiếc hộp của mẹ đặt trên gối, hai tay đặt yên trên hộp như người giữ của. Qua cái mạng đang căng trong nhà, nàng cảm được một sự chú ý rất lớn đang dừng ở phòng mình — và lần này nàng không sợ, vì nàng đã học được cách phân biệt: cái mạng nhìn nàng như nhìn một món đồ trong kho; còn sự chú ý này thì khác. Nàng ngẩng đầu lên trong bóng tối, về đúng hướng hắn đang đứng cách hai dãy hành lang, và gật đầu một cái rất nhẹ, như đáp lễ.",
      "Cao Minh thu thần niệm về. Trong đầu hắn, bản đồ đã khép kín, thứ tự đã thuộc lòng, từng bước chân đã được đếm. Phần còn lại của đêm nay không còn là việc tính toán nữa. Hắn ngồi xuống ở đầu hành lang, hai thanh kiếm lơ lửng yên hai bên như hai con thú đã ngủ, và chờ — chờ nhịp chuông điểm danh cuối cùng vang lên, chờ khoảng lỏng ngắn ngủi sau nhịp chuông ấy, chờ một cô gái mười tám tuổi tự bước ra khỏi căn phòng đã giam nàng nửa đời người."
    ],
    "dialogue": [
      {
        "speaker": "Cao Minh",
        "text": "Năm điểm neo, một cái mạng, một trái tim ở giữa. Đêm nay bổn tọa chỉ tháo cụm khóa ở cổng: chuông, đèn, xích sau cùng. Nhà còn nguyên. Chỉ cánh cổng buông tay."
      },
      {
        "speaker": "Lê Thu Nguyệt",
        "text": "Thưa ông, em bưng trà lên cho ông. Ông… ông ngắm gì ngoài hành lang mà lâu vậy? Cả nhà ngủ hết rồi, chỉ còn ông với cô là thức thôi."
      },
      {
        "speaker": "Lê Thu Nguyệt",
        "text": "Thưa ông, ông nghe em: chuông điểm danh cuối cùng mà dứt tiếng, cả nhà phải im hết, người của Giới Phòng ngoài cổng cũng dãn ra — lệ nhà này bao nhiêu năm vẫn vậy, sau chuông là khoảng lặng chừng một tuần hương. Muốn làm gì, thì làm trong khoảng ấy, thưa ông."
      },
      {
        "speaker": "Cao Minh",
        "text": "Một tuần hương. Đủ. Ngươi nhớ thêm một điều: chuông dứt, ngươi đưa bà Năm Liên về buồng, đóng cửa lại, dù nghe gì cũng không mở. Phần còn lại, ngươi không cần biết — không biết là phúc của ngươi đêm nay."
      },
      {
        "speaker": "Lê Thu Nguyệt",
        "text": "Dạ… em nhớ. Thưa ông, trà em để đây. Ông uống cho ấm. Đêm nay… em chỉ xin ông một điều: ông đưa được cô đi cho trót."
      }
    ],
    "choices": [
      {
        "id": "rehearse",
        "text": "Diễn tập thầm một lượt chót trong đầu theo nhịp chuông của nhà — từng điểm neo, từng bước chân, từng khắc giờ.",
        "next": "lh_lan_farewell",
        "effects": {
          "cluesHuaGiaDelta": 2
        }
      },
      {
        "id": "rest_breath",
        "text": "Ngồi dưỡng thần một canh giờ trước giờ hành động — thân phải tĩnh thì kiếm mới không sai một phân.",
        "next": "lh_lan_farewell",
        "effects": {
          "partyHealthDelta": 3
        }
      }
    ]
  },
  "lh_lan_farewell": {
    "id": "lh_lan_farewell",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Lần cuối trong phòng",
    "backgroundId": "tieu-lan-room",
    "location": "Phòng Hứa Tiểu Lan, biệt thự Long Hải",
    "narration": [
      "Theo lệnh chuyển đi, nàng được phép về phòng mình 'nghỉ ngơi' mấy canh giờ chót trước khi xe tới — phép lịch sự cuối cùng của một thủ tục giết người bằng giấy: để cho người sắp bị đưa đi được nằm lại trên chiếc giường của mình một lần chót. Thu Nguyệt đưa nàng về tới cửa rồi lui ra, vì nàng xin được ở một mình. Nhưng nàng không nằm. Khi Cao Minh bước vào, nàng đang đi chậm rãi quanh căn phòng nhỏ ấy — căn phòng nàng đã ở mười một năm, từ khi còn là một đứa trẻ bị đưa từ Tây Viện sang — và chạm tay, rất nhẹ, vào từng thứ một, như người ta chào từ biệt từng người quen trong một buổi tiễn đưa không có ai khác dự.",
      "Căn phòng còn những thứ nhỏ hơn mà nàng cũng chào từng thứ một: chiếc lược gỗ bà Năm Liên vẫn chải tóc cho nàng mỗi sáng, mặt gương đồng đã mờ chỉ còn soi được một cái bóng nhòe, bình hoa khô trên bậu cửa sổ mà không ai nhớ đã đặt từ năm nào, và tấm tranh thêu phong cảnh treo trên vách — một bức tranh thêu núi sông của người thầy dạy chữ gửi vào, là 'thế giới bên ngoài' duy nhất nàng được ngắm trong mười một năm. Nàng ngắm bức tranh ấy lần cuối, khẽ cười: núi trong tranh nàng thuộc từng nét, còn núi thật ngoài kia nàng chưa từng thấy. Đêm nay, có lẽ nàng sắp được thấy — dù chỉ là một vệt tối chạy qua bên ngoài một con đường tối hơn.",
      "Nàng chạm vào chiếc giường gỗ: nơi nàng đã nằm nghe tiếng thở sau vách suốt thời con gái, nơi nàng học được cách từ chối những mệnh lệnh không thành tiếng và trả giá cho từng lần từ chối bằng những mảnh trí nhớ rơi đi như lá rụng. Nàng chạm vào chồng sách sờn gáy trên bàn: sách của một người thầy dạy chữ đã khuất gửi vào cho nàng qua tay bà Năm Liên, là cửa sổ duy nhất của nàng ra thế gian trong mười một năm — nàng không mang theo, chỉ vuốt gáy sách một lượt rồi nói, nửa như nói với sách: 'Ở đâu cũng có sách. Còn mười một năm ở đây thì chỉ có ở đây thôi.' Nàng chạm vào dãy chén thuốc xếp theo giờ trên khay. Có hai thứ thuốc trong đời nàng mà người ngoài nhìn vào ngỡ là một. Một là chén thuốc đắng buổi tối — chén đồng nhỏ, đắng như mực — thứ thuốc nuôi phần đang sống thay nàng trong thân thể; dứt nó ra, cơn đau xé gân sẽ ập tới như cái đêm ở Tây Viện năm xưa. Chén ấy tối nay nàng vẫn uống, như mọi tối: không phải vì vâng lời căn nhà này, mà vì sống là việc của chính nàng. Hai là chén giờ lễ — thứ thuốc người ta bắt nàng uống trước mỗi buổi chầu ở từ đường, mỗi đợt kiểm tra, và đêm nay là trước giờ xe tới: uống vào để ngồi cho yên, mắt cho lờ đờ, miệng cho khỏi mở. Chén giờ lễ đêm nay đã đặt sẵn trên khay, chờ giờ của nó. Nàng nhìn nó một lúc — rồi, bằng động tác bình thản nhất trong buổi tối hôm ấy, nàng lật úp nó xuống khay. Từ nay, không còn giờ lễ nào nữa.",
      "Có một lúc, nàng mở cánh cửa sổ — cửa sổ có chấn song, mở ra chỉ được một gang tay, là khoảng trời duy nhất căn phòng này có. Tiếng sóng biển vọng vào rõ hơn hẳn: Long Hải đêm nay biển động nhẹ, sóng vỗ vào ghềnh đá dưới chân đồi theo một nhịp chậm và đều, hoàn toàn khác với mọi nhịp điệu trong căn nhà này — nhịp của một thứ không nghe lệnh ai, không thuộc về sổ sách nào, đã vỗ như thế từ trước khi có nhà họ Hứa và sẽ còn vỗ sau khi nhà họ Hứa không còn nữa. Nàng đứng nghe sóng một lúc, rồi nói, như nói với chính mình: 'Mười một năm, tôi nghe tiếng sóng này mỗi đêm. Nó là thứ duy nhất trong đời tôi chưa từng bị ai ra lệnh phải im.'",
      "Bên cửa sổ là khung thêu căng sẵn, đóa sen thêu dở vẫn còn dang dở ở cánh thứ ba, kim còn găm trên vải. Nàng đứng nhìn khung thêu một lúc lâu nhất. Rồi nàng tháo khung ra, không mang theo đóa sen — nàng chỉ rút lấy cuộn chỉ đỏ chạy dọc mép vải: cuộn chỉ thêu đếm ngày của nàng, hàng trăm nút thắt, mỗi nút là một ngày nàng còn nhớ được mình đã sống, và những khoảng trống giữa các nút là những ngày đã bị lấy mất mà nàng chỉ biết đếm bằng sự thiếu vắng của chúng. Nàng quấn cuộn chỉ quanh cổ tay mình, thắt một nút chót — nút thắt của ngày hôm nay, ngày nàng còn nhớ đầy đủ: ngày nàng bị ký giấy khai tử, ngày nàng tự xưng tên mình, ngày nàng sắp bước ra khỏi căn phòng này bằng chính đôi chân của mình.",
      "Nàng hỏi hắn một câu rất nhỏ, câu hỏi của một người sắp bước ra một thế giới mà mình chỉ biết qua sách vở và qua lời kể của gia nhân: ngoài cổng kia, có ồn lắm không? Hắn thành thật: bổn tọa mới qua cái trấn dưới chân đồi này đúng một lần, lúc chạng vạng — tên các thứ tiếng ngoài ấy, bổn tọa gọi chưa được một nửa. Nàng bật cười khẽ, rồi kể cho hắn nghe như kể một bài học thuộc lòng: sáng là tiếng chợ cá ở bến, ghe về thì ồn nhất; trưa là tiếng mõ, tiếng rao hàng rong; tối là tiếng chó sủa theo người qua đường, tiếng xe bò kẽo kẹt trên đường cái quan. Mười một năm nghe người làm kể, nàng thuộc cái trấn này như thuộc một cuốn sách — còn hắn, kẻ vừa đi qua nó bằng đôi chân của mình, lại là người không biết gì cả. 'Để mai này,' nàng nói, 'tôi chỉ cho ngài nghe. Tiếng nào là tiếng gì, tôi phân biệt được hết.'",
      "Trước khi ra khỏi phòng, nàng làm một việc sau cùng: nàng dọn lại căn phòng cho ngay ngắn. Chăn gấp lại, gối vuốt phẳng, dãy chén thuốc xếp lại ngay ngắn — trừ chiếc chén giờ lễ vẫn nằm úp trên khay — khung thêu dựng lại bên cửa sổ như cũ. Cao Minh đứng nhìn và hiểu: đây là thói quen của một người cả đời sống trong cảnh bị người ta săm soi, rằng mình ra sao không quan trọng bằng việc mình để lại sau lưng cái gì cho người ta nói. Rồi nàng làm một việc chưa từng làm trong mười một năm ở căn phòng này: nàng bước ra và để nguyên cánh cửa mở sau lưng mình. Không khép, không cài then, không xin phép. Cánh cửa mở toang ra hành lang tối — cánh cửa đầu tiên trong đời nàng tự ý mở và tự ý bỏ ngỏ."
    ],
    "dialogue": [
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài, ngài xem, tôi ở đây mười một năm, mà đồ đạc mang theo được chỉ có một cuộn chỉ. Người ta mà biết, chắc họ cười: cô chủ nhà họ Hứa ra đi với một cuộn chỉ đỏ quấn quanh tay."
      },
      {
        "speaker": "Cao Minh",
        "text": "Cười thì mặc họ. Mang theo được là được — nặng nhẹ, ra khỏi cổng rồi tính."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Còn đóa sen thêu dở, tôi để lại. Ở đây mười một năm, tôi thêu mãi không xong một đóa sen. Ra ngoài kia rồi… thưa ngài, ra ngoài kia, nếu tôi còn nhớ được, tôi sẽ thêu một đóa khác. Thêu từ đầu, và thêu cho xong."
      },
      {
        "speaker": "Cao Minh",
        "text": "Ừ. Đứt nút nào giữa đường, bổn tọa còn trí nhớ. Đi thôi."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài, tôi để cửa mở. Mười một năm, cửa phòng này chưa từng do tôi mở mà không có người đứng canh. Hôm nay tôi mở, và tôi không đóng lại nữa."
      }
    ],
    "choices": [
      {
        "id": "offer_frame",
        "text": "Đề nghị mang theo cả khung thêu cho nàng — đóa sen dở dang ấy cũng là một phần đời của nàng, không nên bỏ lại cho căn nhà này.",
        "next": "lh_ba_stays",
        "effects": {
          "lanTrustDelta": 2
        }
      },
      {
        "id": "honor_choice",
        "text": "Chỉ gật đầu với cuộn chỉ trên tay nàng — tôn trọng lựa chọn của nàng về thứ đáng mang theo khỏi mười một năm đời mình.",
        "next": "lh_ba_stays",
        "effects": {
          "lanTrustDelta": 1
        },
        "route": {
          "id": "tu_quyet",
          "delta": 2
        }
      }
    ]
  },
  "lh_ba_stays": {
    "id": "lh_ba_stays",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Người ở lại",
    "backgroundId": "tieu-lan-room",
    "location": "Phòng Hứa Tiểu Lan, biệt thự Long Hải",
    "companions": [
      "ba_nam_lien"
    ],
    "narration": [
      "Bà Năm Liên vào phòng khi trời đã khuya hẳn, tay ôm chiếc hộp sơn then bọc vải — chiếc hộp của nhị phu nhân mà bà đã giữ mười một năm dưới ván giường của mình. Bà đặt hộp lên giường, trước mặt Tiểu Lan, và làm một việc mà bà đã chờ mười một năm để được làm: bà mở hộp ra cho cô chủ của mình xem, ngay trước mặt nàng, bằng chính đôi tay của nàng. Tờ giấy viết tay của Lâm Ngọc Chi. Vuông vải thêu đóa lan vụng về của một đứa bé lên sáu. Tiểu Lan cầm vuông vải lên trước — đóa lan của chính mình, thêu từ một đời khác mà nàng chỉ còn nhớ được một nửa — rồi mới cầm tờ giấy của mẹ. Nàng đọc dòng đầu tiên, nơi tên nàng được viết đầy đủ bằng nét chữ của người đã sinh ra nàng, và nàng khóc — khóc lặng lẽ, đúng mực, như mọi việc nàng làm trong căn nhà này, chỉ có hai hàng nước mắt là không kìm được.",
      "Bà để cho nàng khóc một lúc, rồi mới nói điều bà tới để nói — và bà nói nó ra một cách bình thản, như người thông báo một việc đã sắp xếp xong từ lâu: bà sẽ ở lại. Không đi theo. Bà trình bày lý lẽ của mình rành rọt không kém gì người chủ Giới Phòng trình bày sổ sách của ông ta hồi ban ngày — vì bà cũng có một cuốn sổ của riêng bà, cuốn sổ của một người hầu già đã chứng kiến hết mọi việc trong căn nhà này từ đầu tới cuối. Bà nói: đêm nay cô đi, ngày mai nhà này sẽ nói với cả thế gian rằng cô chủ bệnh chết, khách lạ cướp xác, gia nhân bị ép buộc — giấy của họ sẽ viết như thế, và giấy thì đi xa hơn tiếng người. Phải có một người ở lại, một người biết hết, còn sống, còn tỉnh, để một ngày kia đứng ra mà nói: không phải vậy. Cô chủ còn sống. Tên cô là Hứa Tiểu Lan. Tôi là người đã bưng thuốc cho cô từ ngày cô đỏ hỏn.",
      "Trước khi nói chuyện ở lại, bà làm thêm một việc của người giữ nhà lâu năm: bà buộc vào cổ tay Tiểu Lan một sợi chỉ đỏ nhỏ, lấy từ chính cuộn chỉ thêu đếm ngày của nàng, và thắt một nút thật chắc. 'Cái này không phải bùa,' bà nói nhanh, như sợ cô chủ hiểu lầm mà từ chối, 'bà già này không biết bùa phép gì đâu. Đây là nút thắt của bà. Mai sau, dù cô ở đâu, cô nhìn sợi chỉ này thì nhớ: ở cái nhà này, có một bà già đã thắt nó, và bà già ấy còn sống ngày nào thì còn nói tên cô ra ngày ấy.' Một sợi chỉ đỏ nữa — ngoài những nút đếm ngày của chính nàng, đây là nút thắt đầu tiên do một bàn tay khác thắt cho đời nàng, và nó đếm không phải ngày tháng đã mất, mà là một lời hứa còn đang được giữ.",
      "Bà nói thêm phần thực tế, lạnh lùng như một người đã tính hết mọi nước — và ở phần này, bà thành người dạy hắn cách căn nhà này đếm người: điểm danh sáng mai, quản gia đọc tên theo sổ gia nhân; thiếu một cô chủ thì đã có giấy chứng tử lo liệu; thiếu một Thu Nguyệt thì còn có thể nói nó trốn theo; nhưng thiếu một bà già giữ kho thuốc và hầu hạ lâu đời nhất nhà thì đoàn kiểm tra sẽ hỏi ngay trong đêm — và hỏi là lộ. Bà ở lại, số người trong sổ vẫn đủ, câu chuyện của nhà này vẫn khép kín thêm được mấy canh giờ quý giá cho người đi đường xa. 'Giới Phòng nó trọng sổ sách,' bà nói, với một nụ cười mỏng mà Cao Minh chưa từng thấy ở bà, 'thì bà già này dùng chính sổ sách của nó mà che cho cô một đoạn đường.'",
      "Phần khó nhất là với Tiểu Lan. Nàng nắm chặt tay bà, không chịu buông, và lần đầu tiên trong suốt những ngày qua, giọng nàng mất đi sự điềm tĩnh của một tiểu thư nhà có học — nó thành giọng của một đứa trẻ sắp mất người thân cuối cùng còn lại trên đời. Vì đúng là như thế: bà Năm Liên không phải mẹ nàng, nhưng bà là người đã rửa mặt cho nàng mỗi sáng mười một năm, là người duy nhất trong nhà này gọi nàng bằng tiếng 'cô' với đầy đủ tình thương, là gia đình duy nhất mà nàng còn nhớ được. Bà gỡ tay nàng ra — nhẹ nhàng, từng ngón một, như gỡ một cuộn chỉ rối — và nói câu bà đã dặn lòng sẽ nói cho bằng được mà không khóc: 'Cô đi đi. Đi cho xa. Rồi sống cho lâu — lâu hơn cả cái nhà này. Bà ở lại đây, bà trông nhà. Mà nhà này thì có gì đáng trông đâu… bà trông cái tên của cô. Bao giờ người ta hỏi tới, bà nói.'",
      "Bà quay đi trước, rất nhanh, lấy cớ ra xem lại khay trà đã nguội — phép tắc của một người hầu già không cho phép mình khóc trước mặt cô chủ, kể cả trong một buổi chia tay như thế này. Nhưng ở cửa, bà dừng lại và làm một việc không nằm trong phép tắc nào: bà quay lại, cúi đầu chào Tiểu Lan một cái chào thật sâu và thật trang trọng — không phải chào cô chủ của mình, mà chào một người sắp đi xa mà bà không biết bao giờ gặp lại. Rồi bà nói với Cao Minh câu chót của buổi tối, giọng đã vững lại: 'Ông đưa cô đi. Còn cái nhà này — để bà ở lại nhìn nó. Nhìn cho tới ngày bà được nói hết ra.'"
    ],
    "dialogue": [
      {
        "speaker": "Bà Năm Liên",
        "text": "Dạ, cô ơi, hộp này của phu nhân gửi bà giữ cho cô. Mười một năm rồi, bữa nay bà mới dám trao. Trong này có chữ của phu nhân, với đóa lan cô thêu hồi lên sáu. Cô cầm lấy — từ nay đồ của mẹ cô, cô tự giữ."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Bà… bà đi với tôi, bà. Mình đi hết đi. Tôi không để bà ở lại một mình trong cái nhà này được. Họ sẽ hỏi bà, họ sẽ làm khó bà — bà già rồi, bà chịu sao nổi…"
      },
      {
        "speaker": "Bà Năm Liên",
        "text": "Cô nghe bà nói một lần này thôi. Bà ở lại là có việc của bà. Mai mốt người ta hỏi: cô chủ đâu, cô chủ thế nào rồi — phải có một người còn sống mà trả lời cho đúng. Bà trả lời. Bà chờ được tới ngày đó, cô đừng lo. Còn đêm nay, bà ở lại thì sổ người vẫn đủ, họ khỏi sinh nghi sớm. Bà che cho cô được mấy canh giờ, là bà mừng rồi."
      },
      {
        "speaker": "Cao Minh",
        "text": "Bà ở lại, nguy hiểm sẽ tới với bà trước tiên. Bổn tọa nói rõ để bà khỏi lầm: khi họ phát hiện ra, người đầu tiên họ hỏi sẽ là bà."
      },
      {
        "speaker": "Bà Năm Liên",
        "text": "Dạ, thưa ông, tôi biết. Tôi già rồi, tôi còn sợ gì nữa đâu. Hồi cô mới về đây, đỏ hỏn có chút xíu, tôi bồng cô mà tôi tự hứa: đứa nhỏ này, mình hầu nó tới chừng nào nó không cần mình nữa. Bữa nay nó đi được rồi, là tôi hết nợ. Ông đưa cô đi cho trót — còn phần nói lại sự thật, để bà lo."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Bà… bà nhớ giữ sức khỏe. Bà nhớ… nếu một ngày tôi quay lại được, tôi sẽ quay lại tìm bà trước nhất."
      }
    ],
    "choices": [
      {
        "id": "promise_testimony",
        "text": "Nói trước mặt nàng như một việc đã xếp sẵn: sẽ có ngày bà đứng trước người đời, nói hết những gì bà đã chứng kiến trong căn nhà này.",
        "next": "lh_thu_nguyet_choice",
        "effects": {
          "lanTrustDelta": 2
        },
        "route": {
          "id": "tu_quyet",
          "delta": 1
        }
      },
      {
        "id": "swear_return",
        "text": "Nói bà cứ ở lại giữ mình: ngày quay lại đón bà ra khỏi căn nhà này, hắn đã tính vào việc của mình — món nợ ấy không để bà gánh một mình tới cuối đời.",
        "next": "lh_thu_nguyet_choice",
        "route": {
          "id": "bao_ho",
          "delta": 2
        }
      }
    ]
  },
  "lh_thu_nguyet_choice": {
    "id": "lh_thu_nguyet_choice",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Đi theo, hay ở lại",
    "backgroundId": "long-hai-corridor",
    "location": "Khúc quanh hành lang khu gia nhân, biệt thự Long Hải",
    "companions": [
      "le_thu_nguyet"
    ],
    "narration": [
      "Thu Nguyệt đợi ở khúc quanh hành lang khu gia nhân, nơi ánh đèn không chiếu tới, với một gói đồ nhỏ đã buộc sẵn trên lưng — mấy bộ quần áo, một đôi guốc mộc, và tờ danh sách đóng gói rương thuốc bản sao thứ hai mà cô đã tự chép thêm một bản từ bao giờ. Cô đã tự quyết định trước khi được hỏi: gói đồ đã sẵn, tóc đã vấn gọn, giày đã xỏ. Chỉ đến khi Cao Minh bước tới — hai thanh kiếm lơ lửng sau lưng hắn lướt qua khoảng tối không một tiếng động, và dù đã mấy ngày, cô vẫn giật mình lùi nửa bước trước khi kịp cúi đầu — sự quyết tâm ấy mới run lên: cô sực nhớ mình chỉ là một đứa gia nhân chạy việc, và việc tự ý gói đồ đi theo cô chủ là một việc tày trời. Cô ngẩng lên một thoáng rồi lại cúi ngay — hai thanh kiếm sau lưng hắn vừa khẽ nghiêng theo một luồng gió hành lang mà cô không hề cảm thấy. Cô ôm chặt gói đồ, nói một hơi như người nhận tội: 'Em gói sẵn rồi. Em biết em không có phận sự gì mà đòi đi theo. Nhưng em gói sẵn rồi, thưa ông.'",
      "Cao Minh không trách cô. Hắn đặt hai con đường ra trước mặt cô, nói gọn, không giấu phần nguy hiểm của đường nào. Đường thứ nhất: đi theo. Cô biết đường ra bến, biết mật mã thương hồ mà không ai trong đoàn biết, biết tên và mặt của từng người trong nhà này — một người làm chứng còn sống là thứ mọi cuốn sổ của Giới Phòng đều sợ nhất. Đổi lại: đường đi đêm nay không ai bảo đảm được an toàn, và một khi đã ra khỏi cổng, cô không còn đường quay lại làm người của nhà này nữa. Đường thứ hai: ở lại. Ở lại làm tai mắt trong nhà — chậm lại những việc có thể chậm, gửi tin ra ngoài khi có thể, che chở cho bà Năm Liên đã già. Đổi lại: ở lại nghĩa là ở trong tay của cái mạng và của Giới Phòng, sau một đêm mà họ đã mất thứ quý nhất họ giữ. Hắn nói xong thì thôi, không thêm một lời khuyên nào. Việc chọn, hắn để nguyên đó.",
      "Cô còn cho hắn xem một thứ nữa, lấy từ dưới đáy gói đồ: một miếng vải gói mấy đồng bạc lẻ và một chiếc thẻ bài bằng tre đã cũ — thẻ bài của người chạy việc ở bến tàu Chợ Lớn, thứ duy nhất còn lại từ quãng đời trước khi cô vào nhà này. Cô nói, nếu đi theo, cô sẽ dẫn đoàn tới đúng bến mà cô quen: ở đó có một người chèo thuyền tên Đực, nợ cô một ơn cứu mạng từ hồi cô còn chạy việc — cha con nhà ấy trọng chữ tín hơn trọng tiền, và ghe của họ đi đêm không bao giờ bị xét. Còn nếu ở lại, cô cũng đã tính sẵn: cô sẽ xin quản gia cho đổi sang chân bưng bê ở dãy nhà ngang, gần kho thuốc nhất, để mắt cô còn trông được chiếc rương và buồng của bà Năm Liên. Cả hai đường, cô đều đã tự mình dò trước từng bước. Cô còn dặn thêm một lệ của dân bến mà người ngoài không thể tự biết: ghe đi đêm ở đất này không thắp đèn, gặp ghe khác thì gõ mạn ghe ba tiếng thay lời chào — đoàn nào không biết lệ ấy, chưa ra khỏi bến đã bị người ta nhớ mặt. Chỉ còn chờ một tiếng của hắn để biết mình sẽ đi đường nào.",
      "Thu Nguyệt đứng yên rất lâu. Cô nhìn về phía gian phòng trong cùng — nơi cô chủ của cô đang chờ giờ đi — rồi nhìn về phía dãy buồng gia nhân tối om, nơi bà Năm Liên vừa quay về và sẽ ở lại một mình trong căn nhà đã khóa. Nước mắt cô rơi xuống, nhưng giọng cô, khi cất lên, lại không hề run như Cao Minh tưởng. Hắn không nói thêm. Một người đã tự gói đồ, tự chép thêm một bản danh sách, tự dò cả hai con đường — người ấy thiếu gì nữa đâu, ngoài một khoảng lặng để tự mình nói ra. Hắn cho cô khoảng lặng ấy, và đứng chờ như chờ một việc vốn phải thế.",
      "Dù người chơi chọn đường nào, có một việc Thu Nguyệt tự làm trước khi nghe quyết định — cô nói ra như một lời thú tội và cũng là một niềm tự hào nho nhỏ: cô đã chép bản danh sách đóng gói thành hai bản từ trước. Một bản bà Năm Liên giữ. Một bản cô giấu sau tượng ông Táo trong bếp — chỗ mà người trong nhà, dù có lục soát, cũng ít ai dám động vào vì kiêng. 'Em học cô chủ,' cô nói, lần đầu tiên mỉm cười trong suốt buổi tối, 'cô giấu đồ khắp nơi để còn có cái mà chứng. Em cũng giấu. Lỡ em có bề gì, thì sau tượng ông Táo vẫn còn một bản, thưa ông.' Cô bé mười chín tuổi, xuất thân chạy việc ở bến tàu, vừa tự mình học được bài học lớn nhất của căn nhà này: giấy tờ, nếu biết giấu đi và chia ra, có thể sống lâu hơn cả con người.",
      "Ngoài sân, tiếng chuông điểm danh cuối cùng của đêm chưa vang. Bên trong hành lang tối, một cô hầu nhỏ đứng chờ nghe quyết định về đời mình — và dù quyết định ấy là gì, thì từ giây phút này, cô không còn là một con số trong sổ gia nhân của Giới Phòng nữa. Cô là một người vừa được hỏi ý, và câu trả lời của cô sẽ đi theo cuộc ra đi này tới tận cùng."
    ],
    "dialogue": [
      {
        "speaker": "Lê Thu Nguyệt",
        "text": "Thưa ông, em gói đồ sẵn rồi. Em biết thân phận em, em không dám đòi hỏi. Nhưng em nghĩ… em biết đường ra bến, em đọc được ký hiệu thương hồ, em biết mặt biết tên hết người trong nhà này. Em đi theo, may ra em còn có ích cho cô. Em ở lại… em cũng có ích, em làm tai mắt cho ông trong nhà này, em che cho bà Năm Liên. Ông biểu sao, em nghe vậy — chỉ xin ông đừng đuổi em về buồng nằm ngủ như không có chuyện gì. Em không ngủ nổi nữa đâu, thưa ông."
      },
      {
        "speaker": "Cao Minh",
        "text": "Thu Nguyệt. Ngươi đã tự gói đồ, tự chép thêm một bản danh sách giấu sau tượng ông Táo — ngươi không còn là đứa chạy việc chỉ biết nghe lệnh nữa. Cho nên việc này, bổn tọa hỏi ngươi một lần, và ngươi phải tự trả lời cho ra lẽ: ngươi muốn đi, hay muốn ở?"
      },
      {
        "speaker": "Lê Thu Nguyệt",
        "text": "Dạ… thưa ông cho em nghĩ một chút… Em sợ cả hai đường, em nói thật. Nhưng em sợ nhất là sáng mai thức dậy, cô đi rồi, nhà này lại như cũ, mà em thì vẫn bưng thuốc vào một căn phòng trống. Thưa ông, em theo cô mười mấy năm nay là phận sự. Còn từ đêm nay… từ đêm nay là em tự chọn."
      }
    ],
    "choices": [
      {
        "id": "take_her",
        "text": "«Đi theo. Làm chứng.» — Thu Nguyệt ra khỏi cổng cùng đoàn, mang theo tiếng nói và trí nhớ của một người trong nhà.",
        "next": "lh_escape_eve",
        "effects": {
          "lanTrustDelta": 1
        },
        "route": {
          "id": "tu_quyet",
          "delta": 2
        },
        "flags": {
          "thuNguyetFollows": true
        }
      },
      {
        "id": "leave_her",
        "text": "«Ở lại. Làm tai mắt của bổn tọa trong nhà này.» — Thu Nguyệt ở lại với bà Năm Liên, giữ đường tin và bản danh sách thứ hai.",
        "next": "lh_escape_eve",
        "effects": {
          "cluesHuaGiaDelta": 1
        },
        "route": {
          "id": "bao_ho",
          "delta": 2
        },
        "flags": {
          "thuNguyetStays": true
        }
      }
    ]
  },
  "lh_escape_eve": {
    "id": "lh_escape_eve",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Đêm trước giờ đi",
    "backgroundId": "tieu-lan-room",
    "location": "Phòng Hứa Tiểu Lan, biệt thự Long Hải",
    "narration": [
      "Đêm trước giờ đi, căn phòng nhỏ sáng một ngọn đèn duy nhất. Mọi sự chuẩn bị đã xong: bản đồ điểm neo đã thuộc lòng, thứ tự cắt đã diễn đi diễn lại trong đầu, gói đồ của nàng chỉ có chiếc hộp của mẹ và cuộn chỉ đỏ quấn quanh cổ tay. Cao Minh ngồi trên chiếc ghế đẩu bên cửa, hai thanh kiếm lơ lửng yên hai bên, không phát ra một tiếng động. Bên ngoài, căn nhà bị phong tỏa ngủ trong cái im lặng của nó; bên trong, một cô gái mười tám tuổi ngồi đối diện với đêm tự do đầu tiên của đời mình, và thấy nó lớn quá, tối quá, không biết mừng hay sợ trước.",
      "Nàng hỏi những câu rất thực tế, theo cái cách của một người cả đời chỉ biết thế giới qua sách: cắt những sợi chỉ thì có đau không, đau như thế nào. Hắn đáp ngắn: đau — như giật một sợi dây căng ra khỏi thịt; một lúc, rồi thôi. Còn đường ra bến, giờ nước lên xuống, khúc nào có người gác — những thứ đó hắn quay sang hỏi lại nàng, và nàng trả lời rành rọt như người đọc một trang sách đã thuộc: mười một năm nằm trong phòng nghe ngóng, nàng biết căn nhà này và con đường quanh nó theo một cách không ai trong nhà ngờ tới. Hắn nghe, thỉnh thoảng gật đầu — một tồn tại hủy thiên diệt địa, ngồi học đường đi nước bước từ một cô gái không bước nổi qua sân. Hắn thấy việc ấy buồn cười, theo nghĩa tốt. Và nàng hỏi, khẽ nhất trong các câu: ở ngoài kia, người ta có nhìn nàng như nhìn một người bệnh không. Hắn đáp: người lạ nhìn người lạ, họ còn bận việc của họ. Nghe tới đó, nàng im lặng một lúc, rồi nói: được người ta nhìn như người bình thường, hóa ra là một điều đáng để đi xa như vậy.",
      "Rồi nàng hỏi câu mà cả buổi tối nàng đã giữ lại sau cùng — câu hỏi mà hắn biết trước sau gì cũng sẽ tới, vì nó nằm ở trung tâm của mọi việc đã xảy ra trong căn nhà này. Nàng hỏi: nếu đêm nay nàng quên cả chuyện này thì sao. Quên chiếc hộp của mẹ. Quên lời bà Năm Liên. Quên cả việc chính nàng đã đồng ý ra đi — quên rằng cuộc ra đi này là do nàng chọn, chứ không phải do ai ép. 'Ngày mai, nếu tôi tỉnh dậy ở một nơi lạ, và trong đầu tôi không còn gì của đêm nay,' nàng nói, giọng rất khẽ mà rất rõ, 'thì làm sao tôi biết được là tôi đã tự đi, chứ không phải bị người ta mang đi như họ vẫn mang tôi đi suốt mười một năm nay?'",
      "Hắn đáp như đáp một việc đã rồi, không trang trọng, không dỗ dành: bổn tọa kể lại. Kể lại hết — từng việc một, theo đúng thứ tự, không thêm một chữ nào có lợi cho mình. Nhưng hắn nói rõ thêm một điều mà hắn đã nói từ lần đầu tiên, và lần này nàng nghe với một sự thấu hiểu khác hẳn: lời hắn kể sẽ mãi mãi chỉ là lời kể của hắn, không phải ký ức của nàng. Hắn sẽ không bao giờ nói dối nàng rằng nàng đã nhớ lại. Một ký ức vay mượn, dù vay của người tốt, vẫn là một thứ không phải của mình — và nàng đã bị lấy cắp quá nhiều thứ không phải của mình rồi. Cái hắn giữ cho nàng không phải là quá khứ. Cái hắn giữ là sự thật, để nàng muốn tin hay muốn ngờ tùy ý nàng — vì quyền được tin hay không tin, cũng là một quyền của người tự do.",
      "Điều nàng xin sau chót là một thứ không phải sự kiện, mà là một quyết định: quyết định của chính nàng trong đêm nay. Rằng nàng đã nghe hết, đã cân nhắc hết, và đã tự mình chọn ra đi. 'Nếu tôi quên,' nàng nói, 'thì ít nhất trên đời còn một người nhớ rằng tôi đã tự chọn. Ngài nhớ thay tôi điều ấy — không phải nhớ thay tôi đã làm gì, mà nhớ thay tôi đã muốn gì.' Hắn gật đầu, nhẹ như người nhận cất một món đồ nhỏ người ta gửi nhờ. Với hắn, nhớ một việc là việc không tốn chút sức nào — trí nhớ của hắn không phai theo năm tháng như của người thường — và cũng chính vì thế, thứ nàng gửi ở chỗ hắn là thứ an toàn nhất trên đời này: hắn sẽ không đánh rơi nó, không quên nó, không một ai lấy được nó ra khỏi đầu hắn. Hắn không nói những điều ấy ra. Hắn chỉ gật đầu.",
      "Chuông điểm danh cuối cùng của đêm vang lên ngoài hành lang — tiếng chuông mà mười một năm nay nàng nghe như nghe tiếng khóa cửa phòng mình. Nhưng đêm nay, trong tiếng chuông ấy, nàng đứng dậy. Tự mình đứng dậy, không ai đỡ, không ai ra lệnh, tay ôm chiếc hộp của mẹ, cuộn chỉ đỏ trên cổ tay, và nhìn ra cánh cửa mà ban chiều nàng đã để mở. Ngoài kia là hành lang tối, là sân trong, là cổng xích, là đường ra bến, là cả một thế gian ồn ào và không biết trước. Nàng hít một hơi thật sâu — hơi thở của chính nàng, theo nhịp của chính nàng — và bước bước đầu tiên."
    ],
    "dialogue": [
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài, tôi hỏi ngài một điều chót, điều này tôi giữ từ đầu buổi tối tới giờ. Nếu đêm nay tôi quên hết thì sao? Quên hộp của mẹ, quên lời của bà, quên cả việc tôi đã đồng ý đi. Mai này tôi tỉnh dậy ở một nơi lạ, làm sao tôi biết được là tôi đã tự đi — chứ không phải bị mang đi như mười một năm nay?"
      },
      {
        "speaker": "Cao Minh",
        "text": "Bổn tọa kể lại. Từ đầu, từng việc một, đúng như nó đã xảy ra. Nhưng nghe cho rõ: đó là lời kể của bổn tọa, không phải ký ức của nàng. Tin hay không — quyền của nàng. Bổn tọa không lấy thêm của nàng một thứ gì nữa, kể cả quyền được nhớ thay."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài, tôi biết. Và chính vì ngài nói vậy, tôi mới dám đi. Một ký ức mượn của người khác… nghe qua thì tử tế, mà nghĩ kỹ thì cũng là một cách bị người ta sống thay. Thà tôi quên, rồi nghe ngài kể lại như nghe chuyện của một người thân — còn hơn là mang một thứ không phải của mình mà tưởng là của mình."
      },
      {
        "speaker": "Cao Minh",
        "text": "Hiểu được thế là tốt. Đỡ mất công bổn tọa giải thích."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Còn một điều, thưa ngài. Ngài nhớ thay tôi một thứ: không phải việc tôi đã làm, mà việc tôi đã chọn. Đêm nay, tôi, Hứa Tiểu Lan, tự chọn ra đi. Nếu mai này tôi quên, ngài nói lại cho tôi nghe đúng câu ấy. Để tôi biết — dù không nhớ — rằng mình đã từng là người tự quyết định đời mình."
      },
      {
        "speaker": "Cao Minh",
        "text": "Bổn tọa nhớ. Trí nhớ của bổn tọa tốt hơn sổ sách nhà này nhiều. Đi thôi — chuông dứt rồi."
      }
    ],
    "choices": [
      {
        "id": "promise_keep",
        "text": "Nhớ thay nàng — cả những điều nàng đã chọn. Hắn ghi vào trí nhớ của mình như ghi một món nợ phải trả, rồi bước ra hành lang.",
        "next": "lh_escape_begins",
        "effects": {
          "lanTrustDelta": 3
        }
      },
      {
        "id": "rest_now",
        "text": "«Ngủ một giấc ngắn đi. Tới giờ, bổn tọa sẽ gọi nàng dậy — gọi bằng tên của nàng.»",
        "next": "lh_escape_begins",
        "effects": {
          "lanTrustDelta": 2
        }
      }
    ]
  },
  "lh_escape_begins": {
    "id": "lh_escape_begins",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Cánh cửa đầu tiên",
    "backgroundId": "long-hai-corridor",
    "location": "Khu nhà trong, biệt thự Hứa Gia, Long Hải — giờ hành động",
    "narration": [
      "Giờ hành động đến trong cái lặng thinh sâu nhất của đêm. Biệt thự đã phong tỏa từ đầu đêm nay: cổng xích, đèn hành lang tắt theo lệnh, gia nhân ai về vị trí nấy như quân cờ đã xếp xong ván. Nhưng ván cờ chỉ yên khi người chơi còn ngồi nhìn — và đêm nay, có hai người không chịu làm quân cờ nữa.",
      "Cao Minh đến trước cửa phòng nàng không một tiếng động. Hắn không gõ. Hắn đứng ngoài rèm, nghe nhịp thở của người con gái bên trong chậm rãi và đều — không phải nhịp thở của người ngủ say, mà của một người đang nằm thức, đếm từng khắc trôi qua, chờ một điều mình đã tự quyết. Hắn khẽ gọi tên nàng — chỉ gọi tên, không thêm một chữ nào.",
      "Bên trong, tiếng áo sột soạt. Tiểu Lan bước ra, đã mặc sẵn chiếc áo dài màu chàm cũ nàng chọn từ chiều, tóc vấn gọn. Một tay nàng ôm trước ngực chiếc hộp gỗ nhỏ của mẹ — chiếc hộp vừa về tay nàng đêm nay. Cổ tay kia quấn cuộn chỉ thêu đếm ngày tháng của nàng. Hai thứ ấy là tất cả những gì nàng mang theo khỏi căn phòng đã giam mình mười một năm. Nàng không mang vàng bạc, không mang áo quần. Nàng mang theo ký ức của mẹ, và cái lịch của riêng mình.",
      "Phòng nàng không khóa. Đó là điều tàn nhẫn nhất của tòa nhà này: nó không cần khóa cửa phòng nàng, vì cả tòa nhà là một cái khóa lớn hơn, và chính thân thể nàng là ổ khóa cuối cùng. Trên bàn, chén thuốc tối đã cạn — nàng uống cạn như mọi đêm, một nghi thức ngoan ngoãn sau chót trước khi làm kẻ đào tẩu. Bên cửa sổ, khung thêu còn căng dở đóa sen; nàng nhìn nó một thoáng rồi quay đi — có những thứ phải để lại, để nơi đây còn dấu rằng từng có một người con gái sống thật, chứ không phải một cái xác được cất giữ.",
      "Ngưỡng cửa phòng nàng chỉ cao hơn nền nhà một tấc, vậy mà nàng dừng lại trước nó lâu hơn trước bất cứ cánh cửa nào khác trong đêm nay. Mười một năm, nàng đã qua ngưỡng cửa này không biết bao nhiêu lần — vịn tay bà Năm Liên, được bế, được dìu, được đưa đi như một món đồ quý dễ vỡ. Chưa một lần nào nàng qua nó hoàn toàn bằng ý muốn của riêng mình, vào giờ của riêng mình, vì một lý do của riêng mình. Nàng hít một hơi, và bước qua — một bước nhỏ, lặng lẽ. Hắn đứng nhìn bước chân ấy. Hắn đã xem không biết bao nhiêu thành quách sụp xuống trong đời mình; một bước chân qua ngưỡng cửa, kỳ lạ thay, lại đáng nhìn hơn tất cả.",
      "Hành lang khu trong tối om. Hai người đi chưa được mười bước thì ngọn đèn dầu ở đầu hồi bỗng tự cháy lên — không ai châm, không một tiếng đóm. Rồi ngọn thứ hai. Rồi ngọn thứ ba, lần lượt từ xa tới gần, như một hàng mắt mở ra dọc đường đi của họ. Căn nhà đã thức. Nó không ngăn, chưa ngăn. Nó chỉ mở mắt ra mà nhìn.",
      "Qua dãy cửa phòng gia nhân đóng kín, Cao Minh nghe tiếng người trở mình — không phải từng người một, mà đồng loạt, như một thân thể lớn trở mình trong giấc ngủ chập chờn. Có tiếng thì thầm rất khẽ sau một cánh cửa, một giọng đàn bà mớ ngủ gọi một cái tên không rõ. Rồi tất cả lại im, im đến mức nghe được tiếng tim của người con gái đang đi bên cạnh hắn đập nhanh hơn bình thường một chút.",
      {
        "text": "Có một điều khác thường: phía sau lưng họ, căn nhà vắng hơn mọi đêm. Phòng khách vẫn sáng đèn — bà Năm Liên đang giữ quản gia cùng người đưa tin của Giới Phòng bên chồng giấy tờ, đòi đối chiếu từng tờ vì tờ chứng tử còn thiếu con dấu. Thu Nguyệt đứng bên cạnh, bưng chồng sổ, cứ nói trang ấy «tìm chưa ra». Nhờ cái bận rộn rất đúng phép tắc ấy, dãy hành lang phía sau thưa hẳn một vòng mắt.",
        "if": "carriageDelayed"
      },
      "Qua khung cửa tò vò nhìn ra sân trước, quang cảnh hiện ra như một bức tranh tĩnh: hai hàng gia nhân đứng ngủ dọc hiên, người tựa cột, người ngồi bó gối, đầu gục xuống ngực — tất cả thở cùng một nhịp, đều đặn như mặt nước hồ không gió. Trên chòi cổng, chiếc chuông đồng treo im trong bóng tối; đôi đèn cổng cháy leo lét; sợi xích sắt vắt ngang cổng nằm cuộn như con trăn ngủ. Cụm khóa đường thoát của cánh cổng — chuông, đèn và xích — trong thần niệm của hắn sáng lên như ba nốt nhạc trầm đang chờ bị gảy: gảy sai một nốt, cả bản nhạc sẽ đổ xuống đầu người con gái bên cạnh.",
      {
        "text": "Ở cửa sổ cuối dãy nhà đông, một ngọn đèn chớp hai lần — tín hiệu của Thu Nguyệt, con người ở lại trong lòng nhà như một con mắt mở. Nàng đã chọn ở lại làm tai mắt, và đêm nay đôi mắt ấy đang thức thay cho cả những người không được phép thức. Cao Minh khẽ gật đầu về phía ánh đèn ấy, dù biết cô không nhìn thấy.",
        "unless": "thuNguyetFollows"
      },
      {
        "text": "Ở cửa sổ cuối dãy nhà đông, một ngọn đèn chớp hai lần — tín hiệu của bà Năm Liên, con người ở lại trong lòng nhà như một con mắt mở. Đêm nay đôi mắt ấy thức thay cho cả những người không được phép thức. Còn Thu Nguyệt — con bé đã lách ra trước theo lối bếp từ lúc chuông điểm danh dứt — đang chờ sẵn ở ngưỡng cửa dãy nhà ngoài, nơi nó thuộc từng khúc quanh như thuộc lòng bàn tay. Cao Minh khẽ gật đầu về phía ánh đèn trong nhà, rồi hướng bước chân về phía đứa nhỏ đang chờ ngoài kia.",
        "if": "thuNguyetFollows"
      },
      "Họ đi qua sân trong. Giếng đá nằm im trong sương, mặt nước đen không một gợn — điểm neo thứ nhất của tòa nhà ngủ yên dưới lớp nước ấy, và đêm nay nó sẽ không bị động đến. Mấy điểm neo còn lại — giếng, bếp, từ đường — cứ đứng nguyên gánh phần tải của chúng; con đường ra cổng chỉ cần cụm khóa ở cổng được tháo đúng thứ tự của cụm: chuông, đèn, xích. Cắt thừa một mắt nối là nàng gánh thêm một phần tải, và căn nhà lay tỉnh thêm một phần. Hắn không có ý định làm việc thừa.",
      "Đến ngưỡng cửa dãy nhà ngoài, nơi hành lang mở ra khoảng sân trước cổng, Cao Minh dừng lại. Trước mặt là ba mươi bước sân gạch, rồi đến cánh cổng sắt đang xích và hàng gia nhân ngủ đứng dọc hai bên hiên như những pho tượng chưa được gọi tên. Chỉ cần hắn muốn, hắn có thể bế nàng qua ba mươi bước ấy trong một nhịp thở, không ai kịp mở mắt. Nhưng cái giá không phải bằng máu — mà bằng thứ nàng vừa giành lại được trong những ngày qua: quyền được tự mình quyết định.",
      "Hắn quay sang nàng. Người con gái đứng thẳng, cuộn chỉ ôm chặt trong tay, mặt tái đi vì căng thẳng nhưng mắt không tránh đi đâu cả. Ngoài sân, ngọn đèn cổng đầu tiên vừa tự cháy lên."
    ],
    "dialogue": [
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài, bà Năm… bà có kịp ra khỏi nhà ngoài không? Tôi không nghe tiếng bà ho như mọi đêm."
      },
      {
        "speaker": "Cao Minh",
        "text": "Bà ấy ở lại — tự bà ấy chọn, để làm chứng cho nàng. Thu Nguyệt trông chừng. Đừng tính nợ giùm người ta.",
        "unless": "thuNguyetFollows"
      },
      {
        "speaker": "Cao Minh",
        "text": "Bà ấy ở lại — tự bà ấy chọn, để làm chứng cho nàng. Thu Nguyệt đi trước mở đường, đang chờ ở nhà ngoài. Đừng tính nợ giùm người ta.",
        "if": "thuNguyetFollows"
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Dạ. Tôi hiểu. Ở nhà này, được tự chọn một việc gì đó… là thứ xa xỉ nhất."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Cuộn chỉ này, tôi thắt một nút cho mỗi ngày mà tôi còn nhớ được. Có những quãng dài chỉ toàn là… trống. Đêm nay ra khỏi cổng, tôi muốn tự tay thắt thêm một nút nữa — nút đầu tiên ở bên ngoài căn nhà này."
      },
      {
        "speaker": "Cao Minh",
        "text": "Tiểu Lan. Hỏi lần cuối, trước cánh cửa đầu tiên này. Từ bước này trở đi, không còn đường quay lại. Nàng có muốn tự mình bước ra khỏi tòa nhà này, cùng bổn tọa, đêm nay không?"
      }
    ],
    "choices": [
      {
        "id": "ask_her",
        "text": "Chờ nàng tự mình trả lời — dù câu trả lời có làm chậm cả kế hoạch.",
        "next": "lh_gate_fight",
        "effects": {
          "lanTrustDelta": 3
        },
        "route": {
          "id": "tu_quyet",
          "delta": 1
        },
        "flags": {
          "lanDepartureConsent": true
        }
      },
      {
        "id": "carry_her",
        "text": "Không cần hỏi nữa — bế nàng lên, đi thẳng qua cổng trong một nhịp thở.",
        "next": "lh_dead_consent"
      }
    ]
  },
  "lh_gate_fight": {
    "id": "lh_gate_fight",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Trận cổng",
    "backgroundId": "long-hai-dawn-gate",
    "location": "Cổng biệt thự Hứa Gia, Long Hải — giờ Dần",
    "entity": "entity_guard",
    "narration": [
      "Câu trả lời của nàng vừa dứt, cả tòa nhà chuyển mình. Không chuông, không trống — chỉ là hàng chục cánh cửa mở ra cùng một lúc sau lưng họ, và tiếng chân trần, chân dép, chân đất đổ ra sân như nước tràn. Gia nhân của biệt thự Hứa Gia đứng đầy khoảng sân trước cổng: phu khuân, người bếp, cô hầu, lão bộc — và đi đầu, chắn ngang cánh cổng sắt, là người gác Sáu, đôi mắt trắng dã, hai tay đã kéo then cổng xuống từ lúc nào.",
      "Họ không gào thét. Họ không ùa lên loạn xạ như một đám đông. Họ tiến lên từng hàng, khép dần thành một vòng cung sống, mỗi người đúng vị trí của mình như đã tập dượt trong mơ suốt nhiều năm: gã cầm cuốc đứng chếch bên trái, gã cầm dao phay lặng lẽ vòng ra phía sau, cô hầu má rách đứng ngay giữa lối đi, hai tay buông thõng, mắt nhìn thẳng vào Tiểu Lan như nhìn một cái neo bằng thịt. Mạng lưới không cần họ thắng. Nó cần họ làm một việc duy nhất: đứng giữa hắn và cánh cổng, bằng chính thân thể của họ.",
      "Trên hiên nhà chính, ông quản gia già đứng thẳng như một cây cột, hai tay chắp trước bụng, miệng đều đều đọc lại gia quy của nhà — thay dầu đèn đúng giờ, đóng then đúng lệ, khách lạ không được vào khu trong — đọc như đọc một bài kinh, và kỳ lạ thay, bước chân của đám gia nhân dưới sân dường như đang khớp theo nhịp đọc ấy. Bài gia quy mà ban ngày chỉ là nề nếp, đêm nay đã trở thành một thứ khác: kênh truyền mệnh lệnh khoác áo thói quen, thứ mà mỗi người trong nhà đã thuộc lòng từ lâu trước khi họ biết mình bị điều khiển.",
      "Giữa vòng vây, một thằng nhỏ chừng mười lăm tuổi — đứa nhỏ vẫn hay bưng nước rửa mặt cho khách — bị đẩy lên hàng đầu, hai tay ôm một cây đòn gánh, mặt trắng bệch vì sợ, nước mắt chảy mà chân vẫn cứ bước tới. Cao Minh đón cây đòn gánh bằng hai ngón tay, nhìn thẳng vào đôi mắt còn tỉnh táo của đứa nhỏ trong một thoáng, rồi điểm nhẹ vào sợi chỉ ở khuỷu tay nó. Cây đòn gánh rơi xuống. Thằng nhỏ ngồi phịch xuống nền gạch, ôm mặt khóc nức nở — tiếng khóc đầu tiên hoàn toàn là của chính nó trong đêm nay.",
      "Tiểu Lan không núp hẳn sau lưng hắn. Nàng đứng chếch sang một bên, ở nơi nàng nhìn thấy được mặt của từng người trong vòng vây — những gương mặt đã bưng thuốc, giặt áo, chải tóc cho nàng suốt bao năm. Hắn hiểu ý nàng mà không cần hỏi: nếu đêm nay có ai phải ngã xuống, nàng muốn mình là người nhìn thấy, chứ không phải người được che mắt. Và có một điều nữa, sâu hơn: đám người kia, dù đang bị giật dây, vẫn nhận ra nàng — qua sợi chỉ điều phối, sự hiện diện của nàng ở giữa sân là một điểm tựa mà mệnh lệnh của căn nhà phải liên tục tính tới. Nàng đứng đó, tự nguyện, như một cái neo sống đối trọng lại ba cái neo chết của cánh cổng.",
      "Cao Minh không ra tay ngay. Hắn trải thần niệm qua khoảng sân như người thợ đặt tay lên một cây đàn lạ trước khi gảy nốt đầu tiên — và hắn thấy lại điều bản đồ neo đã cho thấy: cụm khóa ở cổng là một cụm riêng, biên rõ ràng. Phần tải của nó chạy từ chòi chuông xuống hai đèn cổng, dồn cả vào sợi xích sắt, và dừng lại ở ranh sân trước; sợi của giếng sau chạy ngầm dưới sân nhưng không hề nhập vào cụm, sợi của bếp và từ đường cũng vậy. Ba điểm neo còn lại vẫn đang gánh phần của riêng chúng, yên và đều. Một miệng ra lệnh, một đôi mắt canh, một bàn tay gánh — tông môn nào giữ cửa cũng thắt nút theo lối này. Tháo riêng được: tháo đúng thứ tự, sức nặng tan ra ngoài sân; tháo sai, nó chỉ còn một đường để chạy — ngược vào thân thể người con gái đứng sau lưng hắn, cái trục mà mọi sợi điều phối trong nhà này đều từng chạy qua.",
      "Hắn nhìn ba mắt của cụm khóa như nhìn ba khớp của một bàn tay đang nắm chặt cánh cổng. Mắt chuông — quả chuông đồng trên chòi cổng: cái miệng ra lệnh, tiếng của nó điểm nhịp cho cả sân. Mắt đèn — đôi đèn lồng hai bên cổng: đôi mắt điều phối, cháy không phải để soi đường mà để nhìn thay cho căn nhà. Và mắt xích — sợi xích sắt to bằng cổ tay vắt ngang cổng: bàn tay của cụm, mắt gánh toàn bộ sức nặng của cả chuông lẫn đèn. Thứ tự tháo hắn đã thuộc từ đêm hoàn tất bản đồ: chuông trước, cho cái miệng ra lệnh câm đi; đèn sau, cho đôi mắt điều phối mù đi; xích sau cùng, thật chậm, cho sức nặng của cả cụm tan ra ngoài theo sợi sắt lạnh. Còn nếu xích đứt trước — khi chuông và đèn vẫn còn nguyên sức nặng — thì phần tải của cả hai sẽ giật ngược theo đường dẫn duy nhất còn mở, là thân thể của nàng.",
      "Vòng vây không cho hắn nhiều thời gian mà ngắm. Trên hiên, tiếng đọc gia quy của ông quản gia nhanh thêm một nhịp, và hàng người dưới sân khép vào thêm một bước, đều như một hơi thở bị ép ngắn lại. Một bàn tay — tay của cậu phụ bếp trẻ măng — vươn ra từ hàng thứ hai, chộp thẳng về phía tay áo của Tiểu Lan: không phải để đánh, chỉ để giữ. Mệnh lệnh của căn nhà lúc này chỉ cần có thế — một bàn tay nắm được nàng là cả sân có chỗ bám. Cao Minh bắt lấy cổ tay cậu ta giữa không trung, điểm nhẹ vào sợi chỉ điều khiển ở khuỷu — chỉ sợi chỉ ở khuỷu, không một sợi gân. Bàn tay buông thõng xuống. Cậu phụ bếp nhìn bàn tay mình như thể nó là của người lạ vừa trả lại.",
      "Sau lưng hắn, Tiểu Lan bỗng khẽ rùng mình. Hắn không cần quay lại cũng biết vì sao: cụm khóa ở cổng đang căng lên theo nhịp đọc trên hiên, và mỗi nhịp căng ấy chạy qua người nàng như chạy qua một sợi dây đàn bị gảy thử. Chuông chưa kêu mà nàng đã nghe thấy nó sau hai mắt; đèn chưa tắt mà ánh của chúng đã rát trên da. Nàng là đường dẫn sống của cả hệ thống này mười một năm — cánh cổng chưa mở, mà thân thể nàng đã biết trước từng động tác sắp xảy ra với nó. Nàng đứng thẳng thêm một chút, như người sắp bước xuống nước lạnh mà tự dặn mình không được co lại."
    ],
    "dialogue": [
      {
        "speaker": "Cao Minh",
        "text": "Nghe đây. Bổn tọa không giết người của nhà này. Kẻ nào ngã xuống đêm nay, là ngã vì sợi dây đang buộc cổ mình — đừng đổ cho kiếm của bổn tọa."
      },
      {
        "speaker": "Cao Minh",
        "text": "Chuông trước. Cho cái miệng ra lệnh của căn nhà này câm đi đã — rồi mới tới mắt của nó, và cuối cùng là tay của nó."
      },
      {
        "speaker": "Người gác",
        "text": "Thưa… thưa ông… tay tôi… nó kéo then… ông coi chừng… coi chừng phía sau…"
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài, cứ làm theo bản đồ của ngài. Tôi đứng được. Đừng vì tôi mà cắt sai thứ tự."
      },
      {
        "speaker": "Cao Minh",
        "text": "Tốt. Nhìn cho kỹ — mở một cánh cổng thôi, không cần ai phải chết thay nó đâu."
      }
    ],
    "choices": [
      {
        "id": "order_right",
        "text": "Theo thứ tự của cụm khóa: cắt mắt chuông trước cho lệnh câm đi, rồi tới mắt đèn, sau cùng mới tháo mắt xích thật chậm.",
        "next": "lh_gate_hold",
        "effects": {
          "civiliansSavedDelta": 2,
          "lanTrustDelta": 1
        }
      },
      {
        "id": "shield_first",
        "text": "Lấy thân che cho Tiểu Lan, một tay giữ nàng, một tay tháo cụm khóa theo thứ tự — chậm mà chắc.",
        "next": "lh_gate_hold",
        "effects": {
          "lanTrustDelta": 2,
          "lanMaterInfluenceDelta": 2
        }
      },
      {
        "id": "chain_first",
        "text": "Cắt thẳng mắt xích gánh tải trước cho nhanh — bất chấp phần tải của chuông và đèn sẽ giật ngược vào thân thể Tiểu Lan.",
        "next": "lh_wrong_order"
      }
    ]
  },
  "lh_gate_hold": {
    "id": "lh_gate_hold",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Nàng gọi tên họ",
    "backgroundId": "long-hai-dawn-gate",
    "location": "Cổng biệt thự Hứa Gia, Long Hải — trời chưa sáng hẳn",
    "narration": [
      {
        "text": "Hắn ra tay đúng như đã nói, thong thả như người ta tháo một nút thắt không đáng bận tâm. Kiếm quang không hướng vào một con người nào: nó lướt qua đầu Sáu đúng một sợi tóc và cắt phăng sợi dây vô hình buộc vào chiếc chuông đồng trên chòi cổng. Chuông không kêu — nó nứt. Một tiếng «keng» cụt, nghẹn, như một mệnh lệnh bị cắt ngang cổ họng. Cả sân khựng lại: hàng chục thân người đang tiến lên bỗng mất nhịp nửa bước, những bước chân vốn khớp nhau như một người bỗng lệch đi, va vào nhau, chao đảo.",
        "unless": "gateRescueDone"
      },
      {
        "text": "Trên hiên, bài gia quy của ông quản gia đứt ngang giữa một câu — cái miệng ra lệnh của căn nhà vừa câm, cái miệng mượn của nó cũng không còn gì để đọc. Mắt đèn theo sau: hai đốm lửa trong lồng sắt phụt tắt cùng một lúc khi kiếm quang đi qua, dù dầu trong đèn còn đầy. Vòng vây mù đi thật — những đôi mắt trắng dã chớp liên hồi, đầu quay qua quay lại tìm một nhịp điều phối không còn nữa; có người quay hẳn về phía tường, có người đứng yên như tượng.",
        "unless": "gateRescueDone"
      },
      {
        "text": "Đúng lúc ấy, một bà lão ở hàng sau ngã khuỵu. Cao Minh đã ở đó trước khi bà chạm đất — hắn đỡ lấy lưng bà bằng một tay áo, mắt vẫn không rời sợi xích trước mặt, đặt bà ngồi tựa vào cột hiên nhẹ như đặt xuống một món đồ người ta gửi nhờ. Gã cầm cuốc chém xuống theo phản xạ của kẻ khác; hắn nghiêng đầu tránh, điểm hai ngón tay vào cổ tay gã — chỉ cắt sợi chỉ điều khiển ở cổ tay, không chạm một sợi gân. Lưỡi cuốc rơi xuống gạch; gã gia nhân ôm lấy cổ tay mình, và lần đầu tiên trong đêm, một tiếng kêu đau vang lên bằng giọng của chính chủ nhân nó.",
        "unless": "gateRescueDone"
      },
      {
        "text": "Sau cùng, mắt xích. Hắn đặt một tay lên sợi sắt lạnh và cắt từng phân một, chậm như người ta hạ một vật nặng xuống giếng bằng dây, cho sức nặng của cả cụm chảy ra ngoài theo sợi xích mà tan — rung lên từng hồi, rồi yếu dần, yếu dần. Sợi xích tuột xuống nền gạch thành từng vòng, kêu loảng xoảng rồi nằm im như một con rắn chết. Cánh cổng sắt nặng nề tự trượt mở ra một khe — không ai đẩy; chỉ là lần đầu tiên sau nhiều năm, không còn thứ gì giữ nó đóng lại nữa. Con đường đất chạy xuống phía biển hiện ra trong sương sớm, trống và thẳng.",
        "unless": "gateRescueDone"
      },
      {
        "text": "Nàng vẫn đứng thẳng sau lưng hắn, tay nắm cuộn chỉ, mặt tái đi vì căng thẳng nhưng hơi thở còn đều. Cái giá của thứ tự đúng là ở chỗ đó: nó buồn tẻ, nó không có tiếng thét nào, không ai phải trả thay cho ai. Nhưng gia nhân thì vẫn đứng nguyên vị trí vòng vây, tay còn giơ lên lưng chừng, mắt trắng dã nhìn vào khoảng không. Mệnh lệnh cuối cùng — «giữ cổng» — vẫn vang vọng trong họ như tiếng ngân trong đầu sau khi chuông đã vỡ: thân thể họ chưa nhận được lệnh mới, cũng chưa ai cho phép họ buông xuống. Họ đứng như một đội quân bị bỏ quên giữa trận, không tiến, không lui, chỉ run lên rất khẽ.",
        "unless": "gateRescueDone"
      },
      {
        "text": "Cánh cổng đã mở — nhưng nó mở theo cách không ai trong sân này quên được. Mắt xích nằm chết trên nền gạch, đứt lìa từ nhát kiếm nóng vội; còn chuông và đèn, hai mắt kia, chỉ vừa mới câm và tắt trong những khắc cuối cùng, khi Cao Minh bắc chính kinh mạch của mình làm đường dẫn chịu thay cơn quá tải rồi mới cắt lại được đúng thứ tự: chuông trước, đèn sau. Trạng thái cuối cùng của cụm khóa giống hệt một cuộc tháo gỡ đúng luật — chuông câm, đèn tắt, xích đứt, cổng mở. Chỉ có lịch sử của nó là khác. Và lịch sử ấy đang nằm trong tay hắn.",
        "if": "gateRescueDone"
      },
      {
        "text": "Tiểu Lan không còn đứng được một mình. Nàng tựa gần hết sức nặng vào cánh tay hắn, hơi thở mỏng và gấp, mồ hôi lạnh ướt trán. Hắn đỡ nàng ngồi xuống bậc thềm một lát; nàng nhìn quanh sân, nhìn cánh cổng đang mở, và hỏi một câu rất khẽ — cổng mở rồi sao — như thể mấy khắc vừa qua, từ tiếng xích nổ đến cơn co giật xé người, đối với nàng chỉ là một khoảng trắng. Khoảng trắng ấy là phần ký ức hắn không lấy lại được cho nàng. Cuộn chỉ thêu của nàng nằm trên nền gạch cạnh cột cổng, lăn ra từ lúc nàng đổ xuống; hắn cúi xuống nhặt lên, phủi sạch bụi, đặt lại vào tay nàng — và những ngón tay nàng khép lại quanh nó, chậm chạp, như người học lại một thói quen cũ.",
        "if": "gateRescueDone"
      },
      {
        "text": "Gia nhân trong sân cũng không còn nguyên đội hình. Cơn quá tải đã chạy qua họ trước khi chạy vào nàng: người ngồi bệt xuống nền gạch ôm đầu, người vịn cột mà nôn khan, ông quản gia trên hiên ngừng đọc giữa một chữ, đứng chết trân, miệng còn mở. Tay phải của Cao Minh — bàn tay cầm kiếm — còn vương một vệt bỏng lạnh chạy dọc theo kinh mạch. Hắn nhìn vệt bỏng ấy một khắc, rồi giấu tay vào tay áo. Tay hắn run không phải chuyện nàng cần mang thêm vào lòng đêm nay.",
        "if": "gateRescueDone"
      },
      {
        "text": "Có một đứa nhỏ trong sân — thằng nhỏ bưng nước — bỗng ngồi phịch xuống ôm mặt khóc, tiếng khóc hoàn toàn là của chính nó; vậy mà không ai quay lại dỗ, vì chưa ai trong sân này nhớ ra rằng mình được phép quay đầu. Cơn quá tải đã buông họ ra, nhưng nó buông theo cách của một bàn tay vừa bị chém: các ngón tay vẫn còn co quắp nguyên hình cái nắm.",
        "if": "gateRescueDone"
      },
      {
        "text": "Ngồi một lát, nàng vịn tay áo hắn mà đứng dậy. Hắn đỡ — chỉ đỡ, không bế. «Tôi đứng được,» nàng nói, giọng còn khàn. «Chân còn run, nhưng đứng được.» Và kỳ lạ thay, chính lúc nàng tự đứng thẳng lại được, hàng gia nhân chết lặng kia mới bắt đầu có những cử động đầu tiên không thuộc về mệnh lệnh nào: một cái chớp mắt dài, một hơi thở sâu như người vừa ngoi lên khỏi mặt nước. Họ chưa tỉnh. Nhưng họ đang ở ngay bờ của sự tỉnh — chỉ còn thiếu một tiếng gọi.",
        "if": "gateRescueDone"
      },
      "Có một khoảnh khắc rất ngắn, sau khi cổng mở và trước khi bất cứ ai lên tiếng, cả sân im lặng đến mức nghe được tiếng sương rơi trên mái ngói. Rồi từ trong nhà chính, một ngọn đèn tự cháy lên — dư chấn cuối cùng của hệ thống — cháy đúng một nhịp rồi tắt ngấm như một tiếng nấc. Căn nhà đã buông tay khỏi cánh cổng này. Phần còn lại đang đứng giữa sân kia không còn là quân lính của nó nữa; họ chỉ là những con người chưa biết mình đã được trả tự do, như người tù đứng trước cửa ngục đã mở mà chưa dám bước, vì chưa nghe tiếng ai bảo đi.",
      "Cao Minh đã toan bước qua khe cổng. Nhưng Tiểu Lan đặt tay lên tay áo hắn — nhẹ thôi — và tự mình bước lên phía trước, đứng giữa khoảng sân, đối diện với những gương mặt đã hầu hạ, giam giữ và sợ hãi nàng suốt mười một năm. Hàng chục con người đứng cách nàng vài bước, tay còn cầm cuốc, cầm dao, cầm đòn gánh lưng chừng; không một ai tiến lên, không một ai lùi xuống. Qua những sợi chỉ vừa đứt ở đầu cổng, nàng cảm được họ như cảm được một căn phòng đầy người đang nín thở: họ đang chờ — chờ một mệnh lệnh mới, chờ một tiếng chuông, chờ bất cứ thứ gì quen thuộc hơn sự im lặng này. Và nàng biết, rõ như biết chính nhịp tim mình: nếu không ai nói với họ bằng tiếng người, họ sẽ đứng như thế cho tới khi căn nhà kịp nối lại sợi dây.",
      "Nàng đi chậm dọc theo hàng đầu của vòng vây, cách họ đúng một tầm tay. Đây là bà bếp mà mỗi sáng nàng nghe tiếng dao thớt qua hai lớp vách; đây là cậu phụ bếp mới bị cắt sợi chỉ ở khuỷu, bàn tay còn đang tự xoa lấy cổ tay mình; đây là người phu gánh nước mà vai áo đã sờn thành một vệt trắng vì đòn gánh mười mấy năm. Nàng biết từng người trong số họ — biết bằng tiếng ho, tiếng dép, tiếng gọi nhau ăn cơm vọng qua vách phòng nàng suốt mười một năm — như người ta biết người nhà qua tiếng chân ngoài cửa. Mười một năm, nàng thuộc họ như thuộc chính căn phòng của mình. Không một ai trong số họ ngẩng lên nhìn nàng. Mệnh lệnh đã chết, mà thói quen bị điều khiển thì chưa: họ chờ được gọi, như chờ một lượt chuông.",
      "Ở phía biển, chân trời đã rạn một vệt xám đầu tiên. Trong nhà chính sau lưng, những ngọn đèn bắt đầu lần lượt cháy lại — không theo thứ tự thay dầu quen thuộc, mà sai lạc, chỗ trước chỗ sau, như một bàn tay đang lóng ngóng tìm lại các ngón của mình. Căn nhà đang nối lại sợi dây của nó, chậm thôi, nhưng không ngừng. Cao Minh liếc vệt sáng ngoài biển rồi nhìn xuống sân: một khắc nữa, nhiều lắm là hai, trước khi sự im lặng này tự nó khép lại — theo cách này hay cách khác. Đâu đó trong nhà ngang, một tiếng chân chạy đã vang lên — chưa phải đuổi theo; chỉ là căn nhà bắt đầu nhớ ra nó còn có chân."
    ],
    "dialogue": [
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Mọi người… ở yên đó. Không ai đuổi theo nữa đâu. Tay ai còn cầm gì, thì buông xuống đi. Tôi xin mọi người."
      },
      {
        "speaker": "Người gác",
        "text": "Cô ơi… sao cổng mở rồi mà chân tôi nó không chịu bước… tôi đứng đây làm gì vậy, cô…"
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài, tôi muốn gọi tên họ. Từng người một, như gọi người trong nhà dậy ăn cơm sáng. Ngài cho tôi một khắc."
      },
      {
        "speaker": "Cao Minh",
        "text": "Một khắc thì một khắc. Gọi hay không — nàng quyết. Chỉ nhớ: trời không chờ ai đâu."
      }
    ],
    "choices": [
      {
        "id": "call_all_names",
        "text": "Để nàng gọi hết tên từng người, dù trời sắp sáng và thời gian không còn nhiều.",
        "next": "lh_coast_road",
        "effects": {
          "civiliansSavedDelta": 3,
          "lanTrustDelta": 2
        },
        "flags": {
          "namesCalledAtGate": true
        }
      },
      {
        "id": "hurry_through",
        "text": "Dìu nàng đi nhanh qua cổng — người trong nhà sẽ tự tỉnh sau.",
        "next": "lh_coast_road",
        "effects": {
          "civiliansSavedDelta": 1,
          "lanHealthDelta": -2
        }
      }
    ],
    "objective": "break_long_hai_ritual"
  },
  "lh_wrong_order": {
    "id": "lh_wrong_order",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Thứ tự sai",
    "backgroundId": "long-hai-dawn-gate",
    "location": "Cổng biệt thự Hứa Gia, Long Hải — giờ Dần",
    "entity": "entity_guard",
    "narration": [
      "Kiếm quang chém thẳng vào neo xích. Ý nghĩ ấy nghe rất phải: cổng mở trước, đường thoát trước, mọi chuyện khác tính sau. Sợi xích sắt đứt phăng trong một tiếng nổ khô khốc, hai đầu xích văng ra như hai con rắn bị chém, cánh cổng sắt bật mở tung — và trong đúng khoảnh khắc ấy, Cao Minh hiểu mình đã sai.",
      "Cần phải nói cho rõ: nhát kiếm ấy không sinh ra từ ngu dốt. Nó sinh ra từ một thứ nguy hiểm hơn nhiều — sự coi thường. Trong đầu hắn lúc ấy, cụm khóa này chỉ là một cái nút thắt của lũ phàm nhân, một trò vặt của căn nhà quê mùa này; trời gần sáng, một lưỡi dao phay trong tay kẻ bị điều khiển vừa sượt qua tay áo hắn, Tiểu Lan sau lưng đang lảo đảo vì đứng quá lâu giữa dư chấn của các điểm neo. Mở cổng trước. Hắn đã chém như chém một thứ không đáng phải nghĩ lần thứ hai. Hắn quên mất bài học ở giếng sau: trong hệ thống này, «nhanh» và «đúng» là hai thứ không bao giờ được phép đánh đổi cho nhau — và những sợi chỉ này, dù mỏng như tơ, lại đang buộc vào một người.",
      "Trong thần niệm của hắn, cảnh tượng diễn ra rõ đến tàn nhẫn: ba dòng sức nặng đang chạy trong hệ thống cổng bỗng mất đi dòng lớn nhất làm chỗ dựa, hai dòng còn lại không tan đi mà hợp lại, xiết lại, và cùng lao về một cửa thoát duy nhất — sống lưng của người con gái kia, nơi mọi sợi chỉ điều phối trong tòa nhà này đều từng chạy qua. Hắn nhìn thấy chúng hội lại như trăm con sông bị ép vào một khe đá hẹp, và hắn biết, trước cả khi nàng đổ xuống, rằng tiếng kêu sắp tới sẽ không thành tiếng.",
      "Neo xích là mắt neo chịu tải. Nó gánh sức nặng của cả chuông lẫn đèn, và toàn bộ sức nặng ấy từ lâu đã chạy qua một đường dẫn duy nhất: thân thể của người con gái đứng sau lưng hắn, kẻ mà mạng lưới đã dùng làm trục điều phối thay cho chính cơ thể nàng. Khi mắt gánh tải đứt trước, chuông và đèn không mất đi sức nặng của chúng — chúng dồn toàn bộ, cùng một lúc, giật ngược theo đường dẫn ấy mà đổ vào nàng, như nước của cả một hồ chứa bị tháo cống ngược vào một ống nhỏ.",
      "Hỗn loạn lan ra khắp sân như lửa gặp cỏ khô. Ông quản gia trên hiên đọc gia quy nhanh dần, nhanh dần, như một cái máy bị kẹt vòng lặp; đứa nhỏ bưng nước ôm đầu lăn ra giữa sân; một người đàn bà tự cào cấu hai tai mình như muốn móc ra một âm thanh chỉ mình cô nghe thấy. Không ai tấn công ai nữa — cơn quá tải không cần mệnh lệnh, nó tự nó đã là sự tra tấn đồng loạt, và mỗi con người trong sân đang phải một mình chịu phần của mình mà không hiểu chuyện gì đang xảy ra với thân thể họ.",
      "Ngón tay nàng bấu chặt vào tay áo hắn, chặt đến mức móng tay xuyên qua lớp vải. Giữa cơn co giật, nàng cố thốt ra được mấy tiếng rời rạc — không phải kêu cứu cho mình, mà là lo cho những người xung quanh, đúng như con người nàng vẫn thế từ ngày đầu hắn gặp. Chính mấy tiếng rời rạc ấy kéo hắn ra khỏi cơn sững sờ: nàng còn đó, phần người của nàng còn đang cố nói, nghĩa là đường dẫn chưa cháy đứt, nghĩa là còn kịp — nếu hắn đủ nhanh lần này theo đúng nghĩa của bài học: nhanh trong quyết định, và chậm, thật chậm, trong thứ tự ra tay.",
      "Chân khí của hắn tràn vào kinh mạch nàng như một dòng nước lạnh đổ vào lò lửa. Cơn quá tải chạm phải nó và khựng lại — không tan, chỉ chuyển hướng: nó chạy ngược lên cánh tay hắn, lạnh buốt và sắc như ngậm một miệng đầy mảnh sành, leo thẳng vào những kinh mạch đã mấy trăm năm không có thứ gì lạ dám xâm nhập. Tay phải của hắn — bàn tay cầm kiếm — run lên một cái rất nhẹ khi hắn giơ nó lên cắt neo chuông. Hắn nhìn cái run ấy như nhìn một hiện tượng lạ: tay này cầm kiếm mấy trăm năm chưa từng run. Run vì gánh đau thay một con kiến — chuyện này mà truyền về Lôi Thiên Sơn, hắn nghĩ, thì thành giai thoại cười cả trăm năm. Nhưng hắn không cười. Hắn nhìn gương mặt đang trắng dã của nàng giữa sân cổng đang cháy, và ý nghĩ ấy chết trong đầu hắn như một con côn trùng bị giẫm. Rồi hắn cắt.",
      "Tiểu Lan không kịp kêu. Người nàng cứng lại như bị điện giật, lưng cong lên, hai tay co quắp, cuộn chỉ thêu văng xuống nền gạch lăn vào bóng tối. Mắt nàng trợn lên — và trong một khoảnh khắc kinh hoàng nhất kể từ ngày hắn đặt chân đến thời đại này, tròng mắt nàng trắng dã đi, đúng màu mắt của hàng chục con người đang đứng quanh sân: phần điều phối bị chiếm đoạt trong nàng đang nuốt trọn phần còn lại dưới sức ép của cơn quá tải.",
      "Ngoài sân, gia nhân rú lên bằng hai thứ tiếng chồng lên nhau — tiếng của chính họ, và một thứ âm thanh khác đều đều, vô hồn, phát ra từ những cái miệng không còn nghe lời chủ nhân nữa. Vòng vây không tan mà siết lại, mù quáng, như một bàn tay bị co giật. Sáu đập đầu vào cột cổng, tự làm mình bị thương mà không dừng lại được. Mạng lưới không hề ra lệnh mới. Nó không cần. Cơn quá tải tự nó đã là một mệnh lệnh.",
      "Cao Minh quỳ xuống bên nàng ngay trên nền gạch lạnh. Lỗi là lỗi của người thợ, và hắn nhận nó theo cách của người thợ: không kêu trời, không tự trách dai — tự trách không cắt được sợi nào. Bài học hắn đã thuộc từ giếng sau, từ chuông cổng, từ đêm hắn hoàn tất bản đồ neo: tải phải được tháo ra ngoài, từng phần một, theo đúng thứ tự — không bao giờ được giật ngược vào trong. Hắn vừa phạm đúng điều ấy, vì một khắc coi thường đồ chơi của lũ kiến. Và người trả giá đang co giật trong tay hắn với đôi mắt không còn là của mình.",
      "Nhưng cánh cửa sửa sai chưa đóng hẳn. Chuông và đèn — hai mắt neo kia — vẫn còn đó, vẫn đang dồn tải. Nếu hắn kịp bắc một đường dẫn khác chịu thay cơn quá tải trong chốc lát, rồi cắt chuông, cắt đèn đúng thứ tự, dòng sức nặng sẽ lại chảy ra ngoài và tan đi. Đường dẫn khác ấy, trong sân này, chỉ có một: chính thân thể của hắn. Hắn nắm lấy cổ tay nàng, và mở kinh mạch của mình ra."
    ],
    "dialogue": [
      {
        "speaker": "Cao Minh",
        "text": "Giữ lấy. Nghe tiếng của bổn tọa đây. Tiếng trong đầu nàng — bỏ đi. Nghe bổn tọa."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Ngài… ngài… tay tôi… tôi không… đừng để tôi… làm hại ai…"
      },
      {
        "speaker": "Người gác",
        "text": "Cô ơi! Cô đừng có bề gì! Tôi… tôi không giữ cổng nữa đâu, cô bảo nó buông tôi ra đi!"
      }
    ],
    "choices": [
      {
        "id": "bridge_with_qi",
        "text": "Dùng chân khí của chính mình bắc cầu chịu tải thay nàng, rồi cắt lại từ neo chuông, đúng thứ tự.",
        "next": "lh_gate_hold",
        "effects": {
          "memoryIntegrityDelta": -3,
          "lanHealthDelta": -3
        },
        "flags": {
          "gateRescueDone": true
        }
      },
      {
        "id": "panic_cut",
        "text": "Hoảng loạn — chém phăng cả neo chuông lẫn neo đèn cùng một lúc cho dứt điểm.",
        "next": "lh_dead_order"
      }
    ]
  },
  "lh_dead_order": {
    "id": "lh_dead_order",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Dead End · Cắt sai thứ tự",
    "backgroundId": "long-hai-dawn-gate",
    "location": "Cổng biệt thự Hứa Gia, Long Hải",
    "entity": "entity_maid",
    "narration": [
      "Hai mắt neo còn lại bị chém đứt cùng một lúc. Trong một phần nghìn của nhịp thở, sân cổng sáng lên như có chớp — rồi tất cả im bặt. Chuông nứt làm đôi rơi xuống. Đôi đèn vỡ tung. Sức nặng của toàn bộ hệ thống cổng, không còn đường nào để tan ra ngoài, quật ngược vào đường dẫn duy nhất còn lại và cháy xuyên qua nó như lửa chạy theo dây dẫn đã tẩm dầu.",
      "Người con gái trong tay Cao Minh mềm xuống. Không co giật nữa. Không đau nữa. Đó mới là điều khiến hắn lạnh sống lưng hơn bất cứ tiếng thét nào: nàng nằm yên, ngực vẫn phập phồng đều đặn — quá đều đặn, đều như một cái máy được lên dây cót, đều như nhịp thay dầu đèn của căn nhà này. Phần điều phối sự sống của nàng, sau cơn quá tải, đã không còn giành lại được chút quyền nào: những gì từng là phản xạ tự chủ cuối cùng đã cháy mất trong dòng tải giật ngược, và giờ đây thân thể nàng chạy hoàn toàn bằng nhịp của kẻ khác, trơn tru và trống rỗng.",
      "Ngoài sân, sự yên tĩnh cũng trở lại theo cách đáng sợ nhất: gia nhân lần lượt đứng thẳng dậy, phủi áo, và bắt đầu dọn dẹp — nhặt chiếc chuông nứt, dựng lại đôi đèn vỡ, xếp những vũ khí rơi vãi thành một đống ngay ngắn ở góc sân. Có người còn nhặt được cuộn chỉ thêu của nàng lăn dưới đất, phủi sạch bụi, gấp lại cẩn thận và đặt lên bậc thềm — như cách người ta chăm sóc đồ đạc của một vị chủ nhân vắng mặt. Căn nhà đã có lại trật tự của nó. Nó ân cần, chu đáo, và hoàn toàn không còn cần đến ý kiến của người con gái mà nó phục vụ.",
      "Cao Minh bế nàng lên bậc thềm. Lần này nàng không phản đối việc được bế — nàng không phản đối bất cứ điều gì nữa, và khi hắn đặt nàng ngồi xuống chiếc ghế mà một gia nhân đã lặng lẽ mang ra đặt sẵn, nàng ngồi xuống đúng tư thế được sắp đặt, hai tay đặt ngay ngắn lên đùi, mắt nhìn thẳng về phía trước, chờ. Một cơn gió sớm thổi qua sân, vạt áo nàng bay phần phật; nàng không đưa tay giữ. Đến cả phản xạ ấy — phản xạ của một con người với cơn gió — giờ cũng phải chờ được ra lệnh mới có.",
      "Nàng mở mắt. Đôi mắt trong veo, bình thản, trắng dã. Nàng nhìn hắn, nhận ra hắn — trí nhớ của nàng vẫn còn nguyên, đó là sự tàn nhẫn sau chót — và nàng hỏi, bằng giọng của chính nàng nhưng đã mòn đi hết những gợn sóng của một con người: có lệnh gì cho nàng không. Nàng sẽ làm theo. Nàng sẽ làm theo bất cứ điều gì, từ nay, mãi mãi, không cần hỏi lại, không cần từ chối, không cần được hỏi ý kiến.",
      "Cô hầu đứng gần cổng nhất nghiêng đầu nhìn cảnh ấy, gương mặt rách nát không biểu lộ gì. Trong sân, gia nhân dần đứng thẳng dậy, hết co giật, hết hoảng loạn — mạng lưới đã có lại trật tự của nó, một trật tự hoàn hảo hơn trước, vì trục điều phối của nó giờ đã thôi chống cự. Nó thắng mà không cần đánh thêm một trận nào. Người duy nhất trong sân còn tự do là Cao Minh, và tự do của hắn giờ vô dụng như một thanh kiếm sắc để cắt một sợi dây đã thắt chết nút.",
      "Hắn vẫn có thể chém. Hắn luôn có thể chém — một kiếm này đưa xuống, cả căn nhà, cả mạng lưới của nó, không còn lại gì để chôn. Nhưng bài học hắn vừa trả bằng giá đắt nhất còn nóng hổi: cắt hết mọi mắt nối lúc này, thân thể kia sẽ ngừng thở — vì giờ đây không còn phần nào của sự sống trong nàng nằm ngoài hệ thống đó nữa. Giữ nàng sống thì giữ luôn cái ách. Cắt cái ách thì mất nàng. Và người con gái từng trả bằng ký ức để được nói tiếng từ chối, giờ không còn ở đây để được hỏi ý kiến về bất cứ lựa chọn nào trong hai lựa chọn ấy.",
      "Đây không phải con đường mà câu chuyện này có thể đi tiếp."
    ],
    "dialogue": [
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài. Ngài có lệnh gì cho tôi không? Ngài cứ dạy, tôi xin làm theo."
      },
      {
        "speaker": "Cao Minh",
        "text": "…Bổn tọa không có lệnh gì cho nàng cả. Chưa bao giờ có."
      }
    ],
    "choices": [
      {
        "id": "retry",
        "text": "Trở lại khoảnh khắc trước nhát kiếm vào neo xích",
        "retry": true
      }
    ],
    "deadEnd": true
  },
  "lh_coast_road": {
    "id": "lh_coast_road",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Đường ven biển",
    "backgroundId": "long-hai-coast",
    "location": "Đường ven biển Long Hải — rạng sáng",
    "narration": [
      {
        "text": "Nhưng trước khi bước qua cổng, nàng đã làm việc nàng xin một khắc để làm. Nàng gọi người gác trước: «Sáu — anh Sáu.» Cái tên khâu chỉ đỏ trên cổ áo như lay tỉnh chủ nó — thân người cao lớn khựng lại, đôi tay kéo then từ từ buông xuống. «Cô… cô gọi tôi… lâu lắm rồi không ai gọi tôi bằng tên…» Nàng gọi bà lão nhặt đậu ở sân trong: «Bà Chín, bà bỏ cái rổ xuống đi, đậu nhặt cả đời cũng không hết đâu» — đôi tay nhặt những hạt đậu không có thật từ từ dừng lại, úp xuống đùi. Nàng gọi ông quản gia đang đứng chết trân trên hiên, miệng còn mấp máy gia quy: «Bác quản, thôi, đừng đọc nữa. Hôm nay nhà mình… nghỉ một bữa.» Ông lão khựng lại giữa một câu đọc, rồi ngồi xuống bậc thềm, hai tay ôm đầu.",
        "if": "namesCalledAtGate"
      },
      {
        "text": "Giọng nàng khàn đi giữa chừng, người run lên vì kiệt sức. Một cô hầu trẻ — chính là Hường — bỗng bước lên một bước, không ai ra lệnh, bưng một gáo nước dừa đưa ra: hành động tự do đầu tiên của căn nhà trong đêm nay. Nàng đón lấy bằng cả hai tay, uống một ngụm, gật đầu cảm ơn. Gã cầm cuốc là người cuối cùng buông vũ khí: «Anh Tư Rỗ, đặt cuốc xuống, tay anh chảy máu rồi» — gã quỳ sụp xuống sân, ôm mặt khóc bằng tiếng khóc của chính mình. «Kiếm của bổn tọa cắt được dây,» Cao Minh nói khẽ khi đỡ khuỷu tay nàng. «Còn nàng — nàng gọi được người ở đầu dây bên kia.» Rồi nàng vịn tay áo hắn, bước qua khe cổng.",
        "if": "namesCalledAtGate"
      },
      {
        "text": "Họ không nán lại. Tiểu Lan bước qua khe cổng giữa hai hàng gia nhân còn đứng chết lặng trong mệnh lệnh cuối cùng chưa tan — không ai gọi tên họ, không ai bảo họ buông tay xuống, và họ cứ đứng như thế, nhìn đoàn người đi qua như nhìn một việc xảy ra trong mơ của người khác. Chỉ đôi mắt còn tỉnh táo của Sáu là dõi theo nàng cho tới khi bóng nàng khuất hẳn sau trụ cổng — một mình anh ta tỉnh, giữa một sân đầy người chưa được ai đánh thức. «Cô…» anh ta gọi với theo một tiếng, nhỏ đến mức tan ngay vào sương, rồi chính anh ta cũng ngạc nhiên vì tiếng gọi ấy là của mình. Không ai đáp lại. Đoàn người đã đi xa rồi. Cái giá của việc đi sớm hiện ra ngay sau lưng họ: không một ai trong sân ấy níu chân, dọn đường hay đánh lạc hướng cho đoàn trốn — và đuốc trong nhà, vì thế, cháy lên sớm hơn.",
        "unless": "namesCalledAtGate"
      },
      "Ngoái lại sau lưng, cánh cổng sắt đang từ từ khép lại theo sức nặng của chính nó — không ai đóng, không ai giữ; nó chỉ đơn giản trở về vị trí mà nhiều năm nay nó vẫn ở. Tiểu Lan nhìn nó khép cho tới khi chỉ còn một vạch sáng, rồi quay mặt về phía biển. Từ đây, mỗi bước chân đều là đất nàng chưa từng đặt chân lên.",
      "Con đường đất chạy dọc bờ biển hiện ra khỏi sương như một sợi chỉ xám. Bên trái là biển, mặt nước lúc rạng sáng phẳng và lạnh, từng đợt sóng nhỏ vỗ vào bãi cát nghe như tiếng ai đếm nhịp. Bên phải là hàng phi lao đứng im trong sương mù, và xa hơn nữa là mái ngói của tòa biệt thự vừa bị bỏ lại, đèn đang lần lượt cháy lên trở lại theo một thứ tự sai lạc hẳn.",
      "Tiểu Lan đi chậm. Thân thể nàng đang chạy bằng phần sinh lực dự trữ cuối cùng của chính mình, sau khi cụm khóa ở cổng bị tháo. Mỗi bước chân là một lần nàng tự ra lệnh cho đôi chân mình — điều người thường làm mà không cần nghĩ, còn nàng phải nghĩ từng bước, như người mới học đi lại sau một cơn bạo bệnh. Vậy mà khi Cao Minh khẽ nghiêng người, đưa mắt hỏi mà không thành lời, nàng lắc đầu ngay.",
      "Đi được một quãng, đường men theo một triền đá thấp, mặt đá ướt sương trơn như bôi mỡ. Tiểu Lan dừng lại một lúc, rồi vén áo, bám vào một cành phi lao chìa ra mà leo qua — chậm, vụng, hai lần suýt trượt — nhưng nàng không đưa tay ra cầu cứu, và hắn cũng không đưa tay ra đỡ: hắn chỉ đi sát phía dưới, ở đúng vị trí mà nếu nàng ngã, nàng sẽ ngã vào hắn chứ không ngã xuống đá. Sang được bên kia, nàng đứng thở hổn hển, mặt đỏ lên vì một thứ hả hê rất trẻ con: một triền đá nhỏ xíu, mà là triền đá đầu tiên trong đời nàng tự mình leo qua.",
      "Đám đuốc đuổi theo không phải ai cũng còn sức. Một người trong bọn — thằng nhỏ bưng nước, mới mười lăm tuổi — vẫn chạy ở hàng đầu, nước mắt chảy ròng ròng trên mặt, miệng há ra như cố gọi mà không thành tiếng; thân thể nó bị đẩy đi quá giới hạn của một đứa trẻ, hai chân đã không còn biết tránh đá nhọn. Phía sau nó, một người đàn ông trung niên bỗng đổ gục mặt xuống đường, nằm im không dậy nữa — và người chạy sau anh ta lặng lẽ bước vòng qua thân người ấy mà đi tiếp, không dừng, không nhìn. Cao Minh nhìn cả hai hình ảnh ấy, và ghi chúng vào chỗ hắn vẫn ghi những việc cần tính sổ: không phải với đám người đang chạy — với thứ đang giật dây họ. Kẻ giật dây, hắn sẽ gặp sau.",
      "Sau lưng họ, đuốc đã cháy lên. Không nhiều — dăm bảy ngọn, chập chờn trong sương, di chuyển theo một hàng dọc mé đường biển: những người nhanh chân nhất của biệt thự, bị dư lệnh cuối cùng đẩy đi truy đuổi. Họ không chạy theo dấu chân. Họ chạy theo sợi chỉ vô hình nối về phía người con gái đang đi — mạng lưới tìm trục của nó như kim địa bàn tìm hướng bắc, không cần mắt, không cần đường.",
      "Nhưng có một điều đang thay đổi. Càng đi xa khỏi biệt thự, hàng đuốc sau lưng càng loạng choạng. Một ngọn đuốc bỗng khựng lại giữa đường rất lâu, rồi tắt ngấm — người cầm nó đã ngồi bệt xuống vệ đường ôm đầu, ngoài tầm với của những điểm neo còn lại, lần đầu tiên tỉnh dậy ở một nơi do chính đôi chân mình chọn dừng. Tầm của điểm neo có giới hạn — căn nhà kia lớn đến đâu cũng không ôm nổi cả bờ biển này.",
      "Trời sáng dần. Ánh sáng đầu tiên rải lên mặt biển một lớp bạc mỏng, và lần đầu tiên kể từ khi đặt chân đến Long Hải, Cao Minh nghe thấy tiếng chim biển. Tiểu Lan cũng nghe thấy. Nàng ngẩng mặt lên một thoáng, hít vào một hơi dài, và dù đôi chân vẫn đang run, khóe miệng nàng khẽ động đậy như muốn cười mà chưa dám tin là mình được phép.",
      "Phía trước, con đường bắt đầu rẽ: một nhánh ôm sát mé biển đi xuống phía lạch nước nơi thuyền của ngư ông đang chờ trong bóng tối cuối cùng của đêm; một nhánh vòng vào đất liền, qua lũy tre và vườn dừa, nơi chiếc xe chở cỏ của người nhà Thu Nguyệt đã đậu sẵn từ trước giờ gà gáy. Cả hai con đường đều đã được chuẩn bị bởi những con người đã chọn đứng về phía nàng — mỗi đường một cái giá."
    ],
    "dialogue": [
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài, tôi còn đi được. Ngài đừng… đừng nhìn tôi như nhìn một món đồ sắp vỡ. Tôi đã đi được tới đây bằng chân của mình, thì đi thêm được nữa."
      },
      {
        "speaker": "Cao Minh",
        "text": "Bổn tọa không nhìn nàng như đồ dễ vỡ. Đồ dễ vỡ thật thì đã vỡ trong tay kẻ khác từ lâu rồi. Cứ đi — bổn tọa không vội."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài, mùi này… là mùi biển phải không? Hồi nhỏ tôi chỉ được ngửi mùi biển qua cửa sổ, lẫn với mùi thuốc. Hóa ra khi đứng ngay bên nó, nó… nó to thế này."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Chỗ nước nông chạy giữa hai bãi cát kia, người ở đây gọi là lạch, thưa ngài. Thuyền ra vào phải chờ nước lớn. Hàng cây lá kim kia là phi lao, trồng để chắn gió biển."
      },
      {
        "speaker": "Cao Minh",
        "text": "Lạch. Phi lao. Quê bổn tọa không có biển, nên cũng không có mấy chữ ấy. Cứ nói — bổn tọa đang học."
      },
      {
        "speaker": "Cao Minh",
        "text": "Quê của bổn tọa là núi — Lôi Thiên Sơn, mây phủ quanh năm, không có biển. Lần đầu bổn tọa thấy biển, bổn tọa đứng nhìn nó còn lâu hơn nàng nhìn bây giờ. Có những thứ sinh ra đã rộng hơn mọi căn nhà người ta xây để nhốt nhau."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Phía sau… họ còn đuổi theo kịp không, thưa ngài?"
      },
      {
        "speaker": "Cao Minh",
        "text": "Họ đuổi theo sợi chỉ, không phải theo nàng. Mà sợi chỉ thì có tầm của nó. Cứ đi — càng xa, nó càng chùng."
      }
    ],
    "choices": [
      {
        "id": "open_shore",
        "text": "Đi thẳng đường mé biển trống trải — nhanh, nhưng phơi mình dưới mắt kẻ đuổi theo.",
        "next": "lh_road_choice",
        "effects": {
          "lanHealthDelta": -2
        }
      },
      {
        "id": "casuarina_grove",
        "text": "Lánh vào rặng phi lao — chậm hơn, nhưng sương và bóng cây che đi sợi chỉ truy đuổi.",
        "next": "lh_road_choice",
        "effects": {}
      }
    ],
    "objective": "escape_long_hai"
  },
  "lh_road_choice": {
    "id": "lh_road_choice",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Ngã rẽ cuối đường",
    "backgroundId": "long-hai-coast",
    "location": "Ngã rẽ xuống lạch thuyền, bờ biển Long Hải",
    "narration": [
      "Ngã rẽ nằm ngay sau một mỏm đá phủ phi lao. Từ đây, tiếng sóng nghe rõ hơn, và trong bóng tối xanh xám của rạng sáng, Cao Minh thấy cả hai con đường cùng lúc: phía dưới mỏm đá, mặt lạch nước phẳng lặng như gương, chiếc thuyền gỗ của lão ngư ông nằm im sát bờ, bóng người gầy gò của ông ngồi ở mũi thuyền, không đốt đèn, không gây một tiếng động — ông đã chờ ở đó từ lúc trời còn tối mịt, như đã hứa trong buổi dò đường hôm trước. Phía đất liền, qua màn sương mỏng, chiếc xe bò chất đầy cỏ khô đứng khuất sau lũy tre; người đánh xe là anh họ của Thu Nguyệt, một nông dân ít nói, đã nhận lời chở «cỏ» xuống bến dưới mà không hỏi trong cỏ có gì.",
      "Lão ngư ông đã chờ ở lạch từ khi trời còn tối mịt — chờ một mình, không bạn chài, vì ông không muốn kéo thêm ai vào việc này. Chiếc thuyền của ông không lớn, ván gỗ đã vá hai chỗ, nhưng được chèn chống cẩn thận, nước ngọt và một bọc cơm nắm gói lá chuối đặt sẵn ở khoang sau — phần của người khách mà ông không hề được dặn phải chuẩn bị. Bên đất liền, anh họ của Thu Nguyệt cũng đã làm phần của mình chu đáo không kém: dưới lớp cỏ khô của xe là một lớp chiếu cói và một ấm nước, và vợ anh ta — một người đàn bà không hề biết mặt cô chủ — đã nhét thêm mấy củ khoai nướng vào trong cỏ, «cho người bệnh ăn dọc đường», như lời anh ta kể lại ngắn gọn.",
      "Gió sớm thổi qua ngã rẽ mang theo mùi muối và mùi khói bếp của làng chài xa — hai thứ mùi của một buổi sáng bình thường, thứ buổi sáng mà mười tám năm nay nàng chỉ được ngửi qua song cửa. Nàng nhắm mắt một thoáng, để mặc cơn gió lùa qua mặt: không ai ra lệnh cho cơn gió này, và nó cũng không cần ai cho phép mới được chạm vào nàng.",
      "Cao Minh nhìn hai sự chuẩn bị ấy và thấy một điều buồn cười: mạng lưới kia mạnh vì nó vô danh và đồng loạt — còn đường thoát của nàng đêm nay lại được mở bằng những thứ có tên có tuổi: một bọc cơm nắm, một ấm nước, mấy củ khoai nướng không ai yêu cầu. Không phải bằng kiếm. Bằng ân tình của những con kiến mà căn nhà kia vẫn coi là không đáng đếm.",
      "Trời đã sáng rõ hơn một chút; ở phía làng chài xa xa, khói bếp đầu tiên bắt đầu bốc lên, thẳng và yên, báo hiệu một ngày hoàn toàn bình thường đang bắt đầu cho những con người không hề biết đêm nay, cách họ vài dặm đường, một cuộc đời vừa được giành lại.",
      "Nàng ngồi xuống một tảng đá bên đường, làm một việc khiến hắn chú ý: nàng đặt hai ngón tay lên cổ tay mình, nhắm mắt, đếm — bắt chước đúng cách hắn đã bắt mạch cho nàng lần đầu, vụng về mà nghiêm túc, như một học trò nhỏ đang tập lại bài học về chính cơ thể mình. Hồi lâu, nàng mở mắt: «Mạch vẫn chạy. Chạy theo nhịp của tôi.» Nàng nói câu ấy nhỏ thôi, mà như tuyên bố một chủ quyền. Trong mười tám năm, nhịp mạch ấy đã từng là tài sản của kẻ khác; đêm nay nàng đang học cách nghe nó như nghe tiếng của mình.",
      "Sau lưng, tiếng chân của đám truy đuổi đã nghe rõ hơn — không nhanh, vì họ cũng đang ở cuối giới hạn của những điểm neo xa, nhưng đều và không nghỉ, như tiếng nước rỉ không bao giờ cạn. Sương đang tan dần; một khi mặt trời lên hẳn, hai người sẽ không còn gì che chắn trên con đường trống này. Ngã rẽ không cho phép chần chừ lâu — và nàng, như cảm được điều đó, đứng dậy trước cả khi hắn lên tiếng, phủi lại vạt áo, sẵn sàng cho lựa chọn của chính mình.",
      "Cả hai con đường đều là những món nợ ân tình mà nàng và hắn đã gieo trong những ngày qua, giờ đến lúc thu về. Đường biển nhanh và thẳng: thuyền ra khỏi lạch là vào vùng nước mở, đuốc trên bờ có cháy sáng đến đâu cũng không đuổi theo được một con thuyền. Nhưng gió sớm nay đang lên, mặt nước ngoài khơi không yên, và thân thể nàng — đang chạy bằng phần sinh lực dự trữ mỏng manh — sẽ phải chịu những đợt sóng dồi liên tiếp không ngừng nghỉ.",
      "Đường bộ chậm và vòng: xe cỏ đi qua hai thôn, qua một trạm gác đường mà người của Giới Phòng thỉnh thoảng vẫn ghé uống nước chè — nhưng người đánh xe thuộc lòng từng ổ gà, từng lối mòn sau vườn dừa, và quan trọng hơn, chiếc xe ấy là một phần của đời sống bình thường nơi này: không ai chặn một xe cỏ lúc rạng sáng để xem trong cỏ có một vị tiểu thư bị xóa tên hay không. Ẩn mình giữa cái thường ngày đôi khi chắc hơn ẩn mình giữa biển khơi.",
      "Sau lưng, hàng đuốc trong sương đã gần hơn một quãng — những bước chân không biết mệt, vì cái mệt của họ không được phép lên tiếng. Tiểu Lan nhìn hai con đường, rồi nhìn hắn. Lần này nàng không chờ hắn quyết. Nàng đang tự cân nhắc, bằng cái đầu tỉnh táo đáng kinh ngạc của một người vừa giành lại quyền cân nhắc chưa đầy một đêm — và hắn để yên cho nàng cân nhắc, dù từng nhịp thở trôi qua đều có giá của nó.",
      "Cuối cùng, dù chọn đường nào, điểm đến vẫn là một: chiếc bến nhỏ ở cuối lạch, nơi mọi con đường của Long Hải đều đổ về mặt nước. Ngư ông đã hẹn sẽ gặp lại ở đó dầu họ đi đường nào — thuyền của ông sẽ đưa họ qua khúc nước cuối cùng, ra khỏi vùng đất mà tên của nàng đã bị xóa. Câu hỏi chỉ là họ sẽ tới bến ấy bằng cách nào, và phải trả thêm những gì trên đường tới đó."
    ],
    "dialogue": [
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài, hai con đường này… đều là người ta liều mình vì tôi. Tôi không muốn chọn sai, để rồi ân tình của họ thành vô ích."
      },
      {
        "speaker": "Cao Minh",
        "text": "Ân tình không dùng đến cũng không mốc. Người đánh xe đã dám đậu xe ở đó — thế là xong phần của anh ta rồi. Nàng chọn theo đôi chân mình; đêm nay chúng là của nàng, nàng nghe chúng rõ hơn bổn tọa."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài, còn điều này ngài chưa biết: trạm gác trên đường bộ là của Giới Phòng, nhưng họ chỉ lật cỏ tìm hàng lậu khi có lệnh trên đưa xuống. Xe cỏ của dân thôn đi qua mỗi sáng — họ quen mặt, ít khi lục soát. Tôi nghe người làm nói chuyện ấy suốt mười một năm."
      },
      {
        "speaker": "Cao Minh",
        "text": "Một cơ quan giữ nước bằng cách lật cỏ. Cũng có lý của nó. — Tốt, nàng biết đường ở đây hơn bổn tọa nhiều."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Dạ. Vậy thì tôi xin được chọn một lần này nữa."
      }
    ],
    "choices": [
      {
        "id": "sea_route",
        "text": "Đường biển — xuống lạch, lên thuyền của ngư ông, ra thẳng vùng nước mở.",
        "next": "lh_last_pushback",
        "effects": {
          "lanHealthDelta": -1,
          "cluesHuaGiaDelta": 1
        }
      },
      {
        "id": "land_route",
        "text": "Đường bộ — nằm trong xe cỏ của người nhà Thu Nguyệt, vòng qua các thôn xuống bến.",
        "next": "lh_last_pushback",
        "effects": {
          "lanTrustDelta": 1,
          "civiliansSavedDelta": 1
        },
        "flags": {
          "cartRouteTaken": true
        }
      }
    ]
  },
  "lh_last_pushback": {
    "id": "lh_last_pushback",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Lần phản kháng cuối cùng",
    "backgroundId": "long-hai-coast",
    "location": "Cuối đường xuống bến, bờ biển Long Hải",
    "entity": "entity_maid2",
    "narration": [
      {
        "text": "Chặng xe cỏ chấm dứt ở ngã ba đầu thôn. Giới Phòng đã dựng gác ở đó — đuốc cắm hai bên đường, họ lật từng bó cỏ. Phía sau, đuốc truy đuổi đã hiện cuối đường làng. Xe rẽ xuống vệ đường; lúc đám gác còn nhìn theo xe trống, hai người tuột khỏi lớp cỏ phía bờ ruộng, cắt qua đồng tối về phía bến. Đường bộ hết an toàn từ đó.",
        "if": "cartRouteTaken"
      },
      "Họ chỉ còn cách chiếc bến một quãng ngắn thì đám truy đuổi tới nơi. Họ đến không thành hàng ngũ nữa — điểm neo đã ở xa sau lưng, mệnh lệnh trong họ đã loãng đi như tiếng gọi qua mấy lớp sương — nhưng phần dư lệnh cuối cùng vẫn đẩy họ đi: những thân người lảo đảo trên đôi chân đã rớm máu vì đá nhọn, mắt trắng dã, tay vươn ra phía trước. Đi đầu là cô hầu má rách, gương mặt quen thuộc của những đêm nghi lễ; sau cô là bà bếp, hai người phu, và một lão bộc già đi bằng cả hai chân trần trên sỏi mà không hề biết đau.",
      "Cao Minh đã tính xong thế kiếm. Hắn có thể quét ngã cả đám người ấy mà không làm ai gãy một cái xương — điểm vào các khớp đang bị điều khiển, cắt những sợi chỉ còn sót, để họ ngồi xuống như những con rối hết dây. Mất chừng mười nhịp thở. Nhưng sau đám này, trong sương, còn những bóng người khác đang tới; mỗi lần hắn ra tay là một lần những thân thể kia bị dùng làm khiên thịt giữa hai thứ sức mạnh không thuộc về họ. Hắn chưa kịp rút kiếm thì nàng đã bước lên trước hắn.",
      "Nhìn gần, đám truy đuổi không còn đáng sợ nữa — họ đáng thương đến mức khó nhìn thẳng. Thằng nhỏ bưng nước chạy bằng hai bàn tay đã rách vì ngã; bà bếp thở khò khè như ống bễ thủng; lão bộc già hai chân trần lê trên sỏi, mỗi bước để lại một dấu máu mờ. Và trong đôi mắt trắng dã của từng người, phần người của họ vẫn còn đó, nhìn ra ngoài như nhìn qua một lớp băng mỏng — van xin một điều mà miệng họ không được phép nói: đừng để chúng tôi làm điều này. Cô hầu má rách đi đầu, miệng mấp máy mãi mới thành được mấy tiếng vỡ vụn, không phải mệnh lệnh, mà là một lời kêu cứu bị xé ra khỏi cổ họng bằng tất cả sức lực còn lại của cô.",
      "Một người phu trẻ trong đám, khi đôi chân bị điều khiển khựng lại, đã kịp thốt ra một câu trọn vẹn đầu tiên của chính mình — anh ta xin lỗi. Xin lỗi cô chủ vì đang đuổi theo cô chủ. Cái nghịch lý ấy — một con người phải xin lỗi vì hành động của chính đôi chân mình — là toàn bộ sự tàn ác của căn nhà kia gói gọn trong một câu nói. Bàn tay đặt trên chuôi kiếm của Cao Minh siết lại một cái — không phải vì đám người đang chạy, mà vì thứ đang giật dây họ: cái thứ mượn tay kiến để làm việc bẩn, rồi đứng ngoài mà nhìn. Hắn khẽ cười, rất lạnh. Gan của thứ đó, hắn nghĩ, cũng không nhỏ.",
      "Trước khi bước lên, nàng làm một việc rất nhỏ: nàng mở cuộn chỉ thêu, nhìn hàng nút thắt đếm ngày của mình một lúc lâu. Hắn không biết nàng nghĩ gì trong khoảnh khắc ấy — sau này cũng không bao giờ biết trọn — nhưng có lẽ nàng đang tự hỏi, nếu cái giá lần này là những ngày tháng mà hàng nút thắt kia đại diện, nàng có dám trả không. Rồi nàng cuộn chỉ lại, cất vào tay áo, và bước lên. Người con gái đã từng không dám bước qua ngưỡng cửa phòng mình, giờ tự mình bước ra đứng chắn giữa hai thứ sức mạnh không thuộc về nàng, bằng thứ vũ khí duy nhất nàng có: tư cách của một con người từ chối.",
      "Nàng đứng giữa đường, đối diện với những gương mặt đã hầu hạ mình. Và nàng làm điều mà chỉ một mình nàng trong cõi đời này làm được: nàng không ra lệnh ngược lại, không tranh giành quyền điều khiển như mọi lần trước. Nàng đẩy ngược vào toàn bộ mạng lưới còn sót lại ở bờ biển này một tiếng từ chối — không phải bằng sức, mà bằng chính tư cách của cái trục mà mạng lưới đang mượn: mệnh lệnh chạy qua nàng phải qua được nàng, và nàng nói không. Không với cái lệnh «bắt lấy». Không với bàn tay đang vươn ra. Không, thay cho tất cả những người đang bị buộc phải chạy trên đôi chân rớm máu của chính mình.",
      "Đám người khựng lại như đâm sầm vào một bức tường vô hình. Rồi, từng người một, họ ngồi xuống — không phải ngã quỵ, mà ngồi xuống từ từ, như những con rối được một bàn tay dịu dàng đặt xuống đất. Bà bếp òa khóc thành tiếng, khóc bằng giọng của chính bà, tay ôm lấy đôi chân trần đầy máu của mình. Lão bộc già ngơ ngác nhìn quanh, hỏi một câu ngớ ngẩn và đau lòng: «Ủa, sao tui ra tới ngoài này?» Cô hầu má rách là người cuối cùng ngồi xuống; cô nhìn Tiểu Lan rất lâu, và trong đôi mắt trắng dã ấy, một giọt nước mắt thật — của chính cô — lặng lẽ lăn xuống.",
      "Những âm thanh đầu tiên của tự do vang lên rời rạc và vụng về: bà bếp bật cười một tiếng — rồi giật mình vì chính tiếng cười của mình, đưa tay lên bịt miệng như đứa trẻ vừa lỡ lời. Lão bộc già ngồi bệt xuống đường, nhìn đôi chân đầy máu, thẫn thờ hỏi có ai có nước không. Thằng nhỏ bưng nước thì khóc — khóc to, khóc như trẻ con, không giấu giếm, hai tay dụi mắt đến lem luốc cả mặt. Không ai trong bọn họ hiểu vì sao mình lại ở ngoài đường lúc trời sắp sáng. Nhưng lần đầu tiên sau rất nhiều năm, sự không hiểu ấy là của chính họ — một sự bối rối hoàn toàn thuộc về con người.",
      "Nhưng cái giá thì nàng đã biết trước, và nàng trả không chút do dự nào để hắn kịp ngăn. Lần phản kháng này lớn hơn mọi lần trước cộng lại: nàng đã đẩy ngược qua toàn bộ phần mạng lưới còn chạm tới mình, và mạng lưới, khi rút lui, kéo theo những gì nó đang nắm giữ trong nàng. Nàng quay lại phía hắn, mỉm cười như vừa làm xong một việc rất phải — rồi nụ cười đông cứng. Nàng nhìn chiếc bến, nhìn mặt nước, nhìn hắn, với ánh mắt của người tỉnh dậy giữa một nơi hoàn toàn xa lạ.",
      "Nàng hỏi rất khẽ, rất lễ phép, như hỏi một người khách mới gặp: chúng ta đang ở đâu đây, và vì sao tay nàng lại run thế này. Nàng không nhớ cánh cổng. Không nhớ những cái tên vừa gọi. Không nhớ mình đã tự trả lời «có» trước ngưỡng cửa. Cả cuộc ra đi — toàn bộ đêm nay — đã bị lấy đi như một trang sách bị xé khỏi cuốn sổ, chỉ còn lại mép giấy rách và một nỗi hoảng sợ mơ hồ không rõ nguyên do trong ngực nàng."
    ],
    "dialogue": [
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài… xin ngài đừng trách họ. Họ không muốn chạy đâu. Chân họ… chân họ chảy máu cả rồi."
      },
      {
        "speaker": "Cao Minh",
        "text": "Bổn tọa biết. Bổn tọa cũng biết nàng sắp làm gì. Cái giá lần này không nhỏ đâu — nàng tính kỹ rồi chứ?"
      },
      {
        "speaker": "Cô hầu",
        "text": "Cô ơi… cô… cứu… tay em nó cứ đi… em không muốn… cô ơi…"
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Dạ, tôi biết. Nhưng nếu phải có người trả giá để họ được ngồi xuống… thì để tôi. Họ đã trả thay tôi mười tám năm rồi."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa… thưa ngài, chúng ta… đây là đâu? Sao trời đã sáng rồi? Tôi… tôi có làm gì sai không?"
      }
    ],
    "choices": [
      {
        "id": "truth_now",
        "text": "Nói thật ngay tại đây: đêm nay đã xảy ra những gì, và chính nàng là người đã chọn tất cả.",
        "next": "lh_names_price",
        "effects": {
          "lanTrustDelta": 1
        }
      },
      {
        "id": "rest_first",
        "text": "Đỡ nàng ngồi xuống nghỉ một nhịp trước — sự thật có thể chờ, người thì không.",
        "next": "lh_names_price",
        "effects": {
          "lanHealthDelta": -2
        }
      }
    ],
    "sceneEffects": {
      "memoryIntegrityDelta": -8
    }
  },
  "lh_names_price": {
    "id": "lh_names_price",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Cái giá là tên người",
    "backgroundId": "long-hai-coast",
    "location": "Bến thuyền nhỏ ở cuối lạch, Long Hải",
    "narration": [
      "Chiếc bến nhỏ nằm khuất sau rặng phi lao cuối cùng: mấy cọc gỗ đen nước, một cầu ván ọp ẹp, và chiếc thuyền gỗ của lão ngư ông buộc hờ vào cọc, mũi thuyền hướng ra mặt nước đang sáng dần. Ông lão đã chờ sẵn ở đó đúng như lời hẹn — dù họ tới bằng đường biển hay đường bộ, ông cũng là người cầm lái khúc nước cuối cùng này. Thấy đoàn người, ông không hỏi một câu nào về đám người ngồi khóc trên đường phía sau. Bàn tay cầm dây của ông siết chặt khi mắt ông lướt qua hai thanh kiếm lơ lửng bên người ông khách lạ — vùng này đang đồn về một «thầy pháp» ở biệt thự họ Hứa, và đồn đại không hề nói quá. Nhưng ông chỉ lặng lẽ tháo dây, rồi nhìn cô gái mặt tái nhợt đang được dìu xuống cầu ván, và gật đầu như chào một người quen cũ.",
      "Ông biết nàng. Cả vùng Long Hải này ai cũng biết có một vị tiểu thư bị bệnh phong ở biệt thự họ Hứa — biết như người ta biết một câu chuyện ma: không tên, không mặt, chỉ có bệnh và sự xa lánh. Giờ đây cô gái ấy đang đứng ngay trước mặt ông trên cầu ván, ôm một cuộn chỉ thêu, và ông lão ngư ông — người từng làm thuê trong chính tòa nhà ấy, từng bỏ việc mà mất hai ngón tay và một đoạn ký ức không bao giờ lấy lại được — nhìn nàng một lúc lâu rồi quay mặt đi, giả vờ bận rộn với cuộn dây thừng đã gọn gàng sẵn.",
      {
        "text": "Cao Minh lấy trong tay áo ra một thỏi bạc, rồi một lá vàng mỏng — với hắn, những thứ ấy chẳng đáng gì hơn sỏi đá ven đường, và hắn đưa ra như người ta trả tiền đò. Ông lão nhìn thỏi bạc, nhìn lá vàng, rồi lắc đầu. Ông đẩy tay hắn lại, chậm rãi và dứt khoát, bằng bàn tay chỉ còn tám ngón của một người đã trả đủ thứ giá đắt hơn thế này nhiều.",
        "unless": "boatBought"
      },
      {
        "text": "Hắn vừa đưa tay vào tay áo, ông lão đã giơ bàn tay tám ngón lên ngăn lại. Nén bạc ở bãi cạn, ông đã nhận — nhận một lần, và chỉ một lần. Đò của già tính công: không ai tính hai lần cho cùng một khúc nước. Số bạc ấy ông đã dùng mua một tấm ván mới cho đáy thuyền và một cuộn dây tốt — coi như ông khách đã trả công bằng cách làm cho chiếc đò này chắc thêm một chút, cho đúng cái đêm nó phải chở người.",
        "if": "boatBought"
      },
      "Chuyện hai ngón tay của ông, vùng này ai cũng biết một nửa: năm ấy biệt thự sửa lại nhà kho giữa mùa đông, gia nhân bị gọi dậy làm việc suốt mấy đêm liền không ngủ — kể cả những người làm thuê theo ngày như ông. Đêm thứ ba, ông tỉnh dậy thấy mình đang đứng trong sương muối lạnh buốt ngoài sân, hai tay ôm một phiến đá lớn, hai ngón tay đã tím đen vì lạnh và vì bị đá đè mà không biết rút ra. Ông bỏ việc ngay hôm sau, mang theo hai ngón tay cụt và một khoảng trống trong trí nhớ dài đúng ba đêm. «Người ta bảo già bị ma làm,» ông nói, «già thì biết là không phải ma. Ma không biết đọc gia quy.»",
      "Cái giá ông đòi không phải tiền. Ông nói, giọng khàn của người quen nói ngược gió biển: người trong căn nhà đó, đám gia nhân ấy, cả vùng này chỉ biết họ là «người của biệt thự» — không ai nhớ tên ai, kể cả chính họ đôi khi cũng quên mất mình tên gì sau những năm tháng bị gọi bằng công việc. Cô chủ của họ thì bị xóa tên khỏi gia phả. Nếu đêm nay ông chở hai người đi, ông chỉ xin một điều: ngài — ông khách lạ mà vùng này đang đồn là thầy pháp — hãy nhớ tên của họ, và đọc cho ông nghe một lần, ở đây, trên mặt nước, để ít nhất có một người ngoài căn nhà đó còn biết họ là ai.",
      {
        "text": "Điều ông xin đêm nay không hẳn là một cái giá mới. Ở mỏm đá đen, ông đã ra giá: không bỏ ai lại trên bãi, và một cái tên khi qua bãi cạn. Phần thứ nhất, hắn đã làm xong trước mắt ông. Ông lão gật đầu rất khẽ — rồi nói phần đọc tên này cũng là một cách không bỏ ai lại: bỏ một con người trong quên lãng, chẳng khác gì bỏ người ta trên bãi.",
        "if": "boatPromised"
      },
      "Và Cao Minh đọc. Hắn đọc chậm, rõ từng chữ, như đọc một bản danh sách thiêng liêng: Sáu, người gác, nhà ở mé sông, vợ mới sinh con thứ hai, tên khâu chỉ đỏ trên cổ áo. Thới, phu gánh nước ở bếp, tay run mà lòng không run. Bà Bảy, người bếp, nếm mỗi món ăn hai lần. Con Hường, cô hầu trẻ, mắt lúc nào cũng như muốn nói điều không được nói. Bà Chín, bà lão nhặt đậu ngoài sân trong — người cô chủ vừa gọi tên ngoài cổng khi nãy, và đôi tay nhặt đậu không có thật của bà đã chịu dừng lại. Còn ông quản gia già giữ gia quy như giữ kinh — tên ông ta, hắn cũng chưa kịp hỏi. Hắn nói cả chỗ thiếu ấy ra, thản nhiên như người đọc một bản danh sách còn sót một trang: còn mấy người nữa trong căn nhà đó, bổn tọa chưa biết tên.",
      "Khi tiếng đọc tên dứt, nàng mới hỏi ông lão câu hỏi nàng đã giữ suốt từ lúc xuống tới bến này. Nàng hỏi, rất khẽ, rằng trong những năm nàng ở trong căn nhà đó, đám gia nhân có bao giờ nhắc tới nàng không, có ai ghét nàng không — vì nàng là cái cớ để tất cả bị giam chung trong một tòa nhà không ai được rời đi. Ông lão ngẫm nghĩ rồi kể: ghét thì không, nhưng có một việc mà già này tận mắt thấy — bà bếp, mỗi tối, đều để thêm một chén cơm nhỏ ở cửa bếp, nói là «để đó, lỡ cô chủ đói». Mười một năm, gần như không thiếu một tối nào. Nàng nghe xong thì im lặng rất lâu, hai tay ôm chặt cuộn chỉ vào lòng.",
      "Tiểu Lan đứng trên cầu ván, nghe hết. Những cái tên ấy là tên của chính những người đã sống quanh nàng mười một năm — có người nàng thuộc, có người nàng chỉ biết mặt mà chưa từng dám hỏi tên, vì trong căn nhà ấy, gọi nhau bằng tên là một thứ thân mật đã bị cấm từ lúc nào không ai nhớ. Nàng nghe người đàn ông ngồi cạnh đọc tên gia nhân của nhà mình như đọc tên những người thân, và nước mắt nàng rơi xuống lúc nào không hay — một phần vì những cái tên ấy, một phần vì một nỗi buồn không gọi được thành lời, như thể nàng vừa đánh mất một điều gì quý lắm trong đêm nay mà không nhớ ra nó là gì.",
      "Tới lúc ấy ông lão mới tháo dây buộc thuyền. Cao Minh đỡ nàng bước xuống khoang, ngồi yên ở mạn trong, cuộn chỉ vẫn ôm trong lòng. Thuyền rời cầu ván lặng lẽ, chỉ có tiếng nước vỗ nhẹ vào be gỗ — như thể cả khúc lạch cũng biết có những chuyến đi không nên làm ồn."
    ],
    "dialogue": [
      {
        "speaker": "Ngư ông",
        "text": "Tiền của ngài, ngài cất đi. Già này chở người qua nước không lấy vàng bạc. Già chỉ xin ngài một việc: người trong căn nhà đó, ngài nhớ được tên ai, ngài đọc cho già nghe. Để lỡ mai này họ có bề gì, còn có người ngoài kia biết mà gọi đúng tên họ."
      },
      {
        "speaker": "Cao Minh",
        "text": "Được. Đọc thì đọc. Ai bổn tọa chưa biết tên — bổn tọa còn thiếu căn nhà đó một lần hỏi."
      },
      {
        "speaker": "Ngư ông",
        "text": "Ngài lạ thiệt. Người ta sợ căn nhà đó như sợ mả. Còn ngài thì… ngài nhớ tên từng đứa ở trong đó."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài… những người đó, họ đối với tôi… họ có từng ghét tôi không? Tôi không nhớ rõ nữa. Tôi chỉ nhớ là… là không ai dám nhìn thẳng tôi cả."
      },
      {
        "speaker": "Cao Minh",
        "text": "Không phải ghét. Là sợ. Nhìn thẳng nàng tức là chống một mệnh lệnh — mà chống lệnh thì phải trả giá. Đêm nay có người đã trả cái giá ấy, chỉ để được ngồi xuống khóc như một người thường. Tên của họ, bổn tọa giữ."
      }
    ],
    "choices": [
      {
        "id": "recite_all",
        "text": "Đọc hết tên từng người một lần nữa, chậm rãi, cho cả nàng cùng nghe.",
        "next": "lh_open_road",
        "effects": {
          "cluesHuaGiaDelta": 1,
          "lanTrustDelta": 2
        }
      },
      {
        "id": "promise_return",
        "text": "Nói với ngư ông như một câu tiện miệng: những cái tên còn thiếu, rồi sẽ có ngày sáng tỏ — và sẽ có người làm chứng cho họ.",
        "next": "lh_open_road",
        "effects": {
          "civiliansSavedDelta": 1
        }
      }
    ],
    "companions": [
      "npc_fisherman"
    ]
  },
  "lh_open_road": {
    "id": "lh_open_road",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Ngoài tầm với",
    "backgroundId": "long-hai-coast",
    "location": "Mặt nước ngoài lạch, nhìn về bờ Long Hải",
    "entity": "entity_guard",
    "narration": [
      "Thuyền rời bến không một tiếng động lớn. Lão ngư ông chống sào, rồi buông chèo, để chiếc thuyền gỗ trượt ra khỏi lạch theo con nước đang lên. Mặt nước buổi sớm phẳng lặng đến mức tiếng chèo khua nghe rõ từng nhịp, và sau mỗi nhịp chèo, bờ Long Hải lại nhỏ đi một chút: rặng phi lao, mỏm đá, con đường đất xám — và xa hơn, trên cao, mái ngói của tòa biệt thự hiện ra lần cuối qua màn sương đang tan, bất động như một con thú già nằm nhìn con mồi vuột khỏi tầm vuốt.",
      "Ở mép nước, những gương mặt nhiễm trùng đang đứng nhìn theo. Họ đã tới được bờ — phần dư lệnh cuối cùng kéo họ đi xa tới mức ấy — và họ dừng lại ở đúng vạch nước, hàng người lặng im như những cây cọc cắm dọc bãi: người gác, gã cầm cuốc, cô hầu má rách, bà bếp ôm đôi chân đầy máu của mình mà đứng. Không ai lội xuống nước. Không ai giơ tay. Không phải vì họ không muốn — mà vì sợi chỉ nối họ với tòa nhà kia đã căng đến giới hạn cuối cùng của nó: tầm của điểm neo kết thúc ngay ở đây, ở mép nước của vùng đất thuộc về căn nhà, như một sợi dây xích vô hình đã hết chiều dài.",
      "Mũi đất cuối cùng của Long Hải trượt qua bên mạn thuyền như một cái bóng đen dài. Chính ở đó — hắn cảm nhận được rõ như người ta cảm nhận sợi dây căng bỗng chùng xuống — phần kéo vô hình cuối cùng vẫn bám theo thân thể đang ngủ của nàng bỗng buông ra: hai vai nàng, cứng lại suốt từ lúc rời cổng, từ từ hạ xuống trong giấc ngủ; hơi thở nàng sâu thêm một nhịp, thành hơi thở của một người ngủ thật. Điểm neo có tầm, và tầm ấy vừa kết thúc ở mũi đất kia. Từ đây trở đi, dù chỉ là trong một khoảnh khắc, nàng thuộc về chính nàng một cách trọn vẹn — điều mà mười tám năm qua chưa từng xảy ra một lần nào, kể cả trong giấc ngủ.",
      "Lão ngư ông chèo thuyền bằng những nhịp chèo thong thả của người không việc gì phải vội: ông biết con nước này như biết lòng bàn tay mình, biết chỗ nào xoáy, chỗ nào cạn, chỗ nào cá đang ăn sáng. Có lúc ông khẽ hát một câu hò ngắn, lạc giọng và chẳng theo điệu nào — rồi tự cười một mình vì câu hò dở của mình. Những âm thanh vô tổ chức ấy, kỳ lạ thay, lại là thứ nhạc êm tai nhất trên thuyền lúc bấy giờ.",
      "Hắn ngồi ở mũi thuyền và nghĩ về căn nhà vừa bỏ lại — không giận, chỉ đo kích thước của nó như đo một con thú vừa chạm trán lần đầu. Một biệt thự, một cụm neo, một sợi trục bằng người. Nhưng sợi chỉ đêm nay, khi bị kéo căng về phía biển, đã run theo một nhịp không phải của riêng Long Hải: ở đầu dây bên kia, ở một nơi rất xa, có thứ gì lớn hơn đang giữ — lớn, kiên nhẫn, và chưa hề lộ mặt. Hắn chưa biết nó là gì, và hắn không vội đoán. Hắn chỉ biết một điều của nghề săn: muốn biết con thú lớn cỡ nào, cứ nhìn dấu chân nó để lại trên những thứ nhỏ. Dấu chân đêm nay là một cô gái mười tám tuổi bị lấy mất một đêm ký ức. Hắn nhìn xuống đôi tay mình — đôi tay đã quen bóp nát những thứ lớn hơn thế này rất nhiều — và khẽ cười: ở thế giới này, việc của hắn không phải bóp nát. Là mổ. Từng sợi một.",
      "Trên bờ xa, đám người đứng ở mép nước cũng bắt đầu tan: từng người một quay lưng lại mặt biển, đi ngược lên con đường đất — không còn hàng ngũ, không còn đồng nhịp, kẻ nhanh kẻ chậm, có người còn dừng lại ngồi xuống vệ đường như đi hết nổi. Họ trở về tòa nhà kia, hay trở về nhà của chính mình, không ai trên thuyền biết được. Nhưng cách họ bước đi — lộn xộn, riêng rẽ, mệt mỏi — chính là bằng chứng đẹp nhất của đêm nay: mạng lưới đã mất họ, ít nhất là ở bờ biển này, ít nhất là trong buổi sáng này.",
      "Người gác là người đứng gần nhất. Khi thuyền đi ngang qua tầm mắt của anh ta, anh ta chậm rãi giơ một tay lên — cao ngang vai, lòng bàn tay hướng ra ngoài. Cao Minh nhìn cánh tay ấy rất lâu mà không đoán được, và có lẽ chính anh ta cũng không biết: đó là dư chấn của một mệnh lệnh chưa tan, là một lời chào, hay là ý chí của chính anh ta vừa nhú lên được một phân sau nhiều năm bị dìm xuống. Khoảng cách và mặt nước nuốt trọn câu trả lời. Thuyền đi qua. Cánh tay hạ xuống, hay vẫn còn giơ lên, không ai trên thuyền còn nhìn rõ nữa.",
      "Trong biệt thự, những ngọn đèn đang lần lượt tắt — lần này theo đúng thứ tự của một căn nhà bình thường thức dậy buổi sáng, vì sợi dây điều phối đã chùng hẳn, rút về đâu đó rất xa ngoài tầm cảm nhận của hắn trong buổi sớm này. Cao Minh nhìn tòa nhà nhỏ dần và ghi lại điều vừa học được bằng mắt: mạng lưới này có tầm, có giới hạn, có những biên giới bằng địa lý và bằng chính những điểm neo của nó. Kẻ thù của hắn không phải vô biên. Nó chỉ rất lớn, rất kiên nhẫn — và đêm nay, nó vừa mất một vật chứa mà nó đã nuôi từ khi nàng còn nhỏ.",
      "Tiểu Lan ngủ thiếp đi ở khoang thuyền lúc nào không hay, đầu tựa vào thành gỗ, cuộn chỉ thêu vẫn nắm chặt trong tay dù trong giấc ngủ. Đó là giấc ngủ đầu tiên của nàng ngoài tầm với của căn nhà — ngủ không theo giờ, không theo lệnh điểm danh, ngủ lệch nhịp với mọi nhịp thở bị áp đặt. Lão ngư ông nhìn nàng, rồi lặng lẽ chèo nhẹ tay hơn, tránh làm thuyền chao. Cao Minh cởi chiếc áo ngoài, đắp lên vai nàng tiện tay như người ta kéo lại một tấm màn che nắng, rồi ngồi xuống ở mũi thuyền, quay mặt về hướng con đường phía trước."
    ],
    "dialogue": [
      {
        "speaker": "Ngư ông",
        "text": "Qua khỏi mũi đất kia là hết đất của nhà họ Hứa rồi, thưa ngài. Từ đó trở đi, nước là nước của trời, đường là đường của người đi đường."
      },
      {
        "speaker": "Cao Minh",
        "text": "Ông chèo thuyền ở vùng này bao nhiêu năm rồi?"
      },
      {
        "speaker": "Ngư ông",
        "text": "Từ hồi còn để chỏm. Già thấy căn nhà đó xây lên, thấy người ta đưa cô chủ ra đây, thấy gia nhân đổi lớp này tới lớp khác mà không ai trở về quê. Đêm nay là lần đầu già thấy có người đi ra khỏi cổng nhà đó mà còn… còn là người."
      },
      {
        "speaker": "Cao Minh",
        "text": "Ừ. Ông nhớ lấy câu đó. Biết đâu có ngày bổn tọa cần một người làm chứng — đã thấy nàng tự đi ra bằng chính chân mình."
      }
    ],
    "choices": [
      {
        "id": "sit_with_her",
        "text": "Ngồi yên bên khoang thuyền, để nàng ngủ cho trọn giấc ngủ đầu tiên ngoài tầm căn nhà.",
        "next": "lh_dawn_after",
        "effects": {
          "lanTrustDelta": 2
        }
      },
      {
        "id": "watch_bow",
        "text": "Ra mũi thuyền đứng gác, mắt quét mặt nước và bờ xa — đường còn dài, nhà họ Hứa còn lớn.",
        "next": "lh_dawn_after",
        "effects": {
          "cluesHuaGiaDelta": 1
        }
      }
    ]
  },
  "lh_dawn_after": {
    "id": "lh_dawn_after",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Buổi sớm trên mặt nước",
    "backgroundId": "long-hai-coast",
    "location": "Trên thuyền, mặt nước hướng về Vũng Tàu — sau khi trời sáng",
    "narration": [
      "Nàng tỉnh dậy khi nắng đã lên khỏi mặt biển. Trong một thoáng, nàng chỉ nằm yên, nhìn trời — một bầu trời không bị khung cửa sổ cắt thành từng ô, không có mùi thuốc thang, không có tiếng điểm danh nào sắp sửa vang lên. Rồi nàng ngồi bật dậy, hoảng hốt, vì trong đầu nàng là một khoảng trống nguyên vẹn hình một đêm: nàng nhớ mình đã nằm xuống giường trong căn phòng ở biệt thự, nhớ tiếng Thu Nguyệt khép cửa — và sau đó là không có gì, cho tới mặt nước này, chiếc thuyền này, và người đàn ông đang ngồi ở mũi thuyền nhìn nàng không một chút ngạc nhiên.",
      "Việc đầu tiên nàng làm khi ngồi dậy là tìm cuộn chỉ thêu. Nàng lăn nó trong tay, dùng ngón tay cái lướt qua từng nút thắt, đếm thầm — một, hai, mười, ba mươi — và hắn thấy nét mặt nàng dần căng ra khi nàng đếm tới đoạn cuối: hàng nút thắt kết thúc ở ngày hôm qua, đúng như trí nhớ của nàng, nhưng giữa ngày hôm qua và buổi sáng này có một khoảng hở mà các nút thắt không giải thích được — như một cuốn sổ bị mất một trang ở đúng chỗ quan trọng nhất. Nàng ngẩng lên nhìn hắn, không trách móc, chỉ có một câu hỏi rất nhỏ: «Đêm qua… phải không, thưa ngài?»",
      "Cách hắn kể cũng đáng nói: hắn không kể như người đọc cáo trạng. Hắn kể theo mặt nước — chỉ tay về phía mỏm đá khi nói đến triền đá nàng tự leo qua, chỉ về dải bờ xa khi nói đến đám đuốc đuổi theo, để câu chuyện của nàng có một phong cảnh mà bám vào, để khi nàng nhìn lại bờ biển này, các địa điểm sẽ tự kể lại phần của chúng. Hắn kể cả những điều nhỏ: gáo nước dừa của cô hầu, câu nói của Sáu, tiếng khóc của thằng nhỏ bưng nước. Hắn kể cả phần của chính mình — cả đoạn suýt cắt sai thứ tự ở cổng, không giấu, không tô vẽ: một việc đã xảy ra thì kể đúng như nó đã xảy ra.",
      "Nàng hỏi mình đang ở đâu. Nàng hỏi vì sao mình lại ở trên thuyền. Và nàng hỏi — câu hỏi khiến tay chèo của lão ngư ông khựng lại giữa chừng — rằng có phải trong đêm qua, có chuyện gì rất quan trọng đã xảy ra với nàng hay không, sao trong ngực nàng lại có cảm giác như vừa tiễn đưa một người thân mà không nhớ nổi mặt. Nàng hỏi thuyền này đi về đâu. Lão ngư ông chưa kịp đáp, nàng đã tự trả lời bằng trí nhớ của mười một năm nghe ngóng qua vách: xuôi theo bờ này, qua khỏi mấy lạch nữa, là Vũng Tàu — bến lớn, có tàu Tây ra vào, có nhà máy xay lúa khói lên cả ngày. Nàng nói vanh vách như người đọc một trang địa chí. Hắn nghe, và ghi thêm một điều vào cái sổ hắn đang học về thế giới này: đường đi của cả vùng biển này, nàng — người chưa từng ra khỏi phòng mình — thuộc hơn hắn.",
      "Có một lúc, nàng hỏi hắn một câu rất lạ: rằng trong đêm qua, có lúc nào nàng khóc không. Hắn trả lời đúng sự thật: không — nàng không khóc; nàng gọi tên người ta, nàng đứng thẳng, nàng tự chọn. Nàng nghe xong thì khẽ «dạ» một tiếng, rồi quay mặt ra phía biển — và lúc ấy, lần đầu tiên kể từ khi tỉnh dậy, nước mắt nàng mới rơi, rơi vì một người con gái trong lời kể của người khác hóa ra đã can đảm hơn nàng tưởng về chính mình rất nhiều. Nàng không nhớ được đêm ấy. Nhưng nàng nhận ra người đã sống nó — như nhận ra một giọng hát quen thuộc vọng qua vách tường: không thấy mặt, mà biết chắc đó là tiếng của mình.",
      "Cao Minh ngồi xuống đối diện với nàng, và hắn kể lại. Từ đầu. Chậm rãi. Không phải vì một lời hứa mà nàng còn nhớ — nàng đã quên cả lời hứa ấy — mà vì đó là việc hắn đã định làm, thế thôi. Hắn kể về bản đồ điểm neo và ba mắt neo ở cổng, theo đúng thứ tự chuông — đèn — xích. Hắn kể về cánh cửa đầu tiên và câu hỏi hắn đã đặt ra ở ngưỡng cửa. Hắn kể về những cái tên nàng đã gọi giữa sân. Hắn kể về lần phản kháng cuối cùng trên đường xuống bến, về đám người được ngồi xuống khóc như người thường, và về cái giá của nó.",
      "Và hai lần trong câu chuyện, hắn dừng lại, nói rõ từng chữ: đoạn này là lời kể của bổn tọa — không phải ký ức của nàng. Nàng nghe để biết con đường mình đã đi qua, chứ không phải để lấy lời kể của người khác đắp vào chỗ trống trong đầu mình rồi gọi đó là nhớ. Chỗ trống ấy là của nàng; một ngày nào đó, nếu nó tự đầy lại, nó sẽ đầy bằng chính nàng. Còn nếu nó không bao giờ đầy lại, thì nàng vẫn là người đã đi qua con đường đó — vì người đi đường không cần phải nhớ từng hòn đá dưới chân mình thì con đường mới có thật.",
      "Nàng nghe hết, không ngắt lời một lần nào. Khi hắn kể đến đoạn nàng tự trả lời «có» ở ngưỡng cửa đầu tiên — câu trả lời mà chính nàng đã quên — nàng im lặng rất lâu, nhìn xuống đôi tay mình đang ôm cuộn chỉ thêu. Rồi nàng khẽ gật đầu, một cái gật đầu chậm và chắc, như người ký nhận một món đồ quý mà người ta trao lại.",
      "Lão ngư ông, từ đầu đến cuối, chèo thuyền và không nói một lời nào. Nhưng khi câu chuyện kể xong, ông lão bỗng ho khan một tiếng và nói, giọng khàn đi, rằng già này chèo đò mấy chục năm, chở qua mặt nước này đủ hạng người, mà chưa từng nghe ai kể lại một đêm cho một người đã quên — kể cho đúng sự thật, mà lại không nhân đó bắt người ta phải biết ơn mình. Ông nói xong thì quay mặt ra phía mũi thuyền, giả vờ ngắm đường nước. Nước dưới mũi thuyền rẽ ra hai vệt trắng, đều đặn như nhịp thở của người vừa qua cơn sốt."
    ],
    "dialogue": [
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài, trong lời kể của ngài… người con gái đó, cô ấy có được hỏi ý kiến không? Hay là… người ta cứ thế đưa cô ấy đi?"
      },
      {
        "speaker": "Cao Minh",
        "text": "Nàng ấy được hỏi. Trước cánh cửa đầu tiên, bổn tọa hỏi nàng có muốn tự mình bước ra không. Và nàng ấy — nàng — đã tự mình trả lời."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Dạ. Vậy thì… tôi tin người con gái trong lời kể của ngài. Cô ấy nghe giống tôi lắm. Nếu là tôi, tôi cũng sẽ trả lời như thế."
      },
      {
        "speaker": "Cao Minh",
        "text": "Nàng không cần tin thay phần của ai cả. Đó là nàng. Chỉ là trí nhớ của nàng về đêm nay đang nằm ở chỗ bổn tọa giữ hộ — khi nào nàng muốn nghe lại, bổn tọa kể lại. Bấy nhiêu thôi."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài… cảm ơn ngài. Không phải vì ngài đưa tôi ra khỏi nhà đó. Mà vì ngài kể cho tôi nghe như kể với một người… còn nguyên là người."
      }
    ],
    "choices": [
      {
        "id": "tell_everything",
        "text": "Kể hết — cả tên những người ở lại, cả cái giá nàng đã trả, không giấu một chi tiết nào.",
        "next": "lh_names_restored",
        "effects": {
          "lanTrustDelta": 3
        }
      },
      {
        "id": "let_her_rest",
        "text": "Để phần còn lại kể sau — cho nàng ngồi yên ngắm mặt trời lên hết đã.",
        "next": "lh_names_restored",
        "effects": {
          "lanTrustDelta": 1,
          "lanHealthDelta": 2
        }
      }
    ]
  },
  "lh_names_restored": {
    "id": "lh_names_restored",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Gọi đầy đủ họ tên",
    "backgroundId": "long-hai-coast",
    "location": "Trên thuyền, mặt nước buổi sớm — ngoài tầm điểm neo của biệt thự",
    "link": {
      "id": "danh",
      "phase": "intervened"
    },
    "narration": [
      {
        "text": "Mặt trời đã lên trọn vẹn khỏi mặt biển. Ánh nắng đầu ngày rải xuống mặt nước lặng một lớp vàng mỏng, và chiếc thuyền gỗ của lão ngư ông trôi chậm trong cái sáng trong trẻo ấy, như thể cả một đêm dài vừa qua chỉ là một giấc mơ mà ba người trên thuyền cùng mơ chung. Bờ Long Hải đã ở xa sau lưng — xa ngoài tầm của mọi điểm neo, mọi sợi chỉ, mọi tờ giấy của tòa nhà kia.",
        "unless": "thuNguyetFollows"
      },
      {
        "text": "Mặt trời đã lên trọn vẹn khỏi mặt biển. Ánh nắng đầu ngày rải xuống mặt nước lặng một lớp vàng mỏng, và chiếc thuyền gỗ của lão ngư ông trôi chậm trong cái sáng trong trẻo ấy, như thể cả một đêm dài vừa qua chỉ là một giấc mơ mà bốn người trên thuyền cùng mơ chung. Bờ Long Hải đã ở xa sau lưng — xa ngoài tầm của mọi điểm neo, mọi sợi chỉ, mọi tờ giấy của tòa nhà kia.",
        "if": "thuNguyetFollows"
      },
      "Cao Minh bỗng đứng dậy ở mũi thuyền. Hắn không làm gì lớn lao: không rút kiếm, không vận công, không một chút dị tượng. Hắn chỉ quay về phía người con gái đang ngồi ở khoang thuyền, và gọi nàng bằng đầy đủ họ tên — như hắn đã gọi nàng từ ngày đầu bước vào căn nhà ấy. Nhưng buổi sáng nay khác mọi buổi sáng: tiếng gọi ấy không rơi vào một gian phòng chỉ có hai người nghe. Trên thuyền còn một người ngoài gia tộc, một nhân chứng không nằm trong sổ sách của nhà họ Hứa — và ngay sau đây, lần đầu tiên trong đời mình, Hứa Tiểu Lan sẽ tự xưng tên mình trước mặt một người như thế.",
      "Cần phải hiểu cái tên ấy đã chết như thế nào thì mới hiểu nó sống lại ra sao. Nó không chết trong một đêm: nó chết trên giấy trước — một nét xóa trong gia phả, một tờ giấy chứng tử ký sẵn khi người còn đang ngồi uống thuốc trong phòng, một cái tên bị thay bằng «người bệnh» trong mọi sổ sách của căn nhà. Rồi nó chết trong miệng người khác: gia nhân được dạy gọi nàng bằng chức phận, khách khứa được kể rằng cô chủ đã mất. Cuối cùng nó suýt chết trong chính nàng, khi nàng bắt đầu tự nghĩ về mình như người ta nghĩ về một căn bệnh biết đi. Một cái tên bị giết bài bản như thế không thể sống lại bằng một tờ giấy khác. Nó chỉ sống lại khi có người gọi nó lên, đối diện, giữa trời đất — và khi chính chủ nhân của nó dám đáp lại.",
      "Nắng lên cao dần, mặt nước bắt đầu lấp lánh. Nàng ngồi thẳng lưng ở khoang thuyền, hai tay đặt ngay ngắn trên đùi — nhưng lần này, đó là tư thế nàng tự chọn cho mình, không phải tư thế được sắp đặt. Khác biệt giữa hai điều ấy, nhìn bề ngoài, nhỏ đến mức không ai phân biệt nổi. Chỉ có người đã sống cả hai mới biết chúng cách nhau mười tám năm.",
      "Nàng tập giới thiệu mình, như một đứa trẻ tập một bài học vỡ lòng mà người lớn nào cũng thuộc từ lâu: «Tôi là Hứa Tiểu Lan.» Rồi nàng nói tiếp, chậm hơn: con gái của Hứa Bổn Hoả — đến hai chữ sau, giọng nàng khựng lại, vì đó là tên của người cha đã ký tên lên cả cuộc giam cầm của nàng; một thoáng im lặng dài trôi qua trên mặt nước. Nhưng nàng không bỏ dở câu nói. Nàng nói hết, đến chữ cuối cùng, bằng giọng của chính mình — vì cái tên là của nàng, cả phần đẹp lẫn phần đau, và từ nay nàng sẽ là người quyết định nó có ý nghĩa gì.",
      "Trong thần niệm của Cao Minh, một sợi chỉ rất mảnh — mảnh cuối cùng buộc cái tên ấy vào hệ thống giấy tờ và điểm neo của Long Hải — vừa tự buông ra, không phải vì bị cắt, mà vì thứ nó buộc vào đã không còn tồn tại nữa: trên mặt nước này, không còn một «vật chứa vô danh» nào cho nó buộc. Hắn cũng thấy rõ giới hạn của buổi sáng nay: đó mới là đoạn chỉ của riêng căn nhà này. Ở Chợ Lớn, trong sổ sách của Giới Phòng, cái tên ấy vẫn nằm dưới nét xóa như cũ — mắt xích người ta gọi là Danh chưa đứt; nó chỉ vừa nới ra lần đầu tiên, ở đây, trước một nhân chứng. Hắn không nói điều này với nàng. Có những việc không cần giải thích; chúng chỉ cần được chứng kiến — và buổi sáng nay, trên mặt nước này, đã có đủ người chứng kiến rồi.",
      "Cái tên ấy đã bị xóa khỏi gia phả họ Hứa bằng một nét bút lạnh lùng. Nó đã bị thay bằng hai chữ «đã chết» trên một tờ giấy chứng ký bởi bàn tay bị kẻ khác dẫn dắt. Nó đã bị cả một hệ thống — giấy tờ, điểm neo, nghi lễ, sự im lặng của hàng chục con người — hợp sức chôn đi, để một vật chứa vô danh có thể được dùng mà không ai phải áy náy. Nhưng mọi thứ giấy tờ ấy chỉ có quyền trên đất của căn nhà kia, trong tầm của những điểm neo kia. Còn ở đây, trên mặt nước buổi sớm này, không có gia phả, không có giấy chứng, không có điểm neo — chỉ có một người con gái, và cái tên của cô ấy, được nói ra thành tiếng.",
      "Nàng nghe cái tên ấy như nghe một tiếng chuông từ rất xa vọng về. Môi nàng mấp máy nhắc lại — chậm rãi, từng tiếng một, như người tập đọc một chữ vừa thiêng liêng vừa lạ lẫm: họ của cha, tên của mình. Nàng nhắc lại lần thứ hai, chắc hơn. Lần thứ ba, nàng tự nói mà không cần ai dẫn: nàng nói nàng là ai, con của ai, và nàng vừa từ đâu đi ra. Giọng nàng run, nhưng câu chữ không run.",
      "Không có gì nổ tung, không có sợi chỉ nào đứt phụt trong không khí. Ở Long Hải, mắt xích Danh nới ra lặng lẽ như thế — chưa đứt, và không ai trên thuyền này tự dối mình rằng nó đã đứt. Nó nới ra bằng cách đối ngược hoàn toàn với cách nó được tạo ra: người ta xóa nàng bằng cách ngừng gọi tên nàng; còn sáng nay, trên mặt nước, ngoài tầm với của mọi thứ đã từng xóa nàng, chính nàng đã tự gọi lại tên mình — và có người ngoài chịu nghe, chịu nhớ, chịu làm chứng. Quyền hồ sơ của Giới Phòng trên cái tên ấy vẫn còn nguyên, ở những nơi con thuyền này chưa tới. Nhưng từ sáng nay, nó không còn là sự thật duy nhất về nàng nữa.",
      "Lão ngư ông nghe hết, rồi bỗng khẽ nói rằng già này xin được làm chứng: sáng nay, trên thuyền của già, có một cô gái tên như thế đã ngồi ở khoang thuyền này, tỉnh táo, tự mình nói tên mình. Ông nói câu ấy trịnh trọng như người đọc một tờ khai — vì ông hiểu, ở cái thời buổi này, một cái tên đôi khi chỉ sống được nếu có người ngoài chịu nhớ và chịu làm chứng cho nó."
    ],
    "dialogue": [
      {
        "speaker": "Cao Minh",
        "text": "Hứa Tiểu Lan."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài… đã bao lâu rồi, tôi mới nghe có người gọi cả họ lẫn tên tôi như thế. Ở nhà đó, người ta gọi tôi là «cô chủ», là «người bệnh», là… những tiếng không phải tên."
      },
      {
        "speaker": "Cao Minh",
        "text": "Từ nay, bổn tọa gọi nàng là Hứa Tiểu Lan. Ai muốn xóa cái tên ấy lần nữa — cứ thử."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Hứa Tiểu Lan. Dạ — tôi xin giữ cái tên này. Dù sau này tôi có quên thêm nhiều chuyện nữa, thưa ngài, xin ngài đừng để tôi quên mất tên mình."
      },
      {
        "speaker": "Ngư ông",
        "text": "Già xin làm chứng. Sáng nay, trên thuyền của già, cô Hứa Tiểu Lan đã tự miệng nói tên mình, tỉnh táo, rõ ràng. Mai này ai hỏi, già xin nói lại đúng như vậy."
      },
      {
        "speaker": "Cao Minh",
        "text": "Được. Tên của nàng, bổn tọa nhớ — mà trí nhớ của bổn tọa thì không nằm trong sổ sách của bất cứ ai."
      }
    ],
    "choices": [
      {
        "id": "by_her_full_name",
        "text": "Từ nay chỉ gọi nàng bằng đầy đủ họ tên — Hứa Tiểu Lan — như một người ngang hàng.",
        "next": "lh_slice_end",
        "effects": {
          "lanTrustDelta": 2
        },
        "flags": {
          "lanNameRestored": true
        }
      }
    ]
  },
  "lh_slice_end": {
    "id": "lh_slice_end",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Hết hồi một · Long Hải",
    "backgroundId": "long-hai-coast",
    "location": "Bến thuyền Long Hải — buổi sáng, nhìn về hướng Vũng Tàu",
    "narration": [
      "Thuyền ghé vào bến nhỏ cho lão ngư ông lấy thêm nước ngọt và cho người con gái vừa trải qua một đêm dài nhất đời mình được đặt chân lên đất cứng một lần nữa. Nắng đã lên cao hơn, bến cá bắt đầu nhộn nhịp những tiếng người hoàn toàn bình thường: tiếng quang gánh kẽo kẹt, tiếng mặc cả cá tôm, tiếng trẻ con chạy trên ván cầu. Tiểu Lan đứng giữa cái ồn ào tầm thường ấy mà ngơ ngác như người lạc vào một cõi khác — vì đó là thứ ồn ào không theo một nhịp điều phối nào cả, thứ ồn ào của những con người đang sống phần đời của riêng mình.",
      "Nàng đi một mình hết chiều dài cầu ván của bến — không vịn, không dìu, bước chân còn chậm nhưng là bước chân của người đi dạo buổi sáng chứ không phải của người bệnh được đưa đi. Ở đầu cầu, nàng dừng lại nhìn một đứa bé bán bánh đang ngủ gật bên thúng bánh của mẹ nó, nhìn một ông lão vá lưới ngáp dài, nhìn hai người đàn bà mặc cả một con cá với tất cả sự nghiêm túc của một cuộc đàm phán quốc tế. Nàng xem những cảnh ấy như xem một thứ kịch lạ lùng và quý giá: người ta sống, ồn ào và lộn xộn, không ai phải xin phép ai để được ngáp, được ngủ gật, được mặc cả thua một con cá.",
      {
        "text": "Thu Nguyệt đứng ở cuối cầu ván, gói đồ vẫn buộc chặt trên lưng, nhìn bến cá thức dậy quanh mình bằng con mắt của một đứa chạy việc cũ. Cô nhận ra hai ba gương mặt phu bến từ những ngày còn ở Chợ Lớn mà không ai nhận ra cô; trong tay áo cô, bản danh sách chép tay vẫn còn nguyên. Cô không nói gì — chỉ thỉnh thoảng đưa tay sờ lại nút buộc của gói đồ, như người kiểm lại món vốn đầu tiên trong đời được phép mang theo bên mình.",
        "if": "thuNguyetFollows"
      },
      "Nhưng chính nàng là người nhận ra trước cả hắn. Khi cỗ quan tài được khiêng ngang qua đầu bến, nàng khẽ nắm lấy tay áo hắn và nói, giọng hạ xuống: ngài nhìn bước chân họ kìa. Tám người khiêng, mười sáu bàn chân — và tất cả đều bước cùng một nhịp, chân trái trước, khoảng cách đều nhau như đo bằng thước. Nàng đã sống mười tám năm trong nhịp bước ấy; nàng nhận ra nó như người ta nhận ra tiếng nói của kẻ đã giam mình, dù nó phát ra từ những cái miệng xa lạ. Đám khiêng quan tài kia, dù là ai, cũng đang đi bằng đôi chân của kẻ khác — và cỗ quan tài không tên kia, rất có thể, cũng chỉ là một thứ «hàng» trong cùng một mạng lưới.",
      "Hắn nghĩ về tòa biệt thự một lần nữa — không phải với cơn giận, mà với sự tỉnh táo của một người vừa đo được kích thước thật của đối thủ qua một trận đầu tiên. Căn nhà ấy tối nay sẽ điểm danh và thấy thiếu một người. Nó sẽ báo về Chợ Lớn bằng những sợi chỉ nhanh hơn bất cứ con ngựa nào. Và ở Chợ Lớn, trong gian phòng không có trên bất cứ bản đồ nào của phủ họ Hứa, có kẻ sẽ lần đầu tiên phải tự hỏi: kẻ nào đã dám lấy đi vật chứa của chúng ta, và lấy bằng cách nào mà không làm nó vỡ.",
      "Cao Minh nhìn nàng, và khẽ cười — cái cười của kẻ vừa thấy một nước cờ hay do chính đối thủ bày ra: mạng lưới kia đã lấy của nàng mười tám năm, lấy cả ký ức của một đêm vừa qua; nhưng nó cũng vô tình rèn cho nàng một thứ vũ khí mà chính nó phải sợ: một đôi tai nghe ra được nhịp của nó giữa chợ đời, một đôi mắt nhận ra được sợi chỉ của nó trên cổ tay người lạ. Từ nay, trong cuộc chiến dài với mạng lưới này, hắn không còn là người duy nhất nhìn thấy kẻ thù nữa — và người đồng hành ấy lại là người nó đã giam kỹ nhất.",
      "Sáu mắt xích đã được đặt tên trong những ngày qua: Danh, Nợ, Lệnh, Ký, Thân, Tử. Một mắt xích vừa nới lỏng trên mặt nước buổi sớm — chưa đứt hẳn, nhưng lần đầu tiên nó không còn siết được cổ nàng: không phải bằng kiếm, mà bằng một cái tên được chính nàng gọi lên. Năm mắt xích còn lại đang nằm rải trên con đường phía trước: ở những bến cảng mà quan tài không tên hướng tới, ở những cửa sông mà người ta bán mua bằng những món nợ không giấy tờ, ở những nơi mà ký ức của con người bị viết lại như viết lại một trang sổ. Hắn chưa biết hết chúng ở đâu. Nhưng hắn biết cách đi tìm: theo những cái tên bị xóa, theo những bước chân quá đều, theo những con người còn tỉnh táo trong những thân thể không nghe lời mình.",
      "Nàng ngoái nhìn lại một lần cuối về hướng tòa biệt thự, xa tít sau rặng phi lao và màn sương đã tan gần hết. Nàng không còn bị khóa sau cánh cổng ấy nữa. Nhưng thứ đang sống trong người nàng thì vẫn còn đó — yên lặng hơn, lùi xa hơn, sau khi mất đi những điểm neo của Long Hải, nhưng chưa chết và chưa hề bỏ cuộc; và nàng biết, bằng một trực giác của người đã sống chung với nó mười tám năm, rằng nó chỉ đang chờ những điểm neo khác, ở những vùng đất khác. Cuộc ra đi này không phải là kết thúc. Nó chỉ là lần đầu tiên nàng thắng một trận — và thắng bằng chính đôi chân, cái tên, và tiếng nói của mình.",
      "Ở đầu kia của bến, khuất sau những đống lưới và thùng cá, có một cảnh mà ít người để ý: một cỗ quan tài đen bóng đang được khiêng lên một chiếc thuyền lớn hơn, bởi những người đàn ông mặc đồ sẫm màu, lặng lẽ và nhịp nhàng đến mức nổi bật giữa cái nhộn nhịp của bến cá. Không kèn, không trống, không người đưa tang. Lão ngư ông nhìn theo hướng mắt của Cao Minh, hạ giọng: những cỗ quan tài như thế đã rời bến này vào lúc trời chưa sáng suốt nhiều tháng nay — luôn hướng về phía Vũng Tàu, luôn không có tên người chết được đọc lên, và người của nhà họ Hứa ở bến này mỗi lần như thế đều tránh mặt đi nơi khác.",
      "Cao Minh đứng rất lâu nhìn cỗ quan tài được chằng dây trên khoang thuyền xa xa. Một tòa biệt thự giam một cô gái bị xóa tên. Một mạng lưới có tầm, có điểm neo, có bàn tay vươn tới tận những bến thuyền. Và giờ là những cỗ quan tài không tên đi về Vũng Tàu trong đêm. Các mảnh của một bức tranh lớn hơn đang lần lượt hiện ra — và hắn biết, con đường phía trước sẽ dài hơn con đường vừa đi qua rất nhiều.",
      "Hắn quay lại. Tiểu Lan đang đứng ở đầu cầu ván, nắng sớm rọi lên gương mặt mà người đời vẫn quen quay đi không dám nhìn. Nàng không còn đòi hắn hứa điều gì mà chính hắn chưa biết có làm được không. Nàng chỉ chỉnh lại cuộn chỉ thêu trong tay áo — cuộn chỉ đếm ngày của những ngày đã qua — và bắt đầu, bằng một nút thắt mới, đếm những ngày sắp tới.",
      "Phía trước là con đường xuống Vũng Tàu, nơi bến nước, những chuyến hàng không có tên, và những cỗ quan tài đi trong đêm đang chờ. HỒI 1 · LONG HẢI — HOÀN THÀNH."
    ],
    "dialogue": [
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Đi thôi, thưa ngài. Lần này, là tôi tự mình muốn đi."
      }
    ],
    "choices": [
      {
        "id": "to_vung_tau",
        "text": "Xuôi xuống cửa biển — theo dấu tuyến quan tài tới Vũng Tàu.",
        "next": "vt_arrival"
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
    "entity": "entity_hoe",
    "narration": [
      "Cao Minh bế nàng lên và đi. Không một ai trong căn nhà ấy đủ sức ngăn hắn, và thật ra cũng không cần ai ngăn: hắn đi qua sân gạch, qua hàng gia nhân đang mở mắt trừng trừng mà thân thể chưa kịp nhận lệnh, qua cánh cổng sắt bị một chưởng đánh bung xích — tất cả chỉ trong vài nhịp thở. Một gã gia nhân cầm cuốc đứng chết trân giữa sân, lưỡi cuốc giơ lưng chừng, mắt trắng dã nhìn theo; hắn lướt qua gã như lướt qua một cái cọc.",
      "Có một bà lão trong đám gia nhân vừa tỉnh giấc giơ tay ra phía họ — một bàn tay già nua vươn tới như muốn níu lấy vạt áo cô chủ — rồi khựng lại giữa không trung, vì trong kho tàng mệnh lệnh của căn nhà này không có mệnh lệnh nào dành cho cảnh tượng đang diễn ra. Không một ai trong sân ấy, kể cả những kẻ bị điều khiển đến tận xương tủy, đủ sức làm chậm bước chân hắn dù chỉ một nhịp thở. Đó chính là vấn đề: chẳng có gì phải trả giá, nên hắn đã không trả cái giá rẻ nhất trong tất cả — một câu hỏi.",
      "Nàng không chống cự. Đó là điều đáng sợ nhất. Nàng nằm yên trong tay hắn, nhẹ và lặng, hai tay xếp gọn trước ngực ôm cuộn chỉ thêu — ngoan ngoãn như nàng đã ngoan ngoãn suốt mười tám năm với mọi mệnh lệnh đưa tới, từ chén thuốc đắng đến tờ giấy ký tên người khác. Hắn đã gặp nàng lần đầu trong tư thế ấy: một người đã học cách không phản kháng, vì phản kháng lần nào cũng phải trả bằng chính trí nhớ của mình.",
      "Suốt quãng đường từ cổng ra đến đường cái, nàng không hỏi một câu nào. Không hỏi đi đâu, không hỏi vì sao, không hỏi bà Năm Liên còn ở đâu, không hỏi vì sao trời chưa sáng mà đèn trong nhà đã cháy hết lên. Sự im lặng ấy khác hẳn sự im lặng của cô gái đã từng hỏi tên hắn để «nhớ cho kỹ», từng dặn hắn đừng coi nàng như món đồ sắp vỡ, từng xin được tự mình chọn một con đường. Cô gái ấy hỏi rất nhiều, vì cô ấy còn tin rằng câu trả lời có phần của mình trong đó. Người con gái đang đứng bên vệ đường này thì đã thôi tin, chỉ sau một lần bị bế qua cổng mà không được hỏi.",
      "Khi hắn đặt nàng xuống, nàng cúi đầu, nói một tiếng «cảm ơn ngài» rất khẽ và rất đúng mực — tiếng cảm ơn tự động của một người đã được huấn luyện để cảm ơn bất cứ ai quyết định thay cho mình, từ người bưng thuốc đến người ký giấy. Hắn nghe tiếng cảm ơn ấy mà lạnh cả sống lưng: nó giống hệt tiếng cảm ơn nàng dành cho những kẻ đã giam nàng, không khác một phân. Trong mắt nàng lúc này, hắn và căn nhà kia đã đứng chung một phía — phía của những kẻ không cần hỏi ý kiến Hứa Tiểu Lan.",
      "Ra khỏi cổng một quãng, trời hừng sáng. Hắn đặt nàng xuống vệ đường, hỏi nàng có đau ở đâu không, có choáng không. Nàng đứng thẳng dậy, phủi lại vạt áo cho ngay ngắn, và đáp — giọng nhẹ như đang nói về một người nào khác, một người mà nàng không còn quen thân nữa.",
      "Hắn sững lại. Trong những ngày qua, nàng đã trả giá từng mảnh ký ức một để giành lại một thứ duy nhất: quyền được nói tiếng «không» và tiếng «có» của chính mình. Đêm qua, nàng vừa dùng cái quyền ấy để từ chối cả một nghi lễ. Rạng sáng nay, người đến cứu nàng đã bước qua cái quyền ấy nhẹ nhàng như bước qua một ngưỡng cửa — không ác ý, không hề hay biết, và chính vì thế mà không còn cách nào gỡ ra được nữa.",
      "Con đường thoát đã mở toang trước mặt. Nhưng từ giây phút này, dù đi đến đâu, nàng cũng sẽ chỉ đi theo — yên lặng, thuận ý, không đòi hỏi, không từ chối. Thứ mà mạng lưới trong tòa nhà kia mất mười tám năm vẫn chưa làm trọn được với nàng, thì người cứu nàng đã làm xong trong một nhịp thở: dạy nàng rằng tiếng nói của nàng không cần thiết cho cuộc đời của chính nàng.",
      "Đây không phải con đường mà câu chuyện này có thể đi tiếp."
    ],
    "dialogue": [
      {
        "speaker": "Cao Minh",
        "text": "Nàng có đau ở đâu không?"
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài, tôi không sao. Lần sau ngài muốn đưa tôi đi đâu, xin cứ quyết định trước. Tôi khỏi cần phải nói nữa."
      }
    ],
    "choices": [
      {
        "id": "retry",
        "text": "Trở lại quyết định trước cổng biệt thự",
        "retry": true
      }
    ],
    "deadEnd": true
  },
  "lh_retelling_rest": {
    "id": "lh_retelling_rest",
    "contentStatus": "approved",
    "stageId": "long_hai",
    "title": "Một giấc ngủ ngắn",
    "backgroundId": "tieu-lan-room",
    "location": "Phòng Hứa Tiểu Lan, biệt thự Long Hải",
    "narration": [
      "Hắn vừa ngồi xuống ghế, chưa kịp mở lời, thì nàng đã gục xuống. Đợt sóng lệnh vừa rút, thân thể nàng như một sợi dây vừa buông sau khi căng quá lâu: vai trĩu xuống, mi mắt khép lại giữa một câu nói dở, và nếu hắn không đỡ kịp, nàng đã ngã khỏi mép giường. Hắn đỡ nàng nằm lại ngay ngắn — nhẹ đến mức hắn phải cố không nghĩ tới cái nhẹ ấy — rồi quay ra chiếc ghế bên cửa. Lời kể có thể chờ. Người thì không. Nàng cần ngủ trước đã, dù chỉ là một giấc ngắn giữa đêm nay.",
      "Nàng ngủ gần như ngay lập tức, và đó không phải giấc ngủ của những đêm bị điều khiển. Mười một năm nay, những lần nàng nhắm mắt trong căn phòng này đều có một bàn tay khác giữ hộ nhịp thở; còn đêm nay, hơi thở của nàng là của nàng — không đều, nông, thỉnh thoảng đứt quãng như người vừa chạy một quãng dài, rồi dần dần chậm lại. Hắn ngồi yên nghe nhịp thở ấy từ bên cửa, không bước lại gần. Một người vừa quên hắn đang ngủ ngay trước mặt hắn — một sự tin cậy mà trí nhớ của nàng không hề ký tên, còn thân thể nàng thì đã ký thay từ lúc nào không biết.",
      "Hắn dùng những phút ấy để sắp lại những gì phải kể. Không phải kể hết — một canh giờ không chứa nổi mấy ngày, và nàng không cần một cuốn hồ sơ. Nàng cần những điều cốt yếu, theo đúng thứ tự: hắn là ai; hắn tới căn nhà này bằng cách nào; những gì hắn đã thấy thứ trong người nàng làm và nó vừa lấy của nàng những gì — còn nó là thứ gì, hắn chưa biết, và sẽ nói đúng như thế; đêm nay căn nhà này sẽ còn xảy ra chuyện gì; và sau cùng — quan trọng hơn mọi điều — quyết định ra đi là của nàng, do nàng tự quyết, và nàng có quyền quyết lại. Hắn sắp chúng như người ta sắp thuốc vào khay: thứ tự nào sai, thuốc ấy hóa thành độc.",
      "Bà Năm Liên rón rén bước vào khi nàng đã ngủ sâu, tay bưng chậu nước ấm và chiếc khăn — thói quen của mười mấy năm hầu hạ những đêm nàng trở bệnh. Bà nhìn cô chủ ngủ, đứng sững một lúc lâu, rồi nói khẽ: mười mấy năm nay, đây là lần đầu bà thấy nó ngủ mà trán không cau lại. Rồi bà quay sang hắn, và câu hỏi của bà không vòng vo: lát nữa nó tỉnh, nó vẫn không nhớ ông, phải không. Hắn gật đầu. Bà già im lặng, vắt chiếc khăn, đặt lên thành chậu — những việc không cần thiết, chỉ để tay mình có chỗ bấu víu.",
      "Hắn để nàng ngủ cho tới sát giờ không thể chậm hơn. Ngoài hành lang, căn nhà đã sống lại theo cách của nó: tiếng chân gia nhân đi qua cửa phòng nàng không dừng, tiếng lệnh truyền đi xa dần về phía dãy nhà chính — đoàn người của phủ sẽ tới đêm nay, và cả nhà đang sửa soạn tiếp họ. Khi nàng cựa mình, trời vẫn tối, trống canh ba còn chưa điểm. Nàng mở mắt, nhìn trần nhà một lúc như để chắc chắn mình đang ở đâu, rồi quay đầu — và thấy một người lạ ngồi bên cửa phòng mình.",
      "Việc đầu tiên nàng làm — trước cả khi lên tiếng — là đưa tay tìm cuộn chỉ đếm ngày để trên gối, như một thói quen của mười một năm. Ngón tay nàng lướt qua từng nút thắt, đếm trong im lặng. Rồi nàng dừng lại ở một nút thắt mới, một nút nàng không nhớ đã tự tay thắt. Nàng nhìn nút chỉ ấy rất lâu. Trong đầu nàng có một khoảng thời gian vừa bị lấy đi gọn gàng, và cuộn chỉ — thứ duy nhất trong phòng không biết nói dối — xác nhận điều đó thay cho mọi lời giải thích.",
      "Việc tiếp theo nàng làm là ngồi dậy — tự mình, không ai đỡ — và kéo lại vạt áo cho ngay ngắn, theo cái nếp của một người đã quen giữ thể diện cả trong những lúc hoảng hốt nhất. Ánh mắt nàng đi từ mặt hắn xuống hai thanh kiếm lơ lửng bên ghế, rồi quay lại mặt hắn. Sợ thì có sợ. Nhưng dưới cái sợ ấy có một thứ khác yên tĩnh hơn đang giữ nàng ngồi yên thay vì kêu lên: cùng một sự yên mà trong phần ký ức nàng không còn giữ, đã từng khiến nàng tin hắn.",
      "Hắn kể, ngắn và đúng thứ tự như đã sắp. Hắn kể Vạn Hoa Lầu và vầng sáng dưới sàn gỗ — nàng nghe như nghe chuyện thần thoại về người khác. Hắn kể lần bắt mạch đầu tiên, kể tiếng phản thanh nàng vừa làm chưa đầy một canh giờ trước, kể cái giá: một khoảng trống gọn gàng trong trí nhớ nàng, hình dạng đúng bằng mấy ngày có hắn trong đó. Hắn kể đoàn người sẽ tới đêm nay, kể cổng xích và con đường ra bến, kể giờ Dần. Và hắn kể lời quyết của chính nàng — nguyên văn, không thêm một chữ nào có lợi cho mình.",
      "Nàng nghe hết, không ngắt lời lần nào. Nghe xong, nàng im lặng một lúc lâu, rồi nàng tự kiểm chứng lời kể bằng những gì nàng biết không qua hắn: hạn đêm rằm nàng đã nghe thẳng từ thứ trong người mình, tiếng phản thanh nàng nhớ mình đã làm, khoảng trống trong đầu nàng là thật, nút chỉ lạ trên gối là thật. Lời kể của hắn khớp với phần nàng tự biết đến từng mối nối. Chỉ có một điều nàng không kiểm chứng được: lòng tốt của người kể. Điều ấy, nàng nói, nàng sẽ tự cân nhắc dọc đường.",
      "Lời hứa vừa được nói ra, hắn ngẩng đầu. Trong không khí khép kín của gian phòng, lẫn vào mùi thuốc và mùi trầm cũ, có một mùi khác vừa len tới: mùi khói gỗ, khét và mỏng. Phía dãy bếp sau, tiếng gỗ cháy lách tách, rồi một tiếng kèo gãy nhỏ. Hắn đứng dậy, nói nhanh: nàng ở lại đây với bà Năm, chưa được đi đâu cả — bổn tọa xuống trước xem sao. Bà Năm Liên đã chạy ra hành lang gọi người. Hắn đi thẳng về phía dãy bếp: có kẻ trong căn nhà này vừa chọn đúng giờ này để châm lửa."
    ],
    "dialogue": [
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài… xin ngài lượng thứ. Ngài là ai, và vì sao ngài lại ngồi trong phòng tôi giữa đêm thế này?"
      },
      {
        "speaker": "Cao Minh",
        "text": "Cao Minh. Bổn tọa là người nàng đã quên trong chính đêm nay — quên vì nàng vừa làm một việc tốt cho cả căn nhà này."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Tôi quên ngài… Thưa ngài, tôi nhớ mình vừa làm một việc rất nặng. Tôi nhớ tiếng phản thanh đi qua người tôi. Chỉ có đoạn có ngài trong đó là trống."
      },
      {
        "speaker": "Bà Năm Liên",
        "text": "Cô ơi, ông ấy nói thật đó cô. Mấy ngày nay, việc gì trong nhà này cũng có ông ấy đỡ cho cô một tay."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Dạ, con tin bà. — Thưa ngài, vậy xin ngài kể cho tôi nghe. Kể từ đầu, và kể đúng như nó đã xảy ra."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài, lời ngài kể, tôi nghe như nghe chuyện của một người vừa quen vừa lạ. Nó chưa phải là ký ức của tôi."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Nhưng nó đủ để tôi tự quyết. Quyết định ra đi, tôi xin quyết lại một lần nữa, bằng cái đầu của tôi bây giờ: đêm nay, tôi đi."
      },
      {
        "speaker": "Cao Minh",
        "text": "Bổn tọa chỉ cần nàng được quyết. Còn nhớ hay quên — phần ấy, bổn tọa giữ thay nàng."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Và từ nay, nếu tôi lại quên, ngài lại kể cho tôi nghe như thế này nhé. Kể đúng như nó đã xảy ra — đừng thương tôi mà bớt đi chữ nào."
      },
      {
        "speaker": "Cao Minh",
        "text": "Được. Kể thì kể. Và nghe cho rõ: lời bổn tọa kể là lời của bổn tọa — không phải ký ức của nàng."
      }
    ],
    "choices": [
      {
        "id": "leave_note",
        "text": "Ghi vội cho nàng một mảnh giấy — tên hắn, lời hứa kể lại, và quyết định ra đi do chính nàng vừa quyết lại — rồi mới xuống bếp: nếu nàng lại quên, tờ giấy vẫn còn.",
        "next": "lh_kitchen_fire",
        "effects": {
          "cluesHuaGiaDelta": 1,
          "lanTrustDelta": 1
        }
      },
      {
        "id": "go_down_first",
        "text": "Xuống bếp ngay, để nàng ở lại với những điều vừa nghe và bà Năm Liên: tin rằng lần này, nàng giữ được chúng bằng chính sức mình.",
        "next": "lh_kitchen_fire",
        "effects": {
          "lanTrustDelta": 2
        }
      }
    ]
  },
  "vt_arrival": {
    "id": "vt_arrival",
    "contentStatus": "approved",
    "stageId": "vung_tau",
    "title": "Cửa biển",
    "backgroundId": "vung-tau-roadstead",
    "location": "Cửa biển Vũng Tàu — buổi trưa",
    "narration": [
      "Ra khỏi vùng nước lặng sau lưng biệt thự Long Hải, mặt nước bắt đầu đổi tính. Sóng không còn vỗ đều vào mạn thuyền như lúc rạng sáng nữa; nó chồm lên từng đợt ngắn, xô chiếc thuyền đánh cá chao đi chao lại như một cái thúng bị ai thỉnh thoảng đá vào từ phía dưới. Nắng lên nhanh. Phía trước, một dải đất nhô ra biển, trên cao có tháp trắng của ngọn đèn biển đứng im giữa trời trong.",
      "Tiểu Lan ngồi trong mui thuyền, lưng tựa vào vách gỗ, hai tay đặt lên đầu gối. Mỗi lần thuyền chao mạnh, nàng lại phải vịn vào mép mui mới ngồi yên được. Có lúc cần nhích người sang bên cho Thu Nguyệt đi qua, nàng không đứng lên ngay: nàng nhìn xuống đôi chân mình một thoáng, rồi mới chậm rãi ra lệnh cho chúng — gót nhích trước, mũi chân theo sau — như người ta điều một đôi tay mượn. Thu Nguyệt rót nước vào chén sành, đưa tận tay nàng, đợi nàng uống xong mới lấy lại chén, rồi kéo tấm khăn che mặt của nàng xuống thấp thêm một phân cho kín.",
      "Đây là lần thứ hai trong đời Cao Minh ngồi trên mặt biển. Hắn đứng ở mũi thuyền, hai thanh kiếm lơ lửng sau lưng không chạm vào đâu cả, áo choàng bay phần phật mà người thì đứng vững như đóng cọc. Hắn nhìn mặt nước mở ra hai bên như nhìn một thứ đồ chơi mới, thỉnh thoảng lại quay đầu nhìn ngọn tháp trắng trên núi nhỏ, nhìn rất lâu.",
      "Nàng nói những điều ấy như đọc một cuốn sách mình đã đọc nhiều lần — không phải sách trong thư phòng, mà là sách của những năm nằm trong phòng bệnh nghe người nhà và gia nhân nói chuyện qua vách: giá chợ, lệ cảng, thói đời, nàng gom góp từng mảnh một từ những tiếng nói vọng vào, và giữ chúng ngăn nắp hơn cả người đã từng đi qua những nơi ấy. Phía ngoài cửa biển, mấy chiếc tàu hơi nước neo thành hàng, khói than đùn lên chậm chạp; ghe nhỏ chèo qua chèo lại giữa tàu và bờ, chở nước ngọt trong những thùng gỗ lớn.",
      "Câu ấy thốt ra đã mất hẳn vẻ chắc nịch ban đầu — chỉ còn sự ghi nhận phẳng lặng của người vừa bị sửa một điều mình tưởng đã biết chắc. Hắn không cãi, không chữa thẹn. Ở thế giới của hắn, tháp cao đốt lửa chỉ có một việc là báo động; ở thế giới này, người ta xây tháp cao để đưa nhau về nhà. Hắn gật đầu một cái như người vừa thuộc thêm một chữ trong thứ tiếng mình đang học, rồi quay ra nhìn mặt nước, để cho bài học tự ngấm.",
      "Chiếc thuyền lướt qua một thuyền cá đang kéo lưới gần cửa lạch. Người đàn ông trên thuyền ấy ngẩng lên, thấy hai thanh kiếm treo lơ lửng sau lưng vị khách đứng ở mũi thuyền — tay kéo lưới của ông ta chậm lại một nhịp, rồi ông ta lặng lẽ quay mũi thuyền chèo tránh sang phía bên kia lạch, không một lời, không một tiếng chào. Tin đồn ở cửa biển này đi bằng mắt, nhanh hơn đi bằng miệng.",
      "Thuyền áp vào cầu tàu phụ. Và Tiểu Lan nghe thấy nó trước khi bất cứ ai trên thuyền kịp nhìn rõ bờ.",
      "Trên cầu tàu chính phía xa, một đội khiêng đang xuống hàng theo đúng thứ nhịp nàng đã nghe sáng nay ở bến cá — nhịp ấy không lạ với nàng nữa; nàng nhận ra nó ngay, như nhận ra giọng một người quen trong đám đông. Nhưng ở đây nhịp không đi một mình. Từ phía chòi bến, một nhịp ngắn nổi lên, ăn khớp vào nhịp của đội đầu rồi truyền tiếp xuống cầu tàu xa hơn, nơi một đội khiêng thứ hai nhấc hàng lên đúng vào cái nhịp vừa truyền tới. Rồi một đội nữa, ở tận phía kho than. Từng đội một nối vào nhau quanh một điểm phát không ai nhìn thấy, như nhiều sợi dây cùng buộc vào một cái trục khuất trong sương nắng. Ở bến cá, chỉ có một chuyến hàng lẻ đi qua trong một buổi sáng. Ở đây, nhịp có đường đi của nó. Nó có trạm.",
      "Cao Minh không hỏi hàng gì, cũng không nhìn lên bờ. Hắn nhìn nàng — nhìn người vừa nói câu ấy bằng giọng của kẻ đã biết mình đang nghe thứ gì, chỉ chưa biết nó lớn tới đâu. Mũi thuyền chạm vào cầu ván, kêu một tiếng khô. Chặng mới bắt đầu từ đôi tai của nàng, không phải từ mắt của hắn."
    ],
    "dialogue": [
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài, thuyền sắp vào cửa biển. Từ đây trở đi, ngài cứ để tôi nói trước. Đất này không giống đất Long Hải."
      },
      {
        "speaker": "Cao Minh",
        "text": "Bổn tọa nghe nàng. Ở đây, bổn tọa là người mù."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Dưới mặt nước kia không phải chỗ nào cũng sâu như nhau. Có lạch — là đường nước sâu chạy giữa hai bãi cạn, thuyền lớn thuyền nhỏ đều phải đi đúng lạch ấy, như đi đúng cửa vào nhà người ta. Lệch ra một chút là mắc cạn, nằm phơi bụng cho cả bến nhìn. Thuyền lạ vào bến phải chờ hoa tiêu — là người của cảng, thuộc lạch như thuộc lòng bàn tay, lên thuyền cầm lái thay. Không có hoa tiêu, thuyền Tây to mấy cũng phải neo ngoài mà chờ."
      },
      {
        "speaker": "Cao Minh",
        "text": "Dẫn đường vào bến cũng phải có phép riêng của nó. Nghe như người dẫn khách qua trận pháp: sai một bước là kẹt giữa hai lớp đá."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Cũng gần như vậy, thưa ngài. Vào tới cầu tàu còn có giấy kiểm dịch: quan cảng hỏi thuyền từ đâu tới, có người bệnh không, có người chết không. Giấy ấy không xong thì hàng không xuống được, người cũng không. Thuyền nào bị nghi có bệnh thì phải neo ngoài cửa, treo cờ vàng, chờ quan y tế ra tận nơi khám — có khi chờ ba bốn ngày, hàng hóa thối rữa trong khoang mà không ai dám trách."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Còn mấy chiếc tàu hơi nước đen kia, chúng vào đây để lấy than và nước ngọt — than chất ở kho gần bến, nước thì ghe nhỏ chở ra tận nơi. Cửa biển này nuôi cả vùng bằng hai thứ ấy đấy, thưa ngài. Ngài thấy kho than kia không — nửa cái bến này sống nhờ nó."
      },
      {
        "speaker": "Cao Minh",
        "text": "Còn cái tháp trắng kia. Đứng cao, nhìn xa, đốt đèn cả đêm — là tháp canh phải không? Có giặc biển thì đốt lửa báo về cho đồn."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Không phải, thưa ngài. Nó là đèn cho người đi biển. Đêm xuống, thuyền ở ngoài khơi nhìn vào ngọn đèn mà biết đá ngầm ở đâu, cửa lạch ở phía nào, để khỏi đâm vào bờ mà chìm. Nó không dọa ai cả. Nó chỉ đường cho người ta về."
      },
      {
        "speaker": "Cao Minh",
        "text": "…Ra là đèn dẫn về. Ngọn đèn tử tế nhất mà bổn tọa từng nghe nói tới, lại không phải để dọa ai."
      },
      {
        "speaker": "Lão ngư ông",
        "text": "Thưa ông thầy, cập bến phụ đằng kia là yên nhất. Tôi nói với người bến rằng ông thầy là thầy thuốc ở xa tới, đưa cô chủ đi dưỡng khí biển cho mau lại sức. Người ta nghe chữ dưỡng bệnh là người ta tránh ra — khỏi ai hỏi han nhiều."
      },
      {
        "speaker": "Lão ngư ông",
        "text": "Tới nơi thì ông thầy cứ đi thẳng vào, đừng đứng ngoài cầu tàu chính giờ này. Giờ trưa là giờ phu khuân đổi tay, người đông, mắt cũng đông. Bến này hiền, nhưng bến càng hiền thì càng hay nhìn."
      },
      {
        "speaker": "Cao Minh",
        "text": "Ông chu đáo. Bổn tọa nhớ rồi."
      },
      {
        "speaker": "Lê Thu Nguyệt",
        "text": "Cô cứ để em nói chuyện với người bến. Cô ngồi trong bóng mát, khăn cứ che kín như vầy là được. Ai hỏi, em trả lời thay hết."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Vẫn là nhịp ấy, thưa ngài. Nhưng ở đây… nó có trạm."
      }
    ],
    "companions": [
      "le_thu_nguyet"
    ],
    "choices": [
      {
        "id": "land_quiet",
        "text": "Lên bến phụ vắng người trước — lo chỗ nghỉ chân cho nàng, chuyện trên cầu tàu để sau.",
        "next": "vt_coffin_wharf",
        "effects": {
          "lanTrustDelta": 2
        },
        "flags": {
          "vtLandedQuiet": true
        }
      },
      {
        "id": "land_open",
        "text": "Đi thẳng về phía cầu tàu chính, lẫn vào đám đông bến — nàng nói có \"hàng\" của nhà ở đó.",
        "next": "vt_coffin_wharf",
        "effects": {
          "cluesHuaGiaDelta": 1,
          "lanTrustDelta": -1
        },
        "flags": {
          "vtLandedOpen": true
        }
      }
    ]
  },
  "vt_coffin_wharf": {
    "id": "vt_coffin_wharf",
    "contentStatus": "approved",
    "stageId": "vung_tau",
    "title": "Bến quan tài",
    "backgroundId": "coffin-wharf",
    "location": "Bến Phúc Thọ, Vũng Tàu — trưa đứng bóng",
    "narration": [
      "Phúc Thọ Tang Quán nằm ngay sau cầu tàu chính, mặt tiền quét vôi trắng đã ngả màu khói, sân trước lát gạch tàu, và dọc hai bên sân là quan tài — xếp thành dãy dài như hàng hóa chờ cân: cỗ mới đánh vecni còn thơm mùi gỗ, cỗ cũ sơn đen, cỗ nhỏ cỗ lớn, có cỗ đã đóng triện đỏ trên nắp. Trưa đứng bóng. Mùi gỗ mới, mùi vôi và mùi than đá từ kho bên hông quyện vào nhau, nóng và đặc.",
      "Người tiếp đoàn là người trông bến. Hắn ngồi trên chiếc ghế đẩu cạnh chồng sổ giao ca, một tay cầm que tính, mắt không rời dãy quan tài đang được kiểm đếm. Thu Nguyệt bước lên trước, nói năng lễ phép và rành rọt như một người đã quen đi chợ thay chủ.",
      "Hắn chấm que tính lên sổ, gạch một vạch chéo, lật sang trang mới — động tác của một người đã làm đúng việc này hàng nghìn buổi trưa, đến mức tay hắn đếm quan tài như tay người ta đếm tiền lẻ. Trên góc mỗi trang sổ, dấu triện đỏ của tang quán đóng chồng lên nhau, trang nào cũng có, đều như đóng máy. Một nơi lo việc chết chóc mà giấy tờ ngăn nắp hơn cả một hiệu buôn sống.",
      "Hắn nói mà không ngẩng mặt lên khỏi que tính. Nhưng trong lúc đếm, mắt hắn có một lần — chỉ một lần — liếc nhanh về phía kho than ở hông sân, một cái liếc thừa ra khỏi công việc đang làm, như người ngồi giữ cửa mà thỉnh thoảng phải kiểm tra xem ổ khóa sau lưng mình còn nguyên không. Cao Minh đứng ở rìa sân, dưới bóng mái hiên, nhìn dãy quan tài như nhìn một sạp hàng lạ. Hắn không nói gì. Hắn cũng đang đếm.",
      "Một cỗ quan tài được bốn người khiêng ngang qua sân để xuống tàu. Khi nó đi qua gánh hàng rong ở góc sân, người đàn bà bán hàng tự động dẹp gánh sát vào tường, cúi mặt xuống nhìn chằm chằm vào mớ rau của mình. Một bà già dắt đứa cháu nhỏ đứng gần đó lặng lẽ kéo đứa bé ra khỏi lối đi, vòng ra sau lưng quầy nước. Đứa bé còn ngoái đầu lại nhìn — nó là người duy nhất trong sân nhìn thẳng vào cỗ quan tài — cho tới khi bàn tay bà nó che mắt nó lại. Không ai nói một câu nào. Cỗ quan tài đi qua giữa một khoảng im lặng được dọn sẵn, như người ta dọn đường cho một thứ mà ai cũng biết là không nên nhìn thẳng.",
      "Đến cả mấy người phu khuân đang nghỉ tay ở góc sân cũng vậy. Họ ngồi ăn cơm nắm, mắt nhìn xuống chén của mình; khi cỗ quan tài đi ngang, không một ai ngẩng lên, không một ai hạ chén xuống. Sự không-nhìn ấy đã thành một thứ lễ nghi của bến này — ai mới tới mà nhìn lâu một chút là biết ngay người lạ.",
      "Tiểu Lan đứng trong bóng mái hiên, một tay vịn vào cột gỗ. Nàng nghe thấy trước.",
      "Cỗ quan tài vừa được đặt xuống ở đầu cầu tàu, chờ xếp xuống khoang. Nó khác những cỗ xung quanh ở một chỗ rất nhỏ: gần đầu nắp, có mấy lỗ khoan tròn, nhỏ và khéo, khoan thành một hàng ngắn như lỗ thông hơi của một cái hộp đựng chim. Quan tài cho người chết không cần lỗ thở.",
      "Rồi từ bên trong cỗ quan tài ấy, có tiếng gõ. Rất khẽ. Ba tiếng. Nghỉ. Ba tiếng. Nghỉ. Đều như người ta đếm.",
      "Đứng canh gần đó là một người gác của bến, hai tay chắp sau lưng, chân dậm nhịp xuống nền gạch theo một tiết tấu chậm mà chính ông ta cũng không để ý. Tiếng gõ trong quan tài đi đúng theo nhịp chân của người gác — không nhanh hơn, không chậm hơn, không lệch một tiếng nào. Như một cái máy đếm bị buộc phải đếm theo nhịp của kẻ khác.",
      "Có một lúc, người gác khựng chân lại để cúi xuống nhặt sợi dây thừng rơi — nhịp chân đứt quãng đúng hai nhịp. Bên trong quan tài, tiếng gõ cũng khựng theo… rồi vội vàng gõ dồn thêm một tiếng, như kẻ đi sau bị vấp phải chạy hai bước cho kịp hàng. Khi chân người gác đều lại, tiếng gõ cũng đều lại. Không phải người trong quan tài nghe tiếng chân. Là anh ta không được phép gõ khác.",
      "Cao Minh im lặng lâu hơn thường lệ của hắn rất nhiều. Trong cái im lặng ấy không có chỗ cho một câu đùa nào, và hắn biết điều đó rõ hơn ai hết. Khi hắn lên tiếng, giọng hắn ngắn và lạnh, và câu nói không hướng về người trong quan tài.",
      "Người trông bến ngẩng mặt lên. Hắn đã nghe thấy — không phải câu nói, mà là khoảng dừng quá lâu của cô gái che mặt bên cạnh cỗ quan tài ấy. Hắn đứng dậy nhanh hơn mức cần thiết, chen vào giữa đoàn và dãy quan tài, giọng cộc hẳn đi.",
      "Sự hung hăng ấy vượt quá việc đuổi khách. Cao Minh nhìn người trông bến như nhìn một người đang nói dối bằng cả thân mình: mắt hắn, trong lúc mắng khách, lại liếc về phía kho than lần nữa — và lần này cái liếc ấy ở lại lâu hơn. Đây không phải ghét khách. Đây là một người đang lấy thân mình che một cánh cửa.",
      "Đoàn rút ra khỏi sân, bề ngoài như một đoàn khách bị đuổi thật. Sau lưng họ, người trông bến đã ngồi xuống ghế đẩu, que tính lại chạy trên sổ — nhanh hơn lúc nãy một chút, như người muốn dùng công việc để đè một ý nghĩ vừa bị khơi lên. Cỗ quan tài có lỗ thở vẫn nằm ở đầu cầu tàu, chờ chuyến xếp xuống khoang. Ra tới ngoài cổng, Tiểu Lan đi chậm lại nửa bước, nói nhỏ vừa đủ cho Thu Nguyệt nghe."
    ],
    "dialogue": [
      {
        "speaker": "Lê Thu Nguyệt",
        "text": "Thưa ông, đoàn chúng tôi lỡ đường biển, muốn thuê một chỗ nghỉ chân qua trưa, với lại hỏi đường thuê thuyền đi tiếp ít hôm nữa. Ông làm ơn chỉ giúp."
      },
      {
        "speaker": "Trương Bá Hòe",
        "text": "Nghỉ chân: gian sau, hai đồng một buổi. Thuyền: hỏi bến dưới. Ở đây chỉ có quan tài."
      },
      {
        "speaker": "Lê Thu Nguyệt",
        "text": "Dạ, thuyền đi về phía cửa sông thì mấy ngày có một chuyến, thưa ông? Đoàn tôi có người bệnh, không chờ lâu được."
      },
      {
        "speaker": "Trương Bá Hòe",
        "text": "Có hàng thì có thuyền. Không hàng thì… tùy."
      },
      {
        "speaker": "Lê Thu Nguyệt",
        "text": "Dạ, gian sau cũng được. Ông cho người dẫn đoàn tôi vào —"
      },
      {
        "speaker": "Trương Bá Hòe",
        "text": "Tự đi. Cửa thứ hai, đừng vào cửa thứ nhất. Đụng vào cỗ nào, đền cỗ đó."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài… người trong đó còn tỉnh."
      },
      {
        "speaker": "Cao Minh",
        "text": "Bổn tọa nghe thấy rồi."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Họ bắt anh ta gõ theo nhịp của người gác. Gõ để trên này biết anh ta còn… nghe lời. Hễ còn gõ đúng nhịp, là còn dùng được."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Ở căn nhà tôi ở, người ta cũng sống trong một nhịp không phải của mình. Chỉ là ở đó, nhịp đi qua trong tường, không ai nghe thấy ngoài tôi. Ở đây nó gõ ra thành tiếng."
      },
      {
        "speaker": "Cao Minh",
        "text": "Chủ của nhịp này hẳn tự hào về sự đều đặn của mình lắm."
      },
      {
        "speaker": "Trương Bá Hòe",
        "text": "Gian sau hết chỗ rồi. Bến này không tiếp khách lạ. Mấy người đi ngay đi. Chuyến bảy còn chưa xếp xong, đừng có đứng chắn lối khiêng."
      },
      {
        "speaker": "Lê Thu Nguyệt",
        "text": "Ơ, thưa ông, ông vừa nói còn gian —"
      },
      {
        "speaker": "Trương Bá Hòe",
        "text": "Vừa rồi khác. Đi. Hỏi thuyền thì xuống bến dưới mà hỏi."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Người trông bến ấy… anh ta sợ cho phía kho than. Không phải sợ cho quan tài."
      },
      {
        "speaker": "Lê Thu Nguyệt",
        "text": "Sao cô biết?"
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Mắt anh ta, Thu Nguyệt. Người ta lo cho thứ gì, mắt sẽ tới đó trước. Từ lúc đoàn mình bước vào sân, mắt anh ta đã về phía kho than hai lần."
      }
    ],
    "companions": [
      "le_thu_nguyet",
      "npc_porter"
    ],
    "choices": [
      {
        "id": "watch_store",
        "text": "Rút lui hẳn, vòng ra sau bến theo lối chợ cá — quan sát kho than từ xa, không để Bá Hòe biết mình còn ở gần.",
        "next": "vt_coal_store",
        "effects": {
          "cluesHuaGiaDelta": 1
        },
        "flags": {
          "vtWatchedStore": true
        }
      },
      {
        "id": "linger_wharf",
        "text": "Ở lại rìa bến, mua nước và ngồi nghỉ như khách chờ thuyền — để Bá Hòe quen mặt, chờ hắn đổi ca.",
        "next": "vt_coal_store",
        "effects": {
          "lanMaterInfluenceDelta": 2
        },
        "flags": {
          "vtLingeredWharf": true
        }
      }
    ]
  },
  "vt_coal_store": {
    "id": "vt_coal_store",
    "contentStatus": "approved",
    "stageId": "vung_tau",
    "title": "Kho than",
    "backgroundId": "coal-store",
    "location": "Kho than bến Phúc Thọ — buổi chiều",
    "narration": [
      "Chiều xuống, sân bến vắng dần. Thu Nguyệt đứng ở cửa kho than, quay lưng vào trong, mắt nhìn ra sân như một người đang chờ mua hàng — vị trí của một người canh cửa biết điều: không nhìn vào việc không phải của mình, và không để ai nhìn vào thay nàng.",
      "Rắc rối tới trước cả đoàn. Phu trưởng bến bước vào kho, tay cầm sổ giao ca, giọng đã cao sẵn: số quan tài giao ca trưa nay lệch một cỗ so với sổ của hắn, và hắn chọn ngay người trông bến để trút. Ở bến này, lệch một cỗ quan tài không phải chuyện tiền — nó là chuyện có thể bị quy là ăn cắp xác, nhẹ thì mất việc, nặng thì đòn và tù.",
      "Cao Minh đang đứng cách đó mấy bước, trước một sạp cá khô dựng tạm ở góc kho, tay cầm một con cá khô lên xem như khách hàng khó tính nhất đời. Hắn không quay đầu lại. Hắn chỉ nói, bằng giọng của người đang mặc cả cá:",
      "Phu trưởng bến khựng lại. Hắn lật sổ, lật ngược hai trang, ngón tay dò xuống… rồi mặt hắn đổi sắc theo cách của một người vừa thấy cái bẫy mình giăng nằm ngay dưới chân mình. Hắn hắng giọng, gấp sổ lại, và bỏ đi mà không nói thêm một câu nào — đi nhanh, như người có việc gấp ở đầu kia bến. Cao Minh đặt con cá khô xuống, phủi tay, quay lại nhìn trời như chưa từng mở miệng.",
      "Người trông bến đứng nhìn theo bóng phu trưởng một lúc lâu. Rồi hắn nhìn vị khách lạ — nhìn thật, lần đầu tiên trong ngày. Hắn ghét cái cảm giác đang hình thành trong bụng mình; người bến gọi nó là mắc nợ, và hắn thà bị đánh còn hơn mắc nợ người lạ.",
      "Hắn mở hé cánh cửa kho than — chỉ hé đúng một người lách — rồi đóng sập lại sau lưng đoàn. Trong kho tối và đặc bụi than; những bao than xếp thành từng vách cao quá đầu người, chừa lại những lối đi hẹp như ngõ. Hắn dẫn đoàn vào lối trong cùng, dừng lại trước một vách bao, và kéo một bao than ở tầm thấp sang bên.",
      "Sau vách bao ấy là một khoảng trống vừa đủ cho một người nằm. Và trong khoảng trống ấy có một người thật: một thanh niên gầy đến mức hai xương gò má nhô ra như đá, nằm trên tấm chiếu rách, một bát cơm và một ca nước đặt ngay tầm tay. Anh ta không ngủ. Đôi mắt anh ta mở, sáng, và tỉnh táo một cách đau đớn — thứ tỉnh táo của người đã lâu lắm rồi không được phép không tỉnh.",
      "Hắn nói câu ấy như nói về thời tiết. Rồi, như bị chính mình bắt gặp đang kể lể, hắn thêm một câu ngắn ngủn, mắt nhìn vào vách bao:",
      "Người thanh niên trong khoảng tối chớp mắt mấy lần, như người vừa bị gọi về từ một nơi rất xa. Anh ta mở miệng nói — và đoàn nghe thấy ngay vì sao giọng anh ta ngắt quãng: cứ nói được một đoạn ngắn, thân người anh ta lại khựng lại một nhịp rất nhỏ, ngón tay trỏ gõ xuống chiếu hai tiếng không thành tiếng, rồi anh ta giật mình, hoảng hốt nhìn xuống tay mình, và cố nói tiếp.",
      "Cao Minh vẫn đứng yên từ nãy. Giờ hắn mới đưa tay vào trong áo, lấy ra một bản kê gấp tư, giữ sát ngực từ Long Hải tới đây. Hắn mở nó ra dưới ánh sáng lọt qua khe cửa kho, và ngón tay hắn chạy chậm xuống cột đầu tiên — cột tên, viết bằng nét chữ thư lại ngay ngắn của nhà họ Hứa. Rồi ngón tay dừng lại.",
      "Hắn không nói gì trong mấy hơi thở. Tiểu Lan nhìn bản kê — nhìn nét chữ thư lại của nhà mình trên tờ giấy nàng đã xé ra và giấu đi từ năm mười một, mười hai tuổi, trong ngăn thứ ba của rương thuốc. Chữ trên tờ giấy này không phải chữ của nàng. Chữ của nàng chỉ nằm trên một tờ danh sách đóng gói khác, tờ giấy đã dẫn cả đoàn tìm tới tờ giấy này. Còn cái tên vừa được đọc lên trong bóng tối của kho than — nó nằm đây, bằng mực, trong danh sách những đứa trẻ được \"tiếp nhận\".",
      "Cao Minh nhìn người thanh niên. Hắn nói thẳng, không vòng vo và không an ủi dối — giọng của một người coi việc nói thật là thứ tôn trọng tối thiểu còn lại dành cho kẻ nằm trong bóng tối.",
      "Khi đoàn đi qua Thu Nguyệt ở cửa kho, Cao Minh đang bước ra ngoài thì dừng lại đúng nửa bước — vừa đủ để đặt vào tay nàng một nắm tiền, không một lời, không nhìn lại, rồi đi thẳng ra sân như người vừa rảnh tay khỏi một thứ vướng víu. Thu Nguyệt nắm chặt tay lại. Nàng hiểu, và nàng không hỏi. Tiền ấy sẽ thành phần cơm trước mắt cho một người không có tên trong bất cứ quyển sổ nào của bến — một lần, như thời tiết ghé qua, không thành lệ, không ai ghi công.",
      "Cửa kho khép lại sau lưng đoàn. Trong bóng tối sau vách bao than, tiếng gõ nhịp rất khẽ của một ngón tay lên tấm chiếu còn vọng lại một lúc — rồi tắt, như một ngọn đèn được ai đó nhẹ nhàng che đi chứ không phải thổi tắt."
    ],
    "dialogue": [
      {
        "speaker": "Phu trưởng bến",
        "text": "Sổ của ta ghi bốn mươi mốt. Ngươi đếm lại cho ta nghe: ở sân còn bao nhiêu? Lệch một cỗ, cái đầu ngươi đền hay cái lưng ngươi đền?"
      },
      {
        "speaker": "Trương Bá Hòe",
        "text": "Tôi đếm ba lần. Bốn mươi."
      },
      {
        "speaker": "Phu trưởng bến",
        "text": "Ba lần mà vẫn sai. Người như ngươi giữ bến này, có ngày —"
      },
      {
        "speaker": "Cao Minh",
        "text": "Trang trước của quyển sổ ấy, dòng thứ ba từ dưới lên — chủ sổ cộng thừa một cỗ từ hôm qua. Lệch là lệch từ đó. Lật ra mà xem."
      },
      {
        "speaker": "Trương Bá Hòe",
        "text": "…Theo tôi. Nhanh. Đừng có hỏi gì hết."
      },
      {
        "speaker": "Trương Bá Hòe",
        "text": "Nó là hàng thất lạc. Sổ của tuyến gạch nó ra rồi — ghi là mất hàng, coi như… hàng hỏng. Mất thì không ai đi tìm. Tôi giấu nó ở đây."
      },
      {
        "speaker": "Lê Thu Nguyệt",
        "text": "Anh cho anh ta ăn bằng gì?"
      },
      {
        "speaker": "Trương Bá Hòe",
        "text": "Cơm của tôi. Chia đôi. Nó ăn được bao nhiêu thì ăn."
      },
      {
        "speaker": "Trương Bá Hòe",
        "text": "Hồi trước, có chuyến hàng đói. Nó chia cho tôi nửa ổ bánh của nó. Nửa ổ. Tôi nhớ."
      },
      {
        "speaker": "Người bị giấu",
        "text": "Tôi… tôi khiêng cho tuyến này… hai năm. Quan tài chở ra biển… là một đường. Còn một đường nữa… (gõ) …chở vào trong. Ban đêm. Quan tài nhỏ… nhẹ… (gõ) …là trẻ con, ông ạ. Trẻ con thật. Tôi khiêng một chuyến như vậy… tay tôi biết. Nhẹ mà… nặng lắm."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Anh còn nhớ gì về chuyến ấy? Chỉ cần điều anh tận tai nghe được thôi."
      },
      {
        "speaker": "Người bị giấu",
        "text": "Lúc giao ca… người gác đọc nhỏ một cái tên… tên một đứa nhỏ trong quan tài đầu… (gõ) …Lê Văn Tí. Tôi nhớ vì… vì tên nó giống tên em tôi. Người trong các cỗ quan tài… lúc đầu đều tỉnh hết, cô ạ. Về sau… (gõ) …về sau thì tùy đứa."
      },
      {
        "speaker": "Cao Minh",
        "text": "Khớp. Cột đầu, dòng thứ bảy. Lê Văn Tí."
      },
      {
        "speaker": "Người bị giấu",
        "text": "Ông… ông ơi, tôi xin ông một điều thôi. Đừng… (gõ) …đừng để anh Hòe vì tôi mà chết. Anh ấy giấu tôi… là tôi nợ anh ấy. Ông đừng để món nợ ấy… (gõ) …giết anh ấy."
      },
      {
        "speaker": "Cao Minh",
        "text": "Hôm nay bổn tọa chưa đưa ngươi đi được. Đưa ngươi ra bây giờ là lộ cả ngươi lẫn người giấu ngươi, mà thân ngươi cũng không chịu nổi nắng gió ngoài kia. Ngươi nghe rõ chứ?"
      },
      {
        "speaker": "Người bị giấu",
        "text": "…Dạ. Tôi nghe rõ."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Anh Hòe. Từ nay, đừng gọi anh ấy là hàng nữa. Gọi bằng tên của anh ấy."
      },
      {
        "speaker": "Trương Bá Hòe",
        "text": "…Ừ."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Đoàn tôi chưa rời bến này đâu. Trước khi rời Vũng Tàu, chúng tôi sẽ quay lại đây. Tôi chỉ nói tới đó thôi — nhưng lời tôi nói ra, tôi giữ."
      }
    ],
    "companions": [
      "npc_porter"
    ],
    "choices": [
      {
        "id": "ledger_rush",
        "text": "Đối chiếu giấy tờ của tuyến ngay chiều nay, khi sổ giao ca còn ở chòi bến.",
        "next": "vt_ledger",
        "effects": {
          "cluesHuaGiaDelta": 1
        },
        "flags": {
          "vtLedgerRush": true
        }
      },
      {
        "id": "ledger_wait",
        "text": "Để Bá Hòe yên một đêm — sáng mai hẵng động vào sổ, tránh hắn bị để ý hai lần một ngày.",
        "next": "vt_ledger",
        "effects": {
          "lanTrustDelta": 1
        },
        "flags": {
          "vtLedgerWait": true
        }
      }
    ]
  },
  "vt_ledger": {
    "id": "vt_ledger",
    "contentStatus": "approved",
    "stageId": "vung_tau",
    "title": "Sổ cước",
    "backgroundId": "coffin-wharf",
    "location": "Chòi bến Phúc Thọ — đối chiếu sổ cước",
    "narration": [
      {
        "text": "Sáng hôm sau, sổ giao ca và quyển cước sao vẫn nằm nguyên trong chòi bến. Người của tuyến lẽ ra tới thu sổ từ đêm qua đã không tới — có lẽ bị giữ lại ở đầu kia của tuyến vì chuyện gì đó không ai ở bến này biết. Bá Hòe mở cửa chòi cho đoàn với vẻ mặt của một người vừa được trời cho thêm một ngày: \"Nó còn ở đây. Người thu chưa tới. Xem nhanh đi.\"",
        "if": "vtLedgerWait"
      },
      "Chòi bến là một gian nhà nhỏ bằng gỗ, trong chỉ có một cái bàn, một chồng sổ bọc vải dầu, dăm que tính và một xấp giấy thông hành quan tài đã đóng triện đỏ sẵn. Bá Hòe đứng ở cửa, nửa người trong nửa người ngoài — hắn chỉ cho đoàn xem đúng phần hắn giữ: sổ giao ca của ca hắn, và một quyển cước sao chép tay. Ngoài hai thứ ấy ra, hắn không mở thêm ngăn nào, và không ai trong đoàn đòi mở.",
      "Hai thứ chữ trên bàn thuộc về hai thế giới. Sổ cước ghi bằng lối ký hiệu thương hồ — chữ tắt, dấu ngắt, con số viết chéo — thứ chữ mà Thu Nguyệt đọc được như người nhà quê đọc đường về nhà. Còn những dòng chữ thường xen giữa — tên người, tuổi, quê quán — là phần của Tiểu Lan. Hai nàng ngồi hai bên chiếc bàn, một người là tay, một người là mắt, và quyển sổ đi qua giữa họ như một con thoi.",
      "Một cột tiền bỏ trống đều khắp cả quyển sổ, trang nào cũng trống đúng một kiểu như nhau — ở nghề buôn, một sự trống như vậy không phải là sơ ý. Nó là một cái hẹn không được viết ra giấy.",
      "Cao Minh đặt bản kê của nhà họ Hứa lên bàn — nhưng chỉ mở ở hai cột đầu. Cột thứ ba của bản kê, thứ lối ghi riêng của nhà, nằm ngoài tầm đọc của cả hai nàng: Thu Nguyệt ghé mắt vào một lần, lắc đầu, và không ai cố đọc nó nữa. Những cái tên và tuổi, quê quán ở hai cột đầu lần lượt khớp với các khoản \"hàng nhẹ\" không cước trong sổ cước: trẻ con, từng đứa một. Chúng đi qua bến này bằng giấy tờ như đi qua một trạm thu phí mà không ai phải trả tiền — vì tiền của chúng đã được ghi ở một nơi khác, vào một món nợ khác.",
      "Cao Minh đứng ở cửa chòi từ đầu tới giờ, tựa lưng vào khung cửa, không chen vào việc đọc sổ — đó là lãnh địa của hai nàng, hắn biết rõ mình là người ngoài. Nhưng hắn đã nghe đủ để tự đếm phần của mình. Muốn chặt đứt cái vòng này ngay chiều nay không khó: khó là ở chỗ, sáng mai thức dậy, người thanh niên sau vách bao than sẽ không còn phần cơm chia đôi, mấy người nằm trong các cỗ quan tài chờ xếp xuống tàu sẽ không còn thuốc — họ sẽ thoát nợ bằng cách chết trước. Thanh kiếm trong tay hắn bỗng thành một thứ đồ rất vụng về.",
      "Ra sân sau chòi bến là nơi phơi những nắp quan tài rỗng chờ sơn lại. Nắng cuối ngày rọi xiên qua hàng nắp dựng đứng. Thu Nguyệt đi dọc hàng nắp, tay lướt qua từng mép sơn như người kiểm hàng — rồi nàng dừng lại ở một chiếc nắp cũ, sơn đã phai hai lớp.",
      "Dưới mép sơn của chiếc nắp, có khắc một ký hiệu nhỏ — khắc sâu, đã bị sơn phủ qua ít nhất hai lần mà vẫn còn đọc được nét. Tiểu Lan bước tới. Nàng chưa kịp nghĩ gì thì ngón tay nàng đã tự đi theo đúng đường khắc ấy, từ nét đầu tới nét cuối, không vấp một chỗ nào — như tay người ta đi lại con đường đã đi hàng trăm lần trong bóng tối của một căn phòng cũ. Đó là lối ký hiệu của chính nàng, thứ nàng dùng từ những năm còn ở Tây Viện, khắc lên đồ của mình để biết đâu là của mình trong một nơi mà mọi thứ đều có thể bị lấy đi. Ngón tay nàng biết nó trước cả nàng.",
      "Cao Minh nhìn nàng một lúc, rồi gật đầu — cái gật đầu của người tôn trọng một quyết định không phải của mình trên đồ vật không phải của mình. Sổ là của nàng, do nàng giấu, do nàng xé; quyền động vào hay không động vào cũng là của nàng.",
      "Trời sập tối rất nhanh trên cửa biển. Ở phía chòi bến, có một tiếng chuông nhỏ khẽ rung lên — đúng một nhịp thử, ngắn và khô, như ai đó chạm vào dây chuông để kiểm tra xem nó còn ăn hay không. Đoàn người đứng yên trong bóng tối vừa xuống. Đêm nay, bến này sẽ không ngủ yên như mọi đêm."
    ],
    "dialogue": [
      {
        "speaker": "Lê Thu Nguyệt",
        "text": "Phần chữ này là cước thu theo chuyến, cô ạ. Chuyến ra biển tính theo cỗ, chuyến vào trong tính theo… ơ, chuyến vào trong không tính theo cỗ. Nó tính theo đầu người, mà lại không ghi tiền ở cột cước. Để em xem lại… đúng là không ghi. Cột này để trống hết, cả quyển."
      },
      {
        "speaker": "Cao Minh",
        "text": "Tiền của bến này đi một vòng rồi về đâu? Bổn tọa đứng ngoài nghề, hai nàng cứ nói như nói với người không biết chữ."
      },
      {
        "speaker": "Lê Thu Nguyệt",
        "text": "Dạ, để em đếm thành tiếng cho dễ. Tiền cước thu vào — vào một quỹ chung của tang quán. Từ quỹ ấy chi ra: tiền thuốc, tiền gạo, tiền người trông kho, tiền dầu đèn cho… cho những người nằm chờ trong kho. Rồi cuối tháng, phần chi ấy lại được ghi ngược vào sổ — ghi vào phần của từng người được nuôi. Tức là tiền nuôi người ta sống, lại thành tiền người ta nợ thêm, thưa ông."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Còn những khoản \"hàng nhẹ\" không cước trong sổ của anh Hòe — Thu Nguyệt, đối chiếu với tờ này."
      },
      {
        "speaker": "Lê Thu Nguyệt",
        "text": "Đếm xong rồi, thưa ông, thưa cô. Tiền nuôi người bệnh trong kho, tiền thuốc, tiền cơm — tất cả chảy ra từ cùng một quỹ thu tiền cước. Người còn sống ngày nào là ngày ấy còn được nuôi, mà càng được nuôi thì nợ càng dày. Đến lúc tất toán… em chưa thấy trong sổ có một khoản nào được tất toán hết. Không một khoản nào."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Nhà không nuôi người. Nhà nuôi khoản nợ biết thở."
      },
      {
        "speaker": "Cao Minh",
        "text": "Bổn tọa chém được sổ. Không đọc được sổ."
      },
      {
        "speaker": "Lê Thu Nguyệt",
        "text": "Cô ơi. Cái này… không phải ký hiệu của tuyến. Em đọc hết sổ cước rồi — ký hiệu tính cước của họ không có nét này. Nó không thuộc về chuyến nào hết."
      },
      {
        "speaker": "Trương Bá Hòe",
        "text": "Cái nắp đó… sơn mấy lần rồi cũng phải chừa ký hiệu đó ra. Người chèo đò trước dặn vậy. Ông ấy đi khỏi tuyến này lâu rồi — mất, hay lìa đi, không ai rõ. Chỉ còn cái dặn đó."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Mảnh còn lại của cuốn sổ… đang ở đâu đó trên tuyến này. Cái nắp này chỉ là biển chỉ đường thôi. Chưa phải là nó."
      },
      {
        "speaker": "Cao Minh",
        "text": "Lấy được không?"
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Lấy được thì tôi đã không đứng yên thế này, thưa ngài. Động vào bây giờ là đốt hết: người đã khắc biển chỉ đường thì đã khuất, còn người đang giữ đường đi thì còn sống. Bàn tay trả tiền của tuyến này ngó bến rất kỹ — hễ có một mắt xích rung lên là nó biết có người đang lần theo. Tôi biết nó ở đâu là đủ cho hôm nay. Biết mà không động vào — cũng là một cách can thiệp, thưa ngài."
      }
    ],
    "companions": [
      "le_thu_nguyet"
    ],
    "choices": [
      {
        "id": "rest_evening",
        "text": "Rời chòi trước khi trời tối hẳn, về chỗ trọ ăn uống và để Tiểu Lan nghỉ — đêm nay chưa biết có chuyện gì.",
        "next": "vt_first_jamming",
        "effects": {
          "lanHealthDelta": 4
        },
        "flags": {
          "vtRestedEvening": true
        }
      },
      {
        "id": "hear_inspection",
        "text": "Ở lại quanh bến đến tối, ăn cơm hàng quán để nghe ngóng giờ giấc đổi ca và tin đồn kiểm tra cảng.",
        "next": "vt_first_jamming",
        "effects": {
          "cluesHuaGiaDelta": 1,
          "lanMaterInfluenceDelta": 2
        },
        "flags": {
          "vtHeardInspection": true
        }
      }
    ]
  },
  "vt_first_jamming": {
    "id": "vt_first_jamming",
    "contentStatus": "approved",
    "stageId": "vung_tau",
    "title": "Lệnh trong đêm",
    "backgroundId": "coffin-wharf",
    "location": "Bến Phúc Thọ — đêm dọn bến",
    "narration": [
      {
        "text": "Đoàn đã biết trước từ chập tối: mai có kiểm tra cảng. Tin ấy đi từ miệng phu khuân tới tai Thu Nguyệt qua hai bát cơm hàng — viên chức kiểm dịch đã hỏi về những cỗ quan tài \"bất thường\" từ buổi chiều, hỏi rất lịch sự, như người chỉ hỏi cho có. Cho nên khi bến bắt đầu động, đoàn đang ở sẵn trong bóng tối của chòi bến. Biết trước không làm việc ấy bớt lạnh hơn khi nó xảy ra thật.",
        "if": "vtHeardInspection"
      },
      {
        "text": "Đoàn về trọ chưa được bao lâu thì Thu Nguyệt quay lại, áo còn ướt sương. Nàng nghe được hai việc ở hàng cơm tối: mai có kiểm tra cảng — viên chức kiểm dịch đã hỏi về những cỗ quan tài \"bất thường\" từ buổi chiều — và đêm nay bến sẽ động, phu trưởng đã cho gọi các ca ngủ dậy sớm hơn lệ thường. Không ai bàn lâu. Đoàn quay lại bến trong bóng tối, nấp vào chòi bến còn bỏ trống, vừa kịp lúc tiếng chuông nhỏ đầu tiên rung lên.",
        "if": "vtRestedEvening"
      },
      "Tin kiểm tra tới bến bằng miệng người. Còn lệnh dọn bến tới bằng đường khác: tiếng chuông nhỏ trong chòi rung lên — không thành hồi, chỉ là nhịp, đều và khô. Trạm kho bên bắt lấy nhịp ấy bằng tiếng gõ vào ống đồng, truyền tiếp xuống cầu tàu, nơi ai đó gõ vào mạn thuyền. Không một chữ nào được truyền đi. Chỉ có nhịp.",
      "Và quanh bến, những người đang ngủ bắt đầu đứng dậy. Họ đứng dậy bằng thân thể trước, bằng ý thức sau: một phu khuân ngồi bật dậy trong khi mắt còn chưa mở hẳn, tay đã tự tìm tới đòn khiêng; một người chèo đò đứng lên giữa bãi, ngơ ngác một lúc mới nhớ ra mình là ai. Không ai gọi ai. Không ai hỏi vì sao. Nhịp đã gọi thay.",
      "Từ trong bóng tối, đoàn đếm được việc đang chạy — ba việc cùng lúc, như ba sợi dây cùng bị kéo. Việc thứ nhất: các cỗ quan tài \"hàng sống\" ở sân trước được khiêng gấp xuống tàu chờ ngoài lạch, nhanh, im lặng khác hẳn ban ngày. Việc thứ hai do Bá Hòe ghé sát nói khẽ, gấp gáp, trong lúc giả vờ đi kiểm đòn khiêng:",
      "Việc thứ ba không cần ai nói: ở đầu kia sân, một tốp phu thắp đèn đang đi thành hàng về phía kho than — việc cuối của lệnh dọn bến là lục soát các kho. Người thanh niên sau vách bao than còn cách đoàn người ấy đúng một sân gạch và một cánh cửa gỗ.",
      "Trong chòi bến, Cao Minh nói kế hoạch của hắn bằng giọng nói chuyện phàm, ngắn gọn như một người thợ nói về cái máy mình sắp tháo:",
      "Rồi Tiểu Lan bước vào mạng.",
      "Không có gì để nhìn. Nàng đứng trong bóng tối của chòi, mắt nhắm, và lắng nghe nhịp đang chạy qua người mình như nàng đã nghe nó mười tám năm — rồi nàng chen nhịp của chính mình vào. Đầu tiên, ở tốp phu cầm đèn gần kho than: một người khựng lại giữa bước, cả tốp chững theo; người đi đầu rẽ sang hướng kho dầu thay vì kho than, và cả hàng người — như một thân thể bị gõ lệch một khớp — đi chệch trong sương, mất mấy phút quý báu. Rồi tới đội khiêng quan tài xuống tàu: bước chân họ chậm lại như đi trong nước, đòn khiêng trĩu xuống, một cỗ phải đặt xuống nghỉ giữa cầu tàu.",
      "Trong chòi, Cao Minh ra tay cùng lúc. Không có ánh sáng rực, không có tiếng nổ. Chỉ có một cái rung nhẹ trong không khí — và tiếng chuông nhỏ trong chòi rung lên đúng nửa nhịp rồi câm hẳn, như một câu nói bị cắt ngang cổ. Hắn thu kiếm ngay, mặt đã quay sang chuyện khác, như người vừa xong một việc vặt.",
      "Lệnh mất đầu phát, lại bị nhiễu giữa đường — cả bến trượt khỏi tay kẻ ra lệnh lặng lẽ. Tốp phu đi lục kho than, mất nhịp thúc sau lưng, tan hàng giữa sân: người quay về chỗ ngủ, người đứng ngơ nhìn nhau, không ai còn nhớ rõ mình vừa định đi đâu. Các đội khiêng xếp thiếu một cỗ quan tài bị đánh dấu — nó vẫn nằm lẫn trong đống quan tài thường ở góc sân, bị bỏ sót chỉ vì không còn ai ra lệnh nhắc tới nó nữa. Chiếc tàu hàng sống rời bến trong đêm, nhẹ hơn một chuyến.",
      "Khi mọi thứ yên lại, Thu Nguyệt đưa cho Tiểu Lan một chén nước. Tay nàng không cầm nổi. Chén nước sánh ra, tay nàng run từng đợt như vừa chạm phải nước lạnh buốt xương; Thu Nguyệt phải đỡ cả tay lẫn chén, đưa lên tận miệng cho nàng. Nàng nhắm mắt, nói rất khẽ: mọi người làm ơn nói nhỏ thôi, đầu nàng đang như có ai gõ nhịp ở bên trong.",
      "Rồi, giữa lúc mọi người tưởng nàng chỉ mệt, nàng mở mắt ra và hỏi Cao Minh một câu — bằng giọng của người hỏi về một việc mình vừa đánh rơi đâu đó rất gần:",
      "Nàng nhớ mình đã quyết — cái quyết định còn nguyên, chắc như một cái nút đã thắt. Nhưng cuộc trò chuyện vừa diễn ra trong chòi này: lời nàng tự nói ra, lý do của nàng, lời dặn của nàng — đã không còn ở đó nữa, như một căn phòng vừa bị ai dọn trống trong lúc nàng quay lưng.",
      "Cao Minh kể lại. Hắn kể đều đều, đúng thứ tự, không một lời bình: kế hoạch cắt chuông; câu hỏi hắn đã hỏi; câu nàng đáp về Long Hải và về việc đêm nay không ai đuổi nàng; người trong quan tài ban trưa; đứa nhỏ tên Tí; lời dặn kể lại không thêm không bớt; và cái hẹn chợ cá sáng mai — mua cá khô với muối, tự tay trả tiền. Hắn kể cả lời dặn về việc kể lại, như trả lại một món đồ đánh rơi nguyên vẹn, không giữ lại mảnh nào cho mình.",
      "Tiểu Lan nghe chuyện của chính mình như nghe chuyện một người khác mà nàng tin là có thật — vì giọng kể ấy không chỗ nào giống bịa. Nhưng tin không phải là nhớ.",
      "Nàng không nói thêm gì. Nàng lần tìm cuộn chỉ đếm ngày trong tay áo, bằng đôi tay đang run, thắt lên đó một nút khác hẳn mọi nút trước — một nút to, xấu, không thể nhầm với bất cứ ngày thường nào."
    ],
    "dialogue": [
      {
        "speaker": "Trương Bá Hòe",
        "text": "Có một cỗ bị đánh dấu riêng. Cỗ của người… người từng cứu thằng chèo đò ở bến này. Đêm nay nó thuộc diện xử lý. Đưa ra khỏi tuyến, không qua sổ, không để lại giấy. Mấy người hiểu chữ \"xử lý\" ở bến này là gì chưa?"
      },
      {
        "speaker": "Cao Minh",
        "text": "Trạm chuông ở chòi này là đầu phát của bến. Bổn tọa cắt điểm nối — một nhát thôi. Chuông câm, lệnh mất đầu, cả bến này sẽ như đàn gà mất tiếng gọi. Nhưng phần máy là phần dễ. Khi nhịp gãy, người bị nó kéo đi sẽ khựng lại giữa chừng — có người hoảng, có người chạy loạn, có người ngã xuống khoang tàu. Giữ cho họ không loạn, chỉ nàng làm được. Và nàng có quyền không làm."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Ở Long Hải, tôi đẩy lùi để tự cứu mình. Đêm nay không ai đuổi tôi cả."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Người trong cỗ quan tài ban trưa còn tỉnh, thưa ngài. Anh ta gõ cả buổi chiều để người ta biết mình còn nghe lời. Còn đứa nhỏ tên Tí trong tờ giấy kia — nó đã đi qua bến này trên tay người ta. Tôi không làm việc này vì ngài bảo tôi làm. Tôi làm vì nếu tôi im lặng ngồi yên trong chòi này, tôi sẽ nghe hết — và tôi nghe đủ rồi."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Nhưng tôi dặn ngài một điều trước. Sau việc này, nếu tôi có quên — ngài phải kể lại cho tôi đúng những gì đã nói ở đây. Không thêm một chữ, không bớt một chữ. Cả điều tôi sắp nói thêm đây nữa: sáng mai, khi chợ cá vừa mở, tôi đi cùng Thu Nguyệt ra chợ. Tôi muốn tự tay mua ít cá khô với muối, và tự trả tiền một lần cho đàng hoàng."
      },
      {
        "speaker": "Lê Thu Nguyệt",
        "text": "Dạ, em nhớ. Chợ mở là em gọi cô."
      },
      {
        "speaker": "Cao Minh",
        "text": "Được. Bổn tọa kể lại đúng. Không thêm, không bớt."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài… vừa rồi, tôi có nói vì sao tôi làm việc này không?"
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Nghe như lời của tôi. Mà tôi không nhớ đã nói."
      }
    ],
    "sceneEffects": {
      "memoryIntegrityDelta": -5
    },
    "choices": [
      {
        "id": "withdraw_night",
        "text": "Rút khỏi bến ngay trong đêm, về chỗ trọ trước khi trời sáng — càng ít người thấy đoàn ở bến càng tốt.",
        "next": "vt_restitution",
        "effects": {
          "lanHealthDelta": 3
        },
        "flags": {
          "vtWithdrewNight": true
        }
      },
      {
        "id": "saw_dawn",
        "text": "Nán lại tới gần sáng, giả làm người chờ đò sớm — tận mắt xem bến tự giải thích chuyện đêm nay thế nào.",
        "next": "vt_restitution",
        "effects": {
          "cluesHuaGiaDelta": 1,
          "lanHealthDelta": -3
        },
        "flags": {
          "vtSawDawnExcuses": true
        }
      }
    ]
  },
  "vt_restitution": {
    "id": "vt_restitution",
    "contentStatus": "approved",
    "stageId": "vung_tau",
    "title": "Hoàn trả",
    "backgroundId": "coffin-wharf",
    "location": "Bến Phúc Thọ — sáng sớm",
    "narration": [
      {
        "text": "Đoàn đã ở lại tới gần sáng, giả làm người chờ đò sớm, và đã tận mắt nghe bến tự kể câu chuyện của nó — một câu chuyện khớp nhau đến từng chữ, kể cả trong miệng những người đêm qua đứng ngơ giữa sân không nhớ mình định đi đâu. Đến khi trời sáng hẳn, câu chuyện ấy đã thành sự thật chính thức của bến.",
        "if": "vtSawDawnExcuses"
      },
      "Sáng sớm, bến quan tài tự bịt mắt mình một cách gọn gàng. Chuông hỏng. Phu say. Sương lạc hướng. Phu trưởng bến là người chọn tin phiên bản ấy to tiếng nhất — vì nó là phiên bản duy nhất mà trong đó hắn không phải trả lời câu hỏi nào. Một phu trẻ buột miệng hỏi sao chuông hỏng mà cả bến lại cùng đứng dậy giữa đêm, bị phu trưởng quát cho một trận trước mặt mọi người — quát to hơn mức cần thiết, như quát cho cả sân nghe. Từ đó không ai hỏi nữa. Một viên chức kiểm dịch người Pháp đi ngang qua sân cùng người thông ngôn, dừng lại đúng một nhịp, hỏi lịch sự về \"những cỗ quan tài đêm qua\"; không ai đáp được gì ngoài chữ chuông hỏng; ông ta ghi một dòng vào cuốn sổ tay nhỏ, gật đầu, và đi tiếp xuống bến dưới. Dòng chữ ấy sẽ đi xa hơn bất cứ ai trong sân này tưởng.",
      "Điều đáng sợ nhất của buổi sáng ấy là nó bình thường. Bến lại ồn ào như mọi buổi sáng: tiếng rao, tiếng đòn khiêng kẽo kẹt, mùi cá khô và mùi nhang. Mấy người phu đêm qua đứng ngơ giữa sân giờ đang cười nói bên ấm trà, không một ai có vẻ vừa bị một thứ gì đó đi xuyên qua người. Nếu đoàn không tự mình đứng trong chòi bến đêm qua, có lẽ đoàn cũng sẽ tin rằng chẳng có chuyện gì xảy ra ngoài một cái chuông hỏng. Chỉ có một thứ khác mọi ngày: chiếc chuông nhỏ trong chòi đã được tháo xuống đem đi sửa từ sớm tinh mơ — gỡ đi rất kịp lúc, như để không còn vật gì ở bến này có thể gợi lại một câu hỏi nào nữa.",
      "Người đầu tiên nhận ra cỗ quan tài bị đánh dấu vẫn còn nằm lẫn trong đống quan tài thường ở góc sân — là một người chèo đò.",
      "Hắn nói ít, và nói như nói về một việc đã quyết từ lâu chứ không phải vừa nảy ra trong buổi sáng này. Hắn không xin đoàn giúp, cũng không nhìn về phía đoàn như chờ một bàn tay nào lớn hơn chìa ra. Hắn chỉ báo cho Bá Hòe — người duy nhất ở bến này hắn nể — rồi quay đi xem lại mái chèo của mình, thử dây, thử nước, như một người thợ chuẩn bị cho một chuyến đò thường.",
      "Trước khi đi, hắn ra góc sân, tự tay kiểm lại dây buộc của cỗ quan tài bị đánh dấu, ngồi xổm xuống nghe ngóng một lúc lâu bên thành gỗ — như người quen nghe tiếng nước để đoán đường. Rồi hắn đứng dậy, phủi tay, và nói một câu cuối cùng, không nhìn ai:",
      "Bá Hòe đứng yên một lúc. Rồi hắn làm việc thứ hai trong hai ngày mà cái giá có thể là đầu hắn: hắn lấy từ trong người ra một tờ giấy gấp tư, đưa cho Thu Nguyệt — đưa nhanh, không nhìn quanh, bằng động tác của người vừa trút một vật nóng khỏi tay.",
      "Tờ giấy mở ra trên tay Thu Nguyệt: một lệnh chi của tang quán, ghi tiền cước và tiền \"chăm sóc\" cho chuyến đêm qua — kể cả phần chuyến đã hỏng. Cuối tờ, dưới triện đỏ của phòng chi tiền, là một hàng chữ viết tay của người duyệt chi. Thu Nguyệt đọc thành tiếng, chậm rãi, và chậm hẳn lại ở hai chỗ.",
      "Cái tên đến bằng giấy, không ai giới thiệu, không ai giảng giải — một nét chữ viết tay ở cuối một tờ lệnh chi bị giữ lại. Rồi Thu Nguyệt đọc tới danh sách khoản chi, và bàn tay nàng khựng lại ở một dòng gần cuối.",
      "Cao Minh cầm tờ lệnh chi lên, nhìn hàng chữ viết tay ở cuối một lúc. Hắn đã gặp nhiều thứ trong đời: tông môn ghi tên đệ tử lên bia đá, triều đình ghi tên tội nhân lên chiếu chỉ. Nhưng chưa từng có ai ghi tên hắn và người của hắn vào một quyển sổ bằng cách này — bằng tiền, bằng triện, bằng một hệ thống không cần gặp mặt hắn lần nào.",
      "Hắn không nói thêm. Hắn gấp tờ lệnh chi lại cẩn thận, đưa trả cho Thu Nguyệt. Nàng cất nó vào tay áo, ngay bên cạnh bản sao danh sách đóng gói của rương thuốc: hai tờ giấy nằm cạnh nhau trong một tay áo — một tờ đã dẫn cả đoàn tìm tới mảnh đầu tiên của cuốn Sổ, và một tờ vừa cho cái vòng tiền trói người này một cái tên."
    ],
    "dialogue": [
      {
        "speaker": "Tạ Văn Độ",
        "text": "Anh Hòe. Cỗ đó còn đây. Đêm qua lệnh trật, người ta xếp sót nó."
      },
      {
        "speaker": "Trương Bá Hòe",
        "text": "Tao thấy rồi. Mày đừng có —"
      },
      {
        "speaker": "Tạ Văn Độ",
        "text": "Người trong cỗ đó, anh biết là ai không. Hồi tôi mới xuống bến này, có lần ghe lật ngoài cửa, tôi uống nước đầy bụng, tay không còn quờ được bờ. Chính anh ấy kéo tôi lên, cởi cái áo khô của anh ấy khoác cho tôi, mình thì ướt hết cả đoạn chèo về. Anh Hòe, tôi chèo hàng cho tuyến này ba năm. Đêm nay tôi chèo một chuyến không có trong sổ: tôi đưa anh ấy ra khỏi tuyến. Đưa về quê anh ấy, chôn cho đàng hoàng như anh ấy từng nói. Người ta đã rỉ tai nhau tôi là đứa buôn xác từ lâu rồi. Kệ họ."
      },
      {
        "speaker": "Tạ Văn Độ",
        "text": "Anh ấy nằm trong đó mà còn tỉnh được hay không, tôi không biết. Nhưng đường về tôi biết. Đêm nay thủy triều lên sớm, đi thuận nước."
      },
      {
        "speaker": "Trương Bá Hòe",
        "text": "Cái này không phải của tôi. Tôi chỉ… giữ hộ từ tối qua. Lệnh chi cho chuyến đêm. Đáng lẽ nó phải đi theo sổ. Tôi giữ lại. Đọc đi, rồi muốn làm gì thì làm — đừng nói là tôi đưa."
      },
      {
        "speaker": "Lê Thu Nguyệt",
        "text": "Người duyệt chi ký ở cuối… thưa cô, thưa ông. Tên là… Trần Khắc Tín."
      },
      {
        "speaker": "Lê Thu Nguyệt",
        "text": "Các khoản \"chăm sóc\" này ghi tỉ mỉ lắm, thưa cô: tiền thuốc thang, tiền gạo, tiền dầu đèn cho kho người nằm chờ, tiền người trực đêm… chi nào cũng nhỏ và đều. Còn khoản này… tiền chăm sóc cho một người nằm chờ, ghi đều mỗi tháng. Mà ở cột ghi chú của sổ cước hôm qua, người này… thưa cô, người này đã chết từ năm ngoái rồi. Chết rồi mà tiền vẫn chi đều. Cuối dòng có hai chữ viết tay: \"hoàn trả\"."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Đừng vội kết án người ký, Thu Nguyệt. Có hai cách đọc hai chữ ấy. Một là: có một người đang trả một món nợ không còn người nhận — trả cho một cái tên, vì không trả thì không ngủ được. Hai là: có một người dùng hai chữ \"hoàn trả\" để giữ một khoản chi không bao giờ được phép đóng lại — vì hễ khoản chi còn mở, thì cả dây người quanh nó còn bị buộc vào sổ. Tôi sống trong cả hai thứ ấy đủ lâu để biết: trông chúng giống hệt nhau."
      },
      {
        "speaker": "Cao Minh",
        "text": "Giết chủ nợ thì dễ. Nợ của người khác vẫn nằm nguyên trong sổ."
      }
    ],
    "companions": [
      "le_thu_nguyet"
    ],
    "link": {
      "id": "no",
      "phase": "identified"
    },
    "choices": [
      {
        "id": "keep_order",
        "text": "Giữ nguyên bản lệnh chi làm chứng cứ — cất cùng bản sao danh sách đóng gói của Thu Nguyệt.",
        "next": "vt_hook",
        "effects": {
          "cluesHuaGiaDelta": 1
        },
        "flags": {
          "vtKeptOrder": true
        }
      },
      {
        "id": "copy_order",
        "text": "Chép lại toàn bộ lệnh chi rồi nhờ Bá Hòe trả bản gốc về chỗ cũ trước giờ điểm danh.",
        "next": "vt_hook",
        "effects": {
          "lanTrustDelta": 1
        },
        "flags": {
          "vtCopiedOrder": true
        }
      }
    ]
  },
  "vt_hook": {
    "id": "vt_hook",
    "contentStatus": "approved",
    "stageId": "vung_tau",
    "title": "Ghi nợ",
    "backgroundId": "vung-tau-roadstead",
    "location": "Chỗ trọ gần bến, Vũng Tàu — buổi sáng",
    "narration": [
      "Trở về chỗ trọ, việc đầu tiên đoàn làm là việc phàm nhất: tính tiền. Tiền thuyền của lão ngư ông hai ngày, tiền trọ, tiền cơm nước — Thu Nguyệt đã đếm sẵn trong tay, tính toán như mọi lần. Nhưng chủ trọ xua tay, cười hề hề như người vừa được quý nhân chiếu cố:",
      "\"Cái này\" là một tờ biên nhận gấp làm ba, giấy tốt, mép cắt ngay ngắn. Người của tang quán tới từ lúc trời chưa sáng rõ, trả tiền không mặc cả, nói năng lịch sự, và đi trước khi bến thức giấc — một bộ máy làm việc không cần ai nhìn thấy nó làm. Lão ngư ông chèo thuyền cho đoàn hai ngày nay cũng vừa ghé trọ, mặt còn ngơ ngác: tiền thuyền của lão cũng đã có người trả trước, trả dư một ít \"để ông cụ uống trà\", như lời người trả dặn lại. Lão chưa từng gặp ân nhân nào chu đáo mà không cần gặp mặt như vậy. Thu Nguyệt đưa tờ giấy cho Tiểu Lan.",
      "Nàng mở ra đọc. Các khoản tiền được kê rõ ràng, từng món một, dưới một tên người nhận dịch vụ. Cái tên viết đúng từng nét, đầy đủ cả họ: cái tên đã bị nhà họ Hứa xóa khỏi giấy tờ công khai — cái tên mà ở Long Hải, nàng vừa mới được gọi lại bằng tiếng người sau mười một năm. Ở đây, trên giấy của tang quán, nó nằm ngay ngắn như chưa từng bị xóa bao giờ. Dòng ghi chú ở cuối, chữ viết nhỏ và lịch sự đến lạnh người: nhà họ Hứa \"lo liệu cho cô chủ đi đường xa\"; các khoản này sẽ ghi nợ, chờ hoàn trả khi cô chủ về.",
      "Thu Nguyệt đứng bên cạnh bỗng nhắc một việc rất nhỏ, bằng giọng nhắc việc nhà:",
      "Tiểu Lan nhìn nàng. Nàng gật đầu — cái gật đầu của người vừa được kể lại đúng từng chữ một việc của chính mình và nhận ra nó khớp hoàn toàn với con người mình, chỉ trừ một điều: nàng không nhớ đã nói. Lỗ hổng của đêm qua không nằm lại ở đêm qua; nó có tên, có chỗ nằm trong ngày hôm nay của nàng, và nàng biết nó nằm ở đâu. Nàng sống chung với nó một cách tỉnh táo, không hoảng, không giấu.",
      "Cao Minh nhìn tờ biên nhận trên tay nàng. Với hắn, giấy của nhà họ Hứa chỉ là giấy — hắn định xử lý nó theo cách của hắn vẫn xử lý những thứ vô giá trị: cho nó biến mất, như chưa từng tới tay. Hắn vừa đưa tay ra thì Tiểu Lan đã gấp tờ biên nhận lại, bằng đôi tay hôm nay đã hết run, và cất vào người mình.",
      "Cao Minh nghe hết, và hắn hiểu ra cấu trúc của đòn vừa đánh vào đoàn mình. Ở Long Hải, viên quan của nhà họ Hứa từng ném vào mặt hắn một câu hỏi bằng giấy tờ: ông lấy gì chịu trách nhiệm cho cô ta, ngoài một thanh kiếm? Hắn đã đáp câu hỏi ấy bằng thái độ của mình. Còn bây giờ, có một bàn tay khác — bàn tay không cần gặp hắn, không cần thắng hắn — đang trình diễn thứ \"chịu trách nhiệm\" của riêng nó: nuôi, trả tiền, ghi sổ, chờ hoàn trả. Một thứ trách nhiệm bằng giấy, bọc nhung, và không cần ai đồng ý.",
      "Cùng lúc ấy, ở đầu kia của bến chính, một việc khác bắt đầu. Những cỗ quan tài nhỏ — nhỏ hơn hẳn quan tài người lớn, nhẹ đến mức hai người khiêng cũng thừa sức — lần lượt được xếp xuống một chiếc tàu đang chờ ở cầu tàu xa. Mỗi cỗ đều có một miếng giấy thông hành mới đóng triện gắn ở đầu nắp, giấy còn thơm mùi hồ. Phu khuân làm việc nhanh và không ai nói chuyện: hàng này, như mọi người ở bến đều tự biết, phải xuống xong trước khi thủy triều rút hết vào đầu giờ chiều. Tiểu Lan nhìn theo hướng tàu: mũi tàu quay về phía cửa sông.",
      "Người thanh niên sau vách bao than đã nói đúng: tuyến này có lịch trình, và lịch trình ấy không chờ ai. Chiếc tàu kia sẽ nhổ neo trong ngày hôm nay.",
      "Hai con đường đặt lên bàn cùng một lúc. Một: theo con tàu trẻ con ngay — vào cửa sông, đi sâu vào tuyến trong khi dấu còn nóng, bỏ lại cái vòng nợ vừa chụp xuống đầu đoàn chưa gỡ. Hai: ở lại Vũng Tàu — gỡ cái vòng này trước khi nó thắt lại, đối mặt với bàn tay trả tiền trên đúng sân giấy của nó, và cứu cho trọn những người của bến này trước. Cao Minh không chọn. Hắn quay sang nàng, và hỏi đúng một câu — hỏi như một người đã học được rằng có những câu trả lời không phải của mình:",
      "Phần truyện khép lại ở đó: quyết định đã có chủ, hành trình chưa bắt đầu."
    ],
    "dialogue": [
      {
        "speaker": "Chủ trọ",
        "text": "Khỏi, khỏi cô ơi. Sáng nay trời chưa sáng rõ, người của Phúc Thọ đã tới trả hết rồi — thuyền, trọ, cơm, cả tiền dầu đèn. Họ còn gửi cái này cho cô chủ."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Ở Long Hải, họ gọi lại tên tôi. Ở đây, họ ghi tên tôi."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Ngài nghe cho rõ sự khác nhau, thưa ngài. Được gọi tên là có người nhìn vào mặt mình. Bị ghi tên… là có người nhìn vào giá của mình."
      },
      {
        "speaker": "Lê Thu Nguyệt",
        "text": "Cô ơi, hôm qua cô dặn em: sáng nay chợ cá vừa mở thì cô đi với em ra chợ, mua ít cá khô với muối, cô tự trả tiền một lần cho đàng hoàng. Cô còn nhớ không, để em còn biết đường gọi cô dậy sớm?"
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Em nhắc đúng đấy. Vậy mà tôi không nhớ đã dặn. Đi, em — chợ mở rồi. Việc tôi đã hẹn thì tôi giữ, dù là tôi nào đã hẹn."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Đừng, thưa ngài. Tờ giấy này ghi tên tôi. Nó ở trong tay kẻ khác thì là xiềng. Ở trong tay tôi, nó là chứng cứ đầu tiên của cái vòng này — mà trên chứng cứ ấy, tên bị ghi là tên của chính tôi. Đồ của tôi, tôi giữ."
      },
      {
        "speaker": "Lê Thu Nguyệt",
        "text": "Cô giữ thì em cũng nói luôn cho hết, để cô liệu: từ nay đoàn mình ăn ở đâu, nghỉ ở đâu, thuê thuyền của ai trong vùng này, người ta cũng sẽ… ghi hết vào đó. Cơm mình ăn đã thành nợ ghi dưới tên cô rồi, cô ạ. Em đếm mà em lạnh cả người."
      },
      {
        "speaker": "Cao Minh",
        "text": "Kiếm của bổn tọa không biết viết chữ."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Hướng ấy là vào cửa sông, thưa ngài. Qua cửa sông là vào sâu đất liền — đường về phía Chợ Lớn, qua vùng sông nước ở giữa. Hàng xếp xuống tàu đi hướng ấy không phải hàng chở ra biển chôn. Đó là hàng đi vào trong tuyến, đi tiếp vào nhà."
      },
      {
        "speaker": "Cao Minh",
        "text": "Nàng chọn đi. Bổn tọa nghe."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài, tôi đã bị người ta chọn đường cho mười tám năm. Đường nào trong hai đường này — theo tàu vào cửa sông, hay ở lại gỡ món nợ vừa ghi dưới tên tôi — từ nay là đường của tôi. Không ai chọn thay tôi nữa. Để tôi chọn."
      }
    ],
    "companions": [
      "le_thu_nguyet"
    ],
    "choices": [
      {
        "id": "follow_ship",
        "text": "Theo tàu trẻ em vào cửa sông ngay.",
        "next": "vt_children_pursuit",
        "route": {
          "id": "tu_quyet",
          "delta": 1
        },
        "flags": {
          "vtFollowShip": true
        }
      },
      {
        "id": "stay_ledger",
        "text": "Ở lại gỡ vòng nợ trước.",
        "next": "vt_children_pursuit",
        "route": {
          "id": "bao_ho",
          "delta": 1
        },
        "flags": {
          "vtStayLedger": true
        }
      }
    ]
  },
  "vt_children_pursuit": {
    "id": "vt_children_pursuit",
    "contentStatus": "approved",
    "stageId": "vung_tau",
    "title": "Đuổi tàu trước, nợ mang theo",
    "backgroundId": "vung-tau-roadstead",
    "location": "Chợ cá và cầu tàu phụ Phúc Thọ — buổi sáng",
    "companions": [
      "le_thu_nguyet",
      "npc_fisherman"
    ],
    "narration": [
      "Bàn ở chỗ trọ vẫn còn nguyên hai con đường của buổi sáng. Ngoài đầu bến chính, những cỗ quan tài nhỏ cuối cùng đang được khiêng xuống con tàu chờ ở cầu tàu xa, phu làm nhanh và im. Trên bàn, tờ biên nhận ghi tên Tiểu Lan nằm gấp làm ba, mép giấy ngay ngắn. Cao Minh không chọn. Hắn ngồi yên, chén trà chưa đụng tới, và nhắc lại đúng câu hắn đã nói: nàng chọn.",
      {
        "text": "Hắn đã đứng dậy từ lúc tiếng khiêng hàng ngoài bến dồn dập hơn, người quay hẳn về phía cầu tàu xa, như thể trong bụng hắn con tàu ấy đã là việc phải đuổi ngay không cần bàn thêm. Tiểu Lan đưa tay giữ nhẹ mép bàn, giữ hắn lại đúng một nhịp. Không phải để đổi ý hắn. Chỉ để một việc đã hẹn được giữ trước khi ghe rời bến.",
        "if": "vtFollowShip"
      },
      {
        "text": "Nàng lật tờ biên nhận ra, đọc lại một lần từ đầu tới cuối, chậm rãi như người kiểm một món đồ trước khi cất vào người. Món nợ này không mất đi vì bị mang theo, nàng nói. Nó nằm trong tay nàng thì là chứng cứ; để nó nằm lại trên bàn này, trong tay kẻ đã ghi nó, thì nó mới là xiềng. Tàu trẻ em vẫn đi trước — nhưng món nợ đi cùng, không bị bỏ quên, và không phải điều kiện để ai cho phép nàng đuổi theo con tàu ấy.",
        "unless": "vtFollowShip"
      },
      "Tiểu Lan sắp thứ tự thành lời, rõ ràng như người đọc một bản kê của chính mình. Con tàu đi trước. Lý do của nàng không nằm ở lòng thương, mà nằm ở nước: tàu không chờ được thủy triều, hễ triều rút hết vào đầu giờ chiều thì lạch cạn, không ai cứu được người trong khoang nữa. Còn món nợ là giấy. Giấy chờ được. Giấy không ngạt thở, không khát nước, không gõ vào thành gỗ xin ra. Người trong quan tài thì có.",
      "Nàng tự tay gấp tờ biên nhận lại, đúng nếp gấp cũ, và cất vào trong người, sát người, bằng đôi tay hôm nay đã hết run. Việc ấy nàng làm không cần ai đỡ, không cần ai giữ hộ. Ở Long Hải, người ta đã gọi lại tên nàng bằng tiếng người. Ở đây, cái tên ấy bị ghi xuống giấy để tính giá. Từ nay, tờ giấy ghi giá của nàng nằm trong tay nàng.",
      "Việc chuẩn bị đuổi theo diễn ra trong chuyển động, không có một buổi bàn kế nào. Ghe của lão ngư ông đã chờ sẵn ở cầu tàu phụ từ sớm tinh mơ — lão đã chèo cho đoàn hai ngày, tiền thuyền của lão cũng đã bị người của tang quán trả trước, trả dư một ít để uống trà, và lão vẫn còn ngơ ngác về thứ ân nhân chu đáo mà không cần gặp mặt ấy. Dây ghe được kiểm lại. Nước ngọt đổ đầy bầu. Mái chèo thứ hai buộc thêm vào mạn, phòng khi phải chèo gấp qua bãi cạn.",
      "Giữa lúc tay chân đang bận, hẹn chợ cá vẫn được giữ — ngay trong lúc chuẩn bị, không trì hoãn con tàu một khắc nào. Chợ cá vừa mở ở đầu bến phụ, cá khô phơi trên giàn tre còn ướt sương, muối hột đựng trong thúng tre lót lá. Tiểu Lan tự bước tới sạp, tự chỉ thứ cá mình muốn, tự nghe giá, và tự tay đếm tiền trả — từng đồng một, đàng hoàng như bất cứ người đàn bà nào đi chợ sớm ở bến này. Người bán gói cá, gói muối, thối lại tiền lẻ, đối đãi nàng như một người khách thường: không biết nàng là ai, không cần biết — và chính cái không cần biết ấy là thứ nàng đã hẹn với chính mình từ đêm qua.",
      {
        "text": "Thu Nguyệt đi bên cạnh nàng suốt quãng chợ ngắn ấy. Chính nàng là người nhắc lại câu hẹn đúng từng chữ, như đã hứa trong chòi bến đêm qua: chợ mở là đi, mua cá khô với muối, tự trả tiền một lần cho đàng hoàng. Nàng đã đếm sẵn tiền lẻ trong tay từ lúc ở trọ, vậy mà tới sạp cá, nàng lùi lại đúng nửa bước, để hai bàn tay trả tiền là tay của cô chủ mình. Việc của nàng sáng nay chỉ có vậy: nhắc cho đúng, và đứng lùi cho đúng chỗ.",
        "if": "thuNguyetFollows"
      },
      {
        "text": "Người nhắc câu hẹn chợ cá sáng nay là Cao Minh. Hắn nhắc đều đều, đúng thứ tự, không thêm một chữ, không bớt một chữ — như hắn đã hứa trong chòi bến: sáng nay chợ cá vừa mở, nàng đi mua cá khô với muối, tự tay trả tiền một lần cho đàng hoàng. Tiểu Lan nghe câu hẹn của chính mình trở về bằng miệng người khác, gật đầu, và đi chợ như đi giữ một lời của mình. Đoàn vắng một người lo việc bến thì đoàn tự lo — việc ấy được nói đúng một câu, rồi thôi.",
        "unless": "thuNguyetFollows"
      },
      "Ra tới ghe, bài học phàm đầu tiên tới ngay. Tiểu Lan chỉ tay về phía cửa sông: muốn đuổi kịp con tàu kia thì không đuổi thẳng sau lái nó. Ghe phải vào lạch trong — đường nước sâu chạy sát bãi lau bên trái — rồi cắt đầu nó ở bãi cạn phía trước, nơi tàu lớn phải vòng chậm lại vì sợ mắc cạn, còn ghe nhỏ lướt qua được. Triều đang rút, lạch trong chỉ còn sâu đủ cho ghe nhỏ tới gần trưa. Cao Minh chỉ tay về phía cờ hiệu trên cột bến, đoán rằng ghe phải tránh phía ấy. Nàng sửa ngay: cờ ấy là cờ báo gió cho tàu neo ngoài cửa, không phải dấu của lạch; lạch nhìn bằng màu nước và hàng lau nghiêng. Hắn nhận sai không chữa thẹn, như nhận thêm một chữ trong thứ tiếng mình đang học.",
      "Ghe rời bến phụ. Chỗ bãi nông ngay miệng lạch, ghe chở thêm người và cá muối bỗng chạm bùn; lão ngư ông vừa chống sào vừa loay hoay, thì Cao Minh cúi xuống, một tay đỡ dưới mạn ghe, nhấc cả chiếc ghe qua bãi nông như nhấc một cái thúng qua vũng nước, đặt lại xuống dòng sâu, nhẹ đến mức bầu nước trong ghe không sánh ra giọt nào. Lão chưa kịp nói tiếng cảm ơn thì hắn đã ngồi xuống, rót rượu. Chỉ có một người của tang quán ở cầu tàu xa — kẻ đang ghi nhớ mặt những người lạ dám hỏi chuyện con tàu — là ghi thêm một nét nữa vào trí nhớ của mình.",
      "Nhìn lại phía cầu tàu xa: cỗ quan tài nhỏ cuối cùng vừa xuống tới khoang, nắp khoang khép lại, phu tàu làm nhanh và im như làm một việc đã thuộc lòng. Đoàn nhìn rõ một điều bằng mắt: đoàn sẽ chặn con tàu này — con tàu ở trước mặt — còn tuyến sau lưng nó vẫn chạy như thường. Ở sân tang quán, quan tài vẫn xếp dãy chờ chuyến khác; một chiếc tàu khác vẫn đang nhận hàng theo lịch của nó. Chỉ có một chuyến hàng sắp bị chặn, và những con người cụ thể trong chuyến hàng ấy.",
      "Trên mặt nước mở, nhịp đuổi được đặt ra rõ ràng. Tiểu Lan ngồi ở mũi ghe, một tay vịn mạn, mắt không rời màu nước: nàng đọc lạch bằng vệt nước sẫm giữa hai bãi cạn, bằng hàng lau nghiêng theo dòng. Nàng dặn lão ngư ông giữ ghe sát mé lau bên trái, chèo đều, đừng ham nhanh ở quãng nước thẳng — dành sức cho quãng cắt đầu ở bãi cạn phía trước. Phần của Cao Minh, nàng nói, là phần nàng không làm được: nếu trên con tàu kia có thứ nhịp lạ nào vươn tay ra tới ghe này, thì phần ấy là của ngài. Hắn nhận như nhận một việc vặt. Ghe lướt vào lạch trong, lau sậy khép lại sau lưng, và con tàu quan tài vẫn còn trong tầm mắt phía trước."
    ],
    "dialogue": [
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài, tôi sắp thứ tự thế này. Tàu trẻ em đi trước. Tàu không chờ được triều, còn món nợ là giấy — giấy chờ được, người trong quan tài thì không. Ngài đừng tưởng tôi bỏ món nợ lại. Tôi mang nó theo người. Tới đâu gỡ tới đó, ngay trong chuyến này."
      },
      {
        "speaker": "Cao Minh",
        "text": "Bổn tọa là người mù việc bến. Đường nước nàng đọc, thứ tự nàng sắp. Bổn tọa chỉ nghe."
      },
      {
        "speaker": "Lão ngư ông",
        "text": "Thưa ông thầy, thưa cô, triều rút tới đầu giờ chiều là lạch trong cạn trơ bùn. Muốn cắt đầu con tàu kia thì phải đi ngay bây giờ. Giá ghe người ta trả trước cho tôi rồi, tôi chỉ nói giờ nước — vì nước không chờ ai hết."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Dạ, thưa bác, đi ngay bây giờ. Bác giữ ghe sát mé lau bên trái cho tôi. Ra khỏi lạch mà thấy nước đổi màu sẫm lại, ấy là đường sâu còn đi được."
      },
      {
        "speaker": "Cao Minh",
        "text": "Giấy của chúng đi chậm hơn nước. Cứ để nó trôi theo sau, tới bến nào hay bến ấy."
      }
    ],
    "choices": [
      {
        "id": "chase_inside_channel",
        "text": "Cắt lạch trong theo lời Tiểu Lan, tới điểm đón đầu trước — ghe nhỏ phải chèo gấp, nàng mệt sớm.",
        "next": "vt_river_chase",
        "effects": {
          "lanHealthDelta": -2
        },
        "route": {
          "id": "tu_quyet",
          "delta": 1
        },
        "flags": {
          "vtMarketPromiseKept": true
        }
      },
      {
        "id": "chase_open_water",
        "text": "Đi vòng nước ngoài thoáng hơn, giữ sức và giữ ghe kín đáo — mất tầm mắt con tàu một quãng, đổi lại nhìn rõ trạm truyền nhịp dọc bờ.",
        "next": "vt_river_chase",
        "effects": {
          "cluesHuaGiaDelta": 1
        },
        "route": {
          "id": "bao_ho",
          "delta": 1
        },
        "flags": {
          "vtMarketPromiseKept": true
        }
      }
    ]
  },
  "vt_river_chase": {
    "id": "vt_river_chase",
    "contentStatus": "approved",
    "stageId": "vung_tau",
    "title": "Truy đuổi trên mặt nước",
    "backgroundId": "vung-tau-roadstead",
    "location": "Lạch cửa sông — trên ghe đuổi theo tàu quan tài",
    "companions": [
      "npc_fisherman",
      "le_thu_nguyet"
    ],
    "narration": [
      "Ghe vào nhịp đuổi chưa được bao lâu thì khoảng cách bắt đầu nói dối. Lão ngư ông chèo mỗi lúc một gấp, vai áo ướt đẫm, vậy mà con tàu quan tài phía trước không hề gần lại — nó đi nhanh dần, đều dần, theo một cách không thuộc về sức người chèo. Nhìn kỹ mới thấy: phu trên tàu ấy chèo không nghỉ, không đổi tay, không ai ngẩng lên lau mồ hôi dù nắng đã đứng cao. Mái chèo của họ lên xuống cùng một nhịp, mười mấy mái như một. Và ghe của đoàn cũng bắt đầu chao theo cái nhịp ấy: mỗi lần đoàn chèo của tàu phía trước dộng xuống, mạn ghe này lại khẽ nghiêng như bị ai kéo nhẹ một cái từ xa. Nhịp lệnh không chỉ ép tay người của nó. Nó vươn ra cả mặt nước quanh nó, kéo theo bất cứ thứ gì nổi gần đó vào cùng một tiết tấu.",
      "Lão ngư ông là người nhận ra trước bằng nghề của mình: mái chèo trên tay lão bỗng nặng theo một nhịp không phải của lão, như có kẻ vô hình đang chèo phụ — mà phụ sai hướng. Lão ghì chèo, nghiến răng giữ nhịp của mình, mồ hôi rịn ra ở thái dương. Con tàu phía trước vẫn đều đều đi, phu của nó không một ai có vẻ mệt. Người mệt, ở trên mặt nước này, chỉ có những người còn được phép mệt theo ý mình.",
      "Cao Minh đặt một tay lên mạn ghe. Chỉ vậy thôi. Không ánh sáng, không tiếng động, không một cử chỉ nào lớn hơn việc người ta đặt tay lên thành ghế cho vững. Nhưng mặt nước quanh ghe phẳng lại ngay trong khoảnh khắc ấy — phẳng một cách không tự nhiên, như một mặt gương vừa được ai lau sạch cơn rung. Mái chèo trên tay lão ngư ông nhẹ bẫng trở lại thành mái chèo của lão; chiếc ghe hết chao theo nhịp người khác, đứng thẳng lên trong nước như vừa được trả lại cho chính mình. Xa hơn một chút, ở mé lạch bên kia, một chiếc ghe cá nhỏ cũng vừa bị kéo chao theo nhịp tàu thì bỗng yên lại; người đàn bà trên ghe ấy ngẩng lên ngơ ngác, rồi cúi xuống chèo tiếp phần nước của mình, không hiểu chuyện gì vừa ghé qua. Cao Minh đã thu tay về, rót rượu ra chén, uống như người vừa gạt một con ruồi khỏi mâm cơm.",
      "Việc đuổi kịp, từ đó trở đi, hoàn toàn là việc của người phàm. Tiểu Lan ngồi ở mũi ghe, khăn che mặt đã ướt hơi nước, và đọc mặt sông như đọc một trang sách nàng thuộc lòng từ những năm nghe người ta nói chuyện qua vách phòng bệnh. Trước mặt là khúc sông chia hai dòng: bên phải nước rộng, thoáng, đi dễ; bên trái là lạch nông chạy sát bãi lau, nước đang rút nhanh. Nàng chỉ tay sang trái. Con tàu lớn kia, dù có thứ nhịp gì ép phu của nó, vẫn là một thân tàu ăn nước sâu — tới bãi cạn phía trước, nó buộc phải vòng ra giữa dòng và chậm lại để khỏi mắc cạn. Ghe nhỏ này ăn nước nông: cắt thẳng qua bãi cạn, đón đầu nó ở khúc sông hẹp sau bãi, là tới trước. Lão ngư ông nghe, gật đầu lia lịa — đúng nghề của lão, đúng nước của lão, chỉ là lão không dám tự mình chọn đường liều ấy khi khách trên ghe chưa gật đầu.",
      "Con tàu phía trước dường như biết mình bị đuổi. Nhịp trên tàu dồn dập hẳn lên: mái chèo của phu tàu lên xuống nhanh hơn, bọt nước sau lái trắng xóa, và mặt nước quanh thân tàu lại bắt đầu rung theo tiết tấu mới. Nhưng đoàn nhìn rõ giới hạn của nó bằng mắt: thứ nhịp ấy chỉ tăng được sự ép lên người của chính nó — phu của nó chèo nhanh hơn, khổ hơn — chứ không lan ra nhanh hơn bàn tay đang đặt hờ trên mạn ghe này chặn lại. Nước quanh ghe của đoàn vẫn phẳng. Khoảng cách, lần này, rút lại thật: rút bằng tay chèo của một ông lão, bằng con lạch nông của một cô gái chưa từng ngồi ghe đuổi tàu bao giờ, và bằng giờ triều đang rút mà nàng đã tính từ lúc còn ở chợ cá.",
      "Hai bên bờ, bến sông bắt đầu có người đứng nhìn. Một ghe lạ dám đuổi theo tàu của tuyến — ở vùng nước này, đó là chuyện người ta sẽ kể lại ở hàng cơm tối nay, kèm theo tính toán của riêng từng người: có kẻ lo cho ghe lạ, có kẻ tính xem nên đứng về phía nào nếu bến đổi gió, có kẻ chỉ đơn giản ghi nhớ mặt người trên ghe để ngày sau còn biết đường tránh hay đường theo. Không ai trên bờ làm gì cả. Họ chỉ nhìn, và việc bị nhìn ấy cũng là một thứ giá mà đoàn đang trả cho cuộc đuổi này.",
      {
        "text": "Suốt cuộc đuổi, Thu Nguyệt lo phần việc phàm trên ghe mà không cần ai phân: nàng giữ chặt chồng đồ của đoàn cho khỏi ướt khi ghe lướt qua bãi cạn, trải tấm khăn khô che nắng và hơi nước cho cô chủ của mình, và khi lão ngư ông cần đổi tay chèo ở quãng nước xoáy, nàng nói với lão bằng tiếng của người bến — ngắn, đúng chỗ — để lão yên tâm mà giữ nhịp. Nàng không nhìn con tàu phía trước lấy một lần nào lâu. Việc của nàng là người trên ghe này, không phải con tàu kia.",
        "if": "thuNguyetFollows"
      },
      {
        "text": "Trên ghe không có người thứ hai lo việc phàm, nên mọi việc nhỏ đều về tay người có phận sự của chúng. Lão ngư ông tự nói việc ghe bằng tiếng bến của mình: chỗ nào sắp cạn, chỗ nào phải chống sào, lão nói thành tiếng cho khách nghe như nói cho chính mình. Tiểu Lan tự giữ tấm khăn che mặt, tự giữ bầu nước trong lòng bằng cả hai tay — chậm hơn một chút so với khi có người đỡ tay, nhưng nàng làm như một người đang giữ đồ của mình, không phải như một người thiếu mất một bàn tay. Cao Minh chỉ làm đúng một việc nhỏ: khi ghe lướt xiên qua bãi cạn và chén rượu trên tay hắn sắp sánh đổ, hắn nghiêng cổ tay giữ chén lại — giữ cho mình, không hơn.",
        "unless": "thuNguyetFollows"
      },
      "Rồi ghe áp vào tầm gọi hàng. Khoảng cách tới con tàu phía trước giờ chỉ còn vài chục sải nước, đủ gần để nghe tiếng mái chèo của nó dộng đều xuống mặt sông, đủ gần để thấy bóng phu tàu cúi lên cúi xuống như những cái máy bằng thịt. Và Tiểu Lan nghe ra một thứ khác, trước Cao Minh đúng một nhịp: lẫn trong tiếng chèo đều đặn ấy, từ trong khoang tàu phía trước, có tiếng gõ rất khẽ. Khẽ đến mức nếu không phải người đã sống mười tám năm bằng đôi tai, hẳn ai cũng ngỡ là tiếng mạn tàu cọ vào nước. Nó không đều như tiếng chèo. Nó khựng, rồi gõ tiếp. Nàng không nói nó là gì. Nàng chỉ nói: trong khoang tàu kia, có tiếng gõ không đi theo nhịp chèo. Điểm cắt đầu ở ngay khúc hẹp kế tiếp — và ghe của đoàn, theo đúng đường nàng đã chọn, đang tới đó trước con tàu."
    ],
    "dialogue": [
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài, đừng nhìn mặt nước rộng. Nhìn màu nước sát bãi lau kia: vệt sẫm ấy là lạch còn sâu. Tàu lớn tới bãi cạn phải vòng ra giữa dòng. Ghe mình cắt thẳng qua, đón đầu nó ở khúc hẹp sau bãi — ấy là đường của mình."
      },
      {
        "speaker": "Lão ngư ông",
        "text": "Cô nói đúng nghề lắm. Lạch ấy tôi thuộc, mà tôi không dám tự chọn khi ghe có khách. Cô gật đầu thì tôi chèo."
      },
      {
        "speaker": "Cao Minh",
        "text": "Xong. Đuổi tiếp."
      },
      {
        "speaker": "Cao Minh",
        "text": "Kẻ nào lười tới mức phải mượn tay người khác chèo thay, thì cũng lười tới mức không đuổi kịp ai bao giờ. Đáng tiếc, hôm nay kẻ bị đuổi lại là chúng ta."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Ngài nghe không, thưa ngài. Trong khoang tàu kia có tiếng gõ. Nó không đi theo nhịp chèo của phu tàu."
      }
    ],
    "choices": [
      {
        "id": "cut_at_narrows",
        "text": "Áp sát ngay ở khúc hẹp theo điểm Tiểu Lan chọn — cả hai bờ đều thấy ghe lạ ép tàu của tuyến.",
        "next": "vt_coffin_ship",
        "effects": {
          "cluesHuaGiaDelta": 1
        },
        "route": {
          "id": "tu_quyet",
          "delta": 1
        }
      },
      {
        "id": "shadow_to_bend",
        "text": "Giữ khoảng cách tới khúc khuất mới áp — tàu trẻ em kịp truyền thêm một đợt nhịp về trạm bờ, đổi lại hắn làm đúng nhịp nàng dặn.",
        "next": "vt_coffin_ship",
        "effects": {
          "lanTrustDelta": 2
        },
        "route": {
          "id": "bao_ho",
          "delta": 1
        }
      }
    ]
  },
  "vt_coffin_ship": {
    "id": "vt_coffin_ship",
    "contentStatus": "approved",
    "stageId": "vung_tau",
    "title": "Lên tàu quan tài",
    "backgroundId": "river-coffin-ship",
    "location": "Trên tàu quan tài — khúc sông trước cửa sông",
    "companions": [
      "npc_porter",
      "le_thu_nguyet"
    ],
    "narration": [
      "Ghe cặp mạn con tàu đúng ở khúc hẹp mà Tiểu Lan đã chọn, nơi hai bên bờ lau sậy khép lại và thân tàu lớn không còn đường vòng. Không có một trận đánh nào. Ghe áp vào, dây buộc quăng lên, và đoàn bước lên boong con tàu đang chở những cỗ quan tài nhỏ — trong một sự im lặng kỳ lạ: phu tàu nhìn đoàn lên tàu mà không một ai hô hoán, không một ai chạy đi báo, vì tay của họ vẫn đang bận chèo theo một nhịp không phải của họ. Mắt họ tỉnh. Mắt họ nhìn đoàn, nhìn rõ từng người, và trong những đôi mắt ấy có một thứ van xin không thành tiếng: đừng làm chúng tôi sợ thêm, chúng tôi đã sợ đủ rồi. Tiểu Lan là người nói trước, bằng giọng thường ngày của một người khách đi đường, để những đôi mắt ấy khỏi phải hoảng thêm.",
      "Cao Minh đi thẳng tới chỗ trạm truyền nhịp trên tàu — một điểm nối khuất sau cột buồm phụ, nơi nhịp của tuyến bờ truyền xuống và buộc vào thân tàu này, đúng như điểm nối hắn đã cắt ở chòi bến Phúc Thọ. Hắn làm việc ấy như người ta gỡ một cái gai khỏi kẽ tay: một động tác, ngắn, xong. Mái chèo trên tay phu tàu khựng lại giữa chừng. Rồi từng người một nhớ ra tay mình là của mình: có người buông chèo ngồi thụp xuống boong mà khóc, khóc vì mừng một cách không dám mừng to; có người cứ ngồi giữ nguyên mái chèo, nhìn đôi tay mình như nhìn hai vật lạ vừa được trả lại; có người hỏi đi hỏi lại một câu duy nhất — bây giờ sao, bây giờ sao — như thể tự do bất ngờ cũng cần có người chỉ đường. Cao Minh đã quay lưng đi về phía khoang hàng, việc của hắn ở chỗ này xong rồi.",
      "Khoang tàu mở ra dưới ánh nắng đứng bóng. Quan tài nhỏ xếp thành hai dãy ngay ngắn, cỗ nào cũng nhỏ hơn hẳn quan tài người lớn, nhẹ đến mức chỉ cần hai người khiêng. Gần đầu mỗi nắp đều khoan một hàng lỗ tròn nhỏ và khéo — lỗ thở, như những lỗ thở đoàn đã thấy ở bến Phúc Thọ. Mỗi cỗ gắn một miếng giấy thông hành mới đóng triện đỏ, giấy còn thơm mùi hồ, nét triện còn ướt bóng. Đoàn đếm cỗ, rồi đếm giấy: số cỗ khớp số giấy, không thừa không thiếu — một chuyến hàng ngăn nắp như một trang sổ. Chỉ có một điều không ngăn nắp: giấy mới hơn gỗ rất nhiều. Gỗ của những cỗ quan tài này đã qua tay người khiêng không biết bao nhiêu chuyến, sơn trầy, mép sờn; còn giấy thì mới tinh, như thể chuyến hàng này vừa mới được sinh ra trên giấy sáng nay, dù những con người trong đó đã nằm trong gỗ từ bao giờ không ai nói.",
      "Tiểu Lan đọc phần chữ thường trên những tờ giấy thông hành ấy, đọc thành tiếng vừa đủ cho đoàn nghe: tên, tuổi, quê quán — những dòng chữ ngắn ngủn mà một đời người bị gói vào trong đó. Chữ của nàng đọc là chữ của người; phần dấu, phần triện, phần ký hiệu chạy dọc mép giấy là một thứ chữ khác, không phải phần của nàng. Cao Minh đứng bên, không ghé mắt vào tờ giấy nào lâu. Việc đọc, ở trên con tàu này cũng như ở chòi bến Phúc Thọ, không phải việc của hắn.",
      {
        "text": "Phần dấu là phần của Thu Nguyệt. Nàng cúi xuống từng tờ giấy thông hành, đọc lối ký hiệu thương hồ chạy dọc mép giấy như người nhà quê đọc đường về nhà: dấu nào là dấu cước tính theo chuyến, dấu nào là dấu của trạm truyền, dấu nào ghi phần chi của tang quán. Nàng tách bạch hai lớp chữ trên cùng một tờ giấy cho đoàn nghe — lớp chữ thường của Tiểu Lan đọc là tên người; lớp ký hiệu của nàng đọc là giá và đường đi của chuyến hàng. Hai lớp chữ ấy nằm cạnh nhau trên giấy mà không hề nhìn nhau, như hai thế giới dùng chung một tờ giấy để làm hai việc khác nhau với cùng một con người.",
        "if": "thuNguyetFollows"
      },
      {
        "text": "Phần dấu trên giấy thông hành, sáng nay, do chính một người phu tàu tự chỉ cho đoàn. Tay anh ta vừa được trả lại cho anh ta, còn run, nhưng anh ta chỉ đúng từng dấu một và nói bằng tiếng bến của mình: dấu này là dấu chuyến, ghe tàu nào qua trạm cũng phải có; dấu này là dấu cước, đóng ở tang quán trước khi xuống hàng; còn dấu nhỏ ở góc, anh ta chèo cho tuyến ba năm mà không biết nó là dấu gì — chỉ biết chuyến nào có nó thì phu không được hỏi, không được nhìn vào khoang. Chữ thường trên giấy vẫn do Tiểu Lan đọc. Ngoài hai lớp chữ ấy, không ai trên tàu này đọc được thêm gì nữa, và không ai cố đọc.",
        "unless": "thuNguyetFollows"
      },
      "Từ trên boong tàu nhìn về phía bờ, đoàn thấy rõ phần còn lại của thế giới này vẫn đang vận hành như thường. Ở xa phía cửa sông, một con tàu khác của tuyến đang đi vào trong đúng lịch của nó, phu chèo đều, giấy tờ đầy đủ, không một ai trên bờ ngẩng lên nhìn nó lấy một lần — vì nó là chuyện thường ngày. Trạm nhịp trên bờ vẫn truyền nhịp xuống mặt nước theo giờ của nó. Bàn tay trả tiền ở đâu đó sau lưng tang quán vẫn chưa hề biết chuyến hàng này bị chặn, hoặc đã biết mà vẫn còn khối việc khác để làm. Tiểu Lan nói rõ phần thắng của buổi sáng này, nói như người kê một bản kê không cho phép mình kê thừa: đoàn chặn được con tàu này, và những con người cụ thể trên con tàu này. Không hơn. Tuyến vẫn còn nguyên ngoài kia, và nàng không cho phép ai trong đoàn — kể cả chính nàng — gọi buổi sáng này bằng một cái tên lớn hơn nó.",
      "Rồi tiếng gõ vọng ra. Từ trong các cỗ quan tài, qua lớp gỗ mỏng, tiếng gõ khẽ khàng nổi lên — đều, rất đều, đi đúng theo nhịp chân của người gác còn sót lại trên tàu đang dậm xuống boong theo thói quen của một thân thể chưa kịp biết lệnh đã mất đầu phát. Người trong các cỗ vẫn gõ theo nhịp của kẻ khác, vì đó là điều họ đã bị dạy, và chưa ai nói cho họ biết rằng từ giây phút này họ không cần gõ nữa. Đoàn đứng yên nghe một lúc. Rồi Tiểu Lan quyết định: mở cỗ đầu tiên. Không phải cỗ to nhất, không phải cỗ gần nhất — cỗ có tiếng gõ yếu nhất. Việc mở nắp, và mọi điều sau đó, thuộc về khoảnh khắc kế tiếp. Mọi việc dừng ở quyết định ấy, khi tay nàng đã đặt lên mép nắp cỗ quan tài đầu tiên."
    ],
    "dialogue": [
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Dạ, thưa các bác, các anh, đoàn chúng tôi không phải người của tuyến, cũng không phải quan cảng. Tàu đã dừng rồi. Các bác cứ ngồi yên, đừng sợ. Tôi hỏi thăm một việc phàm thôi: chuyến tàu này, theo giấy, là giao hàng ở đâu?"
      },
      {
        "speaker": "Người phu tàu",
        "text": "Thưa cô… giao ở trạm trong, qua cửa sông thì có người của tuyến ra nhận. Chúng tôi chỉ chèo tới trạm. Tới đó là hết việc. Trong khoang có gì, chúng tôi… chúng tôi không được biết, thưa cô."
      },
      {
        "speaker": "Cao Minh",
        "text": "Kẻ giữ nhịp của các ngươi nuôi các ngươi như nuôi một đội chèo không cần trả công bằng cơm, chỉ trả bằng lệnh. Tiết kiệm thật."
      },
      {
        "speaker": "Cao Minh",
        "text": "Giấy tờ trên tàu này, bổn tọa không đọc. Nàng đọc. Bổn tọa chỉ đứng đây để chắc rằng không còn sợi nhịp nào dám buộc lại tay của ai trên tàu này nữa."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài, mở cỗ đầu tiên đi. Cỗ có tiếng gõ yếu nhất — người trong ấy cần ra trước."
      }
    ],
    "choices": [
      {
        "id": "open_quiet_first",
        "text": "Mở cỗ có tiếng gõ yếu nhất trước, giữ tàu thật yên — trạm bờ có thêm lúc để ý tàu trễ nhịp.",
        "next": "vt_be_sau_knocking",
        "effects": {
          "lanTrustDelta": 2
        },
        "route": {
          "id": "bao_ho",
          "delta": 1
        },
        "flags": {
          "vtShipHalted": true
        }
      },
      {
        "id": "secure_crew_first",
        "text": "Cho phu tàu xuống ghe và cột tàu vào bãi lau trước rồi mới mở — giấy tờ trên boong bị xáo trộn trong lúc dọn, đối chiếu về sau khó hơn một bậc.",
        "next": "vt_be_sau_knocking",
        "effects": {
          "civiliansSavedDelta": 2
        },
        "route": {
          "id": "tu_quyet",
          "delta": 1
        },
        "flags": {
          "vtShipHalted": true
        }
      }
    ]
  },
  "vt_be_sau_knocking": {
    "id": "vt_be_sau_knocking",
    "contentStatus": "approved",
    "stageId": "vung_tau",
    "title": "Bé Sáu xuất hiện",
    "backgroundId": "river-coffin-ship",
    "location": "Khoang tàu quan tài vừa bị chặn",
    "companions": [
      "le_thu_nguyet"
    ],
    "narration": [
      "Trước khi nắp cỗ đầu tiên được mở, Tiểu Lan bảo mọi người đứng yên một lúc và nghe. Trong khoang tàu, tiếng gõ từ các cỗ quan tài vẫn đều đều đi theo nhịp chân người gác còn sót lại trên boong — chân anh ta đã được trả tự do mà thói quen của thân thể thì chưa, cứ dậm xuống gỗ theo tiết tấu cũ. Nhưng lẫn trong cái đều đặn ấy, có một cỗ gõ khác. Nó gõ chậm hơn nửa nhịp, khựng lại, rồi tự sửa — gõ dồn hai tiếng như người đếm trợt phải đếm lại từ đầu. Nó không khớp chân ai trên tàu này. Nó là nhịp của một đứa trẻ đang tự giữ lấy nhịp của chính mình, trong bóng tối, bằng cách duy nhất mà nó biết: đếm, và hễ đếm sai thì đếm lại. Tiểu Lan là người chỉ ra sự khác ấy cho cả đoàn, bằng một ngón tay giơ lên giữa khoang.",
      "Nắp được mở theo thứ tự nàng quyết: cỗ gõ lệch trước. Cao Minh làm phần việc nặng nhất của buổi mở nắp một cách lặng lẽ — cỗ nào nắp bị kẹt vì gỗ trương và đinh rỉ, hai người phu tàu loay hoay không mở nổi, hắn chỉ đặt tay lên mép nắp và nhấc, đặt nó xuống boong nhẹ như đặt một cái khay, rồi bước lùi ra ngoài vòng người. Trong các cỗ, trẻ còn sống, và còn tỉnh. Về chúng, chỉ cần nói đúng một sự thật ấy: có em ngồi dậy được, mắt dáo dác tìm ánh sáng; có em khóc ngay khi thấy mặt người, khóc thành tiếng như trẻ con khóc ở bất cứ đâu; có em im lặng một cách già dặn không hợp tuổi, hai tay ôm lấy đầu gối của chính mình; có em hỏi câu đầu tiên không phải về cha mẹ — em hỏi đây là đâu, và có phải đi tiếp nữa không.",
      "Tiểu Lan không tra hỏi một em nào. Nàng làm một việc mà không ai trên tàu ngờ tới: nàng ngồi xuống. Nàng ngồi bệt xuống sàn khoang, ngang tầm những nắp quan tài vừa mở, váy áo chạm vào gỗ ướt, và chờ. Nước được đưa tới từng em, chén chuyền tay nhau trong im lặng. Nàng không hỏi tên, không hỏi quê, không hỏi ai đưa các em lên tàu. Nàng chỉ nói việc đang xảy ra bằng những câu phàm nhất: tàu đã dừng, các em được ra ngoài, từ giờ không ai phải gõ nữa. Rồi nàng im lặng, để khoảng im lặng ấy làm phần việc của nó. Có em uống nước xong thì khóc. Có em nhìn nàng rất lâu. Và rồi, từ cỗ quan tài gõ lệch — cỗ được mở đầu tiên — một giọng trẻ con rất khẽ cất lên, nói tên của chính mình, như người ta đặt một món đồ của mình xuống chỗ an toàn đầu tiên mà họ thấy. Khoảnh khắc ấy dài. Người lớn trên tàu không quen với việc chờ một đứa trẻ mở miệng — họ quen ra lệnh, quen hỏi, quen ghi. Tiểu Lan ngồi yên như người ta ngồi chờ một con chim lạ đậu xuống tay mình: không vươn tay ra, không thúc giục, và chính sự không thúc giục ấy là thứ ngôn ngữ đầu tiên nàng nói với các em.",
      "Em nói em tên là Bé Sáu. Chỉ vậy thôi. Không kèm nhà ở đâu, không kèm cha mẹ là ai, không kèm điều gì về con tàu này — em là một đứa trẻ vừa được cứu, không phải một nguồn tin, và đoàn đối đãi với câu nói của em đúng như vậy: Tiểu Lan lặp lại cái tên ấy một lần, bằng giọng thường, như nhận một món đồ người ta gửi. Tên của em vào câu chuyện này từ miệng em, không từ tờ giấy nào của tuyến, không từ miệng người lớn nào đoán ra.",
      "Suốt buổi mở nắp, Cao Minh đứng ngoài vòng người. Hắn không hỏi một em nào bất cứ điều gì, và không nói một câu đùa nào trong suốt cảnh này — miệng hắn, lần này, biết rõ chỗ của nó. Việc của hắn vô hình và liên tục: quanh khoang tàu, hắn giữ một vòng yên tĩnh mà không ai nhìn thấy — thỉnh thoảng, từ phía trạm bờ xa, một đợt nhịp lạ lại tìm cách vươn tới con tàu đã mất đầu phát, như một bàn tay quờ trong tối tìm lại sợi dây cũ; lần nào nó cũng tắt ở rìa khoang, nhẹ như một ngọn đèn bị che tay, để không một đứa trẻ nào vừa được trả tay về cho mình lại bị kéo vào nhịp gõ của kẻ khác. Hắn làm việc ấy như người đứng gác một giấc ngủ: không ai cảm ơn, và hắn cũng không cần. Hắn đứng ở chỗ khuất nhất của khoang, lưng tựa cột buồm phụ, mắt không nhìn vào một đứa trẻ nào lâu — như thể hắn biết, đối với những đứa trẻ vừa ra khỏi quan tài, một người lạ mặt cao lớn đứng nhìn chằm chằm cũng là một thứ sức ép. Sự có mặt của hắn ở đây chỉ có một hình dạng duy nhất: sự yên tĩnh quanh khoang tàu, dày và đều, như một mái nhà không ai thấy.",
      {
        "text": "Thu Nguyệt phụ phần việc chăm thường của buổi mở nắp, bằng tay chân của người nhà: nàng rót nước không để một chén nào trống, giữ chồng chăn khô chia cho từng em, và đếm trẻ phụ Tiểu Lan — đếm bằng miệng, nhỏ, mỗi em một lần — để số người trên boong khớp với số cỗ đã mở. Nàng không chen vào khoảnh khắc Tiểu Lan chờ các em tự mở miệng. Việc của nàng là nước, chăn và con số; khoảnh khắc của tên tuổi là của cô chủ nàng và của chính đứa trẻ.",
        "if": "thuNguyetFollows"
      },
      {
        "text": "Phần việc chăm thường của buổi mở nắp, hôm nay, do Tiểu Lan tự tổ chức. Nàng phân việc cho hai người phu tàu đã được tự do — anh này rót nước, anh kia giữ chăn và đếm cỗ rỗng — bằng giọng rõ ràng, chậm rãi, như người sắp một bữa ăn cho đông người. Mọi việc chậm hơn một chút so với khi có thêm một đôi tay quen việc, nhưng không việc nào rối: nước tới từng em, chăn tới từng em, con số đếm đủ. Sự vắng mặt của ai không được nhắc tới trong khoang này. Ở đây chỉ có việc, và người làm việc.",
        "unless": "thuNguyetFollows"
      },
      "Cuối buổi, trẻ được xếp chỗ ngồi trên boong, trên những tấm chăn và áo khô sẵn có, lưng tựa vào mạn tàu, mặt hướng ra sông cho thoáng. Đoàn đếm lại người, đếm lại cỗ rỗng: số cỗ khớp số giấy thông hành, số người sống khớp số cỗ — một chuyến hàng ngăn nắp đến lạnh người, ngăn nắp cả trong lúc bị chặn lại. Một em nhỏ — không phải Bé Sáu — níu lấy tay áo Tiểu Lan, hỏi nhỏ rằng có phải không phải đi tiếp nữa không. Nàng chưa kịp trả lời thì từ dưới sàn khoang, ngay dưới chân đoàn, vọng lên một âm thanh lạ: không phải tiếng gõ. Là một thứ âm thanh của người — khẽ, không đều, như hơi thở đi qua một khe hẹp. Cả khoang im bặt. Sàn khoang dưới chân họ, hóa ra, không phải là đáy tàu."
    ],
    "dialogue": [
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Các em nghe tôi nói đây. Tàu đã dừng rồi. Các em được ra ngoài cả. Không ai phải gõ nữa — ai muốn gõ thì gõ chơi, không gõ cũng không sao. Uống nước trước đã. Việc khác, để người lớn lo."
      },
      {
        "speaker": "Bé Sáu",
        "text": "Con… con tên Bé Sáu. Con đếm tới một trăm là con đếm lại. Đếm vậy… tay con nó không đi theo người ta."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Bé Sáu. Tôi nhớ rồi. Em đếm giỏi lắm. Từ giờ em muốn đếm thì đếm, không muốn thì thôi — không ai bắt em giữ nhịp cho ai nữa."
      },
      {
        "speaker": "Cao Minh",
        "text": "Khoang này, từ giờ tới lúc mở xong, không thứ nhịp nào ngoài nhịp của người trong khoang được vào. Các ngươi cứ làm việc của các ngươi."
      }
    ],
    "choices": [
      {
        "id": "children_topside_first",
        "text": "Đưa hết trẻ lên boong thoáng trước khi xem sàn khoang — âm dưới sàn phải chờ, việc xem sàn bắt đầu trong thế gấp hơn.",
        "next": "vt_living_under_hull",
        "effects": {
          "civiliansSavedDelta": 3,
          "lanHealthDelta": -2
        },
        "route": {
          "id": "bao_ho",
          "delta": 1
        },
        "flags": {
          "vtBeSauRescued": true
        }
      },
      {
        "id": "water_and_count_first",
        "text": "Ở yên trong khoang cho uống nước và đếm đủ người theo giấy trước — tàu đứng lâu giữa sông, bờ hai bên nhìn rõ hơn.",
        "next": "vt_living_under_hull",
        "effects": {
          "cluesHuaGiaDelta": 1
        },
        "route": {
          "id": "tu_quyet",
          "delta": 1
        },
        "flags": {
          "vtBeSauRescued": true
        }
      }
    ]
  },
  "vt_living_under_hull": {
    "id": "vt_living_under_hull",
    "contentStatus": "approved",
    "stageId": "vung_tau",
    "title": "Người sống dưới đáy tàu",
    "backgroundId": "river-coffin-ship",
    "location": "Tàu quan tài neo ở bãi lau gần bờ",
    "companions": [
      "npc_porter",
      "le_thu_nguyet"
    ],
    "narration": [
      "Âm thanh dưới sàn khoang không đều. Tiểu Lan quỳ xuống, áp tai vào mặt gỗ, gõ nhẹ ba tiếng, rồi im lặng đếm khoảng lặng sau đó — đếm như người ta đếm mạch. Bên dưới có hơi thở: yếu, ngắt quãng, và lệch hẳn với mọi nhịp thở trên boong. Nó không đi theo nhịp của ai, không trả lời tiếng gõ của nàng theo lối của người bị giữ nhịp; nó chỉ đơn giản là hơi thở của người đang cạn dần trong một chỗ không có ánh sáng. Nàng ngẩng lên và kết luận trước khi bất cứ ai kịp mở miệng: còn người dưới đáy tàu. Không phải đoán. Đếm khoảng lặng giữa hai hơi thở mà nàng vừa làm là việc của một người đã sống nhiều năm bằng đôi tai, trong một căn phòng mà mọi tin tức đều tới bằng âm thanh qua vách.",
      "Mở sàn khoang ngay trên mặt nước là việc dở: nước sẽ ập vào chỗ thấp nhất của tàu trước khi người dưới đó kịp ngoi lên. Cao Minh nghe nàng nói xong, nhìn con tàu một lúc như người ta nhìn một món đồ đặt sai chỗ. Rồi hắn bước ra mạn tàu, và làm việc ấy thản nhiên như mọi việc vặt của hắn: cả thân tàu — gỗ, khoang, quan tài, người sống trên boong và người đang thở dưới đáy — rời mặt nước. Nó lên chậm, đều, không nghiêng một phân, nước chảy khỏi đáy tàu thành từng màn trắng xóa, và được đặt lên bãi cạn bên bờ lau như người ta đặt một cái mâm lên bàn. Phu tàu trên boong đứng chết lặng, tay bám mạn. Mấy chiếc ghe bến gần đó ngừng chèo giữa dòng. Đáy tàu lộ ra dưới nắng: dưới đường nước của thân tàu, đóng kín bằng một lớp ván phụ và trét nhựa đường, là một khoang giả — một khoang không có trên bất cứ tờ giấy nào của chuyến tàu này. Ở các ghe bến gần đó, có người buông mái chèo đứng dậy nhìn, có người ngồi thụp xuống như chân không còn tin vào mặt nước dưới ghe mình nữa. Một ông lão chèo ghe cá, tay còn đang run, chắp tay về phía con tàu mà vái — vái ai thì chính ông cũng không rõ — rồi lại vội vàng cúi xuống chèo đi, như sợ nhìn lâu thêm một khắc nào nữa là phải hiểu ra điều mình vừa thấy, mà hiểu ra thì đời chèo ghe của ông không còn như cũ được.",
      "Hắn phủi tay, nhìn bãi lau, không nói một lời nào về việc mình vừa làm. Người bến ở các ghe gần đó nhìn con tàu nằm trên bãi cạn mà không ai dám lên tiếng trước: ở vùng nước này, từ hôm nay, có một câu chuyện sẽ đi trước đoàn tới mọi bến mà đoàn chưa đặt chân tới — chuyện về một người nhấc tàu lên khỏi mặt nước như nhấc một món đồ. Còn hắn, hắn đã quay sang nhìn khoang giả dưới đáy tàu, chờ phần việc của người phàm bắt đầu.",
      "Khoang đáy được mở từ phía trên, theo đúng chỗ nàng đã nghe. Bên trong, chật và tối, là thêm những người bị vận chuyển nữa — người lớn có, người đã ngất vì ngạt có — nằm ngoài mọi giấy tờ trên tàu: không tên trong sổ chuyến, không giấy thông hành, không một dòng chữ nào trên đời này ghi rằng họ đang ở đây. Người ta đưa họ ra theo ánh sáng và hơi thở: người nào còn tỉnh thì dìu, người nào ngạt thì khiêng, đặt nằm nghiêng trên boong theo đúng cách nàng dặn. Không cần viết gì thêm về chỗ họ vừa nằm. Chỉ cần viết rằng khi ánh sáng đầu tiên lọt vào khoang đáy, một bàn tay trong ấy đã giơ lên che mắt — che mắt vì chói, và bàn tay ấy còn tự che được cho chính mình. Có người, khi được đặt nằm nghiêng trên boong và hơi thở đầu tiên đi qua được lồng ngực một cách trọn vẹn, đã khóc không thành tiếng — khóc bằng cả thân người run lên từng đợt, như thể không khí tự do cũng là một thứ phải học lại từ đầu. Tiểu Lan đi dọc hàng người vừa được đưa ra, dừng ở từng người một, gọi họ bằng đúng một chữ: người. Không ai trong khoang đáy ấy có tên trên giấy của chuyến tàu này. Trên boong này, tạm thời, họ chưa cần tên. Họ cần thở.",
      "Thứ tự đưa người ra là quyết định của Tiểu Lan, và nàng quyết bằng thứ lương tâm lạnh lùng nhất của nghề cứu người: ai không chờ được thì ra trước. Trẻ trên boong đã ở chỗ thoáng, chờ thêm một lúc không chết; người đang ngạt dưới đáy thì mỗi khoảng lặng giữa hai hơi thở đều dài hơn khoảng lặng trước. Nàng nói rõ điều ấy thành lời cho cả đoàn nghe, để không ai hiểu lầm sự chậm rãi dành cho trẻ là bỏ rơi chúng: trẻ xuống ghe sau, theo tay phu tàu, từng em một; người ngạt ra trước, ngay bây giờ. Cao Minh làm theo thứ tự nàng đặt, không sửa một chữ. Đôi tay vừa nhấc cả con tàu lên khỏi mặt nước giờ khiêng từng người một theo đúng hàng nàng đã xếp — sức mạnh ở đây không quyết định thứ tự; hơi thở của người sắp tắt mới quyết định.",
      {
        "text": "Trong lúc khoang đáy được mở, Thu Nguyệt ở lại trên boong giữ trẻ. Nàng ngồi giữa vòng trẻ con như một người nhà ngồi giữ sân: đứa nào hoảng thì nàng nắm tay, đứa nào hỏi thì nàng đáp bằng những câu thường, đứa nào khóc thì nàng để cho khóc hết cơn chứ không dỗ suông. Việc giữ người này không có lời bình nào đi kèm. Nó chỉ là một người lớn ở yên một chỗ để những đứa trẻ vừa ra khỏi quan tài có một chỗ yên mà bám vào.",
        "if": "thuNguyetFollows"
      },
      {
        "text": "Trong lúc khoang đáy được mở, trẻ trên boong do hai người phu tàu đã tự do giữ, theo đúng lời Tiểu Lan phân từ trước: ngồi vòng tròn, lưng quay vào trong, đứa lớn nắm tay đứa nhỏ. Nàng tự làm phần nước và khăn cho người dưới đáy vừa được đưa ra — chậm hơn, từng việc một, đôi tay phải tự ra lệnh cho nhau như nàng vẫn làm — nhưng thứ tự nàng đã đặt thì không rối một bước nào. Không ai trên boong này nhắc tới người vắng mặt. Việc ai người ấy làm, và việc vẫn xong.",
        "unless": "thuNguyetFollows"
      },
      "Xong việc, con tàu rỗng được hạ lại xuống nước cũng lặng lẽ như lúc nó được nhấc lên, nằm lại trên mặt sông như chưa từng rời khỏi đó — chỉ có bãi lau bị đè bẹp và những người bến đã thấy tận mắt là không trở lại như cũ được nữa. Đoàn quyết định ngay trên boong: không đuổi sâu vào tuyến trong nữa. Quay đầu về Phúc Thọ. Người được cứu cần đất, cần chỗ giấu, cần được gọi bằng tên — không cần thêm một chiến công nào nữa trong ngày hôm nay. Và khi những người dưới đáy được dìu ngồi dậy trên boong, một người trong số họ — người đàn bà vừa tỉnh lại sau cơn ngạt — nắm chặt lấy tay áo người phu tàu gần nhất, hỏi một câu duy nhất, hỏi đi hỏi lại: con của bà có trên con tàu này không."
    ],
    "dialogue": [
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài, dưới sàn còn người. Hơi thở lệch với hết thảy trên boong, yếu lắm. Ngài nghe tôi sắp việc này: người đang ngạt thì không chờ lễ nghi được. Đưa họ ra trước. Trẻ trên boong đã có chỗ thoáng, chờ một lúc không sao."
      },
      {
        "speaker": "Cao Minh",
        "text": "Đóng khéo. Phí gỗ."
      },
      {
        "speaker": "Người được cứu",
        "text": "Cô… cô ơi… con tôi… nó có trên tàu này không… nó nhỏ… nó…"
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Dạ, thưa bác, bác cứ thở trước đã. Trẻ trên tàu này đoàn tôi đếm đủ từng em một. Lát nữa tôi đọc tên từng em cho bác nghe. Bác thở đi, thưa bác."
      }
    ],
    "choices": [
      {
        "id": "suffocating_first",
        "text": "Đưa người đang ngạt dưới đáy ra trước theo triage của nàng — trẻ trên boong hoảng thêm một lúc, phu tàu phải tự giữ.",
        "next": "vt_two_paper_deaths",
        "effects": {
          "civiliansSavedDelta": 3
        },
        "route": {
          "id": "bao_ho",
          "delta": 1
        },
        "flags": {
          "vtHullHostsFound": true
        }
      },
      {
        "id": "children_ashore_first",
        "text": "Đưa trẻ lên bãi an toàn trước rồi mới quay lại khoang đáy — người dưới đáy chờ thêm trong tối, đổi lại hắn giữ đúng thứ tự nàng đặt.",
        "next": "vt_two_paper_deaths",
        "effects": {
          "lanTrustDelta": 2
        },
        "route": {
          "id": "tu_quyet",
          "delta": 1
        },
        "flags": {
          "vtHullHostsFound": true
        }
      }
    ]
  },
  "vt_two_paper_deaths": {
    "id": "vt_two_paper_deaths",
    "contentStatus": "approved",
    "stageId": "vung_tau",
    "title": "Hai cái chết trên giấy",
    "backgroundId": "river-coffin-ship",
    "location": "Trên boong tàu đã rỗng — bãi cạnh tàu",
    "companions": [
      "npc_porter",
      "le_thu_nguyet"
    ],
    "narration": [
      "Việc đối chiếu diễn ra ngay trên boong, trước khi tàu quay đầu. Giấy thông hành của chuyến tàu và cuốn sổ của tàu được đặt cạnh bản kê mảnh Sổ mà Cao Minh giữ từ Long Hải. Hắn mở bản kê ra — mở đúng hai cột đầu, cột tên và cột kế tiếp — rồi gấp phần còn lại vào trong, kín, như người ta gấp một lá thư không phải của người ngồi quanh. Không ai trong đoàn nhìn vào phần gấp ấy. Không ai hỏi tới nó. Hai cột mở ra là đủ cho việc hôm nay, và phần còn lại không thuộc về buổi đối chiếu này — việc ấy được thực thi bằng bàn tay gấp giấy của hắn, không bằng một lời giải thích nào. Chung quanh bàn đối chiếu tạm bợ ấy, boong tàu yên lặng một cách lạ thường. Phu tàu ngồi ở xa, không ai ghé lại gần — không phải vì bị cấm, mà vì người bến biết có những thứ giấy tờ hễ mình nhìn thấy là mình mang họa, và họ đã mang đủ họa cho một buổi sáng rồi. Chỉ có tiếng nước vỗ vào thân tàu và tiếng giấy sột soạt dưới ngón tay nàng là còn chuyển động.",
      "Tiểu Lan đọc. Tên trên giấy thông hành, tên trong sổ của tàu, tên ở cột đầu của bản kê — nàng đọc chậm, đối từng dòng một, ngón tay đi theo chữ như nàng vẫn làm với mọi thứ giấy tờ của đời mình. Và rồi ngón tay nàng dừng lại. Hai người đang ngồi sống ngay trên boong này — thở, uống nước, một người còn đang hỏi thăm con mình — mà trên giấy của tuyến, họ đã chết. Một người chết theo giấy của chính chuyến tàu này: tên anh ta nằm trong danh sách người đã mất trên đường, đóng triện, xong việc. Người kia chết theo một cuốn sổ cũ hơn của tàu: chết từ một chuyến trước, giấy đã vàng, mà thân người thì ngồi đây, da còn ấm. Cái kinh dị của buổi trưa ấy không nằm ở máu me nào. Nó nằm ở chỗ: quyền làm một người còn sống của hai con người này đã bị xóa đi bằng giấy, bằng triện, bằng nét chữ ngay ngắn của những người chưa từng nhìn mặt họ — và việc xóa ấy hợp lệ trong mọi cuốn sổ của tuyến.",
      "Quyết định là của Tiểu Lan, và nàng nói quyết định ấy với chính hai người được cứu trước, với đoàn sau. Giữ nguyên hai tờ giấy này. Giữ làm chứng cứ. Chưa báo về gia đình vội. Nàng nói rõ lý do bằng chữ của nghề giấy: báo tin sớm, khi tuyến còn đang nhìn bến này, là rủ tuyến quay lại xóa nốt dấu vết — người đã chết trên giấy mà bỗng có tin còn sống, thì kẻ giữ sổ chỉ cần sửa thêm một lần nữa, và lần này sửa cả gia đình vào theo. Giấy chết này, nằm trong tay đoàn, là bằng chứng rằng có một bàn tay đã giết người bằng chữ. Báo tin là việc của lúc an toàn hơn. Hai người được cứu nghe, và được nói phần của mình: một người gật đầu ngay, nói rằng nhà anh ta mà biết tin lúc này là cả nhà gặp họa, anh ta thà chết trên giấy thêm một thời gian. Người kia đau thấy rõ — anh ta nhìn về phía bờ rất lâu — rồi cũng gật, chậm hơn, như người tự tay đóng lại một cánh cửa của chính mình. Nàng nói thêm một điều nữa, nói chậm như cân từng chữ: hai tờ giấy này từ nay không nằm trong sổ của tuyến nữa. Chúng nằm trong tay nàng. Ai muốn sửa chúng, muốn đốt chúng, muốn làm cho hai người này chết thêm một lần nữa trên giấy, thì phải đi qua tay nàng trước. Đó không phải lời thề. Đó là cách một người giữ giấy nói về việc giữ giấy.",
      "Trương Bá Hòe tới nơi ở nhịp sau của buổi đối chiếu, bằng ghe của bến, sau khi tin con tàu bị chặn đã chạy về tới Phúc Thọ trước đoàn một bước. Anh đứng trên boong, nhìn hai người mà sổ sách của bến anh đã ghi là chết — nhìn như người bến nhìn một việc vượt quá nghề của mình — rồi anh quay về đúng nghề của mình mà nói việc: bến có ca gác, có sổ giao ca sạch, có gian sau của tang quán; người cần giấu thì anh giấu được, mắt trạm cần che thì anh che được bằng giờ đổi ca. Việc của bến là việc của anh. Anh nhận phần ấy không một câu thừa.",
      "Phần của Cao Minh trong buổi đối chiếu là một việc nhỏ trên giấy, và chỉ xảy ra đúng một lần. Trên tàu còn một bản sao tay của hai tờ giấy chết — bản sao do thư lại đi theo tàu chép để mang về trạm, nét chữ chép vội mà triện đóng lại cẩn thận. Khi đoàn gói giấy ra về, bản gốc của hai tờ giấy chết đi theo tay Tiểu Lan; còn bản sao trên tàu, từ lúc nào không ai để ý, đã sai đi một dấu — một dấu nhỏ trong phần ký hiệu ở góc tờ sao chép, sai vừa đủ để từ nay, hễ ai đối chiếu bản sao ấy với bản gốc trong tay đoàn, thì bản sao là bản không khớp. Hắn không nói gì về việc ấy. Hắn chỉ nói phần giới hạn của mình, nói với nàng, ngắn như mọi lần: hắn chém được sổ, không đọc được sổ — phần đọc của buổi hôm nay là của nàng từ đầu tới cuối. Đoàn gói giấy, cột lại tàu vào bãi lau, và chuẩn bị quay đầu về phía Phúc Thọ.",
      {
        "text": "Phần ký hiệu trong cuốn sổ của tàu là phần của Thu Nguyệt. Nàng đọc lối chữ thương hồ trong sổ như đọc chữ của nhà mình, và chỉ ra cho đoàn thấy điều mà chữ thường không nói: hai người chết-trên-giấy ấy, trong sổ cước, đều là những khoản không cước — không tiền, không chi, không một dòng nào ghi công nuôi dưỡng. Trên giấy, họ không chỉ đã chết. Họ đã chết mà không tốn của tuyến một đồng nào — cái chết rẻ nhất trong mọi thứ chết mà nàng từng đọc trong sổ sách của bến này.",
        "if": "thuNguyetFollows"
      },
      {
        "text": "Phần dấu trong cuốn sổ của tàu, buổi trưa nay, do Trương Bá Hòe đọc — sau khi anh tới nơi, block sổ sách của bến được đặt xuống trước mặt anh như đặt một món đồ nghề vào tay người thợ. Anh đọc phần dấu thuộc về tang quán và sổ giao ca của bến mình, chỉ ra hai khoản của hai người chết-trên-giấy đều trống phần cước: không tiền, không chi, không một dòng ghi công nuôi dưỡng. Chữ thường trong sổ vẫn do Tiểu Lan đọc từ đầu tới cuối. Còn phần thứ ba của bản kê — phần gấp kín trên tay Cao Minh — anh không nhìn vào, và không ai trong buổi đối chiếu này đọc được nó.",
        "unless": "thuNguyetFollows"
      }
    ],
    "dialogue": [
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa hai anh, tôi nói điều này với hai anh trước. Giấy này ghi hai anh đã chết. Tôi giữ nó — giữ làm chứng cứ, không phải giữ để nó thành sự thật. Chưa báo về nhà vội: tuyến còn đang nhìn bến này, báo sớm là rủ chúng xóa nốt dấu vết, mà gia đình hai anh sẽ bị ghi thêm vào sổ của chúng. Đợi tới lúc an toàn hơn, tôi tự tay lo việc báo tin. Hai anh liệu có bằng lòng không?"
      },
      {
        "speaker": "Người được cứu",
        "text": "Thưa cô… nhà tôi mà nghe tin bây giờ, chúng nó tới nhà tôi trước khi tôi về tới. Tôi… chết trên giấy thêm ít lâu cũng được. Cô giữ giấy cho tôi."
      },
      {
        "speaker": "Trương Bá Hòe",
        "text": "Việc bến thì để tôi. Ca gác đổi tay giờ nào, sổ giao ca ghi sao cho sạch, tôi thuộc hết. Người đưa về tới Phúc Thọ, tôi lo chỗ nằm không ai đếm."
      },
      {
        "speaker": "Cao Minh",
        "text": "Bổn tọa chém được sổ. Không đọc được sổ."
      }
    ],
    "choices": [
      {
        "id": "keep_papers_whole",
        "text": "Giữ cả hai tờ giấy chết nguyên vẹn, không đánh dấu gì thêm — đoàn phải chờ Văn Độ ở quãng sông sau trong thế bị động hơn.",
        "next": "vt_river_mouth_turn",
        "effects": {
          "cluesHuaGiaDelta": 2
        },
        "route": {
          "id": "tu_quyet",
          "delta": 1
        },
        "flags": {
          "vtPaperDeathsFound": true
        }
      },
      {
        "id": "let_one_word_home",
        "text": "Nhờ một phu tàu tự do mang một lời nhắn miệng không tên về phía gia đình một trong hai người — lời nhắn miệng có thể méo, và gia đình nghe tin không giấy sẽ đau theo cách khác.",
        "next": "vt_river_mouth_turn",
        "effects": {
          "lanTrustDelta": 1,
          "civiliansSavedDelta": 1
        },
        "route": {
          "id": "bao_ho",
          "delta": 1
        },
        "flags": {
          "vtPaperDeathsFound": true
        }
      }
    ]
  },
  "vt_river_mouth_turn": {
    "id": "vt_river_mouth_turn",
    "contentStatus": "approved",
    "stageId": "vung_tau",
    "title": "Quay đầu về Phúc Thọ",
    "backgroundId": "vung-tau-roadstead",
    "location": "Mặt nước cửa sông — cuối ngày 1",
    "companions": [
      "npc_servant_male",
      "le_thu_nguyet"
    ],
    "narration": [
      "Điểm quay đầu nằm ở chỗ cửa sông mở ra trước mặt đoàn như một cái miệng lớn. Phía trước là đường nước đi sâu vào trong — đường của tuyến, của những trạm truyền nhịp nối nhau tới tận Chợ Lớn, đường mà buổi sáng nay đoàn đã hăm hở đuổi theo. Phía sau là Phúc Thọ: một cái bến quan tài nhỏ, một gian sau của tang quán, một người trông bến với cuốn sổ giao ca sạch. Tiểu Lan là người nói lời quay đầu, và nàng nói nó bằng con người cụ thể, không bằng chiến lược: người vừa ngạt dưới đáy tàu cần nằm trên đất cứng qua đêm nay; trẻ con cần một chỗ ngủ mà ở đó chúng được gọi bằng tên chứ không phải bằng số cỗ; hai người chết-trên-giấy cần biến mất khỏi mặt nước này trước khi trạm bờ kịp đếm lại chuyến hàng bị mất. Không một câu nào trong lời của nàng nghe như thắng lợi đã hoàn thành. Nó nghe như lời của một người đang gánh người trên tay và biết rõ mình phải về đâu trước khi trời tối.",
      "Tạ Văn Độ xuất hiện trên đường rút bằng ghe của chính anh — xuất hiện như anh vẫn xuất hiện ở bến này từ trước khi đoàn tới: không ai gọi, không ai thuê cho chuyến này. Anh vẫn chạy đường cứu người của riêng mình từ cái đêm anh chèo chuyến không-sổ đưa ân nhân của mình ra khỏi tuyến; đường ấy không bắt đầu vì đoàn, và sẽ không kết thúc vì đoàn. Ghe của anh áp vào mạn tàu trong lúc đoàn đang chia người xuống ghe, và anh nhận ra người quen trong số người được cứu — một người đàn bà của xóm bến dưới, mất tích trong sổ của tuyến từ một chuyến trước. Anh nhìn bà một lúc, gật đầu một cái như người ta nhận lại một món nợ cũ của đời mình, rồi nhận chuyến đưa cả nhóm về Phúc Thọ. Việc nhận chuyến là quyết định của anh, nói ra bằng đúng một câu, không điều kiện, không hỏi đoàn sau đó định đi đâu.",
      "Bàn giao đường sông diễn ra ngay trên mặt nước đang đổi chiều. Văn Độ đọc nước ngược cho cả đoàn nghe bằng nghề của mình: triều đang lên, đi ngược phải ôm sát mé bờ bên phải, tránh lạch giữa vì trạm bờ có người gác giờ này; bãi lau thứ hai không được ghé — ghe lạ ghé bãi ấy là để lại dấu; qua khúc cù lao thì đi chậm, để tiếng chèo lẫn vào tiếng nước. Tiểu Lan bổ sung phần lệ bến mà nàng biết: giờ đổi ca của trạm, thói quen của phu gác cầu tàu. Cao Minh ngồi nghe hai người phàm dạy nhau và dạy hắn về cùng một con sông, bằng hai thứ tiếng khác nhau của cùng một nghề sống — và hắn nghe như nghe một thứ tiếng mình không có: trong thế giới của hắn, sông nước không có lệ, chỉ có sâu nông; ở đây, nước có giờ, có ca, có mắt người canh. Anh nói ít như mọi khi, mà mỗi câu nói ra đều là một câu đã đi qua nhiều năm nước sông: nghe như lời dặn, mà thật ra là cả một đời người chèo đò gói lại trong mấy chữ. Người nghe chỉ cần nhớ, không cần hiểu hết — hiểu hết thì phải mất từng ấy năm như anh.",
      "Chia ghe cho chuyến rút là việc của Tiểu Lan. Ai đi ghe nào, trẻ đi với ai, giấy chứng cứ đi với ai — nàng sắp từng phần một thành lời. Biên nhận ghi tên nàng vẫn nằm trong người nàng, như mọi ngày. Hai tờ giấy chết đi cùng nàng, gói riêng, không rời tay nàng. Trẻ con chia đều hai ghe để ghe nào cũng có người lớn tỉnh táo ngồi giữa. Và Bé Sáu tự chọn ghe của mình: em đi thẳng tới ghe có Tiểu Lan, ngồi xuống chỗ gần nàng nhất, không ai gọi, không ai sắp — một chọn lựa nhỏ, tự nguyện, được ghi nhận bằng cách không ai bình luận gì về nó. Em chỉ nói em ngồi đây. Vậy là em ngồi đây.",
      "Trên đường rút, một đợt nhịp dò từ trạm bờ quét qua đoàn ghe — nhẹ, thăm dò, như một bàn tay lướt qua mặt nước tìm dấu của chuyến hàng vừa mất. Cao Minh đang ngồi ở ghe sau, chén rượu trên tay; hắn đưa tay ra ngoài mạn ghe, gạt nhẹ một cái như gạt một cành cây vướng đường, và đợt nhịp ấy gãy ngay giữa chừng, tan vào tiếng nước thường của buổi chiều. Không ai trên các ghe kịp nhận ra có gì vừa xảy ra, ngoài Văn Độ — anh nhìn hắn một khắc, rồi quay lại mái chèo của mình. Chuyến rút này, nhờ vậy, là chuyến của Văn Độ: đi bằng nước của anh, dấu của anh, giờ của anh — không phải bằng nhịp của tuyến.",
      {
        "text": "Thu Nguyệt đi ghe sau cùng với trẻ, như nàng đã sắp với Tiểu Lan từ lúc chia ghe. Nàng giữ danh sách người bằng miệng — đếm từng em, từng người lớn, đọc lại thầm cho chính mình nghe sau mỗi quãng nước — và nhất định không ghi một chữ nào vào bất cứ thứ giấy nào: danh sách người được cứu không được phép thành một trang sổ thứ hai của tuyến. Đứa trẻ nào ngủ quên trên ghe, nàng lấy áo của mình đắp thêm, rồi lại đếm từ đầu, như người ta giữ một món đồ quý bằng cách không rời mắt khỏi nó.",
        "if": "thuNguyetFollows"
      },
      {
        "text": "Phần dấu của chuyến rút, hôm nay, do Văn Độ đọc thay: dấu chuyến khắc trên thân cây ở các khúc quẹo, dấu nước thay đổi ở miệng các lạch nhỏ, dấu của trạm bờ để lại trên bãi bồi — anh đọc chúng thành tiếng cho đoàn nghe bằng thứ chữ không nằm trên giấy nào của tuyến. Việc đếm người chia làm hai đầu: Tiểu Lan tự đếm phần ghe của mình, đọc thầm từng mặt một; còn đầu Phúc Thọ, Trương Bá Hòe đã chờ sẵn ở cầu tàu phụ để đếm tiếp khi ghe cập bến. Không ai nhắc tới người vắng mặt trên mặt nước này. Đường rút có đủ người của nó.",
        "unless": "thuNguyetFollows"
      },
      "Chuyến rút bắt đầu ngược nước khi nắng đã xế hẳn qua bãi lau. Đoàn đi, và sau lưng họ, cửa sông vẫn mở ra như cũ: một con tàu khác của tuyến vừa từ trong đi ra, đúng lịch, phu chèo đều theo nhịp của nó, giấy tờ đầy đủ — nó đi ngang qua đoàn ghe ở một khoảng cách đủ xa để hai bên chỉ là những cái bóng trên mặt nước. Không ai trên ghe của đoàn nói một lời nào về nó. Nó là lời nhắc bằng hình ảnh, không cần lời bình: buổi sáng nay đoàn chặn được một chuyến hàng; con đường nước này vẫn còn nguyên chủ của nó. Văn Độ, ở ghe đầu, nói câu cuối cùng của buổi chiều, nói như nói về thời tiết của đời mình: đường này anh chạy từ trước khi đoàn tới bến này, và anh còn chạy sau khi đoàn đi. Ghe lướt vào bóng lau, hướng về Phúc Thọ."
    ],
    "dialogue": [
      {
        "speaker": "Tạ Văn Độ",
        "text": "Anh Hòe nhắn ghe tôi ở bãi dưới. Chuyến này tôi nhận. Người của bến này, tôi đưa về đất của bến này. Mấy người khỏi hỏi giá — đường này không tính cước."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Dạ, thưa anh, đoàn tôi cảm ơn anh một câu cho phải lễ — rồi thôi, mình nói việc. Triều lên thì đi mé nào cho kín, ghe chở trẻ đi trước hay đi sau, anh cứ sắp. Đường nước là nghề của anh."
      },
      {
        "speaker": "Tạ Văn Độ",
        "text": "Đi mé phải, ôm bờ. Bãi lau thứ hai đừng ghé, ghe lạ ghé là để dấu. Tới cù lao thì chèo chậm lại, để tiếng chèo lẫn tiếng nước."
      },
      {
        "speaker": "Cao Minh",
        "text": "Đường của ngươi, ngươi cứ chạy. Bổn tọa ngồi ghe người khác thì biết phận khách: không chen tay vào mái chèo của chủ ghe."
      },
      {
        "speaker": "Bé Sáu",
        "text": "Con ngồi ghe này. Ngồi gần cô."
      }
    ],
    "choices": [
      {
        "id": "split_convoys",
        "text": "Chia hai ghe đi hai lạch cách nhau một quãng — đoàn tách tầm mắt, trẻ hoảng khi không thấy ghe kia, đổi lại nàng được nghỉ ở ghe sau.",
        "next": "vt_wharf_shelter",
        "effects": {
          "lanHealthDelta": 2
        },
        "route": {
          "id": "bao_ho",
          "delta": 1
        }
      },
      {
        "id": "single_convoy",
        "text": "Đi một đoàn ghe liền nhau theo đúng dấu của Văn Độ — một đoàn ghe lạ ngược nước dễ bị trạm bờ đếm, đổi lại nhìn rõ dấu trạm dọc đường.",
        "next": "vt_wharf_shelter",
        "effects": {
          "cluesHuaGiaDelta": 1
        },
        "route": {
          "id": "tu_quyet",
          "delta": 1
        }
      }
    ]
  },
  "vt_wharf_shelter": {
    "id": "vt_wharf_shelter",
    "contentStatus": "approved",
    "stageId": "vung_tau",
    "title": "Chỗ giấu ở bến",
    "backgroundId": "coffin-wharf",
    "location": "Gian sau Phúc Thọ Tang Quán — đêm 1 sang rạng ngày 2",
    "companions": [
      "npc_porter",
      "le_thu_nguyet"
    ],
    "narration": [
      "Trương Bá Hòe tiếp người vào gian sau của tang quán bằng chính kỷ luật bến của anh. Không có cảnh tượng chen lấn hay thì thầm hoảng loạn nào: ca gác đổi tay đúng giờ, sổ giao ca ghi đúng những dòng cần ghi — ghe cá về muộn, hàng thường chờ sáng — và người được cứu đi vào theo lối sau, từng nhóm nhỏ, vào đúng những quãng mà sân trước không có mắt người. So với vách bao than chật hẹp trong kho than — nơi một người bạn của anh đã nằm một mình sau đống bao, ăn cơm chia đôi — chỗ giấu lần này là một chỗ giấu có tổ chức: có ca, có sổ, có người thay nhau thức. Một người giấu sau vách bao là tình bạn. Một chuyến hàng người được giấu sau kỷ luật của cả một ca bến, là một thứ khác hẳn: là một cái bến đã quyết định, trong im lặng, rằng nó không giao người ra nữa. Gian sau không rộng, mùi gỗ quan tài mới và mùi chiếu cũ quyện vào nhau; vậy mà trong đêm ấy, nó là nơi tử tế nhất mà những con người này được nằm xuống kể từ khi họ bị đặt vào gỗ.",
      "Xếp chỗ trong gian sau diễn ra bằng những việc nhỏ nhất: ai nằm gần cửa cho thoáng, ai cần nước và thuốc thường trước, trẻ con nằm phía trong cùng, xa tiếng ồn của sân. Bé Sáu được xếp chỗ theo ý em chọn. Tiểu Lan hỏi em đúng một câu — em muốn nằm góc gần cửa hay góc trong — và khi em chỉ tay về góc gần cửa, chỗ của em được dọn ở đó, không ai hỏi thêm vì sao, không ai tách em ra một chỗ riêng để hỏi cho rõ chuyện trên tàu. Việc ấy được khóa lại bằng chính sự bình thường của nó: một đứa trẻ chọn chỗ ngủ của mình, và người lớn làm theo, như ở bất cứ nhà nào.",
      "Rồi tới việc gọi tên. Đó là sáng kiến của Tiểu Lan, và nàng tổ chức nó như tổ chức một nghi thức không có trong sách vở nào: từng người được cứu, nàng gọi tên của họ thành tiếng — gọi chậm, rõ, trang trọng như người ta trả lại một món đồ quý cho chủ của nó — và từng người đáp lại bằng chính tên mình. Tên vang lên trong gian kho hẹp, đi qua từng gương mặt mệt mỏi, và không được ghi vào bất cứ cuốn sổ nào của tuyến. Không bút, không giấy, không triện. Chỉ miệng người gọi và miệng người đáp. Hai người đã chết trên giấy nghe tên mình được gọi như người sống — gọi giữa những người sống, trong một gian kho của nơi lo việc chết — và đáp lại, ban đầu còn ngập ngừng như sợ cái tên ấy không còn là của mình, rồi đáp to hơn ở lượt gọi thứ hai.",
      "Cao Minh làm phần của hắn cho đêm gọi tên ấy từ ngưỡng cửa gian kho, nơi hắn ngồi với chén rượu của mình. Hắn làm một việc tùy tiện và lặng lẽ: từ lúc việc gọi tên bắt đầu, mọi tiếng động trong gian kho này không lọt qua vách được nữa. Sân trước vẫn nghe tiếng của sân trước — tiếng phu trở mình, tiếng chó sủa xa — còn gian sau, với từng ấy con người và từng ấy cái tên được gọi thành tiếng, yên lặng trong tai trạm gác ngoài sân như một gian kho trống chứa quan tài thường. Hắn không nói mình đã làm gì. Hắn chỉ ngồi ở ngưỡng cửa, ở đúng chỗ mà một người gác cửa vẫn ngồi, và khi việc gọi tên xong, hắn đòi phần của mình bằng một câu đùa khô hướng thẳng lên đầu tang quán: nơi này thu tiền của người chết quen tay đến mức người sống bước vào cũng phải tính cách giấu tiếng — may mà đêm nay phần giấu ấy không ai ghi vào sổ cước của chúng.",
      "Một người được cứu — người đàn ông đã chết trên giấy theo sổ cũ của tàu — cố nói lời cảm ơn với hắn, nói chưa hết câu, lắp bắp như người không biết phải cảm ơn một việc lớn như vậy bằng thứ ngôn ngữ nào. Cao Minh đã đứng dậy quay sang chuyện khác trước khi câu cảm ơn kịp nói hết: hắn hỏi Bá Hòe về ca gác kế tiếp, bằng giọng của người hỏi giờ giấc làm việc, và cánh cửa của lời cảm ơn khép lại nhẹ nhàng, không ai phải mang nợ ai bằng miệng trong đêm nay.",
      {
        "text": "Thu Nguyệt phụ Bá Hòe phần giao ca và giữ trẻ trong lúc gọi tên. Nàng đứng ở đầu dãy chỗ nằm với sổ giao ca của ca đêm trên tay — đọc giờ, đọc tên ca gác theo đúng lệ của bến, bằng giọng của người nhà làm việc nhà — để bất cứ ai ngoài sân nghe thấy cũng chỉ nghe một ca bến thường. Đồng thời tay nàng không rời vòng trẻ: đứa nào giật mình khi nghe tên mình được gọi lạ tai, nàng đã có mặt ở đó trước khi tiếng khóc kịp thành tiếng. Việc của nàng đêm nay là làm cho một đêm bất thường nghe như một đêm thường, từ cả hai phía của vách kho.",
        "if": "thuNguyetFollows"
      },
      {
        "text": "Phần sổ giao ca và dấu của bến, đêm nay, một mình Trương Bá Hòe gánh — và ở nhánh việc này, nghề của anh hiện ra rõ hơn cả: anh đọc giờ đổi ca thành tiếng cho ca gác nghe, gạch sổ bằng que tính, đóng dấu của tang quán lên trang đêm như mọi đêm, từng động tác đều là động tác của một người đã giữ cái bến này bằng giấy sạch nhiều năm. Phần nước và khăn cho người được cứu do Tiểu Lan tự làm, chậm hơn, từng chuyến đi nhỏ giữa các dãy chỗ nằm — nàng làm như một người đang tiếp khách trong nhà mình, không phải như một người thiếu tay chân. Đêm vẫn xong việc của nó, theo đúng thứ tự của nó. Ngoài sân, tiếng phu ca đêm thay nhau ho khan, tiếng chó của xóm dưới sủa một hồi rồi yên — mọi âm thanh của một đêm bến thường vẫn chạy đều ở phía ngoài vách, che cho sự yên lặng không tự nhiên ở phía trong vách này, như hai lớp áo mặc chồng lên nhau.",
        "unless": "thuNguyetFollows"
      },
      "Đêm xuống yên dần. Người được cứu ngủ đợt đầu tiên trên đất cứng — giấc ngủ của những người không còn nằm trong gỗ nữa. Bá Hòe chốt ca gác cuối, gác ghế đẩu của mình ở đầu gian sau, que tính đặt trên đùi, mắt mở. Ngoài sân, tang quán trở lại yên tĩnh của một nơi lo việc chết: quan tài xếp dãy, đèn dầu cháy đều, không một tiếng động nào từ gian sau lọt ra. Chỉ còn một chi tiết giấy lặng lẽ gieo xuống đêm ấy: từ buổi chiều, trước cả khi đoàn quay về, thư lại của tuyến đã ghé bến hỏi một câu rất lịch sự về chi phí phát sinh đêm qua. Món nợ, hóa ra, đang trên đường tới — nhanh hơn cả lời cảm ơn. Trong gian sau, Bé Sáu ngủ say, bàn tay nhỏ mở ra trên chiếu, và lần đầu tiên kể từ khi được mở nắp, tay em không gõ nữa."
    ],
    "dialogue": [
      {
        "speaker": "Trương Bá Hòe",
        "text": "Người vào theo lối sau, từng tốp một, theo giờ tôi gọi. Sổ giao ca đêm nay ghi như mọi đêm: ghe cá về muộn, hàng thường chờ sáng. Ai hỏi, cứ để tôi trả lời bằng sổ."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Bé Sáu, em muốn nằm ở đâu? Góc gần cửa, hay góc trong gần các bạn? Em chỉ, tôi dọn chỗ cho em ở đó."
      },
      {
        "speaker": "Bé Sáu",
        "text": "Con nằm gần cửa. Gần cửa… nghe được tiếng sân. Con biết mình ở đâu."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Bây giờ tôi gọi tên từng người. Ai nghe tên mình thì đáp lại — đáp bằng chính tên của mình, to vừa đủ cho người trong gian này nghe. Tên của quý vị, từ đêm nay, được nói ra ở đây. Không ghi vào sổ nào hết."
      },
      {
        "speaker": "Cao Minh",
        "text": "Tang quán này thu tiền người chết đã quen tay. Đêm nay có người sống ngủ nhờ trong kho của chúng, mà phần giấu tiếng lại không nằm trong cước của chúng. Thiệt thòi cho sổ sách quá."
      }
    ],
    "choices": [
      {
        "id": "names_aloud_full",
        "text": "Gọi đủ tên mọi người ngay đêm đầu, kể cả hai người chết-trên-giấy — người trong cuộc đều nghe và đều nhớ, tin miệng đi nhanh.",
        "next": "vt_rescue_debt_first",
        "effects": {
          "civiliansSavedDelta": 2
        },
        "route": {
          "id": "tu_quyet",
          "delta": 1
        }
      },
      {
        "id": "names_in_turns",
        "text": "Gọi tên theo từng nhóm nhỏ qua đêm, giữ gian kho yên như mọi đêm — người được cứu phải chờ tới lượt mình trong im lặng thêm một lúc.",
        "next": "vt_rescue_debt_first",
        "effects": {
          "lanTrustDelta": 2
        },
        "route": {
          "id": "bao_ho",
          "delta": 1
        }
      }
    ]
  },
  "vt_rescue_debt_first": {
    "id": "vt_rescue_debt_first",
    "contentStatus": "approved",
    "stageId": "vung_tau",
    "title": "Tiền cứu người bị ghi nợ — lần 1",
    "backgroundId": "coffin-wharf",
    "location": "Gian sau tang quán / chòi bến Phúc Thọ — ngày 2",
    "companions": [
      "npc_servant_male",
      "le_thu_nguyet"
    ],
    "narration": [
      "Giấy của tuyến tới nhanh hơn lời cảm ơn. Sáng ngày thứ hai, khi gian sau của tang quán còn chưa kịp ăn bữa sáng cho đàng hoàng, thư lại của tuyến đã có mặt ở chòi bến — một người đàn ông vô danh, ăn mặc sạch sẽ, nói năng lịch sự đúng lệ, mang theo một tờ ghi chi gấp ngay ngắn. Tờ giấy kê tiền của đêm qua: tiền ghe đưa người về bến, tiền cơm cho người được cứu, tiền thuốc thường, tiền dầu đèn gian sau. Mọi khoản đều nhỏ, đều ngay ngắn, và đều có thật — ghe thật, cơm thật, thuốc thật, người thật đã ăn đã uống. Chỉ có một thứ trên tờ giấy là không thật theo cách của nó: tên người nợ. Tên ấy được đặt vào đầu tờ giấy như một việc đã rồi — Hứa Tiểu Lan — đúng cơ chế của tờ biên nhận ở chỗ trọ: ai ăn ở trong vùng này, người ấy được ghi nợ dưới tên nàng, không cần hỏi nàng có đồng ý hay không.",
      "Tiểu Lan đọc tờ giấy thành tiếng, trước mặt đoàn và Bá Hòe, trong gian sau còn vương mùi cháo sáng. Nàng đọc bằng nghề đọc của mình: chậm, rõ, bóc từng khoản bằng chính chữ của tờ giấy. Khoản này là tiền ghe — ghe của Văn Độ, mà Văn Độ đã nói rõ chuyến ấy không tính cước; vậy mà trên giấy, cước vẫn nằm đây, tính đủ. Khoản này là tiền cơm — cơm của tang quán chia cho người được cứu trong đêm, cơm có thật. Khoản này là tiền thuốc — thuốc thường của bến, có thật. Nàng phân từng khoản ra làm hai loại trước mặt mọi người: tiền đã thật sự chi, và tiền bị đặt tên người nợ lên trên. Việc chi là thật. Việc nợ là một cái khung chụp xuống sau. Cao Minh ngồi ngoài việc đọc, ở chỗ của hắn mọi khi: hắn không ghé mắt vào tờ giấy. Sổ và chữ, ở bến này cũng như ở mọi nơi đoàn đã đi qua, không phải phần của hắn.",
      "Rồi tới khoảnh khắc mà cả gian sau nín thở theo. Thư lại đưa bút, đưa chỗ ký, bằng động tác của người đã làm việc này trăm lần và trăm lần đều xong việc: người ta hoặc ký vì sợ, hoặc ký vì muốn cho qua chuyện. Tiểu Lan không ký. Nàng gấp tờ giấy lại — gấp ngay ngắn, đúng nếp — và giữ nó trong tay mình, nói rõ từng chữ: tờ giấy này ghi tên nàng, vậy nó ở trong tay nàng. Ở trong tay kẻ ghi, nó là một món nợ chờ hoàn trả. Ở trong tay nàng, nó là chứng cứ đầu tiên của vòng ghi nợ này — chứng cứ rằng ở bến này, cứu người xong là bị tính tiền, và tiền ấy được ghi dưới tên của người vừa được cứu giúp. Ký vào, nó mới thành xiềng. Nàng không ký. Thư lại lúng túng thấy rõ: trong mọi tiền lệ của nghề mình, chưa có ai từ chối ký mà vẫn giữ tờ giấy lại, và giữ bằng cái giọng điềm tĩnh của một người đang cất một món đồ của mình vào đúng chỗ của nó.",
      "Cao Minh, từ lúc tờ giấy xuất hiện, đã định xử lý nó theo thói quen của hắn đối với mọi thứ giấy vô giá trị: cho nó biến mất. Hắn vừa đưa tay ra thì Tiểu Lan ngăn lại — ngăn bằng một câu, không bằng tay. Hủy tờ giấy này là mất chứng cứ, thưa ngài; một tờ giấy bị hủy thì ai cũng nói được rằng nó chưa từng có. Hắn dừng tay thật. Hắn nhìn nàng một lúc — cái nhìn của người vừa được dạy thêm một điều trong thứ tiếng mình đang học: chứng cứ và xiềng xích khác nhau ở chỗ ai đang giữ giấy. Rồi hắn làm một việc khác thay thế, nhỏ và đúng một lần: bản sao lưu mà thư lại mang theo trong cặp — bản sao của tuyến, triện đóng đỏ ở góc — từ lúc nào đó trong buổi sáng ấy đã mờ đi đúng một nét triện. Mờ nhẹ thôi, như mực gặp ẩm. Nhưng từ nay, bản sao của tuyến không còn là bản đúng duy nhất trên đời này nữa; bản đúng, nguyên vẹn từng nét, là bản đang nằm trong tay nàng. Tờ chứng cứ không mất một sợi tóc nào.",
      {
        "text": "Phần ký hiệu ở góc tờ ghi nợ là phần của Thu Nguyệt. Nàng cúi xuống nhìn dấu cước nhỏ đóng ở góc dưới tờ giấy và nhận ra nó ngay: cùng một lối ký hiệu thương hồ với sổ cước mà nàng đã đọc ở chòi bến, cùng một tay sổ, cùng một hệ chữ tắt và dấu ngắt. Nàng nói điều ấy thành tiếng cho đoàn nghe — tờ giấy này không phải việc lẻ của một thư lại rảnh tay; nó ra từ cùng một cuốn sổ, cùng một vòng tiền, với mọi khoản cước đoàn đã thấy từ ngày đầu ở bến này.",
        "if": "thuNguyetFollows"
      },
      {
        "text": "Phần dấu trên tờ ghi nợ, sáng nay, do Trương Bá Hòe nhận ra. Anh nhìn con triện và dấu đóng ở góc tờ giấy mà lặng đi một nhịp: đó là dấu thuộc về sổ giao ca của chính bến anh — nét đóng triện của tang quán này, anh đã nhìn nó mười năm. Anh nói điều ấy bằng giọng của người vừa thấy một món đồ của nhà mình nằm trong tay người khác: tờ giấy này đi qua bến của anh, dùng dấu của bến anh, mà anh — người giữ sổ của bến — chưa từng thấy nó trước sáng nay. Chữ thường trên tờ giấy vẫn do Tiểu Lan đọc từ đầu tới cuối, như mọi lần.",
        "unless": "thuNguyetFollows"
      },
      "Thư lại rút lui khỏi chòi bến với bản sao mờ một nét triện trong cặp và không một chữ ký nào trên tay — rút lui lịch sự như lúc tới, để về báo lại với người cầm sổ ở phía trên. Nhưng điều quan trọng hơn của buổi sáng ấy xảy ra ngay tại sân, trước mắt đoàn: phu bến đã chứng kiến hết. Họ chứng kiến một người không ký tờ nợ của tuyến mà vẫn đứng yên ở bến này, không ai làm gì được nàng, và tờ giấy thì nằm trong tay nàng chứ không nằm trong sổ của chúng. Tin ấy không cần ai loan. Nó đi vào ca gác, vào bát cơm hàng, vào tiếng thì thầm của những người khiêng quan tài — như mọi tin thật sự quan trọng ở một cái bến đều đi. Cuối buổi, Tiểu Lan cất tờ nợ thứ nhất vào trong người, ngay bên cạnh tờ biên nhận ghi tên nàng ở chỗ trọ. Hai tờ giấy nằm cạnh nhau: một tờ ghi giá ăn ở của chính nàng, một tờ ghi giá của việc cứu người. Cả hai đều là chứng cứ. Cả hai đều là của nàng."
    ],
    "dialogue": [
      {
        "speaker": "Thư lại của tuyến",
        "text": "Thưa cô, đây là bản ghi chi của đêm qua: tiền ghe, tiền cơm, tiền thuốc cho số người bên tang quán tiếp nhận. Mọi khoản đều có chứng từ của bến. Cô chỉ cần ký nhận ở đây, việc hoàn trả tính sau, theo lệ của phòng chi."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ông, tôi đọc cho ông nghe lại tờ giấy của ông. Khoản ghe: ghe ấy chủ ghe đã nói không tính cước — trên giấy ông, cước vẫn đủ. Khoản cơm, khoản thuốc: chi là thật. Nhưng chi thật không tự nó thành nợ của tôi. Ai đồng ý vay, thưa ông? Giấy này, tôi ký vào thì nó thành xiềng. Tôi không ký. Nó ghi tên tôi, thì tôi giữ nó — làm chứng cứ."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Đừng, thưa ngài. Hủy là mất chứng cứ. Một tờ giấy chưa từng tồn tại thì ai cũng cãi được. Giấy này phải còn — còn nguyên — trong tay tôi."
      },
      {
        "speaker": "Cao Minh",
        "text": "Giấy của nàng. Nàng giữ."
      },
      {
        "speaker": "Cao Minh",
        "text": "Tuyến của các ngươi có một thói quen lạ: người ta vừa được kéo lên khỏi nước, chưa kịp khô áo, chúng đã ghi xong tiền vớt. Nhanh hơn cả người nhà của họ."
      }
    ],
    "choices": [
      {
        "id": "keep_and_counter_read",
        "text": "Giữ giấy và đọc đối chiếu ngay trước mặt thư lại từng khoản — tuyến biết ngay đoàn có người đọc được chữ của chúng.",
        "next": "vt_lid_sign_again",
        "effects": {
          "cluesHuaGiaDelta": 2
        },
        "route": {
          "id": "tu_quyet",
          "delta": 1
        },
        "flags": {
          "vtRescueDebtKept": true
        }
      },
      {
        "id": "keep_and_defer",
        "text": "Giữ giấy, chỉ nói để xem lại và tiễn thư lại ra cửa yên ổn — tuyến có thêm một đêm để chuẩn bị đợt ghi nợ thứ hai nhắm vào người được cứu.",
        "next": "vt_lid_sign_again",
        "effects": {
          "lanTrustDelta": 2
        },
        "route": {
          "id": "bao_ho",
          "delta": 1
        },
        "flags": {
          "vtRescueDebtKept": true
        }
      }
    ]
  },
  "vt_lid_sign_again": {
    "id": "vt_lid_sign_again",
    "contentStatus": "approved",
    "stageId": "vung_tau",
    "title": "Nhìn lại dấu trên nắp",
    "backgroundId": "coffin-wharf",
    "location": "Sân phơi nắp quan tài sau chòi bến Phúc Thọ — ngày 2",
    "companions": [
      "npc_porter",
      "le_thu_nguyet"
    ],
    "narration": [
      "Chiều ngày thứ hai, đoàn quay lại sân phơi nắp quan tài sau chòi bến. Hàng nắp cũ vẫn nằm phơi ở chỗ cũ, sơn bong từng mảng dưới nắng xế, giữa mùi gỗ ẩm và mùi nhựa đường hăng hắc của bến. Tiểu Lan đi thẳng tới một chiếc nắp ở gần cuối hàng, không cần tìm, không cần đếm — tay nàng biết đường đi của nó trước cả mắt nàng. Ở Long Hải và ở bến này, đoàn đã học được một điều: có những thứ người ta không tìm bằng mắt. Người ta tìm bằng trí nhớ của đầu ngón tay, bằng những năm tháng sống trong bóng tối mà mọi tin tức đều tới qua da thịt và âm thanh.",
      "Chiếc nắp ấy vẫn nằm đúng chỗ cũ. Dưới mép sơn ở một đầu nắp, khắc rất nông và rất khéo, là ký hiệu mà Tiểu Lan đã chạm tới một lần trong khoảnh khắc ở chòi bến — ký hiệu nàng biết nó ở đâu trên tuyến này, và đã cố ý không động vào. Chiều nay nàng chạm lại vào nó một lần nữa, đầu ngón tay đi chậm qua từng nét khắc nông. Chỉ vậy thôi. Nàng không cạy thêm một mảng sơn nào. Không đọc thêm một nét nào. Không ai trong đoàn ghé mắt hỏi nó viết gì, ở đâu trên tuyến, hay ai đang giữ phần còn lại của nó — và bản thân nàng cũng không nói. Nó vẫn chỉ là một biển chỉ đường nằm yên dưới lớp sơn của một chiếc nắp quan tài rỗng, không hơn.",
      {
        "text": "Thu Nguyệt đi dọc hàng nắp một lượt, cúi xuống từng chiếc như lần đầu nàng đi trong chòi bến: nàng kiểm lại các ký hiệu cước khắc và đóng trên mép các nắp khác, đối chiếu trong đầu với những chuyến hàng nàng thuộc. Đi hết hàng, nàng quay lại nói một điều duy nhất, nói chắc như đóng một con dấu: ký hiệu lạ dưới mép sơn chiếc nắp này không thuộc chuyến nào của bến, không khớp một lối cước nào nàng biết. Nó còn nguyên, và nó vẫn không phải của sổ cước. Việc nhận ra nó, từ đầu tới cuối, vẫn là việc của đầu ngón tay cô chủ nàng.",
        "if": "thuNguyetFollows"
      },
      {
        "text": "Việc xác nhận chiếc nắp chưa hề bị động vào, chiều nay, là việc của Trương Bá Hòe. Anh đi dọc hàng nắp với que tính trong tay, chỉ cho Tiểu Lan từng lần sân này sơn lại nắp cũ trong mấy tháng qua: nắp nào đã dời chỗ, nắp nào đã lật mặt, anh thuộc hết. Riêng chiếc nắp này, anh nói, nó nằm nguyên một chỗ từ trước ngày đoàn tới, sơn cũ còn nguyên, không một bàn tay nào của bến dám dời nó vì không ai biết nó là nắp chờ chuyến nào. Việc nhận ra ký hiệu dưới mép sơn vẫn là việc của đầu ngón tay nàng, như mọi lần.",
        "unless": "thuNguyetFollows"
      },
      "Nhưng bối cảnh đã khác lần đầu rất xa. Lần đầu nàng chạm vào ký hiệu này, đoàn mới chỉ biết tuyến chở quan tài và ghi nợ. Chiều nay, đoàn đã đứng trong khoang một con tàu chở trẻ con, đã nghe tiếng gõ không đi theo nhịp chèo, đã mở những nắp cỗ có lỗ thở và đếm từng đứa trẻ còn sống bước ra. Ký hiệu dưới mép sơn vì thế nặng hơn lần đầu nhiều — nặng như mọi dấu vết đều nặng lên khi người ta biết sau nó là những con người cụ thể. Tiểu Lan rút tay về và nói rõ quyết định của mình, nói như người đóng một trang sổ của chính mình: chưa động vào. Không phải hôm nay. Không phải ở bến này.",
      "Lý do nàng nói ra không nằm ở sự sợ hãi, mà nằm ở con người. Người đã khắc biển chỉ đường này đã khuất từ lâu; nhưng đường trung gian mà biển ấy giữ cho còn sống thì vẫn còn người đang đi trên đó, đang giấu người, đang chèo những chuyến không sổ trong đêm. Lấy ký hiệu này bây giờ — cạy sơn, đọc hết, đi theo nó — là kéo ánh mắt của tuyến xuống đúng con đường ấy, trong lúc người trên đường chưa kịp rời đi. Một mảnh giấy không đáng giá bằng một con đường còn sống. Cao Minh nghe hết, hỏi đúng một câu, rồi gật đầu khi nghe câu trả lời — cái gật đầu của người tôn trọng một quyết định không phải của mình, trên một đồ vật không phải của mình, đúng như lần đầu ở chòi bến hắn đã để yên cho tay nàng quyết.",
      "Phần việc còn lại của buổi chiều là việc sổ, và nó khô khan đúng như việc sổ phải thế. Đoàn đặt cạnh nhau những thứ giấy đã thu được: bản kê mảnh Sổ mà Cao Minh giữ — hắn mở đúng hai cột đầu, phần còn lại gấp kín như mọi lần, không ai nhìn vào, không ai hỏi tới; sổ của con tàu bị chặn, với giấy thông hành đóng triện mới; và tờ ghi nợ thứ nhất mà Tiểu Lan giữ làm chứng cứ. Từng tên trong hai cái chết trên giấy được đối chiếu qua ba lớp giấy ấy: tên trong giấy chuyến, tên trong sổ tàu, tên trong hai cột đầu của bản kê — khớp nhau đến lạnh người. Bộ chứng cứ từ nay đi cùng nhau như một hồ sơ: ai chết trên giấy, ai ghi món nợ cho việc cứu người, và con tàu nào đã chở họ đi như hàng. Bá Hòe nhìn bộ hồ sơ được gói lại mà nói một câu về người chèo đò trước của bến này — người chỉ còn tồn tại qua mấy lời dặn mà anh thuộc lòng: coi chừng nắp nào sơn mới mà gỗ cũ. Nói xong anh lại quay về que tính và sổ giao ca của mình, như nói về thời tiết.",
      "Bộ hồ sơ được gói lại ngay tại sân, gói bằng giấy dầu của bến cho khỏi ẩm nước sông, buộc bằng sợi lạt mà Bá Hòe tự tay thắt nút — nút thắt của người quen gói hàng đi ghe, kéo một đầu là mở, sai tay là siết chặt thêm. Tiểu Lan kiểm lại từng món trước khi nút thắt siết xuống: đủ, khớp, và không thừa một tờ nào của kẻ khác. Từ buổi chiều này, hai cái chết trên giấy không còn là hai tờ giấy rời rạc nằm trong tay hai phía đối nhau nữa. Chúng là một bộ hồ sơ có đầu có cuối, mang theo được, đối chiếu được, và một ngày nào đó đặt xuống được trước mặt bất cứ ai dám nói rằng những người ấy chưa từng sống.",
      "Trước khi rời sân, Cao Minh làm một việc nhỏ của hắn, tiện tay và đúng một lần. Hắn kéo tấm bạt dầu cũ vẫn phơi ở góc sân phủ lên hàng nắp, rồi tiện chân gạt mấy chiếc sọt rỗng và thúng tre xếp chồng lên trên, như người phu nào vừa dọn sân qua loa lúc xế chiều. Hàng nắp cũ, từ khoảnh khắc ấy, chỉ còn là một đống đồ cũ phủ bạt giữa một sân đầy đồ cũ — thứ mà người lạ đi ngang sẽ liếc qua rồi quên ngay vì nó chẳng có gì đáng nhìn. Hắn không nói đó là việc gì. Tiểu Lan cũng không hỏi. Đoàn rời sân khi nắng đã xế hẳn, hướng về chòi kiểm ở đầu bến: từ sáng, người bến đã rỉ tai nhau rằng kiểm tra cảng sắp quay lại sau vụ chặn tàu."
    ],
    "dialogue": [
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài, tôi chạm lại một lần để biết nó còn nguyên — chỉ vậy thôi. Biết mà không động vào cũng là một cách can thiệp, thưa ngài. Đường này còn người sống đang đi. Tôi không lấy một mảnh giấy bằng giá của họ."
      },
      {
        "speaker": "Cao Minh",
        "text": "Lấy được không?"
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Dạ, lấy được. Và chính vì lấy được, tôi mới nói không. Ngài giữ yên tay cho tôi một lần này nữa, như ở chòi bến."
      },
      {
        "speaker": "Cao Minh",
        "text": "Giấy của nàng, dấu của nàng. Bổn tọa chỉ ghét kẻ giữ sổ nào nỡ khắc biển chỉ đường xuống một nắp quan tài. Kẻ sống mà dùng đồ của người chết làm bảng hiệu — bủn xỉn đến thế là cùng."
      },
      {
        "speaker": "Trương Bá Hòe",
        "text": "Thưa cô, người chèo đò trước tôi, ổng chỉ còn mấy lời dặn thôi. Ổng dặn: nắp nào sơn mới mà gỗ cũ, coi chừng. Tôi thuộc câu đó mười năm nay, bữa nay mới hiểu hết."
      }
    ],
    "choices": [
      {
        "id": "seal_evidence_set",
        "text": "Khóa bộ chứng cứ ngay chiều nay, gói riêng và giao Bá Hòe giữ một phần tại bến — đặt một phần chứng cứ vào tay người bến là đặt cả rủi ro lên anh.",
        "next": "vt_port_inspection",
        "effects": {
          "lanTrustDelta": 2
        },
        "route": {
          "id": "bao_ho",
          "delta": 1
        }
      },
      {
        "id": "carry_evidence_whole",
        "text": "Mang trọn bộ chứng cứ theo người Tiểu Lan qua buổi kiểm tra cảng — đoàn qua kiểm tra với giấy chết và giấy nợ trên người nàng.",
        "next": "vt_port_inspection",
        "effects": {
          "cluesHuaGiaDelta": 1
        },
        "route": {
          "id": "tu_quyet",
          "delta": 1
        }
      }
    ]
  },
  "vt_port_inspection": {
    "id": "vt_port_inspection",
    "contentStatus": "approved",
    "stageId": "vung_tau",
    "title": "Kiểm tra cảng",
    "backgroundId": "coffin-wharf",
    "location": "Sân bến và chòi kiểm Phúc Thọ — ngày 2",
    "companions": [
      "npc_official",
      "npc_porter"
    ],
    "narration": [
      "Kiểm tra cảng quay lại bến vào buổi chiều, và nó quay lại bằng giấy trước khi bằng người. Một hồi còi ngắn ở đầu bến: phu đang khiêng hàng dừng tay giữa chừng, quan tài trên sân được lệnh xếp lại thành hàng cho dễ đếm, sổ sách của tang quán được mang ra đặt lên bàn ở chòi kiểm. Viên chức kiểm dịch — người đàn ông vô danh đã hai lần đi qua bến này với cuốn sổ tay nhỏ, ghi một dòng rồi đi tiếp — lần này trở lại có thông ngôn đi kèm và một tờ lệnh kiểm tra gấp tư, đóng triện đỏ. Không ai lớn tiếng. Không ai rút một thứ vũ khí nào. Cả cái bến chỉ lặng đi theo cách một cái bến lặng đi khi thẩm quyền bước vào: bằng sự im lặng của những người biết rằng ở đây, con dấu nặng hơn tiếng người.",
      {
        "text": "Trong lúc sân bến bận rộn với việc kiểm tra, ở gian sau của tang quán, Thu Nguyệt ở lại giữ cho số người được cứu nằm yên và im tiếng — nàng không ra sân, không vào khung hình của buổi kiểm, chỉ làm phần việc của người nhà ở sau vách: nước, chăn, và một ngón tay đặt lên môi mỗi khi có em nhỏ nào định hỏi to ngoài sân đang có chuyện gì.",
        "if": "thuNguyetFollows"
      },
      {
        "text": "Trong lúc sân bến bận rộn với việc kiểm tra, ở gian sau của tang quán, phần giữ cho số người được cứu nằm yên và im tiếng do phu ca gác của Bá Hòe tự gánh, theo đúng ca đã sắp từ đêm giấu người: nước, chăn, và một ngón tay đặt lên môi mỗi khi có em nhỏ nào định hỏi to ngoài sân đang có chuyện gì.",
        "unless": "thuNguyetFollows"
      },
      "Phần kiểm giấy của đoàn là phần của Tiểu Lan, và nàng làm nó bằng đúng những gì nàng đã dạy Cao Minh từ ngày đầu đoàn tới bến này. Giấy kiểm dịch của đoàn: trình ra, đọc đúng tên lệ. Lệ hoa tiêu cho ghe lạ ra vào cửa sông: nàng nói thuộc lòng từng khoản, qua miệng thông ngôn, bằng giọng của một người đã học lệ này như học một bài kinh. Cờ vàng trên ghe và thời gian ghe phải nằm chờ kiểm: nàng kể không sai một giờ. Thông ngôn dịch máy móc, câu nào cũng phẳng; vậy mà viên chức nghe xong phải lật lại tờ lệnh của mình một lần, vì người đàn bà bệnh tật đứng trước mặt ông ta nói lệ cảng rành hơn cả thư lại của cảng. Cao Minh đứng đúng chỗ của mình trong vỏ bọc đã gieo từ trước — một ông thầy ở xa tới, ít nói, không thuộc việc giấy tờ của bến — và hắn giữ chỗ ấy trọn buổi: không chen một câu nào về việc phàm, không đỡ một lời nào cho ai.",
      "Rồi tới sổ của Bá Hòe. Sổ giao ca của bến được mở ra trên bàn chòi kiểm: từng ca gác đổi tay khớp giờ, từng chuyến hàng ra vào có dấu, từng cỗ quan tài xuống tàu có số. Kỷ luật bến của anh — thứ kỷ luật anh giữ mười năm không ai khen — chiều nay thành bức tường giấy của cả đoàn. Chỉ có một chỗ suýt lệch: con số cỗ của chuyến tàu bị chặn, đối chiếu giữa sổ bến và giấy của cảng, lệch nhau đúng một khoảng trống. Viên chức dừng bút ở đó. Thông ngôn dịch câu hỏi lại hai lần. Bá Hòe không hoảng, không liếc về phía đoàn xin cứu: anh gỡ chỗ lệch ấy bằng chính nghề của mình — chỉ ra ca gác nào ghi thiếu một dòng từ đêm trước, đối chiếu với que tính của anh và dấu đóng của ca sau, nói bằng tiếng bến chậm rãi và đúng mực của người giữ sổ lâu năm. Chỗ lệch khép lại bằng giấy của chính bến. Không cần một bàn tay nào khác cứu anh, và không có bàn tay nào khác chen vào.",
      "Buổi kiểm còn kéo qua phần hàng trên sân: quan tài được đếm lại từng cỗ trước mặt đoàn, dấu niêm của tang quán được đối chiếu với sổ, và phu bến bị gọi tên từng người theo ca để trả lời những câu hỏi thường lệ về hàng hóa ra vào trong ba ngày qua. Không khí căng nhất của buổi chiều nằm ở những phút ấy — không phải ở tiếng quát, mà ở tiếng bút sột soạt trên giấy và sự kiên nhẫn của những người biết rằng một con số đọc sai cũng thành việc. Tiểu Lan đứng yên ở chỗ của đoàn suốt phần kiểm ấy, thỉnh thoảng trả lời đúng một câu lệ khi thông ngôn hỏi tới phần giấy của đoàn, không nói thừa một chữ. Nàng đã dạy hắn từ ngày đầu ở bến này rằng ở sân cảng, người nói ít và nói đúng lệ là người qua được cửa. Chiều nay cả đoàn qua cửa bằng đúng bài học ấy.",
      "Trong lúc lật tờ lệnh kiểm tra để đối chiếu phần cuối, thông ngôn dịch tới một dòng chữ nằm ở cuối lệnh — dịch phẳng như mọi dòng khác, không hề biết mình vừa đọc thứ gì. Dòng chữ ấy nói rằng ở phía trên, một đợt kiểm hộ lớn cho toàn vùng đang được chuẩn bị: Giới Phòng và các đầu mối thuộc địa đang lên danh sách, chia khu, hẹn một ngày chung cho khắp các bến và các hộ trong vùng. Nó không phải tin đồn hàng cơm. Nó nằm trong lệnh kiểm, bằng chữ và triện, như một việc đã được quyết ở đâu đó rất xa và chỉ còn chờ ngày rơi xuống. Trong cả sân bến chiều ấy, Tiểu Lan là người duy nhất nghe ra trọng lượng của dòng chữ đó. Nàng không nói gì. Nàng chỉ ghi nhớ nó vào chỗ nàng vẫn ghi nhớ những việc chưa tới lúc nói — và đoàn, chiều nay, không đếm ngày, không bàn thêm một chữ nào về nó.",
      "Buổi kiểm kết thúc như nó bắt đầu: bằng giấy. Viên chức kiểm dịch gấp tờ lệnh lại, ghi thêm đúng một dòng vào cuốn sổ tay nhỏ của mình — cuốn sổ đã theo ông ta qua bến này mấy lần, và dòng chữ chiều nay sẽ đi xa hơn mọi người trong sân tưởng — rồi đội nón, đi tiếp xuống phía bến dưới, thông ngôn lững thững theo sau. Đoàn qua được buổi kiểm tra cảng không thiếu một tờ giấy nào. Và Cao Minh, suốt từ đầu tới cuối buổi chiều ấy, không ra tay một lần nào. Hắn để yên cho giấy tờ thắng — thắng theo đúng luật của giấy tờ — và chỉ khi viên chức đã đi khuất khỏi sân, hắn mới nói một câu duy nhất, khô như tiếng đóng triện."
    ],
    "dialogue": [
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ông, nhờ ông dịch đúng lời tôi. Giấy kiểm dịch của đoàn tôi đây. Lệ hoa tiêu ở cửa sông này: ghe lạ vào phải trình giấy ở chòi đầu, nằm chờ một triều dưới cờ vàng, rồi mới được lên bến. Đoàn tôi đã làm đủ từng khoản, không thiếu một giờ nào."
      },
      {
        "speaker": "Thông ngôn",
        "text": "Thưa quan, bà này nói… giấy tờ đủ cả. Lệ hoa tiêu bà ấy thuộc… thuộc hơn cả người của cảng, thưa quan."
      },
      {
        "speaker": "Trương Bá Hòe",
        "text": "Thưa quan, chỗ lệch này là ca trước ghi thiếu một dòng, tôi xin chỉ rõ. Que tính của tôi còn đây, dấu ca sau còn đây. Sổ của bến này mười năm nay, sai ở đâu tôi chịu ở đó — mà chỗ này, thưa quan, nó không sai. Nó chỉ thiếu một dòng của người đã về nhà ngủ."
      },
      {
        "speaker": "Viên chức kiểm dịch",
        "text": "…Được. Sổ này giữ được. Bến này, ta sẽ còn trở lại."
      },
      {
        "speaker": "Cao Minh",
        "text": "Một thế giới mà con dấu quyết định một người có được tính là đang sống hay không. Bổn tọa đi đã nhiều nơi. Ít nơi nào bủn xỉn được đến thế này."
      }
    ],
    "choices": [
      {
        "id": "papers_first",
        "text": "Đưa giấy của đoàn ra trước, nói hết lệ trong một lượt — buổi kiểm kéo dài, gian sau phải giữ người yên lâu hơn, đổi lại nghe trọn tờ lệnh kiểm.",
        "next": "vt_signs_be_sau_hears",
        "effects": {
          "cluesHuaGiaDelta": 1
        },
        "route": {
          "id": "tu_quyet",
          "delta": 1
        },
        "flags": {
          "vtCensusSeeded": true
        }
      },
      {
        "id": "ledger_first",
        "text": "Để sổ của Bá Hòe đi trước, đoàn lùi hẳn về gian sau — toàn bộ sức nặng buổi kiểm đè lên vai Bá Hòe và thâm niên của anh.",
        "next": "vt_signs_be_sau_hears",
        "effects": {
          "lanTrustDelta": 2
        },
        "route": {
          "id": "bao_ho",
          "delta": 1
        },
        "flags": {
          "vtCensusSeeded": true
        }
      }
    ]
  },
  "vt_signs_be_sau_hears": {
    "id": "vt_signs_be_sau_hears",
    "contentStatus": "approved",
    "stageId": "vung_tau",
    "title": "Bé Sáu nghe dấu hiệu lệnh",
    "backgroundId": "coffin-wharf",
    "location": "Gian sau Phúc Thọ Tang Quán — chập tối ngày 2",
    "companions": [
      "le_thu_nguyet"
    ],
    "narration": [
      "Chập tối ngày thứ hai, một nhịp truyền rất nhẹ chạy qua bến. Nó tới bằng những đường mà nhịp của tuyến vẫn đi: một tiếng gõ xa trên ống đồng của trạm, một hồi rung khẽ trong mạn thuyền neo ở cầu tàu, rồi thôi. Người lớn trong gian sau chỉ nghe tiếng bến đêm thường — tiếng nước vỗ vào cọc, tiếng ai đó đóng cửa kho, tiếng cơm chiều ở sân trước. Không ai trong đoàn ngẩng lên. Chỉ có một người khựng lại giữa việc đang làm: Bé Sáu, đang ngồi đếm những hòn sỏi của mình trên nền đất, tay em dừng giữa chừng, đầu nghiêng sang một bên như người nghe một tiếng gọi rất xa gọi đúng tên mình. Em không đếm tiếp. Những hòn sỏi nằm yên trong lòng bàn tay mở ra của em.",
      "Gian sau lúc ấy đang ở vào khoảnh khắc yên nhất của một ngày dài: cơm chiều đã dọn, người được cứu người nằm người ngồi nói chuyện khẽ, trẻ con chia nhau mấy món đồ chơi nhặt được quanh sân — những hòn sỏi tròn, một khúc gỗ trôi, một sợi dây thừng cũ. Bé Sáu, từ ngày ra khỏi quan tài, đã gây cho mình một thói quen riêng: em đếm. Đếm sỏi, đếm nút áo, đếm tiếng nước vỗ vào cọc ngoài bến, đếm tới một trăm rồi đếm lại từ đầu, thản nhiên như mọi đứa trẻ đếm sao trên trời. Người lớn trong đoàn đã quen với tiếng đếm khẽ khẽ ấy đến mức coi nó là một phần của sự yên tĩnh trong gian — như tiếng tích tắc của một cái đồng hồ nhỏ cho biết căn phòng đang bình yên. Cho nên khi tiếng đếm ngừng giữa chừng, sự im lặng của em nổi lên rõ hơn bất cứ tiếng động nào ngoài bến. Tiểu Lan là người ngẩng lên đầu tiên. Nàng không hỏi ngay. Nàng đặt chén nước xuống, nhìn em, và chờ — cái chờ đã thành cách nàng nói chuyện với đứa trẻ này từ khoảnh khắc đầu tiên trên con tàu: chờ cho tới khi em tự biết mình muốn làm gì với điều vừa tới trong tai em. Cả gian sau, theo nàng, cũng lặng theo: người đang nói chuyện khẽ khàng im bặt, người đang bưng bát đặt bát xuống. Không ai biết chuyện gì đang tới. Chỉ có một đứa trẻ đang nghe, và một người đàn bà đang chờ em nghe xong — hoặc ngừng nghe — theo ý của chính em.",
      "Điều em nghe ra, người lớn phải một lúc sau mới hiểu bằng lời em kể ngắt quãng: lẫn trong nhịp dò nhẹ ấy có dấu hiệu lệnh — thứ dấu hiệu em đã sống cùng trong bóng tối của cỗ quan tài, thứ nhịp từng bảo tay em gõ theo, bảo miệng em im. Mạng đang dò lại gần, quờ tay tìm dấu của con tàu mất hàng, như người mất đồ đi dọc bờ sông trong đêm. Nhưng điều làm cả gian sau lặng đi không phải là nhịp dò. Là vẻ mặt của em khi em nhận ra mình vừa nghe được nó. Em sợ — và em sợ không phải thứ nhịp ngoài kia. Em sợ ánh mắt của người lớn trong phòng này: sợ từ giây phút này, họ sẽ nhìn em như một thứ đồ nghe thay, một cái tai để ở cửa, một đứa trẻ được cứu ra để dùng vào đúng việc nó vừa thoát khỏi.",
      "Tiểu Lan ngồi xuống ngang tầm em, như nàng đã ngồi xuống sàn khoang tàu hôm mở nắp, và nói rõ từng điều một bằng giọng thường ngày nhất của nàng. Em có quyền ngừng. Ngay bây giờ, ngay giữa câu nói dở này, em ngừng nghe cũng được — không ai bắt em nghe tiếp, không ai giận, không ai thất vọng. Điều em đã nghe được không biến em thành người có nhiệm vụ: em không nợ đoàn một bản tin nào, không nợ ai một dấu hiệu nào. Nói hay không nói là của em; nghe hay không nghe cũng là của em. Nàng nói xong thì im lặng và chờ, đúng như nàng đã chờ tên của em trên con tàu ấy. Trong gian sau, không một người lớn nào chen vào, không một ai ghé tai ra cửa nghe thử thay em, không một ai hỏi em câu đầu tiên.",
      "Rất lâu sau, khi chén nước trong tay em đã hết run, Bé Sáu tự chọn nói ra một mẩu. Chỉ một mẩu, nhỏ như chính em: trong nhịp dò ngoài kia, có ba tiếng gõ đi liền nhau rồi ngừng, rồi lại ba tiếng — như ai gọi mà không thành tiếng, gọi về phía con tàu đã mất. Em nói được đến đó thì tự ngừng, và nói rằng em không nghe nữa. Đoàn nghe mẩu ấy như nghe một món đồ một đứa trẻ tự tay đặt xuống: đoàn nhận, và không hỏi thêm câu thứ hai. Không ai ghi nó vào sổ nào. Không ai bàn nó thành đường đi hay tọa độ. Tiểu Lan chỉ lặp lại lời hứa của chính nàng bằng một câu thường: từ giờ, tai của em là của em.",
      {
        "text": "Suốt buổi chập tối ấy, Thu Nguyệt ở vòng ngoài của gian sau: nàng giữ cánh cửa thông ra sân, ngăn khéo những người bến vô tình đi ngang đúng lúc trong phòng đang im lặng, và bưng nước vào bằng những bước chân nhẹ nhất. Nàng không tham gia vào việc nghe, không hỏi em một câu nào về dấu hiệu. Việc của nàng là giữ cho khoảnh khắc quyền-ngừng của em không bị một tiếng động phàm nào chen vỡ.",
        "if": "thuNguyetFollows"
      },
      {
        "text": "Suốt buổi chập tối ấy, cửa gian sau do phu ca gác của Bá Hòe giữ, theo đúng sắp xếp từ đêm giấu người: anh đứng ngoài hiên, ngăn khéo những người bến vô tình đi ngang, không hỏi trong phòng có chuyện gì. Bên trong, sau khi mọi việc xong, Tiểu Lan tự làm cả phần nước và khăn cho em — chậm hơn, từng việc một như nàng vẫn làm — rồi ngồi lại bên cạnh em cho tới khi hơi thở của em đều lại.",
        "unless": "thuNguyetFollows"
      },
      "Phần còn lại của đêm thuộc về Cao Minh, và hắn làm nó một mình. Nhịp dò của mạng còn quờ quạng ở rìa bến thêm một lúc nữa — qua trạm, qua mạn thuyền, qua tiếng gõ xa — rồi câm hẳn, tắt ở ngoài vòng sân như một bàn tay chạm phải mặt nước phẳng lặng không gợn. Không ai trong đoàn phải làm gì thêm. Tiểu Lan không chen một nhịp nào, không phản một thanh nào: việc phong tỏa đêm nay, như mọi việc phong tỏa trong những ngày ở bến này, là việc của riêng hắn, và với hắn nó nhẹ như khép một cánh cửa. Bé Sáu ngủ lại được sau đó không lâu. Trước khi ngủ, em nói một câu rất thường, nhỏ đến mức chỉ người ngồi gần mới nghe: em đói, mai em muốn ăn cháo có trứng. Một đứa trẻ đói và buồn ngủ. Không phải một trạm nghe. Không phải một thứ đồ của bất cứ ai."
    ],
    "dialogue": [
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Bé Sáu, nghe tôi nói cho rõ. Em có quyền ngừng. Ngay bây giờ cũng được. Không ai bắt em nghe tiếp, không ai cần em nghe thay cho người lớn. Em đã nghe được gì, nói hay không là của em. Không nói, cũng không sao. Tôi hứa."
      },
      {
        "speaker": "Bé Sáu",
        "text": "Con… con nghe ba tiếng. Ba tiếng rồi ngừng. Rồi ba tiếng nữa. Như… như kêu con tàu về. Con nói vậy thôi. Con không nghe nữa đâu. Tay con… con đếm sỏi của con thôi."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Ừ. Vậy là đủ. Em đếm sỏi của em. Việc ngoài bến, để người lớn lo — mà người lớn cũng không cần em lo hộ phần nào hết."
      },
      {
        "speaker": "Cao Minh",
        "text": "Thứ nhịp ngoài kia, từ giờ, nó dò tới đâu cũng chỉ gặp bến yên. Nó muốn tìm đồ của nó thì tự lặn xuống sông mà tìm. Đừng trông vào tai của một đứa trẻ nhà người ta."
      }
    ],
    "choices": [
      {
        "id": "close_the_night",
        "text": "Đóng đêm ngay: dập đèn, cho cả gian sau ngủ, dấu hiệu để yên không bàn thêm — đoàn tự bỏ phần có thể suy ra từ mẩu dấu hiệu ấy.",
        "next": "vt_rescue_debt_second",
        "effects": {
          "lanHealthDelta": 3
        },
        "route": {
          "id": "bao_ho",
          "delta": 1
        },
        "flags": {
          "vtBeSauChoseSpeech": true
        }
      },
      {
        "id": "note_and_shelter",
        "text": "Chỉ ghi nhớ mẩu dấu hiệu trong đầu người lớn, không viết vào sổ nào, rồi mới đóng đêm — người lớn thức thêm một chặp, trẻ ngủ muộn hơn một chút.",
        "next": "vt_rescue_debt_second",
        "effects": {
          "cluesHuaGiaDelta": 1
        },
        "route": {
          "id": "tu_quyet",
          "delta": 1
        },
        "flags": {
          "vtBeSauChoseSpeech": true
        }
      }
    ]
  },
  "vt_rescue_debt_second": {
    "id": "vt_rescue_debt_second",
    "contentStatus": "approved",
    "stageId": "vung_tau",
    "title": "Tiền cứu người bị ghi nợ — lần 2",
    "backgroundId": "coffin-wharf",
    "location": "Sân và chòi bến Phúc Thọ — ngày 2 muộn",
    "companions": [
      "npc_porter",
      "le_thu_nguyet"
    ],
    "narration": [
      "Tờ ghi nợ thứ hai tới vào lúc ngày đã muộn, và lần này nó không gửi cho đoàn. Nó được phát tới tay chính những người vừa được cứu — từng tờ một, gấp ngay ngắn, lịch sự như tờ thứ nhất — kê tiền chăm sóc cho đúng những ngày họ nằm trong khoang tàu, trong khoang đáy, trong gian sau của tang quán này: tiền chỗ nằm, tiền cơm, tiền người trông. Người ta vừa được kéo ra khỏi quan tài chưa đầy hai ngày, tay còn chưa hết run khi cầm chén cơm, và tuyến đã tính xong giá của từng hơi thở họ thở trong lúc bị chở đi như hàng. Một người được cứu cầm tờ giấy của mình bằng hai tay, nhìn nó như nhìn một bản án vừa tha rồi lại bắt lại: hóa ra ra khỏi quan tài chỉ là đổi một thứ gỗ đóng quanh người lấy một thứ giấy đóng quanh người.",
      "Người mang giấy của tuyến phát chưa hết xấp giấy thì sân đã đông dần lên theo cách một cái bến vẫn đông khi có chuyện: phu tan ca đứng lại, người gánh hàng đặt đòn gánh xuống, mấy bà bán cơm ở đầu sân bưng cả mâm cơm ra gần để vừa bán vừa nghe. Không ai hô hào gì. Nhưng ai cũng hiểu, bằng cái hiểu thầm của những người sống bằng sổ sách của kẻ khác, rằng tờ giấy phát chiều nay khác tờ giấy phát buổi sáng: buổi sáng nó tới tay một người đàn bà lạ ở trọ; chiều nay nó tới tay chính những người của bến này, những người vừa được khiêng ra khỏi khoang tàu trước mắt cả bến. Một món nợ ghi lên người ngoài thì là chuyện của người ngoài. Một món nợ ghi lên đầu người vừa được cứu, giữa sân này, thì là chuyện của mọi nhà có người đi phu, đi ghe, đi hàng cho tuyến — tức là chuyện của gần hết cái bến.",
      "Tiểu Lan xin tờ giấy ấy — xin, không giật — và bóc tách chữ nghĩa của nó thành tiếng ngay tại sân, trước mặt người bến đang tụ lại. Nàng đọc chậm và rõ, khoản nào ra khoản ấy. Khoản này là tiền cơm thật: cơm có nấu thật, người có ăn thật. Khoản này là tiền thuốc thường của bến: có chi thật. Nhưng khoản lớn nhất của tờ giấy thì không phải tiền đã chi cho ai: nó là tiền ghi ngược từ quỹ cước của tuyến — cùng một vòng tiền đoàn đã thấy từ những ngày đầu ở bến, tiền chạy quanh một vòng qua sổ cước rồi quay lại nằm trên đầu người được cứu dưới tên gọi là nợ. Và điều nàng hỏi to nhất, hỏi bằng chữ của chính tờ giấy, là điều không một dòng nào trong tờ giấy trả lời được: những người này đồng ý vay ở đâu? Họ ký vay lúc nào — lúc nằm trong quan tài, hay lúc ngạt trong khoang đáy? Người bến nghe, im lặng nghe, và sự im lặng ấy khác hẳn sự im lặng của những ngày họ chỉ biết cúi đầu ký.",
      {
        "text": "Phần ký hiệu thương hồ ở góc tờ ghi nợ thứ hai là phần của Thu Nguyệt. Nàng đọc nó nhanh, rồi đối chiếu ngay với tờ thứ nhất mà đoàn giữ: cùng một tay sổ, cùng một hệ dấu cước, cùng một người cầm bút ở phía trên. Chỉ có một thứ khác — và nàng nói rõ thứ khác ấy cho cả sân nghe: tờ thứ nhất ghi nợ lên tên người đứng ra cứu; tờ thứ hai ghi nợ thẳng lên đầu người được cứu. Tay sổ không đổi. Đối tượng thì leo thang.",
        "if": "thuNguyetFollows"
      },
      {
        "text": "Phần dấu trên tờ ghi nợ thứ hai, chiều nay, do Trương Bá Hòe đọc ra từ sổ giao ca của chính bến mình — và anh lặng đi ở một khoản. Trong danh sách người bị ghi tiền chăm sóc có một phần không tên người, chỉ ghi theo số của một món hàng thất lạc: phần chăm sóc của người bạn đang nằm sau vách bao than trong kho, người mà tuyến đã gạch khỏi sổ như một món hàng mất. Tuyến không biết anh ta còn sống ở đâu. Nhưng sổ của chúng vẫn đều đặn ghi nợ cho việc nuôi anh ta. Bá Hòe nói điều đó bằng giọng rất thấp, rồi gấp trang sổ của mình lại, cẩn thận như người gấp một thứ gì dễ rách.",
        "unless": "thuNguyetFollows"
      },
      "Khoản của Người bị giấu nằm trong tờ giấy ấy dù đọc theo ngả nào — phần tiền chăm sóc của một người bị ghi là hàng thất lạc, vẫn đều đặn sinh nợ sau vách bao than. Chi tiết ấy khóa chặt việc của đêm mai trong đầu cả đoàn mà không ai cần nói ra thành kế hoạch: người ấy phải rời khỏi tuyến này trước khi đợt tất toán của chúng tới, trước khi một món nợ biết thở khác tìm tới cửa kho than. Bá Hòe chỉ nói đúng một câu ngắn về khoản nợ ấy, nói như người bến nói về một việc của nhà mình — không thề, không trăng trối, chỉ là một câu đặt xuống như đặt một cái bát xuống bàn.",
      "Việc bóc tách công khai làm người bến tính lại ngay trước mắt đoàn — và đây là phần thiêu thân của buổi chiều muộn này: có một người phu già lặng lẽ gấp tờ nợ của nhà mình cất vào trong áo, thay vì mang về nhà ký như mọi lần; có người hỏi khẽ người bên cạnh rằng tờ giấy ghi tên người ta mà người ta không ký, thì nó còn là nợ nữa hay thôi; người mang giấy của tuyến đứng giữa sân với xấp giấy chưa phát hết, lần đầu tiên trong nghề của hắn, không một ai bước tới xin ký cho xong chuyện. Rồi Cao Minh đặt điều kiện của hắn xuống bàn giấy, tùy tiện như người đặt lệ cho một trò chơi mình vừa xem chán: từ nay, tờ nợ nào của chuyến hàng này muốn đòi, thì mang ra sân này, trước mặt hắn, đọc thành tiếng từng khoản một — khoản nào đọc không thông thì tự mang về. Hắn nói xong thì quay lại chén rượu của mình. Nhưng việc ghi nợ thầm lặng, từ buổi chiều ấy, mất đất sống ở cái bến này.",
      "Tờ ghi nợ thứ hai được Tiểu Lan giữ lại làm chứng cứ thứ hai. Nàng cất nó cùng tờ thứ nhất và tờ biên nhận, ba tờ giấy nằm cạnh nhau trong tay nàng: một tờ ghi giá ăn ở của chính nàng, một tờ ghi giá của việc cứu người, một tờ ghi giá lên đầu người được cứu. Không một khoản nào trong cả ba tờ được ký tất toán — không hôm nay, không ở bến này. Buổi chiều khép lại bằng một việc rất nhỏ ở góc sân: một người được cứu, tay vẫn còn run, tự nói to tên của mình cho người bên cạnh nghe, rồi thêm một câu thường, nói như người vừa đặt xuống được một thứ nặng: tên tôi đây. Tôi không có nợ."
    ],
    "dialogue": [
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa các bác, các anh, nghe tôi đọc tờ giấy này cho rõ. Khoản cơm: thật. Khoản thuốc: thật. Còn khoản lớn nhất này — nó không chi cho ai hết. Nó là tiền cước chạy một vòng qua sổ rồi quay lại nằm trên đầu người ta. Và tôi hỏi một điều thôi: người nằm trong quan tài, đồng ý vay ở câu nào, chữ nào trong tờ này?"
      },
      {
        "speaker": "Cao Minh",
        "text": "Bổn tọa chém được sổ. Không đọc được sổ. Việc đọc là của nàng — và chiều nay, nàng đọc cho cả bến nghe."
      },
      {
        "speaker": "Cao Minh",
        "text": "Điều kiện của bổn tọa thế này: nợ nào của chuyến này muốn đòi, mang ra sân này, đứng trước mặt bổn tọa, đọc thành tiếng từng khoản. Đọc không thông, tự mang về mà đọc lại. Bổn tọa rảnh. Bổn tọa nghe được hết."
      },
      {
        "speaker": "Trương Bá Hòe",
        "text": "Phần nợ không tên người trong tờ này… là phần của người nằm sau vách bao than nhà tôi. Chúng gạch anh ấy là hàng mất rồi. Mà nợ thì chúng vẫn ghi đều. Việc này, không để lâu được nữa."
      }
    ],
    "choices": [
      {
        "id": "read_debt_aloud",
        "text": "Bóc tách công khai ngay tại sân trước mặt người bến — tuyến biết rõ ai là người đọc được chữ của chúng ở bến này.",
        "next": "vt_hidden_man_route",
        "effects": {
          "cluesHuaGiaDelta": 2
        },
        "route": {
          "id": "tu_quyet",
          "delta": 1
        },
        "flags": {
          "vtRescueDebtRefused": true
        }
      },
      {
        "id": "read_debt_in_shelter",
        "text": "Mang tờ nợ vào gian sau đọc cho người được cứu nghe trước, sáng mai mới trả lời tuyến — người bến ngoài sân đồn đoán qua đêm, Bá Hòe bị phu trưởng hỏi một vòng.",
        "next": "vt_hidden_man_route",
        "effects": {
          "lanTrustDelta": 2,
          "civiliansSavedDelta": 1
        },
        "route": {
          "id": "bao_ho",
          "delta": 1
        },
        "flags": {
          "vtRescueDebtRefused": true
        }
      }
    ]
  },
  "vt_hidden_man_route": {
    "id": "vt_hidden_man_route",
    "contentStatus": "approved",
    "stageId": "vung_tau",
    "title": "Đưa Người bị giấu ra khỏi kho than",
    "backgroundId": "coal-store",
    "location": "Kho than và bến đêm Phúc Thọ — đêm 2",
    "companions": [
      "npc_porter",
      "npc_servant_male"
    ],
    "narration": [
      "Đêm thứ hai, đoàn quay lại kho than của Phúc Thọ Tang Quán, đúng lời hứa Tiểu Lan đã để lại trong kho này: trước khi rời Vũng Tàu, chúng tôi sẽ quay lại. Kho than về đêm có mùi riêng của nó — mùi than ẩm, mùi bao tải gai, mùi gỗ mục của những vách ngăn đã chứng kiến không biết bao nhiêu chuyến hàng đi qua trong im lặng. Từ sau vách bao than ở góc sâu nhất của kho, có tiếng động rất khẽ ngay khi Bá Hòe cất tiếng gọi vào: người thanh niên bị giấu sau vách ấy nghe tiếng anh trước tiên, trước mọi tiếng chân khác, như một người đã học cách nhận ra ân nhân của mình chỉ bằng tiếng dép trên nền đất. Anh còn yếu — yếu thật, tỉnh thật, và đi không tự đi được xa: hai năm khiêng hàng cho tuyến rồi nằm giấu sau một vách bao đã lấy của thân thể anh gần hết sức đứng vững. Đêm nay anh sẽ đi bằng ghe, không phải bằng chân mình. Đó không phải nghi thức. Đó là việc cần thiết.",
      {
        "text": "Đêm nay, ở gian sau của tang quán, Thu Nguyệt ở lại giữ số người được cứu còn đang ngủ, để sân kho than chỉ còn những người có việc ở kho than. Nàng không có mặt trong khung hình của đêm này.",
        "if": "thuNguyetFollows"
      },
      {
        "text": "Đêm nay, gian sau của tang quán do ca gác mà Bá Hòe đã sắp từ đêm giấu người tự gánh, để sân kho than chỉ còn những người có việc ở kho than, không một người thừa.",
        "unless": "thuNguyetFollows"
      },
      "Văn Độ đã chờ sẵn ở bến sau với ghe của anh. Chuyến đêm nay là quyết định của anh — như chuyến chèo không sổ anh từng quyết cho ân nhân của mình, như mọi chuyến của đường cứu người mà anh chạy từ trước khi đoàn đặt chân tới bến này. Mạng lưới cứu người, đêm nay, chạy có đoàn chứng kiến; nhưng tay chèo là tay anh, đường nước là đường của anh. Anh nói rất ít. Anh kiểm dây buộc ghe hai lần, thử mái chèo trong nước không thành tiếng, ngẩng lên nhìn trời một lúc để đọc mây và giờ triều, rồi gật đầu một cái: đi được. Bốn chữ của nghề chèo đêm — không thừa một chữ nào. Tiểu Lan đứng bên, nghe anh nói về nước đêm như nghe một thứ lệ khác của bến này: lệ không viết trong sổ nào, chỉ viết trong tay người chèo.",
      "Khoảnh khắc của đêm thuộc về Bá Hòe. Anh tự tay gỡ vách bao than — chỗ giấu của chính anh, từng bao một, đúng thứ tự anh đã xếp lên trong những đêm giấu bạn, không cho ai gỡ thay. Bao than nặng, bụi than bám đen cả hai tay anh, và anh làm chậm rãi như người dỡ một căn nhà mình đã ở. Người thanh niên sau vách được đỡ ra, ngồi tựa vào bao than mà thở, nhìn ánh đèn dầu lần đầu tiên không phải qua khe bao. Rồi Bá Hòe quỳ xuống ngang tầm bạn mình, và gọi anh ta bằng tên. Tên thật của anh — cái tên chỉ hai người họ biết với nhau, cái tên không nằm trong bất cứ sổ nào của tuyến, không được ghi lại ở đây, và không cần ghi lại ở đâu nữa. Anh gọi tên bạn mình như gọi một người: đầy đủ, rõ ràng, giữa kho than đầy bụi. Người bị giấu nghe tên mình mà khóc không thành tiếng. Lời xin cũ của anh — đừng để món nợ của tôi giết anh — đêm nay trở về trong miệng anh đã đổi thành một lời dặn: anh ở lại, anh phải sống cho đàng hoàng, đừng vì tôi mà liều. Hai người đàn ông của bến ôm nhau một cái rất ngắn, rất đàn ông, rồi buông ra.",
      "Ghe rời bến trong đêm theo dấu của Văn Độ, thấp và yên, trượt vào lạch tối như một chiếc lá lớn. Ở lại bến, rắc rối tới đúng như nó phải tới: phu trưởng bến điểm ca đêm, mở sổ giao ca, và dừng lại ở một khoảng trống — một quãng giờ trong sổ không có việc gì ghi vào, đúng quãng giờ ghe rời bến. Ông ta gọi Bá Hòe tới. Và Bá Hòe tự qua được vòng nghi ấy bằng chính nghề của mình: anh mở sổ của anh, chỉ từng dòng trước và sau khoảng trống, đối chiếu ca gác, que tính, và thâm niên mười năm giữ sổ không một vết của anh ở bến này — nói rằng quãng trống ấy là quãng đổi ca đã lệch từ ca trước, việc bến vẫn thường có, dấu của ca trước còn đây, dấu của ca sau còn đây. Phu trưởng nghe, lật sổ thêm một lần, rồi khép lại. Không ai cứu Bá Hòe. Anh đứng vững bằng cuốn sổ của chính anh. Phần của Cao Minh trong đêm này nhỏ đúng một mắt xích giấy tờ, và hắn giữ nó đúng ở đó: từ lúc nào trong đêm, khoảng trống trong sổ giao ca đã thành một khoảng trống hợp lệ có dấu của ca trước đóng kèm — một mắt xích, không hơn. Hắn có thể làm nhiều hơn thế rất nhiều. Đêm nay hắn không làm, vì đêm nay là đêm của Văn Độ và Bá Hòe, và hắn biết một chuyến cứu của người phàm đáng giá ở chỗ nó là của người phàm.",
      "Bến yên lại sau điểm ca. Bá Hòe quay về ghế đẩu của mình ở chòi bến, ngồi xuống, mở sổ ra, và que tính của anh chạy lại trên trang giấy như mọi đêm — anh ở lại bến này, với nghề của mình, sống và nguyên vẹn, một người giữ sổ vừa tiễn bạn mình đi bằng tên thật của anh ta. Tiểu Lan khép lời hứa của mình với anh bằng một câu thường, nói như người giữ lời nói với người giữ lời. Ở phía lạch tối, ghe của Văn Độ đã mất hút từ lâu, mang người được cứu về phía đất an toàn. Sau đêm nay, số phận của anh ta trong những ngày còn lại của đoàn ở bến này để mở ở đúng mức ấy: anh đã ra khỏi tuyến. Không ai ở bến này viết thêm một chữ nào về anh nữa — và đó, lần này, là một ơn."
    ],
    "dialogue": [
      {
        "speaker": "Người bị giấu",
        "text": "Anh Hòe… anh nghe tôi dặn đây. Tôi đi. Anh ở lại. Anh đừng… vì tôi mà liều cái mạng của anh. Món nợ của tôi… anh trả hết cho tôi từ lâu rồi. Từ… nửa ổ bánh hồi đó. Anh sống cho đàng hoàng vào."
      },
      {
        "speaker": "Trương Bá Hòe",
        "text": "Ừ. Tao nghe. Mày đi cho tới đất lành, đừng quay đầu lại nhìn bến này nữa. Ở đây có tao giữ. Sổ của tao, tao giữ được. Người của tao, tao tiễn được. Đi đi."
      },
      {
        "speaker": "Tạ Văn Độ",
        "text": "Triều đêm nay đi được một canh nữa. Đường lạch tối, ghe tôi quen từng cọc. Anh cứ nằm yên giữa ghe, đắp bao này lên. Tới đất bên kia, có người của đường tôi chờ."
      },
      {
        "speaker": "Trương Bá Hòe",
        "text": "Thưa quan phu trưởng, khoảng trống này là quãng đổi ca lệch từ ca trước. Dấu ca trước đây, dấu ca sau đây. Tôi giữ sổ mười năm, sai chỗ nào tôi chỉ mặt chỗ đó được. Chỗ này, nó không sai — nó là việc bến vẫn thường có."
      },
      {
        "speaker": "Cao Minh",
        "text": "Sổ sách của các ngươi có một cái hay: chỗ trống nào cũng thành có tội, nếu người cầm sổ muốn thế. May cho bến này, người giữ sổ của nó tối nay nói nghe được."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Dạ, thưa anh Hòe, lời hứa của tôi với anh trong kho than, bữa nay tôi khép lại tại đây. Anh giữ anh cho khỏe. Người đi đã đi bằng tên của anh ấy — ấy là nhờ anh."
      }
    ],
    "choices": [
      {
        "id": "night_tide_route",
        "text": "Đi ngay theo triều đêm nay, đường ngắn của Văn Độ — ghe ra khỏi bến đúng giờ phu trưởng đang điểm ca.",
        "next": "vt_port_two_masters",
        "effects": {
          "civiliansSavedDelta": 2
        },
        "route": {
          "id": "bao_ho",
          "delta": 1
        },
        "flags": {
          "vtHiddenManMoved": true
        }
      },
      {
        "id": "coal_barge_cover",
        "text": "Chờ ghe than thường khởi hành rồi đi lẫn theo sau — Người bị giấu chờ thêm trong kho, Bá Hòe phải giữ vách bao thêm một chặp.",
        "next": "vt_port_two_masters",
        "effects": {
          "lanTrustDelta": 2
        },
        "route": {
          "id": "tu_quyet",
          "delta": 1
        },
        "flags": {
          "vtHiddenManMoved": true
        }
      }
    ]
  },
  "vt_port_two_masters": {
    "id": "vt_port_two_masters",
    "contentStatus": "approved",
    "stageId": "vung_tau",
    "title": "Bến có hai ông chủ",
    "backgroundId": "coffin-wharf",
    "location": "Sân bến Phúc Thọ — ngày 3",
    "companions": [
      "npc_porter",
      "npc_official"
    ],
    "narration": [
      "Ngày thứ ba, hai áp lực tới bến cùng một buổi sáng, từ hai phía ngược nhau. Phía tuyến là bàn tay tiền: lệ chi mới được mang xuống sân, sổ cước bị đòi đối chiếu lại từ đầu sau vụ con tàu mất hàng — tang quán và phòng chi muốn biết từng khoản cước của bến này còn nằm trong tay ai. Phía thuộc địa là bàn tay giấy: sau buổi kiểm tra cảng, một đợt kiểm tra phụ được hẹn xuống bến, kèm yêu cầu hồ sơ về những người lạ đang ở trọ quanh bến — ai tới, từ đâu, ở bao lâu, làm nghề gì. Hai thứ giấy đè xuống cùng một sân. Phu bến đứng giữa, tay cầm hai thứ sổ khác nhau, và hiểu một điều rất phàm: bến này có hai ông chủ, và cả hai ông chủ đều vừa ngửi thấy mùi khét từ vụ chặn tàu.",
      "Người đọc ra cả thế cờ ấy cho đoàn là Tiểu Lan. Nàng ngồi ở chòi bến, nghe hết hai phía qua một buổi sáng, rồi nói rõ cho Cao Minh nghe từng lớp một, chậm rãi như nàng vẫn dạy hắn việc phàm. Bên tiền cần gì: chúng cần con số khớp lại và cần một ai đó chịu trách nhiệm cho chuyến hàng đã mất, để sổ cước còn đóng được. Bên giấy sợ gì: chúng sợ hồ sơ của chúng có một khoảng trống không giải thích được — một đoàn người lạ ở bến ba ngày, một con tàu bị chặn giữa sông, mà giấy tờ của cảng không ghi nổi một dòng cho ra hồn. Và cả hai bên, nàng nói, đều đang tính cùng một món: hắn. Bên này thấy uy của ông thầy lạ có thể dằn được đợt kiểm tra của bên kia. Bên kia thấy nếu ghi được đoàn vào một bộ hồ sơ có quản lý, thì khoảng trống của chúng khép lại. Cao Minh nghe hết như nghe một ván cờ bằng thứ tiếng mình vừa học được mấy chữ, thỉnh thoảng hỏi lại đúng một chỗ — hỏi về lệ, không hỏi về người.",
      {
        "text": "Ở rìa sân, Thu Nguyệt ghé sát cô chủ của mình với một tin nhỏ mà chỉ mắt nàng mới bắt được nhanh đến thế: trong xấp lệ chi mới của phía tuyến có một dấu cước vừa đóng thêm đêm qua, không thuộc lệ cũ nào của bến — dấu của một khoản chi đang được chuẩn bị trước cả khi nó có tên. Nàng đọc nó cho Tiểu Lan nghe bằng hai câu ngắn, rồi lùi lại chỗ của mình ở rìa sân, để thế cờ vẫn là của cô chủ nàng đọc.",
        "if": "thuNguyetFollows"
      },
      {
        "text": "Phần dấu cước trong xấp lệ chi mới của phía tuyến, sáng nay, do Trương Bá Hòe chỉ ra từ sổ giao ca của bến: có một dấu đóng thêm từ đêm qua, không thuộc lệ cũ nào anh thuộc — dấu của một khoản chi đang được chuẩn bị trước cả khi nó có tên. Anh chỉ nó cho Tiểu Lan bằng đầu ngón tay, nói đúng một câu, rồi quay lại với sổ của mình. Thế cờ hai thứ chữ, vẫn do nàng đọc và nói.",
        "unless": "thuNguyetFollows"
      },
      "Rồi hai bên lần lượt tìm tới đoàn, mỗi bên bằng cách của mình, và không bên nào nói thẳng điều mình muốn. Phu trưởng bến tới trước, nói vòng qua ba lớp chuyện bến, để lại một ý bóng gió: nếu ông thầy chịu đứng tên cho bến trong buổi đối chiếu sổ cước, thì đợt kiểm tra phụ của phía cảng sẽ nhẹ đi nhiều — bến sẽ nhớ ơn. Viên chức kiểm dịch tới sau, qua thông ngôn, cũng bóng gió không kém: nếu đoàn chịu để tên vào hồ sơ người lạ có quản lý của cảng, thì từ nay đoàn đi đâu trong vùng này cũng yên, giấy đi trước người. Cả hai đều là thiêu thân đúng nghĩa: chúng đã tận mắt thấy lửa ở bến này — một con tàu bị chặn, một buổi kiểm bị một người đàn bà bệnh tật dắt đi bằng lệ cảng — và vẫn lao vào, vì món lợi quanh ngọn đèn quá lớn: quyền dằn mặt bên kia, quyền quản lý những kẻ không quản nổi. Không bên nào tính chuyện đánh hắn. Chúng chỉ tính phần thắng của mình trong một thế giới vừa có thêm hắn.",
      "Cao Minh không chọn phe nào. Hắn đặt xuống giữa hai thứ giấy một điều kiện duy nhất, nói tùy tiện như người chán một trò chơi ồn ào giữa sân nhà người khác: ai muốn mượn tên của bổn tọa, thì mang toàn bộ sổ của mình ra sân này, đọc thành tiếng từ đầu tới cuối trước mặt phu bến — kể cả những trang các ngươi chưa từng đọc cho ai nghe. Ai muốn ghi bổn tọa vào hồ sơ, thì ghi, nhưng ghi ngay dưới đó, cùng một nét bút, phần hồ sơ của chính các ngươi mà các ngươi vẫn giấu. Hắn nói xong, rót rượu. Điều kiện ấy đắt theo đúng luật chơi của chính hai bên: bên tiền không dám đọc sổ của mình trước mặt phu bến, bên giấy không dám viết phần hồ sơ giấu của mình xuống đâu cả. Phu trưởng là người lùi trước, bằng một cái cúi đầu rất nghề. Phía cảng lùi sau, bằng một câu qua thông ngôn rằng việc hồ sơ để khi khác. Cả hai bên tự lùi một bước — không ai bị đe dọa tính mạng, không một sức mạnh nào được phô ra giữa sân sáng ấy.",
      "Bến thở lại một nhịp. Phu bến quay về việc của mình: hàng được khiêng tiếp, sổ được mở lại, tiếng gọi nhau qua sân trở về âm lượng thường ngày. Người nhẹ nhõm nhất sân sáng ấy không phải đoàn — là một người phu già bị kẹt giữa hai thứ sổ từ sớm, người mà cả hai phía đều đòi gọi lên hỏi, và giờ được cả hai phía cùng buông ra một lúc vì chúng còn bận tính lại nước cờ quanh điều kiện vừa đặt xuống. Tiểu Lan nhìn cụ phu ấy quay về với đòn gánh của mình mà sắp việc tiếp theo của đoàn thành lời: đường tin của Văn Độ vừa về tới đầu bến. Thân nhân đầu tiên của người được cứu đã tìm được đường tới. Việc của buổi chiều là một việc không cần sổ sách nào hết: trả tên."
    ],
    "dialogue": [
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài, tôi nói thế cờ này cho ngài nghe một lần cho rõ. Bên tiền cần sổ khớp và một người chịu trách nhiệm. Bên giấy cần hồ sơ không có khoảng trống. Cả hai đều đang tính mượn ngài — một bên mượn uy, một bên mượn tên. Ngài đừng tưởng chúng sợ ngài. Chúng đang ra giá cho ngài đấy, thưa ngài."
      },
      {
        "speaker": "Phu trưởng bến",
        "text": "Thưa ông thầy… bến này nhỏ, việc thì nhiều phía. Nếu ông thầy chịu đứng một lời trong buổi đối chiếu… thì bến đội ơn ông thầy lắm. Việc kiểm tra bên cảng, tự khắc nó nhẹ đi cho mọi người thôi, thưa ông."
      },
      {
        "speaker": "Thông ngôn",
        "text": "Thưa ông, quan cảng nhắn: đoàn của ông nếu ghi tên vào hồ sơ người lạ có quản lý, thì trong vùng này, giấy đi trước người. Yên ổn lắm, thưa ông. Quan chỉ muốn quản cho yên thôi."
      },
      {
        "speaker": "Cao Minh",
        "text": "Nghe cho rõ điều kiện của bổn tọa. Muốn mượn tên bổn tọa: mang hết sổ của các ngươi ra sân này, đọc thành tiếng, từ trang đầu, trước mặt phu bến. Muốn ghi bổn tọa vào hồ sơ: ghi luôn phần hồ sơ các ngươi đang giấu, ngay dưới tên bổn tọa, cùng một nét bút. Làm được thì nói tiếp. Không làm được thì sân này còn nhiều việc, đừng đứng chắn nắng của người ta."
      },
      {
        "speaker": "Cao Minh",
        "text": "Hai ông chủ, một cái bến. Bổn tọa tưởng chỉ có trời mới nuôi nổi thói ấy. Hóa ra giấy cũng nuôi được."
      }
    ],
    "choices": [
      {
        "id": "let_both_step_back",
        "text": "Để điều kiện của hắn đứng nguyên, không giải thích gì thêm cho bên nào — cả hai bên đều ghi nhớ đoàn là kẻ không mượn được, không quản được.",
        "next": "vt_names_returned",
        "effects": {
          "lanTrustDelta": 2
        },
        "route": {
          "id": "tu_quyet",
          "delta": 1
        }
      },
      {
        "id": "give_wharf_the_receipt",
        "text": "Tiểu Lan đưa cho phu bến xem, không giao, một góc của bộ chứng cứ để họ tự hiểu vì sao nên lùi — một phần chứng cứ lộ diện trước mắt người bến.",
        "next": "vt_names_returned",
        "effects": {
          "cluesHuaGiaDelta": 2
        },
        "route": {
          "id": "bao_ho",
          "delta": 1
        }
      }
    ]
  },
  "vt_names_returned": {
    "id": "vt_names_returned",
    "contentStatus": "approved",
    "stageId": "vung_tau",
    "title": "Tên được trả lại",
    "backgroundId": "coffin-wharf",
    "location": "Gian sau tang quán và sân bến Phúc Thọ — ngày 3",
    "companions": [
      "npc_servant_male"
    ],
    "narration": [
      "Đường tin của Văn Độ chạy tới bến vào buổi chiều ngày thứ ba — chạy bằng ghe, bằng chân người bến, bằng những chặng tay chuyền nhau của mạng lưới cứu người mà anh đã gây dựng từ trước khi đoàn tới. Bằng đường ấy, thân nhân đầu tiên của người được cứu tìm tới được bến này. Họ tới không mang theo tờ giấy nào của tuyến, không cầm một bản đối chiếu nào trong tay. Họ tới bằng một đôi chân đi ghe đi bộ suốt từ sớm, bằng một cái bọc vải đựng bộ đồ khô cho người nhà, và bằng một cái tên họ đã gọi suốt mấy ngày không ai đáp. Văn Độ đưa họ vào sân sau bằng lối ca gác của Bá Hòe, gật đầu với Tiểu Lan một cái, rồi quay ra bến lo chuyến tin kế tiếp của mình — anh là đường dây, và đường dây không đứng lại xem người ta khóc.",
      {
        "text": "Trong buổi nhận người này, Thu Nguyệt ở lại giữ chỗ giấu và số người được cứu còn lại ở gian trong, để sân sau chỉ có người nhà và người được gọi tên. Nàng không có mặt trong khung hình của buổi chiều này.",
        "if": "thuNguyetFollows"
      },
      {
        "text": "Trong buổi nhận người này, chỗ giấu và số người được cứu còn lại ở gian trong do người của Bá Hòe giữ theo ca đã sắp, để sân sau chỉ có người nhà và người được gọi tên, không một người thừa.",
        "unless": "thuNguyetFollows"
      },
      "Việc nhận người diễn ra không bằng giấy. Thân nhân đứng ở giữa sân sau, nhìn dãy người được cứu đang ngồi dưới hiên gian sau, và gọi tên. Chỉ gọi tên — gọi đầy đủ, gọi to, gọi như gọi người nhà về ăn cơm từ đầu ngõ. Người được gọi nghe tên mình, khựng lại, rồi đứng dậy và bước ra, vừa đi vừa đáp lại bằng chính giọng của mình. Không một tờ giấy nào của tuyến được mang ra trong khoảnh khắc ấy. Không ai đối chiếu. Không ai đóng triện xác nhận rằng người này còn sống. Một người đã bị ghi là đã chết trong sổ của tuyến, chiều nay được người nhà gọi sống lại bằng tên, giữa sân sau của một tang quán — nơi chuyên lo việc chết chóc — và tiếng gọi ấy là thứ giấy tờ duy nhất mà đoàn cần. Cao Minh đứng ở rất xa khoảnh khắc ấy, yên lặng trọn vẹn: quanh sân, trong suốt buổi nhận người, không một sợi nhịp lạ nào chạm được vào tiếng gọi tên ấy — hắn giữ phần yên tĩnh vô hình ấy dễ dàng như giữ một mái hiên khỏi cơn mưa nhỏ, và không làm thêm bất cứ việc gì khác, nhất là không làm việc mà hắn thừa sức làm: hắn không sửa tờ giấy chết nào bằng tay mình, vì Tiểu Lan đã đặt luật từ trước — tên trả bằng miệng người nhà, không bằng tay hắn.",
      "Hai trường hợp chết trên giấy, chiều nay, đi về hai ngả khác nhau — và đoàn để cả hai ngả cùng đúng. Nhà thứ nhất, sau khi ôm được người nhà về, ngồi lại rất lâu rồi quyết định một điều nghe qua tưởng ngược đời: giữ nguyên tờ giấy chết thêm một thời gian nữa. Người vừa về còn yếu, tuyến còn nhìn bến này, và một người đã chết trên giấy thì không ai tới đòi nợ, không ai tới kiểm tra, không ai bắt đi chuyến nào nữa — tờ giấy chết, lúc này, là cái áo giáp rẻ nhất và chắc nhất cho một người cần nằm yên mà sống lại. Nhà thứ hai thì quyết ngược hẳn: đòi lại tên ngay. Họ nói rõ, nói trước mặt đoàn và người bến có mặt ở sân sau: người nhà của họ còn sống, giấy nói chết là giấy láo, và họ sẽ mang việc này ra trước bến, đòi sửa từng dòng, dù biết tuyến sẽ biết, dù biết từ nay nhà họ nằm trong mắt của chúng. Tiểu Lan nghe cả hai nhà, tôn trọng cả hai quyết định như nhau. Nàng không sửa nhà nào, không khen nhà nào dũng cảm hơn nhà nào. Tên là của người ta. Trả về rồi, dùng thế nào là quyền của người ta.",
      "Rồi tới việc của Bé Sáu. Đoàn sắp rời Phúc Thọ hướng về Long Hải, và Tiểu Lan hỏi em — hỏi thật, ở một chỗ yên của sân sau, với đầy đủ đường lui cho em: em muốn ở lại bến này với những người vừa được cứu và thân nhân của họ, có cơm, có chỗ ngủ, có người quen; hay em muốn đi theo đoàn. Không ai thu nhận em. Không ai nói thay em. Không ai nhắc tới tai nghe hay dấu hiệu gì trong câu hỏi ấy — em được hỏi như một đứa trẻ được hỏi về nơi mình ở, không hơn. Bé Sáu suy nghĩ lâu theo cách của trẻ con: em đếm sỏi trong tay một lượt, rồi nói quyết định của mình bằng lý do của một đứa trẻ, không phải lý do của một nhiệm vụ nào. Ở bến này, đêm nào em cũng nghe tiếng gõ đâu đó quanh sân. Đi theo đoàn, em được ngủ. Em chọn đi theo đoàn. Cao Minh nghe tin ấy như nghe tin trời mai có mưa: hắn nói một câu tùy tiện nhận thêm một người đi đường như nhận thêm một cái bóng đi cùng cho vui, không diễn vai ân nhân, không diễn vai cha nuôi, và quay lại với chén rượu của mình.",
      "Buổi chiều khép lại ở sân sau bằng những việc rất thường. Thân nhân ở lại lo phần của nhà mình: người giữ giấy chết làm áo giáp thì gấp tờ giấy ấy cẩn thận như gấp một lá bùa; nhà đòi tên thì bắt đầu hỏi đường đi gõ cửa từng nơi. Văn Độ đã nhận chuyến tin tiếp theo của mạng lưới — còn những người nhà khác chưa tìm tới được, còn những cái tên khác chưa được gọi — và anh còn dẫn đường, hôm nay, ngày mai, và sau khi đoàn rời bến này. Tiểu Lan, trước khi vào gian sau, ngồi lại một mình một lúc với cuộn chỉ đếm ngày của nàng, thêm một nút vào sợi chỉ bằng đôi tay phải tự ra lệnh cho nhau như mọi ngày: một việc phàm của chính nàng, ghi lại những ngày đã qua bằng chỉ và nút thắt, không liên quan gì tới những gì nàng đã mất — nàng vẫn là người tự ghi lại đời mình, bằng cách chậm rãi nhất mà nàng có."
    ],
    "dialogue": [
      {
        "speaker": "Người thân nhân",
        "text": "…Tôi gọi đây. Tôi gọi tên người nhà tôi đây. Ai nghe tiếng tôi thì ra đi. Giấy nào nói chết mặc giấy. Tôi gọi người sống."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa bác, nhà mình giữ nguyên tờ giấy chết một thời gian cũng là một cách lo cho người vừa về. Tôi không sửa bác. Tên trả về tay nhà mình rồi — nhà mình dùng lúc nào, là quyền của nhà mình."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Bé Sáu, tôi hỏi em một việc của riêng em. Đoàn sắp đi về phía Long Hải. Em ở lại bến này cũng được — có cơm, có chỗ ngủ, có người quen. Em đi theo đoàn cũng được. Em tự chọn. Không chọn cũng được, mình tính cách khác. Em muốn sao?"
      },
      {
        "speaker": "Bé Sáu",
        "text": "Con đi theo. Ở đây… đêm nào con cũng nghe gõ. Đi theo cô… con ngủ được. Con đếm sỏi thôi, con không nghe gõ nữa. Con đi theo."
      },
      {
        "speaker": "Cao Minh",
        "text": "Thêm một cái bóng đi đường. Được. Đường dài có thêm tiếng đếm sỏi cũng vui. Mà nói trước: bổn tọa không cõng ai qua sông đâu — qua sông có ghe của Văn Độ rồi."
      },
      {
        "speaker": "Tạ Văn Độ",
        "text": "Thưa cô, chuyến tin sau tôi chạy sáng mai. Còn nhà chưa tới được, tôi còn chạy. Đường này tôi chạy tới khi nào hết người cần gọi tên thì thôi."
      }
    ],
    "choices": [
      {
        "id": "honor_both_families",
        "text": "Tôn trọng trọn cả hai cách xử lý giấy chết, đoàn không ghi lại cách nào — đoàn tự bỏ việc ghi chép hai tiền lệ quý cho bộ chứng cứ.",
        "next": "vt_wharf_contained",
        "effects": {
          "civiliansSavedDelta": 2
        },
        "route": {
          "id": "bao_ho",
          "delta": 1
        },
        "flags": {
          "vtBeSauTravels": true
        }
      },
      {
        "id": "witness_one_name",
        "text": "Chỉ đứng làm chứng miệng cho nhà đòi lại tên ngay, nhà kia để yên tuyệt đối — đoàn gắn tên mình vào một vụ đòi tên công khai ở bến.",
        "next": "vt_wharf_contained",
        "effects": {
          "lanTrustDelta": 2
        },
        "route": {
          "id": "tu_quyet",
          "delta": 1
        },
        "flags": {
          "vtBeSauTravels": true
        }
      }
    ]
  },
  "vt_wharf_contained": {
    "id": "vt_wharf_contained",
    "contentStatus": "approved",
    "stageId": "vung_tau",
    "title": "Mạng trả lời lần cuối tại bến",
    "backgroundId": "coffin-wharf",
    "location": "Sân bến Phúc Thọ — đêm cuối của đoàn ở bến",
    "companions": [
      "npc_porter",
      "le_thu_nguyet"
    ],
    "narration": [
      "Đêm cuối của đoàn ở bến Phúc Thọ, mạng trả lời. Nó tới như nó đã tới trong đêm phong tỏa đầu tiên của đoàn ở bến này: nhịp lệnh dồn qua trạm bến trong đêm — tiếng chuông ở chòi trạm khẽ rung lên không ai đánh, ống đồng dọc bến ngân một hồi ngắn, mạn những chiếc thuyền neo ngoài cầu tàu gõ vào nhau theo một tiết tấu không thuộc về sóng nước. Nhưng đêm nay mục tiêu của nó rõ ràng và gần hơn: nó không dò dẫm nữa. Nó dồn nhịp xuống sân bến để kéo phu bến đang ngủ và số người được cứu còn dở việc giấu trong gian sau đi theo nhịp của nó — kéo họ đứng dậy, kéo chân họ bước về phía cầu tàu, như nó đã từng kéo tay phu tàu chèo trên con tàu bị chặn. Cả bến chìm trong một thứ nửa tỉnh nửa mê của nhịp lệnh: người ta ngồi dậy mà mắt chưa mở, tay vịn vào cột nhà mà không hiểu sao tay mình lại muốn bước đi.",
      "Trong gian sau, người được cứu là những người nhận ra cơn nhịp sớm nhất, vì thân thể họ đã thuộc nó lâu nhất: có người đang ngủ bỗng ngồi bật dậy, miệng lẩm bẩm đếm theo một nhịp không phải của mình; có em nhỏ ôm chặt lấy người lớn bên cạnh, tay gõ khẽ vào vách theo tiết tấu cũ như một thói quen của máu thịt chưa kịp quên; người đàn bà từng ngạt trong khoang đáy bám lấy cột giường, nước mắt chảy mà không hiểu vì sao mình khóc. Bé Sáu nắm chặt bọc sỏi của mình trong tay, không đếm, chỉ nắm — như nắm một lời hứa rằng tay này là của mình. Cả cái bến, trong mấy khắc ấy, là một sân khấu của những thân thể đang bị một bàn tay ở rất xa mượn đi từng chút một, lặng lẽ, không tiếng kêu, không máu me — chỉ có nhịp, và những con người đang mất mình theo nhịp.",
      "Khác biệt của đêm nay nằm ở một điều rất đơn giản: không ai cần Tiểu Lan bước vào mạng. Nàng ở giữa sân, giữa những con người đang chao đảo trong nhịp, và làm phần việc của người thường — phần việc duy nhất của nàng đêm nay. Việc phong tỏa là của Cao Minh một mình, và hắn làm nó trọn vẹn một mình, từ đầu tới cuối, không cần một nhịp phụ nào của bất cứ ai. Đêm nay, ở bến này, trần sức mạnh của những ngày ở Phúc Thọ hiện ra tận mắt, trọn vẹn — không qua lời kể của ai, không qua tin đồn của bến: qua tiếng chuông đang rung dở dang trên chòi trạm.",
      "Tiếng chuông khựng lại giữa nhịp. Nó đang rung lên theo lệnh từ trạm, và nó dừng — dừng giữa chừng, như một câu nói bị ai bịt miệng bằng một bàn tay vô hình. Cùng khoảnh khắc ấy, ống đồng dọc bến tắt tiếng giữa một hồi ngân. Mạn thuyền ngoài cầu tàu gõ thêm một tiếng lạc nhịp rồi yên. Trong sân, những bàn tay phu bến đang giơ lên giữa chừng — tay đang bị kéo theo nhịp bước đi — hạ xuống, chậm rãi, thành tay của chính họ: có người nắm lại bàn tay mình như nắm một vật vừa suýt đánh rơi, có người ngồi phịch xuống nền sân, thở dốc, nhìn quanh như vừa tỉnh khỏi một giấc mơ đứng. Mọi nguồn nhịp trong tầm bến câm đồng loạt. Và ở giữa sự câm lặng đột ngột ấy, Cao Minh vẫn ngồi ở chỗ của hắn ở hiên chòi bến, chén rượu trong tay không sánh một giọt. Hắn không đứng dậy. Hắn không cần đứng dậy. Hắn chỉ đặt chén rượu xuống, nhìn về phía trạm bến tối om một lúc, rồi rót chén khác.",
      {
        "text": "Ở vòng sân, Thu Nguyệt làm việc người thường cùng Tiểu Lan suốt cơn nhịp: nàng gọi tên từng người phu mà nàng biết, nắm tay người nào đang chao đảo dắt về chỗ ngồi, và giữ vòng trẻ con ở gian sau ngồi yên trong vòng tay của những người lớn vừa tỉnh. Đêm nay nàng chỉ là thêm một người phàm nữa trong sân — không chức năng gì đặc biệt, chỉ có mặt, và gọi đúng tên người ta.",
        "if": "thuNguyetFollows"
      },
      {
        "text": "Ở vòng sân, phần việc người thường đêm nay do phu ca gác và Bá Hòe gánh cùng Tiểu Lan: người gọi tên, người dắt kẻ chao đảo về chỗ ngồi, người giữ cửa gian sau cho vòng trẻ con ngồi yên. Mọi việc chậm hơn một nhịp so với khi sân có thêm một đôi tay quen, nhưng đêm không rối: tên vẫn được gọi đủ, người vẫn được giữ đủ, và không ai trong sân nhắc tới một người vắng mặt nào giữa cơn nhịp ấy.",
        "unless": "thuNguyetFollows"
      },
      "Phần của Tiểu Lan trong đêm câm lặng ấy thuần là phần của con người, và nàng làm nó không sót một người. Nàng đi giữa sân, gọi tên: gọi Bá Hòe trước để anh tỉnh hẳn mà giữ sổ và giữ sân; gọi từng người phu theo ca gác của họ; gọi những người được cứu còn thức bằng đúng tên họ đã được gọi sống lại. Nàng xếp chỗ ngồi cho người vừa tỉnh khỏi nhịp — ngồi xuống đất, lưng tựa tường, chén nước đưa tận tay — và giữ cả sân khỏi cơn hoảng loạn thường tới sau khi nhịp buông ra: không chạy, không la, ngồi yên, thở, uống nước. Nàng không nói một câu nào về nhịp, về mạng, về kẻ ra lệnh ở xa. Đêm nay miệng nàng chỉ có tên người và nước uống. Sau khi sân đã yên, người bến tự giải thích chuyện đêm nay cho nhau nghe như họ vẫn làm — có người nói đúng được một nửa sự thật rồi thôi, không nói thêm; và có một người phu trẻ, sau một lúc ngồi nhìn bàn tay mình, tự đứng dậy nói với Bá Hòe rằng đêm nay anh xin ở lại giữ gian sau — người phàm tự đứng lên giữ phần của mình, không cần ai phong tỏa thay cho đời họ.",
      "Sáng ra, đoàn biết chắc một điều bằng mắt mình, và điều ấy là thước đo thật của cả những ngày ở bến này: ngoài cửa sông, một con tàu khác của tuyến vẫn chạy đúng lịch của nó, phu chèo đều, giấy tờ đầy đủ, không ai trên bờ ngẩng lên nhìn. Trạm xa ngoài kia vẫn truyền nhịp xuống mặt nước theo giờ của nó. Tuyến còn nguyên. Mạng chưa hề bị chặn. Cái đoàn đã chặn được, trong những ngày này, là một chuyến hàng — và những con người cụ thể trên chuyến hàng ấy: những đứa trẻ ra khỏi quan tài bằng tên của mình, những người sống ra khỏi khoang đáy, một người ra khỏi kho than bằng đường của Văn Độ, những cái tên được gọi sống lại giữa sân sau. Không ai trong đoàn gọi buổi sáng ấy là thất bại. Nó là một thắng lợi có kích thước thật — kích thước của một chuyến tàu, và của từng con người trên chuyến tàu đó."
    ],
    "dialogue": [
      {
        "speaker": "Cao Minh",
        "text": "Ồn."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Anh Hòe, ngồi xuống đây. Uống nước. — Bác phu ca ba, bác ngồi tựa tường cho tôi. — Các em trong gian sau cứ ngồi yên, có người lớn ở cửa rồi. Không ai phải đi đâu hết đêm nay. Tên ai tôi gọi, người ấy đáp một tiếng cho tôi nghe là đủ."
      },
      {
        "speaker": "Trương Bá Hòe",
        "text": "Thưa cô… tay tôi… nó là của tôi rồi. Sổ đây. Sân đây. Tôi giữ được. Cô cứ lo cho người trong gian sau."
      },
      {
        "speaker": "Người phu trẻ",
        "text": "Anh Hòe, đêm nay cho tôi ở lại giữ gian sau. Tay tôi là của tôi — tôi giữ cửa cho người ta ngủ. Khỏi cần ai giữ thay."
      }
    ],
    "choices": [
      {
        "id": "stay_till_dawn_watch",
        "text": "Ở lại sân tới sáng cùng người bến, để họ tự thấy bến yên khi không còn nhịp — đoàn mất giấc ngủ cuối trước chuyến đi.",
        "next": "vt_rice_seed_yard",
        "effects": {
          "lanHealthDelta": -2,
          "civiliansSavedDelta": 2
        },
        "route": {
          "id": "bao_ho",
          "delta": 1
        },
        "flags": {
          "vtNetworkIntact": true
        }
      },
      {
        "id": "leave_the_quiet_behind",
        "text": "Rút về gian sau ngay khi nhịp câm, để bến tự làm quen với sự yên tĩnh không có đoàn — có phu bến hiểu lầm đoàn bỏ mặc họ giữa đêm.",
        "next": "vt_rice_seed_yard",
        "effects": {
          "lanTrustDelta": 2
        },
        "route": {
          "id": "tu_quyet",
          "delta": 1
        },
        "flags": {
          "vtNetworkIntact": true
        }
      }
    ]
  },
  "vt_rice_seed_yard": {
    "id": "vt_rice_seed_yard",
    "contentStatus": "approved",
    "stageId": "vung_tau",
    "title": "Hạt linh mễ giữa sân tang quán",
    "backgroundId": "phuc-tho-tang-quan-yard",
    "location": "Sân Phúc Thọ Tang Quán — ngày 3, buổi sáng rời bến",
    "companions": [
      "npc_porter"
    ],
    "narration": [
      "Buổi sáng đoàn rời Phúc Thọ, sân tang quán vẫn là sân tang quán. Quan tài vẫn xếp dãy dọc tường như ngày đoàn mới tới, phu vẫn khiêng, sổ vẫn mở, việc chết của cái bến này không dừng lại một ngày nào vì những chuyện đã xảy ra trong sân của nó. Giữa cái sân lo việc chết ấy, Cao Minh làm một việc tùy tiện cuối cùng của hắn ở bến này: hắn để lại một nắm hạt. Vô Chủ Tiên Mễ — hạt gạo không thuộc sổ sách nào, không thuộc quỹ cước nào, không ghi nợ cho ai. Hắn để nó xuống như người ta để lại một món đồ thừa trong túi áo: không nghi lễ, không tuyên bố, không đặt tên cho hành động của mình, không chờ ai cảm ơn. Nắm hạt rơi vào tay người bến trước khi bất cứ ai kịp hiểu nó là thứ gì — một nắm hạt trắng lạ, nặng tay hơn gạo thường, nằm giữa sân của một nơi chuyên lo chuyện chôn cất, như một câu nói lạc giọng.",
      "Người đầu tiên hiểu đúng giá trị thật của nắm hạt không phải người tu hành nào. Là Bá Hòe. Anh nhìn nắm hạt, rồi nhìn quanh sân, và hiểu ngay điều mà cả những ngày ở bến này đã dạy anh: thứ sẽ bị tranh nhau chưa bao giờ là hạt. Hạt thì ít, ăn một bữa là hết. Thứ bị tranh là quyền trông giữ và quyền chia — ai cầm phần hạt còn lại, ai quyết nhà nào được gieo, nhà nào được ăn. Cách chia vì thế được sắp ngay tại sân, trước khi tin kịp đi xa: một phần gieo thử ở góc sân tang quán, xuống đất của nơi lo việc chết; một phần chia cho gia đình những người được cứu mang về quê họ; phần còn lại, Bá Hòe giữ phần trông sân — anh ở lại Phúc Thọ với cái bến này, với cuốn sổ của anh, và từ nay với một góc sân có thứ hạt lạ đang nằm trong đất. Anh nhận phần việc ấy bằng cách của người bến: nhận việc, không nhận ơn.",
      "Một phần hạt thử được nấu ngay sáng ấy thành cháo, trong cái bếp nhỏ sau tang quán. Và đây là cảnh của Tiểu Lan. Nàng ăn chén cháo linh mễ trước mặt cả đoàn, ăn chậm rãi như mọi bữa ăn của nàng — và khỏe lên trông thấy trong giới hạn thường của một người bệnh được bồi bổ đàng hoàng: sắc mặt hồng lại, hơi thở sâu hơn, tay cầm muỗng vững hơn một chút, bữa ăn ngon miệng như một bữa ăn ngon. Rồi nàng tự nói rõ giới hạn của nó, nói tỉnh táo như người kê một bản kê về chính thân thể mình: phần phối hợp tự chủ đã mất của nàng không trở lại. Tay chân nàng vẫn phải tự ra lệnh cho nhau như mọi ngày. Không đan dược nào, không linh mễ nào trả lại được phần ấy — nàng biết, nàng nói, và nàng ăn hết chén cháo, vì đổ đi thì phí. Ăn xong, nàng xin thêm một món rất phàm: món cá kho — kho từ cá khô và muối nàng tự tay mua ở chợ cá bến này trong buổi sáng đầu tiên của chuyến đi, bằng tiền của chính nàng. Cao Minh bật cười thành tiếng — cười vào sự tỉnh táo ngon miệng ấy của nàng, cười như người vừa xem được một màn hay, tuyệt nhiên không một mảy may nào của tiếng cười ấy chạm vào phần đã mất của nàng.",
      {
        "text": "Trước giờ ghe đi, Thu Nguyệt có một trao đổi ngắn với Bá Hòe ở góc sân — người ở lại và người đi chỉ tiễn nhau bằng mấy câu thường: giữ sân cho khỏe, đi đường cho yên, có tin thì gửi theo đường của Văn Độ. Nàng đi cùng đoàn rời bến này, lùi đúng nửa bước sau cô chủ của mình như mọi ngày.",
        "if": "thuNguyetFollows"
      },
      {
        "text": "Trước giờ ghe đi, đoàn để lại một lời nhắn thường theo đường tin của Văn Độ, gửi về phía Long Hải cho người ở lại nơi ấy: chỉ là mấy chữ cho biết đoàn đã rời Phúc Thọ an toàn và đang trên đường về. Một lời nhắn đi một chiều, bình thường như mọi lời nhắn của người bến gửi nhau.",
        "unless": "thuNguyetFollows"
      },
      "Lời chia tay ở sân tang quán diễn ra ở mức phàm, như mọi việc bền lâu ở bến này vẫn diễn ra. Bá Hòe ở lại: ở lại với bến, với sổ giao ca, với góc sân có hạt đang nằm trong đất chờ nảy mầm hay không nảy mầm — số phận của anh ở lại gắn với cái bến này, và sáng nay không có một lời nào trong sân nghe như lời vĩnh biệt. Bé Sáu đã có chỗ của mình trong đoàn đi, theo đúng quyết định em tự chọn hôm qua — sáng nay không ai hỏi lại em nữa; em ngồi trên ghe với bọc sỏi của mình, đếm một lượt cho yên lòng rồi thôi. Bộ chứng cứ giấy của cả chuyến đi — tờ biên nhận ghi tên nàng, hai tờ ghi nợ, những tờ giấy chết — đi cùng Tiểu Lan, trong tay nàng, sang chặng đường kế tiếp, như chúng đã ở trong tay nàng từ đầu.",
      "Đoàn rời Phúc Thọ hướng về Long Hải. Nhưng tin về bến này đã đi trước họ từ lâu: tin một con tàu bị chặn giữa sông, tin những cái tên được gọi sống lại giữa sân sau của tang quán, tin một nắm hạt lạ được gieo xuống đất của nơi lo việc chết — tin ấy đi bằng đường sông của Văn Độ, bằng miệng người bến qua từng chặng ghe, nhanh hơn ghe của đoàn nhiều. Ở Long Hải, nơi đoàn sắp về tới, người ta đã bắt đầu tụ lại phía đạo quán tự lúc nào — dân quê, người bến, người nghe tin nửa tin nửa ngờ kéo nhau về một chỗ mà chính họ cũng chưa gọi được tên. Một việc lớn đang chờ ở đó, lớn theo cách của người phàm tụ lại vì một tin đồn. Ghe của đoàn đi ngược nước trong nắng sớm. Sau lưng họ, sân tang quán ở lại với dãy quan tài, cuốn sổ, và một góc đất vừa được gieo hạt. Trước mặt họ, Long Hải."
    ],
    "dialogue": [
      {
        "speaker": "Cao Minh",
        "text": "Mấy hạt gạo thừa trong tay áo. Để lại đây. Đất ở sân này cứng, coi nó có mọc nổi không. Mọc thì các ngươi ăn. Không mọc thì coi như bổn tọa vừa chôn một nắm gạo — cũng hợp với nghề của sân này."
      },
      {
        "speaker": "Trương Bá Hòe",
        "text": "Thưa ông thầy, phần trông sân, tôi nhận. Hạt gieo góc nào, chia nhà nào, tôi ghi vào sổ của tôi đàng hoàng. Ở bến này, thứ gì qua tay tôi thì có dấu của tôi. Ông thầy cứ yên tâm mà đi."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài, tôi nói cho rõ một lần, để khỏi ai mừng hụt thay tôi. Cháo này làm tôi khỏe — khỏe như người bệnh được ăn đàng hoàng, vậy thôi. Phần tự chủ đã mất của tôi, nó không về. Tay tôi vẫn phải tự lệnh cho tay tôi, như mọi ngày. Không thứ gạo nào, không viên thuốc nào trả nó lại được. Tôi biết vậy. Và tôi ăn hết chén này — đổ đi thì phí của trời."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Còn cá kho không, thưa bác bếp? Cá khô với muối tôi mua ở chợ cá bữa đầu ấy. Kho cho tôi một niêu nhỏ. Ăn cháo mà có cá kho, mới gọi là một bữa."
      },
      {
        "speaker": "Cao Minh",
        "text": "Ngon miệng, tỉnh táo, và không chịu để ai thương hại thay mình. Nàng ăn một chén cháo mà làm bổn tọa buồn cười hơn cả ván cờ của hai ông chủ bến này cộng lại."
      }
    ],
    "choices": [
      {
        "id": "seed_shared_openly",
        "text": "Chia hạt công khai ngay tại sân cho mọi nhà có mặt — ai cũng biết sân tang quán có hạt lạ, và cuộc tranh quyền phân phối bắt đầu từ đây.",
        "next": "ky3_01_stub",
        "effects": {
          "civiliansSavedDelta": 2,
          "suppliesDelta": 1
        },
        "route": {
          "id": "bao_ho",
          "delta": 1
        },
        "flags": {
          "vtRiceSeedPlanted": true
        }
      },
      {
        "id": "seed_quiet_portions",
        "text": "Chia lặng lẽ từng phần theo nhà, phần gieo thử giữ kín trong sân — đoàn rời bến muộn hơn một chặp, triều đi Long Hải kém thuận.",
        "next": "ky3_01_stub",
        "effects": {
          "lanTrustDelta": 2,
          "suppliesDelta": 1
        },
        "route": {
          "id": "tu_quyet",
          "delta": 1
        },
        "flags": {
          "vtRiceSeedPlanted": true
        }
      }
    ]
  },
  "ky3_01_stub": {
    "id": "ky3_01_stub",
    "contentStatus": "placeholder",
    "stageId": "long_hai",
    "title": "Người tụ về Long Hải",
    "backgroundId": "long-hai-coast",
    "location": "Bến Long Hải — buổi sáng đoàn trở về",
    "companions": [],
    "narration": [
      "Ghe vào bến Long Hải lúc nắng mới lên khỏi mặt nước. Đoàn đi vắng chưa đầy ba ngày mà bến đã khác: thường giờ này bến chỉ có người gánh cá và mấy phu khuân vác chờ việc; sáng nay người đứng kín cả lối xuống nước — dân chài ôm nón đứng chen với đàn bà gánh thúng không, người bán hàng rong bỏ cả sạp mà nhón lên phía trước, và ở rìa ngoài, mấy đứa trẻ trèo lên đống lưới phơi để nhìn cho rõ một đoàn người vừa cứu sống những kẻ đã bị ghi trên giấy là chết.",
      "Không ai reo hò. Tiếng đồn đi trước ghe của đoàn mấy chặng sông không mang hình thù gì rõ ràng — người thì nói vị thầy pháp ở biệt thự Hứa Gia sắp mở một chỗ chữa bệnh ở phía làng, người thì nói đoàn mang theo thứ gạo ăn vào thì người liệt cũng ngồi dậy được, kẻ lại thề rằng họ hàng của họ tận mắt thấy một con tàu chở quan tài bị chặn giữa sông và những đứa trẻ trong quan tài được bế lên bờ, còn thở, còn khóc. Đồn càng đi xa càng phình to, nhưng mọi phiên bản đều giữ chung một hạt nhân không đổi: ở Phúc Thọ, những người đã chết trên giấy được gọi lại bằng tên thật của họ, và được đối xử như người sống.",
      "Đám đông tự dạt ra thành một lối đi khi đoàn bước lên bờ, lặng như nước rút. Người ta nhìn Cao Minh trước — nhìn hai thanh kiếm lơ lửng sau lưng hắn, nhìn vạt áo không dính một hạt bụi đường sông — rồi nhìn sang Tiểu Lan được dìu ở giữa, và cái nhìn ấy đổi khác: mềm hơn, và cũng dò xét hơn. Có người thì thầm hai chữ cô chủ như gọi một người trong nhà; có người chỉ cúi đầu. Ở hàng cuối, một người đàn ông mặc áo lính lệ đứng lẫn trong đám phu, tay không cầm sổ mà mắt thì ghi rất kỹ — hắn đứng thêm một lúc sau khi đoàn đi qua, rồi lặng lẽ rẽ khỏi bến theo hướng ngược lại, về phía đường cái.",
      "Người bệnh được khiêng tới thật. Ba chiếc võng, hai tấm chiếu trải vội ở rìa sân, một bà cụ được con cháu cõng trên lưng — họ nằm đó từ trước khi ghe cập bến, như thể chỉ cần nằm đúng chỗ đoàn sẽ đi qua là đã nắm được một phần cơ hội. Không ai trong số họ kêu khóc hay van xin thành tiếng; người đất này quen chịu đựng lặng lẽ, và cái lặng lẽ ấy, sáng nay, nặng hơn mọi tiếng gào. Tiểu Lan đi chậm lại khi qua chỗ họ nằm. Nàng không hứa gì — nàng chỉ nhìn từng người một, và gật đầu với người nhà đang quỳ bên cạnh, như ghi nhận rằng họ có mặt, rằng họ là người, rằng chuyến khiêng vất vả này không vô hình.",
      {
        "if": "thuNguyetFollows",
        "text": "Thu Nguyệt đi ở phía sau đoàn, gói đồ vẫn buộc trên lưng như hôm rời cổng. Cô nhận ra trong đám đông hai người quen cũ từ hồi còn chạy việc ở bến Chợ Lớn — họ cũng nhận ra cô, và cái nhận ra ấy làm cô khựng lại: tin về đoàn đã chạy nhanh đến mức người của những bến xa hơn cũng đã biết mặt người trong đoàn. Cô cúi đầu chào họ từ xa, không dám bắt chuyện; phận sự của cô sáng nay là đi sát cô chủ, và cô biết rõ một lời nói hớ của mình có thể thành một con đường cho kẻ khác lần tới."
      },
      {
        "text": "Trong đoàn trở về sáng nay không có Thu Nguyệt. Cô ở lại phía sau cánh cổng biệt thự, bên cạnh bà Năm Liên, giữ phần việc thầm lặng mà chính cô đã chọn — và sáng nay, khi đám đông hỏi han nhau về từng người trong đoàn, không một ai ở bến này nhắc tới tên cô. Đường tin của cô, nếu còn chạy được, sẽ tới sau, bằng cách của nó.",
        "unless": "thuNguyetFollows"
      },
      "Bé Sáu ngồi trên đống lưới cùng mấy đứa trẻ trong làng, bọc sỏi của em đặt gọn trong lòng. Trẻ con trong làng xúm lại hỏi em đi đâu về; em chỉ lắc đầu, rồi — sau một lúc rất lâu — em nói một câu ngắn về một con tàu tối và tiếng gõ. Không đứa trẻ nào cười. Một đứa lớn nhất trong bọn lặng lẽ chia cho em nửa củ khoai nướng, và em nhận lấy bằng hai tay. Ở rìa sân, những gia đình được cứu ở Phúc Thọ đang được người của đường tin dìu về chỗ nghỉ tạm; có người vừa đặt chân lên đất Long Hải đã quỳ xuống, không phải lạy ai, chỉ là chân không còn đứng vững sau những ngày nằm trong bóng tối của khoang tàu.",
      "Giữa lúc ấy, Cao Minh phẩy tay một cái, nhẹ như phủi bụi áo. Gió biển đang quất cát vào mặt đám đông bỗng lặng hẳn trong khoảnh sân trước mặt đoàn, nắng vẫn nắng, người vẫn người, chỉ có tiếng ồn của mấy trăm con người hạ xuống thành một lớp thì thầm đều đều — và ở rìa sân, mấy người bệnh đang thoi thóp thở bỗng thở đều lại được, như có ai vừa nhấc một tấm chăn ướt khỏi ngực họ. Không có sấm, không có sáng chói, không ai bị thương. Mấy người đứng gần nhất vô thức lùi nửa bước. Họ vừa được nhắc, rất nhẹ nhàng, rằng người đàn ông đứng trước mặt họ không phải một thầy lang — và rằng khoảng cách giữa hắn với họ không đo bằng thứ gì họ có.",
      "Đám đông ở lại tới gần trưa mới tan dần. Họ để lại nhiều thứ hơn họ mang tới: tên của những người bệnh nhờ cậy, những lời nhắn gửi cho người thân còn kẹt ở đâu đó trên tuyến sông, mấy giỏ cá và thúng khoai đặt lặng lẽ ở rìa sân mà không ai dám nói là của ai. Cao Minh không nhận cũng không từ chối thành lời; hắn để mặc chúng ở đó, như để mặc mọi thứ tự tìm lấy chỗ của nó. Tiểu Lan cho ghi lại những cái tên được gửi gắm lên một tờ giấy sạch — không phải sổ nợ, không phải danh sách của ai; chỉ là tên người, viết ngay ngắn, để không ai trong số họ bị biến mất một lần nữa mà không ai hay."
    ],
    "dialogue": [
      {
        "speaker": "Ông từ làng",
        "text": "Thưa ông thầy, chúng tôi không dám làm phiền lâu. Chỉ là trong làng có mấy người bệnh nằm liệt đã lâu, nghe tin ở bến Phúc Thọ có người được cứu sống, nên nhà họ khiêng tới tận đây. Ông thầy có xem cho họ được không?"
      },
      {
        "speaker": "Cao Minh",
        "text": "Bổn tọa mới bước lên bờ, chân còn chưa ráo nước. Đám người này, tin đồn mới chạy được ba ngày mà đã khiêng cả người bệnh theo. Đúng là biết nắm lấy bất cứ thứ gì trôi qua trước mặt."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa bác, thuốc thang của ngài ấy không phải thứ tôi dám hứa thay cho ai. Nhưng người bệnh đã được khiêng tới đây thì xin đừng khiêng về vội. Cho họ nằm chỗ mát, cho họ uống nước. Việc gì tới, rồi sẽ tới — tôi chỉ dám nói chắc một điều: ở đây, không ai bị ghi là đã chết khi họ còn đang thở."
      },
      {
        "speaker": "Hứa Tiểu Lan",
        "text": "Thưa ngài, họ kéo tới không hẳn vì tin ngài là thần tiên. Họ tới vì nghe nói ở Phúc Thọ, người ta được gọi bằng tên thật của mình. Ở đất này, một người nghèo được gọi đúng tên, được nhìn như một con người — đã là thứ ơn mà nhiều người cả đời chưa từng nhận."
      },
      {
        "speaker": "Cao Minh",
        "text": "Hay. Bổn tọa còn chưa buồn làm gì ở đất này, mà kiến đã tự kéo nhau tới xây tổ quanh chỗ bổn tọa đứng. Cứ để chúng tới. Người càng đông, ván cờ càng vui — và bổn tọa cũng đang muốn xem, khi có một chỗ để kéo tới, đám người này sẽ kéo theo những thứ gì khác sau lưng."
      }
    ],
    "choices": [],
    "sliceEnd": true
  }
});
