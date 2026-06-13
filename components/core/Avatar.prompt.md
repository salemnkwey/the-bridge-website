**Avatar** — circular user image; falls back to initials on `--indigo-100` when `src` is absent. Use in testimonials, forum threads, and the account menu.

```jsx
<Avatar src="/photo.jpg" name="Grâce Mukendi" size="lg" />
<Avatar name="Jean-Pierre Lokua" />        {/* renders "JL" */}
<Avatar name="Sarah K." ring />            {/* gold ring */}
```
