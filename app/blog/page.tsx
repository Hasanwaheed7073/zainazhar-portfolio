import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/shared/Container';
import { POSTS } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Reverse Recruiting Blog',
  description:
    'Plain guides on reverse recruiting and the done-for-you job search. What it is, what it costs, and how to tell a real service from a volume mill.',
  alternates: { canonical: 'https://zainazhar.vercel.app/blog' },
  openGraph: {
    title: 'Reverse Recruiting Blog',
    description: 'Plain guides on reverse recruiting and the done-for-you job search.',
    url: 'https://zainazhar.vercel.app/blog',
    type: 'website',
  },
};

export default function BlogIndexPage() {
  const posts = [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="bg-surface">
        <Container as="div" className="section-pad">
          <div className="max-w-prose-wide">
            <p className="text-small font-medium uppercase tracking-[0.14em] text-ink-muted">Blog</p>
            <h1 className="mt-5 text-display font-semibold text-navy">Reverse recruiting, explained</h1>
            <p className="mt-6 text-lead text-ink-muted">
              Plain guides on the done-for-you job search. No hype. Just how it works and how to choose well.
            </p>
            <ul className="mt-12 space-y-10">
              {posts.map((post) => (
                <li key={post.slug} className="border-t border-line pt-6">
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <h2 className="text-h2 font-semibold text-navy">{post.h1}</h2>
                    <p className="mt-3 text-body text-ink-muted">{post.description}</p>
                    <span className="mt-3 inline-block text-small font-medium text-navy">Read</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </main>
  );
}
