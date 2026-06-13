/* @ds-bundle: {"format":3,"namespace":"TheBridgeCenterDesignSystem_13a399","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"CourseCard","sourcePath":"components/surfaces/CourseCard.jsx"},{"name":"FeatureCard","sourcePath":"components/surfaces/FeatureCard.jsx"},{"name":"SectionHeading","sourcePath":"components/surfaces/SectionHeading.jsx"},{"name":"TestimonialCard","sourcePath":"components/surfaces/TestimonialCard.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"818820cb7494","components/core/Badge.jsx":"5ecb1255c344","components/core/Button.jsx":"dcd34e19eb97","components/core/IconButton.jsx":"db3747165456","components/core/Stat.jsx":"f497a9b76078","components/forms/Checkbox.jsx":"f82e550cda05","components/forms/Input.jsx":"575435db6779","components/forms/Select.jsx":"8fc758c2e3cf","components/surfaces/Card.jsx":"3657860569ef","components/surfaces/CourseCard.jsx":"18a0666ec88e","components/surfaces/FeatureCard.jsx":"3ae3364a3ffc","components/surfaces/SectionHeading.jsx":"1f213df169ad","components/surfaces/TestimonialCard.jsx":"612050a3f0ca","ui_kits/website/accueil-sections.jsx":"0ac68fa2e12b","ui_kits/website/accueil-sections2.jsx":"f5e910a3386a","ui_kits/website/app.jsx":"b7f21fd24be9","ui_kits/website/apropos-app.jsx":"bc10ddd2680e","ui_kits/website/apropos.jsx":"d441bb15c62b","ui_kits/website/auth.jsx":"77089776a0ff","ui_kits/website/blog-app.jsx":"df06be2ee503","ui_kits/website/blog.jsx":"ea44f4b59da4","ui_kits/website/bridge-kit.jsx":"047f94634b93","ui_kits/website/centres-app.jsx":"f712b8952028","ui_kits/website/centres.jsx":"d3e0bc890ee4","ui_kits/website/chrome.jsx":"7b4dc9c76185","ui_kits/website/contact-app.jsx":"53e298c4210d","ui_kits/website/contact.jsx":"cebf94e20b3b","ui_kits/website/formations-app.jsx":"a8b025b8503c","ui_kits/website/formations.jsx":"9a4598de1e60","ui_kits/website/forum-app.jsx":"16da17bef875","ui_kits/website/forum.jsx":"8a52df60c17b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TheBridgeCenterDesignSystem_13a399 = window.TheBridgeCenterDesignSystem_13a399 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
/**
 * Avatar — circular user image with initials fallback and optional ring.
 * Used in testimonials, forum threads, header account.
 */
function Avatar({
  src,
  name = "",
  size = "md",
  ring = false
}) {
  const dim = {
    xs: 28,
    sm: 36,
    md: 48,
    lg: 64,
    xl: 88
  }[size] || 48;
  const initials = name.split(" ").filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("span", {
    className: "bc-avatar",
    style: {
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
      userSelect: "none"
    },
    title: name
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials || "?");
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
/**
 * Badge — small status / category pill. Tones map to brand + semantic colors.
 * Use for "Gratuit", CEFR levels, "Live", "Nouveau", categories.
 */
function Badge({
  children,
  tone = "accent",
  variant = "soft",
  icon,
  size = "md"
}) {
  const tones = {
    accent: {
      soft: ["var(--gold-100)", "var(--gold-700)"],
      solid: ["var(--gold-500)", "var(--indigo-900)"]
    },
    navy: {
      soft: ["var(--indigo-50)", "var(--indigo-700)"],
      solid: ["var(--indigo-700)", "var(--cream-50)"]
    },
    teal: {
      soft: ["var(--teal-50)", "var(--teal-700)"],
      solid: ["var(--teal-500)", "var(--white)"]
    },
    success: {
      soft: ["var(--success-soft)", "var(--green-500)"],
      solid: ["var(--green-500)", "var(--white)"]
    },
    danger: {
      soft: ["var(--danger-soft)", "var(--red-500)"],
      solid: ["var(--red-500)", "var(--white)"]
    },
    neutral: {
      soft: ["var(--cream-200)", "var(--ink-700)"],
      solid: ["var(--ink-700)", "var(--cream-50)"]
    }
  };
  const [bg, fg] = (tones[tone] || tones.accent)[variant];
  const pad = size === "sm" ? "3px 9px" : "5px 12px";
  const fs = size === "sm" ? "var(--text-xs)" : "var(--text-sm)";
  return /*#__PURE__*/React.createElement("span", {
    className: `bc-badge bc-badge--${tone}`,
    style: {
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
      whiteSpace: "nowrap"
    }
  }, icon && /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 13,
      height: 13
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — The Bridge Center primary action control.
 * Variants: primary (navy), accent (gold), secondary (outline), ghost, link.
 * Sizes: sm | md | lg. Optional Lucide icon name on either side.
 * Call lucide.createIcons() after mount to hydrate icons.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  full = false,
  disabled = false,
  as = "button",
  href,
  onClick,
  type = "button",
  ...rest
}) {
  const Tag = href ? "a" : as;
  const pad = {
    sm: "8px 16px",
    md: "12px 22px",
    lg: "16px 30px"
  }[size];
  const fontSize = {
    sm: "var(--text-sm)",
    md: "var(--text-base)",
    lg: "var(--text-md)"
  }[size];
  const palettes = {
    primary: {
      background: "var(--primary)",
      color: "var(--cream-50)",
      border: "1.5px solid transparent",
      shadow: "var(--shadow-md)"
    },
    accent: {
      background: "var(--accent)",
      color: "var(--indigo-900)",
      border: "1.5px solid transparent",
      shadow: "var(--shadow-accent)"
    },
    secondary: {
      background: "var(--surface-card)",
      color: "var(--primary)",
      border: "1.5px solid var(--border-default)",
      shadow: "var(--shadow-xs)"
    },
    ghost: {
      background: "transparent",
      color: "var(--primary)",
      border: "1.5px solid transparent",
      shadow: "none"
    },
    inverse: {
      background: "var(--cream-50)",
      color: "var(--indigo-900)",
      border: "1.5px solid transparent",
      shadow: "var(--shadow-lg)"
    },
    link: {
      background: "transparent",
      color: "var(--text-link)",
      border: "none",
      shadow: "none"
    }
  };
  const p = palettes[variant] || palettes.primary;
  const style = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.55em",
    width: full ? "100%" : "auto",
    padding: variant === "link" ? "0" : pad,
    fontFamily: "var(--font-body)",
    fontSize,
    fontWeight: "var(--weight-semibold)",
    lineHeight: 1.1,
    letterSpacing: "0.005em",
    textDecoration: variant === "link" ? "underline" : "none",
    textUnderlineOffset: "3px",
    color: p.color,
    background: p.background,
    border: p.border,
    borderRadius: variant === "link" ? "0" : "var(--radius-pill)",
    boxShadow: disabled ? "none" : p.shadow,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)",
    whiteSpace: "nowrap",
    WebkitTapHighlightColor: "transparent"
  };
  const iconSize = size === "lg" ? 20 : size === "sm" ? 16 : 18;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: `bc-btn bc-btn--${variant}`,
    style: style,
    href: href,
    type: Tag === "button" ? type : undefined,
    disabled: Tag === "button" ? disabled : undefined,
    "aria-disabled": disabled || undefined,
    onClick: disabled ? e => e.preventDefault() : onClick,
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.97)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "";
    },
    onMouseEnter: e => {
      if (disabled || variant === "link") return;
      e.currentTarget.style.transform = "translateY(-2px)";
      e.currentTarget.style.boxShadow = "var(--shadow-lg)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "";
      e.currentTarget.style.boxShadow = disabled ? "none" : p.shadow;
    }
  }, rest), icon && /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: iconSize,
      height: iconSize
    }
  }), children, iconRight && /*#__PURE__*/React.createElement("i", {
    "data-lucide": iconRight,
    style: {
      width: iconSize,
      height: iconSize
    }
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — a compact square/circle button wrapping a single Lucide icon.
 * Used for header actions, carousel arrows, close buttons, social links.
 */
function IconButton({
  icon,
  label,
  variant = "secondary",
  size = "md",
  shape = "circle",
  disabled = false,
  href,
  onClick,
  ...rest
}) {
  const Tag = href ? "a" : "button";
  const dim = {
    sm: 36,
    md: 44,
    lg: 52
  }[size];
  const iconSize = {
    sm: 16,
    md: 20,
    lg: 24
  }[size];
  const palettes = {
    primary: {
      background: "var(--primary)",
      color: "var(--cream-50)",
      border: "none"
    },
    accent: {
      background: "var(--accent)",
      color: "var(--indigo-900)",
      border: "none"
    },
    secondary: {
      background: "var(--surface-card)",
      color: "var(--primary)",
      border: "1.5px solid var(--border-default)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-body)",
      border: "none"
    },
    inverse: {
      background: "color-mix(in srgb, var(--cream-50) 14%, transparent)",
      color: "var(--cream-50)",
      border: "1.5px solid var(--border-inverse)"
    }
  };
  const p = palettes[variant] || palettes.secondary;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: `bc-iconbtn bc-iconbtn--${variant}`,
    href: href,
    "aria-label": label,
    title: label,
    disabled: Tag === "button" ? disabled : undefined,
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: dim,
      height: dim,
      flex: "0 0 auto",
      borderRadius: shape === "circle" ? "var(--radius-pill)" : "var(--radius-md)",
      background: p.background,
      color: p.color,
      border: p.border,
      boxShadow: variant === "secondary" ? "var(--shadow-xs)" : "none",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "transform var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
      WebkitTapHighlightColor: "transparent"
    },
    onMouseEnter: e => {
      if (disabled) return;
      e.currentTarget.style.transform = "translateY(-2px)";
      e.currentTarget.style.boxShadow = "var(--shadow-md)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "";
      e.currentTarget.style.boxShadow = variant === "secondary" ? "var(--shadow-xs)" : "none";
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.94)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "translateY(-2px)";
    }
  }, rest), /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: iconSize,
      height: iconSize
    }
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
/**
 * Stat — a big display number with a label, for stat bands.
 * On dark surfaces pass tone="inverse". Optional suffix (%, +) and icon.
 */
function Stat({
  value,
  suffix,
  label,
  icon,
  tone = "default",
  align = "center"
}) {
  const isInverse = tone === "inverse";
  const numColor = "var(--accent)";
  const labelColor = isInverse ? "var(--text-inverse-muted)" : "var(--text-muted)";
  return /*#__PURE__*/React.createElement("div", {
    className: "bc-stat",
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align,
      gap: "var(--space-2)"
    }
  }, icon && /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 26,
      height: 26,
      color: "var(--accent)",
      marginBottom: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-extrabold)",
      fontSize: "var(--text-4xl)",
      lineHeight: 1,
      letterSpacing: "var(--tracking-tight)",
      color: numColor,
      display: "flex",
      alignItems: "baseline"
    }
  }, value, suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.5em",
      marginLeft: "0.1em",
      fontWeight: "var(--weight-bold)"
    }
  }, suffix)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)",
      letterSpacing: "0.02em",
      color: labelColor,
      maxWidth: "16ch"
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/**
 * Checkbox — labelled checkbox with the brand gold check.
 * Controlled via `checked` + `onChange`, or uncontrolled with `defaultChecked`.
 */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  id,
  disabled = false
}) {
  const cbId = id || `bc-cb-${Math.random().toString(36).slice(2, 8)}`;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.55 : 1,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-base)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: cbId,
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: e => {
      if (!isControlled) setInternal(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
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
      transition: "all var(--dur-fast) var(--ease-out)"
    }
  }, on && /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      width: 15,
      height: 15,
      strokeWidth: 3
    }
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — labelled text field with optional leading Lucide icon, hint and error.
 * Self-contained: renders its own <label> when `label` is provided.
 */
function Input({
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
  return /*#__PURE__*/React.createElement("div", {
    className: "bc-field",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-strong)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--danger)",
      marginLeft: 3
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, icon && /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      position: "absolute",
      left: 14,
      width: 18,
      height: 18,
      color: "var(--text-muted)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    required: required,
    disabled: disabled,
    style: {
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
      opacity: disabled ? 0.6 : 1
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = error ? "var(--danger)" : "var(--primary)";
      e.currentTarget.style.boxShadow = `0 0 0 3px ${error ? "var(--danger-soft)" : "var(--indigo-50)"}`;
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = borderColor;
      e.currentTarget.style.boxShadow = "none";
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: error ? "var(--danger)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
/**
 * Select — labelled native dropdown styled to match Input, with chevron.
 * Pass options as [{value, label}] or plain strings.
 */
function Select({
  label,
  id,
  options = [],
  value,
  defaultValue,
  onChange,
  hint,
  required = false,
  disabled = false
}) {
  const selId = id || `bc-sel-${Math.random().toString(36).slice(2, 8)}`;
  const opts = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    className: "bc-field",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-strong)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--danger)",
      marginLeft: 3
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("select", {
    id: selId,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    style: {
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
      opacity: disabled ? 0.6 : 1
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = "var(--primary)";
      e.currentTarget.style.boxShadow = "0 0 0 3px var(--indigo-50)";
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = "var(--border-default)";
      e.currentTarget.style.boxShadow = "none";
    }
  }, opts.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-down",
    style: {
      position: "absolute",
      right: 14,
      width: 18,
      height: 18,
      color: "var(--text-muted)",
      pointerEvents: "none"
    }
  })), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — generic rounded surface container with optional hover lift.
 * Tones: paper (white), cream, navy (inverse), outline.
 */
function Card({
  children,
  tone = "paper",
  pad = "lg",
  hover = false,
  radius = "lg",
  style = {},
  ...rest
}) {
  const tones = {
    paper: {
      background: "var(--surface-card)",
      color: "var(--text-body)",
      border: "1px solid var(--border-subtle)",
      shadow: "var(--shadow-sm)"
    },
    cream: {
      background: "var(--surface-raised)",
      color: "var(--text-body)",
      border: "1px solid var(--cream-300)",
      shadow: "none"
    },
    navy: {
      background: "var(--surface-inverse)",
      color: "var(--text-inverse)",
      border: "1px solid var(--border-inverse)",
      shadow: "var(--shadow-lg)"
    },
    outline: {
      background: "transparent",
      color: "var(--text-body)",
      border: "1.5px solid var(--border-default)",
      shadow: "none"
    }
  };
  const t = tones[tone] || tones.paper;
  const pads = {
    none: 0,
    sm: "var(--space-4)",
    md: "var(--space-6)",
    lg: "var(--space-8)"
  };
  const radii = {
    md: "var(--radius-md)",
    lg: "var(--radius-lg)",
    xl: "var(--radius-xl)",
    "2xl": "var(--radius-2xl)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `bc-card bc-card--${tone}`,
    style: {
      background: t.background,
      color: t.color,
      border: t.border,
      borderRadius: radii[radius] || radii.lg,
      boxShadow: t.shadow,
      padding: pads[pad] ?? pads.lg,
      transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
      ...style
    },
    onMouseEnter: hover ? e => {
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.boxShadow = "var(--shadow-lg)";
    } : undefined,
    onMouseLeave: hover ? e => {
      e.currentTarget.style.transform = "";
      e.currentTarget.style.boxShadow = t.shadow;
    } : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/CourseCard.jsx
try { (() => {
/**
 * CourseCard — formation preview: image header with level + price badges,
 * title, short description, meta row (durée, leçons), and a CTA affordance.
 */
function CourseCard({
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
  onClick
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    className: "bc-course-card",
    style: {
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
      transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)"
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = "translateY(-6px)";
      e.currentTarget.style.boxShadow = "var(--shadow-xl)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "";
      e.currentTarget.style.boxShadow = "var(--shadow-sm)";
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "16 / 10",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 12,
      left: 12,
      display: "flex",
      gap: 8
    }
  }, free ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "accent",
    variant: "solid"
  }, "Gratuit") : /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "navy",
    variant: "solid"
  }, price), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "navy",
    variant: "soft"
  }, "Niveau ", level))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      padding: "var(--space-6)",
      flex: 1
    }
  }, category && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--text-accent)"
    }
  }, category), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-xl)",
      fontWeight: "var(--weight-bold)",
      color: "var(--text-strong)",
      margin: 0,
      lineHeight: "var(--leading-snug)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-base)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-muted)",
      margin: 0,
      flex: 1
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      marginTop: "var(--space-2)",
      paddingTop: "var(--space-4)",
      borderTop: "1px solid var(--divider)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      color: "var(--text-muted)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "clock",
    style: {
      width: 16,
      height: 16
    }
  }), " ", duration), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "book-open",
    style: {
      width: 16,
      height: 16
    }
  }), " ", lessons, " le\xE7ons")), /*#__PURE__*/React.createElement("span", {
    className: "bc-course-cta",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      color: "var(--primary)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--text-base)"
    }
  }, "Voir le cours ", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right",
    style: {
      width: 17,
      height: 17
    }
  })))));
}
Object.assign(__ds_scope, { CourseCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/CourseCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/FeatureCard.jsx
try { (() => {
/**
 * FeatureCard — icon + title + description for "Pourquoi nous" / méthode grids.
 * The icon sits in a soft tinted tile. Optional accent tone.
 */
function FeatureCard({
  icon,
  title,
  children,
  tone = "gold"
}) {
  const tints = {
    gold: ["var(--gold-100)", "var(--gold-700)"],
    navy: ["var(--indigo-50)", "var(--indigo-700)"],
    teal: ["var(--teal-50)", "var(--teal-600)"]
  };
  const [tileBg, tileFg] = tints[tone] || tints.gold;
  return /*#__PURE__*/React.createElement("div", {
    className: "bc-feature-card",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      padding: "var(--space-6)",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-sm)",
      height: "100%",
      transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)"
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.boxShadow = "var(--shadow-lg)";
      e.currentTarget.style.borderColor = "var(--gold-300)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "";
      e.currentTarget.style.boxShadow = "var(--shadow-sm)";
      e.currentTarget.style.borderColor = "var(--border-subtle)";
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 52,
      height: 52,
      borderRadius: "var(--radius-md)",
      background: tileBg,
      color: tileFg
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 26,
      height: 26
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-xl)",
      fontWeight: "var(--weight-bold)",
      color: "var(--text-strong)",
      margin: 0,
      letterSpacing: "var(--tracking-tight)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-base)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-muted)",
      margin: 0
    }
  }, children));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/SectionHeading.jsx
try { (() => {
/**
 * SectionHeading — eyebrow + title + optional lead paragraph.
 * The canonical way every page section opens. Centered or left aligned.
 */
function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  tone = "default",
  maxWidth = "46ch",
  as = "h2"
}) {
  const Title = as;
  const isInverse = tone === "inverse";
  return /*#__PURE__*/React.createElement("div", {
    className: "bc-section-heading",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align,
      marginInline: align === "center" ? "auto" : 0
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: isInverse ? "var(--gold-400)" : "var(--text-accent)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 22,
      height: 2,
      background: "currentColor",
      borderRadius: 2,
      display: "inline-block"
    }
  }), eyebrow), /*#__PURE__*/React.createElement(Title, {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--display-section)",
      fontWeight: "var(--weight-extrabold)",
      lineHeight: "var(--leading-tight)",
      letterSpacing: "var(--tracking-tight)",
      color: isInverse ? "var(--cream-50)" : "var(--text-strong)",
      margin: 0,
      maxWidth
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-md)",
      lineHeight: "var(--leading-relaxed)",
      color: isInverse ? "var(--text-inverse-muted)" : "var(--text-muted)",
      margin: 0,
      maxWidth
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/TestimonialCard.jsx
try { (() => {
/**
 * TestimonialCard — student review: star rating, quote, avatar + name + role.
 */
function TestimonialCard({
  quote,
  name,
  role,
  photo,
  rating = 5,
  tone = "paper"
}) {
  const isInverse = tone === "navy";
  return /*#__PURE__*/React.createElement("figure", {
    className: "bc-testimonial",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      margin: 0,
      padding: "var(--space-8)",
      background: isInverse ? "var(--surface-inverse-2)" : "var(--surface-card)",
      border: isInverse ? "1px solid var(--border-inverse)" : "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: isInverse ? "var(--shadow-lg)" : "var(--shadow-sm)",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 3,
      color: "var(--gold-500)"
    },
    "aria-label": `${rating} sur 5`
  }, Array.from({
    length: 5
  }).map((_, i) => /*#__PURE__*/React.createElement("i", {
    key: i,
    "data-lucide": "star",
    style: {
      width: 18,
      height: 18,
      fill: i < rating ? "var(--gold-500)" : "none",
      color: i < rating ? "var(--gold-500)" : "var(--ink-300)"
    }
  }))), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-md)",
      lineHeight: "var(--leading-relaxed)",
      color: isInverse ? "var(--cream-50)" : "var(--text-body)",
      flex: 1
    }
  }, "\xAB ", quote, " \xBB"), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    src: photo,
    name: name,
    size: "md"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--text-base)",
      color: isInverse ? "var(--cream-50)" : "var(--text-strong)"
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: isInverse ? "var(--text-inverse-muted)" : "var(--text-muted)"
    }
  }, role))));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/accueil-sections.jsx
