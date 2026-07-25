import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/shared/Container';
import { NICHES } from '@/lib/content';

export function generateStaticParams() {
  return NICHES.map((niche) => ({ niche: niche.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ niche: string }> }): Promise<Metadata> {
  const { niche } = await params;
  const data = NICHES.find((n) => n.slug === niche);
  if (!data) return {};
  const url = `https://zainazhar.vercel.app/reverse-recruiter/${data.slug}`;
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    alternates: { canonical: url },
    openGraph: { title: data.title, description: data.description, url, type: 'website' },
    twitter: {
      card: 'summary_large_image',
      title: data.title,
      description: data.description,
    },
  };
}

export default async function NichePage({ params }: { params: Promise<{ niche: string }> }) {
  const { niche } = await params;
  const data = NICHES.find((n) => n.slug === niche);
  if (!data) notFound();

  const url = `https://zainazhar.vercel.app/reverse-recruiter/${data.slug}`;
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.h1,
    description: data.description,
    provider: { '@type': 'Person', name: 'Zain Azhar', url: 'https://zainazhar.vercel.app' },
    areaServed: ['United States', 'United Kingdom', 'Canada'],
    serviceType: 'Reverse Recruiting',
    url,
  };
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Reverse Recruiter by Field', item: 'https://zainazhar.vercel.app/reverse-recruiter' },
      { '@type': 'ListItem', position: 2, name: data.h1, item: url },
    ],
  };
  const faqJsonLd =
    data.faq.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: data.faq.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
          })),
        }
      : null;

  return (
    <main id="main-content" tabIndex={-1}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}
      <section className="bg-surface">
        <Container as="div" className="section-pad">
          <div className="max-w-prose-wide">
            <p className="text-small font-medium uppercase tracking-[0.14em] text-ink-muted">
              <Link href="/reverse-recruiter" className="hover:text-navy transition-opacity duration-apple">Reverse Recruiter by Field</Link>
            </p>
            <h1 className="mt-5 text-display font-semibold text-navy">{data.h1}</h1>
            <p className="mt-6 text-lead text-ink-muted">{data.dek}</p>

            <div className="mt-10 space-y-6">
              {data.intro.map((para, i) => (
                <p key={i} className="text-body text-ink-muted">{para}</p>
              ))}
            </div>

            <div className="mt-12">
              <h2 className="text-h2 font-semibold text-navy">Roles I target</h2>
              <ul className="mt-4 space-y-2 text-body text-ink-muted">
                {data.roles.map((role, i) => (
                  <li key={i}>{role}</li>
                ))}
              </ul>
            </div>

            {data.proof.length > 0 && (
              <div className="mt-12">
                <h2 className="text-h2 font-semibold text-navy">Live proof</h2>
                <ul className="mt-4 space-y-2 text-body text-ink-muted">
                  {data.proof.map((item, i) => (
                    <li key={i}>
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="underline hover:text-navy transition-opacity duration-apple">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-12">
              <Link href="/job-seekers" className="btn-primary">See how the done-for-you job search works</Link>
            </div>

            {data.faq.length > 0 && (
              <div className="mt-16">
                <h2 className="text-h2 font-semibold text-navy">FAQ</h2>
                <dl className="mt-6 space-y-6">
                  {data.faq.map((item, i) => (
                    <div key={i}>
                      <dt className="text-body font-semibold text-navy">{item.q}</dt>
                      <dd className="mt-2 text-body text-ink-muted">{item.a}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>
        </Container>
      </section>
    </main>
  );
}
