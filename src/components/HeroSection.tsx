'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

const buildLog = [
  { index: '02', name: 'photovid.studio', type: 'AI product', href: '/case-studies/photovid-studio' },
  { index: '03', name: 'Meet & Eat', type: 'Client website', href: '/case-studies/meet-and-eat' },
  { index: '04', name: 'VanCityGuide', type: 'Content platform', href: '/case-studies/vancityguide' },
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const HeroSection = () => {
  return (
    <section id="hero" className="editorial-grid relative overflow-hidden border-b border-foreground/80 pt-[76px]">
      <div className="section-container pb-10 pt-16 md:pb-14 md:pt-24 lg:pb-20 lg:pt-28">
        <div className="mb-10 flex items-center justify-between border-b border-foreground/80 pb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:mb-16">
          <span>Independent product engineer</span>
          <span className="hidden sm:inline">Vancouver, BC · Working worldwide</span>
          <span className="flex items-center gap-2 text-foreground">
            <span className="h-2 w-2 rounded-full bg-[#67d45c]" />
            Selected projects
          </span>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          <div>
            <motion.p
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
              className="mb-6 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-accent"
            >
              Product thinking · Design · Engineering
            </motion.p>

            <motion.h1
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-balance font-display text-[clamp(3.5rem,8vw,7.7rem)] font-semibold leading-[0.86] tracking-[-0.07em]"
            >
              I turn early ideas into <span className="text-accent">products</span> people can use.
            </motion.h1>

            <motion.p
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
            >
              I design, build, and launch SaaS products, intelligent workflows, and high-performing websites for founders and small teams.
            </motion.p>

            <motion.div
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.55, delay: 0.26 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <a href="#work" className="btn-primary">
                View selected work
                <ArrowDown className="h-4 w-4" />
              </a>
              <a href="#contact" className="btn-secondary">
                Discuss a project
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[620px] lg:mx-0"
          >
            <div className="absolute -right-5 -top-5 h-[72%] w-[72%] bg-accent md:-right-8 md:-top-8" />
            <div className="absolute -left-3 top-12 z-20 -rotate-3 bg-[#f0ff5c] px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground shadow-[3px_3px_0_0_hsl(var(--foreground))] md:-left-8">
              Owned product · Live
            </div>

            <Link
              href="/case-studies/jobfoxy"
              className="group relative z-10 block border border-foreground bg-white p-3 shadow-[10px_10px_0_0_hsl(var(--foreground))]"
            >
              <div className="relative aspect-[4/3] overflow-hidden border border-border bg-secondary">
                <Image
                  src="/projects/jobfoxy.png"
                  alt="Job Foxy AI job application assistant interface"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 44vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]"
                />
              </div>
              <div className="flex items-end justify-between gap-6 px-1 pb-1 pt-5">
                <div>
                  <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Build 01 · AI SaaS</div>
                  <h2 className="font-display text-3xl font-semibold tracking-[-0.04em]">Job Foxy</h2>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center border border-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </Link>

            <div className="relative z-10 mt-8 border-y border-foreground/80 bg-background/95">
              {buildLog.map((project) => (
                <Link
                  key={project.name}
                  href={project.href}
                  className="group grid grid-cols-[34px_1fr_auto] items-center gap-3 border-b border-border py-3 last:border-b-0"
                >
                  <span className="font-mono text-[10px] text-muted-foreground">{project.index}</span>
                  <span className="font-display text-sm font-semibold transition-colors group-hover:text-accent">{project.name}</span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground">{project.type}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-16 grid border-y border-foreground/80 sm:grid-cols-3 lg:mt-24"
        >
          {[
            ['07', 'Shipped digital projects'],
            ['03', 'Focused service areas'],
            ['01', 'Direct point of contact'],
          ].map(([value, label], index) => (
            <div key={label} className={`flex items-center gap-4 py-5 ${index > 0 ? 'sm:border-l sm:border-foreground/80 sm:pl-6' : ''}`}>
              <span className="font-display text-3xl font-semibold text-accent">{value}</span>
              <span className="max-w-[150px] font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-muted-foreground">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
