# How to ask for things

You don't need to speak in code. You do need to be specific about a few things
that are genuinely ambiguous from the outside. These templates cover them.

**Copy a block, fill it in, paste it.** Leave a line out if you don't care about
it — "you decide" is a valid answer and I'll make a call and show you.

---

## 1. Interaction request

The one that matters most. Use this for anything that moves, responds, or changes.

```
INTERACTION: [name it — "cursor trail on the work grid"]

WHERE:      [which page, which element]
TRIGGER:    [hover / scroll / click / drag / page load / idle / cursor moves]
BEHAVIOR:   [what happens, in plain words. Two sentences is plenty.]
FEELS LIKE: [three adjectives — "heavy, slow, deliberate" / "snappy, playful, light"]
REFERENCE:  [link or file] — take specifically: [what part of it. Not the whole thing.]
ON PHONE:   [same / simplified / doesn't appear / you decide]
MUST NOT:   [what would make it wrong — "must not cover the project titles"]
```

**Why each line exists:**
- *Trigger* and *behavior* are the two things I cannot guess. "Make the cards feel
  alive" has a hundred implementations and 99 are not the one in your head.
- *Feels like* controls easing and duration, which is most of what separates
  cheap-feeling motion from good motion. Adjectives are the right unit here.
- *Reference* — always say which part. A link on its own means I copy the wrong thing.
- *Must not* catches the failure you can already picture. It saves a whole round trip.

**Example of a good one:**

```
INTERACTION: Project card tilt

WHERE:      Work index, the project cards
TRIGGER:    Hover, follows cursor position within the card
BEHAVIOR:   Card tilts a few degrees toward the cursor and lifts slightly. Cover
            image shifts the opposite way so it feels like there's depth between them.
FEELS LIKE: Physical, weighty, slightly reluctant
REFERENCE:  linear.app homepage — take the *restraint* of the tilt angle, not the glow
ON PHONE:   Doesn't appear. No hover on touch.
MUST NOT:   Tilt so far the text gets hard to read. Must not lag behind the cursor.
```

---

## 2. Visual change

```
CHANGE: [what you want different]
WHERE:  [everywhere / this page / this component]
NOW:    [what it does today]
WANT:   [what it should do]
```

If it's a token-level change (color, type, spacing, radius), just say so — those
are one-line edits and I'll do them instantly.

---

## 3. Something looks wrong

```
PAGE:     [url or page name]
DEVICE:   [desktop / phone / which browser]
EXPECTED: [what you thought would happen]
ACTUAL:   [what happened]
```

Screenshots are worth more than description here — drag one into the chat.

---

## 4. New case study

```
PROJECT:    [title]
YEAR:       [year]
ROLE:       [your role]
CLIENT:     [or "self-initiated"]
DISCIPLINE: [tags, for filtering later]
HOOK:       [1–2 sentences for the work index]
FEATURED:   [yes/no — should it be on the homepage]
BODY:       [your writing, or "I'll send it separately"]
IMAGES:     [where they are — folder, Drive link, or attached]
```

---

## 5. "I saw this thing and I want it"

Perfectly valid request. Just answer three questions with it:

1. **What specifically** — the motion? the layout? the type? the color? Naming the
   layer stops me from cloning the whole page.
2. **Does it fit our identity** — or should I adapt it to your system?
3. **How much does it matter** — nice-to-have, or is this the centerpiece?

---

## Things you never have to specify

I handle these without being asked, every time: responsive behavior, keyboard
access, screen-reader labels, `prefers-reduced-motion`, image compression and
responsive sizes, focus states, and browser compatibility. If you ever catch one
missing, that's a bug — report it with template 3.
