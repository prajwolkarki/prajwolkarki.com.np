"use client"

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue, type UseScrollOptions } from "motion/react";
import { createContext, useContext, type HTMLAttributes, type PropsWithChildren } from "react";
import { cn } from "@/lib/utils"; // This should be your clsx/twMerge utility

// Define the types for context
interface StackingCardsContextType {
  progress: MotionValue<number>;
  scaleMultiplier?: number;
  totalCards: number;
}

// Define the props interfaces
interface StackingCardsProps extends HTMLAttributes<HTMLDivElement>, PropsWithChildren {
  scrollOptions?: UseScrollOptions;
  scaleMultiplier?: number;
  totalCards: number;
}

interface StackingCardItemProps extends HTMLAttributes<HTMLDivElement>, PropsWithChildren {
  index: number;
  topPosition?: string;
}

// Create context for the stacking cards
const StackingCardsContext = createContext<StackingCardsContextType | null>(null);

const useStackingCardsContext = (): StackingCardsContextType => {
  const context = useContext(StackingCardsContext);
  if (!context)
    throw new Error("StackingCardItem must be used within StackingCards");
  return context;
};

// StackingCards component
function StackingCards({
  children,
  className,
  scrollOptions,
  scaleMultiplier = 0.03,
  totalCards,
  ...props
}: StackingCardsProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
    ...scrollOptions,
    target: targetRef,
  });

  return (
    <StackingCardsContext.Provider
      value={{ progress: scrollYProgress, scaleMultiplier, totalCards }}
    >
      <div className={cn(className)} ref={targetRef} {...props}>
        {children}
      </div>
    </StackingCardsContext.Provider>
  );
}

// StackingCardItem component
function StackingCardItem({
  index,
  topPosition,
  className,
  children,
  ...props
}: StackingCardItemProps) {
  const {
    progress,
    scaleMultiplier,
    totalCards,
  } = useStackingCardsContext();
  
  const scaleTo = 1 - (totalCards - index) * (scaleMultiplier ?? 0.03);
  const rangeScale = [index * (1 / totalCards), 1];
  const scale = useTransform(progress, rangeScale, [1, scaleTo]);
  const top = topPosition ?? `${5 + index * 3}%`;

  return (
    <div className={cn("h-full sticky top-0", className)} {...props}>
      <motion.div
        className={cn("origin-top relative h-full")}
        style={{ top, scale }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export { StackingCards, StackingCardItem };