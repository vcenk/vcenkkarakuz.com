import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    category: 'Products & Pricing',
    questions: [
      {
        q: 'What happens after I purchase a product?',
        a: "You'll get instant access to download the source code, documentation, and any included assets. Everything is delivered via email within minutes. You own the code forever—no subscriptions, no recurring fees.",
      },
      {
        q: 'Can I use these in client projects?',
        a: 'Absolutely! You can use any purchased product in unlimited personal and commercial projects. Build client websites, SaaS products, or resell projects—the license is very permissive.',
      },
      {
        q: 'Do you offer bulk discounts?',
        a: "Yes! If you're buying 3+ products or need custom solutions, email me for a custom quote. I offer bundle deals and retainer packages for agencies and teams.",
      },
    ],
  },
  {
    category: 'Custom Work',
    questions: [
      {
        q: 'How does custom development work?',
        a: "We start with a discovery call to understand your needs. I'll send you a detailed proposal with timeline and fixed price. Once approved, I work in 1-week sprints with regular updates. You get full source code ownership and 30 days of support.",
      },
      {
        q: 'What if I need changes after delivery?',
        a: 'Minor tweaks and bug fixes are included for 30 days. For major feature additions, we can discuss a separate scope or add you to a retainer for ongoing support.',
      },
      {
        q: "What's the typical timeline?",
        a: 'Landing pages: 2-5 days. Simple apps: 1-2 weeks. Full MVPs: 3-6 weeks. Rush delivery available for an additional fee. I always set realistic deadlines and communicate clearly.',
      },
    ],
  },
  {
    category: 'Technical',
    questions: [
      {
        q: 'What tech stack do you use?',
        a: 'React 18, TypeScript, Tailwind CSS, Framer Motion for animations. Backend: Supabase, PostgreSQL, or Node.js APIs. All modern, battle-tested tools—no experimental frameworks.',
      },
      {
        q: 'Do you provide documentation?',
        a: 'Yes! Every product and custom project includes clear setup instructions, code comments, and usage examples. You should be able to get started in under 10 minutes.',
      },
      {
        q: 'Can you integrate with my existing codebase?',
        a: "Definitely. I can work with your existing React/Next.js project, add new features, or refactor existing code. I'm experienced with legacy codebases and migration projects.",
      },
    ],
  },
  {
    category: 'Support & Refunds',
    questions: [
      {
        q: 'What kind of support do you offer?',
        a: 'Email support for setup questions and bug fixes. Response time is typically under 24 hours on weekdays. For ongoing support needs, consider a retainer package.',
      },
      {
        q: 'Do you offer refunds?',
        a: "Yes! 14-day money-back guarantee on all digital products. If you're not satisfied for any reason, just email me for a full refund—no questions asked.",
      },
      {
        q: 'Can I see examples of your work?',
        a: 'Check the Live Demos section above, browse the Shop for templates, or view my GitHub. For custom work examples, I can share relevant case studies during our discovery call.',
      },
    ],
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFAQ = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label mx-auto">
              <HelpCircle className="w-4 h-4" />
              FAQ
            </span>
            <h2 className="section-heading mt-4 mb-6">
              Got questions?
              <br />
              <span className="gradient-text">We've got answers</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about products, custom work, and support.
            </p>
          </motion.div>
        </div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto space-y-12">
          {faqs.map((category, categoryIdx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIdx * 0.1 }}
            >
              {/* Category Title */}
              <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent text-sm">
                  {categoryIdx + 1}
                </span>
                {category.category}
              </h3>

              {/* Questions */}
              <div className="space-y-3">
                {category.questions.map((faq, faqIdx) => {
                  const faqId = `${categoryIdx}-${faqIdx}`;
                  const isOpen = openIndex === faqId;

                  return (
                    <div
                      key={faqIdx}
                      className={`glass-card overflow-hidden transition-all ${
                        isOpen ? 'border-accent/30' : ''
                      }`}
                    >
                      <button
                        onClick={() => toggleFAQ(faqId)}
                        className="w-full text-left p-6 flex items-start justify-between gap-4 group"
                      >
                        <span className="font-semibold group-hover:text-accent transition-colors flex-1">
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 pt-0">
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {faq.a}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-16 border-t border-border/50"
        >
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a href="#contact" className="btn-secondary inline-flex">
            Contact Me Directly
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
