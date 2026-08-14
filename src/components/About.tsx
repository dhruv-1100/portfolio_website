"use client";

import { useEffect, useRef } from "react";

const STATS = [
  { target: 45, suffix: "%", decimals: 0, label: "PIC SIMULATION SPEEDUP" },
  { target: 200, suffix: "+", decimals: 0, label: "TPS UNDER RAFT CONSENSUS" },
  { target: 3.61, suffix: "", decimals: 2, label: "GRADUATE GPA / 4.00" },
  { target: 1, suffix: "ST", decimals: 0, label: "BAND OF AGENTS HACKATHON" },
];

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = statsRef.current;
    if (!node) return;

    const format = (el: HTMLElement, value: number) => {
      const suffix = el.getAttribute("data-suffix") || "";
      const decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
      el.textContent = value.toFixed(decimals) + suffix;
    };

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const statNumbers =
            entry.target.querySelectorAll<HTMLElement>(".stat-number");

          statNumbers.forEach((num) => {
            const target = parseFloat(num.getAttribute("data-target") || "0");

            // Respect reduced-motion: show the final value, skip the count-up.
            if (reduceMotion) {
              format(num, target);
              return;
            }

            const duration = 1500;
            const startTime = performance.now();

            const updateCount = (currentTime: number) => {
              const progress = Math.min(
                (currentTime - startTime) / duration,
                1
              );
              format(num, target * progress);
              if (progress < 1) requestAnimationFrame(updateCount);
            };

            requestAnimationFrame(updateCount);
          });

          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
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
            I am a software engineer and MS Computer Science candidate at{" "}
            <strong className="text-highlight">Stony Brook University</strong>,
            currently the sole engineer behind a production B2B industrial
            sourcing platform at Aaron Technologies.
          </p>
          <p>
            My work runs from the systems layer up. I have implemented{" "}
            <strong className="text-highlight">
              Raft and Multi-Paxos consensus
            </strong>{" "}
            for a strictly serializable transaction engine, replaced the
            dominant bottleneck in device-scale plasma simulations with a U-Net
            surrogate model (presented at{" "}
            <strong className="text-highlight">APS GEC 2025</strong>), and
            shipped a fully on-device multimodal AI compliance platform
            orchestrating five models on local CUDA.
          </p>
          <p>
            Before Stony Brook I earned a B.Tech. (Honours) in ICT with a Minor
            in Computational Science from{" "}
            <strong className="text-highlight">
              Dhirubhai Ambani University
            </strong>
            . Whether the problem is consensus under network partitions,
            inference latency on a single GPU, or an accessibility audit before
            a production launch, I care about the same thing: measurable results
            in shipped software.
          </p>
        </div>

        <div className="about-stats-column" ref={statsRef}>
          <div className="bento-stats-grid">
            {STATS.map((stat) => (
              <div className="stat-bento-card glass" key={stat.label}>
                <span
                  className="stat-number"
                  data-target={stat.target}
                  data-suffix={stat.suffix}
                  data-decimals={stat.decimals}
                >
                  {stat.target.toFixed(stat.decimals)}
                  {stat.suffix}
                </span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
