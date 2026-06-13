import React from "react";

/**
 * Stat — a big display number with a label, for stat bands.
 * On dark surfaces pass tone="inverse". Optional suffix (%, +) and icon.
 */
export function Stat({ value, suffix, label, icon, tone = "default", align = "center" }) {
  const isInverse = tone === "inverse";
  const numColor = "var(--accent)";
  const labelColor = isInverse ? "var(--text-inverse-muted)" : "var(--text-muted)";

  return (
    <div
      className="bc-stat"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: align === "center" ? "center" : "flex-start",
        textAlign: align,
        gap: "var(--space-2)",
      }}
    >
      {icon && (
        <i
          data-lucide={icon}
          style={{ width: 26, height: 26, color: "var(--accent)", marginBottom: 2 }}
        />
      )}
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: "var(--weight-extrabold)",
          fontSize: "var(--text-4xl)",
          lineHeight: 1,
          letterSpacing: "var(--tracking-tight)",
          color: numColor,
          display: "flex",
          alignItems: "baseline",
        }}
      >
        {value}
        {suffix && (
          <span style={{ fontSize: "0.5em", marginLeft: "0.1em", fontWeight: "var(--weight-bold)" }}>
            {suffix}
          </span>
        )}
      </div>
      <div
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-sm)",
          fontWeight: "var(--weight-medium)",
          letterSpacing: "0.02em",
          color: labelColor,
          maxWidth: "16ch",
        }}
      >
        {label}
      </div>
    </div>
  );
}
