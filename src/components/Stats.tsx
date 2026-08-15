const STATS = [
  { count: 45, suffix: "%", display: "45%", label: ["FASTER PIC PLASMA", "SIMULATION"] },
  { count: 200, suffix: "+", display: "200+", label: ["TPS UNDER 3-REPLICA", "CONSENSUS"] },
  { count: 5, suffix: "", display: "5", label: ["MODELS ORCHESTRATED", "ON ONE LOCAL GPU"] },
  { count: null, suffix: "", display: "1st", label: ["BAND OF AGENTS", "HACKATHON 2026"], accent: true },
];

export default function Stats() {
  return (
    <section className="wrap reveal" aria-label="Key results">
      <div className="stats">
        {STATS.map((stat) => (
          <div className="stat" data-statcell key={stat.label.join(" ")}>
            <div
              className={`stat-value${stat.accent ? " is-accent" : ""}`}
              data-count={stat.count ?? undefined}
              data-suffix={stat.suffix}
            >
              {stat.display}
            </div>
            <div className="stat-label">
              {stat.label[0]}
              <br />
              {stat.label[1]}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
