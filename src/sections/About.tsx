"use client";

import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { FiAward, FiUsers, FiTarget, FiBriefcase } from "react-icons/fi";
import { SectionHeading, CustomButton } from "@/components/ui";
import { FadeInView, StaggerContainer, StaggerItem } from "@/components/animations";
import { stats, personalInfo } from "@/constants";

function Counter({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const num = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]/g, "");
  const count = useSpring(0, { stiffness: 80, damping: 20 });
  const rounded = useTransform(count, (v) => Math.round(v));

  if (isNaN(num)) {
    return <span className={className}>{value}</span>;
  }

  if (isInView) {
    count.set(num);
  }

  return (
    <span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.08, 1], x: [0, 20, 0], y: [0, -10, 0] }}
          transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
          className="absolute left-1/4 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]"
        />
      </div>

      <div className="section-container px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="A passionate Computer Science Engineer dedicated to building impactful solutions."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - Portrait Placeholder */}
          <FadeInView direction="left" className="relative">
            <div className="relative mx-auto aspect-[3/4] max-w-md overflow-hidden rounded-3xl">
              {/* Animated rings */}
              <div className="absolute -inset-4">
                <div className="absolute inset-0 animate-pulse-glow rounded-[2rem]" />
                <div className="absolute -inset-8 animate-spin-slow rounded-[2rem] border border-accent/20" />
                <div className="absolute -inset-12 animate-spin-slow rounded-[2rem] border border-accent/10" style={{ animationDirection: "reverse" }} />
              </div>

              {/* Portrait */}
              <div className="relative h-full w-full overflow-hidden rounded-3xl bg-gradient-to-br from-accent/20 to-accent-secondary/10">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-accent/20">
                      <span className="text-5xl font-bold text-gradient">SS</span>
                    </div>
                    <p className="text-sm text-muted">Shravani Sirsat</p>
                    <p className="text-xs text-muted/60">Computer Science Engineer</p>
                  </div>
                </div>

                {/* Glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
            </div>
          </FadeInView>

          {/* Right - Content */}
          <FadeInView direction="right" className="flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 text-lg leading-relaxed text-muted"
            >
              I am a pre-final year Computer Science Engineering student at N.B. Navale Sinhagad
              College of Engineering, Solapur, with a perfect SGPA of 10 and 2nd rank in my
              engineering semesters. I specialize in full-stack development with expertise in
              Java, Python, React, and ASP.NET. As President of the Computer Science Student Association,
              I lead a community of 100+ students, organizing events and fostering technical growth.
            </motion.p>

            {/* Stats Grid */}
            <StaggerContainer className="mb-10 grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="group rounded-2xl border border-border bg-surface/50 p-4 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:bg-accent/5 sm:p-6">
                    <Counter
                      value={stat.value}
                      className="text-gradient block text-2xl font-bold sm:text-3xl md:text-4xl"
                    />
                    <span className="mt-1 block text-xs text-muted sm:mt-2 sm:text-sm">
                      {stat.label}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Highlights */}
            <StaggerContainer className="grid gap-3">
              {[
                {
                  icon: FiAward,
                  title: "Academic Excellence",
                  desc: "Perfect SGPA of 10 with 2nd Rank in Engineering",
                },
                {
                  icon: FiUsers,
                  title: "Leadership",
                  desc: "President of Computer Science Student Association, leading 100+ students",
                },
                {
                  icon: FiTarget,
                  title: "Internship Experience",
                  desc: "Web Development Intern at SGI Technology",
                },
                {
                  icon: FiBriefcase,
                  title: "Project Portfolio",
                  desc: "3 major projects including EcoFuelConnect, HMS & Placement Prep Guide",
                },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="flex items-center gap-4 rounded-xl border border-border bg-surface/30 p-4 backdrop-blur-sm transition-all duration-300 hover:border-accent/20">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <p className="text-sm text-muted">{item.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
