/* The Bridge Center — Page Forum / Communauté */
const { useState: useFoState, useEffect: useFoEffect, useMemo: useFoMemo } = React;

const FORUM_CATEGORIES = [
  { id: "presentations", icon: "hand", tone: "gold", name: "Présentations", desc: "Nouveau ? Présentez-vous et dites bonjour à la communauté.", threads: 312, posts: 1840 },
  { id: "grammaire", icon: "spell-check", tone: "navy", name: "Questions de grammaire", desc: "Temps, articles, prépositions : posez vos questions, on vous répond.", threads: 538, posts: 4120 },
  { id: "conversation", icon: "messages-square", tone: "teal", name: "Pratique de la conversation", desc: "Trouvez un partenaire d'échange et entraînez-vous à l'oral.", threads: 421, posts: 3260 },
  { id: "ressources", icon: "library", tone: "gold", name: "Ressources", desc: "Livres, podcasts, applis, chaînes : partagez vos meilleures trouvailles.", threads: 276, posts: 1990 },
  { id: "examens", icon: "graduation-cap", tone: "navy", name: "Entraide examens", desc: "TOEFL, IELTS, Cambridge : préparez-vous ensemble et gardez le cap.", threads: 198, posts: 1530 },
  { id: "libre", icon: "coffee", tone: "teal", name: "Discussions libres", desc: "Films, voyages, culture, tout le reste — en anglais ou en français.", threads: 389, posts: 2870 },
];

const FORUM_THREADS = [
  { id: 1, title: "Comment bien utiliser le present perfect au quotidien ?", author: "Grâce Mukendi", cat: "Questions de grammaire", catTone: "navy", replies: 32, last: "il y a 12 min", hot: true, solved: false },
  { id: 2, title: "Cherche partenaire de conversation niveau B1 (fuseau Afrique)", author: "Awa Diallo", cat: "Pratique de la conversation", catTone: "teal", replies: 18, last: "il y a 34 min", hot: false, solved: false },
  { id: 3, title: "Mes 5 podcasts préférés pour progresser en écoute", author: "David Ilunga", cat: "Ressources", catTone: "gold", replies: 47, last: "il y a 1 h", hot: true, solved: false },
  { id: 4, title: "Astuces pour gérer le temps à l'épreuve de reading IELTS", author: "Thomas Lefebvre", cat: "Entraide examens", catTone: "navy", replies: 27, last: "il y a 2 h", hot: false, solved: true },
  { id: 5, title: "Bonjour à tous — j'arrive de Montréal !", author: "Sarah Kalala", cat: "Présentations", catTone: "gold", replies: 14, last: "il y a 3 h", hot: false, solved: false },
  { id: 6, title: "« Make » ou « do » ? J'ai enfin compris la différence", author: "Marie-Claire Bofenda", cat: "Questions de grammaire", catTone: "navy", replies: 21, last: "il y a 5 h", hot: false, solved: true },
];

