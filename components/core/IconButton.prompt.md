**IconButton** — a single Lucide icon in a pill/square button; use for header actions, carousel arrows, close buttons, and social links where a label would be redundant. Always pass `label` for accessibility.

```jsx
<IconButton icon="menu" label="Ouvrir le menu" />
<IconButton icon="arrow-right" label="Suivant" variant="primary" />
<IconButton icon="instagram" label="Instagram" variant="inverse" />
```

- `variant="inverse"` for placement on navy surfaces (footer, hero).
- Call `lucide.createIcons()` after render to hydrate the glyph.
