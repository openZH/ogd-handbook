import styles from './CardGrid.module.css';

export function CardGrid({ cols = 2, children }) {
  return (
    <div className={styles.grid} style={{ '--cols': cols }}>
      {children}
    </div>
  );
}

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