try { (() => {
/* The Bridge Center — Accueil sections (part 1) */
const {
  useEffect: useEff1,
  useRef: useRef1,
  useState: useState1
} = React;

/* Animated count-up, triggers when scrolled into view */
function CountUp({
  to,
  duration = 1700,
  format = n => n.toLocaleString("fr-FR")
}) {
  const ref = useRef1(null);
  const [val, setVal] = useState1(0);
  const [start, setStart] = useState1(false);
  useEff1(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) {
        setStart(true);
        io.disconnect();
      }
    }), {
      threshold: 0.4
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  useEff1(() => {
    if (!start) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVal(to);
      return;
    }
    let raf;
    const t0 = performance.now();
    const tick = t => {
      const p = Math.min(1, (t - t0) / duration);
      const e = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(e * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, to]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref
  }, format(val));
}

/* ---------- HERO ---------- */
function Hero({
  onAuth
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: "relative",
      background: "var(--indigo-950)",
      color: "var(--cream-50)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "url(../../assets/tex-navy.png)",
      backgroundSize: "cover",
      backgroundPosition: "center top",
      opacity: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, color-mix(in srgb,var(--indigo-950) 35%,transparent) 0%, transparent 30%, color-mix(in srgb,var(--indigo-950) 55%,transparent) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "bridge-container",
    style: {
      position: "relative",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bc-hero-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: "var(--space-16)",
      alignItems: "center",
      minHeight: "min(88vh, 820px)",
      paddingTop: "var(--space-16)",
      paddingBottom: "var(--space-20)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)",
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "7px 14px 7px 8px",
      borderRadius: "var(--radius-pill)",
      background: "color-mix(in srgb,var(--cream-50) 10%,transparent)",
      border: "1px solid var(--border-inverse)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)",
      color: "var(--cream-100)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      padding: "3px 9px",
      borderRadius: "var(--radius-pill)",
      background: "var(--gold-500)",
      color: "var(--indigo-900)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-bold)"
    }
  }, "Nouveau"), "Cours en direct chaque semaine sur Google Meet")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--display-hero)",
      fontWeight: "var(--weight-extrabold)",
      lineHeight: 1.02,
      letterSpacing: "var(--tracking-tighter)",
      color: "var(--cream-50)",
      margin: 0
    }
  }, "Traversez vers", /*#__PURE__*/React.createElement("br", null), "l'anglais, \xE0", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-400)",
      position: "relative"
    }
  }, "votre rythme."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 160
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-lg)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--indigo-100)",
      margin: 0,
      maxWidth: 540
    }
  }, "Du niveau ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--cream-50)"
    }
  }, "A1 au C2"), " \u2014 des cours en ligne, des s\xE9ances en direct et une communaut\xE9 qui vous accompagne, o\xF9 que vous soyez dans le monde, de la premi\xE8re le\xE7on jusqu'au certificat.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      fontSize: "var(--text-sm)",
      fontWeight: 600,
      color: "var(--indigo-200)",
      padding: "7px 14px",
      borderRadius: "var(--radius-pill)",
      background: "color-mix(in srgb, var(--cream-50) 8%, transparent)",
      border: "1px solid var(--border-inverse)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map-pin",
    style: {
      width: 15,
      height: 15,
      color: "var(--gold-400)",
      flex: "0 0 auto"
    }
  }), "Pr\xE9sents \xE0 Kinshasa \xB7 En ligne partout dans le monde")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240,
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 14,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => onAuth("signup")
  }, "Commencer gratuitement"), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse-ghost",
    size: "lg",
    icon: "compass",
    href: "formations.html"
  }, "D\xE9couvrir les formations")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 320,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex"
    }
  }, ["GM", "JL", "SK", "PB"].map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      width: 38,
      height: 38,
      borderRadius: "var(--radius-pill)",
      background: ["var(--gold-400)", "var(--teal-500)", "var(--indigo-400)", "var(--gold-600)"][i],
      color: "var(--indigo-950)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 13,
      border: "2px solid var(--indigo-950)",
      marginLeft: i ? -12 : 0
    }
  }, t))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--indigo-100)"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--cream-50)"
    }
  }, "2 400+ \xE9tudiants"), " apprennent d\xE9j\xE0 avec nous, sur 4 continents.", /*#__PURE__*/React.createElement("br", null), "Sans carte bancaire \u2014 commencez en 2 minutes."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200,
    className: "bc-hero-visual",
    style: {
      position: "relative",
      height: "100%",
      minHeight: 420,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "min(420px, 100%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "color-mix(in srgb,var(--cream-50) 96%, transparent)",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-xl)",
      padding: "var(--space-6)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontSize: "var(--text-sm)",
      fontWeight: 700,
      color: "var(--red-500)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: "50%",
      background: "var(--red-500)",
      boxShadow: "0 0 0 4px var(--danger-soft)"
    }
  }), "En direct"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, "18:30 \xB7 14 places")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      aspectRatio: "16/9",
      backgroundImage: "url(../../assets/tex-dusk.png)",
      backgroundSize: "cover",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 56,
      borderRadius: "50%",
      background: "color-mix(in srgb,var(--cream-50) 92%,transparent)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--indigo-800)",
      boxShadow: "var(--shadow-md)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "play",
    style: {
      width: 24,
      height: 24,
      fill: "var(--indigo-800)"
    }
  }))), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-lg)",
      margin: "14px 0 4px",
      color: "var(--text-strong)"
    }
  }, "Conversation B1 \u2014 Parler de son travail"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      margin: "0 0 14px"
    }
  }, "S\xE9ance live avec Esther Nkanga \xB7 Formatrice"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 8,
      borderRadius: 999,
      background: "var(--cream-200)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "68%",
      height: "100%",
      borderRadius: 999,
      background: "linear-gradient(90deg,var(--gold-500),var(--gold-400))"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      fontWeight: 700,
      color: "var(--text-accent)"
    }
  }, "68 %"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -22,
      left: -26,
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)",
      padding: "12px 16px",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: "var(--radius-md)",
      background: "var(--teal-50)",
      color: "var(--teal-600)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "award",
    style: {
      width: 22,
      height: 22
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 18,
      color: "var(--text-strong)",
      lineHeight: 1
    }
  }, "Certificat"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, "reconnu, \xE0 chaque niveau"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: -24,
      right: -22,
      background: "var(--indigo-800)",
      color: "var(--cream-50)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)",
      padding: "12px 16px",
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 5
    }
  }, ["A1", "A2", "B1", "B2", "C1", "C2"].map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: 700,
      padding: "3px 7px",
      borderRadius: 6,
      background: i < 3 ? "var(--gold-500)" : "color-mix(in srgb,var(--cream-50) 14%,transparent)",
      color: i < 3 ? "var(--indigo-900)" : "var(--indigo-100)"
    }
  }, l))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--indigo-200)"
    }
  }, "Un parcours complet, du d\xE9butant \xE0 l'expert")))))));
}

/* ---------- STATS BAND ---------- */
function StatsBand() {
  const stats = [{
    to: 2400,
    suffix: "+",
    label: "Étudiants accompagnés",
    icon: "users"
  }, {
    to: 94,
    suffix: "%",
    label: "Taux de réussite aux niveaux",
    icon: "trending-up"
  }, {
    to: 6,
    suffix: "",
    label: "Niveaux — du A1 au C2",
    icon: "layers"
  }, {
    to: 3,
    suffix: "",
    label: "Centres physiques à Kinshasa",
    icon: "building-2"
  }, {
    to: 130,
    suffix: "+",
    label: "Pays francophones représentés",
    icon: "globe"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-card)",
      borderBottom: "1px solid var(--divider)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bridge-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bc-stats-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: "var(--space-8)",
      padding: "var(--space-12) 0"
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: s.label,
    delay: i * 90
  }, /*#__PURE__*/React.createElement(Stat, {
    icon: s.icon,
    suffix: s.suffix,
    label: s.label,
    value: /*#__PURE__*/React.createElement(CountUp, {
      to: s.to
    }),
    align: "center"
  }))))));
}

/* ---------- ABOUT PREVIEW ---------- */
function AboutPreview() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bridge-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bc-about-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-16)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-2xl)",
      overflow: "hidden",
      aspectRatio: "4/5",
      backgroundImage: "url(../../assets/tex-indigo.png)",
      backgroundSize: "cover",
      boxShadow: "var(--shadow-xl)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 24,
      left: -24,
      background: "var(--gold-500)",
      color: "var(--indigo-900)",
      borderRadius: "var(--radius-lg)",
      padding: "18px 22px",
      maxWidth: 230,
      boxShadow: "var(--shadow-lg)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "quote",
    style: {
      width: 26,
      height: 26
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--text-md)",
      margin: "8px 0 0",
      lineHeight: 1.3
    }
  }, "Un pont entre votre pr\xE9sent et le monde qui vous attend."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    eyebrow: "Notre mission",
    title: "Relier les francophones au monde anglophone",
    maxWidth: "22ch"
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-md)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-body)",
      margin: 0
    }
  }, "Partout dans le monde, parler anglais ouvre des portes : \xE9tudes, carri\xE8re, voyages, opportunit\xE9s. The Bridge Center existe pour \xE7a \u2014 devenir le ", /*#__PURE__*/React.createElement("strong", null, "pont"), " qui relie votre fran\xE7ais \xE0 l'anglais dont vous r\xEAvez, o\xF9 que vous soyez : en ligne depuis chez vous ou en pr\xE9sentiel dans l'un de nos centres \xE0 Kinshasa.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 180
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-md)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-muted)",
      margin: 0
    }
  }, "N\xE9s \xE0 Kinshasa, nos formateurs congolais et internationaux accompagnent aujourd'hui des apprenants de Dakar \xE0 Montr\xE9al, de Bruxelles \xE0 Abidjan \u2014 en ligne ou dans l'un de nos trois centres en pr\xE9sentiel. Avec une m\xE9thode chaleureuse, exigeante et pens\xE9e pour vous. Parce que ", /*#__PURE__*/React.createElement("em", null, "\xAB if you're rich, be the bridge \xBB"), " \u2014 et la premi\xE8re richesse \xE0 partager, c'est le savoir.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240,
    style: {
      display: "flex",
      gap: 14,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: "arrow-right",
    href: "apropos.html"
  }, "En savoir plus"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: "play",
    href: "apropos.html"
  }, "Voir notre histoire"))))));
}

/* ---------- METHOD / WHY US ---------- */
function Method() {
  const feats = [{
    icon: "layers",
    tone: "navy",
    title: "Du A1 au C2",
    text: "Un parcours complet aligné sur le cadre européen (CECRL), pour progresser étape par étape sans jamais vous perdre."
  }, {
    icon: "blocks",
    tone: "gold",
    title: "Vidéo, audio, texte & quiz",
    text: "Chaque leçon mêle plusieurs formats pour ancrer durablement le vocabulaire et la grammaire."
  }, {
    icon: "video",
    tone: "teal",
    title: "Séances en direct",
    text: "Des sessions live hebdomadaires sur Google Meet pour pratiquer l'oral avec nos formateurs."
  }, {
    icon: "line-chart",
    tone: "navy",
    title: "Suivi de progression",
    text: "Visualisez vos acquis, vos points forts et vos prochaines étapes, leçon après leçon."
  }, {
    icon: "award",
    tone: "gold",
    title: "Certificats reconnus",
    text: "Validez chaque niveau par un certificat à ajouter à votre CV et à partager fièrement."
  }, {
    icon: "users-round",
    tone: "teal",
    title: "Une vraie communauté",
    text: "Un forum d'entraide où poser vos questions et progresser avec d'autres apprenants."
  }, {
    icon: "building-2",
    tone: "navy",
    title: "Cours en présentiel",
    text: "Trois centres à Kinshasa pour apprendre en salle, en petits groupes, dans une ambiance immersive et chaleureuse."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-card)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bridge-container",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Pourquoi The Bridge Center",
    title: "Une fa\xE7on d'apprendre l'anglais pens\xE9e pour vous",
    lead: "Tout ce qu'il faut pour passer de \xAB je comprends quelques mots \xBB \xE0 \xAB je parle avec confiance \xBB."
  })), /*#__PURE__*/React.createElement("div", {
    className: "bc-feature-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--space-6)"
    }
  }, feats.map((f, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: f.title,
    delay: i % 3 * 90
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    icon: f.icon,
    tone: f.tone,
    title: f.title
  }, f.text))))));
}

/* ---------- FEATURED COURSES ---------- */
function FeaturedCourses() {
  const courses = [{
    image: "../../assets/tex-indigo.png",
    level: "A1",
    category: "Anglais général",
    title: "Les fondations — Débuter en anglais",
    description: "Construisez vos premières phrases et gagnez en confiance dès la première semaine.",
    duration: "6 semaines",
    lessons: 24
  }, {
    image: "../../assets/tex-teal.png",
    level: "B1",
    category: "Conversation",
    title: "Parler avec aisance au quotidien",
    description: "Décrochez-vous à l'oral : situations réelles, prononciation et expressions utiles.",
    duration: "8 semaines",
    lessons: 32
  }, {
    image: "../../assets/tex-gold.png",
    level: "B2",
    category: "Anglais professionnel",
    title: "L'anglais pour le travail",
    description: "E-mails, réunions, entretiens : maîtrisez l'anglais qui fait avancer votre carrière.",
    duration: "10 semaines",
    lessons: 40
  }, {
    image: "../../assets/tex-dusk.png",
    level: "C1",
    category: "Préparation TOEFL",
    title: "Réussir le TOEFL avec sérénité",
    description: "Stratégies, examens blancs et accompagnement pour viser le score dont vous avez besoin.",
    duration: "12 semaines",
    lessons: 48
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bridge-container",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 24,
      alignItems: "flex-end",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    eyebrow: "Formations \xE0 la une",
    title: "Commencez par un cours, gratuitement",
    lead: "Toutes nos formations de base sont 100 % gratuites. Choisissez la v\xF4tre et lancez-vous.",
    maxWidth: "34ch"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconRight: "arrow-right",
    href: "formations.html"
  }, "Voir toutes les formations")), /*#__PURE__*/React.createElement("div", {
    className: "bc-course-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "var(--space-6)"
    }
  }, courses.map((c, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: c.title,
    delay: i % 4 * 80
  }, /*#__PURE__*/React.createElement(CourseCard, c))))));
}

/* ---------- HOW IT WORKS ---------- */
function HowItWorks() {
  const steps = [{
    icon: "user-plus",
    n: "01",
    title: "S'inscrire",
    text: "Créez votre compte gratuit en 2 minutes, sans carte bancaire."
  }, {
    icon: "compass",
    n: "02",
    title: "Choisir sa formation",
    text: "Passez un court test de niveau et trouvez le parcours fait pour vous."
  }, {
    icon: "graduation-cap",
    n: "03",
    title: "Apprendre & progresser",
    text: "Avancez à votre rythme entre leçons en ligne et séances en direct."
  }, {
    icon: "award",
    n: "04",
    title: "Obtenir son certificat",
    text: "Validez votre niveau et célébrez le chemin parcouru."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-card)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bridge-container",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Comment \xE7a marche",
    title: "Quatre \xE9tapes pour traverser le pont",
    lead: "De l'inscription au certificat, un chemin clair et encourageant."
  })), /*#__PURE__*/React.createElement("div", {
    className: "bc-steps",
    style: {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bc-steps-line",
    style: {
      position: "absolute",
      top: 34,
      left: "12%",
      right: "12%",
      height: 2,
      background: "repeating-linear-gradient(90deg, var(--gold-400) 0 10px, transparent 10px 18px)",
      zIndex: 0
    }
  }), steps.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: s.title,
    delay: i * 110,
    style: {
      position: "relative",
      zIndex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 70,
      height: 70,
      borderRadius: "var(--radius-pill)",
      background: "var(--surface-card)",
      border: "2px solid var(--gold-400)",
      color: "var(--indigo-800)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "var(--shadow-md)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": s.icon,
    style: {
      width: 28,
      height: 28
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      fontWeight: 700,
      color: "var(--text-accent)",
      letterSpacing: "0.1em"
    }
  }, s.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-xl)",
      margin: 0,
      color: "var(--text-strong)"
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-base)",
      color: "var(--text-muted)",
      margin: 0,
      maxWidth: "24ch",
      lineHeight: "var(--leading-relaxed)"
    }
  }, s.text))))));
}
Object.assign(window, {
  CountUp,
  Hero,
  StatsBand,
  AboutPreview,
  Method,
  FeaturedCourses,
  HowItWorks
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/accueil-sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/accueil-sections2.jsx
try { (() => {
/* The Bridge Center — Accueil sections (part 2) */

/* ---------- TESTIMONIALS ---------- */
function Testimonials() {
  const items = [{
    rating: 5,
    quote: "J'ai gagné en confiance pour parler anglais au travail. Les séances en direct ont tout changé pour moi.",
    name: "Grâce Mukendi",
    role: "Niveau B2 · Kinshasa, RDC"
  }, {
    rating: 5,
    quote: "Partie de zéro, j'ai obtenu mon certificat A2 en trois mois. La méthode est claire et vraiment encourageante.",
    name: "Awa Diallo",
    role: "Niveau A2 · Dakar, Sénégal"
  }, {
    rating: 5,
    quote: "Le forum est une mine d'or. On s'entraide depuis quatre continents — on ne se sent jamais seul dans l'apprentissage.",
    name: "Thomas Lefebvre",
    role: "Niveau B1 · Montréal, Canada"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bridge-container",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Ils ont travers\xE9 le pont",
    title: "Ce que nos \xE9tudiants en disent",
    lead: "Des parcours r\xE9els, des progr\xE8s concrets, une fiert\xE9 partag\xE9e."
  })), /*#__PURE__*/React.createElement("div", {
    className: "bc-testimonial-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--space-6)"
    }
  }, items.map((t, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: t.name,
    delay: i * 100
  }, /*#__PURE__*/React.createElement(TestimonialCard, t))))));
}

/* ---------- BLOG PREVIEW ---------- */
function BlogCard({
  image,
  category,
  title,
  excerpt,
  author,
  date,
  read
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    className: "bc-blog-card",
    onMouseEnter: e => {
      e.currentTarget.style.transform = "translateY(-6px)";
      e.currentTarget.style.boxShadow = "var(--shadow-xl)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "";
      e.currentTarget.style.boxShadow = "var(--shadow-sm)";
    },
    style: {
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
      transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "16/9",
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "var(--space-6)",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "teal",
    variant: "soft"
  }, category), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-xl)",
      margin: 0,
      color: "var(--text-strong)",
      lineHeight: "var(--leading-snug)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-base)",
      color: "var(--text-muted)",
      margin: 0,
      lineHeight: "var(--leading-relaxed)",
      flex: 1
    }
  }, excerpt), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      paddingTop: 12,
      borderTop: "1px solid var(--divider)",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: author,
    size: "xs"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: "var(--text-body)"
    }
  }, author), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, date), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      display: "inline-flex",
      alignItems: "center",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "clock",
    style: {
      width: 14,
      height: 14
    }
  }), read))));
}
function BlogPreview() {
  const posts = [{
    image: "../../assets/tex-teal.png",
    category: "Méthode",
    title: "5 habitudes pour apprendre l'anglais 10 minutes par jour",
    excerpt: "La régularité bat l'intensité. Voici comment transformer de petits moments en vrais progrès.",
    author: "Esther Nkanga",
    date: "4 juin 2026",
    read: "6 min"
  }, {
    image: "../../assets/tex-gold.png",
    category: "Vocabulaire",
    title: "30 expressions anglaises pour briller en réunion",
    excerpt: "Des tournures naturelles pour gagner en assurance quand vous prenez la parole au travail.",
    author: "David Ilunga",
    date: "28 mai 2026",
    read: "8 min"
  }, {
    image: "../../assets/tex-indigo.png",
    category: "Culture",
    title: "Comprendre l'accent : écouter pour mieux parler",
    excerpt: "Films, podcasts, chansons — comment l'écoute active accélère votre compréhension orale.",
    author: "Esther Nkanga",
    date: "21 mai 2026",
    read: "5 min"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-card)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bridge-container",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 24,
      alignItems: "flex-end",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    eyebrow: "Le blog",
    title: "Des conseils pour progresser, chaque semaine",
    lead: "M\xE9thode, vocabulaire et culture \u2014 de quoi nourrir votre apprentissage entre deux le\xE7ons.",
    maxWidth: "34ch"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconRight: "arrow-right",
    href: "blog.html"
  }, "Voir tous les articles")), /*#__PURE__*/React.createElement("div", {
    className: "bc-blog-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--space-6)"
    }
  }, posts.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: p.title,
    delay: i * 100
  }, /*#__PURE__*/React.createElement(BlogCard, p))))));
}

/* ---------- FORUM CTA ---------- */
function ForumCTA() {
  const threads = [{
    icon: "message-circle-question",
    title: "Comment bien utiliser le present perfect ?",
    meta: "32 réponses · Grammaire",
    hot: true
  }, {
    icon: "mic",
    title: "Astuces pour perdre son accent à l'oral",
    meta: "18 réponses · Prononciation",
    hot: false
  }, {
    icon: "briefcase",
    title: "Préparer un entretien d'embauche en anglais",
    meta: "27 réponses · Pro",
    hot: true
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bridge-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bc-forum-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-16)",
      alignItems: "center",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-2xl)",
      padding: "var(--space-12)",
      boxShadow: "var(--shadow-md)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    eyebrow: "Communaut\xE9",
    title: "Vous n'apprenez jamais seul",
    maxWidth: "20ch"
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-md)",
      color: "var(--text-body)",
      margin: 0,
      lineHeight: "var(--leading-relaxed)"
    }
  }, "Rejoignez le forum The Bridge Center : posez vos questions, partagez vos progr\xE8s, trouvez un partenaire de conversation et entraidez-vous avec des centaines d'apprenants francophones.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 180,
    style: {
      display: "flex",
      gap: 14,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: "arrow-right",
    href: "forum.html"
  }, "Rejoindre le forum"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "users",
    style: {
      width: 18,
      height: 18,
      color: "var(--teal-500)"
    }
  }), "+ 1 800 membres actifs"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, threads.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.title,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "16px 18px",
      borderRadius: "var(--radius-md)",
      background: "var(--surface-raised)",
      border: "1px solid var(--cream-300)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      borderRadius: "var(--radius-md)",
      background: "var(--surface-card)",
      color: "var(--indigo-700)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "0 0 auto",
      boxShadow: "var(--shadow-xs)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": t.icon,
    style: {
      width: 20,
      height: 20
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: "var(--text-strong)",
      fontSize: "var(--text-base)"
    }
  }, t.title), t.hot && /*#__PURE__*/React.createElement(Badge, {
    tone: "danger",
    variant: "soft",
    size: "sm"
  }, "Populaire")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, t.meta)), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-right",
    style: {
      width: 18,
      height: 18,
      color: "var(--text-faint)"
    }
  })))))));
}

