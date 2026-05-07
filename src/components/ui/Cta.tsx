import Link from "next/link";
import type { ReactNode, ButtonHTMLAttributes } from "react";
import styles from "./Cta.module.css";

type Variant = "primary" | "navy" | "ghost" | "ghostLight" | "bordered";

type CommonProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
};

type LinkProps = CommonProps & {
  href: string;
  type?: never;
  onClick?: never;
  disabled?: never;
};

type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: never;
  };

type Props = LinkProps | ButtonProps;

const variantClass: Record<Variant, string> = {
  primary: styles.primary,
  navy: styles.navy,
  ghost: styles.ghost,
  ghostLight: styles.ghostLight,
  bordered: styles.bordered,
};

export function Cta(props: Props) {
  const { variant = "primary", children, className, fullWidth } = props;
  const cls = [styles.cta, variantClass[variant], fullWidth && styles.fullWidth, className]
    .filter(Boolean)
    .join(" ");

  if ("href" in props && props.href !== undefined) {
    return (
      <Link href={props.href} className={cls}>
        {children}
      </Link>
    );
  }

  const { variant: _v, children: _c, className: _cn, fullWidth: _fw, ...rest } = props as ButtonProps;
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
