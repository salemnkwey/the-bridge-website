/* The Bridge Center — Page Blog (à la une + filtres + grille + sidebar + pagination) */
const { useState: useBState, useEffect: useBEffect, useMemo: useBMemo, useRef: useBRef } = React;

const BLOG_CATEGORIES = ["Tous", "Astuces d'apprentissage", "Culture anglophone", "Réussites", "Grammaire", "Vocabulaire"];

const BLOG_POSTS = [
  { id: 1, image: "../../assets/tex-dusk.png", category: "Astuces d'apprentissage", title: "5 habitudes pour apprendre l'anglais 10 minutes par jour", excerpt: "La régularité bat l'intensité. Voici comment transformer de petits moments du quotidien en véritables progrès durables.", author: "Esther Nkanga", date: "8 juin 2026", read: "6 min", views: 4200, featured: true },
  { id: 2, image: "../../assets/tex-gold.png", category: "Vocabulaire", title: "30 expressions anglaises pour briller en réunion", excerpt: "Des tournures naturelles pour gagner en assurance quand vous prenez la parole au travail.", author: "David Ilunga", date: "5 juin 2026", read: "8 min", views: 3100 },
  { id: 3, image: "../../assets/tex-indigo.png", category: "Culture anglophone", title: "Comprendre l'accent : écouter pour mieux parler", excerpt: "Films, podcasts, chansons — comment l'écoute active accélère votre compréhension orale.", author: "Esther Nkanga", date: "1 juin 2026", read: "5 min", views: 2750 },
  { id: 4, image: "../../assets/tex-teal.png", category: "Grammaire", title: "Present perfect : enfin clair, une bonne fois pour toutes", excerpt: "Le temps qui pose le plus de questions, expliqué avec des exemples concrets du quotidien.", author: "Marie-Claire Bofenda", date: "28 mai 2026", read: "7 min", views: 5400 },
  { id: 5, image: "../../assets/tex-gold.png", category: "Réussites", title: "De A0 à un emploi à l'international : le parcours d'Awa", excerpt: "Comment une étudiante de Dakar est passée du niveau débutant à un poste bilingue en un an.", author: "L'équipe Bridge", date: "24 mai 2026", read: "9 min", views: 6100 },
  { id: 6, image: "../../assets/tex-dusk.png", category: "Astuces d'apprentissage", title: "Penser en anglais : le déclic qui change tout", excerpt: "Une méthode simple pour arrêter de traduire dans votre tête et gagner en fluidité.", author: "David Ilunga", date: "20 mai 2026", read: "6 min", views: 2300 },
  { id: 7, image: "../../assets/tex-indigo.png", category: "Vocabulaire", title: "Les faux-amis qui piègent les francophones", excerpt: "« Actually », « library », « sensible »… 20 mots à ne plus jamais confondre.", author: "Marie-Claire Bofenda", date: "16 mai 2026", read: "5 min", views: 3900 },
  { id: 8, image: "../../assets/tex-teal.png", category: "Culture anglophone", title: "Small talk : l'art de la conversation légère", excerpt: "Météo, week-end, sport : les codes culturels pour engager la discussion sans gêne.", author: "Esther Nkanga", date: "12 mai 2026", read: "6 min", views: 1800 },
  { id: 9, image: "../../assets/tex-gold.png", category: "Grammaire", title: "Articles a / an / the : la règle qui tient en 3 minutes", excerpt: "Un petit guide visuel pour ne plus hésiter sur les articles en anglais.", author: "David Ilunga", date: "8 mai 2026", read: "4 min", views: 2600 },
  { id: 10, image: "../../assets/tex-indigo.png", category: "Réussites", title: "Ils ont réussi leur TOEFL : 3 stratégies gagnantes", excerpt: "Trois anciens étudiants partagent ce qui a fait la différence le jour J.", author: "L'équipe Bridge", date: "3 mai 2026", read: "8 min", views: 3300 },
];

const PER_PAGE = 6;