/* ---------- FINAL CTA ---------- */
function FinalCTA({
  onAuth
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--indigo-950)",
      color: "var(--cream-50)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "url(../../assets/tex-dusk.png)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.96
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, color-mix(in srgb,var(--indigo-950) 30%,transparent), color-mix(in srgb,var(--indigo-950) 55%,transparent))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "bridge-container",
    style: {
      position: "relative",
      zIndex: 2,
      padding: "var(--section-y) 0",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: "var(--gold-400)",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 22,
      height: 2,
      background: "currentColor",
      borderRadius: 2,
      display: "inline-block"
    }
  }), "Votre tour")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--display-hero)",
      fontWeight: "var(--weight-extrabold)",
      lineHeight: 1.04,
      letterSpacing: "var(--tracking-tighter)",
      color: "var(--cream-50)",
      margin: 0,
      maxWidth: "18ch"
    }
  }, "Faites le premier pas vers ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-400)"
    }
  }, "l'anglais"), ", d\xE8s aujourd'hui.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 160
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-lg)",
      color: "var(--indigo-100)",
      margin: 0,
      maxWidth: "44ch"
    }
  }, "Inscription gratuite, sans carte bancaire. Rejoignez 2 400+ \xE9tudiants et commencez votre toute premi\xE8re le\xE7on en quelques minutes.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240,
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 14,
      justifyContent: "center",
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => onAuth("signup")
  }, "Commencer gratuitement"), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse-ghost",
    size: "lg",
    icon: "phone"
  }, "Nous contacter")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 300,
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 24,
      justifyContent: "center",
      marginTop: 10,
      fontSize: "var(--text-sm)",
      color: "var(--indigo-100)"
    }
  }, [["check-circle", "100 % gratuit pour débuter"], ["check-circle", "Cours en ligne + en direct"], ["check-circle", "Certificat à chaque niveau"]].map(([ic, tx]) => /*#__PURE__*/React.createElement("span", {
    key: tx,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": ic,
    style: {
      width: 18,
      height: 18,
      color: "var(--gold-400)"
    }
  }), tx)))));
}
Object.assign(window, {
  Testimonials,
  BlogCard,
  BlogPreview,
  ForumCTA,
  FinalCTA
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/accueil-sections2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
/* The Bridge Center — Accueil page assembly (AuthModal lives in auth.jsx) */
const {
  useState: useAppState,
  useEffect: useAppEffect
} = React;
function App() {
  const [auth, setAuth] = useAppState(null);
  useAppEffect(() => {
    document.body.style.overflow = auth ? "hidden" : "";
    window.lucide && window.lucide.createIcons();
  });
  useAppEffect(() => {
    let r1 = requestAnimationFrame(() => window.lucide && window.lucide.createIcons());
    const t = setInterval(() => window.lucide && window.lucide.createIcons(), 600);
    setTimeout(() => clearInterval(t), 3500);
    return () => {
      cancelAnimationFrame(r1);
      clearInterval(t);
    };
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    onAuth: setAuth
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    onAuth: setAuth
  }), /*#__PURE__*/React.createElement(StatsBand, null), /*#__PURE__*/React.createElement(AboutPreview, null), /*#__PURE__*/React.createElement(Method, null), /*#__PURE__*/React.createElement(FeaturedCourses, null), /*#__PURE__*/React.createElement(HowItWorks, null), /*#__PURE__*/React.createElement(Testimonials, null), /*#__PURE__*/React.createElement(BlogPreview, null), /*#__PURE__*/React.createElement(ForumCTA, null), /*#__PURE__*/React.createElement(FinalCTA, {
    onAuth: setAuth
  })), /*#__PURE__*/React.createElement(Footer, null), auth && /*#__PURE__*/React.createElement(AuthModal, {
    mode: auth,
    onClose: () => setAuth(null),
    onSwitch: setAuth
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
requestAnimationFrame(() => window.lucide && window.lucide.createIcons());
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/apropos-app.jsx
try { (() => {
/* The Bridge Center — À propos page mount */
const {
  useState: useApAppState,
  useEffect: useApAppEffect
} = React;
function AproposApp() {
  const [auth, setAuth] = useApAppState(null);
  useApAppEffect(() => {
    document.body.style.overflow = auth ? "hidden" : "";
    window.lucide && window.lucide.createIcons();
  });
  useApAppEffect(() => {
    let r1 = requestAnimationFrame(() => window.lucide && window.lucide.createIcons());
    const t = setInterval(() => window.lucide && window.lucide.createIcons(), 600);
    setTimeout(() => clearInterval(t), 3500);
    return () => {
      cancelAnimationFrame(r1);
      clearInterval(t);
    };
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    onAuth: setAuth,
    active: "\xC0 propos"
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(AboutHeader, null), /*#__PURE__*/React.createElement(Story, null), /*#__PURE__*/React.createElement(Values, null), /*#__PURE__*/React.createElement(Methodology, null), /*#__PURE__*/React.createElement(Team, null), /*#__PURE__*/React.createElement(AboutStats, null), /*#__PURE__*/React.createElement(FinalCTA, {
    onAuth: setAuth
  })), /*#__PURE__*/React.createElement(Footer, null), auth && /*#__PURE__*/React.createElement(AuthModal, {
    mode: auth,
    onClose: () => setAuth(null),
    onSwitch: setAuth
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(AproposApp, null));
requestAnimationFrame(() => window.lucide && window.lucide.createIcons());
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/apropos-app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/apropos.jsx
try { (() => {
/* The Bridge Center — Page À propos */
const {
  useEffect: useApEffect
} = React;
function AboutHeader() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--indigo-950)",
      color: "var(--cream-50)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "url(../../assets/tex-navy.png)",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, color-mix(in srgb,var(--indigo-950) 30%,transparent), color-mix(in srgb,var(--indigo-950) 60%,transparent))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "bridge-container",
    style: {
      position: "relative",
      zIndex: 2,
      padding: "var(--section-y-tight) 0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: "var(--gold-400)",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 22,
      height: 2,
      background: "currentColor",
      borderRadius: 2,
      display: "inline-block"
    }
  }), "\xC0 propos")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--display-hero)",
      fontWeight: "var(--weight-extrabold)",
      lineHeight: 1.04,
      letterSpacing: "var(--tracking-tighter)",
      color: "var(--cream-50)",
      margin: 0,
      maxWidth: "20ch"
    }
  }, "N\xE9s \xE0 Kinshasa, un pont vers ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-400)"
    }
  }, "le monde"), ".")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 160
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-lg)",
      color: "var(--indigo-100)",
      margin: 0,
      maxWidth: "56ch"
    }
  }, "The Bridge Center est n\xE9 d'une conviction simple : l'anglais ne devrait jamais \xEAtre un obstacle, mais un pont. D\xE9couvrez notre histoire, nos valeurs et l'\xE9quipe qui vous accompagne."))));
}
function Story() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bridge-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bc-about-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-16)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-2xl)",
      overflow: "hidden",
      aspectRatio: "4/5",
      backgroundImage: "url(../../assets/tex-indigo.png)",
      backgroundSize: "cover",
      boxShadow: "var(--shadow-xl)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: -24,
      right: -20,
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      padding: "18px 22px",
      boxShadow: "var(--shadow-lg)",
      display: "flex",
      alignItems: "center",
      gap: 14,
      maxWidth: 260
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 46,
      flex: "0 0 auto",
      borderRadius: "var(--radius-md)",
      background: "var(--gold-100)",
      color: "var(--gold-700)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "flag",
    style: {
      width: 24,
      height: 24
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 20,
      color: "var(--text-strong)",
      lineHeight: 1
    }
  }, "Depuis 2014"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)",
      marginTop: 3
    }
  }, "Un pont construit, le\xE7on apr\xE8s le\xE7on")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    eyebrow: "Notre histoire",
    title: "D'une salle de classe \xE0 Kinshasa \xE0 une communaut\xE9 mondiale",
    maxWidth: "24ch"
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-md)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-body)",
      margin: 0
    }
  }, "Tout a commenc\xE9 \xE0 ", /*#__PURE__*/React.createElement("strong", null, "Kinshasa"), ", avec une poign\xE9e d'\xE9tudiants et une certitude : trop de francophones talentueux voyaient des portes se fermer, faute de parler anglais. \xC9tudes \xE0 l'\xE9tranger, postes internationaux, opportunit\xE9s en ligne \u2014 autant de ponts qui leur manquaient.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 160
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-md)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-muted)",
      margin: 0
    }
  }, "Aujourd'hui, gr\xE2ce au num\xE9rique, ce pont s'\xE9tend bien au-del\xE0 de la RDC : nous accompagnons des apprenants francophones de Dakar \xE0 Montr\xE9al, de Bruxelles \xE0 Abidjan. La mission reste la m\xEAme \u2014 rendre l'anglais accessible, chaleureux et profond\xE9ment humain.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 220
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: "var(--space-2) 0 0",
      padding: "var(--space-5) var(--space-6)",
      borderLeft: "3px solid var(--gold-500)",
      background: "var(--surface-raised)",
      borderRadius: "0 var(--radius-md) var(--radius-md) 0",
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontSize: "var(--text-lg)",
      color: "var(--indigo-800)",
      lineHeight: 1.4
    }
  }, "\xAB If you're rich, be the bridge. \xBB \u2014 et la premi\xE8re richesse \xE0 partager, c'est le savoir."))))));
}
function Values() {
  const vals = [{
    icon: "heart-handshake",
    tone: "gold",
    title: "Accessibilité",
    text: "Des formations de base 100 % gratuites, pour que la langue ne soit jamais une question de moyens."
  }, {
    icon: "sparkles",
    tone: "navy",
    title: "Exigence bienveillante",
    text: "On vous pousse à progresser, toujours avec encouragement et sans jamais vous juger."
  }, {
    icon: "globe-2",
    tone: "teal",
    title: "Ouverture sur le monde",
    text: "Une communauté internationale qui célèbre les cultures, les accents et les parcours de chacun."
  }, {
    icon: "flag",
    tone: "gold",
    title: "Fierté africaine",
    text: "Nés à Kinshasa, fiers de nos racines, et déterminés à faire rayonner les talents francophones."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-card)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bridge-container",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Nos valeurs",
    title: "Ce qui nous guide chaque jour",
    lead: "Quatre principes qui fa\xE7onnent chaque cours, chaque \xE9change et chaque d\xE9cision."
  })), /*#__PURE__*/React.createElement("div", {
    className: "bc-values-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "var(--space-6)"
    }
  }, vals.map((v, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: v.title,
    delay: i % 4 * 80
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    icon: v.icon,
    tone: v.tone,
    title: v.title
  }, v.text))))));
}
function Methodology() {
  const steps = [{
    n: "01",
    icon: "compass",
    title: "On part de votre niveau réel",
    text: "Un test de placement précis situe vos acquis sur l'échelle CECRL (A1→C2) et trace votre parcours."
  }, {
    n: "02",
    icon: "blocks",
    title: "On mélange les formats",
    text: "Vidéo, audio, texte et quiz : chaque notion est vue sous plusieurs angles pour s'ancrer durablement."
  }, {
    n: "03",
    icon: "mic",
    title: "On pratique en direct",
    text: "Des séances live hebdomadaires sur Google Meet : parler reste le meilleur moyen d'apprendre à parler."
  }, {
    n: "04",
    icon: "line-chart",
    title: "On mesure les progrès",
    text: "Un suivi clair de vos acquis et de vos prochaines étapes, jusqu'à la validation de chaque niveau."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bridge-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bc-method-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "0.9fr 1.1fr",
      gap: "var(--space-16)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      position: "sticky",
      top: 100
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    eyebrow: "Notre m\xE9thode",
    title: "Une p\xE9dagogie qui respecte votre rythme",
    maxWidth: "22ch"
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-md)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-muted)",
      margin: 0
    }
  }, "Pas de recette miracle, mais une approche \xE9prouv\xE9e : des objectifs clairs, beaucoup de pratique, et un accompagnement humain \xE0 chaque \xE9tape. C'est ainsi qu'on construit un pont solide.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 160
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: "arrow-right",
    href: "formations.html"
  }, "Voir les formations")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: s.n,
    delay: i * 90
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-5)",
      padding: "var(--space-6)",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-sm)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: "var(--radius-md)",
      background: "var(--indigo-50)",
      color: "var(--indigo-700)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": s.icon,
    style: {
      width: 24,
      height: 24
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      fontWeight: 700,
      color: "var(--gold-600)"
    }
  }, s.n)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-lg)",
      fontWeight: 700,
      color: "var(--text-strong)",
      margin: 0
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-base)",
      color: "var(--text-muted)",
      margin: 0,
      lineHeight: "var(--leading-relaxed)"
    }
  }, s.text)))))))));
}
function Team() {
  const team = [{
    name: "Esther Nkanga",
    role: "Fondatrice & formatrice C2",
    tone: "indigo",
    bio: "Linguiste passionnée, elle a fondé The Bridge Center pour ouvrir l'anglais au plus grand nombre.",
    img: "../../assets/tex-indigo.png"
  }, {
    name: "David Ilunga",
    role: "Responsable pédagogique",
    tone: "teal",
    bio: "Spécialiste de l'oral et de la prononciation, il conçoit nos parcours de conversation.",
    img: "../../assets/tex-teal.png"
  }, {
    name: "Marie-Claire Bofenda",
    role: "Formatrice grammaire & écrit",
    tone: "gold",
    bio: "Elle rend la grammaire limpide et adore débusquer les faux-amis qui piègent les francophones.",
    img: "../../assets/tex-gold.png"
  }, {
    name: "Samuel Okitundu",
    role: "Préparation examens (TOEFL/IELTS)",
    tone: "indigo",
    bio: "Stratège des examens, il a accompagné des centaines d'étudiants vers leur score cible.",
    img: "../../assets/tex-dusk.png"
  }, {
    name: "Aïcha Traoré",
    role: "Formatrice anglais des affaires",
    tone: "teal",
    bio: "Ancienne consultante, elle enseigne l'anglais professionnel qui fait avancer les carrières.",
    img: "../../assets/tex-indigo.png"
  }, {
    name: "Jonathan Mbiya",
    role: "Animateur communauté & live",
    tone: "gold",
    bio: "Il fait vivre le forum et les séances en direct, et veille à ce que personne n'apprenne seul.",
    img: "../../assets/tex-teal.png"
  }];
  const ring = {
    indigo: "var(--indigo-400)",
    teal: "var(--teal-500)",
    gold: "var(--gold-500)"
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-card)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bridge-container",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Notre \xE9quipe",
    title: "Les b\xE2tisseurs de ponts",
    lead: "Des formateurs congolais et internationaux, r\xE9unis par la m\xEAme envie : vous voir r\xE9ussir."
  })), /*#__PURE__*/React.createElement("div", {
    className: "bc-team-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--space-6)"
    }
  }, team.map((m, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: m.name,
    delay: i % 3 * 80
  }, /*#__PURE__*/React.createElement("div", {
    className: "bc-team-card",
    onMouseEnter: e => {
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.boxShadow = "var(--shadow-lg)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "";
      e.currentTarget.style.boxShadow = "var(--shadow-sm)";
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      padding: "var(--space-6)",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-sm)",
      height: "100%",
      transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 70,
      height: 70,
      flex: "0 0 auto",
      borderRadius: "var(--radius-pill)",
      backgroundImage: `url(${m.img})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      boxShadow: `0 0 0 3px var(--surface-card), 0 0 0 5px ${ring[m.tone]}`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-lg)",
      fontWeight: 700,
      color: "var(--text-strong)"
    }
  }, m.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: 600,
      color: "var(--text-accent)"
    }
  }, m.role))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-base)",
      color: "var(--text-muted)",
      margin: 0,
      lineHeight: "var(--leading-relaxed)"
    }
  }, m.bio), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: "auto",
      paddingTop: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: "var(--radius-pill)",
      border: "1px solid var(--border-default)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "briefcase",
    style: {
      width: 16,
      height: 16
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: "var(--radius-pill)",
      border: "1px solid var(--border-default)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "mail",
    style: {
      width: 16,
      height: 16
    }
  })))))))));
}
function AboutStats() {
  const stats = [{
    to: 2400,
    suffix: "+",
    label: "Étudiants accompagnés",
    icon: "users"
  }, {
    to: 130,
    suffix: "+",
    label: "Pays francophones représentés",
    icon: "globe"
  }, {
    to: 94,
    suffix: "%",
    label: "Taux de réussite aux niveaux",
    icon: "trending-up"
  }, {
    to: 12,
    suffix: "",
    label: "Années d'expérience",
    icon: "calendar-heart"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--indigo-950)",
      color: "var(--cream-50)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "url(../../assets/tex-dusk.png)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.6
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, color-mix(in srgb,var(--indigo-950) 45%,transparent), color-mix(in srgb,var(--indigo-950) 65%,transparent))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "bridge-container",
    style: {
      position: "relative",
      zIndex: 2,
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bc-stats-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "var(--space-10)"
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: s.label,
    delay: i * 90
  }, /*#__PURE__*/React.createElement(Stat, {
    icon: s.icon,
    suffix: s.suffix,
    label: s.label,
    value: /*#__PURE__*/React.createElement(CountUp, {
      to: s.to
    }),
    tone: "inverse",
    align: "center"
  }))))));
}
Object.assign(window, {
  AboutHeader,
  Story,
  Values,
  Methodology,
  Team,
  AboutStats
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/apropos.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/auth.jsx
try { (() => {
/* The Bridge Center — shared auth modal (login / signup) */
const {
  useEffect: useAuthEffect
} = React;
function bcTabStyle(active) {
  return {
    padding: "8px 18px",
    borderRadius: "var(--radius-pill)",
    border: "none",
    cursor: "pointer",
    fontFamily: "var(--font-body)",
    fontSize: "var(--text-sm)",
    fontWeight: 700,
    color: active ? "var(--indigo-900)" : "var(--text-muted)",
    background: active ? "var(--surface-card)" : "transparent",
    boxShadow: active ? "var(--shadow-xs)" : "none",
    transition: "all var(--dur-fast) var(--ease-out)"
  };
}
function AuthModal({
  mode,
  onClose,
  onSwitch
}) {
  const signup = mode === "signup";
  useAuthEffect(() => {
    const onKey = e => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--gutter)",
      background: "color-mix(in srgb, var(--indigo-950) 55%, transparent)",
      backdropFilter: "blur(6px)",
      WebkitBackdropFilter: "blur(6px)",
      animation: "bcFade var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: "relative",
      width: "min(960px, 100%)",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      background: "var(--surface-card)",
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      boxShadow: "var(--shadow-xl)",
      animation: "bcRise var(--dur-slow) var(--ease-spring)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bc-auth-aside",
    style: {
      position: "relative",
      backgroundImage: "url(../../assets/tex-navy.png)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "var(--cream-50)",
      padding: "var(--space-10)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: 520
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "white",
    size: 36
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-3xl)",
      lineHeight: 1.1,
      margin: 0,
      color: "var(--cream-50)"
    }
  }, signup ? "Commencez votre traversée." : "Heureux de vous revoir."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-md)",
      color: "var(--indigo-100)",
      margin: 0,
      lineHeight: "var(--leading-relaxed)"
    }
  }, signup ? "Créez votre compte gratuit et accédez à vos premières leçons en quelques minutes." : "Reprenez là où vous vous êtes arrêté. Vos progrès vous attendent."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontSize: "var(--text-lg)",
      color: "var(--gold-400)",
      margin: "8px 0 0"
    }
  }, "\xAB If you're rich, be the bridge. \xBB"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-10)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      background: "var(--surface-sunken)",
      borderRadius: "var(--radius-pill)",
      padding: 4
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onSwitch("login"),
    style: bcTabStyle(!signup)
  }, "Se connecter"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onSwitch("signup"),
    style: bcTabStyle(signup)
  }, "S'inscrire")), /*#__PURE__*/React.createElement(IconButton, {
    icon: "x",
    label: "Fermer",
    variant: "ghost",
    size: "sm",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => e.preventDefault(),
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, signup && /*#__PURE__*/React.createElement(Input, {
    label: "Nom complet",
    icon: "user",
    placeholder: "Gr\xE2ce Mukendi"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Adresse e-mail",
    type: "email",
    icon: "mail",
    placeholder: "vous@exemple.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Mot de passe",
    type: "password",
    icon: "lock",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  }), signup && /*#__PURE__*/React.createElement(Select, {
    label: "Votre niveau actuel",
    options: ["Je débute (A1)", "A2 — Élémentaire", "B1 — Intermédiaire", "B2 — Avancé", "C1 — Autonome", "Je ne sais pas encore"]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: signup ? "J'accepte les conditions" : "Se souvenir de moi",
    defaultChecked: !signup
  }), !signup && /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: 600
    }
  }, "Mot de passe oubli\xE9 ?")), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    full: true,
    iconRight: "arrow-right",
    type: "submit"
  }, signup ? "Créer mon compte gratuit" : "Se connecter")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      color: "var(--text-faint)",
      fontSize: "var(--text-sm)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "var(--divider)"
    }
  }), "ou", /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "var(--divider)"
    }
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    full: true
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn.simpleicons.org/google",
    alt: "",
    width: "18",
    height: "18",
    style: {
      width: 18,
      height: 18
    }
  }), "Continuer avec Google"), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      margin: 0
    }
  }, signup ? "Déjà un compte ? " : "Pas encore de compte ? ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onSwitch(signup ? "login" : "signup");
    },
    style: {
      fontWeight: 700
    }
  }, signup ? "Se connecter" : "S'inscrire gratuitement")))));
}
Object.assign(window, {
  AuthModal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/auth.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/blog-app.jsx
try { (() => {
/* The Bridge Center — Blog page mount */
const {
  useState: useBlAppState,
  useEffect: useBlAppEffect
} = React;
function BlogApp() {
  const [auth, setAuth] = useBlAppState(null);
  useBlAppEffect(() => {
    document.body.style.overflow = auth ? "hidden" : "";
    window.lucide && window.lucide.createIcons();
  });
  useBlAppEffect(() => {
    let r1 = requestAnimationFrame(() => window.lucide && window.lucide.createIcons());
    const t = setInterval(() => window.lucide && window.lucide.createIcons(), 600);
    setTimeout(() => clearInterval(t), 3500);
    return () => {
      cancelAnimationFrame(r1);
      clearInterval(t);
    };
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    onAuth: setAuth,
    active: "Blog"
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(BlogHeader, null), /*#__PURE__*/React.createElement(BlogPage, null), /*#__PURE__*/React.createElement(FinalCTA, {
    onAuth: setAuth
  })), /*#__PURE__*/React.createElement(Footer, null), auth && /*#__PURE__*/React.createElement(AuthModal, {
    mode: auth,
    onClose: () => setAuth(null),
    onSwitch: setAuth
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(BlogApp, null));
requestAnimationFrame(() => window.lucide && window.lucide.createIcons());
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/blog-app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/blog.jsx
try { (() => {
/* The Bridge Center — Page Blog (à la une + filtres + grille + sidebar + pagination) */
const {
  useState: useBState,
  useEffect: useBEffect,
  useMemo: useBMemo,
  useRef: useBRef
} = React;
const BLOG_CATEGORIES = ["Tous", "Astuces d'apprentissage", "Culture anglophone", "Réussites", "Grammaire", "Vocabulaire"];
const BLOG_POSTS = [{
  id: 1,
  image: "../../assets/tex-dusk.png",
  category: "Astuces d'apprentissage",
  title: "5 habitudes pour apprendre l'anglais 10 minutes par jour",
  excerpt: "La régularité bat l'intensité. Voici comment transformer de petits moments du quotidien en véritables progrès durables.",
  author: "Esther Nkanga",
  date: "8 juin 2026",
  read: "6 min",
  views: 4200,
  featured: true
}, {
  id: 2,
  image: "../../assets/tex-gold.png",
  category: "Vocabulaire",
  title: "30 expressions anglaises pour briller en réunion",
  excerpt: "Des tournures naturelles pour gagner en assurance quand vous prenez la parole au travail.",
  author: "David Ilunga",
  date: "5 juin 2026",
  read: "8 min",
  views: 3100
}, {
  id: 3,
  image: "../../assets/tex-indigo.png",
  category: "Culture anglophone",
  title: "Comprendre l'accent : écouter pour mieux parler",
  excerpt: "Films, podcasts, chansons — comment l'écoute active accélère votre compréhension orale.",
  author: "Esther Nkanga",
  date: "1 juin 2026",
  read: "5 min",
  views: 2750
}, {
  id: 4,
  image: "../../assets/tex-teal.png",
  category: "Grammaire",
  title: "Present perfect : enfin clair, une bonne fois pour toutes",
  excerpt: "Le temps qui pose le plus de questions, expliqué avec des exemples concrets du quotidien.",
  author: "Marie-Claire Bofenda",
  date: "28 mai 2026",
  read: "7 min",
  views: 5400
}, {
  id: 5,
  image: "../../assets/tex-gold.png",
  category: "Réussites",
  title: "De A0 à un emploi à l'international : le parcours d'Awa",
  excerpt: "Comment une étudiante de Dakar est passée du niveau débutant à un poste bilingue en un an.",
  author: "L'équipe Bridge",
  date: "24 mai 2026",
  read: "9 min",
  views: 6100
}, {
  id: 6,
  image: "../../assets/tex-dusk.png",
  category: "Astuces d'apprentissage",
  title: "Penser en anglais : le déclic qui change tout",
  excerpt: "Une méthode simple pour arrêter de traduire dans votre tête et gagner en fluidité.",
  author: "David Ilunga",
  date: "20 mai 2026",
  read: "6 min",
  views: 2300
}, {
  id: 7,
  image: "../../assets/tex-indigo.png",
  category: "Vocabulaire",
  title: "Les faux-amis qui piègent les francophones",
  excerpt: "« Actually », « library », « sensible »… 20 mots à ne plus jamais confondre.",
  author: "Marie-Claire Bofenda",
  date: "16 mai 2026",
  read: "5 min",
  views: 3900
}, {
  id: 8,
  image: "../../assets/tex-teal.png",
  category: "Culture anglophone",
  title: "Small talk : l'art de la conversation légère",
  excerpt: "Météo, week-end, sport : les codes culturels pour engager la discussion sans gêne.",
  author: "Esther Nkanga",
  date: "12 mai 2026",
  read: "6 min",
  views: 1800
}, {
  id: 9,
  image: "../../assets/tex-gold.png",
  category: "Grammaire",
  title: "Articles a / an / the : la règle qui tient en 3 minutes",
  excerpt: "Un petit guide visuel pour ne plus hésiter sur les articles en anglais.",
  author: "David Ilunga",
  date: "8 mai 2026",
  read: "4 min",
  views: 2600
}, {
  id: 10,
  image: "../../assets/tex-indigo.png",
  category: "Réussites",
  title: "Ils ont réussi leur TOEFL : 3 stratégies gagnantes",
  excerpt: "Trois anciens étudiants partagent ce qui a fait la différence le jour J.",
  author: "L'équipe Bridge",
  date: "3 mai 2026",
  read: "8 min",
  views: 3300
}];
const PER_PAGE = 6;
function BlogHeader() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--indigo-950)",
      color: "var(--cream-50)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "url(../../assets/tex-navy.png)",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, color-mix(in srgb,var(--indigo-950) 30%,transparent), color-mix(in srgb,var(--indigo-950) 60%,transparent))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "bridge-container",
    style: {
      position: "relative",
      zIndex: 2,
      padding: "var(--section-y-tight) 0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: "var(--gold-400)",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 22,
      height: 2,
      background: "currentColor",
      borderRadius: 2,
      display: "inline-block"
    }
  }), "Le blog")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--display-hero)",
      fontWeight: "var(--weight-extrabold)",
      lineHeight: 1.04,
      letterSpacing: "var(--tracking-tighter)",
      color: "var(--cream-50)",
      margin: 0,
      maxWidth: "18ch"
    }
  }, "Des id\xE9es pour ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-400)"
    }
  }, "progresser"), " entre deux le\xE7ons.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 160
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-lg)",
      color: "var(--indigo-100)",
      margin: 0,
      maxWidth: "54ch"
    }
  }, "Astuces d'apprentissage, culture anglophone, grammaire, vocabulaire et histoires de r\xE9ussite \u2014 nos conseils pour apprendre l'anglais avec plaisir et constance."))));
}
function CategoryFilter({
  value,
  onChange,
  counts
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap",
      justifyContent: "center"
    }
  }, BLOG_CATEGORIES.map(cat => {
    const active = value === cat;
    return /*#__PURE__*/React.createElement("button", {
      key: cat,
      onClick: () => onChange(cat),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "9px 18px",
        borderRadius: "var(--radius-pill)",
        border: active ? "1.5px solid transparent" : "1.5px solid var(--border-default)",
        background: active ? "var(--primary)" : "var(--surface-card)",
        color: active ? "var(--cream-50)" : "var(--text-body)",
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-sm)",
        fontWeight: active ? 700 : 600,
        cursor: "pointer",
        boxShadow: active ? "0 7px 18px -7px color-mix(in srgb, var(--indigo-700) 75%, transparent)" : "var(--shadow-xs)",
        transition: "all var(--dur-fast) var(--ease-out)"
      },
      onMouseEnter: e => {
        if (!active) {
          e.currentTarget.style.borderColor = "var(--gold-400)";
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "var(--shadow-sm)";
        }
      },
      onMouseLeave: e => {
        if (!active) {
          e.currentTarget.style.borderColor = "var(--border-default)";
          e.currentTarget.style.transform = "";
          e.currentTarget.style.boxShadow = "var(--shadow-xs)";
        }
      }
    }, cat, counts && counts[cat] != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        fontWeight: 700,
        padding: "2px 6px",
        borderRadius: "var(--radius-pill)",
        background: active ? "color-mix(in srgb, var(--cream-50) 22%, transparent)" : "color-mix(in srgb, var(--ink-900) 7%, transparent)",
        color: active ? "var(--cream-50)" : "var(--text-muted)"
      }
    }, counts[cat]));
  }));
}
function FeaturedArticle({
  post
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    className: "bc-featured",
    onMouseEnter: e => {
      e.currentTarget.style.boxShadow = "var(--shadow-xl)";
      e.currentTarget.style.transform = "translateY(-4px)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.boxShadow = "var(--shadow-md)";
      e.currentTarget.style.transform = "";
    },
    style: {
      display: "grid",
      gridTemplateColumns: "1.15fr 1fr",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      boxShadow: "var(--shadow-md)",
      textDecoration: "none",
      color: "inherit",
      transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bc-featured-img",
    style: {
      position: "relative",
      minHeight: 340,
      backgroundImage: `url(${post.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 18,
      left: 18,
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "6px 14px",
      borderRadius: "var(--radius-pill)",
      background: "var(--gold-500)",
      color: "var(--indigo-900)",
      fontSize: "var(--text-sm)",
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "star",
    style: {
      width: 14,
      height: 14,
      fill: "var(--indigo-900)"
    }
  }), "\xC0 la une")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      padding: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "teal",
    variant: "soft"
  }, post.category), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--display-sub)",
      fontWeight: "var(--weight-extrabold)",
      lineHeight: 1.1,
      letterSpacing: "var(--tracking-tight)",
      color: "var(--text-strong)",
      margin: 0
    }
  }, post.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-md)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-muted)",
      margin: 0
    }
  }, post.excerpt), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginTop: "auto",
      paddingTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: post.author,
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: "var(--text-strong)",
      fontSize: "var(--text-sm)"
    }
  }, post.author), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, post.date, " \xB7 ", post.read, " de lecture")), /*#__PURE__*/React.createElement("span", {
    className: "bc-featured-cta",
    style: {
      marginLeft: "auto",
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      color: "var(--primary)",
      fontWeight: 700,
      fontSize: "var(--text-base)"
    }
  }, "Lire l'article ", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right",
    style: {
      width: 18,
      height: 18
    }
  })))));
}
function PopularList({
  posts
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, posts.map((p, i) => /*#__PURE__*/React.createElement("a", {
    key: p.id,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: "flex",
      gap: 14,
      textDecoration: "none",
      color: "inherit",
      alignItems: "center"
    },
    onMouseEnter: e => {
      const t = e.currentTarget.querySelector("h4");
      if (t) t.style.color = "var(--accent-active)";
    },
    onMouseLeave: e => {
      const t = e.currentTarget.querySelector("h4");
      if (t) t.style.color = "var(--text-strong)";
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 22,
      color: "var(--gold-400)",
      width: 26,
      flex: "0 0 auto",
      textAlign: "center"
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 56,
      flex: "0 0 auto",
      borderRadius: "var(--radius-md)",
      backgroundImage: `url(${p.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-base)",
      fontWeight: 700,
      color: "var(--text-strong)",
      margin: 0,
      lineHeight: 1.25,
      transition: "color var(--dur-fast) var(--ease-out)"
    }
  }, p.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)",
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "clock",
    style: {
      width: 12,
      height: 12
    }
  }), p.read, " \xB7 ", (p.views / 1000).toFixed(1).replace(".", ","), "k vues")))));
}
function SidebarCard({
  title,
  icon,
  children,
  tone = "paper"
}) {
  const navy = tone === "navy";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-6)",
      borderRadius: "var(--radius-lg)",
      background: navy ? "var(--surface-inverse)" : "var(--surface-card)",
      border: navy ? "1px solid var(--border-inverse)" : "1px solid var(--border-subtle)",
      boxShadow: navy ? "var(--shadow-lg)" : "var(--shadow-sm)",
      color: navy ? "var(--cream-50)" : "inherit"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      marginBottom: 18
    }
  }, icon && /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 18,
      height: 18,
      color: navy ? "var(--gold-400)" : "var(--gold-600)"
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-lg)",
      fontWeight: 700,
      color: navy ? "var(--cream-50)" : "var(--text-strong)",
      margin: 0
    }
  }, title)), children);
}
function Pagination({
  page,
  pages,
  onPage
}) {
  if (pages <= 1) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      marginTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onPage(Math.max(1, page - 1)),
    disabled: page === 1,
    "aria-label": "Page pr\xE9c\xE9dente",
    style: pgBtn(false, page === 1)
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-left",
    style: {
      width: 18,
      height: 18
    }
  })), Array.from({
    length: pages
  }).map((_, i) => {
    const n = i + 1;
    const active = n === page;
    return /*#__PURE__*/React.createElement("button", {
      key: n,
      onClick: () => onPage(n),
      "aria-current": active ? "page" : undefined,
      style: pgBtn(active, false)
    }, n);
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => onPage(Math.min(pages, page + 1)),
    disabled: page === pages,
    "aria-label": "Page suivante",
    style: pgBtn(false, page === pages)
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-right",
    style: {
      width: 18,
      height: 18
    }
  })));
}
function pgBtn(active, disabled) {
  return {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 42,
    height: 42,
    padding: "0 12px",
    borderRadius: "var(--radius-md)",
    border: active ? "1.5px solid transparent" : "1.5px solid var(--border-default)",
    background: active ? "var(--primary)" : "var(--surface-card)",
    color: active ? "var(--cream-50)" : disabled ? "var(--text-faint)" : "var(--text-body)",
    fontFamily: "var(--font-body)",
    fontSize: "var(--text-base)",
    fontWeight: 700,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    boxShadow: active ? "var(--shadow-sm)" : "none",
    transition: "all var(--dur-fast) var(--ease-out)"
  };
}
function BlogPage() {
  const [cat, setCat] = useBState("Tous");
  const [page, setPage] = useBState(1);
  const counts = useBMemo(() => {
    const m = {
      Tous: BLOG_POSTS.length
    };
    for (const c of BLOG_CATEGORIES.slice(1)) m[c] = BLOG_POSTS.filter(p => p.category === c).length;
    return m;
  }, []);
  const featured = BLOG_POSTS.find(p => p.featured);
  const showFeatured = cat === "Tous";
  const list = useBMemo(() => {
    let l = BLOG_POSTS.filter(p => cat === "Tous" ? !p.featured : p.category === cat);
    return l;
  }, [cat]);
  const pages = Math.ceil(list.length / PER_PAGE);
  const pageItems = list.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const popular = useBMemo(() => [...BLOG_POSTS].sort((a, b) => b.views - a.views).slice(0, 4), []);
  useBEffect(() => {
    setPage(1);
  }, [cat]);
  useBEffect(() => {
    window.lucide && window.lucide.createIcons();
  }, [cat, page]);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "var(--section-y-tight) 0 var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bridge-container",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(CategoryFilter, {
    value: cat,
    onChange: setCat,
    counts: counts
  })), showFeatured && featured && /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(FeaturedArticle, {
    post: featured
  })), /*#__PURE__*/React.createElement("div", {
    className: "bc-blog-layout",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 340px",
      gap: "var(--space-10)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-8)"
    }
  }, pageItems.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "var(--space-16) 0",
      color: "var(--text-muted)"
    }
  }, "Aucun article dans cette cat\xE9gorie pour l'instant.") : /*#__PURE__*/React.createElement("div", {
    className: "bc-blog-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-6)"
    }
  }, pageItems.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: p.id,
    delay: i % 2 * 80
  }, /*#__PURE__*/React.createElement(BlogCard, p)))), /*#__PURE__*/React.createElement(Pagination, {
    page: page,
    pages: pages,
    onPage: setPage
  })), /*#__PURE__*/React.createElement("aside", {
    className: "bc-blog-sidebar",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)",
      position: "sticky",
      top: 96
    }
  }, /*#__PURE__*/React.createElement(SidebarCard, {
    title: "Articles populaires",
    icon: "trending-up"
  }, /*#__PURE__*/React.createElement(PopularList, {
    posts: popular
  })), /*#__PURE__*/React.createElement(SidebarCard, {
    title: "Cat\xE9gories",
    icon: "tag"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, BLOG_CATEGORIES.slice(1).map((c, i) => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => setCat(c),
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "11px 4px",
      border: "none",
      borderBottom: i < BLOG_CATEGORIES.length - 2 ? "1px solid var(--divider)" : "none",
      background: "none",
      cursor: "pointer",
      textAlign: "left",
      color: "var(--text-body)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-base)",
      fontWeight: 500,
      transition: "color var(--dur-fast) var(--ease-out)"
    },
    onMouseEnter: e => e.currentTarget.style.color = "var(--accent-active)",
    onMouseLeave: e => e.currentTarget.style.color = "var(--text-body)"
  }, c, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-sm)",
      color: "var(--text-faint)"
    }
  }, counts[c]))))), /*#__PURE__*/React.createElement(SidebarCard, {
    title: "La newsletter Bridge",
    icon: "mail",
    tone: "navy"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--indigo-100)",
      margin: "0 0 16px",
      lineHeight: "var(--leading-relaxed)"
    }
  }, "Un e-mail par semaine : une astuce, un mot, une expression. Sans spam, d\xE9sinscription en un clic."), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => e.preventDefault(),
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "Votre e-mail",
    "aria-label": "E-mail",
    style: {
      padding: "11px 14px",
      borderRadius: "var(--radius-md)",
      border: "1.5px solid var(--border-inverse)",
      background: "color-mix(in srgb, var(--indigo-950) 55%, transparent)",
      color: "var(--cream-50)",
      fontSize: "var(--text-sm)",
      outline: "none"
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    full: true,
    iconRight: "send",
    type: "submit"
  }, "S'abonner")))))));
}
Object.assign(window, {
  BlogHeader,
  BlogPage,
  BLOG_POSTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/blog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/bridge-kit.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ============================================================
   The Bridge Center — local UI kit primitives (window-attached)
   Mirrors components/ so the kit renders standalone & testable.
   Canonical source for consumers is components/ via _ds_bundle.js.
   ============================================================ */
const {
  useState
} = React;
function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  full = false,
  disabled = false,
  href,
  onClick,
  type = "button",
  style = {},
  ...rest
}) {
  const Tag = href ? "a" : "button";
  const pad = {
    sm: "8px 16px",
    md: "12px 22px",
    lg: "16px 30px"
  }[size];
  const fontSize = {
    sm: "var(--text-sm)",
    md: "var(--text-base)",
    lg: "var(--text-md)"
  }[size];
  const P = {
    primary: ["var(--primary)", "var(--cream-50)", "1.5px solid transparent", "var(--shadow-md)"],
    accent: ["var(--accent)", "var(--indigo-900)", "1.5px solid transparent", "var(--shadow-accent)"],
    secondary: ["var(--surface-card)", "var(--primary)", "1.5px solid var(--border-default)", "var(--shadow-xs)"],
    ghost: ["transparent", "var(--primary)", "1.5px solid transparent", "none"],
    inverse: ["var(--cream-50)", "var(--indigo-900)", "1.5px solid transparent", "var(--shadow-lg)"],
    "inverse-ghost": ["color-mix(in srgb,var(--cream-50) 12%,transparent)", "var(--cream-50)", "1.5px solid var(--border-inverse)", "none"],
    link: ["transparent", "var(--text-link)", "none", "none"]
  }[variant] || ["var(--primary)", "var(--cream-50)", "1.5px solid transparent", "var(--shadow-md)"];
  const iconSize = size === "lg" ? 20 : size === "sm" ? 16 : 18;
  const baseShadow = disabled ? "none" : P[3];
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: `bc-btn bc-btn--${variant}`,
    href: href,
    type: Tag === "button" ? type : undefined,
    disabled: Tag === "button" ? disabled : undefined,
    "aria-disabled": disabled || undefined,
    onClick: disabled ? e => e.preventDefault() : onClick,
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.97)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "translateY(-2px)";
    },
    onMouseEnter: e => {
      if (disabled || variant === "link") return;
      e.currentTarget.style.transform = "translateY(-2px)";
      e.currentTarget.style.boxShadow = "var(--shadow-lg)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "";
      e.currentTarget.style.boxShadow = baseShadow;
    },
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.55em",
      width: full ? "100%" : "auto",
      padding: variant === "link" ? 0 : pad,
      fontFamily: "var(--font-body)",
      fontSize,
      fontWeight: "var(--weight-semibold)",
      lineHeight: 1.1,
      textDecoration: variant === "link" ? "underline" : "none",
      textUnderlineOffset: "3px",
      color: P[1],
      background: P[0],
      border: P[2],
      borderRadius: variant === "link" ? 0 : "var(--radius-pill)",
      boxShadow: baseShadow,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      whiteSpace: "nowrap",
      WebkitTapHighlightColor: "transparent",
      transition: "transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-fast) var(--ease-out)",
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: iconSize,
      height: iconSize
    }
  }), children, iconRight && /*#__PURE__*/React.createElement("i", {
    "data-lucide": iconRight,
    style: {
      width: iconSize,
      height: iconSize
    }
  }));
}
function IconButton({
  icon,
  label,
  variant = "secondary",
  size = "md",
  shape = "circle",
  href,
  onClick,
  ...rest
}) {
  const Tag = href ? "a" : "button";
  const dim = {
    sm: 36,
    md: 44,
    lg: 52
  }[size];
  const iconSize = {
    sm: 16,
    md: 20,
    lg: 24
  }[size];
  const P = {
    primary: ["var(--primary)", "var(--cream-50)", "none"],
    accent: ["var(--accent)", "var(--indigo-900)", "none"],
    secondary: ["var(--surface-card)", "var(--primary)", "1.5px solid var(--border-default)"],
    ghost: ["transparent", "var(--text-body)", "none"],
    inverse: ["color-mix(in srgb,var(--cream-50) 12%,transparent)", "var(--cream-50)", "1.5px solid var(--border-inverse)"]
  }[variant] || ["var(--surface-card)", "var(--primary)", "1.5px solid var(--border-default)"];
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: "bc-iconbtn",
    href: href,
    "aria-label": label,
    title: label,
    onClick: onClick,
    onMouseEnter: e => {
      e.currentTarget.style.transform = "translateY(-2px)";
      e.currentTarget.style.boxShadow = "var(--shadow-md)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "";
      e.currentTarget.style.boxShadow = variant === "secondary" ? "var(--shadow-xs)" : "none";
    },
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: dim,
      height: dim,
      flex: "0 0 auto",
      borderRadius: shape === "circle" ? "var(--radius-pill)" : "var(--radius-md)",
      background: P[0],
      color: P[1],
      border: P[2],
      boxShadow: variant === "secondary" ? "var(--shadow-xs)" : "none",
      cursor: "pointer",
      WebkitTapHighlightColor: "transparent",
      transition: "transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)"
    }
  }, rest), /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: iconSize,
      height: iconSize
    }
  }));
}
function Badge({
  children,
  tone = "accent",
  variant = "soft",
  icon,
  size = "md"
}) {
  const tones = {
    accent: {
      soft: ["var(--gold-100)", "var(--gold-700)"],
      solid: ["var(--gold-500)", "var(--indigo-900)"]
    },
    navy: {
      soft: ["var(--indigo-50)", "var(--indigo-700)"],
      solid: ["var(--indigo-700)", "var(--cream-50)"]
    },
    teal: {
      soft: ["var(--teal-50)", "var(--teal-700)"],
      solid: ["var(--teal-500)", "var(--white)"]
    },
    success: {
      soft: ["var(--success-soft)", "var(--green-500)"],
      solid: ["var(--green-500)", "var(--white)"]
    },
    danger: {
      soft: ["var(--danger-soft)", "var(--red-500)"],
      solid: ["var(--red-500)", "var(--white)"]
    },
    neutral: {
      soft: ["var(--cream-200)", "var(--ink-700)"],
      solid: ["var(--ink-700)", "var(--cream-50)"]
    },
    onnavy: {
      soft: ["color-mix(in srgb,var(--cream-50) 14%,transparent)", "var(--cream-50)"],
      solid: ["var(--gold-500)", "var(--indigo-900)"]
    }
  };
  const [bg, fg] = (tones[tone] || tones.accent)[variant];
  return /*#__PURE__*/React.createElement("span", {
    className: "bc-badge",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.4em",
      padding: size === "sm" ? "3px 9px" : "5px 12px",
      fontFamily: "var(--font-body)",
      fontSize: size === "sm" ? "var(--text-xs)" : "var(--text-sm)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "0.01em",
      lineHeight: 1.1,
      color: fg,
      background: bg,
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap"
    }
  }, icon && /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 13,
      height: 13
    }
  }), children);
}
function Avatar({
  src,
  name = "",
  size = "md",
  ring = false
}) {
  const dim = {
    xs: 28,
    sm: 36,
    md: 48,
    lg: 64,
    xl: 88
  }[size] || 48;
  const initials = name.split(" ").filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("span", {
    className: "bc-avatar",
    title: name,
    style: {
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
      userSelect: "none",
      boxShadow: ring ? "0 0 0 3px var(--surface-card), 0 0 0 5px var(--gold-400)" : "none"
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials || "?");
}
function Stat({
  value,
  suffix,
  label,
  icon,
  tone = "default",
  align = "center"
}) {
  const labelColor = tone === "inverse" ? "var(--text-inverse-muted)" : "var(--text-muted)";
  return /*#__PURE__*/React.createElement("div", {
    className: "bc-stat",
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align,
      gap: "var(--space-2)"
    }
  }, icon && /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 26,
      height: 26,
      color: "var(--accent)",
      marginBottom: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-extrabold)",
      fontSize: "var(--text-4xl)",
      lineHeight: 1,
      letterSpacing: "var(--tracking-tight)",
      color: "var(--accent)",
      display: "flex",
      alignItems: "baseline"
    }
  }, value, suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.5em",
      marginLeft: "0.1em",
      fontWeight: "var(--weight-bold)"
    }
  }, suffix)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)",
      letterSpacing: "0.02em",
      color: labelColor,
      maxWidth: "18ch"
    }
  }, label));
}
function Input({
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
  required,
  disabled,
  tone = "light",
  ...rest
}) {
  const inputId = id || `bc-input-${Math.random().toString(36).slice(2, 8)}`;
  const dark = tone === "dark";
  const borderColor = error ? "var(--danger)" : dark ? "var(--border-inverse)" : "var(--border-default)";
  return /*#__PURE__*/React.createElement("div", {
    className: "bc-field",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-semibold)",
      color: dark ? "var(--cream-50)" : "var(--text-strong)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--danger)",
      marginLeft: 3
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, icon && /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      position: "absolute",
      left: 14,
      width: 18,
      height: 18,
      color: "var(--text-muted)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    required: required,
    disabled: disabled,
    onFocus: e => {
      e.currentTarget.style.borderColor = error ? "var(--danger)" : "var(--primary)";
      e.currentTarget.style.boxShadow = `0 0 0 3px ${error ? "var(--danger-soft)" : "var(--indigo-50)"}`;
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = borderColor;
      e.currentTarget.style.boxShadow = "none";
    },
    style: {
      width: "100%",
      padding: icon ? "12px 14px 12px 42px" : "12px 14px",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-base)",
      color: dark ? "var(--cream-50)" : "var(--text-strong)",
      background: dark ? "color-mix(in srgb,var(--indigo-950) 50%,transparent)" : disabled ? "var(--surface-sunken)" : "var(--surface-card)",
      border: `1.5px solid ${borderColor}`,
      borderRadius: "var(--radius-md)",
      outline: "none",
      opacity: disabled ? 0.6 : 1,
      transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)"
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: error ? "var(--danger)" : "var(--text-muted)"
    }
  }, error || hint));
}
function Select({
  label,
  id,
  options = [],
  value,
  defaultValue,
  onChange,
  hint,
  required = false,
  disabled = false
}) {
  const selId = id || `bc-sel-${Math.random().toString(36).slice(2, 8)}`;
  const opts = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    className: "bc-field",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-strong)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--danger)",
      marginLeft: 3
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("select", {
    id: selId,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: e => {
      e.currentTarget.style.borderColor = "var(--primary)";
      e.currentTarget.style.boxShadow = "0 0 0 3px var(--indigo-50)";
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = "var(--border-default)";
      e.currentTarget.style.boxShadow = "none";
    },
    style: {
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
      opacity: disabled ? 0.6 : 1
    }
  }, opts.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-down",
    style: {
      position: "absolute",
      right: 14,
      width: 18,
      height: 18,
      color: "var(--text-muted)",
      pointerEvents: "none"
    }
  })), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, hint));
}
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  id,
  disabled
}) {
  const cbId = id || `bc-cb-${Math.random().toString(36).slice(2, 8)}`;
  const [internal, setInternal] = useState(!!defaultChecked);
  const on = checked !== undefined ? checked : internal;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.55 : 1,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-base)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: cbId,
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: e => {
      if (checked === undefined) setInternal(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 22,
      height: 22,
      flex: "0 0 auto",
      borderRadius: 6,
      border: `1.5px solid ${on ? "var(--accent)" : "var(--border-strong)"}`,
      background: on ? "var(--accent)" : "var(--surface-card)",
      color: "var(--indigo-900)",
      transition: "all var(--dur-fast) var(--ease-out)"
    }
  }, on && /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      width: 15,
      height: 15,
      strokeWidth: 3
    }
  })), label);
}
function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  tone = "default",
  maxWidth = "46ch",
  as = "h2"
}) {
  const Title = as;
  const inv = tone === "inverse";
  return /*#__PURE__*/React.createElement("div", {
    className: "bc-section-heading",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align,
      marginInline: align === "center" ? "auto" : 0
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: inv ? "var(--gold-400)" : "var(--text-accent)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 22,
      height: 2,
      background: "currentColor",
      borderRadius: 2,
      display: "inline-block"
    }
  }), eyebrow), /*#__PURE__*/React.createElement(Title, {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--display-section)",
      fontWeight: "var(--weight-extrabold)",
      lineHeight: "var(--leading-tight)",
      letterSpacing: "var(--tracking-tight)",
      color: inv ? "var(--cream-50)" : "var(--text-strong)",
      margin: 0,
      maxWidth
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-md)",
      lineHeight: "var(--leading-relaxed)",
      color: inv ? "var(--text-inverse-muted)" : "var(--text-muted)",
      margin: 0,
      maxWidth
    }
  }, lead));
}
function FeatureCard({
  icon,
  title,
  children,
  tone = "gold"
}) {
  const tints = {
    gold: ["var(--gold-100)", "var(--gold-700)"],
    navy: ["var(--indigo-50)", "var(--indigo-700)"],
    teal: ["var(--teal-50)", "var(--teal-600)"]
  }[tone] || ["var(--gold-100)", "var(--gold-700)"];
  return /*#__PURE__*/React.createElement("div", {
    className: "bc-feature-card",
    onMouseEnter: e => {
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.boxShadow = "var(--shadow-lg)";
      e.currentTarget.style.borderColor = "var(--gold-300)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "";
      e.currentTarget.style.boxShadow = "var(--shadow-sm)";
      e.currentTarget.style.borderColor = "var(--border-subtle)";
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      padding: "var(--space-6)",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-sm)",
      height: "100%",
      transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 52,
      height: 52,
      borderRadius: "var(--radius-md)",
      background: tints[0],
      color: tints[1]
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 26,
      height: 26
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-xl)",
      fontWeight: "var(--weight-bold)",
      color: "var(--text-strong)",
      margin: 0,
      letterSpacing: "var(--tracking-tight)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-base)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-muted)",
      margin: 0
    }
  }, children));
}
function CourseCard({
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
  onClick
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    className: "bc-course-card",
    onMouseEnter: e => {
      e.currentTarget.style.transform = "translateY(-6px)";
      e.currentTarget.style.boxShadow = "var(--shadow-xl)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "";
      e.currentTarget.style.boxShadow = "var(--shadow-sm)";
    },
    style: {
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
      transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "16 / 10",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 12,
      left: 12,
      display: "flex",
      gap: 8
    }
  }, free ? /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    variant: "solid"
  }, "Gratuit") : /*#__PURE__*/React.createElement(Badge, {
    tone: "navy",
    variant: "solid"
  }, price), /*#__PURE__*/React.createElement(Badge, {
    tone: "navy",
    variant: "soft"
  }, "Niveau ", level))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      padding: "var(--space-6)",
      flex: 1
    }
  }, category && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--text-accent)"
    }
  }, category), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-xl)",
      fontWeight: "var(--weight-bold)",
      color: "var(--text-strong)",
      margin: 0,
      lineHeight: "var(--leading-snug)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-base)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-muted)",
      margin: 0,
      flex: 1
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      marginTop: "var(--space-2)",
      paddingTop: "var(--space-4)",
      borderTop: "1px solid var(--divider)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      color: "var(--text-muted)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "clock",
    style: {
      width: 16,
      height: 16
    }
  }), " ", duration), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "book-open",
    style: {
      width: 16,
      height: 16
    }
  }), " ", lessons, " le\xE7ons")), /*#__PURE__*/React.createElement("span", {
    className: "bc-course-cta",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      color: "var(--primary)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--text-base)"
    }
  }, "Voir le cours ", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right",
    style: {
      width: 17,
      height: 17
    }
  })))));
}
function TestimonialCard({
  quote,
  name,
  role,
  photo,
  rating = 5,
  tone = "paper"
}) {
  const inv = tone === "navy";
  return /*#__PURE__*/React.createElement("figure", {
    className: "bc-testimonial",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      margin: 0,
      padding: "var(--space-8)",
      background: inv ? "var(--surface-inverse-2)" : "var(--surface-card)",
      border: inv ? "1px solid var(--border-inverse)" : "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: inv ? "var(--shadow-lg)" : "var(--shadow-sm)",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 3
    },
    "aria-label": `${rating} sur 5`
  }, Array.from({
    length: 5
  }).map((_, i) => /*#__PURE__*/React.createElement("i", {
    key: i,
    "data-lucide": "star",
    style: {
      width: 18,
      height: 18,
      fill: i < rating ? "var(--gold-500)" : "none",
      color: i < rating ? "var(--gold-500)" : "var(--ink-300)"
    }
  }))), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-md)",
      lineHeight: "var(--leading-relaxed)",
      color: inv ? "var(--cream-50)" : "var(--text-body)",
      flex: 1
    }
  }, "\xAB ", quote, " \xBB"), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: photo,
    name: name,
    size: "md"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--text-base)",
      color: inv ? "var(--cream-50)" : "var(--text-strong)"
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: inv ? "var(--text-inverse-muted)" : "var(--text-muted)"
    }
  }, role))));
}
Object.assign(window, {
  Button,
  IconButton,
  Badge,
  Avatar,
  Stat,
  Input,
  Select,
  Checkbox,
  SectionHeading,
  FeatureCard,
  CourseCard,
  TestimonialCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/bridge-kit.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/centres-app.jsx
try { (() => {
/* The Bridge Center — Centres page mount */
const {
  useState: useCeAppState,
  useEffect: useCeAppEffect
} = React;
function CentresApp() {
  const [auth, setAuth] = useCeAppState(null);
  useCeAppEffect(() => {
    document.body.style.overflow = auth ? "hidden" : "";
    window.lucide && window.lucide.createIcons();
  });
  useCeAppEffect(() => {
    let r1 = requestAnimationFrame(() => window.lucide && window.lucide.createIcons());
    const t = setInterval(() => window.lucide && window.lucide.createIcons(), 600);
    setTimeout(() => clearInterval(t), 3500);
    return () => {
      cancelAnimationFrame(r1);
      clearInterval(t);
    };
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    onAuth: setAuth,
    active: "Nos centres"
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(CentresHeader, null), /*#__PURE__*/React.createElement(CentresGrid, null), /*#__PURE__*/React.createElement(OrganisationCours, null), /*#__PURE__*/React.createElement(CentresCTA, {
    onAuth: setAuth
  })), /*#__PURE__*/React.createElement(Footer, null), auth && /*#__PURE__*/React.createElement(AuthModal, {
    mode: auth,
    onClose: () => setAuth(null),
    onSwitch: setAuth
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(CentresApp, null));
requestAnimationFrame(() => window.lucide && window.lucide.createIcons());
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/centres-app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/centres.jsx
try { (() => {
/* The Bridge Center — Page Nos centres */
const {
  useState: useCeState,
  useEffect: useCeEffect
} = React;
const CENTRES = [{
  id: "gombe",
  name: "Centre Gombe",
  quartier: "Gombe — centre-ville",
  adresse: "Avenue de la Libération, N° 14, Gombe",
  ville: "Kinshasa, RD Congo",
  tel: "+243 800 000 001",
  email: "gombe@thebridgecenter.com",
  horaires: "Lun – Sam : 08 h – 21 h",
  tone: "indigo",
  image: "../../assets/tex-navy.png",
  tag: "Siège"
}, {
  id: "limete",
  name: "Centre Limete",
  quartier: "Limete — Industriel",
  adresse: "Boulevard Lumumba, N° 87, Limete",
  ville: "Kinshasa, RD Congo",
  tel: "+243 800 000 002",
  email: "limete@thebridgecenter.com",
  horaires: "Lun – Sam : 08 h – 21 h",
  tone: "teal",
  image: "../../assets/tex-teal.png",
  tag: null
}, {
  id: "lemba",
  name: "Centre Lemba",
  quartier: "Lemba — Université",
  adresse: "Avenue de l'Université, N° 33, Lemba",
  ville: "Kinshasa, RD Congo",
  tel: "+243 800 000 003",
  email: "lemba@thebridgecenter.com",
  horaires: "Lun – Sam : 08 h – 21 h",
  tone: "gold",
  image: "../../assets/tex-gold.png",
  tag: null
}];
const VACATIONS = [{
  id: "matin",
  label: "Vacation du matin",
  icon: "clock",
  start: "08 h 00",
  end: "11 h 00",
  color: "var(--gold-500)",
  bg: "var(--gold-100)",
  fg: "var(--gold-700)",
  desc: "Idéale pour les étudiants et les actifs disponibles le matin."
}, {
  id: "apmidi",
  label: "Vacation de l'après-midi",
  icon: "clock",
  start: "14 h 00",
  end: "17 h 00",
  color: "var(--teal-500)",
  bg: "var(--teal-50)",
  fg: "var(--teal-700)",
  desc: "Le créneau équilibré pour concilier études, travail et vie perso."
}, {
  id: "soir",
  label: "Vacation du soir",
  icon: "clock",
  start: "17 h 30",
  end: "20 h 30",
  color: "var(--indigo-500)",
  bg: "var(--indigo-50)",
  fg: "var(--indigo-700)",
  desc: "Pour les professionnels et travailleurs — après la journée."
}];
const PAIRS_DAYS = ["Lun", "Mer", "Ven"];
const IMPAIRS_DAYS = ["Mar", "Jeu", "Sam"];
const ALL_DAYS = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
function CentresHeader() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--indigo-950)",
      color: "var(--cream-50)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "url(../../assets/tex-navy.png)",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, color-mix(in srgb,var(--indigo-950) 30%,transparent), color-mix(in srgb,var(--indigo-950) 60%,transparent))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "bridge-container",
    style: {
      position: "relative",
      zIndex: 2,
      padding: "var(--section-y-tight) 0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: "var(--gold-400)",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 22,
      height: 2,
      background: "currentColor",
      borderRadius: 2,
      display: "inline-block"
    }
  }), "Nos centres")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--display-hero)",
      fontWeight: "var(--weight-extrabold)",
      lineHeight: 1.04,
      letterSpacing: "var(--tracking-tighter)",
      color: "var(--cream-50)",
      margin: 0,
      maxWidth: "20ch"
    }
  }, "Venez apprendre ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-400)"
    }
  }, "en personne"), " \xE0 Kinshasa.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 160
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-lg)",
      color: "var(--indigo-100)",
      margin: 0,
      maxWidth: "56ch"
    }
  }, "Retrouvez-nous dans nos diff\xE9rents centres \xE0 Kinshasa. Trois quartiers, les m\xEAmes formateurs experts, le m\xEAme engagement \u2014 et des cours en pr\xE9sentiel pour ceux qui apprennent mieux en groupe.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240,
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-8)",
      justifyContent: "center",
      marginTop: "var(--space-4)"
    }
  }, [["building-2", "3 centres à Kinshasa"], ["users", "Cours en petits groupes"], ["clock", "3 vacations / jour"]].map(([ic, lb]) => /*#__PURE__*/React.createElement("span", {
    key: lb,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9,
      fontSize: "var(--text-base)",
      fontWeight: 600,
      color: "var(--indigo-100)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: "var(--radius-pill)",
      background: "color-mix(in srgb,var(--gold-500) 18%,transparent)",
      color: "var(--gold-400)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": ic,
    style: {
      width: 18,
      height: 18
    }
  })), lb)))));
}
function CentreCard({
  c
}) {
  const tint = {
    indigo: ["var(--indigo-50)", "var(--indigo-700)", "var(--indigo-400)"],
    teal: ["var(--teal-50)", "var(--teal-700)", "var(--teal-500)"],
    gold: ["var(--gold-100)", "var(--gold-700)", "var(--gold-500)"]
  }[c.tone];
  return /*#__PURE__*/React.createElement("div", {
    className: "bc-centre-card",
    onMouseEnter: e => {
      e.currentTarget.style.transform = "translateY(-6px)";
      e.currentTarget.style.boxShadow = "var(--shadow-xl)";
      e.currentTarget.style.borderColor = tint[2];
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "";
      e.currentTarget.style.boxShadow = "var(--shadow-md)";
      e.currentTarget.style.borderColor = "var(--border-subtle)";
    },
    style: {
      display: "flex",
      flexDirection: "column",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      boxShadow: "var(--shadow-md)",
      height: "100%",
      transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 160,
      backgroundImage: `url(${c.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "color-mix(in srgb,var(--indigo-950) 35%,transparent)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "linear-gradient(color-mix(in srgb,var(--cream-50) 8%,transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb,var(--cream-50) 8%,transparent) 1px, transparent 1px)",
      backgroundSize: "32px 32px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 46,
      borderRadius: "var(--radius-pill)",
      background: tint[2],
      color: "var(--indigo-950)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "var(--shadow-lg)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map-pin",
    style: {
      width: 22,
      height: 22,
      fill: "var(--indigo-950)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--text-sm)",
      color: "var(--cream-50)",
      textAlign: "center"
    }
  }, c.quartier)), c.tag && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 12,
      right: 12,
      padding: "4px 12px",
      borderRadius: "var(--radius-pill)",
      background: "var(--gold-500)",
      color: "var(--indigo-900)",
      fontSize: "var(--text-xs)",
      fontWeight: 700
    }
  }, c.tag)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      padding: "var(--space-6)",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-xl)",
      fontWeight: 800,
      color: "var(--text-strong)",
      margin: "0 0 4px",
      lineHeight: 1.2
    }
  }, c.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--text-accent)"
    }
  }, c.quartier)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      fontSize: "var(--text-sm)",
      color: "var(--text-body)"
    }
  }, [["map-pin", `${c.adresse} — ${c.ville}`], ["phone", c.tel], ["mail", c.email], ["clock", c.horaires]].map(([ic, tx]) => /*#__PURE__*/React.createElement("span", {
    key: ic,
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": ic,
    style: {
      width: 15,
      height: 15,
      color: tint[1],
      flex: "0 0 auto",
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      lineHeight: 1.45
    }
  }, tx)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: "var(--space-4)",
      borderTop: "1px solid var(--divider)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "10px 20px",
      borderRadius: "var(--radius-pill)",
      background: tint[0],
      color: tint[1],
      border: "none",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      fontWeight: 700,
      cursor: "pointer",
      textDecoration: "none",
      transition: "all var(--dur-fast) var(--ease-out)"
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = tint[2];
      e.currentTarget.style.color = "var(--indigo-950)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = tint[0];
      e.currentTarget.style.color = tint[1];
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "navigation",
    style: {
      width: 15,
      height: 15
    }
  }), "Itin\xE9raire"))));
}
function CentresGrid() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bridge-container",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Nos centres",
    title: "Trois lieux pour apprendre ensemble",
    lead: "Chaque centre offre les m\xEAmes formations et le m\xEAme niveau d'exigence, dans un quartier diff\xE9rent de Kinshasa."
  })), /*#__PURE__*/React.createElement("div", {
    className: "bc-centres-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--space-6)"
    }
  }, CENTRES.map((c, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: c.id,
    delay: i * 100
  }, /*#__PURE__*/React.createElement(CentreCard, {
    c: c
  }))))));
}

