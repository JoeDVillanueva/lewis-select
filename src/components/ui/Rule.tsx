import styles from "./Rule.module.css";

type Tone = "default" | "navy" | "navyStrong" | "gold";
type Weight = "hairline" | "gold-edge";

type Props = {
  tone?: Tone;
  weight?: Weight;
  className?: string;
};

const toneClass: Record<Tone, string> = {
  default: "",
  navy: styles.onNavy,
  navyStrong: styles.onNavyStrong,
  gold: styles.gold,
};

export function Rule({ tone = "default", weight = "hairline", className }: Props) {
  if (weight === "gold-edge") {
    return <span className={`${styles.goldEdge} ${className ?? ""}`.trim()} aria-hidden="true" />;
  }
  return (
    <hr className={`${styles.rule} ${toneClass[tone]} ${className ?? ""}`.trim()} />
  );
}
