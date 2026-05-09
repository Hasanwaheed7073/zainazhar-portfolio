import { Container } from '@/components/shared/Container';

const PILLARS = [
  {
    n: '01',
    title: 'Opportunity sourcing',
    body: 'I source roles aligned to each client target, daily. Fresh postings, right level, right industry, right geography. No spray and pray.',
  },
  {
    n: '02',
    title: 'High-conversion applications',
    body: 'ATS-optimized resumes and tailored applications that mirror job description language. Submitted at volume without losing precision.',
  },
  {
    n: '03',
    title: 'Recruiter and hiring manager outreach',
    body: 'Direct, personalized messages to the people who actually decide. Not generic connection requests. Real conversations that bypass the queue.',
  },
  {
    n: '04',
    title: 'Follow-ups and pipeline management',
    body: 'Every application tracked. Every conversation followed up within 48 hours. Nothing falls through the cracks while the client focuses on prep.',
  },
  {
    n: '05',
    title: 'Performance tracking and reporting',
    body: 'Live trackers with applications, replies, interviews, and outcomes. Weekly reporting that gives coaches and clients real visibility.',
  },
] as const;

export function Pillars() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="border-t border-line bg-surface-alt"
    >
      <Container as="div" className="section-pad">
        <div className="max-w-prose-wide">
          <p className="text-small font-medium uppercase tracking-[0.14em] text-ink-muted">
            What I Execute
          </p>
          <h2 id="services-heading" className="mt-5 text-h1 font-semibold text-navy">
            Five backend pillars that turn coaching strategy into hires.
          </h2>
          <p className="mt-6 text-lead text-ink-muted">
            Your clients stay focused on positioning, prep, and decisions. I run the daily execution that fills the pipeline.
          </p>
        </div>

        <ol className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p) => (
            <li key={p.n} className="bg-surface p-8 md:p-10">
              <p className="text-small font-mono font-medium text-navy-500">{p.n}</p>
              <p className="mt-5 text-h3 font-semibold text-navy">{p.title}</p>
              <p className="mt-3 text-body text-ink-muted">{p.body}</p>
            </li>
          ))}
          {/* Filler cell to keep grid clean on lg (5 items, 3 cols, 6th cell becomes a CTA card) */}
          <li className="bg-surface p-8 md:p-10 flex flex-col justify-between">
            <div>
              <p className="text-small font-mono font-medium text-navy-500">06</p>
              <p className="mt-5 text-h3 font-semibold text-navy">White-label by default</p>
              <p className="mt-3 text-body text-ink-muted">All execution runs under your brand. Your clients see one team. You stay the trusted voice.</p>
            </div>
            <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-small font-medium text-navy hover:opacity-80 transition-opacity duration-apple">
              Discuss a partnership
              <span aria-hidden="true">→</span>
            </a>
          </li>
        </ol>
      </Container>
    </section>
  );
}
