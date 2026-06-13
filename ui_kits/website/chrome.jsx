/* The Bridge Center — shared chrome: Reveal, Header, Footer, Logo */
const { useEffect, useRef, useState: useStateChrome } = React;

/* Scroll reveal — gentle fade + rise, respects reduced motion */
function Reveal({ children, delay = 0, y = 22, as = "div", style = {}, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useStateChrome(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setShown(true); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setShown(true); io.unobserve(el); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Tag = as;
  return (
    <Tag ref={ref} style={{ opacity: shown ? 1 : 0, transform: shown ? "none" : `translateY(${y}px)`,
      transition: `opacity var(--dur-slow) var(--ease-out) ${delay}ms, transform var(--dur-slow) var(--ease-out) ${delay}ms`, ...style }} {...rest}>
      {children}
    </Tag>
  );
}

function Logo({ variant = "navy", size = 40, wordmark = true }) {
  const src = variant === "white" ? "../../assets/mark-white.png" : "../../assets/mark-navy.png";
  const wordColor = variant === "white" ? "var(--cream-50)" : "var(--indigo-900)";
  return (
    <a href="index.html" aria-label="The Bridge Center — accueil" style={{ display: "inline-flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
      <img src={src} alt="" width={size} height={size} style={{ width: size, height: size, objectFit: "contain" }} />
      {wordmark && (
        <span style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-extrabold)", fontSize: "var(--text-md)", letterSpacing: "var(--tracking-tight)", color: wordColor }}>The Bridge Center</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: variant === "white" ? "var(--gold-400)" : "var(--gold-600)", marginTop: 3 }}>Cours d'anglais · En ligne &amp; en présentiel</span>
        </span>
      )}
    </a>
  );
}

/* ---- Navigation structure ---- */
const NAVITEMS = [
  { label: "Accueil", href: "index.html" },
  { label: "Formations", href: "formations.html" },
  {
    label: "Communauté", children: [
      { label: "Blog", href: "blog.html", icon: "book-open-text", desc: "Astuces, grammaire & culture" },
      { label: "Forum", href: "forum.html", icon: "messages-square", desc: "Questions, entraide & échanges" },
    ],
  },
  {
    label: "Le centre", children: [
      { label: "À propos", href: "apropos.html", icon: "heart-handshake", desc: "Histoire, équipe & méthode" },
      { label: "Nos centres", href: "centres.html", icon: "building-2", desc: "Kinshasa — horaires & accès" },
      { label: "Contact", href: "contact.html", icon: "mail", desc: "Écrivez-nous" },
    ],
  },
];

/* Active page → top-level label */
function topActive(active) {
  if (!active) return "Accueil";
  const map = { Blog: "Communauté", Forum: "Communauté", "À propos": "Le centre", "Nos centres": "Le centre", Contact: "Le centre" };
  return map[active] || active;
}

/* ---- Desktop dropdown item ---- */
function DropItem({ item, onClose }) {
  return (
    <a href={item.href} onClick={onClose}
      onMouseEnter={(e) => { e.currentTarget.style.background = "var(--surface-raised)"; e.currentTarget.querySelector("span")?.style && (e.currentTarget.querySelector("span").style.color = "var(--accent-active)"); }}
      onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.querySelector("span")?.style && (e.currentTarget.querySelector("span").style.color = "var(--text-strong)"); }}
      style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "12px 14px", borderRadius: "var(--radius-md)", textDecoration: "none", color: "inherit", transition: "background var(--dur-fast) var(--ease-out)" }}>
      <span style={{ width: 36, height: 36, flex: "0 0 auto", borderRadius: "var(--radius-sm)", background: "var(--indigo-50)", color: "var(--indigo-700)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
        <i data-lucide={item.icon} style={{ width: 18, height: 18 }} />
      </span>
      <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--text-base)", color: "var(--text-strong)", transition: "color var(--dur-fast)" }}>{item.label}</span>
        <span style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", lineHeight: 1.4 }}>{item.desc}</span>
      </span>
    </a>
  );
}

