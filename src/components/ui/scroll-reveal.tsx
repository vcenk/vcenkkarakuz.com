"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** Duration of the animation in seconds */
  duration?: number;
  /** Stagger time between children animations in seconds */
  stagger?: number;
  /** Y-axis offset for the starting position */
  yOffset?: number;
  /** ScrollTrigger start position (e.g., "top 80%") */
  triggerStart?: string;
  /** Whether to animate just the container or stagger the direct children */
  mode?: "container" | "children";
  /** Custom delay before starting */
  delay?: number;
}

export function ScrollReveal({
  children,
  className,
  duration = 0.8,
  stagger = 0.1,
  yOffset = 30,
  triggerStart = "top 85%",
  mode = "children",
  delay = 0,
  ...props
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(containerRef.current, { opacity: 1 });
        return;
      }

      // Initial state to avoid FOUC
      // We set this immediately before creating the tween
      
      if (mode === "children") {
        const items = gsap.utils.toArray(".reveal-item") as HTMLElement[];
        
        if (items.length > 0) {
           gsap.set(items, { autoAlpha: 0, y: yOffset });
           
           gsap.to(items, {
            duration: duration,
            autoAlpha: 1,
            y: 0,
            stagger: stagger,
            delay: delay,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: triggerStart,
              toggleActions: "play none none reverse", // Play on enter, reverse on leave up
              // alternatives: "play none none none" for play once
            },
          });
        }
      } else {
        // Container mode
        gsap.set(containerRef.current, { autoAlpha: 0, y: yOffset });
        
        gsap.to(containerRef.current, {
          duration: duration,
          autoAlpha: 1,
          y: 0,
          delay: delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: triggerStart,
            toggleActions: "play none none reverse",
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [duration, stagger, yOffset, triggerStart, mode, delay]);

  return (
    <div ref={containerRef} className={cn("", className)} {...props}>
      {mode === "children"
        ? React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              // Add a class to children for the selector
              return React.cloneElement(child as React.ReactElement, {
                className: cn(
                  (child as React.ReactElement).props.className,
                  "reveal-item"
                ),
              });
            }
            return child;
          })
        : children}
    </div>
  );
}
