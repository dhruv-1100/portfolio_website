"use client";

export default function Hero() {
  return (
    <section className="hero-section" id="home" data-section-num="01">
      <div className="hero-container">
        <div className="hero-content-left">
          <div className="hero-badge">
            <span className="pulse-dot"></span> AVAILABLE FOR CS / ML ROLES
          </div>
          <h1 className="hero-name" id="heroName">
            <span className="name-line">
              <span className="name-text">DHRUV</span>
            </span>
            <span className="name-line">
              <span className="name-text">PATEL</span>
            </span>
          </h1>
          <div className="hero-accent-line"></div>
          <p className="hero-tagline">
            Building intelligent systems at the intersection of{" "}
            <strong className="text-highlight">Software Engineering</strong>,{" "}
            <strong className="text-highlight">Machine Learning</strong>, and
            High-Performance Computing.
          </p>
          <div className="hero-cta-group">
            <a href="#projects" className="btn-primary">
              <span>
                VIEW WORK <i className="fa-solid fa-arrow-right"></i>
              </span>
            </a>
            <a href="mailto:dhruv.012p@gmail.com" className="btn-secondary">
              <span>GET IN TOUCH ↗</span>
            </a>
          </div>
        </div>

        <div className="hero-content-right">
          <div className="hero-meta-card glass">
            <div className="meta-row">
              <span className="meta-label">CURRENT ROLE</span>
              <span className="meta-val">MS CS @ Stony Brook University</span>
            </div>
            <div className="meta-row">
              <span className="meta-label">LOCATION</span>
              <span className="meta-val">New York, USA</span>
            </div>
            <div className="meta-row">
              <span className="meta-label">SPECIALIZATION</span>
              <span className="meta-val">Deep Learning & Systems</span>
            </div>
            <div className="meta-row">
              <span className="meta-label">PREVIOUS ALMA MATER</span>
              <span className="meta-val">DA-IICT (CPI: 8.1 / 10)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <span className="scroll-text">SCROLL TO EXPLORE</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
