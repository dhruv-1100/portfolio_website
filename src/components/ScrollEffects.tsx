"use client";

import { useEffect } from "react";

/**
 * All document-level scroll and pointer effects live here so the sections
 * themselves can stay server components. Everything degrades gracefully:
 * without JS the reveal styles never hide content (see globals.css), and
 * under prefers-reduced-motion the animations are skipped entirely.
 */
export default function ScrollEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const cleanups: Array<() => void> = [];

    // --- Scroll reveal -----------------------------------------------------
    const revealElements =
      document.querySelectorAll<HTMLElement>(".reveal");

    if (reduceMotion) {
      revealElements.forEach((el) => el.classList.add("visible"));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      revealElements.forEach((el) => observer.observe(el));
      cleanups.push(() => observer.disconnect());
    }

    // --- Timeline progress strokes ----------------------------------------
    const timelines = [
      { section: document.getElementById("education"), stroke: document.getElementById("eduProgress") },
      { section: document.getElementById("experience"), stroke: document.getElementById("expProgress") },
    ].filter(
      (t): t is { section: HTMLElement; stroke: HTMLElement } =>
        Boolean(t.section && t.stroke)
    );

    let ticking = false;

    const updateTimelines = () => {
      ticking = false;
      for (const { section, stroke } of timelines) {
        const rect = section.getBoundingClientRect();
        const visibleTop = Math.max(0, window.innerHeight - rect.top);
        const percentage = Math.min(
          100,
          Math.max(0, (visibleTop / rect.height) * 100)
        );
        stroke.style.height = `${percentage}%`;
      }
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateTimelines);
    };

    if (timelines.length > 0) {
      window.addEventListener("scroll", handleScroll, { passive: true });
      updateTimelines();
      cleanups.push(() =>
        window.removeEventListener("scroll", handleScroll)
      );
    }

    // --- Card tilt ---------------------------------------------------------
    if (!reduceMotion && window.matchMedia("(hover: hover)").matches) {
      const tiltCards = document.querySelectorAll<HTMLElement>(".tilt-card");

      const handleMouseMove = (e: MouseEvent) => {
        const card = e.currentTarget as HTMLElement;
        const rect = card.getBoundingClientRect();
        const rotateX =
          ((e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * -8;
        const rotateY =
          ((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 8;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      };

      const handleMouseLeave = (e: MouseEvent) => {
        (e.currentTarget as HTMLElement).style.transform =
          "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
      };

      tiltCards.forEach((card) => {
        card.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseleave", handleMouseLeave);
      });

      cleanups.push(() =>
        tiltCards.forEach((card) => {
          card.removeEventListener("mousemove", handleMouseMove);
          card.removeEventListener("mouseleave", handleMouseLeave);
        })
      );
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
