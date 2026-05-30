# SEO LOG — Search Optimization Tracking

## Target Keywords (Priority Order)
1. reverse recruiter
2. reverse recruiter for career coaches
3. job search execution partner

## Secondary Keywords
- white label reverse recruiting
- career coach execution partner
- reverse recruiting USA
- reverse recruiting United Kingdom
- reverse recruiting Canada

## On-Page SEO Checklist (per page)
- [ ] Unique <title> 50-60 chars
- [ ] Meta description 140-160 chars
- [ ] Single H1 with primary keyword
- [ ] H2s with secondary keywords
- [ ] Image alt text descriptive, not stuffed
- [ ] Internal links between homepage and /job-seekers
- [ ] Open Graph + Twitter Card metadata
- [ ] JSON-LD Person + ProfessionalService schema
- [ ] sitemap.xml generated
- [ ] robots.txt allows all

## Tracking
(Log keyword ranking checks here once site is live.)

## 2026-05-09 — Homepage SEO foundation
- H1 contains exact-match primary keyword: 'Reverse Recruiter for Career Coaches'.
- H1 appears exactly once on homepage (verified).
- Sub-headline naturally embeds tertiary keyword: 'job search execution'.
- Hero image alt: 'Zain Azhar, Reverse Recruiter for career coaches'.
- JSON-LD Person schema: name, jobTitle, image, sameAs (LinkedIn), email, address (Albany NY), areaServed (US/UK/CA), knowsAbout array.
- JSON-LD ProfessionalService schema: name, description with 300+/400+ stats, areaServed, serviceType.
- Trust signals: numbers + geography in TrustBar reinforce E-E-A-T.
- next/image priority on hero LCP element.

## 2026-05-09 — Services H2 shipped
- H2 contains keyword phrases: 'backend pillars', 'coaching strategy', 'hires'.
- Pillar titles include searchable terms: 'Opportunity sourcing', 'ATS-optimized', 'Recruiter and hiring manager outreach', 'Pipeline management', 'Performance tracking and reporting'.
- Anchor #services now resolves from Nav.tsx links, improving internal link signal.

## 2026-05-09 — Live Proof external link signals
- 21 outbound dofollow links to docs.google.com (consistent root domain authority signal).
- All links use descriptive anchor text containing role keywords (Account Executive, Product Manager, Clinical Trial Associate, Medical Writer, Registered Nurse, etc.) which strengthens topical relevance for adjacent searches.
- H2 'Real campaigns. Real interviews. Real offers.' reinforces credibility signals.
- Anchor #proof now resolves from Hero secondary CTA and Nav.

## 2026-05-09 — FAQ schema + identity signals
- FAQPage JSON-LD added with 6 Q/A pairs. Eligible for Google FAQ rich snippets in SERP. Massive CTR boost potential.
- About section reinforces Person schema with: location (Albany NY), markets (US/UK/CA), years (5+), volumes (300+, 400+).
- About H2 'I am the operator behind the coaching.' uses first person + keyword 'coaching'.
- FAQ questions are themselves keyword-rich: 'white-label partnership', 'pricing', 'confidentiality', 'industries', 'reporting'.
- Page now has 3 JSON-LD schemas: Person, ProfessionalService, FAQPage. Rich schema density boosts E-E-A-T.

## 2026-05-09 — Contact section + homepage SEO complete
- All anchor links across homepage now resolve: #services, #proof, #process, #about, #faq, #contact. Internal linking signal complete.
- 4 outbound conversion links: calendar.app.google, wa.me/923087823424, mailto:, linkedin.com/in/zain-a-385a0b236.
- mailto: link increases bounce rate metric (counted as conversion in GA4 if configured later).
- Homepage now contains: 1 H1, 8 H2s (Bottleneck, Pillars, Proof, Process, About, Faq, Contact, plus Hero), strong hierarchy.
- 3 JSON-LD schemas live: Person, ProfessionalService, FAQPage.

