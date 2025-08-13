package tree_sitter_skript_test

import (
	"testing"

	tree_sitter_skript "github.com/DerekStride/tree-sitter-skript/bindings/go"
	tree_sitter "github.com/tree-sitter/go-tree-sitter"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_skript.Language())
	if language == nil {
		t.Errorf("Error loading skript grammar")
	}
}
