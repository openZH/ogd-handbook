import { useState } from 'react';
import styles from './ProcessStepper.module.css';

const SIZE = 500;
const RADIUS = 190;
const CENTER = SIZE / 2;
const BUBBLE = 100;

export default function ProcessStepper({ steps }) {
  const [active, setActive] = useState(0);
  const n = steps.length;

  const pos = (i) => {
    const angle = -Math.PI / 2 + (2 * Math.PI * i) / n;
    return {
      left: CENTER + RADIUS * Math.cos(angle) - BUBBLE / 2,
      top: CENTER + RADIUS * Math.sin(angle) - BUBBLE / 2,
    };
  };

  return (
    <div className={styles.outerWrapper}>
      <div className={styles.ring} style={{ width: SIZE, height: SIZE }}>
        <svg className={styles.svg} viewBox={`0 0 ${SIZE} ${SIZE}`} aria-hidden="true">
          <circle
            cx={CENTER} cy={CENTER} r={RADIUS}
            fill="none" stroke="#ECE2F1" strokeWidth="2" strokeDasharray="6 4"
          />
        </svg>

        {steps.map((step, i) => {
          const { left, top } = pos(i);
          return (
            <button
              key={i}
              className={`${styles.bubble} ${i === active ? styles.bubbleActive : ''} ${i < active ? styles.bubbleDone : ''}`}
              style={{ left, top, width: BUBBLE, height: BUBBLE }}
              onClick={() => setActive(i)}
              aria-pressed={i === active}
            >
              <span className={styles.bubbleNum}>0{i + 1}</span>
              <span className={styles.bubbleLabel}>{step.title}</span>
              {step.emoji && <span className={styles.bubbleEmoji}>{step.emoji}</span>}
            </button>
          );
        })}

        <div className={styles.center}>
          <span className={styles.centerNum}>0{active + 1}</span>
          <span className={styles.centerTitle}>{steps[active].title}</span>
          <span className={styles.centerText}>{steps[active].text}</span>
          {steps[active].links?.map((link, i) => (
            <a key={i} className={styles.centerLink} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className={styles.nav}>
        <button
          className={styles.navBtn}
          onClick={() => setActive(a => Math.max(0, a - 1))}
          disabled={active === 0}
        >
          ← Zurück
        </button>
        <button
          className={styles.navBtn}
          onClick={() => setActive(a => Math.min(n - 1, a + 1))}
          disabled={active === n - 1}
        >
          Weiter →
        </button>
      </div>
    </div>
  );
}
