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
