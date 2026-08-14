import { HANDLE, NAV_ITEMS, RESUME_PATH } from "@/lib/site";

export default function Header() {
  return (
    <header className="header" data-nav>
      <div className="header-inner">
        <a href="#top" className="logo">
          {HANDLE}
          <span className="logo-caret" aria-hidden="true">
            _
          </span>
        </a>

        <nav className="nav" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-resume"
          >
            resume.pdf ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
