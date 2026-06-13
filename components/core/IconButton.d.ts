import * as React from "react";

/** Compact icon-only button (header actions, carousel arrows, social links). */
export interface IconButtonProps {
  /** Lucide icon name */
  icon: string;
  /** Accessible label (required — sets aria-label + title) */
  label: string;
  /** @default "secondary" */
  variant?: "primary" | "accent" | "secondary" | "ghost" | "inverse";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** @default "circle" */
  shape?: "circle" | "square";
  disabled?: boolean;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export function IconButton(props: IconButtonProps): JSX.Element;
