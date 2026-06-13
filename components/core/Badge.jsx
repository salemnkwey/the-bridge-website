import React from "react";

/**
 * Badge — small status / category pill. Tones map to brand + semantic colors.
 * Use for "Gratuit", CEFR levels, "Live", "Nouveau", categories.
 */
export function Badge({ children, tone = "accent", variant = "soft", icon, size = "md" }) {
  const tones = {
    accent: { soft: ["var(--gold-100)", "var(--gold-700)"], solid: ["var(--gold-500)", "var(--indigo-900)"] },
    navy: { soft: ["var(--indigo-50)", "var(--indigo-700)"], solid: ["var(--indigo-700)", "var(--cream-50)"] },
    teal: { soft: ["var(--teal-50)", "var(--teal-700)"], solid: ["var(--teal-500)", "var(--white)"] },
    success: { soft: ["var(--success-soft)", "var(--green-500)"], solid: ["var(--green-500)", "var(--white)"] },
    danger: { soft: ["var(--danger-soft)", "var(--red-500)"], solid: ["var(--red-500)", "var(--white)"] },
    neutral: { soft: ["var(--cream-200)", "var(--ink-700)"], solid: ["var(--ink-700)", "var(--cream-50)"] },
  };
  const [bg, fg] = (tones[tone] || tones.accent)[variant];
  const pad = size === "sm" ? "3px 9px" : "5px 12px";
  const fs = size === "sm" ? "var(--text-xs)" : "var(--text-sm)";

  return (
    <span
      className={`bc-badge bc-badge--${tone}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.4em",
        padding: pad,
        fontFamily: "var(--font-body)",
        fontSize: fs,
        fontWeight: "var(--weight-bold)",
        letterSpacing: "0.01em",
        lineHeight: 1.1,
        color: fg,
        background: bg,
        borderRadius: "var(--radius-pill)",
        whiteSpace: "nowrap",
      }}
    >
      {icon && <i data-lucide={icon} style={{ width: 13, height: 13 }} />}
      {children}
    </span>
  );
}
