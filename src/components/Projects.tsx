import { Github, ExternalLink, Trophy } from "lucide-react";

type ProjectLink = { label: string; href: string };

type Project = {
  number: string;
  category: string;
  title: string;
  description: string;
  keyResult: string;
  tech: string[];
  links: ProjectLink[];
  award?: string;
  wide?: boolean;
};

/**
 * NOTE: `links` is empty for projects whose repositories are private
 * (coursework under academic-integrity policy, or not yet published).
 * To surface one, add e.g.
 *   links: [{ label: "SOURCE", href: "https://github.com/dhruv-1100/<repo>" }]
 */
const PROJECTS: Project[] = [
  {
    number: "01",
    category: "DISTRIBUTED SYSTEMS",
    title: "RAFT CONSENSUS & MULTI-PAXOS SEQUENCER",
    description:
      "Implemented Raft consensus — leader election, replicated logs, fault-tolerant recovery — for a distributed key-value system, validated under simulated node failures and network partitions. Extended it with a deterministic-ordering transaction engine using a global sequencer and Multi-Paxos to guarantee strictly serializable execution.",
    keyResult:
      "200+ TPS under 3-replica consensus (390+ TPS single-replica baseline)",
    tech: ["C++", "Raft", "Multi-Paxos", "Concurrency", "Fault Tolerance"],
    links: [],
  },
  {
    number: "02",
    category: "MULTI-AGENT SYSTEMS",
    title: "CONSENSUSPROMPT",
    description:
      "A multi-agent middleware that applies anonymous peer review to prompt engineering, coordinating rewriter, reviewer, and chairman agents via LangGraph. Validated in a 13-user study, with an ablation study isolating the effect of reviewer-model diversity.",
    keyResult:
      "4.77/5 mean trust with 0% override rate; +25.5% consensus strength",
    tech: ["LangGraph", "FastAPI", "Next.js", "OpenRouter", "Python"],
    links: [
      {
        label: "SOURCE",
        href: "https://github.com/dhruv-1100/PromptConsensus",
      },
    ],
  },
  {
    number: "03",
    category: "ON-DEVICE MULTIMODAL AI",
    title: "ARGUS — LOCAL AI COMPLIANCE PLATFORM",
    description:
      "A fully on-device, privacy-preserving multimodal AI platform orchestrating five models (Cosmos-Reason2-8B VLM, CLIP ViT-L/14, Faster R-CNN ResNet50-FPN, Qwen3 embedding, Nemotron reranking) to ground construction-site video findings in OSHA and NYC DOB regulations via retrieval-augmented search.",
    keyResult:
      "5 models orchestrated locally; 7 live NYC Open Data sets integrated",
    tech: ["PyTorch", "CUDA", "FastAPI", "React", "RAG"],
    links: [],
  },
  {
    number: "04",
    category: "DEVELOPER TOOLING",
    title: "ONBOARDOPS",
    description:
      "An AI-powered developer onboarding platform with a custom MCP server and FastAPI backend that automates understanding of unfamiliar, large software systems. Real-time WebSocket workflows and repository retrieval surface dependency graphs, entry points, code hotspots, and project conventions.",
    keyResult:
      "Automated repository comprehension via a custom MCP server",
    tech: ["FastAPI", "Next.js", "MCP", "GitHub API", "GitPython"],
    links: [
      { label: "SOURCE", href: "https://github.com/rohan879/OnboardOps" },
    ],
  },
  {
    number: "05",
    category: "MULTI-AGENT SYSTEMS",
    title: "FREIGHTROOM",
    description:
      "A distributed supply-chain platform that detects vessel delays from a live AIS feed and dynamically recruits seven specialized agents across three frameworks (LangGraph, PydanticAI, CrewAI) via Band to coordinate logistics incident response. Designed an auditable human-in-the-loop workflow — quorum voting, adversarial dissent review, and demurrage estimation grounded in published carrier tariffs — emitting traceable decision dossiers from full room history.",
    keyResult:
      "7 agents across 3 frameworks, coordinated with auditable quorum voting",
    tech: ["LangGraph", "PydanticAI", "CrewAI", "Band", "Live AIS Feed"],
    links: [
      { label: "SOURCE", href: "https://github.com/rohan879/freight-room" },
    ],
    award: "WINNER — BAND OF AGENTS HACKATHON 2026",
    wide: true,
  },
];

export default function Projects() {
  return (
    <section
      className="section projects-section"
      id="projects"
      data-section-num="06"
    >
      <div className="section-header reveal">
        <span className="section-label">06 // SELECTED WORK</span>
        <h2 className="section-title">FEATURED CASE STUDIES</h2>
      </div>

      <div className="projects-grid reveal">
        {PROJECTS.map((project) => (
          <article
            className={`project-case-card glass tilt-card${
              project.wide ? " project-wide" : ""
            }`}
            key={project.number}
          >
            <div className="project-card-accent-border"></div>
            <div className="project-card-header">
              <span className="project-number">{project.number}</span>
              <span className="project-category">{project.category}</span>
            </div>

            {project.award && (
              <div className="project-award">
                <Trophy size={13} aria-hidden="true" />
                <span>{project.award}</span>
              </div>
            )}

            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="project-key-result">
              <span className="result-label">KEY RESULT:</span>
              <span className="result-value">{project.keyResult}</span>
            </div>

            <div className="project-tech-stack">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            {project.links.length > 0 && (
              <div className="project-links">
                {project.links.map((link) => (
                  <a
                    className="project-link"
                    href={link.href}
                    key={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label === "SOURCE" ? (
                      <Github size={14} aria-hidden="true" />
                    ) : (
                      <ExternalLink size={14} aria-hidden="true" />
                    )}
                    <span>
                      {link.label}
                      <span className="sr-only"> — {project.title}</span>
                    </span>
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
