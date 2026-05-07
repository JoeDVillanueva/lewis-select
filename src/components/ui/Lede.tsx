import type { ReactNode } from "react";
import styles from "./Lede.module.css";

type Props = {
  children: ReactNode;
  tone?: "cream" | "navy";
  className?: string;
};

export function Lede({ children, tone = "cream", className }: Props) {
  const toneCls = tone === "navy" ? styles.onNavy : styles.onCream;
  return <p className={`${styles.lede} ${toneCls} ${className ?? ""}`.trim()}>{children}</p>;
}
