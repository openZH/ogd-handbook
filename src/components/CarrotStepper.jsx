import React, { useState } from 'react';
import styles from './CarrotStepper.module.css';

const steps = [
  {
    title: 'Was haben Rüeblis mit Daten zu tun?',
    emoji: '🥕',
    text: 'Rüebli können roh, gewaschen oder weiterverarbeitet sein. Mit Daten verhält es sich ähnlich.',
    cta: 'Finde es heraus →',
  },
  {
    title: '1) Rohmaterial',
    img: '/img/rüebli_1.png',
    text: 'Unstrukturierte, ungesäuberte oder ungeprüfte Rohdaten. → Interne oder noch nicht bereitgestellte Daten aus der Quelle.',
    cta: 'Weiter →',
  },
  {
    title: '2) Rohmaterial als Produkt',
    img: '/img/rüebli_2.png',
    text: 'Strukturierte, qualitätsgesicherte, maschinenlesbare und frei zugängliche Daten. → Diese Daten sind bereit zur Weiterverarbeitung, aber noch nicht interpretiert.',
    cta: 'Weiter →',
  },
  {
    title: '3) Weiterverarbeitetes Produkt',
    img: '/img/rüebli_3.png',
    text: 'Verarbeitete Daten in Form von Anwendungen, Berichten, Dashboards oder Auswertungen. → Hier werden Daten interpretiert, kombiniert oder visualisiert.',
    cta: 'Weiter →',
  },
  {
    title: 'Und wo befinden wir uns mit OGD?',
    img: '/img/rüebli_2.png',
    text: 'Open Government Data sind strukturierte und qualitätsgesicherte Rohdaten. Sie bilden die Grundlage für Datenprodukte wie Anwendungen, Berichte und Analysen, sind jedoch selbst keine fertigen Auswertungen.',
    cta: null,
    isLast: true,
  },
];

export default function CarrotStepper() {
  const [current, setCurrent] = useState(0);
  const step = steps[current];

  return (
    <div className={styles.wrapper}>
      {/* Progress dots */}
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

      {/* Card */}
      <div className={styles.card}>
        {step.img 
          ? <img src={step.img} alt={step.title} className={styles.stepImg} />
          : <div className={styles.emoji}>{step.emoji}</div>
        }
        <h3 className={styles.title}>{step.title}</h3>
        <p className={styles.text}>{step.text}</p>

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
      </div>

      {/* Step counter */}
      <p className={styles.counter}>{current + 1} / {steps.length}</p>
    </div>
  );
}