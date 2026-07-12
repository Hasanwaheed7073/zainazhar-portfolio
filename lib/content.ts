// Content imports from content_source.md will be added in later prompts.
// This file is the single source of truth at runtime.
export const SITE = {
  name: 'Zain Azhar',
  title: 'Reverse Recruiter for Career Coaches',
  url: 'https://zainazhar.vercel.app',
} as const;

export type PostBlock = { type: 'h2' | 'p'; text: string };
export type PostFaq = { q: string; a: string };
export type Post = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  dek: string;
  date: string;
  keywords: string[];
  body: PostBlock[];
  faq: PostFaq[];
  ctaHref: string;
  ctaLabel: string;
};

export const POSTS: Post[] = [
  {
    slug: 'what-is-reverse-recruiting',
    title: 'What Is Reverse Recruiting? A Plain Guide',
    description:
      'Reverse recruiting is a done-for-you job search. Here is what a reverse recruiter does, who it is for, and how to tell a real service from a volume mill.',
    h1: 'What is reverse recruiting?',
    dek: 'The job search has turned into a second job. Reverse recruiting is the answer a growing number of professionals are reaching for. Here is what it actually means.',
    date: '2026-05-30',
    keywords: ['what is reverse recruiting', 'reverse recruiting', 'reverse recruiter', 'done-for-you job search'],
    body: [
      { type: 'p', text: 'Reverse recruiting flips the usual model. A normal recruiter works for an employer and fills the company roles. A reverse recruiter works for you. You hire them to run your job search, so the search gets done whether or not you have the time or energy for it.' },
      { type: 'h2', text: 'What a reverse recruiter actually does' },
      { type: 'p', text: 'The work is execution, not advice. A good reverse recruiter sources roles that fit your target, writes applications built to pass screening, reaches out to recruiters and hiring managers directly, follows up on a schedule, and tracks every step so you can see progress. You stay in control of decisions. They carry the daily load.' },
      { type: 'h2', text: 'Reverse recruiting vs career coaching' },
      { type: 'p', text: 'Coaching and reverse recruiting are not the same thing. Coaching gives you positioning, mindset, and interview prep. That part matters. But advice does not put your name in front of a hiring manager. Execution does. Reverse recruiting is the execution layer that turns a good strategy into real interviews.' },
      { type: 'h2', text: 'Who it is for' },
      { type: 'p', text: 'It fits people who are good at their job and short on time. Working professionals running a search on nights and weekends. Senior candidates who want a quiet, targeted move instead of a public scramble. Anyone sending applications into the void and hearing nothing back.' },
      { type: 'h2', text: 'How to tell a real service from a volume mill' },
      { type: 'p', text: 'Ask three questions. Does a real person write and send the applications, or is it a bot spraying the same resume everywhere. Can they show live proof of past campaigns and interviews. Is the outreach written like a human who understands the role. Volume without targeting is noise. Targeted execution is what gets replies.' },
      { type: 'h2', text: 'Where to start' },
      { type: 'p', text: 'If you want the daily execution handled by someone who has run it before, that is what I do. More than 5 years of work, 300 plus clients supported, and 400 plus interviews facilitated across the United States, United Kingdom, and Canada.' },
    ],
    faq: [
      { q: 'Is reverse recruiting the same as someone applying to jobs for me?', a: 'Applying is part of it. The bigger value is a managed pipeline: targeting, applications, outreach, follow-ups, and reporting run together as one process.' },
      { q: 'Does a reverse recruiter guarantee a job?', a: 'No honest service guarantees a job. What a good one gives you is consistent, targeted execution and a clear view of progress.' },
    ],
    ctaHref: '/job-seekers',
    ctaLabel: 'See how the done-for-you job search works',
  },
  {
    slug: 'how-much-does-a-reverse-recruiter-cost',
    title: 'How Much Does a Reverse Recruiter Cost?',
    description:
      'Reverse recruiting pricing varies by model and seniority. Here are the common pricing structures, what drives the cost, and how to judge value before you pay.',
    h1: 'How much does a reverse recruiter cost?',
    dek: 'Pricing for reverse recruiting is all over the map. Here is how the common models work, so you can compare offers without guessing.',
    date: '2026-05-30',
    keywords: ['reverse recruiter cost', 'reverse recruiting pricing', 'how much does reverse recruiting cost', 'reverse recruiter'],
    body: [
      { type: 'p', text: 'There is no single price for reverse recruiting. What you pay depends on the model, your seniority, and how much of the work is done by a real person versus a tool. Knowing the structures helps you compare offers on the same terms.' },
      { type: 'h2', text: 'The common pricing models' },
      { type: 'p', text: 'Most services use one of three structures. A monthly retainer, where you pay a flat fee for a set volume of applications and outreach each month. A pay as you go credit model, where you buy blocks of applications and use them when you want. Or a success based fee, where part of the cost is tied to landing an offer. Some services mix a retainer with a smaller success fee.' },
      { type: 'h2', text: 'Rough market ranges' },
      { type: 'p', text: 'As a general guide in 2026, monthly retainers commonly run from a few hundred dollars to roughly two thousand dollars, depending on volume and how tailored the work is. Senior and executive packages cost more and can reach five figures, since the outreach is more targeted and the stakes are higher. Pure volume services that spray applications sit at the low end, but low cost and low targeting tend to go together.' },
      { type: 'h2', text: 'What actually drives the price' },
      { type: 'p', text: 'Three things move the number. Human effort, since real people writing tailored applications and outreach costs more than a bot. Targeting, since narrow, well researched outreach takes more time than mass applying. And seniority, since executive searches need more care and discretion. Pay attention to what you get for the fee, not just the fee.' },
      { type: 'h2', text: 'How to judge value before you pay' },
      { type: 'p', text: 'Cheap is not the same as good value. Ask what is included, who does the work, and what proof of past results they can show. A higher fee with real human execution and live proof often beats a cheap plan that floods boards with the same resume. The goal is interviews, not application count.' },
      { type: 'h2', text: 'Getting a number for your search' },
      { type: 'p', text: 'The honest answer to what it will cost you is that it depends on your target roles and how much execution you want handled. If you tell me where you are aiming, I can walk you through what a fit looks like.' },
    ],
    faq: [
      { q: 'Is a more expensive reverse recruiter always better?', a: 'No. Price tracks human effort and targeting, not guaranteed results. Judge value by what is included and the proof of past campaigns.' },
      { q: 'Are success based fees worth it?', a: 'They can align incentives, but read the terms closely. Check what counts as an offer, the role level, and what happens if the market shifts.' },
    ],
    ctaHref: '/job-seekers',
    ctaLabel: 'Book a call to scope your search',
  },
  {
    slug: 'is-reverse-recruiting-worth-it',
    title: 'Is Reverse Recruiting Worth It?',
    description:
      'Is reverse recruiting worth the money? Here is when it pays off, when it does not, and the honest questions to ask before you hire a reverse recruiter.',
    h1: 'Is reverse recruiting worth it?',
    dek: 'It depends on your situation, not on the pitch. Here is an honest look at when reverse recruiting earns its fee and when it does not.',
    date: '2026-05-30',
    keywords: ['is reverse recruiting worth it', 'reverse recruiting worth it', 'reverse recruiter worth it', 'reverse recruiting'],
    body: [
      { type: 'p', text: 'Reverse recruiting is worth it when the bottleneck in your search is time and execution, not strategy. If you know what you want and simply cannot run a consistent search around your job and life, paying someone to carry that load can pay for itself in a faster offer. If your real problem is unclear targeting or a weak resume, fix that first, because execution on a bad target just gets you nowhere faster.' },
      { type: 'h2', text: 'When it tends to be worth it' },
      { type: 'p', text: 'It works best for busy professionals who are short on time, senior candidates who want a quiet and targeted move, and people who have been applying for months with little to show for it. In each case the issue is rarely effort. It is consistency, reach, and time. A good reverse recruiter supplies all three.' },
      { type: 'h2', text: 'When it is not worth it' },
      { type: 'p', text: 'Skip it if you are early in your career with a clear path and plenty of time to search. Skip it if you have not settled on what role you want, since no amount of execution fixes a moving target. And be careful with cheap volume services that mass apply, because a flood of generic applications can do more harm than good.' },
      { type: 'h2', text: 'How to think about the return' },
      { type: 'p', text: 'The math is simple. Compare the fee against the value of landing a good offer weeks or months sooner. For a mid to senior salary, even a single month saved often covers the cost. The bigger risk is not the fee. It is paying for volume that never turns into interviews.' },
      { type: 'h2', text: 'The questions that decide it' },
      { type: 'p', text: 'Before you hire anyone, ask who does the actual work, whether they can show live proof of past campaigns and interviews, how they target roles, and how they report progress. Clear answers point to a service worth paying for. Vague answers point to a volume mill.' },
      { type: 'h2', text: 'Deciding for your search' },
      { type: 'p', text: 'If your block is execution and time, this is exactly the gap I close. Tell me your target roles and I will be straight with you about whether it is a fit.' },
    ],
    faq: [
      { q: 'Will a reverse recruiter get me a job faster?', a: 'It can, by keeping applications and outreach consistent and targeted. No one can promise a job, but steady execution usually beats a stop and start search.' },
      { q: 'What is the biggest risk?', a: 'Paying for volume instead of targeting. A cheap service that sprays the same resume rarely produces interviews. Look for human execution and proof.' },
    ],
    ctaHref: '/job-seekers',
    ctaLabel: 'Tell me your target roles',
  },
];

