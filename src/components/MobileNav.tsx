import { NAV_ITEMS } from "@/lib/site";

/**
 * Thumb-reachable section navigation for viewports where the header nav is
 * hidden. Visible by default rather than gated behind a scroll-up gesture —
 * a bar nobody knows to summon is no better than no bar at all. Interactions
 * tucks it away while the reader scrolls down and returns it on any upward
 * scroll; the active pill comes from the same scroll spy as the header, via
 * the shared `data-navlink` hook.
 */
export default function MobileNav() {
  return (
    <nav className="mobilenav" data-mobilenav aria-label="Section navigation">
      {NAV_ITEMS.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="mobilenav-link"
          data-navlink={item.id}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
