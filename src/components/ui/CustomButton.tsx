"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils";

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
}

export function CustomButton({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  ...props
}: CustomButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const variants = {
    primary:
      "bg-accent-gradient text-white hover:shadow-lg hover:shadow-accent/25",
    secondary:
      "glass text-white hover:bg-white/10",
    ghost: "text-muted hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-5 py-3 text-sm sm:px-6 sm:py-3 sm:text-base md:px-8 md:py-4 md:text-lg",
  };

  const content = (
    <motion.button
      ref={ref}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative inline-flex items-center gap-2 overflow-hidden rounded-full font-medium transition-all duration-300",
        variants[variant],
        sizes[size],
        className,
      )}
      {...(props as any)}
    >
      <motion.div
        className="absolute inset-0 bg-white/10"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return content;
}
