import * as React from "react";

/** Circular avatar with image or initials fallback. */
export interface AvatarProps {
  src?: string;
  /** Full name — used for initials fallback and alt text */
  name?: string;
  /** @default "md" */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Gold focus ring (active user) */
  ring?: boolean;
}

export function Avatar(props: AvatarProps): JSX.Element;
