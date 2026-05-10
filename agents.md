# AGENTS — Master Instructions for Antigravity

## Project
Zain Azhar Portfolio — Reverse Recruiter for Career Coaches.
Goal: convert career coaches (80%) and job seekers (20%).
Stack: Next.js 15 (App Router) + TypeScript + Tailwind + shadcn/ui.
Host: Vercel free tier.
Live URL target: zainazhar.vercel.app

## Voice & Tone
- No em-dashes (—) anywhere. Use periods or commas.
- No AI-cliché words: elevate, unleash, unlock, seamlessly, leverage, dive into, in today's fast-paced world, game-changer, revolutionize.
- Short sentences. Human. Direct.
- Apple.com tone: confident, calm, minimal.

## Visual Rules
- Background: white (#FFFFFF)
- Primary: navy (#0A1F44)
- Accent: navy-600 (#1E3A8A)
- Text: near-black (#0B1220) on white
- Generous whitespace. Large type. Thin dividers only.
- No gradients on hero. No drop shadows on text. No glassmorphism.
- Border radius: 12px standard, 16px for cards.

## Mandatory Workflow Before Any Task
1. READ error_memory.md — check if this error/task was solved before.
2. READ decisions_log.md — never reverse a locked decision.
3. READ custom_rules.md — follow project coding rules.
4. READ content_source.md — use only this content, do not invent text.
5. EXECUTE the task with strict scope.
6. WRITE to the relevant log files (decisions_log, error_memory, seo_log, ux_log) on completion.

## Strict Rules
- NEVER modify files outside the explicit scope of the current task.
- NEVER invent statistics, testimonials, or client names.
- NEVER add features not requested.
- ALWAYS log what was done to decisions_log.md after a successful task.
- ALWAYS log errors and their fixes to error_memory.md.

## CRITICAL DRIFT-PREVENTION RULES (added 2026-05-10 after P17 incident)

1. ContactForm.tsx is FULLY LOCKED. Its specification lives in P10 and was restored in P17. Future edits require an explicit prompt that references P10 or P17 by ID.
2. NEVER 'improve' a file outside the explicit scope of the current task. If you see code you would write differently, log it as a suggestion in decisions_log.md and STOP.
3. NEVER add or remove form fields, change validation, swap component libraries (e.g., custom button to shadcn Button), or restructure existing components without an explicit P-prompt authorizing it.
4. NEVER use inline style props (style={{...}}) anywhere. Only Tailwind classes or globals.css component classes.
5. After every commit, the diff must match the prompt's scope. If a prompt says 'change one line' and the diff shows 40 insertions, the agent has overstepped and must revert.
6. Single-source-of-truth files (content_source.md, decisions_log.md) are append-only. Never rewrite history.

## ADDITIONAL DRIFT-PREVENTION RULES (added 2026-05-10 after P19 hover-lift incident)

7. NEVER add new utility classes, CSS rules, or components that were not explicitly named in the task instructions or files block. If the agent feels a utility would improve the result, the agent must STOP, log the suggestion to decisions_log.md as 'PROPOSED — NOT IMPLEMENTED', and wait for an explicit follow-up prompt.
8. NEVER apply a className to a component that was not part of the diff_to_apply block. If the prompt says to wrap an element in <Reveal>, the agent only wraps. The agent does not also add 'hover-lift', 'hover:scale-105', 'group', or any other unauthorized className.
9. The phrase 'completed' in the agent's report is RESERVED for tasks where every action exactly matches the prompt scope. If the agent added anything beyond scope, the report must say 'COMPLETED WITH SCOPE EXPANSION' and explicitly list every unauthorized change. Hiding additions inside a verbose summary is forbidden.
10. After every commit, the agent must run 'git show HEAD --stat' and verify each file's line count is within ±20% of the prompt's expected range. If any file is outside that range, the agent reports it explicitly before pushing. The agent does not silently push commits that exceed expected scope.
11. When the agent is unsure whether an action is in-scope, it does NOTHING and asks. The default for ambiguity is inaction, not 'helpful' addition.
