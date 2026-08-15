import type { ReactNode } from "react";

type Role = {
  date: ReactNode;
  title: string;
  org: string;
  bullets: ReactNode[];
};

const ROLES: Role[] = [
  {
    date: (
      <>
        JUN 2026 —<br />
        PRESENT
      </>
    ),
    title: "Software Engineer · Aaron Technologies Inc.",
    org: "SOLE ENGINEER, B2B INDUSTRIAL SOURCING PLATFORM — REMOTE",
    bullets: [
      <>
        Architected a serverless backend on Firestore, Resend and HubSpot CRM
        through Next.js API routes — persistence, transactional email and CRM
        lead sync in production.
      </>,
      <>
        Built an interactive landed-cost calculator modeling freight, duty and
        handling, plus <strong>15+ responsive pages</strong> across product,
        catalog, industry and RFQ experiences.
      </>,
      <>
        Remediated site-wide accessibility <strong>(WCAG 2.1 AA)</strong>,
        security, SEO and performance, including JSON-LD structured data and
        deployment hardening.
      </>,
    ],
  },
  {
    date: (
      <>
        JAN 2024 —<br />
        JUL 2024
      </>
    ),
    title:
      "Research — Accelerating Particle-in-Cell Simulations with Deep Learning",
    org: "DHIRUBHAI AMBANI UNIVERSITY · PRESENTED AT APS GEC 2025",
    bullets: [
      <>
        Replaced the charge-deposition, Poisson-solver and electric-field stages
        — the dominant parallel bottleneck — with a U-Net surrogate, cutting
        execution time{" "}
        <strong>45% on 128×128 grids with 2.6e5 particles</strong>.
      </>,
      <>
        Enforced physical fidelity with Physics-Informed Neural Networks,
        holding <strong>mean percentage error under 5%</strong> against baseline
        PIC-MCC across 500-iteration E×B test cases.
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
          <h2 className="h2">Industry and research.</h2>
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
