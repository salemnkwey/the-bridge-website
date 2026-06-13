**Input** — labelled text field for forms (login, signup, contact, newsletter). Handles its own label, focus ring, hint and error states.

```jsx
<Input label="Adresse e-mail" type="email" icon="mail"
       placeholder="vous@exemple.com" required />
<Input label="Mot de passe" type="password" icon="lock"
       error="Au moins 8 caractères." />
```

- Focus shows a navy ring; `error` shows a red ring + message.
- Call `lucide.createIcons()` after render for the leading icon.
