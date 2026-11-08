import assert from "node:assert/strict";
import { initGame } from "../src/game.js";
import { INITIAL_STATE } from "../src/world-canon.js";
import { VN_SCENES, VN_START_SCENE } from "../src/vn-scenes.js";
import { validateVnScenes, resolveChoiceTarget } from "../src/vn-schema.js";
const AUTO_SAVE_KEY = "hua-family-campaign-v4-auto";
const MANUAL_SAVE_KEY = "hua-family-campaign-v4-manual";
class Element extends EventTarget {
  children = []; textContent = ""; 
  append(...children) { this.children.push(...children); }
  replaceChildren(...children) { this.children = children; }
  click() { this.dispatchEvent(new Event("click")); }
}
function launch(saves) {
  const elements = new Map();
  globalThis.document = {
    querySelector(selector) {
      if (!elements.has(selector)) elements.set(selector, new Element());
      return elements.get(selector);
    },
    createElement: () => new Element()
  };
  globalThis.window = new EventTarget();
  window.localStorage = {
    getItem: k => saves.get(k) ?? null,
    setItem: (k,v) => saves.set(k,String(v)),
    removeItem: k => saves.delete(k)
  };
  return { bridge: initGame(), elements };
}
assert.deepEqual(validateVnScenes(VN_SCENES, VN_START_SCENE), []);

