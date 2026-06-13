**Checkbox** — labelled checkbox with a gold fill + check when on. Works controlled or uncontrolled.

```jsx
<Checkbox label="Se souvenir de moi" defaultChecked />
<Checkbox label="J'accepte les conditions d'utilisation" required />
```

- Pass `checked` + `onChange` for controlled use; otherwise `defaultChecked`.
- Call `lucide.createIcons()` after render.
