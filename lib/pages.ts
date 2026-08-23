// Prose content for the trust-anchor pages (/about, /contact, /privacy) and the
// agent resource index (/developers).
//
// Stored as structured blocks rather than JSX so the HTML page and the
// markdown representation render from one source and cannot drift. Every page
// here clears 500 characters of body content, which is the bar AI agents apply
// when checking whether a business is real.

export type Block =
  | { type: 'h2'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'dl'; items: { term: string; def: string }[] };

export type StaticPage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  dek: string;
  eyebrow: string;
  body: Block[];
};

export const ABOUT_PAGE: StaticPage = {
  slug: 'about',
  title: 'About Zain Azhar',
  description:
    'Zain Azhar is a Reverse Recruiter and Job Search Operator based in Albany, New York. 5+ years running job search execution, 300+ clients supported, 3,400+ interviews facilitated across the US, UK, and Canada.',
  h1: 'About Zain Azhar',
  dek: 'Reverse Recruiter and Job Search Operator. I run the execution layer of the job search so coaches can coach and candidates can interview.',
  eyebrow: 'About',
  body: [
    {
      type: 'p',
      text: 'I am Zain Azhar, a Reverse Recruiter and Job Search Operator based in Albany, New York. For more than five years I have run end-to-end job search execution for clients across the United States, the United Kingdom, and Canada. That work covers 300+ clients supported and 3,400+ interviews facilitated, across healthcare and clinical research, technology and engineering, product, marketing, customer success and revenue functions, and executive search.',
    },
    {
      type: 'h2',
      text: 'What I actually do',
    },
    {
      type: 'p',
      text: 'The work is execution, not advice. Every working day I source roles matched to a client target, write and submit applications built to pass automated screening, reach out directly to recruiters and hiring managers, follow up on a schedule so nothing slips, and keep a live tracker that reflects reality. Coaches and clients see applications sent, replies received, interviews scheduled, and offers in motion — in a document they can open at any time, not a summary I write about myself.',
    },
    {
      type: 'h2',
      text: 'What I do not do',
    },
    {
      type: 'p',
      text: 'I do not coach. I do not sell positioning, mindset, or interview preparation, and I will tell you plainly when a career coach is what you actually need. I do not guarantee job offers, because no honest service controls a hiring decision. I do not run automated mass-application tools; the applications are written by a person who read the job description, which is the entire reason they get replies.',
    },
    {
      type: 'h2',
      text: 'Who I work with',
    },
    {
      type: 'p',
      text: 'Two groups. Career coaches and coaching agencies who want a white-label execution partner running client searches behind their brand — their clients experience one team, and the coach stays the trusted voice. And individual professionals, typically mid-level through executive, who know the role they want but cannot run a consistent daily search around a full-time job.',
    },
    {
      type: 'h2',
      text: 'Why the proof is public',
    },
    {
      type: 'p',
      text: 'Testimonials are easy to write and impossible to verify. Live campaign trackers are not. The proof section of this site links real documents from active and completed engagements so you can inspect the volume, the outreach, and the outcomes before paying anything. Identifying client details are managed under written confidentiality agreements, but the work itself is open for review.',
    },
    {
      type: 'h2',
      text: 'Track record',
    },
    {
      type: 'dl',
      items: [
        { term: 'Years running job search execution', def: '5+' },
        { term: 'Clients supported', def: '300+' },
        { term: 'Interviews facilitated', def: '3,400+' },
        { term: 'Markets served', def: 'United States, United Kingdom, Canada' },
        { term: 'Based in', def: 'Albany, New York, United States' },
        { term: 'LinkedIn followers', def: '8,300+' },
      ],
    },
  ],
};

export const CONTACT_PAGE: StaticPage = {
  slug: 'contact',
  title: 'Contact Zain Azhar',
  description:
    'Contact Zain Azhar, Reverse Recruiter. Book a 30-minute partner call, send an email, message on WhatsApp, or connect on LinkedIn. Response within one working day.',
  h1: 'Contact Zain Azhar',
  dek: 'Four ways to start the conversation. The 30-minute call is the fastest path to a straight answer about fit.',
  eyebrow: 'Contact',
  body: [
    {
      type: 'p',
      text: 'Whether you are a career coach evaluating a white-label execution partner or a professional weighing a done-for-you job search, the first step is the same: a 30-minute call, no commitment, no pitch. I will tell you plainly whether this is a fit, and I will say so when it is not. Pricing is scoped on that call because the right structure depends on client volume and seniority mix, so there is no number to quote before we talk.',
    },
    {
      type: 'h2',
      text: 'How to reach me',
    },
    {
      type: 'dl',
      items: [
        { term: 'Book a 30-minute call', def: 'https://calendar.app.google/MQvjkqsFfvneTyi48' },
        { term: 'Email', def: 'zeecareers07@gmail.com' },
        { term: 'WhatsApp', def: '+92 308 7823424 — https://wa.me/923087823424' },
        { term: 'LinkedIn', def: 'https://www.linkedin.com/in/zainazhar/' },
        { term: 'Based in', def: 'Albany, New York, United States' },
        { term: 'Response time', def: 'Within one working day' },
        { term: 'Time zones covered', def: 'United States, United Kingdom, and Canada' },
      ],
    },
    {
      type: 'h2',
      text: 'What to include in your first message',
    },
    {
      type: 'p',
      text: 'The more specific you are, the more useful my first reply will be. If you are a coach, tell me roughly how many active clients you have, the seniority mix, and what your current execution bottleneck is. If you are a job seeker, tell me your target role and level, the markets you are open to, and how long you have been searching. That is enough for me to tell you whether the partnership makes sense before we spend a call on it.',
    },
    {
      type: 'h2',
      text: 'What happens next',
    },
    {
      type: 'p',
      text: 'I respond within one working day. If there is a fit, we book the call, scope the engagement model, and agree on what the first two weeks look like. If there is not a fit, I will say so and point you at what would actually help — often that is a career coach for positioning work, or simply more clarity on the target role before anyone starts executing against it.',
    },
  ],
};

