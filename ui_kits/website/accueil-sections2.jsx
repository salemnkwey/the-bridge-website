/* The Bridge Center — Accueil sections (part 2) */

/* ---------- TESTIMONIALS ---------- */
function Testimonials() {
  const items = [
    { rating: 5, quote: "J'ai gagné en confiance pour parler anglais au travail. Les séances en direct ont tout changé pour moi.", name: "Grâce Mukendi", role: "Niveau B2 · Kinshasa, RDC" },
    { rating: 5, quote: "Partie de zéro, j'ai obtenu mon certificat A2 en trois mois. La méthode est claire et vraiment encourageante.", name: "Awa Diallo", role: "Niveau A2 · Dakar, Sénégal" },
    { rating: 5, quote: "Le forum est une mine d'or. On s'entraide depuis quatre continents — on ne se sent jamais seul dans l'apprentissage.", name: "Thomas Lefebvre", role: "Niveau B1 · Montréal, Canada" },
  ];
  return (
    <section style={{ background: "var(--surface-page)", padding: "var(--section-y) 0" }}>
      <div className="bridge-container" style={{ display: "flex", flexDirection: "column", gap: "var(--space-12)" }}>
        <Reveal><SectionHeading eyebrow="Ils ont traversé le pont" title="Ce que nos étudiants en disent" lead="Des parcours réels, des progrès concrets, une fierté partagée." /></Reveal>
        <div className="bc-testimonial-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-6)" }}>
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}><TestimonialCard {...t} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- BLOG PREVIEW ---------- */
function BlogCard({ image, category, title, excerpt, author, date, read }) {
  return (
    <a href="#" onClick={(e) => e.preventDefault()} className="bc-blog-card"
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "var(--shadow-xl)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "var(--shadow-sm)"; }}
      style={{ display: "flex", flexDirection: "column", background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-sm)", textDecoration: "none", color: "inherit", height: "100%", transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)" }}>
      <div style={{ aspectRatio: "16/9", backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: "var(--space-6)", flex: 1 }}>
        <Badge tone="teal" variant="soft">{category}</Badge>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", margin: 0, color: "var(--text-strong)", lineHeight: "var(--leading-snug)" }}>{title}</h3>
        <p style={{ fontSize: "var(--text-base)", color: "var(--text-muted)", margin: 0, lineHeight: "var(--leading-relaxed)", flex: 1 }}>{excerpt}</p>
        <div style={{ display: "flex", alignItems: "center", gap: 10, paddingTop: 12, borderTop: "1px solid var(--divider)", fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>
          <Avatar name={author} size="xs" />
          <span style={{ fontWeight: 600, color: "var(--text-body)" }}>{author}</span>
          <span>·</span><span>{date}</span>
          <span style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 5 }}><i data-lucide="clock" style={{ width: 14, height: 14 }} />{read}</span>
        </div>
      </div>
    </a>
  );
}

