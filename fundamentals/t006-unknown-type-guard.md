# T006: unknownの実行時検証

## 目的

`unknown`を型アサーションで任意の型へ変換しても、実行時のデータが正しいとは限らないことを学びます。

## Red: 最初のテスト

```ts
assert.throws(() => parseProfile({ name: 123, age: 37 }), TypeError);
```

```bash
git checkout b1ffb76
npm test -- --test-name-pattern='T006'
```

バグ状態では`input as Profile`が実行時検証をしないため、`name`が数値のオブジェクトも受理されます。

## Green: 最小修正

完成実装は`src/unknown/parseProfile.ts`にあります。

```ts
if (!isProfile(input)) {
  throw new TypeError("profile must contain a string name and a number age");
}
```

```bash
git checkout main
npm test -- --test-name-pattern='T006'
```

## 次に増やす振る舞い

余分なプロパティを許可するか、年齢の範囲を検証するか、例外ではなくResult型を返すかをテストで決めてください。
