; Comments
(comment) @comment

; Keywords
[
  "on"
  "options"
  "command"
  "trigger"
  "permission"
  "set"
  "if"
  "else"
  "loop"
  "while"
  "try"
  "catch"
  "wait"
  "give"
  "send"
  "broadcast"
  "increment"
  "decrement"
  "stop"
  "exit"
  "every"
  "to"
  "of"
  "is"
  "has"
  "does"
  "not"
  "by"
  "between"
  "in"
  "around"
  "and"
  "or"
] @keyword

; Operators
[
  "="
  "=="
  "!="
  ">"
  "<"
  ">="
  "<="
] @operator

; Variables
(variable) @variable

; Placeholders (expressions in %)
(placeholder) @string.special

; String literals
(string) @string

; Numbers
(number) @number

; Boolean literals
[
  "true"
  "false"
] @boolean

; Time spans
(timespan) @number.special

; Functions/methods
(function_call
  function: (identifier) @function)

; Event types
(event_type) @function.special

; Property access
(property_access
  property: (identifier) @property)

; Option definitions in options section
(option_definition
  key: (identifier) @property)

; Command definitions
(command_declaration
  name: (_) @function.macro)

; Permission declarations
(permission_declaration
  permission: (_) @variable.builtin)

; Event values like 'player', 'event-block', etc.
(event_value) @variable.builtin
