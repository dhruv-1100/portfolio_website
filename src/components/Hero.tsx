import CopyEmailButton from "./CopyEmailButton";
import { AVAILABILITY, GITHUB, LOCATION } from "@/lib/site";

const STATE_ROWS = [
  { key: "role", value: "SWE @ Aaron Technologies" },
  { key: "degree", value: "MS CS, Stony Brook" },
  { key: "gpa", value: "3.61 / 4.00" },
  { key: "published", value: "APS GEC 2025", accent: true },
];

export default function Hero() {
  return (
    <section className="hero wrap">
      <div className="hero-status reveal">
        <span className="hero-available">
          <span className="hero-blip" aria-hidden="true" />
          {AVAILABILITY}
        </span>
        <span className="hero-rule" aria-hidden="true" />
        <span>{LOCATION}</span>
      </div>

      <h1 className="hero-title">
        <span className="hero-mask">
          <span className="hero-line">I build software</span>
        </span>
        <span className="hero-mask">
          <span className="hero-line">
            <span className="hero-dim">systems that</span> hold up
          </span>
        </span>
        <span className="hero-mask">
          <span className="hero-line">
            <span className="hero-dim">in production.</span>
          </span>
        </span>
      </h1>

      <div className="hero-grid">
        <div className="reveal">
          <p className="hero-lede">
            Software engineer and MS Computer Science candidate at Stony Brook,
            graduating May 2027. Sole engineer on a production B2B industrial
            sourcing platform. I work where correctness is measurable —
            consensus protocols, surrogate models, and inference that has to run
            on one machine.
          </p>
          <div className="hero-actions">
            <CopyEmailButton />
            <a href="#work" className="btn btn-ghost" data-magnetic data-hover>
              see the work ↓
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              data-magnetic
              data-hover
            >
              github ↗
            </a>
          </div>
        </div>

        <div className="glass state-card reveal" data-glass>
          <div className="sheen" data-sheen aria-hidden="true" />
          <dl className="state-inner">
            <div className="state-label">CURRENT STATE</div>
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
      </div>
    </section>
  );
}
