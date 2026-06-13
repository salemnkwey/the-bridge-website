# The Bridge Center — Design System

> **« If you're rich, be the bridge. »**
> Centre en ligne d'apprentissage de l'anglais — né à Kinshasa, ouvert au monde entier.

---

## 1. Context & product

**The Bridge Center** is an **online** English-language learning center, **founded in
Kinshasa, DR Congo** and serving **French-speaking (francophone) learners worldwide** —
from Dakar to Montréal, Brussels to Abidjan. Because everything is online, anyone can
join from anywhere. It teaches English through a mix of **self-paced online courses**
and **live sessions** (Google Meet), spanning the full **CEFR / CECRL range (A1–C2)**.
Kinshasa remains its home and pride; the world is its classroom.

The product is primarily a **marketing + learning website** in **French**, with
**English touches** for atmosphere (the slogan, level names, ambient words). Core
navigation: **Accueil, Formations, Blog, Forum, À propos, Contact**, plus
**Se connecter / S'inscrire**.

The guiding metaphor is the **bridge** (*pont*) — connecting, carrying people from
one bank to another, crossing over. It is used **subtly** (arches, lines that join
two points, smooth transitions) and never as cliché.

**Personality:** warm, ambitious, accessible, international yet rooted in **African
pride**.

### Sources provided
- `uploads/the-bridge-logo.jpg` — the original circular emblem (black line art).
  Processed variants live in `assets/` (navy / white / cream / gold, transparent).
- No codebase or Figma was supplied. The visual system below was authored from the
  brief + logo. Fonts and the icon set are **substitutions** (see flags).

---

## 2. Content fundamentals (voice & copy)

- **Language:** French first, with light English seasoning. The slogan stays in
  English: *"If you're rich, be the bridge."* CEFR levels keep English/standard
  labels (A1 → C2). Occasional ambient English words are welcome (*Live*,
  *community*) but never at the cost of clarity.
- **Address the reader as "vous"** — respectful, warm, encouraging. The brand
  speaks as "nous" (the center, the community).
- **Tone:** chaleureux (warm), encourageant, ambitieux. Aspirational but grounded —
  it promises real progress, not magic. Celebrates the learner's journey.
- **Casing:** Sentence case for body and most headings. Eyebrow/overline labels are
  UPPERCASE with wide tracking (e.g. `NOTRE MÉTHODE`, `FORMATIONS À LA UNE`).
  Never ALL-CAPS for long text.
- **Punctuation:** French typography — use « guillemets » for quotes, non-breaking
  spaces before `: ; ! ?` where practical, em dashes for asides.
- **Emoji:** **No emoji** in product UI. Warmth comes from imagery, color, and
  copy — not emoji. (Icons are line icons, see Iconography.)
- **Numbers & stats:** credible placeholders, French formatting (`2 400+`,
  `94 %`, `6 niveaux`). Space as thousands separator, `%` preceded by a space.
- **Example copy:**
  - Hero title: *« Traversez vers l'anglais, à votre rythme. »*
  - Promise sub: *« Du niveau A1 au C2 — cours en ligne, séances en direct, et une
    communauté qui vous accompagne de la première leçon au certificat. »*
  - CTA: *« Commencer gratuitement »*, *« Découvrir les formations »*
  - Eyebrow: *POURQUOI THE BRIDGE CENTER*
  - Reassurance: *« Sans carte bancaire. Commencez en 2 minutes. »*

---

## 3. Visual foundations

### Color
- **Base:** deep **indigo / navy** (`--indigo-900 #0e1a38` … `--indigo-700`) for
  hero surfaces, headers, footers, strong CTAs.
- **Accent:** warm **amber-gold** (`--gold-500 #e2a33a`) — the "value / richness"
  note from the slogan. Used for highlights, key CTAs, underlines, the bridge glow.
- **Neutral:** warm **cream** (`--cream-50 #fcfaf4`) as the page paper; white cards.
- **Secondary variant:** **teal** (`--teal-500 #1e9483`) for occasional category
  accents and freshness. Use sparingly.
- **Ink:** warm-tinted neutrals (not pure gray) for text.
- Rule of thumb: navy carries gravitas, gold carries warmth/value, cream carries
  openness. Most sections are cream-on-white; punctuate with 1–2 navy sections
  (about, final CTA) for rhythm. Avoid bluish-purple gradients.

### Typography
- **Display:** *Bricolage Grotesque* (700–800) — modern, characterful headings.
- **Body:** *Hanken Grotesk* (400–600) — warm, highly readable, great for French.
- **Mono:** *Space Mono* — stats, level codes (A1/C2), small technical accents.
- Big fluid display sizes for heroes (`--display-hero`), tight tracking on large
  headings, generous line-height (1.5–1.65) on body.

### Layout & space
- **Generous white space.** 4px spacing grid. Section rhythm via `--section-y`
  (clamped 4–8rem). Max content width `--container-xl` (78rem) with fluid gutters.
- Mobile-first, impeccable responsive behavior. Comfortable hit targets (≥44px).

