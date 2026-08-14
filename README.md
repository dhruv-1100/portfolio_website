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
| `src/app/page.tsx` | Section composition (server component) |
| `src/lib/site.ts` | Name, contact details, links, deploy-dependent paths |
| `src/components/` | One component per section |
| `src/components/ScrollEffects.tsx` | Document-level reveal, timeline and tilt effects |
| `public/DhruvPatel_Resume.pdf` | Resume served by the nav "RESUME" button |
| `public/og-image.png` | 1200×630 social preview card |

Contact details, links and the availability badge all come from
`src/lib/site.ts` — change them there, not in individual components.

## Content updates

- **Resume:** replace `public/DhruvPatel_Resume.pdf` and mirror any changes
  into the relevant section components so the site and PDF stay in sync.
- **Projects:** edit the `PROJECTS` array in `src/components/Projects.tsx`.
  Add a repository or demo link by filling in a project's `links` array; a
  project with an empty `links` array simply renders no link row.
- **Skills:** edit the `GROUPS` array in `src/components/Skills.tsx`.

## Deployment

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every
push to `main`.

Because this is a Pages *project* site served from `/portfolio_website/`, the
build sets `NEXT_PUBLIC_BASE_PATH`; without it the exported `_next/*` asset
URLs 404. If a custom domain is added later, clear `NEXT_PUBLIC_BASE_PATH` and
point `NEXT_PUBLIC_SITE_URL` at the new domain.

## Accessibility & motion

The site ships a skip link, visible focus rings, and labelled navigation
state. All animation — scroll reveals, card tilt, the custom cursor, and the
stat count-up — is disabled under `prefers-reduced-motion: reduce`, and a
`<noscript>` fallback guarantees content is visible with JavaScript disabled.
