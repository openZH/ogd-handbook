import styles from "./BoatStaircase.module.css";

/**
 * Staircase visualisation of the four data access and transparency levels,
 * with offset colored bars and small boat icons.
 * Content (labels, colors, images) is hardcoded inside the component.
 *
 * Used in:
 * - `2_1_transparenz.md`
 */

// Layout constants (px)
const BAR_H = 56; // bar height
const GAP = 10; // gap between bars
const BOAT_H = 50; // boat image height
const BASE = 150; // left margin of the bottom (widest) bar
const STEP = 100; // additional left margin per step going up
const PAD_TOP = 0; // top padding so top boat doesn't clip

const STEPS = [
  {
    label: "Automatisierung",
    sub: "Nutzung durch KI",
    color: "#C4A0DC",
    img: require("@site/static/img/boat_4.png").default,
  },
  {
    label: "Kollaboration",
    sub: "wirkungsorientiert publizieren",
    color: "#8C3DC4",
    img: require("@site/static/img/boat_3.png").default,
  },
  {
    label: "Zugang",
    sub: "open by default",
    color: "#6B2899",
    img: require("@site/static/img/boat_2.png").default,
  },
  {
    label: "Transparenz",
    sub: "Öffentlichkeitsprinzip",
    color: "#4A1472",
    img: require("@site/static/img/boat_1.png").default,
  },
];

export default function BoatStaircase() {
  const n = STEPS.length;

  return (
    <figure className={styles.figure}>
      {/* Outer wrapper gives boats room to overflow */}
      <div className={styles.outer}>
        {/* Bars - laid out in normal flow */}
        <div className={styles.staircase} style={{ paddingTop: PAD_TOP }}>
          {STEPS.map((step, i) => (
            <div
              key={step.label}
              className={styles.bar}
              style={{
                marginLeft: BASE + (n - 1 - i) * STEP,
                backgroundColor: step.color,
                height: BAR_H,
              }}
            >
              <strong className={styles.label}>{step.label}:</strong>
              <span className={styles.sub}>{step.sub}</span>
            </div>
          ))}
        </div>

        {/* Boats - absolutely positioned over the triangular left space */}
        {STEPS.map((step, i) => {
          const barLeft = BASE + (n - 1 - i) * STEP;
          const boatTop = PAD_TOP + i * (BAR_H + GAP) + (BAR_H - BOAT_H) / 2;
          const boatRight = barLeft - 6; // right edge of boat sits 6px left of bar

          return (
            <img
              key={step.label}
              src={step.img}
              alt=""
              className={styles.boat}
              style={{
                top: boatTop,
                left: boatRight,
                height: BOAT_H,
                transform: "translateX(-100%)",
              }}
            />
          );
        })}
      </div>
    </figure>
  );
}
