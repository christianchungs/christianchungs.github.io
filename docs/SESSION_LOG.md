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

---

## 2026-09-11 — Phase 1 implemented, Phase 2 content landed

**Machine:** `christians-lit-rig`. Worked from a fresh clone in the cloud container
rather than the local folder, because no folder was connected and the
`device_request_folder_access` dialog has never once been answered on this machine.

**Done:**
- **Phase 1 is in `tokens.css`.** The full palette from `phase-1-answers.md`: white
  ground, `#304C7E` accent, and a dark theme that is strictly greyscale (every
  neutral is R=G=B, so the accent is the only colour in it). Radii dropped to
  2-3px, tracking widened for small caps labels, `--color-border-strong` and
  `--color-text-subtle` added.
- **Satoshi is committed.** All five faces in `public/fonts/`, wired up with
  `@font-face` weight ranges (`500 600` → Medium, `700 800` → Bold) because
  Satoshi has no 600 or 800 and the browser was otherwise faking them. This closes
  the "fonts were never in the repo" hole flagged on 2026-09-10.
- **Satoshi is the only typeface.** `--font-mono` now resolves to Satoshi too. A
  mono face carries "this is a label" on its own and Satoshi does not, so
  `.eyebrow` gained `font-weight: 700` and wider tracking to do that job instead.
- **Two real case studies** replace the three placeholders, as MDX in the existing
  work collection: `postcards.mdx` and `hinge.mdx`. Four new components in
  `src/components/case/` (Decision, StatRow, Pull, Figure) so the prose stays
  editable without touching markup.
- **The theme toggle is now a photorealistic wall light switch,** pure CSS, no
  images. It moved out of `Nav.astro` (whose `backdrop-filter` makes it a
  containing block and would have pinned a `position: fixed` child inside the
  header) into `BaseLayout.astro`, mounted once.
- **`playwright` stripped** from `package.json` and `package-lock.json`.
- Home, About and the work index rewritten with real content.
- `card` / `cardAlt` added to the collection schema for images that live in
  `/public` rather than beside the `.mdx`. `ProjectCard` falls back to it.
- The three scaffold case studies are marked `draft: true`, so they no longer
  build. **They can be deleted outright** — nothing references them.

**Verified:** `npm run build` passes. 6 pages: `/`, `/about/`, `/work/`,
`/work/postcards/`, `/work/hinge/`, `/404`. Served the `dist/` output and checked
it in a real browser: Satoshi loads, no console errors, no 404s, the switch flips
the theme and `body` lands on `#101010`.

**Not done / blocked:**
- **Nothing is pushed.** No folder was connected, so nothing has reached the
  working copy. See the handoff doc for the two ways to land it.
- `christians-lit-rig` is still two commits behind the remote. **Pull first.**
- Chung's specific role on the Hinge study is still `[Placeholder]` in two places
  in `hinge.mdx`. The report names the team but never says who did what.

**➡️ NEXT SESSION STARTS WITH:**
1. Ask Chung to click **"Add folder"** in the desktop app for
   `C:\Users\12065\Desktop\Personal Portfolio`. Do not use
   `device_request_folder_access`; it has never been answered on this machine.
2. Pull, then deliver the changed files, then push via GitHub Desktop with Chung
   at the keyboard.
3. Get Chung's Hinge role and replace both `[Placeholder]` markers.
