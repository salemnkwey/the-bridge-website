import * as React from "react";

interface Option { value: string; label: string; }

/** Labelled dropdown styled to match Input. */
export interface SelectProps {
  label?: string;
  id?: string;
  /** Options as strings or {value,label} objects */
  options: Array<string | Option>;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  hint?: string;
  required?: boolean;
  disabled?: boolean;
}

export function Select(props: SelectProps): JSX.Element;
