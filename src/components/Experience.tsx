"use client";

export default function Experience() {
  return (
    <section className="section experience-section" id="experience" data-section-num="04">
      <div className="section-header reveal">
        <span className="section-label">04 // EXPERIENCE</span>
        <h2 className="section-title">RESEARCH & INDUSTRY IMPACT</h2>
      </div>

      <div className="timeline-wrapper reveal">
        <div className="timeline-track">
          <div className="timeline-progress-stroke" id="expProgress"></div>
        </div>

        <div className="timeline-items">
          <div className="timeline-card glass reveal">
            <div className="timeline-badge-date">JAN 2024 – JUL 2024</div>
            <h3 className="timeline-role">
              Research Project — Deep Learning for PIC Simulations
            </h3>
            <p className="timeline-org">DA-IICT, Gandhinagar, India</p>
            <ul className="timeline-bullets">
              <li>
                Architected a Hybrid Deep Learning Particle-in-Cell (PIC)
                simulation framework leveraging U-Net architecture, reducing
                computational resource demands while preserving{" "}
                <strong>96–98% simulation accuracy</strong>.
              </li>
              <li>
                Optimized ML pipelines on Linux clusters using Python C
                extensions, Physics-Informed Neural Networks (PINNs), and memory
                footprint reduction techniques.
              </li>
            </ul>
            <div className="timeline-tags">
              <span className="mini-tag">Python</span>
              <span className="mini-tag">U-Net</span>
              <span className="mini-tag">PINNs</span>
              <span className="mini-tag">C Extensions</span>
              <span className="mini-tag">HPC Linux Cluster</span>
            </div>
          </div>

          <div className="timeline-card glass reveal">
            <div className="timeline-badge-date">MAY 2023 – AUG 2023</div>
            <h3 className="timeline-role">
              Summer Research Intern — Software Testing & Optimization
            </h3>
            <p className="timeline-org">DA-IICT, Gandhinagar, India</p>
            <ul className="timeline-bullets">
              <li>
                Deployed and benchmarked 4 advanced Test Case Prioritization
                Algorithms against Accelerated Greedy Additional algorithms on
                open-source repositories.
              </li>
              <li>
                Engineered visualization & empirical analysis scripts using Python
                and R to assess test suite execution speed and fault detection
                rates.
              </li>
            </ul>
            <div className="timeline-tags">
              <span className="mini-tag">Software Testing</span>
              <span className="mini-tag">Algorithm Prioritization</span>
              <span className="mini-tag">Python</span>
              <span className="mini-tag">R</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
