import { useState } from 'react';
import Admonition from '@theme/Admonition';
import styles from './ProcessStepper.module.css';

export default function ProcessStepper({ steps }) {
  const [active, setActive] = useState(0);
  const n = steps.length;

  return (
    <div className={styles.outerWrapper}>

      <div className={styles.trackRow}>
        <button className={styles.navBtn} onClick={() => setActive(a => Math.max(0, a - 1))} disabled={active === 0}>
          ‹
        </button>

        <div className={styles.track}>
          {steps.map((step, i) => (
            <div key={i} className={styles.stepWrapper}>
              {i > 0 && (
                <div className={`${styles.connector} ${i <= active ? styles.connectorDone : ''}`} />
              )}
              <div className={styles.stepCol}>
                <button
                  className={`${styles.bubble} ${i === active ? styles.bubbleActive : ''} ${i < active ? styles.bubbleDone : ''}`}
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                >
                  <span className={styles.bubbleNum}>0{i + 1}</span>
                </button>
                <span className={`${styles.bubbleLabel} ${i === active ? styles.bubbleLabelActive : ''}`}>
                  {step.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        <button className={styles.navBtn} onClick={() => setActive(a => Math.min(n - 1, a + 1))} disabled={active === n - 1}>
          ›
        </button>
      </div>

      <div style={{ marginTop: '1.5rem' }}>
        <Admonition type="tip" title={`0${active + 1} - ${steps[active].title}`}>
          <p>{steps[active].text}</p>
          {steps[active].links?.length > 0 && (
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.25rem' }}>
              {steps[active].links.map((link, i) => (
                <a key={i} href={link.href} style={{ fontSize: '0.75rem', fontWeight: 600 }}>
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </Admonition>
      </div>

    </div>
  );
}
