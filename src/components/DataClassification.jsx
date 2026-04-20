import styles from './DataClassification.module.css';

// Colors only — no text
const COLORS = [
  { headerBg: 'var(--kzh-violet)',      headerText: 'white',              bgColor: 'var(--kzh-violet-light)' },
  { headerBg: 'var(--kzh-grey-light)',  headerText: 'var(--kzh-black)',   bgColor: 'var(--kzh-white)' },
  { headerBg: 'var(--kzh-grey-light)',  headerText: 'var(--kzh-black)',   bgColor: 'var(--kzh-white)' },
  { headerBg: 'var(--kzh-grey-light)',  headerText: 'var(--kzh-black)',   bgColor: 'var(--kzh-white)' },
];

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" width="36" height="36" aria-label="kein Zugang">
      <path
        d="M12 2L4 5v6c0 5.25 3.4 10.15 8 11.35C16.6 21.15 20 16.25 20 11V5L12 2z"
        className={styles.shieldFill}
        strokeWidth="1.5"
      />
      <path
        d="M12 2L4 5v6c0 5.25 3.4 10.15 8 11.35C16.6 21.15 20 16.25 20 11V5L12 2z"
        fill="none"
        className={styles.shieldStroke}
        strokeWidth="1.5"
      />
      <line x1="9" y1="9" x2="15" y2="15" className={styles.shieldStroke} strokeWidth="2" strokeLinecap="round" />
      <line x1="15" y1="9" x2="9" y2="15" className={styles.shieldStroke} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function DataClassification({ levels }) {
  return (
    <figure className={styles.figure}>
      <div className={styles.wrapper}>
      <div className={styles.grid}>

        {/* Header row */}
        <div className={styles.headerRow}>
          {levels.map((level, i) => (
            <div
              key={level.key}
              className={styles.headerCell}
              style={{ backgroundColor: COLORS[i].headerBg, color: COLORS[i].headerText }}
            >
              {level.label}
            </div>
          ))}
        </div>

        {/* Bullet points row */}
        <div className={styles.contentRow}>
          {levels.map((level, i) => (
            <div
              key={level.key}
              className={styles.contentCell}
              style={{ backgroundColor: COLORS[i].bgColor }}
            >
              <ul className={styles.bulletList}>
                {level.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Access level row */}
        <div className={styles.accessRow}>
          {levels.map((level, i) => (
            <div
              key={level.key}
              className={styles.accessCell}
              style={{ backgroundColor: COLORS[i].bgColor }}
            >
              {level.access}
            </div>
          ))}
        </div>

        {/* FAIR banner */}
        <div className={styles.fairBanner}>
          + «FAIR» =
        </div>

        {/* Bottom row */}
        <div className={styles.bottomRow}>
          {levels.map((level, i) => (
            <div
              key={level.key}
              className={styles.bottomCell}
              style={{ backgroundColor: COLORS[i].bgColor }}
            >
              {level.bottom.type === 'tag' && (
                <span className={styles.openDataTag}>{level.bottom.label}</span>
              )}
              {level.bottom.type === 'text' && (
                <span className={styles.bottomText}>{level.bottom.label}</span>
              )}
              {level.bottom.type === 'shield' && <ShieldIcon />}
            </div>
          ))}
        </div>

      </div>
      </div>
    </figure>
  );
}
