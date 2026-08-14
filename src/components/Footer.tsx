import { EMAIL, GITHUB, LINKEDIN, NAME } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>
          © {new Date().getFullYear()} {NAME}
        </span>
        <div className="footer-links">
          <a href={GITHUB} target="_blank" rel="noopener noreferrer">
            github
          </a>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
            linkedin
          </a>
          <a href={`mailto:${EMAIL}`}>email</a>
        </div>
      </div>
    </footer>
  );
}
