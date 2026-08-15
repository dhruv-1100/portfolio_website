import { NAME, NAV_ITEMS, RESUME_PATH } from "@/lib/site";

export default function Header() {
  return (
    <header className="header" data-nav>
      <div className="header-inner">
        <a href="#top" className="brand" data-hover>
          <span className="brand-name">{NAME}</span>
          <span className="brand-tag">SWE</span>
        </a>

        <nav className="nav" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="nav-link"
              data-navlink={item.id}
              data-hover
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={RESUME_PATH}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-resume"
          data-magnetic
          data-hover
        >
          resume ↗
        </a>
      </div>
    </header>
  );
}
