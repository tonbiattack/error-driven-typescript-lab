import assert from "node:assert/strict";
import test from "node:test";
import { findActiveUser } from "../../src/callbacks/findActiveUser.js";

test("T004: 指定したIDの有効な利用者を返す", () => {
  const user = findActiveUser(
    [
      { id: "u-1", active: false },
      { id: "u-2", active: true },
    ],
    "u-2",
  );

  assert.deepEqual(user, { id: "u-2", active: true });
});

test("T004: 無効な利用者は返さない", () => {
  const user = findActiveUser([{ id: "u-1", active: false }], "u-1");

  assert.equal(user, undefined);
});
