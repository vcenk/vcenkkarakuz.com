import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ExamCanada Case Study | Canadian Exam Prep Platform',
  description:
    'How ExamCanada.online was built as a free practice-test platform for Canadian driving, citizenship, and workplace safety exams — designed for newcomers and learners.',
  keywords: [
    'ExamCanada case study',
    'Canadian exam prep',
    'driving test practice Canada',
    'Canadian citizenship test prep',
    'WHMIS practice test',
    'EdTech case study Canada',
  ],
  alternates: { canonical: '/case-studies/examcanada' },
  openGraph: {
    title: 'ExamCanada Case Study | Canadian Exam Prep Platform',
    description:
      'A free practice-test platform for Canadian driving, citizenship, and workplace safety exams.',
    url: 'https://vcenkkarakuz.com/case-studies/examcanada',
    type: 'article',
  },
};

const features = [
  'Practice tests organized by exam type and province',
  'Instant feedback and explanations on every question',
  'Mobile-first interface for on-the-go study sessions',
  'Free to use, no signup required',
  'Progress tracking across attempts',
  'Schema markup for educational content discoverability',
];

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ExamCanada',
    url: 'https://examcanada.online',
    inLanguage: 'en-CA',
    author: { '@type': 'Person', name: 'Cenk Karakuz', url: 'https://vcenkkarakuz.com' },
    about: 'Free practice tests for Canadian driving, citizenship, and workplace safety exams',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'ExamCanada — Canadian Exam Prep Platform Case Study',
    description:
      'Case study of ExamCanada.online, a free Canadian exam preparation platform built by Cenk Karakuz.',
    author: { '@type': 'Person', name: 'Cenk Karakuz', url: 'https://vcenkkarakuz.com' },
    publisher: { '@type': 'Person', name: 'Cenk Karakuz' },
    mainEntityOfPage: 'https://vcenkkarakuz.com/case-studies/examcanada',
    image: 'https://vcenkkarakuz.com/ck-og.svg',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vcenkkarakuz.com/' },
      { '@type': 'ListItem', position: 2, name: 'Work', item: 'https://vcenkkarakuz.com/#work' },
      { '@type': 'ListItem', position: 3, name: 'ExamCanada', item: 'https://vcenkkarakuz.com/case-studies/examcanada' },
    ],
  },
];

export default function ExamCanadaCaseStudyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Navigation />

      <main className="pt-28 pb-20 section-container">
        <span className="section-label">Case Study</span>
        <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6">ExamCanada</h1>

        <p className="text-lg text-muted-foreground max-w-3xl mb-8">
          A free practice-test platform for Canadian exams — driving tests, citizenship tests, and workplace safety certifications. Built for newcomers, students, and anyone who needs focused, no-friction prep.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <a href="https://examcanada.online/" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Visit Live Site (examcanada.online)
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a href="/services/web-development" className="btn-secondary">
            Build Similar Site
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card p-6">
            <div className="text-3xl font-display font-bold text-accent">3 exam tracks</div>
            <div className="text-sm text-muted-foreground mt-2">Driving · Citizenship · WHMIS</div>
          </div>
          <div className="glass-card p-6">
            <div className="text-3xl font-display font-bold text-accent">Free</div>
            <div className="text-sm text-muted-foreground mt-2">No paywalls, no signup</div>
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
              People preparing for Canadian-specific exams either pay for paid prep apps or dig through outdated PDFs and forum threads. Newcomers especially get pushed toward paywalled question banks when free, accurate practice should be accessible by default.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-3">Approach</h2>
            <p className="text-muted-foreground mb-4">
              ExamCanada centers the practice test itself — pick an exam, run through questions, get instant feedback. The flow is designed for short study sessions on a phone, with explanations that actually teach the concept rather than just confirming the answer.
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
              Question banks are stored as structured data so each exam type can grow independently. The frontend is Next.js with static rendering for SEO, plus client-side state for the test-taking flow. Performance is tuned so practice loads instantly even on slow mobile connections.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-3">Strategy</h2>
            <p className="text-muted-foreground">
              SEO targets high-intent searches like &quot;BC driving knowledge test practice&quot; and &quot;Canadian citizenship test 2026&quot;. The site competes by being faster, free, and more focused than the paid alternatives — which works because the user&apos;s job is to pass the exam, not to evaluate prep platforms.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
