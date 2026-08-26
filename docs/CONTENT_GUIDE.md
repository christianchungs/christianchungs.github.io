# Adding and editing content

No code required. Everything below is editing a text file.

## Where things live

```
src/content/work/          ← one file per project
  project-one.mdx
  project-two.mdx
public/images/             ← site-wide images (og image, favicon source)
src/styles/tokens.css      ← every color, font, size, and motion setting
```

The **filename becomes the URL**. `case-study-acme.mdx` → `/work/case-study-acme/`.
Use lowercase and hyphens, no spaces.

## Anatomy of a case study file

The block at the top between the `---` lines is settings. Everything after is your
writing.

```
---
title: "Acme Rebrand"
summary: "A one-sentence hook that shows on the work index."
year: 2026
role: "Product Design, Research"
client: "Acme"
discipline: ['Product Design', 'Research']
featured: true
order: 1
draft: false
---

## Your first heading

Your writing goes here. A blank line makes a new paragraph.
```

**Field reference**

| Field | Required | What it does |
|---|---|---|
| `title` | yes | Page heading and card title |
| `summary` | yes | The hook on the work index. Keep it under two sentences. |
| `year` | yes | Number, no quotes |
| `role` | yes | Your role, free text |
| `client` | no | Omit or use "Self-initiated" |
| `discipline` | no | Tags in square brackets. Used for filtering later. |
| `featured` | no | `true` puts it on the homepage |
| `order` | no | Lower numbers appear first. Default 999. |
| `draft` | no | `true` = written but never published. Safe place to park work in progress. |
| `cover` | no | `"./images/cover.jpg"` — a path relative to the .mdx file |
| `coverAlt` | no | Describes the image for screen readers. Required if there's a cover. |
| `externalUrl` | no | Makes the card link somewhere else instead of to a case study |

## Writing formatting

| You type | You get |
|---|---|
| `## Heading` | A section heading |
| `### Heading` | A smaller heading |
| `**bold**` | **bold** |
| `*italic*` | *italic* |
| `- item` | A bullet |
| `> quote` | A pull quote |
| `[text](https://url)` | A link |
| `![alt text](./images/thing.jpg)` | An image |
| `---` | A horizontal rule |

## Images

1. Make a folder next to the .mdx file: `src/content/work/images/`
2. Drop your exports in. Any size — don't pre-compress, I handle that.
3. Reference them as `./images/filename.jpg`
4. **Always write alt text.** Describe what it shows, not "screenshot."

## Structure that actually works

Hiring managers skim, then read one section closely. Give them:

1. **The problem** — what was wrong, for whom, how you knew. Evidence, not brief.
2. **What you did** — the two or three decisions that mattered. Skip the process
   theater; nobody needs your full double diamond.
3. **What shipped** — the outcome. Numbers if you have them.
4. **Reflection** — one honest paragraph about what you'd do differently. This is
   the section that gets read hardest.

Three great case studies beat eight thorough ones. Park the rest with `draft: true`.
