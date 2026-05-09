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
- Prevention: Pin typescript to 5.x to ensure Next.js App Router typings load correctly.
