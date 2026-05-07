import type { ElementType, ReactNode } from "react";
import styles from "./Body.module.css";

type Variant = "default" | "muted" | "dark" | "darkSoft";
type Size = "default" | "small" | "tiny";

type Props = {
  as?: ElementType;
  variant?: Variant;
  size?: Size;
  long?: boolean;
  children: ReactNode;
  className?: string;
};

const variantClass: Record<Variant, string> = {
  default: styles.default,
  muted: styles.muted,
  dark: styles.dark,
  darkSoft: styles.darkSoft,
};

export function Body({
  as: Tag = "p",
  variant = "default",
  size = "default",
  long,
  children,
  className,
}: Props) {
  const cls = [
    styles.body,
    variantClass[variant],
    size === "small" && styles.small,
    size === "tiny" && styles.tiny,
    long && styles.long,
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return <Tag className={cls}>{children}</Tag>;
}
