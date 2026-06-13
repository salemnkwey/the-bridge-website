import React from "react";

/**
 * IconButton — a compact square/circle button wrapping a single Lucide icon.
 * Used for header actions, carousel arrows, close buttons, social links.
 */
export function IconButton({
  icon,
  label,
  variant = "secondary",
  size = "md",
  shape = "circle",
  disabled = false,
  href,
  onClick,
  ...rest
}) {
  const Tag = href ? "a" : "button";
  const dim = { sm: 36, md: 44, lg: 52 }[size];
  const iconSize = { sm: 16, md: 20, lg: 24 }[size];

  const palettes = {
    primary: { background: "var(--primary)", color: "var(--cream-50)", border: "none" },
    accent: { background: "var(--accent)", color: "var(--indigo-900)", border: "none" },
    secondary: {
      background: "var(--surface-card)",
      color: "var(--primary)",
      border: "1.5px solid var(--border-default)",
    },
    ghost: { background: "transparent", color: "var(--text-body)", border: "none" },
    inverse: {
      background: "color-mix(in srgb, var(--cream-50) 14%, transparent)",
      color: "var(--cream-50)",
      border: "1.5px solid var(--border-inverse)",
    },
  };
  const p = palettes[variant] || palettes.secondary;

  return (
    <Tag
      className={`bc-iconbtn bc-iconbtn--${variant}`}
      href={href}
      aria-label={label}
      title={label}
      disabled={Tag === "button" ? disabled : undefined}
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: dim,
        height: dim,
        flex: "0 0 auto",
        borderRadius: shape === "circle" ? "var(--radius-pill)" : "var(--radius-md)",
        background: p.background,
        color: p.color,
        border: p.border,
        boxShadow: variant === "secondary" ? "var(--shadow-xs)" : "none",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        transition:
          "transform var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
        WebkitTapHighlightColor: "transparent",
      }}
      onMouseEnter={(e) => {
        if (disabled) return;
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "var(--shadow-md)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = variant === "secondary" ? "var(--shadow-xs)" : "none";
      }}
      onMouseDown={(e) => {
        if (!disabled) e.currentTarget.style.transform = "scale(0.94)";
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      {...rest}
    >
      <i data-lucide={icon} style={{ width: iconSize, height: iconSize }} />
    </Tag>
  );
}