{
  // Regression: the fixed game-layout scroller must return to the beginning
  // after every scene-changing choice, including dead ends and retries.
  const reader = launch(new Map());
  const scroller = document.querySelector(".game-layout");
  const frames = [];
  window.requestAnimationFrame = callback => frames.push(callback);
  scroller.scrollTop = 800;
  assert.equal(reader.bridge.applyScriptChoice(99), false);
  assert.equal(scroller.scrollTop, 800, "invalid choice must not change scroll");

  assert.equal(reader.bridge.applyScriptChoice(1), true); // dead end
  assert.equal(scroller.scrollTop, 0, "dead-end scene must start at top");
  scroller.scrollTop = 600; // emulate browser scroll anchoring after DOM replacement
  frames.shift()();
  assert.equal(scroller.scrollTop, 0, "next frame must also restore the reader");

  scroller.scrollTop = 700;
  assert.equal(reader.bridge.applyScriptChoice(0), true); // retry checkpoint
  assert.equal(scroller.scrollTop, 0, "retry must start at top");
  scroller.scrollTop = 900;
  assert.equal(reader.bridge.applyScriptChoice(0), true); // normal transition
  assert.equal(scroller.scrollTop, 0, "ordinary choice must start at top");

  scroller.scrollTop = 300;
  reader.bridge.saveGame();
  assert.equal(scroller.scrollTop, 300, "saving must preserve manual scroll");
  reader.bridge.applyScriptChoice(0);
  scroller.scrollTop = 500;
  reader.bridge.loadGame();
  assert.equal(reader.bridge.getSnapshot().scene.id, "lh_gate");
  assert.equal(scroller.scrollTop, 0, "loading a scene must start at top");

  scroller.scrollTop = 400;
  reader.bridge.restartGame();
  assert.equal(reader.bridge.getSnapshot().scene.id, VN_START_SCENE);
  assert.equal(scroller.scrollTop, 0, "new campaign must start at top");
}
assert.equal(VN_SCENES.lh_prologue.contentStatus, "approved");
// Nội dung chính thức đã vào (Muse, 2026-11-06): mọi scene gắn nhãn
// "approved" tuyệt đối không được còn chữ placeholder kỹ thuật.
for (const scene of Object.values(VN_SCENES)) {
  if (scene.contentStatus === "approved") {
    assert.equal(JSON.stringify(scene).includes("[PLACEHOLDER"), false);
  }
}
const saves = new Map();
let game = launch(saves);
assert.equal(game.bridge.getSnapshot().scene.id, VN_START_SCENE);
assert.equal(game.bridge.getSnapshot().version, INITIAL_STATE.version);
assert.throws(()=>game.bridge.applyAiTurn({}, ""), /AI-GM.*tắt/);
assert.equal(game.bridge.applyScriptChoice(1), true);
assert.equal(game.bridge.getSnapshot().scene.id, "lh_dead_blade");
assert.equal(game.bridge.applyScriptChoice(0), true);
assert.equal(game.bridge.getSnapshot().scene.id, VN_START_SCENE);
assert.equal(game.bridge.applyScriptChoice(0), true);
assert.equal(game.bridge.getSnapshot().scene.id, "lh_gate");
// Mạch Hồi 1 mở rộng (Phương án B): prologue → gate → saloon → rules → hall.
game.bridge.applyScriptChoice(0);
assert.equal(game.bridge.getSnapshot().scene.id, "lh_saloon");
game.bridge.applyScriptChoice(0);
assert.equal(game.bridge.getSnapshot().scene.id, "lh_rules");
game.bridge.applyScriptChoice(0);
assert.equal(game.bridge.getSnapshot().scene.id, "lh_hall");
assert.equal(game.bridge.getSnapshot().progression.completedObjectiveIds.includes("infiltrate_villa"), true);
// Mạch Hồi 1 sau Đợt 1B: hall → lan_room → lan_talk → morning_tea →
// Mạch chính 80 cảnh (mọi lựa chọn đều lấy nhánh đầu tiên) đi liền một
// mạch tới lh_escape_begins, thử dead end đồng thuận, rồi ra cổng tới
// lh_slice_end.
for (const expected of ["lh_lan_room", "lh_lan_talk", "lh_morning_tea", "lh_garden", "lh_i04_gate_silence", "lh_night_bell", "lh_night_corridor", "lh_doctor_visit", "lh_medicine_store", "lh_servants", "lh_register_room", "lh_i03_names_for_sale", "lh_kitchen", "lh_lan_knots", "lh_old_servant", "lh_well_anchor", "lh_lan_sleepwalk", "lh_altar", "lh_thu_nguyet_errand", "lh_market", "lh_i05_three_deeds", "lh_i02_black_scarves", "lh_letter", "lh_council", "lh_lan_question", "lh_anchor_bell", "lh_scout_coast", "lh_inspector_notice", "lh_eve_inspection", "lh_accident_beam", "lh_poison_tea", "lh_corridor_fight", "lh_aftermath", "lh_lan_pushback_big", "lh_retelling", "lh_kitchen_fire", "lh_hearth_anchor", "lh_storm", "lh_night_attack", "lh_blade_wound", "lh_ba_confession", "lh_lan_plan", "lh_inspector_early", "lh_ambush_well", "lh_hide_lan", "lh_first_sweep", "lh_audit_table", "lh_nghiem", "lh_certification", "lh_lan_faces", "lh_move_tonight", "lh_so_retrieval", "lh_ngoc_chi_keepsake", "lh_nghiem_offer", "lh_refusal", "lh_lockdown", "lh_servants_choose", "lh_anchor_map", "lh_lan_farewell", "lh_ba_stays", "lh_thu_nguyet_choice", "lh_escape_eve", "lh_escape_begins"]) {
  game.bridge.applyScriptChoice(0);
  assert.equal(game.bridge.getSnapshot().scene.id, expected);
}
assert.equal(game.bridge.getSnapshot().flags.vnLinks.danh, "intervened");
// Đợt sửa 2026-11-06 (P0-06/P0-08): tại lh_escape_begins mới xong 3 mục
// tiêu — break_long_hai_ritual chỉ hoàn thành khi cụm khóa cổng bị vô hiệu
// thật ở lh_gate_hold, escape_long_hai khi đoàn đã ra tới lh_coast_road.
// Hiệu ứng bắt buộc tại cảnh lh_lan_pushback_big đã trừ ký ức đúng một lần.
assert.equal(game.bridge.getSnapshot().progression.completedObjectiveIds.length, 3);
assert.equal(game.bridge.getSnapshot().campaignStats.memoryIntegrity, 92);
// Dead end đồng thuận rẽ từ lh_escape_begins: bế nàng đi không hỏi.
const beforeDead = structuredClone(game.bridge.getSnapshot());
game.bridge.applyScriptChoice(1);
assert.equal(game.bridge.getSnapshot().scene.id, "lh_dead_consent");
game.bridge.applyScriptChoice(0);
assert.equal(game.bridge.getSnapshot().scene.id, "lh_escape_begins");
assert.deepEqual(game.bridge.getSnapshot().campaignStats, beforeDead.campaignStats);
// Hỏi nàng (ask_her) rồi đánh ra cổng, khép chặng ở lh_slice_end.
game.bridge.applyScriptChoice(0);
assert.equal(game.bridge.getSnapshot().scene.id, "lh_gate_fight");
// Tại trận cổng, cả hai mục tiêu cuối vẫn chưa hoàn thành.
assert.equal(game.bridge.getSnapshot().progression.completedObjectiveIds.length, 3);
game.bridge.applyScriptChoice(0);
assert.equal(game.bridge.getSnapshot().scene.id, "lh_gate_hold");
assert.equal(game.bridge.getSnapshot().progression.completedObjectiveIds.includes("break_long_hai_ritual"), true);
game.bridge.applyScriptChoice(0);
assert.equal(game.bridge.getSnapshot().scene.id, "lh_coast_road");
for (const expected of ["lh_i06_roadside_writ", "lh_road_choice", "lh_last_pushback", "lh_names_price", "lh_open_road", "lh_dawn_after", "lh_names_restored", "lh_i01_false_weights", "lh_slice_end"]) {
  game.bridge.applyScriptChoice(0);
  assert.equal(game.bridge.getSnapshot().scene.id, expected);
}
// escape_long_hai hoàn thành tại lh_coast_road → engine lật chặng:
// stageId sang vung_tau và danh sách mục tiêu làm mới cho chặng mới.
assert.equal(game.bridge.getSnapshot().progression.completedObjectiveIds.length, 0);
// Đợt sửa 2026-11-06 (II.B): DANH kết thúc chặng Long Hải ở intervened —
// quyền hồ sơ của Giới Phòng trên toàn mạng chưa bị cắt.
assert.equal(game.bridge.getSnapshot().flags.vnLinks.danh, "intervened");
// 100 − 8 (phản kháng lớn, hiệu ứng bắt buộc tại cảnh) − 8 (phản kháng cuối).
assert.equal(game.bridge.getSnapshot().campaignStats.memoryIntegrity, 84);
assert.equal(game.bridge.getSnapshot().flags.lanDepartureConsent, true);
assert.equal(game.bridge.getSnapshot().progression.stageId, "vung_tau");
// Hồi 1 khép ở lh_slice_end nhưng mạch truyện đi tiếp xuống Vũng Tàu
// (phần mở đầu chặng 2, hệ thống 5 agent 2026-11-06): đúng một lựa chọn.
assert.equal(game.bridge.getSnapshot().scene.choices.length, 1);
assert.ok(JSON.parse(saves.get(AUTO_SAVE_KEY)).scene.id === "lh_slice_end");
game.bridge.saveGame();
const saved = saves.get(MANUAL_SAVE_KEY);
game = launch(saves);
// Khởi động lại có bản lưu hợp lệ: tự khôi phục đúng cảnh đã lưu (lệnh chủ
// nhân 2026-11-06), bản lưu thủ công không bị đụng tới.
assert.equal(game.bridge.getSnapshot().scene.id, "lh_slice_end");
assert.equal(saves.get(MANUAL_SAVE_KEY), saved);
game.bridge.loadGame();
assert.equal(game.bridge.getSnapshot().scene.id,"lh_slice_end");
// Phần mở đầu chặng 2 — Vũng Tàu (hệ thống 5 agent, 2026-11-06): đi tiếp
// từ lh_slice_end qua 7 cảnh vt_*, khép phần ở vt_hook.
game.bridge.applyScriptChoice(0);
assert.equal(game.bridge.getSnapshot().scene.id, "vt_arrival");
assert.equal(game.bridge.getSnapshot().scene.kicker, "HỒI I // HẠ Ô KHAI TÔNG // 1899");
for (const expected of ["vt_coffin_wharf", "vt_coal_store", "vt_ledger", "vt_first_jamming", "vt_restitution", "vt_hook"]) {
  game.bridge.applyScriptChoice(0);
  assert.equal(game.bridge.getSnapshot().scene.id, expected);
}
// Giá của lần gây nhiễu chủ động đầu tiên (hiệu ứng bắt buộc tại
// vt_first_jamming): 84 − 5 = 79. Mắt xích Nợ nhận diện tại vt_restitution.
assert.equal(game.bridge.getSnapshot().campaignStats.memoryIntegrity, 79);
assert.equal(game.bridge.getSnapshot().flags.vnLinks.no, "identified");
// Kỳ II — Phúc Thọ mở rộng (hệ 5 agent, 2026-11-07): vt_hook không còn là
// điểm kết; hai lựa chọn hội tụ vào vt_children_pursuit và mạch 18 cảnh
// chạy liền tới Kỳ III (ky3_01_stub).
assert.equal(game.bridge.getSnapshot().scene.choices.length, 2);
game.bridge.applyScriptChoice(0);
assert.equal(game.bridge.getSnapshot().scene.id, "vt_children_pursuit");
assert.equal(game.bridge.getSnapshot().flags.vtFollowShip, true);
for (const expected of ["vt_river_chase", "vt_coffin_ship", "vt_be_sau_knocking", "vt_living_under_hull", "vt_two_paper_deaths", "vt_river_mouth_turn", "vt_wharf_shelter", "vt_rescue_debt_first", "vt_lid_sign_again", "vt_port_inspection", "vt_signs_be_sau_hears", "vt_rescue_debt_second", "vt_hidden_man_route", "vt_port_two_masters", "vt_names_returned", "vt_wharf_contained", "vt_rice_seed_yard", "ky3_01_stub"]) {
  game.bridge.applyScriptChoice(0);
  assert.equal(game.bridge.getSnapshot().scene.id, expected);
}
// Suốt Kỳ II ký ức KHÔNG đổi (79 — khoản −11 khóa ở neo ba Kỳ V), mắt xích
// Nợ giữ identified, tàu trẻ em bị chặn nhưng mạng còn nguyên, hạt linh mễ
// đã gieo ở sân Phúc Thọ; mạch tới stub Kỳ III.
assert.equal(game.bridge.getSnapshot().campaignStats.memoryIntegrity, 79);
assert.equal(game.bridge.getSnapshot().flags.vnLinks.no, "identified");
assert.equal(game.bridge.getSnapshot().flags.vtShipHalted, true);
assert.equal(game.bridge.getSnapshot().flags.vtNetworkIntact, true);
assert.equal(game.bridge.getSnapshot().flags.vtRiceSeedPlanted, true);
// Kỳ III — Khai Tông (hệ 9 agent, 2026-11-07): ky3_01_stub đã là cảnh
// III01 chính thức (giữ id, thay nội dung), mạch 45 cảnh chạy liền tới
// cầu Kỳ IV (ky4_01_stub, sliceEnd giữ chỗ). Đi nhánh đầu tiên mọi cảnh.
assert.equal(game.bridge.getSnapshot().scene.choices.length, 2);
for (const expected of ["ky3_02_dai_tran_ha_o", "ky3_03_van_pham_thu_phap", "ky3_04_quyen_giu_khai_mach_an", "ky3_05_tam_the_thua", "ky3_06_tai_va_dao", "ky3_07_thao_chai_dinh_phong", "ky3_08_kinh_lau_khi_xuong", "ky3_09_gieo_vo_chu_tien_me", "ky3_10_dan_va_tuyen", "ky3_11_nhan_danh_duong", "ky3_12_luc_duong_luan_su", "ky3_13_noi_com_tu_nep", "ky3_14_be_sau_hoc_chu", "ky3_15_su_tri_nhuan", "ky3_16_chiec_bat_thu_hai", "ky3_17_dinh_chua_nha_tho", "ky3_18_phuc_tho_ba_dien", "ky3_19_chua_khong_thu_le", "ky3_20_luu_ba_loc", "ky3_21_thay_lang_mat_khach", "ky3_22_net_tran_cua_bong", "ky3_23_mot_nha_hai_duong", "ky3_24_viec_pham_nho", "ky3_25_phien_cho_linh_khi", "ky3_26_vu_gat_bac", "ky3_27_tinh_hon_thai_cho_lon", "ky3_28_luu_ngon_lam_chung", "ky3_29_chieu_cot_khe_no", "ky3_30_den_ve_luoi_trieu", "ky3_31_vo_tu_thien_binh", "ky3_32_tram_tuyen_mot_to_giay", "ky3_33_ngay_khong_thu_to_cu", "ky3_34_doc_quyen_tinh_hon_thai", "ky3_35_han_kiem_ho", "ky3_36_de_nghi_dai_ly", "ky3_37_mach_tuyen_ba_muoi_sau", "ky3_38_phi_dang_ky", "ky3_39_chap_chieu_phong", "ky3_40_gia_an_ma_to", "ky3_41_bay_luoc_hoi_luat", "ky3_42_tin_tu_tam_giang", "ky3_43_dai_su_ty_khong_luyen_khi", "ky3_44_quyen_khan_cap", "ky3_45_chen_ruou_truoc_bao", "ky4_01_stub"]) {
  game.bridge.applyScriptChoice(0);
  assert.equal(game.bridge.getSnapshot().scene.id, expected);
}
// Suốt Kỳ III ký ức VẪN 79 (toàn kỳ 0 memoryIntegrityDelta), Danh giữ
// intervened, Nợ giữ identified (toàn kỳ 0 trường link), đủ 45 cờ bằng
// chứng ky3* trên walk nhánh đầu tiên.
assert.equal(game.bridge.getSnapshot().campaignStats.memoryIntegrity, 79);
assert.equal(game.bridge.getSnapshot().flags.vnLinks.danh, "intervened");
assert.equal(game.bridge.getSnapshot().flags.vnLinks.no, "identified");
for (const flag of ["ky3NamesOnCleanPaper", "ky3GrandFormationUnveiled", "ky3MarksScattered", "ky3MarkCustodyContested", "ky3LibraryTiersCreated", "ky3AptitudeNotWorth", "ky3ThaoPeakShown", "ky3TwoHallsFounded", "ky3SpiritRicePlantedLH", "ky3FirstPublicSpring", "ky3NhanDanhFounded", "ky3CouncilFirstSession", "ky3KitchenCharmsGiven", "ky3BeSauSpokeFreely", "ky3AbbotVisited", "ky3LanSawHerStructure", "ky3ThreeFaithsTruce", "ky3PhucThoBranchOpened", "ky3RefusalHonored", "ky3ThirdRuleEnforced", "ky3HerbalistRecruited", "ky3ChildArrayImproved", "ky3FamilySplitNamed", "ky3LanTaughtNames", "ky3SpiritMarketOpened", "ky3FirstSpiritHarvest", "ky3ChoLonRouteNoted", "ky3SpeechBeadWitnessed", "ky3DeedErasureExposed", "ky3LampsAndTideNet", "ky3TrueScaleShown", "ky3SpringsSelfTended", "ky3OldTaxFailed", "ky3VetoFirstUsed", "ky3RosterRefused", "ky3DelmasAgencyBid", "ky3Spring36SharedRule", "ky3FalseFeeExposed", "ky3PermitOfficeRaised", "ky3FalseSealExposed", "ky3BayLuocAskedLaw", "ky3TamGiangSiteChosen", "ky3LanRefusedTitle", "ky3EmergencyPowersDenied", "ky3LanDeclaredHerPart"]) {
  assert.equal(game.bridge.getSnapshot().flags[flag], true, "thiếu cờ Kỳ III: " + flag);
}
// Bốn objective Vũng Tàu nghiệm thu bằng chứng cứ ngay trong Kỳ III
// (gắn trên choice rời III01/III11/III28/III42); recover_ledger_two vẫn
// treo tới IV35 nên chặng chưa lật — stageId vẫn vung_tau.
for (const objective of ["inspect_coffin_route", "identify_living_hosts", "trace_finance", "secure_sea_exit"]) {
  assert.equal(game.bridge.getSnapshot().progression.completedObjectiveIds.includes(objective), true, "thiếu objective: " + objective);
}
assert.equal(game.bridge.getSnapshot().progression.completedObjectiveIds.includes("recover_ledger_two"), false);
assert.equal(game.bridge.getSnapshot().progression.stageId, "vung_tau");
// Kỳ IV — Năm thế tranh hùng (hệ 9 agent, 2026-11-07): ky4_01_stub đã
// là cảnh IV01 chính thức (giữ id, thay nội dung), mạch 44 cảnh chạy
// liền tới cầu Kỳ V (ky5_01_stub, sliceEnd). Đi nhánh đầu tiên mọi
// cảnh; riêng IV35 bắt bản lưu tự động ngay khi tới nơi để kiểm riêng
// lựa chọn thứ hai trong khối tách biệt phía dưới.
assert.equal(game.bridge.getSnapshot().scene.choices.length, 2);
for (const expected of ["ky4_02_that_dao_van_mon", "ky4_03_khan_den_thao_le", "ky4_04_ba_to_thue", "ky4_05_duong_dat_cua_ba_chin", "ky4_06_hai_an_ly_kha", "ky4_07_mot_to_trat_hai_nha", "ky4_08_doan_dao_ra_gia", "ky4_09_muon_danh_ho_phap", "ky4_10_no_mang_ten_ruong", "ky4_11_pha_can_long_hai", "ky4_12_cuu_ghe_doat_me", "ky4_13_duc_giu_lan_ghe", "ky4_14_ba_nguoi_mot_cai_dau", "ky4_15_giay_bao_ho_cuop_song", "ky4_16_dan_gia_giet_nguoi", "ky4_17_no_tren_xac_chet", "ky4_18_ha_huu_tan_doi_nhan", "ky4_19_ba_hoe_cuu_ghe", "ky4_20_ban_lai_loi_song", "ky4_21_dam_tang_khong_phep_mau", "ky4_22_tien_den_truoc_ghe", "ky4_23_mot_chu_dich_thanh_toi", "ky4_24_niem_phong_tai_phong", "ky4_25_dao_mon_trai_phep", "ky4_26_ba_chin_lai_bi_bat", "ky4_27_ly_kha_mang_hai_so", "ky4_28_cho_long_hai_boc_lua", "ky4_29_cai_lam_tra_gia", "ky4_30_tro_tan_va_ten_nguoi", "ky4_31_mot_cai_hat_xi", "ky4_32_dem_dot_trat", "ky4_33_roi_gay_trong_lua", "ky4_34_ba_hoe_giu_so"]) {
  game.bridge.applyScriptChoice(0);
  assert.equal(game.bridge.getSnapshot().scene.id, expected);
}
game.bridge.applyScriptChoice(0);
assert.equal(game.bridge.getSnapshot().scene.id, "ky4_35_ben_khong_nguoi_chet");
const saveAtKy4IV35 = saves.get(AUTO_SAVE_KEY);
assert.ok(saveAtKy4IV35, "phải có bản lưu tự động tại IV35");
game.bridge.applyScriptChoice(0);
assert.equal(game.bridge.getSnapshot().scene.id, "ky4_36_ghe_vao_tam_giang");
// Vừa qua IV35 (nhánh đầu tiên): mắt xích Nợ đã CAN THIỆP (không bao
// giờ severed ở Kỳ IV) và chặng lật sang Cần Giờ ngay từ IV36. Việc
// lật chặng CHỈ xảy ra khi cả 5 objective Vũng Tàu đã đủ
// (applyProgressionUpdate: allDone mới advance + reset
// completedObjectiveIds về [] của chặng mới) — bốn objective đầu đã
// khẳng định ở cuối Kỳ III trong chính walk này, nên lật chặng tại
// đây là bằng chứng objective thứ năm (recover_ledger_two, gắn trên
// cả hai lựa chọn IV35) đã nghiệm thu: progression Vũng Tàu 5/5.
assert.equal(game.bridge.getSnapshot().flags.vnLinks.no, "intervened");
assert.equal(game.bridge.getSnapshot().progression.stageId, "can_gio");
for (const expected of ["ky4_37_ky_luong_bien_mat", "ky4_38_phien_cho_chan_rung", "ky4_39_ban_hoa_uoc_phuc_tho", "ky4_40_phe_tong_nguyen_phuc", "ky4_41_khong_ban_vao_ma_to", "ky4_42_hai_so_mot_ben_song", "ky4_43_dai_kiem_ho_ngay_63", "ky4_44_dem_gac_tam_giang", "ky5_01_stub"]) {
  game.bridge.applyScriptChoice(0);
  assert.equal(game.bridge.getSnapshot().scene.id, expected);
  // Chặng lật sang Cần Giờ ngay sau IV35 và giữ nguyên tới cầu Kỳ V.
  assert.equal(game.bridge.getSnapshot().progression.stageId, "can_gio");
}
// Suốt Kỳ IV ký ức VẪN 79 (toàn kỳ 0 memoryIntegrityDelta — khoản −11
// khóa ở neo ba Kỳ V), Danh giữ intervened, đủ 44 cờ bằng chứng ky4*
// trên walk nhánh đầu tiên; mạch dừng ở cầu Kỳ V.
assert.equal(game.bridge.getSnapshot().campaignStats.memoryIntegrity, 79);
assert.equal(game.bridge.getSnapshot().flags.vnLinks.danh, "intervened");
for (const flag of ["ky4CensusRefusedAtGate", "ky4BayLuocEnteredSect", "ky4BlackScarfDuesDropped", "ky4TripleTaxExposed", "ky4ChinLaiRouteBypassed", "ky4LyKhaTwoListsSeen", "ky4TwoMastersOneWrit", "ky4DoanDaoPricedProtection", "ky4FalseHoPhapExposed", "ky4FieldDebtNamed", "ky4MarketScaleLawBroken", "ky4NineBoatsHeldCourse", "ky4DucKeptLaneForPeople", "ky4TuongSoldOneHeadThrice", "ky4RiverProtectionPapersSeen", "ky4FalsePillDeathWitnessed", "ky4CoffinDebtConfronted", "ky4LabelsSwappedAtSource", "ky4BaHoeRefusedTheBoats", "ky4RefugeeRouteSold", "ky4FuneralWithoutMiracle", "ky4TollsBeforeTheBoats", "ky4OneWordMadeACrime", "ky4TaiPhongSealedLedgers", "ky4SectDeclaredUnlicensed", "ky4ChinLaiArrested", "ky4LyKhaBroughtTwoLedgers", "ky4MarketBurnedByHiredHand", "ky4CaiLamExecuted", "ky4AshesNamesCounted", "ky4SneezeWitnessed", "ky4NightOfBurningWrits", "ky4QuanHauKilledByUprising", "ky4BaHoeKeptTheLedger", "ky4LedgerTwoVerified", "ky4BranchAtTamGiangRaised", "ky4KyLuongVanished", "ky4ForestMarketOpened", "ky4PhucThoAllianceFormed", "ky4TongFactionDeclared", "ky4NoShotsAtTheMaTo", "ky4TwoLedgersOneWharf", "ky4DaySixtyThreeDeclared", "ky4NightWatchAtTamGiang"]) {
  assert.equal(game.bridge.getSnapshot().flags[flag], true, "thiếu cờ Kỳ IV: " + flag);
}
// Kỳ V — Tam Giang Huyết Chiến (hệ 9 agent, 2026-11-07): ky5_01_stub
// đã là cảnh V01 chính thức (giữ id, thay nội dung, bỏ sliceEnd), mạch
// 49 cảnh chạy liền tới V49 (sliceEnd, hết Arc I) — cộng cảnh trạm
// ky5_38a chèn giữa V38 và V39 (Issue #35 G3, 2026-11-08). Đi nhánh đầu tiên
// mọi cảnh. Vào V01 ký ức vẫn 79; khoản −11 khóa nằm ở sceneEffects
// của V42 (áp khi VÀO cảnh) — trước V42 ký ức nguyên 79, từ V42 là 68.
assert.equal(game.bridge.getSnapshot().scene.id, "ky5_01_stub");
assert.equal(game.bridge.getSnapshot().scene.choices.length, 2);
for (const expected of ["ky5_02_hai_nguoi_o_tram", "ky5_03_khong_trao_nguoi", "ky5_04_giay_doi_tin", "ky5_05_bai_dat_moi_dung", "ky5_06_ghe_cho_nguoi", "ky5_07_hen_cut_noi_khong", "ky5_08_ham_doi_biet_ten_han", "ky5_09_khep_mach_trung", "ky5_10_thuy_xa_tu_xu", "ky5_11_ham_doi_tat_hoa_luc", "ky5_12_khau_sung_dat_xuong", "ky5_13_cua_bien_khong_chu", "ky5_14_nhung_nguoi_con_cheo", "ky5_15_bun_giu_dau_chan", "ky5_16_duong_nuoc_qua_rung", "ky5_17_bien_ban_cho_nguoi", "ky5_18_hac_thuy_dai", "ky5_19_cat_diem_noi_thu_nhat", "ky5_20_nguoi_con_tinh", "ky5_21_giua_hai_tieng_keng", "ky5_22_ban_sao_o_sai_ban", "ky5_23_so_de_tu_mat_dau", "ky5_24_ban_giay_cua_phan_tuong", "ky5_25_hai_ban_danh_sach", "ky5_26_sau_ghe_mot_chuc_su", "ky5_27_phe_tong_bi_phe", "ky5_28_phe_khong_con_chu", "ky5_29_men_mo_so_tai", "ky5_30_gioi_phong_doi_nguoi", "ky5_31_bach_cot_ben", "ky5_32_nguoi_duoc_hoi", "ky5_33_cat_diem_noi_thu_hai", "ky5_34_men_doc_so_cua_song", "ky5_35_lien_minh_tu_can", "ky5_36_duong_toi_mau_trieu", "ky5_37_khong_phai_cho_chem", "ky5_38_thieu_than_truoc_den", "ky5_38a_tram_ngay_63", "ky5_39_bay_muoi_chin", "ky5_40_hai_con_duong_that", "ky5_41_khong_phai_van_co", "ky5_42_phan_thanh_lan_ba", "ky5_43_dan_im_mach_con", "ky5_44_vong_sang_tren_nuoc", "ky5_45_nguoi_di_nguoi_o", "ky5_46_can_rung_khong_ten", "ky5_47_sau_ghe_khong_chu", "ky5_48_nhung_nguoi_con_o", "ky5_49_chiec_ghe_da_va_vo_ruou"]) {
  game.bridge.applyScriptChoice(0);
  assert.equal(game.bridge.getSnapshot().scene.id, expected);
  // Chặng KHÔNG được lật khỏi Cần Giờ trong toàn Kỳ V: objective
  // survive_reality_breach bị hoãn có chủ ý (Mục C.3) để engine không
  // tự nhảy sang chặng kế và lộ điểm đến.
  assert.equal(game.bridge.getSnapshot().progression.stageId, "can_gio");
  if (expected === "ky5_37_khong_phai_cho_chem") {
    // Link Lệnh khai báo CẤP CẢNH tại V37 (áp khi vào cảnh).
    assert.equal(game.bridge.getSnapshot().flags.vnLinks.lenh, "identified");
    assert.equal(game.bridge.getSnapshot().campaignStats.memoryIntegrity, 79);
  }
  if (expected === "ky5_38a_tram_ngay_63") {
    // Cảnh trạm: Cao Minh vắng mặt hẳn khỏi Snapshot (showProtagonist
    // false truyền qua presentScene), ký ức vẫn nguyên 79 ở ngày 63.
    assert.equal(game.bridge.getSnapshot().scene.showProtagonist, false);
    assert.equal(game.bridge.getSnapshot().campaignStats.memoryIntegrity, 79);
  }
  if (expected === "ky5_39_bay_muoi_chin") {
    // Rời cảnh trạm bằng lựa chọn duy nhất: cờ đình chỉ giấy đi tuyến
    // đã đặt, và nhân vật chính hiện lại ở cảnh sau.
    assert.equal(game.bridge.getSnapshot().flags.ky5RiverPassSuspended, true);
    assert.equal(game.bridge.getSnapshot().scene.showProtagonist, true);
  }
  if (expected === "ky5_41_khong_phai_van_co") {
    assert.equal(game.bridge.getSnapshot().campaignStats.memoryIntegrity, 79);
  }
  if (expected === "ky5_42_phan_thanh_lan_ba") {
    // Đúng một lần −11 tại neo ba + Lệnh lên intervened (cấp cảnh V42).
    assert.equal(game.bridge.getSnapshot().campaignStats.memoryIntegrity, 68);
    assert.equal(game.bridge.getSnapshot().flags.vnLinks.lenh, "intervened");
  }
}
// Hết Kỳ V: ký ức 68 (sổ 100→92→84→79→68 khóa cứng), Lệnh intervened
// (không bao giờ severed trong Arc I), Danh/Nợ giữ intervened, đủ sáu
// objective Cần Giờ nghiệm thu đúng một lần trên các choice rời cảnh,
// survive_reality_breach KHÔNG được cấp, chặng vẫn can_gio 6/7.
assert.equal(game.bridge.getSnapshot().campaignStats.memoryIntegrity, 68);
assert.equal(game.bridge.getSnapshot().flags.vnLinks.lenh, "intervened");
assert.equal(game.bridge.getSnapshot().flags.vnLinks.danh, "intervened");
assert.equal(game.bridge.getSnapshot().flags.vnLinks.no, "intervened");
for (const objective of ["secure_transport", "investigate_smuggling_route", "destroy_anchor_one", "destroy_anchor_two", "destroy_anchor_three", "resist_collective_command"]) {
  assert.equal(game.bridge.getSnapshot().progression.completedObjectiveIds.includes(objective), true, "thiếu objective Kỳ V: " + objective);
}
assert.equal(game.bridge.getSnapshot().progression.completedObjectiveIds.includes("survive_reality_breach"), false);
assert.equal(game.bridge.getSnapshot().progression.completedObjectiveIds.length, 6);
assert.equal(game.bridge.getSnapshot().progression.stageId, "can_gio");
for (const flag of ["ky5RowersHeldAtStation", "ky5NoHandoverDeclared", "ky5HencutKilled", "ky5NetworkContained", "ky5MuoiRoKilled", "ky5FleetFirepowerDisabled", "ky5RowersReleased", "ky5AnchorOneDisabled", "ky5TongDeposed", "ky5AnchorTwoDisabled", "ky5FinancialEvidencePublished", "ky5CounterResonanceChosen", "ky5AnchorThreeDisabled", "ky5SpaceRingAppeared", "ky5RouteBaoHo", "ky5TwoTravellersDeparted", "ky5ArcOneEnded"]) {
  assert.equal(game.bridge.getSnapshot().flags[flag], true, "thiếu cờ Kỳ V: " + flag);
}
assert.equal(game.bridge.getSnapshot().scene.choices.length, 0);
assert.equal(game.bridge.applyScriptChoice(0), false);
// IV35, lựa chọn thứ hai: nạp lại bản lưu tự động bắt tại IV35 trong
// một môi trường tách biệt (không đụng các ô lưu của mạch chính) —
// kết quả phải y hệt nhánh đầu tiên: Nợ intervened, recover_ledger_two
// nghiệm thu, chặng đã lật Cần Giờ, ký ức vẫn 79.
{
  const alt = launch(new Map([[AUTO_SAVE_KEY, saveAtKy4IV35]]));
  assert.equal(alt.bridge.getSnapshot().scene.id, "ky4_35_ben_khong_nguoi_chet");
  assert.equal(alt.bridge.applyScriptChoice(1), true);
  assert.equal(alt.bridge.getSnapshot().scene.id, "ky4_36_ghe_vao_tam_giang");
  assert.equal(alt.bridge.getSnapshot().flags.vnLinks.no, "intervened");
  // Lật chặng ở nhánh này cũng là bằng chứng recover_ledger_two đã
  // nghiệm thu trên lựa chọn thứ hai (xem ghi chú ở walk chính).
  assert.equal(alt.bridge.getSnapshot().progression.stageId, "can_gio");
  assert.equal(alt.bridge.getSnapshot().campaignStats.memoryIntegrity, 79);
}
// Khôi phục khi khởi động chọn bản MỚI NHẤT theo savedAt (phản biện ChatGPT
// vòng 1): bản thủ công cũ (lh_gate, t=1000) thua bản tự động mới (lh_saloon, t=2000).
const olderManual = JSON.parse(saved);
olderManual.scene.id = "lh_gate";
olderManual.savedAt = 1000;
const newerAuto = JSON.parse(saved);
newerAuto.scene.id = "lh_saloon";
newerAuto.savedAt = 2000;
saves.set(MANUAL_SAVE_KEY, JSON.stringify(olderManual));
saves.set(AUTO_SAVE_KEY, JSON.stringify(newerAuto));
game = launch(saves);
assert.equal(game.bridge.getSnapshot().scene.id, "lh_saloon");
// Đợt 1 (kết luận tranh luận 2026-11-06): ô lưu riêng + xuất/nhập file.
// Lưu ô 2 tại lh_saloon, đi tiếp một cảnh, tải ô 2 phải quay lại lh_saloon.
assert.equal(game.bridge.saveToSlot(2), true);
assert.equal(game.bridge.listSaveSlots()[1].sceneId, "lh_saloon");
assert.equal(game.bridge.applyScriptChoice(0), true);
assert.notEqual(game.bridge.getSnapshot().scene.id, "lh_saloon");
assert.equal(game.bridge.loadFromSlot(2), true);
assert.equal(game.bridge.getSnapshot().scene.id, "lh_saloon");
assert.equal(game.bridge.loadFromSlot(3), false);
// Ghi lại ô 2 sau khi tải để nó thành bản mới nhất trong gói xuất (bản tự
// động trong gói đang ở cảnh kế tiếp với dấu thời gian sớm hơn).
assert.equal(game.bridge.saveToSlot(2), true);
// Xuất gói bản lưu rồi nhập vào một môi trường trắng: khởi động tiếp tục
// được đúng tiến độ mới nhất trong gói.
const bundle = game.bridge.exportSaves();
assert.equal(JSON.parse(bundle).format, "hua-family-saves");
assert.equal(JSON.parse(bundle).slots[1].scene.id, "lh_saloon");
const freshSaves = new Map();
game = launch(freshSaves);
assert.equal(game.bridge.importSaves(bundle), true);
assert.equal(game.bridge.getSnapshot().scene.id, "lh_saloon");
// Đợt 3: backlog nguyên văn + điểm lựa chọn. Gói nhập mang runId của lượt
// chơi gốc nên backlog của lượt tạm ở prologue bị thay bằng lượt được nhập
// (backlog gắn với runId — chiến dịch mới không bao giờ thấy lịch sử cũ).
const backlogNow = game.bridge.getBacklog();
assert.deepEqual(backlogNow.map((entry) => entry.sceneId), ["lh_saloon"]);
assert.ok(backlogNow[0].narration.length > 0);
assert.equal(game.bridge.applyScriptChoice(0), true);
const backlogAfter = game.bridge.getBacklog();
assert.equal(backlogAfter[0].sceneId, "lh_saloon");
assert.ok(backlogAfter[0].choiceLabel.length > 0);
assert.equal(backlogAfter.at(-1).sceneId, "lh_rules");
// Điểm lựa chọn = cảnh quyết định gần nhất: từ lh_rules đi tiếp tới
// lh_hall (cũng 2 lựa chọn) thì điểm lựa chọn cập nhật thành lh_hall, và
// tải điểm lựa chọn đứng yên tại cảnh quyết định hiện tại.
assert.equal(game.bridge.applyScriptChoice(0), true);
assert.equal(game.bridge.getSnapshot().scene.id, "lh_hall");
assert.equal(game.bridge.loadChoiceCheckpoint(), true);
assert.equal(game.bridge.getSnapshot().scene.id, "lh_hall");
assert.equal(game.bridge.importSaves("{not-json"), false);
assert.equal(game.bridge.importSaves(JSON.stringify({ format: "other" })), false);
const old = structuredClone(INITIAL_STATE);
old.version = "campaign-v3";
old.scene.id = "origin";
saves.set(MANUAL_SAVE_KEY, JSON.stringify(old));
saves.delete(AUTO_SAVE_KEY);
// Cô lập kịch bản canon cũ: các ô lưu phụ từ khối đợt 1 phía trên không
// được rò sang (boot giờ quét cả ba ô).
saves.delete("hua-family-campaign-v4-manual-2");
saves.delete("hua-family-campaign-v4-manual-3");
game = launch(saves);
game.bridge.loadGame();
assert.equal(game.bridge.getSnapshot().scene.id,VN_START_SCENE);
const malformed = new Map([[AUTO_SAVE_KEY, "{not-json}"]]);
game = launch(malformed);
game.bridge.loadGame();
assert.equal(game.bridge.getSnapshot().scene.id, VN_START_SCENE);
for (const card of Object.values(VN_SCENES)) {
  for (const choice of card.choices || []) {
    if (!choice.retry) assert.ok(VN_SCENES[choice.next], "Broken scene link: " + choice.next);
  }
}

