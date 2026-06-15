import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import type { PostMeta } from '@/lib/posts';
import { buildGraph, buildOrganization, buildWebSite, buildWebPage, SITE } from '@/lib/seo';

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export const buildPostSchema = (post: PostMeta) =>
  buildGraph(
    buildOrganization(),
    buildWebSite(),
    buildWebPage({
      id: `${SITE.url}/blog/${post.slug}#webpage`,
      url: `${SITE.url}/blog/${post.slug}`,
      name: post.title,
      description: post.description,
      breadcrumbId: `${SITE.url}/blog/${post.slug}#breadcrumb`,
      datePublished: post.date,
      dateModified: post.date,
    }),
    {
      '@type': 'Article',
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.date,
      author: { '@id': `${SITE.url}/#person` },
      publisher: { '@id': `${SITE.url}/#organization` },
      mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
      image: `${SITE.url}/ck-og.svg`,
      keywords: post.tags.join(', '),
      inLanguage: 'en-CA',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE.url}/blog/${post.slug}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE.url}/` },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.url}/blog` },
        { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE.url}/blog/${post.slug}` },
      ],
    },
  );

type PostLayoutProps = {
  post: PostMeta;
  children: React.ReactNode;
};

const PostLayout = ({ post, children }: PostLayoutProps) => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildPostSchema(post)) }}
      />

      <Navigation />

      <main className="pt-28 pb-20">
        <article className="section-container">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" /> All posts
            </Link>

            <div className="flex flex-wrap items-center gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground bg-secondary/40 rounded-full border border-border/40"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {post.description}
            </p>

            <div className="flex items-center gap-4 text-xs text-muted-foreground pb-8 mb-12 border-b border-border/40">
              <span>{formatDate(post.date)}</span>
              <span>·</span>
              <span>{post.readTime}</span>
              <span>·</span>
              <span>By Cenk Karakuz</span>
            </div>

            <div
              className="prose prose-invert prose-lg max-w-none
                prose-headings:font-display prose-headings:tracking-tight prose-headings:text-foreground
                prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
                prose-h3:text-xl md:prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-strong:text-foreground prose-strong:font-semibold
                prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                prose-ul:text-muted-foreground prose-ol:text-muted-foreground
                prose-li:my-1 prose-li:marker:text-accent
                prose-code:text-accent prose-code:bg-secondary/40 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-[''] prose-code:after:content-['']
                prose-blockquote:border-l-accent prose-blockquote:text-foreground/90 prose-blockquote:not-italic prose-blockquote:font-normal
                prose-hr:border-border/50"
            >
              {children}
            </div>

            {post.relatedService && (
              <div className="mt-16 pt-10 border-t border-border/40">
                <div className="glass-card p-8 text-center">
                  <p className="text-sm font-mono uppercase tracking-[0.2em] text-accent mb-3">
                    Related Service
                  </p>
                  <h3 className="font-display text-2xl font-bold mb-3">
                    Need help with this in practice?
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                    I offer {post.relatedService.name.toLowerCase()} as a service. Discovery call, fixed quote, ship in weeks.
                  </p>
                  <Link href={post.relatedService.href} className="btn-primary inline-flex">
                    Explore {post.relatedService.name}
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default PostLayout;
