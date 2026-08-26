# START HERE

**This is the first file any Claude session reads. Chung: paste this line to start a session —**

> Read `docs/START_HERE.md`, `docs/SESSION_LOG.md`, and `docs/DECISIONS.md`, then tell me what phase we're in, what you need from me, and what you're going to do.

---

## The 30-second orientation

- **What this is:** Chung's portfolio. Astro + React islands, deployed to GitHub Pages.
- **Who does what:** Chung owns visual identity, content, and interaction intent. Claude owns implementation, structure, and keeping the docs true.
- **Source of truth:** the `main` branch. If it isn't committed, it doesn't exist.
- **GitHub:** https://github.com/christianchungs/christianchungs.github.io
- **Live at:** https://christianchungs.github.io

## The map of everything

| Doc | What it's for | Who writes it |
|---|---|---|
| `docs/WORKFLOW.md` | The end-to-end phase map. Where we are, what's next, what each phase needs. | Claude |
| `docs/PROJECT_BRIEF.md` | The north star. Audience, goals, non-goals, success criteria. | Chung + Claude |
| `docs/DECISIONS.md` | Every decision made and why. Read before proposing something already rejected. | Claude |
| `docs/SESSION_LOG.md` | What happened each session, and the exact next step. | Claude |
| `docs/REQUEST_TEMPLATES.md` | How Chung should format requests so they land in one pass. | Claude |
| `docs/CONTENT_GUIDE.md` | How to add or edit a case study without touching code. | Claude |
| `docs/prds/` | Specs for larger features, handed off between sessions. | Claude |

## Every session runs the same three beats

**1. Open** — Claude reads the docs above and reports: current phase, what it needs
from Chung, what it plans to do. Chung confirms or redirects.

**2. Work** — one phase at a time. Claude does not silently expand scope.

**3. Close** — Claude updates `SESSION_LOG.md` and `DECISIONS.md`, commits, pushes,
and writes the literal first step for next session. **A session is not finished
until it's pushed and the log is updated.**

## Rules that keep this from rotting

1. **One phase at a time.** No jumping to interactions while content is unfinished.
2. **Every decision gets logged.** If it isn't in `DECISIONS.md`, the next session
   will happily undo it.
3. **Placeholders are labeled `[Placeholder]`.** Search the repo for that string to
   find everything still fake.
4. **Design tokens are the only styling API.** Colors, type, spacing, and motion live
   in `src/styles/tokens.css`. Nothing hardcodes a hex value.
5. **Never commit without building.** `npm run build` must pass first.
