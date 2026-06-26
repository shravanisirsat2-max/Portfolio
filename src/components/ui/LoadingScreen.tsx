"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let mounted = true;

    const handleLoad = () => {
      if (mounted) {
        setProgress(100);
        setTimeout(() => setIsLoading(false), 600);
      }
    };

    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 90) {
          clearInterval(interval);
          return 90;
        }
        return p + Math.random() * 15;
      });
    }, 400);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    const fallback = setTimeout(() => {
      clearInterval(interval);
      if (mounted) {
        setProgress(100);
        setTimeout(() => setIsLoading(false), 400);
      }
    }, 4000);

    return () => {
      mounted = false;
      clearInterval(interval);
      clearTimeout(fallback);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-background"
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0, transition: { delay: 0 } }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              className="mb-8"
            >
              <div className="relative flex items-center justify-center">
                <motion.div
                  className="absolute h-24 w-24 rounded-full bg-accent/20 blur-2xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
                />
                <div className="flex items-center gap-1">
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl font-bold sm:text-5xl"
                  >
                    S
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gradient text-4xl font-bold sm:text-5xl"
                  >
                    S
                  </motion.span>
                </div>
              </div>
            </motion.div>

            <div className="mb-6 h-[2px] w-40 overflow-hidden rounded-full bg-white/10 sm:w-48">
              <motion.div
                className="h-full rounded-full bg-accent-gradient"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xs text-muted sm:text-sm"
            >
              {progress < 100 ? "Loading..." : "Ready"}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
