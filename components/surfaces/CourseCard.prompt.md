**CourseCard** — a formation preview for the Formations grid and the homepage "à la une" section. Image header carries the level + Gratuit badges; footer shows durée / leçons and a hover lift.

```jsx
<CourseCard
  image="assets/tex-indigo.png"
  level="A1" free category="Anglais général"
  title="Les fondations — Débuter en anglais"
  description="Construisez vos premières phrases et gagnez en confiance dès la semaine 1."
  duration="6 semaines" lessons={24}
/>
```

- Composes `Badge`. Call `lucide.createIcons()` after render for the meta icons.
- Set `free={false}` + `price="29 $"` for paid courses.
