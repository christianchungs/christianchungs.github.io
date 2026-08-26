# Portfolio

Chung's portfolio. Multidisciplinary designer → Product / UX Design.

**Live:** https://christianchungs.github.io

## 👋 New session? Read [`docs/START_HERE.md`](docs/START_HERE.md) first.

## Stack

| | |
|---|---|
| **Framework** | [Astro](https://astro.build) — static by default, zero JS unless a page needs it |
| **Interactive components** | React 19, loaded per-component as "islands" |
| **Content** | MDX files in `src/content/work/` with a validated schema |
| **Styling** | Plain CSS with a design-token layer. No framework. |
| **Hosting** | GitHub Pages via GitHub Actions — every push to `main` deploys |

## Commands

| Command | What it does |
|---|---|
| `npm install` | Install dependencies (once, and after pulling changes) |
| `npm run dev` | Local preview at http://localhost:4321 — updates as you save |
| `npm run build` | Production build into `dist/`. **Must pass before committing.** |
| `npm run preview` | Preview the production build locally |

## Where things are

```
src/
  styles/tokens.css       ← THE design system. Colors, type, space, motion.
  content/work/           ← one .mdx file per project
  components/islands/     ← React components that actually do something
  components/             ← static Astro components
  layouts/                ← page shells
  pages/                  ← every URL on the site
  content.config.ts       ← what fields a case study is allowed to have
docs/                     ← how we work. Start with START_HERE.md
.github/workflows/        ← the deploy pipeline
```

## Deploying

Push to `main`. That's it — Actions builds and publishes. Watch it in the
repo's **Actions** tab; a green check means it's live within about a minute.

One-time setup on a fresh repo: **Settings → Pages → Source → GitHub Actions**.
