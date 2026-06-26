"use client";

import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";
import { SectionHeading } from "@/components/ui";
import { FadeInView } from "@/components/animations";
import { education } from "@/constants";

export function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.1, 1], x: [0, 15, 0] }}
          transition={{ duration: 10, ease: "easeInOut", repeat: Infinity, delay: 2 }}
          className="absolute left-1/2 top-1/3 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-accent/5 blur-[120px]"
        />
      </div>

      <div className="section-container px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Education"
          subtitle="Academic background and achievements."
        />

        <div className="mx-auto max-w-3xl">
          {education.map((edu, index) => (
            <FadeInView key={edu.degree} direction="up" delay={index * 0.2}>
              <div className="relative flex gap-3 pb-12 last:pb-0 sm:gap-6">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-accent/30 bg-surface shadow-lg shadow-accent/10 sm:h-10 sm:w-10"
                  >
                    <FiBookOpen className="h-3 w-3 text-accent sm:h-4 sm:w-4" />
                  </motion.div>
                  {index < education.length - 1 && (
                    <div className="mt-2 h-full w-[2px] bg-gradient-to-b from-accent/30 to-transparent" />
                  )}
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="rounded-2xl border border-border bg-surface/30 p-4 backdrop-blur-sm transition-all duration-300 hover:border-accent/20 sm:p-6">
                    <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-sm font-semibold text-white sm:text-lg">
                        {edu.degree}
                      </h3>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                        className="text-xs font-medium text-accent sm:text-sm"
                      >
                        {edu.score}
                      </motion.span>
                    </div>
                    <p className="mb-1 text-xs text-muted sm:text-sm">{edu.institution}</p>
                    <p className="text-[10px] text-white/40 sm:text-xs">{edu.period}</p>
                    {edu.description && (
                      <p className="mt-2 text-xs text-white/60 sm:mt-3 sm:text-sm">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
