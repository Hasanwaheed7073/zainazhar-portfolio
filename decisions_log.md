# DECISIONS LOG — Locked Architectural Choices

## 2026-05-09 — Initial Setup
- Stack: Next.js 15 App Router + TypeScript + Tailwind + shadcn/ui. LOCKED.
- Host: Vercel free tier. LOCKED.
- Domain: zainazhar.vercel.app (free subdomain). LOCKED.
- Audience split: 80% career coaches, 20% job seekers. LOCKED.
- Job seekers live on a separate page /job-seekers. LOCKED.
- Design language: Apple.com aesthetic, white + navy, generous whitespace. LOCKED.
- No em-dashes anywhere in copy. LOCKED.
- Calendar: Google Calendar appointment scheduling, NOT Calendly. LOCKED.
- Lead capture: Google Calendar + form + WhatsApp + email (all four). LOCKED.
- SEO target keywords: 1) reverse recruiter, 2) reverse recruiter for career coaches, 3) job search execution partner. LOCKED.

## Hero Copy — LOCKED
- H1: Reverse Recruiter for Career Coaches
- H2: I run job search execution behind the scenes so your clients land more interviews and faster offers.
- Trust line: 300+ clients. 400+ interviews. United States, United Kingdom, Canada.
- Primary CTA: Book a Partner Call
- Secondary CTA: See Live Proof

## Contact Info — LOCKED
- WhatsApp: +923087823424
- Email: zeecareers07@gmail.com
- LinkedIn: https://www.linkedin.com/in/zain-a-385a0b236/
- Calendar: Google Calendar appointment link (to be added)

---

(Append new locked decisions below this line.)

- 2026-05-09: P0 ENV_SETUP completed. 8 memory files created. Project initialized.

## 2026-05-09 — P1 PROJECT_SCAFFOLD completed
- Next.js 15 App Router initialized with TypeScript and Tailwind.
- shadcn/ui initialized with neutral base, CSS variables enabled.
- Folder structure created: components/sections, components/ui, components/shared, lib, public.
- .gitignore and vercel.json created.
- npm run build verified successful.
- LOCKED: only packages listed in allowed_packages_only of P1 may be installed without explicit approval.

## 2026-05-09 — P2 DESIGN_TOKENS locked
- Color palette LOCKED: navy.DEFAULT #0A1F44, navy.500 #1E3A8A, ink #0B1220, line #E5E7EB, surface #FFFFFF.
- Typography LOCKED: Inter via next/font with SF Pro fallback stack. font-display, h1, h2, h3, lead, body, small scales locked.
- Spacing LOCKED: section 6rem, section-sm 4rem, gutter 1.5rem, max-w-container 1200px.
- Buttons LOCKED: .btn-primary (navy bg) and .btn-secondary (white bg, line border). 12px radius. 80ms opacity transition only. No lift, no scale.
- Cards LOCKED: white bg, 1px #E5E7EB border, 16px radius, no shadow by default.
- Container component LOCKED at components/shared/Container.tsx. All sections must use it.
- RULE: Future prompts must use Tailwind tokens (bg-navy, text-ink, max-w-container) NOT hardcoded hex.

## 2026-05-09 — P3 NAV_FOOTER locked
- Nav.tsx: sticky top, h-16, white/85 bg with backdrop-blur-md, navy wordmark, 4 nav links, primary CTA 'Book a Partner Call'. CSS-only mobile menu via :checked checkbox toggle. Server Component (no 'use client').
- Footer.tsx: 3-column grid, brand + site links + contact. WhatsApp uses wa.me/923087823424. LinkedIn opens in new tab with rel='noopener noreferrer'.
- Both components wired into app/layout.tsx wrapping {children}.
- Nav links: /#services, /#proof, /#process, /job-seekers. Anchors will resolve once sections ship in P4-P10.
- LOCKED: Nav and Footer must remain Server Components. Any future interactivity must be isolated in a child Client Component, not on Nav/Footer themselves.

## 2026-05-09 — P4 HERO_TRUSTBAR locked
- Hero.tsx: 12-col grid, copy on left (cols 1-7), headshot on right (cols 8-12). 4:5 aspect ratio image frame, rounded-card, border-line, bg-navy-50 placeholder.
- H1 LOCKED: 'Reverse Recruiter for Career Coaches' (matches primary SEO keyword exactly).
- Sub LOCKED: 'I run job search execution behind the scenes so your clients land more interviews and faster offers.'
- Eyebrow label: 'Reverse Recruiting Partner' uppercase, tracking 0.14em.
- Two CTAs: Primary anchors to #contact, Secondary anchors to #proof.
- TrustBar.tsx: 4-column grid, bg-surface-alt, border-y. Stats: 300+ clients, 400+ interviews, 5+ years, US/UK/CA.
- next/image with priority=true on hero (LCP optimization).
- JSON-LD Person + ProfessionalService schemas added to app/page.tsx.
- Both components are Server Components (no 'use client').

