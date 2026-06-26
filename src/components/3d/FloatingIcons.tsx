"use client";

import { motion } from "framer-motion";

const icons = [
  { label: "Java", x: 0, y: -120, delay: 0 },
  { label: "Python", x: 110, y: -40, delay: 0.3 },
  { label: "GitHub", x: 110, y: 60, delay: 0.6 },
  { label: "HTML", x: 0, y: 130, delay: 0.9 },
  { label: "CSS", x: -110, y: 60, delay: 1.2 },
  { label: "React", x: -110, y: -40, delay: 1.5 },
];

export function FloatingIcons() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {icons.map((icon, i) => (
        <motion.div
          key={icon.label}
          className="absolute"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: icon.delay + 0.5, duration: 0.5 }}
          style={{ translateX: icon.x, translateY: icon.y }}
        >
          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4 + i,
              ease: "easeInOut",
              repeat: Infinity,
              delay: icon.delay,
            }}
            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/20 bg-surface/60 backdrop-blur-md shadow-lg shadow-accent/5"
          >
            <span className="text-[10px] font-bold text-gradient">{icon.label}</span>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
