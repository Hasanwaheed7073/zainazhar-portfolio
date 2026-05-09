import { Container } from '@/components/shared/Container';

const PROBLEMS = [
  {
    n: '01',
    title: 'You are doing the work twice',
    body: 'Researching companies. Tailoring resumes. Cold messaging recruiters. Tracking everything in a spreadsheet that goes stale by Wednesday. Job searching is a full-time job on top of your actual job.',
  },
  {
    n: '02',
    title: 'Your applications are invisible',
    body: 'Most resumes get filtered out by ATS systems before a human reads them. Generic templates and copy-paste applications guarantee silence, regardless of how qualified you are.',
  },
  {
    n: '03',
    title: 'Recruiters never see you',
    body: 'Hiring managers and recruiters are not browsing job boards looking for you. Without targeted outreach, even the best resume sits in a queue with 500 other candidates.',
  },
];

const HOW_IT_WORKS = [
  {
    n: '01',
    title: 'Strategy session',
    body: 'A 30-minute call to align on your target roles, industries, geography, and timeline. We define what a successful month looks like before we begin.',
  },
  {
    n: '02',
    title: 'ATS-optimized resume and LinkedIn',
    body: 'Your resume is rebuilt to mirror your target job description language. Your LinkedIn is positioned to appear in recruiter searches for the roles you actually want.',
  },
  {
    n: '03',
    title: 'Daily applications and outreach',
    body: 'Tailored applications submitted every working day. Direct messages to recruiters and hiring managers at companies on your target list. Follow-ups within 48 hours, every time.',
  },
  {
    n: '04',
    title: 'Live tracker, weekly review',
    body: 'Every action visible in a live tracker. Every Friday, a written review of progress, replies, interviews scheduled, and next-week priorities.',
  },
];

export function JobSeekerHow() {
  return (
    <>
      {/* The problem block */}
      <section
        aria-labelledby="js-problem-heading"
        className="border-t border-line bg-surface-alt"
      >
        <Container as="div" className="section-pad">
          <div className="max-w-prose-wide">
            <p className="text-small font-medium uppercase tracking-[0.14em] text-ink-muted">
              Why nothing is working
            </p>
            <h2 id="js-problem-heading" className="mt-5 text-h1 font-semibold text-navy">
              The job market does not reward effort. It rewards visibility.
            </h2>
            <p className="mt-6 text-lead text-ink-muted">
              I have watched highly qualified people apply to dozens of roles and hear nothing. And I have watched average candidates land multiple offers in a single week. The difference is rarely the resume. It is the system behind it.
            </p>
          </div>
          <ul className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {PROBLEMS.map((p) => (
              <li key={p.n} className="card-base">
                <p className="text-small font-mono font-medium text-navy-500">{p.n}</p>
                <p className="mt-4 text-h3 font-semibold text-navy">{p.title}</p>
                <p className="mt-3 text-body text-ink-muted">{p.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* How it works for individuals */}
      <section
        id="js-how"
        aria-labelledby="js-how-heading"
        className="bg-surface"
      >
        <Container as="div" className="section-pad">
          <div className="max-w-prose-wide">
            <p className="text-small font-medium uppercase tracking-[0.14em] text-ink-muted">
              How it works
            </p>
            <h2 id="js-how-heading" className="mt-5 text-h1 font-semibold text-navy">
              A real system, run for you, every working day.
            </h2>
            <p className="mt-6 text-lead text-ink-muted">
              You stay focused on prep, interviews, and final decisions. I run the daily execution that fills the pipeline.
            </p>
          </div>
          <ol className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-2">
            {HOW_IT_WORKS.map((step) => (
              <li key={step.n} className="bg-surface p-8 md:p-10">
                <p className="text-small font-mono font-medium text-navy-500">{step.n}</p>
                <p className="mt-5 text-h3 font-semibold text-navy">{step.title}</p>
                <p className="mt-3 text-body text-ink-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
