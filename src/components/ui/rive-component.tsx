import { useEffect, useRef } from "react";
import { useRive, useStateMachineInput, Layout, Fit, Alignment } from "@rive-app/react-canvas";
import { cn } from "@/lib/utils";

interface RiveComponentProps {
  /** URL to the .riv file */
  src: string;
  /** Name of the State Machine to use */
  stateMachine: string;
  /** Name of the artboard (optional) */
  artboard?: string;
  /** Name of the input to trigger on hover (must be a Boolean input in Rive) */
  hoverInput?: string;
  /** Name of the input to trigger on click (must be a Trigger or Boolean input in Rive) */
  clickInput?: string;
  /** Controls layout fit (Cover, Contain, etc.) */
  fit?: Fit;
  /** Controls alignment */
  alignment?: Alignment;
  /** Class name for the container */
  className?: string;
  /** Auto-play the animation (default: true) */
  autoplay?: boolean;
}

export function RiveComponent({
  src,
  stateMachine,
  artboard,
  hoverInput,
  clickInput,
  fit = Fit.Contain,
  alignment = Alignment.Center,
  className,
  autoplay = true,
}: RiveComponentProps) {
  const { rive, RiveComponent: Canvas } = useRive({
    src,
    stateMachines: stateMachine,
    artboard,
    autoplay,
    layout: new Layout({
      fit,
      alignment,
    }),
  });

  // Connect to Hover Input (Boolean)
  const hoverInputRef = useStateMachineInput(
    rive,
    stateMachine,
    hoverInput || ""
  );

  // Connect to Click Input (Trigger or Boolean)
  const clickInputRef = useStateMachineInput(
    rive,
    stateMachine,
    clickInput || ""
  );

  const handleMouseEnter = () => {
    if (hoverInputRef) {
      hoverInputRef.value = true;
    }
  };

  const handleMouseLeave = () => {
    if (hoverInputRef) {
      hoverInputRef.value = false;
    }
  };

  const handleClick = () => {
    if (clickInputRef) {
      // Fire trigger or toggle boolean
      clickInputRef.fire();
    }
  };

  return (
    <div
      className={cn("h-64 w-full", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <Canvas />
    </div>
  );
}