## 2026-05-09 — /job-seekers SEO + sitemap + robots
- Page H1: 'Stop applying. Start getting interviews.' Targets job-seeker intent without diluting homepage's coach keywords.
- Page metadata canonical: https://zainazhar.vercel.app/job-seekers
- Page-level Service JSON-LD added (separate from Person/ProfessionalService on homepage). Total project schemas now: 4 (Person, ProfessionalService, FAQPage, Service).
- app/sitemap.ts generates /sitemap.xml at build time. Includes / (priority 1.0) and /job-seekers (priority 0.8). Both with weekly changeFrequency.
- app/robots.ts generates /robots.txt allowing all user agents and pointing to sitemap.
- Internal link signal: /job-seekers links back to /#proof and /#contact, plus a body link to /.

## 2026-05-09 — Social and SEO metadata complete
- 12 keywords registered in metadata.keywords matching seo_log.md targets.
- Open Graph fully wired: type=website, locale=en_US, url, siteName, title, description, images (auto-attached via opengraph-image.tsx convention).
- Twitter Card: summary_large_image type, title, description, creator handle.
- robots.googleBot: max-snippet=-1, max-image-preview=large, max-video-preview=-1. Authorizes Google to show full snippets and large images in SERP.
- Canonical URLs set on both routes (homepage and /job-seekers each have their own).
- themeColor #0A1F44 applied to mobile browser chrome (Apple Safari, Android Chrome).
- Total SEO infrastructure now: 4 JSON-LD schemas + sitemap.xml + robots.txt + 2 sets of OG/Twitter images + complete metadata + canonical URLs.

## 2026-05-30 — /job-seekers retargeted to demand head terms (US-first)
- New primary targets: reverse recruiter, done-for-you job search, job application service (US).
- H1 now carries 'reverse recruiter'. Title and meta lead with head term plus US geo.
- Homepage coach keywords untouched. B2C acquisition added without reversing the coach conversion goal.

## 2026-05-30 — Blog launched, B2C top-of-funnel (Path B)
- New routes: /blog (index) and /blog/[slug] (static). First post targets 'what is reverse recruiting'.
- Each post ships Article + BreadcrumbList + FAQPage JSON-LD. FAQ eligible for SERP rich snippets.
- Internal link from every post to /job-seekers concentrates authority on the primary B2C money page.
- Blog and post URLs added to sitemap.xml. Footer now links to /blog for crawlability.

## 2026-05-30 — Blog post 2: reverse recruiter cost (commercial intent)
- Targets reverse recruiter cost and reverse recruiting pricing. High commercial intent, low competition.
- States market pricing models only, no Zain prices. Article + BreadcrumbList + FAQPage JSON-LD inherited from the post template.

## 2026-05-30 — Blog post 3: is reverse recruiting worth it (decision-stage)
- Targets is reverse recruiting worth it. Bottom-of-funnel commercial investigation, close to purchase.
- Two-sided framing builds trust with skeptical buyers. Article + BreadcrumbList + FAQPage JSON-LD inherited from post template.

## 2026-05-30 — Niche landing pages launched (healthcare first)
- New routes: /reverse-recruiter (hub) and /reverse-recruiter/[niche] (static). First page targets reverse recruiter healthcare, nurses, clinical research.
- Differentiated content per niche (role list plus live proof trackers) avoids thin or doorway pages.
- Service plus BreadcrumbList plus FAQPage JSON-LD per niche. Hub and niche URLs added to sitemap. Footer links to the hub.
- Internal links: niche pages CTA to /job-seekers; hub linked sitewide via footer.

## 2026-05-30 — Niche pages 2 and 3: tech sales and product management
- New static routes via NICHES: /reverse-recruiter/tech-sales and /reverse-recruiter/product-management.
- Each carries a distinct role list and live proof, keeping clear of thin-content risk. Service + BreadcrumbList + FAQPage JSON-LD per page. Hub now lists three fields.
