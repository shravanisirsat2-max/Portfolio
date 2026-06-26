"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils";
import { TextReveal } from "@/components/animations";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
  once?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  className,
  align = "center",
  once = true,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-12 md:mb-16 lg:mb-20",
        align === "center" && "text-center",
        className,
      )}
    >
      <h2 className="section-title mb-4 md:mb-6">
        <TextReveal
          className="text-gradient"
          duration={0.04}
          stagger={0.03}
        >
          {title}
        </TextReveal>
      </h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          className="section-subtitle mx-auto text-balance"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