function BlogHeader() {
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "var(--indigo-950)", color: "var(--cream-50)" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url(../../assets/tex-navy.png)", backgroundSize: "cover", backgroundPosition: "center" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, color-mix(in srgb,var(--indigo-950) 30%,transparent), color-mix(in srgb,var(--indigo-950) 60%,transparent))" }} />
      <div className="bridge-container" style={{ position: "relative", zIndex: 2, padding: "var(--section-y-tight) 0", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "var(--space-5)" }}>
        <Reveal><span className="eyebrow" style={{ color: "var(--gold-400)", justifyContent: "center" }}><span aria-hidden="true" style={{ width: 22, height: 2, background: "currentColor", borderRadius: 2, display: "inline-block" }} />Le blog</span></Reveal>
        <Reveal delay={80}>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "var(--display-hero)", fontWeight: "var(--weight-extrabold)", lineHeight: 1.04, letterSpacing: "var(--tracking-tighter)", color: "var(--cream-50)", margin: 0, maxWidth: "18ch" }}>
            Des idées pour <span style={{ color: "var(--gold-400)" }}>progresser</span> entre deux leçons.
          </h1>
        </Reveal>
        <Reveal delay={160}><p style={{ fontSize: "var(--text-lg)", color: "var(--indigo-100)", margin: 0, maxWidth: "54ch" }}>Astuces d'apprentissage, culture anglophone, grammaire, vocabulaire et histoires de réussite — nos conseils pour apprendre l'anglais avec plaisir et constance.</p></Reveal>
      </div>
    </section>
  );
}

function CategoryFilter({ value, onChange, counts }) {
  return (
    <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
      {BLOG_CATEGORIES.map((cat) => {
        const active = value === cat;
        return (
          <button key={cat} onClick={() => onChange(cat)}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "9px 18px", borderRadius: "var(--radius-pill)", border: active ? "1.5px solid transparent" : "1.5px solid var(--border-default)", background: active ? "var(--primary)" : "var(--surface-card)", color: active ? "var(--cream-50)" : "var(--text-body)", fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", fontWeight: active ? 700 : 600, cursor: "pointer", boxShadow: active ? "0 7px 18px -7px color-mix(in srgb, var(--indigo-700) 75%, transparent)" : "var(--shadow-xs)", transition: "all var(--dur-fast) var(--ease-out)" }}
            onMouseEnter={(e) => { if (!active) { e.currentTarget.style.borderColor = "var(--gold-400)"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "var(--shadow-sm)"; } }}
            onMouseLeave={(e) => { if (!active) { e.currentTarget.style.borderColor = "var(--border-default)"; e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "var(--shadow-xs)"; } }}>
            {cat}
            {counts && counts[cat] != null && <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, padding: "2px 6px", borderRadius: "var(--radius-pill)", background: active ? "color-mix(in srgb, var(--cream-50) 22%, transparent)" : "color-mix(in srgb, var(--ink-900) 7%, transparent)", color: active ? "var(--cream-50)" : "var(--text-muted)" }}>{counts[cat]}</span>}
          </button>
        );
      })}
    </div>
  );
}

