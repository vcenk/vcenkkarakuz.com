import Link from 'next/link';
import { ArrowUpRight, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground py-12 text-background">
      <div className="section-container">
        <div className="grid gap-12 border-b border-background/20 pb-12 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center bg-background font-display text-sm font-bold text-foreground">CK</span>
              <span className="font-display text-xl font-semibold tracking-[-0.03em]">Cenk Karakuz</span>
            </Link>
            <p className="mt-6 max-w-xl font-display text-3xl font-medium leading-[1.08] tracking-[-0.04em] text-background/90 md:text-5xl">
              Independent product engineer building useful things for the web.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:justify-self-end lg:gap-20">
            <div>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-background/45">Navigate</p>
              <ul className="space-y-3 text-sm text-background/75">
                <li><a href="/#work" className="hover:text-white">Work</a></li>
                <li><a href="/#services" className="hover:text-white">Services</a></li>
                <li><a href="/#about" className="hover:text-white">About</a></li>
                <li><Link href="/blog" className="hover:text-white">Notes</Link></li>
              </ul>
            </div>
            <div>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-background/45">Explore</p>
              <ul className="space-y-3 text-sm text-background/75">
                <li><Link href="/case-studies/jobfoxy" className="hover:text-white">Job Foxy</Link></li>
                <li><Link href="/case-studies/photovid-studio" className="hover:text-white">photovid.studio</Link></li>
                <li><Link href="/case-studies/meet-and-eat" className="hover:text-white">Meet & Eat</Link></li>
                <li><a href="/#contact" className="inline-flex items-center gap-1 text-[#f0ff5c]">Start a project <ArrowUpRight className="h-3.5 w-3.5" /></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 pt-7 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-background/45">
            © {new Date().getFullYear()} Cenk Karakuz · Vancouver, BC
          </p>
          <div className="flex items-center gap-5">
            <a href="https://github.com/vcenk" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-background/55 transition-colors hover:text-white"><Github className="h-4 w-4" /></a>
            <a href="https://linkedin.com/in/cenkkarakuz" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-background/55 transition-colors hover:text-white"><Linkedin className="h-4 w-4" /></a>
            <a href="https://twitter.com/vcenkkarakuz" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-background/55 transition-colors hover:text-white"><Twitter className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
