// RFC 9110 §12.5.1 Accept header parsing and proactive content negotiation.
//
// Used by middleware to decide whether a request wants HTML or markdown, per
// the acceptmarkdown.com convention. Kept dependency-free and pure so it runs
// unchanged in the Edge runtime and can be unit-tested directly.

export type MediaRange = {
  type: string;
  subtype: string;
  /** Quality value, 0..1. Defaults to 1 when absent. */
  q: number;
  /**
   * Higher wins ties: 3 for an exact `type/subtype`, 2 for a subtype wildcard,
   * 1 for a full wildcard.
   */
  specificity: number;
};

/**
 * Parse an Accept header into media ranges, most-preferred first.
 *
 * An absent or empty header yields a single full-wildcard range — RFC 9110: "A
 * request without any Accept header field implies that the user agent will
 * accept any media type in response."
 */
export function parseAccept(header: string | null | undefined): MediaRange[] {
  if (header == null || header.trim() === '') {
    return [{ type: '*', subtype: '*', q: 1, specificity: 1 }];
  }

  const ranges: MediaRange[] = [];

  for (const part of header.split(',')) {
    const segments = part.trim().split(';');
    const mediaType = segments[0]?.trim().toLowerCase();
    if (!mediaType) continue;

    const slash = mediaType.indexOf('/');
    if (slash === -1) continue;

    const type = mediaType.slice(0, slash);
    const subtype = mediaType.slice(slash + 1);
    if (!type || !subtype) continue;

    // Only parameters before the "q" parameter are media-type parameters; q and
    // anything after it are accept-params. We only need q itself.
    let q = 1;
    for (const segment of segments.slice(1)) {
      const eq = segment.indexOf('=');
      if (eq === -1) continue;
      const key = segment.slice(0, eq).trim().toLowerCase();
      if (key !== 'q') continue;
      const parsed = Number.parseFloat(segment.slice(eq + 1).trim());
      q = Number.isFinite(parsed) ? Math.min(Math.max(parsed, 0), 1) : 1;
      break;
    }

    const specificity = type === '*' ? 1 : subtype === '*' ? 2 : 3;
    ranges.push({ type, subtype, q, specificity });
  }

  if (ranges.length === 0) {
    return [{ type: '*', subtype: '*', q: 1, specificity: 1 }];
  }

  return ranges.sort((a, b) => b.q - a.q || b.specificity - a.specificity);
}

function matches(range: MediaRange, type: string, subtype: string): boolean {
  if (range.type === '*') return range.subtype === '*';
  if (range.type !== type) return false;
  return range.subtype === '*' || range.subtype === subtype;
}

/**
 * Score how acceptable `mediaType` is, given parsed ranges.
 *
 * Returns the q-value of the most specific matching range, or 0 when the client
 * has no matching range or explicitly rejected it with q=0.
 */
export function qualityFor(ranges: MediaRange[], mediaType: string): number {
  const slash = mediaType.indexOf('/');
  const type = mediaType.slice(0, slash);
  const subtype = mediaType.slice(slash + 1);

  let best: MediaRange | null = null;
  for (const range of ranges) {
    if (!matches(range, type, subtype)) continue;
    // Ranges are pre-sorted by q then specificity, but an explicit q=0 on a more
    // specific range must still beat a broad q=1 wildcard, so compare on
    // specificity first and let the first match at that level win.
    if (best === null || range.specificity > best.specificity) best = range;
  }

  return best === null ? 0 : best.q;
}

/**
 * Pick the best representation to serve.
 *
 * `offered` is in server-preference order and is used to break exact q ties.
 * Returns null when the client accepts none of them — the caller should 406.
 */
export function selectRepresentation(
  header: string | null | undefined,
  offered: readonly string[],
): string | null {
  const ranges = parseAccept(header);

  let winner: string | null = null;
  let winningQ = 0;

  for (const candidate of offered) {
    const q = qualityFor(ranges, candidate);
    if (q > winningQ) {
      winningQ = q;
      winner = candidate;
    }
  }

  return winner;
}
