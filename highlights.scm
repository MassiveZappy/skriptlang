(string) @string

(pair
  key: (string) @property.json_key)

(number) @number

; ; Comments
; (comment) @comment

; ; Keywords
; [
;   "on"
;   "options"
;   "command"
;   "trigger"
;   "permission"
;   "set"
;   "if"
;   "else"
;   "loop"
;   "while"
;   "try"
;   "catch"
;   "wait"
;   "give"
;   "send"
;   "broadcast"
;   "increment"
;   "decrement"
;   "stop"
;   "exit"
;   "every"
;   "to"
;   "of"
;   "is"
;   "has"
;   "does"
;   "not"
;   "by"
;   "between"
;   "in"
;   "around"
;   "and"
;   "or"
; ] @keyword

; ; Operators
; [
;   "+"
;   "-"
;   "="
;   "=="
;   "!="
;   ">"
;   "<"
;   ">="
;   "<="
; ] @operator

; ; Special keywords for events
; (event_type) @keyword.special

; ; Special identifiers
; (permission_identifier) @variable.special
; (options_block) @variable.special

; ; Variables
; (variable) @variable

; ; Placeholders (expressions in %)
; (placeholder) @string.special

; ; String literals
; (string) @string

; ; Numbers
; (number) @number

; ; Boolean literals
; [
;   (true)
;   (false)
; ] @boolean

; ; Time spans
; (time_span) @number.special

; ; Functions/methods
; (function_call) @function

; ; Types
; (type) @type

; ; Sections
; [
;   (trigger_block)
;   (options_block)
; ] @keyword.special

; ; Commands
; (command_name) @function.special

; ; Event declarations
; (event_declaration
;   name: (_) @function.macro)
