import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowUpRight } from 'lucide-react';
import { getSortedPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Blog | Notes on SaaS, Web, and Automation',
  description:
    'Practical notes on building SaaS products, marketing sites, and n8n automations — from a Vancouver-based independent developer.',
  keywords: [
    'SaaS development blog',
    'n8n automation tutorials',
    'Vancouver developer blog',
    'web development Canada',
  ],
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog | Cenk Karakuz',
    description:
      'Practical notes on SaaS, web development, and n8n automation from Vancouver.',
    url: 'https://vcenkkarakuz.com/blog',
    type: 'website',
  },
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Cenk Karakuz — Blog',
  url: 'https://vcenkkarakuz.com/blog',
  description: 'Notes on SaaS, web development, and n8n automation.',
  author: { '@type': 'Person', name: 'Cenk Karakuz', url: 'https://vcenkkarakuz.com' },
  inLanguage: 'en-CA',
};

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
            Notes from
            <br />
            <span className="gradient-text">building things.</span>
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
