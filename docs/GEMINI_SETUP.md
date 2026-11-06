# Gemini trong APK Android

Bản hiện tại dùng Gemini làm đạo diễn logic và biên tập văn xuôi cho chiến dịch. Runtime được thiết kế **APK-only**: giao diện, canon, prompt, schema và pipeline đều được đóng gói trong APK; không cần web backend hoặc serverless function.

## API key trên thiết bị

Build không bắt buộc repository secrets. Khi không cấu hình key lúc build, APK dùng key do người dùng nhập và lưu mã hóa trên thiết bị.

Có thể tùy chọn đóng gói các key từ repository secrets `GEMINI_API_KEY`, `GEMINI_API_KEY_2` đến `GEMINI_API_KEY_6`. App ưu tiên những key đóng gói có giá trị; không bắt buộc đủ 6 key. Không ghi giá trị key trực tiếp vào source.

Khi cài và mở game:

1. Người dùng mở **Cấu hình Gemini API key**.
2. Dán mỗi Gemini API key trên một dòng.
3. APK lưu tối đa 20 key đã mã hóa bằng Android Keystore/AES-GCM.
4. `GeminiApiClient.kt` gọi Gemini Developer API trực tiếp qua HTTPS và luân phiên key khi gặp lỗi quota/rate-limit phù hợp.

Key do người dùng nhập không được đưa vào WebView, save game, repository hoặc GitHub Actions.

## Model

Model mặc định:

```text
Đạo diễn: gemini-3.5-flash-lite
Viết văn: gemini-3.6-flash
```

Tên model có thể được đặt lúc build bằng repository variables:

```text
GEMINI_DIRECTOR_MODEL
GEMINI_WRITER_MODEL
```

Các biến này chỉ chứa **tên model**, không chứa API key.

## Luồng runtime

1. `src/ai-game-master.js` nhận hành động của người chơi và chỉ chạy khi có Android native bridge.
2. `src/native-ai-pipeline.js` tạo hai lượt Director → Writer.
3. `apk-ai/gemini-prompts.js` tạo system instruction.
4. `apk-ai/gemini-schemas.js` khóa JSON schema.
5. `apk-ai/gemini-state.js` chuẩn hóa state, kế hoạch và kết quả.
6. `NativeGeminiBridge.kt` chuyển request từ JavaScript sang Kotlin.
7. `GeminiApiClient.kt` gọi Gemini Developer API trực tiếp.
8. Kết quả quay lại WebView và được `src/game.js` áp dụng vào campaign state.

Không có endpoint HTTP nội bộ của game. Browser-hosted runtime không phải đường chạy AI được hỗ trợ.

## Dữ liệu cốt truyện

- `src/world-canon.js`: canon thế giới bất biến và trạng thái mở đầu.
- `src/campaign-canon.js`: progression và context của chiến dịch.
- `src/game.js`: campaign state, đầu mối, vật phẩm, hậu quả và bản lưu.
- `src/ai-game-master.js`: đầu vào hành động và render kết quả AI.
- `src/native-ai-pipeline.js`: orchestration Director → Writer.
- `apk-ai/`: prompt, schema và state normalization được đóng gói cùng APK.

AI được tạo NPC, địa điểm, nhiệm vụ và vật phẩm mới trong giới hạn canon chiến dịch. AI không được sửa canon thế giới, hồi sinh nhân vật, xóa hậu quả hoặc dùng vật phẩm vô cớ.

## Kiểm tra

```bash
npm run check
gradle -p android :app:assembleDebug
```

Workflow `.github/workflows/build-android-apk.yml` chạy preflight, build APK và kiểm tra archive để xác nhận các module runtime bắt buộc đã được đóng gói.

## Làn proxy Render cho bản web

Khi game chạy ngoài APK (trình duyệt), `src/native-ai-pipeline.js` tự động chuyển sang làn proxy: gọi `POST https://backrooms-gemini-proxy.onrender.com/gemini` với đúng hợp đồng generateContent (model, contents, systemInstruction, generationConfig) và cùng cặp model mặc định như APK. Proxy giữ API key ở server và tự luân phiên key; trang web không chứa bất kỳ API key nào.

Trong APK, cầu nối native luôn được ưu tiên và làn proxy không bao giờ chạy. App dùng các key đóng gói nếu có, hoặc key lưu mã hóa trên thiết bị nếu không có key đóng gói. Proxy có cold start (Render free tier) nên bản web ping `/health` ngay khi mở trang để đánh thức proxy trước lượt chơi đầu.

Thứ tự làn web: **proxy premium trước** (`POST https://backrooms-premium-proxy.onrender.com/chat`, chuẩn OpenAI chat completions, model do server cố định — hiện là gemini-3.8-flash — chuyển tiếp nguyên vẹn tin nhắn hệ thống), **proxy Gemini dự phòng** khi premium lỗi. Chỉ thị hệ thống ở làn Gemini-proxy phải gấp vào `contents` vì proxy đó không chuyển tiếp field `systemInstruction` (đã kiểm chứng bằng test đối chứng).
