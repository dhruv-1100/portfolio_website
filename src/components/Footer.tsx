import { Github, Linkedin, Mail } from "lucide-react";
import { EMAIL, GITHUB, LINKEDIN, NAME } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} {NAME}. Designed &amp; engineered
          with restraint.
        </p>
        <div className="footer-socials">
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={18} aria-hidden="true" />
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} aria-hidden="true" />
          </a>
          <a href={`mailto:${EMAIL}`} aria-label="Email">
            <Mail size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
