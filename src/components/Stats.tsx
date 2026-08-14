const STATS = [
  { count: 45, suffix: "%", display: "45%", label: "faster PIC plasma simulation" },
  { count: 200, suffix: "+", display: "200+", label: "TPS under 3-replica consensus" },
  { count: 5, suffix: "", display: "5", label: "models orchestrated on one local GPU" },
  { count: null, suffix: "", display: "1st", label: "Band of Agents Hackathon 2026" },
];

export default function Stats() {
  return (
    <section className="stats reveal" aria-label="Key results">
      {STATS.map((stat) => (
        <div className="glass-card stat-card tilt" data-tilt key={stat.label}>
          <div
            className="stat-value"
            data-count={stat.count ?? undefined}
            data-suffix={stat.suffix}
          >
            {stat.display}
          </div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </section>
  );
}
