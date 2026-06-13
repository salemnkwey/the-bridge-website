**Button** — the primary action control; use for any user-triggered action (submit, navigate, open). Navy `primary` for main actions, gold `accent` for the single most important conversion CTA, `secondary` for alternatives, `ghost` for low-emphasis, `inverse` on dark surfaces.

```jsx
<Button variant="accent" size="lg" icon="arrow-right" iconRight="arrow-right">
  Commencer gratuitement
</Button>
<Button variant="secondary">Découvrir les formations</Button>
<Button variant="link" iconRight="chevron-right">En savoir plus</Button>
```

- Icons use Lucide names (`icon`, `iconRight`); call `lucide.createIcons()` after render.
- `full` stretches to container width. Shape is a pill; `link` variant is text-only with underline.
- Use exactly one `accent` button per view to keep the gold CTA meaningful.
