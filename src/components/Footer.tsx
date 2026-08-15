import { EMAIL, GITHUB, LINKEDIN, NAME } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>
          © {new Date().getFullYear()} {NAME.toUpperCase()}
        </span>
        <div className="footer-links">
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" data-hover>
            GITHUB
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            data-hover
          >
            LINKEDIN
          </a>
          <a href={`mailto:${EMAIL}`} data-hover>
            EMAIL
          </a>
        </div>
      </div>
    </footer>
  );
}
