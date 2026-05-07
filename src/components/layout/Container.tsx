import type { ElementType, ReactNode } from "react";
import styles from "./Container.module.css";

type Props = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

export function Container({ as: Tag = "div", children, className }: Props) {
  return <Tag className={`${styles.container} ${className ?? ""}`.trim()}>{children}</Tag>;
}
