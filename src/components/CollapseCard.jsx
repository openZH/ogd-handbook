/**
 * Card with a title, optional subtitle header, and collapsible content area.
 * Shows a fade overlay and "show all" button when collapsed.
 * The `data-card-content` class is applied to the inner content div so that `custom.css` can override table widths inside it.
 *
 * Used in:
 * - `5_3_daten_nachvollziehbar_aufbereiten.md`: collapsible previews of Excel tables and R code
 *
 * @param {string} title Card title
 * @param {React.ReactNode} [header] Optional subtitle shown below the title
 * @param {React.ReactNode} children Card content (tables, code blocks, etc.)
 * @param {number} [previewHeight=220] Height in px of the collapsed preview
 */
import { useState } from "react";
import styles from "./CollapseCard.module.css";

export default function CollapseCard({
  title,
  header,
  children,
  previewHeight = 220,
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={styles.card}>
      <div className={styles.title}>{title}</div>
      {header && <div className={styles.header}>{header}</div>}
      <div className={styles.body}>
        <div
          className={`data-card-content ${styles.content}`}
          style={{ maxHeight: expanded ? "none" : previewHeight + "px" }}
        >
          {children}
        </div>
        {!expanded && <div className={styles.fade} />}
      </div>
      <div className={styles.footer}>
        <button
          className={styles.toggle}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "▲ Weniger anzeigen" : "▼ Alles anzeigen"}
        </button>
      </div>
    </div>
  );
}
