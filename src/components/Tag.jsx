import styles from "./Tag.module.css";

export default function Tag({ text, variant }) {
  return (
    <span className={`${styles.tag} ${styles[variant] ?? ""}`}>{text}</span>
  );
}
