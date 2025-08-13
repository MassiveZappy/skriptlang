#include <tree_sitter/parser.h>
#include <wctype.h>

enum TokenType {
  STRING_CONTENT,
  HEREDOC_CONTENT,
  COMMENT
};

void *tree_sitter_skriptlang_external_scanner_create() {
  return NULL;
}

void tree_sitter_skriptlang_external_scanner_destroy(void *payload) {}

unsigned tree_sitter_skriptlang_external_scanner_serialize(
  void *payload,
  char *buffer
) {
  return 0;
}

void tree_sitter_skriptlang_external_scanner_deserialize(
  void *payload,
  const char *buffer,
  unsigned length
) {}

bool tree_sitter_skriptlang_external_scanner_scan(
  void *payload,
  TSLexer *lexer,
  const bool *valid_symbols
) {
  // Skip whitespace
  while (iswspace(lexer->lookahead)) {
    lexer->advance(lexer, true);
  }

  // Handle comments
  if (valid_symbols[COMMENT] && lexer->lookahead == '#') {
    lexer->result_symbol = COMMENT;
    lexer->advance(lexer, false);
    
    for (;;) {
      if (lexer->lookahead == '\n' || lexer->lookahead == '\r' || lexer->lookahead == 0) {
        break;
      }
      lexer->advance(lexer, false);
    }
    
    return true;
  }

  // Handle string content
  if (valid_symbols[STRING_CONTENT] && lexer->lookahead != '"' && lexer->lookahead != 0) {
    lexer->result_symbol = STRING_CONTENT;
    
    for (;;) {
      if (lexer->lookahead == '"' || lexer->lookahead == 0) {
        break;
      }
      if (lexer->lookahead == '\\') {
        lexer->advance(lexer, false);
        if (lexer->lookahead != 0) {
          lexer->advance(lexer, false);
        }
      } else {
        lexer->advance(lexer, false);
      }
    }
    
    return true;
  }

  return false;
}