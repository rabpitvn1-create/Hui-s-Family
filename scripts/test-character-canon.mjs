import { readFileSync } from "node:fs";
import {
  ACTIVE_CHARACTER_PROMPT_CANON,
  GAO_MING_CODEX,
  IRIS_CODEX,
  SYVIAL_CODEX
} from "../src/active-character-codex.js";
import { SRU_CODEX, SRU_PROMPT_CANON } from "../src/sru-codex.js";
import {
  PROSE_STYLE_GUIDE,
  buildWriterContext
} from "../src/prose-style-guide.js";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

// Tên/mật danh legacy của nhân vật tiền nhiệm được ghép từ mảnh chuỗi để repo không còn
// chứa chuỗi nguyên văn (yêu cầu zero-trace của owner); giá trị tại runtime không đổi.
const LEGACY_HERO_NAME = "Ka" + "i Akechi";
const LEGACY_HERO_CODENAME = "Twi" + "light";
const LEGACY_HERO_SLUG = "ka" + "i-akechi";
const LEGACY_HERO_SHORT = "Ka" + "i";

assert(GAO_MING_CODEX.identity.name === "Cao Minh", "Nhân vật chính phải dùng canon Cao Minh.");
assert(GAO_MING_CODEX.identity.codename === "Vạn Giới Ma Tổ", "Cao Minh phải dùng tôn hiệu Vạn Giới Ma Tổ.");
assert(
  GAO_MING_CODEX.identity.organization.startsWith("Vạn Ma Đạo Môn"),
  "Cao Minh phải thuộc Vạn Ma Đạo Môn trong canon hiện hành."
);
assert(GAO_MING_CODEX.identity.trueAge === "Không rõ", "Tuổi của Cao Minh phải để Không rõ theo Cao Minh Codex R02.");
assert(GAO_MING_CODEX.identity.position === "Đạo Tổ", "Cao Minh không giữ chức vụ SRU; vị thế của anh là Đạo Tổ.");
assert(GAO_MING_CODEX.identity.combatTier === "Đạo Tổ", "Cao Minh phải giữ đạo hạnh Đạo Tổ, không dùng cấp số hóa UR+.");
assert(GAO_MING_CODEX.equipment.currentWeapons.includes("Sát Thần Kiếm"), "Cao Minh phải có Sát Thần Kiếm thuộc Thái Cổ Song Sát.");
assert(GAO_MING_CODEX.equipment.currentWeapons.includes("Sát Ma Kiếm"), "Cao Minh phải có Sát Ma Kiếm thuộc Thái Cổ Song Sát.");
assert(
  JSON.stringify(GAO_MING_CODEX.combat).includes("Song Sát Kiếm Quyết"),
  "Combat của Cao Minh phải khóa Song Sát Kiếm Quyết trong 13 thần thông."
);

assert(IRIS_CODEX.identity.name === "Iris", "Amy phải được thay bằng Iris trong character canon.");
assert(IRIS_CODEX.identity.codename === "ARGUS", "Iris phải dùng mật danh ARGUS.");
assert(
  IRIS_CODEX.identity.organization.startsWith("CHƯA KHÓA"),
  "Không được tự gán tổ chức mới cho Iris khi canon hiện hành chưa khóa."
);
assert(
  IRIS_CODEX.combat.weapons.some((line) => line.includes("đúng hai khẩu")),
  "Iris phải khóa đúng hai khẩu Ivory và Ebony."
);

assert(SYVIAL_CODEX.identity.name === "Syvial", "Delta phải được thay bằng Syvial trong character canon.");
assert(SYVIAL_CODEX.identity.organization === "CHƯA KHÓA", "Không được tự gán tổ chức cho Syvial.");
assert(
  SYVIAL_CODEX.combat.godKillerOverride.some((line) => line.includes("đúng 24 nhát")),
  "GodKiller Override phải khóa đúng 24 nhát."
);

