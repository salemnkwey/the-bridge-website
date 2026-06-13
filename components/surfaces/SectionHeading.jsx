import React from "react";

/**
 * SectionHeading — eyebrow + title + optional lead paragraph.
 * The canonical way every page section opens. Centered or left aligned.
 */
export function SectionHeading({ eyebrow, title, lead, align = "center", tone = "default", maxWidth = "46ch", as = "h2" }) {
  const Title = as;
  const isInverse = tone === "inverse";
  return (
    <div
      className="bc-section-heading"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)",
        alignItems: align === "center" ? "center" : "flex-start",
        textAlign: align,
        marginInline: align === "center" ? "auto" : 0,
      }}
    >
      {eyebrow && (
        <span
          className="eyebrow"
          style={{ color: isInverse ? "var(--gold-400)" : "var(--text-accent)" }}
        >
          <span
            aria-hidden="true"
            style={{ width: 22, height: 2, background: "currentColor", borderRadius: 2, display: "inline-block" }}
          />
          {eyebrow}
        </span>
      )}
      <Title
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "var(--display-section)",
          fontWeight: "var(--weight-extrabold)",
          lineHeight: "var(--leading-tight)",
          letterSpacing: "var(--tracking-tight)",
          color: isInverse ? "var(--cream-50)" : "var(--text-strong)",
          margin: 0,
          maxWidth,
        }}
      >
        {title}
      </Title>
      {lead && (
        <p
          style={{
            fontSize: "var(--text-md)",
            lineHeight: "var(--leading-relaxed)",
            color: isInverse ? "var(--text-inverse-muted)" : "var(--text-muted)",
            margin: 0,
            maxWidth,
          }}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
