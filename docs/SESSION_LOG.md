# Session log

Newest first. Each entry ends with the literal next step, so the next session opens
without re-deriving context.

---

## Session 1 — 2026-08-26 — Foundation

**Phase:** 0 → complete

**Done:**
- Chose the stack (Astro 7 + React 19 islands + MDX + sitemap) and logged why
- Scaffolded the site: base layout, nav, footer, project card, case study layout,
  home / work index / case study / about / 404 pages
- Built the design-token layer (`src/styles/tokens.css`) — colors, fluid type scale,
  spacing, shape, and motion easings, with dark mode
- Set up content collections with a validated schema, plus 3 placeholder case studies
- Proved the interactive-island pipeline end to end with a working React theme toggle
- Wrote the GitHub Actions workflow for automatic deploy on push
- Wrote this whole docs system
- **Verified:** `npm run build` passes, 7 pages generate, screenshots reviewed

- Confirmed GitHub username: **christianchungs**
- Created the repo: https://github.com/christianchungs/christianchungs.github.io
  (public, empty — no README/gitignore/license, so nothing conflicts with local)
- Wrote all source files into `C:\\Users\\12065\\Desktop\\Personal Portfolio`

**Not done / blocked:**
- **Nothing pushed yet.** The local folder has the files but is not yet a git repo.
- `.github/workflows/deploy.yml` could NOT be written to the local folder — the
  device bridge treats workflow files as protected. **Fix:** create it through
  GitHub's own Pages setup (Settings → Pages → Source: GitHub Actions → pick the
  Astro workflow), which writes an equivalent file server-side. The intended
  contents are preserved in this repo's history / in the cloud workspace.

**Decisions this session:** see `DECISIONS.md` — five entries added.

**➡️ NEXT SESSION STARTS WITH:**
1. Publish the local folder to the repo (GitHub Desktop → Add local repository →
   create → Publish), then Settings → Pages → Source: **GitHub Actions** → choose
   the Astro workflow. Verify https://christianchungs.github.io renders.
2. Then Phase 1: collect Chung's six design-system inputs (see `WORKFLOW.md`) and
   fill in `src/styles/tokens.css`.
