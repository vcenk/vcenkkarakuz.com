"use client";

import { cn } from "@/lib/utils";

interface ShimmerSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional overlay color for the shimmer gradient */
  shimmerColor?: string;
}

export function ShimmerSkeleton({
  className,
  shimmerColor = "rgba(255, 255, 255, 0.2)",
  ...props
}: ShimmerSkeletonProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-md bg-muted",
        className
      )}
      role="status"
      aria-busy="true"
      {...props}
    >
      <div
        className="absolute inset-0 -translate-x-full animate-shimmer"
        style={{
          background: `linear-gradient(90deg, transparent, ${shimmerColor}, transparent)`,
        }}
      />
      {/* Screen reader only text for accessibility */}
      <span className="sr-only">Loading...</span>
    </div>
  );
}