/* ---- Vacations ---- */
function VacationCard({
  v
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      padding: "var(--space-8)",
      background: "var(--surface-card)",
      border: `2px solid ${v.bg}`,
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-sm)",
      height: "100%",
      position: "relative",
      overflow: "hidden",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: -20,
      right: -20,
      width: 96,
      height: 96,
      borderRadius: "50%",
      background: v.bg,
      opacity: 0.65,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--space-4)",
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      flex: "0 0 auto",
      borderRadius: "var(--radius-md)",
      background: v.bg,
      color: v.fg,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": v.icon,
    style: {
      width: 24,
      height: 24
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      paddingTop: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "var(--text-lg)",
      color: "var(--text-strong)",
      lineHeight: 1.15
    }
  }, v.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: v.fg,
      fontWeight: 700
    }
  }, "Pr\xE9sentiel \xB7 3 h de cours"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      padding: "var(--space-4) var(--space-5)",
      background: v.bg,
      borderRadius: "var(--radius-md)",
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "clock",
    style: {
      width: 20,
      height: 20,
      color: v.fg,
      flex: "0 0 auto"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "var(--text-2xl)",
      color: v.fg,
      letterSpacing: "var(--tracking-tight)",
      lineHeight: 1,
      whiteSpace: "nowrap"
    }
  }, v.start, "\xA0\u2013\xA0", v.end)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-base)",
      color: "var(--text-muted)",
      margin: 0,
      lineHeight: "var(--leading-relaxed)",
      position: "relative",
      zIndex: 1
    }
  }, v.desc));
}

