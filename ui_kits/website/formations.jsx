/* The Bridge Center — Page Formations (catalogue + filtres raffinés) */
const { useState: useFState, useEffect: useFEffect, useMemo: useFMemo, useRef: useFRef, useLayoutEffect: useFLayout } = React;

const BRIDGE_COURSES = [
  { id: 1, image: "../../assets/tex-indigo.png", level: "A1", free: true, category: "Anglais général", title: "Les fondations — Débuter en anglais", description: "Vos premiers mots, vos premières phrases, et la confiance pour oser parler dès la première semaine.", duration: "6 semaines", lessons: 24, students: 1840, added: 6 },
  { id: 2, image: "../../assets/tex-teal.png", level: "A2", free: true, category: "Anglais général", title: "Construire des phrases au quotidien", description: "Temps simples, questions, vocabulaire courant : exprimez-vous dans les situations de tous les jours.", duration: "7 semaines", lessons: 28, students: 1320, added: 5 },
  { id: 3, image: "../../assets/tex-gold.png", level: "A1", free: true, category: "Enfants", title: "English for Kids — l'anglais en s'amusant", description: "Jeux, chansons et histoires pour les 7–12 ans : un premier pont vers l'anglais, tout en douceur.", duration: "8 semaines", lessons: 30, students: 760, added: 9 },
  { id: 4, image: "../../assets/tex-dusk.png", level: "B1", free: true, category: "Conversation", title: "Parler avec aisance", description: "Déliez-vous à l'oral : prononciation, expressions naturelles et mises en situation réelles.", duration: "8 semaines", lessons: 32, students: 2110, added: 7 },
  { id: 5, image: "../../assets/tex-teal.png", level: "B1", free: true, category: "Voyages", title: "L'anglais pour voyager sereinement", description: "Aéroport, hôtel, restaurant, rencontres : tout le nécessaire pour voyager en confiance.", duration: "5 semaines", lessons: 20, students: 980, added: 8 },
  { id: 6, image: "../../assets/tex-indigo.png", level: "B2", free: false, category: "Business English", title: "L'anglais pour le travail", description: "E-mails, réunions, négociations, entretiens : l'anglais qui fait avancer votre carrière.", duration: "10 semaines", lessons: 40, students: 1560, added: 4 },
  { id: 7, image: "../../assets/tex-gold.png", level: "C1", free: false, category: "Préparation TOEFL", title: "Réussir le TOEFL avec sérénité", description: "Stratégies par section, examens blancs corrigés et coaching pour viser votre score cible.", duration: "12 semaines", lessons: 48, students: 870, added: 3 },
  { id: 8, image: "../../assets/tex-dusk.png", level: "B2", free: false, category: "Préparation IELTS", title: "Objectif IELTS — Academic & General", description: "Maîtrisez les 4 épreuves, gérez le temps et gagnez les points qui font la différence.", duration: "11 semaines", lessons: 44, students: 720, added: 10 },
  { id: 9, image: "../../assets/tex-indigo.png", level: "B2", free: false, category: "Prononciation", title: "Accent & fluidité — parler clair", description: "Sons difficiles, intonation et rythme : faites-vous comprendre du premier coup, partout.", duration: "6 semaines", lessons: 24, students: 640, added: 2 },
  { id: 10, image: "../../assets/tex-teal.png", level: "C2", free: false, category: "Anglais académique", title: "Rédaction & anglais académique", description: "Essais, rapports, présentations : écrivez un anglais précis, nuancé et professionnel.", duration: "10 semaines", lessons: 36, students: 410, added: 1 },
];

const LEVELS = ["Tous", "A1", "A2", "B1", "B2", "C1", "C2"];
const TYPES = ["Tous", "Gratuit", "Premium"];
const LEVEL_ORDER = { A1: 1, A2: 2, B1: 3, B2: 4, C1: 5, C2: 6 };
const SORTS = [
  { key: "popular", label: "Popularité", icon: "flame" },
  { key: "new", label: "Nouveautés", icon: "sparkles" },
  { key: "level", label: "Niveau croissant", icon: "arrow-up-narrow-wide" },
];

