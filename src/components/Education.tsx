const DEGREES = [
  {
    date: "AUG 2025 — MAY 2027 (EXPECTED)",
    degree: "MS Computer Science",
    school: "Stony Brook University, Stony Brook, NY",
    chips: ["GPA 3.61 / 4.00", "Distributed Systems", "Machine Learning"],
  },
  {
    date: "NOV 2020 — MAY 2024",
    degree: "B.Tech. (Honours), Information & Communication Technology",
    school: "Dhirubhai Ambani University (formerly DA-IICT), Gandhinagar",
    chips: ["GPA 3.45 / 4.00", "Minor: Computational Science"],
  },
];

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="section-head reveal">
        <div className="eyebrow">EDUCATION</div>
        <h2 className="section-title">Foundation</h2>
      </div>

      <div className="edu-grid reveal">
        {DEGREES.map((item) => (
          <div className="glass-card edu-card tilt" data-tilt key={item.degree}>
            <div className="edu-date">{item.date}</div>
            <div className="edu-degree">{item.degree}</div>
            <div className="edu-school">{item.school}</div>
            <div className="chips">
              {item.chips.map((chip, i) => (
                <span className={`chip${i === 0 ? " is-accent" : ""}`} key={chip}>
                  {chip}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
