**Select** — native dropdown styled to match `Input`, with a Lucide chevron. Use in filters (niveau, catégorie) and forms.

```jsx
<Select label="Niveau" options={["Tous niveaux","A1","A2","B1","B2","C1","C2"]} />
<Select label="Sujet" options={[{value:"info",label:"Demande d'information"}]} />
```

- Call `lucide.createIcons()` after render for the chevron.