function FeaturedArticle({ post }) {
  return (
    <a href="#" onClick={(e) => e.preventDefault()} className="bc-featured"
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-xl)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-md)"; e.currentTarget.style.transform = ""; }}
      style={{ display: "grid", gridTemplateColumns: "1.15fr 1fr", background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-xl)", overflow: "hidden", boxShadow: "var(--shadow-md)", textDecoration: "none", color: "inherit", transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)" }}>
      <div className="bc-featured-img" style={{ position: "relative", minHeight: 340, backgroundImage: `url(${post.image})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <span style={{ position: "absolute", top: 18, left: 18, display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 14px", borderRadius: "var(--radius-pill)", background: "var(--gold-500)", color: "var(--indigo-900)", fontSize: "var(--text-sm)", fontWeight: 700 }}><i data-lucide="star" style={{ width: 14, height: 14, fill: "var(--indigo-900)" }} />À la une</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", padding: "var(--space-10)" }}>
        <Badge tone="teal" variant="soft">{post.category}</Badge>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--display-sub)", fontWeight: "var(--weight-extrabold)", lineHeight: 1.1, letterSpacing: "var(--tracking-tight)", color: "var(--text-strong)", margin: 0 }}>{post.title}</h2>
        <p style={{ fontSize: "var(--text-md)", lineHeight: "var(--leading-relaxed)", color: "var(--text-muted)", margin: 0 }}>{post.excerpt}</p>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: "auto", paddingTop: "var(--space-4)" }}>
          <Avatar name={post.author} size="sm" />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.3 }}>
            <span style={{ fontWeight: 700, color: "var(--text-strong)", fontSize: "var(--text-sm)" }}>{post.author}</span>
            <span style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{post.date} · {post.read} de lecture</span>
          </div>
          <span className="bc-featured-cta" style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 7, color: "var(--primary)", fontWeight: 700, fontSize: "var(--text-base)" }}>Lire l'article <i data-lucide="arrow-right" style={{ width: 18, height: 18 }} /></span>
        </div>
      </div>
    </a>
  );
}

function PopularList({ posts }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {posts.map((p, i) => (
        <a key={p.id} href="#" onClick={(e) => e.preventDefault()} style={{ display: "flex", gap: 14, textDecoration: "none", color: "inherit", alignItems: "center" }}
          onMouseEnter={(e) => { const t = e.currentTarget.querySelector("h4"); if (t) t.style.color = "var(--accent-active)"; }}
          onMouseLeave={(e) => { const t = e.currentTarget.querySelector("h4"); if (t) t.style.color = "var(--text-strong)"; }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, color: "var(--gold-400)", width: 26, flex: "0 0 auto", textAlign: "center" }}>{i + 1}</span>
          <span style={{ width: 56, height: 56, flex: "0 0 auto", borderRadius: "var(--radius-md)", backgroundImage: `url(${p.image})`, backgroundSize: "cover", backgroundPosition: "center" }} />
          <span style={{ display: "flex", flexDirection: "column", gap: 4, minWidth: 0 }}>
            <h4 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-base)", fontWeight: 700, color: "var(--text-strong)", margin: 0, lineHeight: 1.25, transition: "color var(--dur-fast) var(--ease-out)" }}>{p.title}</h4>
            <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", display: "inline-flex", alignItems: "center", gap: 6 }}><i data-lucide="clock" style={{ width: 12, height: 12 }} />{p.read} · {(p.views / 1000).toFixed(1).replace(".", ",")}k vues</span>
          </span>
        </a>
      ))}
    </div>
  );
}

function SidebarCard({ title, icon, children, tone = "paper" }) {
  const navy = tone === "navy";
  return (
    <div style={{ padding: "var(--space-6)", borderRadius: "var(--radius-lg)", background: navy ? "var(--surface-inverse)" : "var(--surface-card)", border: navy ? "1px solid var(--border-inverse)" : "1px solid var(--border-subtle)", boxShadow: navy ? "var(--shadow-lg)" : "var(--shadow-sm)", color: navy ? "var(--cream-50)" : "inherit" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 18 }}>
        {icon && <i data-lucide={icon} style={{ width: 18, height: 18, color: navy ? "var(--gold-400)" : "var(--gold-600)" }} />}
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-lg)", fontWeight: 700, color: navy ? "var(--cream-50)" : "var(--text-strong)", margin: 0 }}>{title}</h3>
      </div>
      {children}
    </div>
  );
}

function Pagination({ page, pages, onPage }) {
  if (pages <= 1) return null;
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: "var(--space-4)" }}>
      <button onClick={() => onPage(Math.max(1, page - 1))} disabled={page === 1} aria-label="Page précédente"
        style={pgBtn(false, page === 1)}><i data-lucide="chevron-left" style={{ width: 18, height: 18 }} /></button>
      {Array.from({ length: pages }).map((_, i) => {
        const n = i + 1; const active = n === page;
        return <button key={n} onClick={() => onPage(n)} aria-current={active ? "page" : undefined} style={pgBtn(active, false)}>{n}</button>;
      })}
      <button onClick={() => onPage(Math.min(pages, page + 1))} disabled={page === pages} aria-label="Page suivante"
        style={pgBtn(false, page === pages)}><i data-lucide="chevron-right" style={{ width: 18, height: 18 }} /></button>
    </div>
  );
}
function pgBtn(active, disabled) {
  return { display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: 42, height: 42, padding: "0 12px", borderRadius: "var(--radius-md)", border: active ? "1.5px solid transparent" : "1.5px solid var(--border-default)", background: active ? "var(--primary)" : "var(--surface-card)", color: active ? "var(--cream-50)" : disabled ? "var(--text-faint)" : "var(--text-body)", fontFamily: "var(--font-body)", fontSize: "var(--text-base)", fontWeight: 700, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1, boxShadow: active ? "var(--shadow-sm)" : "none", transition: "all var(--dur-fast) var(--ease-out)" };
}

function BlogPage() {
  const [cat, setCat] = useBState("Tous");
  const [page, setPage] = useBState(1);

  const counts = useBMemo(() => {
    const m = { Tous: BLOG_POSTS.length };
    for (const c of BLOG_CATEGORIES.slice(1)) m[c] = BLOG_POSTS.filter((p) => p.category === c).length;
    return m;
  }, []);

  const featured = BLOG_POSTS.find((p) => p.featured);
  const showFeatured = cat === "Tous";

  const list = useBMemo(() => {
    let l = BLOG_POSTS.filter((p) => cat === "Tous" ? !p.featured : p.category === cat);
    return l;
  }, [cat]);

  const pages = Math.ceil(list.length / PER_PAGE);
  const pageItems = list.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const popular = useBMemo(() => [...BLOG_POSTS].sort((a, b) => b.views - a.views).slice(0, 4), []);

  useBEffect(() => { setPage(1); }, [cat]);
  useBEffect(() => { window.lucide && window.lucide.createIcons(); }, [cat, page]);

  return (
    <section style={{ background: "var(--surface-page)", padding: "var(--section-y-tight) 0 var(--section-y)" }}>
      <div className="bridge-container" style={{ display: "flex", flexDirection: "column", gap: "var(--space-10)" }}>
        <Reveal><CategoryFilter value={cat} onChange={setCat} counts={counts} /></Reveal>

        {showFeatured && featured && <Reveal><FeaturedArticle post={featured} /></Reveal>}

        <div className="bc-blog-layout" style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "var(--space-10)", alignItems: "start" }}>
          {/* Main column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)" }}>
            {pageItems.length === 0 ? (
              <div style={{ textAlign: "center", padding: "var(--space-16) 0", color: "var(--text-muted)" }}>Aucun article dans cette catégorie pour l'instant.</div>
            ) : (
              <div className="bc-blog-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-6)" }}>
                {pageItems.map((p, i) => (
                  <Reveal key={p.id} delay={(i % 2) * 80}><BlogCard {...p} /></Reveal>
                ))}
              </div>
            )}
            <Pagination page={page} pages={pages} onPage={setPage} />
          </div>

          {/* Sidebar */}
          <aside className="bc-blog-sidebar" style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)", position: "sticky", top: 96 }}>
            <SidebarCard title="Articles populaires" icon="trending-up"><PopularList posts={popular} /></SidebarCard>
            <SidebarCard title="Catégories" icon="tag">
              <div style={{ display: "flex", flexDirection: "column" }}>
                {BLOG_CATEGORIES.slice(1).map((c, i) => (
                  <button key={c} onClick={() => setCat(c)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 4px", border: "none", borderBottom: i < BLOG_CATEGORIES.length - 2 ? "1px solid var(--divider)" : "none", background: "none", cursor: "pointer", textAlign: "left", color: "var(--text-body)", fontFamily: "var(--font-body)", fontSize: "var(--text-base)", fontWeight: 500, transition: "color var(--dur-fast) var(--ease-out)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-active)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-body)")}>
                    {c}<span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", color: "var(--text-faint)" }}>{counts[c]}</span>
                  </button>
                ))}
              </div>
            </SidebarCard>
            <SidebarCard title="La newsletter Bridge" icon="mail" tone="navy">
              <p style={{ fontSize: "var(--text-sm)", color: "var(--indigo-100)", margin: "0 0 16px", lineHeight: "var(--leading-relaxed)" }}>Un e-mail par semaine : une astuce, un mot, une expression. Sans spam, désinscription en un clic.</p>
              <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <input type="email" placeholder="Votre e-mail" aria-label="E-mail" style={{ padding: "11px 14px", borderRadius: "var(--radius-md)", border: "1.5px solid var(--border-inverse)", background: "color-mix(in srgb, var(--indigo-950) 55%, transparent)", color: "var(--cream-50)", fontSize: "var(--text-sm)", outline: "none" }} />
                <Button variant="accent" full iconRight="send" type="submit">S'abonner</Button>
              </form>
            </SidebarCard>
          </aside>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { BlogHeader, BlogPage, BLOG_POSTS });
