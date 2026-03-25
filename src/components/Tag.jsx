import styles from './Tag.module.css';

export default function Tag({ text, color, bg }) {
  return (
    <span className={styles.tag} style={{ color, background: bg }}>
      {text}
    </span>
  );
}
