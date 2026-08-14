import {
  Brain,
  Cloud,
  Code2,
  Cpu,
  Database,
  Globe,
  type LucideIcon,
} from "lucide-react";

type SkillGroup = {
  tag: string;
  title: string;
  icon: LucideIcon;
  span: string;
  skills: string[];
  /** Rendered with the accent border — the ones worth leading with. */
  highlight: string[];
};

const GROUPS: SkillGroup[] = [
  {
    tag: "CORE LANGUAGES",
    title: "Polyglot Foundations",
    icon: Code2,
    span: "bento-col-6",
    skills: [
      "Python",
      "C++",
      "C",
      "Java",
      "TypeScript",
      "JavaScript",
      "SQL",
      "MATLAB",
      "R",
    ],
    highlight: ["Python", "C++", "TypeScript"],
  },
  {
    tag: "INTELLIGENCE",
    title: "Machine Learning & AI",
    icon: Brain,
    span: "bento-col-6",
    skills: [
      "PyTorch",
      "TensorFlow",
      "CUDA",
      "LangGraph",
      "LangChain",
      "HuggingFace",
      "FAISS",
      "MCP",
      "OpenRouter",
      "scikit-learn",
      "NumPy",
      "Pandas",
    ],
    highlight: ["PyTorch", "CUDA", "LangGraph"],
  },
  {
    tag: "BACKEND & WEB",
    title: "Product Surfaces",
    icon: Globe,
    span: "bento-col-6",
    skills: [
      "Next.js",
      "React",
      "FastAPI",
      "Flask",
      "Node.js",
      "REST APIs",
      "WebSockets",
      "Server-Sent Events",
    ],
    highlight: ["Next.js", "FastAPI", "React"],
  },
  {
    tag: "SYSTEMS",
    title: "Systems & Architecture",
    icon: Cpu,
    span: "bento-col-6",
    skills: [
      "Distributed Systems",
      "Concurrency",
      "Multithreading",
      "Socket Programming",
      "System Design",
      "Object-Oriented Design",
      "Performance Optimization",
      "Unix / Linux",
    ],
    highlight: ["Distributed Systems", "Concurrency", "Performance Optimization"],
  },
  {
    tag: "CLOUD & DEVOPS",
    title: "Infrastructure & Delivery",
    icon: Cloud,
    span: "bento-col-7",
    skills: [
      "Docker",
      "Kubernetes",
      "AWS",
      "Azure",
      "Google Cloud Platform",
      "CI/CD",
      "Git / GitHub",
      "Vercel",
      "pytest",
      "JUnit",
    ],
    highlight: ["Docker", "Kubernetes", "CI/CD"],
  },
  {
    tag: "PERSISTENCE",
    title: "Databases",
    icon: Database,
    span: "bento-col-5",
    skills: [
      "PostgreSQL",
      "Redis",
      "MongoDB",
      "Firestore",
      "MySQL",
      "Supabase",
    ],
    highlight: ["PostgreSQL", "Redis"],
  },
];

export default function Skills() {
  return (
    <section className="section skills-section" id="skills" data-section-num="05">
      <div className="section-header reveal">
        <span className="section-label">05 // TECHNICAL CAPABILITIES</span>
        <h2 className="section-title">THE TOOLKIT</h2>
      </div>

      <div className="bento-skills-grid reveal">
        {GROUPS.map((group) => {
          const Icon = group.icon;
          return (
            <div
              className={`bento-card glass ${group.span} tilt-card`}
              key={group.tag}
            >
              <div className="bento-header">
                <span className="bento-tag">{group.tag}</span>
                <Icon className="bento-icon" size={20} aria-hidden="true" />
              </div>
              <h3 className="bento-card-title">{group.title}</h3>
              <div className="skill-pills-container">
                {group.skills.map((skill) => (
                  <span
                    className={`skill-pill${
                      group.highlight.includes(skill) ? " highlight" : ""
                    }`}
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
