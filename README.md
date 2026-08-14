# Portfolio — Dhruv Patel

Personal portfolio site. Next.js 15 App Router, statically exported and
deployed to GitHub Pages.

**Live:** https://dhruv-1100.github.io/portfolio_website

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

## Structure

| Path | Purpose |
| --- | --- |
| `src/app/layout.tsx` | Fonts, metadata, Open Graph, `Person` JSON-LD |
| `src/app/page.tsx` | Section composition and ambient background (server component) |
| `src/app/globals.css` | Design tokens and every component style |
| `src/lib/site.ts` | Name, contact details, links, deploy-dependent paths |
| `src/components/` | One component per section |
| `src/components/Interactions.tsx` | Header state, pointer bloom, row hover, tilt, reveal, count-up |
| `src/components/Work.tsx` | Filterable project table (client component) |
| `src/app/og-image.png/route.tsx` | 1200×630 social card, generated at build time |
| `public/DhruvPatel_Resume.pdf` | Resume served by the `resume.pdf` links |

Contact details, links and the availability badge all come from
`src/lib/site.ts` — change them there, not in individual components.

## Content updates

- **Resume:** replace `public/DhruvPatel_Resume.pdf` and mirror any changes
  into the relevant section components so the site and PDF stay in sync.
- **Projects:** edit the `PROJECTS` array in `src/components/Work.tsx`. Each
  entry carries a `category` (`systems` / `agents` / `ml`) that drives the
  filter pills and their counts; omit `source` and no link is rendered.
- **Earlier work:** edit the `EARLIER` array in `src/components/EarlierWork.tsx`.
- **Stack:** edit the `DEEP`, `SHIPPING` and `WORKING` lists in
  `src/components/Stack.tsx`.

## Design

The layout comes from `Portfolio - Index.dc.html`, exported from Claude Design.
Palette is `#0b0d10` base with a `#6fa8ff` blue and `#78ffde` mint accent, set
in IBM Plex Sans and IBM Plex Mono, over glassmorphism panels and a fixed
ambient gradient layer.

## Deployment

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every
push to `main`.

Because this is a Pages *project* site served from `/portfolio_website/`, the
build sets `NEXT_PUBLIC_BASE_PATH`; without it the exported `_next/*` asset
URLs 404. If a custom domain is added later, clear `NEXT_PUBLIC_BASE_PATH` and
point `NEXT_PUBLIC_SITE_URL` at the new domain.

## Accessibility & motion

The site ships a skip link, visible focus rings, and labelled navigation and
filter controls. All animation — scroll reveals, card tilt, the pointer bloom,
and the stat count-up — is disabled under `prefers-reduced-motion: reduce`, and
a `<noscript>` fallback guarantees content is visible with JavaScript disabled.
