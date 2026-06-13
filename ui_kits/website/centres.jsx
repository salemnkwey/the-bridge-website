/* The Bridge Center — Page Nos centres */
const { useState: useCeState, useEffect: useCeEffect } = React;

const CENTRES = [
  {
    id: "gombe",
    name: "Centre Gombe",
    quartier: "Gombe — centre-ville",
    adresse: "Avenue de la Libération, N° 14, Gombe",
    ville: "Kinshasa, RD Congo",
    tel: "+243 800 000 001",
    email: "gombe@thebridgecenter.com",
    horaires: "Lun – Sam : 08 h – 21 h",
    tone: "indigo",
    image: "../../assets/tex-navy.png",
    tag: "Siège",
  },
  {
    id: "limete",
    name: "Centre Limete",
    quartier: "Limete — Industriel",
    adresse: "Boulevard Lumumba, N° 87, Limete",
    ville: "Kinshasa, RD Congo",
    tel: "+243 800 000 002",
    email: "limete@thebridgecenter.com",
    horaires: "Lun – Sam : 08 h – 21 h",
    tone: "teal",
    image: "../../assets/tex-teal.png",
    tag: null,
  },
  {
    id: "lemba",
    name: "Centre Lemba",
    quartier: "Lemba — Université",
    adresse: "Avenue de l'Université, N° 33, Lemba",
    ville: "Kinshasa, RD Congo",
    tel: "+243 800 000 003",
    email: "lemba@thebridgecenter.com",
    horaires: "Lun – Sam : 08 h – 21 h",
    tone: "gold",
    image: "../../assets/tex-gold.png",
    tag: null,
  },
];

const VACATIONS = [
  {
    id: "matin", label: "Vacation du matin", icon: "clock",
    start: "08 h 00", end: "11 h 00",
    color: "var(--gold-500)", bg: "var(--gold-100)", fg: "var(--gold-700)",
    desc: "Idéale pour les étudiants et les actifs disponibles le matin."
  },
  {
    id: "apmidi", label: "Vacation de l'après-midi", icon: "clock",
    start: "14 h 00", end: "17 h 00",
    color: "var(--teal-500)", bg: "var(--teal-50)", fg: "var(--teal-700)",
    desc: "Le créneau équilibré pour concilier études, travail et vie perso."
  },
  {
    id: "soir", label: "Vacation du soir", icon: "clock",
    start: "17 h 30", end: "20 h 30",
    color: "var(--indigo-500)", bg: "var(--indigo-50)", fg: "var(--indigo-700)",
    desc: "Pour les professionnels et travailleurs — après la journée."
  },
];

const PAIRS_DAYS = ["Lun", "Mer", "Ven"];
const IMPAIRS_DAYS = ["Mar", "Jeu", "Sam"];
const ALL_DAYS = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];

