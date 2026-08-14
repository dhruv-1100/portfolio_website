export default function Education() {
  return (
    <section
      className="section education-section"
      id="education"
      data-section-num="03"
    >
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
            <div className="timeline-badge-date">
              AUG 2025 – MAY 2027 (EXPECTED)
            </div>
            <h3 className="timeline-role">
              Master of Science in Computer Science
            </h3>
            <p className="timeline-org">
              Stony Brook University, Stony Brook, NY
            </p>
            <p className="timeline-desc">
              Graduate coursework and research across distributed systems,
              machine learning, and software engineering — the foundation behind
              the consensus, agent orchestration, and GPU inference work in the
              projects below.
            </p>
            <div className="timeline-tags">
              <span className="mini-tag">GPA: 3.61 / 4.00</span>
              <span className="mini-tag">Distributed Systems</span>
              <span className="mini-tag">Machine Learning</span>
              <span className="mini-tag">Software Engineering</span>
            </div>
          </div>

          <div className="timeline-card glass reveal">
            <div className="timeline-badge-date">NOV 2020 – MAY 2024</div>
            <h3 className="timeline-role">
              B.Tech. (Honours) in Information &amp; Communication Technology
            </h3>
            <p className="timeline-org">
              Dhirubhai Ambani University (formerly DA-IICT), Gandhinagar, India
            </p>
            <p className="timeline-desc">
              Minor in Computational Science. Intensive curriculum spanning data
              structures, operating systems, computer networks, and deep neural
              networks, alongside two research appointments in scientific
              computing and software testing.
            </p>
            <div className="timeline-tags">
              <span className="mini-tag">GPA: 3.45 / 4.00</span>
              <span className="mini-tag">Minor: Computational Science</span>
              <span className="mini-tag">Honours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