// ===== Đợt sửa lỗi toàn diện 2026-11-06: khóa hồi quy theo Mục VIII của
// lệnh triển khai (hash prologue, mật độ mọi đường tới được, vắng choice xe
// tang, overlay theo giới, hai nhánh Thu Nguyệt/đường bộ, effect một lần).
import { createHash } from "node:crypto";
import { resolveCompanionId } from "../src/character-overlays.js";
const prologueHash = createHash("sha256")
  .update(JSON.stringify(VN_SCENES.lh_prologue)).digest("hex");
assert.equal(prologueHash, "b65b94742f93950cea8f8babdad5830eb26b6688d96cc457221bc94ed1b226ac",
  "lh_prologue đã bị thay đổi — cảnh này khóa tuyệt đối (chủ nhân mở khóa 2026-11-06 để rà soát theo canon tính cách mới, khóa lại tại hash này)");
// Mật độ: đếm theo đúng công thức của lệnh (narration + dialogue, tách
// khoảng trắng) trên MỌI tổ hợp flags tới được của từng cảnh.
const EXCLUSIVE = [["thuNguyetEscorted","thuNguyetSolo"],["councilOath","councilQuiet"],
  ["boatPromised","boatBought"],["thuNguyetFollows","thuNguyetStays"],
  ["vtHeardInspection","vtRestedEvening"],
  // Kỳ V (2026-11-07): ba cờ route của V45 loại trừ lẫn nhau từng đôi.
  ["ky5RouteBaoHo","ky5RouteTuQuyet"],["ky5RouteBaoHo","ky5RouteNghiLe"],
  ["ky5RouteTuQuyet","ky5RouteNghiLe"]];
