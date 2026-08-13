import assert from "node:assert/strict";
import test from "node:test";
import { ExchangeRates } from "../../src/maps/exchangeRates.js";

test("T007: 同じ通貨コードを持つ別オブジェクトからレートを検索できる", () => {
  const rates = new ExchangeRates();
  rates.set({ code: "USD" }, 150);

  assert.equal(rates.find({ code: "USD" }), 150);
});

test("T007: 未登録の通貨コードはundefinedを返す", () => {
  const rates = new ExchangeRates();

  assert.equal(rates.find({ code: "EUR" }), undefined);
});
