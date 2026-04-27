"use client";

import * as React from "react";
import { Highlight, themes, type Language } from "prism-react-renderer";
import { Check, Copy, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ComponentCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  code: string;
  language?: Language;
  children: React.ReactNode;
}

export function ComponentCard({
  title,
  description,
  code,
  language = "tsx",
  children,
  className,
  ...props
}: ComponentCardProps) {
  const [hasCopied, setHasCopied] = React.useState(false);

  const copyToClipboard = React.useCallback(async () => {
    await navigator.clipboard.writeText(code);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  }, [code]);

  return (
    <Card className={cn("w-full overflow-hidden", className)} {...props}>
      {(title || description) && (
        <CardHeader className="bg-muted/30 pb-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              {title && <CardTitle className="text-lg">{title}</CardTitle>}
              {description && (
                <CardDescription>{description}</CardDescription>
              )}
            </div>
          </div>
        </CardHeader>
      )}
      <CardContent className="p-0">
        <Tabs defaultValue="preview" className="relative w-full">
          <div className="flex items-center justify-between border-b bg-muted/30 px-4 py-2">
            <TabsList className="h-9 w-auto bg-transparent p-0">
              <TabsTrigger
                value="preview"
                className="relative h-9 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none"
              >
                Preview
              </TabsTrigger>
              <TabsTrigger
                value="code"
                className="relative h-9 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none"
              >
                Code
              </TabsTrigger>
            </TabsList>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-muted-foreground hover:text-foreground"
                onClick={copyToClipboard}
                title="Copy code"
              >
                {hasCopied ? (
                  <Check className="h-3.5 w-3.5" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
                <span className="sr-only">Copy code</span>
              </Button>
            </div>
          </div>

          <TabsContent value="preview" className="m-0 min-h-[350px] p-6">
            <div className="flex min-h-[350px] w-full items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
              {children}
            </div>
          </TabsContent>

          <TabsContent value="code" className="m-0 border-t bg-zinc-950 dark:bg-zinc-950/50">
            <div className="relative">
              <div className="absolute right-4 top-4 z-10">
                <div className="flex items-center gap-2 rounded-md border bg-muted/50 px-2 py-1 text-xs text-muted-foreground backdrop-blur-md">
                   <Terminal className="h-3 w-3" />
                   {language}
                </div>
              </div>
              <Highlight
                theme={themes.nightOwl}
                code={code}
                language={language}
              >
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                  <pre
                    className={cn(
                      "max-h-[450px] overflow-auto p-4 text-sm scrollbar-thin scrollbar-track-transparent scrollbar-thumb-muted-foreground/20",
                      className
                    )}
                    style={{
                      ...style,
                      backgroundColor: "transparent",
                    }}
                  >
                    {tokens.map((line, i) => (
                      <div key={i} {...getLineProps({ line })}>
                        <span className="mr-4 inline-block w-6 select-none text-right text-xs text-muted-foreground/40">
                          {i + 1}
                        </span>
                        {line.map((token, key) => (
                          <span key={key} {...getTokenProps({ token })} />
                        ))}
                      </div>
                    ))}
                  </pre>
                )}
              </Highlight>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