function renderedWords(scene, flags) {
  let n = 0;
  const vis = (x) => (!x.if || flags.has(x.if)) && (!x.unless || !flags.has(x.unless));
  for (const item of scene.narration) {
    if (typeof item === "string") n += item.split(/\s+/).filter(Boolean).length;
    else if (vis(item)) n += item.text.split(/\s+/).filter(Boolean).length;
  }
  for (const line of scene.dialogue) if (vis(line)) n += line.text.split(/\s+/).filter(Boolean).length;
  return n;
}
for (const [sid, scene] of Object.entries(VN_SCENES)) {
  const keys = new Set();
  // Thu CẢ if và unless của mỗi item (bản cũ `item.if || item.unless` bỏ
  // mất một cờ khi item mang cả hai — bug nền G1, khóa 2026-11-08).
  for (const item of scene.narration) if (typeof item === "object") {
    if (item.if) keys.add(item.if);
    if (item.unless) keys.add(item.unless);
  }
  for (const line of scene.dialogue) {
    if (line.if) keys.add(line.if);
    if (line.unless) keys.add(line.unless);
  }
  keys.delete(undefined);
  const [lo, hi] = scene.debrief ? [100, 150] : scene.deadEnd ? [700, 900] : [1200, 1400];
  const list = [...keys];
  for (let mask = 0; mask < (1 << list.length); mask++) {
    const flags = new Set(list.filter((_, i) => mask & (1 << i)));
    if (EXCLUSIVE.some(([a, b]) => flags.has(a) && flags.has(b))) continue;
    const w = renderedWords(scene, flags);
    assert.ok(w >= lo && w <= hi, `${sid}: ${w} từ ngoài dải ${lo}–${hi} (flags: ${[...flags]})`);
  }
}
// P0-12: choice xe tang đã xóa; choice thay thế đặt đúng flag.
for (const scene of Object.values(VN_SCENES))
  for (const choice of scene.choices || [])
    assert.notEqual(choice.id, "use_their_carriage");
