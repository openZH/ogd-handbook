import React, { useState } from 'react';
import styles from './TidyStepper.module.css';

const STATUS = {
  bad:  { label: '✗ Nicht tidy', color: '#B01657', bg: '#F6E3EA' },
  ok:   { label: '~ Almost tidy',  color: '#7F3DA7', bg: '#ECE2F1' },
  good: { label: '✓ Tidy',       color: '#00797B', bg: '#E8F3F2' },
};

export default function TidyStepper({ steps }) {
  const [current, setCurrent] = useState(0);
  const step = steps[current];
  const status = STATUS[step.status];

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>

        <div className={styles.badge} style={{ color: status.color, background: status.bg }}>
          {status.label}
        </div>

        <h3 className={styles.title}>{step.title}</h3>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                {step.table.headers.map((h, i) => (
                  <th key={i}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {step.table.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.reason}>
          <strong>Begründung:</strong> {step.reason}
        </div>

        <div className={styles.actions}>
          {current > 0 && (
            <button className={styles.btnSecondary} onClick={() => setCurrent(c => c - 1)}>
              ← Zurück
            </button>
          )}
          {current < steps.length - 1 ? (
            <button className={styles.btnPrimary} onClick={() => setCurrent(c => c + 1)}>
              Weiter →
            </button>
          ) : (
            <button className={styles.btnSecondary} onClick={() => setCurrent(0)}>
              ↺ Neustart
            </button>
          )}
        </div>
      </div>

      <div className={styles.dots}>
        {steps.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''} ${i < current ? styles.dotDone : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Beispiel ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
