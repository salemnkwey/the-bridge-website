/* The Bridge Center — Accueil sections (part 1) */
const { useEffect: useEff1, useRef: useRef1, useState: useState1 } = React;

/* Animated count-up, triggers when scrolled into view */
function CountUp({ to, duration = 1700, format = (n) => n.toLocaleString("fr-FR") }) {
  const ref = useRef1(null);
  const [val, setVal] = useState1(0);
  const [start, setStart] = useState1(false);
  useEff1(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { setStart(true); io.disconnect(); } }), { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  useEff1(() => {
    if (!start) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setVal(to); return; }
    let raf; const t0 = performance.now();
    const tick = (t) => { const p = Math.min(1, (t - t0) / duration); const e = 1 - Math.pow(1 - p, 3); setVal(Math.round(e * to)); if (p < 1) raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, to]);
  return <span ref={ref}>{format(val)}</span>;
}

/* ---------- HERO ---------- */
function Hero({ onAuth }) {
  return (
    <section id="top" style={{ position: "relative", background: "var(--indigo-950)", color: "var(--cream-50)", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url(../../assets/tex-navy.png)", backgroundSize: "cover", backgroundPosition: "center top", opacity: 1 }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, color-mix(in srgb,var(--indigo-950) 35%,transparent) 0%, transparent 30%, color-mix(in srgb,var(--indigo-950) 55%,transparent) 100%)" }} />
      <div className="bridge-container" style={{ position: "relative", zIndex: 2 }}>
        <div className="bc-hero-grid" style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: "var(--space-16)", alignItems: "center", minHeight: "min(88vh, 820px)", paddingTop: "var(--space-16)", paddingBottom: "var(--space-20)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)", maxWidth: 620 }}>
            <Reveal>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "7px 14px 7px 8px", borderRadius: "var(--radius-pill)", background: "color-mix(in srgb,var(--cream-50) 10%,transparent)", border: "1px solid var(--border-inverse)", fontSize: "var(--text-sm)", fontWeight: "var(--weight-medium)", color: "var(--cream-100)" }}>
                <span style={{ display: "inline-flex", padding: "3px 9px", borderRadius: "var(--radius-pill)", background: "var(--gold-500)", color: "var(--indigo-900)", fontSize: "var(--text-xs)", fontWeight: "var(--weight-bold)" }}>Nouveau</span>
                Cours en direct chaque semaine sur Google Meet
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "var(--display-hero)", fontWeight: "var(--weight-extrabold)", lineHeight: 1.02, letterSpacing: "var(--tracking-tighter)", color: "var(--cream-50)", margin: 0 }}>
                Traversez vers<br />l'anglais, à<br /><span style={{ color: "var(--gold-400)", position: "relative" }}>votre rythme.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p style={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-relaxed)", color: "var(--indigo-100)", margin: 0, maxWidth: 540 }}>
                Du niveau <strong style={{ color: "var(--cream-50)" }}>A1 au C2</strong> — des cours en ligne, des séances en direct et une communauté qui vous accompagne, où que vous soyez dans le monde, de la première leçon jusqu'au certificat.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--indigo-200)", padding: "7px 14px", borderRadius: "var(--radius-pill)", background: "color-mix(in srgb, var(--cream-50) 8%, transparent)", border: "1px solid var(--border-inverse)" }}>
                <i data-lucide="map-pin" style={{ width: 15, height: 15, color: "var(--gold-400)", flex: "0 0 auto" }} />
                Présents à Kinshasa · En ligne partout dans le monde
              </span>
            </Reveal>
            <Reveal delay={240} style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 6 }}>
              <Button variant="accent" size="lg" iconRight="arrow-right" onClick={() => onAuth("signup")}>Commencer gratuitement</Button>
              <Button variant="inverse-ghost" size="lg" icon="compass" href="formations.html">Découvrir les formations</Button>
            </Reveal>
            <Reveal delay={320} style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 10 }}>
              <div style={{ display: "flex" }}>
                {["GM", "JL", "SK", "PB"].map((t, i) => (
                  <span key={t} style={{ width: 38, height: 38, borderRadius: "var(--radius-pill)", background: ["var(--gold-400)", "var(--teal-500)", "var(--indigo-400)", "var(--gold-600)"][i], color: "var(--indigo-950)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, border: "2px solid var(--indigo-950)", marginLeft: i ? -12 : 0 }}>{t}</span>
                ))}
              </div>
              <span style={{ fontSize: "var(--text-sm)", color: "var(--indigo-100)" }}><strong style={{ color: "var(--cream-50)" }}>2 400+ étudiants</strong> apprennent déjà avec nous, sur 4 continents.<br />Sans carte bancaire — commencez en 2 minutes.</span>
            </Reveal>
          </div>

          {/* Right visual: glass lesson card + floating chips */}
          <Reveal delay={200} className="bc-hero-visual" style={{ position: "relative", height: "100%", minHeight: 420, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ position: "relative", width: "min(420px, 100%)" }}>
              <div style={{ background: "color-mix(in srgb,var(--cream-50) 96%, transparent)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-xl)", padding: "var(--space-6)", color: "var(--text-body)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--red-500)" }}><span style={{ width: 9, height: 9, borderRadius: "50%", background: "var(--red-500)", boxShadow: "0 0 0 4px var(--danger-soft)" }} />En direct</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)" }}>18:30 · 14 places</span>
                </div>
                <div style={{ borderRadius: "var(--radius-md)", overflow: "hidden", aspectRatio: "16/9", backgroundImage: "url(../../assets/tex-dusk.png)", backgroundSize: "cover", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ width: 56, height: 56, borderRadius: "50%", background: "color-mix(in srgb,var(--cream-50) 92%,transparent)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--indigo-800)", boxShadow: "var(--shadow-md)" }}><i data-lucide="play" style={{ width: 24, height: 24, fill: "var(--indigo-800)" }} /></span>
                </div>
                <h4 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-lg)", margin: "14px 0 4px", color: "var(--text-strong)" }}>Conversation B1 — Parler de son travail</h4>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", margin: "0 0 14px" }}>Séance live avec Esther Nkanga · Formatrice</p>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ flex: 1, height: 8, borderRadius: 999, background: "var(--cream-200)", overflow: "hidden" }}><div style={{ width: "68%", height: "100%", borderRadius: 999, background: "linear-gradient(90deg,var(--gold-500),var(--gold-400))" }} /></div>
                  <span style={{ fontSize: "var(--text-xs)", fontWeight: 700, color: "var(--text-accent)" }}>68 %</span>
                </div>
              </div>
              {/* floating chips */}
              <div style={{ position: "absolute", top: -22, left: -26, background: "var(--surface-card)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-lg)", padding: "12px 16px", display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 40, height: 40, borderRadius: "var(--radius-md)", background: "var(--teal-50)", color: "var(--teal-600)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><i data-lucide="award" style={{ width: 22, height: 22 }} /></span>
                <div><div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, color: "var(--text-strong)", lineHeight: 1 }}>Certificat</div><div style={{ fontSize: 12, color: "var(--text-muted)" }}>reconnu, à chaque niveau</div></div>
              </div>
              <div style={{ position: "absolute", bottom: -24, right: -22, background: "var(--indigo-800)", color: "var(--cream-50)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-lg)", padding: "12px 16px", display: "flex", flexDirection: "column", gap: 6 }}>
                <div style={{ display: "flex", gap: 5 }}>{["A1", "A2", "B1", "B2", "C1", "C2"].map((l, i) => <span key={l} style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, padding: "3px 7px", borderRadius: 6, background: i < 3 ? "var(--gold-500)" : "color-mix(in srgb,var(--cream-50) 14%,transparent)", color: i < 3 ? "var(--indigo-900)" : "var(--indigo-100)" }}>{l}</span>)}</div>
                <span style={{ fontSize: 12, color: "var(--indigo-200)" }}>Un parcours complet, du débutant à l'expert</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- STATS BAND ---------- */
