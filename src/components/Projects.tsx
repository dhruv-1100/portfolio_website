"use client";

export default function Projects() {
  return (
    <section className="section projects-section" id="projects" data-section-num="06">
      <div className="section-header reveal">
        <span className="section-label">06 // SELECTED WORK</span>
        <h2 className="section-title">FEATURED CASE STUDIES</h2>
      </div>

      <div className="projects-grid reveal">
        {/* Case Study 01 */}
        <article className="project-case-card glass tilt-card">
          <div className="project-card-accent-border"></div>
          <div className="project-card-header">
            <span className="project-number">01</span>
            <span className="project-category">MOBILE & FULL-STACK</span>
          </div>
          <h3 className="project-title">CANTEEN AUTOMATION SYSTEM</h3>
          <p className="project-description">
            Led an agile team to design and deploy a mobile-first canteen ordering
            and inventory management platform. Streamlined order queuing, transaction
            recording, and operational workflows for campus dining.
          </p>
          <div className="project-key-result">
            <span className="result-label">KEY RESULT:</span>
            <span className="result-value">Improved ordering efficiency by 30%</span>
          </div>
          <div className="project-tech-stack">
            <span>Flutter</span>
            <span>Mobile Dev</span>
            <span>Agile Methodology</span>
            <span>Team Lead</span>
          </div>
        </article>

        {/* Case Study 02 */}
        <article className="project-case-card glass tilt-card">
          <div className="project-card-accent-border"></div>
          <div className="project-card-header">
            <span className="project-number">02</span>
            <span className="project-category">NETWORKING & SYSTEMS</span>
          </div>
          <h3 className="project-title">LOCAL FILE SHARING SYSTEM</h3>
          <p className="project-description">
            Engineered a high-performance local network file sharing architecture
            utilizing Inter-Process Communication (IPC) and low-level socket programming
            for zero-loss, rapid peer-to-peer file transfers.
          </p>
          <div className="project-key-result">
            <span className="result-label">KEY RESULT:</span>
            <span className="result-value">Optimized P2P socket throughput & IPC latency</span>
          </div>
          <div className="project-tech-stack">
            <span>C++ / C</span>
            <span>IPC</span>
            <span>Socket Programming</span>
            <span>Network Protocols</span>
          </div>
        </article>

        {/* Case Study 03 */}
        <article className="project-case-card glass tilt-card">
          <div className="project-card-accent-border"></div>
          <div className="project-card-header">
            <span className="project-number">03</span>
            <span className="project-category">AI SECURITY & COMPUTER VISION</span>
          </div>
          <h3 className="project-title">MAGNET — ADVERSARIAL DEFENSE</h3>
          <p className="project-description">
            Implemented a 2-pronged detector and reformer defense mechanism against
            adversarial machine learning attacks targeting deep image classifiers, with
            robust data preprocessing and augmentation pipelines.
          </p>
          <div className="project-key-result">
            <span className="result-label">KEY RESULT:</span>
            <span className="result-value">High detection rate against adversarial image noise</span>
          </div>
          <div className="project-tech-stack">
            <span>PyTorch</span>
            <span>Machine Learning</span>
            <span>Computer Vision</span>
            <span>Adversarial Defense</span>
          </div>
        </article>

        {/* Case Study 04 */}
        <article className="project-case-card glass tilt-card">
          <div className="project-card-accent-border"></div>
          <div className="project-card-header">
            <span className="project-number">04</span>
            <span className="project-category">DATA STRUCTURES & SYSTEMS</span>
          </div>
          <h3 className="project-title">VACCINE RECORD MANAGEMENT</h3>
          <p className="project-description">
            Programmed a reliable vaccine record management engine using custom C++
            data structures and persistent file-handling routines for high-speed
            record lookup, insertion, and integrity verification.
          </p>
          <div className="project-key-result">
            <span className="result-label">KEY RESULT:</span>
            <span className="result-value">Constant-time record lookup with file persistence</span>
          </div>
          <div className="project-tech-stack">
            <span>C++</span>
            <span>Custom Data Structures</span>
            <span>File I/O</span>
            <span>Memory Management</span>
          </div>
        </article>
      </div>
    </section>
  );
}
