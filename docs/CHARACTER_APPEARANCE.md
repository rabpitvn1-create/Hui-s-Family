# Biến thể đồng phục Hạ Ô Môn

## Thiết kế

`src/character-appearance.js` khai báo đường dẫn và điểm bắt đầu trong
`CHARACTER_UNIFORM_RULES`. Hàm thuần `resolveCharacterOverlay(id, scene)` chỉ
chọn file cho một ID đã có. Không sửa `CHARACTER_OVERLAYS`, bảng speaker hay
`resolveCompanionId` trong `src/character-overlays.js`.

`scene.id` là nguồn xác định thời điểm. ID `lh_*` thuộc Kỳ I, `vt_*` thuộc
Kỳ II; `kyN_SS_*` được so sánh theo hai số Kỳ và thứ tự cảnh. Không so sánh
chuỗi, không suy ra Kỳ từ địa bàn `progression.stageId`, không dùng cờ gia nhập
hoặc lịch sử đã xem. Vì vậy tải save ở cảnh cũ khôi phục đúng trang phục cũ.
Cảnh không xác định được thời điểm dùng bản thường. Võ Văn Đức luôn dùng ảnh
đồng phục kể cả khi không có ngữ cảnh cảnh.

| Nhân vật | Điểm bắt đầu dùng đồng phục, bao gồm cảnh này |
| --- | --- |
| Nguyễn Văn Thạo, Trần Thị Mến, Dương Thất Nương, Phan Bảy Nện, Đào Nhất Bút, Đỗ Thị Hạnh, Bùi Tấn Lễ, Tống Nguyên Phúc | `ky3_04_*` |
| Bảy Lược | `ky4_03_*` |
| Bé Sáu | `ky3_01_*` |
| Võ Văn Đức | Luôn dùng `vo-van-duc-uniform.webp` |
| Cao Minh, Hứa Tiểu Lan | Không có quy tắc đồng phục; giữ luồng ảnh riêng |

ID nhân vật trong mã dùng dấu gạch dưới, ví dụ `do_thi_hanh`; tên file dùng
dấu gạch nối, ví dụ `do-thi-hanh-uniform.webp`. Đường dẫn được khai báo tường
minh, không ghép tên file từ ID.

## Các điểm tích hợp

* `src/ui-shell.js`: giữ nguyên dòng chọn `companionId`, chỉ thay phép lấy file
  bằng `resolveCharacterOverlay(companionId, snapshot.scene)`.
* `src/dialogue-avatars.js`: đăng ký avatar crop cho 11 nhân vật, giữ `overlayId`
  trong mô tả avatar, chọn file bằng cùng resolver tại thời điểm render.
  Sự kiện `hua:game-rendered` cập nhật ngữ cảnh trước khi MutationObserver chạy;
  các dòng thoại còn giữ trong DOM cũng được cập nhật khi ID cảnh thay đổi.
  Mỗi dòng chỉ có một avatar, không sửa đối tượng avatar dùng chung.
* `scripts/test-character-appearance.mjs`: kiểm tra mốc, tài nguyên, avatar,
  tải ngược về cảnh sớm, ngoại lệ Võ Văn Đức và khả năng khai báo điểm kết thúc.
* `package.json`: thêm `test:appearance` và nối kiểm tra mới vào `check`.

Không thêm trường save, không sửa bộ đọc hoặc ghi save và không thay đổi asset.
Võ Văn Đức chưa nằm trong bảng chọn companion ở commit nền `90271d2`.
Đăng ký anh ta vào bảng đó sẽ thay đổi lựa chọn sân khấu, nên đợt này chỉ khai
báo ảnh chuẩn và avatar của anh ta. Cơ chế chọn người hiện có vẫn được giữ.

## Mở rộng Kỳ V

Quy tắc có `from` bao gồm cảnh đầu và `until` loại trừ cảnh cuối. Khi đã duyệt
cảnh phế truất Tống Nguyên Phúc, điền tham số cuối của `uniformRule` bằng
`{ period: 5, scene: SO_CANH_DA_DUYET }`. Resolver tự trở về bản thường từ cảnh
đó. Hiện chưa tự gán điểm phế truất vào đầu Kỳ V. Không cần đổi save.

Nếu thêm cảnh với ID không theo các quy ước nêu trên, phải khai báo cách xác
định vị trí trong `scenePosition` trước khi dùng biến thể ở cảnh đó.

## Kiểm chứng

```bash
npm run check
npm run test:appearance
```

Bộ kiểm mới kiểm cả 158 cảnh có sẵn tại commit nền, cùng hai ngữ cảnh giả lập
`ky4_02_join` và `ky4_03_next`. Kỳ IV ở commit nền mới có `ky4_01_stub`, nên
hai ngữ cảnh này kiểm mốc chọn file, không khẳng định đã có nội dung Kỳ IV.

Kiểm độc lập trên giao diện:

1. Ở `lh_i05_three_deeds`, avatar Trần Thị Mến dùng ảnh thường. Companion vẫn
   là Bà Chín Lãi theo thuật toán gốc; không ép đổi người để kiểm trang phục.
2. Ở `vt_be_sau_knocking` và `vt_signs_be_sau_hears`, sân khấu và avatar Bé Sáu
   cùng dùng ảnh thường.
3. Ở `ky3_03_van_pham_thu_phap`, các đường chủ còn dùng ảnh thường. Chuyển sang
   `ky3_04_quyen_giu_khai_mach_an` thì những người có thoại dùng đồng phục;
   sân khấu vẫn chọn người theo thuật toán gốc.
4. Ở `ky3_14_be_sau_hoc_chu`, Bé Sáu dùng đồng phục.
5. Tải save Kỳ II sau khi xem Kỳ III. Bé Sáu phải trở về ảnh thường; avatar
   không bị nhân đôi. Lặp lại với save Kỳ I của Trần Thị Mến.
6. Khi nội dung Kỳ IV được tích hợp, kiểm Bảy Lược ở cả `ky4_02_*` và
   `ky4_03_*`, lần lượt thường và đồng phục.

Bản thay đổi này còn được đối chiếu với mã gốc ở 632 ngữ cảnh từ 158 cảnh:
cảnh nguyên bản, không khai báo companion, loại dòng có `if`, và nhánh Thu
Nguyệt ở lại. Kết quả `resolveCompanionId` không thay đổi.
