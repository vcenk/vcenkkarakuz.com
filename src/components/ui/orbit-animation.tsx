import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface OrbitItem {
  id: string | number;
  content: React.ReactNode;
}

export interface OrbitAnimationProps {
  /** List of items to display in the orbit */
  items: OrbitItem[];
  /** Radius of the orbit in pixels */
  radius?: number;
  /** Duration of one full rotation in seconds */
  duration?: number;
  /** Whether to pause animation on hover */
  pauseOnHover?: boolean;
  /** Optional class name for the container */
  className?: string;
  /** Optional class name for the item wrapper */
  itemClassName?: string;
  /** Center content (e.g. a logo or main icon) */
  centerContent?: React.ReactNode;
}

export function OrbitAnimation({
  items,
  radius = 150,
  duration = 20,
  pauseOnHover = true,
  className,
  itemClassName,
  centerContent,
}: OrbitAnimationProps) {
  const itemCount = items.length;
  const angleStep = 360 / itemCount;

  return (
    <div
      className={cn(
        "relative flex items-center justify-center",
        className
      )}
      style={{
        width: radius * 2 + 100, // Add padding for items
        height: radius * 2 + 100,
      }}
    >
      {/* Center Content */}
      {centerContent && (
        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          {centerContent}
        </div>
      )}

      {/* Orbit Track (Optional Visual) */}
      <div
        className="absolute rounded-full border border-dashed border-muted-foreground/20"
        style={{
          width: radius * 2,
          height: radius * 2,
        }}
      />

      {/* Rotating Container */}
      <motion.div
        className="absolute flex h-full w-full items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{
          duration: duration,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          width: radius * 2,
          height: radius * 2,
        }}
        whileHover={pauseOnHover ? { animationPlayState: "paused" } : undefined}
      >
        {items.map((item, index) => {
          const angle = index * angleStep;
          // Calculate position based on angle
          // We position absolutely from center, then translate out
          
          return (
            <motion.div
              key={item.id}
              className={cn(
                "absolute flex items-center justify-center",
                itemClassName
              )}
              style={{
                // Position at the center first
                top: "50%",
                left: "50%",
                // Rotate to the correct angle, push out by radius, then un-rotate
                // But since the parent is rotating, we just need to place them at the right initial angle
                // and then counter-rotate the item itself so it stays upright.
                
                // Actually, since the PARENT is rotating continuously, we just need to fix the items
                // at their specific angles on the circle.
                transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
              }}
            >
              <motion.div
                // Counter-rotate the content so it stays upright as the parent rotates
                animate={{ rotate: -360 }}
                transition={{
                  duration: duration,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                 {item.content}
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
