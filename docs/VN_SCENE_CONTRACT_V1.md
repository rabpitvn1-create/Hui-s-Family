# LIBERA-1899 | VN Scene Contract V1

**Ownership:** GPT owns schema, validation, player, state, persistence and tests. Muse owns every prose passage, dialogue, choice wording, title with literary meaning, and narrative canon language. Existing `src/vn-scenes.js` contains only labeled TECHNICAL PLACEHOLDERS. Muse replaces the strings, not the engine contract.

## Scene object (JavaScript ES module, UTF-8)

```js
{
  id: "lh_001",                     // stable, unique, never recycle in released saves
  contentStatus: "approved",        // placeholder | approved
  stageId: "long_hai",              // one of CAMPAIGN_STAGE_IDS
  title: "Tiêu đề do Muse viết",
  backgroundId: "long-hai-exterior", // existing asset ID, never direct image URL
  location: "Biệt thự Hứa Gia, Long Hải",
  narration: ["Đoạn dẫn thứ nhất.", "Đoạn dẫn thứ hai."],
  dialogue: [
    { speaker: "Hứa Tiểu Lan", text: "Câu thoại thứ nhất." },
    { speaker: "Cao Minh", text: "Bổn tọa..." }
  ],
  objective: "locate_tieu_lan",     // optional, must exist in current stage
  link: {id:"danh", phase:"identified"}, // optional milestone on entering scene
  route: "tu_quyet",                // optional route ownership/metadata only
  deadEnd: false,                   // optional true for terminal death/failure
  sliceEnd: false,                  // optional true for unfinished content boundary
  choices: [
    {
      id: "listen",                 // stable within scene
      text: "Nhãn lựa chọn do Muse viết",
      next: "lh_002",              // authored scene ID; cannot be missing
      effects: {lanTrustDelta:4, memoryIntegrityDelta:-3},
      flags: {lanDepartureConsent:true},
      route: {id:"tu_quyet",delta:1}, // scoring metadata
      link: {id:"danh",phase:"intervened"}, // optional milestone
      objective: "locate_tieu_lan"  // optional objective awarded by choice
    }
  ]
}
```

**Dead end:** `deadEnd:true` with `choices:[{id:"retry",text:"Quay lại",retry:true}]`. Engine snapshots the full state *before entering* a dead end and restores it on retry. No flag or score from the failed branch may survive.

**Terminal slice:** `sliceEnd:true, choices:[]`. No AI fallback, no unapproved next stage.

**Link names:** `danh`, `no`, `lenh`, `ky`, `than`, `tu`. Phases ordered: `unknown` → `identified` → `intervened` → `severed`. The engine only advances phases; no accidental regression. This is a mechanical progress representation, not a claim that any link has been removed in fiction.

**Route scoring:** `bao_ho`, `tu_quyet`, `nghi_le`. `delta` is an integer from -3 through +3. Choice scores accumulate under `flags.vnRouteScores`, independent from `campaignStats`. Route lock and ending resolution belong to a later content/decision table; no inference from prose.

**Effects:** Exactly the existing game.js campaign clamps. Each choice may use only known delta keys; unknown and out-of-range values fail validation. Current allowed deltas: `lanHealthDelta [-12,+8]`; `lanTrustDelta [-10,+12]`; `lanMaterInfluenceDelta [-8,+12]`; `memoryIntegrityDelta [-15,+5]`; `cluesHuaGiaDelta [0,+3]`; `civiliansSavedDelta [0,+5]`; `partyHealthDelta [-15,+8]`; `suppliesDelta [-3,+2]`; `ammunitionDelta [-20,+10]`; `falseMemoryCountDelta [-1,+2]`.

**Scene output:** Renderer uses `title`, `backgroundId`, `narration`, `dialogue`, `choices`. The snapshot exists in repo assets. Choice effects, objective and flags are applied by code, never by parsing narrative.

## Integration rules

1. Muse supplies approved scene cards, prose and exact canon wording. GPT integrates without rewriting authored text.
2. Keep existing scene IDs for saved campaigns. Add new IDs instead of renaming used IDs.
3. Only use existing snapshot IDs (currently `long-hai-exterior`, `long-hai-corridor`, `tieu-lan-room`) until new approved assets arrive.
4. Every authored choice targets an existing scene or is an explicit retry; no dangling branch.
5. Preserve Codex R02 and locked L1-L5; the separate `docs/VN_CANON_LOCKS_V1.md` records prior narrative source, to be superseded only by Muse-approved text.
6. Run `npm run check` and test the complete Long Hải path, both dead ends and save/load before accepting content.

**Important:** the previous Long Hải literary draft was removed from runtime in the scope correction. The current demo verifies architecture only; it is not the official Long Hải story.
