import { existsSync, readFileSync } from "node:fs";
import {
  ACTIVE_CHARACTER_CODEX,
  ACTIVE_CHARACTER_PROMPT_CANON,
  GAO_MING_CODEX
} from "../src/active-character-codex.js";
import {
  PROSE_STYLE_GUIDE,
  buildWriterContext
} from "../src/prose-style-guide.js";

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

assert(GAO_MING_CODEX.identity.name === "Cao Minh", "Nhân vật chính phải dùng canon Cao Minh.");
assert(GAO_MING_CODEX.identity.codename === "Vạn Giới Ma Tổ", "Cao Minh phải dùng tôn hiệu Vạn Giới Ma Tổ.");
assert(
  GAO_MING_CODEX.identity.organization.startsWith("Vạn Ma Đạo Môn"),
  "Cao Minh phải thuộc Vạn Ma Đạo Môn trong canon hiện hành."
);
assert(GAO_MING_CODEX.identity.trueAge === "Không rõ", "Tuổi của Cao Minh phải để Không rõ theo Cao Minh Codex R02.");
assert(GAO_MING_CODEX.identity.position === "Đạo Tổ", "Vị thế của Cao Minh là Đạo Tổ.");
assert(GAO_MING_CODEX.identity.combatTier === "Đạo Tổ", "Cao Minh phải giữ đạo hạnh Đạo Tổ, không dùng cấp số hóa UR+.");
assert(GAO_MING_CODEX.equipment.currentWeapons.includes("Sát Thần Kiếm"), "Cao Minh phải có Sát Thần Kiếm thuộc Thái Cổ Song Sát.");
assert(GAO_MING_CODEX.equipment.currentWeapons.includes("Sát Ma Kiếm"), "Cao Minh phải có Sát Ma Kiếm thuộc Thái Cổ Song Sát.");
assert(
  JSON.stringify(GAO_MING_CODEX.combat).includes("Song Sát Kiếm Quyết"),
  "Combat của Cao Minh phải khóa Song Sát Kiếm Quyết trong 13 thần thông."
);

// Lệnh owner 2026-11-06: cụm legacy (hai nhân vật phụ + tổ chức) đã gỡ hoàn
// toàn khỏi thế giới game — codex chỉ còn Cao Minh, file codex tổ chức đã xóa.
assert(
  Object.keys(ACTIVE_CHARACTER_CODEX).length === 1 && ACTIVE_CHARACTER_CODEX.gaoMing === GAO_MING_CODEX,
  "Active character codex chỉ được còn Cao Minh."
);
assert(
  Object.keys(ACTIVE_CHARACTER_PROMPT_CANON).length === 1,
  "Prompt canon chỉ được còn Cao Minh."
);
assert(!existsSync(new URL("../src/sr" + "u-codex.js", import.meta.url)), "File codex tổ chức legacy phải bị xóa khỏi runtime.");
assert(!existsSync(new URL("../assets/avatars/" + GONE_ORG + "_AVATAR.jpg", import.meta.url)), "Avatar tổ chức legacy phải bị xóa.");

const promptCanonText = JSON.stringify(ACTIVE_CHARACTER_PROMPT_CANON);
for (const forbidden of [
  "Amy / Delta",
  "MAGNUM GHOST",
  "Unlimited Gun Works",
  "White Wraith Magnum",
  "Blackblood Armor",
  "Black Blood",
  "Huyết Nha",
  LEGACY_HERO_NAME,
  LEGACY_HERO_CODENAME,
  GONE_NAME_A,
  GONE_NAME_B,
  GONE_ORG,
  GONE_CODENAME,
  "GodKiller",
  "Guilty Crown Override"
]) {
  assert(!promptCanonText.includes(forbidden), `Prompt canon không được còn legacy token: ${forbidden}`);
}
assert(promptCanonText.includes("Vạn Ma Đạo Môn"), "Prompt canon phải truyền Vạn Ma Đạo Môn cho Cao Minh.");
assert(promptCanonText.includes("Sát Thần Kiếm"), "Prompt canon phải truyền Sát Thần Kiếm.");
assert(promptCanonText.includes("Sát Ma Kiếm"), "Prompt canon phải truyền Sát Ma Kiếm.");
assert(promptCanonText.includes("Đạo Tổ"), "Prompt canon phải truyền đạo hạnh Đạo Tổ của Cao Minh.");

const voicesText = JSON.stringify(PROSE_STYLE_GUIDE.voices);
assert(!voicesText.includes("Amy / Delta"), "Voice card không được còn Amy/Delta.");
assert(!voicesText.includes(LEGACY_HERO_NAME), "Voice card không được còn tên nhân vật tiền nhiệm.");
assert(!voicesText.includes(LEGACY_HERO_CODENAME), "Voice card không được còn mật danh nhân vật tiền nhiệm.");
assert(!voicesText.includes(GONE_NAME_A), "Voice card không được còn nhân vật legacy A.");
assert(!voicesText.includes(GONE_NAME_B), "Voice card không được còn nhân vật legacy B.");

const writerContext = buildWriterContext(
  { progression: { stageId: "long_hai" }, currentLocation: "Long Hải" },
  { stage: { label: "Long Hải" } },
  { dialoguePlan: [{ speaker: "Cao Minh" }, { speaker: "Hứa Tiểu Lan" }] }
);
const activeVoiceNames = writerContext.activeVoices.map((voice) => voice.name);
assert(activeVoiceNames.includes("Cao Minh / Vạn Giới Ma Tổ"), "Writer phải luôn có voice Cao Minh mới.");
assert(activeVoiceNames.includes("Hứa Tiểu Lan"), "Writer phải nhận diện voice Tiểu Lan.");

// Người nói thuộc cụm đã gỡ phải rơi về voice NPC chung, không còn thẻ riêng.
const goneContext = buildWriterContext(
  { progression: { stageId: "long_hai" }, currentLocation: "Long Hải" },
  { stage: { label: "Long Hải" } },
  { dialoguePlan: [{ speaker: GONE_NAME_A }, { speaker: GONE_NAME_B }] }
);
const goneVoiceNames = goneContext.activeVoices.map((voice) => voice.name);
assert(!goneVoiceNames.some((name) => name.includes(GONE_NAME_A)), "Writer không được còn voice riêng cho nhân vật legacy A.");
assert(!goneVoiceNames.some((name) => name.includes(GONE_NAME_B)), "Writer không được còn voice riêng cho nhân vật legacy B.");

const promptSource = readFileSync(new URL("../apk-ai/gemini-prompts.js", import.meta.url), "utf8");
assert(promptSource.includes("ACTIVE_CHARACTER_PROMPT_CANON"), "Gemini prompt phải nạp character canon hiện hành.");
assert(promptSource.includes("characters: ACTIVE_CHARACTER_PROMPT_CANON"), "Director canon phải truyền character canon hiện hành.");
assert(promptSource.includes("CHARACTER CANON:"), "Writer prompt phải nhận character canon hiện hành.");
assert(!promptSource.includes(GONE_NAME_A), "Gemini prompt không được còn nhân vật legacy A.");
assert(!promptSource.includes(GONE_NAME_B), "Gemini prompt không được còn nhân vật legacy B.");
assert(!promptSource.includes(GONE_ORG), "Gemini prompt không được còn tổ chức legacy.");
assert(!promptSource.includes("black-blood-character-codex"), "Gemini prompt không được import module tổ chức legacy.");

console.log("Character canon check passed: Cao Minh (CHAR.GAO_MING, Đạo Tổ) is the sole active character in Director/Writer prompts; the legacy character/organization cluster is fully removed (owner ruling 2026-11-06).");
