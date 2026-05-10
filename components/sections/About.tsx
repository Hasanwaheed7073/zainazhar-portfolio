import Image from 'next/image';
import { Container } from '@/components/shared/Container';
import { Reveal } from '@/components/shared/Reveal';

const INLINE_FACTS = [
  'Albany, New York',
  '5+ years executing',
  '300+ clients',
  '400+ interviews',
  'US, UK, Canada',
  '8,300+ LinkedIn followers',
] as const;

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-surface"
    >
      <Container as="div" className="section-pad">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left: photo */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-card border border-line bg-navy-50">
              <Image
                src="/zain-headshot.jpg"
                alt="Zain Azhar in business attire, Reverse Recruiter"
                fill
                sizes="(max-width: 1024px) 80vw, 35vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: story */}
          <Reveal className="lg:col-span-7">
            <p className="text-small font-medium uppercase tracking-[0.14em] text-ink-muted">
              About Zain
            </p>
            <h2 id="about-heading" className="mt-4 text-h1 font-semibold text-navy">
              I am the operator behind the coaching.
            </h2>

            {/* Inline pipe-separated stats — replaces 6-row dl from previous version */}
            <ul className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-small text-ink-muted">
              {INLINE_FACTS.map((fact, idx) => (
                <li key={fact} className="flex items-center gap-x-3">
                  <span className="font-medium text-navy">{fact}</span>
                  {idx < INLINE_FACTS.length - 1 && (
                    <span aria-hidden="true" className="text-line">|</span>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-5 text-lead text-ink-muted">
              <p>
                I am Zain Azhar. Reverse Recruiter and Job Search Operator. For the past five plus years I have run end-to-end job search execution for clients across the United States, United Kingdom, and Canada.
              </p>
              <p>
                Specialties span healthcare, technology, marketing, product, and executive search. The work is unglamorous on purpose. Daily applications, recruiter outreach, follow-ups that do not slip, and a tracker that always reflects reality.
              </p>
              <p>
                I do not coach. I do not sell mindset. I show up every working day and execute, so the coaches I partner with can keep doing what they do best, while their clients land interviews and offers in the background.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
