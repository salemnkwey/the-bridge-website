/* The Bridge Center — Page À propos */
const { useEffect: useApEffect } = React;

function AboutHeader() {
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "var(--indigo-950)", color: "var(--cream-50)" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url(../../assets/tex-navy.png)", backgroundSize: "cover", backgroundPosition: "center" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, color-mix(in srgb,var(--indigo-950) 30%,transparent), color-mix(in srgb,var(--indigo-950) 60%,transparent))" }} />
      <div className="bridge-container" style={{ position: "relative", zIndex: 2, padding: "var(--section-y-tight) 0", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "var(--space-5)" }}>
        <Reveal><span className="eyebrow" style={{ color: "var(--gold-400)", justifyContent: "center" }}><span aria-hidden="true" style={{ width: 22, height: 2, background: "currentColor", borderRadius: 2, display: "inline-block" }} />À propos</span></Reveal>
        <Reveal delay={80}>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "var(--display-hero)", fontWeight: "var(--weight-extrabold)", lineHeight: 1.04, letterSpacing: "var(--tracking-tighter)", color: "var(--cream-50)", margin: 0, maxWidth: "20ch" }}>
            Nés à Kinshasa, un pont vers <span style={{ color: "var(--gold-400)" }}>le monde</span>.
          </h1>
        </Reveal>
        <Reveal delay={160}><p style={{ fontSize: "var(--text-lg)", color: "var(--indigo-100)", margin: 0, maxWidth: "56ch" }}>The Bridge Center est né d'une conviction simple : l'anglais ne devrait jamais être un obstacle, mais un pont. Découvrez notre histoire, nos valeurs et l'équipe qui vous accompagne.</p></Reveal>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section style={{ background: "var(--surface-page)", padding: "var(--section-y) 0" }}>
      <div className="bridge-container">
        <div className="bc-about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-16)", alignItems: "center" }}>
          <Reveal style={{ position: "relative" }}>
            <div style={{ borderRadius: "var(--radius-2xl)", overflow: "hidden", aspectRatio: "4/5", backgroundImage: "url(../../assets/tex-indigo.png)", backgroundSize: "cover", boxShadow: "var(--shadow-xl)" }} />
            <div style={{ position: "absolute", bottom: -24, right: -20, background: "var(--surface-card)", borderRadius: "var(--radius-lg)", padding: "18px 22px", boxShadow: "var(--shadow-lg)", display: "flex", alignItems: "center", gap: 14, maxWidth: 260 }}>
              <span style={{ width: 46, height: 46, flex: "0 0 auto", borderRadius: "var(--radius-md)", background: "var(--gold-100)", color: "var(--gold-700)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><i data-lucide="flag" style={{ width: 24, height: 24 }} /></span>
              <div><div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 20, color: "var(--text-strong)", lineHeight: 1 }}>Depuis 2014</div><div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 3 }}>Un pont construit, leçon après leçon</div></div>
            </div>
          </Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
            <Reveal><SectionHeading align="left" eyebrow="Notre histoire" title="D'une salle de classe à Kinshasa à une communauté mondiale" maxWidth="24ch" /></Reveal>
            <Reveal delay={100}><p style={{ fontSize: "var(--text-md)", lineHeight: "var(--leading-relaxed)", color: "var(--text-body)", margin: 0 }}>Tout a commencé à <strong>Kinshasa</strong>, avec une poignée d'étudiants et une certitude : trop de francophones talentueux voyaient des portes se fermer, faute de parler anglais. Études à l'étranger, postes internationaux, opportunités en ligne — autant de ponts qui leur manquaient.</p></Reveal>
            <Reveal delay={160}><p style={{ fontSize: "var(--text-md)", lineHeight: "var(--leading-relaxed)", color: "var(--text-muted)", margin: 0 }}>Aujourd'hui, grâce au numérique, ce pont s'étend bien au-delà de la RDC : nous accompagnons des apprenants francophones de Dakar à Montréal, de Bruxelles à Abidjan. La mission reste la même — rendre l'anglais accessible, chaleureux et profondément humain.</p></Reveal>
            <Reveal delay={220}>
              <blockquote style={{ margin: "var(--space-2) 0 0", padding: "var(--space-5) var(--space-6)", borderLeft: "3px solid var(--gold-500)", background: "var(--surface-raised)", borderRadius: "0 var(--radius-md) var(--radius-md) 0", fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "var(--text-lg)", color: "var(--indigo-800)", lineHeight: 1.4 }}>« If you're rich, be the bridge. » — et la première richesse à partager, c'est le savoir.</blockquote>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Values() {
  const vals = [
    { icon: "heart-handshake", tone: "gold", title: "Accessibilité", text: "Des formations de base 100 % gratuites, pour que la langue ne soit jamais une question de moyens." },
    { icon: "sparkles", tone: "navy", title: "Exigence bienveillante", text: "On vous pousse à progresser, toujours avec encouragement et sans jamais vous juger." },
    { icon: "globe-2", tone: "teal", title: "Ouverture sur le monde", text: "Une communauté internationale qui célèbre les cultures, les accents et les parcours de chacun." },
    { icon: "flag", tone: "gold", title: "Fierté africaine", text: "Nés à Kinshasa, fiers de nos racines, et déterminés à faire rayonner les talents francophones." },
  ];
  return (
    <section style={{ background: "var(--surface-card)", padding: "var(--section-y) 0" }}>
      <div className="bridge-container" style={{ display: "flex", flexDirection: "column", gap: "var(--space-12)" }}>
        <Reveal><SectionHeading eyebrow="Nos valeurs" title="Ce qui nous guide chaque jour" lead="Quatre principes qui façonnent chaque cours, chaque échange et chaque décision." /></Reveal>
        <div className="bc-values-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-6)" }}>
          {vals.map((v, i) => (
            <Reveal key={v.title} delay={(i % 4) * 80}><FeatureCard icon={v.icon} tone={v.tone} title={v.title}>{v.text}</FeatureCard></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Methodology() {
  const steps = [
    { n: "01", icon: "compass", title: "On part de votre niveau réel", text: "Un test de placement précis situe vos acquis sur l'échelle CECRL (A1→C2) et trace votre parcours." },
    { n: "02", icon: "blocks", title: "On mélange les formats", text: "Vidéo, audio, texte et quiz : chaque notion est vue sous plusieurs angles pour s'ancrer durablement." },
    { n: "03", icon: "mic", title: "On pratique en direct", text: "Des séances live hebdomadaires sur Google Meet : parler reste le meilleur moyen d'apprendre à parler." },
    { n: "04", icon: "line-chart", title: "On mesure les progrès", text: "Un suivi clair de vos acquis et de vos prochaines étapes, jusqu'à la validation de chaque niveau." },
  ];
  return (
    <section style={{ background: "var(--surface-page)", padding: "var(--section-y) 0" }}>
      <div className="bridge-container">
        <div className="bc-method-grid" style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: "var(--space-16)", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)", position: "sticky", top: 100 }}>
            <Reveal><SectionHeading align="left" eyebrow="Notre méthode" title="Une pédagogie qui respecte votre rythme" maxWidth="22ch" /></Reveal>
            <Reveal delay={100}><p style={{ fontSize: "var(--text-md)", lineHeight: "var(--leading-relaxed)", color: "var(--text-muted)", margin: 0 }}>Pas de recette miracle, mais une approche éprouvée : des objectifs clairs, beaucoup de pratique, et un accompagnement humain à chaque étape. C'est ainsi qu'on construit un pont solide.</p></Reveal>
            <Reveal delay={160}><div style={{ marginTop: 8 }}><Button variant="primary" iconRight="arrow-right" href="formations.html">Voir les formations</Button></div></Reveal>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <div style={{ display: "flex", gap: "var(--space-5)", padding: "var(--space-6)", background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-sm)" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, flex: "0 0 auto" }}>
                    <span style={{ width: 48, height: 48, borderRadius: "var(--radius-md)", background: "var(--indigo-50)", color: "var(--indigo-700)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><i data-lucide={s.icon} style={{ width: 24, height: 24 }} /></span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 700, color: "var(--gold-600)" }}>{s.n}</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-lg)", fontWeight: 700, color: "var(--text-strong)", margin: 0 }}>{s.title}</h3>
                    <p style={{ fontSize: "var(--text-base)", color: "var(--text-muted)", margin: 0, lineHeight: "var(--leading-relaxed)" }}>{s.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Team() {
  const team = [
    { name: "Esther Nkanga", role: "Fondatrice & formatrice C2", tone: "indigo", bio: "Linguiste passionnée, elle a fondé The Bridge Center pour ouvrir l'anglais au plus grand nombre.", img: "../../assets/tex-indigo.png" },
    { name: "David Ilunga", role: "Responsable pédagogique", tone: "teal", bio: "Spécialiste de l'oral et de la prononciation, il conçoit nos parcours de conversation.", img: "../../assets/tex-teal.png" },
    { name: "Marie-Claire Bofenda", role: "Formatrice grammaire & écrit", tone: "gold", bio: "Elle rend la grammaire limpide et adore débusquer les faux-amis qui piègent les francophones.", img: "../../assets/tex-gold.png" },
    { name: "Samuel Okitundu", role: "Préparation examens (TOEFL/IELTS)", tone: "indigo", bio: "Stratège des examens, il a accompagné des centaines d'étudiants vers leur score cible.", img: "../../assets/tex-dusk.png" },
    { name: "Aïcha Traoré", role: "Formatrice anglais des affaires", tone: "teal", bio: "Ancienne consultante, elle enseigne l'anglais professionnel qui fait avancer les carrières.", img: "../../assets/tex-indigo.png" },
    { name: "Jonathan Mbiya", role: "Animateur communauté & live", tone: "gold", bio: "Il fait vivre le forum et les séances en direct, et veille à ce que personne n'apprenne seul.", img: "../../assets/tex-teal.png" },
  ];
  const ring = { indigo: "var(--indigo-400)", teal: "var(--teal-500)", gold: "var(--gold-500)" };
  return (
    <section style={{ background: "var(--surface-card)", padding: "var(--section-y) 0" }}>
      <div className="bridge-container" style={{ display: "flex", flexDirection: "column", gap: "var(--space-12)" }}>
        <Reveal><SectionHeading eyebrow="Notre équipe" title="Les bâtisseurs de ponts" lead="Des formateurs congolais et internationaux, réunis par la même envie : vous voir réussir." /></Reveal>
        <div className="bc-team-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-6)" }}>
          {team.map((m, i) => (
            <Reveal key={m.name} delay={(i % 3) * 80}>
              <div className="bc-team-card"
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "var(--shadow-lg)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "var(--shadow-sm)"; }}
                style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", padding: "var(--space-6)", background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-sm)", height: "100%", transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
                  <span style={{ width: 70, height: 70, flex: "0 0 auto", borderRadius: "var(--radius-pill)", backgroundImage: `url(${m.img})`, backgroundSize: "cover", backgroundPosition: "center", boxShadow: `0 0 0 3px var(--surface-card), 0 0 0 5px ${ring[m.tone]}` }} />
                  <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-lg)", fontWeight: 700, color: "var(--text-strong)" }}>{m.name}</span>
                    <span style={{ fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--text-accent)" }}>{m.role}</span>
                  </div>
                </div>
                <p style={{ fontSize: "var(--text-base)", color: "var(--text-muted)", margin: 0, lineHeight: "var(--leading-relaxed)" }}>{m.bio}</p>
                <div style={{ display: "flex", gap: 8, marginTop: "auto", paddingTop: "var(--space-2)" }}>
                  <span style={{ width: 34, height: 34, borderRadius: "var(--radius-pill)", border: "1px solid var(--border-default)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)" }}><i data-lucide="briefcase" style={{ width: 16, height: 16 }} /></span>
                  <span style={{ width: 34, height: 34, borderRadius: "var(--radius-pill)", border: "1px solid var(--border-default)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)" }}><i data-lucide="mail" style={{ width: 16, height: 16 }} /></span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutStats() {
  const stats = [
    { to: 2400, suffix: "+", label: "Étudiants accompagnés", icon: "users" },
    { to: 130, suffix: "+", label: "Pays francophones représentés", icon: "globe" },
    { to: 94, suffix: "%", label: "Taux de réussite aux niveaux", icon: "trending-up" },
    { to: 12, suffix: "", label: "Années d'expérience", icon: "calendar-heart" },
  ];
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "var(--indigo-950)", color: "var(--cream-50)" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url(../../assets/tex-dusk.png)", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.6 }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, color-mix(in srgb,var(--indigo-950) 45%,transparent), color-mix(in srgb,var(--indigo-950) 65%,transparent))" }} />
      <div className="bridge-container" style={{ position: "relative", zIndex: 2, padding: "var(--section-y) 0" }}>
        <div className="bc-stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-10)" }}>
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <Stat icon={s.icon} suffix={s.suffix} label={s.label} value={<CountUp to={s.to} />} tone="inverse" align="center" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { AboutHeader, Story, Values, Methodology, Team, AboutStats });
