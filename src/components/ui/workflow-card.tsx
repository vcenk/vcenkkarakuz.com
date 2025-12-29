import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, Clock, GitBranch, Share2, Zap } from "lucide-react";

export interface WorkflowItem {
  id: string;
  title: string;
  description: string;
  platform: "n8n" | "Make" | "Python" | "LangChain";
  integrations: string[]; // e.g. ["Notion", "Slack", "OpenAI"]
  stats: {
    timeSaved: string; // "2h / week"
    executionTime: string; // "30s"
  };
  complexity: "Low" | "Medium" | "High";
}

interface WorkflowCardProps {
  workflow: WorkflowItem;
  className?: string;
}

export function WorkflowCard({ workflow, className }: WorkflowCardProps) {
  return (
    <Card className={cn("group relative flex flex-col transition-all hover:border-primary/50 hover:shadow-lg", className)}>
      <div className="absolute top-0 h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="font-mono text-xs text-primary">
            {workflow.platform}
          </Badge>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
             <span className={cn(
                 "inline-block h-2 w-2 rounded-full",
                 workflow.complexity === "Low" ? "bg-green-500" :
                 workflow.complexity === "Medium" ? "bg-yellow-500" : "bg-red-500"
             )} />
             {workflow.complexity} Complexity
          </div>
        </div>
        <h3 className="mt-2 text-xl font-bold leading-tight group-hover:text-primary transition-colors">
          {workflow.title}
        </h3>
      </CardHeader>

      <CardContent className="flex-1 pb-4">
        <p className="mb-4 text-sm text-muted-foreground">
          {workflow.description}
        </p>

        {/* Integration Nodes Visualization */}
        <div className="mb-4 flex items-center gap-2">
            {workflow.integrations.map((tool, index) => (
                <div key={tool} className="flex items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md border bg-muted/50 text-[10px] font-bold shadow-sm">
                        {tool.substring(0, 2).toUpperCase()}
                    </div>
                    {index < workflow.integrations.length - 1 && (
                        <div className="mx-1 h-[2px] w-4 bg-border" />
                    )}
                </div>
            ))}
        </div>

        <div className="grid grid-cols-2 gap-2 rounded-lg bg-muted/30 p-3">
            <div className="flex flex-col">
                <span className="text-[10px] uppercase text-muted-foreground">Time Saved</span>
                <div className="flex items-center gap-1 font-mono text-sm font-medium">
                    <Clock className="h-3 w-3 text-emerald-500" />
                    {workflow.stats.timeSaved}
                </div>
            </div>
            <div className="flex flex-col">
                <span className="text-[10px] uppercase text-muted-foreground">Avg. Run</span>
                <div className="flex items-center gap-1 font-mono text-sm font-medium">
                    <Zap className="h-3 w-3 text-amber-500" />
                    {workflow.stats.executionTime}
                </div>
            </div>
        </div>
      </CardContent>

      <CardFooter className="border-t bg-muted/10 p-4">
        <Button variant="ghost" size="sm" className="w-full justify-between hover:bg-primary/10 hover:text-primary">
          View Blueprint
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
