import type { Block } from '@/lib/pages';

/**
 * Renders the structured prose used by /about, /contact, and /privacy.
 *
 * The same `Block[]` feeds the markdown representation in lib/markdown.ts, so
 * the HTML and `Accept: text/markdown` views of these pages stay identical.
 */
export function PageBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="mt-10 space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'h2':
            return (
              <h2 key={i} className="pt-6 text-h2 font-semibold text-navy">
                {block.text}
              </h2>
            );
          case 'p':
            return (
              <p key={i} className="text-body text-ink-muted">
                {block.text}
              </p>
            );
          case 'ul':
            return (
              <ul key={i} className="space-y-3">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-body text-ink-muted">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-500"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            );
          case 'dl':
            return (
              <dl
                key={i}
                className="divide-y divide-line overflow-hidden rounded-card border border-line bg-surface-alt"
              >
                {block.items.map((item, j) => (
                  <div key={j} className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:gap-6">
                    <dt className="text-small font-medium text-navy sm:w-64 sm:shrink-0">
                      {item.term}
                    </dt>
                    <dd className="text-body text-ink-muted break-words">{item.def}</dd>
                  </div>
                ))}
              </dl>
            );
        }
      })}
    </div>
  );
}
