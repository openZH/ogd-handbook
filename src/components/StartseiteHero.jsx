import styles from "./StartseiteHero.module.css";

/**
 * Hero image with overlaid text and an optional source attribution link below.
 *
 * Used in:
 * - `0_startseite.md`
 *
 * @param {string} image Path to the hero image
 * @param {string} text Overlay text displayed on top of the image
 * @param {string} [sourceHref] URL for the image source attribution
 * @param {string} [sourceLabel] Link label for the source attribution
 * @param {'side'|'stacked'} [layout] 'side' (default) places image beside the text; 'stacked' places a full-width image below the text
 */

export default function StartseiteHero({
  image,
  text,
  sourceHref,
  sourceLabel,
  layout = "side",
}) {
  return (
    <>
      <div
        className={
          layout === "stacked"
            ? `${styles.hero} ${styles.heroStacked}`
            : styles.hero
        }
      >
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
