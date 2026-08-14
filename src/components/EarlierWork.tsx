const EARLIER = [
  {
    kicker: "MOBILE & FULL-STACK",
    title: "Canteen Automation System",
    description:
      "Led an agile team building a mobile-first canteen ordering and inventory platform for campus dining.",
    result: "+30% ordering efficiency",
    stack: "Flutter · Agile · Team lead",
  },
  {
    kicker: "NETWORKING & SYSTEMS",
    title: "Local File Sharing System",
    description:
      "Peer-to-peer transfer over IPC and low-level sockets, engineered for zero-loss delivery on a local network.",
    result: "Optimized P2P throughput",
    stack: "C++ · IPC · Sockets",
  },
  {
    kicker: "AI SECURITY & VISION",
    title: "MagNet — Adversarial Defense",
    description:
      "A two-pronged detector and reformer defense against adversarial attacks on deep image classifiers.",
    result: "High detection rate on noise",
    stack: "PyTorch · Computer vision",
  },
  {
    kicker: "DATA STRUCTURES",
    title: "Vaccine Record Management",
    description:
      "Custom C++ data structures and persistent file handling for high-speed record lookup and integrity checks.",
    result: "Constant-time lookup",
    stack: "C++ · File I/O · Memory",
  },
];

export default function EarlierWork() {
  return (
    <section className="section" aria-label="Earlier work">
      <div className="earlier-head reveal">
        <div className="eyebrow" style={{ marginBottom: 0 }}>
          EARLIER WORK
        </div>
        <div className="earlier-note">undergraduate · 2021—2024</div>
      </div>

      <div className="earlier-grid reveal">
        {EARLIER.map((item) => (
          <div className="earlier-card tilt" data-tilt key={item.title}>
            <div className="earlier-kicker">{item.kicker}</div>
            <div className="earlier-title">{item.title}</div>
            <div className="earlier-desc">{item.description}</div>
            <div className="earlier-result">{item.result}</div>
            <div className="earlier-stack">{item.stack}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
