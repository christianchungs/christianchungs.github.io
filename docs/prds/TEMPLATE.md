# PRD: [feature name]

> Copy this file to `docs/prds/NN-feature-name.md`. One PRD per interactive
> component or non-trivial feature. Written by Claude, **approved by Chung before
> any code is written.** A PRD is cheap; a wrong build is not.

**Status:** Draft | Approved | Built | Shipped
**Phase:** [which workflow phase]
**Owner:** Claude
**Approved by Chung:** [ ] on [date]

---

## 1. What Chung asked for

> Paste the original request verbatim. Do not paraphrase — the exact words
> are the spec, and paraphrasing is where meaning quietly drifts.

## 2. Claude's interpretation

One paragraph, plain language. **If this paragraph is wrong, stop here** — that's
what it's for.

## 3. Behavior spec

| | |
|---|---|
| **Where it appears** | |
| **Trigger** | |
| **What happens** | |
| **Duration / easing** | (from the `--dur-*` and `--ease-*` tokens) |
| **Resting state** | what it looks like before anything happens |
| **End state** | what it looks like after |

## 4. Edge cases — all of these must have an answer

- [ ] **Touch device** (no hover):
- [ ] **Keyboard only:**
- [ ] **`prefers-reduced-motion`:**
- [ ] **JavaScript fails to load:**
- [ ] **Slow connection:**
- [ ] **Very small / very large viewport:**

## 5. Out of scope

What this deliberately does not do. Prevents scope creep mid-build.

## 6. Implementation notes

- **Island:** `src/components/islands/[Name].tsx`
- **Hydration:** `client:visible` | `client:load` | `client:idle` — and why
- **Tokens used:**
- **Dependencies added:** (default is none — justify any addition)
- **Est. JS cost:** ~Xkb on the pages that use it

## 7. Done when

- [ ] Behavior matches section 3
- [ ] Every edge case in section 4 handled
- [ ] `npm run build` passes
- [ ] Screenshot or recording shown to Chung
- [ ] Chung signed off
- [ ] Logged in `DECISIONS.md` and `SESSION_LOG.md`

## 8. Handoff notes

Anything a different Claude session would need to not break this. Gotchas,
non-obvious choices, things that look wrong but are deliberate.
