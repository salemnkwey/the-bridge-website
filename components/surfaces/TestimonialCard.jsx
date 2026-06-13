import React from "react";
import { Avatar } from "../core/Avatar.jsx";

/**
 * TestimonialCard — student review: star rating, quote, avatar + name + role.
 */
export function TestimonialCard({ quote, name, role, photo, rating = 5, tone = "paper" }) {
  const isInverse = tone === "navy";
  return (
    <figure
      className="bc-testimonial"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)",
        margin: 0,
        padding: "var(--space-8)",
        background: isInverse ? "var(--surface-inverse-2)" : "var(--surface-card)",
        border: isInverse ? "1px solid var(--border-inverse)" : "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-lg)",
        boxShadow: isInverse ? "var(--shadow-lg)" : "var(--shadow-sm)",
        height: "100%",
      }}
    >
      <div style={{ display: "flex", gap: 3, color: "var(--gold-500)" }} aria-label={`${rating} sur 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <i
            key={i}
            data-lucide="star"
            style={{ width: 18, height: 18, fill: i < rating ? "var(--gold-500)" : "none", color: i < rating ? "var(--gold-500)" : "var(--ink-300)" }}
          />
        ))}
      </div>
      <blockquote
        style={{
          margin: 0,
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-md)",
          lineHeight: "var(--leading-relaxed)",
          color: isInverse ? "var(--cream-50)" : "var(--text-body)",
          flex: 1,
        }}
      >
        « {quote} »
      </blockquote>
      <figcaption style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
        <Avatar src={photo} name={name} size="md" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-bold)", fontSize: "var(--text-base)", color: isInverse ? "var(--cream-50)" : "var(--text-strong)" }}>
            {name}
          </span>
          <span style={{ fontSize: "var(--text-sm)", color: isInverse ? "var(--text-inverse-muted)" : "var(--text-muted)" }}>
            {role}
          </span>
        </div>
      </figcaption>
    </figure>
  );
}
