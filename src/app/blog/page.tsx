import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowUpRight } from 'lucide-react';
import { getSortedPosts } from '@/lib/posts';
import { buildGraph, buildOrganization, buildWebSite, buildWebPage, buildBreadcrumb, SITE } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Blog — SaaS, Web & n8n Automation Notes | Cenk Karakuz',
  description:
    'Vancouver developer notes on building SaaS products, marketing sites, and n8n automation systems — what worked, what didn\'t, and what to do differently.',
  keywords: [
    'SaaS development blog',
    'n8n automation tutorials',
    'Vancouver developer blog',
    'web development Canada',
  ],
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog — SaaS, Web & n8n Automation Notes | Cenk Karakuz',
    description:
      'Vancouver developer notes on SaaS, web development, and n8n automation — what worked and what to do differently.',
    url: `${SITE.url}/blog`,
    type: 'website',
  },
};

const BREADCRUMB_ID = `${SITE.url}/blog#breadcrumb`;
const PAGE_ID = `${SITE.url}/blog#webpage`;

const blogSchema = buildGraph(
  buildOrganization(),
  buildWebSite(),
  buildWebPage({
    id: PAGE_ID,
    url: `${SITE.url}/blog`,
    name: 'Blog — SaaS, Web & n8n Automation Notes | Cenk Karakuz',
    description:
      'Vancouver developer notes on building SaaS products, marketing sites, and n8n automation systems — what worked, what didn\'t, and what to do differently.',
    breadcrumbId: BREADCRUMB_ID,
    datePublished: '2025-01-01',
    dateModified: '2026-06-15',
  }),
  buildBreadcrumb(BREADCRUMB_ID, [
    { name: 'Home', item: `${SITE.url}/` },
    { name: 'Blog', item: `${SITE.url}/blog` },
  ]),
  {
    '@type': 'Blog',
    name: 'Cenk Karakuz — Blog',
    url: `${SITE.url}/blog`,
    description: 'Notes on SaaS, web development, and n8n automation.',
    author: { '@id': `${SITE.url}/#person` },
    publisher: { '@id': `${SITE.url}/#organization` },
    inLanguage: 'en-CA',
  },
);

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export default function BlogIndexPage() {
  const posts = getSortedPosts();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <Navigation />

      <main className="pt-28 pb-20 section-container">
        <div className="max-w-3xl mb-16">
          <span className="section-label">Blog</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6">
            Notes on SaaS,
            <br />
            <span className="gradient-text">web & automation.</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Practical writing on SaaS, web development, and n8n automation — what worked, what didn&apos;t, and what I&apos;d do differently next time.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group glass-card-hover p-6 flex flex-col gap-4 h-full"
            >
              <div className="flex flex-wrap items-center gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground bg-secondary/40 rounded-full border border-border/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className="font-display text-xl font-bold leading-tight group-hover:text-accent transition-colors">
                {post.title}
              </h2>

              <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                {post.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border/40 text-xs text-muted-foreground">
                <span>{formatDate(post.date)}</span>
                <span className="inline-flex items-center gap-1.5 text-foreground group-hover:text-accent transition-colors">
                  {post.readTime}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
