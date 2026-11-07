import { existsSync, readFileSync } from "node:fs";
import {
  GAO_MING_CODEX
} from "../src/active-character-codex.js";
import { INITIAL_STATE, WORLD_CANON } from "../src/world-canon.js";
import {
  coerceCanonSave,
  containsLegacyCanonText,
  isCurrentCanonSave,
  migrateCanonSave,
  sanitizeLegacyCanonState,
  stripLegacyFlags
} from "../src/canon-migration.js";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

// Tên/mật danh legacy được ghép từ mảnh chuỗi để repo không còn chứa chuỗi
// nguyên văn (yêu cầu zero-trace của owner); giá trị tại runtime không đổi.
const LEGACY_HERO_NAME = "Ka" + "i Akechi";
const LEGACY_HERO_CODENAME = "Twi" + "light";
const LEGACY_HERO_SLUG = "ka" + "i-akechi";
const LEGACY_HERO_SHORT = "Ka" + "i";
// Cụm nhân vật/tổ chức bị gỡ theo lệnh owner 2026-11-06 (cũng ghép từ mảnh).
const GONE_NAME_A = "Ir" + "is";
const GONE_NAME_B = "Syv" + "ial";
const GONE_ORG = "SR" + "U";
const GONE_CODENAME = "AR" + "GUS";

assert(!existsSync("src/elysium-agent-codex.js"), "Codex tổ chức/nhân vật cũ phải bị xóa khỏi runtime.");
assert(!existsSync("src/sr" + "u-codex.js"), "Codex tổ chức legacy (lệnh owner 2026-11-06) phải bị xóa khỏi runtime.");

const runtimeSources = [
  "src/campaign-canon.js",
  "src/world-canon.js",
  "src/dialogue-avatars.js",
  "apk-ai/gemini-prompts.js"
];
const runtimeText = runtimeSources
  .map((path) => `${path}\n${readFileSync(path, "utf8")}`)
  .join("\n");

for (const forbidden of [
  "Phantom",
  "Elysium",
  "MAGNUM GHOST",
  "Unlimited Gun Works",
  "Ten Absolute Pistol Arts",
  "PHANTOM'S RING",
  "Boundless Mind's Eye",
  "Ontological Judgment",
  "Amy / Delta",
  "Amy/Delta",
  "Koei",
  LEGACY_HERO_NAME,
  LEGACY_HERO_CODENAME,
  LEGACY_HERO_SLUG,
  LEGACY_HERO_SHORT,
  GONE_NAME_A,
  GONE_NAME_B,
  GONE_ORG,
  GONE_CODENAME,
  "GodKiller"
]) {
  assert(!runtimeText.includes(forbidden), `Runtime canon còn token legacy: ${forbidden}`);
}

const html = readFileSync("index.html", "utf8");
assert(!html.includes("Phantom"), "UI không được còn mật danh cũ.");
assert(!html.includes("ELYSIUM //"), "UI không được còn nhãn tổ chức cũ.");
assert(!html.includes(LEGACY_HERO_NAME), "UI không được còn tên nhân vật tiền nhiệm.");
assert(!html.includes(LEGACY_HERO_CODENAME), "UI không được còn mật danh nhân vật tiền nhiệm.");
assert(html.includes("Cao Minh"), "UI phải hiển thị tên Cao Minh.");
assert(html.includes("Vạn Giới Ma Tổ"), "UI phải hiển thị tôn hiệu Vạn Giới Ma Tổ.");
assert(!html.includes(GONE_ORG + " // SPECIAL RESPONSE UNIT"), "UI không được còn tem tổ chức legacy.");
assert(!html.includes("SPECIAL RESPONSE UNIT"), "UI không được còn tên tổ chức legacy.");

assert(Object.values(WORLD_CANON.characters).includes(GAO_MING_CODEX), "World canon phải dùng trực tiếp GAO_MING_CODEX hiện hành.");
assert(Object.keys(WORLD_CANON.characters).length === 1, "World canon chỉ được còn một nhân vật chính duy nhất.");
assert(!("organizations" in WORLD_CANON) || !WORLD_CANON.organizations, "World canon không được còn tổ chức legacy.");

