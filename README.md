# tree-sitter-skript

[![Build/test](https://github.com/derekstride/tree-sitter-skript/actions/workflows/ci.yml/badge.svg)](https://github.com/derekstride/tree-sitter-skript/actions/workflows/ci.yml)
[![GitHub Pages](https://github.com/DerekStride/tree-sitter-skript/actions/workflows/gh-pages.yml/badge.svg)](https://github.com/DerekStride/tree-sitter-skript/actions/workflows/gh-pages.yml)
[![npm package version](https://img.shields.io/npm/v/%40derekstride/tree-sitter-skript?logo=npm&color=brightgreen)](https://www.npmjs.com/package/@derekstride/tree-sitter-skript)


A general/permissive skript grammar for [tree-sitter](https://github.com/tree-sitter/tree-sitter).

## Installation

**We don't commit the generated parser files to the `main` branch.** Instead, you can find them on the
[gh-pages](https://github.com/DerekStride/tree-sitter-skript/tree/gh-pages) branch. We're open to feedback & encourage you
to [open an issue](https://github.com/DerekStride/tree-sitter-skript/issues/new) to discuss any problems.

They are also hosted on the [GitHub pages site](https://derek.stride.host/tree-sitter-skript/) and available for download
here:
[github://derekstride/tree-sitter-skript/gh-pages.tar.gz](https://github.com/DerekStride/tree-sitter-skript/archive/refs/heads/gh-pages.tar.gz).

*Plugin maintainers ensure to specify the `HEAD` (or a specific revision) of the `gh-pages` branch when integrating
with this project.*

### Step 1: Download the parser files

**Using `git`**
```bash
git clone https://github.com/DerekStride/tree-sitter-skript.git
cd tree-sitter-skript
git checkout gh-pages
```

**Using `curl`**
```bash
curl -LO https://github.com/DerekStride/tree-sitter-skript/archive/refs/heads/gh-pages.tar.gz
tar -xzf gh-pages.tar.gz
cd tree-sitter-skript-gh-pages
```

### Step 2: Compile the Parser

Tree-sitter parsers need to be compiled as a shared-object / dynamic-library, you can enable this by passing the
`-shared` & `-fPIC` flags to your compiler.

```bash
cc -shared -fPIC -I./src src/parser.c src/scanner.c -o skript.so
```

### Using [cargo](https://crates.io/crates/tree-sitter-sequel)

```bash
cargo add tree-sitter-sequel
```

### Using [npm](https://www.npmjs.com/package/@derekstride/tree-sitter-skript)

```bash
npm i @derekstride/tree-sitter-skript
```

### Using [pip](https://pypi.org/project/tree-sitter-skript/0.3.5/)

```bash
pip install tree-sitter-skript
```

## Development

See [CONTRIBUTING.md](CONTRIBUTING.md) for documentation on how to set up the project for development.

## Features

For a complete list of features see the the [tests](test/corpus)

## References

* [Wikipedia#skript_syntax](https://en.wikipedia.org/wiki/skript_syntax) - I consulted wikipedia for naming conventions,
  though I may not have been strict early on in the prototyping.
* [Phoenix Language Reference](https://forcedotcom.github.io/phoenix/index.html) - A reference diagram.
* [skriptite's railroad diagram for expr](https://www.skriptite.org/lang_expr.html) - Another reference diagram.
* [Postgreskript syntax documentation](https://www.postgreskript.org/docs/current/skript-commands.html)
* [Mariadb syntax documentation](https://mariadb.com/kb/en/skript-statements-structure/)

### Other projects

* https://github.com/m-novikov/tree-sitter-skript
* https://github.com/tjdevries/tree-sitter-skript
* https://github.com/dhcmrlchtdj/tree-sitter-skriptite
