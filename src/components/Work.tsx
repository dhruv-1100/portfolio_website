"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Project = {
  num: string;
  title: string;
  award?: string;
  category: string;
  description: string;
  result: string;
  note: string;
  source?: string;
  media: [string, string];
};

const PROJECTS: Project[] = [
  {
    num: "01",
    title: "FreightRoom",
    award: "★ WINNER 2026",
    category: "MULTI-AGENT SYSTEMS",
    description:
      "A distributed supply-chain platform that detects vessel delays from a live AIS feed and dynamically recruits seven specialized agents across three frameworks via Band to coordinate logistics incident response. Auditable human-in-the-loop workflow — quorum voting, adversarial dissent review, and demurrage estimation grounded in published carrier tariffs — emitting traceable decision dossiers from full room history.",
    result: "7 AGENTS / 3 FRAMEWORKS",
    note: "LANGGRAPH · PYDANTICAI · CREWAI · BAND",
    source: "https://github.com/rohan879/freight-room",
    media: ["AGENT TOPOLOGY", "DIAGRAM OR UI CAPTURE"],
  },
  {
    num: "02",
    title: "Raft Consensus & Multi-Paxos Sequencer",
    category: "DISTRIBUTED SYSTEMS",
    description:
      "Implemented Raft consensus — leader election, replicated logs, fault-tolerant recovery — for a distributed key-value system, validated under simulated node failures and network partitions. Extended it with a deterministic-ordering transaction engine using a global sequencer and Multi-Paxos to guarantee strictly serializable execution.",
    result: "200+ TPS / 3 REPLICAS",
    note: "390+ TPS SINGLE-REPLICA BASELINE",
    media: ["THROUGHPUT CHART", "OR PARTITION TIMELINE"],
  },
  {
    num: "03",
    title: "Argus — Local AI Compliance Platform",
    category: "ON-DEVICE MULTIMODAL AI",
    description:
      "A fully on-device, privacy-preserving multimodal AI platform orchestrating five models (Cosmos-Reason2-8B VLM, CLIP ViT-L/14, Faster R-CNN ResNet50-FPN, Qwen3 embedding, Nemotron reranking) to ground construction-site video findings in OSHA and NYC DOB regulations via retrieval-augmented search.",
    result: "5 MODELS, ONE LOCAL GPU",
    note: "7 LIVE NYC OPEN DATA SETS",
    source: "https://github.com/dhruv-1100/Cuda-Woulda-Shoulda",
    media: ["DETECTION OVERLAY", "SCREENSHOT"],
  },
  {
    num: "04",
    title: "ConsensusPrompt",
    category: "MULTI-AGENT SYSTEMS",
    description:
      "A multi-agent middleware that applies anonymous peer review to prompt engineering, coordinating rewriter, reviewer, and chairman agents via LangGraph. Validated in a 13-user study, with an ablation study isolating the effect of reviewer-model diversity.",
    result: "4.77/5 MEAN TRUST, 0% OVERRIDE",
    note: "+25.5% CONSENSUS STRENGTH",
    source: "https://github.com/dhruv-1100/PromptConsensus",
    media: ["REVIEW LOOP DIAGRAM", "OR STUDY RESULTS"],
  },
  {
    num: "05",
    title: "OnboardOps",
    category: "DEVELOPER TOOLING",
    description:
      "An AI-powered developer onboarding platform with a custom MCP server and FastAPI backend that automates understanding of unfamiliar, large software systems. Real-time WebSocket workflows and repository retrieval surface dependency graphs, entry points, code hotspots, and project conventions.",
    result: "AUTOMATED REPO COMPREHENSION",
    note: "FASTAPI · MCP · GITPYTHON",
    source: "https://github.com/rohan879/OnboardOps",
    media: ["DEPENDENCY GRAPH", "SCREENSHOT"],
  },
];

export default function Work() {
  const [open, setOpen] = useState(0);
  const bodies = useRef<Array<HTMLDivElement | null>>([]);

  /**
   * Heights animate from an explicit pixel value, then settle to `auto` so a
   * late font reflow can never clip an open panel.
   */
  const layout = useCallback(
    (animate: boolean) => {
      bodies.current.forEach((body, i) => {
        if (!body) return;
        const inner = body.firstElementChild as HTMLElement | null;
        if (!inner) return;

        if (i === open) {
          const target = inner.getBoundingClientRect().height;
          if (!animate) {
            body.style.height = "auto";
            return;
          }
          body.style.height = `${target}px`;
        } else {
          if (body.style.height === "auto") {
            body.style.height = `${inner.getBoundingClientRect().height}px`;
            void body.offsetHeight;
          }
          body.style.height = "0px";
        }
      });
    },
    [open]
  );

  useEffect(() => {
    layout(true);
  }, [layout]);

  useEffect(() => {
    const relayout = () => layout(true);
    window.addEventListener("resize", relayout);
    if (document.fonts?.ready) void document.fonts.ready.then(relayout);
    const t = setTimeout(relayout, 700);
    return () => {
      window.removeEventListener("resize", relayout);
      clearTimeout(t);
    };
  }, [layout]);

  const handleTransitionEnd = (i: number) => (e: React.TransitionEvent) => {
    if (e.propertyName !== "height") return;
    const body = bodies.current[i];
    if (body && i === open) body.style.height = "auto";
  };

  return (
    <section className="section wrap" id="work">
      <div className="section-head reveal">
        <div>
          <div className="eyebrow">01 — SELECTED WORK</div>
          <h2 className="h2">Five systems, five measurable results.</h2>
        </div>
        <div className="section-hint">click a row to expand ↓</div>
      </div>

      <div className="acc-list reveal">
        {PROJECTS.map((project, i) => {
          const isOpen = i === open;
          return (
            <article
              className={`acc${isOpen ? " is-open" : ""}`}
              data-acc
              key={project.num}
            >
              <div className="acc-bar" data-bar aria-hidden="true" />

              <button
                type="button"
                className="acc-head"
                data-hover
                aria-expanded={isOpen}
                aria-controls={`panel-${project.num}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span className="acc-num" data-scramble={project.num}>
                  {project.num}
                </span>
                <span className="acc-title" data-title>
                  <span className="acc-name">{project.title}</span>
                  {project.award && (
                    <span className="acc-award">{project.award}</span>
                  )}
                </span>
                <span className="acc-cat">{project.category}</span>
                <span className="acc-plus" aria-hidden="true">
                  +
                </span>
              </button>

              <div
                className="acc-body"
                id={`panel-${project.num}`}
                ref={(el) => {
                  bodies.current[i] = el;
                }}
                onTransitionEnd={handleTransitionEnd(i)}
              >
                <div className="acc-inner">
                  <div />
                  <div>
                    <p className="acc-copy">{project.description}</p>
                    <div className="acc-meta">
                      <span className="is-accent">{project.result}</span>
                      <span>{project.note}</span>
                      {project.source && (
                        <a
                          href={project.source}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-hover
                        >
                          SOURCE ↗
                          <span className="sr-only"> for {project.title}</span>
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="acc-media" data-glass aria-hidden="true">
                    <span>
                      {project.media[0]}
                      <br />
                      {project.media[1]}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
