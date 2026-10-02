'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const featuredWork = [
  {
    number: '01',
    title: 'Job Foxy',
    category: 'Owned product · AI SaaS',
    description: 'An AI job application assistant that turns a scattered application process into one focused workflow.',
    contribution: 'Product strategy, UX, full-stack build',
    image: '/projects/jobfoxy.png',
    href: '/case-studies/jobfoxy',
    liveUrl: 'https://jobfoxy.com',
    tone: 'bg-[#f2cfff]',
  },
  {
    number: '02',
    title: 'photovid.studio',
    category: 'Owned product · Generative AI',
    description: 'A productized image and video generation experience built around a clear journey and credit-based usage.',
    contribution: 'Product design, AI workflows, monetization',
    image: '/projects/PhotoVidStudio.png',
    href: '/case-studies/photovid-studio',
    liveUrl: 'https://photovid.studio',
    tone: 'bg-[#d8d3ff]',
  },
  {
    number: '03',
    title: 'Meet & Eat',
    category: 'Client work · Hospitality',
    description: 'A mobile-first website that brings menu, ordering, catering, and reservations together for a Vancouver restaurant.',
    contribution: 'Content direction, web design, development',
    image: '/projects/MeetandEat.png',
    href: '/case-studies/meet-and-eat',
    liveUrl: 'https://meetandeat.ca',
    tone: 'bg-[#ffd7b8]',
  },
  {
    number: '04',
    title: 'VanCityGuide',
    category: 'Owned product · Content platform',
    description: 'A structured, hyperlocal guide for people moving to or exploring Greater Vancouver.',
    contribution: 'Information architecture, SEO, build',
    image: '/projects/VanCityGuide.png',
    href: '/case-studies/vancityguide',
    liveUrl: 'https://vancityguide.ca',
    tone: 'bg-[#ccefdc]',
  },
];

const additionalWork = [
  { name: 'Smart Calculator Pro', kind: 'Tool platform', href: '/case-studies/smart-calculator-pro' },
  { name: 'ExamCanada', kind: 'Education platform', href: '/case-studies/examcanada' },
  { name: 'LLC State Guide', kind: 'Content platform', href: '/case-studies/llc-state-guide' },
];

const SelectedWork = () => {
  return (
    <section id="work" className="border-b border-foreground/80 bg-white py-24 md:py-32">
      <div className="section-container">
        <div className="mb-14 grid gap-7 border-b border-foreground/80 pb-10 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <div>
            <span className="section-label">Selected work · 2025—2026</span>
            <h2 className="section-heading">Built, launched, and out in the world.</h2>
          </div>
          <p className="max-w-lg text-base leading-relaxed text-muted-foreground lg:justify-self-end lg:text-right md:text-lg">
            A focused selection of owned products and client work. Each project names the context, my role, and what actually shipped.
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-16 lg:grid-cols-2">
          {featuredWork.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: (index % 2) * 0.08 }}
              className={index % 2 === 1 ? 'lg:mt-24' : ''}
            >
              <Link href={project.href} className="group block">
                <div className={`relative overflow-hidden border border-foreground p-3 ${project.tone}`}>
                  <div className="absolute left-0 top-0 z-10 bg-foreground px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-background">
                    {project.number}
                  </div>
                  <div className="relative aspect-[16/10] overflow-hidden border border-foreground/20 bg-white">
                    <Image
                      src={project.image}
                      alt={`${project.title} product interface`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-[1fr_auto] gap-5 border-b border-foreground/80 py-6">
                  <div>
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-accent">{project.category}</p>
                    <h3 className="font-display text-3xl font-semibold tracking-[-0.045em] transition-colors group-hover:text-accent md:text-4xl">
                      {project.title}
                    </h3>
                  </div>
                  <span className="grid h-11 w-11 place-items-center border border-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </Link>

              <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">{project.description}</p>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.12em]">
                <span>{project.contribution}</span>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-accent"
                >
                  Visit live <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-20 border-t border-foreground/80 md:mt-28">
          <div className="grid gap-4 py-6 md:grid-cols-[1fr_2fr]">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">More shipped work</p>
            <div>
              {additionalWork.map((project) => (
                <Link
                  key={project.name}
                  href={project.href}
                  className="group flex items-center justify-between gap-4 border-b border-border py-4 first:pt-0"
                >
                  <span className="font-display text-xl font-semibold tracking-[-0.03em] group-hover:text-accent md:text-2xl">{project.name}</span>
                  <span className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                    {project.kind}
                    <ArrowUpRight className="h-4 w-4 text-foreground" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
