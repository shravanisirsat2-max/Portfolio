"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui";
import { FadeInView, StaggerContainer, StaggerItem } from "@/components/animations";
import { achievements } from "@/constants";
import { FiTarget, FiAward, FiStar } from "react-icons/fi";

const iconMap: Record<string, React.ReactNode> = {
  Trophy: <FiTarget className="h-6 w-6" />,
  Award: <FiAward className="h-6 w-6" />,
  Medal: <FiStar className="h-6 w-6" />,
};

export function Achievements() {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.1, 1], y: [0, -15, 0] }}
          transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
          className="absolute left-1/4 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-accent/5 blur-[100px]"
        />
      </div>

      <div className="section-container px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Achievements"
          subtitle="Milestones that define my journey."
        />

        <StaggerContainer className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {achievements.map((achievement, index) => (
            <StaggerItem key={achievement.title}>
              <FadeInView direction="up" delay={index * 0.15}>
                <motion.div
                  className="group relative overflow-hidden rounded-2xl border border-border bg-surface/30 p-6 backdrop-blur-sm transition-all duration-500 hover:border-accent/30 sm:p-8"
                  whileHover={{ y: -5 }}
                >
                  {/* Glow */}
                  <div className="pointer-events-none absolute -inset-20 bg-accent/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent/20 group-hover:shadow-lg group-hover:shadow-accent/20">
                      {iconMap[achievement.icon] || <FiStar className="h-6 w-6" />}
                    </div>

                    <h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-accent">
                      {achievement.title}
                    </h3>
                    <p className="text-muted">{achievement.description}</p>
                  </div>

                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-2xl border border-accent/0 transition-all duration-500 group-hover:border-accent/30" />
                </motion.div>
              </FadeInView>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
