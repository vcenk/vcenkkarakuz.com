import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { buildGraph, buildOrganization, buildWebSite, buildWebPage, buildBreadcrumb, SITE } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'LLC State Guide Case Study | US LLC Formation Guides',
  description:
    'How LLC State Guide was built as a free 50-state resource for forming an LLC in the US — covering filing fees, requirements, and timelines without the agency upsell.',
  keywords: [
    'LLC State Guide case study',
    'LLC formation site',
    'US business directory case study',
    'state-by-state SEO',
    'business formation guides',
  ],
  alternates: { canonical: '/case-studies/llc-state-guide' },
  openGraph: {
    title: 'LLC State Guide Case Study | US LLC Formation Guides',
    description:
      'A free state-by-state resource for forming a US LLC, with filing fees, requirements, and timelines.',
    url: 'https://vcenkkarakuz.com/case-studies/llc-state-guide',
    type: 'article',
  },
};

const features = [
  'A dedicated guide for each of the 50 US states',
  'Up-to-date filing fees, processing times, and required forms',
  'Step-by-step workflow from name search to EIN',
  'Free — no upsell to formation services',
  'Structured data so each state guide ranks on its own',
  'Clear comparisons for entrepreneurs deciding where to form',
];

const schema = buildGraph(
  buildOrganization(),
  buildWebSite(),
  buildWebPage({
    id: `${SITE.url}/case-studies/llc-state-guide#webpage`,
    url: `${SITE.url}/case-studies/llc-state-guide`,
    name: 'LLC State Guide Case Study | US LLC Formation Guides',
    description: 'How LLC State Guide was built as a free 50-state resource for forming an LLC in the US — covering filing fees, requirements, and timelines without the agency upsell.',
    breadcrumbId: `${SITE.url}/case-studies/llc-state-guide#breadcrumb`,
    datePublished: '2025-01-01',
    dateModified: '2026-06-15',
  }),
  buildBreadcrumb(`${SITE.url}/case-studies/llc-state-guide#breadcrumb`, [
    { name: 'Home', item: `${SITE.url}/` },
    { name: 'Work', item: `${SITE.url}/#work` },
    { name: 'LLC State Guide', item: `${SITE.url}/case-studies/llc-state-guide` },
  ]),
  {
    '@type': 'WebSite',
    name: 'LLC State Guide',
    url: 'https://llcstateguide.com',
    inLanguage: 'en',
    author: { '@id': `${SITE.url}/#person` },
    about: 'Free guides for forming a limited liability company in any US state',
  },
  {
    '@type': 'Article',
    headline: 'LLC State Guide — US LLC Formation Resource Case Study',
    description: 'Case study of LLC State Guide, a 50-state LLC formation resource built by Cenk Karakuz.',
    author: { '@id': `${SITE.url}/#person` },
    publisher: { '@id': `${SITE.url}/#organization` },
    mainEntityOfPage: `${SITE.url}/case-studies/llc-state-guide`,
    datePublished: '2025-01-01',
    dateModified: '2026-06-15',
    image: `${SITE.url}/ck-og.svg`,
  },
);

export default function LLCStateGuideCaseStudyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Navigation />

      <main className="pt-28 pb-20 section-container">
        <span className="section-label">Case Study</span>
        <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6">LLC State Guide</h1>

        <p className="text-lg text-muted-foreground max-w-3xl mb-8">
          A free, no-upsell resource for forming a limited liability company in any of the 50 US states — with current filing fees, processing times, and step-by-step instructions. Built for entrepreneurs who want to file themselves instead of paying agencies hundreds of dollars to forward forms.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <a href="https://llcstateguide.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Visit Live Site (llcstateguide.com)
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a href="/services/web-development" className="btn-secondary">
            Build Similar Site
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card p-6">
            <div className="text-3xl font-display font-bold text-accent">50 states</div>
            <div className="text-sm text-muted-foreground mt-2">Full US coverage</div>
          </div>
          <div className="glass-card p-6">
            <div className="text-3xl font-display font-bold text-accent">Free</div>
            <div className="text-sm text-muted-foreground mt-2">No formation-service upsell</div>
          </div>
          <div className="glass-card p-6">
            <div className="text-3xl font-display font-bold text-accent">Live</div>
            <div className="text-sm text-muted-foreground mt-2">In production</div>
          </div>
        </div>

        <div className="glass-card p-8 space-y-8 mb-10">
          <section>
            <h2 className="text-2xl font-display font-bold mb-3">Problem</h2>
            <p className="text-muted-foreground">
              Forming an LLC requires state-specific knowledge, but the top results for &quot;form an LLC in [state]&quot; are mostly thin SEO funnels owned by formation services. They bury the actual filing process under affiliate links so users feel forced to pay for help they don&apos;t need.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-3">Approach</h2>
            <p className="text-muted-foreground mb-4">
              LLC State Guide gives one clean page per state with the actual answer: what it costs, what forms are needed, where to file, and how long it takes. No popups, no affiliate steering, no &quot;sign up for a free consultation&quot;. Just the information someone needs to file themselves.
            </p>
            <ul className="grid md:grid-cols-2 gap-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-3">Build</h2>
            <p className="text-muted-foreground">
              Each state is a structured data record rendered through a shared template, so updates to fees or requirements happen in one place and ripple across the site instantly. Static rendering means every state page loads fast and is independently indexable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-3">Strategy</h2>
            <p className="text-muted-foreground">
              The growth model is state-specific organic search — &quot;how to form an LLC in Texas&quot;, &quot;Wyoming LLC fees&quot;, &quot;Delaware vs Nevada LLC&quot;. Fifty self-contained pages give the site fifty parallel SEO surfaces, all targeting concrete, high-intent queries from people about to file.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
