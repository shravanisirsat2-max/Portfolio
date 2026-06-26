"use client";

import { motion, useSpring } from "framer-motion";
import { useScrollProgress } from "@/hooks";

export function ScrollProgress() {
  const progress = useScrollProgress();
  const scaleX = useSpring(progress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[9997] h-[2px] origin-left bg-accent-gradient"
      style={{ scaleX }}
    />
  );
}
