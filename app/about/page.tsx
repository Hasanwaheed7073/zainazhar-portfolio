import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/shared/Container';
import { PageBlocks } from '@/components/shared/PageBlocks';
import { ABOUT_PAGE } from '@/lib/pages';
import { SITE_URL, PERSON_ID, SAME_AS, BUSINESS_ADDRESS, AREA_SERVED } from '@/lib/schema';

const url = `${SITE_URL}/about`;

export const metadata: Metadata = {
  title: ABOUT_PAGE.title,
  description: ABOUT_PAGE.description,
  alternates: { canonical: url },
  openGraph: { title: ABOUT_PAGE.title, description: ABOUT_PAGE.description, url, type: 'profile' },
  twitter: { card: 'summary_large_image', title: ABOUT_PAGE.title, description: ABOUT_PAGE.description },
};

const profileJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${url}#page`,
  url,
  name: ABOUT_PAGE.title,
  description: ABOUT_PAGE.description,
  mainEntity: {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: 'Zain Azhar',
    jobTitle: 'Reverse Recruiter for Career Coaches',
    url: SITE_URL,
    image: `${SITE_URL}/zain-headshot.jpg`,
    sameAs: SAME_AS,
    address: BUSINESS_ADDRESS,
    areaServed: AREA_SERVED,
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'About', item: url },
  ],
};

export default function AboutPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <section className="bg-surface">
        <Container as="div" className="section-pad">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-8">
              <p className="text-small font-medium uppercase tracking-[0.14em] text-ink-muted">
                {ABOUT_PAGE.eyebrow}
              </p>
              <h1 className="mt-5 text-display font-semibold text-navy">{ABOUT_PAGE.h1}</h1>
              <p className="mt-6 max-w-prose-wide text-lead text-ink-muted">{ABOUT_PAGE.dek}</p>

              <PageBlocks blocks={ABOUT_PAGE.body} />

              <div className="mt-12 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <Link href="/contact" className="btn-primary">
                  Book a partner call
                </Link>
                <Link href="/#proof" className="btn-secondary">
                  See live proof
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-card border border-line bg-navy-50 lg:sticky lg:top-28">
                <Image
                  src="/zain-headshot.jpg"
                  alt="Zain Azhar in business attire, Reverse Recruiter"
                  fill
                  sizes="(max-width: 1024px) 80vw, 30vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
