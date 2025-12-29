import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResourceCard, type ResourceItem, type ResourceType } from "@/components/ui/resource-card";

// --- Mock Data ---

const resources: ResourceItem[] = [
  {
    id: "1",
    title: "Ultimate Framer Motion Pack",
    description: "A collection of 50+ copy-paste ready Framer Motion variants.",
    type: "Animation",
    isPremium: true,
    stats: "2.4k sales",
    actionUrl: "#",
    thumbnailUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: "2",
    title: "SaaS Landing Page UI Kit",
    description: "Clean, conversion-focused React components for SaaS.",
    type: "Component",
    isPremium: false,
    stats: "15k downloads",
    actionUrl: "#",
    thumbnailUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: "3",
    title: "Deep Work AI Prompts",
    description: "System prompts for ChatGPT to act as a senior engineer.",
    type: "Prompt",
    isPremium: false,
    stats: "5k downloads",
    actionUrl: "#",
  },
  {
    id: "4",
    title: "Design System Documentation",
    description: "Notion template for documenting your component library.",
    type: "Document",
    isPremium: false,
    stats: "3.2k downloads",
    actionUrl: "#",
  },
   {
    id: "5",
    title: "Advanced React Patterns",
    description: "Master compound components and render props.",
    type: "Course",
    isPremium: true,
    stats: "Coming Soon",
    actionUrl: "#",
  },
];

const categories: (ResourceType | "All")[] = ["All", "Prompt", "Component", "Animation", "Document", "Course"];

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = resources.filter((item) => {
    const matchesCategory = activeTab === "All" || item.type === activeTab;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b bg-muted/30 px-6 py-24 sm:py-32">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold tracking-tight sm:text-6xl"
          >
            Developer Resources
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-muted-foreground"
          >
            Curated tools, components, and guides to accelerate your workflow.
            Stop reinventing the wheel.
          </motion.p>
          
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="mx-auto mt-10 flex max-w-md items-center gap-2"
          >
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Search resources..." 
                className="pl-9 bg-background/50 backdrop-blur"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Area */}
      <div className="container mx-auto px-6 py-12">
        
        {/* Category Tabs */}
        <div className="mb-10 flex items-center justify-center overflow-x-auto pb-4">
            <Tabs defaultValue="All" value={activeTab} onValueChange={setActiveTab} className="w-full max-w-3xl">
                <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 h-auto p-1">
                    {categories.map(cat => (
                        <TabsTrigger key={cat} value={cat} className="py-2">{cat}</TabsTrigger>
                    ))}
                </TabsList>
            </Tabs>
        </div>

        {/* Grid */}
        <motion.div 
            layout 
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredResources.map((resource) => (
              <motion.div
                key={resource.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <ResourceCard resource={resource} className="h-full" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredResources.length === 0 && (
            <div className="flex min-h-[300px] flex-col items-center justify-center text-center text-muted-foreground">
                <Search className="mb-4 h-10 w-10 opacity-20" />
                <p>No resources found matching your criteria.</p>
                <Button variant="link" onClick={() => { setActiveTab("All"); setSearchQuery("") }}>
                    Clear Filters
                </Button>
            </div>
        )}

      </div>
    </div>
  );
}
