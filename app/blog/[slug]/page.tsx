import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/shared/Container';
import { POSTS } from '@/lib/content';
import { SITE_URL, PERSON_ID, SAME_AS } from '@/lib/schema';

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
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
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      publishedTime: `${post.date}T00:00:00+00:00`,
      modifiedTime: `${post.updated ?? post.date}T00:00:00+00:00`,
      authors: ['Zain Azhar'],
      section: 'Career Services',
      tags: post.keywords,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
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
    dateModified: post.updated ?? post.date,
    author: {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: 'Zain Azhar',
      url: SITE_URL,
      sameAs: SAME_AS,
    },
    publisher: { '@type': 'Person', '@id': PERSON_ID, name: 'Zain Azhar', url: SITE_URL, sameAs: SAME_AS },
    image: 'https://zainazhar.vercel.app/opengraph-image',
    mainEntityOfPage: url,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'article p'],
    },
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
            <p className="mt-4 text-small text-ink-soft">
              By Zain Azhar · Published{' '}
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              {post.updated && post.updated !== post.date && (
                <>
                  {' '}· Updated <time dateTime={post.updated}>{formatDate(post.updated)}</time>
                </>
              )}
            </p>

            <div className="mt-10 space-y-6">
              {post.body.map((block, i) => {
                if (block.type === 'h2') {
                  return <h2 key={i} className="text-h2 font-semibold text-navy">{block.text}</h2>;
                }
                if (block.type === 'ul') {
                  return (
                    <ul key={i} className="list-disc space-y-2 pl-6 text-body text-ink-muted">
                      {block.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  );
                }
                if (block.type === 'table') {
                  return (
                    <div key={i} className="overflow-x-auto">
                      <table className="w-full border-collapse text-small text-ink-muted">
                        <caption className="mb-2 text-left text-small font-medium text-ink-soft">{block.caption}</caption>
                        <thead>
                          <tr>
                            {block.headers.map((h, j) => (
                              <th key={j} scope="col" className="border border-line bg-surface-alt px-4 py-3 text-left font-semibold text-navy">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {block.rows.map((row, j) => (
                            <tr key={j}>
                              {row.map((cell, k) => (
                                <td key={k} className="border border-line px-4 py-3 align-top">{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                }
                if (block.type === 'cite') {
                  return (
                    <p key={i} className="border-l-2 border-line pl-4 text-body text-ink-muted">
                      {block.text}{' '}
                      <a href={block.href} target="_blank" rel="noopener noreferrer" className="underline hover:text-navy transition-opacity duration-apple">
                        ({block.source})
                      </a>
                    </p>
                  );
                }
                return <p key={i} className="text-body text-ink-muted">{block.text}</p>;
              })}
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
