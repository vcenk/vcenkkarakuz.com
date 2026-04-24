import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Linkedin, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/cenkkarakuz@gmail.com';

const projectTypes = [
  'SaaS Development',
  'Web Development',
  'n8n Automation',
  'Not sure yet',
];

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot — silently drop bot submissions
    if (formData.get('_honey')) return;

    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company') || 'Not provided',
      project_type: formData.get('project_type'),
      budget: formData.get('budget') || 'Not specified',
      message: formData.get('message'),
      _subject: `New project inquiry from ${formData.get('name')} via cenk.dev`,
      _template: 'table',
      _captcha: 'false',
    };

    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Submission failed');

      setIsSuccess(true);
      form.reset();
      toast.success("Message sent. I'll reply within 24 hours.");
    } catch (error) {
      toast.error('Something went wrong. Please email hello@cenk.dev directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative glass-card p-8 md:p-16 overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-accent/10 blur-[80px] rounded-full pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-5 gap-12 items-start">
            {/* Left: pitch */}
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border backdrop-blur-sm text-sm text-muted-foreground mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Accepting new projects
              </div>

              <h2 className="section-heading mb-6">
                Let's build
                <br />
                <span className="gradient-text">something good.</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-8">
                Tell me what you're working on. I reply within 24 hours with next steps and a quote — usually faster.
              </p>

              <div className="space-y-3 text-sm">
                <a
                  href="mailto:cenkkarakuz@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4 text-accent" />
                  cenkkarakuz@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/cenkkarakuz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-accent" />
                  linkedin.com/in/cenkkarakuz
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <p className="flex items-center gap-3 text-muted-foreground/70 text-xs pt-2">
                  Based in Vancouver, BC · Working with clients across Canada and worldwide
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-secondary/30 border border-accent/30 rounded-2xl p-10 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-2">Message sent</h3>
                  <p className="text-muted-foreground text-sm">
                    Thanks — I'll get back to you within 24 hours at the email you provided.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 text-sm text-accent hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot for spam */}
                  <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-muted-foreground mb-2">
                        Name <span className="text-accent">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/40 transition-all placeholder:text-muted-foreground/50"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-muted-foreground mb-2">
                        Email <span className="text-accent">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/40 transition-all placeholder:text-muted-foreground/50"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-xs font-medium text-muted-foreground mb-2">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Optional"
                        className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/40 transition-all placeholder:text-muted-foreground/50"
                      />
                    </div>

                    <div>
                      <label htmlFor="project_type" className="block text-xs font-medium text-muted-foreground mb-2">
                        Project type <span className="text-accent">*</span>
                      </label>
                      <select
                        id="project_type"
                        name="project_type"
                        required
                        defaultValue=""
                        className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/40 transition-all appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select one…</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-xs font-medium text-muted-foreground mb-2">
                      Estimated budget (CAD)
                    </label>
                    <input
                      id="budget"
                      name="budget"
                      type="text"
                      placeholder="Optional — e.g. $5K–$15K"
                      className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/40 transition-all placeholder:text-muted-foreground/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-muted-foreground mb-2">
                      Tell me about your project <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="What are you building, and what do you need help with?"
                      className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/40 transition-all placeholder:text-muted-foreground/50 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-muted-foreground/70 text-center">
                    Your message goes straight to my inbox. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