function StatsBand() {
  const stats = [
    { to: 2400, suffix: "+", label: "Étudiants accompagnés", icon: "users" },
    { to: 94, suffix: "%", label: "Taux de réussite aux niveaux", icon: "trending-up" },
    { to: 6, suffix: "", label: "Niveaux — du A1 au C2", icon: "layers" },
    { to: 3, suffix: "", label: "Centres physiques à Kinshasa", icon: "building-2" },
    { to: 130, suffix: "+", label: "Pays francophones représentés", icon: "globe" },
  ];
  return (
    <section style={{ background: "var(--surface-card)", borderBottom: "1px solid var(--divider)" }}>
      <div className="bridge-container">
        <div className="bc-stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "var(--space-8)", padding: "var(--space-12) 0" }}>
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <Stat icon={s.icon} suffix={s.suffix} label={s.label} value={<CountUp to={s.to} />} align="center" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- ABOUT PREVIEW ---------- */
function AboutPreview() {
  return (
    <section style={{ background: "var(--surface-page)", padding: "var(--section-y) 0" }}>
      <div className="bridge-container">
        <div className="bc-about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-16)", alignItems: "center" }}>
          <Reveal style={{ position: "relative" }}>
            <div style={{ borderRadius: "var(--radius-2xl)", overflow: "hidden", aspectRatio: "4/5", backgroundImage: "url(../../assets/tex-indigo.png)", backgroundSize: "cover", boxShadow: "var(--shadow-xl)" }} />
            <div style={{ position: "absolute", bottom: 24, left: -24, background: "var(--gold-500)", color: "var(--indigo-900)", borderRadius: "var(--radius-lg)", padding: "18px 22px", maxWidth: 230, boxShadow: "var(--shadow-lg)" }}>
              <i data-lucide="quote" style={{ width: 26, height: 26 }} />
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--text-md)", margin: "8px 0 0", lineHeight: 1.3 }}>Un pont entre votre présent et le monde qui vous attend.</p>
            </div>
          </Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
            <Reveal><SectionHeading align="left" eyebrow="Notre mission" title="Relier les francophones au monde anglophone" maxWidth="22ch" /></Reveal>
            <Reveal delay={100}>
              <p style={{ fontSize: "var(--text-md)", lineHeight: "var(--leading-relaxed)", color: "var(--text-body)", margin: 0 }}>
    Partout dans le monde, parler anglais ouvre des portes : études, carrière, voyages, opportunités. The Bridge Center existe pour ça — devenir le <strong>pont</strong> qui relie votre français à l'anglais dont vous rêvez, où que vous soyez : en ligne depuis chez vous ou en présentiel dans l'un de nos centres à Kinshasa.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p style={{ fontSize: "var(--text-md)", lineHeight: "var(--leading-relaxed)", color: "var(--text-muted)", margin: 0 }}>
              Nés à Kinshasa, nos formateurs congolais et internationaux accompagnent aujourd'hui des apprenants de Dakar à Montréal, de Bruxelles à Abidjan — en ligne ou dans l'un de nos trois centres en présentiel. Avec une méthode chaleureuse, exigeante et pensée pour vous. Parce que <em>« if you're rich, be the bridge »</em> — et la première richesse à partager, c'est le savoir.
              </p>
            </Reveal>
            <Reveal delay={240} style={{ display: "flex", gap: 14, marginTop: 6 }}>
              <Button variant="primary" iconRight="arrow-right" href="apropos.html">En savoir plus</Button>
              <Button variant="ghost" icon="play" href="apropos.html">Voir notre histoire</Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- METHOD / WHY US ---------- */
function Method() {
  const feats = [
    { icon: "layers", tone: "navy", title: "Du A1 au C2", text: "Un parcours complet aligné sur le cadre européen (CECRL), pour progresser étape par étape sans jamais vous perdre." },
    { icon: "blocks", tone: "gold", title: "Vidéo, audio, texte & quiz", text: "Chaque leçon mêle plusieurs formats pour ancrer durablement le vocabulaire et la grammaire." },
    { icon: "video", tone: "teal", title: "Séances en direct", text: "Des sessions live hebdomadaires sur Google Meet pour pratiquer l'oral avec nos formateurs." },
    { icon: "line-chart", tone: "navy", title: "Suivi de progression", text: "Visualisez vos acquis, vos points forts et vos prochaines étapes, leçon après leçon." },
    { icon: "award", tone: "gold", title: "Certificats reconnus", text: "Validez chaque niveau par un certificat à ajouter à votre CV et à partager fièrement." },
    { icon: "users-round", tone: "teal", title: "Une vraie communauté", text: "Un forum d'entraide où poser vos questions et progresser avec d'autres apprenants." },
    { icon: "building-2", tone: "navy", title: "Cours en présentiel", text: "Trois centres à Kinshasa pour apprendre en salle, en petits groupes, dans une ambiance immersive et chaleureuse." },
  ];
  return (
    <section style={{ background: "var(--surface-card)", padding: "var(--section-y) 0" }}>
      <div className="bridge-container" style={{ display: "flex", flexDirection: "column", gap: "var(--space-12)" }}>
        <Reveal><SectionHeading eyebrow="Pourquoi The Bridge Center" title="Une façon d'apprendre l'anglais pensée pour vous" lead="Tout ce qu'il faut pour passer de « je comprends quelques mots » à « je parle avec confiance »." /></Reveal>
        <div className="bc-feature-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-6)" }}>
          {feats.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 90}><FeatureCard icon={f.icon} tone={f.tone} title={f.title}>{f.text}</FeatureCard></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FEATURED COURSES ---------- */
function FeaturedCourses() {
  const courses = [
    { image: "../../assets/tex-indigo.png", level: "A1", category: "Anglais général", title: "Les fondations — Débuter en anglais", description: "Construisez vos premières phrases et gagnez en confiance dès la première semaine.", duration: "6 semaines", lessons: 24 },
    { image: "../../assets/tex-teal.png", level: "B1", category: "Conversation", title: "Parler avec aisance au quotidien", description: "Décrochez-vous à l'oral : situations réelles, prononciation et expressions utiles.", duration: "8 semaines", lessons: 32 },
    { image: "../../assets/tex-gold.png", level: "B2", category: "Anglais professionnel", title: "L'anglais pour le travail", description: "E-mails, réunions, entretiens : maîtrisez l'anglais qui fait avancer votre carrière.", duration: "10 semaines", lessons: 40 },
    { image: "../../assets/tex-dusk.png", level: "C1", category: "Préparation TOEFL", title: "Réussir le TOEFL avec sérénité", description: "Stratégies, examens blancs et accompagnement pour viser le score dont vous avez besoin.", duration: "12 semaines", lessons: 48 },
  ];
  return (
    <section style={{ background: "var(--surface-page)", padding: "var(--section-y) 0" }}>
      <div className="bridge-container" style={{ display: "flex", flexDirection: "column", gap: "var(--space-12)" }}>
        <Reveal style={{ display: "flex", flexWrap: "wrap", gap: 24, alignItems: "flex-end", justifyContent: "space-between" }}>
          <SectionHeading align="left" eyebrow="Formations à la une" title="Commencez par un cours, gratuitement" lead="Toutes nos formations de base sont 100 % gratuites. Choisissez la vôtre et lancez-vous." maxWidth="34ch" />
          <Button variant="secondary" iconRight="arrow-right" href="formations.html">Voir toutes les formations</Button>
        </Reveal>
        <div className="bc-course-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-6)" }}>
          {courses.map((c, i) => (
            <Reveal key={c.title} delay={(i % 4) * 80}><CourseCard {...c} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- HOW IT WORKS ---------- */
function HowItWorks() {
  const steps = [
    { icon: "user-plus", n: "01", title: "S'inscrire", text: "Créez votre compte gratuit en 2 minutes, sans carte bancaire." },
    { icon: "compass", n: "02", title: "Choisir sa formation", text: "Passez un court test de niveau et trouvez le parcours fait pour vous." },
    { icon: "graduation-cap", n: "03", title: "Apprendre & progresser", text: "Avancez à votre rythme entre leçons en ligne et séances en direct." },
    { icon: "award", n: "04", title: "Obtenir son certificat", text: "Validez votre niveau et célébrez le chemin parcouru." },
  ];
  return (
    <section style={{ background: "var(--surface-card)", padding: "var(--section-y) 0" }}>
      <div className="bridge-container" style={{ display: "flex", flexDirection: "column", gap: "var(--space-12)" }}>
        <Reveal><SectionHeading eyebrow="Comment ça marche" title="Quatre étapes pour traverser le pont" lead="De l'inscription au certificat, un chemin clair et encourageant." /></Reveal>
        <div className="bc-steps" style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-6)" }}>
          <div className="bc-steps-line" style={{ position: "absolute", top: 34, left: "12%", right: "12%", height: 2, background: "repeating-linear-gradient(90deg, var(--gold-400) 0 10px, transparent 10px 18px)", zIndex: 0 }} />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 110} style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 14 }}>
              <span style={{ width: 70, height: 70, borderRadius: "var(--radius-pill)", background: "var(--surface-card)", border: "2px solid var(--gold-400)", color: "var(--indigo-800)", display: "inline-flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--shadow-md)" }}><i data-lucide={s.icon} style={{ width: 28, height: 28 }} /></span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 700, color: "var(--text-accent)", letterSpacing: "0.1em" }}>{s.n}</span>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", margin: 0, color: "var(--text-strong)" }}>{s.title}</h3>
              <p style={{ fontSize: "var(--text-base)", color: "var(--text-muted)", margin: 0, maxWidth: "24ch", lineHeight: "var(--leading-relaxed)" }}>{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { CountUp, Hero, StatsBand, AboutPreview, Method, FeaturedCourses, HowItWorks });
