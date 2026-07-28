"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("01");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY = currentScrollY;

      const sections = document.querySelectorAll<HTMLElement>("section[data-section-num]");
      sections.forEach((sec) => {
        const top = sec.offsetTop - 300;
        const height = sec.offsetHeight;
        if (currentScrollY >= top && currentScrollY < top + height) {
          const num = sec.getAttribute("data-section-num") || "01";
          setActiveSection(num);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getIndicatorLeft = () => {
    const num = parseInt(activeSection, 10);
    return `${((num - 1) / 5) * 100}%`;
  };

  return (
    <header className={`navbar ${hidden ? "nav-hidden" : ""}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo" aria-label="Dhruv Patel Home">
          DP<span className="logo-dot">.</span>
        </a>

        <nav
          className={`nav-links ${mobileOpen ? "mobile-open" : ""}`}
          aria-label="Main Navigation"
        >
          <a href="#about" className="nav-link" onClick={() => setMobileOpen(false)}>
            ABOUT
          </a>
          <a
            href="#education"
            className="nav-link"
            onClick={() => setMobileOpen(false)}
          >
            EDUCATION
          </a>
          <a
            href="#experience"
            className="nav-link"
            onClick={() => setMobileOpen(false)}
          >
            EXPERIENCE
          </a>
          <a
            href="#skills"
            className="nav-link"
            onClick={() => setMobileOpen(false)}
          >
            SKILLS
          </a>
          <a
            href="#projects"
            className="nav-link"
            onClick={() => setMobileOpen(false)}
          >
            PROJECTS
          </a>
          <a
            href="#contact"
            className="nav-link"
            onClick={() => setMobileOpen(false)}
          >
            CONTACT
          </a>
        </nav>

        <div className="nav-actions">
          <div className="section-indicator" aria-label="Current Section">
            <span className="indicator-num">{activeSection}</span>
            <span className="indicator-track">
              <span
                className="indicator-fill"
                style={{ left: getIndicatorLeft() }}
              ></span>
            </span>
            <span className="indicator-total">06</span>
          </div>

          <a
            href="DhruvPatel_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-resume"
          >
            <span>RESUME ↗</span>
          </a>

          <button
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
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
