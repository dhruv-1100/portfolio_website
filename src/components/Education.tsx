"use client";

export default function Education() {
  return (
    <section className="section education-section" id="education" data-section-num="03">
      <div className="section-header reveal">
        <span className="section-label">03 // ACADEMICS</span>
        <h2 className="section-title">EDUCATION & FOUNDATION</h2>
      </div>

      <div className="timeline-wrapper reveal">
        <div className="timeline-track">
          <div className="timeline-progress-stroke" id="eduProgress"></div>
        </div>

        <div className="timeline-items">
          <div className="timeline-card glass reveal">
            <div className="timeline-badge-date">AUG 2025 – MAY 2027 (EXPECTED)</div>
            <h3 className="timeline-role">Master of Science in Computer Science</h3>
            <p className="timeline-org">Stony Brook University, New York, USA</p>
            <p className="timeline-desc">
              Advanced coursework and research focusing on Software Engineering,
              Distributed Systems, Machine Learning algorithms, and high-performance
              backend infrastructure.
            </p>
            <div className="timeline-tags">
              <span className="mini-tag">Software Engineering</span>
              <span className="mini-tag">Machine Learning</span>
              <span className="mini-tag">Algorithms</span>
            </div>
          </div>

          <div className="timeline-card glass reveal">
            <div className="timeline-badge-date">NOV 2020 – MAY 2024</div>
            <h3 className="timeline-role">
              B.Tech. (Honours) in Information & Communication Tech
            </h3>
            <p className="timeline-org">DA-IICT, Gandhinagar, India</p>
            <p className="timeline-desc">
              Minor in Computational Science | Cumulative CPI: 8.1 / 10. Intensive
              curriculum spanning data structures, deep neural networks, operating
              systems, and computer networks.
            </p>
            <div className="timeline-tags">
              <span className="mini-tag">Minor: Computational Science</span>
              <span className="mini-tag">CPI: 8.1/10</span>
              <span className="mini-tag">Data Structures</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
