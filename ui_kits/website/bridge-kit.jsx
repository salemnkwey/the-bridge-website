/* ============================================================
   The Bridge Center — local UI kit primitives (window-attached)
   Mirrors components/ so the kit renders standalone & testable.
   Canonical source for consumers is components/ via _ds_bundle.js.
   ============================================================ */
const { useState } = React;

function Button({ children, variant = "primary", size = "md", icon, iconRight, full = false, disabled = false, href, onClick, type = "button", style = {}, ...rest }) {
  const Tag = href ? "a" : "button";
  const pad = { sm: "8px 16px", md: "12px 22px", lg: "16px 30px" }[size];
  const fontSize = { sm: "var(--text-sm)", md: "var(--text-base)", lg: "var(--text-md)" }[size];
  const P = {
    primary: ["var(--primary)", "var(--cream-50)", "1.5px solid transparent", "var(--shadow-md)"],
    accent: ["var(--accent)", "var(--indigo-900)", "1.5px solid transparent", "var(--shadow-accent)"],
    secondary: ["var(--surface-card)", "var(--primary)", "1.5px solid var(--border-default)", "var(--shadow-xs)"],
    ghost: ["transparent", "var(--primary)", "1.5px solid transparent", "none"],
    inverse: ["var(--cream-50)", "var(--indigo-900)", "1.5px solid transparent", "var(--shadow-lg)"],
    "inverse-ghost": ["color-mix(in srgb,var(--cream-50) 12%,transparent)", "var(--cream-50)", "1.5px solid var(--border-inverse)", "none"],
    link: ["transparent", "var(--text-link)", "none", "none"],
  }[variant] || ["var(--primary)", "var(--cream-50)", "1.5px solid transparent", "var(--shadow-md)"];
  const iconSize = size === "lg" ? 20 : size === "sm" ? 16 : 18;
  const baseShadow = disabled ? "none" : P[3];
  return (
    <Tag className={`bc-btn bc-btn--${variant}`} href={href} type={Tag === "button" ? type : undefined}
      disabled={Tag === "button" ? disabled : undefined} aria-disabled={disabled || undefined}
      onClick={disabled ? (e) => e.preventDefault() : onClick}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = "scale(0.97)"; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; }}
      onMouseEnter={(e) => { if (disabled || variant === "link") return; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "var(--shadow-lg)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = baseShadow; }}
      style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.55em", width: full ? "100%" : "auto",
        padding: variant === "link" ? 0 : pad, fontFamily: "var(--font-body)", fontSize, fontWeight: "var(--weight-semibold)", lineHeight: 1.1,
        textDecoration: variant === "link" ? "underline" : "none", textUnderlineOffset: "3px", color: P[1], background: P[0], border: P[2],
        borderRadius: variant === "link" ? 0 : "var(--radius-pill)", boxShadow: baseShadow, cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1, whiteSpace: "nowrap", WebkitTapHighlightColor: "transparent",
        transition: "transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-fast) var(--ease-out)", ...style }} {...rest}>
      {icon && <i data-lucide={icon} style={{ width: iconSize, height: iconSize }} />}
      {children}
      {iconRight && <i data-lucide={iconRight} style={{ width: iconSize, height: iconSize }} />}
    </Tag>
  );
}