function ForumHeader() {
  const stats = [
    { value: "1 820", label: "Membres actifs" },
    { value: "2 134", label: "Discussions" },
    { value: "15 600", label: "Messages" },
    { value: "< 2 h", label: "Réponse moyenne" },
  ];
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "var(--indigo-950)", color: "var(--cream-50)" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url(../../assets/tex-navy.png)", backgroundSize: "cover", backgroundPosition: "center" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, color-mix(in srgb,var(--indigo-950) 30%,transparent), color-mix(in srgb,var(--indigo-950) 62%,transparent))" }} />
      <div className="bridge-container" style={{ position: "relative", zIndex: 2, padding: "var(--section-y-tight) 0", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "var(--space-6)" }}>
        <Reveal><span className="eyebrow" style={{ color: "var(--gold-400)", justifyContent: "center" }}><span aria-hidden="true" style={{ width: 22, height: 2, background: "currentColor", borderRadius: 2, display: "inline-block" }} />La communauté</span></Reveal>
        <Reveal delay={80}>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "var(--display-hero)", fontWeight: "var(--weight-extrabold)", lineHeight: 1.04, letterSpacing: "var(--tracking-tighter)", color: "var(--cream-50)", margin: 0, maxWidth: "18ch" }}>
            On apprend mieux <span style={{ color: "var(--gold-400)" }}>ensemble</span>.
          </h1>
        </Reveal>
        <Reveal delay={160}><p style={{ fontSize: "var(--text-lg)", color: "var(--indigo-100)", margin: 0, maxWidth: "56ch" }}>Le forum The Bridge Center réunit des apprenants francophones du monde entier. Posez vos questions, partagez vos progrès, trouvez un partenaire de conversation — vous n'êtes jamais seul sur le pont.</p></Reveal>
        <Reveal delay={240} style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "var(--space-10)", marginTop: "var(--space-4)" }}>
          {stats.map((s) => (
            <div key={s.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "var(--text-3xl)", color: "var(--gold-400)", lineHeight: 1 }}>{s.value}</span>
              <span style={{ fontSize: "var(--text-sm)", color: "var(--indigo-100)" }}>{s.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function CategoryRow({ c }) {
  const tints = { gold: ["var(--gold-100)", "var(--gold-700)"], navy: ["var(--indigo-50)", "var(--indigo-700)"], teal: ["var(--teal-50)", "var(--teal-600)"] }[c.tone];
  return (
    <a href="#" onClick={(e) => e.preventDefault()} className="bc-cat-row"
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "var(--shadow-lg)"; e.currentTarget.style.borderColor = "var(--gold-300)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "var(--shadow-sm)"; e.currentTarget.style.borderColor = "var(--border-subtle)"; }}
      style={{ display: "flex", alignItems: "center", gap: "var(--space-5)", padding: "var(--space-5) var(--space-6)", background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-sm)", textDecoration: "none", color: "inherit", transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)" }}>
      <span style={{ width: 54, height: 54, flex: "0 0 auto", borderRadius: "var(--radius-md)", background: tints[0], color: tints[1], display: "inline-flex", alignItems: "center", justifyContent: "center" }}><i data-lucide={c.icon} style={{ width: 26, height: 26 }} /></span>
      <span style={{ display: "flex", flexDirection: "column", gap: 3, minWidth: 0, flex: 1 }}>
        <span style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-lg)", fontWeight: 700, color: "var(--text-strong)" }}>{c.name}</span>
        <span style={{ fontSize: "var(--text-base)", color: "var(--text-muted)" }}>{c.desc}</span>
      </span>
      <span className="bc-cat-meta" style={{ display: "flex", gap: "var(--space-8)", flex: "0 0 auto", textAlign: "center" }}>
        <span style={{ display: "flex", flexDirection: "column" }}><span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "var(--text-lg)", color: "var(--text-strong)" }}>{c.threads.toLocaleString("fr-FR")}</span><span style={{ fontSize: "var(--text-xs)", color: "var(--text-faint)", textTransform: "uppercase", letterSpacing: "var(--tracking-wide)" }}>Sujets</span></span>
        <span style={{ display: "flex", flexDirection: "column" }}><span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "var(--text-lg)", color: "var(--text-strong)" }}>{c.posts.toLocaleString("fr-FR")}</span><span style={{ fontSize: "var(--text-xs)", color: "var(--text-faint)", textTransform: "uppercase", letterSpacing: "var(--tracking-wide)" }}>Messages</span></span>
      </span>
      <i data-lucide="chevron-right" style={{ width: 20, height: 20, color: "var(--text-faint)", flex: "0 0 auto" }} />
    </a>
  );
}

function ThreadRow({ t }) {
  const tints = { gold: "var(--gold-600)", navy: "var(--indigo-600)", teal: "var(--teal-600)" }[t.catTone];
  const tintBg = { gold: "var(--gold-100)", navy: "var(--indigo-50)", teal: "var(--teal-50)" }[t.catTone];
  return (
    <a href="#" onClick={(e) => e.preventDefault()} className="bc-thread-row"
      onMouseEnter={(e) => { e.currentTarget.style.background = "var(--surface-raised)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = "var(--surface-card)"; }}
      style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", padding: "var(--space-4) var(--space-5)", background: "var(--surface-card)", textDecoration: "none", color: "inherit", transition: "background var(--dur-fast) var(--ease-out)" }}>
      <Avatar name={t.author} size="md" />
      <span style={{ display: "flex", flexDirection: "column", gap: 5, minWidth: 0, flex: 1 }}>
        <span style={{ display: "flex", alignItems: "center", gap: 9, flexWrap: "wrap" }}>
          {t.hot && <span title="Populaire" style={{ display: "inline-flex" }}><i data-lucide="flame" style={{ width: 16, height: 16, color: "var(--red-500)" }} /></span>}
          {t.solved && <span title="Résolu" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 18, height: 18, borderRadius: "50%", background: "var(--success-soft)" }}><i data-lucide="check" style={{ width: 12, height: 12, color: "var(--success)", strokeWidth: 3 }} /></span>}
          <span style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-md)", fontWeight: 700, color: "var(--text-strong)", lineHeight: 1.25 }}>{t.title}</span>
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "var(--text-sm)", color: "var(--text-muted)", flexWrap: "wrap" }}>
          <span>par <strong style={{ color: "var(--text-body)", fontWeight: 600 }}>{t.author}</strong></span>
          <span style={{ display: "inline-flex", padding: "2px 9px", borderRadius: "var(--radius-pill)", background: tintBg, color: tintColor(t.catTone), fontSize: "var(--text-xs)", fontWeight: 700 }}>{t.cat}</span>
        </span>
      </span>
      <span className="bc-thread-meta" style={{ display: "flex", alignItems: "center", gap: "var(--space-6)", flex: "0 0 auto" }}>
        <span style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "var(--text-base)", color: "var(--text-strong)" }}><i data-lucide="message-circle" style={{ width: 15, height: 15, color: "var(--text-faint)" }} />{t.replies}</span>
          <span style={{ fontSize: "var(--text-xs)", color: "var(--text-faint)" }}>réponses</span>
        </span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: "var(--text-sm)", color: "var(--text-muted)", minWidth: 96 }}><i data-lucide="clock" style={{ width: 14, height: 14 }} />{t.last}</span>
      </span>
    </a>
  );
}
function tintColor(tone) { return { gold: "var(--gold-700)", navy: "var(--indigo-700)", teal: "var(--teal-700)" }[tone]; }

