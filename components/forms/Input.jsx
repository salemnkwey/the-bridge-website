import React from "react";

/**
 * Input — labelled text field with optional leading Lucide icon, hint and error.
 * Self-contained: renders its own <label> when `label` is provided.
 */
export function Input({
  label,
  id,
  type = "text",
  placeholder,
  icon,
  hint,
  error,
  value,
  defaultValue,
  onChange,
  required = false,
  disabled = false,
  ...rest
}) {
  const inputId = id || `bc-input-${Math.random().toString(36).slice(2, 8)}`;
  const borderColor = error ? "var(--danger)" : "var(--border-default)";

  return (
    <div className="bc-field" style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
      {label && (
        <label
          htmlFor={inputId}
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
        {icon && (
          <i
            data-lucide={icon}
            style={{
              position: "absolute",
              left: 14,
              width: 18,
              height: 18,
              color: "var(--text-muted)",
              pointerEvents: "none",
            }}
          />
        )}
        <input
          id={inputId}
          type={type}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          required={required}
          disabled={disabled}
          style={{
            width: "100%",
            padding: icon ? "12px 14px 12px 42px" : "12px 14px",
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-base)",
            color: "var(--text-strong)",
            background: disabled ? "var(--surface-sunken)" : "var(--surface-card)",
            border: `1.5px solid ${borderColor}`,
            borderRadius: "var(--radius-md)",
            outline: "none",
            transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
            opacity: disabled ? 0.6 : 1,
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = error ? "var(--danger)" : "var(--primary)";
            e.currentTarget.style.boxShadow = `0 0 0 3px ${
              error ? "var(--danger-soft)" : "var(--indigo-50)"
            }`;
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = borderColor;
            e.currentTarget.style.boxShadow = "none";
          }}
          {...rest}
        />
      </div>
      {(hint || error) && (
        <span
          style={{
            fontSize: "var(--text-sm)",
            color: error ? "var(--danger)" : "var(--text-muted)",
          }}
        >
          {error || hint}
        </span>
      )}
    </div>
  );
}
