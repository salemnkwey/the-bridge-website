import * as React from "react";

/** Small status / category pill (Gratuit, CEFR level, Live, Nouveau). */
export interface BadgeProps {
  children?: React.ReactNode;
  /** @default "accent" */
  tone?: "accent" | "navy" | "teal" | "success" | "danger" | "neutral";
  /** @default "soft" */
  variant?: "soft" | "solid";
  /** @default "md" */
  size?: "sm" | "md";
  /** Optional Lucide icon name */
  icon?: string;
}

export function Badge(props: BadgeProps): JSX.Element;
