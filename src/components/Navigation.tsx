import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { name: 'Services', href: '/#services' },
  { name: 'Work', href: '/#work' },
  { name: 'Process', href: '/#process' },
  { name: 'Contact', href: '/#contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = async (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (!href.includes('#')) {
      navigate(href);
      return;
    }

    const targetId = href.substring(href.indexOf('#'));

    if (location.pathname !== '/') {
      await navigate('/');
      setTimeout(() => {
        const element = document.querySelector(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isServicePage = location.pathname.startsWith('/services');
  const isCaseStudy = location.pathname.startsWith('/case-studies');

  const shouldUseSolidNav = isScrolled || isServicePage || isCaseStudy || isMobileMenuOpen;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 pointer-events-none"
    >
      <nav
        className={`pointer-events-auto transition-all duration-500 ease-out ${
          shouldUseSolidNav
            ? 'w-full max-w-5xl px-6 py-3 rounded-3xl bg-background/80 backdrop-blur-xl border border-border shadow-lg'
            : 'w-full px-2 py-2 bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              src="/favicon.svg"
              alt="Cenk Karakuz monogram"
              width={32}
              height={32}
              className="w-8 h-8 rounded-lg group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col leading-tight">
              <span className={`font-display font-bold text-base tracking-tight ${!shouldUseSolidNav ? 'text-foreground' : ''}`}>
                Cenk Karakuz<span className="text-accent">.</span>
              </span>
              <span className="hidden lg:block text-[11px] text-muted-foreground">
                SaaS · Web · Automation
              </span>
            </div>
          </Link>

          <ul className="hidden md:flex items-center gap-1 bg-background/50 backdrop-blur-sm px-2 py-1 rounded-full border border-border/20">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-2 text-sm rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="/#contact"
              onClick={(e) => handleNavClick(e, '/#contact')}
              className="px-5 py-2 text-sm font-medium rounded-full bg-foreground text-background hover:bg-foreground/90 hover:scale-105 transition-all duration-300"
            >
              Start a project
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground bg-background/50 backdrop-blur-md rounded-full"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl rounded-3xl border border-border"
            >
              <ul className="flex flex-col gap-1 p-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="block px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-xl transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li className="pt-2 mt-2 border-t border-border">
                  <a
                    href="/#contact"
                    onClick={(e) => handleNavClick(e, '/#contact')}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-foreground text-background font-medium"
                  >
                    Start a project
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navigation;
