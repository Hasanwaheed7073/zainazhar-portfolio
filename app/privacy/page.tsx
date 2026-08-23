import type { Metadata } from 'next';
import { Container } from '@/components/shared/Container';
import { PageBlocks } from '@/components/shared/PageBlocks';
import { PRIVACY_PAGE } from '@/lib/pages';
import { SITE_URL, BUSINESS_ID } from '@/lib/schema';

const url = `${SITE_URL}/privacy`;

export const metadata: Metadata = {
  title: PRIVACY_PAGE.title,
  description: PRIVACY_PAGE.description,
  alternates: { canonical: url },
  openGraph: { title: PRIVACY_PAGE.title, description: PRIVACY_PAGE.description, url, type: 'website' },
  twitter: { card: 'summary_large_image', title: PRIVACY_PAGE.title, description: PRIVACY_PAGE.description },
};

const privacyJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${url}#page`,
  url,
  name: PRIVACY_PAGE.title,
  description: PRIVACY_PAGE.description,
  inLanguage: 'en',
  dateModified: '2026-08-23',
  publisher: { '@id': BUSINESS_ID },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Privacy', item: url },
  ],
};

export default function PrivacyPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <section className="bg-surface">
        <Container as="div" className="section-pad">
          <div className="max-w-prose-wide">
            <p className="text-small font-medium uppercase tracking-[0.14em] text-ink-muted">
              {PRIVACY_PAGE.eyebrow}
            </p>
            <h1 className="mt-5 text-display font-semibold text-navy">{PRIVACY_PAGE.h1}</h1>
            <p className="mt-6 text-lead text-ink-muted">{PRIVACY_PAGE.dek}</p>

            <PageBlocks blocks={PRIVACY_PAGE.body} />
          </div>
        </Container>
      </section>
    </main>
  );
}
