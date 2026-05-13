'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, ArrowUpRight } from 'lucide-react';

type Project = {
  title: string;
  tagline: string;
  domain: string;
  url: string;
  /** Tailwind gradient classes for the placeholder background */
  gradient: string;
  /** Small visual accent shown inside the featured card */
  accent: 'amber' | 'purple' | 'teal' | 'blue' | 'rose' | 'lime';
  /** Optional screenshot path in /public, replaces the placeholder */
  screenshot?: string;
};

const projects: Project[] = [
  {
    title: 'Job Foxy',
    tagline: 'AI job application assistant',
    domain: 'jobfoxy.com',
    url: 'https://jobfoxy.com',
    gradient: 'from-accent/35 via-orange-500/15 to-rose-500/10',
    accent: 'amber',
  },
  {
    title: 'photovid.studio',
    tagline: 'AI image & video generation',
    domain: 'photovid.studio',
    url: 'https://photovid.studio',
    gradient: 'from-purple-500/35 via-fuchsia-500/15 to-indigo-500/10',
    accent: 'purple',
  },
  {
    title: 'VanCityGuide',
    tagline: 'Hyperlocal Vancouver guide',
    domain: 'vancityguide.ca',
    url: 'https://vancityguide.ca',
    gradient: 'from-emerald-500/30 via-teal-500/15 to-sky-500/10',
    accent: 'teal',
  },
  {
    title: 'Smart Calculator Pro',
    tagline: 'Calculator tools platform',
    domain: 'smartcalculatorpro.com',
    url: 'https://smartcalculatorpro.com',
    gradient: 'from-blue-500/30 via-cyan-500/15 to-sky-500/10',
    accent: 'blue',
  },
  {
    title: 'ExamCanada',
    tagline: 'Canadian exam prep',
    domain: 'examcanada.online',
    url: 'https://examcanada.online',
    gradient: 'from-rose-500/30 via-red-500/15 to-orange-500/10',
    accent: 'rose',
  },
  {
    title: 'LLC State Guide',
    tagline: 'US LLC formation guides',
    domain: 'llcstateguide.com',
    url: 'https://llcstateguide.com',
    gradient: 'from-lime-500/30 via-green-500/15 to-emerald-500/10',
    accent: 'lime',
  },
];

const accentDot: Record<Project['accent'], string> = {
  amber: 'bg-amber-400',
  purple: 'bg-purple-400',
  teal: 'bg-teal-400',
  blue: 'bg-blue-400',
  rose: 'bg-rose-400',
  lime: 'bg-lime-400',
};

const ROTATION_MS = 4500;

const HeroSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActiveIdx((i) => (i + 1) % projects.length);
    }, ROTATION_MS);
    return () => clearInterval(id);
  }, [paused]);

  const active = projects[activeIdx];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-accent/5 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3], x: [0, -100, 0], y: [0, 50, 0] }}
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
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
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

            {/* Live work strip — visible always; on lg the big composition is also shown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-12 pt-8 border-t border-border/40"
            >
              <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-mono">Live projects</span>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                {projects.map((p) => (
                  <a
                    key={p.domain}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-accent transition-colors"
                  >
                    {p.domain}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: featured browser window with auto-rotating projects + depth stack */}
          <div className="relative hidden lg:flex items-center justify-center h-[600px]">
            {/* Decorative orbital rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] border border-border/30 rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] border border-border/20 rounded-full pointer-events-none" />

            {/* Back stack — two ghost windows offset for depth */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute right-[6%] top-[8%] w-[420px] rounded-xl bg-card/40 border border-white/5 backdrop-blur-sm pointer-events-none"
              style={{ transform: 'rotate(3deg)' }}
            >
              <div className="aspect-[16/10]" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30, y: 30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute left-[2%] bottom-[12%] w-[400px] rounded-xl bg-card/30 border border-white/5 backdrop-blur-sm pointer-events-none"
              style={{ transform: 'rotate(-4deg)' }}
            >
              <div className="aspect-[16/10]" />
            </motion.div>

            {/* Featured (rotating) window */}
            <motion.a
              href={active.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              className="relative z-10 w-[520px] max-w-full rounded-2xl overflow-hidden bg-card/85 backdrop-blur-xl border border-white/10 shadow-[0_24px_60px_-15px_hsl(45_100%_60%_/_0.18),0_8px_24px_-8px_hsl(0_0%_0%_/_0.6)] hover:border-accent/40 transition-all duration-500 block group"
            >
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-background/70 border-b border-white/5">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div className="flex-1 ml-2 flex items-center justify-center">
                  <div className="px-3 py-1 rounded-md bg-secondary/60 text-xs font-mono text-muted-foreground flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${accentDot[active.accent]} animate-pulse`} />
                    {active.domain}
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>

              {/* Content area — crossfade between projects */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.domain}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className={`absolute inset-0 bg-gradient-to-br ${active.gradient} flex flex-col items-center justify-center`}
                  >
                    {active.screenshot ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={active.screenshot}
                        alt={`${active.title} screenshot`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <>
                        {/* Decorative inner UI hints */}
                        <div className="absolute top-6 left-6 right-6 flex gap-2">
                          <div className="h-2 w-16 rounded-full bg-foreground/15" />
                          <div className="h-2 w-8 rounded-full bg-foreground/10" />
                          <div className="ml-auto h-2 w-12 rounded-full bg-foreground/10" />
                        </div>

                        <div className="text-center px-6">
                          <div className={`inline-flex items-center gap-2 px-2.5 py-1 mb-4 rounded-full bg-background/40 border border-white/10 text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/80`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${accentDot[active.accent]}`} />
                            Live
                          </div>
                          <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2 tracking-tight">
                            {active.title}
                          </h3>
                          <p className="text-sm text-foreground/70">{active.tagline}</p>
                        </div>

                        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                          <div className="flex gap-1.5">
                            <div className="h-1.5 w-10 rounded-full bg-foreground/10" />
                            <div className="h-1.5 w-6 rounded-full bg-foreground/10" />
                          </div>
                          <div className="inline-flex items-center gap-1 text-[10px] font-mono text-foreground/60 group-hover:text-accent transition-colors">
                            visit live
                            <ArrowUpRight className="w-3 h-3" />
                          </div>
                        </div>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.a>

            {/* Indicator dots */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {projects.map((p, i) => (
                <button
                  key={p.domain}
                  onClick={() => setActiveIdx(i)}
                  onMouseEnter={() => setPaused(true)}
                  onMouseLeave={() => setPaused(false)}
                  aria-label={`Show ${p.title}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === activeIdx
                      ? 'w-8 bg-accent'
                      : 'w-1.5 bg-foreground/20 hover:bg-foreground/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
