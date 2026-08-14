import { ArrowRight } from "lucide-react";
import { AVAILABILITY, EMAIL } from "@/lib/site";

export default function Hero() {
  return (
    <section className="hero-section" id="home" data-section-num="01">
      <div className="hero-container">
        <div className="hero-content-left">
          <div className="hero-badge">
            <span className="pulse-dot"></span> {AVAILABILITY}
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
            Software engineer building at the intersection of{" "}
            <strong className="text-highlight">distributed systems</strong>,{" "}
            <strong className="text-highlight">applied machine learning</strong>
            , and high-performance computing — from Raft consensus engines to
            on-device multimodal AI.
          </p>
          <div className="hero-cta-group">
            <a href="#projects" className="btn-primary">
              <span>VIEW WORK</span>
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a href={`mailto:${EMAIL}`} className="btn-secondary">
              <span>GET IN TOUCH ↗</span>
            </a>
          </div>
        </div>

        <div className="hero-content-right">
          <div className="hero-meta-card glass">
            <div className="meta-row">
              <span className="meta-label">CURRENT ROLE</span>
              <span className="meta-val">
                Software Engineer @ Aaron Technologies
              </span>
            </div>
            <div className="meta-row">
              <span className="meta-label">EDUCATION</span>
              <span className="meta-val">
                MS Computer Science @ Stony Brook (3.61 / 4.00)
              </span>
            </div>
            <div className="meta-row">
              <span className="meta-label">LOCATION</span>
              <span className="meta-val">New York, USA</span>
            </div>
            <div className="meta-row">
              <span className="meta-label">FOCUS</span>
              <span className="meta-val">
                Distributed Systems, ML Infrastructure & AI Agents
              </span>
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
