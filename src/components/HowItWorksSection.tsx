'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Frame the right problem',
    description: 'A focused conversation to understand the opportunity, constraints, and what a successful first release needs to do.',
    output: 'Clear scope · Priorities · Fixed proposal',
  },
  {
    number: '02',
    title: 'Make the work visible',
    description: 'Design and development happen in tight increments. You review real progress in a working environment, not a slide deck.',
    output: 'Frequent demos · Fast decisions · No mystery',
  },
  {
    number: '03',
    title: 'Ship and keep moving',
    description: 'Production launch, documentation, and a practical handoff — with support for the questions that appear after going live.',
    output: 'Deployment · Documentation · 30-day support',
  },
];

const HowItWorksSection = () => {
  return (
    <section id="process" className="border-b border-foreground/80 bg-white py-24 md:py-32">
      <div className="section-container">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <span className="section-label">How the work moves</span>
            <h2 className="section-heading">Less ceremony. More momentum.</h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground lg:justify-self-end lg:text-right">
            A lightweight process built around clear decisions, visible progress, and getting useful work into the world.
          </p>
        </div>

        <div className="grid border-y border-foreground/80 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative flex min-h-[360px] flex-col p-7 md:p-8 lg:p-10 ${index > 0 ? 'border-t border-foreground/80 md:border-l md:border-t-0' : ''}`}
            >
              <div className="mb-16 flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-accent">{step.number}</span>
                <span className="h-3 w-3 border border-foreground transition-colors group-hover:bg-accent" />
              </div>
              <h3 className="font-display text-3xl font-semibold leading-[1] tracking-[-0.045em] md:text-4xl">{step.title}</h3>
              <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground md:text-base">{step.description}</p>
              <p className="mt-8 border-t border-border pt-4 font-mono text-[9px] uppercase leading-relaxed tracking-[0.13em] text-muted-foreground">
                {step.output}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
