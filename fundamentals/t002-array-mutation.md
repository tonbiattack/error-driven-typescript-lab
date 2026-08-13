# T002: 破壊的な配列操作

## 目的

`sort()`が配列自身を並べ替えることを理解し、入力データを変更しない関数をテストで守ります。

## Red: 最初のテスト

```ts
const source = [30, 10, 20];

assert.deepEqual(rankedScores(source), [30, 20, 10]);
assert.deepEqual(source, [30, 10, 20]);
```

```bash
git checkout 8f27f66
npm test -- --test-name-pattern='T002'
```

バグ状態では`sort()`が`source`自身を変更するため、二つ目のアサーションが失敗します。

## Green: 最小修正

完成実装は`src/arrays/rankedScores.ts`にあります。

```ts
return [...scores].sort((left, right) => right - left);
```

```bash
git checkout main
npm test -- --test-name-pattern='T002'
```

## 次に増やす振る舞い

空配列、同点、負の値、`readonly number[]`を受け取るAPIをテストで検討してください。
