'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ArrowUpRight } from 'lucide-react';

type ProjectCard = {
  title: string;
  domain: string;
  url: string;
  /** Tailwind gradient classes for the placeholder background */
  gradient: string;
  /** Optional screenshot in /public, replaces the placeholder when provided */
  screenshot?: string;
  /** Where the card floats in the right column */
  position: string;
  /** CSS animation-delay offset so each card bobs independently */
  floatDelay: string;
  /** Framer-motion entrance delay */
  enterDelay: number;
  /** Enter direction for the framer transition */
  enter: { opacity: number; x?: number; y?: number };
};

const projects: ProjectCard[] = [
  {
    title: 'Job Foxy',
    domain: 'jobfoxy.com',
    url: 'https://jobfoxy.com',
    gradient: 'from-accent/30 via-orange-500/15 to-rose-500/10',
    position: 'top-[6%] right-[6%]',
    floatDelay: '0s',
    enterDelay: 0.4,
    enter: { opacity: 0, x: 50 },
  },
  {
    title: 'photovid.studio',
    domain: 'photovid.studio',
    url: 'https://photovid.studio',
    gradient: 'from-purple-500/30 via-fuchsia-500/15 to-indigo-500/10',
    position: 'top-[36%] left-[2%]',
    floatDelay: '2s',
    enterDelay: 0.6,
    enter: { opacity: 0, x: -50 },
  },
  {
    title: 'VanCityGuide',
    domain: 'vancityguide.ca',
    url: 'https://vancityguide.ca',
    gradient: 'from-emerald-500/25 via-teal-500/15 to-sky-500/10',
    position: 'bottom-[8%] right-[14%]',
    floatDelay: '1s',
    enterDelay: 0.8,
    enter: { opacity: 0, y: 50 },
  },
];

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-accent/5 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-primary/5 blur-[100px]"
        />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: copy + CTAs */}
          <div className="text-left max-w-2xl mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-block"
            >
              <span className="section-label">
                <Sparkles className="w-4 h-4 text-accent" />
                SaaS · Web · Automation
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
            >
              I build
              <br />
              <span className="gradient-text">software & automations</span>
              <br />
              that ship.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl"
            >
              Independent developer helping founders launch SaaS products, marketing sites, and n8n automation systems — without an agency-sized invoice.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#contact" className="btn-primary">
                Start a project
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#work" className="btn-secondary">
                See my work
              </a>
            </motion.div>

            {/* Live work strip (mobile-only, hidden on lg where right column takes over) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-3 mt-10 lg:hidden"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">Live:</span>
              {projects.map((p) => (
                <a
                  key={p.domain}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-accent hover:text-foreground transition-colors"
                >
                  {p.domain}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: project browser cards */}
          <div className="relative hidden lg:block h-[620px] w-full">
            {/* Decorative orbital rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-border/30 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-border/30 rounded-full" />

            {projects.map((project) => (
              <motion.a
                key={project.domain}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={project.enter}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: project.enterDelay }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`absolute ${project.position} w-72 animate-float group block`}
                style={{ animationDelay: project.floatDelay }}
              >
                <div className="rounded-xl overflow-hidden bg-card/80 backdrop-blur-xl border border-white/10 shadow-2xl group-hover:border-accent/40 group-hover:shadow-accent/10 transition-all duration-500">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-2 px-3 py-2 bg-background/60 border-b border-white/5">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                    </div>
                    <div className="flex-1 ml-2 px-2.5 py-0.5 rounded-md bg-secondary/50 text-[10px] font-mono text-muted-foreground truncate">
                      {project.domain}
                    </div>
                  </div>

                  {/* Content area — screenshot or stylized placeholder */}
                  <div className={`relative aspect-[16/10] bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    {project.screenshot ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={project.screenshot}
                        alt={`${project.title} screenshot`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <>
                        <span className="font-display text-2xl font-bold text-foreground/90 text-center px-4">
                          {project.title}
                        </span>
                        <div className="absolute bottom-3 right-3 inline-flex items-center gap-1 text-[10px] font-mono text-foreground/60 group-hover:text-accent transition-colors">
                          visit live
                          <ArrowUpRight className="w-3 h-3" />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
