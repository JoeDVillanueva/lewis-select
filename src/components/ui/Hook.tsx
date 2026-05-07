import type { ReactNode } from "react";
import styles from "./Hook.module.css";

type Props = {
  children: ReactNode;
  className?: string;
};

export function Hook({ children, className }: Props) {
  const cls = [styles.hook, className].filter(Boolean).join(" ");
  return <p className={cls}>{children}</p>;
}
