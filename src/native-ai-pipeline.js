import { getDirectorContext } from "./campaign-canon.js";
import { sanitizeLegacyCanonState } from "./canon-migration.js";
import { buildWriterContext } from "./prose-style-guide.js";
import {
  DIRECTOR_SCHEMA,
  WRITER_SCHEMA
} from "../apk-ai/gemini-schemas.js";
import {
  cleanText,
  normalizeState,
  normalizePlan,
  normalizeProse,
  buildFinalResult,
  compactWriterState
} from "../apk-ai/gemini-state.js";
import {
  buildDirectorSystemInstruction,
  buildWriterSystemInstruction
} from "../apk-ai/gemini-prompts.js";

const pendingRequests = new Map();
let sequence = 0;

// Làn AI cho bản web (ngoài APK): gọi Gemini qua proxy Render của chủ sở hữu.
// API key chỉ nằm ở server của proxy, tuyệt đối không có trong source trang.
// Trong APK, cầu nối native luôn được ưu tiên và làn này không chạy.
const PROXY_BASE_URL = "https://backrooms-gemini-proxy.onrender.com";
const PROXY_CONFIGURATION = Object.freeze({
  apiReady: true,
  directorModel: "gemini-3.5-flash-lite",
  writerModel: "gemini-3.6-flash"
});
const PROXY_MAX_BODY_BYTES = 950_000;

export function hasProxyAiLane() {
  return !hasNativeAiBridge() && typeof fetch === "function";
}

export function getProxyAiConfiguration() {
  return hasProxyAiLane() ? PROXY_CONFIGURATION : null;
}

export function warmUpProxyAi() {
  if (!hasProxyAiLane()) return;
  // Render free tier có cold start: đánh thức proxy ngay khi mở trang để
  // lượt chơi đầu không phải chờ. Lỗi được bỏ qua có chủ đích.
  fetch(`${PROXY_BASE_URL}/health`).catch(() => {});
}

function installNativeCallbacks() {
  if (typeof window === "undefined") return;

  window.__huaNativeResolve = (requestId, payload) => {
    const request = pendingRequests.get(requestId);
    if (!request) return;
    pendingRequests.delete(requestId);
    clearTimeout(request.timeout);
    request.resolve(payload);
  };

  window.__huaNativeReject = (requestId, message) => {
    const request = pendingRequests.get(requestId);
    if (!request) return;
    pendingRequests.delete(requestId);
    clearTimeout(request.timeout);
    request.reject(new Error(String(message || "Gemini API trả lỗi.")));
  };
}

installNativeCallbacks();

export function hasNativeAiBridge() {
  return typeof window !== "undefined"
    && window.HuaAndroid
    && typeof window.HuaAndroid.generate === "function";
}

export function getNativeAiConfiguration() {
  if (!hasNativeAiBridge()) return null;
  try {
    return JSON.parse(window.HuaAndroid.getConfiguration());
  } catch {
    return null;
  }
}

export function openNativeApiKeySettings() {
  if (!hasNativeAiBridge() || typeof window.HuaAndroid.openApiKeySettings !== "function") return false;
  window.HuaAndroid.openApiKeySettings();
  return true;
}

function parseJson(text, label) {
  const source = String(text || "")
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();

  try {
    return JSON.parse(source);
  } catch {
    throw new Error(`${label} trả về JSON không đọc được.`);
  }
}

// Pool key của proxy dùng chung và quota tính theo từng model: khi model chính
// bị 503 (quá tải) hoặc 429 (hết quota), các model dự phòng này thường vẫn còn
// đường chạy. Thang dự phòng chỉ áp dụng cho làn proxy, mô phỏng đúng triết lý
// ladder key -> model của GeminiApiClient trong APK.
const PROXY_FALLBACK_MODELS = ["gemini-3.6-flash", "gemini-3.5-flash-lite"];

async function invokeProxyModelOnce(model, body) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 150000);
  try {
    const response = await fetch(`${PROXY_BASE_URL}/gemini`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...body, model }),
      signal: controller.signal
    });
    const data = await response.json().catch(() => null);
    if (!response.ok) {
      throw new Error(data?.error ? `Proxy AI lỗi: ${data.error}` : `Proxy AI trả HTTP ${response.status}.`);
    }
    const text = (data?.candidates?.[0]?.content?.parts || [])
      .map((part) => part?.text || "")
      .join("");
    if (!text) throw new Error("Proxy AI không trả nội dung.");
    return text;
  } catch (error) {
    if (error?.name === "AbortError") throw new Error("Proxy AI phản hồi quá thời gian.");
    throw error instanceof Error ? error : new Error("Không thể gọi proxy AI.");
  } finally {
    clearTimeout(timeout);
  }
}

