# 基礎TypeScriptエラーコース

このコースでは、TypeScriptの型が通っていても発生する実行時の振る舞いの誤りを、**失敗するテスト**から学びます。各章の`main`は完成状態です。章に記載したバグ再現コミットへ移動すると、同じテストが意図した理由で失敗します。

> 学習の順序は **Red → Green → Refactor** です。失敗の観測、最小修正、テストで守る契約の説明を一章ずつ繰り返してください。

## 進め方

| 段階 | 行うこと | 確認すること |
| --- | --- | --- |
| Red | バグ再現コミットへ移動して対象テストを実行する | 型エラーではなく、期待した値・状態・失敗伝播との差で落ちる |
| Green | `main`へ戻り、同じテストを実行する | 最小修正によってテストが成功する |
| Refactor | 実装・テスト・型を読み直す | 何が値で、どこが可変で、どのPromiseを待つか説明できる |

## 章一覧

| # | 章 | 学ぶエラー | 対象テスト |
| ---: | --- | --- | --- |
| T001 | [nullishの既定値](t001-nullish-default.md) | `||`により`0`を未指定扱いする | `resolvePort.test.ts` |
| T002 | [破壊的な配列操作](t002-array-mutation.md) | `sort()`が入力配列を変更する | `rankedScores.test.ts` |
| T003 | [オブジェクトの値比較](t003-object-value-comparison.md) | `===`で座標オブジェクトの参照を比較する | `sameCoordinates.test.ts` |
| T004 | [コールバックの戻り値](t004-callback-return.md) | `find()`のコールバックから条件を返さない | `findActiveUser.test.ts` |
| T005 | [非同期失敗の伝播](t005-await-promise.md) | Promiseを`await`せず失敗を見落とす | `recordPurchase.test.ts` |
| T006 | [unknownの実行時検証](t006-unknown-type-guard.md) | 型アサーションだけで外部入力を受理する | `parseProfile.test.ts` |
| T007 | [Mapの値キー](t007-map-value-key.md) | オブジェクトをMapのキーにして参照で検索する | `exchangeRates.test.ts` |

## まとめて実行する

```bash
npm test
```

型検査、テスト、章ガイドの存在確認をまとめて実行する場合は、次を使います。

```bash
npm run verify
```

## References

[1] [Learn Go with Tests](https://github.com/quii/learn-go-with-tests)

[2] [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
