import { Container } from '@/components/shared/Container';
import { Reveal } from '@/components/shared/Reveal';

const BROKEN_PATTERNS = [
  {
    title: 'Strategy without execution',
    body: 'Positioning, mindset work, interview prep. All solid. None of it sends an application or starts a recruiter conversation.',
  },
  {
    title: 'Clients stall after the call',
    body: 'They leave the session motivated. By Wednesday they are stuck on the same job board, sending the same resume, getting the same silence.',
  },
  {
    title: 'No pipeline, no proof',
    body: 'Without daily applications, targeted outreach, and follow-ups, there is nothing to report. Coaches end up defending the process instead of celebrating outcomes.',
  },
] as const;

export function Bottleneck() {
  return (
    <section
      id="bottleneck"
      aria-labelledby="bottleneck-heading"
      className="bg-surface"
    >
      <Container as="div" className="section-pad">
        <Reveal className="max-w-prose-wide">
          <p className="text-small font-medium uppercase tracking-[0.14em] text-ink-muted">
            The Bottleneck
          </p>
          <h2
            id="bottleneck-heading"
            className="mt-5 text-h1 font-semibold text-navy"
          >
            Advice is not the bottleneck. Execution is.
          </h2>
          <p className="mt-6 text-lead text-ink-muted">
            Most career coaching fails for one reason. Positioning, mindset work, interview prep, all solid. But if a client is not landing interviews, the market does not care how good the strategy sounded in a call.
          </p>
          <p className="mt-4 text-lead text-ink-muted">
            That is the gap I close.
          </p>
        </Reveal>

        <ul className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {BROKEN_PATTERNS.map((p) => (
            <li key={p.title} className="card-base">
              <p className="text-h3 font-semibold text-navy">{p.title}</p>
              <p className="mt-3 text-body text-ink-muted">{p.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
