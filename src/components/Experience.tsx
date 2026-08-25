import type { ReactNode } from "react";

type Role = {
  date: ReactNode;
  title: string;
  org: string;
  bullets: ReactNode[];
};

/**
 * Matches the resume's "Research Experience" section. Aaron Technologies is a
 * project, not a role, so it lives in Work.
 */
const ROLES: Role[] = [
  {
    date: (
      <>
        JAN 2024 —<br />
        JUL 2024
      </>
    ),
    title:
      "Integrating DL with 2D-3V Particle-in-Cell Simulations of Low Temperature Plasmas",
    org: "DHIRUBHAI AMBANI UNIVERSITY · PRESENTED AT APS GEC 2025",
    bullets: [
      <>
        Replaced the charge-deposition, Poisson-solver and electric-field stages
        with a U-Net surrogate model, achieving a{" "}
        <strong>45% execution-time reduction on 128×128 grids</strong> with
        2.6e5 particles.
      </>,
      <>
        Enforced physical fidelity with Physics-Informed Neural Networks,
        maintaining <strong>mean percentage error under 5%</strong> against
        baseline PIC-MCC across 500-iteration E×B test cases; implemented in
        Python with C extensions on Unix/Linux.
      </>,
    ],
  },
  {
    date: (
      <>
        MAY 2023 —<br />
        AUG 2023
      </>
    ),
    title: "Summer Research Intern — Software Testing & Test Case Prioritization",
    org: "DHIRUBHAI AMBANI UNIVERSITY, GANDHINAGAR, INDIA",
    bullets: [
      <>
        Benchmarked four test-case prioritization techniques across{" "}
        <strong>
          30 open-source Java projects up to 87K SLOC and 5,000+ test cases
        </strong>
        , using runtime and mutation-based APFD.
      </>,
      <>
        Profiled execution bottlenecks and automated evaluation pipelines in
        Python, cutting pipeline runtime by <strong>30%</strong>.
      </>,
    ],
  },
];

export default function Experience() {
  return (
    <section className="section wrap" id="experience">
      <div className="section-head reveal">
        <div>
          <div className="eyebrow">02 — EXPERIENCE</div>
          <h2 className="h2">Research experience.</h2>
        </div>
      </div>

      <div className="exp-list reveal">
        {ROLES.map((role) => (
          <div className="exp-row" data-row key={role.title}>
            <div className="acc-bar" data-bar aria-hidden="true" />
            <div className="exp-date">{role.date}</div>
            <div>
              <div className="exp-title" data-title>
                {role.title}
              </div>
              <div className="exp-org">{role.org}</div>
              <ul className="exp-bullets">
                {role.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
