import * as React from "react";

/** Labelled text input with optional icon, hint, and error state. */
export interface InputProps {
  label?: string;
  id?: string;
  /** @default "text" */
  type?: "text" | "email" | "password" | "search" | "tel" | "number" | "url";
  placeholder?: string;
  /** Leading Lucide icon name */
  icon?: string;
  /** Helper text below the field */
  hint?: string;
  /** Error message — turns the field red and replaces the hint */
  error?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
}

export function Input(props: InputProps): JSX.Element;
