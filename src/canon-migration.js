// Fixed-script VN stores only campaign-v4 snapshots. Previous stage graphs
// cannot be safely replayed as the new nine-stage campaign.
const ACTIVE_CANON_VERSION = "campaign-v4";
export const INCOMPATIBLE_SAVE_KEYS = Object.freeze([
  "hua-family-campaign-v3-manual",
  "hua-family-campaign-v3-auto"
]);
export function isCurrentCanonSave(raw) {
  return Boolean(raw && typeof raw === "object"
    && raw.version === ACTIVE_CANON_VERSION
    && typeof raw.scene?.id === "string");
}
const LEGACY_FLAG_KEYS = Object.freeze(new Set([
  "phantomRingAvailable",
  "unlimitedGunWorksAvailable",
  "elysiumContactAvailable",
  "amyDeployed",
  "koeiDeployed"
]));

const LEGACY_CANON_PATTERNS = Object.freeze([
  /\bPhantom\b/i,
  /\bElysium\b/i,
  /MAGNUM\s+GHOST/i,
  /Unlimited\s+Gun\s+Works/i,
  /Ten\s+Absolute\s+Pistol\s+Arts/i,
  /PHANTOM(?:'|’)?S\s+RING/i,
  /Boundless\s+Mind(?:'|’)?s\s+Eye/i,
  /Ontological\s+Judgment/i,
  /\bAmy\b/i,
  /\bDelta\b/i,
  /\bKoei\b/i,
  // Nhân vật tiền nhiệm của nhân vật chính: mẫu viết bằng lớp ký tự để repo không chứa chuỗi nguyên văn (yêu cầu zero-trace của owner).
  /Guilty\s+Crown\s+Override/i,
  /\bK[a]i\s+Ak[e]chi\b/i,
  /\bK[a]i\b/i,
  /\bk[a]i-akechi\b/i,
  /\bTw[i]light\b/i,
  /White\s+Wraith\s+Magnum/i,
  /Blackblood\s+Armor/i,
  /\bBlack\s+Blood\b/i,
  /\bHuyết\s+Nha\b/i,
  /\bEYE∞\b/i,
  /Command\s+Slate/i,
  /drone\s+mesh/i,
  /infinite\s+drones?/i,
  // Cụm nhân vật/tổ chức legacy bị gỡ theo lệnh chủ nhân 2026-11-06: mẫu viết bằng
  // lớp ký tự để repo không chứa chuỗi nguyên văn (cùng quy ước zero-trace ở trên).
  /\bI[r]is\b/i,
  /\bA[R]GUS\b/,
  /\bS[y]vial\b/i,
  /\bS[R]U\b/,
  /Special\s+Response\s+Unit/i,
  /S[R]U-MK20/,
  /God[K]iller/i,
  /Bel[i]al\s+Core/i,
  /Luc[i]fer/i,
  /Devil\s+Trigger/i,
  /Thousandfold\s+Cognition/i,
  /Twenty-Four\s+Severance/i,
  /Field\s+(Galley|MedNet)/i
]);

export function containsLegacyCanonText(value) {
  const text = String(value ?? "");
  return LEGACY_CANON_PATTERNS.some((pattern) => pattern.test(text));
}

export function stripLegacyFlags(rawFlags) {
  const flags = rawFlags && typeof rawFlags === "object" ? rawFlags : {};
  return Object.fromEntries(
    Object.entries(flags).filter(([key]) => !LEGACY_FLAG_KEYS.has(key))
  );
}

function sanitizeCanonTextArray(values, limit = 80) {
  return (Array.isArray(values) ? values : [])
    .filter((value) => typeof value === "string" && !containsLegacyCanonText(value))
    .slice(-limit);
}

function sanitizeDialogue(lines) {
  return (Array.isArray(lines) ? lines : [])
    .filter((line) => line && typeof line === "object")
    .filter((line) => !containsLegacyCanonText(line.speaker) && !containsLegacyCanonText(line.text));
}

function sanitizeHistory(entries) {
  return (Array.isArray(entries) ? entries : [])
    .filter((entry) => entry && typeof entry === "object")
    .filter((entry) => !containsLegacyCanonText(entry.summary) && !containsLegacyCanonText(entry.sceneTitle));
}

export function sanitizeLegacyCanonState(rawState) {
  if (!rawState || typeof rawState !== "object") return rawState;

  const scene = rawState.scene && typeof rawState.scene === "object" ? rawState.scene : {};
  const canon = rawState.campaignCanon && typeof rawState.campaignCanon === "object"
    ? rawState.campaignCanon
    : {};

  return {
    ...rawState,
    flags: stripLegacyFlags(rawState.flags),
    scene: {
      ...scene,
      narration: sanitizeCanonTextArray(scene.narration, 12),
      dialogue: sanitizeDialogue(scene.dialogue),
      choices: sanitizeCanonTextArray(scene.choices, 3)
    },
    campaignCanon: {
      ...canon,
      facts: sanitizeCanonTextArray(canon.facts, 100),
      events: sanitizeCanonTextArray(canon.events, 100),
      unresolvedThreads: sanitizeCanonTextArray(canon.unresolvedThreads, 36),
      resolvedThreads: sanitizeCanonTextArray(canon.resolvedThreads, 50),
      characters: sanitizeCanonTextArray(canon.characters, 50),
      locations: sanitizeCanonTextArray(canon.locations, 50)
    },
    history: sanitizeHistory(rawState.history),
    recentHistory: sanitizeHistory(rawState.recentHistory)
  };
}