function BlogPreview() {
  const posts = [
    { image: "../../assets/tex-teal.png", category: "Méthode", title: "5 habitudes pour apprendre l'anglais 10 minutes par jour", excerpt: "La régularité bat l'intensité. Voici comment transformer de petits moments en vrais progrès.", author: "Esther Nkanga", date: "4 juin 2026", read: "6 min" },
    { image: "../../assets/tex-gold.png", category: "Vocabulaire", title: "30 expressions anglaises pour briller en réunion", excerpt: "Des tournures naturelles pour gagner en assurance quand vous prenez la parole au travail.", author: "David Ilunga", date: "28 mai 2026", read: "8 min" },
    { image: "../../assets/tex-indigo.png", category: "Culture", title: "Comprendre l'accent : écouter pour mieux parler", excerpt: "Films, podcasts, chansons — comment l'écoute active accélère votre compréhension orale.", author: "Esther Nkanga", date: "21 mai 2026", read: "5 min" },
  ];
  return (
    <section style={{ background: "var(--surface-card)", padding: "var(--section-y) 0" }}>
      <div className="bridge-container" style={{ display: "flex", flexDirection: "column", gap: "var(--space-12)" }}>
        <Reveal style={{ display: "flex", flexWrap: "wrap", gap: 24, alignItems: "flex-end", justifyContent: "space-between" }}>
          <SectionHeading align="left" eyebrow="Le blog" title="Des conseils pour progresser, chaque semaine" lead="Méthode, vocabulaire et culture — de quoi nourrir votre apprentissage entre deux leçons." maxWidth="34ch" />
          <Button variant="secondary" iconRight="arrow-right" href="blog.html">Voir tous les articles</Button>
        </Reveal>
        <div className="bc-blog-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-6)" }}>
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}><BlogCard {...p} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FORUM CTA ---------- */
function ForumCTA() {
  const threads = [
    { icon: "message-circle-question", title: "Comment bien utiliser le present perfect ?", meta: "32 réponses · Grammaire", hot: true },
    { icon: "mic", title: "Astuces pour perdre son accent à l'oral", meta: "18 réponses · Prononciation", hot: false },
    { icon: "briefcase", title: "Préparer un entretien d'embauche en anglais", meta: "27 réponses · Pro", hot: true },
  ];
  return (
    <section style={{ background: "var(--surface-page)", padding: "var(--section-y) 0" }}>
      <div className="bridge-container">
        <div className="bc-forum-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-16)", alignItems: "center", background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-2xl)", padding: "var(--space-12)", boxShadow: "var(--shadow-md)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
            <Reveal><SectionHeading align="left" eyebrow="Communauté" title="Vous n'apprenez jamais seul" maxWidth="20ch" /></Reveal>
            <Reveal delay={100}><p style={{ fontSize: "var(--text-md)", color: "var(--text-body)", margin: 0, lineHeight: "var(--leading-relaxed)" }}>Rejoignez le forum The Bridge Center : posez vos questions, partagez vos progrès, trouvez un partenaire de conversation et entraidez-vous avec des centaines d'apprenants francophones.</p></Reveal>
            <Reveal delay={180} style={{ display: "flex", gap: 14, marginTop: 4 }}>
              <Button variant="primary" iconRight="arrow-right" href="forum.html">Rejoindre le forum</Button>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: "var(--text-sm)", color: "var(--text-muted)" }}><i data-lucide="users" style={{ width: 18, height: 18, color: "var(--teal-500)" }} />+ 1 800 membres actifs</span>
            </Reveal>
          </div>
          <Reveal delay={120} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {threads.map((t) => (
              <div key={t.title} style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px 18px", borderRadius: "var(--radius-md)", background: "var(--surface-raised)", border: "1px solid var(--cream-300)" }}>
                <span style={{ width: 42, height: 42, borderRadius: "var(--radius-md)", background: "var(--surface-card)", color: "var(--indigo-700)", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "0 0 auto", boxShadow: "var(--shadow-xs)" }}><i data-lucide={t.icon} style={{ width: 20, height: 20 }} /></span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontWeight: 600, color: "var(--text-strong)", fontSize: "var(--text-base)" }}>{t.title}</span>
                    {t.hot && <Badge tone="danger" variant="soft" size="sm">Populaire</Badge>}
                  </div>
                  <span style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{t.meta}</span>
                </div>
                <i data-lucide="chevron-right" style={{ width: 18, height: 18, color: "var(--text-faint)" }} />
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- FINAL CTA ---------- */
function FinalCTA({ onAuth }) {
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "var(--indigo-950)", color: "var(--cream-50)" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url(../../assets/tex-dusk.png)", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.96 }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, color-mix(in srgb,var(--indigo-950) 30%,transparent), color-mix(in srgb,var(--indigo-950) 55%,transparent))" }} />
      <div className="bridge-container" style={{ position: "relative", zIndex: 2, padding: "var(--section-y) 0", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-6)" }}>
        <Reveal><span className="eyebrow" style={{ color: "var(--gold-400)", justifyContent: "center" }}><span aria-hidden="true" style={{ width: 22, height: 2, background: "currentColor", borderRadius: 2, display: "inline-block" }} />Votre tour</span></Reveal>
        <Reveal delay={80}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--display-hero)", fontWeight: "var(--weight-extrabold)", lineHeight: 1.04, letterSpacing: "var(--tracking-tighter)", color: "var(--cream-50)", margin: 0, maxWidth: "18ch" }}>
            Faites le premier pas vers <span style={{ color: "var(--gold-400)" }}>l'anglais</span>, dès aujourd'hui.
          </h2>
        </Reveal>
        <Reveal delay={160}><p style={{ fontSize: "var(--text-lg)", color: "var(--indigo-100)", margin: 0, maxWidth: "44ch" }}>Inscription gratuite, sans carte bancaire. Rejoignez 2 400+ étudiants et commencez votre toute première leçon en quelques minutes.</p></Reveal>
        <Reveal delay={240} style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center", marginTop: 8 }}>
          <Button variant="accent" size="lg" iconRight="arrow-right" onClick={() => onAuth("signup")}>Commencer gratuitement</Button>
          <Button variant="inverse-ghost" size="lg" icon="phone">Nous contacter</Button>
        </Reveal>
        <Reveal delay={300} style={{ display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "center", marginTop: 10, fontSize: "var(--text-sm)", color: "var(--indigo-100)" }}>
          {[["check-circle", "100 % gratuit pour débuter"], ["check-circle", "Cours en ligne + en direct"], ["check-circle", "Certificat à chaque niveau"]].map(([ic, tx]) => (
            <span key={tx} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><i data-lucide={ic} style={{ width: 18, height: 18, color: "var(--gold-400)" }} />{tx}</span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { Testimonials, BlogCard, BlogPreview, ForumCTA, FinalCTA });
