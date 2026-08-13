# T003: オブジェクトの値比較

## 目的

二つのオブジェクトが同じ参照かではなく、ドメイン上の値が同じかを比較します。

## Red: 最初のテスト

```ts
assert.equal(
  sameCoordinates(
    { latitude: 35.6812, longitude: 139.7671 },
    { latitude: 35.6812, longitude: 139.7671 },
  ),
  true,
);
```

```bash
git checkout e78ec4b
npm test -- --test-name-pattern='T003'
```

バグ状態の`left === right`は別オブジェクトを比較するため、座標値が同じでも`false`になります。

## Green: 最小修正

完成実装は`src/objects/sameCoordinates.ts`にあります。

```ts
return left.latitude === right.latitude && left.longitude === right.longitude;
```

```bash
git checkout main
npm test -- --test-name-pattern='T003'
```

## 次に増やす振る舞い

小数の丸め誤差を許容するか、座標の範囲を検証するか、値オブジェクトとしてクラスへまとめるかをテストで検討してください。
