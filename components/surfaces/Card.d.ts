import * as React from "react";

/** Generic rounded surface container with optional hover lift. */
export interface CardProps {
  children?: React.ReactNode;
  /** @default "paper" */
  tone?: "paper" | "cream" | "navy" | "outline";
  /** @default "lg" */
  pad?: "none" | "sm" | "md" | "lg";
  /** @default "lg" */
  radius?: "md" | "lg" | "xl" | "2xl";
  /** Enable hover lift + shadow */
  hover?: boolean;
  style?: React.CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
