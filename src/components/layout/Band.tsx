import type { ElementType, ReactNode } from "react";
import styles from "./Band.module.css";

type Tone = "cream" | "navy" | "white";

type Props = {
  tone?: Tone;
  as?: ElementType;
  id?: string;
  children: ReactNode;
  className?: string;
};

export function Band({ tone = "cream", as: Tag = "section", id, children, className }: Props) {
  const onDark = tone === "navy" ? "on-navy" : "";
  return (
    <Tag id={id} className={`${styles.band} ${styles[tone]} ${onDark} ${className ?? ""}`.trim()}>
      {children}
    </Tag>
  );
}