const delayChoice = VN_SCENES.lh_move_tonight.choices.find((c) => c.id === "delay_the_carriage");
assert.ok(delayChoice && delayChoice.flags && delayChoice.flags.carriageDelayed === true);
// G1 (chương trình Issue #35): cổng nextIf + cảnh Phòng Đối Sổ (debrief).
// Kiểm bằng cảnh tổng hợp vì nội dung thật chưa dùng cổng nào — engine gọi
// đúng resolveChoiceTarget đã kiểm ở đây.
{
  const mini = (id, extra = {}) => ({
    id, title: id, contentStatus: "approved", backgroundId: "bg",
    narration: ["x"], dialogue: [], choices: [], ...extra
  });
  const deadScene = mini("dead", {
    deadEnd: true,
    choices: [{ id: "retry", text: "Thử lại", retry: true }]
  });
  const gateMap = (gate) => ({
    a: mini("a", { choices: [{ id: "go", text: "Đi", next: "b", nextIf: gate }] }),
    b: mini("b"),
    dead: deadScene
  });
  assert.deepEqual(validateVnScenes(gateMap({ next: "dead", all: ["f1"] }), "a"), [],
    "cổng nextIf hợp lệ phải qua được xác thực");
  assert.ok(validateVnScenes(gateMap({ next: "b", all: ["f1"] }), "a")
    .some((e) => e.includes("nextIf")), "đích cổng không phải dead end phải bị chặn");
  assert.ok(validateVnScenes(gateMap({ next: "dead", all: ["1", "2", "3", "4", "5"] }), "a")
    .some((e) => e.includes("nextIf")), "cổng quá 4 cờ phải bị chặn");
  assert.ok(validateVnScenes(gateMap({ next: "dead", none: ["f1"] }), "a")
    .some((e) => e.includes("nextIf")), "cổng không có dấu hiệu dương phải bị chặn");
  assert.ok(validateVnScenes(gateMap({ next: "missing", all: ["f1"] }), "a")
    .some((e) => e.includes("nextIf")), "đích cổng không tồn tại phải bị chặn");

  const gated = { next: "b", flags: {}, nextIf: { next: "dead", all: ["f1"] } };
  assert.equal(resolveChoiceTarget(gated, {}), "b", "thiếu cờ: đi nhánh thường");
  assert.equal(resolveChoiceTarget(gated, { f1: true }), "dead", "đủ cờ all: qua cổng");
  assert.equal(resolveChoiceTarget({ ...gated, flags: { f1: true } }, {}), "dead",
    "preview phải tính cả cờ chính lựa chọn đặt");
  assert.equal(resolveChoiceTarget(
    { next: "b", nextIf: { next: "dead", atLeast: ["x", "y"] } }, { y: true }), "dead",
    "atLeast trúng một cờ là qua");
  assert.equal(resolveChoiceTarget(
    { next: "b", nextIf: { next: "dead", all: ["x"], none: ["z"] } }, { x: true, z: true }), "b",
    "none chạm cờ cấm thì không qua");
  assert.equal(resolveChoiceTarget({ next: "b" }, { f1: true }), "b", "không cổng: giữ next");

  const debriefOk = {
    a: mini("a", { choices: [{ id: "go", text: "Đi", next: "d" }] }),
    d: mini("d", { debrief: true, choices: [{ id: "r", text: "Quay lại", retry: true }] })
  };
  assert.deepEqual(validateVnScenes(debriefOk, "a"), [],
    "cảnh debrief đúng dạng (một lựa chọn retry) phải hợp lệ");
  const debriefBad = {
    a: debriefOk.a,
    d: mini("d", { debrief: true, sceneEffects: { lanHealthDelta: 1 },
      choices: [{ id: "r", text: "Quay lại", retry: true }] })
  };
  assert.ok(validateVnScenes(debriefBad, "a").some((e) => e.includes("debrief")),
    "debrief mang sceneEffects (có tiến trình) phải bị chặn");
}
// G01–G06: companion resolve đúng giới/vai trên sân khấu.
assert.equal(resolveCompanionId(VN_SCENES.lh_saloon), "steward");
assert.equal(resolveCompanionId(VN_SCENES.lh_rules), "steward");
assert.equal(resolveCompanionId(VN_SCENES.lh_certification), "pham_dinh_nghiem");
assert.equal(resolveCompanionId({ companions: [], dialogue: [{ speaker: "Người gác", text: "x" }] }), "npc_servant_male");
assert.equal(resolveCompanionId({ companions: [], dialogue: [{ speaker: "Quản gia", text: "x" }] }), "steward");
// Đi bộ các nhánh: dùng lại mạch chính, ghi đè lựa chọn tại điểm rẽ.
const MAIN_CHAIN = ["lh_gate","lh_saloon","lh_rules","lh_hall","lh_lan_room","lh_lan_talk","lh_morning_tea","lh_garden","lh_i04_gate_silence","lh_night_bell","lh_night_corridor","lh_doctor_visit","lh_medicine_store","lh_servants","lh_register_room","lh_i03_names_for_sale","lh_kitchen","lh_lan_knots","lh_old_servant","lh_well_anchor","lh_lan_sleepwalk","lh_altar","lh_thu_nguyet_errand","lh_market","lh_i05_three_deeds","lh_i02_black_scarves","lh_letter","lh_council","lh_lan_question","lh_anchor_bell","lh_scout_coast","lh_inspector_notice","lh_eve_inspection","lh_accident_beam","lh_poison_tea","lh_corridor_fight","lh_aftermath","lh_lan_pushback_big"];
function walk(overrides, tail) {
  const g = launch(new Map());
  assert.equal(g.bridge.getSnapshot().scene.id, "lh_prologue");
  for (const expected of [...MAIN_CHAIN, ...tail]) {
    const current = g.bridge.getSnapshot().scene.id;
    g.bridge.applyScriptChoice(overrides[current] ?? 0);
    assert.equal(g.bridge.getSnapshot().scene.id, expected);
  }
  return g;
}
// Nhánh nghỉ trước: cảnh mới lh_retelling_rest, ký ức −8 đúng một lần kể cả
// sau save/load tại cảnh đó.
{
  const g = walk({ lh_lan_pushback_big: 1 }, ["lh_retelling_rest"]);
  assert.equal(g.bridge.getSnapshot().campaignStats.memoryIntegrity, 92);
  g.bridge.saveGame();
  g.bridge.loadGame();
  assert.equal(g.bridge.getSnapshot().scene.id, "lh_retelling_rest");
  assert.equal(g.bridge.getSnapshot().campaignStats.memoryIntegrity, 92);
}
// Nhánh Thu Nguyệt ở lại: thuyền ba người. Nhánh đi theo: bốn người.
// Nhánh đường bộ: đoạn xe cỏ xuất hiện ở lh_last_pushback.
const TAIL_DEFAULT = ["lh_retelling","lh_kitchen_fire","lh_hearth_anchor","lh_storm","lh_night_attack","lh_blade_wound","lh_ba_confession","lh_lan_plan","lh_inspector_early","lh_ambush_well","lh_hide_lan","lh_first_sweep","lh_audit_table","lh_nghiem","lh_certification","lh_lan_faces","lh_move_tonight","lh_so_retrieval","lh_ngoc_chi_keepsake","lh_nghiem_offer","lh_refusal","lh_lockdown","lh_servants_choose","lh_anchor_map","lh_lan_farewell","lh_ba_stays","lh_thu_nguyet_choice","lh_escape_eve","lh_escape_begins","lh_gate_fight","lh_gate_hold","lh_coast_road","lh_i06_roadside_writ","lh_road_choice","lh_last_pushback","lh_names_price","lh_open_road","lh_dawn_after","lh_names_restored","lh_i01_false_weights","lh_slice_end"];
{
  // Đi bộ tới lh_names_restored với lựa chọn Thu Nguyệt ghi đè tại điểm rẽ.
  function walkToRestored(thuNguyetChoice) {
    const g = launch(new Map());
    assert.equal(g.bridge.getSnapshot().scene.id, "lh_prologue");
    const chain = [...MAIN_CHAIN, ...TAIL_DEFAULT.slice(0, TAIL_DEFAULT.indexOf("lh_names_restored") + 1)];
    for (const expected of chain) {
      const current = g.bridge.getSnapshot().scene.id;
      g.bridge.applyScriptChoice((current === "lh_thu_nguyet_choice") ? thuNguyetChoice : 0);
      assert.equal(g.bridge.getSnapshot().scene.id, expected);
    }
    return g.bridge.getSnapshot().scene.narration.join(" ");
  }
  assert.ok(walkToRestored(1).includes("ba người trên thuyền"), "nhánh ở lại phải kể thuyền ba người");
  assert.ok(walkToRestored(0).includes("bốn người"), "nhánh đi theo phải kể thuyền bốn người");
  const cart = launch(new Map());
  const chainCart = [...MAIN_CHAIN, ...TAIL_DEFAULT.slice(0, TAIL_DEFAULT.indexOf("lh_last_pushback") + 1)];
  for (const expected of chainCart) {
    const current = cart.bridge.getSnapshot().scene.id;
    cart.bridge.applyScriptChoice((current === "lh_road_choice") ? 1 : 0);
    assert.equal(cart.bridge.getSnapshot().scene.id, expected);
  }
  assert.ok(cart.bridge.getSnapshot().scene.narration.join(" ").includes("hết an toàn"),
    "nhánh đường bộ phải có đoạn chuyển tuyến xe cỏ");
}
console.log("VN scene contract and session passed: deterministic scenes, five Long Hai objectives, dead-end rollback, versioned save, AI disabled.");
