import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { CHARACTER_OVERLAYS, resolveCompanionId } from "../src/character-overlays.js";
import { CHARACTER_UNIFORM_RULES, isUniformScene, resolveCharacterOverlay } from "../src/character-appearance.js";
import { resolveDialogueAvatar } from "../src/dialogue-avatars.js";
import { VN_SCENES } from "../src/vn-scenes.js";

const names = {
  nguyen_van_thao: "Nguyễn Văn Thạo",
  tran_thi_men: "Trần Thị Mến",
  duong_that_nuong: "Dương Thất Nương",
  phan_bay_nen: "Phan Bảy Nện",
  dao_nhat_but: "Đào Nhất Bút",
  do_thi_hanh: "Đỗ Thị Hạnh",
  bui_tan_le: "Bùi Tấn Lễ",
  tong_nguyen_phuc: "Tống Nguyên Phúc",
  bay_luoc: "Bảy Lược",
  be_sau: "Bé Sáu",
  vo_van_duc: "Võ Văn Đức"
};
const heads = Object.keys(names).slice(0, 8);
const src = (id, sceneId) => resolveCharacterOverlay(id, { id: sceneId });
const uniform = (id) => id === "vo_van_duc"
  ? "assets/overlay/vo-van-duc-uniform.webp"
  : CHARACTER_UNIFORM_RULES[id].src;

for (const id of heads) {
  for (const sceneId of ["lh_i05_three_deeds", "vt_be_sau_knocking", "ky3_01_stub", "ky3_02_dai_tran_ha_o", "ky3_03_van_pham_thu_phap"]) {
    assert.equal(src(id, sceneId), CHARACTER_OVERLAYS[id], `${id} must wear normal clothes at ${sceneId}`);
  }
  for (const sceneId of ["ky3_04_quyen_giu_khai_mach_an", "ky3_09_gieo_vo_chu_tien_me", "ky3_10_dan_va_tuyen", "ky3_18_phuc_tho_ba_dien", "ky4_01_stub"]) {
    assert.equal(src(id, sceneId), uniform(id));
  }
}
for (const sceneId of ["lh_i02_rice_scuffle", "ky3_41_bay_luoc_hoi_luat", "ky4_01_stub", "ky4_02_join"]) {
  assert.equal(src("bay_luoc", sceneId), CHARACTER_OVERLAYS.bay_luoc);
}
assert.equal(src("bay_luoc", "ky4_03_next"), uniform("bay_luoc"));
assert.equal(src("bay_luoc", "ky4_10_later"), uniform("bay_luoc"));

const periodTwoScenes = Object.values(VN_SCENES).filter(scene => scene.id.startsWith("vt_"));
assert.ok(periodTwoScenes.length > 0);
for (const scene of periodTwoScenes) {
  assert.equal(resolveCharacterOverlay("be_sau", scene), CHARACTER_OVERLAYS.be_sau);
}
for (const scene of Object.values(VN_SCENES).filter(scene => scene.id.startsWith("ky3_"))) {
  assert.equal(resolveCharacterOverlay("be_sau", scene), uniform("be_sau"));
}
assert.equal(src("be_sau", "ky4_03_next"), uniform("be_sau"));
assert.equal(src("vo_van_duc", "lh_prologue"), uniform("vo_van_duc"));
assert.equal(resolveCharacterOverlay("vo_van_duc"), uniform("vo_van_duc"));

// A later authored cutoff needs only rule data, with an exclusive end.
const futurePhucRule = { ...CHARACTER_UNIFORM_RULES.tong_nguyen_phuc, until: { period: 5, scene: 7 } };
assert.equal(isUniformScene("ky5_06_before", futurePhucRule), true);
assert.equal(isUniformScene("ky5_07_deposed", futurePhucRule), false);
assert.equal(isUniformScene("ky6_01_after", futurePhucRule), false);

for (const scene of [undefined, null, {}, { id: "unmapped" }, { id: "ky3_bad" }, { id: "ky3_00_bad" }]) {
  assert.equal(resolveCharacterOverlay("tran_thi_men", scene), CHARACTER_OVERLAYS.tran_thi_men);
}
for (const id of ["cao_minh", "gao-minh", "tieu_lan", "hua_tieu_lan", "toString", "__proto__", "missing"]) {
  assert.equal(src(id, "ky4_03_next"), "");
}
const mainAvatar = resolveDialogueAvatar("Cao Minh", { id: "lh_prologue" });
const lanAvatar = resolveDialogueAvatar("Hứa Tiểu Lan", { id: "lh_prologue" });
assert.deepEqual(resolveDialogueAvatar("Cao Minh", { id: "ky4_03_next" }), mainAvatar);
assert.deepEqual(resolveDialogueAvatar("Hứa Tiểu Lan", { id: "ky4_03_next" }), lanAvatar);
assert.equal(resolveDialogueAvatar("Unknown speaker", { id: "ky4_03_next" }), null);
assert.equal(src("steward", "ky4_03_next"), CHARACTER_OVERLAYS.steward);

// All registered variants must exist and both views must resolve the same file.
const testScenes = [...Object.values(VN_SCENES), { id: "ky4_02_join" }, { id: "ky4_03_next" }];
for (const scene of testScenes) {
  for (const [id, name] of Object.entries(names)) {
    const overlaySrc = resolveCharacterOverlay(id, scene);
    assert.ok(existsSync(new URL(`../${overlaySrc}`, import.meta.url)), `Missing ${overlaySrc}`);
    const avatar = resolveDialogueAvatar(name, scene);
    assert.equal(avatar.src, overlaySrc, `${name}: avatar differs at ${scene.id}`);
    assert.equal(avatar.crop, true);
  }
}
// Late -> early -> late must not latch an appearance in memory or shared objects.
for (const id of Object.keys(names)) {
  const before = src(id, "lh_prologue");
  const later = src(id, "ky4_03_next");
  assert.equal(resolveDialogueAvatar(names[id], { id: "ky4_03_next" }).src, later);
  assert.equal(resolveDialogueAvatar(names[id], { id: "lh_prologue" }).src, before);
  assert.equal(src(id, "ky4_03_next"), later);
}

// Do not register Đức as a selectable companion as a side effect of appearances.
assert.equal(Object.hasOwn(CHARACTER_OVERLAYS, "vo_van_duc"), false);
assert.equal(resolveCompanionId({ companions: ["steward"], dialogue: [
  { speaker: "Võ Văn Đức" }, { speaker: "Võ Văn Đức" }
] }), "steward");
assert.equal(resolveCompanionId(VN_SCENES.lh_i05_three_deeds), "ba_chin_lai");
assert.equal(resolveDialogueAvatar("Trần Thị Mến", VN_SCENES.lh_i05_three_deeds).src, CHARACTER_OVERLAYS.tran_thi_men);
assert.equal(resolveCompanionId(VN_SCENES.vt_be_sau_knocking), "be_sau");
assert.equal(resolveCompanionId(VN_SCENES.vt_signs_be_sau_hears), "be_sau");

console.log(`Character appearance check passed: 11 members, ${testScenes.length} scene contexts, boundaries, avatar parity, earlier saves and future cutoff.`);