/* ---- Desktop nav item (with optional dropdown) ---- */
function NavItem({ item, isActive }) {
  const [open, setOpen] = useStateChrome(false);
  const ref = useRef(null);
  const timerRef = useRef(null);
  const hasChildren = !!item.children;

  const openDrop = () => { clearTimeout(timerRef.current); setOpen(true); };
  const closeDrop = () => { timerRef.current = setTimeout(() => setOpen(false), 120); };

  useEffect(() => {
    if (open) requestAnimationFrame(() => window.lucide && window.lucide.createIcons());
  }, [open]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!hasChildren) return;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [hasChildren]);

  if (!hasChildren) {
    return (
      <a href={item.href} style={{ position: "relative", display: "inline-flex", alignItems: "center", padding: "8px 14px", fontSize: "var(--text-base)", fontWeight: isActive ? 600 : 500, color: isActive ? "var(--indigo-900)" : "var(--text-body)", borderRadius: "var(--radius-sm)", textDecoration: "none", whiteSpace: "nowrap", transition: "color var(--dur-fast) var(--ease-out)" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-active)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? "var(--indigo-900)" : "var(--text-body)")}>
        {item.label}
        {isActive && <span aria-hidden="true" style={{ position: "absolute", left: 14, right: 14, bottom: 0, height: 2, background: "var(--gold-500)", borderRadius: 2 }} />}
      </a>
    );
  }

  return (
    <div ref={ref} style={{ position: "relative" }} onMouseEnter={openDrop} onMouseLeave={closeDrop}>
      <button onClick={() => setOpen((v) => !v)} aria-haspopup="true" aria-expanded={open}
        style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "8px 14px", border: "none", background: "transparent", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: "var(--text-base)", fontWeight: isActive ? 600 : 500, color: isActive ? "var(--indigo-900)" : "var(--text-body)", borderRadius: "var(--radius-sm)", whiteSpace: "nowrap", transition: "color var(--dur-fast) var(--ease-out)", position: "relative" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-active)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? "var(--indigo-900)" : "var(--text-body)")}>
        {item.label}
        <i data-lucide="chevron-down" style={{ width: 15, height: 15, transform: open ? "rotate(180deg)" : "none", transition: "transform var(--dur-fast) var(--ease-out)" }} />
        {isActive && <span aria-hidden="true" style={{ position: "absolute", left: 14, right: 14, bottom: 0, height: 2, background: "var(--gold-500)", borderRadius: 2 }} />}
      </button>
      {/* Dropdown panel */}
      <div role="menu" style={{ position: "absolute", top: "calc(100% + 10px)", left: "50%", transform: open ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(-8px)", minWidth: 240, padding: 8, borderRadius: "var(--radius-lg)", background: "color-mix(in srgb, var(--cream-50) 88%, transparent)", backdropFilter: "saturate(1.4) blur(18px)", WebkitBackdropFilter: "saturate(1.4) blur(18px)", border: "1px solid var(--border-subtle)", boxShadow: "var(--shadow-xl)", opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none", transition: "opacity var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)", zIndex: 60 }}>
        <div style={{ position: "absolute", top: -6, left: "50%", transform: "translateX(-50%)", width: 12, height: 12, background: "color-mix(in srgb, var(--cream-50) 88%, transparent)", borderTop: "1px solid var(--border-subtle)", borderLeft: "1px solid var(--border-subtle)", rotate: "45deg" }} />
        {item.children.map((child) => (
          <DropItem key={child.label} item={child} onClose={() => setOpen(false)} />
        ))}
      </div>
    </div>
  );
}

