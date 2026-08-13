import assert from "node:assert/strict";
import test from "node:test";
import { recordPurchase, type AuditWriter } from "../../src/async/recordPurchase.js";

class RejectingWriter implements AuditWriter {
  public write(_event: string): Promise<void> {
    return Promise.reject(new Error("storage unavailable"));
  }
}

test("T005: 監査書き込みが失敗した場合は呼び出し元へ失敗を返す", async () => {
  await assert.rejects(recordPurchase(new RejectingWriter(), "order-1"), /storage unavailable/);
});
