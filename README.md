# Tree-sitter Grammar for Skript Language

This package provides a Tree-sitter grammar for the Skript language, commonly used for Minecraft server scripting.

## Features

- Syntax highlighting for Skript (.sk) files
- Code folding
- Indentation rules
- Symbol navigation

## Installation

### For Zed Editor

1. Place this folder in: `~/Library/Application Support/Zed/extensions/installed/skript/`
2. Ensure the directory structure includes:
   - `grammars/skriptlang/src/parser.c`
   - `queries/highlights.scm`
   - `queries/indents.scm`

## Development

To rebuild the parser:

```bash
# Install tree-sitter CLI if you haven't already
npm install -g tree-sitter-cli

# Generate the parser
tree-sitter generate

# Test the parser (after creating test files)
tree-sitter test
```

## License

MIT