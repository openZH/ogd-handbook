---
id: datenschutz
title: Datenschutz
sidebar_label: Datenschutz
sidebar_position: 4
---

import DatenschutzCheck from '@site/src/components/DatenschutzCheck';
import imgIntro from '@site/static/img/datenschutz_intro.png';
import imgOgd from '@site/static/img/datenschutz_ogd.png';
import imgUnklar from '@site/static/img/datenschutz_unklar.png';
import imgNichtOgd from '@site/static/img/datenschutz_nicht_ogd.png';


export const nodes = {
INTRO: { type: "intro", title: "Datenschutz-Check", text: "Finde heraus, ob deine Daten als Open Government Data veröffentlicht werden können.", img: imgIntro, next: "Q1" },
Q1: { question: "Liegen die Daten strukturiert (oder strukturierbar) und elektronisch vor?",
infobox: "Damit Daten verwendet und ausgewertet werden können, müssen sie einer Struktur folgen und elektronisch vorliegen. Dies sind auch die Voraussetzungen dafür, dass öffentliche Daten als open data zur Verfügung gestellt werden (müssen). Art. 15 IDGrev",
summaryYes: "Die Daten liegen strukturiert und elektronisch vor.",
summaryNo: "Die Daten liegen nicht strukturiert oder elektronisch vor.",
yes: "Q2", no: "R3" },
Q2: { question: "Werden die Daten für die Erfüllung von Verwaltungsaufgaben genutzt?",
infobox: "In der Verwaltung fallen auch Daten an, die nichts mit den eigentlichen Aufgaben der Verwaltung zu tun haben, bspw. Kaffeekassenlisten oder persönliche To-Do-Listen. Diese Daten dienen nicht der Nachvollziehbarkeit des Verwaltungshandelns und sind nicht nützlich für eine Wiederverwendung. Sie werden nicht als OGD publiziert.",
summaryYes: "Die Daten dienen der Erfüllung von Verwaltungsaufgaben.",
summaryNo: "Die Daten dienen nicht der Erfüllung von Verwaltungsaufgaben.",
yes: "Q3", no: "R3" },
Q3: { question: "Liegen die Daten als Einzeldaten vor?",
infobox: "Einzeldaten sind die kleinste Ebene der Information. Sie geben die einzelne Messung, die einzelne Person oder den einzelnen Vorgang wieder. Für die Analyse und weitere Bearbeitung sind Einzeldaten besonders wertvoll, weil sie noch nicht weiterverarbeitet sind und sich viel daraus herauslesen lässt. Deswegen ist der Datenschutz bei Einzeldaten besonders wichtig.",
summaryYes: "Die Daten liegen als Einzeldaten vor.",
summaryNo: "Die Daten liegen nicht als Einzeldaten vor (bereits aggregiert).",
yes: "Q4", no: "Q8" },
Q4: { question: "Sind Daten enthalten, die Personen bestimmbar machen oder lassen sich Rückschlüsse auf bestimmte Personen ziehen?",
infobox: "Personendaten gemäss IDGrev (Art.5c) sind Daten, die sich auf eine bestimmte oder bestimmbare Person beziehen. Wenn möglich wird der Personenbezug entfernt über Anonymisierung, Aggregation etc.",
summaryYes: "Die Daten enthalten einen Personenbezug.",
summaryNo: "Die Daten machen keine Personen bestimmbar.",
yes: "Q5", no: "Q8" },
Q5: { question: "Lässt sich der Personenbezug vermeiden, ohne den Nutzen des Datensatzes einzuschränken?",
infobox: "Personendaten gemäss IDGrev (Art.5c) sind Daten, die sich auf eine bestimmte oder bestimmbare Person beziehen. Wenn möglich wird der Personenbezug entfernt über Anonymisierung, Aggregation etc.",
summaryYes: "Der Personenbezug kann ohne Nutzenverlust entfernt werden.",
summaryNo: "Der Personenbezug kann nicht ohne Nutzenverlust entfernt werden.",
yes: "Q8", no: "Q6" },
Q6: { question: (<><span>Der Datensatz enthält Personendaten, die direkt oder nach Verknüpfung mit weiteren Daten</span><ul><li>eine Persönlichkeitsverletzung ermöglichen: Religion, Weltanschauung, Gesundheit, Intimsphäre, ethnische Herkunft, Sozialhilfemassnahmen, verwaltungs- oder strafrechtliche Verfolgung oder Sanktionen</li><li>Biometrische oder genetische Daten</li><li>ein Persönlichkeitsprofil erstellen lassen</li></ul></>),
infobox: (<><p>Als <strong>besondere Personendaten</strong> gelten:</p><ol type="a"><li>Informationen, bei denen wegen ihrer Bedeutung, der Art ihrer Bearbeitung oder der Möglichkeit ihrer Verknüpfung mit anderen Informationen eine besondere Gefahr einer Persönlichkeitsverletzung besteht, wie Informationen über<ol><li>die religiösen, weltanschaulichen, politischen oder gewerkschaftlichen Ansichten oder Tätigkeiten,</li><li>die Gesundheit, die Intimsphäre, die ethnische Herkunft oder genetische oder biometrische Daten,</li><li>Sozialhilfemassnahmen,</li><li>verwaltungs- oder strafrechtliche Verfolgungen oder Sanktionen,</li></ol></li><li>Zusammenstellungen von Informationen, die eine Beurteilung wesentlicher Aspekte der Persönlichkeit natürlicher Personen erlauben (Persönlichkeitsprofil),</li><li>automatisierte Auswertungen von Informationen, um wesentliche persönliche Merkmale zu analysieren oder persönliche Entwicklungen vorherzusagen (Profiling).</li></ol></>),
summaryYes: "Die Daten enthalten besondere Personendaten.",
summaryNo: "Die Daten enthalten keine besonderen Personendaten.",
yes: "R3", no: "Q7" },
Q7: { question: "Ist die Publikation der Personendaten notwendig, um den gesetzlichen Auftrag zu erfüllen?",
infobox: "Personendaten gemäss IDGrev (Art.5c) sind Daten, die sich auf eine bestimmte oder bestimmbare Person beziehen. Ihre Bearbeitung ist erlaubt, wenn notwendig für eine in einem Gesetz oder einer Verordnung festgelegten Aufgabe (IDGrev Art 25)",
summaryYes: "Die Publikation der Personendaten ist für den gesetzlichen Auftrag notwendig.",
summaryNo: "Die Publikation der Personendaten ist nicht gesetzlich notwendig.",
yes: "Q8", no: "R1" },
Q8: { question: "Ist die Gefahr für die öffentliche oder eine persönliche Sicherheit hoch?",
infobox: "Offener Informationszugang ist immer eine Interessenabwägung zwischen berechtigtem öffentlichem Interesse und öffentlichem oder privaten Interesse am Verschluss der Information IDGrev Art. 11. Je höher das öffentliche Interesse an der Information, um so mehr private Interessen müssen dem entgegen stehen oder umso höher muss die Gefahr für die öffentliche Sicherheit sein.",
summaryYes: "Die Veröffentlichung gefährdet die öffentliche oder persönliche Sicherheit.",
summaryNo: "Die Veröffentlichung gefährdet keine öffentliche oder persönliche Sicherheit.",
yes: "R1", no: "Q9" },
Q9: { question: "Steht der Veröffentlichung eine rechtliche Bestimmung entgegen?",
infobox: "Das IDG erlaubt die Publikation von OGD grundsätzlich. Es kann sein, dass die Bekanntgabe von Information in einem Spezialgesetz untersagt oder eingeschränkt ist. Dies sind Gesetze aus der Fachlichkeit der datenhaltenden Stelle, deren Jurist\*innen sollten sie kennen. Ist die gesetzliche Bestimmung nicht mehr sinnvoll, sollte sie angepasst und danach die Daten publiziert werden.",
summaryYes: "Eine gesetzliche Bestimmung steht der Veröffentlichung entgegen.",
summaryNo: "Keine gesetzliche Bestimmung steht der Veröffentlichung entgegen.",
yes: "R1", no: "Q10" },
Q10: { question: "Sind die Daten urheberrechtlich geschützt?",
infobox: "Daten werden immer durch die datenhaltende Stelle publiziert – das darf sie nur, wenn sie auch Besitzerin der Daten ist. Gehören die Daten einer anderen Verwaltungsstelle, kann man diese bitten, die Daten zu publizieren. Liegt das Urheberrecht der Daten bei einer Auftragnehmerin, bei einem Labor beispielsweise, muss der Übertrag der Rechte an die Verwaltung vertraglich geregelt werden.",
summaryYes: "Die Daten unterliegen einem Urheberrecht, das nicht beim Kanton liegt.",
summaryNo: "Die Daten unterliegen keinem externen Urheberrecht.",
yes: "Q11", no: "R2" },
Q11: { question: "Wurden die Rechte an den Kanton übertragen und Persönlichkeitsrechte gewahrt/verzichtet?",
infobox: "Daten werden immer durch die datenhaltende Stelle publiziert – das darf sie nur, wenn sie auch Besitzerin der Daten ist. Gehören die Daten einer anderen Verwaltungsstelle, kann man diese bitten, die Daten zu publizieren. Liegt das Urheberrecht der Daten bei einer Auftragnehmerin, bei einem Labor beispielsweise, muss der Übertrag der Rechte an die Verwaltung vertraglich geregelt werden.",
summaryYes: "Die Urheberrechte wurden an den Kanton übertragen.",
summaryNo: "Die Urheberrechte wurden nicht an den Kanton übertragen.",
yes: "R2", no: "R3" },
R1: { type: "result", variant: "unklar", title: "Abwägung nötig", phrase: "brauchen eine Abwägung", img: imgUnklar, text: "Die Publikation dieser Daten bedarf einer Abwägung zwischen Schutzinteressen und öffentlichem Interesse. Melde dich unter info@open.zh.ch" },
R2: { type: "result", variant: "ogd", title: "Diese Daten sind OGD", phrase: "sind OGD", img: imgOgd, text: "Deine Daten können als Open Government Data publiziert werden. Weiter geht's mit dem Publikationsprozess." },
R3: { type: "result", variant: "nicht_ogd", title: "Nicht geeignet für OGD", phrase: "sind nicht geeignet für OGD", img: imgNichtOgd, text: "Diese Daten sind nicht geeignet für OGD. Lass uns gemeinsam überlegen, was die Alternativen wären. Melde dich unter info@open.zh.ch" },
};


