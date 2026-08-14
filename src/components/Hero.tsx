import CopyEmailButton from "./CopyEmailButton";
import { AVAILABILITY, GITHUB, LINKEDIN } from "@/lib/site";

const STATE_ROWS = [
  { key: "role", value: "SWE @ Aaron Technologies" },
  { key: "degree", value: "MS CS, Stony Brook" },
  { key: "gpa", value: "3.61 / 4.00" },
  { key: "location", value: "New York, USA" },
  { key: "published", value: "APS GEC 2025", accent: true },
];

export default function Hero() {
  return (
    <section className="hero">
      <div>
        <div className="badge reveal">
          <span className="badge-dot" aria-hidden="true" />
          {AVAILABILITY}
        </div>

        <h1 className="hero-title reveal">
          Dhruv Patel — software engineer working on distributed systems and ML
          infrastructure.
        </h1>

        <p className="hero-lede reveal">
          MS Computer Science at Stony Brook, graduating May 2027. Sole engineer
          on a production B2B industrial sourcing platform. Consensus protocols,
          surrogate models, and inference that has to run on one machine.
        </p>

        <div className="hero-actions reveal">
          <CopyEmailButton />
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            github ↗
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            linkedin ↗
          </a>
        </div>
      </div>

      <div className="state-card reveal tilt" data-tilt>
        <div className="state-label">CURRENT STATE</div>
        <dl className="state-rows">
          {STATE_ROWS.map((row) => (
            <div className="state-row" key={row.key}>
              <dt>{row.key}</dt>
              <dd className={row.accent ? "is-accent" : undefined}>
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
