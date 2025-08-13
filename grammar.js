module.exports = grammar({
  name: "skriptlang",

  extras: ($) => [/\s/, $.comment],

  conflicts: ($) => [
    [$.event_handler, $.command_handler],
    [$.event_handler, $.function_declaration],
    [$.statement, $.if_statement],
    [$.statement, $.loop_statement],
    [$.statement, $.try_catch_statement],
    [$.list],
  ],

  rules: {
    source_file: ($) =>
      repeat(
        choice(
          $.section,
          $.event_handler,
          $.command_handler,
          $.function_declaration,
          $.comment,
        ),
      ),

    // Comments
    comment: ($) => seq("#", /.*/),

    // Sections (like options, variables)
    section: ($) => seq("options:", repeat($.section_content)),

    section_content: ($) => seq($.identifier, ":", $.value),

    // Events
    event_handler: ($) =>
      prec.left(seq("on", $.event_name, ":", repeat($.statement))),

    event_name: ($) => /[^:]+/,

    // Commands
    command_handler: ($) =>
      prec.left(
        seq(
          "command",
          /\/\w+/,
          optional($.command_arguments),
          ":",
          optional($.permission_line),
          "trigger:",
          repeat($.statement),
        ),
      ),

    command_arguments: ($) =>
      seq(
        choice("<", "["),
        $.identifier,
        optional(seq(":", $.type)),
        choice(">", "]"),
      ),

    permission_line: ($) => seq("permission:", $.string_value),

    // Functions
    function_declaration: ($) =>
      prec.left(
        seq(
          "function",
          $.identifier,
          "(",
          optional($.parameters),
          ")",
          ":",
          repeat($.statement),
        ),
      ),

    parameters: ($) => seq($.identifier, repeat(seq(",", $.identifier))),

    // Statements
    statement: ($) =>
      choice(
        $.if_statement,
        $.set_statement,
        $.send_statement,
        $.broadcast_statement,
        $.loop_statement,
        $.add_statement,
        $.remove_statement,
        $.wait_statement,
        $.command_statement,
        $.give_statement,
        $.try_catch_statement,
        $.increment_statement,
        $.decrement_statement,
      ),

    if_statement: ($) =>
      prec.left(
        seq(
          "if",
          $.condition,
          ":",
          repeat($.statement),
          optional(seq("else:", repeat($.statement))),
        ),
      ),

    set_statement: ($) => seq("set", $.variable, "to", $.value),

    send_statement: ($) => seq("send", $.value, optional(seq("to", $.value))),

    broadcast_statement: ($) => seq("broadcast", $.value),

    loop_statement: ($) =>
      prec.left(
        seq(
          choice(seq("loop", $.value), seq("loop", $.value, "times")),
          ":",
          repeat($.statement),
        ),
      ),

    add_statement: ($) => seq("add", $.value, "to", $.variable),

    remove_statement: ($) =>
      seq("remove", $.value, optional("from"), $.variable),

    wait_statement: ($) => seq("wait", $.value),

    command_statement: ($) => seq("command", $.string_value),

    give_statement: ($) => seq("give", $.value, "to", $.value),

    try_catch_statement: ($) =>
      prec.left(
        seq("try:", repeat($.statement), "catch:", repeat($.statement)),
      ),

    increment_statement: ($) => seq("increment", $.variable, "by", $.value),

    decrement_statement: ($) => seq("decrement", $.variable, "by", $.value),

    // Variables
    variable: ($) =>
      choice(
        seq("{", $.variable_name, "}"),
        seq("{", $.variable_name, "::", $.value, "}"),
        seq("_", $.identifier),
      ),

    variable_name: ($) => /[a-zA-Z0-9_:]+/,

    // Conditions
    condition: ($) =>
      prec.left(
        choice(
          seq($.value, $.comparison_operator, $.value),
          seq($.value, "is", optional("not"), $.value),
          seq($.value, "has", optional("not"), $.value),
          seq($.value, "contains", $.value),
          seq("(", $.condition, ")"),
          seq($.condition, "and", $.condition),
          seq($.condition, "or", $.condition),
          seq("not", $.condition),
        ),
      ),

    comparison_operator: ($) => choice("=", ">", "<", ">=", "<=", "!="),

    // Values
    value: ($) =>
      choice(
        $.string_value,
        $.number,
        $.variable,
        $.boolean,
        $.expression,
        $.event_value,
        $.function_call,
        $.list,
      ),

    string_value: ($) => choice(seq('"', /[^"]*/, '"'), /[a-zA-Z0-9_\-\s]+/),

    number: ($) => /\d+(\.\d+)?/,

    boolean: ($) => choice("true", "false"),

    expression: ($) =>
      seq("%", choice($.variable, $.function_call, $.math_expression), "%"),

    math_expression: ($) => /[^%]+/,

    event_value: ($) =>
      choice(
        "event-block",
        "event-entity",
        "player",
        "loop-player",
        "loop-value",
        "loop-index",
        "loop-value-2",
        "loop-block",
      ),

    function_call: ($) => seq($.identifier, "(", optional($.arguments), ")"),

    arguments: ($) => seq($.value, repeat(seq(",", $.value))),

    list: ($) =>
      prec.right(seq($.value, "or", $.value, repeat(seq("or", $.value)))),

    // Types
    type: ($) =>
      choice(
        "text",
        "number",
        "player",
        "item",
        "block",
        "entity",
        "location",
        "world",
        "timespan",
      ),

    // Other
    identifier: ($) => /[a-zA-Z][a-zA-Z0-9_\-]*/,
  },
});
