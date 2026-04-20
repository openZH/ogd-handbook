import styles from "./Tag.module.css";

/**
 * Inline badge for labelling column names or data types as good or bad practice.
 * Color is controlled via the `variant` prop mapped to CSS module classes.
 *
 * Used in:
 * - `3_4_spaltenüberschriften.md`
 * - `3_5_datentypen.md`
 *
 * @param {string} text Badge label
 * @param {'good' | 'bad'} [variant] Color variant: `good` (teal) or `bad` (bordeaux)
 */

export default function Tag({ text, variant }) {
  return (
    <span className={`${styles.tag} ${styles[variant] ?? ""}`}>{text}</span>
  );
}
