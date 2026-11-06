# Màn hình chính v5 — Thiết kế & nguồn gốc tài sản

- Áp dụng cho repo **Hứa Gia: LIBERA-1899** (APK Android độc lập).
- Nguồn quyết định: phác thảo tay của owner ngày 2026-11-05 + các ruling đã chốt cùng ngày (bố cục, overlay, avatar, font).
- Tài liệu này mô tả bố cục v5 và nguồn gốc từng tài sản để lập trình viên đời sau không phải đoán.

## Tổng quan bố cục

Màn hình chính chỉ còn 3 tầng, theo đúng thứ tự từ trên xuống:

1. **Header** — trên cùng, gọn. Chứa nút **burger** ở bên trái, tiêu đề game và chip Lượt. **Mọi hệ thống phụ đều nằm trong menu burger này** — màn hình chính không còn rail/panel hai bên như bản cũ.
2. **Khung Snapshot** — ngay dưới Header. Đây là **khung minh họa overlay, KHÔNG phải khung avatar**: một bức hình duy nhất gồm cảnh nền của địa điểm hiện tại, **Entity phủ (overlay) phía trái**, **nhân vật chính phủ (overlay) phía phải**. Không có cột dọc, khung avatar hay thẻ profile/chỉ số bên trong khung Snapshot.
3. **Khung GM** — phần còn lại bên dưới, là vùng kể chuyện chính (narration, đối thoại). Ở đáy khung GM có nút **Thao Tác** (bên trái, mở/đóng deck phương án) và **ô chat của player** (nhập hành động tự do, chiếm phần còn lại).

## Ánh xạ hệ thống phụ vào burger

| Hệ thống ở bản cũ (index.html) | Vị trí ở v5 |
|---|---|
| `campaign-header` | Header (gọn lại, thêm burger + chip Lượt) |
| `field-rail`: thẻ nhân vật chính (operator-card) | Hình overlay bên phải của khung Snapshot |
| `field-rail`: encounter-monitor | Hình overlay Entity bên trái của khung Snapshot |
| `field-rail`: thẻ Tiểu Lan + tuyến hành quân (route-ledger) | Trong drawer burger |
| `intel-panel` (chỉ số, tiến độ canon, nguồn lực, mục tiêu/đầu mối, vật phẩm, nhật ký, Lưu/Tải/Mới) | Trong drawer burger |
| `story-panel` + `ai-game-master` (narration, choices, ô hành động) | Khung GM; choices mở từ nút **Thao Tác**; ô hành động = ô chat của player |
| `campaign-footer` | Bỏ khỏi màn hình chính (thông tin chiến dịch giữ trong drawer burger) |

## Tài sản & nguồn gốc

| File trong repo | Nguồn gốc | Ghi chú |
|---|---|---|
| `assets/overlay/entity-01.png` | Ảnh owner gửi trực tiếp ngày 2026-11-05 | Ảnh gốc 336×595, **nền checkerboard bị nướng chết vào ảnh** (không có alpha). Đã tách nền thành alpha thật (flood-fill từ biên + xử lý vùng nền bao kín), 4 góc alpha = 0, ~73% pixel trong suốt, đã kiểm chứng trên nền tối và nền vàng. Commit `5b4abf9` trên main. Đây là Entity overlay đầu tiên và duy nhất tính đến v5. |
| `assets/overlay/main-character.png` | Drive, thư mục `/GAOMING`: "Cao Minh — Toàn thân — Nền trong suốt.png" (1086×1448, cập nhật 2026-11-05) | Alpha thật, sạch; nhân vật chiếm 100% chiều cao khung. Dùng làm overlay nhân vật chính phía phải khung Snapshot. |
| `assets/avatars/main-avatar.jpg` | Drive, thư mục `/GAOMING`: "Cao Minh — Chân dung.jpg" (1536×1536) | Avatar hiển thị trong drawer burger. Chỉ dùng ảnh từ thư mục Drive `/GAOMING` — xem cảnh báo bên dưới. |
| `assets/fonts/` (Quicksand + OFL) | Google Fonts — font Quicksand, giấy phép OFL | Đóng gói local trong APK, khai báo bằng `@font-face`. Không tải từ CDN (APK chạy offline). |

**Cấm dùng cho Hui Family:** toàn bộ cây **Drive `game/assets/`** (avatars, entity, overlays…). Cây đó là bản mirror của repo **BACKROOMsV2**, thuộc repo khác — owner đã ra rule ngày 2026-11-05. Nguồn tài sản hợp lệ của Hui Family chỉ gồm: repo này, thư mục Drive `/GAOMING`, và ảnh owner gửi trực tiếp.

