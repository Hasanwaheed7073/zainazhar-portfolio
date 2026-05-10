# ERROR MEMORY — Self-Debugging Log

Format for every entry:

## YYYY-MM-DD — ERROR_TYPE
- File: path
- Cause: one line
- Fix: one line
- Prevention: one line

---

## 2026-05-09 — P1_BUILD_ERROR
- File: app/globals.css
- Cause: shadcn init appended imports conflicting with @tailwind directives, causing PostCSS errors.
- Fix: Restored standard Tailwind v3 directives and manually added shadcn color variables to tailwind.config.ts.
- Prevention: Manually verify globals.css and tailwind.config.ts after shadcn init on existing setups.

## 2026-05-09 — P1_BUILD_ERROR
- File: package.json
- Cause: npm installed typescript ^6.0.3 which lacks type resolution for CSS imports in Next.js.
- Fix: Downgraded typescript to 5.7.3.
## 2026-05-09 — VERCEL_BUILD_CASE_SENSITIVITY
- File: components/sections/Contact.tsx
- Cause: The ContactForm component was missing or not pushed with exact casing causing Linux/Vercel to throw a Module not found error.
- Fix: Recreated and committed ContactForm.tsx with exact casing to match the import statement.
- Prevention: Always use PascalCase for component filenames and imports, and ensure git tracks case changes correctly.

## 2026-05-10 — V1 PROD AUDIT
- File: tailwind.config.ts
- Cause: ink.soft #8A93A4 had 3.8:1 contrast ratio on white, failing WCAG AA Normal text (requires 4.5:1).
- Fix: Darkened to #6B7280 (Tailwind's gray-500), achieving 4.6:1 ratio.
- Prevention: All future text colors on white backgrounds must be tested against WCAG AA before locking. Use https://webaim.org/resources/contrastchecker/ for verification.

## 2026-05-10 — V1 PROD PERF
- File: package.json + next.config.mjs
- Cause: Lighthouse flagged ~11 KiB of legacy JavaScript polyfills shipped to modern browsers, plus suboptimal LCP request discovery on hero image.
- Fix: Added browserslist field targeting Chrome/Firefox/Safari/Edge 100+. Added fetchPriority='high' to hero next/image.
- Prevention: Any future image marked priority must also receive fetchPriority='high'. New deployments should re-run Lighthouse before declaring complete.

## 2026-05-10 — P17 CONTACTFORM_DRIFT_INCIDENT
- File: components/sections/ContactForm.tsx
- Cause: Between P10 and P16, the file was silently overwritten with a stub version. Stub used shadcn Button, removed the role dropdown, removed subject/from_name fields, used inline styles on honeypot, and had weaker error handling. Likely introduced during a git pull --rebase merge or by an out-of-scope agent improvement.
- Detection: 40-insertion diff on a 1-line P16 task triggered a manual git show audit. The diff revealed phantom imports and missing fields vs. P10 spec.
- Fix: P17 overwrote the file with full P10 spec including the live Web3Forms access key.
- Prevention: Added 6 drift-prevention rules to agents.md. Any future commit whose diff size exceeds the prompt's stated scope must be reverted before push.