function JoinBanner({ onAuth }) {
  return (
    <div style={{ position: "relative", overflow: "hidden", borderRadius: "var(--radius-xl)", background: "var(--indigo-900)", color: "var(--cream-50)", boxShadow: "var(--shadow-lg)" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url(../../assets/tex-dusk.png)", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.55 }} />
      <div className="bc-join" style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-8)", padding: "var(--space-10) var(--space-12)", flexWrap: "wrap" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", maxWidth: 560 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--gold-400)" }}><i data-lucide="lock-open" style={{ width: 16, height: 16 }} />Lecture libre · participation réservée aux membres</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--display-sub)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "var(--tracking-tight)", color: "var(--cream-50)", margin: 0 }}>Envie de participer&nbsp;? Rejoignez la communauté.</h2>
          <p style={{ fontSize: "var(--text-md)", color: "var(--indigo-100)", margin: 0, lineHeight: "var(--leading-relaxed)" }}>Tout le monde peut lire les discussions. Pour poser une question, répondre et trouver un partenaire de conversation, créez votre compte gratuit en 2 minutes.</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: "0 0 auto" }}>
          <Button variant="accent" size="lg" iconRight="arrow-right" onClick={() => onAuth("signup")}>Rejoindre gratuitement</Button>
          <Button variant="inverse-ghost" size="lg" icon="log-in" onClick={() => onAuth("login")}>Se connecter</Button>
        </div>
      </div>
    </div>
  );
}

function ForumPage({ onAuth }) {
  useFoEffect(() => { window.lucide && window.lucide.createIcons(); }, []);
  return (
    <section style={{ background: "var(--surface-page)", padding: "var(--section-y-tight) 0 var(--section-y)" }}>
      <div className="bridge-container" style={{ display: "flex", flexDirection: "column", gap: "var(--section-y-tight)" }}>
        {/* Join banner */}
        <Reveal><JoinBanner onAuth={onAuth} /></Reveal>

        {/* Categories */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)" }}>
          <Reveal><SectionHeading align="left" eyebrow="Catégories" title="Trouvez votre espace de discussion" maxWidth="30ch" /></Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            {FORUM_CATEGORIES.map((c, i) => (
              <Reveal key={c.id} delay={(i % 3) * 60}><CategoryRow c={c} /></Reveal>
            ))}
          </div>
        </div>

        {/* Recent discussions */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)" }}>
          <Reveal style={{ display: "flex", flexWrap: "wrap", gap: 18, alignItems: "flex-end", justifyContent: "space-between" }}>
            <SectionHeading align="left" eyebrow="En ce moment" title="Discussions récentes" maxWidth="26ch" />
            <Button variant="secondary" iconRight="arrow-right">Voir toutes les discussions</Button>
          </Reveal>
          <Reveal style={{ background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-sm)", overflow: "hidden" }}>
            {FORUM_THREADS.map((t, i) => (
              <React.Fragment key={t.id}>
                {i > 0 && <div style={{ height: 1, background: "var(--divider)", marginInline: "var(--space-5)" }} />}
                <ThreadRow t={t} />
              </React.Fragment>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ForumHeader, ForumPage, FORUM_CATEGORIES, FORUM_THREADS });