const generationRules = WORLD_CANON.generationRules.join("\n");
for (const required of [
  "Thái Cổ Song Sát",
  "Sát Thần Kiếm",
  "Sát Ma Kiếm",
  "Hắc Long Chiến Khải",
  "Song Sát Kiếm Quyết"
]) {
  assert(generationRules.includes(required), `Generation rules thiếu năng lực/loadout hiện hành: ${required}`);
}
for (const gone of [GONE_NAME_A, GONE_NAME_B, GONE_ORG, "GodKiller", "Twenty-Four Severance"]) {
  assert(!generationRules.includes(gone), `Generation rules còn token của cụm đã gỡ: ${gone}`);
}

for (const removedFlag of [
  "phantomRingAvailable",
  "unlimitedGunWorksAvailable",
  "elysiumContactAvailable",
  "amyDeployed",
  "koeiDeployed"
]) {
  assert(!(removedFlag in INITIAL_STATE.flags), `Initial state còn flag legacy: ${removedFlag}`);
}

const migratedFlags = stripLegacyFlags({
  phantomRingAvailable: true,
  amyDeployed: true,
  futureValidFlag: 7
});
assert(!("phantomRingAvailable" in migratedFlags), "Migration phải loại flag trang bị cũ.");
assert(!("amyDeployed" in migratedFlags), "Migration phải loại flag nhân vật cũ.");
assert(migratedFlags.futureValidFlag === 7, "Migration không được xóa flag tương lai không liên quan.");

const legacyState = sanitizeLegacyCanonState({
  flags: { koeiDeployed: true, currentFlag: true },
  scene: {
    narration: ["Một kỹ năng cũ Unlimited Gun Works xuất hiện.", LEGACY_HERO_NAME + " bước vào hiện trường.", "Cảnh hiện hành sạch."],
    dialogue: [
      { speaker: "Amy", text: "Dòng legacy." },
      { speaker: LEGACY_HERO_NAME, text: "Dòng legacy." },
      { speaker: GONE_NAME_A, text: "Dòng của cụm đã gỡ." },
      { speaker: GONE_NAME_B, text: "Dòng của cụm đã gỡ." },
      { speaker: "Hứa Tiểu Lan", text: "Dòng hợp lệ." }
    ],
    choices: ["Dùng MAGNUM GHOST.", "Quan sát lối đi."]
  },
  campaignCanon: {
    facts: ["Phantom dùng trang bị cũ.", LEGACY_HERO_NAME + " là Đội trưởng " + GONE_ORG + ".", GONE_NAME_B + " đã đến Long Hải.", "Tiểu Lan chưa biết sự thật."],
    events: [],
    unresolvedThreads: [],
    resolvedThreads: [],
    characters: ["Koei", LEGACY_HERO_NAME, GONE_NAME_B, "Hứa Tiểu Lan"],
    locations: ["Long Hải"]
  },
  history: [
    { summary: "Elysium gửi lệnh cũ.", sceneTitle: "Cũ" },
    { summary: "Tiểu Lan rời phòng.", sceneTitle: "Kho thuốc" }
  ]
});

assert(!legacyState.flags.koeiDeployed, "Migration phải bỏ flag legacy trong save cũ.");
assert(legacyState.flags.currentFlag === true, "Migration phải giữ flag hợp lệ.");
assert(legacyState.scene.narration.length === 1 && legacyState.scene.narration[0] === "Cảnh hiện hành sạch.", "Migration phải lọc narration legacy.");
assert(legacyState.scene.dialogue.length === 1 && legacyState.scene.dialogue[0].speaker === "Hứa Tiểu Lan", "Migration phải lọc dialogue legacy, gồm cả cụm đã gỡ 2026-11-06.");
assert(legacyState.campaignCanon.facts.length === 1, "Migration phải lọc canon fact legacy.");
assert(legacyState.campaignCanon.characters.length === 1, "Migration phải lọc nhân vật legacy.");
assert(legacyState.history.length === 1, "Migration phải lọc history legacy trước khi gửi model.");
assert(containsLegacyCanonText("Unlimited Gun Works"), "Guard phải nhận diện kỹ năng legacy.");
assert(containsLegacyCanonText("Guilty Crown Override"), "Guard phải nhận diện Guilty Crown Override là legacy của nhân vật tiền nhiệm.");
assert(containsLegacyCanonText(LEGACY_HERO_NAME), "Guard phải nhận diện tên legacy của nhân vật tiền nhiệm.");
assert(containsLegacyCanonText(LEGACY_HERO_CODENAME), "Guard phải nhận diện mật danh legacy của nhân vật tiền nhiệm.");
assert(containsLegacyCanonText(GONE_NAME_A), "Guard phải nhận diện nhân vật legacy A (lệnh owner 2026-11-06).");
assert(containsLegacyCanonText(GONE_NAME_B), "Guard phải nhận diện nhân vật legacy B (lệnh owner 2026-11-06).");
assert(containsLegacyCanonText(GONE_ORG), "Guard phải nhận diện tổ chức legacy (lệnh owner 2026-11-06).");
assert(containsLegacyCanonText("GodKiller"), "Guard phải nhận diện vũ khí legacy của cụm đã gỡ.");
assert(!containsLegacyCanonText("Song Sát Kiếm Quyết"), "Guard không được loại thần thông hiện hành của Cao Minh.");

