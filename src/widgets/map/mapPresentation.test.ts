import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const readSource = (relativePath: string) =>
  fs.readFileSync(path.join(process.cwd(), relativePath), "utf8");

test("map page renders a non-interactive boot overlay", () => {
  const component = readSource("src/widgets/map/MapExplorer.tsx");
  const styles = readSource("src/widgets/map/map-explorer.css");

  assert.match(component, /className="map-boot-overlay"/);
  assert.match(styles, /@keyframes mapPowerOn/);
  assert.match(styles, /\.map-boot-overlay\s*\{[^}]*pointer-events:\s*none;/s);
});

test("map page has light and dark theme palettes", () => {
  const styles = readSource("src/widgets/map/map-explorer.css");

  assert.match(styles, /\.map-explorer\s*\{[^}]*--map-bg-base:/s);
  assert.match(styles, /\.dark\s+\.map-explorer\s*\{[^}]*--map-bg-base:/s);
  assert.match(styles, /background:\s*var\(--map-background\)/);
});

test("map back control uses safe browser history instead of fixed resume link", () => {
  const component = readSource("src/widgets/map/MapExplorer.tsx");

  assert.doesNotMatch(component, /className="map-back"\s+to="\/resume"/);
  assert.match(component, /handleMapBack/);
  assert.match(component, /document\.referrer/);
  assert.match(component, /window\.history\.back\(\)/);
  assert.match(component, /navigate\("\/"\)/);
});

test("map lines and nodes reveal through the same plane animation", () => {
  const styles = readSource("src/widgets/map/map-explorer.css");
  const nodeRule = styles.match(/\.map-node\s*\{(?<body>[^}]*)\}/s);

  assert.match(styles, /\.map-plane\s*\{[^}]*animation:\s*mapPlaneWake/s);
  assert.ok(nodeRule?.groups?.body);
  assert.doesNotMatch(nodeRule.groups.body, /animation:\s*mapNodeWake/);
  assert.doesNotMatch(styles, /@keyframes\s+mapNodeWake/);
});

test("project map nodes render queried project thumbnails", () => {
  const page = readSource("src/pages/map.tsx");
  const component = readSource("src/widgets/map/MapExplorer.tsx");
  const styles = readSource("src/widgets/map/map-explorer.css");

  assert.match(page, /hero_image\s*\{/);
  assert.match(page, /gatsbyImageData/);
  assert.match(component, /node\.thumbnailUrl/);
  assert.match(component, /className="map-node__thumbnail"/);
  assert.match(styles, /\.map-node__thumbnail\s*\{[^}]*object-fit:\s*cover;/s);
});
