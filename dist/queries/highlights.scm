; Keywords
[
  "if"
  "else:"
  "set"
  "to"
  "send"
  "broadcast"
  "loop"
  "add"
  "remove"
  "from"
  "wait"
  "give"
  "try:"
  "catch:"
  "increment"
  "by"
  "decrement"
  "times"
  "on"
  "command"
  "trigger:"
  "function"
  "options:"
  "permission:"
] @keyword

; Operators
[
  "="
  ">"
  "<"
  ">="
  "<="
  "!="
  "and"
  "or"
  "not"
  "is"
  "has"
  "contains"
] @operator

; Types
[
  "text"
  "number"
  "player"
  "item"
  "block"
  "entity"
  "location"
  "world"
  "timespan"
] @type.builtin

; Literals
[
  "true"
  "false"
] @boolean

; Numbers
(number) @number

; Strings
(string_value) @string

; Comments
(comment) @comment @spell

; Functions & Calls
(function_declaration
  (identifier) @function)

(function_call
  (identifier) @function.call)

; Events
(event_handler
  (event_name) @event)

; Variables
(variable_name) @variable

(variable) @variable

; Parameters
(command_arguments
  (identifier) @parameter)

(parameters
  (identifier) @parameter)

; Event values
[
  "event-block"
  "event-entity"
  "player"
  "loop-player"
  "loop-value"
  "loop-index"
  "loop-value-2"
  "loop-block"
] @constant

; Punctuation
[
  "{"
  "}"
  "("
  ")"
  ":"
  "::"
] @punctuation

; Identifiers (catch-all)
(identifier) @variable
