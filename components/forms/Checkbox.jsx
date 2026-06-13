import React from "react";

/**
 * Checkbox — labelled checkbox with the brand gold check.
 * Controlled via `checked` + `onChange`, or uncontrolled with `defaultChecked`.
 */
export function Checkbox({ label, checked, defaultChecked, onChange, id, disabled = false }) {
  const cbId = id || `bc-cb-${Math.random().toString(36).slice(2, 8)}`;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;

  return (
    <label
      htmlFor={cbId}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-3)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.55 : 1,
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-base)",
        color: "var(--text-body)",
      }}
    >
      <input
        id={cbId}
        type="checkbox"
        checked={on}
        disabled={disabled}
        onChange={(e) => {
          if (!isControlled) setInternal(e.target.checked);
          onChange && onChange(e);
        }}
        style={{ position: "absolute", opacity: 0, width: 1, height: 1 }}
      />
      <span
        aria-hidden="true"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 22,
          height: 22,
          flex: "0 0 auto",
          borderRadius: "6px",
          border: `1.5px solid ${on ? "var(--accent)" : "var(--border-strong)"}`,
          background: on ? "var(--accent)" : "var(--surface-card)",
          color: "var(--indigo-900)",
          transition: "all var(--dur-fast) var(--ease-out)",
        }}
      >
        {on && <i data-lucide="check" style={{ width: 15, height: 15, strokeWidth: 3 }} />}
      </span>
      {label}
    </label>
  );
}