function FormationsHeader() {
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "var(--indigo-950)", color: "var(--cream-50)" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url(../../assets/tex-navy.png)", backgroundSize: "cover", backgroundPosition: "center" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, color-mix(in srgb,var(--indigo-950) 30%,transparent), color-mix(in srgb,var(--indigo-950) 60%,transparent))" }} />
      <div className="bridge-container" style={{ position: "relative", zIndex: 2, padding: "var(--section-y-tight) 0", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "var(--space-5)" }}>
        <Reveal><span className="eyebrow" style={{ color: "var(--gold-400)", justifyContent: "center" }}><span aria-hidden="true" style={{ width: 22, height: 2, background: "currentColor", borderRadius: 2, display: "inline-block" }} />Le catalogue</span></Reveal>
        <Reveal delay={80}>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "var(--display-hero)", fontWeight: "var(--weight-extrabold)", lineHeight: 1.04, letterSpacing: "var(--tracking-tighter)", color: "var(--cream-50)", margin: 0, maxWidth: "16ch" }}>
            Trouvez la formation qui vous fait <span style={{ color: "var(--gold-400)" }}>traverser</span>.
          </h1>
        </Reveal>
        <Reveal delay={160}><p style={{ fontSize: "var(--text-lg)", color: "var(--indigo-100)", margin: 0, maxWidth: "52ch" }}>Du A1 au C2, de l'anglais général au business en passant par la préparation aux examens — choisissez votre parcours, à votre rythme, où que vous soyez.</p></Reveal>
      </div>
    </section>
  );
}

