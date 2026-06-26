"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiX,
  FiChevronRight,
  FiCheck,
} from "react-icons/fi";
import { SectionHeading, CustomButton } from "@/components/ui";
import { FadeInView } from "@/components/animations";
import { projects } from "@/constants";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.12, 1], x: [0, -15, 0] }}
          transition={{ duration: 11, ease: "easeInOut", repeat: Infinity }}
          className="absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-accent-secondary/5 blur-[120px]"
        />
      </div>

      <div className="section-container px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="Real-world solutions built with modern technologies."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <FadeInView
              key={project.title}
              direction="up"
              delay={index * 0.2}
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-border bg-surface/30 backdrop-blur-sm transition-all duration-500 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10"
                onClick={() => setSelectedProject(index)}
              >
                {/* Project Image Placeholder */}
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-accent/10 to-accent-secondary/5">
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center">
                      <div className="mx-auto mb-2 h-16 w-16 rounded-2xl bg-accent/20 p-4">
                        <FiChevronRight className="h-full w-full text-accent" />
                      </div>
                      <p className="text-sm text-muted">Click to explore</p>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm"
                  >
                    <motion.span
                      initial={{ scale: 0.9 }}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-full border border-white/20 px-6 py-3 text-sm text-white backdrop-blur-sm"
                    >
                      View Project Details
                    </motion.span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-2 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-muted">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i, type: "spring" }}
                        className="rounded-full border border-border bg-surface/50 px-3 py-1 text-xs text-muted"
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </FadeInView>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4 backdrop-blur-2xl"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 40 }}
                transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-border bg-surface/95 backdrop-blur-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                  <motion.button
                    onClick={() => setSelectedProject(null)}
                    className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface/50 transition-colors hover:border-accent hover:text-accent sm:right-6 sm:top-6 sm:h-10 sm:w-10"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiX className="h-4 w-4 sm:h-5 sm:w-5" />
                  </motion.button>

                <div className="p-5 sm:p-8 md:p-12">
                  {(() => {
                    const project = projects[selectedProject];
                    return (
                      <>
                        {/* Image Placeholder */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5 }}
                          className="mb-8 aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-accent/20 to-accent-secondary/10"
                        >
                          <div className="flex h-full items-center justify-center">
                            <div className="text-center">
                              <h3 className="text-xl font-bold text-white/30 sm:text-2xl">
                                {project.title}
                              </h3>
                              <p className="text-xs text-white/20 sm:text-sm">
                                Project Screenshot
                              </p>
                            </div>
                          </div>
                        </motion.div>

                        {/* Title & Description */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="mb-8"
                        >
                          <h2 className="text-2xl font-bold text-white md:text-4xl">
                            {project.title}
                          </h2>
                          <p className="mt-2 text-base text-muted sm:text-lg">
                            {project.description}
                          </p>
                        </motion.div>

                        {/* Tech Stack */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="mb-8"
                        >
                          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted sm:text-sm">
                            Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, i) => (
                              <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 + i * 0.05, type: "spring" }}
                                className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-xs text-accent sm:px-4 sm:py-2 sm:text-sm"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>

                        {/* Features */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="mb-8"
                        >
                          <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted sm:text-sm">
                            Key Features
                          </h4>
                          <div className="grid gap-3 sm:grid-cols-2">
                            {project.features.map((feature, i) => (
                              <motion.div
                                key={feature}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + i * 0.1 }}
                                className="flex items-start gap-3"
                              >
                                <FiCheck className="mt-0.5 h-3 w-3 shrink-0 text-accent sm:mt-1 sm:h-4 sm:w-4" />
                                <span className="text-xs text-white/80 sm:text-sm">
                                  {feature}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>

                        {/* Challenge & Solution */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="mb-8 grid gap-6 md:grid-cols-2"
                        >
                          <div className="rounded-2xl border border-border bg-surface/30 p-5 sm:p-6">
                            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted sm:text-sm">
                              Challenge
                            </h4>
                            <p className="text-xs text-white/70 sm:text-sm">
                              {project.challenges}
                            </p>
                          </div>
                          <div className="rounded-2xl border border-border bg-surface/30 p-5 sm:p-6">
                            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted sm:text-sm">
                              Solution
                            </h4>
                            <p className="text-xs text-white/70 sm:text-sm">
                              {project.solution}
                            </p>
                          </div>
                        </motion.div>

                        {/* Impact */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 }}
                          className="rounded-2xl border border-accent/20 bg-accent/5 p-5 sm:p-6"
                        >
                          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-accent sm:text-sm">
                            Impact
                          </h4>
                          <p className="text-xs text-white/80 sm:text-sm">{project.impact}</p>
                        </motion.div>
                      </>
                    );
                  })()}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
