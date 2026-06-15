import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background pt-16 pb-8">
      <div className="section-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-16">
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group w-fit">
              <img
                src="/favicon.svg"
                alt="Cenk Karakuz monogram"
                width={32}
                height={32}
                className="w-8 h-8 rounded-lg group-hover:scale-105 transition-transform"
              />
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
              <li><Link href="/services/saas-development" className="hover:text-foreground transition-colors">SaaS Development</Link></li>
              <li><Link href="/services/web-development" className="hover:text-foreground transition-colors">Web Development</Link></li>
              <li><Link href="/services/n8n-automation" className="hover:text-foreground transition-colors">n8n Automation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Work</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/case-studies/jobfoxy" className="hover:text-foreground transition-colors">Job Foxy</Link></li>
              <li><Link href="/case-studies/photovid-studio" className="hover:text-foreground transition-colors">photovid.studio</Link></li>
              <li><Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
              <li><a href="/#contact" className="hover:text-foreground transition-colors">Get in touch</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">From the same team</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="https://llcstateguide.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  LLC State Guide
                </a>
              </li>
              <li>
                <a href="https://smartcalculatorpro.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  Smart Calculator Pro
                </a>
              </li>
              <li>
                <a href="https://vancityguide.ca" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  VanCityGuide
                </a>
              </li>
              <li>
                <a href="https://examcanada.online" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  ExamCanada
                </a>
              </li>
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
