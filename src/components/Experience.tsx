export default function Experience() {
  return (
    <section
      className="section experience-section"
      id="experience"
      data-section-num="04"
    >
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
            <div className="timeline-badge-date">JUN 2026 – PRESENT</div>
            <h3 className="timeline-role">Software Engineer</h3>
            <p className="timeline-org">
              Aaron Technologies Inc. — Sole Engineer, B2B Industrial Sourcing
              Platform (Remote)
            </p>
            <ul className="timeline-bullets">
              <li>
                Architected and shipped a serverless backend using Firestore,
                Resend, and HubSpot CRM through Next.js API routes, handling
                data persistence, transactional email, and CRM lead
                synchronization for a production B2B platform.
              </li>
              <li>
                Built an interactive landed-cost calculator modeling freight,
                duty, and handling, alongside{" "}
                <strong>15+ responsive pages</strong> across product, catalog,
                industry, and RFQ experiences using Next.js, React, and
                TypeScript — shipped using AI-assisted development workflows.
              </li>
              <li>
                Remediated site-wide accessibility{" "}
                <strong>(WCAG 2.1 AA)</strong>, security, SEO, and performance,
                including contrast and heading-hierarchy fixes, JSON-LD
                structured data, and production deployment hardening.
              </li>
            </ul>
            <div className="timeline-tags">
              <span className="mini-tag">Next.js</span>
              <span className="mini-tag">TypeScript</span>
              <span className="mini-tag">Firestore</span>
              <span className="mini-tag">HubSpot CRM</span>
              <span className="mini-tag">WCAG 2.1 AA</span>
            </div>
          </div>

          <div className="timeline-card glass reveal">
            <div className="timeline-badge-date">JAN 2024 – JUL 2024</div>
            <h3 className="timeline-role">
              Research Project — Accelerating Particle-in-Cell Simulations Using
              Deep Learning
            </h3>
            <p className="timeline-org">
              Dhirubhai Ambani University, India — presented at APS GEC 2025
            </p>
            <ul className="timeline-bullets">
              <li>
                Accelerated device-scale Particle-in-Cell (PIC-MCC) plasma
                simulations by replacing the charge-deposition, Poisson-solver,
                and electric-field stages — the dominant parallel bottleneck —
                with a U-Net surrogate model, cutting execution time{" "}
                <strong>45% on 128×128 grids with 2.6e5 particles</strong>.
              </li>
              <li>
                Enforced physical fidelity using Physics-Informed Neural
                Networks, holding{" "}
                <strong>mean percentage error under 5%</strong> against baseline
                PIC-MCC across 500-iteration E×B plasma test cases; implemented
                in Python with C extensions on Unix/Linux, optimizing memory
                allocation and numerical computation.
              </li>
            </ul>
            <div className="timeline-tags">
              <span className="mini-tag">U-Net</span>
              <span className="mini-tag">PINNs</span>
              <span className="mini-tag">Python C Extensions</span>
              <span className="mini-tag">APS GEC 2025</span>
            </div>
          </div>

          <div className="timeline-card glass reveal">
            <div className="timeline-badge-date">MAY 2023 – AUG 2023</div>
            <h3 className="timeline-role">
              Summer Research Intern — Software Testing &amp; Test Case
              Prioritization
            </h3>
            <p className="timeline-org">
              Dhirubhai Ambani University, Gandhinagar, India
            </p>
            <ul className="timeline-bullets">
              <li>
                Implemented and benchmarked four data structure and
                algorithm-based test-case prioritization techniques (FAST,
                Hypervolume-based Genetic, Bat-inspired, Lexicographical
                Ordering) across{" "}
                <strong>
                  30 open-source Java projects ranging up to 87K SLOC and 5,000+
                  test cases
                </strong>
                , using runtime and mutation-based APFD.
              </li>
              <li>
                Profiled execution bottlenecks and automated evaluation
                pipelines in Python, reducing evaluation pipeline runtime by{" "}
                <strong>30%</strong>.
              </li>
            </ul>
            <div className="timeline-tags">
              <span className="mini-tag">Java</span>
              <span className="mini-tag">Python</span>
              <span className="mini-tag">Mutation Testing</span>
              <span className="mini-tag">APFD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
