import * as React from "react";

/** Labelled checkbox with the brand gold check. */
export interface CheckboxProps {
  label?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  disabled?: boolean;
}

export function Checkbox(props: CheckboxProps): JSX.Element;
