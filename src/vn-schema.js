// LIBERA VN scene contract v1. Pure structural validation, no prose.
import { CHARACTER_OVERLAYS } from "./character-overlays.js";
import { ENTITY_OVERLAYS } from "./entity-overlays.js";
const VN_LINK_IDS = Object.freeze(["danh", "no", "lenh", "ky", "than", "tu"]);
export const VN_LINK_PHASES = Object.freeze(["unknown", "identified", "intervened", "severed"]);
const VN_ROUTE_IDS = Object.freeze(["bao_ho", "tu_quyet", "nghi_le"]);
const VN_EFFECT_LIMITS = Object.freeze({
  lanHealthDelta: [-12,8], lanTrustDelta: [-10,12],
  lanMaterInfluenceDelta: [-8,12], memoryIntegrityDelta: [-15,5],
  cluesHuaGiaDelta: [0,3], civiliansSavedDelta: [0,5],
  partyHealthDelta: [-15,8], suppliesDelta: [-3,2],
  ammunitionDelta: [-20,10], falseMemoryCountDelta: [-1,2]
});
const own = (o,k) => Object.prototype.hasOwnProperty.call(o,k);
export function validateVnScenes(scenes, startId) {
  const errors = [];
  if (!scenes || typeof scenes !== "object" || !own(scenes,startId)) {
    return ["Missing start scene"];
  }
  for (const [key, scene] of Object.entries(scenes)) {
    if (!scene || scene.id !== key) errors.push(key + ": id mismatch");
    if (typeof scene?.title !== "string" || !scene.title) errors.push(key + ": missing title");
    if (scene?.contentStatus !== "placeholder" && scene?.contentStatus !== "approved")
      errors.push(key + ": contentStatus must be placeholder or approved");
    if (typeof scene?.backgroundId !== "string") errors.push(key + ": backgroundId required");
    const condOk = (x) => (x?.if === undefined || (typeof x.if === "string" && x.if))
      && (x?.unless === undefined || (typeof x.unless === "string" && x.unless));
    if (!Array.isArray(scene?.narration) || !scene.narration.every(x=>typeof x==="string" || (typeof x?.text==="string" && condOk(x))))
      errors.push(key + ": narration must be string array");
    if (!Array.isArray(scene?.dialogue) || !scene.dialogue.every(x=>typeof x?.speaker==="string" && typeof x?.text==="string" && condOk(x)))
      errors.push(key + ": dialogue must be speaker/text array");
    if (scene?.sceneEffects !== undefined) {
      if (typeof scene.sceneEffects !== "object" || scene.sceneEffects === null || Array.isArray(scene.sceneEffects))
        errors.push(key + ": sceneEffects must be an object");
      else for (const [effect,amount] of Object.entries(scene.sceneEffects)) {
        const range = VN_EFFECT_LIMITS[effect];
        if (!range || !Number.isInteger(amount) || amount<range[0] || amount>range[1])
          errors.push(key + ": invalid sceneEffect " + effect);
      }
    }
    if (!Array.isArray(scene?.choices) || scene.choices.length > 3) errors.push(key + ": choices must contain <=3 options");
    if (scene?.companions !== undefined
      && (!Array.isArray(scene.companions) || scene.companions.length > 2
        || scene.companions.some((id) => !Object.hasOwn(CHARACTER_OVERLAYS, id))))
      errors.push(key + ": companions must be <=2 known overlay ids");
    // entity: chỉ đạo sân khấu của kịch bản — cảnh này Thực Thể hiện hình
    // trên Snapshot (và Cao Minh đổi tư thế encounter), bất kể điểm threat.
    // Giá trị: true (ảnh mặc định) hoặc id trong ENTITY_OVERLAYS.
    if (scene?.entity !== undefined && typeof scene.entity !== "boolean"
      && !(typeof scene.entity === "string" && Object.hasOwn(ENTITY_OVERLAYS, scene.entity)))
      errors.push(key + ": entity must be boolean or a known entity overlay id");
    if (scene?.link) {
      if (!VN_LINK_IDS.includes(scene.link.id) || !VN_LINK_PHASES.includes(scene.link.phase))
        errors.push(key + ": invalid link milestone");
    }
    if (scene?.route && !VN_ROUTE_IDS.includes(scene.route)) errors.push(key + ": invalid scene route");
    for (const choice of scene?.choices || []) {
      if (typeof choice.id !== "string" || typeof choice.text !== "string")
        errors.push(key + ": choice needs id/text");
      if (!choice.retry && !own(scenes,choice.next)) errors.push(key + ": unknown next scene");
      if (choice.retry && !scene.deadEnd) errors.push(key + ": retry outside dead end");
      for (const [effect,amount] of Object.entries(choice.effects || {})) {
        const range = VN_EFFECT_LIMITS[effect];
        if (!range || !Number.isInteger(amount) || amount<range[0] || amount>range[1])
          errors.push(key + ": invalid effect " + effect);
      }
      if (choice.route) {
        if (!VN_ROUTE_IDS.includes(choice.route.id) || !Number.isInteger(choice.route.delta)
          || Math.abs(choice.route.delta)>3) errors.push(key + ": invalid route delta");
      }
      if (choice.link && (!VN_LINK_IDS.includes(choice.link.id) || !VN_LINK_PHASES.includes(choice.link.phase)))
        errors.push(key + ": invalid choice link milestone");
      if (choice.flags && Object.values(choice.flags).some(v=>typeof v!=="boolean"))
        errors.push(key + ": flags must be boolean");
    }
  }
  return errors;
}
