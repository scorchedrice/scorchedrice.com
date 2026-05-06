import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const readSource = (relativePath: string) =>
  fs.readFileSync(path.join(process.cwd(), relativePath), "utf8");

test("image based map nodes cannot intercept pointer dragging", () => {
  const component = readSource("src/widgets/map/MapExplorer.tsx");
  const styles = readSource("src/widgets/map/map-explorer.css");

  assert.match(component, /<img[^>]+draggable=\{false\}/);
  assert.match(styles, /\.map-node__logo\s*\{[^}]*pointer-events:\s*none;/s);
  assert.match(styles, /\.map-node__thumbnail\s*\{[^}]*pointer-events:\s*none;/s);
});
