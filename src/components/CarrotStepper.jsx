import React, { useState } from 'react';
import styles from './CarrotStepper.module.css';

export default function CarrotStepper({ steps }) {
  const [current, setCurrent] = useState(0);
  const step = steps[current];
  const isFrame = step.isIntro || step.isLast;

  const media = step.img
    ? <img src={step.img} alt={step.title} className={isFrame ? styles.stepImgBottom : styles.stepImg} />
    : <div className={isFrame ? styles.emojiBottom : styles.emoji}>{step.emoji}</div>;

  const actions = (
    <div className={styles.actions}>
      {current > 0 && (
        <button className={styles.btnSecondary} onClick={() => setCurrent(c => c - 1)}>
          ← Zurück
        </button>
      )}
      {!step.isLast ? (
        <button className={styles.btnPrimary} onClick={() => setCurrent(c => c + 1)}>
          {step.cta}
        </button>
      ) : (
        <button className={styles.btnSecondary} onClick={() => setCurrent(0)}>
          ↺ Neustart
        </button>
      )}
    </div>
  );

  return (
    <div className={styles.wrapper}>
      <div className={isFrame ? styles.cardFrame : styles.card}>
        {isFrame ? (
          <>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.text}>{step.text}</p>
            {media}
            {actions}
          </>
        ) : (
          <>
            {media}
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.text}>{step.text}</p>
            {actions}
          </>
        )}
      </div>

      <div className={styles.dots}>
        {steps.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''} ${i < current ? styles.dotDone : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Schritt ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