/* ---- Pairs / Impairs mini-calendar ---- */
function PairsImpaurs() {
  const [highlight, setHighlight] = useCeState(null);
  // Generate a sample month (June 2026, starts Wednesday)
  const MONTH_DAYS = 30;
  const START_DOW = 1; // Monday = 0, June 1 = Monday
  const DOW_LABELS = ["L", "M", "M", "J", "V", "S", "D"];
  const cells = [];
  for (let i = 0; i < START_DOW; i++) cells.push(null);
  for (let d = 1; d <= MONTH_DAYS; d++) cells.push(d);
  const isPair = d => d % 2 === 0;
  const isPairs = d => d && isPair(d);
  const isImpair = d => d && d % 2 !== 0;
  const isSunday = d => d && (d + START_DOW - 1) % 7 === 6;
  return /*#__PURE__*/React.createElement("div", {
    className: "bc-pairs-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-6)",
      alignItems: "start"
    }
  }, [{
    label: "Jours pairs",
    sub: "2, 4, 6, 8 … du mois",
    days: PAIRS_DAYS,
    color: "var(--indigo-700)",
    bg: "var(--indigo-50)",
    glowColor: "var(--indigo-500)"
  }, {
    label: "Jours impairs",
    sub: "1, 3, 5, 7 … du mois",
    days: IMPAIRS_DAYS,
    color: "var(--teal-700)",
    bg: "var(--teal-50)",
    glowColor: "var(--teal-500)"
  }].map(g => /*#__PURE__*/React.createElement("div", {
    key: g.label,
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-6)",
      boxShadow: "var(--shadow-sm)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      borderRadius: "50%",
      background: g.glowColor,
      boxShadow: `0 0 0 4px color-mix(in srgb, ${g.glowColor} 22%, transparent)`,
      flex: "0 0 auto"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "var(--text-lg)",
      color: "var(--text-strong)"
    }
  }, g.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--text-muted)",
      letterSpacing: "0.06em"
    }
  }, g.sub))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, ALL_DAYS.map(d => {
    const active = g.days.includes(d);
    return /*#__PURE__*/React.createElement("span", {
      key: d,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 44,
        height: 44,
        borderRadius: "var(--radius-md)",
        fontFamily: "var(--font-display)",
        fontWeight: active ? 800 : 600,
        fontSize: "var(--text-sm)",
        background: active ? g.bg : "var(--surface-raised)",
        color: active ? g.color : "var(--text-faint)",
        border: active ? `2px solid color-mix(in srgb, ${g.glowColor} 30%, transparent)` : "1px solid var(--border-subtle)",
        boxShadow: active ? `0 4px 12px -4px color-mix(in srgb, ${g.glowColor} 40%, transparent)` : "none",
        transition: "all var(--dur-fast)"
      }
    }, d);
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      margin: "var(--space-4) 0 0",
      lineHeight: "var(--leading-relaxed)"
    }
  }, g.label === "Jours pairs" ? "Votre groupe se retrouve les lundis, mercredis et vendredis dont le numéro est pair dans le mois." : "Votre groupe se retrouve les mardis, jeudis et samedis dont le numéro est impair dans le mois."))), /*#__PURE__*/React.createElement("div", {
    className: "bc-minical",
    style: {
      gridColumn: "1 / -1",
      background: "var(--surface-page)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-6)",
      boxShadow: "var(--shadow-xs)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      color: "var(--text-strong)",
      fontSize: "var(--text-md)"
    }
  }, "Juin 2026 \u2014 exemple illustratif"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      fontSize: "var(--text-sm)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: 3,
      background: "var(--indigo-500)",
      display: "inline-block"
    }
  }), "Pairs"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: 3,
      background: "var(--teal-500)",
      display: "inline-block"
    }
  }), "Impairs"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: 3,
      background: "var(--gold-500)",
      display: "inline-block"
    }
  }), "Club"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
      gap: 4
    }
  }, DOW_LABELS.map(d => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      textAlign: "center",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: 700,
      color: "var(--text-faint)",
      letterSpacing: "0.08em",
      padding: "4px 0"
    }
  }, d)), cells.map((d, i) => {
    if (!d) return /*#__PURE__*/React.createElement("div", {
      key: `e-${i}`
    });
    const dow = i % 7; // 0=Mon
    const isSat = (d + START_DOW - 1) % 7 === 5;
    const isSun = (d + START_DOW - 1) % 7 === 6;
    const isClub = isSat;
    const isPairsDay = !isSun && isPairs(d) && !isSat;
    const isImpaursDay = !isSun && isImpair(d) && !isSat;
    let bg = "transparent",
      fg = "var(--text-muted)",
      fw = 400,
      brd = "1px solid transparent";
    if (isClub) {
      bg = "var(--gold-500)";
      fg = "var(--indigo-900)";
      fw = 800;
      brd = "none";
    } else if (isPairsDay) {
      bg = "var(--indigo-50)";
      fg = "var(--indigo-700)";
      fw = 700;
      brd = "1px solid color-mix(in srgb,var(--indigo-400) 30%,transparent)";
    } else if (isImpaursDay) {
      bg = "var(--teal-50)";
      fg = "var(--teal-700)";
      fw = 700;
      brd = "1px solid color-mix(in srgb,var(--teal-400) 30%,transparent)";
    }
    if (isSun) {
      fg = "var(--ink-300)";
    }
    return /*#__PURE__*/React.createElement("div", {
      key: d,
      style: {
        textAlign: "center",
        padding: "7px 2px",
        borderRadius: "var(--radius-sm)",
        background: bg,
        color: fg,
        fontFamily: "var(--font-body)",
        fontWeight: fw,
        fontSize: "var(--text-sm)",
        border: brd,
        transition: "all var(--dur-fast)"
      }
    }, d);
  }))));
}

