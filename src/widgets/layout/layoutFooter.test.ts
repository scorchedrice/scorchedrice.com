import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const source = fs.readFileSync(
  path.join(process.cwd(), "src/widgets/layout/layout.tsx"),
  "utf8",
);

test("site footer exposes core content links", () => {
  assert.match(source, /to="\/search"/);
  assert.match(source, /to="\/map"/);
  assert.match(source, /to="\/resume"/);
  assert.match(source, /Content/);
  assert.match(source, /Contact/);
});
