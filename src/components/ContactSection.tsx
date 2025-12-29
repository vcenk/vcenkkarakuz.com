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
              Ready to automate your <br />
              <span className="gradient-text">growth?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10">
              Whether you need a custom SaaS MVP, a complex n8n workflow, or a high-performance landing page—I'm here to build it.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
              <a
                href="mailto:hello@cenk.dev"
                className="btn-primary min-w-[160px]"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Me
              </a>
              
              <a
                href="https://www.linkedin.com/in/cenkkarakuz/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary min-w-[160px]"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>

              <a
                href="https://twitter.com/vcenkkarakuz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary min-w-[160px]"
              >
                DM on X
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;