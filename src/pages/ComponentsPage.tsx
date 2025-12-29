import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, Layers, Zap, Code, Paintbrush } from "lucide-react";
import { ComponentCard } from "@/components/ui/component-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// --- Types & Data ---

type Tag = "All" | "Framer Motion" | "GSAP" | "CSS" | "Rive";

interface ComponentItem {
  id: string;
  title: string;
  description: string;
  tags: Tag[];
  code: string;
  preview: React.ReactNode;
}

// Example Data
const components: ComponentItem[] = [
  {
    id: "orbit-1",
    title: "Orbit Animation",
    description: "Items rotating in a circular path using Framer Motion.",
    tags: ["Framer Motion"],
    code: `<OrbitAnimation items={...} radius={100} />`,
    preview: (
      <div className="flex h-40 w-40 items-center justify-center rounded-full border-2 border-dashed border-primary/20 bg-primary/5">
        <div className="animate-spin text-2xl">🪐</div>
      </div>
    ),
  },
  {
    id: "shimmer-1",
    title: "Shimmer Skeleton",
    description: "High-performance CSS-only loading state.",
    tags: ["CSS"],
    code: `<ShimmerSkeleton className="h-20 w-full" />`,
    preview: (
      <div className="w-full space-y-2 px-10">
        <div className="h-4 w-3/4 animate-pulse rounded bg-muted"></div>
        <div className="h-4 w-1/2 animate-pulse rounded bg-muted"></div>
      </div>
    ),
  },
  {
    id: "scroll-1",
    title: "Scroll Reveal",
    description: "GSAP ScrollTrigger staggered fade-in effect.",
    tags: ["GSAP"],
    code: `<ScrollReveal>...</ScrollReveal>`,
    preview: (
      <div className="flex flex-col gap-2">
         <div className="h-8 w-32 rounded bg-primary/20"></div>
         <div className="h-8 w-32 rounded bg-primary/40"></div>
         <div className="h-8 w-32 rounded bg-primary/60"></div>
      </div>
    ),
  },
  {
    id: "rive-1",
    title: "Interactive Character",
    description: "State machine driven Rive animation.",
    tags: ["Rive"],
    code: `<RiveComponent src="..." stateMachine="Walk" />`,
    preview: (
      <div className="flex items-center justify-center text-muted-foreground">
        <Layers className="h-10 w-10" />
      </div>
    ),
  },
];

const tags: { label: Tag; icon: React.ReactNode }[] = [
  { label: "All", icon: <Filter className="h-3.5 w-3.5" /> },
  { label: "Framer Motion", icon: <Zap className="h-3.5 w-3.5" /> },
  { label: "GSAP", icon: <Code className="h-3.5 w-3.5" /> },
  { label: "CSS", icon: <Paintbrush className="h-3.5 w-3.5" /> },
  { label: "Rive", icon: <Layers className="h-3.5 w-3.5" /> },
];

export default function ComponentsPage() {
  const [activeTag, setActiveTag] = useState<Tag>("All");

  const filteredComponents = components.filter(
    (item) => activeTag === "All" || item.tags.includes(activeTag)
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="border-b bg-muted/20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Component Library
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            A collection of production-ready animation components. 
            Built with React, Tailwind, and industry-standard motion libraries.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filter Bar */}
        <div className="mb-10 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Button
              key={tag.label}
              variant={activeTag === tag.label ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTag(tag.label)}
              className={cn(
                "gap-2 rounded-full transition-all",
                activeTag === tag.label && "ring-2 ring-primary ring-offset-2 ring-offset-background"
              )}
            >
              {tag.icon}
              {tag.label}
            </Button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
            layout
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredComponents.map((component) => (
              <motion.div
                key={component.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <ComponentCard
                  title={component.title}
                  description={component.description}
                  code={component.code}
                  className="h-full bg-card/50 backdrop-blur-sm"
                >
                  {component.preview}
                </ComponentCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredComponents.length === 0 && (
            <div className="py-20 text-center text-muted-foreground">
                <p>No components found for this category.</p>
            </div>
        )}
      </div>
    </div>
  );
}
