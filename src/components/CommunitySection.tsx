import { motion } from 'framer-motion';
import { Users, Code, MessageSquare, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CommunitySection = () => {
  return (
    <section id="community" className="py-24 bg-muted/20 border-y">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Copy Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Build alongside other engineers.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                No gurus. No upsells. Just a group of builders sharing real production patterns, automation workflows, and code snippets.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Code className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Code Reviews</h3>
                  <p className="text-sm text-muted-foreground">Get feedback on your React components and architecture.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <MessageSquare className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Workflow Library</h3>
                  <p className="text-sm text-muted-foreground">Shared n8n blueprints and system prompt templates.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button size="lg" className="gap-2">
                <Users className="h-4 w-4" />
                Join Discord Server
              </Button>
            </div>
          </div>

          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border bg-card/50 p-8 shadow-sm backdrop-blur-sm lg:p-12"
          >
             {/* Abstract Representation of Community Activity */}
             <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-700" />
                    <div className="space-y-2">
                        <div className="h-4 w-32 rounded bg-slate-200 dark:bg-slate-700" />
                        <div className="h-16 w-full max-w-sm rounded bg-slate-100 dark:bg-slate-800 p-3 text-xs text-muted-foreground">
                            Anyone have a clean pattern for handling race conditions in React Query mutations?
                        </div>
                    </div>
                </div>

                <div className="flex items-start gap-4 pl-12">
                    <div className="h-10 w-10 rounded-full bg-primary/20" />
                    <div className="space-y-2">
                        <div className="h-4 w-24 rounded bg-slate-200 dark:bg-slate-700" />
                         <div className="h-auto w-full max-w-sm rounded bg-primary/5 border border-primary/10 p-3 text-xs">
                            <span className="font-mono text-primary">@useMutation</span> with optimistic updates is usually the way to go. Check the snippet I just pinned in #resources.
                        </div>
                    </div>
                </div>
             </div>

             <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-3xl" />
             <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CommunitySection;