/* ---------- Segmented control with sliding indicator ---------- */
function Segmented({ options, value, onChange, ariaLabel }) {
  const trackRef = useFRef(null);
  const btnRefs = useFRef({});
  const [ind, setInd] = useFState({ left: 0, width: 0, ready: false });

  const measure = () => {
    const btn = btnRefs.current[value];
    if (btn) setInd({ left: btn.offsetLeft, width: btn.offsetWidth, ready: true });
  };
  useFLayout(measure, [value, options]);
  useFEffect(() => {
    const onR = () => measure();
    window.addEventListener("resize", onR);
    const t = setTimeout(measure, 220); // after webfont settles
    return () => { window.removeEventListener("resize", onR); clearTimeout(t); };
  }, [value, options]);

  const idx = options.findIndex((o) => o.key === value);
  const onKey = (e) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const dir = e.key === "ArrowRight" ? 1 : -1;
    const next = options[(idx + dir + options.length) % options.length];
    onChange(next.key);
    requestAnimationFrame(() => { const b = btnRefs.current[next.key]; b && b.focus(); });
  };

  const activeIsPremium = value === "Premium";

  return (
    <div ref={trackRef} role="radiogroup" aria-label={ariaLabel} onKeyDown={onKey}
      className="bc-seg-track"
      style={{ position: "relative", display: "inline-flex", gap: 2, padding: 5, borderRadius: "var(--radius-pill)", background: "color-mix(in srgb, var(--cream-200) 55%, transparent)", border: "1px solid color-mix(in srgb, var(--ink-900) 7%, transparent)", boxShadow: "inset 0 1px 2px color-mix(in srgb, var(--ink-900) 6%, transparent)" }}>
      {/* sliding indicator */}
      <span aria-hidden="true" style={{ position: "absolute", top: 5, bottom: 5, left: 0, width: ind.width, transform: `translateX(${ind.left}px)`, borderRadius: "var(--radius-pill)", background: "var(--primary)", boxShadow: activeIsPremium ? "0 6px 18px -5px color-mix(in srgb, var(--gold-500) 70%, transparent), inset 0 0 0 1.5px var(--gold-400)" : "0 7px 18px -6px color-mix(in srgb, var(--indigo-700) 75%, transparent)", opacity: ind.ready ? 1 : 0, transition: "transform var(--dur-base) var(--ease-spring), width var(--dur-base) var(--ease-spring), box-shadow var(--dur-base) var(--ease-out), opacity var(--dur-fast) linear", zIndex: 0 }} />
      {options.map((o) => {
        const active = o.key === value;
        return (
          <button key={o.key} ref={(el) => (btnRefs.current[o.key] = el)} role="radio" aria-checked={active} tabIndex={active ? 0 : -1}
            onClick={() => onChange(o.key)}
            className="bc-seg-btn"
            style={{ position: "relative", zIndex: 1, display: "inline-flex", alignItems: "center", gap: 7, padding: "8px 15px", border: "none", background: "transparent", color: active ? "var(--cream-50)" : "var(--text-body)", fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", fontWeight: active ? 700 : 600, cursor: "pointer", borderRadius: "var(--radius-pill)", whiteSpace: "nowrap", transition: "color var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)" }}
            onMouseEnter={(e) => { if (!active) e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = ""; }}>
            {o.premium && <span aria-hidden="true" style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--gold-500)", boxShadow: active ? "0 0 0 2px color-mix(in srgb, var(--gold-300) 60%, transparent)" : "none", flex: "0 0 auto" }} />}
            <span>{o.label}</span>
            {o.count != null && (
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, lineHeight: 1, padding: "2px 6px", borderRadius: "var(--radius-pill)", background: active ? "color-mix(in srgb, var(--cream-50) 22%, transparent)" : "color-mix(in srgb, var(--ink-900) 7%, transparent)", color: active ? "var(--cream-50)" : "var(--text-muted)", transition: "all var(--dur-base) var(--ease-out)" }}>{o.count}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}

function FilterGroup({ label, children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
      <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-faint)", flex: "0 0 auto" }}>{label}</span>
      <div className="bc-seg-scroll" style={{ maxWidth: "100%", overflowX: "auto" }}>{children}</div>
    </div>
  );
}

/* ---------- Sort dropdown ---------- */
function SortMenu({ value, onChange }) {
  const [open, setOpen] = useFState(false);
  const ref = useFRef(null);
  useFEffect(() => {
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDoc); document.removeEventListener("keydown", onKey); };
  }, []);
  useFEffect(() => { window.lucide && window.lucide.createIcons(); }, [open, value]);
  const current = SORTS.find((s) => s.key === value) || SORTS[0];
  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button onClick={() => setOpen((v) => !v)} aria-haspopup="listbox" aria-expanded={open}
        style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 14px", borderRadius: "var(--radius-pill)", border: "1.5px solid var(--border-default)", background: "color-mix(in srgb, var(--cream-50) 70%, transparent)", color: "var(--text-body)", fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", fontWeight: 600, cursor: "pointer", boxShadow: "var(--shadow-xs)", transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)" }}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--gold-400)"; e.currentTarget.style.boxShadow = "var(--shadow-sm)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border-default)"; e.currentTarget.style.boxShadow = "var(--shadow-xs)"; }}>
        <i data-lucide="arrow-up-down" style={{ width: 16, height: 16, color: "var(--text-muted)" }} />
        <span style={{ color: "var(--text-muted)" }}>Trier&nbsp;:</span>
        <span style={{ fontWeight: 700, color: "var(--text-strong)" }}>{current.label}</span>
        <i data-lucide="chevron-down" style={{ width: 16, height: 16, color: "var(--text-muted)", transform: open ? "rotate(180deg)" : "none", transition: "transform var(--dur-fast) var(--ease-out)" }} />
      </button>
      {open && (
        <div role="listbox" style={{ position: "absolute", top: "calc(100% + 8px)", right: 0, minWidth: 220, padding: 6, borderRadius: "var(--radius-md)", background: "var(--surface-card)", border: "1px solid var(--border-subtle)", boxShadow: "var(--shadow-lg)", zIndex: 40, animation: "bcRise var(--dur-fast) var(--ease-out)" }}>
          {SORTS.map((s) => {
            const active = s.key === value;
            return (
              <button key={s.key} role="option" aria-selected={active} onClick={() => { onChange(s.key); setOpen(false); }}
                style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "10px 12px", border: "none", borderRadius: "var(--radius-sm)", background: active ? "var(--surface-accent-soft)" : "transparent", color: active ? "var(--text-accent)" : "var(--text-body)", fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", fontWeight: active ? 700 : 500, cursor: "pointer", textAlign: "left", transition: "background var(--dur-fast) var(--ease-out)" }}
                onMouseEnter={(e) => { if (!active) e.currentTarget.style.background = "var(--surface-raised)"; }}
                onMouseLeave={(e) => { if (!active) e.currentTarget.style.background = "transparent"; }}>
                <i data-lucide={s.icon} style={{ width: 16, height: 16, color: active ? "var(--gold-600)" : "var(--text-muted)" }} />
                <span style={{ flex: 1 }}>{s.label}</span>
                {active && <i data-lucide="check" style={{ width: 15, height: 15, color: "var(--gold-600)" }} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ---------- Search field ---------- */
function SearchField({ value, onChange }) {
  return (
    <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
      <i data-lucide="search" style={{ position: "absolute", left: 13, width: 16, height: 16, color: "var(--text-muted)", pointerEvents: "none" }} />
      <input type="search" value={value} onChange={(e) => onChange(e.target.value)} placeholder="Rechercher une formation…" aria-label="Rechercher une formation"
        style={{ width: 220, maxWidth: "100%", padding: "10px 34px 10px 36px", borderRadius: "var(--radius-pill)", border: "1.5px solid var(--border-default)", background: "color-mix(in srgb, var(--cream-50) 70%, transparent)", color: "var(--text-strong)", fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", outline: "none", transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)" }}
        onFocus={(e) => { e.currentTarget.style.borderColor = "var(--primary)"; e.currentTarget.style.boxShadow = "0 0 0 3px var(--indigo-50)"; }}
        onBlur={(e) => { e.currentTarget.style.borderColor = "var(--border-default)"; e.currentTarget.style.boxShadow = "none"; }} />
      {value && (
        <button onClick={() => onChange("")} aria-label="Effacer la recherche" style={{ position: "absolute", right: 8, display: "inline-flex", alignItems: "center", justifyContent: "center", width: 22, height: 22, border: "none", borderRadius: "50%", background: "color-mix(in srgb, var(--ink-900) 8%, transparent)", color: "var(--text-muted)", cursor: "pointer" }}>
          <i data-lucide="x" style={{ width: 13, height: 13 }} />
        </button>
      )}
    </div>
  );
}

function FormationsCatalogue() {
  const [level, setLevel] = useFState("Tous");
  const [type, setType] = useFState("Tous");
  const [sort, setSort] = useFState("popular");
  const [query, setQuery] = useFState("");
  const [stuck, setStuck] = useFState(false);
  const sentinelRef = useFRef(null);

  // sticky shadow: observe a sentinel just above the bar
  useFEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setStuck(!e.isIntersecting), { rootMargin: "-89px 0px 0px 0px", threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const matchesType = (c) => type === "Tous" || (type === "Gratuit" ? c.free : !c.free);
  const matchesQuery = (c) => !query.trim() || (c.title + " " + c.category).toLowerCase().includes(query.trim().toLowerCase());

  // dynamic per-level counts (respect type + search)
  const levelCounts = useFMemo(() => {
    const base = BRIDGE_COURSES.filter((c) => matchesType(c) && matchesQuery(c));
    const m = { Tous: base.length };
    for (const lv of LEVELS.slice(1)) m[lv] = base.filter((c) => c.level === lv).length;
    return m;
  }, [type, query]);

  const typeCounts = useFMemo(() => {
    const base = BRIDGE_COURSES.filter((c) => (level === "Tous" || c.level === level) && matchesQuery(c));
    return { Tous: base.length, Gratuit: base.filter((c) => c.free).length, Premium: base.filter((c) => !c.free).length };
  }, [level, query]);

  const filtered = useFMemo(() => {
    let list = BRIDGE_COURSES.filter((c) => (level === "Tous" || c.level === level) && matchesType(c) && matchesQuery(c));
    list = [...list].sort((a, b) => {
      if (sort === "popular") return b.students - a.students;
      if (sort === "new") return b.added - a.added;
      return LEVEL_ORDER[a.level] - LEVEL_ORDER[b.level] || b.students - a.students;
    });
    return list;
  }, [level, type, sort, query]);

  useFEffect(() => { window.lucide && window.lucide.createIcons(); }, [filtered, stuck]);

  const levelOptions = LEVELS.map((l) => ({ key: l, label: l, count: levelCounts[l] }));
  const typeOptions = TYPES.map((t) => ({ key: t, label: t, count: typeCounts[t], premium: t === "Premium" }));
  const hasFilters = level !== "Tous" || type !== "Tous" || query.trim() !== "";

  return (
    <section style={{ background: "var(--surface-page)", padding: "var(--section-y-tight) 0 var(--section-y)" }}>
      <div className="bridge-container" style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)" }}>
        <div ref={sentinelRef} style={{ height: 1 }} />
        {/* Filter bar — glassmorphism + sticky */}
        <div className="bc-filter-bar" style={{ display: "flex", flexDirection: "column", gap: 16, padding: "var(--space-5) var(--space-6)", background: stuck ? "color-mix(in srgb, var(--cream-50) 80%, transparent)" : "color-mix(in srgb, var(--cream-50) 66%, transparent)", backdropFilter: "saturate(1.5) blur(16px)", WebkitBackdropFilter: "saturate(1.5) blur(16px)", border: "1px solid color-mix(in srgb, var(--cream-50) 60%, var(--border-subtle))", borderRadius: "var(--radius-lg)", boxShadow: stuck ? "var(--shadow-lg)" : "var(--shadow-xs)", position: "sticky", top: 84, zIndex: 30, transition: "box-shadow var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)" }}>
          <FilterGroup label="Niveau"><Segmented options={levelOptions} value={level} onChange={setLevel} ariaLabel="Filtrer par niveau" /></FilterGroup>
          <div style={{ height: 1, background: "var(--divider)" }} />
          <div className="bc-filter-row2" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
            <FilterGroup label="Type"><Segmented options={typeOptions} value={type} onChange={setType} ariaLabel="Filtrer par type" /></FilterGroup>
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
              <SearchField value={query} onChange={setQuery} />
              <SortMenu value={sort} onChange={setSort} />
            </div>
          </div>
        </div>

        {/* Result row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap", marginTop: "calc(-1 * var(--space-3))" }}>
          <span style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", fontWeight: 500 }}>
            <strong style={{ color: "var(--text-strong)" }}>{filtered.length}</strong> formation{filtered.length > 1 ? "s" : ""} {filtered.length > 1 ? "disponibles" : "disponible"}
            {query.trim() && <span> pour «&nbsp;{query.trim()}&nbsp;»</span>}
          </span>
          {hasFilters && (
            <button onClick={() => { setLevel("Tous"); setType("Tous"); setQuery(""); }} style={{ border: "none", background: "none", color: "var(--text-link)", fontWeight: 700, cursor: "pointer", fontSize: "var(--text-sm)", display: "inline-flex", alignItems: "center", gap: 5 }}>
              <i data-lucide="rotate-ccw" style={{ width: 14, height: 14 }} />Réinitialiser les filtres
            </button>
          )}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "var(--space-16) 0", color: "var(--text-muted)", display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            <span style={{ width: 64, height: 64, borderRadius: "var(--radius-pill)", background: "var(--surface-raised)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><i data-lucide="search-x" style={{ width: 30, height: 30, color: "var(--text-faint)" }} /></span>
            <p style={{ margin: 0, fontSize: "var(--text-md)" }}>Aucune formation ne correspond à ces filtres pour l'instant.</p>
            <Button variant="secondary" icon="rotate-ccw" onClick={() => { setLevel("Tous"); setType("Tous"); setQuery(""); }}>Réinitialiser les filtres</Button>
          </div>
        ) : (
          <div className="bc-formations-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-6)" }}>
            {filtered.map((c, i) => (
              <Reveal key={c.id} delay={(i % 3) * 70}>
                <CourseCard image={c.image} level={c.level} free={c.free} price={c.free ? undefined : "Premium"} category={c.category} title={c.title} description={c.description} duration={c.duration} lessons={c.lessons} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

Object.assign(window, { FormationsHeader, FormationsCatalogue, BRIDGE_COURSES });