function IconButton({ icon, label, variant = "secondary", size = "md", shape = "circle", href, onClick, ...rest }) {
  const Tag = href ? "a" : "button";
  const dim = { sm: 36, md: 44, lg: 52 }[size];
  const iconSize = { sm: 16, md: 20, lg: 24 }[size];
  const P = {
    primary: ["var(--primary)", "var(--cream-50)", "none"],
    accent: ["var(--accent)", "var(--indigo-900)", "none"],
    secondary: ["var(--surface-card)", "var(--primary)", "1.5px solid var(--border-default)"],
    ghost: ["transparent", "var(--text-body)", "none"],
    inverse: ["color-mix(in srgb,var(--cream-50) 12%,transparent)", "var(--cream-50)", "1.5px solid var(--border-inverse)"],
  }[variant] || ["var(--surface-card)", "var(--primary)", "1.5px solid var(--border-default)"];
  return (
    <Tag className="bc-iconbtn" href={href} aria-label={label} title={label} onClick={onClick}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "var(--shadow-md)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = variant === "secondary" ? "var(--shadow-xs)" : "none"; }}
      style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: dim, height: dim, flex: "0 0 auto",
        borderRadius: shape === "circle" ? "var(--radius-pill)" : "var(--radius-md)", background: P[0], color: P[1], border: P[2],
        boxShadow: variant === "secondary" ? "var(--shadow-xs)" : "none", cursor: "pointer", WebkitTapHighlightColor: "transparent",
        transition: "transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)" }} {...rest}>
      <i data-lucide={icon} style={{ width: iconSize, height: iconSize }} />
    </Tag>
  );
}

function Badge({ children, tone = "accent", variant = "soft", icon, size = "md" }) {
  const tones = {
    accent: { soft: ["var(--gold-100)", "var(--gold-700)"], solid: ["var(--gold-500)", "var(--indigo-900)"] },
    navy: { soft: ["var(--indigo-50)", "var(--indigo-700)"], solid: ["var(--indigo-700)", "var(--cream-50)"] },
    teal: { soft: ["var(--teal-50)", "var(--teal-700)"], solid: ["var(--teal-500)", "var(--white)"] },
    success: { soft: ["var(--success-soft)", "var(--green-500)"], solid: ["var(--green-500)", "var(--white)"] },
    danger: { soft: ["var(--danger-soft)", "var(--red-500)"], solid: ["var(--red-500)", "var(--white)"] },
    neutral: { soft: ["var(--cream-200)", "var(--ink-700)"], solid: ["var(--ink-700)", "var(--cream-50)"] },
    onnavy: { soft: ["color-mix(in srgb,var(--cream-50) 14%,transparent)", "var(--cream-50)"], solid: ["var(--gold-500)", "var(--indigo-900)"] },
  };
  const [bg, fg] = (tones[tone] || tones.accent)[variant];
  return (
    <span className="bc-badge" style={{ display: "inline-flex", alignItems: "center", gap: "0.4em", padding: size === "sm" ? "3px 9px" : "5px 12px",
      fontFamily: "var(--font-body)", fontSize: size === "sm" ? "var(--text-xs)" : "var(--text-sm)", fontWeight: "var(--weight-bold)",
      letterSpacing: "0.01em", lineHeight: 1.1, color: fg, background: bg, borderRadius: "var(--radius-pill)", whiteSpace: "nowrap" }}>
      {icon && <i data-lucide={icon} style={{ width: 13, height: 13 }} />}
      {children}
    </span>
  );
}

function Avatar({ src, name = "", size = "md", ring = false }) {
  const dim = { xs: 28, sm: 36, md: 48, lg: 64, xl: 88 }[size] || 48;
  const initials = name.split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  return (
    <span className="bc-avatar" title={name} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: dim, height: dim,
      flex: "0 0 auto", borderRadius: "var(--radius-pill)", overflow: "hidden", background: "var(--indigo-100)", color: "var(--indigo-700)",
      fontFamily: "var(--font-display)", fontWeight: "var(--weight-bold)", fontSize: dim * 0.38, userSelect: "none",
      boxShadow: ring ? "0 0 0 3px var(--surface-card), 0 0 0 5px var(--gold-400)" : "none" }}>
      {src ? <img src={src} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : (initials || "?")}
    </span>
  );
}

