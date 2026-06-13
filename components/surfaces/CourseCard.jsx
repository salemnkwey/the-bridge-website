import React from "react";
import { Badge } from "../core/Badge.jsx";

/**
 * CourseCard — formation preview: image header with level + price badges,
 * title, short description, meta row (durée, leçons), and a CTA affordance.
 */
export function CourseCard({
  image,
  level = "A1",
  free = true,
  price,
  category,
  title,
  description,
  duration = "6 semaines",
  lessons = 24,
  href = "#",
  onClick,
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="bc-course-card"
      style={{
        display: "flex",
        flexDirection: "column",
        background: "var(--surface-card)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        boxShadow: "var(--shadow-sm)",
        textDecoration: "none",
        color: "inherit",
        height: "100%",
        transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "var(--shadow-xl)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "var(--shadow-sm)";
      }}
    >
      <div style={{ position: "relative", aspectRatio: "16 / 10", overflow: "hidden" }}>
        <img
          src={image}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", top: 12, left: 12, display: "flex", gap: 8 }}>
          {free ? (
            <Badge tone="accent" variant="solid">Gratuit</Badge>
          ) : (
            <Badge tone="navy" variant="solid">{price}</Badge>
          )}
          <Badge tone="navy" variant="soft">Niveau {level}</Badge>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", padding: "var(--space-6)", flex: 1 }}>
        {category && (
          <span style={{ fontSize: "var(--text-xs)", fontWeight: "var(--weight-bold)", letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-accent)" }}>
            {category}
          </span>
        )}
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", fontWeight: "var(--weight-bold)", color: "var(--text-strong)", margin: 0, lineHeight: "var(--leading-snug)" }}>
          {title}
        </h3>
        <p style={{ fontSize: "var(--text-base)", lineHeight: "var(--leading-relaxed)", color: "var(--text-muted)", margin: 0, flex: 1 }}>
          {description}
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", marginTop: "var(--space-2)", paddingTop: "var(--space-4)", borderTop: "1px solid var(--divider)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", color: "var(--text-muted)", fontSize: "var(--text-sm)", fontWeight: "var(--weight-medium)" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <i data-lucide="clock" style={{ width: 16, height: 16 }} /> {duration}
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <i data-lucide="book-open" style={{ width: 16, height: 16 }} /> {lessons} leçons
            </span>
          </div>
          <span className="bc-course-cta" style={{ display: "inline-flex", alignItems: "center", gap: 7, color: "var(--primary)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-base)" }}>
            Voir le cours <i data-lucide="arrow-right" style={{ width: 17, height: 17 }} />
          </span>
        </div>
      </div>
    </a>
  );
}
