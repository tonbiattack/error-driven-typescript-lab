#!/usr/bin/env bash
set -euo pipefail

required_files=(
  README.md
  SUMMARY.md
  DESIGN.md
  coverage-matrix.md
  fundamentals/README.md
  fundamentals/t001-nullish-default.md
  fundamentals/t002-array-mutation.md
  fundamentals/t003-object-value-comparison.md
  fundamentals/t004-callback-return.md
  fundamentals/t005-await-promise.md
  fundamentals/t006-unknown-type-guard.md
  fundamentals/t007-map-value-key.md
)

for required_file in "${required_files[@]}"; do
  if [[ ! -s "$required_file" ]]; then
    echo "必要な教材ファイルがありません: $required_file" >&2
    exit 1
  fi
done

git diff --check

echo "TypeScriptエラー学習コースのドキュメント検証に成功しました。"
