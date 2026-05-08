import type { PillarItem } from "@/lib/content";
import styles from "./PillarFull.module.css";

type Props = {
  items: PillarItem[];
};

export function PillarFull({ items }: Props) {
  return (
    <ol className={styles.list}>
      {items.map((it) => {
        const paragraphs = it.bodyParagraphs ?? (it.body ? [it.body] : []);
        return (
          <li key={it.n} className={styles.item}>
            <span className={styles.num}>{it.n}</span>
            <div>
              <h3 className={styles.title}>{it.title}</h3>
              <p className={styles.subhead}>{it.subhead}</p>
              {paragraphs.map((p, i) => (
                <p key={i} className={styles.body}>
                  {p}
                </p>
              ))}
              <div className={styles.replacesBanner}>
                <span className={styles.replacesLabel}>What this replaces.</span>
                <p className={styles.replacesBody}>{it.replaces}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
