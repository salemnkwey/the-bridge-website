import * as React from "react";

/** Big display number + label, for statistics bands. */
export interface StatProps {
  /** The number, pre-formatted (e.g. "2 400", "94") */
  value: React.ReactNode;
  /** Trailing unit, e.g. "+", "%" */
  suffix?: string;
  label: string;
  /** Optional Lucide icon above the number */
  icon?: string;
  /** Use "inverse" on navy surfaces */
  tone?: "default" | "inverse";
  /** @default "center" */
  align?: "center" | "left";
}

export function Stat(props: StatProps): JSX.Element;
