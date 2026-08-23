import type { Metadata } from 'next';
import { Container } from '@/components/shared/Container';
import { PageBlocks } from '@/components/shared/PageBlocks';
import { ContactForm } from '@/components/sections/ContactForm';
import { CONTACT_PAGE } from '@/lib/pages';
import { BUSINESS } from '@/lib/agent';
import { SITE_URL, PERSON_ID, BUSINESS_ID, SAME_AS, BUSINESS_ADDRESS } from '@/lib/schema';

const url = `${SITE_URL}/contact`;

export const metadata: Metadata = {
  title: CONTACT_PAGE.title,
  description: CONTACT_PAGE.description,
  alternates: { canonical: url },
  openGraph: { title: CONTACT_PAGE.title, description: CONTACT_PAGE.description, url, type: 'website' },
  twitter: { card: 'summary_large_image', title: CONTACT_PAGE.title, description: CONTACT_PAGE.description },
};

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${url}#page`,
  url,
  name: CONTACT_PAGE.title,
  description: CONTACT_PAGE.description,
  mainEntity: {
    '@type': 'ProfessionalService',
    '@id': BUSINESS_ID,
    name: 'Zain Azhar — Reverse Recruiting',
    url: SITE_URL,
    email: BUSINESS.email,
    telephone: BUSINESS.whatsapp,
    address: BUSINESS_ADDRESS,
    sameAs: SAME_AS,
    founder: { '@id': PERSON_ID },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: BUSINESS.email,
      telephone: BUSINESS.whatsapp,
      url: BUSINESS.bookingUrl,
      availableLanguage: 'en',
      areaServed: ['US', 'GB', 'CA'],
    },
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: url },
  ],
};

export default function ContactPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <section className="bg-surface">
        <Container as="div" className="section-pad">
          <div className="max-w-prose-wide">
            <p className="text-small font-medium uppercase tracking-[0.14em] text-ink-muted">
              {CONTACT_PAGE.eyebrow}
            </p>
            <h1 className="mt-5 text-display font-semibold text-navy">{CONTACT_PAGE.h1}</h1>
            <p className="mt-6 text-lead text-ink-muted">{CONTACT_PAGE.dek}</p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <a
                href={BUSINESS.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block hover-lift rounded-card border border-navy bg-navy p-8 text-surface transition-opacity duration-apple hover:opacity-90"
              >
                <p className="text-small font-medium uppercase tracking-[0.14em] text-navy-300">
                  Recommended
                </p>
                <p className="mt-3 text-h2 font-semibold">Book a 30-minute partner call</p>
                <p className="mt-3 text-body text-navy-100">
                  Pick a slot directly. No back and forth, no scheduling email chains.
                </p>
                <p className="mt-6 inline-flex items-center gap-2 text-small font-medium">
                  Open calendar
                  <span aria-hidden="true">→</span>
                </p>
              </a>

              <PageBlocks blocks={CONTACT_PAGE.body} />
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-card border border-line bg-surface-alt p-8 md:p-10 lg:sticky lg:top-28">
                <p className="text-small font-medium uppercase tracking-[0.14em] text-ink-muted">
                  Send a message
                </p>
                <p className="mt-3 text-h3 font-semibold text-navy">
                  Prefer a written intro? Send the details here.
                </p>
                <p className="mt-2 text-body text-ink-muted">
                  I respond within one working day. United States, United Kingdom, and Canada time
                  zones supported.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
