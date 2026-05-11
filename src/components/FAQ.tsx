import { ChevronDown } from 'lucide-react';

export type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  title?: string;
  eyebrow?: string;
  items: FAQItem[];
};

const FAQ = ({ title = 'Common questions', eyebrow = 'FAQ', items }: FAQProps) => {
  return (
    <section className="section-container mt-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label mx-auto">{eyebrow}</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">{title}</h2>
        </div>

        <div className="space-y-3">
          {items.map((item, i) => (
            <details
              key={item.question}
              className="group glass-card p-0 overflow-hidden transition-colors hover:border-accent/30"
            >
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-left">
                <h3 className="font-display text-base md:text-lg font-semibold pr-4">
                  <span className="text-accent font-mono text-xs mr-3 align-middle">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {item.question}
                </h3>
                <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 pt-1 text-sm md:text-base text-muted-foreground leading-relaxed border-t border-border/40">
                <div className="pt-4">{item.answer}</div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * Build a JSON-LD FAQPage schema fragment from a list of FAQ items.
 * Inline this into the page's <script type="application/ld+json"> array.
 */
export const buildFAQSchema = (items: FAQItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
});

export default FAQ;
