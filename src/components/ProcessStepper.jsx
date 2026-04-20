/**
 * Numbered process stepper with clickable bubbles, prev/next navigation,
 * and an admonition panel showing the active step's title, description, and links.
 *
 * Used in:
 * - `2_5_daten_publizieren.md`: step-by-step guide to publishing data
 *
 * @param {{ title: string, text: string, links?: { href: string, label: string }[] }[]} steps
 *   Array of steps, each with a title, description, and optional links.
 */
import { useState } from "react";
import Admonition from "@theme/Admonition";
import styles from "./ProcessStepper.module.css";

export default function ProcessStepper({ steps }) {
  const [active, setActive] = useState(0);
  const n = steps.length;

  return (
    <div className={styles.outerWrapper}>
      <div className={styles.trackRow}>
        <button
          className={styles.navBtn}
          onClick={() => setActive((a) => Math.max(0, a - 1))}
          disabled={active === 0}
        >
          ‹
        </button>

        <div className={styles.track}>
          {steps.map((step, i) => (
            <div key={i} className={styles.stepWrapper}>
              {i > 0 && (
                <div
                  className={`${styles.connector} ${i <= active ? styles.connectorDone : ""}`}
                />
              )}
              <div className={styles.stepCol}>
                <button
                  className={`${styles.bubble} ${i === active ? styles.bubbleActive : ""} ${i < active ? styles.bubbleDone : ""}`}
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                >
                  <span className={styles.bubbleNum}>0{i + 1}</span>
                </button>
                <span
                  className={`${styles.bubbleLabel} ${i === active ? styles.bubbleLabelActive : ""}`}
                >
                  {step.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        <button
          className={styles.navBtn}
          onClick={() => setActive((a) => Math.min(n - 1, a + 1))}
          disabled={active === n - 1}
        >
          ›
        </button>
      </div>

      <div className={styles.contentPanel}>
        <Admonition
          type="tip"
          title={`0${active + 1} - ${steps[active].title}`}
        >
          <p>{steps[active].text}</p>
          {steps[active].links?.length > 0 && (
            <div className={styles.linkRow}>
              {steps[active].links.map((link, i) => (
                <a key={i} href={link.href} className={styles.link}>
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
