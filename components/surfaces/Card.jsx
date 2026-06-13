import React from "react";

/**
 * Card — generic rounded surface container with optional hover lift.
 * Tones: paper (white), cream, navy (inverse), outline.
 */
export function Card({ children, tone = "paper", pad = "lg", hover = false, radius = "lg", style = {}, ...rest }) {
  const tones = {
    paper: { background: "var(--surface-card)", color: "var(--text-body)", border: "1px solid var(--border-subtle)", shadow: "var(--shadow-sm)" },
    cream: { background: "var(--surface-raised)", color: "var(--text-body)", border: "1px solid var(--cream-300)", shadow: "none" },
    navy: { background: "var(--surface-inverse)", color: "var(--text-inverse)", border: "1px solid var(--border-inverse)", shadow: "var(--shadow-lg)" },
    outline: { background: "transparent", color: "var(--text-body)", border: "1.5px solid var(--border-default)", shadow: "none" },
  };
  const t = tones[tone] || tones.paper;
  const pads = { none: 0, sm: "var(--space-4)", md: "var(--space-6)", lg: "var(--space-8)" };
  const radii = { md: "var(--radius-md)", lg: "var(--radius-lg)", xl: "var(--radius-xl)", "2xl": "var(--radius-2xl)" };

  return (
    <div
      className={`bc-card bc-card--${tone}`}
      style={{
        background: t.background,
        color: t.color,
        border: t.border,
        borderRadius: radii[radius] || radii.lg,
        boxShadow: t.shadow,
        padding: pads[pad] ?? pads.lg,
        transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
        ...style,
      }}
      onMouseEnter={
        hover
          ? (e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "var(--shadow-lg)";
            }
          : undefined
      }
      onMouseLeave={
        hover
          ? (e) => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow = t.shadow;
            }
          : undefined
      }
      {...rest}
    >
      {children}
    </div>
  );
}
