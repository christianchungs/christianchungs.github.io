# Decision log

Newest first. Every entry: what was decided, why, and what it rules out.
**Read this before proposing anything — it exists so we don't relitigate.**

---

### 2026-08-26 — Repo is `christianchungs.github.io`, local folder is `Desktop/Personal Portfolio`
**Decision:** Public repo at the account root; the working copy lives in the
already-connected `Personal Portfolio` folder rather than a fresh clone directory.
**Why:** Chung had already connected that folder to the session, so it's the path
with the fewest moving parts.
**Note:** the repo was created empty (no README/gitignore/license) on purpose —
an initialized repo would have collided with the local files on first push.

### 2026-08-26 — Astro + React islands
**Decision:** Astro as the framework, React for interactive components only.
**Why:** Case studies stay as editable text files, the site ships no JS by default,
and interactive components can be added later without converting the site to React.
**Rules out:** Next.js, Vite SPA, plain HTML.
**Reversible?** Content and CSS would port easily; page templates would need rewriting.

### 2026-08-26 — Root user site (`username.github.io`)
**Decision:** Deploy at the account root, custom domain later.
**Why:** Cleanest URL, no base-path config to break, and adding a domain later is a
two-line change.
**Rules out:** a `/portfolio` sub-path.

### 2026-08-26 — Design tokens as the only styling API
**Decision:** All color, type, spacing, radius, and motion values live in
`src/styles/tokens.css`. No component hardcodes a value.
**Why:** Chung can reskin the entire site by editing one file, without touching
component code, and motion stays consistent across every interaction we add.
**Rules out:** utility-class frameworks like Tailwind, per-component color values.

### 2026-08-26 — GitHub access via screen control, not a token
**Decision:** Claude drives the browser and GitHub Desktop rather than holding a
personal access token.
**Why:** Chung's preference — no credential shared.
**Cost accepted:** publishing takes ~10 clicks per session instead of ~5 seconds,
and requires Chung to be at the machine.
**Revisit if:** the click ritual becomes the bottleneck.

### 2026-08-26 — Placeholder-first build
**Decision:** Build the full structure with labeled placeholders rather than waiting
for content.
**Why:** Chung sees the shape immediately and can work on identity in parallel.
**Watch for:** the classic failure mode is a site that stays 80% lorem ipsum. Phase 2
exists to close this.

### 2026-09-11 — Satoshi is the only typeface, including labels
**Decision:** `--font-display`, `--font-body` and `--font-mono` all resolve to
Satoshi. No second family anywhere on the site.
**Why:** Chung asked for it directly, and it makes the page self-contained: with the
five faces in `public/fonts/` the site now makes zero external font requests.
**Cost accepted:** a mono face signals "label" through its shape; Satoshi does not.
Small caps labels therefore carry `font-weight: 700` and `--tracking-wide: 0.13em`
to do that job. Lower either and chips, eyebrows and table terms read as
undersized body copy.
**Also:** Satoshi ships no 600 and no 800 weight. The `@font-face` blocks use
weight *ranges* so those map onto real faces instead of synthesised ones.

### 2026-09-11 — Dark mode is strictly greyscale
**Decision:** Every neutral in the dark theme is R=G=B. The accent is the only
chromatic value in it.
**Why:** the first version tinted the dark neutrals toward the accent hue
(`#0D1017`, `#151A23`) and Chung read the whole theme as blue. Neutralising only
the page background would have left the text greys and hairlines still cool.
**Do not** re-tint these when adjusting the palette.

### 2026-09-11 — The theme toggle is a light switch, and it lives in BaseLayout
**Decision:** The toggle renders a photorealistic wall switch in pure CSS, fixed
bottom-right, mounted once in `BaseLayout.astro` rather than inside `Nav.astro`.
**Why:** Chung asked for the switch. It cannot live in the nav because the nav sets
`backdrop-filter`, which makes it a containing block for `position: fixed`
descendants — the switch would pin inside the header instead of the viewport.
**Note:** its CSS is in `global.css`, not a scoped `.astro` block, because scoped
styles do not reach a React island.

### 2026-09-11 — Case studies are MDX in the work collection, not bespoke pages
**Decision:** Each case study is one `.mdx` file using four small components
(`Decision`, `StatRow`, `Pull`, `Figure`) from `src/components/case/`.
**Why:** Chung does not code. Prose stays editable in a file that is 90% plain
markdown, and the repetitive markup is behind named props and slots.
**Rules out:** hand-written `.astro` pages per project, which would have put the
copy inside markup he can't safely edit.
