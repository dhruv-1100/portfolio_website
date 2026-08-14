"use client";

import { useState } from "react";

type Category = "systems" | "agents" | "ml";

type Project = {
  num: string;
  category: Category;
  title: string;
  award?: string;
  description: string;
  result: string;
  resultNote: string;
  stack: string[];
  source?: string;
};

const PROJECTS: Project[] = [
  {
    num: "01",
    category: "agents",
    title: "FreightRoom",
    award: "★ WINNER 2026",
    description:
      "Detects vessel delays from a live AIS feed and dynamically recruits seven specialized agents across three frameworks to coordinate logistics incident response — quorum voting, adversarial dissent review, and traceable decision dossiers.",
    result: "7 agents / 3 frameworks",
    resultNote: "auditable quorum voting",
    stack: ["LangGraph", "PydanticAI", "CrewAI"],
    source: "https://github.com/rohan879/freight-room",
  },
  {
    num: "02",
    category: "systems",
    title: "Raft Consensus & Multi-Paxos Sequencer",
    description:
      "Leader election, replicated logs and fault-tolerant recovery for a distributed key-value system, validated under simulated node failures and network partitions, then extended with a global sequencer for strictly serializable execution.",
    result: "200+ TPS / 3 replicas",
    resultNote: "390+ single-replica baseline",
    stack: ["C++", "Raft", "Multi-Paxos"],
  },
  {
    num: "03",
    category: "agents",
    title: "Argus — Local AI Compliance Platform",
    description:
      "A fully on-device, privacy-preserving multimodal platform orchestrating five models to ground construction-site video findings in OSHA and NYC DOB regulations via retrieval-augmented search.",
    result: "5 models, one GPU",
    resultNote: "7 live NYC Open Data sets",
    stack: ["PyTorch", "CUDA", "RAG"],
    source: "https://github.com/dhruv-1100/Cuda-Woulda-Shoulda",
  },
  {
    num: "04",
    category: "agents",
    title: "ConsensusPrompt",
    description:
      "Multi-agent middleware applying anonymous peer review to prompt engineering — rewriter, reviewer and chairman agents coordinated via LangGraph, validated in a 13-user study with a reviewer-diversity ablation.",
    result: "4.77/5 mean trust",
    resultNote: "+25.5% consensus strength",
    stack: ["LangGraph", "FastAPI", "OpenRouter"],
    source: "https://github.com/dhruv-1100/PromptConsensus",
  },
  {
    num: "05",
    category: "ml",
    title: "OnboardOps",
    description:
      "A custom MCP server and FastAPI backend that automates comprehension of unfamiliar, large codebases — dependency graphs, entry points, code hotspots and project conventions over real-time WebSocket workflows.",
    result: "Automated repo comprehension",
    resultNote: "real-time WebSocket workflows",
    stack: ["FastAPI", "MCP", "GitPython"],
    source: "https://github.com/rohan879/OnboardOps",
  },
];

const FILTERS: Array<{ key: "all" | Category; label: string }> = [
  { key: "all", label: "all" },
  { key: "systems", label: "systems" },
  { key: "agents", label: "agents" },
  { key: "ml", label: "ml" },
];

export default function Work() {
  const [filter, setFilter] = useState<"all" | Category>("all");

  const countFor = (key: "all" | Category) =>
    key === "all"
      ? PROJECTS.length
      : PROJECTS.filter((p) => p.category === key).length;

  return (
    <section className="section" id="work">
      <div className="section-head-split reveal">
        <div>
          <div className="eyebrow">SELECTED WORK</div>
          <h2 className="section-title">Five systems, five measurable results</h2>
        </div>

        <div className="filters" role="group" aria-label="Filter projects">
          {FILTERS.map((f) => (
            <button
              type="button"
              key={f.key}
              className={`filter-pill${filter === f.key ? " is-active" : ""}`}
              aria-pressed={filter === f.key}
              onClick={() => setFilter(f.key)}
            >
              {f.label} · {countFor(f.key)}
            </button>
          ))}
        </div>
      </div>

      <div className="glass-panel reveal">
        <div className="table-head" aria-hidden="true">
          <span>#</span>
          <span>PROJECT</span>
          <span>RESULT</span>
          <span>STACK</span>
          <span />
        </div>

        {PROJECTS.map((project) => {
          const hidden = filter !== "all" && project.category !== filter;
          return (
            <div
              className={`row row-work${hidden ? " is-hidden" : ""}`}
              data-row
              key={project.num}
            >
              <div className="row-bar" data-bar aria-hidden="true" />
              <span className="row-num">{project.num}</span>

              <div>
                <div className="row-title" data-title>
                  {project.title}
                  {project.award && (
                    <span className="award">{project.award}</span>
                  )}
                </div>
                <div className="row-desc">{project.description}</div>
                {project.source && (
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="source-link"
                  >
                    source ↗
                    <span className="sr-only"> for {project.title}</span>
                  </a>
                )}
              </div>

              <div className="row-result">
                {project.result}
                <br />
                <span>{project.resultNote}</span>
              </div>

              <div className="row-stack">
                {project.stack.map((tech, i) => (
                  <span key={tech}>
                    {tech}
                    {i < project.stack.length - 1 && <br />}
                  </span>
                ))}
              </div>

              <span className="row-arrow" data-arrow aria-hidden="true">
                ↗
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
