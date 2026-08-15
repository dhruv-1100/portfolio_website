const DEGREES = [
  {
    date: "AUG 2025 — MAY 2027 (EXPECTED)",
    degree: "MS Computer Science",
    school: "Stony Brook University, Stony Brook, NY",
    chips: [
      "GPA 3.61 / 4.00",
      "Distributed Systems",
      "Machine Learning",
      "Software Engineering",
    ],
  },
  {
    date: "NOV 2020 — MAY 2024",
    degree: "B.Tech. (Honours), ICT",
    school: "Dhirubhai Ambani University (formerly DA-IICT), Gandhinagar, India",
    chips: ["GPA 3.45 / 4.00", "Minor: Computational Science", "Honours"],
  },
];

export default function Education() {
  return (
    <section className="section wrap" id="education">
      <div className="section-head reveal">
        <div>
          <div className="eyebrow">03 — EDUCATION</div>
          <h2 className="h2">Foundation.</h2>
        </div>
      </div>

      <div className="edu-grid reveal">
        {DEGREES.map((item) => (
          <div className="glass edu-card" data-glass data-tilt key={item.degree}>
            <div className="sheen" data-sheen aria-hidden="true" />
            <div style={{ position: "relative" }}>
              <div className="edu-date">{item.date}</div>
              <div className="edu-degree">{item.degree}</div>
              <div className="edu-school">{item.school}</div>
              <div className="chips">
                {item.chips.map((chip, i) => (
                  <span
                    className={`chip${i === 0 ? " is-accent" : ""}`}
                    data-chip
                    key={chip}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
