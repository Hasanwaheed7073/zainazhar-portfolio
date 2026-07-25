import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/shared/Container';
import { NICHES } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Reverse Recruiter by Field',
  description:
    'A done-for-you job search by field. See the roles I target and live proof from real campaigns across healthcare, sales, product, and more.',
  alternates: { canonical: 'https://zainazhar.vercel.app/reverse-recruiter' },
  openGraph: {
    title: 'Reverse Recruiter by Field',
    description: 'A done-for-you job search by field, with live proof from real campaigns.',
    url: 'https://zainazhar.vercel.app/reverse-recruiter',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reverse Recruiter by Field — Zain Azhar',
    description: 'A done-for-you job search by field. See roles targeted and live proof from real campaigns.',
  },
};

export default function ReverseRecruiterIndexPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="bg-surface">
        <Container as="div" className="section-pad">
          <div className="max-w-prose-wide">
            <p className="text-small font-medium uppercase tracking-[0.14em] text-ink-muted">By Field</p>
            <h1 className="mt-5 text-display font-semibold text-navy">Reverse recruiter by field</h1>
            <p className="mt-6 text-lead text-ink-muted">
              Pick your field. Each page shows the roles I target and live proof from real campaigns.
            </p>
            <ul className="mt-12 space-y-10">
              {NICHES.map((niche) => (
                <li key={niche.slug} className="border-t border-line pt-6">
                  <Link href={`/reverse-recruiter/${niche.slug}`} className="group block">
                    <h2 className="text-h2 font-semibold text-navy">{niche.h1}</h2>
                    <p className="mt-3 text-body text-ink-muted">{niche.description}</p>
                    <span className="mt-3 inline-block text-small font-medium text-navy">View</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </main>
  );
}
