import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";

const html = readFileSync("index.html", "utf8");
const gradle = readFileSync("android/app/build.gradle.kts", "utf8");

const requiredIds = [
  "start-screen", "start-game-button", "game-shell",
  "scene-kicker", "scene-progress", "scene-title", "story-text", "choices",
  "lan-health-meter", "lan-health-value", "lan-mater-meter", "lan-mater-value",
  "lan-trust-meter", "lan-trust-value", "memory-meter", "memory-value",
  "route-value", "route-tendency-value",
  "campaign-stage-value",
  "objective-progress-value", "backrooms-floor-value",
  "clues-value", "log-list",
  "threads-list", "save-button", "load-button",
  "restart-button",
  "intel-panel", "intel-toggle"
];

const idMatches = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
const duplicates = idMatches.filter((id, index) => idMatches.indexOf(id) !== index);
if (duplicates.length) {
  throw new Error(`ID bị trùng trong index.html: ${[...new Set(duplicates)].join(", ")}`);
}

const missingIds = requiredIds.filter((id) => !idMatches.includes(id));
if (missingIds.length) {
  throw new Error(`UI thiếu ID bắt buộc: ${missingIds.join(", ")}`);
}

const stylesheetPaths = [...html.matchAll(/<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"/g)]
  .map((match) => match[1].split(/[?#]/, 1)[0]);
const missingStyles = stylesheetPaths.filter((path) => !existsSync(path));
if (missingStyles.length) {
  throw new Error(`Không tìm thấy stylesheet: ${missingStyles.join(", ")}`);
}

// Decorative frames and bundled fonts must also work in the offline APK.
// Checking just the <img> tags misses every CSS background introduced by a skin.
const stylesheetAssets = stylesheetPaths.flatMap((sheet) =>
  [...readFileSync(sheet, "utf8").matchAll(/url\(([^)]+)\)/g)]
    .map((match) => match[1].trim().replace(/^["']|["']$/g, ""))
    .filter((path) => !/^(?:data:|https?:|#)/i.test(path))
    .map((path) => join(dirname(sheet), path.split(/[?#]/, 1)[0]))
);
const missingStylesheetAssets = stylesheetAssets.filter((path) => !existsSync(path));
if (missingStylesheetAssets.length) {
  throw new Error(`Không tìm thấy asset CSS: ${[...new Set(missingStylesheetAssets)].join(", ")}`);
}

const scriptPaths = [...html.matchAll(/<script[^>]+src="([^"]+)"/g)]
  .map((match) => match[1].split(/[?#]/, 1)[0]);
const missingScripts = scriptPaths.filter((path) => !existsSync(path));
if (missingScripts.length) {
  throw new Error(`Không tìm thấy script giao diện: ${missingScripts.join(", ")}`);
}

const localImages = [...html.matchAll(/<img[^>]+src="([^"]+)"/g)]
  .map((match) => match[1])
  .filter((path) => !/^https?:|^data:/i.test(path));
const missingImages = localImages.filter((path) => !existsSync(path));
if (missingImages.length) {
  throw new Error(`Không tìm thấy asset hình ảnh: ${missingImages.join(", ")}`);
}

for (const path of stylesheetPaths) {
  if (!gradle.includes(`include("${path}")`)) {
    throw new Error(`APK chưa đóng gói stylesheet ${path}.`);
  }
}

if (localImages.some((path) => path.startsWith("assets/")) && !gradle.includes('include("assets/**")')) {
  throw new Error("APK chưa đóng gói thư mục assets/**.");
}

if (html.includes("iphone-ui.css")) {
  throw new Error("index.html vẫn còn nạp lớp typography cũ.");
}

console.log(
  `UI integrity check passed: ${requiredIds.length} required IDs, `
  + `${stylesheetPaths.length} stylesheets, ${localImages.length} local images.`
);
