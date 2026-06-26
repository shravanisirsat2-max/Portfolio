"use client";

import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { SectionHeading } from "@/components/ui";
import { StaggerContainer, StaggerItem } from "@/components/animations";
import { certificates } from "@/constants";

export function Certificates() {
  return (
    <section
      id="certificates"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.12, 1], x: [0, 15, 0] }}
          transition={{ duration: 9, ease: "easeInOut", repeat: Infinity }}
          className="absolute right-1/3 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-accent-secondary/5 blur-[100px]"
        />
      </div>

      <div className="section-container px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Certificates"
          subtitle="Professional certifications and credentials."
        />

        <StaggerContainer className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
          {certificates.map((cert) => (
            <StaggerItem key={cert.title}>
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface/30 p-6 backdrop-blur-sm transition-all duration-500 hover:border-accent/30">
                {/* Glass shine effect */}
                <div className="pointer-events-none absolute -inset-full bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 transition-all duration-700 group-hover:inset-0 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-4">
                    <motion.div
                      className="mb-2 h-1 rounded-full bg-accent-gradient"
                      initial={{ width: 0 }}
                      whileInView={{ width: 48 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    />
                  </div>

                  <h3 className="mb-2 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-accent">
                    {cert.title}
                  </h3>
                  <p className="mb-1 text-sm text-muted">{cert.issuer}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/40">{cert.date}</span>
                    {cert.credentialUrl && (
                      <motion.a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent transition-colors hover:text-accent-secondary"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FiExternalLink className="h-4 w-4" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
