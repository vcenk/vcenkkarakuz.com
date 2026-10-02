'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    number: '01',
    eyebrow: 'SaaS MVP & product development',
    title: 'Launch a product',
    description:
      'Turn an early idea or half-built concept into a focused, production-ready product your first users can actually use.',
    deliverables: ['Product scope', 'UX & interface', 'Full-stack build', 'Launch support'],
    href: '/services/saas-development',
    bestFor: 'Founders who need a capable first version without assembling a full product team.',
  },
  {
    number: '02',
    eyebrow: 'Web design & development',
    title: 'Rebuild your web presence',
    description:
      'A sharper, faster website that explains the value clearly, earns trust, and gives the right visitors a reason to act.',
    deliverables: ['Content direction', 'Web design', 'Next.js build', 'SEO foundation'],
    href: '/services/web-development',
    bestFor: 'Startups and service businesses that have outgrown their current website.',
  },
  {
    number: '03',
    eyebrow: 'AI & workflow systems',
    title: 'Automate the busywork',
    description:
      'Connect the tools behind your business and remove repetitive operational work with reliable, documented workflows.',
    deliverables: ['Process mapping', 'n8n workflows', 'AI integrations', 'Monitoring'],
    href: '/services/n8n-automation',
    bestFor: 'Small teams losing hours to copy-paste work, manual routing, and disconnected tools.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="border-b border-foreground/80 py-24 md:py-32">
      <div className="section-container">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="section-label">Ways to work together</span>
            <h2 className="section-heading max-w-[760px]">
              Three ways to move your idea <span className="text-accent">forward.</span>
            </h2>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-muted-foreground">
              Focused engagements with product thinking, design, and engineering handled in one place — directly with me.
            </p>
            <a href="#contact" className="btn-secondary mt-9">
              Tell me what you&apos;re building
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="border-t border-foreground/80">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group border-b border-foreground/80 py-9 md:py-11"
              >
                <div className="grid gap-6 md:grid-cols-[56px_1fr]">
                  <span className="font-mono text-xs font-medium text-accent">{service.number}</span>
                  <div>
                    <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      {service.eyebrow}
                    </p>
                    <div className="flex items-start justify-between gap-5">
                      <h3 className="font-display text-3xl font-semibold tracking-[-0.045em] transition-colors group-hover:text-accent md:text-5xl">
                        {service.title}
                      </h3>
                      <Link
                        href={service.href}
                        aria-label={`Learn more about ${service.title}`}
                        className="grid h-11 w-11 shrink-0 place-items-center border border-foreground transition-colors group-hover:bg-foreground group-hover:text-background"
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </Link>
                    </div>
                    <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                      {service.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                      {service.deliverables.map((item) => (
                        <span key={item} className="font-mono text-[10px] uppercase tracking-[0.12em] text-foreground before:mr-2 before:text-accent before:content-['+']">
                          {item}
                        </span>
                      ))}
                    </div>
                    <p className="mt-7 border-l-2 border-accent pl-4 text-sm leading-relaxed text-muted-foreground">
                      <strong className="font-medium text-foreground">Best for:</strong> {service.bestFor}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
