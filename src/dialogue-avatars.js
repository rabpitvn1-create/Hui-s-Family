import { resolveCharacterOverlay } from "./character-appearance.js";

// Avatar NPC (lệnh chủ nhân 2026-11-06): dùng LUÔN ảnh overlay của nhân
// vật, cắt phần vai → đỉnh đầu (CSS .dialogue-avatar-crop lo phần cắt).
// Không tạo tệp avatar riêng cho NPC nữa.
function overlayCropAvatar(id, alt) {
  return Object.freeze({ overlayId: id, src: resolveCharacterOverlay(id), alt, type: "npc", crop: true });
}

const huaServantAvatar = overlayCropAvatar("npc_servant_female", "Gia nhân Hứa Gia");
const elderMaleAvatar = overlayCropAvatar("npc_servant_elder_male", "Lão bộc nam");

const caoMinhAvatar = Object.freeze({
  src: "assets/avatars/main-avatar.jpg",
  alt: "Chân dung Cao Minh, tôn hiệu Vạn Giới Ma Tổ",
  type: "protagonist"
});

const avatarBySpeaker = Object.freeze({
  "cao minh": caoMinhAvatar,
  "gao ming": caoMinhAvatar,
  "vạn giới ma tổ": caoMinhAvatar,
  "đạo tổ": caoMinhAvatar,
  "đạo tổ vạn ma": caoMinhAvatar,
  "cao minh / vạn giới ma tổ": caoMinhAvatar,
  "cao minh/vạn giới ma tổ": caoMinhAvatar,
  "tiểu lan": { src: "assets/avatars/tieu-lan.svg", alt: "Chân dung Hứa Tiểu Lan", type: "target" },
  "hứa tiểu lan": { src: "assets/avatars/tieu-lan.svg", alt: "Chân dung Hứa Tiểu Lan", type: "target" },
  "bà năm liên": overlayCropAvatar("ba_nam_lien", "Chân dung bà Năm Liên"),
  "lê thu nguyệt": overlayCropAvatar("le_thu_nguyet", "Chân dung Lê Thu Nguyệt"),
  "thu nguyệt": overlayCropAvatar("le_thu_nguyet", "Chân dung Lê Thu Nguyệt"),
  "người gác": overlayCropAvatar("npc_servant_male", "Người gác biệt thự"),
  "phạm đình nghiêm": overlayCropAvatar("pham_dinh_nghiem", "Chân dung Phạm Đình Nghiêm"),
  "thầy thuốc": overlayCropAvatar("npc_doctor", "Thầy thuốc"),
  "ngư ông": overlayCropAvatar("npc_fisherman", "Ngư ông"),
  "lão ngư ông": overlayCropAvatar("npc_fisherman", "Lão ngư ông"),
  "trương bá hòe": overlayCropAvatar("npc_porter", "Trương Bá Hòe, người trông bến Phúc Thọ"),
  "tạ văn độ": overlayCropAvatar("npc_servant_male", "Tạ Văn Độ, người chèo đò"),
  "ông ba lưới": overlayCropAvatar("npc_fisherman", "Ông Ba Lưới, ngư ông"),
  "phó kiểm": overlayCropAvatar("npc_official", "Phó kiểm Giới Phòng"),
  "người của giới phòng": overlayCropAvatar("npc_official", "Người của Giới Phòng"),
  "gia nhân": huaServantAvatar,
  "gia nhân hứa gia": huaServantAvatar,
  "gia nhân nhà họ hứa": huaServantAvatar,
  "người hầu": huaServantAvatar,
  "người hầu hứa gia": huaServantAvatar,
  "người ở": huaServantAvatar,
  "người ở hứa gia": huaServantAvatar,
  "người làm hứa gia": huaServantAvatar,
  "đầy tớ hứa gia": huaServantAvatar,
  "quản gia": overlayCropAvatar("steward", "Quản gia Hứa Gia"),
  "quản gia hứa gia": overlayCropAvatar("steward", "Quản gia Hứa Gia"),
  "bà bảy": overlayCropAvatar("ba_bay", "Bà Bảy"),
  "nguyễn văn thạo": overlayCropAvatar("nguyen_van_thao", "Nguyễn Văn Thạo"),
  "trần thị mến": overlayCropAvatar("tran_thi_men", "Trần Thị Mến"),
  "dương thất nương": overlayCropAvatar("duong_that_nuong", "Dương Thất Nương"),
  "phan bảy nện": overlayCropAvatar("phan_bay_nen", "Phan Bảy Nện"),
  "đào nhất bút": overlayCropAvatar("dao_nhat_but", "Đào Nhất Bút"),
  "đỗ thị hạnh": overlayCropAvatar("do_thi_hanh", "Đỗ Thị Hạnh"),
  "bùi tấn lễ": overlayCropAvatar("bui_tan_le", "Bùi Tấn Lễ"),
  "tống nguyên phúc": overlayCropAvatar("tong_nguyen_phuc", "Tống Nguyên Phúc"),
  "bảy lược": overlayCropAvatar("bay_luoc", "Bảy Lược"),
  "bé sáu": overlayCropAvatar("be_sau", "Bé Sáu"),
  "võ văn đức": overlayCropAvatar("vo_van_duc", "Võ Văn Đức"),
  "lão bộc": elderMaleAvatar,
  "quản kho": elderMaleAvatar,
  "ông tư": elderMaleAvatar,
  "ông sáu": elderMaleAvatar,
  "lão thư ký": elderMaleAvatar
});

