import type { ReactNode } from "react";
import styles from "./Eyebrow.module.css";

type Props = {
  children: ReactNode;
  /** Use 0.30em letter-spacing instead of the default 0.38em (narrower contexts). */
  tight?: boolean;
  /** Center horizontally. */
  center?: boolean;
  /** Drop the leading hairline. */
  noRule?: boolean;
  className?: string;
};

export function Eyebrow({ children, tight, center, noRule, className }: Props) {
  const cls = [
    styles.eyebrow,
    tight && styles.tight,
    center && styles.center,
    noRule && styles.noRule,
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return <p className={cls}>{children}</p>;
}
