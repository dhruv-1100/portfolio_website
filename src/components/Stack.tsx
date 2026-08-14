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
    <section className="section" id="stack">
      <div className="section-head reveal">
        <div className="eyebrow">STACK</div>
        <h2 className="section-title">Sorted by depth, not by count</h2>
      </div>

      <div className="glass-panel reveal">
        <div className="stack-row">
          <div className="stack-tier is-deep">DEEP — DAILY</div>
          <div className="stack-items">
            {DEEP.map((item) => (
              <span className="stack-pill is-deep" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="stack-row">
          <div className="stack-tier">SHIPPING PRODUCTION</div>
          <div className="stack-items">
            {SHIPPING.map((item) => (
              <span className="stack-pill" key={item}>
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
