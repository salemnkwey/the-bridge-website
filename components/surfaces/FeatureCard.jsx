import React from "react";

/**
 * FeatureCard — icon + title + description for "Pourquoi nous" / méthode grids.
 * The icon sits in a soft tinted tile. Optional accent tone.
 */
export function FeatureCard({ icon, title, children, tone = "gold" }) {
  const tints = {
    gold: ["var(--gold-100)", "var(--gold-700)"],
    navy: ["var(--indigo-50)", "var(--indigo-700)"],
    teal: ["var(--teal-50)", "var(--teal-600)"],
  };
  const [tileBg, tileFg] = tints[tone] || tints.gold;

  return (
    <div
      className="bc-feature-card"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)",
        padding: "var(--space-6)",
        background: "var(--surface-card)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-lg)",
        boxShadow: "var(--shadow-sm)",
        height: "100%",
        transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "var(--shadow-lg)";
        e.currentTarget.style.borderColor = "var(--gold-300)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "var(--shadow-sm)";
        e.currentTarget.style.borderColor = "var(--border-subtle)";
      }}
    >
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 52,
          height: 52,
          borderRadius: "var(--radius-md)",
          background: tileBg,
          color: tileFg,
        }}
      >
        <i data-lucide={icon} style={{ width: 26, height: 26 }} />
      </span>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "var(--text-xl)",
          fontWeight: "var(--weight-bold)",
          color: "var(--text-strong)",
          margin: 0,
          letterSpacing: "var(--tracking-tight)",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "var(--text-base)",
          lineHeight: "var(--leading-relaxed)",
          color: "var(--text-muted)",
          margin: 0,
        }}
      >
        {children}
      </p>
    </div>
  );
}
