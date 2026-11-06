// LIBERA-1899: fixed-script Long Hai vertical slice.
// All prose and effects in this module are authored, never generated at runtime.
// Scene backgrounds reuse existing repository snapshots.
export const VN_START_SCENE = "lh_prologue";
export const VN_SCENES = Object.freeze({
  lh_prologue: {
    id: "lh_prologue", title: "Vầng sáng dưới Vạn Hoa Lầu",
    backgroundId: "long-hai-exterior", location: "Long Hải, Nam Kỳ",
    narration: [
      "Lôi Thiên Sơn chìm trong mây. Tại Vạn Hoa Lầu, Cao Minh vừa nâng chén rượu thì một vòng sáng không mang lấy nửa điểm linh lực bỗng mở ra dưới chân.",
      "Hắn chưa từng gặp một vật nào có thể vượt khỏi thần niệm mình mà không lưu lại dấu. Nhưng lần này, cả chén rượu và người uống đã rơi khỏi phương trời quen thuộc.",
      "Long Hải, năm 1899. Trước mắt hắn là tòa biệt thự của Hứa Gia. Đèn dầu còn cháy sau cửa sổ, ngoài sân có tiếng người cố nén một cơn ho.",
      "Bên trong ngôi nhà, một mạng liên kết đang vận hành qua những con người vẫn còn tỉnh táo. Hắn có thể chém nát cả tòa biệt thự. Vấn đề là những người bên trong cũng sẽ chết."
    ],
    choices: [
      { id:"enter", text:"Bước vào biệt thự, giữ nguyên mạng sống của gia nhân.", next:"lh_hall", effects:{lanTrustDelta:0} },
      { id:"strike", text:"Một kiếm phá hết cả biệt thự để kết thúc tà khí.", next:"lh_dead_blade" }
    ]
  },
  lh_dead_blade: {
    id:"lh_dead_blade", title:"Dead End 01 · Một kiếm quá dễ",
    backgroundId:"long-hai-exterior", deadEnd:true,
    narration:[
      "Lưỡi kiếm đi qua cửa, tường, bàn thờ và cả những mắt nối vô hình. Mọi thứ bị chém đứt sạch sẽ. Không một trận pháp nào đỡ được.",
      "Rồi từ dưới đống ngói đổ, có tiếng người gọi tên một cô gái. Không ai trả lời. Cao Minh đã thắng thứ hắn định chém, nhưng không giữ được một người nào để hỏi họ có muốn được cứu như thế hay không.",
      "Một kết cục không thể tiếp tục. Hãy trở lại trước khi kiếm rời vỏ."
    ],
    choices:[{id:"retry",text:"Trở lại trước lựa chọn",retry:true}]
  },
  lh_hall:{
    id:"lh_hall", title:"Hành lang biệt thự", backgroundId:"long-hai-hallway",
    objective:"infiltrate_villa",
    narration:[
      "Cánh cửa lim mở ra không cần một tiếng động. Cao Minh đi qua hành lang, nơi chân đèn đã cháy ngắn mà vẫn có người thay dầu đúng giờ.",
      "Một gia nhân nép bên vách. Đồng tử người ấy đảo về phía gian phòng cuối hành lang, nhưng tay lại tự động kéo then ngăn lối. Cử động trái với ánh mắt.",
      "Cao Minh không rút kiếm. Một người đang bị bắt phải canh cửa không phải kẻ ra lệnh canh cửa."
    ],
    dialogue:[{speaker:"Cao Minh",text:"Bổn tọa hỏi ngươi một lần. Trong phòng có người còn sống phải không?"}],
    choices:[
      {id:"observe",text:"Dùng Vạn Giới Thần Niệm phân biệt lệnh và ý chí.",next:"lh_lan_room",effects:{cluesHuaGiaDelta:1}},
      {id:"restrain",text:"Khống chế người gác mà không làm tổn thương.",next:"lh_lan_room",effects:{lanTrustDelta:1}}
    ]
  },
  lh_lan_room:{
    id:"lh_lan_room",title:"Tên nàng dưới lớp vải",backgroundId:"long-hai-lan-room",
    objective:"locate_tieu_lan",
    narration:[
      "Hứa Tiểu Lan ngồi dựa gối. Trên gương mặt và đôi tay là những vết sẹo đỏ sần khiến người ngoài chỉ muốn quay đi. Nàng không quay đi khi thấy khách lạ.",
      "Thần niệm chỉ cho Cao Minh thấy sự thật đáng sợ hơn những vết thương: các đường điều phối đã luồn vào hệ thần kinh, vận hành thay những chức năng vốn thuộc về cơ thể nàng.",
      "Sát Ma Kiếm có thể chém đứt toàn bộ ma chướng. Hắn biết chính xác mình phải chém ở đâu. Hắn cũng biết nếu cắt tất cả ngay lúc này, người nằm trên giường sẽ không còn thở.",
      "Lần đầu tiên từ khi đến đây, Cao Minh đặt tay khỏi chuôi kiếm."
    ],
    dialogue:[
      {speaker:"Hứa Tiểu Lan",text:"Ngài nhìn thấy gì mà người nhà ta không nhìn thấy?"},
      {speaker:"Cao Minh",text:"Bổn tọa thấy một người còn sống. Chưa đến lượt kẻ khác quyết định thay nàng."}
    ],
    choices:[
      {id:"truth",text:"Nói đúng điều đã quan sát, không hứa chữa khỏi ngay.",next:"lh_servants",effects:{lanTrustDelta:4}},
      {id:"promise",text:"Hứa sẽ giữ nàng sống rồi mới tìm đường tháo gỡ.",next:"lh_servants",effects:{lanTrustDelta:2}}
    ]
  },
  lh_servants:{
    id:"lh_servants",title:"Bà Năm Liên và trang sổ cũ",backgroundId:"long-hai-hallway",
    objective:"classify_servants",
    narration:[
      "Bà Năm Liên giữ một tập giấy mỏng trong lớp vải lót đã sờn. Bà không tự nhận mình dũng cảm. Bà chỉ nói từng được nhị phu nhân Lâm Ngọc Chi giúp một lần, rất lâu trước khi bà dám quay lại.",
      "Trong một trang ghi chép cũ, có ba chữ Hứa Tiểu Lan. Nét mực không giống nét gạch xóa trong gia phả mà bà từng nhìn thấy.",
      "Ngoài cửa, người gác hành lang vẫn run rẩy vì đã cưỡng lại một mệnh lệnh. Người bị ép, người bị lừa và người tự nguyện giữ cửa không thể bị phán xét bằng cùng một nhát kiếm.",
      "Cao Minh nhận ra liên kết đầu tiên không nằm ở gân mạch. Nó nằm trong quyền được gọi tên của một con người."
    ],
    dialogue:[
      {speaker:"Bà Năm Liên",text:"Tôi giữ tờ giấy này lâu quá, đến nỗi suýt quên vì sao mình không dám đốt."},
      {speaker:"Cao Minh",text:"Tên của nàng không phải thứ ai muốn gạch thì gạch."}
    ],
    choices:[
      {id:"protect",text:"Ghi nhận lời khai và bảo vệ người bị cưỡng ép.",next:"lh_ritual",effects:{cluesHuaGiaDelta:2,lanTrustDelta:2}},
      {id:"separate",text:"Tách người tự nguyện với người bị điều khiển rồi giữ chứng cứ.",next:"lh_ritual",effects:{cluesHuaGiaDelta:2}}
    ]
  },
  lh_ritual:{
    id:"lh_ritual",title:"Lời từ chối đầu tiên",backgroundId:"long-hai-lan-room",
    objective:"break_long_hai_ritual",
    narration:[
      "Một mệnh lệnh lan qua căn phòng. Người gác bỗng giơ tay về phía bà Năm Liên, trong khi miệng anh ta van đừng để mình làm thế.",
      "Tiểu Lan nhắm mắt. Nàng không ra lệnh ngược lại, chỉ đẩy một tiếng phản thanh rất nhỏ vào khoảng ngừng giữa hai nhịp điều khiển. Bàn tay người gác dừng giữa không trung.",
      "Cao Minh dùng Tứ Kiếm Đoạn Mạch nhắm vào điểm nối của nghi thức bên ngoài cơ thể nàng, rồi dùng Sát Ma Kiếm chém đứt ma chướng. Điểm neo trong phòng tan đi. Người gác ngã khuỵu nhưng vẫn thở.",
      "Tiểu Lan mở mắt. Nàng nhớ bà Năm Liên đã đưa mình một tờ giấy, nhưng không thể nhớ bà vừa nói câu gì. Chỉ một câu nói vừa biến mất khỏi trí nhớ.",
      "Cao Minh kể lại nguyên văn. Nàng nghe, gật đầu, rồi hỏi nhỏ liệu đó là ký ức của nàng hay chỉ là lời hắn kể."
    ],
    dialogue:[
      {speaker:"Hứa Tiểu Lan",text:"Ta vẫn nghe được lệnh. Nhưng ta có thể không làm theo. Chỉ là... khi nãy bà ấy nói gì?"},
      {speaker:"Cao Minh",text:"Bổn tọa nhớ. Nhưng bổn tọa sẽ không bảo nàng rằng nàng cũng phải nhớ."}
    ],
    choices:[
      {id:"listen",text:"Để nàng tự quyết định khi nào cần nghe lại.",next:"lh_depart",effects:{lanTrustDelta:3,memoryIntegrityDelta:-3,lanHealthDelta:-2}},
      {id:"repeat",text:"Kể lại lời bà Năm Liên, nói rõ đây là lời thuật.",next:"lh_depart",effects:{lanTrustDelta:2,memoryIntegrityDelta:-3,lanHealthDelta:-2}}
    ]
  },
  lh_depart:{
    id:"lh_depart",title:"Rời biệt thự",backgroundId:"long-hai-exterior",
    narration:[
      "Nghi thức trong phòng đã bị phá, nhưng tiếng gọi từ mạng trùng ngoài biệt thự chưa dừng lại. Bà Năm Liên khép tập giấy, còn người gác ngồi tựa cột, lần đầu được tự chọn có đứng dậy hay không.",
      "Tiểu Lan bước tới cửa dưới ánh đèn cuối đêm. Những vết sẹo không biến mất. Nàng cũng không đòi Cao Minh hứa một điều mà hắn chưa biết có làm được.",
      "Hắn nhìn cánh cổng. Một kiếm đủ dọn sạch mọi vật cản. Nhưng người đi cùng hắn không phải một món đồ được mang đi.",
      "Đường tới Vũng Tàu còn ở phía trước. Câu chuyện chưa kết thúc ở cổng biệt thự."
    ],
    choices:[
      {id:"ask",text:"Hỏi Tiểu Lan có muốn rời biệt thự cùng mình không.",next:"lh_slice_end",objective:"escape_long_hai",effects:{lanTrustDelta:3},flags:{lanDepartureConsent:true}},
      {id:"order",text:"Tự ý quyết định đưa Tiểu Lan đi.",next:"lh_dead_consent"}
    ]
  },
  lh_dead_consent:{
    id:"lh_dead_consent",title:"Dead End 02 · Người được cứu không được hỏi",backgroundId:"long-hai-exterior",deadEnd:true,
    narration:[
      "Cao Minh đưa nàng qua cửa mà không hỏi. Không một ai đủ sức ngăn hắn. Tiểu Lan đi theo, yên lặng đến hết con đường.",
      "Khi hắn hỏi nàng có đau không, nàng chỉ đáp rằng lần sau hắn muốn đưa nàng đi đâu thì cứ quyết định trước. Nàng sẽ khỏi cần nói nữa.",
      "Đường thoát đã mở, nhưng quyền được từ chối mà nàng vừa giành lại đã bị người cứu nàng tước mất. Đây không phải con đường tiếp tục của bản truyện."
    ],
    choices:[{id:"retry",text:"Trở lại quyết định trước cổng",retry:true}]
  },
  lh_slice_end:{
    id:"lh_slice_end",title:"Hết lát cắt · Long Hải",backgroundId:"long-hai-exterior",sliceEnd:true,
    narration:[
      "Tiểu Lan nhìn lại biệt thự một lần. Nàng không còn bị khóa sau cửa, nhưng vẫn mang mạng trùng trong người. Trên tờ giấy bà Năm Liên giữ, tên nàng còn nguyên.",
      "Cao Minh không nói lời an ủi. Hắn đi chậm lại để nàng có thể bước cạnh mình.",
      "Lát cắt thử nghiệm Long Hải kết thúc tại đây. Các chặng tiếp theo sẽ được mở khi kịch bản viết sẵn hoàn thành."
    ],choices:[]
  }
});
