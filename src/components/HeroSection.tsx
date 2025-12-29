import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Bot, Zap, Terminal } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Spotlight Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-primary/5 blur-[100px]" />
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
          
          {/* Left Column: Text Content */}
          <div className="text-left max-w-2xl mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-block"
            >
              <span className="section-label">
                <Sparkles className="w-4 h-4 text-accent" />
                AI Product Studio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
            >
              Building the next gen of
              <br />
              <span className="gradient-text">intelligent apps</span>
              <br />
              & automations.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl"
            >
              I turn complex problems into elegant, scalable AI solutions. From concept to deployment—full-stack engineering meets creative automation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#products" className="btn-primary">
                View Products
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="btn-secondary">
                Let's Talk
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-8 md:gap-12 mt-16 pt-8 border-t border-border/50"
            >
              {[
                { value: '10+', label: 'Products' },
                { value: '50K+', label: 'Users' },
                { value: '100+', label: 'Automations' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-display font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Visual Composition */}
          <div className="relative hidden lg:block h-[600px] w-full">
            {/* Abstract Decorative Circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-border/30 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-border/30 rounded-full" />

            {/* Card 1: AI (Top Right) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute top-[10%] right-[10%] animate-float"
              style={{ animationDelay: '0s' }}
            >
              <div className="glass-card p-6 w-48 backdrop-blur-md bg-card/50 border-white/10">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <Bot className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-semibold mb-1">AI Agents</h3>
                <p className="text-xs text-muted-foreground">Autonomous systems that work for you.</p>
              </div>
            </motion.div>

            {/* Card 2: Automation (Center Left) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute top-[40%] left-[5%] animate-float"
              style={{ animationDelay: '2s' }}
            >
              <div className="glass-card p-6 w-52 backdrop-blur-md bg-card/50 border-white/10">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="font-semibold mb-1">Workflows</h3>
                <p className="text-xs text-muted-foreground">Streamlined processes for maximum efficiency.</p>
              </div>
            </motion.div>

            {/* Card 3: Engineering (Bottom Right) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute bottom-[15%] right-[20%] animate-float"
              style={{ animationDelay: '1s' }}
            >
              <div className="glass-card p-6 w-48 backdrop-blur-md bg-card/50 border-white/10">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                  <Terminal className="w-5 h-5 text-green-500" />
                </div>
                <h3 className="font-semibold mb-1">Full Stack</h3>
                <p className="text-xs text-muted-foreground">Robust and scalable web architecture.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
