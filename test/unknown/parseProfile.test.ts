import assert from "node:assert/strict";
import test from "node:test";
import { parseProfile } from "../../src/unknown/parseProfile.js";

test("T006: 正しい形のプロファイルを返す", () => {
  assert.deepEqual(parseProfile({ name: "Ada", age: 37 }), { name: "Ada", age: 37 });
});

test("T006: nameが文字列ではない入力を拒否する", () => {
  assert.throws(() => parseProfile({ name: 123, age: 37 }), TypeError);
});
