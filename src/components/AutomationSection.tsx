import { motion } from 'framer-motion';
import { Bot, Mail, Database, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';

const benefits = [
  "Zero manual data entry",
  "24/7 lead qualification",
  "Instant CRM syncing",
  "Automated reporting"
];

const AutomationSection = () => {
  return (
    <section id="automation" className="py-24 md:py-32 bg-secondary/10 relative overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label text-accent">Efficiency Engine</span>
            <h2 className="section-heading mb-6">
              Stop working in <br />
              <span className="text-muted-foreground">your business.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We build intelligent workflows that connect your favorite tools. From scraping leads to generating contracts, our bots handle the busy work so you can focus on strategy.
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-foreground/80"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  {benefit}
                </motion.li>
              ))}
            </ul>

            <a href="#contact" className="btn-secondary">
              Automate My Workflow
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </motion.div>

          {/* Right: Visual Workflow Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glass Container */}
            <div className="glass-card p-8 md:p-12 relative overflow-hidden min-h-[400px] flex items-center justify-center">
              <div className="absolute inset-0 bg-grid-white/5" />
              
              {/* Central Processor */}
              <div className="relative z-10 w-24 h-24 bg-accent/20 rounded-2xl flex items-center justify-center border border-accent/30 shadow-[0_0_50px_-12px_rgba(var(--accent-rgb),0.5)]">
                <Bot className="w-10 h-10 text-accent animate-pulse-slow" />
                
                {/* Orbital Rings */}
                <div className="absolute inset-0 border border-accent/20 rounded-full scale-150 animate-spin-slow" style={{ animationDuration: '10s' }} />
                <div className="absolute inset-0 border border-accent/10 rounded-full scale-[2] animate-reverse-spin" style={{ animationDuration: '15s' }} />
              </div>

              {/* Connected Nodes */}
              <div className="absolute inset-0">
                {/* Node 1: Web (Top Left) */}
                <motion.div 
                  className="absolute top-10 left-10 p-4 bg-secondary rounded-xl border border-white/10"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Globe className="w-6 h-6 text-blue-400" />
                </motion.div>

                {/* Node 2: Database (Bottom Right) */}
                <motion.div 
                  className="absolute bottom-10 right-10 p-4 bg-secondary rounded-xl border border-white/10"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  <Database className="w-6 h-6 text-green-400" />
                </motion.div>

                {/* Node 3: Mail (Top Right) */}
                <motion.div 
                  className="absolute top-10 right-10 p-4 bg-secondary rounded-xl border border-white/10"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  <Mail className="w-6 h-6 text-purple-400" />
                </motion.div>
                
                {/* Animated Connection Lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                  <motion.path 
                    d="M100 100 L 250 200" 
                    stroke="white" 
                    strokeWidth="2" 
                    strokeDasharray="5 5"
                  />
                  <motion.path 
                    d="M400 100 L 250 200" 
                    stroke="white" 
                    strokeWidth="2" 
                    strokeDasharray="5 5"
                  />
                  <motion.path 
                    d="M400 300 L 250 200" 
                    stroke="white" 
                    strokeWidth="2" 
                    strokeDasharray="5 5"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;