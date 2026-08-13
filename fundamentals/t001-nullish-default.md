# T001: nullishの既定値

## 目的

`0`、空文字列、`false`を有効な値として扱うかを決め、未指定の`undefined`や`null`と区別します。

## Red: 最初のテスト

```ts
assert.equal(resolvePort(0), 0);
```

```bash
git checkout 16496fd
npm test -- --test-name-pattern='T001'
```

バグ状態の`requestedPort || 3000`は、`0`をfalsyとして扱い3000へ置き換えます。

## Green: 最小修正

完成実装は`src/nullish/resolvePort.ts`にあります。

```ts
return requestedPort ?? 3000;
```

```bash
git checkout main
npm test -- --test-name-pattern='T001'
```

## 次に増やす振る舞い

`null`を受け取るAPIにするか、空文字列や`false`に別の既定値が必要かをテストで定義してください。
