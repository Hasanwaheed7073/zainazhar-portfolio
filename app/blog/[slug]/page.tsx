import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/shared/Container';
import { POSTS } from '@/lib/content';

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  const url = `https://zainazhar.vercel.app/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: { title: post.title, description: post.description, url, type: 'article' },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const url = `https://zainazhar.vercel.app/blog/${post.slug}`;
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.h1,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Person', name: 'Zain Azhar', url: 'https://zainazhar.vercel.app' },
    mainEntityOfPage: url,
  };
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Blog', item: 'https://zainazhar.vercel.app/blog' },
      { '@type': 'ListItem', position: 2, name: post.h1, item: url },
    ],
  };
  const faqJsonLd =
    post.faq.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: post.faq.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
          })),
        }
      : null;

  return (
    <main id="main-content" tabIndex={-1}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}
      <article className="bg-surface">
        <Container as="div" className="section-pad">
          <div className="max-w-prose-wide">
            <p className="text-small font-medium uppercase tracking-[0.14em] text-ink-muted">
              <Link href="/blog" className="hover:text-navy transition-opacity duration-apple">Blog</Link>
            </p>
            <h1 className="mt-5 text-display font-semibold text-navy">{post.h1}</h1>
            <p className="mt-6 text-lead text-ink-muted">{post.dek}</p>

            <div className="mt-10 space-y-6">
              {post.body.map((block, i) =>
                block.type === 'h2' ? (
                  <h2 key={i} className="text-h2 font-semibold text-navy">{block.text}</h2>
                ) : (
                  <p key={i} className="text-body text-ink-muted">{block.text}</p>
                )
              )}
            </div>

            <div className="mt-10">
              <Link href={post.ctaHref} className="btn-primary">{post.ctaLabel}</Link>
            </div>

            {post.faq.length > 0 && (
              <div className="mt-16">
                <h2 className="text-h2 font-semibold text-navy">FAQ</h2>
                <dl className="mt-6 space-y-6">
                  {post.faq.map((item, i) => (
                    <div key={i}>
                      <dt className="text-body font-semibold text-navy">{item.q}</dt>
                      <dd className="mt-2 text-body text-ink-muted">{item.a}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>
        </Container>
      </article>
    </main>
  );
}
