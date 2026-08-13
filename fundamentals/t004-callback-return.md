# T004: コールバックの戻り値

## 目的

ブロック本体のアロー関数では、条件を明示的に`return`しなければ`find()`の検索条件にならないことを学びます。

## Red: 最初のテスト

```ts
const user = findActiveUser(
  [
    { id: "u-1", active: false },
    { id: "u-2", active: true },
  ],
  "u-2",
);

assert.deepEqual(user, { id: "u-2", active: true });
```

```bash
git checkout 7ef1493
npm test -- --test-name-pattern='T004'
```

バグ状態のコールバックは式を評価するだけで返さないため、すべての要素に対して`undefined`を返し、検索結果も`undefined`です。

## Green: 最小修正

完成実装は`src/callbacks/findActiveUser.ts`にあります。

```ts
return users.find((user) => user.id === id && user.active);
```

```bash
git checkout main
npm test -- --test-name-pattern='T004'
```

## 次に増やす振る舞い

複数の有効利用者、大小文字を区別しないID、非同期検索へ置き換えた場合をテストで追加してください。
