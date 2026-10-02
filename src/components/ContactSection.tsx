'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Linkedin, Loader2, Mail, Send } from 'lucide-react';
import { toast } from 'sonner';

const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/cenkkarakuz@gmail.com';

const projectTypes = [
  'Launch a product',
  'Rebuild a website',
  'Automate a workflow',
  'Not sure yet',
];

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    if (formData.get('_honey')) return;

    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company') || 'Not provided',
      project_type: formData.get('project_type'),
      budget: formData.get('budget') || 'Not specified',
      message: formData.get('message'),
      _subject: `New project inquiry from ${formData.get('name')} via vcenkkarakuz.com`,
      _template: 'table',
      _captcha: 'false',
    };

    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Submission failed');
      setIsSuccess(true);
      form.reset();
      toast.success("Message sent. I'll reply within 24 hours.");
    } catch {
      toast.error('Something went wrong. Please email cenkkarakuz@gmail.com directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass = 'w-full rounded-sm border border-foreground/25 bg-white px-4 py-3.5 text-sm text-foreground transition-colors placeholder:text-muted-foreground/60 hover:border-foreground/50 focus:border-accent focus:ring-accent';

  return (
    <section id="contact" className="bg-accent py-20 text-white md:py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20"
        >
          <div className="flex flex-col">
            <div className="mb-8 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/70">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f0ff5c] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#f0ff5c]" />
              </span>
              Available for selected projects
            </div>

            <h2 className="max-w-xl font-display text-5xl font-semibold leading-[0.92] tracking-[-0.055em] md:text-7xl lg:text-8xl">
              Have something worth shipping?
            </h2>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-white/75">
              Tell me what you&apos;re building, where it is today, and what needs to happen next. I&apos;ll reply with a useful first take.
            </p>

            <div className="mt-10 space-y-4 border-t border-white/25 pt-7 text-sm text-white/75 lg:mt-auto">
              <a href="mailto:cenkkarakuz@gmail.com" className="flex items-center gap-3 transition-colors hover:text-white">
                <Mail className="h-4 w-4 text-[#f0ff5c]" />
                cenkkarakuz@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/cenkkarakuz/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Linkedin className="h-4 w-4 text-[#f0ff5c]" />
                Connect on LinkedIn
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="border border-foreground bg-background p-5 text-foreground shadow-[10px_10px_0_0_hsl(var(--foreground))] sm:p-8 md:p-10">
            {isSuccess ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid min-h-[520px] place-items-center text-center">
                <div>
                  <div className="mx-auto mb-5 grid h-14 w-14 place-items-center bg-accent text-white">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-3xl font-semibold tracking-[-0.04em]">Message sent.</h3>
                  <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    Thanks for the context. I&apos;ll get back to you at the email you provided within 24 hours.
                  </p>
                  <button type="button" onClick={() => setIsSuccess(false)} className="mt-7 font-mono text-[10px] uppercase tracking-[0.15em] text-accent underline underline-offset-4">
                    Send another message
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="mb-7 flex items-end justify-between border-b border-foreground pb-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Project brief</p>
                    <h3 className="mt-2 font-display text-3xl font-semibold tracking-[-0.04em]">Start the conversation</h3>
                  </div>
                  <span className="hidden font-mono text-[10px] text-muted-foreground sm:block">Usually replies in 24h</span>
                </div>

                <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="text-xs font-medium" htmlFor="name">
                    Name <span className="text-accent">*</span>
                    <input id="name" name="name" required placeholder="Your full name" className={`${fieldClass} mt-2`} />
                  </label>
                  <label className="text-xs font-medium" htmlFor="email">
                    Email <span className="text-accent">*</span>
                    <input id="email" name="email" type="email" required placeholder="you@company.com" className={`${fieldClass} mt-2`} />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="text-xs font-medium" htmlFor="company">
                    Company
                    <input id="company" name="company" placeholder="Optional" className={`${fieldClass} mt-2`} />
                  </label>
                  <label className="text-xs font-medium" htmlFor="project_type">
                    What do you need? <span className="text-accent">*</span>
                    <select id="project_type" name="project_type" required defaultValue="" className={`${fieldClass} mt-2 cursor-pointer`}>
                      <option value="" disabled>Select one…</option>
                      {projectTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                    </select>
                  </label>
                </div>

                <label className="block text-xs font-medium" htmlFor="budget">
                  Estimated budget (CAD)
                  <input id="budget" name="budget" placeholder="Optional — e.g. $5K–$15K" className={`${fieldClass} mt-2`} />
                </label>

                <label className="block text-xs font-medium" htmlFor="message">
                  A little context <span className="text-accent">*</span>
                  <textarea id="message" name="message" required rows={5} placeholder="What are you building, and what would a good outcome look like?" className={`${fieldClass} mt-2 resize-none`} />
                </label>

                <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60">
                  {isSubmitting ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</> : <>Send project brief <Send className="h-4 w-4" /></>}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
