import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Linkedin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative glass-card p-8 md:p-16 text-center overflow-hidden"
        >
          {/* Decorative Gradient inside the card */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-accent/10 blur-[80px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border backdrop-blur-sm text-sm text-muted-foreground mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Accepting new projects
            </div>

            <h2 className="section-heading mb-6">
              Ready to ship faster?
              <br />
              <span className="gradient-text">Let's work together</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-12">
              Choose the option that fits your needs—from ready-made templates to fully custom builds.
            </p>

            {/* Lead Qualification Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Option 1: Templates */}
              <div className="text-left p-6 bg-secondary/20 rounded-xl hover:bg-secondary/30 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-display text-lg font-bold mb-2">Need it Fast</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Pre-built templates & components ready to use today.
                </p>
                <div className="text-xs text-muted-foreground mb-4">
                  <div>💰 From $39</div>
                  <div>⏱️ Instant access</div>
                </div>
                <a
                  href="/shop"
                  className="text-accent hover:underline text-sm font-semibold inline-flex items-center gap-1"
                >
                  Browse Shop <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

              {/* Option 2: Custom Project */}
              <div className="text-left p-6 bg-accent/5 border-2 border-accent/20 rounded-xl hover:border-accent/40 transition-all group relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-background text-xs font-bold rounded-full">
                  MOST POPULAR
                </div>
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="font-display text-lg font-bold mb-2">Custom Project</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Landing pages, apps, or workflows built for your brand.
                </p>
                <div className="text-xs text-muted-foreground mb-4">
                  <div>💰 $1,500 - $10K</div>
                  <div>⏱️ 2-4 weeks delivery</div>
                </div>
                <a
                  href="mailto:hello@cenk.dev?subject=Custom Project Inquiry"
                  className="text-accent hover:underline text-sm font-semibold inline-flex items-center gap-1"
                >
                  Get Quote <Mail className="w-3 h-3" />
                </a>
              </div>

              {/* Option 3: Retainer */}
              <div className="text-left p-6 bg-secondary/20 rounded-xl hover:bg-secondary/30 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="font-display text-lg font-bold mb-2">Long-term Partner</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Ongoing development, support, and consulting.
                </p>
                <div className="text-xs text-muted-foreground mb-4">
                  <div>💰 From $5K/month</div>
                  <div>⏱️ Flexible scope</div>
                </div>
                {/* TODO: Replace href with actual Calendly link */}
                <a
                  href="#contact"
                  className="text-accent hover:underline text-sm font-semibold inline-flex items-center gap-1"
                >
                  Book Call <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-4">Or reach out directly:</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href="mailto:hello@cenk.dev"
                  className="btn-secondary"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>

                <a
                  href="https://www.linkedin.com/in/cenkkarakuz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>

                <a
                  href="https://twitter.com/vcenkkarakuz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  DM on X
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;