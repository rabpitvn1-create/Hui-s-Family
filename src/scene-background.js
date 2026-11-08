// Background snapshot — game Hứa Gia (Living Scene).
//
// PHẠM VI: CHỈ background. Không chạm nhân vật (Kai / Tiểu Lan / Cao Minh
// đã có sẵn ở field-rail + src/cao-minh.js, giữ nguyên).
//
// Mỗi khi chuyển cảnh: cảnh nền cũ fade-out nhẹ (450ms) rồi cảnh nền mới
// fade-in nối tiếp (450ms). Tuần tự, không chồng 2 nền lên nhau.
//
// sceneChangeKey theo spec v3.0: stageId + backroomsFloor (+ locationKey).
// CHÚ Ý: KHÔNG dùng snapshot.scene.id làm locationKey — game.js đặt
// scene.id = `turn-${turn}` nên nó đổi mỗi lượt, key sẽ đổi liên tục và
// nền fade lại từng lượt. Background trong spec cũng chỉ phân theo
// stage/tầng (Long Hải 2, Cần Giờ 2, Backrooms 16), không theo text
// địa điểm tự do, nên key = stageId + floor là đủ và ổn định.
//
// Nguồn ảnh: assets/scenes/{stageId}.webp khi file thật có (Eric duyệt
// artwork Gate 2 mới sản xuất). Chưa có file thật thì dùng gradient
// Colonial Noir Cinematic làm nền chờ — KHÔNG tự sinh ảnh AI.

export const SCENE_FADE_OUT_MS = 450;
export const SCENE_FADE_IN_MS = 450;

const STAGE_META = Object.freeze({
  long_hai: Object.freeze({
    label: "Hồi 1 · Long Hải",
    caption: "Long Hải — Bến biển bình minh",
    gradient: "long-hai"
  }),
  can_gio: Object.freeze({
    label: "Hồi 2 · Cần Giờ",
    caption: "Cần Giờ — Rừng ngập mặn",
    gradient: "can-gio"
  }),
  backrooms: Object.freeze({
    label: "Hồi 3 · Backrooms 1900",
    caption: "Backrooms 1900 — Hành lang vàng",
    gradient: "backrooms"
  }),
  thu_dau_mot: Object.freeze({
    label: "Hồi 4 · Thủ Dầu Một",
    caption: "Thủ Dầu Một — Dấu vết La Hầu",
    gradient: "thu-dau-mot"
  }),
  vung_tau: Object.freeze({
    label: "Hồi 5 · Vũng Tàu",
    caption: "Vũng Tàu — Mộng và ký ức",
    gradient: "vung-tau"
  }),
  sai_gon_cho_lon: Object.freeze({
    label: "Hồi 6 · Sài Gòn–Chợ Lớn",
    caption: "Sài Gòn–Chợ Lớn — Nhà chính Hứa Gia",
    gradient: "sai-gon-cho-lon"
  })
});

export const SCENE_STAGES = Object.freeze(Object.keys(STAGE_META));

function numberOr(value, fallback = 0) {
  const numeric = Number(value);
  return Number.isFinite(numeric) ? numeric : fallback;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

// Tính view của background từ snapshot thật của game (getSnapshot()).
// snapshot: { progression: { stageId, backroomsFloor }, scene: { id, title } }
export function resolveSceneBackground(snapshot) {
  const stageId = String(snapshot?.progression?.stageId || "long_hai");
  const meta = STAGE_META[stageId] || STAGE_META.long_hai;
  const floor = stageId === "backrooms"
    ? clamp(numberOr(snapshot?.progression?.backroomsFloor, 0), 0, 15)
    : 0;
  const key = `${stageId}|floor:${floor}`;
  const caption = stageId === "backrooms"
    ? `Backrooms 1900 — Tầng ${floor}`
    : meta.caption;
  return Object.freeze({
    key,
    stageId,
    floor,
    sceneId: String(snapshot?.scene?.id || ""),
    label: meta.label,
    caption,
    gradient: meta.gradient,
    // Thang fallback: file thật (khi có) -> gradient chờ.
    image: `assets/scenes/${stageId}.webp`
  });
}

// Preload ảnh nền thật (nếu có). Load lỗi -> giữ gradient, không crash.
const imageCache = new Map();
function preloadBackgroundImage(src) {
  if (typeof Image === "undefined") return Promise.resolve(false);
  if (imageCache.has(src)) return imageCache.get(src);
  const promise = new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
  imageCache.set(src, promise);
  return promise;
}

function prefersReducedMotion() {
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return false;
  }
}

// Dựng lớp background snapshot vào container có sẵn (vd đầu #story-panel).
// Trả về controller { element, sync(snapshot), destroy() }.
export function mountSceneBackground(container, snapshot) {
  if (!(container instanceof HTMLElement)) return null;

  const figure = document.createElement("figure");
  figure.className = "scene-background";
  figure.setAttribute("role", "img");
  figure.innerHTML = `
    <div class="scene-background-image" aria-hidden="true"></div>
    <figcaption class="scene-background-caption"></figcaption>
  `;
  container.prepend(figure);

  const imageLayer = figure.querySelector(".scene-background-image");
  const captionEl = figure.querySelector(".scene-background-caption");
  let currentKey = "";
  let fadeTimer = 0;
  let destroyed = false;

  function applyView(view) {
    figure.dataset.sceneKey = view.key;
    figure.dataset.stage = view.stageId;
    figure.dataset.gradient = view.gradient;
    figure.setAttribute("aria-label", view.caption);
    if (captionEl) captionEl.textContent = view.caption;
    preloadBackgroundImage(view.image).then((ok) => {
      if (destroyed || figure.dataset.sceneKey !== view.key) return;
      if (imageLayer) {
        imageLayer.style.backgroundImage = ok ? `url("${view.image}")` : "";
      }
    });
  }

  function sync(nextSnapshot) {
    if (destroyed) return currentKey;
    const view = resolveSceneBackground(nextSnapshot);
    if (view.key === currentKey) return currentKey; // Cùng cảnh -> đứng yên.

    const previousKey = currentKey;
    currentKey = view.key;
    window.clearTimeout(fadeTimer);

    // Lần đầu mount: chỉ fade-in, không fade-out.
    if (!previousKey || prefersReducedMotion()) {
      figure.classList.remove("is-fading-out");
      applyView(view);
      return currentKey;
    }

    // Chuyển cảnh: fade-out nền cũ -> đổi nền -> fade-in nền mới.
    figure.classList.add("is-fading-out");
    fadeTimer = window.setTimeout(() => {
      if (destroyed) return;
      applyView(view);
      figure.classList.remove("is-fading-out");
    }, SCENE_FADE_OUT_MS);
    return currentKey;
  }

  sync(snapshot);

  return Object.freeze({
    element: figure,
    sync,
    get key() {
      return currentKey;
    },
    destroy() {
      destroyed = true;
      window.clearTimeout(fadeTimer);
      figure.remove();
    }
  });
}
