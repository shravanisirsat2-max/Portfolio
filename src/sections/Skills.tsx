"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui";
import { FadeInView, StaggerContainer, StaggerItem } from "@/components/animations";
import { skills } from "@/constants";
import {
  SiPython,
  SiPhp,
  SiC,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiDotnet,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiFigma,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { FiCode } from "react-icons/fi";

const iconMap: Record<string, IconType | null> = {
  "": null,
  SiPython,
  SiPhp,
  SiC,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiDotnet,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiFigma,
};

const categories = ["Languages", "Frontend", "Backend", "Database", "Tools"] as const;

export function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.1, 1], y: [0, 15, 0] }}
          transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
          className="absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-accent-secondary/5 blur-[120px]"
        />
      </div>

      <div className="section-container px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Technologies I work with to build digital solutions."
        />

        <div className="space-y-16">
          {categories.map((category) => {
            const categorySkills = skills.filter((s) => s.category === category);

            return (
              <FadeInView key={category} direction="up">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="mb-6 text-xl font-semibold text-white/80 sm:mb-8 sm:text-2xl"
                >
                  <span className="text-gradient">{category}</span>
                </motion.h3>

                <StaggerContainer staggerDelay={0.06} className="flex flex-wrap gap-3 sm:gap-4">
                  {categorySkills.map((skill) => {
                    const Icon = iconMap[skill.icon];
                    return (
                      <StaggerItem key={skill.name}>
                        <motion.div
                          className="group perspective-1000"
                          whileTap={{ scale: 0.95 }}
                        >
                          <div className="relative preserve-3d transition-all duration-500 group-hover:rotate-y-[-5deg] group-hover:rotate-x-[5deg]">
                            <div className="relative flex items-center gap-2 rounded-xl border border-border bg-surface/50 px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 sm:gap-3 sm:rounded-2xl sm:px-5 sm:py-3.5">
                              {/* Glow effect */}
                              <div className="absolute inset-0 rounded-xl bg-accent/5 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100 sm:rounded-2xl" />

                              {/* Animated border */}
                              <div className="absolute inset-0 rounded-xl border border-accent/0 transition-all duration-300 group-hover:border-accent/30 sm:rounded-2xl" />

                              <span className="relative z-10">
                                {Icon && (
                                  <Icon className="h-4 w-4 text-accent transition-transform duration-300 group-hover:scale-110 sm:h-5 sm:w-5" />
                                )}
                              </span>
                              <span className="relative z-10 text-xs font-medium text-white/80 transition-colors duration-300 group-hover:text-white sm:text-sm">
                                {skill.name}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      </StaggerItem>
                    );
                  })}
                </StaggerContainer>
              </FadeInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
