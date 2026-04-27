'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Box, Globe, Workflow } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 100, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-accent/5 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, -100, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
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
          </div>

          <div className="relative hidden lg:block h-[600px] w-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-border/30 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-border/30 rounded-full" />

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute top-[10%] right-[10%] animate-float"
              style={{ animationDelay: '0s' }}
            >
              <div className="glass-card p-6 w-48 backdrop-blur-md bg-card/50 border-white/10">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <Box className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-semibold mb-1">SaaS</h3>
                <p className="text-xs text-muted-foreground">Production-ready products, end to end.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute top-[40%] left-[5%] animate-float"
              style={{ animationDelay: '2s' }}
            >
              <div className="glass-card p-6 w-52 backdrop-blur-md bg-card/50 border-white/10">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                  <Globe className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="font-semibold mb-1">Web</h3>
                <p className="text-xs text-muted-foreground">Marketing sites that convert.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute bottom-[15%] right-[20%] animate-float"
              style={{ animationDelay: '1s' }}
            >
              <div className="glass-card p-6 w-48 backdrop-blur-md bg-card/50 border-white/10">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                  <Workflow className="w-5 h-5 text-green-500" />
                </div>
                <h3 className="font-semibold mb-1">Automation</h3>
                <p className="text-xs text-muted-foreground">n8n workflows that save hours.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
