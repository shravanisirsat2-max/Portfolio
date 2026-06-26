"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils";

interface FadeInViewProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  distance?: number;
  once?: boolean;
  spring?: boolean;
}

export function FadeInView({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.8,
  distance = 60,
  once = true,
  spring = false,
}: FadeInViewProps) {
  const getInitial = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: distance };
      case "down":
        return { opacity: 0, y: -distance };
      case "left":
        return { opacity: 0, x: -distance };
      case "right":
        return { opacity: 0, x: distance };
      case "none":
        return { opacity: 0 };
    }
  };

  const getTransition = () => {
    if (spring) {
      return {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
        delay,
        mass: 1,
      };
    }
    return {
      duration,
      delay,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    };
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: "-100px" }}
      transition={getTransition()}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
