"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin } from "react-icons/fi";
import { SectionHeading } from "@/components/ui";
import { FadeInView, StaggerContainer, StaggerItem } from "@/components/animations";
import { personalInfo } from "@/constants";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    window.location.href = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${formState.name}&body=${formState.message}`;
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }}
          transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], y: [0, -20, 0] }}
          transition={{ duration: 12, ease: "easeInOut", repeat: Infinity, delay: 3 }}
          className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-accent-secondary/5 blur-[100px]"
        />
      </div>

      <div className="section-container px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get In Touch"
          subtitle="Let's connect and build something amazing together."
        />

        <FadeInView direction="up">
          <div className="mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/30 p-8 backdrop-blur-2xl md:p-12">
              {/* Background gradient */}
              <div className="pointer-events-none absolute -inset-40 bg-accent/5 opacity-30 blur-3xl" />

              <div className="relative z-10 grid gap-12 md:grid-cols-2">
                {/* Left - Info */}
                <div>
                  <h3 className="mb-8 text-2xl font-bold text-white">
                    Let's work together
                  </h3>

                  <StaggerContainer className="space-y-6">
                    {[
                      {
                        icon: FiMail,
                        label: "Email",
                        value: personalInfo.email,
                        href: `mailto:${personalInfo.email}`,
                      },
                      {
                        icon: FiPhone,
                        label: "Phone",
                        value: personalInfo.phone,
                        href: `tel:${personalInfo.phone}`,
                      },
                      {
                        icon: FiMapPin,
                        label: "Location",
                        value: personalInfo.location,
                      },
                    ].map((item) => (
                      <StaggerItem key={item.label}>
                        <motion.div
                          className="flex items-center gap-3 sm:gap-4"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 sm:h-12 sm:w-12">
                            <item.icon className="h-4 w-4 text-accent sm:h-5 sm:w-5" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs text-muted sm:text-sm">{item.label}</p>
                            {item.href ? (
                              <a
                                href={item.href}
                                className="block truncate text-sm text-white transition-colors hover:text-accent sm:text-base"
                              >
                                {item.value}
                              </a>
                            ) : (
                              <p className="truncate text-sm text-white sm:text-base">{item.value}</p>
                            )}
                          </div>
                        </motion.div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>

                  {/* Social */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-8 flex gap-4"
                  >
                    <motion.a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-border transition-colors hover:border-accent hover:bg-accent/10 sm:h-12 sm:w-12"
                      whileHover={{ scale: 1.12, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiGithub className="h-4 w-4 text-muted hover:text-accent sm:h-5 sm:w-5" />
                    </motion.a>
                    <motion.a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-border transition-colors hover:border-accent hover:bg-accent/10 sm:h-12 sm:w-12"
                      whileHover={{ scale: 1.12, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiLinkedin className="h-4 w-4 text-muted hover:text-accent sm:h-5 sm:w-5" />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Right - Form */}
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {[
                    { placeholder: "Your Name", type: "text", key: "name" },
                    { placeholder: "Your Email", type: "email", key: "email" },
                  ].map((field, i) => (
                    <motion.div
                      key={field.key}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                    >
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formState[field.key as keyof typeof formState]}
                        onChange={(e) =>
                          setFormState({ ...formState, [field.key]: e.target.value })
                        }
                        required
                        className="w-full rounded-xl border border-border bg-surface/50 px-4 py-3 text-sm text-white placeholder-muted outline-none transition-all duration-300 focus:border-accent focus:shadow-lg focus:shadow-accent/10 sm:px-5 sm:py-4 sm:text-base"
                      />
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      required
                      className="w-full resize-none rounded-xl border border-border bg-surface/50 px-4 py-3 text-sm text-white placeholder-muted outline-none transition-all duration-300 focus:border-accent focus:shadow-lg focus:shadow-accent/10 sm:px-5 sm:py-4 sm:text-base"
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="flex w-full items-center justify-center gap-3 rounded-xl bg-accent-gradient px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 sm:px-8 sm:py-4 sm:text-base"
                  >
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
                    >
                      <FiSend className="h-4 w-4 sm:h-5 sm:w-5" />
                    </motion.span>
                    Send Message
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
