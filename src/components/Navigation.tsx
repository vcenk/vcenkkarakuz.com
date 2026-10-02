'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const navLinks = [
  { name: 'Work', href: '/#work' },
  { name: 'Services', href: '/#services' },
  { name: 'About', href: '/#about' },
  { name: 'Notes', href: '/blog' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.includes('#')) {
      setIsMobileMenuOpen(false);
      return;
    }

    event.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.slice(href.indexOf('#'));

    if (pathname !== '/') {
      router.push('/');
      window.setTimeout(() => document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' }), 180);
      return;
    }

    document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        isScrolled
          ? 'border-border bg-background/95 backdrop-blur-md'
          : 'border-transparent bg-background/80 backdrop-blur-sm'
      }`}
    >
      <nav className="section-container flex h-[76px] items-center justify-between">
        <Link href="/" className="group flex items-center gap-3" aria-label="Cenk Karakuz home">
          <span className="grid h-9 w-9 place-items-center bg-foreground font-display text-sm font-bold text-background transition-colors group-hover:bg-accent">
            CK
          </span>
          <span className="font-display text-[17px] font-semibold tracking-[-0.03em]">
            Cenk Karakuz
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link.href)}
                  className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/#contact"
            onClick={(event) => handleNavClick(event, '/#contact')}
            className="inline-flex h-10 items-center gap-2 bg-accent px-4 font-display text-sm font-semibold text-white transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_hsl(var(--foreground))]"
          >
            Let&apos;s talk
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="grid h-10 w-10 place-items-center border border-foreground md:hidden"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border bg-background md:hidden"
          >
            <div className="section-container py-5">
              <ul className="divide-y divide-border border-y border-border">
                {navLinks.map((link, index) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(event) => handleNavClick(event, link.href)}
                      className="flex items-center justify-between py-4 font-display text-2xl font-semibold"
                    >
                      {link.name}
                      <span className="font-mono text-[10px] text-muted-foreground">0{index + 1}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="/#contact"
                onClick={(event) => handleNavClick(event, '/#contact')}
                className="btn-accent mt-5 w-full"
              >
                Discuss a project
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navigation;
