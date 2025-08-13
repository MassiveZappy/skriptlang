# Getting Started with Tree-sitter Skript Grammar

This document provides a step-by-step guide to set up and use the Tree-sitter grammar for the Skript language.

## Prerequisites

- [Node.js](https://nodejs.org) (version 14 or higher)
- [Tree-sitter CLI](https://github.com/tree-sitter/tree-sitter/blob/master/cli/README.md)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/username/tree-sitter-skript.git
cd tree-sitter-skript
```

2. Install dependencies:
```bash
npm install
```

3. Generate the parser:
```bash
npx tree-sitter generate
```

4. Build the parser:
```bash
npx tree-sitter build
```

## Testing the Grammar

Run the tests to ensure the grammar is working correctly:

```bash
npx tree-sitter test
```

## Parsing Example Files

You can parse a Skript file to see the syntax tree:

```bash
npx tree-sitter parse path/to/example.sk
```

For a visual representation of the parse tree:

```bash
npx tree-sitter parse path/to/example.sk --quiet --dot | dot -Tpng -o parse-tree.png
```

## Highlighting Example Files

To see the syntax highlighting in action:

```bash
npx tree-sitter highlight path/to/example.sk
```

## Integrating with Editors

### Neovim

1. Install the [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter) plugin
2. Add the parser to your Neovim configuration:

```lua
local parser_config = require "nvim-treesitter.parsers".get_parser_configs()
parser_config.skript = {
  install_info = {
    url = "https://github.com/username/tree-sitter-skript",
    files = {"src/parser.c"},
    branch = "main",
  },
  filetype = "sk", -- file extension for Skript files
}
```

3. Install the parser in Neovim:
```
:TSInstall skript
```

### VSCode

1. Create a new extension that includes the compiled WASM parser
2. Add language configuration and syntax highlighting
3. Publish the extension to VSCode Marketplace

## Customizing the Grammar

If you need to modify the grammar:

1. Edit the `grammar.js` file
2. Regenerate the parser: `npx tree-sitter generate`
3. Run the tests: `npx tree-sitter test`
4. If you added new node types, update the `queries/highlights.scm` file

## Common Issues and Solutions

- **Test failures**: Make sure your grammar rules cover all the examples in the corpus files
- **Highlighting issues**: Check that all node types in your grammar have corresponding entries in the highlights.scm query file
- **Parsing errors**: Use the tree-sitter playground to debug specific syntax constructs

## Resources

- [Tree-sitter Documentation](https://tree-sitter.github.io/tree-sitter/)
- [Writing Tree-sitter Grammars](https://tree-sitter.github.io/tree-sitter/creating-parsers)
- [Tree-sitter Playground](https://tree-sitter.github.io/tree-sitter/playground)