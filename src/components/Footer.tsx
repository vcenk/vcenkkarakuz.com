import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background pt-16 pb-8">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-foreground text-background flex items-center justify-center font-bold font-display text-sm group-hover:bg-accent group-hover:text-foreground transition-colors">
                CK
              </div>
              <span className="font-display font-bold text-lg tracking-tight">
                Cenk Karakuz<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed mb-4">
              Independent developer building SaaS products, marketing sites, and n8n automations. Based in Vancouver, BC — working with clients across Canada and worldwide.
            </p>
            <a
              href="mailto:cenkkarakuz@gmail.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              cenkkarakuz@gmail.com
            </a>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/services/saas-development" className="hover:text-foreground transition-colors">SaaS Development</Link></li>
              <li><Link to="/services/web-development" className="hover:text-foreground transition-colors">Web Development</Link></li>
              <li><Link to="/services/n8n-automation" className="hover:text-foreground transition-colors">n8n Automation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Work</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/case-studies/jobfoxy" className="hover:text-foreground transition-colors">Job Foxy</Link></li>
              <li><Link to="/case-studies/photovid-studio" className="hover:text-foreground transition-colors">photovid.studio</Link></li>
              <li><a href="/#contact" className="hover:text-foreground transition-colors">Get in touch</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Cenk Karakuz. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="https://twitter.com/vcenkkarakuz" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://github.com/vcenk" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com/in/cenkkarakuz" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
