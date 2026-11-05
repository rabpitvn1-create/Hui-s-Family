# Canon implementation notes

## Nguồn nhân vật hiện hành

Runtime chỉ có hai nguồn có quyền định nghĩa nhân vật/tổ chức thế kỷ 29:

- `src/active-character-codex.js`: Cao Minh / Vạn Giới Ma Tổ (record CHAR.GAO_MING), Iris / ARGUS và Syvial. File này khóa identity, personality, combat, equipment, relationships, voice và action locks của từng người.
- `src/sru-codex.js`: SRU / Special Response Unit, tổ chức mẹ, học thuyết phản ứng hiện trường, cơ cấu chỉ huy và trang bị tiêu chuẩn của tổ chức. Cao Minh không thuộc SRU và không giữ chức vụ nào trong SRU.

`src/campaign-canon.js` chỉ giữ xương sống chiến dịch, Backrooms, objective và quy tắc kể chuyện. Nó không được chứa một character codex song song.

`src/world-canon.js` nối xương sống chiến dịch với hai nguồn hiện hành trên. Không module nào khác được tự tạo kỹ năng, trang bị, tổ chức, tính cách hoặc quan hệ cho Cao Minh, Iris và Syvial.

## Cao Minh / Vạn Giới Ma Tổ

- Nhân vật chính, record `CHAR.GAO_MING` (nguồn: Cao Minh Codex R02 trên Drive, thư mục game/CHAR). Đạo Tổ của Vạn Ma Đạo Môn, đạo trường Lôi Thiên Sơn; không thuộc SRU.
- Đạo hạnh: Đạo Tổ — không thay bằng cấp bậc số hóa kiểu UR+. Tuổi không rõ, không được ấn định.
- Xuất thân: người Trái Đất trọng sinh sau khi tăng ca quá độ; ký ức phàm nhân còn nguyên.
- Vũ khí bản mệnh: Thái Cổ Song Sát — Sát Thần Kiếm và Sát Ma Kiếm, hai thanh riêng biệt.
- Giáp bản mệnh: Hắc Long Chiến Khải, đúng bốn bộ phận: khải giáp, hộ uyển, hộ thủ, mão.
- Thần thông theo Codex R02 (13): Vạn Ma Đạo Kinh, Đạo Tổ Pháp Thể, Vạn Giới Thần Niệm, Lôi Thiên Độn Bộ, Hư Không Hoán Ảnh, Song Sát Kiếm Quyết, Tứ Kiếm Đoạn Mạch, Tĩnh Tâm Kiếm Minh, Vạn Ma Quy Tông, Trấn Thiên Đạo Ấn, Cửu Tiêu Lôi Ngục, Hắc Long Quy Nguyên, Vạn Giới Song Sát. Không tự gắn damage/proc/cooldown số cho thần thông.
- Cấm đối với nhân vật chính: súng, hệ thống đạn cá nhân, giáp công nghệ, quỷ lực Sparda, Devil Trigger.
- Tính cách phải theo `GAO_MING_CODEX.personality`, `principles`, `actionLocks` và `voice`; không lấy tính cách từ story/codex cũ.

## Iris / ARGUS

- Scout / Target Eliminator, tổ chức hiện vẫn CHƯA KHÓA.
- Gunslinger hiện trường, dùng đúng Ivory và Ebony.
- Belial Core cung cấp quỷ lực vô hạn nhưng không biến sát thương, tốc độ bắn, độ bền hoặc độ chính xác thành vô hạn.
- Thousandfold Cognition tăng nhận thức/phân tích tới tỷ lệ đã khóa, không tự tăng tốc cơ thể.
- ARGUS Terrain Read dựa trên quan sát trực tiếp, cảm biến giáp và địa hình; không toàn tri, không nhìn xuyên tường, không dùng drone.
- Field Galley và Field MedNet là hỗ trợ thực địa, không phải tạo vật chất hoặc phép chữa lành tức thời.
- Tsundere quanh Cao Minh không được biến thành slapstick, trẻ con hoặc mất năng lực tác chiến.

## Syvial

- Kiếm sĩ siêu nhiên UR+, tổ chức và chức vụ hiện vẫn CHƯA KHÓA.
- GodKiller là đại kiếm cơ khí, không phải súng/gunblade. Syvial vẫn chiến đấu được khi mất kiếm và có khả năng gọi kiếm trở lại.
- Lucifer Core và Devil Trigger không có mana bar, giới hạn số lần, cooldown nội tại hoặc phản phệ do dùng lâu; Syvial giữ lý trí.
- GodKiller Override / Twenty-Four Severance diễn ra trong thời gian dừng hoàn toàn và luôn đúng 24 nhát chém.
- Yandere với Cao Minh không đồng nghĩa sát nhân ngẫu nhiên, tấn công mọi phụ nữ hoặc quên chiến thuật vì ghen.

## Story spine

Tuyến chiến dịch bắt buộc vẫn là:

`Long Hải → Cần Giờ → Backrooms 1900 tầng 0–15 → Thủ Dầu Một/Bình Dương → Vũng Tàu → Sài Gòn–Chợ Lớn`.

Hứa Tiểu Lan, Chú Hỏa, La Sát Mẫu và Tam Đại Quỷ Tử thuộc story/world canon. Các dữ kiện của họ nằm trong `WORLD_CANON.world` và hard canon, không được dùng để mở lại một character codex thế kỷ 29 thứ hai.

Iris và Syvial chỉ được xuất hiện khi state/history đã tạo đường tiếp cận hợp lý. Các trường tổ chức/chức vụ đang CHƯA KHÓA phải tiếp tục để mở.

## Chống hồi sinh canon cũ

- `src/canon-migration.js` loại các flag và text canon legacy trong save cũ trước khi trạng thái được gửi cho Director/Writer.
- `apk-ai/gemini-prompts.js` nhận trực tiếp clean `WORLD_CANON`, `ACTIVE_CHARACTER_PROMPT_CANON` và `SRU_PROMPT_CANON`; không còn blacklist chữa cháy cho một nguồn canon bẩn.
- `scripts/test-canon-migration.mjs` fail preflight nếu runtime lại chứa tên, kỹ năng, loadout hoặc character hook đã bị loại, hoặc nếu nguồn nhân vật không còn trỏ trực tiếp về active codex.
- CSS có thể giữ tên biến/class lịch sử vì đó chỉ là implementation styling; chúng không phải canon, không được đưa vào prompt và không được dùng làm dữ liệu nhân vật.
