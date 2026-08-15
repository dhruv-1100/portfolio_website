const EARLIER = [
  {
    kicker: "MOBILE & FULL-STACK",
    title: "Canteen Automation System",
    description:
      "Led an agile team building a mobile-first canteen ordering and inventory platform for campus dining.",
    result: "+30% ORDERING EFFICIENCY",
    stack: "Flutter · Agile · Team lead",
  },
  {
    kicker: "NETWORKING & SYSTEMS",
    title: "Local File Sharing System",
    description:
      "Peer-to-peer transfer over IPC and low-level sockets, engineered for zero-loss delivery on a local network.",
    result: "OPTIMIZED P2P THROUGHPUT",
    stack: "C++ · IPC · Sockets",
  },
  {
    kicker: "AI SECURITY & VISION",
    title: "MagNet — Adversarial Defense",
    description:
      "A two-pronged detector and reformer defense against adversarial attacks on deep image classifiers.",
    result: "HIGH DETECTION RATE ON NOISE",
    stack: "PyTorch · Computer vision",
  },
  {
    kicker: "DATA STRUCTURES",
    title: "Vaccine Record Management",
    description:
      "Custom C++ data structures and persistent file handling for high-speed record lookup and integrity checks.",
    result: "CONSTANT-TIME LOOKUP",
    stack: "C++ · File I/O · Memory",
  },
];

export default function EarlierWork() {
  return (
    <div className="wrap" aria-label="Earlier work">
      <div className="earlier-head reveal">
        <div>EARLIER WORK</div>
        <div>UNDERGRADUATE · 2021—2024</div>
      </div>

      <div className="earlier-grid reveal">
        {EARLIER.map((item) => (
          <div className="glass earlier-card" data-glass data-tilt key={item.title}>
            <div className="sheen" data-sheen aria-hidden="true" />
            <div className="earlier-kicker">{item.kicker}</div>
            <div className="earlier-title">{item.title}</div>
            <div className="earlier-desc">{item.description}</div>
            <div className="earlier-result">{item.result}</div>
            <div className="earlier-stack">{item.stack}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
