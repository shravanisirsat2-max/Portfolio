"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui";
import { StaggerContainer, StaggerItem } from "@/components/animations";
import { activities } from "@/constants";

export function Activities() {
  return (
    <section
      id="activities"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.1, 1], y: [0, 15, 0] }}
          transition={{ duration: 11, ease: "easeInOut", repeat: Infinity }}
          className="absolute right-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-accent-secondary/5 blur-[100px]"
        />
      </div>

      <div className="section-container px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Extra Curricular"
          subtitle="Additional experiences and certifications."
        />

        <StaggerContainer className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {activities.map((activity) => (
            <StaggerItem key={activity.title}>
              <motion.div
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface/30 p-5 backdrop-blur-sm transition-all duration-500 hover:border-accent/30 sm:p-6"
                whileHover={{ y: -4 }}
              >
                <div className="relative z-10">
                  <div className="mb-4">
                    <motion.div
                      className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1"
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        className="h-2 w-2 rounded-full bg-accent"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
                      />
                      <span className="text-xs text-accent">Active</span>
                    </motion.div>
                  </div>

                  <h3 className="mb-2 text-base font-semibold text-white transition-colors duration-300 group-hover:text-accent sm:text-lg">
                    {activity.title}
                  </h3>
                  <p className="text-xs text-muted sm:text-sm">{activity.description}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
