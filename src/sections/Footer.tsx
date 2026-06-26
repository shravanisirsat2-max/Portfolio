"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiHeart, FiChevronUp } from "react-icons/fi";
import { FadeInView, StaggerContainer, StaggerItem } from "@/components/animations";
import { personalInfo } from "@/constants";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border py-12">
      <div className="section-container px-4 sm:px-6 lg:px-8">
        <FadeInView direction="up">
          <div className="flex flex-col items-center gap-8">
            {/* Logo */}
            <motion.button
              onClick={scrollToTop}
              className="group relative flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                className="absolute h-16 w-16 rounded-full bg-accent/10 blur-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
              />
              <span className="relative text-3xl font-bold tracking-tighter">
                S<span className="text-gradient">S</span>
              </span>
            </motion.button>

            {/* Social */}
            <div className="flex gap-6">
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent hover:shadow-lg hover:shadow-accent/20"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGithub className="h-4 w-4" />
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent hover:shadow-lg hover:shadow-accent/20"
                whileHover={{ scale: 1.15, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiLinkedin className="h-4 w-4" />
              </motion.a>
            </div>

            {/* Credits */}
            <motion.p
              className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-center text-xs text-muted sm:text-sm"
              whileHover={{ color: "rgba(255,255,255,0.8)" }}
              transition={{ duration: 0.3 }}
            >
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
              >
                <FiHeart className="inline h-3 w-3 text-accent sm:h-4 sm:w-4" />
              </motion.span>
              <span>using</span>
              {["Next.js", "TypeScript", "Tailwind", "Framer Motion"].map(
                (tech, i, arr) => (
                  <span key={tech}>
                    <span className="text-white/60">{tech}</span>
                    {i < arr.length - 1 && (
                      <span className="mx-1 text-white/20">·</span>
                    )}
                  </span>
                ),
              )}
            </motion.p>

            {/* Copyright */}
            <p className="text-xs text-white/30">
              &copy; {new Date().getFullYear()} Shravani Sirsat. All rights reserved.
            </p>

            {/* Scroll to top */}
            <motion.button
              onClick={scrollToTop}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
              whileHover={{ scale: 1.12, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiChevronUp className="h-4 w-4" />
            </motion.button>
          </div>
        </FadeInView>
      </div>
    </footer>
  );
}