function Stat({ value, suffix, label, icon, tone = "default", align = "center" }) {
  const labelColor = tone === "inverse" ? "var(--text-inverse-muted)" : "var(--text-muted)";
  return (
    <div className="bc-stat" style={{ display: "flex", flexDirection: "column", alignItems: align === "center" ? "center" : "flex-start", textAlign: align, gap: "var(--space-2)" }}>
      {icon && <i data-lucide={icon} style={{ width: 26, height: 26, color: "var(--accent)", marginBottom: 2 }} />}
      <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-extrabold)", fontSize: "var(--text-4xl)", lineHeight: 1, letterSpacing: "var(--tracking-tight)", color: "var(--accent)", display: "flex", alignItems: "baseline" }}>
        {value}{suffix && <span style={{ fontSize: "0.5em", marginLeft: "0.1em", fontWeight: "var(--weight-bold)" }}>{suffix}</span>}
      </div>
      <div style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", fontWeight: "var(--weight-medium)", letterSpacing: "0.02em", color: labelColor, maxWidth: "18ch" }}>{label}</div>
    </div>
  );
}

function Input({ label, id, type = "text", placeholder, icon, hint, error, value, defaultValue, onChange, required, disabled, tone = "light", ...rest }) {
  const inputId = id || `bc-input-${Math.random().toString(36).slice(2, 8)}`;
  const dark = tone === "dark";
  const borderColor = error ? "var(--danger)" : dark ? "var(--border-inverse)" : "var(--border-default)";
  return (
    <div className="bc-field" style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
      {label && <label htmlFor={inputId} style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", fontWeight: "var(--weight-semibold)", color: dark ? "var(--cream-50)" : "var(--text-strong)" }}>{label}{required && <span style={{ color: "var(--danger)", marginLeft: 3 }}>*</span>}</label>}
      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        {icon && <i data-lucide={icon} style={{ position: "absolute", left: 14, width: 18, height: 18, color: "var(--text-muted)", pointerEvents: "none" }} />}
        <input id={inputId} type={type} placeholder={placeholder} value={value} defaultValue={defaultValue} onChange={onChange} required={required} disabled={disabled}
          onFocus={(e) => { e.currentTarget.style.borderColor = error ? "var(--danger)" : "var(--primary)"; e.currentTarget.style.boxShadow = `0 0 0 3px ${error ? "var(--danger-soft)" : "var(--indigo-50)"}`; }}
          onBlur={(e) => { e.currentTarget.style.borderColor = borderColor; e.currentTarget.style.boxShadow = "none"; }}
          style={{ width: "100%", padding: icon ? "12px 14px 12px 42px" : "12px 14px", fontFamily: "var(--font-body)", fontSize: "var(--text-base)",
            color: dark ? "var(--cream-50)" : "var(--text-strong)", background: dark ? "color-mix(in srgb,var(--indigo-950) 50%,transparent)" : (disabled ? "var(--surface-sunken)" : "var(--surface-card)"),
            border: `1.5px solid ${borderColor}`, borderRadius: "var(--radius-md)", outline: "none", opacity: disabled ? 0.6 : 1,
            transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)" }} {...rest} />
      </div>
      {(hint || error) && <span style={{ fontSize: "var(--text-sm)", color: error ? "var(--danger)" : "var(--text-muted)" }}>{error || hint}</span>}
    </div>
  );
}

function Select({ label, id, options = [], value, defaultValue, onChange, hint, required = false, disabled = false }) {
  const selId = id || `bc-sel-${Math.random().toString(36).slice(2, 8)}`;
  const opts = options.map((o) => (typeof o === "string" ? { value: o, label: o } : o));
  return (
    <div className="bc-field" style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
      {label && <label htmlFor={selId} style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", fontWeight: "var(--weight-semibold)", color: "var(--text-strong)" }}>{label}{required && <span style={{ color: "var(--danger)", marginLeft: 3 }}>*</span>}</label>}
      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        <select id={selId} value={value} defaultValue={defaultValue} onChange={onChange} disabled={disabled}
          onFocus={(e) => { e.currentTarget.style.borderColor = "var(--primary)"; e.currentTarget.style.boxShadow = "0 0 0 3px var(--indigo-50)"; }}
          onBlur={(e) => { e.currentTarget.style.borderColor = "var(--border-default)"; e.currentTarget.style.boxShadow = "none"; }}
          style={{ width: "100%", appearance: "none", WebkitAppearance: "none", padding: "12px 42px 12px 14px", fontFamily: "var(--font-body)", fontSize: "var(--text-base)", color: "var(--text-strong)", background: disabled ? "var(--surface-sunken)" : "var(--surface-card)", border: "1.5px solid var(--border-default)", borderRadius: "var(--radius-md)", outline: "none", cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.6 : 1 }}>
          {opts.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <i data-lucide="chevron-down" style={{ position: "absolute", right: 14, width: 18, height: 18, color: "var(--text-muted)", pointerEvents: "none" }} />
      </div>
      {hint && <span style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{hint}</span>}
    </div>
  );
}

function Checkbox({ label, checked, defaultChecked, onChange, id, disabled }) {
  const cbId = id || `bc-cb-${Math.random().toString(36).slice(2, 8)}`;
  const [internal, setInternal] = useState(!!defaultChecked);
  const on = checked !== undefined ? checked : internal;
  return (
    <label htmlFor={cbId} style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-3)", cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.55 : 1, fontFamily: "var(--font-body)", fontSize: "var(--text-base)", color: "var(--text-body)" }}>
      <input id={cbId} type="checkbox" checked={on} disabled={disabled} onChange={(e) => { if (checked === undefined) setInternal(e.target.checked); onChange && onChange(e); }} style={{ position: "absolute", opacity: 0, width: 1, height: 1 }} />
      <span aria-hidden="true" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 22, height: 22, flex: "0 0 auto", borderRadius: 6, border: `1.5px solid ${on ? "var(--accent)" : "var(--border-strong)"}`, background: on ? "var(--accent)" : "var(--surface-card)", color: "var(--indigo-900)", transition: "all var(--dur-fast) var(--ease-out)" }}>
        {on && <i data-lucide="check" style={{ width: 15, height: 15, strokeWidth: 3 }} />}
      </span>
      {label}
    </label>
  );
}

function SectionHeading({ eyebrow, title, lead, align = "center", tone = "default", maxWidth = "46ch", as = "h2" }) {
  const Title = as;
  const inv = tone === "inverse";
  return (
    <div className="bc-section-heading" style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", alignItems: align === "center" ? "center" : "flex-start", textAlign: align, marginInline: align === "center" ? "auto" : 0 }}>
      {eyebrow && <span className="eyebrow" style={{ color: inv ? "var(--gold-400)" : "var(--text-accent)" }}><span aria-hidden="true" style={{ width: 22, height: 2, background: "currentColor", borderRadius: 2, display: "inline-block" }} />{eyebrow}</span>}
      <Title style={{ fontFamily: "var(--font-display)", fontSize: "var(--display-section)", fontWeight: "var(--weight-extrabold)", lineHeight: "var(--leading-tight)", letterSpacing: "var(--tracking-tight)", color: inv ? "var(--cream-50)" : "var(--text-strong)", margin: 0, maxWidth }}>{title}</Title>
      {lead && <p style={{ fontSize: "var(--text-md)", lineHeight: "var(--leading-relaxed)", color: inv ? "var(--text-inverse-muted)" : "var(--text-muted)", margin: 0, maxWidth }}>{lead}</p>}
    </div>
  );
}

function FeatureCard({ icon, title, children, tone = "gold" }) {
  const tints = { gold: ["var(--gold-100)", "var(--gold-700)"], navy: ["var(--indigo-50)", "var(--indigo-700)"], teal: ["var(--teal-50)", "var(--teal-600)"] }[tone] || ["var(--gold-100)", "var(--gold-700)"];
  return (
    <div className="bc-feature-card"
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "var(--shadow-lg)"; e.currentTarget.style.borderColor = "var(--gold-300)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "var(--shadow-sm)"; e.currentTarget.style.borderColor = "var(--border-subtle)"; }}
      style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", padding: "var(--space-6)", background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-sm)", height: "100%", transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)" }}>
      <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 52, height: 52, borderRadius: "var(--radius-md)", background: tints[0], color: tints[1] }}><i data-lucide={icon} style={{ width: 26, height: 26 }} /></span>
      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", fontWeight: "var(--weight-bold)", color: "var(--text-strong)", margin: 0, letterSpacing: "var(--tracking-tight)" }}>{title}</h3>
      <p style={{ fontSize: "var(--text-base)", lineHeight: "var(--leading-relaxed)", color: "var(--text-muted)", margin: 0 }}>{children}</p>
    </div>
  );
}

