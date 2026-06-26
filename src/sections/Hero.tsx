"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiArrowDown, FiDownload, FiMail, FiExternalLink } from "react-icons/fi";
import { CustomButton } from "@/components/ui";
import { Particles } from "@/components/3d";
import { typingTexts, personalInfo } from "@/constants";

function seededRandom(seed: number): number {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

export function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = typingTexts[textIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentText.length) {
            setCharIndex(charIndex + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex(charIndex - 1);
          } else {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % typingTexts.length);
          }
        }
      },
      isDeleting ? 40 : 80,
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Gradient Orbs */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
          className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, ease: "easeInOut", repeat: Infinity, delay: 2 }}
          className="absolute right-0 top-1/2 h-[300px] w-[300px] translate-x-1/2 rounded-full bg-accent-secondary/10 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], x: [0, 15, 0], y: [0, 15, 0] }}
          transition={{ duration: 10, ease: "easeInOut", repeat: Infinity, delay: 4 }}
          className="absolute bottom-0 left-1/4 h-[250px] w-[250px] rounded-full bg-accent/10 blur-[100px]"
        />

        {/* Stars */}
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[2px] w-[2px] rounded-full bg-white"
            style={{
              left: `${(seededRandom(i) * 100).toFixed(4)}%`,
              top: `${(seededRandom(i + 50) * 100).toFixed(4)}%`,
              opacity: +(seededRandom(i + 100) * 0.5 + 0.1).toFixed(6),
            }}
            animate={{ y: [0, -30, 0], opacity: [0.1, 0.5, 0.1] }}
            transition={{
              duration: 6 + seededRandom(i + 150) * 6,
              ease: "easeInOut",
              repeat: Infinity,
              delay: seededRandom(i + 200) * 6,
            }}
          />
        ))}

        {/* Particles */}
        <div className="absolute inset-0">
          <Particles count={80} color="#FF1493" size={0.015} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8">
        <div className="flex w-full flex-col items-center justify-between gap-12 lg:flex-row">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 }}
            >
              <motion.p className="mb-4 text-lg text-muted lg:text-xl">
                Hello, I'm
              </motion.p>

              <h1 className="mb-2 text-4xl font-bold tracking-tighter sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl">
                Shravani
                <br />
                <span className="text-gradient">Sirsat</span>
              </h1>

              {/* Typing Animation */}
              <div className="mb-8 mt-4 flex items-center justify-center gap-2 lg:justify-start">
                <span className="text-lg text-muted lg:text-xl">
                  {typingTexts[textIndex].substring(0, charIndex)}
                </span>
                <span className="inline-block h-6 w-[2px] animate-pulse bg-accent lg:h-8" />
              </div>

              {/* Tagline */}
              <p className="mb-10 text-base text-muted sm:text-lg">
                Pre-Final Year · Computer Science Engineer
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              <CustomButton
                size="lg"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Projects
              </CustomButton>

              <CustomButton
                variant="secondary"
                size="lg"
                href={personalInfo.resumeUrl}
              >
                <FiDownload className="h-4 w-4" />
                Download Resume
              </CustomButton>

              <CustomButton
                variant="ghost"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <FiMail className="h-4 w-4" />
                Contact Me
              </CustomButton>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.8 }}
              className="mt-8 flex items-center justify-center gap-4 lg:justify-start"
            >
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:bg-accent/10"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGithub className="h-5 w-5 text-muted hover:text-accent" />
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:bg-accent/10"
                whileHover={{ scale: 1.15, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiLinkedin className="h-5 w-5 text-muted hover:text-accent" />
              </motion.a>
              <motion.a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:bg-accent/10"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiExternalLink className="h-5 w-5 text-muted hover:text-accent" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Side - 3D Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1], delay: 0.4 }}
            className="relative hidden flex-1 lg:block"
          >
            <div className="relative mx-auto h-[400px] w-[400px] xl:h-[500px] xl:w-[500px]">
              {/* Floating laptop placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Animated rings */}
                  <div className="absolute inset-0 animate-pulse-glow rounded-full" />
                  <div className="absolute -inset-4 animate-spin-slow rounded-full border border-accent/20" />
                  <div
                    className="absolute -inset-8 animate-spin-slow rounded-full border border-accent/10"
                    style={{ animationDirection: "reverse", animationDuration: "25s" }}
                  />

                  {/* Icon grid */}
                  <div className="relative grid h-[300px] w-[300px] grid-cols-2 gap-4">
                    {[
                      { label: "Java", delay: "0s" },
                      { label: "Python", delay: "0.5s" },
                      { label: "React", delay: "1s" },
                      { label: "Node.js", delay: "1.5s" },
                    ].map((item, i) => (
                      <motion.div
                        key={item.label}
                        className="flex items-center justify-center rounded-2xl border border-border bg-surface/50 backdrop-blur-sm"
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 4,
                          ease: "easeInOut",
                          repeat: Infinity,
                          delay: parseFloat(item.delay),
                        }}
                      >
                        <span className="text-gradient text-sm font-semibold">
                          {item.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted">Scroll</span>
          <FiArrowDown className="h-4 w-4 animate-scroll-indicator text-accent" />
        </motion.div>
      </div>
    </section>
  );
}
