import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

const quickLinks = [
  { label: 'Projects', href: '#products' },
  { label: 'Resources', href: '#resources' },
  { label: 'Automation', href: '#automation' },
  { label: 'Courses', href: '#courses' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
];

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border bg-card/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col gap-10"
        >
          {/* Top Row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <span className="font-display text-xl font-bold">Cenk.</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">AI Product Studio</span>
            </div>

            {/* Quick Links */}
            <nav className="flex flex-wrap items-center justify-center gap-6">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground pt-6 border-t border-border/50">
            © {new Date().getFullYear()} Cenk. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
