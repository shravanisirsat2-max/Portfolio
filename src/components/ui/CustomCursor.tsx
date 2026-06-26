"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const cursorX = useSpring(0, { stiffness: 500, damping: 28, mass: 0.5 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28, mass: 0.5 });
  const cursorGlowX = useSpring(0, { stiffness: 300, damping: 30, mass: 0.8 });
  const cursorGlowY = useSpring(0, { stiffness: 300, damping: 30, mass: 0.8 });

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      cursorGlowX.set(e.clientX);
      cursorGlowY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor-hover]")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, cursorGlowX, cursorGlowY]);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent mix-blend-difference md:block"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovering ? 2.5 : isClicking ? 0.8 : 1,
        }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full md:block"
        style={{
          x: cursorGlowX,
          y: cursorGlowY,
          scale: isHovering ? 2 : isClicking ? 0.6 : 1,
        }}
      >
        <div className="h-full w-full rounded-full bg-accent/10 blur-xl" />
      </motion.div>
    </>
  );
}