function CentresHeader() {
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "var(--indigo-950)", color: "var(--cream-50)" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url(../../assets/tex-navy.png)", backgroundSize: "cover", backgroundPosition: "center" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, color-mix(in srgb,var(--indigo-950) 30%,transparent), color-mix(in srgb,var(--indigo-950) 60%,transparent))" }} />
      <div className="bridge-container" style={{ position: "relative", zIndex: 2, padding: "var(--section-y-tight) 0", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "var(--space-5)" }}>
        <Reveal>
          <span className="eyebrow" style={{ color: "var(--gold-400)", justifyContent: "center" }}>
            <span aria-hidden="true" style={{ width: 22, height: 2, background: "currentColor", borderRadius: 2, display: "inline-block" }} />Nos centres
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "var(--display-hero)", fontWeight: "var(--weight-extrabold)", lineHeight: 1.04, letterSpacing: "var(--tracking-tighter)", color: "var(--cream-50)", margin: 0, maxWidth: "20ch" }}>
            Venez apprendre <span style={{ color: "var(--gold-400)" }}>en personne</span> à Kinshasa.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p style={{ fontSize: "var(--text-lg)", color: "var(--indigo-100)", margin: 0, maxWidth: "56ch" }}>
            Retrouvez-nous dans nos différents centres à Kinshasa. Trois quartiers, les mêmes formateurs experts, le même engagement — et des cours en présentiel pour ceux qui apprennent mieux en groupe.
          </p>
        </Reveal>
        <Reveal delay={240} style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-8)", justifyContent: "center", marginTop: "var(--space-4)" }}>
          {[["building-2", "3 centres à Kinshasa"], ["users", "Cours en petits groupes"], ["clock", "3 vacations / jour"]].map(([ic, lb]) => (
            <span key={lb} style={{ display: "inline-flex", alignItems: "center", gap: 9, fontSize: "var(--text-base)", fontWeight: 600, color: "var(--indigo-100)" }}>
              <span style={{ width: 36, height: 36, borderRadius: "var(--radius-pill)", background: "color-mix(in srgb,var(--gold-500) 18%,transparent)", color: "var(--gold-400)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><i data-lucide={ic} style={{ width: 18, height: 18 }} /></span>
              {lb}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function CentreCard({ c }) {
  const tint = { indigo: ["var(--indigo-50)", "var(--indigo-700)", "var(--indigo-400)"], teal: ["var(--teal-50)", "var(--teal-700)", "var(--teal-500)"], gold: ["var(--gold-100)", "var(--gold-700)", "var(--gold-500)"] }[c.tone];
  return (
    <div className="bc-centre-card"
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "var(--shadow-xl)"; e.currentTarget.style.borderColor = tint[2]; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "var(--shadow-md)"; e.currentTarget.style.borderColor = "var(--border-subtle)"; }}
      style={{ display: "flex", flexDirection: "column", background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-xl)", overflow: "hidden", boxShadow: "var(--shadow-md)", height: "100%", transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)" }}>
      {/* Map placeholder */}
      <div style={{ position: "relative", height: 160, backgroundImage: `url(${c.image})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: "color-mix(in srgb,var(--indigo-950) 35%,transparent)" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(color-mix(in srgb,var(--cream-50) 8%,transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb,var(--cream-50) 8%,transparent) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6 }}>
          <span style={{ width: 46, height: 46, borderRadius: "var(--radius-pill)", background: tint[2], color: "var(--indigo-950)", display: "inline-flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--shadow-lg)" }}><i data-lucide="map-pin" style={{ width: 22, height: 22, fill: "var(--indigo-950)" }} /></span>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--text-sm)", color: "var(--cream-50)", textAlign: "center" }}>{c.quartier}</span>
        </div>
        {c.tag && (
          <span style={{ position: "absolute", top: 12, right: 12, padding: "4px 12px", borderRadius: "var(--radius-pill)", background: "var(--gold-500)", color: "var(--indigo-900)", fontSize: "var(--text-xs)", fontWeight: 700 }}>{c.tag}</span>
        )}
      </div>
      {/* Info */}
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", padding: "var(--space-6)", flex: 1 }}>
        <div>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", fontWeight: 800, color: "var(--text-strong)", margin: "0 0 4px", lineHeight: 1.2 }}>{c.name}</h3>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-accent)" }}>{c.quartier}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", fontSize: "var(--text-sm)", color: "var(--text-body)" }}>
          {[["map-pin", `${c.adresse} — ${c.ville}`], ["phone", c.tel], ["mail", c.email], ["clock", c.horaires]].map(([ic, tx]) => (
            <span key={ic} style={{ display: "flex", alignItems: "flex-start", gap: 9 }}>
              <i data-lucide={ic} style={{ width: 15, height: 15, color: tint[1], flex: "0 0 auto", marginTop: 2 }} />
              <span style={{ lineHeight: 1.45 }}>{tx}</span>
            </span>
          ))}
        </div>
        <div style={{ marginTop: "auto", paddingTop: "var(--space-4)", borderTop: "1px solid var(--divider)" }}>
          <a href="#" onClick={(e) => e.preventDefault()}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", borderRadius: "var(--radius-pill)", background: tint[0], color: tint[1], border: "none", fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", fontWeight: 700, cursor: "pointer", textDecoration: "none", transition: "all var(--dur-fast) var(--ease-out)" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = tint[2]; e.currentTarget.style.color = "var(--indigo-950)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = tint[0]; e.currentTarget.style.color = tint[1]; }}>
            <i data-lucide="navigation" style={{ width: 15, height: 15 }} />Itinéraire
          </a>
        </div>
      </div>
    </div>
  );
}

function CentresGrid() {
  return (
    <section style={{ background: "var(--surface-page)", padding: "var(--section-y) 0" }}>
      <div className="bridge-container" style={{ display: "flex", flexDirection: "column", gap: "var(--space-12)" }}>
        <Reveal><SectionHeading eyebrow="Nos centres" title="Trois lieux pour apprendre ensemble" lead="Chaque centre offre les mêmes formations et le même niveau d'exigence, dans un quartier différent de Kinshasa." /></Reveal>
        <div className="bc-centres-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-6)" }}>
          {CENTRES.map((c, i) => (
            <Reveal key={c.id} delay={i * 100}><CentreCard c={c} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Vacations ---- */
function VacationCard({ v }) {
  return (
    <div style={{
      display: "flex", flexDirection: "column", gap: "var(--space-5)",
      padding: "var(--space-8)",
      background: "var(--surface-card)",
      border: `2px solid ${v.bg}`,
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-sm)",
      height: "100%",
      position: "relative", overflow: "hidden",
      boxSizing: "border-box",
    }}>
      {/* Decorative circle */}
      <div aria-hidden="true" style={{ position: "absolute", top: -20, right: -20, width: 96, height: 96, borderRadius: "50%", background: v.bg, opacity: 0.65, pointerEvents: "none" }} />
      {/* Header row: icon tile + label + badge */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-4)", position: "relative", zIndex: 1 }}>
        <span style={{ width: 48, height: 48, flex: "0 0 auto", borderRadius: "var(--radius-md)", background: v.bg, color: v.fg, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
          <i data-lucide={v.icon} style={{ width: 24, height: 24 }} />
        </span>
        <div style={{ display: "flex", flexDirection: "column", gap: 4, paddingTop: 2 }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "var(--text-lg)", color: "var(--text-strong)", lineHeight: 1.15 }}>{v.label}</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: v.fg, fontWeight: 700 }}>Présentiel · 3 h de cours</span>
        </div>
      </div>
      {/* Time block */}
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", padding: "var(--space-4) var(--space-5)", background: v.bg, borderRadius: "var(--radius-md)", position: "relative", zIndex: 1 }}>
        <i data-lucide="clock" style={{ width: 20, height: 20, color: v.fg, flex: "0 0 auto" }} />
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "var(--text-2xl)", color: v.fg, letterSpacing: "var(--tracking-tight)", lineHeight: 1, whiteSpace: "nowrap" }}>
          {v.start} – {v.end}
        </span>
      </div>
      {/* Description */}
      <p style={{ fontSize: "var(--text-base)", color: "var(--text-muted)", margin: 0, lineHeight: "var(--leading-relaxed)", position: "relative", zIndex: 1 }}>{v.desc}</p>
    </div>
  );
}

/* ---- Pairs / Impairs mini-calendar ---- */
function PairsImpaurs() {
  const [highlight, setHighlight] = useCeState(null);
  // Generate a sample month (June 2026, starts Wednesday)
  const MONTH_DAYS = 30;
  const START_DOW = 1; // Monday = 0, June 1 = Monday
  const DOW_LABELS = ["L", "M", "M", "J", "V", "S", "D"];
  const cells = [];
  for (let i = 0; i < START_DOW; i++) cells.push(null);
  for (let d = 1; d <= MONTH_DAYS; d++) cells.push(d);

  const isPair = (d) => d % 2 === 0;
  const isPairs = (d) => d && isPair(d);
  const isImpair = (d) => d && d % 2 !== 0;
  const isSunday = (d) => d && ((d + START_DOW - 1) % 7 === 6);

  return (
    <div className="bc-pairs-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-6)", alignItems: "start" }}>
      {/* Pairs column */}
      {[{ label: "Jours pairs", sub: "2, 4, 6, 8 … du mois", days: PAIRS_DAYS, color: "var(--indigo-700)", bg: "var(--indigo-50)", glowColor: "var(--indigo-500)" }, { label: "Jours impairs", sub: "1, 3, 5, 7 … du mois", days: IMPAIRS_DAYS, color: "var(--teal-700)", bg: "var(--teal-50)", glowColor: "var(--teal-500)" }].map((g) => (
        <div key={g.label} style={{ background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", padding: "var(--space-6)", boxShadow: "var(--shadow-sm)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "var(--space-4)" }}>
            <span style={{ width: 14, height: 14, borderRadius: "50%", background: g.glowColor, boxShadow: `0 0 0 4px color-mix(in srgb, ${g.glowColor} 22%, transparent)`, flex: "0 0 auto" }} />
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "var(--text-lg)", color: "var(--text-strong)" }}>{g.label}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)", letterSpacing: "0.06em" }}>{g.sub}</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {ALL_DAYS.map((d) => {
              const active = g.days.includes(d);
              return (
                <span key={d} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 44, height: 44, borderRadius: "var(--radius-md)", fontFamily: "var(--font-display)", fontWeight: active ? 800 : 600, fontSize: "var(--text-sm)", background: active ? g.bg : "var(--surface-raised)", color: active ? g.color : "var(--text-faint)", border: active ? `2px solid color-mix(in srgb, ${g.glowColor} 30%, transparent)` : "1px solid var(--border-subtle)", boxShadow: active ? `0 4px 12px -4px color-mix(in srgb, ${g.glowColor} 40%, transparent)` : "none", transition: "all var(--dur-fast)" }}>{d}</span>
              );
            })}
          </div>
          <p style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", margin: "var(--space-4) 0 0", lineHeight: "var(--leading-relaxed)" }}>
            {g.label === "Jours pairs" ? "Votre groupe se retrouve les lundis, mercredis et vendredis dont le numéro est pair dans le mois." : "Votre groupe se retrouve les mardis, jeudis et samedis dont le numéro est impair dans le mois."}
          </p>
        </div>
      ))}
      {/* Mini calendar */}
      <div className="bc-minical" style={{ gridColumn: "1 / -1", background: "var(--surface-page)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", padding: "var(--space-6)", boxShadow: "var(--shadow-xs)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "var(--space-4)" }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--text-strong)", fontSize: "var(--text-md)" }}>Juin 2026 — exemple illustratif</span>
          <div style={{ display: "flex", gap: 12, fontSize: "var(--text-sm)", alignItems: "center" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><span style={{ width: 12, height: 12, borderRadius: 3, background: "var(--indigo-500)", display: "inline-block" }} />Pairs</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><span style={{ width: 12, height: 12, borderRadius: 3, background: "var(--teal-500)", display: "inline-block" }} />Impairs</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><span style={{ width: 12, height: 12, borderRadius: 3, background: "var(--gold-500)", display: "inline-block" }} />Club</span>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4 }}>
          {DOW_LABELS.map((d) => (
            <div key={d} style={{ textAlign: "center", fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, color: "var(--text-faint)", letterSpacing: "0.08em", padding: "4px 0" }}>{d}</div>
          ))}
          {cells.map((d, i) => {
            if (!d) return <div key={`e-${i}`} />;
            const dow = (i) % 7; // 0=Mon
            const isSat = ((d + START_DOW - 1) % 7) === 5;
            const isSun = ((d + START_DOW - 1) % 7) === 6;
            const isClub = isSat;
            const isPairsDay = !isSun && isPairs(d) && !isSat;
            const isImpaursDay = !isSun && isImpair(d) && !isSat;
            let bg = "transparent", fg = "var(--text-muted)", fw = 400, brd = "1px solid transparent";
            if (isClub) { bg = "var(--gold-500)"; fg = "var(--indigo-900)"; fw = 800; brd = "none"; }
            else if (isPairsDay) { bg = "var(--indigo-50)"; fg = "var(--indigo-700)"; fw = 700; brd = "1px solid color-mix(in srgb,var(--indigo-400) 30%,transparent)"; }
            else if (isImpaursDay) { bg = "var(--teal-50)"; fg = "var(--teal-700)"; fw = 700; brd = "1px solid color-mix(in srgb,var(--teal-400) 30%,transparent)"; }
            if (isSun) { fg = "var(--ink-300)"; }
            return (
              <div key={d} style={{ textAlign: "center", padding: "7px 2px", borderRadius: "var(--radius-sm)", background: bg, color: fg, fontFamily: "var(--font-body)", fontWeight: fw, fontSize: "var(--text-sm)", border: brd, transition: "all var(--dur-fast)" }}>{d}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ---- Club de conversation ---- */
function ClubSection() {
  return (
    <div style={{ position: "relative", overflow: "hidden", borderRadius: "var(--radius-2xl)", background: "var(--indigo-900)", color: "var(--cream-50)", boxShadow: "var(--shadow-xl)" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url(../../assets/tex-dusk.png)", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.55 }} />
      <div style={{ position: "relative", zIndex: 2, display: "grid", gridTemplateColumns: "1fr auto", gap: "var(--space-8)", alignItems: "center", padding: "var(--space-10) var(--space-12)", flexWrap: "wrap" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
          <span className="eyebrow" style={{ color: "var(--gold-400)" }}>
            <span aria-hidden="true" style={{ width: 22, height: 2, background: "currentColor", borderRadius: 2, display: "inline-block" }} />Le club de conversation
          </span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--display-sub)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "var(--tracking-tight)", color: "var(--cream-50)", margin: 0, maxWidth: "22ch" }}>
            Le samedi, on pratique — et on s'amuse.
          </h2>
          <p style={{ fontSize: "var(--text-md)", color: "var(--indigo-100)", margin: 0, lineHeight: "var(--leading-relaxed)", maxWidth: "52ch" }}>
            Chaque samedi matin, nos centres accueillent le <strong style={{ color: "var(--cream-50)" }}>Club de conversation</strong> — un espace libre et chaleureux pour pratiquer l'oral, rencontrer d'autres apprenants et gagner en confiance sans la pression du cours.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-6)", marginTop: 4 }}>
            {[["calendar", "Tous les samedis"], ["clock", "10 h 00 – 12 h 00"], ["users", "Tous niveaux bienvenus"], ["map-pin", "Dans tous nos centres"]].map(([ic, tx]) => (
              <span key={tx} style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--indigo-100)" }}>
                <i data-lucide={ic} style={{ width: 16, height: 16, color: "var(--gold-400)" }} />{tx}
              </span>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, flex: "0 0 auto" }}>
          <div style={{ width: 100, height: 100, borderRadius: "var(--radius-pill)", background: "var(--gold-500)", color: "var(--indigo-900)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: "0 12px 32px -8px color-mix(in srgb,var(--gold-500) 65%,transparent)" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em" }}>SAM</span>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 28, lineHeight: 1 }}>★</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700 }}>10 h 00</span>
          </div>
          <span style={{ fontSize: "var(--text-xs)", fontWeight: 700, color: "var(--gold-300)", letterSpacing: "0.06em", textTransform: "uppercase" }}>Entrée libre</span>
        </div>
      </div>
    </div>
  );
}

function OrganisationCours() {
  return (
    <section style={{ background: "var(--surface-card)", padding: "var(--section-y) 0" }}>
      <div className="bridge-container" style={{ display: "flex", flexDirection: "column", gap: "var(--section-y-tight)" }}>
        {/* Vacations */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-10)" }}>
          <Reveal><SectionHeading eyebrow="Organisation des cours" title="Choisissez votre créneau" lead="Trois vacations par jour pour s'adapter à tous les emplois du temps — matin, après-midi ou soir." /></Reveal>
          <div className="bc-vac-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-6)" }}>
            {VACATIONS.map((v, i) => (
              <Reveal key={v.id} delay={i * 90}><VacationCard v={v} /></Reveal>
            ))}
          </div>
        </div>

        {/* Pairs / Impairs */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-10)" }}>
          <Reveal>
            <SectionHeading eyebrow="Groupes pairs / impairs" title="Comment sont répartis les groupes ?" lead="Pour fluidifier l'organisation, chaque groupe est affecté aux jours pairs ou impairs du mois." />
          </Reveal>
          <Reveal delay={80}><PairsImpaurs /></Reveal>
        </div>

        {/* Club */}
        <Reveal><ClubSection /></Reveal>
      </div>
    </section>
  );
}

function CentresCTA({ onAuth }) {
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "var(--indigo-950)", color: "var(--cream-50)" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url(../../assets/tex-navy.png)", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.9 }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, color-mix(in srgb,var(--indigo-950) 30%,transparent), color-mix(in srgb,var(--indigo-950) 55%,transparent))" }} />
      <div className="bridge-container" style={{ position: "relative", zIndex: 2, padding: "var(--section-y) 0", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-6)" }}>
        <Reveal><span className="eyebrow" style={{ color: "var(--gold-400)", justifyContent: "center" }}><span aria-hidden="true" style={{ width: 22, height: 2, background: "currentColor", borderRadius: 2, display: "inline-block" }} />Passez à l'action</span></Reveal>
        <Reveal delay={80}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--display-section)", fontWeight: "var(--weight-extrabold)", lineHeight: 1.05, letterSpacing: "var(--tracking-tight)", color: "var(--cream-50)", margin: 0, maxWidth: "28ch" }}>
            Choisissez le centre et l'horaire qui vous conviennent.
          </h2>
        </Reveal>
        <Reveal delay={140}><p style={{ fontSize: "var(--text-lg)", color: "var(--indigo-100)", margin: 0, maxWidth: "48ch" }}>Inscription gratuite en ligne — apportez simplement votre envie d'apprendre. Le reste, c'est notre affaire.</p></Reveal>
        <Reveal delay={200} style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center", marginTop: 8 }}>
          <Button variant="accent" size="lg" iconRight="arrow-right" onClick={() => onAuth("signup")}>S'inscrire gratuitement</Button>
          <Button variant="inverse-ghost" size="lg" icon="phone" href="contact.html">Nous contacter</Button>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { CentresHeader, CentresGrid, OrganisationCours, CentresCTA });
