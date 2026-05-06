import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const source = fs.readFileSync(
  path.join(process.cwd(), "src/widgets/home/TagSection.tsx"),
  "utf8",
);

test("home tag section exposes a collapsed more control", () => {
  assert.match(source, /useState<Set<string>>/);
  assert.match(source, /collapsedLimit/);
  assert.match(source, /\.\.\. 더보기/);
  assert.match(source, /접기/);
});