/* ---- Club de conversation ---- */
function ClubSection() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "var(--radius-2xl)",
      background: "var(--indigo-900)",
      color: "var(--cream-50)",
      boxShadow: "var(--shadow-xl)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "url(../../assets/tex-dusk.png)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.55
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      display: "grid",
      gridTemplateColumns: "1fr auto",
      gap: "var(--space-8)",
      alignItems: "center",
      padding: "var(--space-10) var(--space-12)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: "var(--gold-400)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 22,
      height: 2,
      background: "currentColor",
      borderRadius: 2,
      display: "inline-block"
    }
  }), "Le club de conversation"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--display-sub)",
      fontWeight: 800,
      lineHeight: 1.1,
      letterSpacing: "var(--tracking-tight)",
      color: "var(--cream-50)",
      margin: 0,
      maxWidth: "22ch"
    }
  }, "Le samedi, on pratique \u2014 et on s'amuse."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-md)",
      color: "var(--indigo-100)",
      margin: 0,
      lineHeight: "var(--leading-relaxed)",
      maxWidth: "52ch"
    }
  }, "Chaque samedi matin, nos centres accueillent le ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--cream-50)"
    }
  }, "Club de conversation"), " \u2014 un espace libre et chaleureux pour pratiquer l'oral, rencontrer d'autres apprenants et gagner en confiance sans la pression du cours."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-6)",
      marginTop: 4
    }
  }, [["calendar", "Tous les samedis"], ["clock", "10 h 00 – 12 h 00"], ["users", "Tous niveaux bienvenus"], ["map-pin", "Dans tous nos centres"]].map(([ic, tx]) => /*#__PURE__*/React.createElement("span", {
    key: tx,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontSize: "var(--text-sm)",
      fontWeight: 600,
      color: "var(--indigo-100)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": ic,
    style: {
      width: 16,
      height: 16,
      color: "var(--gold-400)"
    }
  }), tx)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 10,
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 100,
      height: 100,
      borderRadius: "var(--radius-pill)",
      background: "var(--gold-500)",
      color: "var(--indigo-900)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 12px 32px -8px color-mix(in srgb,var(--gold-500) 65%,transparent)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: "0.08em"
    }
  }, "SAM"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 28,
      lineHeight: 1
    }
  }, "\u2605"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: 700
    }
  }, "10 h 00")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      fontWeight: 700,
      color: "var(--gold-300)",
      letterSpacing: "0.06em",
      textTransform: "uppercase"
    }
  }, "Entr\xE9e libre"))));
}
function OrganisationCours() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-card)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bridge-container",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--section-y-tight)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Organisation des cours",
    title: "Choisissez votre cr\xE9neau",
    lead: "Trois vacations par jour pour s'adapter \xE0 tous les emplois du temps \u2014 matin, apr\xE8s-midi ou soir."
  })), /*#__PURE__*/React.createElement("div", {
    className: "bc-vac-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--space-6)"
    }
  }, VACATIONS.map((v, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: v.id,
    delay: i * 90
  }, /*#__PURE__*/React.createElement(VacationCard, {
    v: v
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Groupes pairs / impairs",
    title: "Comment sont r\xE9partis les groupes ?",
    lead: "Pour fluidifier l'organisation, chaque groupe est affect\xE9 aux jours pairs ou impairs du mois."
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement(PairsImpaurs, null))), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(ClubSection, null))));
}
function CentresCTA({
  onAuth
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--indigo-950)",
      color: "var(--cream-50)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "url(../../assets/tex-navy.png)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.9
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, color-mix(in srgb,var(--indigo-950) 30%,transparent), color-mix(in srgb,var(--indigo-950) 55%,transparent))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "bridge-container",
    style: {
      position: "relative",
      zIndex: 2,
      padding: "var(--section-y) 0",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: "var(--gold-400)",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 22,
      height: 2,
      background: "currentColor",
      borderRadius: 2,
      display: "inline-block"
    }
  }), "Passez \xE0 l'action")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--display-section)",
      fontWeight: "var(--weight-extrabold)",
      lineHeight: 1.05,
      letterSpacing: "var(--tracking-tight)",
      color: "var(--cream-50)",
      margin: 0,
      maxWidth: "28ch"
    }
  }, "Choisissez le centre et l'horaire qui vous conviennent.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 140
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-lg)",
      color: "var(--indigo-100)",
      margin: 0,
      maxWidth: "48ch"
    }
  }, "Inscription gratuite en ligne \u2014 apportez simplement votre envie d'apprendre. Le reste, c'est notre affaire.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200,
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 14,
      justifyContent: "center",
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => onAuth("signup")
  }, "S'inscrire gratuitement"), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse-ghost",
    size: "lg",
    icon: "phone",
    href: "contact.html"
  }, "Nous contacter"))));
}
Object.assign(window, {
  CentresHeader,
  CentresGrid,
  OrganisationCours,
  CentresCTA
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/centres.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/chrome.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The Bridge Center — shared chrome: Reveal, Header, Footer, Logo */
const {
  useEffect,
  useRef,
  useState: useStateChrome
} = React;

/* Scroll reveal — gentle fade + rise, respects reduced motion */
function Reveal({
  children,
  delay = 0,
  y = 22,
  as = "div",
  style = {},
  ...rest
}) {
  const ref = useRef(null);
  const [shown, setShown] = useStateChrome(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setShown(true);
          io.unobserve(el);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -8% 0px"
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    ref: ref,
    style: {
      opacity: shown ? 1 : 0,
      transform: shown ? "none" : `translateY(${y}px)`,
      transition: `opacity var(--dur-slow) var(--ease-out) ${delay}ms, transform var(--dur-slow) var(--ease-out) ${delay}ms`,
      ...style
    }
  }, rest), children);
}
function Logo({
  variant = "navy",
  size = 40,
  wordmark = true
}) {
  const src = variant === "white" ? "../../assets/mark-white.png" : "../../assets/mark-navy.png";
  const wordColor = variant === "white" ? "var(--cream-50)" : "var(--indigo-900)";
  return /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    "aria-label": "The Bridge Center \u2014 accueil",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    width: size,
    height: size,
    style: {
      width: size,
      height: size,
      objectFit: "contain"
    }
  }), wordmark && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-extrabold)",
      fontSize: "var(--text-md)",
      letterSpacing: "var(--tracking-tight)",
      color: wordColor
    }
  }, "The Bridge Center"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "10px",
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: variant === "white" ? "var(--gold-400)" : "var(--gold-600)",
      marginTop: 3
    }
  }, "Cours d'anglais \xB7 En ligne & en pr\xE9sentiel")));
}

/* ---- Navigation structure ---- */
const NAVITEMS = [{
  label: "Accueil",
  href: "index.html"
}, {
  label: "Formations",
  href: "formations.html"
}, {
  label: "Communauté",
  children: [{
    label: "Blog",
    href: "blog.html",
    icon: "book-open-text",
    desc: "Astuces, grammaire & culture"
  }, {
    label: "Forum",
    href: "forum.html",
    icon: "messages-square",
    desc: "Questions, entraide & échanges"
  }]
}, {
  label: "Le centre",
  children: [{
    label: "À propos",
    href: "apropos.html",
    icon: "heart-handshake",
    desc: "Histoire, équipe & méthode"
  }, {
    label: "Nos centres",
    href: "centres.html",
    icon: "building-2",
    desc: "Kinshasa — horaires & accès"
  }, {
    label: "Contact",
    href: "contact.html",
    icon: "mail",
    desc: "Écrivez-nous"
  }]
}];

/* Active page → top-level label */
function topActive(active) {
  if (!active) return "Accueil";
  const map = {
    Blog: "Communauté",
    Forum: "Communauté",
    "À propos": "Le centre",
    "Nos centres": "Le centre",
    Contact: "Le centre"
  };
  return map[active] || active;
}

/* ---- Desktop dropdown item ---- */
function DropItem({
  item,
  onClose
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: item.href,
    onClick: onClose,
    onMouseEnter: e => {
      e.currentTarget.style.background = "var(--surface-raised)";
      e.currentTarget.querySelector("span")?.style && (e.currentTarget.querySelector("span").style.color = "var(--accent-active)");
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = "transparent";
      e.currentTarget.querySelector("span")?.style && (e.currentTarget.querySelector("span").style.color = "var(--text-strong)");
    },
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      padding: "12px 14px",
      borderRadius: "var(--radius-md)",
      textDecoration: "none",
      color: "inherit",
      transition: "background var(--dur-fast) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      flex: "0 0 auto",
      borderRadius: "var(--radius-sm)",
      background: "var(--indigo-50)",
      color: "var(--indigo-700)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": item.icon,
    style: {
      width: 18,
      height: 18
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--text-base)",
      color: "var(--text-strong)",
      transition: "color var(--dur-fast)"
    }
  }, item.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      lineHeight: 1.4
    }
  }, item.desc)));
}

/* ---- Desktop nav item (with optional dropdown) ---- */
function NavItem({
  item,
  isActive
}) {
  const [open, setOpen] = useStateChrome(false);
  const ref = useRef(null);
  const timerRef = useRef(null);
  const hasChildren = !!item.children;
  const openDrop = () => {
    clearTimeout(timerRef.current);
    setOpen(true);
  };
  const closeDrop = () => {
    timerRef.current = setTimeout(() => setOpen(false), 120);
  };
  useEffect(() => {
    if (open) requestAnimationFrame(() => window.lucide && window.lucide.createIcons());
  }, [open]);
  useEffect(() => {
    const onKey = e => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  useEffect(() => {
    if (!hasChildren) return;
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [hasChildren]);
  if (!hasChildren) {
    return /*#__PURE__*/React.createElement("a", {
      href: item.href,
      style: {
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        padding: "8px 14px",
        fontSize: "var(--text-base)",
        fontWeight: isActive ? 600 : 500,
        color: isActive ? "var(--indigo-900)" : "var(--text-body)",
        borderRadius: "var(--radius-sm)",
        textDecoration: "none",
        whiteSpace: "nowrap",
        transition: "color var(--dur-fast) var(--ease-out)"
      },
      onMouseEnter: e => e.currentTarget.style.color = "var(--accent-active)",
      onMouseLeave: e => e.currentTarget.style.color = isActive ? "var(--indigo-900)" : "var(--text-body)"
    }, item.label, isActive && /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        left: 14,
        right: 14,
        bottom: 0,
        height: 2,
        background: "var(--gold-500)",
        borderRadius: 2
      }
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: "relative"
    },
    onMouseEnter: openDrop,
    onMouseLeave: closeDrop
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(v => !v),
    "aria-haspopup": "true",
    "aria-expanded": open,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      padding: "8px 14px",
      border: "none",
      background: "transparent",
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-base)",
      fontWeight: isActive ? 600 : 500,
      color: isActive ? "var(--indigo-900)" : "var(--text-body)",
      borderRadius: "var(--radius-sm)",
      whiteSpace: "nowrap",
      transition: "color var(--dur-fast) var(--ease-out)",
      position: "relative"
    },
    onMouseEnter: e => e.currentTarget.style.color = "var(--accent-active)",
    onMouseLeave: e => e.currentTarget.style.color = isActive ? "var(--indigo-900)" : "var(--text-body)"
  }, item.label, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-down",
    style: {
      width: 15,
      height: 15,
      transform: open ? "rotate(180deg)" : "none",
      transition: "transform var(--dur-fast) var(--ease-out)"
    }
  }), isActive && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: 14,
      right: 14,
      bottom: 0,
      height: 2,
      background: "var(--gold-500)",
      borderRadius: 2
    }
  })), /*#__PURE__*/React.createElement("div", {
    role: "menu",
    style: {
      position: "absolute",
      top: "calc(100% + 10px)",
      left: "50%",
      transform: open ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(-8px)",
      minWidth: 240,
      padding: 8,
      borderRadius: "var(--radius-lg)",
      background: "color-mix(in srgb, var(--cream-50) 88%, transparent)",
      backdropFilter: "saturate(1.4) blur(18px)",
      WebkitBackdropFilter: "saturate(1.4) blur(18px)",
      border: "1px solid var(--border-subtle)",
      boxShadow: "var(--shadow-xl)",
      opacity: open ? 1 : 0,
      pointerEvents: open ? "auto" : "none",
      transition: "opacity var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)",
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -6,
      left: "50%",
      transform: "translateX(-50%)",
      width: 12,
      height: 12,
      background: "color-mix(in srgb, var(--cream-50) 88%, transparent)",
      borderTop: "1px solid var(--border-subtle)",
      borderLeft: "1px solid var(--border-subtle)",
      rotate: "45deg"
    }
  }), item.children.map(child => /*#__PURE__*/React.createElement(DropItem, {
    key: child.label,
    item: child,
    onClose: () => setOpen(false)
  }))));
}

