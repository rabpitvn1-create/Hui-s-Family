# Canon implementation notes

## Nguồn nhân vật hiện hành

Runtime chỉ còn một nguồn duy nhất có quyền định nghĩa nhân vật:

- `src/active-character-codex.js`: Cao Minh / Vạn Giới Ma Tổ (record CHAR.GAO_MING). File này khóa identity, personality, combat, equipment, relationships, voice và action locks của anh.

Theo lệnh của chủ nhân ngày 2026-11-06, toàn bộ cụm nhân vật phụ và tổ chức legacy từng đi kèm nhân vật chính đã bị gỡ khỏi thế giới game hoàn toàn: codex của chúng đã xóa, prompt không còn nạp, và `src/canon-migration.js` lọc mọi dấu vết của cụm này khỏi save cũ trước khi trạng thái được gửi cho Director/Writer. Không khôi phục dưới bất kỳ hình thức nào.

`src/campaign-canon.js` chỉ giữ xương sống chiến dịch, Backrooms, objective và quy tắc kể chuyện. Nó không được chứa một character codex song song.

`src/world-canon.js` nối xương sống chiến dịch với nguồn nhân vật hiện hành trên. Không module nào khác được tự tạo kỹ năng, trang bị, tổ chức, tính cách hoặc quan hệ cho Cao Minh.

## Cao Minh / Vạn Giới Ma Tổ

- Nhân vật chính, record `CHAR.GAO_MING` (nguồn: Cao Minh Codex R02 trên Drive, thư mục game/CHAR). Đạo Tổ của Vạn Ma Đạo Môn, đạo trường Lôi Thiên Sơn.
- Đạo hạnh: Đạo Tổ — không thay bằng cấp bậc số hóa kiểu UR+. Tuổi không rõ, không được ấn định.
- Xuất thân: người Trái Đất trọng sinh sau khi tăng ca quá độ; ký ức phàm nhân còn nguyên.
- Vũ khí bản mệnh: Thái Cổ Song Sát — Sát Thần Kiếm và Sát Ma Kiếm, hai thanh riêng biệt.
- Giáp bản mệnh: Hắc Long Chiến Khải, đúng bốn bộ phận: khải giáp, hộ uyển, hộ thủ, mão.
- Thần thông theo Codex R02 (13): Vạn Ma Đạo Kinh, Đạo Tổ Pháp Thể, Vạn Giới Thần Niệm, Lôi Thiên Độn Bộ, Hư Không Hoán Ảnh, Song Sát Kiếm Quyết, Tứ Kiếm Đoạn Mạch, Tĩnh Tâm Kiếm Minh, Vạn Ma Quy Tông, Trấn Thiên Đạo Ấn, Cửu Tiêu Lôi Ngục, Hắc Long Quy Nguyên, Vạn Giới Song Sát. Không tự gắn damage/proc/cooldown số cho thần thông.
- Cấm đối với nhân vật chính: súng, hệ thống đạn cá nhân, giáp công nghệ, quỷ lực Sparda, Devil Trigger.
- Tính cách phải theo `GAO_MING_CODEX.personality`, `principles`, `actionLocks` và `voice`; không lấy tính cách từ story/codex cũ.

## Story spine

Tuyến chiến dịch bắt buộc vẫn là:

`Long Hải → Cần Giờ → Backrooms 1900 tầng 0–15 → Thủ Dầu Một/Bình Dương → Vũng Tàu → Sài Gòn–Chợ Lớn`.

Hứa Tiểu Lan, Chú Hỏa, La Sát Mẫu và Tam Đại Quỷ Tử thuộc story/world canon. Các dữ kiện của họ nằm trong `WORLD_CANON.world` và hard canon, không được dùng để mở lại một character codex thứ hai.

## Chống hồi sinh canon cũ

- `src/canon-migration.js` loại các flag và text canon legacy trong save cũ trước khi trạng thái được gửi cho Director/Writer, gồm cả cụm legacy bị gỡ theo lệnh 2026-11-06.
- `apk-ai/gemini-prompts.js` nhận trực tiếp clean `WORLD_CANON` và `ACTIVE_CHARACTER_PROMPT_CANON`; không còn blacklist chữa cháy cho một nguồn canon bẩn.
- `scripts/test-canon-migration.mjs` fail preflight nếu runtime lại chứa tên, kỹ năng, loadout hoặc character hook đã bị loại, hoặc nếu nguồn nhân vật không còn trỏ trực tiếp về active codex.
- CSS có thể giữ tên biến/class lịch sử vì đó chỉ là implementation styling; chúng không phải canon, không được đưa vào prompt và không được dùng làm dữ liệu nhân vật.
