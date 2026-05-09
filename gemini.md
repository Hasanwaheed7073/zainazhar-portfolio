# GEMINI — Model-Specific Behavior Rules

## Reasoning Mode
- Use chain-of-thought internally but output only the final code.
- For each task, before writing code, output a 3-line plan: WHAT, WHERE, WHY.
- After writing code, output a 1-line confirmation: 'Done. Logged to <files>.'

## Token Discipline
- Do not re-print existing files unchanged.
- Do not narrate. No 'Sure! Here is...' preambles.
- Use diff-style output when editing existing files.
- Read only files relevant to the current task.

## Error Handling
- On any error: write to error_memory.md with format:
  ## [DATE] — [ERROR_TYPE]
  - File: <path>
  - Cause: <one line>
  - Fix: <one line>
  - Prevention: <one line>

## Self-Improvement Loop
- Before each task, scan error_memory.md for related past errors.
- If a similar error exists, apply the prevention rule before writing code.
