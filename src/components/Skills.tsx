"use client";

import { useEffect } from "react";

export default function Skills() {
  useEffect(() => {
    const tiltCards = document.querySelectorAll<HTMLElement>(".tilt-card");

    const handleMouseMove = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
    };

    tiltCards.forEach((card) => {
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      tiltCards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <section className="section skills-section" id="skills" data-section-num="05">
      <div className="section-header reveal">
        <span className="section-label">05 // TECHNICAL CAPABILITIES</span>
        <h2 className="section-title">THE TOOLKIT</h2>
      </div>

      <div className="bento-skills-grid reveal">
        {/* Large Card 1: Languages */}
        <div className="bento-card glass bento-col-6 bento-row-2 tilt-card">
          <div className="bento-header">
            <span className="bento-tag">CORE LANGUAGES</span>
            <i className="fa-solid fa-code bento-icon"></i>
          </div>
          <h3 className="bento-card-title">Polyglot Foundations</h3>
          <div className="skill-pills-container">
            <span className="skill-pill highlight">
              <i className="fa-brands fa-python"></i> Python
            </span>
            <span className="skill-pill highlight">
              <i className="fa-solid fa-c"></i> C++
            </span>
            <span className="skill-pill">
              <i className="fa-brands fa-java"></i> Java
            </span>
            <span className="skill-pill">
              <i className="fa-solid fa-database"></i> SQL
            </span>
            <span className="skill-pill">C</span>
            <span className="skill-pill">MATLAB</span>
            <span className="skill-pill">R</span>
            <span className="skill-pill">HTML5 / CSS3</span>
          </div>
        </div>

        {/* Large Card 2: ML & AI */}
        <div className="bento-card glass bento-col-6 bento-row-2 tilt-card">
          <div className="bento-header">
            <span className="bento-tag">INTELLIGENCE</span>
            <i className="fa-solid fa-brain bento-icon"></i>
          </div>
          <h3 className="bento-card-title">Machine Learning & AI</h3>
          <div className="skill-pills-container">
            <span className="skill-pill highlight">PyTorch</span>
            <span className="skill-pill highlight">TensorFlow</span>
            <span className="skill-pill">Scikit-Learn</span>
            <span className="skill-pill">Keras</span>
            <span className="skill-pill">NumPy</span>
            <span className="skill-pill">Pandas</span>
            <span className="skill-pill">Computer Vision</span>
            <span className="skill-pill">Adversarial ML</span>
          </div>
        </div>

        {/* Medium Card 3: Cloud & Tools */}
        <div className="bento-card glass bento-col-7 bento-row-2 tilt-card">
          <div className="bento-header">
            <span className="bento-tag">DEVOPS & CLOUD</span>
            <i className="fa-solid fa-cloud bento-icon"></i>
          </div>
          <h3 className="bento-card-title">Infrastructure & Platforms</h3>
          <div className="skill-pills-container">
            <span className="skill-pill highlight">
              <i className="fa-brands fa-git-alt"></i> Git / GitHub
            </span>
            <span className="skill-pill">
              <i className="fa-brands fa-docker"></i> Kubernetes
            </span>
            <span className="skill-pill">Google Cloud (GCP)</span>
            <span className="skill-pill">Microsoft Azure</span>
            <span className="skill-pill">
              <i className="fa-brands fa-linux"></i> Linux Clusters
            </span>
            <span className="skill-pill">PostgreSQL</span>
            <span className="skill-pill">MySQL</span>
            <span className="skill-pill">
              <i className="fa-brands fa-react"></i> React
            </span>
          </div>
        </div>

        {/* Medium Card 4: Hardware & Domains */}
        <div className="bento-card glass bento-col-5 bento-row-2 tilt-card">
          <div className="bento-header">
            <span className="bento-tag">HARDWARE & FOCUS</span>
            <i className="fa-solid fa-microchip bento-icon"></i>
          </div>
          <h3 className="bento-card-title">Systems & Hardware</h3>
          <div className="skill-pills-container">
            <span className="skill-pill">Arduino</span>
            <span className="skill-pill">LTSpice</span>
            <span className="skill-pill">Keil</span>
            <span className="skill-pill">Cisco Packet Tracer</span>
            <span className="skill-pill highlight">HPC & Parallel Computing</span>
          </div>
        </div>
      </div>
    </section>
  );
}
