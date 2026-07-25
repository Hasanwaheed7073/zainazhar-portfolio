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
      { type: 'p', text: 'If you want the daily execution handled by someone who has run it before, that is what I do. More than 5 years of work, 300 plus clients supported, and 3,400 plus interviews facilitated across the United States, United Kingdom, and Canada.' },
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
  {
    slug: 'why-am-i-not-getting-interviews',
    title: 'Why Am I Not Getting Interviews? 7 Reasons and Fixes',
    description:
      'Sending applications and hearing nothing? Here are seven common reasons your job search is stalling and what to do about each one.',
    h1: 'Why am I not getting interviews?',
    dek: 'You are qualified, you are applying, and the silence is deafening. Here is why that happens and how to fix each cause.',
    date: '2026-06-15',
    keywords: ['why am I not getting interviews', 'not getting interviews', 'job search no responses', 'no interview callbacks'],
    body: [
      { type: 'p', text: 'If you have sent dozens of applications and heard nothing back, the problem is rarely your qualifications. It is almost always a system problem. Something between your resume and the hiring manager is breaking, and most job seekers never find out what.' },
      { type: 'h2', text: '1. Your resume is not passing the ATS' },
      { type: 'p', text: 'Most companies use applicant tracking systems to screen resumes before a human sees them. If your resume uses graphics, tables, headers in the wrong places, or does not mirror the job description language, the system scores it low and filters it out. The fix is ATS-optimized formatting and keyword alignment with each role.' },
      { type: 'h2', text: '2. You are applying to too many roles that do not fit' },
      { type: 'p', text: 'Volume feels productive but scattershot applications get ignored. A tailored application to a role that fits your level and experience beats ten generic submissions. The fix is narrowing your target list and customizing each application.' },
      { type: 'h2', text: '3. No recruiter or hiring manager outreach' },
      { type: 'p', text: 'Applying through the portal and waiting is the lowest-conversion approach. Direct outreach to recruiters and hiring managers puts your name in front of decision-makers. Many roles fill before the posting is widely seen. The fix is adding outreach as a daily habit alongside applications.' },
      { type: 'h2', text: '4. Your follow-up game is missing' },
      { type: 'p', text: 'Most candidates apply and move on. A well-timed follow-up within a week shows initiative and keeps your application top of mind. The fix is a simple follow-up system for every application and every conversation.' },
      { type: 'h2', text: '5. Your search is inconsistent' },
      { type: 'p', text: 'Searching in bursts and then going quiet for a week kills momentum. Hiring managers fill roles on their timeline, not yours. The fix is daily, steady execution even when motivation dips.' },
      { type: 'h2', text: '6. Your positioning does not match the market' },
      { type: 'p', text: 'If your resume talks about what you did but not the results you delivered, it blends in. Hiring managers scan for impact. The fix is rewriting your bullets around outcomes, not responsibilities.' },
      { type: 'h2', text: '7. You are doing it all alone' },
      { type: 'p', text: 'A job search is a project. Projects go better with support. Whether that is a career coach for strategy or a reverse recruiter for daily execution, having someone carry part of the load makes the difference between stalling and landing interviews.' },
      { type: 'h2', text: 'What to do next' },
      { type: 'p', text: 'If the bottleneck is execution and time, a reverse recruiter handles the daily applications, outreach, and follow-ups while you focus on prep and decisions. That is exactly what I do.' },
    ],
    faq: [
      { q: 'How many applications should I send per week?', a: 'Quality matters more than quantity. Fifteen to twenty-five targeted applications per week with outreach tends to outperform fifty generic ones.' },
      { q: 'Should I follow up after applying?', a: 'Yes. A short, professional follow-up within five to seven days can surface your application. Most candidates never follow up, so it is a real edge.' },
    ],
    ctaHref: '/job-seekers',
    ctaLabel: 'Get a reverse recruiter to run your search',
  },
  {
    slug: 'how-to-beat-ats-systems',
    title: 'How to Beat ATS Systems: A Practical Guide',
    description:
      'ATS software filters most resumes before a human sees them. Here is how applicant tracking systems actually work and how to get your resume through.',
    h1: 'How to beat ATS systems',
    dek: 'Your resume is getting filtered by software before any human reads it. Here is what to do about it.',
    date: '2026-06-20',
    keywords: ['how to beat ATS', 'ATS resume tips', 'applicant tracking system', 'ATS optimization', 'resume ATS friendly'],
    body: [
      { type: 'p', text: 'Applicant tracking systems are the gatekeepers of modern hiring. Before a recruiter reads your resume, ATS software parses, scores, and ranks it. If it scores low, no human ever sees it. Understanding how these systems work is the first step to getting through.' },
      { type: 'h2', text: 'How ATS software actually works' },
      { type: 'p', text: 'An ATS reads your resume as plain text. It looks for keywords that match the job description, checks for standard section headers like Experience and Education, and tries to extract your job titles, dates, and skills. If the system cannot parse your formatting, it treats the content as missing.' },
      { type: 'h2', text: 'Formatting rules that matter' },
      { type: 'p', text: 'Use a clean, single-column layout. Avoid graphics, tables, text boxes, and multi-column designs. Use standard section headers. Save the file as a docx or PDF depending on what the portal requests. These are not style choices. They are compatibility requirements.' },
      { type: 'h2', text: 'Keyword alignment is not keyword stuffing' },
      { type: 'p', text: 'Read the job description carefully and mirror the exact terms it uses. If the posting says project management, use project management, not PM. If it says cross-functional collaboration, use that phrase. Natural placement in your bullet points is key. Stuffing keywords into white text or footers gets flagged and rejected.' },
      { type: 'h2', text: 'Tailor for each application' },
      { type: 'p', text: 'One generic resume sent everywhere is the single most common reason for silence. Each application should have a version of your resume that aligns with that specific role. This takes more time, which is exactly why most people do not do it, and exactly why it works.' },
      { type: 'h2', text: 'The outreach layer most people miss' },
      { type: 'p', text: 'Even a perfect ATS score means nothing if the recruiter has two hundred other qualified resumes. Direct outreach to the recruiter or hiring manager gives your application a second path into the process. Combine a strong application with a short, relevant message and your odds improve significantly.' },
      { type: 'h2', text: 'When to get help' },
      { type: 'p', text: 'If optimizing, tailoring, applying, and following up every day sounds like a second job, that is because it is. A reverse recruiter handles all of this as a managed service, so you get ATS-optimized applications, outreach, and follow-ups without carrying the daily load yourself.' },
    ],
    faq: [
      { q: 'Do all companies use ATS software?', a: 'Most mid-size and large companies do. Some smaller firms review applications manually, but it is safest to assume an ATS is in the loop and format accordingly.' },
      { q: 'Can I use the same resume for every application?', a: 'You can, but it will underperform. Tailoring each resume to the specific job description is the single highest-impact change most candidates can make.' },
    ],
    ctaHref: '/job-seekers',
    ctaLabel: 'Let a reverse recruiter handle ATS optimization for you',
  },
  {
    slug: 'reverse-recruiter-vs-career-coach',
    title: 'Reverse Recruiter vs Career Coach: What Is the Difference?',
    description:
      'Career coaches give you strategy. Reverse recruiters give you execution. Here is how the two roles differ and when you need each one.',
    h1: 'Reverse recruiter vs career coach',
    dek: 'They sound similar but they solve different problems. Here is a clear breakdown of what each one does, so you pick the right help for your situation.',
    date: '2026-07-01',
    keywords: ['reverse recruiter vs career coach', 'career coach vs reverse recruiter', 'difference between career coach and reverse recruiter', 'do I need a career coach or reverse recruiter'],
    body: [
      { type: 'p', text: 'Career coaches and reverse recruiters both help with job searches, but they sit on opposite ends of the work. Confusing them leads to frustration, because you end up paying for the wrong thing.' },
      { type: 'h2', text: 'What a career coach does' },
      { type: 'p', text: 'A career coach works on positioning, mindset, interview prep, and strategy. They help you figure out what you want, how to talk about yourself, and how to show up in interviews. This is valuable work, especially if you are unclear on direction or need confidence in your story.' },
      { type: 'h2', text: 'What a reverse recruiter does' },
      { type: 'p', text: 'A reverse recruiter takes over the daily execution of your job search. They find roles, write and submit applications, reach out to recruiters and hiring managers, follow up, and track the pipeline. They do the work, not the strategy behind it.' },
      { type: 'h2', text: 'Strategy vs execution' },
      { type: 'p', text: 'Think of it this way. A coach gives you the game plan. A reverse recruiter runs the plays. You can have a perfect strategy and still not land interviews if nobody is running the search consistently. And you can have someone running a search all day, but if the positioning is off, the applications will not convert.' },
      { type: 'h2', text: 'When you need a coach' },
      { type: 'p', text: 'If you are unclear on what roles to target, your resume does not reflect your real value, or you need interview prep and confidence work, start with a coach. Get the strategy right first.' },
      { type: 'h2', text: 'When you need a reverse recruiter' },
      { type: 'p', text: 'If you know what you want but cannot keep up with the daily grind of applying, following up, and tracking, that is the reverse recruiter gap. Your strategy is fine. Your execution capacity is the bottleneck.' },
      { type: 'h2', text: 'When you need both' },
      { type: 'p', text: 'The strongest combination is a coach handling strategy and prep while a reverse recruiter handles execution in the background. Many career coaches partner with reverse recruiters for exactly this reason. The coach stays in their zone, the clients get results, and nobody is doing work outside their strength.' },
      { type: 'h2', text: 'How this works in practice' },
      { type: 'p', text: 'I partner with career coaches as a white-label execution layer. Their clients get a managed search behind the scenes. The coach stays the trusted advisor. I stay invisible and run the pipeline. If that model sounds like a fit for your coaching practice, that is exactly what the partner call is for.' },
    ],
    faq: [
      { q: 'Can I hire a reverse recruiter without a career coach?', a: 'Yes. If your positioning is solid and the bottleneck is execution, a reverse recruiter alone can fill that gap.' },
      { q: 'Do reverse recruiters replace career coaches?', a: 'No. They handle different parts of the process. Strategy and execution are complementary, not interchangeable.' },
    ],
    ctaHref: '/#contact',
    ctaLabel: 'Explore the coaching partnership',
  },
  {
    slug: 'how-long-does-a-job-search-take',
    title: 'How Long Does a Job Search Take in 2026?',
    description:
      'The average job search takes three to six months. Here is what drives the timeline and how to shorten it with consistent execution.',
    h1: 'How long does a job search take?',
    dek: 'The honest answer is it depends. Here is what actually drives the timeline and what you can do to move faster.',
    date: '2026-07-05',
    keywords: ['how long does a job search take', 'average job search length', 'job search timeline 2026', 'how long to find a job'],
    body: [
      { type: 'p', text: 'In 2026, the average job search for mid-level to senior professionals runs three to six months. Some searches close in six weeks. Some drag past nine months. The difference almost always comes down to consistency, targeting, and volume of quality outreach.' },
      { type: 'h2', text: 'What makes a search fast' },
      { type: 'p', text: 'Searches that close quickly share three traits. The candidate has a clear target. Applications go out daily, tailored to each role. And outreach to recruiters and hiring managers happens alongside applications, not instead of them. Speed comes from running all three in parallel, every working day.' },
      { type: 'h2', text: 'What makes a search slow' },
      { type: 'p', text: 'The biggest drag is inconsistency. Searching hard for a week, then going quiet for two weeks, then starting again. Hiring managers fill roles on their schedule. If you are not in front of them at the right time, it does not matter how qualified you are. The second drag is targeting too broadly or too narrowly.' },
      { type: 'h2', text: 'Seniority matters' },
      { type: 'p', text: 'Junior roles tend to fill faster because there are more of them and the bar is lower. Senior and executive roles take longer because the pool is smaller, the stakes are higher, and discretion matters more. A VP search can easily run four to six months even with strong execution.' },
      { type: 'h2', text: 'Industry matters' },
      { type: 'p', text: 'Some industries move faster than others. Tech sales and marketing roles tend to cycle quickly. Healthcare and clinical research roles move through stricter processes. Engineering roles attract high competition. Knowing your industry timeline helps set realistic expectations.' },
      { type: 'h2', text: 'The consistency multiplier' },
      { type: 'p', text: 'A managed search with daily applications, outreach, and follow-ups compresses the timeline because it removes the start-stop pattern. When someone is running the search full-time, the pipeline stays full and opportunities do not slip through the cracks.' },
      { type: 'h2', text: 'Shortening your search' },
      { type: 'p', text: 'If time is the constraint, a reverse recruiter can run the daily execution while you focus on interviews and decisions. That is how searches that would take six months close in two or three instead.' },
    ],
    faq: [
      { q: 'What is the average time to get a job in 2026?', a: 'For mid-level to senior professionals, three to six months is typical. Consistent daily execution can significantly shorten that window.' },
      { q: 'Does hiring a reverse recruiter speed up the process?', a: 'It can. By keeping applications and outreach running every working day, you avoid the start-stop pattern that extends most searches.' },
    ],
    ctaHref: '/job-seekers',
    ctaLabel: 'Start a managed job search',
  },
  {
    slug: 'best-reverse-recruiter-services',
    title: 'Best Reverse Recruiter Services: How to Choose',
    description:
      'Not all reverse recruiting services are equal. Here is how to evaluate them, what red flags to watch for, and what to look for before you pay.',
    h1: 'How to choose the best reverse recruiter service',
    dek: 'The market is full of reverse recruiting services. Some deliver. Most do not. Here is how to tell the difference before you spend a dollar.',
    date: '2026-07-10',
    keywords: ['best reverse recruiter services', 'best reverse recruiting service', 'top reverse recruiters', 'how to choose a reverse recruiter', 'reverse recruiting reviews'],
    body: [
      { type: 'p', text: 'Reverse recruiting is growing fast, and so is the number of services claiming to run your search. Some are genuine execution partners. Others are volume mills that spray your resume everywhere and call it done. Knowing what to look for saves you time, money, and frustration.' },
      { type: 'h2', text: 'The first question: who does the work?' },
      { type: 'p', text: 'The most important question to ask any reverse recruiting service is who actually writes and sends your applications. If it is a bot or an overseas team running templates, the quality will reflect that. Real human execution, by someone who reads the job description and tailors each application, is the baseline for a service worth paying for.' },
      { type: 'h2', text: 'Look for live proof' },
      { type: 'p', text: 'Testimonials are easy to fake. Live campaign trackers are not. Ask to see real examples of past searches. A good service will show you the volume, the outreach, the replies, and the outcomes. If they cannot show proof, that is a signal.' },
      { type: 'h2', text: 'Red flags to watch for' },
      { type: 'p', text: 'Guaranteed job offers. Hundreds of applications per day. No transparency into what is being sent or to whom. One-size-fits-all pricing with no discovery call. These are signs of a volume operation, not a targeted service.' },
      { type: 'h2', text: 'What a good service includes' },
      { type: 'p', text: 'Targeted role sourcing. Tailored, ATS-optimized applications. Direct outreach to recruiters and hiring managers. Systematic follow-ups. A live tracker showing progress. Weekly reporting. And a real person you can talk to when strategy needs adjusting.' },
      { type: 'h2', text: 'Specialty matters' },
      { type: 'p', text: 'A reverse recruiter who has run campaigns in your industry will write better applications and know where to find the right roles. Ask about their experience in your field, whether that is healthcare, tech sales, product management, marketing, engineering, or executive search.' },
      { type: 'h2', text: 'How I work' },
      { type: 'p', text: 'I run every search with real human execution, tailored applications, direct outreach, and live trackers you can view at any time. More than 300 clients supported across healthcare, tech, marketing, product, and executive roles. If you want to see what a managed search looks like, the proof section on this site shows real campaigns.' },
    ],
    faq: [
      { q: 'How do I verify a reverse recruiter is legitimate?', a: 'Ask for live proof of past campaigns, not just testimonials. A real service can show you trackers with applications, replies, and outcomes.' },
      { q: 'What should a reverse recruiter cost?', a: 'It depends on the model and scope. Monthly retainers and per-search pricing are both common. The right question is not how much, but what you get for the fee.' },
    ],
    ctaHref: '/job-seekers',
    ctaLabel: 'See how my managed search works',
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
