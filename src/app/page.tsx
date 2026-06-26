"use client";

import { LoadingScreen, CustomCursor, ScrollProgress, Navbar } from "@/components/ui";
import {
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  Achievements,
  Certificates,
  Education,
  Activities,
  Contact,
  Footer,
} from "@/sections";
import { useLenis } from "@/hooks";

export default function Home() {
  useLenis();

  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Certificates />
        <Education />
        <Activities />
        <Contact />
      </main>
      <Footer />
      <div className="noise-overlay" />
    </>
  );
}
