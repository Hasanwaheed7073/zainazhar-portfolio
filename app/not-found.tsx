import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/shared/Container';
import { POSTS, NICHES } from '@/lib/content';
import { SITE_URL } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Page not found',
  description:
    'That page does not exist on zainazhar.vercel.app. Use the site map below, or fetch /llms.txt for a machine-readable index of every page.',
  robots: { index: false, follow: true },
};

const MAIN_PAGES = [
  { href: '/', label: 'Home', note: 'Reverse recruiting for career coaches' },
  { href: '/job-seekers', label: 'For job seekers', note: 'Done-for-you managed job search' },
  { href: '/reverse-recruiter', label: 'Reverse recruiter by field', note: 'Specialty pages by industry' },
  { href: '/blog', label: 'Blog', note: 'Guides on reverse recruiting and job search' },
  { href: '/about', label: 'About', note: 'Background, track record, and what this service does not do' },
  { href: '/contact', label: 'Contact', note: 'Booking link, email, WhatsApp, LinkedIn' },
  { href: '/privacy', label: 'Privacy', note: 'Data collected, processors, retention, your rights' },
];

// Machine-readable recovery paths. Agents that land on a 404 need somewhere to
// go next; naming these explicitly is what turns a dead end into a redirect.
const AGENT_RESOURCES = [
  { href: '/llms.txt', label: '/llms.txt', note: 'Site index with when-to-use guidance' },
  { href: '/llms-full.txt', label: '/llms-full.txt', note: 'Every page as one markdown document' },
  { href: '/sitemap.xml', label: '/sitemap.xml', note: 'All indexable URLs with lastmod' },
  { href: '/developers', label: '/developers', note: 'MCP server, content negotiation, structured data' },
];

export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="bg-surface">
        <Container as="div" className="section-pad">
          <div className="max-w-prose-wide">
            <p className="text-small font-medium uppercase tracking-[0.14em] text-ink-muted">
              404
            </p>
            <h1 className="mt-5 text-display font-semibold text-navy">Page not found</h1>
            <p className="mt-6 text-lead text-ink-muted">
              This path does not exist on {SITE_URL.replace('https://', '')}. Nothing was moved — the
              URL was never valid. Everything the site publishes is listed below.
            </p>

            <div className="mt-12">
              <h2 className="text-h2 font-semibold text-navy">Main pages</h2>
              <ul className="mt-6 space-y-3">
                {MAIN_PAGES.map((page) => (
                  <li key={page.href}>
                    <Link
                      href={page.href}
                      className="group flex flex-col gap-1 rounded-btn border border-line bg-surface px-5 py-4 transition-opacity duration-apple hover:opacity-80 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                    >
                      <span className="text-body font-medium text-navy">{page.label}</span>
                      <span className="text-small text-ink-muted">{page.note}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <h2 className="text-h2 font-semibold text-navy">Specialty pages</h2>
              <ul className="mt-4 space-y-2 text-body text-ink-muted">
                {NICHES.map((niche) => (
                  <li key={niche.slug}>
                    <Link
                      href={`/reverse-recruiter/${niche.slug}`}
                      className="underline underline-offset-4 hover:text-navy transition-opacity duration-apple"
                    >
                      {niche.h1}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <h2 className="text-h2 font-semibold text-navy">Articles</h2>
              <ul className="mt-4 space-y-2 text-body text-ink-muted">
                {POSTS.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="underline underline-offset-4 hover:text-navy transition-opacity duration-apple"
                    >
                      {post.h1}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 rounded-card border border-line bg-surface-alt p-6 md:p-8">
              <h2 className="text-h3 font-semibold text-navy">For AI agents and crawlers</h2>
              <p className="mt-3 text-body text-ink-muted">
                This response is a real HTTP 404. Request any URL on this site with{' '}
                <code className="font-mono text-small">Accept: text/markdown</code> to receive
                markdown instead of HTML — including this page.
              </p>
              <ul className="mt-5 space-y-2 text-body text-ink-muted">
                {AGENT_RESOURCES.map((resource) => (
                  <li key={resource.href}>
                    <a
                      href={resource.href}
                      className="font-mono text-small text-navy underline underline-offset-4 hover:opacity-80 transition-opacity duration-apple"
                    >
                      {resource.label}
                    </a>
                    <span className="ml-2 text-small">— {resource.note}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <Link href="/" className="btn-primary">
                Back to home
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
