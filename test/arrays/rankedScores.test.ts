import assert from "node:assert/strict";
import test from "node:test";
import { rankedScores } from "../../src/arrays/rankedScores.js";

test("T002: 降順の順位表を返しても元の配列は変更しない", () => {
  const source = [30, 10, 20];

  assert.deepEqual(rankedScores(source), [30, 20, 10]);
  assert.deepEqual(source, [30, 10, 20]);
});