## Font

- **Quicksand cho toàn hệ thống** (ruling 2026-11-05): thay cả ba vai trò cũ trong `styles.css` (`--font-display` Palatino/Georgia serif, `--font-ui` system sans, `--font-code` monospace).
- File font nằm tại `assets/fonts/` kèm văn bản giấy phép OFL; nạp bằng `@font-face` local. Tuyệt đối không phụ thuộc Google Fonts CDN vì APK là bản độc lập, chạy không mạng vẫn phải đúng font.

## Hợp đồng DOM cho lập trình viên

Các element ID đang dùng trong `index.html` được kiểm tra bằng `scripts/test-ui.mjs`. Các nút và khung chính của v5:

| ID / class | Vai trò |
|---|---|
| `#intel-toggle` | Nút burger — chính là nút "Hồ sơ hiện trường" cũ, **di chuyển vào trong Header**. Bấm để mở/đóng drawer. |
| `#intel-panel` | Drawer chứa mọi hệ thống phụ; ở v5 là drawer ở **mọi bề rộng màn hình** (không chỉ mobile như bản cũ), kèm `#intel-scrim` và nút `#intel-close` sẵn có. |
| `#snapshot-stage` | Khung Snapshot (minh họa overlay). |
| `#stage-entity` | Lớp hình Entity, neo trái trong `#snapshot-stage`. Mặc định ẩn; chỉ hiện khi encounter đang hoạt động (điểm nguy cơ ≥ 42) bằng cách thêm class **`.stage-entity-on`** vào `#snapshot-stage`. Nguồn ảnh: `assets/overlay/entity-01.png`. |
| `#stage-character` | Lớp hình nhân vật chính, neo phải trong `#snapshot-stage`. **Hai overlay riêng biệt** (ruling 2026-11-06): bình thường dùng ảnh khám phá `assets/overlay/main-character.png`; khi encounter active (nguy cơ ≥ 42, cùng lúc `#stage-entity` hiện) JS đổi sang ảnh gặp thực thể `assets/overlay/main-character-encounter.png` (tư thế giơ tay kết ấn — nguồn: file "Cao Minh — Toàn thân — Nền tối.png" trong Drive `/GAOMING`, vốn đã có alpha thật, chỉ chuẩn hoá về canvas 1086×1448), fade 160 ms qua class `.is-swapping`; hết encounter thì đổi lại. |
| `#stage-scene-name` | Nhãn tên cảnh/địa điểm hiện tại hiển thị trên khung Snapshot (ví dụ "Biệt thự dưỡng bệnh · Long Hải"). |
| `#actions-toggle` | Nút **Thao Tác** ở đáy khung GM; bấm để mở/đóng deck phương án (`#choices`). |
| `#ai-action` | Ô chat của player (textarea sẵn có) ở đáy khung GM, cạnh `#actions-toggle`. |

## Lưu ý kỹ thuật & nợ

- **Chưa có asset ảnh cảnh nền theo stage.** Repo chưa có ảnh nền riêng cho 6 stage (Long Hải → Cần Giờ → Backrooms 1900 → Thủ Dầu Một → Vũng Tàu → Sài Gòn–Chợ Lớn); lớp nền của `#snapshot-stage` (`stage-bg`) hiện là nền CSS. Muốn có ảnh thật phải bổ sung asset nền sau, theo từng stage.
- **Entity mới có 01 file** (`entity-01.png`, độ phân giải gốc chỉ 336×595 — hiển thị lớn sẽ mềm). Các Entity sau bổ sung tiếp vào `assets/overlay/` theo cùng quy ước tách nền alpha thật.
- **Hai file WebP overlay nhân vật cũ trên Drive đã HỎNG — đừng dùng:** cả hai bản WebP của overlay nhân vật chính (bản thường và bản "hd") đều bị cắt cụt khi upload (file chỉ 11.249 B trong khi chunk ALPH khai báo 33.378 B; PIL và ffmpeg đều không mở được, bản "hd" cũng chỉ khai canvas 512×768). Cần WebP thì phải xuất lại từ PNG gốc.
- Số liệu Tiểu Lan lấy theo `INITIAL_STATE` trong `src/world-canon.js` (Sức khỏe 45%, Ảnh hưởng Mẫu 25%, Lòng tin 5%); các số tĩnh cũ trong `index.html` (100%/0%) không còn là chuẩn.