async function invokeProxyModel({ model, systemInstruction, prompt, schema, maxOutputTokens }) {
  const schemaInstruction = `${systemInstruction}\n\nJSON SCHEMA BẮT BUỘC:\n${JSON.stringify(schema)}`;
  // Proxy chỉ chuyển tiếp model/contents/generationConfig (không chuyển
  // systemInstruction) nên chỉ thị hệ thống phải gấp vào contents làm phần đầu,
  // đúng cách bản web BACKROOMsV2 đã chạy qua cùng proxy này.
  const body = {
    contents: [{ role: "user", parts: [{ text: schemaInstruction }, { text: prompt }] }],
    generationConfig: {
      maxOutputTokens: Math.min(4096, Math.max(256, Number(maxOutputTokens) || 1024)),
      responseMimeType: "application/json"
    }
  };
  if (new TextEncoder().encode(JSON.stringify(body)).length > PROXY_MAX_BODY_BYTES) {
    throw new Error("Trạng thái chiến dịch đã quá lớn cho proxy AI. Hãy bắt đầu chiến dịch mới.");
  }

  const candidates = [...new Set([model, ...PROXY_FALLBACK_MODELS])];
  let lastError = null;
  for (const candidate of candidates) {
    // Model chính được thử 2 lần (503 quá tải thường chỉ là tạm thời), model
    // dự phòng thử 1 lần để tổng thời gian chờ không vượt quá sức chịu đựng.
    const attempts = candidate === model ? 2 : 1;
    for (let attempt = 0; attempt < attempts; attempt += 1) {
      try {
        return await invokeProxyModelOnce(candidate, body);
      } catch (error) {
        lastError = error;
        if (attempt + 1 < attempts) {
          await new Promise((resolve) => setTimeout(resolve, 3000));
        }
      }
    }
  }
  throw lastError || new Error("Không thể gọi proxy AI.");
}

function invokeNativeModel(args) {
  if (!hasNativeAiBridge()) {
    return invokeProxyModel(args);
  }
  return invokeBridgeModel(args);
}

function invokeBridgeModel({ model, systemInstruction, prompt, schema, maxOutputTokens }) {

  const requestId = `hua-${Date.now()}-${sequence += 1}`;
  const schemaInstruction = `${systemInstruction}\n\nJSON SCHEMA BẮT BUỘC:\n${JSON.stringify(schema)}`;

  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      pendingRequests.delete(requestId);
      reject(new Error("Gemini API phản hồi quá thời gian."));
    }, 170000);

    pendingRequests.set(requestId, { resolve, reject, timeout });

    try {
      window.HuaAndroid.generate(
        requestId,
        model,
        schemaInstruction,
        prompt,
        maxOutputTokens
      );
    } catch (error) {
      clearTimeout(timeout);
      pendingRequests.delete(requestId);
      reject(error instanceof Error ? error : new Error("Không thể gọi cầu nối Android."));
    }
  });
}

export async function runNativeCampaignTurn(rawState, rawAction) {
  const configuration = getNativeAiConfiguration() || getProxyAiConfiguration();
  if (!configuration?.apiReady) {
    throw new Error("Chưa có đường gọi Gemini. Hãy mở Cấu hình API key trong APK hoặc mở bản web có proxy AI.");
  }

  const action = cleanText(rawAction, 600);
  if (!action) throw new Error("Bạn chưa nhập hành động.");

  const state = normalizeState(sanitizeLegacyCanonState(rawState));
  const directorContext = getDirectorContext(state);
  const directorPrompt = JSON.stringify({
    task: "Lập kế hoạch logic cho đúng một lượt tiếp theo. Không viết văn hoàn chỉnh.",
    playerAction: action,
    currentCampaignState: state,
    currentDirectorContext: directorContext
  });

  const directorText = await invokeNativeModel({
    model: configuration.directorModel,
    systemInstruction: buildDirectorSystemInstruction(directorContext),
    prompt: directorPrompt,
    schema: DIRECTOR_SCHEMA,
    maxOutputTokens: 3000
  });

  const plan = normalizePlan(parseJson(directorText, "Model đạo diễn"), state);
  const writerContext = buildWriterContext(state, directorContext, plan);
  const writerPrompt = JSON.stringify({
    task: "Viết lời kể, lời thoại và đúng ba lựa chọn từ kế hoạch đã khóa. Không thay đổi sự kiện hay hậu quả.",
    playerAction: action,
    lockedScenePlan: plan,
    compactCampaignState: compactWriterState(state),
    writerContext
  });

  const writerText = await invokeNativeModel({
    model: configuration.writerModel,
    systemInstruction: buildWriterSystemInstruction(writerContext),
    prompt: writerPrompt,
    schema: WRITER_SCHEMA,
    maxOutputTokens: 2200
  });

  const prose = normalizeProse(parseJson(writerText, "Model viết văn"), plan);
  return buildFinalResult(plan, prose);
}
