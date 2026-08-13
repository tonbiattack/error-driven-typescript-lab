# T005: 非同期失敗の伝播

## 目的

副作用を返すPromiseを`await`しないと、処理完了後に失敗が発生し、呼び出し元の契約から漏れることを学びます。

## Red: 最初のテスト

```ts
await assert.rejects(recordPurchase(new RejectingWriter(), "order-1"), /storage unavailable/);
```

```bash
git checkout 66cb97d
npm test -- --test-name-pattern='T005'
```

バグ状態では`writer.write()`のPromiseを待たずに関数が成功します。その後に書き込みが失敗し、テストランナーでは未処理の非同期失敗として観測されます。

## Green: 最小修正

完成実装は`src/async/recordPurchase.ts`にあります。

```ts
await writer.write(`purchase:${orderId}`);
```

```bash
git checkout main
npm test -- --test-name-pattern='T005'
```

## 次に増やす振る舞い

成功時に正しいイベント文字列を渡すこと、複数の書き込みを順番に行うこと、失敗を業務エラー型へ変換することをテストしてください。
