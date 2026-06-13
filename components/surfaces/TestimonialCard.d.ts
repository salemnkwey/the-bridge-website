import * as React from "react";

/** Student testimonial: star rating, quote, avatar + name + role. */
export interface TestimonialCardProps {
  quote: string;
  name: string;
  /** Role / context, e.g. "Niveau B2 · Étudiante en commerce" */
  role: string;
  /** Avatar photo URL (falls back to initials) */
  photo?: string;
  /** Stars filled out of 5. @default 5 */
  rating?: number;
  /** "navy" for placement on dark sections */
  tone?: "paper" | "navy";
}

export function TestimonialCard(props: TestimonialCardProps): JSX.Element;
