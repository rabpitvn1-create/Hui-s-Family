// Background snapshot fade — game Hứa Gia (Living Scene, v5).
//
// Gắn fade vào ảnh nền CÓ SẴN của v5 (#stage-background trong khung
// Snapshot), KHÔNG tạo thêm lớp nền riêng. Nhân vật / entity / overlay
// là lớp riêng, không nằm ở đây.
//
// Mỗi khi nền đổi: ảnh cũ fade-out 450ms -> đổi src -> fade-in 450ms
// (tuần tự, không chồng lớp). Cùng src thì đứng yên, không fade lại.
// Tôn trọng prefers-reduced-motion: đổi src thẳng, không fade.
//
// Thời gian fade-in 450ms nằm ở transition trong
// src/scene-background.css — giữ hai chỗ này khớp nhau.

export const SCENE_FADE_OUT_MS = 450;
export const SCENE_FADE_IN_MS = 450;

const FADE_CLASS = "is-fading-out";
const timers = new WeakMap();

function prefersReducedMotion() {
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return false;
  }
}

// Đổi ảnh nền của img sang newSrc kèm fade. Trả về true nếu đã đổi,
// false nếu src đã đúng (không làm gì).
export function fadeSwapBackground(img, newSrc) {
  if (!(img instanceof HTMLImageElement) || !newSrc) return false;
  const current = img.getAttribute("src");
  if (current === newSrc) return false;

  // Ảnh đang ẩn (hidden) hoặc người dùng giảm chuyển động: đổi thẳng.
  if (img.hidden || prefersReducedMotion()) {
    img.setAttribute("src", newSrc);
    return true;
  }

  // Đổi cảnh dồn dập: hủy lần fade đang chờ, lấy src mới nhất.
  const pending = timers.get(img);
  if (pending) window.clearTimeout(pending);

  img.classList.add(FADE_CLASS);
  const timer = window.setTimeout(() => {
    timers.delete(img);
    img.setAttribute("src", newSrc);
    img.classList.remove(FADE_CLASS);
  }, SCENE_FADE_OUT_MS);
  timers.set(img, timer);
  return true;
}
