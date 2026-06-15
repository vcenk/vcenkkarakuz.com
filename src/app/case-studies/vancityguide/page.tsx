import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { buildGraph, buildOrganization, buildWebSite, buildWebPage, buildBreadcrumb, SITE } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'VanCityGuide Case Study | Hyperlocal Vancouver Guide',
  description:
    'How VanCityGuide.ca was built as a hyperlocal Vancouver guide for newcomers and visitors — covering neighborhoods, cost of living, services, and real local prices.',
  keywords: [
    'VanCityGuide case study',
    'Vancouver guide',
    'Vancouver newcomer guide',
    'hyperlocal content site',
    'Vancouver SEO',
    'Vancouver web project',
  ],
  alternates: { canonical: '/case-studies/vancityguide' },
  openGraph: {
    title: 'VanCityGuide Case Study | Hyperlocal Vancouver Guide',
    description:
      'A Vancouver-built content site for people relocating to or visiting Greater Vancouver.',
    url: 'https://vcenkkarakuz.com/case-studies/vancityguide',
    type: 'article',
  },
};

const features = [
  'Neighborhood breakdowns with real cost-of-living data',
  'Newcomer essentials: housing, transit, healthcare, taxes',
  'Local service prices for groceries, utilities, and lifestyle',
  'Events and seasonal activity guides',
  'Mobile-first reading experience for on-the-go research',
  'Schema markup for local content discoverability',
];

const schema = buildGraph(
  buildOrganization(),
  buildWebSite(),
  buildWebPage({
    id: `${SITE.url}/case-studies/vancityguide#webpage`,
    url: `${SITE.url}/case-studies/vancityguide`,
    name: 'VanCityGuide Case Study | Hyperlocal Vancouver Guide',
    description: 'How VanCityGuide.ca was built as a hyperlocal Vancouver guide for newcomers and visitors — covering neighborhoods, cost of living, services, and real local prices.',
    breadcrumbId: `${SITE.url}/case-studies/vancityguide#breadcrumb`,
    datePublished: '2025-01-01',
    dateModified: '2026-06-15',
  }),
  buildBreadcrumb(`${SITE.url}/case-studies/vancityguide#breadcrumb`, [
    { name: 'Home', item: `${SITE.url}/` },
    { name: 'Work', item: `${SITE.url}/#work` },
    { name: 'VanCityGuide', item: `${SITE.url}/case-studies/vancityguide` },
  ]),
  {
    '@type': 'WebSite',
    name: 'VanCityGuide',
    url: 'https://vancityguide.ca',
    inLanguage: 'en-CA',
    author: { '@id': `${SITE.url}/#person` },
    about: 'Hyperlocal guide for Greater Vancouver newcomers and visitors',
  },
  {
    '@type': 'Article',
    headline: 'VanCityGuide — Hyperlocal Vancouver Guide Case Study',
    description: 'Case study of VanCityGuide.ca, a hyperlocal Vancouver content site built by Cenk Karakuz.',
    author: { '@id': `${SITE.url}/#person` },
    publisher: { '@id': `${SITE.url}/#organization` },
    mainEntityOfPage: `${SITE.url}/case-studies/vancityguide`,
    datePublished: '2025-01-01',
    dateModified: '2026-06-15',
    image: `${SITE.url}/ck-og.svg`,
  },
);

export default function VanCityGuideCaseStudyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Navigation />

      <main className="pt-28 pb-20 section-container">
        <span className="section-label">Case Study</span>
        <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6">VanCityGuide</h1>

        <p className="text-lg text-muted-foreground max-w-3xl mb-8">
          A hyperlocal guide to Greater Vancouver for newcomers and visitors — built around real neighborhood data, cost-of-living research, and the everyday questions people actually ask before relocating.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <a href="https://vancityguide.ca/" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Visit Live Site (vancityguide.ca)
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a href="/services/web-development" className="btn-secondary">
            Build Similar Site
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card p-6">
            <div className="text-3xl font-display font-bold text-accent">Hyperlocal</div>
            <div className="text-sm text-muted-foreground mt-2">Greater Vancouver focus</div>
          </div>
          <div className="glass-card p-6">
            <div className="text-3xl font-display font-bold text-accent">SEO-first</div>
            <div className="text-sm text-muted-foreground mt-2">Long-tail keyword strategy</div>
          </div>
          <div className="glass-card p-6">
            <div className="text-3xl font-display font-bold text-accent">Live</div>
            <div className="text-sm text-muted-foreground mt-2">In production and growing</div>
          </div>
        </div>

        <div className="glass-card p-8 space-y-8 mb-10">
          <section>
            <h2 className="text-2xl font-display font-bold mb-3">Problem</h2>
            <p className="text-muted-foreground">
              People relocating to or visiting Vancouver have to stitch together info from outdated forums, generic relocation sites, and agency-owned lifestyle blogs. None of them give honest, current numbers for what living in a specific neighborhood actually costs or feels like.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-3">Approach</h2>
            <p className="text-muted-foreground mb-4">
              VanCityGuide is built as a content-first site organized around the questions newcomers actually search for, not generic city-marketing copy. Each page targets a specific intent — a neighborhood, a cost category, a newcomer task — and gives a direct answer.
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
              Next.js for static rendering and per-page SEO control, Tailwind for fast iteration, and a content pipeline that lets new neighborhood and service pages ship in minutes instead of hours. Designed for fast page loads on mobile, where most newcomer research happens.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-3">Strategy</h2>
            <p className="text-muted-foreground">
              The growth model is long-tail organic search — capturing very specific queries (&quot;cost of living Kitsilano vs Mount Pleasant&quot;, &quot;moving to Vancouver from Toronto checklist&quot;) where generic city sites don&apos;t compete. Each page is structured to answer one question well rather than chasing high-volume head terms.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