### Shape, depth & borders
- **Rounded corners** throughout: cards `--radius-lg (20px)`, pills for chips/CTAs,
  larger `--radius-xl/2xl` for hero panels and imagery.
- **Soft, warm shadows** (navy-tinted, low opacity) — `--shadow-md/lg/xl`. Never
  harsh black drop shadows. Gold CTAs get a subtle `--shadow-accent` glow.
- **Borders:** hairline warm `--border-subtle`; cards often borderless with shadow,
  or a 1px subtle border on flat surfaces.

### Imagery
- Warm, bright, human photography — a diverse, global francophone community of
  learners (African, European, North-American, Caribbean), classrooms, laptops, real
  faces. Keep African pride present and visible while showing worldwide reach. Warm
  color temperature, natural light, hopeful.
- Bridge motifs as supporting texture (cables, arches, connecting lines) — subtle,
  never literal stock-bridge clichés.
- Images sit in rounded frames (`--radius-xl`), sometimes with a soft gradient
  protection overlay when text sits on top.

### Motion
- **Micro-animations on scroll:** gentle fade + rise (`opacity` + `translateY`),
  staggered. Easing `--ease-out` for entrances, `--ease-spring` for playful
  accents. Durations 240–700ms.
- Hover: lift (translateY -2/-4px) + shadow deepen; links shift to gold.
- Press: slight shrink (`scale .97`) + color darken.
- Always respect `prefers-reduced-motion`.

### Glass & transparency
- Sticky header uses a translucent cream/navy background with `backdrop-filter`
  blur when scrolled. Use blur sparingly for overlays and the header only.

---

## 4. Iconography

- **No icon font was supplied.** The system uses **[Lucide](https://lucide.dev)**
  (line icons, ~1.75px stroke, rounded caps) via CDN — clean, modern, warm-leaning,
  matching the brand's rounded geometry. **This is a substitution; flagged to the
  user.** If a different set is preferred, swap the CDN link.
- Usage: line (stroke) style only, `currentColor`, stroke width ~1.75–2. Avoid
  filled/duotone icons. Size 18–24px inline, 28–40px in feature cards.
- **No emoji** as icons. **No hand-drawn SVG** decorative illustration beyond the
  bridge motif derived from the logo.
- The **logo & bridge mark** (`assets/`) are the primary brand graphics. Use the
  white/cream variants on navy, navy/ink on cream.

---

## 5. Index / manifest

**Root**
- `styles.css` — entry point (import list only). Consumers link this.
- `readme.md` — this file.
- `SKILL.md` — Agent-Skill wrapper.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`,
`effects.css`, `base.css`.

**`assets/`** — `logo-original.jpg`, `logo-navy/white/cream/gold.png` (transparent),
`mark-navy/white/gold.png` (compact bridge mark).

**`components/`** — reusable React primitives (see cards in the Design System tab):
- `core/` — Button, IconButton, Badge, Tag, Stat, Avatar
- `forms/` — Input, Field, Select, Checkbox, Textarea
- `surfaces/` — Card, CourseCard, TestimonialCard, FeatureCard, SectionHeading

**`ui_kits/website/`** — full-screen recreation of the marketing site.
- `index.html` — the interactive **Accueil** page (hero, stats, mission, method,
  featured courses, how-it-works, testimonials, blog, forum, final CTA, auth modal).
- `formations.html` — the **Formations** catalogue: page header, sticky filter bar
  (niveau A1–C2 + type Gratuit/Premium, segmented controls + tri + recherche),
  filterable grid of 10 courses, final CTA.
- `blog.html` — the **Blog**: page header, category filter, featured article, a
  paginated grid of articles, and a sidebar (articles populaires, catégories,
  newsletter).
- `forum.html` — the **Forum / communauté**: community header with stats, join
  banner (lecture libre / participation membres), 6 discussion categories with
  topic + post counts, and a recent-threads list (auteur, catégorie, réponses,
  dernière activité).
- `apropos.html` — the **À propos**: history & mission (Kinshasa → monde), 4 valeurs,
  detailed pedagogy method, 6-member team grid, an animated stats band, final CTA.
- `contact.html` — the **Contact**: two-column form (Nom, Email, Sujet, Message +
  success state) and contact info (adresse Kinshasa, e-mail, téléphone, horaires,
  réseaux sociaux), a full-width map placeholder, and a 5-question FAQ accordion.
- Built from `bridge-kit.jsx` (standalone primitives), `chrome.jsx`
  (header/footer/reveal), `auth.jsx` (shared login/signup modal), and the
  per-page section + mount files. **The marketing site is complete — all 6 nav pages.**

**`templates/accueil/`** — the Accueil page packaged as a **template** consuming
projects can start from (`index.html` + `ds-base.js`). It reuses the UI-kit section
sources directly.

**`guidelines/`** — foundation specimen cards: Colors (indigo, gold, cream/ink,
teal/status), Type (display, body, scale), Spacing (scale, radii, shadows), Brand
(logo lockups, mark & cable texture, voice & slogan).

> **Namespace:** components are exposed on `window.BridgeCenter` after the bundle
> loads (run `check_design_system` to confirm).
