import React from "react";

/**
 * Button — The Bridge Center primary action control.
 * Variants: primary (navy), accent (gold), secondary (outline), ghost, link.
 * Sizes: sm | md | lg. Optional Lucide icon name on either side.
 * Call lucide.createIcons() after mount to hydrate icons.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  full = false,
  disabled = false,
  as = "button",
  href,
  onClick,
  type = "button",
  ...rest
}) {
  const Tag = href ? "a" : as;

  const pad = {
    sm: "8px 16px",
    md: "12px 22px",
    lg: "16px 30px",
  }[size];
  const fontSize = {
    sm: "var(--text-sm)",
    md: "var(--text-base)",
    lg: "var(--text-md)",
  }[size];

  const palettes = {
    primary: {
      background: "var(--primary)",
      color: "var(--cream-50)",
      border: "1.5px solid transparent",
      shadow: "var(--shadow-md)",
    },
    accent: {
      background: "var(--accent)",
      color: "var(--indigo-900)",
      border: "1.5px solid transparent",
      shadow: "var(--shadow-accent)",
    },
    secondary: {
      background: "var(--surface-card)",
      color: "var(--primary)",
      border: "1.5px solid var(--border-default)",
      shadow: "var(--shadow-xs)",
    },
    ghost: {
      background: "transparent",
      color: "var(--primary)",
      border: "1.5px solid transparent",
      shadow: "none",
    },
    inverse: {
      background: "var(--cream-50)",
      color: "var(--indigo-900)",
      border: "1.5px solid transparent",
      shadow: "var(--shadow-lg)",
    },
    link: {
      background: "transparent",
      color: "var(--text-link)",
      border: "none",
      shadow: "none",
    },
  };
  const p = palettes[variant] || palettes.primary;

  const style = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.55em",
    width: full ? "100%" : "auto",
    padding: variant === "link" ? "0" : pad,
    fontFamily: "var(--font-body)",
    fontSize,
    fontWeight: "var(--weight-semibold)",
    lineHeight: 1.1,
    letterSpacing: "0.005em",
    textDecoration: variant === "link" ? "underline" : "none",
    textUnderlineOffset: "3px",
    color: p.color,
    background: p.background,
    border: p.border,
    borderRadius: variant === "link" ? "0" : "var(--radius-pill)",
    boxShadow: disabled ? "none" : p.shadow,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition:
      "transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)",
    whiteSpace: "nowrap",
    WebkitTapHighlightColor: "transparent",
  };

  const iconSize = size === "lg" ? 20 : size === "sm" ? 16 : 18;

  return (
    <Tag
      className={`bc-btn bc-btn--${variant}`}
      style={style}
      href={href}
      type={Tag === "button" ? type : undefined}
      disabled={Tag === "button" ? disabled : undefined}
      aria-disabled={disabled || undefined}
      onClick={disabled ? (e) => e.preventDefault() : onClick}
      onMouseDown={(e) => {
        if (!disabled) e.currentTarget.style.transform = "scale(0.97)";
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = "";
      }}
      onMouseEnter={(e) => {
        if (disabled || variant === "link") return;
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "var(--shadow-lg)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = disabled ? "none" : p.shadow;
      }}
      {...rest}
    >
      {icon && (
        <i data-lucide={icon} style={{ width: iconSize, height: iconSize }} />
      )}
      {children}
      {iconRight && (
        <i data-lucide={iconRight} style={{ width: iconSize, height: iconSize }} />
      )}
    </Tag>
  );
}
