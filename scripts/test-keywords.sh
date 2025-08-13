#!/bin/bash

mkdir -p tmp/tree-sitter-skript/

cat src/grammar.json |
  jq '.rules | to_entries[] | select(.key | contains("keyword")) | .key' |
  tr -d '"' |
  sort > tmp/tree-sitter-skript/keywords.txt

cat queries/highlights.scm |
  grep -o "keyword\w\+" |
  sort > tmp/tree-sitter-skript/highlights.txt

keywords=$(comm -3 tmp/tree-sitter-skript/keywords.txt tmp/tree-sitter-skript/highlights.txt)

if [[ "$keywords" ]]; then
  echo "ERROR: keywords in grammar.json are not in sync with queries/highlights.scm"
  echo "$keywords"
  exit 1
fi

echo "OK"
