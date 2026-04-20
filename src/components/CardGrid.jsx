import styles from "./CardGrid.module.css";

/**
 * Responsive tile grid. Number of columns configurable via `cols`.
 * Used together with `Card`.
 *
 * Used in:
 * - `0_startseite.md`
 * - `1_1_ogd_in_kuerze.md`, `1_2_prinzipien.md`, `1_5_ogd_nutzen.md`
 * - `2_1_transparenz.md`, `2_2_data_governance.md`, `2_3_rechtliche_grundlagen.md`
 *
 * @param {number} [cols=2] Number of columns
 * @param {React.ReactNode} children `<Card>` elements
 */
export function CardGrid({ cols = 2, children }) {
  return (
    <div className={styles.grid} style={{ "--cols": cols }}>
      {children}
    </div>
  );
}

/**
 * Single tile inside a `CardGrid`. Supports title, link, image icon or emoji, and body text.
 *
 * @param {string} [title] Card title
 * @param {string} [href] Optional link applied to the title
 * @param {string} [icon] Path to an image icon
 * @param {string} [emoji] Emoji as an alternative to `icon`
 * @param {React.CSSProperties} [style] Inline styles (e.g. for background color)
 * @param {React.ReactNode} [children] Body text below the title
 */
export function Card({ title, href, icon, emoji, style, children }) {
  return (
    <div className={styles.card} style={style}>
      {emoji && <div className={styles.emoji}>{emoji}</div>}
      {icon && (
        <div className={styles.icon}>
          <img src={icon} alt="" />
        </div>
      )}
      {title && (
        <div className={styles.title}>
          {href ? <a href={href}>{title}</a> : title}
        </div>
      )}
      {children && <div className={styles.body}>{children}</div>}
    </div>
  );
}
