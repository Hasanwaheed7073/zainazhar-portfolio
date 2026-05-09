import { Container } from '@/components/shared/Container';

const STATS = [
  { value: '300+', label: 'Clients Supported' },
  { value: '400+', label: 'Interviews Facilitated' },
  { value: '5+', label: 'Years Executing' },
  { value: 'US, UK, CA', label: 'Markets Served' },
] as const;

export function TrustBar() {
  return (
    <section
      aria-label="Performance metrics"
      className="border-y border-line bg-surface-alt"
    >
      <Container as="div" className="py-10 md:py-12">
        <ul className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((s) => (
            <li key={s.label} className="text-center md:text-left">
              <p className="text-h2 font-semibold tracking-tight text-navy">
                {s.value}
              </p>
              <p className="mt-1 text-small text-ink-muted">{s.label}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
