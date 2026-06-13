import React from "react";

/**
 * Avatar — circular user image with initials fallback and optional ring.
 * Used in testimonials, forum threads, header account.
 */
export function Avatar({ src, name = "", size = "md", ring = false }) {
  const dim = { xs: 28, sm: 36, md: 48, lg: 64, xl: 88 }[size] || 48;
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <span
      className="bc-avatar"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: dim,
        height: dim,
        flex: "0 0 auto",
        borderRadius: "var(--radius-pill)",
        overflow: "hidden",
        background: "var(--indigo-100)",
        color: "var(--indigo-700)",
        fontFamily: "var(--font-display)",
        fontWeight: "var(--weight-bold)",
        fontSize: dim * 0.38,
        letterSpacing: "-0.01em",
        boxShadow: ring ? "0 0 0 3px var(--surface-card), 0 0 0 5px var(--gold-400)" : "none",
        userSelect: "none",
      }}
      title={name}
    >
      {src ? (
        <img
          src={src}
          alt={name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        initials || "?"
      )}
    </span>
  );
}
