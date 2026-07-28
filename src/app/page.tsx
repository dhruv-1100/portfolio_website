"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ProgressBar from "@/components/ProgressBar";

export default function Home() {
  useEffect(() => {
    // Scroll reveal observer
    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach((el) => observer.observe(el));

    // Timeline progress tracking
    const handleTimelineScroll = () => {
      const eduSec = document.getElementById("education");
      const expSec = document.getElementById("experience");
      const eduStroke = document.getElementById("eduProgress");
      const expStroke = document.getElementById("expProgress");

      if (eduSec && eduStroke) {
        const rect = eduSec.getBoundingClientRect();
        const height = rect.height;
        const visibleTop = Math.max(0, window.innerHeight - rect.top);
        const percentage = Math.min(100, Math.max(0, (visibleTop / height) * 100));
        eduStroke.style.height = `${percentage}%`;
      }

      if (expSec && expStroke) {
        const rect = expSec.getBoundingClientRect();
        const height = rect.height;
        const visibleTop = Math.max(0, window.innerHeight - rect.top);
        const percentage = Math.min(100, Math.max(0, (visibleTop / height) * 100));
        expStroke.style.height = `${percentage}%`;
      }
    };

    window.addEventListener("scroll", handleTimelineScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleTimelineScroll);
    };
  }, []);

  return (
    <>
      <ProgressBar />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
