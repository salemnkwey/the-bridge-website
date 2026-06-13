import * as React from "react";

/** Eyebrow + title + lead paragraph — the standard section opener. */
export interface SectionHeadingProps {
  /** UPPERCASE overline label */
  eyebrow?: string;
  title: React.ReactNode;
  /** Supporting lead paragraph */
  lead?: React.ReactNode;
  /** @default "center" */
  align?: "center" | "left";
  /** Use "inverse" on navy backgrounds */
  tone?: "default" | "inverse";
  /** Max width of title + lead. @default "46ch" */
  maxWidth?: string;
  /** Heading tag. @default "h2" */
  as?: "h1" | "h2" | "h3";
}

export function SectionHeading(props: SectionHeadingProps): JSX.Element;
