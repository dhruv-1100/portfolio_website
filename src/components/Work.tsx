"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { BASE_PATH } from "@/lib/site";

type Project = {
  num: string;
  title: string;
  award?: string;
  category: string;
  description: string;
  result: string;
  note: string;
  source?: string;
  /** Screenshot or diagram for the panel; falls back to `media` caption. */
  image?: { src: string; alt: string };
  media: [string, string];
};

const PROJECTS: Project[] = [
  {
    num: "01",
    title: "Aaron Technologies",
    category: "PRODUCTION B2B PLATFORM",
    description:
      "Sole engineer on a production B2B industrial sourcing platform, from June 2026. Architected a serverless backend on Firestore, Resend and HubSpot CRM through Next.js API routes — persistence, transactional email and CRM lead sync. Built an interactive landed-cost calculator modeling freight, duty and handling across 15+ responsive pages, then remediated site-wide accessibility, security, SEO and performance before launch.",
    result: "SOLE ENGINEER · JUN 2026—PRESENT",
    note: "NEXT.JS · TYPESCRIPT · FIRESTORE · HUBSPOT · WCAG 2.1 AA",
    source: "https://github.com/dhruv-1100/AaronTech-web",
    image: {
      src: "/images/aaron-technologies.jpg",
      alt: "The Aaron Technologies homepage: an industrial sourcing site headlined \"Your BOM, one partner, 30+ factories\".",
    },
    media: ["PRODUCTION SITE", "SCREENSHOT"],
  },
  {
    num: "02",
    title: "FreightRoom",
    award: "★ WINNER 2026",
    category: "MULTI-AGENT SYSTEMS",
    description:
      "A distributed supply-chain platform that detects vessel delays from a live AIS feed and dynamically recruits seven specialized agents across three frameworks via Band to coordinate logistics incident response. Auditable human-in-the-loop workflow — quorum voting, adversarial dissent review, and demurrage estimation grounded in published carrier tariffs — emitting traceable decision dossiers from full room history.",
    result: "7 AGENTS / 3 FRAMEWORKS",
    note: "LANGGRAPH · PYDANTICAI · CREWAI · BAND",
    source: "https://github.com/rohan879/freight-room",
    image: {
      src: "/images/freightroom.jpg",
      alt: "The FreightRoom incident console: a five-phase stepper from detection to approval gate, a live AIS status pill, and an accruing demurrage cost card.",
    },
    media: ["AGENT TOPOLOGY", "DIAGRAM OR UI CAPTURE"],
  },
  {
    num: "03",
    title: "Raft Consensus & Multi-Paxos Sequencer",
    category: "DISTRIBUTED SYSTEMS",
    description:
      "Implemented Raft consensus — leader election, replicated logs, fault-tolerant recovery — for a distributed key-value system, validated under simulated node failures and network partitions. Extended it with a deterministic-ordering transaction engine using a global sequencer and Multi-Paxos to guarantee strictly serializable execution.",
    result: "200+ TPS / 3 REPLICAS",
    note: "390+ TPS SINGLE-REPLICA BASELINE · TPC-C ON MAKO",
    source: "https://github.com/dhruv-1100/mako-pr",
    image: {
      src: "/images/mako-calvin.jpg",
      alt: "Architecture: a client transaction enters partition 0, where a deterministic scheduler submits a slot to the Multi-Paxos coordinator, replicates to two Paxos replicas, executes against Masstree, and broadcast-dispatches to a worker partition.",
    },
    media: ["ARCHITECTURE DIAGRAM", "OR DISPATCH FLOW"],
  },
  {
    num: "04",
    title: "Argus — Local AI Compliance Platform",
    category: "ON-DEVICE MULTIMODAL AI",
    description:
      "A fully on-device, privacy-preserving multimodal AI platform orchestrating five models (Cosmos-Reason2-8B VLM, CLIP ViT-L/14, Faster R-CNN ResNet50-FPN, Qwen3 embedding, Nemotron reranking) to ground construction-site video findings in OSHA and NYC DOB regulations via retrieval-augmented search.",
    result: "5 MODELS, ONE LOCAL GPU",
    note: "7 LIVE NYC OPEN DATA SETS",
    source: "https://github.com/dhruv-1100/Cuda-Woulda-Shoulda",
    image: {
      src: "/images/argus.jpg",
      alt: "A New York City sidewalk excavation — a source video frame of the kind Argus grounds against OSHA and DOB rules.",
    },
    media: ["DETECTION OVERLAY", "SCREENSHOT"],
  },
  {
    num: "05",
    title: "ConsensusPrompt",
    category: "MULTI-AGENT SYSTEMS",
    description:
      "A multi-agent middleware that applies anonymous peer review to prompt engineering, coordinating rewriter, reviewer, and chairman agents via LangGraph. Validated in a 13-user study, with an ablation study isolating the effect of reviewer-model diversity.",
    result: "4.77/5 MEAN TRUST, 0% OVERRIDE",
    note: "+25.5% CONSENSUS STRENGTH",
    source: "https://github.com/dhruv-1100/PromptConsensus",
    image: {
      src: "/images/consensusprompt.jpg",
      alt: "Ablation chart: consensus strength rising from 63% with three rewriter models to 79% with five.",
    },
    media: ["REVIEW LOOP DIAGRAM", "OR STUDY RESULTS"],
  },
  {
    num: "06",
    title: "OnboardOps",
    category: "DEVELOPER TOOLING",
    description:
      "An AI-powered developer onboarding platform with a custom MCP server and FastAPI backend that automates understanding of unfamiliar, large software systems. Real-time WebSocket workflows and repository retrieval surface dependency graphs, entry points, code hotspots, and project conventions.",
    result: "AUTOMATED REPO COMPREHENSION",
    note: "FASTAPI · MCP · GITPYTHON",
    source: "https://github.com/rohan879/OnboardOps",
    image: {
      src: "/images/onboardops.jpg",
      alt: "OnboardOps architecture: a FastAPI backend exposing seven Git analysis tools over MCP, bridged to a Next.js dashboard by WebSocket events.",
    },
    media: ["DEPENDENCY GRAPH", "SCREENSHOT"],
  },
];

export default function Work() {
  const [open, setOpen] = useState(0);
  const bodies = useRef<Array<HTMLDivElement | null>>([]);

  /**
   * Heights animate from an explicit pixel value, then settle to `auto` so a
   * late font or image reflow can never clip an open panel.
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
          <h2 className="h2">Six systems, six measurable results.</h2>
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

                  {project.image ? (
                    <div className="acc-media has-image" data-glass>
                      {/* Plain <img>: next/image is disabled under output: export. */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`${BASE_PATH}${project.image.src}`}
                        alt={project.image.alt}
                        loading="lazy"
                        decoding="async"
                        width={900}
                        height={560}
                      />
                    </div>
                  ) : (
                    <div className="acc-media" data-glass aria-hidden="true">
                      <span>
                        {project.media[0]}
                        <br />
                        {project.media[1]}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
