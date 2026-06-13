/* The Bridge Center — shared auth modal (login / signup) */
const { useEffect: useAuthEffect } = React;

function bcTabStyle(active) {
  return { padding: "8px 18px", borderRadius: "var(--radius-pill)", border: "none", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", fontWeight: 700, color: active ? "var(--indigo-900)" : "var(--text-muted)", background: active ? "var(--surface-card)" : "transparent", boxShadow: active ? "var(--shadow-xs)" : "none", transition: "all var(--dur-fast) var(--ease-out)" };
}

function AuthModal({ mode, onClose, onSwitch }) {
  const signup = mode === "signup";
  useAuthEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  return (
    <div role="dialog" aria-modal="true" onClick={onClose}
      style={{ position: "fixed", inset: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: "var(--gutter)", background: "color-mix(in srgb, var(--indigo-950) 55%, transparent)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", animation: "bcFade var(--dur-base) var(--ease-out)" }}>
      <div onClick={(e) => e.stopPropagation()} style={{ position: "relative", width: "min(960px, 100%)", display: "grid", gridTemplateColumns: "1fr 1fr", background: "var(--surface-card)", borderRadius: "var(--radius-xl)", overflow: "hidden", boxShadow: "var(--shadow-xl)", animation: "bcRise var(--dur-slow) var(--ease-spring)" }}>
        <div className="bc-auth-aside" style={{ position: "relative", backgroundImage: "url(../../assets/tex-navy.png)", backgroundSize: "cover", backgroundPosition: "center", color: "var(--cream-50)", padding: "var(--space-10)", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 520 }}>
          <Logo variant="white" size={36} />
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-3xl)", lineHeight: 1.1, margin: 0, color: "var(--cream-50)" }}>{signup ? "Commencez votre traversée." : "Heureux de vous revoir."}</h3>
            <p style={{ fontSize: "var(--text-md)", color: "var(--indigo-100)", margin: 0, lineHeight: "var(--leading-relaxed)" }}>{signup ? "Créez votre compte gratuit et accédez à vos premières leçons en quelques minutes." : "Reprenez là où vous vous êtes arrêté. Vos progrès vous attendent."}</p>
            <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "var(--text-lg)", color: "var(--gold-400)", margin: "8px 0 0" }}>« If you're rich, be the bridge. »</p>
          </div>
        </div>
        <div style={{ padding: "var(--space-10)", display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "inline-flex", background: "var(--surface-sunken)", borderRadius: "var(--radius-pill)", padding: 4 }}>
              <button onClick={() => onSwitch("login")} style={bcTabStyle(!signup)}>Se connecter</button>
              <button onClick={() => onSwitch("signup")} style={bcTabStyle(signup)}>S'inscrire</button>
            </div>
            <IconButton icon="x" label="Fermer" variant="ghost" size="sm" onClick={onClose} />
          </div>
          <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            {signup && <Input label="Nom complet" icon="user" placeholder="Grâce Mukendi" />}
            <Input label="Adresse e-mail" type="email" icon="mail" placeholder="vous@exemple.com" />
            <Input label="Mot de passe" type="password" icon="lock" placeholder="••••••••" />
            {signup && <Select label="Votre niveau actuel" options={["Je débute (A1)", "A2 — Élémentaire", "B1 — Intermédiaire", "B2 — Avancé", "C1 — Autonome", "Je ne sais pas encore"]} />}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
              <Checkbox label={signup ? "J'accepte les conditions" : "Se souvenir de moi"} defaultChecked={!signup} />
              {!signup && <a href="#" onClick={(e) => e.preventDefault()} style={{ fontSize: "var(--text-sm)", fontWeight: 600 }}>Mot de passe oublié ?</a>}
            </div>
            <Button variant="accent" size="lg" full iconRight="arrow-right" type="submit">{signup ? "Créer mon compte gratuit" : "Se connecter"}</Button>
          </form>
          <div style={{ display: "flex", alignItems: "center", gap: 12, color: "var(--text-faint)", fontSize: "var(--text-sm)" }}>
            <span style={{ flex: 1, height: 1, background: "var(--divider)" }} />ou<span style={{ flex: 1, height: 1, background: "var(--divider)" }} />
          </div>
          <Button variant="secondary" full><img src="https://cdn.simpleicons.org/google" alt="" width="18" height="18" style={{ width: 18, height: 18 }} />Continuer avec Google</Button>
          <p style={{ textAlign: "center", fontSize: "var(--text-sm)", color: "var(--text-muted)", margin: 0 }}>
            {signup ? "Déjà un compte ? " : "Pas encore de compte ? "}
            <a href="#" onClick={(e) => { e.preventDefault(); onSwitch(signup ? "login" : "signup"); }} style={{ fontWeight: 700 }}>{signup ? "Se connecter" : "S'inscrire gratuitement"}</a>
          </p>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { AuthModal });
