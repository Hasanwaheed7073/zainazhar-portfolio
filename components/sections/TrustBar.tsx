import { Container } from '@/components/shared/Container';
import { CountUp } from '@/components/shared/CountUp';

export function TrustBar() {
  return (
    <section
      aria-label="Performance metrics"
      className="border-y border-line bg-surface-alt"
    >
      <Container as="div" className="py-10 md:py-12">
        <ul className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <li className="text-center md:text-left">
            <p className="text-h2 font-semibold tracking-tight text-navy">
              <CountUp end={300} suffix="+" />
            </p>
            <p className="mt-1 text-small text-ink-muted">Clients Supported</p>
          </li>
          <li className="text-center md:text-left">
            <p className="text-h2 font-semibold tracking-tight text-navy">
              <CountUp end={400} suffix="+" />
            </p>
            <p className="mt-1 text-small text-ink-muted">Interviews Facilitated</p>
          </li>
          <li className="text-center md:text-left">
            <p className="text-h2 font-semibold tracking-tight text-navy">
              <CountUp end={5} suffix="+" />
            </p>
            <p className="mt-1 text-small text-ink-muted">Years Executing</p>
          </li>
          <li className="text-center md:text-left">
            <p className="text-h2 font-semibold tracking-tight text-navy">US, UK, CA</p>
            <p className="mt-1 text-small text-ink-muted">Markets Served</p>
          </li>
        </ul>
      </Container>
    </section>
  );
}
