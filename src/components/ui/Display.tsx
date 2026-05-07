import type { ElementType, ReactNode } from "react";
import styles from "./Display.module.css";

type Size = "h1" | "section" | "h3";
type Tone = "cream" | "navy";

type Props = {
  as?: ElementType;
  size?: Size;
  tone?: Tone;
  italic?: boolean;
  children: ReactNode;
  className?: string;
};

const sizeClass: Record<Size, string> = {
  h1: styles.h1,
  section: styles.section,
  h3: styles.h3,
};

const toneClass: Record<Tone, string> = {
  cream: styles.onCream,
  navy: styles.onNavy,
};

export function Display({
  as: Tag = "h2",
  size = "section",
  tone = "cream",
  italic,
  children,
  className,
}: Props) {
  const cls = [
    styles.display,
    sizeClass[size],
    toneClass[tone],
    italic && styles.italic,
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return <Tag className={cls}>{children}</Tag>;
}
