# Hứa Gia: LIBERA-1899

Text game AI sandbox đặt trong thế giới Hứa Gia năm 1899. Bản hiện tại là **APK Android độc lập**: toàn bộ UI, canon, pipeline và schema Gemini được đóng gói trong APK; không còn backend web, GitHub Pages hay Vercel runtime.

## Kiến trúc runtime

1. `src/world-canon.js` chứa canon thế giới bất biến và trạng thái khởi tạo.
2. `src/game.js` quản lý trạng thái chiến dịch, bản lưu, vật phẩm, đầu mối và hậu quả.
3. `src/ai-game-master.js` chỉ chấp nhận cầu nối native Android.
4. `src/native-ai-pipeline.js` dùng các module đóng gói trong `apk-ai/` để tạo prompt, schema và chuẩn hóa state.
5. Kotlin trong `android/app/src/main/java/com/rabpity/huafamily/` gọi Gemini Developer API trực tiếp qua HTTPS bằng API key do người dùng nhập trên thiết bị.
6. `android/app/build.gradle.kts` đóng gói `index.html`, CSS, `src/**`, `apk-ai/**` và `assets/**` vào WebView assets trong APK.

Không có `/api/gemini-turn`, serverless function, web backend hoặc biến môi trường chứa API key ở runtime.

## Màn hình chính v5

Bố cục v5: Header với nút burger chứa mọi hệ thống phụ, khung Snapshot dạng minh họa overlay (Entity trái, nhân vật chính phải, trên cảnh nền) và khung GM với nút Thao Tác + ô chat của player. Toàn hệ thống dùng font Quicksand đóng gói local. Chi tiết thiết kế, hợp đồng DOM và nguồn gốc từng tài sản: [docs/MAIN_SCREEN_V5.md](docs/MAIN_SCREEN_V5.md).

## API key

Build không bắt buộc API key. Khi không có key đóng gói, người dùng nhập Gemini API key sau khi cài đặt; key được lưu mã hóa trên thiết bị bằng Android Keystore. Có thể lưu tối đa 20 key và xoay vòng khi gặp lỗi quota/rate-limit phù hợp.

Nếu cấu hình các repository secrets `GEMINI_API_KEY`, `GEMINI_API_KEY_2` đến `GEMINI_API_KEY_6`, build sẽ đóng gói những key có giá trị và app ưu tiên dùng chúng. Không bắt buộc đủ 6 key.

Model mặc định:

```text
Đạo diễn: gemini-3.5-flash-lite
Viết văn: gemini-3.6-flash
```

Tên model có thể được đặt bằng repository variables `GEMINI_DIRECTOR_MODEL` và `GEMINI_WRITER_MODEL` khi build. Khi không cấu hình secrets, API key chỉ được nhập và lưu trên thiết bị.

Mỗi lần khởi động game đều bắt đầu chiến dịch mới từ Long Hải. Bản lưu cũ được giữ nguyên khi mở game và chỉ được nạp khi người chơi nhấn **Tải bản lưu**; ưu tiên bản lưu thủ công, sau đó đến bản tự lưu. Game vẫn tự lưu tiến độ sau mỗi lượt chơi, và nút **Lưu chiến dịch** tạo bản lưu thủ công.

## Kiểm tra

Cần Node.js 20+:

```bash
npm run check
```

Lệnh này kiểm tra cú pháp, integrity UI và guard `standalone APK` để ngăn web deployment/backend legacy quay trở lại.

## Build APK

Workflow duy nhất cho deployment là `.github/workflows/build-android-apk.yml`.

1. Mở tab **Actions**.
2. Chọn **Build Android APK**.
3. Chạy workflow hoặc mở run từ PR/main.
4. Tải artifact `HuaGia-LIBERA-1899-standalone-debug-apk`.

Workflow build APK, sau đó kiểm tra trực tiếp nội dung APK để chắc chắn `index.html`, native AI pipeline và các module `apk-ai/` đã được đóng gói.

## Cấu trúc chính

```text
index.html
assets/
  overlay/ (entity-01.png, main-character.png)
  avatars/ (main-avatar.jpg)
  fonts/ (Quicksand + OFL)
docs/
  MAIN_SCREEN_V5.md
src/
  app.js
  world-canon.js
  game.js
  ai-game-master.js
  native-ai-pipeline.js
apk-ai/
  gemini-prompts.js
  gemini-schemas.js
  gemini-state.js
android/
scripts/
  test-ui.mjs
  test-standalone-apk.mjs
```
