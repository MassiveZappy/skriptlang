# tree-sitter-skript

[![Build Status](https://github.com/username/tree-sitter-skript/workflows/CI/badge.svg)](https://github.com/username/tree-sitter-skript/actions)

Skript grammar for [tree-sitter](https://github.com/tree-sitter/tree-sitter).

[Skript](https://github.com/SkriptLang/Skript) is a plugin for Bukkit-based Minecraft servers that allows server admins to customize their servers using a simple scripting language.

## Features

- Full syntax highlighting for Skript files
- Code folding based on indentation and block structure
- Symbol navigation for events, commands, and sections
- Supports common Skript language constructs:
  - Event handlers
  - Commands
  - Variables
  - Conditions
  - Expressions
  - Loops and timers

## Installation

### Neovim

If you use Neovim with [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter), you can install this parser by:

```lua
require('nvim-treesitter.install').command_parsers{"install", "skript"}
```

Or by adding it to your list of ensured_installed parsers:

```lua
require('nvim-treesitter.configs').setup {
  ensure_installed = { "skript", "lua", "vim", "vimdoc", "query" },
  -- ...
}
```

### VSCode

Install the [Skript Language](https://marketplace.visualstudio.com/items?itemName=username.skript-language) extension from the Visual Studio Marketplace.

## Development

### Requirements

- [Node.js](https://nodejs.org)
- [Tree-sitter CLI](https://github.com/tree-sitter/tree-sitter/blob/master/cli/README.md)

### Setup

```bash
# Install dependencies
npm install

# Generate the parser
npx tree-sitter generate

# Run the tests
npx tree-sitter test
```

### Useful commands

- `npx tree-sitter generate` - Generate the parser
- `npx tree-sitter test` - Run the tests
- `npx tree-sitter parse <file>` - Parse a file and show the syntax tree
- `npx tree-sitter highlight <file>` - Highlight a file based on the query file

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.