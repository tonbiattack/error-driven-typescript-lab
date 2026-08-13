import assert from "node:assert/strict";
import test from "node:test";
import { sameCoordinates } from "../../src/objects/sameCoordinates.js";

test("T003: 同じ座標値を持つ別オブジェクトを一致と判定する", () => {
  assert.equal(
    sameCoordinates(
      { latitude: 35.6812, longitude: 139.7671 },
      { latitude: 35.6812, longitude: 139.7671 },
    ),
    true,
  );
});

test("T003: 緯度または経度が異なる座標は一致と判定しない", () => {
  assert.equal(
    sameCoordinates(
      { latitude: 35.6812, longitude: 139.7671 },
      { latitude: 35.6813, longitude: 139.7671 },
    ),
    false,
  );
});