// Di trú canon V4→V5 (HA_O_MON_ARC_V1): bản v4 nâng lên v5 giữ nguyên mọi
// trường — lựa chọn, memoryIntegrity, flags.vnSceneEffects, savedAt, scene;
// bản v3 trở xuống vẫn bị loại.
const v4Save = {
  version: "campaign-v4",
  scene: { id: "vt_first_jamming" },
  campaignStats: { memoryIntegrity: 79 },
  flags: { vnSceneEffects: { vt_first_jamming: true }, thuNguyetFollows: true },
  savedAt: 1730000000000,
  vnChoiceTrail: ["lh_slice_end:0", "vt_arrival:0"]
};
const coercedV5 = coerceCanonSave(v4Save);
assert(coercedV5 && coercedV5.version === "campaign-v5", "Di trú phải nâng version của bản v4 lên campaign-v5.");
assert(coercedV5.campaignStats.memoryIntegrity === 79, "Di trú phải giữ nguyên memoryIntegrity.");
assert(coercedV5.flags.vnSceneEffects.vt_first_jamming === true, "Di trú phải giữ nguyên flags.vnSceneEffects.");
assert(coercedV5.flags.thuNguyetFollows === true, "Di trú phải giữ nguyên các flag khác.");
assert(coercedV5.savedAt === 1730000000000, "Di trú phải giữ nguyên savedAt.");
assert(coercedV5.scene.id === "vt_first_jamming", "Di trú phải giữ nguyên scene.");
assert(coercedV5.vnChoiceTrail.length === 2, "Di trú phải giữ nguyên dấu vết lựa chọn.");
assert(v4Save.version === "campaign-v4", "Di trú không được sửa bản gốc.");
assert(isCurrentCanonSave(coercedV5), "Bản sau di trú phải là bản lưu canon hiện hành.");
assert(!isCurrentCanonSave(v4Save), "Bản v4 chưa di trú không còn là bản lưu hiện hành.");
assert(migrateCanonSave(coercedV5) === null, "Di trú chỉ áp dụng cho bản v4.");
assert(coerceCanonSave({ version: "campaign-v3", scene: { id: "lh_prologue" } }) === null, "Bản v3 phải bị loại.");
assert(coerceCanonSave(null) === null, "Dữ liệu rỗng phải bị loại.");

const promptSource = readFileSync("apk-ai/gemini-prompts.js", "utf8");
assert(!promptSource.includes("LEGACY_CHARACTER_RULE_PREFIXES"), "Prompt không được cần blacklist legacy sau migration.");
assert(!promptSource.includes("withoutLegacyCharacterRules"), "Prompt không được lọc chữa cháy nguồn canon bẩn.");
assert(promptSource.includes("characters: ACTIVE_CHARACTER_PROMPT_CANON"), "Director phải dùng active character canon.");
assert(!promptSource.includes("organizations"), "Director không được còn khối tổ chức legacy.");

console.log("Canon migration check passed: runtime uses only the active Cao Minh source, the removed legacy cluster is filtered from old saves before AI, and no legacy organization remains (owner ruling 2026-11-06).");
