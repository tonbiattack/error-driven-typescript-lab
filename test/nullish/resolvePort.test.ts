import assert from "node:assert/strict";
import test from "node:test";
import { resolvePort } from "../../src/nullish/resolvePort.js";

test("T001: ポート番号0を指定した場合は既定値へ置き換えない", () => {
  assert.equal(resolvePort(0), 0);
});

test("T001: ポート番号が未指定の場合は3000を返す", () => {
  assert.equal(resolvePort(), 3000);
});
