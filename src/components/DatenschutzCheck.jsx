import React, { useState } from "react";
import Admonition from "@theme/Admonition";
import styles from "./DatenschutzCheck.module.css";

const RESULT_COLORS = {
  ogd: { border: "var(--kzh-teal)", title: "var(--kzh-teal)" },
  unklar: { border: "#CCCCCC", title: "var(--kzh-grey)" },
  nicht_ogd: { border: "#d40053", title: "#d40053" },
};

/**
 * Interactive yes/no decision tree leading to one of three result screens.
 *
 * Used in:
 * - `5_1_sind_deine_daten_ogd_ready.md`
 *
 * @param {{ [id: string]: { question?: string, infobox?: string, yes?: string, no?: string, type?: 'result', variant?: string, title?: string, text?: string, img?: string } }} nodes
 *   Map of node id → node. Question nodes have `question`, `yes`, `no` (and optional `infobox`).
 *   Result nodes have `type: 'result'`, `variant`, `title`, `text`, `img`.
 * @param {string} start  Id of the first node to display.
 * @param {number} totalQuestions  Total number of question nodes (for the progress counter).
 */
export default function DatenschutzCheck({ nodes, start }) {
  const [currentId, setCurrentId] = useState(start);
  const [history, setHistory] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [infoOpen, setInfoOpen] = useState(false);
  const [summaryOpen, setSummaryOpen] = useState(false);
  const [datasetTitle, setDatasetTitle] = useState("");

  const node = nodes[currentId];
  const isResult = node.type === "result";

  function answer(direction) {
    setHistory((h) => [...h, currentId]);
    setAnswers((a) => [...a, { nodeId: currentId, direction }]);
    setCurrentId(direction === "yes" ? node.yes : node.no);
    setInfoOpen(false);
  }

  function goBack() {
    const prev = history[history.length - 1];
    setHistory((h) => h.slice(0, -1));
    setAnswers((a) => a.slice(0, -1));
    setCurrentId(prev);
    setInfoOpen(false);
  }

  function restart() {
    setCurrentId(start);
    setHistory([]);
    setAnswers([]);
    setInfoOpen(false);
    setDatasetTitle("");
  }

  if (node.type === "intro") {
    return (
      <div className={styles.wrapper}>
        <div className={styles.cardIntro}>
          <h3 className={styles.introTitle}>{node.title}</h3>
          <p className={styles.introText}>{node.text}</p>
          {node.img && (
            <img src={node.img} alt={node.title} className={styles.introImg} />
          )}
          <label className={styles.datasetLabel} htmlFor="dataset-title">
            Um welche Daten handelt es sich?
          </label>
          <input
            id="dataset-title"
            className={styles.datasetInput}
            type="text"
            placeholder="z. B. Velozähldaten Kanton Zürich"
            value={datasetTitle}
            onChange={(e) => setDatasetTitle(e.target.value)}
          />
          <button
            className={styles.btnPrimary}
            style={{ alignSelf: "flex-end" }}
            onClick={() => setCurrentId(node.next)}
          >
            Los geht's →
          </button>
        </div>
      </div>
    );
  }

  if (isResult) {
    const colors = RESULT_COLORS[node.variant];
    return (
      <div className={styles.wrapper}>
        <div
          className={styles.cardResult}
          style={{ borderTopColor: colors.border }}
        >
          <img src={node.img} alt={node.title} className={styles.resultImg} />
          <h3 className={styles.resultTitle} style={{ color: colors.title }}>
            {datasetTitle ? (
              <>
                Die Daten <em>{datasetTitle}</em> {node.phrase}
              </>
            ) : (
              node.title
            )}
          </h3>
          <p className={styles.resultText}>{node.text}</p>
          <button
            className={styles.infoBtn}
            onClick={() => setSummaryOpen((o) => !o)}
            aria-expanded={summaryOpen}
          >
            <svg
              className={styles.infoIcon}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              style={{
                transform: summaryOpen ? "rotate(180deg)" : "none",
                transition: "transform 0.2s",
              }}
            >
              <polyline
                points="6 9 12 15 18 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {summaryOpen
              ? "Zusammenfassung ausblenden"
              : "Zusammenfassung anzeigen"}
          </button>
          {summaryOpen && (
            <div className={styles.infoBoxWrapper}>
              <Admonition type="info" title="" icon={<></>}>
                <ul className={styles.summaryList}>
                  {answers.map(({ nodeId, direction }) => {
                    const n = nodes[nodeId];
                    const text =
                      direction === "yes" ? n.summaryYes : n.summaryNo;
                    return (
                      <li key={nodeId} className={styles.summaryItem}>
                        <span
                          className={
                            direction === "yes"
                              ? styles.summaryIconYes
                              : styles.summaryIconNo
                          }
                        >
                          {direction === "yes" ? "✓" : "✕"}
                        </span>
                        {text}
                      </li>
                    );
                  })}
                </ul>
              </Admonition>
            </div>
          )}
          <div className={styles.resultActions}>
            <button className={styles.btnSecondary} onClick={restart}>
              ↺ Neu starten
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <p className={styles.datasetTag}>{datasetTitle && `${datasetTitle}`}</p>
        <div className={styles.question}>{node.question}</div>

        {node.infobox && (
          <>
            <button
              className={styles.infoBtn}
              onClick={() => setInfoOpen((o) => !o)}
              aria-expanded={infoOpen}
            >
              <svg
                className={styles.infoIcon}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <line
                  x1="12"
                  y1="11"
                  x2="12"
                  y2="17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="7.5" r="1" fill="currentColor" />
              </svg>
              {infoOpen ? "Weniger anzeigen" : "Mehr erfahren"}
            </button>
            {infoOpen && (
              <div className={styles.infoBoxWrapper}>
                <Admonition type="info" title="" icon={<></>}>
                  {node.infobox}
                </Admonition>
              </div>
            )}
          </>
        )}

        <div className={styles.actions}>
          <button
            className={styles.btnBack}
            onClick={goBack}
            disabled={history.length === 0}
            style={{ visibility: history.length === 0 ? "hidden" : "visible" }}
            aria-label="Zurück zur vorherigen Frage"
          >
            ← Zurück
          </button>
          <button className={styles.btnJa} onClick={() => answer("yes")}>
            ✓ Ja
          </button>
          <button className={styles.btnNein} onClick={() => answer("no")}>
            ✕ Nein
          </button>
        </div>
      </div>
    </div>
  );
}
