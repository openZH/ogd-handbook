import React, { useState } from 'react';
import styles from './ProcessStepper.module.css';

export default function ProcessStepper({ steps }) {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        {steps.map((step, i) => (
          <React.Fragment key={i}>
            <button
              className={`${styles.step} ${i === active ? styles.stepActive : ''}`}
              onClick={() => setActive(i)}
              aria-pressed={i === active}
            >
              <span className={styles.number}>0{i + 1}</span>
              <span className={styles.label}>{step.title}</span>
            </button>
            {i < steps.length - 1 && (
              <div className={`${styles.arrow} ${i < active ? styles.arrowDone : ''}`}>
                ›
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <hr className={styles.divider} />

      <div className={styles.panel}>
        <div className={styles.panelContent}>
          <h4 className={styles.panelTitle}>{steps[active].title}</h4>
          <p className={styles.panelText}>{steps[active].text}</p>
          {steps[active].link && (
            <a className={styles.panelLink} href={steps[active].link.href}>
              → {steps[active].link.label}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
