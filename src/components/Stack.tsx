const DEEP = [
  "C++",
  "Python",
  "Raft & Multi-Paxos",
  "Concurrency",
  "CUDA",
  "PyTorch",
];

const SHIPPING = [
  "Next.js",
  "TypeScript",
  "React",
  "FastAPI",
  "LangGraph",
  "Firestore",
  "Docker",
  "CI/CD",
];

const WORKING =
  "Java · Kubernetes · AWS · Azure · GCP · PostgreSQL · Redis · MongoDB · MCP · FAISS · scikit-learn · MATLAB";

export default function Stack() {
  return (
    <section className="section wrap" id="stack">
      <div className="section-head reveal">
        <div>
          <div className="eyebrow">04 — STACK</div>
          <h2 className="h2">Sorted by depth, not by count.</h2>
        </div>
      </div>

      <div className="stack-list reveal">
        <div className="stack-row">
          <div className="stack-tier is-deep">DEEP — DAILY</div>
          <div className="stack-items">
            {DEEP.map((item) => (
              <span className="chip is-accent" data-chip key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="stack-row">
          <div className="stack-tier">SHIPPING PRODUCTION</div>
          <div className="stack-items">
            {SHIPPING.map((item) => (
              <span className="chip" data-chip key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="stack-row">
          <div className="stack-tier">WORKING KNOWLEDGE</div>
          <div className="stack-prose">{WORKING}</div>
        </div>
      </div>
    </section>
  );
}
