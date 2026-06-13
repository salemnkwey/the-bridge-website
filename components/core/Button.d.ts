import * as React from "react";

/**
 * The Bridge Center button.
 *
 * @startingPoint section="Core" subtitle="Primary action control — 6 variants, 3 sizes" viewport="700x200"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: "primary" | "accent" | "secondary" | "ghost" | "inverse" | "link";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** Lucide icon name rendered before the label */
  icon?: string;
  /** Lucide icon name rendered after the label */
  iconRight?: string;
  /** Stretch to fill container width */
  full?: boolean;
  disabled?: boolean;
  /** Render as a different element (e.g. "a") */
  as?: keyof JSX.IntrinsicElements;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: "button" | "submit" | "reset";
}

export function Button(props: ButtonProps): JSX.Element;
