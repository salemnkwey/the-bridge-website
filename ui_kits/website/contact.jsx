/* The Bridge Center — Page Contact */
const { useState: useCoState, useEffect: useCoEffect } = React;

function ContactHeader() {
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "var(--indigo-950)", color: "var(--cream-50)" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url(../../assets/tex-navy.png)", backgroundSize: "cover", backgroundPosition: "center" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, color-mix(in srgb,var(--indigo-950) 30%,transparent), color-mix(in srgb,var(--indigo-950) 60%,transparent))" }} />
      <div className="bridge-container" style={{ position: "relative", zIndex: 2, padding: "var(--section-y-tight) 0", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "var(--space-5)" }}>
        <Reveal><span className="eyebrow" style={{ color: "var(--gold-400)", justifyContent: "center" }}><span aria-hidden="true" style={{ width: 22, height: 2, background: "currentColor", borderRadius: 2, display: "inline-block" }} />Contact</span></Reveal>
        <Reveal delay={80}>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "var(--display-hero)", fontWeight: "var(--weight-extrabold)", lineHeight: 1.04, letterSpacing: "var(--tracking-tighter)", color: "var(--cream-50)", margin: 0, maxWidth: "18ch" }}>
            Parlons de votre <span style={{ color: "var(--gold-400)" }}>projet</span> d'anglais.
          </h1>
        </Reveal>
        <Reveal delay={160}><p style={{ fontSize: "var(--text-lg)", color: "var(--indigo-100)", margin: 0, maxWidth: "54ch" }}>Une question sur nos formations, un partenariat, une demande d'information ? Écrivez-nous — notre équipe vous répond généralement en moins de 24 heures.</p></Reveal>
      </div>
    </section>
  );
}

function ContactForm() {
  const [sent, setSent] = useCoState(false);
  return (
    <div style={{ background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-md)", padding: "var(--space-10)" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: "var(--space-8)" }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-2xl)", fontWeight: 800, color: "var(--text-strong)", margin: 0 }}>Envoyez-nous un message</h2>
        <p style={{ fontSize: "var(--text-base)", color: "var(--text-muted)", margin: 0 }}>Tous les champs marqués d'un * sont obligatoires.</p>
      </div>
      {sent ? (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 14, padding: "var(--space-12) 0" }}>
          <span style={{ width: 64, height: 64, borderRadius: "var(--radius-pill)", background: "var(--success-soft)", color: "var(--success)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><i data-lucide="check" style={{ width: 32, height: 32, strokeWidth: 3 }} /></span>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", color: "var(--text-strong)", margin: 0 }}>Message envoyé&nbsp;!</h3>
          <p style={{ fontSize: "var(--text-base)", color: "var(--text-muted)", margin: 0, maxWidth: "36ch" }}>Merci de nous avoir écrit. Nous revenons vers vous très vite.</p>
          <Button variant="secondary" icon="rotate-ccw" onClick={() => setSent(false)}>Envoyer un autre message</Button>
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
          <div className="bc-contact-fields" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-5)" }}>
            <Input label="Nom complet" icon="user" placeholder="Grâce Mukendi" required />
            <Input label="Adresse e-mail" type="email" icon="mail" placeholder="vous@exemple.com" required />
          </div>
          <Select label="Sujet" required options={["Choisissez un sujet", "Demande d'information", "Inscription à une formation", "Question sur un cours", "Partenariat", "Devenir formateur", "Autre"]} />
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
            <label htmlFor="bc-msg" style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--text-strong)" }}>Message<span style={{ color: "var(--danger)", marginLeft: 3 }}>*</span></label>
            <textarea id="bc-msg" required rows={6} placeholder="Dites-nous comment nous pouvons vous aider…"
              style={{ width: "100%", padding: "12px 14px", fontFamily: "var(--font-body)", fontSize: "var(--text-base)", color: "var(--text-strong)", background: "var(--surface-card)", border: "1.5px solid var(--border-default)", borderRadius: "var(--radius-md)", outline: "none", resize: "vertical", minHeight: 120, transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)" }}
              onFocus={(e) => { e.currentTarget.style.borderColor = "var(--primary)"; e.currentTarget.style.boxShadow = "0 0 0 3px var(--indigo-50)"; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = "var(--border-default)"; e.currentTarget.style.boxShadow = "none"; }} />
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: "var(--text-sm)", color: "var(--text-muted)" }}><i data-lucide="shield-check" style={{ width: 16, height: 16, color: "var(--teal-500)" }} />Vos données restent confidentielles.</span>
            <Button variant="accent" size="lg" type="submit" iconRight="send">Envoyer le message</Button>
          </div>
        </form>
      )}
    </div>
  );
}

