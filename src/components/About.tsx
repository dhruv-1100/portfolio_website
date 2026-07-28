"use client";

import { useEffect, useRef } from "react";

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll<HTMLElement>(".stat-number");
            statNumbers.forEach((num) => {
              const target = parseFloat(num.getAttribute("data-target") || "0");
              const suffix = num.getAttribute("data-suffix") || "";
              const decimals = parseInt(num.getAttribute("data-decimals") || "0", 10);
              const start = 0;
              const duration = 1500;
              const startTime = performance.now();

              const updateCount = (currentTime: number) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const currentVal = start + (target - start) * progress;

                num.textContent = currentVal.toFixed(decimals) + suffix;

                if (progress < 1) {
                  requestAnimationFrame(updateCount);
                }
              };

              requestAnimationFrame(updateCount);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section about-section" id="about" data-section-num="02">
      <div className="section-header reveal">
        <span className="section-label">02 // PROFILE</span>
        <h2 className="section-title">ENGINEERING WITH INTENT.</h2>
      </div>

      <div className="about-grid reveal">
        <div className="about-text-column">
          <p className="about-lead">
            I am a Computer Science Graduate Student at{" "}
            <strong className="text-highlight">Stony Brook University</strong>, driven
            by a passion for solving complex computational bottlenecks and
            architecting resilient software.
          </p>
          <p>
            My foundation was built at{" "}
            <strong className="text-highlight">DA-IICT</strong>, where I earned my
            B.Tech. (Honours) in ICT with a Minor in Computational Science (CPI:
            8.1/10). My research ranges from accelerating scientific simulations
            using hybrid deep learning architectures (U-Net) to benchmarking
            automated test-case prioritization algorithms.
          </p>
          <p>
            Whether optimizing CUDA kernels, engineering full-stack Web & Mobile
            solutions, or training computer vision models against adversarial
            attacks, I thrive on turning mathematical concepts into robust code.
          </p>
        </div>

        <div className="about-stats-column" ref={statsRef}>
          <div className="bento-stats-grid">
            <div className="stat-bento-card glass">
              <span
                className="stat-number"
                data-target="8.1"
                data-decimals="1"
              >
                0.0
              </span>
              <span className="stat-label">ACADEMIC CPI / 10</span>
            </div>
            <div className="stat-bento-card glass">
              <span className="stat-number" data-target="4" data-suffix="+">
                0
              </span>
              <span className="stat-label">CORE PROJECTS</span>
            </div>
            <div className="stat-bento-card glass">
              <span className="stat-number" data-target="2">
                0
              </span>
              <span className="stat-label">RESEARCH INITIATIVES</span>
            </div>
            <div className="stat-bento-card glass">
              <span className="stat-number" data-target="25" data-suffix="K+">
                0
              </span>
              <span className="stat-label">EVENT ATTENDEES MANAGED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
