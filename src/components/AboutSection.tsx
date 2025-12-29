import { motion } from 'framer-motion';
import { Zap, Search, Box } from 'lucide-react';

const processSteps = [
  {
    icon: Search,
    title: "Discovery",
    description: "I dig deep into your workflow to identify high-value automation opportunities."
  },
  {
    icon: Box,
    title: "Build",
    description: "Rapid development using scalable, modular architecture (Next.js, Supabase)."
  },
  {
    icon: Zap,
    title: "Automate",
    description: "Connecting systems via n8n to put your revenue operations on autopilot."
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/10 relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">About the Agency</span>
            <h2 className="section-heading mb-6">
              More than just code.
              <br />
              <span className="text-muted-foreground">Strategic engineering.</span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                CK Agency bridges the gap between complex software engineering and practical business automation. 
              </p>
              <p>
                We don't just deliver code; we deliver <strong>assets</strong>. Whether it's a SaaS product, a UI kit, or an internal workflow, every deliverable is designed to save time and generate value from Day 1.
              </p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-border/50">
              {[
                { label: 'Experience', value: '5+ Years' },
                { label: 'Projects', value: '50+' },
                { label: 'Clients', value: 'Global' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-display font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Process Cards (Replaces Tech Stack) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {processSteps.map((step, index) => (
              <div 
                key={step.title}
                className="glass-card p-6 flex items-start gap-4 hover:bg-white/5 transition-colors"
              >
                <div className="p-3 rounded-xl bg-accent/10 text-accent">
                  <step.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;