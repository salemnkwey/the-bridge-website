---
name: the-bridge-center-design
description: Use this skill to generate well-branded interfaces and assets for The Bridge Center — an online English-learning center founded in Kinshasa, DR Congo and serving French-speaking learners worldwide (French-language UI, navy + gold + cream, bridge-as-connection metaphor). Use for production work or throwaway prototypes/mocks/decks. Contains the design guidelines, colors, type, fonts, logo assets, and reusable UI kit components for prototyping.
user-invocable: true
---

# The Bridge Center — design skill

Read **`readme.md`** first — it holds the full brand guide: context (an online center
born in Kinshasa, serving francophones worldwide), content/voice fundamentals (French, « vous », no emoji, slogan in English), visual foundations
(navy/gold/cream, Bricolage Grotesque + Hanken Grotesk, soft warm shadows, rounded
corners, subtle bridge-cable motif), and iconography (Lucide line icons + Simple
Icons for brand glyphs).

Then explore:
- **`styles.css`** — the single entry point. Link it and you get every token + font.
- **`tokens/`** — colors, typography, spacing, effects, base.
- **`assets/`** — logo variants (navy/white/cream/gold, transparent), the bridge
  mark, and the warm `tex-*.png` background textures.
- **`components/`** — reusable React primitives (Button, Badge, CourseCard,
  FeatureCard, TestimonialCard, Input, etc.). Each has a `.prompt.md` with usage.
- **`ui_kits/website/`** — a full, interactive recreation of the marketing site
  (Accueil). `bridge-kit.jsx` is a standalone, window-attached copy of the
  primitives so the page renders offline; `chrome.jsx` + `accueil-*.jsx` are the
  page sections.
- **`guidelines/`** — foundation specimen cards.

## How to build with it

**Visual artifacts (slides, mocks, throwaway prototypes):** copy the assets you need
out of `assets/`, link `styles.css`, and write static/React HTML. The fastest start
is to copy `ui_kits/website/bridge-kit.jsx` + `chrome.jsx` for the header/footer and
primitives, then compose sections with the design tokens. Use the `tex-*.png`
textures (or real warm photography) for imagery.

**Production code:** read the rules here and in `readme.md` to become an expert in the
brand, copy the tokens/fonts, and reuse the component contracts (`components/**/*.d.ts`).

## Non-negotiables
- French copy, address users as « vous », slogan stays English: *"If you're rich, be
  the bridge."* No emoji. French number formatting (`2 400+`, `94 %`).
- Navy = gravitas, gold = warmth/value, cream = openness. One gold `accent` CTA per view.
- Rounded corners, soft navy-tinted shadows, generous white space, gentle scroll
  reveals. Respect `prefers-reduced-motion`. Use the bridge-cable motif subtly.
- Icons: Lucide (line, ~1.75 stroke). Brand/social glyphs via `cdn.simpleicons.org`.

If invoked with no other guidance, ask what the user wants to build, ask a few
focused questions, then act as an expert designer who outputs HTML artifacts **or**
production code as needed.
