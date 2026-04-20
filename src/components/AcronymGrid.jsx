import styles from "./AcronymGrid.module.css";

/**
 * Renders the letters of an acronym (e.g. FAIR, CARE) as a tile grid:
 * large letter, English term, and German translation.
 *
 * Used in:
 * - `1_3_fair_care.md`
 *
 * @param {{ letter: string, term: string, translation: string }[]} items
 *   Array of acronym entries, each with a letter, term, and German translation.
 *
 * @example
 * <AcronymGrid items={[
 *   { letter: "F", term: "Findable", translation: "Auffindbar" },
 *   { letter: "A", term: "Accessible", translation: "Zugänglich" },
 * ]} />
 */
export default function AcronymGrid({ items }) {
  return (
    <div className={styles.grid}>
      {items.map(({ letter, term, translation }) => (
        <div key={letter} className={styles.card}>
          <div className={styles.letter}>{letter}</div>
          <span className={styles.term}>{term}</span>
          <span className={styles.translation}>{translation}</span>
        </div>
      ))}
    </div>
  );
}
