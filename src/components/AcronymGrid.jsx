import styles from './AcronymGrid.module.css';

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