export const PRIVACY_PAGE: StaticPage = {
  slug: 'privacy',
  title: 'Privacy Policy',
  description:
    'How zainazhar.vercel.app collects, uses, and protects your data. Covers the contact form, analytics, booking, hosting logs, third-party processors, retention, and your rights.',
  h1: 'Privacy policy',
  dek: 'What this site collects, who processes it, how long it is kept, and how to have it removed.',
  eyebrow: 'Privacy',
  body: [
    {
      type: 'p',
      text: 'This policy covers zainazhar.vercel.app and the reverse recruiting services operated by Zain Azhar from Albany, New York. It describes what data the site collects, which third parties process it, how long it is retained, and how to exercise your rights over it. It was last reviewed in August 2026.',
    },
    {
      type: 'h2',
      text: 'What this site collects',
    },
    {
      type: 'ul',
      items: [
        'Contact form submissions: the name, email address, role category, and message you type into the form on the contact page. Nothing else in the form is collected.',
        'Analytics data: Google Analytics 4 records page views, referring pages, approximate location derived from IP address, device and browser type, and on-page interactions. This is used to understand which pages are useful, not to identify you.',
        'Hosting logs: Vercel, which hosts this site, records standard server request logs including IP address, user agent, and requested URL.',
        'Booking data: if you schedule a call, Google Calendar collects the name, email address, and any notes you enter when booking.',
        'Direct messages: if you email or message on WhatsApp or LinkedIn, that conversation and whatever you choose to share in it.',
      ],
    },
    {
      type: 'h2',
      text: 'Third-party processors',
    },
    {
      type: 'p',
      text: 'Contact form submissions are delivered by Web3Forms, which receives the form contents and forwards them by email. Analytics are processed by Google Analytics 4. Call bookings are handled by Google Calendar. The site is hosted by Vercel. Messages sent over WhatsApp are processed by Meta, and messages on LinkedIn by Microsoft. Each of these providers processes data under its own privacy policy, and each may store data outside your country of residence.',
    },
    {
      type: 'h2',
      text: 'How the data is used',
    },
    {
      type: 'p',
      text: 'Contact and booking data is used to respond to your enquiry and, if we work together, to run the engagement. Analytics and hosting logs are used to maintain and improve the site. Your data is not sold, rented, or shared with advertisers, and it is not used to train machine learning models.',
    },
    {
      type: 'h2',
      text: 'Cookies',
    },
    {
      type: 'p',
      text: 'Google Analytics 4 sets first-party cookies to distinguish between sessions and returning visitors. No advertising or cross-site tracking cookies are set by this site. You can block cookies in your browser settings, or install the Google Analytics opt-out browser add-on, without losing access to any part of the site.',
    },
    {
      type: 'h2',
      text: 'Client campaign data',
    },
    {
      type: 'p',
      text: 'Data belonging to active reverse recruiting clients — resumes, target lists, application trackers, and correspondence — is handled separately from this website and under written confidentiality terms agreed at the start of each engagement. It sits in access-controlled documents, sharing is permission-based, and trackers can be restricted to coach-only visibility on request. The example trackers linked publicly on this site have identifying details managed under those agreements.',
    },
    {
      type: 'h2',
      text: 'Retention',
    },
    {
      type: 'p',
      text: 'Enquiries that do not become engagements are kept for up to 24 months so I can pick up a conversation if you come back, then deleted. Client engagement records are retained for the duration of the engagement and for a reasonable period afterwards for business and tax purposes. Analytics data is retained according to the retention period configured in Google Analytics. You can ask for earlier deletion at any time.',
    },
    {
      type: 'h2',
      text: 'Your rights',
    },
    {
      type: 'p',
      text: 'Depending on where you live — including under the UK GDPR and EU GDPR, and under California law — you may have the right to access the personal data held about you, to have it corrected or deleted, to object to or restrict how it is processed, and to receive a copy in a portable format. To exercise any of these rights, email zeecareers07@gmail.com with the request. I will respond within one working day and complete the request within 30 days. You will not be charged, and you will not be treated differently for asking.',
    },
    {
      type: 'h2',
      text: 'Children',
    },
    {
      type: 'p',
      text: 'This site and these services are intended for working professionals. They are not directed at children under 16, and I do not knowingly collect data from them.',
    },
    {
      type: 'h2',
      text: 'Changes and contact',
    },
    {
      type: 'p',
      text: 'If this policy changes materially, the revised version will be published on this page with an updated review date. For any privacy question, correction, or deletion request, email zeecareers07@gmail.com or write to Zain Azhar, Albany, New York, United States.',
    },
  ],
};

export const STATIC_PAGES: StaticPage[] = [ABOUT_PAGE, CONTACT_PAGE, PRIVACY_PAGE];
