# T007: Mapの値キー

## 目的

`Map`はオブジェクトをキーにすると参照で識別するため、業務上の値で検索するには安定したプリミティブキーを選ぶ必要があることを学びます。

## Red: 最初のテスト

```ts
const rates = new ExchangeRates();
rates.set({ code: "USD" }, 150);

assert.equal(rates.find({ code: "USD" }), 150);
```

```bash
git checkout 554e601
npm test -- --test-name-pattern='T007'
```

バグ状態では、設定時と検索時に異なる通貨オブジェクトを渡すため、`Map`は別のキーとして扱い`undefined`を返します。

## Green: 最小修正

完成実装は`src/maps/exchangeRates.ts`にあります。

```ts
private readonly rates = new Map<string, number>();

this.rates.set(currency.code, rate);
return this.rates.get(currency.code);
```

```bash
git checkout main
npm test -- --test-name-pattern='T007'
```

## 次に増やす振る舞い

通貨コードの正規化、負のレートの拒否、既存レートの更新、未登録通貨への既定値をテストで追加してください。
