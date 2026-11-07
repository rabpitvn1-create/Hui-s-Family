# Giao diện mobile theo mẫu Gemini đã duyệt

## Phạm vi

Lớp giao diện `mobile-skin.css` áp dụng ở chiều rộng tối đa 760 CSS px.
Stylesheet vừa có điều kiện `media` trong HTML, vừa có media query bao toàn bộ
quy tắc. Desktop tiếp tục dùng bốn stylesheet cũ.

Năm mẫu do chủ nhân cung cấp ngày 07/11/2026 là nguồn thiết kế: màn chính
`gemini-sample-main-approved.png`, mở đầu `gemini-sample-start-approved.png`,
thẻ thoại `gemini-sample-dialogue.png`, quyết định `gemini-sample-actions.png`
và drawer `gemini-sample-drawer.png`.

## Các điểm thực hiện

* Nền sơn mài nâu tối, giấy chàm chuyển nâu, vân giấy, hoa văn hình học và
  dấu trang trí chìm được tạo bằng CSS và SVG. Không dùng ảnh chụp toàn màn
  hình làm giao diện, không nướng chữ vào hình và không dùng Image-Gen.
* Header giữ burger và tiêu đề; nút bát giác có đường khảm xanh, dải phân
  cách ánh trai và màu đồng cổ. Nút burger có nhãn truy cập được dù chữ
  cạnh icon đang ẩn trên mobile.
* Snapshot giữ nền cảnh, các lớp nhân vật, trạng thái encounter, biến thể
  đồng phục và song kiếm từ runtime. Khung có viền và bốn góc trang trí;
  caption ở dưới. Ẩn bảng tên nổi theo lệnh mới, chỉ trên mobile.
* Khung GM giữ nguyên tiêu đề, văn kể và thẻ thoại trong luồng văn bản.
  Trang trí gồm thẻ số cảnh xanh, đường phân cách hình thoi, chữ đầu đoạn
  và dấu chìm. Cảnh bắt đầu bằng thoại không bị áp chữ đầu đoạn lớn.
* Avatar thoại giữ nguyên resolver. Thẻ có nền nâu đen, cạnh đồng, avatar
  xanh và tên người nói phía trên câu thoại.
* Thanh quyết định luôn có bốn nút cũ. Thao Tác chỉ thu gọn danh sách lựa
  chọn trên mobile để người chơi còn nút mở lại; không đổi xử lý lựa chọn.
* Drawer giữ hai thẻ nhân vật, tám nút hồ sơ, tiến độ, sáu liên kết, các
  readout hiện có, mục tiêu, nhật ký và toàn bộ nút lưu/tải/xuất/nhập. Ba
  ô lưu được trình bày hai cột, ô thứ ba ở hàng tiếp theo.
* Toàn bộ font và tài nguyên trang trí đều nằm trong assets, không cần
  CDN. Gradle đóng gói stylesheet mới cùng assets hiện có.

## Phần không thể khẳng định khớp từng pixel

Chữ, số cảnh, nội dung thoại, tên cảnh và ảnh hiện trường vẫn lấy từ game.
Không thay chúng bằng chữ hoặc cảnh tĩnh trong ảnh mẫu. Ví dụ ảnh hội
thoại mẫu chỉ thể hiện một phần cuối của cảnh, còn bản chơi thật vẫn giữ
đủ văn kể và những câu thoại trước đó để cuộn đọc.

Các nét hoa văn là SVG dựng bằng mã theo mẫu, không phải dữ liệu vector
gốc của Gemini. Hình học, độ nhiễu chất liệu, ánh sáng, font raster hóa và
ngắt dòng không được xác nhận trùng từng pixel. Không thêm biểu tượng
watermark Gemini ở góc dưới vì đó không phải thành phần game.

Drawer thật có thêm chỉ số và thao tác lưu/tải so với phần được thể hiện
trong ảnh mẫu. Chúng được giữ nguyên chức năng và vẫn cuộn tới được; do
đó chiều dài drawer và vị trí cuối các nhóm khác ảnh mẫu. Không giấu hoặc
xóa chức năng chỉ để làm ảnh chụp giống hơn.

## Kiểm chứng

```bash
npm run check
```

`test-ui.mjs` kiểm tra cả đường dẫn tài nguyên trong CSS, bên cạnh ID,
stylesheet, ảnh HTML và cấu hình đóng gói APK. Kiểm tra trình duyệt dùng
bản game thật trong iframe có chiều rộng 320, 360, 390, 412, 760 và 1024
CSS px, với các điều khiển kiểm thử nằm ngoài bản phát hành.

Ở các chiều rộng mobile đã kiểm: không tràn ngang, không có ô nhập chat,
giữ đủ bốn nút thao tác và không có bảng tên nổi. Ở 1024 px stylesheet
mobile không áp dụng. Màn mở đầu, màn chính, các thẻ thoại, lựa chọn và
drawer đã được đối chiếu cạnh mẫu. Đây là kiểm chứng giao diện trình
duyệt, không phải tuyên bố đã chạy APK trên điện thoại thật.
