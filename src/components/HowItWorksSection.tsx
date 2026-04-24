import { motion } from 'framer-motion';
import { Compass, Hammer, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Compass,
    number: '01',
    title: 'Discover',
    description: 'A short call to understand the problem, the constraints, and what success looks like. You leave with a written scope and a fixed quote.',
  },
  {
    icon: Hammer,
    number: '02',
    title: 'Build',
    description: 'I work in tight increments with regular updates. You see progress in a staging environment, not in long status reports.',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Ship',
    description: 'Production deploy, documentation, and a handoff so your team can run with it. 30 days of post-launch support included.',
  },
];

const HowItWorksSection = () => {
  return (
    <section id="process" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label mx-auto">
              <Rocket className="w-4 h-4" />
              Process
            </span>
            <h2 className="section-heading mt-4 mb-6">
              From idea to live
              <br />
              <span className="gradient-text">in three steps</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Lightweight, transparent, and built around shipping — not meetings.
            </p>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="glass-card p-8 h-full flex flex-col relative overflow-hidden group hover:border-accent/30 transition-all">
                    <div className="absolute top-4 right-4 text-8xl font-display font-bold text-foreground/5 select-none">
                      {step.number}
                    </div>

                    <div className="relative z-10 w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>

                    <div className="relative z-10 flex-1 flex flex-col">
                      <div className="text-xs font-bold text-muted-foreground tracking-wider mb-2">
                        STEP {step.number}
                      </div>
                      <h3 className="text-xl font-display font-bold mb-3 group-hover:text-accent transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                        {step.description}
                      </p>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </div>

                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-16 -right-4 z-20">
                      <div className="w-8 h-8 rounded-full bg-background border-2 border-border flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-accent" />
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-16 border-t border-border/50"
        >
          <h3 className="text-2xl font-display font-bold mb-4">Have a project in mind?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Tell me what you're building. I'll get back within 24 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#contact" className="btn-primary">
              Start a project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
