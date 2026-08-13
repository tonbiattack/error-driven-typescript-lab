# エラーで学ぶ TypeScript

TypeScriptで起きやすい実行時の不具合を、**失敗するテスト**から再現し、最小修正と回帰テストで学ぶ教材リポジトリです。テスト駆動開発で言語を学ぶ教材の進め方を参考にしつつ、完成機能を増やす代わりに「型検査は通るが期待と異なるコード」を一つずつ直します。[1]

各章の`main`はテストが成功する完成状態です。失敗する状態はGit履歴の再現コミットとして保持します。章ガイドを読み、バグコミットでRedを確認し、`main`へ戻ってGreenを確認してください。

> TypeScriptの型は多くの誤りを防ぎますが、truthy/falsy、オブジェクト参照、配列の可変性、Promise、外部から渡る`unknown`の値は実行時のテストでも守る必要があります。

## 前提環境

| 項目 | バージョン |
| --- | --- |
| Node.js | 22以降 |
| npm | 10以降を推奨 |
| TypeScript | 5系 |

```bash
git clone https://github.com/tonbiattack/error-driven-typescript-lab.git
cd error-driven-typescript-lab
npm install
npm test
```

## 学び方

| 段階 | 行うこと | 確認すること |
| --- | --- | --- |
| Red | バグ再現コミットへ移動し、対象テストを実行する | 型エラーではなく、期待した返り値・状態・失敗伝播との差で落ちる |
| Green | `main`へ戻り、同じテストを実行する | 最小修正によってテストが成功する |
| Refactor | 実装・型・テストを読み直す | 何が有効な値で、何が可変で、どのPromiseを待つか説明できる |

## 基礎TypeScriptエラーコース

詳細な手順は[`fundamentals/README.md`](fundamentals/README.md)にあります。T001からT007はNode.jsの標準テストランナーで実行する小さな単体テストです。

| # | 章 | 学ぶエラー | バグ再現コミット | 完成実装 |
| ---: | --- | --- | --- | --- |
| T001 | [nullishの既定値](fundamentals/t001-nullish-default.md) | `||`により`0`を未指定扱いする | `16496fd` | `resolvePort` |
| T002 | [破壊的な配列操作](fundamentals/t002-array-mutation.md) | `sort()`が入力配列を変更する | `8f27f66` | `rankedScores` |
| T003 | [オブジェクトの値比較](fundamentals/t003-object-value-comparison.md) | `===`で座標オブジェクトの参照を比較する | `e78ec4b` | `sameCoordinates` |
| T004 | [コールバックの戻り値](fundamentals/t004-callback-return.md) | `find()`の条件関数が値を返さない | `7ef1493` | `findActiveUser` |
| T005 | [非同期失敗の伝播](fundamentals/t005-await-promise.md) | Promiseを`await`せず失敗を見落とす | `66cb97d` | `recordPurchase` |
| T006 | [unknownの実行時検証](fundamentals/t006-unknown-type-guard.md) | 型アサーションだけで外部入力を受理する | `b1ffb76` | `parseProfile` |
| T007 | [Mapの値キー](fundamentals/t007-map-value-key.md) | オブジェクトをMapのキーにして参照で検索する | `554e601` | `ExchangeRates` |

T001からT004で値・参照・コールバックを、T005からT007で非同期処理・外部入力・コレクションを扱います。

## バグを自分で再現する

各章でバグ状態と修正状態は別コミットです。たとえばT005では、次のように未処理の非同期失敗を再現できます。

```bash
git checkout 66cb97d
npm test -- --test-name-pattern='T005'
# unhandledRejectionが観測され、テストが失敗する

git checkout main
npm test -- --test-name-pattern='T005'
# pass 1
# fail 0
```

## 検証コマンド

| コマンド | 内容 |
| --- | --- |
| `npm run typecheck` | 厳格なTypeScript型検査 |
| `npm test` | コンパイル後にNode標準テストランナーで全テストを実行 |
| `npm run verify` | 型検査、全テスト、章ガイドの存在確認 |

## コースの導線と設計

| 文書 | 内容 |
| --- | --- |
| [SUMMARY.md](SUMMARY.md) | 章への目次 |
| [fundamentals/README.md](fundamentals/README.md) | 基礎コースの学び方と章一覧 |
| [DESIGN.md](DESIGN.md) | TypeScript固有の教材設計 |
| [coverage-matrix.md](coverage-matrix.md) | 実装済み・未着手テーマの対応表 |

## コード配置

```text
src/                    # 完成実装
test/                   # Node標準テストランナー用の振る舞いテスト
fundamentals/           # T001〜T007のRed→Green章ガイド
SUMMARY.md              # コース目次
DESIGN.md               # 教材設計
coverage-matrix.md      # 実装範囲と今後のテーマ
```

## References

[1] [Learn Go with Tests](https://github.com/quii/learn-go-with-tests)

[2] [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