/* ---- Mobile accordion item ---- */
function MobileNavItem({
  item,
  onClose
}) {
  const [open, setOpen] = useStateChrome(false);
  const hasChildren = !!item.children;
  if (!hasChildren) {
    return /*#__PURE__*/React.createElement("a", {
      href: item.href,
      onClick: onClose,
      style: {
        display: "block",
        padding: "14px 8px",
        fontSize: "var(--text-lg)",
        fontWeight: 500,
        color: "var(--text-body)",
        borderBottom: "1px solid var(--divider)",
        textDecoration: "none"
      }
    }, item.label);
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "1px solid var(--divider)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(v => !v),
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      padding: "14px 8px",
      border: "none",
      background: "none",
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-lg)",
      fontWeight: 600,
      color: "var(--text-strong)",
      textAlign: "left"
    }
  }, item.label, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-down",
    style: {
      width: 20,
      height: 20,
      color: "var(--text-muted)",
      transform: open ? "rotate(180deg)" : "none",
      transition: "transform var(--dur-fast)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: open ? 400 : 0,
      overflow: "hidden",
      transition: "max-height var(--dur-base) var(--ease-out)",
      paddingLeft: 16
    }
  }, item.children.map(child => /*#__PURE__*/React.createElement("a", {
    key: child.label,
    href: child.href,
    onClick: onClose,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "11px 8px",
      fontSize: "var(--text-base)",
      fontWeight: 500,
      color: "var(--text-body)",
      borderTop: "1px solid var(--divider)",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": child.icon,
    style: {
      width: 17,
      height: 17,
      color: "var(--gold-600)"
    }
  }), child.label))));
}
function Header({
  onAuth,
  active = "Accueil"
}) {
  const [scrolled, setScrolled] = useStateChrome(false);
  const [mobileOpen, setMobileOpen] = useStateChrome(false);
  const topLevel = topActive(active);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    window.lucide && window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: scrolled ? "color-mix(in srgb, var(--cream-50) 88%, transparent)" : "transparent",
      backdropFilter: scrolled ? "saturate(1.4) blur(14px)" : "none",
      WebkitBackdropFilter: scrolled ? "saturate(1.4) blur(14px)" : "none",
      borderBottom: scrolled ? "1px solid var(--divider)" : "1px solid transparent",
      transition: "background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bridge-container",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 76,
      gap: 20,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "navy"
  }), /*#__PURE__*/React.createElement("nav", {
    className: "bc-desktop-nav",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 2,
      flex: "0 0 auto"
    }
  }, NAVITEMS.map(item => /*#__PURE__*/React.createElement(NavItem, {
    key: item.label,
    item: item,
    isActive: topLevel === item.label
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bc-desktop-nav",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => onAuth("login")
  }, "Se connecter"), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "sm",
    iconRight: "arrow-right",
    onClick: () => onAuth("signup")
  }, "S'inscrire")), /*#__PURE__*/React.createElement("button", {
    className: "bc-mobile-toggle",
    "aria-label": "Menu",
    "aria-expanded": mobileOpen,
    onClick: () => setMobileOpen(v => !v),
    style: {
      display: "none",
      alignItems: "center",
      justifyContent: "center",
      width: 44,
      height: 44,
      borderRadius: "var(--radius-md)",
      border: "1.5px solid var(--border-default)",
      background: "var(--surface-card)",
      cursor: "pointer",
      color: "var(--indigo-900)",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": mobileOpen ? "x" : "menu",
    style: {
      width: 22,
      height: 22
    }
  }))), mobileOpen && /*#__PURE__*/React.createElement("div", {
    className: "bc-mobile-menu",
    style: {
      padding: "4px var(--gutter) 24px",
      background: "var(--cream-50)",
      borderBottom: "1px solid var(--divider)"
    }
  }, NAVITEMS.map(item => /*#__PURE__*/React.createElement(MobileNavItem, {
    key: item.label,
    item: item,
    onClose: () => setMobileOpen(false)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    full: true,
    onClick: () => {
      setMobileOpen(false);
      onAuth("login");
    }
  }, "Se connecter"), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    full: true,
    onClick: () => {
      setMobileOpen(false);
      onAuth("signup");
    }
  }, "S'inscrire"))));
}
function Footer() {
  const cols = [{
    h: "Formations",
    items: ["Tous les cours", "Anglais général", "Anglais professionnel", "Préparation TOEFL", "Conversation & oral"]
  }, {
    h: "Ressources",
    items: ["Blog", "Forum communauté", "Test de niveau", "Centre d'aide", "Devenir formateur"]
  }, {
    h: "Le centre",
    items: ["À propos", "Notre méthode", "Témoignages", "Partenaires", "Contact"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--indigo-950)",
      color: "var(--cream-100)",
      paddingTop: "var(--space-20)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bridge-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bc-footer-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
      gap: "var(--space-12)",
      paddingBottom: "var(--space-16)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18,
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "white"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-lg)",
      fontStyle: "italic",
      color: "var(--gold-400)",
      margin: 0,
      lineHeight: 1.3
    }
  }, "\xAB If you're rich, be the bridge. \xBB"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--indigo-200)",
      margin: 0,
      lineHeight: "var(--leading-relaxed)"
    }
  }, "Le centre en ligne qui relie les francophones du monde entier \xE0 l'anglais \u2014 du A1 au C2. N\xE9 \xE0 Kinshasa, ouvert sur le monde."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 4
    }
  }, [["facebook", "Facebook"], ["instagram", "Instagram"], ["whatsapp", "WhatsApp"], ["tiktok", "TikTok"], ["youtube", "YouTube"]].map(([slug, label]) => /*#__PURE__*/React.createElement("a", {
    key: slug,
    href: "#",
    onClick: e => e.preventDefault(),
    "aria-label": label,
    title: label,
    onMouseEnter: e => {
      e.currentTarget.style.background = "var(--gold-500)";
      e.currentTarget.style.borderColor = "var(--gold-500)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = "color-mix(in srgb,var(--cream-50) 12%,transparent)";
      e.currentTarget.style.borderColor = "var(--border-inverse)";
    },
    style: {
      width: 40,
      height: 40,
      borderRadius: "var(--radius-pill)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "color-mix(in srgb,var(--cream-50) 12%,transparent)",
      border: "1px solid var(--border-inverse)",
      transition: "background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `https://cdn.simpleicons.org/${slug}/f7f1e5`,
    alt: "",
    width: "17",
    height: "17",
    style: {
      width: 17,
      height: 17
    }
  }))))), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-base)",
      fontWeight: "var(--weight-bold)",
      color: "var(--cream-50)",
      margin: 0,
      letterSpacing: "0.01em"
    }
  }, c.h), c.items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--indigo-200)",
      transition: "color var(--dur-fast)"
    },
    onMouseEnter: e => e.currentTarget.style.color = "var(--gold-400)",
    onMouseLeave: e => e.currentTarget.style.color = "var(--indigo-200)"
  }, it))))), /*#__PURE__*/React.createElement("div", {
    className: "bc-footer-bottom",
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 28,
      alignItems: "center",
      justifyContent: "space-between",
      padding: "var(--space-10) 0",
      borderTop: "1px solid color-mix(in srgb, var(--cream-50) 12%, transparent)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 24
    }
  }, [["globe", "100 % en ligne · partout dans le monde"], ["building-2", "Centres physiques"], ["mail", "bonjour@thebridgecenter.com"], ["map-pin", "Siège : Kinshasa, RDC"]].map(([ic, tx]) => /*#__PURE__*/React.createElement("span", {
    key: tx,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontSize: "var(--text-sm)",
      color: "var(--indigo-200)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": ic,
    style: {
      width: 16,
      height: 16,
      color: "var(--gold-400)"
    }
  }), ic === "building-2" ? /*#__PURE__*/React.createElement("span", null, "Centres physiques : ", /*#__PURE__*/React.createElement("a", {
    href: "centres.html",
    style: {
      color: "var(--gold-400)",
      fontWeight: 600
    }
  }, "Gombe \xB7 Limete \xB7 Lemba"), " (Kinshasa)") : tx))), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => e.preventDefault(),
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "Votre e-mail",
    "aria-label": "E-mail newsletter",
    style: {
      padding: "11px 16px",
      borderRadius: "var(--radius-pill)",
      border: "1.5px solid color-mix(in srgb,var(--cream-50) 18%,transparent)",
      background: "color-mix(in srgb,var(--indigo-900) 60%,transparent)",
      color: "var(--cream-50)",
      fontSize: "var(--text-sm)",
      minWidth: 200
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "sm",
    type: "submit",
    iconRight: "send"
  }, "S'abonner"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-6) 0 var(--space-10)",
      display: "flex",
      flexWrap: "wrap",
      gap: 16,
      justifyContent: "space-between",
      fontSize: "var(--text-sm)",
      color: "var(--indigo-300)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 The Bridge Center. Tous droits r\xE9serv\xE9s."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: "var(--indigo-300)"
    }
  }, "Confidentialit\xE9"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: "var(--indigo-300)"
    }
  }, "Conditions"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: "var(--indigo-300)"
    }
  }, "Mentions l\xE9gales")))));
}
Object.assign(window, {
  Reveal,
  Header,
  Footer,
  Logo,
  NAVITEMS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/contact-app.jsx
try { (() => {
/* The Bridge Center — Contact page mount */
const {
  useState: useCoAppState,
  useEffect: useCoAppEffect
} = React;
function ContactApp() {
  const [auth, setAuth] = useCoAppState(null);
  useCoAppEffect(() => {
    document.body.style.overflow = auth ? "hidden" : "";
    window.lucide && window.lucide.createIcons();
  });
  useCoAppEffect(() => {
    let r1 = requestAnimationFrame(() => window.lucide && window.lucide.createIcons());
    const t = setInterval(() => window.lucide && window.lucide.createIcons(), 600);
    setTimeout(() => clearInterval(t), 3500);
    return () => {
      cancelAnimationFrame(r1);
      clearInterval(t);
    };
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    onAuth: setAuth,
    active: "Contact"
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(ContactHeader, null), /*#__PURE__*/React.createElement(ContactMain, null), /*#__PURE__*/React.createElement(MapPlaceholder, null), /*#__PURE__*/React.createElement(ContactFAQ, null)), /*#__PURE__*/React.createElement(Footer, null), auth && /*#__PURE__*/React.createElement(AuthModal, {
    mode: auth,
    onClose: () => setAuth(null),
    onSwitch: setAuth
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(ContactApp, null));
requestAnimationFrame(() => window.lucide && window.lucide.createIcons());
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/contact-app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/contact.jsx
try { (() => {
/* The Bridge Center — Page Contact */
const {
  useState: useCoState,
  useEffect: useCoEffect
} = React;
function ContactHeader() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--indigo-950)",
      color: "var(--cream-50)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "url(../../assets/tex-navy.png)",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, color-mix(in srgb,var(--indigo-950) 30%,transparent), color-mix(in srgb,var(--indigo-950) 60%,transparent))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "bridge-container",
    style: {
      position: "relative",
      zIndex: 2,
      padding: "var(--section-y-tight) 0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: "var(--gold-400)",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 22,
      height: 2,
      background: "currentColor",
      borderRadius: 2,
      display: "inline-block"
    }
  }), "Contact")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--display-hero)",
      fontWeight: "var(--weight-extrabold)",
      lineHeight: 1.04,
      letterSpacing: "var(--tracking-tighter)",
      color: "var(--cream-50)",
      margin: 0,
      maxWidth: "18ch"
    }
  }, "Parlons de votre ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-400)"
    }
  }, "projet"), " d'anglais.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 160
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-lg)",
      color: "var(--indigo-100)",
      margin: 0,
      maxWidth: "54ch"
    }
  }, "Une question sur nos formations, un partenariat, une demande d'information ? \xC9crivez-nous \u2014 notre \xE9quipe vous r\xE9pond g\xE9n\xE9ralement en moins de 24 heures."))));
}
function ContactForm() {
  const [sent, setSent] = useCoState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-md)",
      padding: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      marginBottom: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-2xl)",
      fontWeight: 800,
      color: "var(--text-strong)",
      margin: 0
    }
  }, "Envoyez-nous un message"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-base)",
      color: "var(--text-muted)",
      margin: 0
    }
  }, "Tous les champs marqu\xE9s d'un * sont obligatoires.")), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: 14,
      padding: "var(--space-12) 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      borderRadius: "var(--radius-pill)",
      background: "var(--success-soft)",
      color: "var(--success)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      width: 32,
      height: 32,
      strokeWidth: 3
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-xl)",
      color: "var(--text-strong)",
      margin: 0
    }
  }, "Message envoy\xE9\xA0!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-base)",
      color: "var(--text-muted)",
      margin: 0,
      maxWidth: "36ch"
    }
  }, "Merci de nous avoir \xE9crit. Nous revenons vers vous tr\xE8s vite."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "rotate-ccw",
    onClick: () => setSent(false)
  }, "Envoyer un autre message")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bc-contact-fields",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nom complet",
    icon: "user",
    placeholder: "Gr\xE2ce Mukendi",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Adresse e-mail",
    type: "email",
    icon: "mail",
    placeholder: "vous@exemple.com",
    required: true
  })), /*#__PURE__*/React.createElement(Select, {
    label: "Sujet",
    required: true,
    options: ["Choisissez un sujet", "Demande d'information", "Inscription à une formation", "Question sur un cours", "Partenariat", "Devenir formateur", "Autre"]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "bc-msg",
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      fontWeight: 600,
      color: "var(--text-strong)"
    }
  }, "Message", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--danger)",
      marginLeft: 3
    }
  }, "*")), /*#__PURE__*/React.createElement("textarea", {
    id: "bc-msg",
    required: true,
    rows: 6,
    placeholder: "Dites-nous comment nous pouvons vous aider\u2026",
    style: {
      width: "100%",
      padding: "12px 14px",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-base)",
      color: "var(--text-strong)",
      background: "var(--surface-card)",
      border: "1.5px solid var(--border-default)",
      borderRadius: "var(--radius-md)",
      outline: "none",
      resize: "vertical",
      minHeight: 120,
      transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)"
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = "var(--primary)";
      e.currentTarget.style.boxShadow = "0 0 0 3px var(--indigo-50)";
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = "var(--border-default)";
      e.currentTarget.style.boxShadow = "none";
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "shield-check",
    style: {
      width: 16,
      height: 16,
      color: "var(--teal-500)"
    }
  }), "Vos donn\xE9es restent confidentielles."), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    type: "submit",
    iconRight: "send"
  }, "Envoyer le message"))));
}
function ContactInfo() {
  const items = [{
    icon: "map-pin",
    label: "Adresse",
    lines: ["Avenue de la Libération, Gombe", "Kinshasa, RD Congo"]
  }, {
    icon: "mail",
    label: "E-mail",
    lines: ["bonjour@thebridgecenter.com", "support@thebridgecenter.com"]
  }, {
    icon: "phone",
    label: "Téléphone",
    lines: ["+243 800 000 000", "+243 810 000 000 (WhatsApp)"]
  }, {
    icon: "clock",
    label: "Horaires (GMT+1)",
    lines: ["Lun – Ven : 8 h – 18 h", "Sam : 9 h – 13 h · Dim : fermé"]
  }];
  const socials = [["facebook", "Facebook"], ["instagram", "Instagram"], ["whatsapp", "WhatsApp"], ["tiktok", "TikTok"], ["youtube", "YouTube"]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "var(--radius-xl)",
      background: "var(--indigo-900)",
      color: "var(--cream-50)",
      padding: "var(--space-10)",
      boxShadow: "var(--shadow-lg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "url(../../assets/tex-navy.png)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-2xl)",
      fontWeight: 800,
      color: "var(--cream-50)",
      margin: 0
    }
  }, "Nos coordonn\xE9es"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.label,
    style: {
      display: "flex",
      gap: "var(--space-4)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 46,
      flex: "0 0 auto",
      borderRadius: "var(--radius-md)",
      background: "color-mix(in srgb, var(--gold-500) 22%, transparent)",
      color: "var(--gold-400)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": it.icon,
    style: {
      width: 22,
      height: 22
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--gold-400)"
    }
  }, it.label), it.lines.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      fontSize: "var(--text-base)",
      color: "var(--cream-100)",
      lineHeight: 1.5
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      paddingTop: "var(--space-4)",
      borderTop: "1px solid var(--border-inverse)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: 600,
      color: "var(--indigo-100)"
    }
  }, "Suivez-nous"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, socials.map(([slug, label]) => /*#__PURE__*/React.createElement("a", {
    key: slug,
    href: "#",
    onClick: e => e.preventDefault(),
    "aria-label": label,
    title: label,
    onMouseEnter: e => {
      e.currentTarget.style.background = "var(--gold-500)";
      e.currentTarget.style.borderColor = "var(--gold-500)";
      e.currentTarget.style.transform = "translateY(-2px)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = "color-mix(in srgb,var(--cream-50) 12%,transparent)";
      e.currentTarget.style.borderColor = "var(--border-inverse)";
      e.currentTarget.style.transform = "";
    },
    style: {
      width: 42,
      height: 42,
      borderRadius: "var(--radius-pill)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "color-mix(in srgb,var(--cream-50) 12%,transparent)",
      border: "1px solid var(--border-inverse)",
      transition: "all var(--dur-fast) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `https://cdn.simpleicons.org/${slug}/f7f1e5`,
    alt: "",
    width: "18",
    height: "18",
    style: {
      width: 18,
      height: 18
    }
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      padding: "var(--space-6)",
      background: "var(--surface-accent-soft)",
      border: "1px solid var(--gold-200)",
      borderRadius: "var(--radius-lg)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      flex: "0 0 auto",
      borderRadius: "var(--radius-md)",
      background: "var(--gold-500)",
      color: "var(--indigo-900)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "headphones",
    style: {
      width: 22,
      height: 22
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--text-base)",
      color: "var(--text-strong)"
    }
  }, "Besoin d'une r\xE9ponse rapide\xA0?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, "\xC9crivez-nous sur WhatsApp, on adore discuter."))));
}
function MapPlaceholder() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-card)",
      padding: "0 0 var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bridge-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      boxShadow: "var(--shadow-md)",
      border: "1px solid var(--border-subtle)",
      aspectRatio: "21 / 7",
      minHeight: 280,
      backgroundImage: "url(../../assets/tex-indigo.png)",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "color-mix(in srgb, var(--indigo-950) 30%, transparent)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "linear-gradient(color-mix(in srgb,var(--cream-50) 12%,transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb,var(--cream-50) 12%,transparent) 1px, transparent 1px)",
      backgroundSize: "48px 48px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
      textAlign: "center",
      color: "var(--cream-50)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      borderRadius: "var(--radius-pill)",
      background: "var(--gold-500)",
      color: "var(--indigo-900)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "var(--shadow-lg)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map-pin",
    style: {
      width: 32,
      height: 32,
      fill: "var(--indigo-900)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "var(--text-xl)"
    }
  }, "The Bridge Center \u2014 Kinshasa"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-base)",
      color: "var(--indigo-100)"
    }
  }, "Avenue de la Lib\xE9ration, Gombe \xB7 Kinshasa, RDC"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 6,
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 16px",
      borderRadius: "var(--radius-pill)",
      background: "color-mix(in srgb,var(--cream-50) 14%,transparent)",
      border: "1px solid var(--border-inverse)",
      fontSize: "var(--text-sm)",
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "external-link",
    style: {
      width: 15,
      height: 15
    }
  }), "Ouvrir dans Google Maps (placeholder)")))));
}
function ContactFAQ() {
  const faqs = [{
    q: "Les formations sont-elles vraiment gratuites ?",
    a: "Oui ! Toutes nos formations de base (du A1 au B1) sont 100 % gratuites. Certaines formations avancées et préparations aux examens sont en accès Premium."
  }, {
    q: "Faut-il être à Kinshasa pour suivre les cours ?",
    a: "Pas du tout. Tout se passe en ligne : vous pouvez apprendre depuis n'importe où dans le monde, à votre rythme, avec une simple connexion internet."
  }, {
    q: "Comment se déroulent les séances en direct ?",
    a: "Les séances live ont lieu chaque semaine sur Google Meet, en petits groupes. Le calendrier est adapté à plusieurs fuseaux horaires francophones."
  }, {
    q: "Vais-je recevoir un certificat ?",
    a: "Oui. À la fin de chaque niveau validé, vous obtenez un certificat The Bridge Center à ajouter à votre CV et à partager fièrement."
  }, {
    q: "Comment puis-je devenir formateur ?",
    a: "Nous accueillons régulièrement de nouveaux formateurs. Écrivez-nous via le formulaire en choisissant le sujet « Devenir formateur »."
  }];
  const [open, setOpen] = useCoState(0);
  useCoEffect(() => {
    window.lucide && window.lucide.createIcons();
  }, [open]);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bridge-container",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "FAQ",
    title: "Questions fr\xE9quentes",
    lead: "Vous ne trouvez pas votre r\xE9ponse ? Le formulaire ci-dessus est l\xE0 pour \xE7a."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820,
      marginInline: "auto",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, faqs.map((f, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement(Reveal, {
      key: i,
      delay: i % 5 * 60
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-card)",
        border: `1px solid ${isOpen ? "var(--gold-300)" : "var(--border-subtle)"}`,
        borderRadius: "var(--radius-lg)",
        boxShadow: isOpen ? "var(--shadow-md)" : "var(--shadow-xs)",
        overflow: "hidden",
        transition: "border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      "aria-expanded": isOpen,
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        width: "100%",
        padding: "var(--space-5) var(--space-6)",
        border: "none",
        background: "none",
        cursor: "pointer",
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: "var(--text-md)",
        fontWeight: 700,
        color: "var(--text-strong)"
      }
    }, f.q), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: "0 0 auto",
        width: 32,
        height: 32,
        borderRadius: "var(--radius-pill)",
        background: isOpen ? "var(--gold-500)" : "var(--surface-sunken)",
        color: isOpen ? "var(--indigo-900)" : "var(--text-muted)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all var(--dur-base) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": isOpen ? "minus" : "plus",
      style: {
        width: 18,
        height: 18
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: isOpen ? 220 : 0,
        opacity: isOpen ? 1 : 0,
        overflow: "hidden",
        transition: "max-height var(--dur-base) var(--ease-out), opacity var(--dur-base) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        padding: "0 var(--space-6) var(--space-6)",
        fontSize: "var(--text-base)",
        color: "var(--text-muted)",
        lineHeight: "var(--leading-relaxed)"
      }
    }, f.a))));
  }))));
}
function ContactMain() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-card)",
      padding: "var(--section-y) 0 var(--section-y-tight)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bridge-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bc-contact-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1.2fr 0.8fr",
      gap: "var(--space-10)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(ContactForm, null)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement(ContactInfo, null)))));
}
Object.assign(window, {
  ContactHeader,
  ContactMain,
  MapPlaceholder,
  ContactFAQ
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/formations-app.jsx
try { (() => {
/* The Bridge Center — Formations page mount */
const {
  useState: useFAppState,
  useEffect: useFAppEffect
} = React;
function FormationsApp() {
  const [auth, setAuth] = useFAppState(null);
  useFAppEffect(() => {
    document.body.style.overflow = auth ? "hidden" : "";
    window.lucide && window.lucide.createIcons();
  });
  useFAppEffect(() => {
    let r1 = requestAnimationFrame(() => window.lucide && window.lucide.createIcons());
    const t = setInterval(() => window.lucide && window.lucide.createIcons(), 600);
    setTimeout(() => clearInterval(t), 3500);
    return () => {
      cancelAnimationFrame(r1);
      clearInterval(t);
    };
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    onAuth: setAuth,
    active: "Formations"
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(FormationsHeader, null), /*#__PURE__*/React.createElement(FormationsCatalogue, null), /*#__PURE__*/React.createElement(FinalCTA, {
    onAuth: setAuth
  })), /*#__PURE__*/React.createElement(Footer, null), auth && /*#__PURE__*/React.createElement(AuthModal, {
    mode: auth,
    onClose: () => setAuth(null),
    onSwitch: setAuth
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(FormationsApp, null));
requestAnimationFrame(() => window.lucide && window.lucide.createIcons());
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/formations-app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/formations.jsx
try { (() => {
/* The Bridge Center — Page Formations (catalogue + filtres raffinés) */
const {
  useState: useFState,
  useEffect: useFEffect,
  useMemo: useFMemo,
  useRef: useFRef,
  useLayoutEffect: useFLayout
} = React;
const BRIDGE_COURSES = [{
  id: 1,
  image: "../../assets/tex-indigo.png",
  level: "A1",
  free: true,
  category: "Anglais général",
  title: "Les fondations — Débuter en anglais",
  description: "Vos premiers mots, vos premières phrases, et la confiance pour oser parler dès la première semaine.",
  duration: "6 semaines",
  lessons: 24,
  students: 1840,
  added: 6
}, {
  id: 2,
  image: "../../assets/tex-teal.png",
  level: "A2",
  free: true,
  category: "Anglais général",
  title: "Construire des phrases au quotidien",
  description: "Temps simples, questions, vocabulaire courant : exprimez-vous dans les situations de tous les jours.",
  duration: "7 semaines",
  lessons: 28,
  students: 1320,
  added: 5
}, {
  id: 3,
  image: "../../assets/tex-gold.png",
  level: "A1",
  free: true,
  category: "Enfants",
  title: "English for Kids — l'anglais en s'amusant",
  description: "Jeux, chansons et histoires pour les 7–12 ans : un premier pont vers l'anglais, tout en douceur.",
  duration: "8 semaines",
  lessons: 30,
  students: 760,
  added: 9
}, {
  id: 4,
  image: "../../assets/tex-dusk.png",
  level: "B1",
  free: true,
  category: "Conversation",
  title: "Parler avec aisance",
  description: "Déliez-vous à l'oral : prononciation, expressions naturelles et mises en situation réelles.",
  duration: "8 semaines",
  lessons: 32,
  students: 2110,
  added: 7
}, {
  id: 5,
  image: "../../assets/tex-teal.png",
  level: "B1",
  free: true,
  category: "Voyages",
  title: "L'anglais pour voyager sereinement",
  description: "Aéroport, hôtel, restaurant, rencontres : tout le nécessaire pour voyager en confiance.",
  duration: "5 semaines",
  lessons: 20,
  students: 980,
  added: 8
}, {
  id: 6,
  image: "../../assets/tex-indigo.png",
  level: "B2",
  free: false,
  category: "Business English",
  title: "L'anglais pour le travail",
  description: "E-mails, réunions, négociations, entretiens : l'anglais qui fait avancer votre carrière.",
  duration: "10 semaines",
  lessons: 40,
  students: 1560,
  added: 4
}, {
  id: 7,
  image: "../../assets/tex-gold.png",
  level: "C1",
  free: false,
  category: "Préparation TOEFL",
  title: "Réussir le TOEFL avec sérénité",
  description: "Stratégies par section, examens blancs corrigés et coaching pour viser votre score cible.",
  duration: "12 semaines",
  lessons: 48,
  students: 870,
  added: 3
}, {
  id: 8,
  image: "../../assets/tex-dusk.png",
  level: "B2",
  free: false,
  category: "Préparation IELTS",
  title: "Objectif IELTS — Academic & General",
  description: "Maîtrisez les 4 épreuves, gérez le temps et gagnez les points qui font la différence.",
  duration: "11 semaines",
  lessons: 44,
  students: 720,
  added: 10
}, {
  id: 9,
  image: "../../assets/tex-indigo.png",
  level: "B2",
  free: false,
  category: "Prononciation",
  title: "Accent & fluidité — parler clair",
  description: "Sons difficiles, intonation et rythme : faites-vous comprendre du premier coup, partout.",
  duration: "6 semaines",
  lessons: 24,
  students: 640,
  added: 2
}, {
  id: 10,
  image: "../../assets/tex-teal.png",
  level: "C2",
  free: false,
  category: "Anglais académique",
  title: "Rédaction & anglais académique",
  description: "Essais, rapports, présentations : écrivez un anglais précis, nuancé et professionnel.",
  duration: "10 semaines",
  lessons: 36,
  students: 410,
  added: 1
}];
const LEVELS = ["Tous", "A1", "A2", "B1", "B2", "C1", "C2"];
const TYPES = ["Tous", "Gratuit", "Premium"];
const LEVEL_ORDER = {
  A1: 1,
  A2: 2,
  B1: 3,
  B2: 4,
  C1: 5,
  C2: 6
};
const SORTS = [{
  key: "popular",
  label: "Popularité",
  icon: "flame"
}, {
  key: "new",
  label: "Nouveautés",
  icon: "sparkles"
}, {
  key: "level",
  label: "Niveau croissant",
  icon: "arrow-up-narrow-wide"
}];
function FormationsHeader() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--indigo-950)",
      color: "var(--cream-50)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "url(../../assets/tex-navy.png)",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, color-mix(in srgb,var(--indigo-950) 30%,transparent), color-mix(in srgb,var(--indigo-950) 60%,transparent))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "bridge-container",
    style: {
      position: "relative",
      zIndex: 2,
      padding: "var(--section-y-tight) 0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: "var(--gold-400)",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 22,
      height: 2,
      background: "currentColor",
      borderRadius: 2,
      display: "inline-block"
    }
  }), "Le catalogue")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--display-hero)",
      fontWeight: "var(--weight-extrabold)",
      lineHeight: 1.04,
      letterSpacing: "var(--tracking-tighter)",
      color: "var(--cream-50)",
      margin: 0,
      maxWidth: "16ch"
    }
  }, "Trouvez la formation qui vous fait ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-400)"
    }
  }, "traverser"), ".")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 160
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-lg)",
      color: "var(--indigo-100)",
      margin: 0,
      maxWidth: "52ch"
    }
  }, "Du A1 au C2, de l'anglais g\xE9n\xE9ral au business en passant par la pr\xE9paration aux examens \u2014 choisissez votre parcours, \xE0 votre rythme, o\xF9 que vous soyez."))));
}

/* ---------- Segmented control with sliding indicator ---------- */
function Segmented({
  options,
  value,
  onChange,
  ariaLabel
}) {
  const trackRef = useFRef(null);
  const btnRefs = useFRef({});
  const [ind, setInd] = useFState({
    left: 0,
    width: 0,
    ready: false
  });
  const measure = () => {
    const btn = btnRefs.current[value];
    if (btn) setInd({
      left: btn.offsetLeft,
      width: btn.offsetWidth,
      ready: true
    });
  };
  useFLayout(measure, [value, options]);
  useFEffect(() => {
    const onR = () => measure();
    window.addEventListener("resize", onR);
    const t = setTimeout(measure, 220); // after webfont settles
    return () => {
      window.removeEventListener("resize", onR);
      clearTimeout(t);
    };
  }, [value, options]);
  const idx = options.findIndex(o => o.key === value);
  const onKey = e => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const dir = e.key === "ArrowRight" ? 1 : -1;
    const next = options[(idx + dir + options.length) % options.length];
    onChange(next.key);
    requestAnimationFrame(() => {
      const b = btnRefs.current[next.key];
      b && b.focus();
    });
  };
  const activeIsPremium = value === "Premium";
  return /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    "aria-label": ariaLabel,
    onKeyDown: onKey,
    className: "bc-seg-track",
    style: {
      position: "relative",
      display: "inline-flex",
      gap: 2,
      padding: 5,
      borderRadius: "var(--radius-pill)",
      background: "color-mix(in srgb, var(--cream-200) 55%, transparent)",
      border: "1px solid color-mix(in srgb, var(--ink-900) 7%, transparent)",
      boxShadow: "inset 0 1px 2px color-mix(in srgb, var(--ink-900) 6%, transparent)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 5,
      bottom: 5,
      left: 0,
      width: ind.width,
      transform: `translateX(${ind.left}px)`,
      borderRadius: "var(--radius-pill)",
      background: "var(--primary)",
      boxShadow: activeIsPremium ? "0 6px 18px -5px color-mix(in srgb, var(--gold-500) 70%, transparent), inset 0 0 0 1.5px var(--gold-400)" : "0 7px 18px -6px color-mix(in srgb, var(--indigo-700) 75%, transparent)",
      opacity: ind.ready ? 1 : 0,
      transition: "transform var(--dur-base) var(--ease-spring), width var(--dur-base) var(--ease-spring), box-shadow var(--dur-base) var(--ease-out), opacity var(--dur-fast) linear",
      zIndex: 0
    }
  }), options.map(o => {
    const active = o.key === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.key,
      ref: el => btnRefs.current[o.key] = el,
      role: "radio",
      "aria-checked": active,
      tabIndex: active ? 0 : -1,
      onClick: () => onChange(o.key),
      className: "bc-seg-btn",
      style: {
        position: "relative",
        zIndex: 1,
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        padding: "8px 15px",
        border: "none",
        background: "transparent",
        color: active ? "var(--cream-50)" : "var(--text-body)",
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-sm)",
        fontWeight: active ? 700 : 600,
        cursor: "pointer",
        borderRadius: "var(--radius-pill)",
        whiteSpace: "nowrap",
        transition: "color var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)"
      },
      onMouseEnter: e => {
        if (!active) e.currentTarget.style.transform = "translateY(-1px)";
      },
      onMouseLeave: e => {
        e.currentTarget.style.transform = "";
      }
    }, o.premium && /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        width: 7,
        height: 7,
        borderRadius: "50%",
        background: "var(--gold-500)",
        boxShadow: active ? "0 0 0 2px color-mix(in srgb, var(--gold-300) 60%, transparent)" : "none",
        flex: "0 0 auto"
      }
    }), /*#__PURE__*/React.createElement("span", null, o.label), o.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        fontWeight: 700,
        lineHeight: 1,
        padding: "2px 6px",
        borderRadius: "var(--radius-pill)",
        background: active ? "color-mix(in srgb, var(--cream-50) 22%, transparent)" : "color-mix(in srgb, var(--ink-900) 7%, transparent)",
        color: active ? "var(--cream-50)" : "var(--text-muted)",
        transition: "all var(--dur-base) var(--ease-out)"
      }
    }, o.count));
  }));
}
function FilterGroup({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-xs)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--text-faint)",
      flex: "0 0 auto"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "bc-seg-scroll",
    style: {
      maxWidth: "100%",
      overflowX: "auto"
    }
  }, children));
}

