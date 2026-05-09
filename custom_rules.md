# CUSTOM RULES — Project Coding Standards

## Framework
- Next.js 15 with App Router. NEVER use Pages Router.
- TypeScript strict mode. No 'any' unless justified in a comment.
- Server Components by default. 'use client' only when needed (forms, interactivity).

## Styling
- Tailwind CSS v3+. No inline style props except for dynamic values.
- shadcn/ui for components. Install components on demand, do not bulk-install.
- Custom design tokens live in tailwind.config.ts and globals.css. Do not hardcode colors elsewhere.

## File Structure
/app
  /page.tsx                  → Homepage
  /job-seekers/page.tsx      → Secondary page
  /layout.tsx                → Root layout
  /globals.css
/components
  /sections                  → Hero, Bottleneck, Pillars, Proof, Process, About, FAQ, Contact
  /ui                        → shadcn primitives
  /shared                    → Nav, Footer, Container
/lib
  /content.ts                → All static content imported from one place
  /seo.ts                    → Metadata helpers
/public
  /zain-headshot.jpg         → Hero photo

## SEO Mandatory
- Every page exports generateMetadata.
- H1 appears exactly once per page.
- All images use next/image with explicit width, height, alt.
- All external links use rel='noopener noreferrer'.
- JSON-LD Person + ProfessionalService schema on homepage.

## Performance Mandatory
- Lighthouse target: 95+ Performance, 100 SEO, 100 Accessibility, 100 Best Practices.
- No client-side JS for static sections.
- Fonts via next/font (no external Google Fonts link tags).

## Accessibility Mandatory
- All interactive elements keyboard reachable.
- Color contrast AA minimum on all text.
- Forms have visible labels.