const genericServantLabels = Object.freeze([
  "gia nhân",
  "người hầu",
  "người ở",
  "người làm",
  "đầy tớ",
  "a hoàn",
  "hầu gái",
  "phu bếp",
  "phu xe"
]);

function normalizeSpeaker(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .toLocaleLowerCase("vi");
}

function isHuaServantSpeaker(normalizedName) {
  if (!normalizedName) return false;

  if (
    normalizedName.startsWith("gia nhân hứa gia")
    || normalizedName.startsWith("gia nhân nhà họ hứa")
    || normalizedName.startsWith("người hầu hứa gia")
    || normalizedName.startsWith("người ở hứa gia")
    || normalizedName.startsWith("người làm hứa gia")
    || normalizedName.startsWith("đầy tớ hứa gia")
    || normalizedName.startsWith("quản gia hứa gia")
  ) {
    return true;
  }

  const mentionsHuaFamily = normalizedName.includes("hứa gia")
    || normalizedName.includes("nhà họ hứa")
    || normalizedName.includes("phủ hứa")
    || normalizedName.includes("nhà hứa");
  const mentionsServantRole = genericServantLabels.some((label) => normalizedName.includes(label));

  if (mentionsHuaFamily && mentionsServantRole) return true;

  return genericServantLabels.some((label) =>
    normalizedName === label
    || normalizedName.startsWith(`${label} —`)
    || normalizedName.startsWith(`${label} -`)
    || normalizedName.startsWith(`${label}:`)
  );
}

export function resolveDialogueAvatar(speakerName, scene) {
  const normalizedName = normalizeSpeaker(speakerName);
  const avatar = avatarBySpeaker[normalizedName]
    || (isHuaServantSpeaker(normalizedName) ? huaServantAvatar : null);
  return avatar?.overlayId
    ? { ...avatar, src: resolveCharacterOverlay(avatar.overlayId, scene) }
    : avatar;
}

function initialsFor(name) {
  const words = String(name || "?")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (!words.length) return "?";
  return words.slice(0, 2).map((word) => word[0]?.toLocaleUpperCase("vi") || "").join("") || "?";
}

function createFallbackAvatar(speakerName) {
  const fallback = document.createElement("span");
  fallback.className = "dialogue-avatar dialogue-avatar-fallback";
  fallback.textContent = initialsFor(speakerName);
  fallback.setAttribute("role", "img");
  fallback.setAttribute("aria-label", `Avatar của ${speakerName || "nhân vật"}`);
  return fallback;
}

function createAvatar(speakerName, scene) {
  const avatar = resolveDialogueAvatar(speakerName, scene);
  if (!avatar) return createFallbackAvatar(speakerName);

  if (avatar.crop) {
    const frame = document.createElement("span");
    frame.className = "dialogue-avatar dialogue-avatar-crop";
    frame.setAttribute("role", "img");
    frame.setAttribute("aria-label", avatar.alt);
    const cropped = document.createElement("img");
    cropped.src = avatar.src;
    cropped.alt = "";
    cropped.decoding = "async";
    cropped.loading = "eager";
    cropped.addEventListener("error", () => {
      frame.replaceWith(createFallbackAvatar(speakerName));
    }, { once: true });
    frame.append(cropped);
    return frame;
  }

  const image = document.createElement("img");
  image.className = "dialogue-avatar";
  image.src = avatar.src;
  image.alt = avatar.alt;
  image.width = 96;
  image.height = 96;
  image.decoding = "async";
  image.loading = "eager";
  image.addEventListener("error", () => {
    image.replaceWith(createFallbackAvatar(speakerName));
  }, { once: true });
  return image;
}

function decorateDialogueElement(element, scene, explicitSpeaker = "") {
  if (!(element instanceof Element)) return element;
  const sceneId = String(scene?.id || "");
  if (element.dataset.avatarChecked === "true" && element.dataset.avatarSceneId === sceneId) return element;

  const speakerNode = element.querySelector(".speaker, strong");
  const speakerName = String(explicitSpeaker || speakerNode?.textContent || "Nhân vật").trim();
  const avatar = resolveDialogueAvatar(speakerName, scene);

  element.dataset.avatarChecked = "true";
  element.dataset.avatarSceneId = sceneId;
  element.dataset.speakerType = avatar?.type || "unknown";
  element.classList.add("has-avatar");
  element.querySelector(".dialogue-avatar")?.remove();
  element.prepend(createAvatar(speakerName, scene));
  return element;
}

function decorateRoot(root, scene) {
  if (!(root instanceof Element)) return;
  root.querySelectorAll(".dialogue, .ai-dialogue-line").forEach((element) => {
    decorateDialogueElement(element, scene);
  });
}

export function initDialogueAvatars() {
  let currentScene = null;
  const roots = [
    document.querySelector("#story-text"),
    document.querySelector("#ai-dialogue")
  ].filter(Boolean);

  roots.forEach((root) => {
    decorateRoot(root, currentScene);
    const observer = new MutationObserver(() => decorateRoot(root, currentScene));
    observer.observe(root, { childList: true, subtree: true });
  });

  // render() dispatches this event synchronously after replacing story text.
  // Set context before MutationObserver callbacks decorate any new dialogue.
  // Re-decorate retained AI lines too, including when loading an earlier save.
  window.addEventListener("hua:game-rendered", (event) => {
    currentScene = event.detail?.scene || null;
    roots.forEach((root) => decorateRoot(root, currentScene));
  });
}
