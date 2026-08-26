# The Workflow — end to end

Seven phases. Each one lists **what "done" means**, **what Claude needs from you
before it can start**, and **what you get out of it.** You should always be able
to point at one row and say "we're here."

Current position is tracked at the bottom of this file and in `SESSION_LOG.md`.

---

## Phase 0 — Foundation ✅ *(done)*

| | |
|---|---|
| **Owner** | Claude |
| **Done when** | Repo exists, Astro builds, GitHub Actions deploys on push, docs exist |
| **Needs from you** | Nothing |
| **You get** | A live URL with a working placeholder site, and this workflow |

---

## Phase 1 — Visual identity & design system

| | |
|---|---|
| **Owner** | **You**, with Claude translating into code |
| **Done when** | `src/styles/tokens.css` holds your real values and the placeholder site is wearing your identity |
| **You get** | A site that looks like you, before a single case study is written |

**What Claude needs from you — the exact list:**

1. **Color.** Hex values for: page background, a secondary/subtle background, body
   text, muted text, borders, and one accent. Dark mode versions if you want it —
   say "skip dark mode" if you don't.
2. **Type.** Two typefaces (display + body). Either Google Fonts names, or the font
   files themselves dropped in `public/fonts/`. Tell me the licence if it's paid.
3. **Scale feel.** Not numbers — a direction: "big editorial headlines, tight body"
   or "everything close in size, quiet." I'll set the numbers.
4. **Density.** Roomy and slow, or compact and dense?
5. **Shape.** Sharp corners, soft, or pill? One answer covers the whole site.
6. **A reference or two.** Sites whose *feel* is right — and one sentence on what
   specifically you're pointing at. "This one, but only the type" is more useful
   than a bare link.

**Figma note:** your Figma account is already connected to this session. If your
tokens live in a Figma file with variables, just give me the file link and I'll
pull the values directly instead of you transcribing hex codes.

---

## Phase 2 — Structure & content

| | |
|---|---|
| **Owner** | **You** write, Claude structures |
| **Done when** | Every `[Placeholder]` string is gone and the sitemap is settled |
| **You get** | A real portfolio, minus the delight |

**What Claude needs from you:**

1. **The project list.** Which projects, in what order, and which three are the
   headliners.
2. **Case study text** for each — see `docs/CONTENT_GUIDE.md` for the shape.
   Rough prose is fine; I'll edit for rhythm if you want.
3. **Images.** Drop them in the project's folder. Any size — I handle compression
   and responsive versions. Tell me which is the cover.
4. **Your positioning line** — the sentence at the top of the homepage.
5. **About page copy** and your links (LinkedIn, resume, email).

> **Do this phase before Phase 4.** Interactions designed around fake content get
> rebuilt when real content arrives. This is the single most common way portfolio
> projects stall.

---

## Phase 3 — Layout & composition

| | |
|---|---|
| **Owner** | **You** design, Claude builds |
| **Done when** | Every page matches your layouts at desktop, tablet, and phone |
| **You get** | The site as designed, still static |

**What Claude needs from you:**

1. **Layouts** — Figma frames (share the link, I read them directly), or sketches,
   or a written description. All three work.
2. **Breakpoint intent.** What changes on a phone? If you don't have opinions, say
   so and I'll make reasonable calls and show you.
3. **Priorities.** If a layout is expensive to build, I'll tell you the cost and
   offer a cheaper version. You decide.

---

## Phase 4 — The interaction layer

| | |
|---|---|
| **Owner** | **You** specify, Claude builds |
| **Done when** | Each agreed interaction is live and behaves on mobile + reduced-motion |
| **You get** | The part that makes people remember the site |

**Process — one interaction at a time:**

1. You write a request using the **Interaction Request** template in
   `docs/REQUEST_TEMPLATES.md`.
2. Claude writes a short PRD into `docs/prds/` and confirms the interpretation
   with you *before* building. This is where misunderstandings get caught cheaply.
3. Claude builds it as an island in `src/components/islands/`, behind a
   `client:visible` directive so it costs nothing on pages that don't use it.
4. Claude screenshots or records it, you react, we iterate.
5. Ship, log the decision, move to the next one.

**Non-negotiables baked into every interaction:** it works with a keyboard, it
respects `prefers-reduced-motion`, it degrades to something sensible on a phone,
and it never blocks reading the content.

---

## Phase 5 — Polish & launch

| | |
|---|---|
| **Owner** | Claude, you approve |
| **Done when** | Lighthouse ≥95 across the board, no a11y violations, link previews render, tested in Chrome/Safari/Firefox |
| **You get** | A URL you can put on a resume without wincing |

**Includes:** performance pass, alt text audit, focus-state audit, OG/social preview
images, favicon, sitemap, 404 page, and the custom domain if you've bought one.

---

## Phase 6 — Living portfolio

| | |
|---|---|
| **Owner** | You, with Claude on call |
| **Done when** | Never |
| **You get** | Adding a project takes one session, not one weekend |

Adding a project is: drop images in a folder, write the text, one push. If that
ever takes longer than ~30 minutes, tell me and I'll fix the friction.

---

## Where we are

> **Phase 0 complete. Phase 1 is next, and it's yours to start.**
>
> Claude is blocked on: the six inputs listed under Phase 1.
> You can also skip ahead to Phase 2 content writing in parallel — the two don't
> collide.

*(Claude: update this block at the end of every session.)*
