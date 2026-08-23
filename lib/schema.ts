// Shared JSON-LD entity identifiers and authority profiles.
// Every schema node across the site points back at these @id values so crawlers
// and AI agents resolve one person and one business, not several look-alikes.

export const SITE_URL = 'https://zainazhar.vercel.app';

export const PERSON_ID = `${SITE_URL}/#zain-azhar`;
export const BUSINESS_ID = `${SITE_URL}/#business`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/**
 * Authority profiles for entity disambiguation.
 *
 * Only verified, live URLs belong here — a dead or wrong profile hurts more than
 * a missing one. Scanners weight recognised authority domains (wikipedia.org,
 * wikidata.org, linkedin.com, github.com, crunchbase.com) above generic socials,
 * so add those first when they exist.
 *
 * Both twitter.com and x.com are listed on purpose: the handle is the same and
 * some parsers still only recognise the twitter.com hostname.
 */
export const SAME_AS = [
  'https://www.linkedin.com/in/zainazhar/',
  'https://x.com/zainazhar',
  'https://twitter.com/zainazhar',
];

export const AREA_SERVED = [
  { '@type': 'Country', name: 'United States', sameAs: 'https://en.wikipedia.org/wiki/United_States' },
  { '@type': 'Country', name: 'United Kingdom', sameAs: 'https://en.wikipedia.org/wiki/United_Kingdom' },
  { '@type': 'Country', name: 'Canada', sameAs: 'https://en.wikipedia.org/wiki/Canada' },
];

export const BUSINESS_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: 'Albany',
  addressLocality: 'Albany',
  addressRegion: 'NY',
  postalCode: '12207',
  addressCountry: 'US',
};

/** Reference to the Person node, for use as provider/author/publisher. */
export const PERSON_REF = { '@id': PERSON_ID };

/** Reference to the business node, for use as provider/publisher. */
export const BUSINESS_REF = { '@id': BUSINESS_ID };
