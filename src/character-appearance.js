import { CHARACTER_OVERLAYS } from "./character-overlays.js";

// Display policy only. Never add these ids to the companion-selection registry:
// doing so would change which speaker wins resolveCompanionId().
const STANDARD_OVERLAY_OVERRIDES = Object.freeze({
  vo_van_duc: "assets/overlay/vo-van-duc-uniform.webp"
});

function uniformRule(src, period, scene, until = null) {
  return Object.freeze({
    src,
    from: Object.freeze({ period, scene }),
    until: until ? Object.freeze({ ...until }) : null
  });
}

// `from` is inclusive, `until` is exclusive. Tống Nguyên Phúc's exact
// deposition scene in Kỳ V is intentionally not invented here. Set his
// `until` when that scene is authored; no save migration is needed.
export const CHARACTER_UNIFORM_RULES = Object.freeze({
  nguyen_van_thao: uniformRule("assets/overlay/nguyen-van-thao-uniform.webp", 3, 4),
  tran_thi_men: uniformRule("assets/overlay/tran-thi-men-uniform.webp", 3, 4),
  duong_that_nuong: uniformRule("assets/overlay/duong-that-nuong-uniform.webp", 3, 4),
  phan_bay_nen: uniformRule("assets/overlay/phan-bay-nen-uniform.webp", 3, 4),
  dao_nhat_but: uniformRule("assets/overlay/dao-nhat-but-uniform.webp", 3, 4),
  do_thi_hanh: uniformRule("assets/overlay/do-thi-hanh-uniform.webp", 3, 4),
  bui_tan_le: uniformRule("assets/overlay/bui-tan-le-uniform.webp", 3, 4),
  tong_nguyen_phuc: uniformRule("assets/overlay/tong-nguyen-phuc-uniform.webp", 3, 4),
  bay_luoc: uniformRule("assets/overlay/bay-luoc-uniform.webp", 4, 3),
  be_sau: uniformRule("assets/overlay/be-sau-uniform.webp", 3, 1)
});

// The scene id is authoritative: stageId describes geography, not Kỳ.
// Kỳ III itself visits both long_hai and vung_tau. Ignore progression,
// visited scenes and flags so loading an earlier save restores earlier clothes.
function scenePosition(scene) {
  const id = typeof scene === "string" ? scene : scene?.id;
  if (typeof id !== "string") return null;
  const numbered = /^ky([1-9]\d*)_([0-9]+)(?:_|$)/.exec(id);
  if (numbered) {
    const period = Number(numbered[1]);
    const ordinal = Number(numbered[2]);
    return Number.isSafeInteger(period) && Number.isSafeInteger(ordinal) && ordinal > 0
      ? { period, scene: ordinal }
      : null;
  }
  if (id.startsWith("lh_")) return { period: 1, scene: 0 };
  if (id.startsWith("vt_")) return { period: 2, scene: 0 };
  return null;
}

function comparePosition(left, right) {
  return left.period - right.period || left.scene - right.scene;
}

export function isUniformScene(scene, rule) {
  const position = scenePosition(scene);
  return Boolean(position && rule?.from
    && comparePosition(position, rule.from) >= 0
    && (!rule.until || comparePosition(position, rule.until) < 0));
}

export function resolveCharacterOverlay(id, scene) {
  if (Object.hasOwn(STANDARD_OVERLAY_OVERRIDES, id)) return STANDARD_OVERLAY_OVERRIDES[id];
  if (!Object.hasOwn(CHARACTER_OVERLAYS, id)) return "";
  const rule = Object.hasOwn(CHARACTER_UNIFORM_RULES, id) ? CHARACTER_UNIFORM_RULES[id] : null;
  return isUniformScene(scene, rule) ? rule.src : CHARACTER_OVERLAYS[id];
}
