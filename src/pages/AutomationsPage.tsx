import { motion } from "framer-motion";
import { Bot, Cpu, GitBranch, Network, Workflow } from "lucide-react";
import { WorkflowCard, type WorkflowItem } from "@/components/ui/workflow-card";

const workflows: WorkflowItem[] = [
  {
    id: "1",
    title: "Inbound Lead Qualification AI",
    description: "Automatically classifies emails, enriches data via Clearbit, and drafts replies.",
    platform: "n8n",
    integrations: ["Gmail", "OpenAI", "Slack", "HubSpot"],
    stats: { timeSaved: "5h / week", executionTime: "45s" },
    complexity: "High"
  },
  {
    id: "2",
    title: "Content Repurposing Engine",
    description: "Takes a YouTube video URL, generates transcript, blog post, and social tweets.",
    platform: "Make",
    integrations: ["YouTube", "Whisper", "GPT-4", "Notion"],
    stats: { timeSaved: "3h / video", executionTime: "2m" },
    complexity: "Medium"
  },
  {
    id: "3",
    title: "Daily Standup Aggregator",
    description: "Collects Slack updates and generates a summary report for the team lead.",
    platform: "Python",
    integrations: ["Slack", "Linear", "Notion"],
    stats: { timeSaved: "15m / day", executionTime: "10s" },
    complexity: "Low"
  },
  {
    id: "4",
    title: "Customer Support Triaging",
    description: "Routes tickets to the right engineer based on semantic similarity search.",
    platform: "LangChain",
    integrations: ["Zendesk", "Pinecone", "Jira"],
    stats: { timeSaved: "10h / week", executionTime: "1s" },
    complexity: "High"
  }
];

export default function AutomationsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Technical Header */}
      <div className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white sm:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <div className="relative container mx-auto flex max-w-5xl flex-col items-center text-center">
            <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 ring-1 ring-primary/50 backdrop-blur"
            >
                <Network className="h-8 w-8 text-primary" />
            </motion.div>
            
            <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-4xl font-bold tracking-tight sm:text-6xl"
            >
                Automated Systems &<br/>
                <span className="text-primary">AI Pipelines</span>
            </motion.h1>
            
            <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-6 max-w-2xl text-lg text-slate-400"
            >
                I build intelligent agents that work while I sleep. 
                Explore the blueprints behind my autonomous operations.
            </motion.p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto grid grid-cols-2 gap-8 px-6 py-8 sm:grid-cols-4">
             {[
                 { label: "Active Workflows", value: "12", icon: GitBranch },
                 { label: "Tasks Autom.", value: "4.5k/mo", icon: Bot },
                 { label: "Systems", value: "n8n / Make", icon: Workflow },
                 { label: "Uptime", value: "99.9%", icon: Cpu },
             ].map((stat, i) => (
                 <div key={i} className="flex flex-col items-center justify-center gap-2 text-center md:items-start md:text-left">
                     <div className="flex items-center gap-2 text-sm text-muted-foreground">
                         <stat.icon className="h-4 w-4" />
                         {stat.label}
                     </div>
                     <span className="text-2xl font-bold">{stat.value}</span>
                 </div>
             ))}
        </div>
      </div>

      {/* Workflows Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="mb-10">
            <h2 className="text-2xl font-semibold tracking-tight">System Blueprints</h2>
            <p className="text-muted-foreground">Open source automation templates for your business.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {workflows.map((workflow, i) => (
                <motion.div
                    key={workflow.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                >
                    <WorkflowCard workflow={workflow} className="h-full" />
                </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}
