import type { Item } from "@/lib/content";
import { Eyebrow } from "@/components/ui";
import styles from "./Differentiators.module.css";

type Props = {
  eyebrow: string;
  intro: string;
  items: Item[];
};

export function Differentiators({ eyebrow, intro, items }: Props) {
  return (
    <section className={`${styles.band} on-navy`} aria-labelledby="diff-heading">
      <div className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.left}>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 id="diff-heading" className={styles.title}>
              Four things you will not find anywhere else <em>in central Texas.</em>
            </h2>
            <p>{intro}</p>
          </div>
          <ol className={styles.right}>
            {items.map((it) => (
              <li key={it.n} className={styles.item}>
                <span className={styles.num}>{it.n}</span>
                <div>
                  <h3 className={styles.head}>{it.title}</h3>
                  <p className={styles.body}>{it.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