/* ---------- Sort dropdown ---------- */
function SortMenu({
  value,
  onChange
}) {
  const [open, setOpen] = useFState(false);
  const ref = useFRef(null);
  useFEffect(() => {
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = e => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);
  useFEffect(() => {
    window.lucide && window.lucide.createIcons();
  }, [open, value]);
  const current = SORTS.find(s => s.key === value) || SORTS[0];
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(v => !v),
    "aria-haspopup": "listbox",
    "aria-expanded": open,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "10px 14px",
      borderRadius: "var(--radius-pill)",
      border: "1.5px solid var(--border-default)",
      background: "color-mix(in srgb, var(--cream-50) 70%, transparent)",
      color: "var(--text-body)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      fontWeight: 600,
      cursor: "pointer",
      boxShadow: "var(--shadow-xs)",
      transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)"
    },
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = "var(--gold-400)";
      e.currentTarget.style.boxShadow = "var(--shadow-sm)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = "var(--border-default)";
      e.currentTarget.style.boxShadow = "var(--shadow-xs)";
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-up-down",
    style: {
      width: 16,
      height: 16,
      color: "var(--text-muted)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, "Trier\xA0:"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: "var(--text-strong)"
    }
  }, current.label), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-down",
    style: {
      width: 16,
      height: 16,
      color: "var(--text-muted)",
      transform: open ? "rotate(180deg)" : "none",
      transition: "transform var(--dur-fast) var(--ease-out)"
    }
  })), open && /*#__PURE__*/React.createElement("div", {
    role: "listbox",
    style: {
      position: "absolute",
      top: "calc(100% + 8px)",
      right: 0,
      minWidth: 220,
      padding: 6,
      borderRadius: "var(--radius-md)",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      boxShadow: "var(--shadow-lg)",
      zIndex: 40,
      animation: "bcRise var(--dur-fast) var(--ease-out)"
    }
  }, SORTS.map(s => {
    const active = s.key === value;
    return /*#__PURE__*/React.createElement("button", {
      key: s.key,
      role: "option",
      "aria-selected": active,
      onClick: () => {
        onChange(s.key);
        setOpen(false);
      },
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        width: "100%",
        padding: "10px 12px",
        border: "none",
        borderRadius: "var(--radius-sm)",
        background: active ? "var(--surface-accent-soft)" : "transparent",
        color: active ? "var(--text-accent)" : "var(--text-body)",
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-sm)",
        fontWeight: active ? 700 : 500,
        cursor: "pointer",
        textAlign: "left",
        transition: "background var(--dur-fast) var(--ease-out)"
      },
      onMouseEnter: e => {
        if (!active) e.currentTarget.style.background = "var(--surface-raised)";
      },
      onMouseLeave: e => {
        if (!active) e.currentTarget.style.background = "transparent";
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": s.icon,
      style: {
        width: 16,
        height: 16,
        color: active ? "var(--gold-600)" : "var(--text-muted)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, s.label), active && /*#__PURE__*/React.createElement("i", {
      "data-lucide": "check",
      style: {
        width: 15,
        height: 15,
        color: "var(--gold-600)"
      }
    }));
  })));
}

/* ---------- Search field ---------- */
function SearchField({
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "search",
    style: {
      position: "absolute",
      left: 13,
      width: 16,
      height: 16,
      color: "var(--text-muted)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "search",
    value: value,
    onChange: e => onChange(e.target.value),
    placeholder: "Rechercher une formation\u2026",
    "aria-label": "Rechercher une formation",
    style: {
      width: 220,
      maxWidth: "100%",
      padding: "10px 34px 10px 36px",
      borderRadius: "var(--radius-pill)",
      border: "1.5px solid var(--border-default)",
      background: "color-mix(in srgb, var(--cream-50) 70%, transparent)",
      color: "var(--text-strong)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      outline: "none",
      transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)"
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = "var(--primary)";
      e.currentTarget.style.boxShadow = "0 0 0 3px var(--indigo-50)";
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = "var(--border-default)";
      e.currentTarget.style.boxShadow = "none";
    }
  }), value && /*#__PURE__*/React.createElement("button", {
    onClick: () => onChange(""),
    "aria-label": "Effacer la recherche",
    style: {
      position: "absolute",
      right: 8,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 22,
      height: 22,
      border: "none",
      borderRadius: "50%",
      background: "color-mix(in srgb, var(--ink-900) 8%, transparent)",
      color: "var(--text-muted)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "x",
    style: {
      width: 13,
      height: 13
    }
  })));
}
function FormationsCatalogue() {
  const [level, setLevel] = useFState("Tous");
  const [type, setType] = useFState("Tous");
  const [sort, setSort] = useFState("popular");
  const [query, setQuery] = useFState("");
  const [stuck, setStuck] = useFState(false);
  const sentinelRef = useFRef(null);

  // sticky shadow: observe a sentinel just above the bar
  useFEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setStuck(!e.isIntersecting), {
      rootMargin: "-89px 0px 0px 0px",
      threshold: 0
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const matchesType = c => type === "Tous" || (type === "Gratuit" ? c.free : !c.free);
  const matchesQuery = c => !query.trim() || (c.title + " " + c.category).toLowerCase().includes(query.trim().toLowerCase());

  // dynamic per-level counts (respect type + search)
  const levelCounts = useFMemo(() => {
    const base = BRIDGE_COURSES.filter(c => matchesType(c) && matchesQuery(c));
    const m = {
      Tous: base.length
    };
    for (const lv of LEVELS.slice(1)) m[lv] = base.filter(c => c.level === lv).length;
    return m;
  }, [type, query]);
  const typeCounts = useFMemo(() => {
    const base = BRIDGE_COURSES.filter(c => (level === "Tous" || c.level === level) && matchesQuery(c));
    return {
      Tous: base.length,
      Gratuit: base.filter(c => c.free).length,
      Premium: base.filter(c => !c.free).length
    };
  }, [level, query]);
  const filtered = useFMemo(() => {
    let list = BRIDGE_COURSES.filter(c => (level === "Tous" || c.level === level) && matchesType(c) && matchesQuery(c));
    list = [...list].sort((a, b) => {
      if (sort === "popular") return b.students - a.students;
      if (sort === "new") return b.added - a.added;
      return LEVEL_ORDER[a.level] - LEVEL_ORDER[b.level] || b.students - a.students;
    });
    return list;
  }, [level, type, sort, query]);
  useFEffect(() => {
    window.lucide && window.lucide.createIcons();
  }, [filtered, stuck]);
  const levelOptions = LEVELS.map(l => ({
    key: l,
    label: l,
    count: levelCounts[l]
  }));
  const typeOptions = TYPES.map(t => ({
    key: t,
    label: t,
    count: typeCounts[t],
    premium: t === "Premium"
  }));
  const hasFilters = level !== "Tous" || type !== "Tous" || query.trim() !== "";
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "var(--section-y-tight) 0 var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bridge-container",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: sentinelRef,
    style: {
      height: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "bc-filter-bar",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "var(--space-5) var(--space-6)",
      background: stuck ? "color-mix(in srgb, var(--cream-50) 80%, transparent)" : "color-mix(in srgb, var(--cream-50) 66%, transparent)",
      backdropFilter: "saturate(1.5) blur(16px)",
      WebkitBackdropFilter: "saturate(1.5) blur(16px)",
      border: "1px solid color-mix(in srgb, var(--cream-50) 60%, var(--border-subtle))",
      borderRadius: "var(--radius-lg)",
      boxShadow: stuck ? "var(--shadow-lg)" : "var(--shadow-xs)",
      position: "sticky",
      top: 84,
      zIndex: 30,
      transition: "box-shadow var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement(FilterGroup, {
    label: "Niveau"
  }, /*#__PURE__*/React.createElement(Segmented, {
    options: levelOptions,
    value: level,
    onChange: setLevel,
    ariaLabel: "Filtrer par niveau"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--divider)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "bc-filter-row2",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(FilterGroup, {
    label: "Type"
  }, /*#__PURE__*/React.createElement(Segmented, {
    options: typeOptions,
    value: type,
    onChange: setType,
    ariaLabel: "Filtrer par type"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(SearchField, {
    value: query,
    onChange: setQuery
  }), /*#__PURE__*/React.createElement(SortMenu, {
    value: sort,
    onChange: setSort
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      flexWrap: "wrap",
      marginTop: "calc(-1 * var(--space-3))"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text-strong)"
    }
  }, filtered.length), " formation", filtered.length > 1 ? "s" : "", " ", filtered.length > 1 ? "disponibles" : "disponible", query.trim() && /*#__PURE__*/React.createElement("span", null, " pour \xAB\xA0", query.trim(), "\xA0\xBB")), hasFilters && /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setLevel("Tous");
      setType("Tous");
      setQuery("");
    },
    style: {
      border: "none",
      background: "none",
      color: "var(--text-link)",
      fontWeight: 700,
      cursor: "pointer",
      fontSize: "var(--text-sm)",
      display: "inline-flex",
      alignItems: "center",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "rotate-ccw",
    style: {
      width: 14,
      height: 14
    }
  }), "R\xE9initialiser les filtres")), filtered.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "var(--space-16) 0",
      color: "var(--text-muted)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      borderRadius: "var(--radius-pill)",
      background: "var(--surface-raised)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "search-x",
    style: {
      width: 30,
      height: 30,
      color: "var(--text-faint)"
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-md)"
    }
  }, "Aucune formation ne correspond \xE0 ces filtres pour l'instant."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "rotate-ccw",
    onClick: () => {
      setLevel("Tous");
      setType("Tous");
      setQuery("");
    }
  }, "R\xE9initialiser les filtres")) : /*#__PURE__*/React.createElement("div", {
    className: "bc-formations-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--space-6)"
    }
  }, filtered.map((c, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: c.id,
    delay: i % 3 * 70
  }, /*#__PURE__*/React.createElement(CourseCard, {
    image: c.image,
    level: c.level,
    free: c.free,
    price: c.free ? undefined : "Premium",
    category: c.category,
    title: c.title,
    description: c.description,
    duration: c.duration,
    lessons: c.lessons
  }))))));
}
Object.assign(window, {
  FormationsHeader,
  FormationsCatalogue,
  BRIDGE_COURSES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/formations.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/forum-app.jsx
try { (() => {
/* The Bridge Center — Forum page mount */
const {
  useState: useFoAppState,
  useEffect: useFoAppEffect
} = React;
function ForumApp() {
  const [auth, setAuth] = useFoAppState(null);
  useFoAppEffect(() => {
    document.body.style.overflow = auth ? "hidden" : "";
    window.lucide && window.lucide.createIcons();
  });
  useFoAppEffect(() => {
    let r1 = requestAnimationFrame(() => window.lucide && window.lucide.createIcons());
    const t = setInterval(() => window.lucide && window.lucide.createIcons(), 600);
    setTimeout(() => clearInterval(t), 3500);
    return () => {
      cancelAnimationFrame(r1);
      clearInterval(t);
    };
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    onAuth: setAuth,
    active: "Forum"
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(ForumHeader, null), /*#__PURE__*/React.createElement(ForumPage, {
    onAuth: setAuth
  }), /*#__PURE__*/React.createElement(FinalCTA, {
    onAuth: setAuth
  })), /*#__PURE__*/React.createElement(Footer, null), auth && /*#__PURE__*/React.createElement(AuthModal, {
    mode: auth,
    onClose: () => setAuth(null),
    onSwitch: setAuth
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(ForumApp, null));
requestAnimationFrame(() => window.lucide && window.lucide.createIcons());
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/forum-app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/forum.jsx
try { (() => {
/* The Bridge Center — Page Forum / Communauté */
const {
  useState: useFoState,
  useEffect: useFoEffect,
  useMemo: useFoMemo
} = React;
const FORUM_CATEGORIES = [{
  id: "presentations",
  icon: "hand",
  tone: "gold",
  name: "Présentations",
  desc: "Nouveau ? Présentez-vous et dites bonjour à la communauté.",
  threads: 312,
  posts: 1840
}, {
  id: "grammaire",
  icon: "spell-check",
  tone: "navy",
  name: "Questions de grammaire",
  desc: "Temps, articles, prépositions : posez vos questions, on vous répond.",
  threads: 538,
  posts: 4120
}, {
  id: "conversation",
  icon: "messages-square",
  tone: "teal",
  name: "Pratique de la conversation",
  desc: "Trouvez un partenaire d'échange et entraînez-vous à l'oral.",
  threads: 421,
  posts: 3260
}, {
  id: "ressources",
  icon: "library",
  tone: "gold",
  name: "Ressources",
  desc: "Livres, podcasts, applis, chaînes : partagez vos meilleures trouvailles.",
  threads: 276,
  posts: 1990
}, {
  id: "examens",
  icon: "graduation-cap",
  tone: "navy",
  name: "Entraide examens",
  desc: "TOEFL, IELTS, Cambridge : préparez-vous ensemble et gardez le cap.",
  threads: 198,
  posts: 1530
}, {
  id: "libre",
  icon: "coffee",
  tone: "teal",
  name: "Discussions libres",
  desc: "Films, voyages, culture, tout le reste — en anglais ou en français.",
  threads: 389,
  posts: 2870
}];
const FORUM_THREADS = [{
  id: 1,
  title: "Comment bien utiliser le present perfect au quotidien ?",
  author: "Grâce Mukendi",
  cat: "Questions de grammaire",
  catTone: "navy",
  replies: 32,
  last: "il y a 12 min",
  hot: true,
  solved: false
}, {
  id: 2,
  title: "Cherche partenaire de conversation niveau B1 (fuseau Afrique)",
  author: "Awa Diallo",
  cat: "Pratique de la conversation",
  catTone: "teal",
  replies: 18,
  last: "il y a 34 min",
  hot: false,
  solved: false
}, {
  id: 3,
  title: "Mes 5 podcasts préférés pour progresser en écoute",
  author: "David Ilunga",
  cat: "Ressources",
  catTone: "gold",
  replies: 47,
  last: "il y a 1 h",
  hot: true,
  solved: false
}, {
  id: 4,
  title: "Astuces pour gérer le temps à l'épreuve de reading IELTS",
  author: "Thomas Lefebvre",
  cat: "Entraide examens",
  catTone: "navy",
  replies: 27,
  last: "il y a 2 h",
  hot: false,
  solved: true
}, {
  id: 5,
  title: "Bonjour à tous — j'arrive de Montréal !",
  author: "Sarah Kalala",
  cat: "Présentations",
  catTone: "gold",
  replies: 14,
  last: "il y a 3 h",
  hot: false,
  solved: false
}, {
  id: 6,
  title: "« Make » ou « do » ? J'ai enfin compris la différence",
  author: "Marie-Claire Bofenda",
  cat: "Questions de grammaire",
  catTone: "navy",
  replies: 21,
  last: "il y a 5 h",
  hot: false,
  solved: true
}];
function ForumHeader() {
  const stats = [{
    value: "1 820",
    label: "Membres actifs"
  }, {
    value: "2 134",
    label: "Discussions"
  }, {
    value: "15 600",
    label: "Messages"
  }, {
    value: "< 2 h",
    label: "Réponse moyenne"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--indigo-950)",
      color: "var(--cream-50)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "url(../../assets/tex-navy.png)",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, color-mix(in srgb,var(--indigo-950) 30%,transparent), color-mix(in srgb,var(--indigo-950) 62%,transparent))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "bridge-container",
    style: {
      position: "relative",
      zIndex: 2,
      padding: "var(--section-y-tight) 0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: "var(--gold-400)",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 22,
      height: 2,
      background: "currentColor",
      borderRadius: 2,
      display: "inline-block"
    }
  }), "La communaut\xE9")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--display-hero)",
      fontWeight: "var(--weight-extrabold)",
      lineHeight: 1.04,
      letterSpacing: "var(--tracking-tighter)",
      color: "var(--cream-50)",
      margin: 0,
      maxWidth: "18ch"
    }
  }, "On apprend mieux ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-400)"
    }
  }, "ensemble"), ".")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 160
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-lg)",
      color: "var(--indigo-100)",
      margin: 0,
      maxWidth: "56ch"
    }
  }, "Le forum The Bridge Center r\xE9unit des apprenants francophones du monde entier. Posez vos questions, partagez vos progr\xE8s, trouvez un partenaire de conversation \u2014 vous n'\xEAtes jamais seul sur le pont.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240,
    style: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "var(--space-10)",
      marginTop: "var(--space-4)"
    }
  }, stats.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "var(--text-3xl)",
      color: "var(--gold-400)",
      lineHeight: 1
    }
  }, s.value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--indigo-100)"
    }
  }, s.label))))));
}
function CategoryRow({
  c
}) {
  const tints = {
    gold: ["var(--gold-100)", "var(--gold-700)"],
    navy: ["var(--indigo-50)", "var(--indigo-700)"],
    teal: ["var(--teal-50)", "var(--teal-600)"]
  }[c.tone];
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    className: "bc-cat-row",
    onMouseEnter: e => {
      e.currentTarget.style.transform = "translateY(-3px)";
      e.currentTarget.style.boxShadow = "var(--shadow-lg)";
      e.currentTarget.style.borderColor = "var(--gold-300)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "";
      e.currentTarget.style.boxShadow = "var(--shadow-sm)";
      e.currentTarget.style.borderColor = "var(--border-subtle)";
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-5)",
      padding: "var(--space-5) var(--space-6)",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-sm)",
      textDecoration: "none",
      color: "inherit",
      transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 54,
      height: 54,
      flex: "0 0 auto",
      borderRadius: "var(--radius-md)",
      background: tints[0],
      color: tints[1],
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": c.icon,
    style: {
      width: 26,
      height: 26
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 3,
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-lg)",
      fontWeight: 700,
      color: "var(--text-strong)"
    }
  }, c.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-base)",
      color: "var(--text-muted)"
    }
  }, c.desc)), /*#__PURE__*/React.createElement("span", {
    className: "bc-cat-meta",
    style: {
      display: "flex",
      gap: "var(--space-8)",
      flex: "0 0 auto",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "var(--text-lg)",
      color: "var(--text-strong)"
    }
  }, c.threads.toLocaleString("fr-FR")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-faint)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)"
    }
  }, "Sujets")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "var(--text-lg)",
      color: "var(--text-strong)"
    }
  }, c.posts.toLocaleString("fr-FR")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-faint)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)"
    }
  }, "Messages"))), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-right",
    style: {
      width: 20,
      height: 20,
      color: "var(--text-faint)",
      flex: "0 0 auto"
    }
  }));
}
function ThreadRow({
  t
}) {
  const tints = {
    gold: "var(--gold-600)",
    navy: "var(--indigo-600)",
    teal: "var(--teal-600)"
  }[t.catTone];
  const tintBg = {
    gold: "var(--gold-100)",
    navy: "var(--indigo-50)",
    teal: "var(--teal-50)"
  }[t.catTone];
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    className: "bc-thread-row",
    onMouseEnter: e => {
      e.currentTarget.style.background = "var(--surface-raised)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = "var(--surface-card)";
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      padding: "var(--space-4) var(--space-5)",
      background: "var(--surface-card)",
      textDecoration: "none",
      color: "inherit",
      transition: "background var(--dur-fast) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: t.author,
    size: "md"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 5,
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      flexWrap: "wrap"
    }
  }, t.hot && /*#__PURE__*/React.createElement("span", {
    title: "Populaire",
    style: {
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "flame",
    style: {
      width: 16,
      height: 16,
      color: "var(--red-500)"
    }
  })), t.solved && /*#__PURE__*/React.createElement("span", {
    title: "R\xE9solu",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 18,
      height: 18,
      borderRadius: "50%",
      background: "var(--success-soft)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      width: 12,
      height: 12,
      color: "var(--success)",
      strokeWidth: 3
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-md)",
      fontWeight: 700,
      color: "var(--text-strong)",
      lineHeight: 1.25
    }
  }, t.title)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", null, "par ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text-body)",
      fontWeight: 600
    }
  }, t.author)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      padding: "2px 9px",
      borderRadius: "var(--radius-pill)",
      background: tintBg,
      color: tintColor(t.catTone),
      fontSize: "var(--text-xs)",
      fontWeight: 700
    }
  }, t.cat))), /*#__PURE__*/React.createElement("span", {
    className: "bc-thread-meta",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "var(--text-base)",
      color: "var(--text-strong)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "message-circle",
    style: {
      width: 15,
      height: 15,
      color: "var(--text-faint)"
    }
  }), t.replies), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-faint)"
    }
  }, "r\xE9ponses")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      minWidth: 96
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "clock",
    style: {
      width: 14,
      height: 14
    }
  }), t.last)));
}
function tintColor(tone) {
  return {
    gold: "var(--gold-700)",
    navy: "var(--indigo-700)",
    teal: "var(--teal-700)"
  }[tone];
}
function JoinBanner({
  onAuth
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "var(--radius-xl)",
      background: "var(--indigo-900)",
      color: "var(--cream-50)",
      boxShadow: "var(--shadow-lg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "url(../../assets/tex-dusk.png)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.55
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "bc-join",
    style: {
      position: "relative",
      zIndex: 2,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-8)",
      padding: "var(--space-10) var(--space-12)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontSize: "var(--text-sm)",
      fontWeight: 700,
      color: "var(--gold-400)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "lock-open",
    style: {
      width: 16,
      height: 16
    }
  }), "Lecture libre \xB7 participation r\xE9serv\xE9e aux membres"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--display-sub)",
      fontWeight: 800,
      lineHeight: 1.1,
      letterSpacing: "var(--tracking-tight)",
      color: "var(--cream-50)",
      margin: 0
    }
  }, "Envie de participer\xA0? Rejoignez la communaut\xE9."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-md)",
      color: "var(--indigo-100)",
      margin: 0,
      lineHeight: "var(--leading-relaxed)"
    }
  }, "Tout le monde peut lire les discussions. Pour poser une question, r\xE9pondre et trouver un partenaire de conversation, cr\xE9ez votre compte gratuit en 2 minutes.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => onAuth("signup")
  }, "Rejoindre gratuitement"), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse-ghost",
    size: "lg",
    icon: "log-in",
    onClick: () => onAuth("login")
  }, "Se connecter"))));
}
function ForumPage({
  onAuth
}) {
  useFoEffect(() => {
    window.lucide && window.lucide.createIcons();
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "var(--section-y-tight) 0 var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bridge-container",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--section-y-tight)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(JoinBanner, {
    onAuth: onAuth
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    eyebrow: "Cat\xE9gories",
    title: "Trouvez votre espace de discussion",
    maxWidth: "30ch"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, FORUM_CATEGORIES.map((c, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: c.id,
    delay: i % 3 * 60
  }, /*#__PURE__*/React.createElement(CategoryRow, {
    c: c
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 18,
      alignItems: "flex-end",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    eyebrow: "En ce moment",
    title: "Discussions r\xE9centes",
    maxWidth: "26ch"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconRight: "arrow-right"
  }, "Voir toutes les discussions")), /*#__PURE__*/React.createElement(Reveal, {
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-sm)",
      overflow: "hidden"
    }
  }, FORUM_THREADS.map((t, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: t.id
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--divider)",
      marginInline: "var(--space-5)"
    }
  }), /*#__PURE__*/React.createElement(ThreadRow, {
    t: t
  })))))));
}
Object.assign(window, {
  ForumHeader,
  ForumPage,
  FORUM_CATEGORIES,
  FORUM_THREADS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/forum.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CourseCard = __ds_scope.CourseCard;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

})();
