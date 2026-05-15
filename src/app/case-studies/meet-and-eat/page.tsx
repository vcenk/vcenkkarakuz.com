import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Meet and Eat Case Study | Vancouver Turkish Restaurant Website',
  description:
    'How I designed and built meetandeat.ca for a family-run Turkish restaurant in East Vancouver — a mobile-first site covering menu, ordering, catering, and reservations.',
  keywords: [
    'Meet and Eat case study',
    'Vancouver restaurant website',
    'Turkish restaurant Vancouver',
    'restaurant website design Vancouver',
    'East Vancouver web developer',
    'small business website case study',
  ],
  alternates: { canonical: '/case-studies/meet-and-eat' },
  openGraph: {
    title: 'Meet and Eat Case Study | Vancouver Turkish Restaurant Website',
    description:
      'A modern, mobile-first website for a family-run Turkish restaurant in East Vancouver.',
    url: 'https://vcenkkarakuz.com/case-studies/meet-and-eat',
    type: 'article',
  },
};

const features = [
  'Mobile-first menu browsing for on-the-go diners',
  'Clear calls to action for order, catering, and reservations',
  'Fast page loads optimized for restaurant search behavior',
  'Schema markup for local restaurant discoverability',
  'Photography-led design that conveys the food and atmosphere',
  'Accessible navigation that works for all customers',
];

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Meet and Eat',
    url: 'https://meetandeat.ca',
    inLanguage: 'en-CA',
    author: { '@type': 'Person', name: 'Cenk Karakuz', url: 'https://vcenkkarakuz.com' },
    about: 'Family-run halal Turkish restaurant in East Vancouver',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Meet and Eat — Vancouver Turkish Restaurant Website Case Study',
    description:
      'Case study of meetandeat.ca, a website built for a family-run Turkish restaurant in East Vancouver by Cenk Karakuz.',
    author: { '@type': 'Person', name: 'Cenk Karakuz', url: 'https://vcenkkarakuz.com' },
    publisher: { '@type': 'Person', name: 'Cenk Karakuz' },
    mainEntityOfPage: 'https://vcenkkarakuz.com/case-studies/meet-and-eat',
    image: 'https://vcenkkarakuz.com/ck-og.svg',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vcenkkarakuz.com/' },
      { '@type': 'ListItem', position: 2, name: 'Work', item: 'https://vcenkkarakuz.com/#work' },
      { '@type': 'ListItem', position: 3, name: 'Meet and Eat', item: 'https://vcenkkarakuz.com/case-studies/meet-and-eat' },
    ],
  },
];

export default function MeetAndEatCaseStudyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Navigation />

      <main className="pt-28 pb-20 section-container">
        <span className="section-label">Case Study · Client Work</span>
        <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6">Meet and Eat</h1>

        <p className="text-lg text-muted-foreground max-w-3xl mb-8">
          A website built for a family-run halal Turkish restaurant in East Vancouver — modern, mobile-first, and designed around the way people actually decide where to eat.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <a href="https://meetandeat.ca/" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Visit Live Site (meetandeat.ca)
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a href="/services/web-development" className="btn-secondary">
            Build Similar Site
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card p-6">
            <div className="text-3xl font-display font-bold text-accent">Vancouver</div>
            <div className="text-sm text-muted-foreground mt-2">East Hastings, BC</div>
          </div>
          <div className="glass-card p-6">
            <div className="text-3xl font-display font-bold text-accent">Mobile-first</div>
            <div className="text-sm text-muted-foreground mt-2">90%+ traffic on phones</div>
          </div>
          <div className="glass-card p-6">
            <div className="text-3xl font-display font-bold text-accent">Live</div>
            <div className="text-sm text-muted-foreground mt-2">In production</div>
          </div>
        </div>

        <div className="glass-card p-8 space-y-8 mb-10">
          <section>
            <h2 className="text-2xl font-display font-bold mb-3">Client</h2>
            <p className="text-muted-foreground">
              Meet and Eat is a family-run halal Turkish restaurant in East Vancouver, serving charcoal grills, stone-oven pides, fresh mezes, and Turkish desserts. They needed a web presence that matched the quality of the food and made it easy for new customers to discover them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-3">Problem</h2>
            <p className="text-muted-foreground">
              Most restaurant sites in this category fall into one of two traps: a stale template from a hosting company, or a Squarespace build that looks fine on desktop and falls apart on mobile. Neither helps when 90%+ of restaurant search happens on phones, often by people standing on the sidewalk deciding where to eat in the next 10 minutes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-3">Approach</h2>
            <p className="text-muted-foreground mb-4">
              The design started with mobile and worked outward. Every key action a hungry customer might take — view the menu, order, book a table, ask about catering, get directions — needed to be reachable in one tap from any page. The visual direction leaned into food photography and warm tones to convey the dining atmosphere directly.
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
              Built on a modern stack (React + Tailwind) with static rendering for fast first paint. Images are responsive and optimized so the menu loads in under a second on a phone, even on a weak connection. The site is structured so the family can update menu items, prices, and hours themselves without touching code.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-3">Outcome</h2>
            <p className="text-muted-foreground">
              The new site replaced an outdated listing and gave Meet and Eat a proper digital storefront — one that ranks for local restaurant searches in East Vancouver, loads instantly on mobile, and gives potential customers everything they need to decide in seconds. The catering and reservation paths are now self-serve instead of requiring a phone call.
            </p>
          </section>
        </div>

        <div className="glass-card p-8 md:p-10 text-center">
          <p className="text-sm font-mono uppercase tracking-[0.2em] text-accent mb-3">
            Need a site for your business?
          </p>
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
            I build sites like this for Vancouver-area businesses.
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Restaurants, services, small operations — fast, mobile-first, designed to convert. Discovery call, fixed quote, ship in weeks.
          </p>
          <a href="/services/web-development" className="btn-primary inline-flex">
            Web Development
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
}