# Datenschutz

Die Publikation von Open Data erfordert immer eine Abwägung: Wie hoch ist das öffentliche Interesse an der Bekanntgabe – und wie schwer wiegen Schutzinteressen wie Privatsphäre oder öffentliche Sicherheit? Je stärker das berechtigte Interesse an Transparenz, desto gewichtiger müssen die Gründe für eine Einschränkung sein.

Ein anschauliches Beispiel sind Kontaktangaben von Verwaltungsmitarbeitenden: Grundsätzlich publizieren wir keine Daten, mit denen Personen identifiziert werden können. Dennoch veröffentlichen wir Kontaktdaten von Mitarbeitenden im öffentlichen Dienst – weil das Interesse der Bevölkerung, die Verwaltung erreichen zu können, überwiegt. Für Daten ohne so klares öffentliches Interesse gilt: Wir publizieren nichts, das direkt oder in Kombination mit bis zu vier weiteren Datensätzen zur Identifikation von Personen oder zur Gefährdung der öffentlichen Sicherheit genutzt werden könnte.

Viele Verwaltungsdaten sind in dieser Hinsicht völlig unbedenklich – etwa die Fahrzeugflotte der Verwaltung, Geschossflächenreserven in den Gemeinden oder Strahlungsmesswerte. Bei Unklarheiten stehen folgende Stellen zur Verfügung:

- die Fach- und Koordinationsstelle OGD für eine erste Einschätzung
- die Fachstelle IDG des Kantons Zürich für Fragen zum Öffentlichkeitsprinzip
- die Jurist\*innen der jeweiligen Organisationseinheit für Fragen zum Datenschutz
- die Datenschutzbeauftragte des Kantons Zürich für Fragen aus der Bevölkerung


{/*
## Sind deine Daten OGD-ready?

<DatenschutzCheck nodes={nodes} start="INTRO" totalQuestions={11} />
*/}
