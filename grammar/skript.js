module.exports = grammar({
  name: 'skript',

  extras: $ => [
    /\s+/,
  ],

  word: $ => $.identifier,

  rules: {
    source_file: $ => repeat(
      choice(
        $.comment,
        $.options_section,
        $.event_handler,
        $.command_declaration,
        $.timed_event,
        $._statement,
      )
    ),

    // Comments
    comment: $ => token(seq(
      '#',
      /.*/
    )),

    // Options section
    options_section: $ => seq(
      'options:',
      repeat($.option_definition)
    ),

    option_definition: $ => seq(
      field('key', $.identifier),
      ':',
      field('value', $._expression)
    ),

    // Event handlers
    event_handler: $ => seq(
      'on',
      field('event', $.event_type),
      ':',
      repeat($._statement)
    ),

    event_type: $ => seq(
      repeat(seq($.identifier, optional($.arguments))),
      optional(seq('of', $._expression))
    ),

    // Command declarations
    command_declaration: $ => seq(
      'command',
      field('name', seq('/', $._command_name)),
      optional($.arguments),
      ':',
      repeat(choice(
        $.permission_declaration,
        $.trigger_section
      ))
    ),

    _command_name: $ => /[a-zA-Z0-9_]+/,

    permission_declaration: $ => seq(
      'permission:',
      field('permission', $._expression)
    ),

    trigger_section: $ => seq(
      'trigger:',
      repeat($._statement)
    ),

    // Timed events (every X)
    timed_event: $ => seq(
      'every',
      field('interval', $._expression),
      ':',
      repeat($._statement)
    ),

    // Statements
    _statement: $ => choice(
      $.assignment_statement,
      $.conditional_statement,
      $.loop_statement,
      $.command_statement,
      $.wait_statement,
      $.try_catch_statement
    ),

    assignment_statement: $ => seq(
      choice('set', 'increment', 'decrement'),
      field('variable', $._expression),
      optional(seq('to', 'the')),
      choice('to', 'by'),
      field('value', $._expression)
    ),

    conditional_statement: $ => seq(
      'if',
      field('condition', $._expression),
      ':',
      repeat($._statement),
      optional(seq(
        'else:',
        repeat($._statement)
      ))
    ),

    loop_statement: $ => choice(
      seq(
        'loop',
        field('target', $._expression),
        optional(seq(field('times', 'times'))),
        ':',
        repeat($._statement)
      ),
      seq(
        'while',
        field('condition', $._expression),
        ':',
        repeat($._statement)
      )
    ),

    command_statement: $ => choice(
      seq('send', field('message', $._expression), optional(seq('to', field('recipient', $._expression)))),
      seq('broadcast', field('message', $._expression)),
      seq('give', field('item', $._expression), optional(seq('to', field('recipient', $._expression)))),
      seq('cancel', 'event'),
      seq('command', $._expression),
      seq('stop', optional('trigger')),
      seq('exit', 'loop'),
      seq('break', field('block', $._expression), optional('naturally'), optional(seq('using', field('tool', $._expression))))
    ),

    wait_statement: $ => seq(
      'wait',
      field('duration', $._expression)
    ),

    try_catch_statement: $ => seq(
      'try:',
      repeat($._statement),
      'catch:',
      repeat($._statement)
    ),

    // Expressions
    _expression: $ => choice(
      $.variable,
      $.string,
      $.number,
      $.boolean,
      $.placeholder,
      $.timespan,
      $.event_value,
      $.comparison_expression,
      $.logical_expression,
      $.parenthesized_expression,
      $.function_call,
      $.property_access,
      $.identifier,
    ),

    variable: $ => seq(
      '{',
      field('name', choice(
        $.identifier,
        seq($.identifier, repeat(seq('::', $.identifier)))
      )),
      '}'
    ),

    string: $ => choice(
      seq('"', /[^"]*/, '"'),
      seq("'", /[^']*/, "'"),
      seq('{@', $.identifier, '}')
    ),

    number: $ => /\d+(\.\d+)?/,

    boolean: $ => choice('true', 'false'),

    placeholder: $ => seq('%', $._expression, '%'),

    timespan: $ => seq(
      $._expression,
      choice('tick', 'ticks', 'second', 'seconds', 'minute', 'minutes', 'hour', 'hours', 'day', 'days')
    ),

    event_value: $ => choice(
      'event-block',
      'event-entity',
      'player',
      'loop-player',
      'loop-block',
      'loop-entity',
      'loop-value'
    ),

    comparison_expression: $ => prec.left(1, seq(
      field('left', $._expression),
      field('operator', choice('=', '==', '!=', '>', '<', '>=', '<=', 'is', 'is not')),
      field('right', $._expression)
    )),

    logical_expression: $ => choice(
      prec.left(1, seq(field('left', $._expression), 'and', field('right', $._expression))),
      prec.left(1, seq(field('left', $._expression), 'or', field('right', $._expression))),
      seq('not', field('expression', $._expression))
    ),

    parenthesized_expression: $ => seq('(', $._expression, ')'),

    function_call: $ => seq(
      field('function', $.identifier),
      field('arguments', $.arguments)
    ),

    property_access: $ => seq(
      field('object', $._expression),
      "'s",
      field('property', $._expression)
    ),

    arguments: $ => seq(
      '<',
      sepBy1(',', $._expression),
      '>'
    ),

    identifier: $ => /[a-zA-Z_][a-zA-Z0-9_-]*/,
  }
});

function sepBy1(separator, rule) {
  return seq(
    rule,
    repeat(seq(separator, rule))
  );
}

function sepBy(separator, rule) {
  return optional(sepBy1(separator, rule));
}
