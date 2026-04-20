import styles from "./StartseiteHero.module.css";

export default function StartseiteHero({
  image,
  text,
  sourceHref,
  sourceLabel,
}) {
  return (
    <>
      <div className={styles.hero}>
        <img src={image} alt="" />
        <div className={styles.text}>{text}</div>
      </div>
      {sourceHref && (
        <p className={styles.source}>
          Quelle Grafik: <a href={sourceHref}>{sourceLabel}</a>
        </p>
      )}
    </>
  );
}
