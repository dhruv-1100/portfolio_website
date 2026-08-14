"use client";

import { useState, useEffect } from "react";
import { RESUME_PATH } from "@/lib/site";

const NAV_ITEMS = [
  { href: "#about", label: "ABOUT", num: "02" },
  { href: "#education", label: "EDUCATION", num: "03" },
  { href: "#experience", label: "EXPERIENCE", num: "04" },
  { href: "#skills", label: "SKILLS", num: "05" },
  { href: "#projects", label: "PROJECTS", num: "06" },
  { href: "#contact", label: "CONTACT", num: "07" },
];

/** Hero (01) plus the six navigable sections. */
const TOTAL_SECTIONS = NAV_ITEMS.length + 1;
const TOTAL_LABEL = String(TOTAL_SECTIONS).padStart(2, "0");

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("01");

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    // Queried once rather than on every scroll event.
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[data-section-num]")
    );

    const update = () => {
      ticking = false;
      const currentScrollY = window.scrollY;

      setHidden(currentScrollY > lastScrollY && currentScrollY > 200);
      lastScrollY = currentScrollY;

      for (const sec of sections) {
        const top = sec.offsetTop - 300;
        if (currentScrollY >= top && currentScrollY < top + sec.offsetHeight) {
          setActiveSection(sec.getAttribute("data-section-num") || "01");
        }
      }
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeIndex = Math.max(0, parseInt(activeSection, 10) - 1);

  return (
    <header className={`navbar ${hidden ? "nav-hidden" : ""}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo" aria-label="Dhruv Patel — home">
          DP<span className="logo-dot">.</span>
        </a>

        <nav
          id="primary-navigation"
          className={`nav-links ${mobileOpen ? "mobile-open" : ""}`}
          aria-label="Main navigation"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link${
                activeSection === item.num ? " active" : ""
              }`}
              aria-current={activeSection === item.num ? "true" : undefined}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <div className="section-indicator" aria-hidden="true">
            <span className="indicator-num">{activeSection}</span>
            <span className="indicator-track">
              <span
                className="indicator-fill"
                style={{
                  left: `${(activeIndex / TOTAL_SECTIONS) * 100}%`,
                  width: `${100 / TOTAL_SECTIONS}%`,
                }}
              ></span>
            </span>
            <span className="indicator-total">{TOTAL_LABEL}</span>
          </div>

          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-resume"
          >
            <span>RESUME ↗</span>
          </a>

          <button
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="primary-navigation"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
