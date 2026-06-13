import * as React from "react";

/**
 * Course / formation preview card with image, level + price badges, and meta.
 *
 * @startingPoint section="Surfaces" subtitle="Formation preview card with level + Gratuit badges" viewport="380x420"
 */
export interface CourseCardProps {
  /** Header image URL (warm photo or brand texture) */
  image: string;
  /** CEFR level shown in a badge. @default "A1" */
  level?: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  /** Show the gold "Gratuit" badge. @default true */
  free?: boolean;
  /** Price label shown when free=false (e.g. "29 $") */
  price?: string;
  /** Eyebrow category (e.g. "Anglais professionnel") */
  category?: string;
  title: string;
  description: string;
  /** @default "6 semaines" */
  duration?: string;
  /** @default 24 */
  lessons?: number;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export function CourseCard(props: CourseCardProps): JSX.Element;
