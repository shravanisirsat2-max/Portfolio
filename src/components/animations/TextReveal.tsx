"use client";

import { motion } from "framer-motion";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
}

export function TextReveal({
  children,
  className,
  delay = 0,
  duration = 0.05,
  stagger = 0.02,
}: TextRevealProps) {
  const words = children.split(" ");

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: duration,
              delay: delay + i * stagger,
              ease: [0.25, 0.4, 0.25, 1],
            }}
            className="inline-block"
          >
            {word}
            {i < words.length - 1 && "\u00A0"}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