function CourseCard({ image, level = "A1", free = true, price, category, title, description, duration = "6 semaines", lessons = 24, href = "#", onClick }) {
  return (
    <a href={href} onClick={onClick} className="bc-course-card"
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "var(--shadow-xl)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "var(--shadow-sm)"; }}
      style={{ display: "flex", flexDirection: "column", background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-sm)", textDecoration: "none", color: "inherit", height: "100%", transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)" }}>
      <div style={{ position: "relative", aspectRatio: "16 / 10", overflow: "hidden" }}>
        <img src={image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", top: 12, left: 12, display: "flex", gap: 8 }}>
          {free ? <Badge tone="accent" variant="solid">Gratuit</Badge> : <Badge tone="navy" variant="solid">{price}</Badge>}
          <Badge tone="navy" variant="soft">Niveau {level}</Badge>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", padding: "var(--space-6)", flex: 1 }}>
        {category && <span style={{ fontSize: "var(--text-xs)", fontWeight: "var(--weight-bold)", letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-accent)" }}>{category}</span>}
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", fontWeight: "var(--weight-bold)", color: "var(--text-strong)", margin: 0, lineHeight: "var(--leading-snug)" }}>{title}</h3>
        <p style={{ fontSize: "var(--text-base)", lineHeight: "var(--leading-relaxed)", color: "var(--text-muted)", margin: 0, flex: 1 }}>{description}</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", marginTop: "var(--space-2)", paddingTop: "var(--space-4)", borderTop: "1px solid var(--divider)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", color: "var(--text-muted)", fontSize: "var(--text-sm)", fontWeight: "var(--weight-medium)" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><i data-lucide="clock" style={{ width: 16, height: 16 }} /> {duration}</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><i data-lucide="book-open" style={{ width: 16, height: 16 }} /> {lessons} leçons</span>
          </div>
          <span className="bc-course-cta" style={{ display: "inline-flex", alignItems: "center", gap: 7, color: "var(--primary)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-base)" }}>Voir le cours <i data-lucide="arrow-right" style={{ width: 17, height: 17 }} /></span>
        </div>
      </div>
    </a>
  );
}

function TestimonialCard({ quote, name, role, photo, rating = 5, tone = "paper" }) {
  const inv = tone === "navy";
  return (
    <figure className="bc-testimonial" style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", margin: 0, padding: "var(--space-8)", background: inv ? "var(--surface-inverse-2)" : "var(--surface-card)", border: inv ? "1px solid var(--border-inverse)" : "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", boxShadow: inv ? "var(--shadow-lg)" : "var(--shadow-sm)", height: "100%" }}>
      <div style={{ display: "flex", gap: 3 }} aria-label={`${rating} sur 5`}>
        {Array.from({ length: 5 }).map((_, i) => <i key={i} data-lucide="star" style={{ width: 18, height: 18, fill: i < rating ? "var(--gold-500)" : "none", color: i < rating ? "var(--gold-500)" : "var(--ink-300)" }} />)}
      </div>
      <blockquote style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: "var(--text-md)", lineHeight: "var(--leading-relaxed)", color: inv ? "var(--cream-50)" : "var(--text-body)", flex: 1 }}>« {quote} »</blockquote>
      <figcaption style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
        <Avatar src={photo} name={name} size="md" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-bold)", fontSize: "var(--text-base)", color: inv ? "var(--cream-50)" : "var(--text-strong)" }}>{name}</span>
          <span style={{ fontSize: "var(--text-sm)", color: inv ? "var(--text-inverse-muted)" : "var(--text-muted)" }}>{role}</span>
        </div>
      </figcaption>
    </figure>
  );
}

Object.assign(window, { Button, IconButton, Badge, Avatar, Stat, Input, Select, Checkbox, SectionHeading, FeatureCard, CourseCard, TestimonialCard });
