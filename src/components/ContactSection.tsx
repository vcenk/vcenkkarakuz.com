import { motion } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="section-label">
            <Mail className="w-4 h-4" />
            Contact
          </span>
          <h2 className="section-heading mb-6">
            Have a project in mind?
            <br />
            <span className="gradient-text">Let's talk.</span>
          </h2>
          <p className="section-subheading mx-auto mb-10">
            Whether it's a custom AI product, automation system, or consulting engagement—I'm here to help turn your ideas into reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@cenk.dev"
              className="btn-accent"
            >
              <Mail className="w-4 h-4" />
              hello@cenk.dev
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Follow on X
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
