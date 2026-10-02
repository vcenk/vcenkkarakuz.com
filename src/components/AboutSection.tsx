'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';

const principles = [
  'Direct collaboration — no account managers or handoffs',
  'Product thinking alongside design and engineering',
  'Small scope, visible progress, production delivery',
];

const AboutSection = () => {
  return (
    <section id="about" className="border-b border-foreground/80 py-24 md:py-32">
      <div className="section-container">
        <div className="grid border border-foreground bg-[#f0ff5c] lg:grid-cols-[0.88fr_1.12fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex min-h-[420px] flex-col justify-between overflow-hidden border-b border-foreground p-7 md:p-10 lg:border-b-0 lg:border-r"
          >
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em]">
              <span>About the practice</span>
              <span>Vancouver · CA</span>
            </div>
            <div className="absolute -bottom-12 -right-4 select-none font-display text-[13rem] font-bold leading-none tracking-[-0.12em] text-foreground/10 md:text-[18rem]">
              CK
            </div>
            <p className="relative z-10 max-w-xl font-display text-4xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-6xl">
              I bring the operator&apos;s side of the table, too.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-foreground p-7 text-background md:p-12 lg:p-16"
          >
            <span className="mb-7 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-background/60">
              <span className="h-2 w-2 bg-accent" /> Independent, by design
            </span>
            <p className="max-w-2xl font-display text-2xl font-medium leading-[1.2] tracking-[-0.035em] md:text-4xl">
              I&apos;m Cenk, an independent product engineer based in Vancouver. I build products for clients, and I launch and operate my own.
            </p>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-background/65 md:text-lg">
              That changes the way I approach the work. I think beyond implementation — about positioning, onboarding, monetization, SEO, and what has to happen after launch.
            </p>

            <div className="mt-10 border-t border-background/20 pt-8">
              {principles.map((principle) => (
                <div key={principle} className="flex items-start gap-3 border-b border-background/15 py-4 first:pt-0">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center bg-accent text-white">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-sm text-background/80 md:text-base">{principle}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="mt-9 inline-flex items-center gap-2 font-display text-sm font-semibold text-background underline decoration-accent decoration-2 underline-offset-8 transition-colors hover:text-accent">
              Work directly with me
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
