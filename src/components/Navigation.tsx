// src/components/Navigation.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Services', href: '/#what-i-build' },
  { name: 'Shop', href: '/shop' },
  { name: 'Projects', href: '/#products' },
  { name: 'Animations', href: '/animations' },
  { name: 'About', href: '/#about' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if we are on the shop page to enforce the solid background style if desired
  const isShop = location.pathname.startsWith('/shop');

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 pointer-events-none"
    >
      <nav
        className={`pointer-events-auto transition-all duration-500 ease-out ${
          isScrolled || isShop
            ? 'w-full max-w-5xl px-6 py-3 rounded-full bg-background/80 backdrop-blur-xl border border-border shadow-lg'
            : 'w-full px-2 py-2 bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-foreground text-background flex items-center justify-center font-bold font-display text-sm group-hover:bg-accent group-hover:text-foreground transition-colors">
              CK
            </div>
            <span className={`font-display font-bold text-lg tracking-tight ${!isScrolled && !isShop ? 'text-foreground' : ''}`}>
              Agency<span className="text-accent">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1 bg-background/50 backdrop-blur-sm px-2 py-1 rounded-full border border-border/20">
            {navLinks.map((link) => {
               const isActive = location.pathname === link.href;
               return (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'text-foreground font-medium bg-secondary' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link 
              to="/shop" 
              className="p-2 rounded-full text-foreground hover:bg-secondary hover:text-accent transition-colors relative group"
              aria-label="Shop"
            >
              <ShoppingBag size={20} />
            </Link>
            
            <a
              href="/#contact"
              className="px-5 py-2 text-sm font-medium rounded-full bg-foreground text-background hover:bg-foreground/90 hover:scale-105 transition-all duration-300"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground bg-background/50 backdrop-blur-md rounded-full"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
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
                    <Link
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-xl transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li className="pt-2 mt-2 border-t border-border">
                  <a
                    href="/#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-foreground text-background font-medium"
                  >
                    Hire Me
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