function ContactInfo() {
  const items = [
    { icon: "map-pin", label: "Adresse", lines: ["Avenue de la Libération, Gombe", "Kinshasa, RD Congo"] },
    { icon: "mail", label: "E-mail", lines: ["bonjour@thebridgecenter.com", "support@thebridgecenter.com"] },
    { icon: "phone", label: "Téléphone", lines: ["+243 800 000 000", "+243 810 000 000 (WhatsApp)"] },
    { icon: "clock", label: "Horaires (GMT+1)", lines: ["Lun – Ven : 8 h – 18 h", "Sam : 9 h – 13 h · Dim : fermé"] },
  ];
  const socials = [["facebook", "Facebook"], ["instagram", "Instagram"], ["whatsapp", "WhatsApp"], ["tiktok", "TikTok"], ["youtube", "YouTube"]];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
      <div style={{ position: "relative", overflow: "hidden", borderRadius: "var(--radius-xl)", background: "var(--indigo-900)", color: "var(--cream-50)", padding: "var(--space-10)", boxShadow: "var(--shadow-lg)" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(../../assets/tex-navy.png)", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.5 }} />
        <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-2xl)", fontWeight: 800, color: "var(--cream-50)", margin: 0 }}>Nos coordonnées</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
            {items.map((it) => (
              <div key={it.label} style={{ display: "flex", gap: "var(--space-4)", alignItems: "flex-start" }}>
                <span style={{ width: 46, height: 46, flex: "0 0 auto", borderRadius: "var(--radius-md)", background: "color-mix(in srgb, var(--gold-500) 22%, transparent)", color: "var(--gold-400)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><i data-lucide={it.icon} style={{ width: 22, height: 22 }} /></span>
                <div style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }}>
                  <span style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--gold-400)" }}>{it.label}</span>
                  {it.lines.map((l) => <span key={l} style={{ fontSize: "var(--text-base)", color: "var(--cream-100)", lineHeight: 1.5, overflowWrap: "anywhere" }}>{l}</span>)}
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, paddingTop: "var(--space-4)", borderTop: "1px solid var(--border-inverse)" }}>
            <span style={{ fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--indigo-100)" }}>Suivez-nous</span>
            <div style={{ display: "flex", gap: 10 }}>
              {socials.map(([slug, label]) => (
                <a key={slug} href="#" onClick={(e) => e.preventDefault()} aria-label={label} title={label}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "var(--gold-500)"; e.currentTarget.style.borderColor = "var(--gold-500)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "color-mix(in srgb,var(--cream-50) 12%,transparent)"; e.currentTarget.style.borderColor = "var(--border-inverse)"; e.currentTarget.style.transform = ""; }}
                  style={{ width: 42, height: 42, borderRadius: "var(--radius-pill)", display: "inline-flex", alignItems: "center", justifyContent: "center", background: "color-mix(in srgb,var(--cream-50) 12%,transparent)", border: "1px solid var(--border-inverse)", transition: "all var(--dur-fast) var(--ease-out)" }}>
                  <img src={`https://cdn.simpleicons.org/${slug}/f7f1e5`} alt="" width="18" height="18" style={{ width: 18, height: 18 }} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", padding: "var(--space-6)", background: "var(--surface-accent-soft)", border: "1px solid var(--gold-200)", borderRadius: "var(--radius-lg)" }}>
        <span style={{ width: 44, height: 44, flex: "0 0 auto", borderRadius: "var(--radius-md)", background: "var(--gold-500)", color: "var(--indigo-900)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><i data-lucide="headphones" style={{ width: 22, height: 22 }} /></span>
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--text-base)", color: "var(--text-strong)" }}>Besoin d'une réponse rapide&nbsp;?</div>
          <div style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>Écrivez-nous sur WhatsApp, on adore discuter.</div>
        </div>
      </div>
    </div>
  );
}

function MapPlaceholder() {
  return (
    <section style={{ background: "var(--surface-card)", padding: "0 0 var(--section-y)" }}>
      <div className="bridge-container">
        <div style={{ position: "relative", borderRadius: "var(--radius-xl)", overflow: "hidden", boxShadow: "var(--shadow-md)", border: "1px solid var(--border-subtle)", aspectRatio: "21 / 7", minHeight: 280, backgroundImage: "url(../../assets/tex-indigo.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div style={{ position: "absolute", inset: 0, background: "color-mix(in srgb, var(--indigo-950) 30%, transparent)" }} />
          {/* faux map grid */}
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(color-mix(in srgb,var(--cream-50) 12%,transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb,var(--cream-50) 12%,transparent) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, textAlign: "center", color: "var(--cream-50)" }}>
            <span style={{ width: 64, height: 64, borderRadius: "var(--radius-pill)", background: "var(--gold-500)", color: "var(--indigo-900)", display: "inline-flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--shadow-lg)" }}><i data-lucide="map-pin" style={{ width: 32, height: 32, fill: "var(--indigo-900)" }} /></span>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "var(--text-xl)" }}>The Bridge Center — Kinshasa</div>
            <div style={{ fontSize: "var(--text-base)", color: "var(--indigo-100)" }}>Avenue de la Libération, Gombe · Kinshasa, RDC</div>
            <span style={{ marginTop: 6, display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: "var(--radius-pill)", background: "color-mix(in srgb,var(--cream-50) 14%,transparent)", border: "1px solid var(--border-inverse)", fontSize: "var(--text-sm)", fontWeight: 600 }}><i data-lucide="external-link" style={{ width: 15, height: 15 }} />Ouvrir dans Google Maps (placeholder)</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactFAQ() {
  const faqs = [
    { q: "Les formations sont-elles vraiment gratuites ?", a: "Oui ! Toutes nos formations de base (du A1 au B1) sont 100 % gratuites. Certaines formations avancées et préparations aux examens sont en accès Premium." },
    { q: "Faut-il être à Kinshasa pour suivre les cours ?", a: "Pas du tout. Tout se passe en ligne : vous pouvez apprendre depuis n'importe où dans le monde, à votre rythme, avec une simple connexion internet." },
    { q: "Comment se déroulent les séances en direct ?", a: "Les séances live ont lieu chaque semaine sur Google Meet, en petits groupes. Le calendrier est adapté à plusieurs fuseaux horaires francophones." },
    { q: "Vais-je recevoir un certificat ?", a: "Oui. À la fin de chaque niveau validé, vous obtenez un certificat The Bridge Center à ajouter à votre CV et à partager fièrement." },
    { q: "Comment puis-je devenir formateur ?", a: "Nous accueillons régulièrement de nouveaux formateurs. Écrivez-nous via le formulaire en choisissant le sujet « Devenir formateur »." },
  ];
  const [open, setOpen] = useCoState(0);
  useCoEffect(() => { window.lucide && window.lucide.createIcons(); }, [open]);
  return (
    <section style={{ background: "var(--surface-page)", padding: "var(--section-y) 0" }}>
      <div className="bridge-container" style={{ display: "flex", flexDirection: "column", gap: "var(--space-12)" }}>
        <Reveal><SectionHeading eyebrow="FAQ" title="Questions fréquentes" lead="Vous ne trouvez pas votre réponse ? Le formulaire ci-dessus est là pour ça." /></Reveal>
        <div style={{ maxWidth: 820, marginInline: "auto", width: "100%", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={(i % 5) * 60}>
                <div style={{ background: "var(--surface-card)", border: `1px solid ${isOpen ? "var(--gold-300)" : "var(--border-subtle)"}`, borderRadius: "var(--radius-lg)", boxShadow: isOpen ? "var(--shadow-md)" : "var(--shadow-xs)", overflow: "hidden", transition: "border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)" }}>
                  <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}
                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, width: "100%", padding: "var(--space-5) var(--space-6)", border: "none", background: "none", cursor: "pointer", textAlign: "left" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-md)", fontWeight: 700, color: "var(--text-strong)" }}>{f.q}</span>
                    <span style={{ flex: "0 0 auto", width: 32, height: 32, borderRadius: "var(--radius-pill)", background: isOpen ? "var(--gold-500)" : "var(--surface-sunken)", color: isOpen ? "var(--indigo-900)" : "var(--text-muted)", display: "inline-flex", alignItems: "center", justifyContent: "center", transition: "all var(--dur-base) var(--ease-out)" }}><i data-lucide={isOpen ? "minus" : "plus"} style={{ width: 18, height: 18 }} /></span>
                  </button>
                  <div style={{ maxHeight: isOpen ? 220 : 0, opacity: isOpen ? 1 : 0, overflow: "hidden", transition: "max-height var(--dur-base) var(--ease-out), opacity var(--dur-base) var(--ease-out)" }}>
                    <p style={{ margin: 0, padding: "0 var(--space-6) var(--space-6)", fontSize: "var(--text-base)", color: "var(--text-muted)", lineHeight: "var(--leading-relaxed)" }}>{f.a}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactMain() {
  return (
    <section style={{ background: "var(--surface-card)", padding: "var(--section-y) 0 var(--section-y-tight)" }}>
      <div className="bridge-container">
        <div className="bc-contact-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "var(--space-10)", alignItems: "start" }}>
          <Reveal><ContactForm /></Reveal>
          <Reveal delay={120}><ContactInfo /></Reveal>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ContactHeader, ContactMain, MapPlaceholder, ContactFAQ });
