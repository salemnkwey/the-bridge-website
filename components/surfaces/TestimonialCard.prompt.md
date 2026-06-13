**TestimonialCard** — a student review with star rating, French « quote », and avatar + name + role. Use in a 3-up grid or carousel.

```jsx
<TestimonialCard
  rating={5}
  quote="J'ai gagné en confiance pour parler anglais au travail. Les séances live changent tout."
  name="Grâce Mukendi" role="Niveau B2 · Kinshasa, RDC"
/>
```

- Composes `Avatar`. Quote text should NOT include guillemets — the component adds « ».
- `tone="navy"` on dark sections.
