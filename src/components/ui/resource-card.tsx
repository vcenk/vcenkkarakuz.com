"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Download, ExternalLink, Lock, FileText, Component, Box } from "lucide-react";

export type ResourceType = "Prompt" | "Document" | "Component" | "Animation" | "Course";

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  type: ResourceType;
  isPremium?: boolean;
  thumbnailUrl?: string;
  actionUrl?: string;
  stats?: string; // e.g., "1.2k downloads"
}

interface ResourceCardProps {
  resource: ResourceItem;
  className?: string;
}

const typeIcons: Record<ResourceType, React.ReactNode> = {
  Prompt: <FileText className="h-4 w-4" />,
  Document: <FileText className="h-4 w-4" />,
  Component: <Component className="h-4 w-4" />,
  Animation: <Box className="h-4 w-4" />,
  Course: <Lock className="h-4 w-4" />,
};

export function ResourceCard({ resource, className }: ResourceCardProps) {
  return (
    <Card className={cn("flex flex-col overflow-hidden transition-all hover:shadow-md", className)}>
      {/* Thumbnail Area */}
      <div className="relative aspect-video w-full bg-muted">
        {resource.thumbnailUrl ? (
          <img
            src={resource.thumbnailUrl}
            alt={resource.title}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-secondary/30 text-muted-foreground">
             {typeIcons[resource.type]}
          </div>
        )}
        
        <div className="absolute right-2 top-2">
            {resource.isPremium ? (
                <Badge variant="secondary" className="bg-amber-500/10 text-amber-600 dark:text-amber-400 hover:bg-amber-500/20 border-amber-500/20">
                    Premium
                </Badge>
            ) : (
                <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 border-emerald-500/20">
                    Free
                </Badge>
            )}
        </div>
      </div>

      <CardHeader className="p-4 pb-2">
        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            {typeIcons[resource.type]}
            <span>{resource.type}</span>
        </div>
        <h3 className="line-clamp-1 text-lg font-semibold tracking-tight">
          {resource.title}
        </h3>
      </CardHeader>

      <CardContent className="flex-1 p-4 pt-0">
        <p className="line-clamp-2 text-sm text-muted-foreground">
          {resource.description}
        </p>
      </CardContent>

      <CardFooter className="flex items-center justify-between border-t bg-muted/20 p-4">
        <span className="text-xs text-muted-foreground">{resource.stats}</span>
        <Button size="sm" variant={resource.isPremium ? "outline" : "default"} asChild>
            <a href={resource.actionUrl || "#"}>
                {resource.isPremium ? (
                    <>
                        <Lock className="mr-2 h-3.5 w-3.5" />
                        Unlock
                    </>
                ) : (
                    <>
                        <Download className="mr-2 h-3.5 w-3.5" />
                        Get
                    </>
                )}
            </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
