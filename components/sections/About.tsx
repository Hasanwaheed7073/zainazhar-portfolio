import Image from 'next/image';
import { Container } from '@/components/shared/Container';

const FACTS = [
  { label: 'Based in', value: 'Albany, New York' },
  { label: 'Markets served', value: 'United States, United Kingdom, Canada' },
  { label: 'Years executing', value: '5+' },
  { label: 'Clients supported', value: '300+' },
  { label: 'Interviews facilitated', value: '400+' },
  { label: 'LinkedIn community', value: '8,300+ followers' },
] as const;

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-surface"
    >
      <Container as="div" className="section-pad">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: photo + facts */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-card border border-line bg-navy-50">
              <Image
                src="/zain-headshot.jpg"
                alt="Zain Azhar in business attire, Reverse Recruiter"
                fill
                sizes="(max-width: 1024px) 80vw, 35vw"
                className="object-cover"
              />
            </div>
            <dl className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-card border border-line bg-line max-w-sm">
              {FACTS.map((f) => (
                <div key={f.label} className="flex items-center justify-between gap-4 bg-surface px-5 py-3">
                  <dt className="text-small text-ink-muted">{f.label}</dt>
                  <dd className="text-small font-medium text-navy text-right">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: story */}
          <div className="lg:col-span-7">
            <p className="text-small font-medium uppercase tracking-[0.14em] text-ink-muted">
              About Zain
            </p>
            <h2 id="about-heading" className="mt-5 text-h1 font-semibold text-navy">
              I am the operator behind the coaching.
            </h2>
            <div className="mt-6 space-y-5 text-lead text-ink-muted">
              <p>
                I am Zain Azhar. Reverse Recruiter and Job Search Operator. For the past five plus years I have run end-to-end job search execution for clients across the United States, United Kingdom, and Canada.
              </p>
              <p>
                300 plus clients supported. 400 plus interviews facilitated. Specialties span healthcare, technology, marketing, product, and executive search. The work is unglamorous on purpose. Daily applications, recruiter outreach, follow-ups that do not slip, and a tracker that always reflects reality.
              </p>
              <p>
                I do not coach. I do not sell mindset. I show up every working day and execute, so the coaches I partner with can keep doing what they do best, while their clients land interviews and offers in the background.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
