import React from "react";

/**
 * Select — labelled native dropdown styled to match Input, with chevron.
 * Pass options as [{value, label}] or plain strings.
 */
export function Select({ label, id, options = [], value, defaultValue, onChange, hint, required = false, disabled = false }) {
  const selId = id || `bc-sel-${Math.random().toString(36).slice(2, 8)}`;
  const opts = options.map((o) => (typeof o === "string" ? { value: o, label: o } : o));

  return (
    <div className="bc-field" style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
      {label && (
        <label
          htmlFor={selId}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-sm)",
            fontWeight: "var(--weight-semibold)",
            color: "var(--text-strong)",
          }}
        >
          {label}
          {required && <span style={{ color: "var(--danger)", marginLeft: 3 }}>*</span>}
        </label>
      )}
      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        <select
          id={selId}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          disabled={disabled}
          style={{
            width: "100%",
            appearance: "none",
            WebkitAppearance: "none",
            padding: "12px 42px 12px 14px",
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-base)",
            color: "var(--text-strong)",
            background: disabled ? "var(--surface-sunken)" : "var(--surface-card)",
            border: "1.5px solid var(--border-default)",
            borderRadius: "var(--radius-md)",
            outline: "none",
            cursor: disabled ? "not-allowed" : "pointer",
            opacity: disabled ? 0.6 : 1,
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "var(--primary)";
            e.currentTarget.style.boxShadow = "0 0 0 3px var(--indigo-50)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "var(--border-default)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          {opts.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <i
          data-lucide="chevron-down"
          style={{ position: "absolute", right: 14, width: 18, height: 18, color: "var(--text-muted)", pointerEvents: "none" }}
        />
      </div>
      {hint && <span style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{hint}</span>}
    </div>
  );
}
