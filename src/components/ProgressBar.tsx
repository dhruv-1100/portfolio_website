"use client";

import { useEffect, useRef } from "react";

export default function ProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      bar.style.width = `${(window.scrollY / totalHeight) * 100}%`;
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div ref={barRef} className="scroll-progress-bar" aria-hidden="true" />;
}