## 2026-05-09 — P5 BOTTLENECK locked
- Bottleneck.tsx: section id='bottleneck'. Eyebrow 'The Bottleneck', H2 'Advice is not the bottleneck. Execution is.'
- Lead paragraphs sourced verbatim from content_source.md > The Bottleneck.
- Three pattern cards: 'Strategy without execution', 'Clients stall after the call', 'No pipeline, no proof'. Each uses .card-base utility.
- Server Component, no client JS.
- Wired into app/page.tsx between TrustBar and the next section slot.
- LOCKED: copy in this section may only be edited via a future P-prompt that explicitly references content_source.md updates.

## 2026-05-09 — P6 PILLARS locked
- Pillars.tsx: section id='services'. Eyebrow 'What I Execute', H2 'Five backend pillars that turn coaching strategy into hires.'
- Five pillars rendered as numbered ordered list 01-05, plus a 06 'White-label by default' CTA cell completing the 6-cell grid (2x3 on lg, 2-col on md, 1-col on mobile).
- Grid uses gap-px on a bg-line ordered list to create hairline dividers between cells (Apple Stripe pattern).
- Numbers in font-mono navy-500 for visual hierarchy without icons.
- 06 cell contains an inline 'Discuss a partnership' link to #contact.
- Section uses bg-surface-alt for visual rhythm against Bottleneck (bg-surface).
- Server Component, no client JS.

## 2026-05-09 — P7 LIVE_PROOF locked
- Proof.tsx: section id='proof'. Eyebrow 'Live Proof', H2 'Real campaigns. Real interviews. Real offers.'
- 2 master docs as large cards at top: Client Interviews and Offer Letters.
- 12 General Role tracker links in 2-column grid with hairline dividers and 'Open →' affordance.
- 7 Healthcare Specialty tracker links in matching 2-column grid.
- Total: 21 live external links. All target=_blank, rel='noopener noreferrer'.
- Closing privacy note included.
- Server Component, no client JS.
- LOCKED: tracker URLs only modified via explicit prompt referencing content_source.md updates.

## 2026-05-09 — P8 PROCESS locked
- Process.tsx: section id='process'. Eyebrow 'How the Partnership Works', H2 'Four steps from first call to a working pipeline.'
- 4 numbered steps (01-04) with timeframes (Week 0, Week 1, Week 2 onward, Every Friday).
- 2-column grid on lg breakpoint, single column below.
- Each step has a navy dot indicator on the left rail (desktop only) for timeline feel.
- Closing CTA strip with primary button to #contact, message 'Ready to integrate execution into your coaching?'
- Server Component, no client JS.
- Section uses bg-surface-alt continuing the visual rhythm pattern (Proof white → Process alt).

## 2026-05-09 — P9 ABOUT_FAQ locked
- About.tsx: section id='about'. 12-col grid. Left col-5: secondary headshot (4:5 aspect, smaller than hero) plus 6-row facts dl (Based in, Markets served, Years executing, Clients supported, Interviews facilitated, LinkedIn community).
- About copy uses 'I am' / first person. Three paragraphs. No invented credentials.
- Faq.tsx: section id='faq'. 12-col grid. Left col-4 intro, right col-8 accordion.
- Accordion uses native <details><summary> with [&::-webkit-details-marker]:hidden to remove default triangle. Plus icon rotates 45deg via group-open utility.
- 6 FAQ items locked: white-label, capacity, industries, reporting, pricing, confidentiality.
- FAQ_ITEMS exported for JSON-LD reuse in app/page.tsx.
- Third JSON-LD schema added: FAQPage with all 6 questions and answers (eligible for Google FAQ rich result).
- Both components Server Components, zero JS.

