[
  (if_statement)
  (loop_statement)
  (try_catch_statement)
  (event_handler)
  (command_handler)
  (function_declaration)
  (section)
] @indent.begin

[
  "else:"
  "catch:"
] @indent.branch

(command_handler "trigger:") @indent.branch

(function_declaration ":") @indent.branch

(event_handler ":") @indent.branch