export type NicheProof = { label: string; href: string };
export type Niche = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  dek: string;
  keywords: string[];
  intro: string[];
  roles: string[];
  proof: NicheProof[];
  faq: PostFaq[];
};

export const NICHES: Niche[] = [
  {
    slug: 'healthcare',
    title: 'Reverse Recruiter for Healthcare Jobs',
    description:
      'A done-for-you job search for healthcare and clinical research professionals. Targeted applications, recruiter outreach, and live proof across the United States.',
    h1: 'Reverse recruiter for healthcare and clinical research',
    dek: 'The healthcare and clinical research job search has its own rules. I run the execution end to end so you spend your time on interviews, not portals.',
    keywords: ['reverse recruiter healthcare', 'reverse recruiter for nurses', 'clinical research job search', 'reverse recruiter clinical trials'],
    intro: [
      'Healthcare and clinical research roles do not move like other jobs. Applications run through strict portals, titles vary by company, and the right opening is often filled before it is widely posted. A search that works needs targeting and consistency, not just volume.',
      'I run that search for you. I find the roles that match your target, write applications built to pass screening, reach out to recruiters and hiring managers, follow up on a schedule, and track every step so you can see progress.',
    ],
    roles: [
      'Clinical Trial Associate and Senior Clinical Trial Associate',
      'Clinical Research Project Manager',
      'Regulatory Affairs Associate and CRA',
      'Drug Safety and Regulatory Compliance',
      'Medical Writer and Senior Medical Writer',
      'Medical Science Liaison',
      'Registered Nurse, RN, and Clinical Appeal RN',
    ],
    proof: [
      { label: 'Regulatory Affairs Associate / CRA campaign', href: 'https://docs.google.com/spreadsheets/d/14sYLJJHSQFXmT03vozUanctwYT31aV-DtkJCJzRz_0U/edit' },
      { label: 'Clinical Trial Associate / Clinical Research PM campaign', href: 'https://docs.google.com/spreadsheets/d/1WOF-bF2rSD1utlVmH3O7kgUGMRkCfCTr9mT-4Z3NfnE/edit' },
      { label: 'Data Program / Drug Safety / Regulatory Compliance campaign', href: 'https://docs.google.com/spreadsheets/d/1pAxpGr2mGlDg6L8TqxTMXyan8VnNXMxjJ5gyv_S1ihU/edit' },
      { label: 'Medical Writer / CRA campaign', href: 'https://docs.google.com/spreadsheets/d/1h_-YqcX8iIIZPgJg-VZdVv0EPy4h6s4kR1icflNybKc/edit' },
      { label: 'Senior Medical Writer / Medical Science Liaison campaign', href: 'https://docs.google.com/spreadsheets/d/1a-41P8uoO1uigCvsqnwdMef10FqSiaX3vQik2swlpcU/edit' },
      { label: 'Senior Clinical Trial Associate campaign', href: 'https://docs.google.com/spreadsheets/d/1mMa1ZxA0AtXNSvHVKlT-KZmc9WyOt8mhYOlGNZ1X1C8/edit' },
      { label: 'Registered Nurse / RN / Clinical Appeal RN campaign', href: 'https://docs.google.com/spreadsheets/d/17R7Kypmk1y0s2LucTDQKmhlr2QGD2MnWVlluZvlZJ8c/edit' },
    ],
    faq: [
      { q: 'Do you understand healthcare and clinical research roles?', a: 'Yes. I have run campaigns across clinical trials, regulatory affairs, drug safety, medical writing, and nursing. The live trackers above show real searches.' },
      { q: 'Can you work with strict application portals?', a: 'Yes. Tailored applications through company portals and job boards are part of the daily execution.' },
    ],
  },
  {
    slug: 'tech-sales',
    title: 'Reverse Recruiter for Tech Sales Jobs',
    description:
      'A done-for-you job search for tech sales professionals. Targeted applications, recruiter outreach, and live proof for AE, CSM, SDR, and BDR roles in the US.',
    h1: 'Reverse recruiter for tech sales',
    dek: 'Sales roles reward speed and direct outreach. I run a targeted search so you reach hiring managers before the role fills.',
    keywords: ['reverse recruiter tech sales', 'reverse recruiter for sales', 'AE job search', 'CSM job search'],
    intro: [
      'Tech sales hiring moves fast and rewards direct outreach. The best roles get filled through referrals and recruiter networks, not just job boards. A search that works puts you in front of hiring managers early and keeps the pipeline full.',
      'I run that search for you. I find roles that match your target and quota profile, write applications that read like a strong rep, reach out to recruiters and hiring managers, follow up on a schedule, and track every step.',
    ],
    roles: [
      'Account Executive and Senior Account Executive',
      'Customer Success Manager',
      'Sales Development Representative (SDR)',
      'Business Development Representative (BDR)',
      'Growth and Lifecycle roles',
    ],
    proof: [
      { label: 'Account Executive / Customer Success Manager campaign', href: 'https://docs.google.com/spreadsheets/d/1kVz8R7k9o51C4NpQ3BAMO_SqWcstvate/edit' },
      { label: 'Account Executive / Customer Success Manager campaign (2)', href: 'https://docs.google.com/spreadsheets/d/1wWfiL5F7PJleGVZKDr5sIjvoU0VqLRZc/edit' },
      { label: 'Content / Growth / SDR / BDR Marketing campaign', href: 'https://docs.google.com/spreadsheets/d/1oEakdwg5qLQZtel-AhV6nwNlnlLRLqYk/edit' },
      { label: 'Product / Growth / Lifecycle Marketing campaign', href: 'https://docs.google.com/spreadsheets/d/1K7LfyJ4N-sF9YrWhN3sFukG1GcNCD8cf/edit' },
    ],
    faq: [
      { q: 'Do you know how tech sales hiring works?', a: 'Yes. I have run AE, CSM, SDR, and BDR campaigns. The live trackers above show real searches.' },
      { q: 'Can you reach hiring managers directly?', a: 'Yes. Direct outreach to recruiters and hiring managers is part of the daily execution, not an afterthought.' },
    ],
  },
  {
    slug: 'product-management',
    title: 'Reverse Recruiter for Product Managers',
    description:
      'A done-for-you job search for product managers. Targeted applications, recruiter outreach, and live proof for PM and program roles across the US.',
    h1: 'Reverse recruiter for product managers',
    dek: 'Product roles are competitive and specific. I run a targeted search so your applications land in front of the right teams.',
    keywords: ['reverse recruiter product manager', 'product manager job search', 'PM job search service', 'reverse recruiter for PMs'],
    intro: [
      'Product roles draw heavy competition and reward precise positioning. Titles shift across companies, and the same resume rarely fits every team. A search that works needs tight targeting and steady outreach, not mass applying.',
      'I run that search for you. I find roles that match your scope and seniority, write applications that show product impact, reach out to recruiters and hiring managers, follow up on a schedule, and track every step.',
    ],
    roles: [
      'Product Manager and Senior Product Manager',
      'Project Manager and Program Manager',
      'Project and Program Director',
      'Growth and Lifecycle Product roles',
    ],
    proof: [
      { label: 'Product Management campaign', href: 'https://docs.google.com/spreadsheets/d/1NWpfT7ql2di8gUTBn_Bh2tT_CXxepO2y/edit' },
      { label: 'Project Manager / Program Manager campaign', href: 'https://docs.google.com/spreadsheets/d/1QeHBDb-do-i58LliRyakwIwGkVm89pIE/edit' },
      { label: 'Project / Program Director campaign', href: 'https://docs.google.com/spreadsheets/d/1oiZNm6kWIrV_zoPoFkSoaltqbj68Fqdb/edit' },
      { label: 'Product / Growth / Lifecycle Marketing campaign', href: 'https://docs.google.com/spreadsheets/d/1T-TVzQm5zm6irdeAI7u7Sqpv4_3qJRlS/edit' },
    ],
    faq: [
      { q: 'Do you understand product roles?', a: 'Yes. I have run Product Manager, Program Manager, and Director campaigns. The live trackers above show real searches.' },
      { q: 'How do you handle title variation across companies?', a: 'I target by scope and seniority, not just title, so the search covers the roles that actually fit.' },
    ],
  },
  {
    slug: 'marketing-growth',
    title: 'Reverse Recruiter for Marketing & Growth Jobs',
    description:
      'A done-for-you job search for marketing and growth professionals. Targeted applications, recruiter outreach, and live proof for content, lifecycle, and growth roles.',
    h1: 'Reverse recruiter for marketing and growth',
    dek: 'Marketing and growth roles reward positioning and speed. I run a targeted search so your applications reach the right teams before the role closes.',
    keywords: ['reverse recruiter marketing', 'reverse recruiter for growth roles', 'marketing job search service', 'content marketing job search', 'lifecycle marketing reverse recruiter'],
    intro: [
      'Marketing and growth hiring is competitive and title-fragmented. The same scope shows up as Content Marketing Manager at one company and Growth Lead at another. A search that works needs someone who understands the landscape and targets by scope, not just keywords.',
      'I run that search for you. I find roles that match your experience and impact level, write applications that show marketing results, reach out to recruiters and hiring managers, follow up on a schedule, and track every step so you can see progress.',
    ],
    roles: [
      'Content Marketing Manager and Senior Content Manager',
      'Growth Marketing Manager',
      'Product Marketing Manager',
      'Lifecycle and Retention Marketing',
      'Production Media and Content Operations',
      'SDR and BDR Marketing (demand generation)',
    ],
    proof: [
      { label: 'Content Manager / Production Media campaign', href: 'https://docs.google.com/spreadsheets/d/118XeUIw-1JhJf9SWFBHHj58-zcQ6Z6Xe/edit' },
      { label: 'Product / Growth / Lifecycle Marketing campaign', href: 'https://docs.google.com/spreadsheets/d/1K7LfyJ4N-sF9YrWhN3sFukG1GcNCD8cf/edit' },
      { label: 'Product / Growth / Lifecycle Marketing campaign (2)', href: 'https://docs.google.com/spreadsheets/d/1T-TVzQm5zm6irdeAI7u7Sqpv4_3qJRlS/edit' },
      { label: 'Content / Growth / SDR / BDR Marketing campaign', href: 'https://docs.google.com/spreadsheets/d/1oEakdwg5qLQZtel-AhV6nwNlnlLRLqYk/edit' },
    ],
    faq: [
      { q: 'Do you understand marketing and growth roles?', a: 'Yes. I have run campaigns across content marketing, growth, lifecycle, and demand generation. The live trackers above show real searches.' },
      { q: 'How do you handle the title fragmentation in marketing?', a: 'I target by scope and impact, not just title. A Growth Lead and a Lifecycle Marketing Manager can be the same role at different companies. I cover both.' },
      { q: 'Can you target both B2B and B2C marketing roles?', a: 'Yes. The outreach and applications are tailored to the company context. I adjust positioning based on whether the role is B2B SaaS, DTC, or agency-side.' },
    ],
  },
  {
    slug: 'executive',
    title: 'Reverse Recruiter for VP & Executive Roles',
    description:
      'A done-for-you job search for VP, director, and executive professionals. Targeted applications, discreet recruiter outreach, and live proof from real executive campaigns.',
    h1: 'Reverse recruiter for VP and executive roles',
    dek: 'Executive searches need discretion, precision, and senior-level positioning. I run a quiet, targeted search so you reach decision-makers without a public scramble.',
    keywords: ['reverse recruiter executive', 'reverse recruiter VP', 'executive job search service', 'VP job search', 'director job search reverse recruiter'],
    intro: [
      'Executive and VP roles do not get filled through job boards alone. The best moves happen through targeted outreach, warm introductions, and precise positioning. A public search at this level can do more harm than good.',
      'I run that search for you with discretion. I identify the right opportunities, craft executive-level outreach, connect with decision-makers and executive recruiters, and manage the pipeline so you stay focused on conversations that matter.',
    ],
    roles: [
      'Vice President of Analytics (Data, Business, AI)',
      'VP of Engineering and VP of Product',
      'Senior Director and Director-level roles',
      'Chief of Staff and senior operations leadership',
      'C-suite advisory and fractional executive search',
    ],
    proof: [
      { label: 'VP Analytics (Data / Business / AI) campaign', href: 'https://docs.google.com/spreadsheets/d/1V6Q1XOPJRVmo_ki2l9NSQ-ffrc_teT5_/edit' },
      { label: 'VP Analytics campaign (2)', href: 'https://docs.google.com/spreadsheets/d/1HAd6pIWebzSpu3dXHXlbQxxKbmmBMGcP/edit' },
    ],
    faq: [
      { q: 'Is the search discreet?', a: 'Yes. Executive searches are handled with full discretion. No public postings, no mass outreach. Every message is targeted and confidential.' },
      { q: 'Do you work with executive recruiters?', a: 'Yes. Part of the outreach is direct engagement with retained and contingency executive recruiters who cover your target level and industry.' },
      { q: 'What seniority levels do you cover?', a: 'Director, Senior Director, VP, SVP, and C-level. The live trackers above show real campaigns at the VP level.' },
    ],
  },
  {
    slug: 'software-engineering',
    title: 'Reverse Recruiter for Software Engineers',
    description:
      'A done-for-you job search for software engineers. Targeted applications, recruiter outreach, and live proof for backend, fullstack, and engineering roles across the US.',
    h1: 'Reverse recruiter for software engineers',
    dek: 'Engineering roles are competitive and recruiter-heavy. I run a targeted search that gets your profile in front of the right engineering managers and technical recruiters.',
    keywords: ['reverse recruiter software engineer', 'reverse recruiter for engineers', 'software engineer job search service', 'backend engineer job search', 'fullstack engineer reverse recruiter'],
    intro: [
      'Software engineering hiring is noisy. Hundreds of applicants per role, recruiter spam that misses your stack, and job descriptions that blur seniority levels. A search that works cuts through the noise with targeted applications and direct outreach to engineering managers.',
      'I run that search for you. I find roles that match your stack and seniority, write applications that highlight engineering impact, reach out to technical recruiters and hiring managers, follow up on a schedule, and track every step.',
    ],
    roles: [
      'Software Engineer and Senior Software Engineer',
      'Backend Engineer and Senior Backend Engineer',
      'Fullstack Engineer and Senior Fullstack Engineer',
      'Staff Engineer and Principal Engineer',
      'Engineering Manager (IC-to-management transitions)',
    ],
    proof: [
      { label: 'Software / Backend / Fullstack Engineer campaign', href: 'https://docs.google.com/spreadsheets/d/1DO2akEPmQDb_RxZJQYRyr5Js0B8M8usI/edit' },
    ],
    faq: [
      { q: 'Do you understand engineering roles and tech stacks?', a: 'Yes. I have run campaigns for backend, fullstack, and software engineering roles. The live tracker above shows a real search.' },
      { q: 'Can you tailor applications to specific tech stacks?', a: 'Yes. Applications are written to match the stack and tools listed in each job description. No generic resumes.' },
      { q: 'Do you reach out to technical recruiters?', a: 'Yes. Direct outreach to technical recruiters and engineering hiring managers is part of the daily execution, not an afterthought.' },
    ],
  },
];
