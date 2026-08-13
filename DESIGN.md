# 設計方針

## 教材の目的

このリポジトリは、型検査を通過しても残るTypeScriptの実行時不具合を、最小の失敗テストから観測し、最小修正で直す教材です。JavaScriptの実行時の値、オブジェクト参照、配列の可変性、Promise、外部入力といった境界を主に扱います。

## TDD教材からの置換判断

Learn Go with Testsは、小さなテストから言語機能とTDDを学ぶ構成です。[1] 本コースでは、その学習方法を参考にしながら、原典の文章・コード・章構成を複製せず、TypeScriptで遭遇しやすい不具合へ独自に置き換えました。

| 一般的なTDD教材の主題 | TypeScriptエラー教材での置換 | 採用理由 |
| --- | --- | --- |
| 値と条件分岐 | `||`と`??`、オブジェクト値比較 | 型があってもtruthy/falsyや参照比較の誤りが残る |
| 配列とコレクション | `sort()`の破壊的変更、`Map`のキー | JavaScriptの参照と可変性を小さな単体テストで観測できる |
| コールバックとエラー | `find()`の戻り値、`unknown`の型ガード | 型推論と実行時データの差を明示できる |
| 並行性 | Promiseの`await`漏れ | 成功・失敗の伝播を実時間なしで検証できる |

## 実行基盤

Node.js 22の標準テストランナーとTypeScriptコンパイラを使います。テストは一度JavaScriptへコンパイルしてから`node --test`で実行するため、各テストのimportは`.js`拡張子を使います。[2] `strict`、`noUncheckedIndexedAccess`、`exactOptionalPropertyTypes`を有効にし、型エラーを早期に検出します。

| 要素 | 配置 | 役割 |
| --- | --- | --- |
| 完成実装 | `src/` | `main`で正しい振る舞いを示す |
| 振る舞いテスト | `test/` | 正常系、境界値、不正入力、非同期失敗を検証する |
| 章ガイド | `fundamentals/` | Red → Green → Refactorの導線を示す |
| 学習導線 | `README.md`と`SUMMARY.md` | コース入口と章順を同期する |
| 対応表 | `coverage-matrix.md` | 実装済み・未着手テーマを明示する |

## Git履歴の扱い

各章は「バグを再現するコミット」と「最小修正を加えるコミット」を分けます。デフォルトブランチは常に`npm test`に成功する状態を維持します。学習者は章ガイドのコミットハッシュで失敗を確認し、`main`に戻って同じテストが成功することを確認します。

## 非目標

このコースはTypeScriptの全言語機能や本番設計を網羅しません。各題材の修正は示した契約を守る最小例であり、実サービスではAPI契約、データ量、性能、セキュリティ、チーム規約とともに判断します。

## References

[1] [Learn Go with Tests](https://github.com/quii/learn-go-with-tests)

[2] [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