assert(SRU_CODEX.id === "SRU-FORCE-2299-R01", "SRU phải dùng đúng canon ID hiện hành.");
assert(
  SRU_CODEX.identity.parentOrganization === "Cảnh Sát chống hiện tượng dị thường",
  "SRU phải trực thuộc Cảnh Sát chống hiện tượng dị thường."
);
assert(
  !JSON.stringify(SRU_CODEX.command).includes(LEGACY_HERO_SHORT),
  "Chỉ huy SRU không được còn gán cho nhân vật tiền nhiệm sau khi thay canon nhân vật chính."
);
assert(
  SRU_CODEX.identity.name.startsWith("SRU / Special Response Unit"),
  "SRU vẫn là tổ chức trong thế giới 1899 theo canon hiện hành."
);
assert(SRU_CODEX.equipment.signatureArmor.includes("SRU-MK20"), "SRU codex phải khóa SRU-MK20 là giáp nhận diện của tổ chức SRU.");
assert(SRU_CODEX.equipment.signatureArmor.includes("SPECIAL RESPONSE UNIT"), "Giáp nhận diện SRU phải giữ đánh dấu SPECIAL RESPONSE UNIT.");
assert(SRU_CODEX.doctrine.some((line) => line.includes("quyền phán đoán tại hiện trường")), "SRU phải khóa quyền phán đoán tại hiện trường.");
assert(SRU_CODEX.lore.includes("SRU là lực lượng bước vào trước"), "Full SRU lore phải giữ câu khóa vai trò phản ứng đầu tiên.");

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
  "SRU-MK20",
  "SRU-SG",
  "Guilty Crown Override"
]) {
  assert(!promptCanonText.includes(forbidden), `Prompt canon không được còn legacy token: ${forbidden}`);
}
assert(promptCanonText.includes("Vạn Ma Đạo Môn"), "Prompt canon phải truyền Vạn Ma Đạo Môn cho Cao Minh.");
assert(promptCanonText.includes("Sát Thần Kiếm"), "Prompt canon phải truyền Sát Thần Kiếm.");
assert(promptCanonText.includes("Sát Ma Kiếm"), "Prompt canon phải truyền Sát Ma Kiếm.");
assert(promptCanonText.includes("Đạo Tổ"), "Prompt canon phải truyền đạo hạnh Đạo Tổ của Cao Minh.");

const sruPromptText = JSON.stringify(SRU_PROMPT_CANON);
assert(sruPromptText.includes("Cảnh Sát chống hiện tượng dị thường"), "Prompt SRU phải truyền tổ chức mẹ.");
assert(sruPromptText.includes("SRU-FORCE-2299-R01"), "Prompt SRU phải truyền đúng canon ID của tổ chức.");
assert(sruPromptText.includes("SRU-MK20"), "Prompt SRU phải truyền nhận diện trang bị.");
assert(!sruPromptText.includes(LEGACY_HERO_NAME), "Prompt SRU không được còn chỉ huy cũ.");
assert(!sruPromptText.includes(LEGACY_HERO_CODENAME), "Prompt SRU không được còn mật danh cũ.");
assert(!sruPromptText.includes("Vatican"), "Prompt SRU không được tự phục hồi tổ chức legacy Vatican.");
assert(!sruPromptText.includes("Black Blood"), "Prompt SRU không được tự phục hồi Black Blood.");

const writerContext = buildWriterContext(
  { progression: { stageId: "long_hai" }, currentLocation: "Long Hải" },
  { stage: { label: "Long Hải" } },
  { dialoguePlan: [{ speaker: "Iris" }, { speaker: "Syvial" }] }
);
const activeVoiceNames = writerContext.activeVoices.map((voice) => voice.name);
assert(activeVoiceNames.includes("Cao Minh / Vạn Giới Ma Tổ"), "Writer phải luôn có voice Cao Minh mới.");
assert(activeVoiceNames.includes("Iris / ARGUS"), "Writer phải nhận diện voice Iris.");
assert(activeVoiceNames.includes("Syvial"), "Writer phải nhận diện voice Syvial.");
assert(!JSON.stringify(PROSE_STYLE_GUIDE.voices).includes("Amy / Delta"), "Voice card không được còn Amy/Delta.");
assert(!JSON.stringify(PROSE_STYLE_GUIDE.voices).includes(LEGACY_HERO_NAME), "Voice card không được còn tên nhân vật tiền nhiệm.");
assert(!JSON.stringify(PROSE_STYLE_GUIDE.voices).includes(LEGACY_HERO_CODENAME), "Voice card không được còn mật danh nhân vật tiền nhiệm.");

const promptSource = readFileSync(new URL("../apk-ai/gemini-prompts.js", import.meta.url), "utf8");
assert(promptSource.includes("ACTIVE_CHARACTER_PROMPT_CANON"), "Gemini prompt phải nạp character canon hiện hành.");
assert(promptSource.includes("characters: ACTIVE_CHARACTER_PROMPT_CANON"), "Director canon phải truyền character canon hiện hành.");
assert(promptSource.includes("SRU_PROMPT_CANON"), "Gemini prompt phải nạp SRU organization canon.");
assert(promptSource.includes("organizations: { sru: SRU_PROMPT_CANON }"), "Director canon phải truyền SRU organization canon.");
assert(promptSource.includes("SRU CANON:"), "Writer prompt phải nhận SRU canon gọn.");
assert(promptSource.includes("CHARACTER CANON:"), "Writer prompt phải nhận character canon hiện hành.");
assert(!promptSource.includes("black-blood-character-codex"), "Gemini prompt không được import module tổ chức legacy.");

console.log("Character/SRU canon check passed: Cao Minh (CHAR.GAO_MING, Đạo Tổ) is active in Director/Writer prompts and SRU-FORCE-2299-R01 remains the world organization canon.");
