import type { ReactNode } from "react";
import { Container } from "./Container";
import styles from "./Section.module.css";

type Props = {
  children: ReactNode;
  className?: string;
  /** Reduce vertical padding (used for tight philosophy / quote bands). */
  tight?: boolean;
  /** Suppress the inner Container — use when the section needs full-bleed grids. */
  bleed?: boolean;
};

export function Section({ children, className, tight, bleed }: Props) {
  const cls = `${styles.section} ${tight ? styles.tight : ""} ${className ?? ""}`.trim();
  return <div className={cls}>{bleed ? children : <Container>{children}</Container>}</div>;
}
