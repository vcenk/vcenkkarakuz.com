import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Linkedin, Calendar } from 'lucide-react';

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
              Let's build
              <br />
              <span className="gradient-text">something good.</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-10">
              Tell me what you're working on and what you need. I'll reply within 24 hours with next steps and a quote.
            </p>

            <div className="flex flex-wrap gap-3 justify-center mb-10">
              <a
                href="mailto:hello@cenk.dev?subject=Project Inquiry"
                className="btn-primary"
              >
                <Mail className="w-4 h-4" />
                hello@cenk.dev
              </a>
              <a
                href="https://calendly.com/cenk"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Calendar className="w-4 h-4" />
                Book a call
              </a>
            </div>

            <div className="pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-4">Or find me here:</p>
              <div className="flex flex-wrap gap-3 justify-center">
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
