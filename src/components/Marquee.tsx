const ITEMS = [
  "C++",
  "RAFT & MULTI-PAXOS",
  "CUDA",
  "PYTORCH",
  "DISTRIBUTED SYSTEMS",
  "PYTHON",
  "LANGGRAPH",
  "NEXT.JS",
  "FASTAPI",
  "CONCURRENCY",
  "ON-DEVICE INFERENCE",
];

/** The run is duplicated so the -50% keyframe loops seamlessly. */
function Run({ hidden = false }: { hidden?: boolean }) {
  return (
    <span className="marquee-run" aria-hidden={hidden || undefined}>
      {ITEMS.map((item) => (
        <span key={item} style={{ display: "contents" }}>
          <span>{item}</span>
          <span className="marquee-dot">·</span>
        </span>
      ))}
    </span>
  );
}

export default function Marquee() {
  return (
    <div className="marquee-wrap reveal">
      <div className="marquee" data-marquee>
        <Run />
        <Run hidden />
      </div>
    </div>
  );
}