## 2026-05-09 — P10 CONTACT locked
- Contact.tsx: Server Component, section id='contact'. Eyebrow 'Get in Touch', H2 'Book a partner call. Or pick the channel you prefer.'
- 12-col grid: left col-5 = direct channels, right col-7 = form.
- Primary CTA card (navy bg) links to https://calendar.app.google/MQvjkqsFfvneTyi48 (Google Calendar 30-min appointment).
- Secondary channel cards: WhatsApp wa.me/923087823424, mailto:zeecareers07@gmail.com, LinkedIn /in/zain-a-385a0b236.
- ContactForm.tsx: ONLY Client Component in the project. Uses useState for status (idle/submitting/success/error).
- Form posts to Web3Forms api.web3forms.com/submit with placeholder access key WEB3FORMS_ACCESS_KEY.
- Form fields: name, email, role (Career Coach / Coaching Agency / Job Seeker / Other), message. Honeypot 'botcheck' anti-spam.
- LOCKED: Contact section URL, calendar link, WhatsApp number, and email are LOCKED. Any change requires explicit prompt.
- Anchor #contact now resolves from: Hero primary CTA, Nav 'Book a Partner Call' button, Process closing CTA, Faq intro mentions, Footer site links.
- USER ACTION REQUIRED before form goes live: replace WEB3FORMS_ACCESS_KEY string in components/sections/ContactForm.tsx with key from web3forms.com (use email zeecareers07@gmail.com to register).

## 2026-05-09 — P11 JOB_SEEKERS_PAGE locked
- Route: /job-seekers. Standalone page with own metadata, canonical URL, and OG tags.
- New components (Server only): JobSeekerHero, JobSeekerHow (combines problem + how-it-works in one file), JobSeekerCta.
- Page reuses TrustBar and Proof from homepage to avoid duplication.
- Page render order: JobSeekerHero -> TrustBar -> JobSeekerHow (problem + how-it-works) -> Proof -> JobSeekerCta.
- JSON-LD Service schema with audience='Mid-level to executive professionals'.
- Calendar, WhatsApp, Email constants reused with locked values.
- 'Are you a career coach instead?' link at bottom routes back to /.
- LOCKED: route URL, h1 'Stop applying. Start getting interviews.', and the 4-step how-it-works structure.
- New SEO infrastructure: app/sitemap.ts (dynamic) and app/robots.ts (dynamic). Both routes registered with priority 1.0 and 0.8.
- Sitemap available at /sitemap.xml, robots at /robots.txt (Next.js auto-generates).

## 2026-05-09 — P12 SEO_SOCIAL locked
- Dynamic OG image: app/opengraph-image.tsx generates 1200x630 PNG at /opengraph-image. Edge runtime. White bg, navy Z badge, eyebrow 'REVERSE RECRUITING PARTNER', H1 'Reverse Recruiter for Career Coaches', stats line, footer with URL.
- Twitter image re-exports OG image (identical 1200x630).
- Dynamic favicon: app/icon.tsx generates 64x64 navy 'Z' monogram. Edge runtime.
- /job-seekers OG image: separate version with H1 'Stop applying. Start getting interviews.' Same visual system.
- /job-seekers Twitter image re-exports its OG.
- app/layout.tsx metadata block expanded: applicationName, authors with LinkedIn URL, creator, publisher, 12 SEO keywords, canonical URL, robots directives (index/follow + Google rich result hints), full OpenGraph block, Twitter card 'summary_large_image', category 'Career Services', formatDetection disabled.
- viewport export added with themeColor #0A1F44 (mobile browser chrome will tint navy).
- LOCKED: OG image visual system, all metadata fields, theme color #0A1F44.

## 2026-05-09 — P13 PERFORMANCE_A11Y locked
- next.config.mjs: reactStrictMode true, poweredByHeader false, compress true.
- Image optimization: AVIF/WebP formats, 30-day minimumCacheTTL, deviceSizes 640-1920, imageSizes 16-384.
- Security headers added: X-Content-Type-Options nosniff, X-Frame-Options SAMEORIGIN, Referrer-Policy strict-origin-when-cross-origin, Permissions-Policy (camera/mic/geolocation disabled), HSTS max-age 2 years with preload.
- a11y: skip-to-content link as first child of <body>. Visible only on focus. Routes to #main-content.
- a11y: <main> on both pages now has id='main-content' tabIndex={-1} so skip link can focus it programmatically.
- a11y: focus-visible utility added globally on a, button, summary, input, select, textarea. 2px navy outline with 3px offset.
- a11y: scroll-margin-top 5rem on anchor targets so sticky nav (h-16) does not cover headings when jumping via #anchors.
- a11y: prefers-reduced-motion media query nukes animations and transitions for users who request it.
- LOCKED: security headers list and skip-link pattern. Do not remove without explicit prompt.

## 2026-05-09 — P14 VERCEL_DEPLOY locked
- Git initialized and initial commit created.
- Vercel zero-cost deployment pipeline instructions provided to user.
- Project v1 is complete and ready for production.

## 2026-05-09 — Module Resolution Fix
- Renamed/Verified ContactForm.tsx casing for Linux compatibility.
- Verified import statement in Contact.tsx matches filename casing exactly.