/* ---- Mobile accordion item ---- */
function MobileNavItem({ item, onClose }) {
  const [open, setOpen] = useStateChrome(false);
  const hasChildren = !!item.children;
  if (!hasChildren) {
    return (
      <a href={item.href} onClick={onClose} style={{ display: "block", padding: "14px 8px", fontSize: "var(--text-lg)", fontWeight: 500, color: "var(--text-body)", borderBottom: "1px solid var(--divider)", textDecoration: "none" }}>{item.label}</a>
    );
  }
  return (
    <div style={{ borderBottom: "1px solid var(--divider)" }}>
      <button onClick={() => setOpen((v) => !v)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "14px 8px", border: "none", background: "none", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: "var(--text-lg)", fontWeight: 600, color: "var(--text-strong)", textAlign: "left" }}>
        {item.label}
        <i data-lucide="chevron-down" style={{ width: 20, height: 20, color: "var(--text-muted)", transform: open ? "rotate(180deg)" : "none", transition: "transform var(--dur-fast)" }} />
      </button>
      <div style={{ maxHeight: open ? 400 : 0, overflow: "hidden", transition: "max-height var(--dur-base) var(--ease-out)", paddingLeft: 16 }}>
        {item.children.map((child) => (
          <a key={child.label} href={child.href} onClick={onClose} style={{ display: "flex", alignItems: "center", gap: 10, padding: "11px 8px", fontSize: "var(--text-base)", fontWeight: 500, color: "var(--text-body)", borderTop: "1px solid var(--divider)", textDecoration: "none" }}>
            <i data-lucide={child.icon} style={{ width: 17, height: 17, color: "var(--gold-600)" }} />
            {child.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function Header({ onAuth, active = "Accueil" }) {
  const [scrolled, setScrolled] = useStateChrome(false);
  const [mobileOpen, setMobileOpen] = useStateChrome(false);
  const topLevel = topActive(active);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { window.lucide && window.lucide.createIcons(); });

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50,
      background: scrolled ? "color-mix(in srgb, var(--cream-50) 88%, transparent)" : "transparent",
      backdropFilter: scrolled ? "saturate(1.4) blur(14px)" : "none",
      WebkitBackdropFilter: scrolled ? "saturate(1.4) blur(14px)" : "none",
      borderBottom: scrolled ? "1px solid var(--divider)" : "1px solid transparent",
      transition: "background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)" }}>
      <div className="bridge-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 76, gap: 20, minWidth: 0 }}>
        <Logo variant="navy" />
        {/* Desktop nav */}
        <nav className="bc-desktop-nav" style={{ display: "flex", alignItems: "center", gap: 2, flex: "0 0 auto" }}>
          {NAVITEMS.map((item) => (
            <NavItem key={item.label} item={item} isActive={topLevel === item.label} />
          ))}
        </nav>
        {/* Desktop CTA */}
        <div className="bc-desktop-nav" style={{ display: "flex", alignItems: "center", gap: 10, flex: "0 0 auto" }}>
          <Button variant="ghost" size="sm" onClick={() => onAuth("login")}>Se connecter</Button>
          <Button variant="accent" size="sm" iconRight="arrow-right" onClick={() => onAuth("signup")}>S'inscrire</Button>
        </div>
        {/* Mobile toggle */}
        <button className="bc-mobile-toggle" aria-label="Menu" aria-expanded={mobileOpen} onClick={() => setMobileOpen((v) => !v)}
          style={{ display: "none", alignItems: "center", justifyContent: "center", width: 44, height: 44, borderRadius: "var(--radius-md)", border: "1.5px solid var(--border-default)", background: "var(--surface-card)", cursor: "pointer", color: "var(--indigo-900)", flex: "0 0 auto" }}>
          <i data-lucide={mobileOpen ? "x" : "menu"} style={{ width: 22, height: 22 }} />
        </button>
      </div>
      {/* Mobile menu */}
      {mobileOpen && (
        <div className="bc-mobile-menu" style={{ padding: "4px var(--gutter) 24px", background: "var(--cream-50)", borderBottom: "1px solid var(--divider)" }}>
          {NAVITEMS.map((item) => (
            <MobileNavItem key={item.label} item={item} onClose={() => setMobileOpen(false)} />
          ))}
          <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
            <Button variant="secondary" full onClick={() => { setMobileOpen(false); onAuth("login"); }}>Se connecter</Button>
            <Button variant="accent" full onClick={() => { setMobileOpen(false); onAuth("signup"); }}>S'inscrire</Button>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  const cols = [
    { h: "Formations", items: ["Tous les cours", "Anglais général", "Anglais professionnel", "Préparation TOEFL", "Conversation & oral"] },
    { h: "Ressources", items: ["Blog", "Forum communauté", "Test de niveau", "Centre d'aide", "Devenir formateur"] },
    { h: "Le centre", items: ["À propos", "Notre méthode", "Témoignages", "Partenaires", "Contact"] },
  ];
  return (
    <footer style={{ background: "var(--indigo-950)", color: "var(--cream-100)", paddingTop: "var(--space-20)" }}>
      <div className="bridge-container">
        <div className="bc-footer-grid" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: "var(--space-12)", paddingBottom: "var(--space-16)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 320 }}>
            <Logo variant="white" />
            <p style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-lg)", fontStyle: "italic", color: "var(--gold-400)", margin: 0, lineHeight: 1.3 }}>« If you're rich, be the bridge. »</p>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--indigo-200)", margin: 0, lineHeight: "var(--leading-relaxed)" }}>Le centre en ligne qui relie les francophones du monde entier à l'anglais — du A1 au C2. Né à Kinshasa, ouvert sur le monde.</p>
            <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
              {[["facebook", "Facebook"], ["instagram", "Instagram"], ["whatsapp", "WhatsApp"], ["tiktok", "TikTok"], ["youtube", "YouTube"]].map(([slug, label]) => (
                <a key={slug} href="#" onClick={(e) => e.preventDefault()} aria-label={label} title={label}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "var(--gold-500)"; e.currentTarget.style.borderColor = "var(--gold-500)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "color-mix(in srgb,var(--cream-50) 12%,transparent)"; e.currentTarget.style.borderColor = "var(--border-inverse)"; }}
                  style={{ width: 40, height: 40, borderRadius: "var(--radius-pill)", display: "inline-flex", alignItems: "center", justifyContent: "center", background: "color-mix(in srgb,var(--cream-50) 12%,transparent)", border: "1px solid var(--border-inverse)", transition: "background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)" }}>
                  <img src={`https://cdn.simpleicons.org/${slug}/f7f1e5`} alt="" width="17" height="17" style={{ width: 17, height: 17 }} />
                </a>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.h} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <h4 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-base)", fontWeight: "var(--weight-bold)", color: "var(--cream-50)", margin: 0, letterSpacing: "0.01em" }}>{c.h}</h4>
              {c.items.map((it) => <a key={it} href="#" onClick={(e) => e.preventDefault()} style={{ fontSize: "var(--text-sm)", color: "var(--indigo-200)", transition: "color var(--dur-fast)" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-400)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--indigo-200)")}>{it}</a>)}
            </div>
          ))}
        </div>

        <div className="bc-footer-bottom" style={{ display: "flex", flexWrap: "wrap", gap: 28, alignItems: "center", justifyContent: "space-between", padding: "var(--space-10) 0", borderTop: "1px solid color-mix(in srgb, var(--cream-50) 12%, transparent)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
            {[["globe", "100 % en ligne · partout dans le monde"], ["building-2", "Centres physiques"], ["mail", "bonjour@thebridgecenter.com"], ["map-pin", "Siège : Kinshasa, RDC"]].map(([ic, tx]) => (
              <span key={tx} style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: "var(--text-sm)", color: "var(--indigo-200)" }}>
                <i data-lucide={ic} style={{ width: 16, height: 16, color: "var(--gold-400)" }} />
                {ic === "building-2" ? (
                  <span>Centres physiques : <a href="centres.html" style={{ color: "var(--gold-400)", fontWeight: 600 }}>Gombe · Limete · Lemba</a> (Kinshasa)</span>
                ) : tx}
              </span>
            ))}
          </div>
          <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <input type="email" placeholder="Votre e-mail" aria-label="E-mail newsletter" style={{ padding: "11px 16px", borderRadius: "var(--radius-pill)", border: "1.5px solid color-mix(in srgb,var(--cream-50) 18%,transparent)", background: "color-mix(in srgb,var(--indigo-900) 60%,transparent)", color: "var(--cream-50)", fontSize: "var(--text-sm)", minWidth: 200 }} />
            <Button variant="accent" size="sm" type="submit" iconRight="send">S'abonner</Button>
          </form>
        </div>
        <div style={{ padding: "var(--space-6) 0 var(--space-10)", display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "space-between", fontSize: "var(--text-sm)", color: "var(--indigo-300)" }}>
          <span>© 2026 The Bridge Center. Tous droits réservés.</span>
          <div style={{ display: "flex", gap: 20 }}>
            <a href="#" onClick={(e) => e.preventDefault()} style={{ color: "var(--indigo-300)" }}>Confidentialité</a>
            <a href="#" onClick={(e) => e.preventDefault()} style={{ color: "var(--indigo-300)" }}>Conditions</a>
            <a href="#" onClick={(e) => e.preventDefault()} style={{ color: "var(--indigo-300)" }}>Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Reveal, Header, Footer, Logo, NAVITEMS });
