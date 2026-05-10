# UX LOG — Design Decisions and Lock-Ins

## Apple.com Design Rules — LOCKED
- Max content width: 1200px
- Section vertical padding: 96px desktop, 64px mobile
- Section heading size: clamp(2rem, 4vw, 3.5rem)
- Body text: 17px, 1.6 line-height
- Font: SF Pro fallback stack: -apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, system-ui, sans-serif
- Buttons: solid navy bg, white text, 14px radius, 14-16px padding
- Hover: subtle 80ms opacity transition only. No lift, no scale.
- Cards: white bg, 1px border (#E5E7EB), 16px radius, no shadow on default
- Dividers: 1px solid #E5E7EB only

## What NOT to do (locked rules)
- No carousels
- No autoplay video
- No animated background gradients
- No parallax
- No popups or exit-intent modals
- No cookie banner unless legally required
- No dark mode toggle in v1

## 2026-05-09 — Design tokens implemented
- Tokens shipped to tailwind.config.ts.
- Component classes shipped to globals.css: .btn-primary, .btn-secondary, .section-pad, .divider, .card-base.
- All future sections must use these utility classes or Tailwind tokens. NO hardcoded colors.

## 2026-05-09 — Site shell shipped
- Sticky nav with translucent surface (bg-surface/85 + backdrop-blur-md). No drop shadow.
- Footer borders only, no background fill change.
- All hover states use 80ms opacity transition (duration-apple). No lift, no scale, per Apple rule.
- Mobile menu uses peer-checked pattern (zero JS) to preserve Server Component status.

## 2026-05-09 — Hero + TrustBar shipped
- Hero respects max-w-container, section-pad, lg:col-span-7/5 split.
- Image uses fill + sizes for responsive optimization.
- TrustBar uses bg-surface-alt (#FAFAFB) for subtle visual separation without breaking white aesthetic.
- All copy uses periods or commas, zero em-dashes.
- Eyebrow label sets brand voice before H1 lands (Apple pattern).

## 2026-05-09 — Bottleneck section shipped
- Single max-w-prose-wide column for the lead block (Apple long-form pattern).
- 3-column md grid for problem cards, stacks to single column on mobile.
- Cards use .card-base (white, 1px line border, 16px radius, no shadow). H3 navy title + body muted text only. Zero icons by design (Apple-style restraint).
- 16-unit gap between lead block and card grid (mt-16) for breathing room.

## 2026-05-09 — Pillars section shipped
- Visual rhythm pattern established: Hero (white) → TrustBar (alt) → Bottleneck (white) → Pillars (alt). Future sections must continue alternating.
- Hairline divider grid (gap-px on bg-line) replaces traditional card shadows.
- Numbered pillars use font-mono small caps for editorial Apple feel.
- 6-cell grid fills cleanly on lg breakpoint with the white-label CTA closing the section.

## 2026-05-09 — Live Proof section shipped
- Visual rhythm continued: Pillars (alt) → Proof (white).
- 2 master cards use card-base with eyebrow label + H2 title + descriptive paragraph + closing 'Open document →' link.
- Tracker rows use rounded-btn (12px radius) instead of card (16px) to differentiate from main cards.
- Group hover pattern: hover:opacity-80 plus arrow color shift on the affordance text.
- Section divider H3 with right-aligned count creates editorial 'index' feel.

## 2026-05-09 — Process section shipped
- Visual rhythm continued: Proof (white) → Process (alt).
- 2-col grid on lg breakpoint (col-span-6) with 16-unit horizontal gap creates editorial pairing of steps 01+02 and 03+04.
- Step header: number on left, timeframe on right, hairline border-b separates from body. Apple receipt pattern.
- Closing CTA card uses card-base on bg-surface-alt for contrast (white card on off-white section).
- All visual hierarchy delivered through type weight, color, and spacing. Zero icons.

## 2026-05-09 — About + FAQ shipped
- Visual rhythm: Process (alt) → About (white) → Faq (alt). Continues alternation.
- About uses 12-col split (5/7) with photo+facts on left, prose on right (mirrors Hero pattern but reversed weight).
- Facts dl uses gap-px on bg-line trick for hairline rows (consistent with Pillars and Proof patterns).
- FAQ accordion: zero-JS native pattern. Plus icon rotates 45deg to become an X via Tailwind group-open variant. 80ms duration-apple transition only.
- Accordion items use divide-y on a single bordered card, not individual cards. Cleaner visual block.

## 2026-05-09 — Contact section shipped
- Visual rhythm: Faq (alt) → Contact (white). Closes the homepage on white background.
- Inverted card pattern: primary CTA card uses bg-navy with white text (only inverted card on the page, draws maximum attention to calendar).
- Three secondary channel cards use standard card-base on white. Single column to preserve vertical hierarchy.
- Form lives on bg-surface-alt panel inside white section (visual layering without breaking palette).
- Form inputs: rounded-btn (12px), border-line default, border-navy on focus. No shadow, no ring offset.
- Disabled submit state: opacity-60 + cursor-not-allowed during submission.
- Success state replaces the entire form with a success card (Apple post-submit pattern).

## 2026-05-09 — Job seekers page shipped
- Visual rhythm continued from homepage palette. Page uses bg-surface and bg-surface-alt alternation.
- Hero is single-column (no photo) to differentiate from homepage hero. Photo lives only on homepage.
- Problem cards mirror Bottleneck pattern (3 cards with 01/02/03 numbering).
- How-it-works grid mirrors Pillars pattern (numbered cells with hairline dividers, 2-col on md).
- Closing CTA uses 3 cards: navy primary (calendar), white WhatsApp, white email. Matches Contact pattern from homepage but compressed.
- Cross-link at bottom routes coaches who landed wrong back to homepage.

## 2026-05-09 — Accessibility and performance pass shipped
- Skip link uses navy bg, white text, 12px radius. Translates from top:-100px to top:0.75rem on focus with 80ms ease (matches duration-apple).
- Focus ring style: 2px solid navy, 3px offset, 6px radius. Visible only on keyboard focus (focus-visible), not mouse click. Apple keyboard pattern.
- Anchor scroll offset (scroll-margin-top: 5rem) prevents sticky nav from covering target headings when users click /#proof, /#process, etc.
- Reduced-motion respect: any user with prefers-reduced-motion=reduce gets near-instant transitions. Critical for vestibular accessibility.
- All changes invisible by default. Activated only by keyboard navigation or assistive tech.

## 2026-05-10 — Contrast and LCP polish
- ink-soft color darkened. Affects: Footer copyright text, Footer 'Built for...' tagline, Hero trust line, About 'Are you a career coach instead?' link reference, and several closing paragraphs in Proof section.
- Visual change is negligible to the eye (going from light gray to slightly darker gray) but unlocks Lighthouse Accessibility 100.
- fetchPriority='high' on hero image is purely a browser hint — no visual change.
