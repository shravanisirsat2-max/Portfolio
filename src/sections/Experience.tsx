"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiCheck } from "react-icons/fi";
import { SectionHeading } from "@/components/ui";
import { FadeInView } from "@/components/animations";
import { experiences } from "@/constants";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.1, 1], y: [0, -15, 0] }}
          transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
          className="absolute left-1/3 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]"
        />
      </div>

      <div className="section-container px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience"
          subtitle="Professional journey and industry exposure."
        />

        <div className="mx-auto max-w-3xl">
          {experiences.map((exp, index) => (
            <FadeInView key={exp.company} direction="up" delay={index * 0.2}>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[19px] top-0 h-full w-[2px] bg-gradient-to-b from-accent/50 to-transparent" />

                <div className="relative flex gap-3 pb-12 sm:gap-6">
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-surface shadow-lg shadow-accent/10 sm:h-10 sm:w-10"
                  >
                    <FiBriefcase className="h-3 w-3 text-accent sm:h-4 sm:w-4" />
                  </motion.div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="mb-6 rounded-2xl border border-border bg-surface/30 p-4 backdrop-blur-sm transition-all duration-300 hover:border-accent/20 sm:p-6">
                      <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h3 className="text-base font-semibold text-white sm:text-xl">
                            {exp.role}
                          </h3>
                          <p className="text-sm text-accent sm:text-base">{exp.company}</p>
                        </div>
                        <span className="text-xs text-muted sm:text-sm">{exp.period}</span>
                      </div>

                      <p className="mb-4 text-sm text-muted sm:text-base">{exp.description}</p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <FiCheck className="mt-0.5 h-3 w-3 shrink-0 text-accent sm:h-4 sm:w-4" />
                            <span className="text-xs text-white/70 sm:text-sm">
                              {achievement}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
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
