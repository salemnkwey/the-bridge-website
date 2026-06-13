import * as React from "react";

/** Icon + title + description card for benefit / method grids. */
export interface FeatureCardProps {
  /** Lucide icon name */
  icon: string;
  title: string;
  children?: React.ReactNode;
  /** Icon tile tint. @default "gold" */
  tone?: "gold" | "navy" | "teal";
}

export function FeatureCard(props: FeatureCardProps): JSX.Element;
