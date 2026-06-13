**Stat** — one headline metric for a statistics band (étudiants, taux de réussite, niveaux, années). The number renders in gold display type.

```jsx
<Stat value="2 400" suffix="+" label="Étudiants accompagnés" icon="users" />
<Stat value="94" suffix="%" label="Taux de réussite" tone="inverse" />
```

- Pre-format `value` with French spacing (`2 400`). Put units in `suffix`.
- Use `tone="inverse"` on navy bands.
