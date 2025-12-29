import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background pt-16 pb-8">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-foreground text-background flex items-center justify-center font-bold font-display text-sm group-hover:bg-accent group-hover:text-foreground transition-colors">
                CK
              </div>
              <span className="font-display font-bold text-lg tracking-tight">
                Agency<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Helping founders and teams build scalable software and automate revenue operations.
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="/#products" className="hover:text-foreground transition-colors">MVP Development</a></li>
              <li><a href="/#automation" className="hover:text-foreground transition-colors">Automation</a></li>
              <li><a href="/#services" className="hover:text-foreground transition-colors">Consulting</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Resources</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link></li>
              <li><Link to="/animations" className="hover:text-foreground transition-colors">Animation Library</Link></li>
              <li><a href="/#contact" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CK Agency. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="https://twitter.com/vcenkkarakuz" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://github.com/vcenk" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com/in/cenkkarakuz" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;