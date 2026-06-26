"use client";

import { motion } from "framer-motion";

export function FloatingLaptop() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="relative"
      >
        {/* Screen */}
        <div className="relative mb-2">
          <div className="h-40 w-56 rounded-lg border border-accent/30 bg-gradient-to-br from-accent/10 to-accent-secondary/5 p-3 shadow-lg shadow-accent/20 sm:h-48 sm:w-64 md:h-56 md:w-80">
            {/* Code lines */}
            <div className="space-y-2">
              {[75, 60, 85, 45, 70, 55].map((width, i) => (
                <div
                  key={i}
                  className="h-2 rounded"
                  style={{
                    width: `${width}%`,
                    background: `linear-gradient(90deg, rgba(255,20,147,${0.3 + i * 0.1}), rgba(255,78,167,${0.2 + i * 0.08}))`,
                  }}
                />
              ))}
            </div>
          </div>
          {/* Screen glow */}
          <div className="absolute -inset-4 rounded-xl bg-accent/5 blur-2xl" />
        </div>

        {/* Base */}
        <div className="mx-auto h-1.5 w-48 rounded-full bg-gradient-to-r from-accent/30 to-accent-secondary/20 sm:w-56 md:w-72" />

        {/* Floating icons around laptop */}
        <motion.div
          animate={{ x: [0, 10, 0], y: [0, -5, 0] }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, delay: 0.5 }}
          className="absolute -right-8 -top-4 flex h-10 w-10 items-center justify-center rounded-xl border border-accent/20 bg-surface/50 backdrop-blur-sm"
        >
          <span className="text-[8px] font-bold text-accent">Java</span>
        </motion.div>
        <motion.div
          animate={{ x: [0, -8, 0], y: [0, 8, 0] }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
          className="absolute -left-10 top-8 flex h-10 w-10 items-center justify-center rounded-xl border border-accent/20 bg-surface/50 backdrop-blur-sm"
        >
          <span className="text-[7px] font-bold text-accent">React</span>
        </motion.div>
        <motion.div
          animate={{ x: [0, -5, 0], y: [0, -10, 0] }}
          transition={{ duration: 3.5, ease: "easeInOut", repeat: Infinity, delay: 1 }}
          className="absolute -bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-xl border border-accent/20 bg-surface/50 backdrop-blur-sm"
        >
          <span className="text-[7px] font-bold text-accent">Python</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
