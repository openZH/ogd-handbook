---
id: datenstruktur
title: Datenstruktur
sidebar_label: Datenstruktur
sidebar_position: 3
---

# Datenstruktur

## Tidy Data

Eine gute Datenstruktur ist die Grundlage für maschinenlesbare und weiterverwendbare OGD. Das zentrale Prinzip dabei ist **Tidy Data**, welche eine einheitliche Art beschreibt, Daten in Tabellen zu strukturieren. Dabei gilt:

1. Jede **Variable** bildet eine **Spalte**
2. Jede **Beobachtung** bildet eine **Zeile**
3. Jede **Zelle** enthält genau einen **Wert**

---

## Langes vs. breites Format

### Breites Format (Wide)

| gemeinde_code | gemeinde_name | 2020    | 2021    | 2022    |
| ------------- | ------------- | ------- | ------- | ------- |
| 261           | Zürich        | 421'000 | 423'000 | 425'000 |
| 230           | Winterthur    | 114'000 | 115'000 | 116'000 |

Das **breite Format** ist für Menschen leicht lesbar, aber für Maschinen schwerer zu verarbeiten, wenn die Anzahl Spalten variiert.

### Langes Format (Long)

| gemeinde_code | gemeinde_name | jahr | wert    |
| ------------- | ------------- | ---- | ------- |
| 261           | Zürich        | 2020 | 421'000 |
| 261           | Zürich        | 2021 | 423'000 |
| 261           | Zürich        | 2022 | 425'000 |
| 230           | Winterthur    | 2020 | 114'000 |
| 230           | Winterthur    | 2021 | 115'000 |
| 230           | Winterthur    | 2022 | 116'000 |

Das **lange Format** wird für OGD bevorzugt: Es nimmt neue Zeitperioden ohne Strukturänderung auf, hat konsistente Spaltendefinitionen und wird von Analysetools wie Python, R oder SQL besser verarbeitet.

---

## Gute und weniger gute Beispiele

import TidyStepper from '@site/src/components/TidyStepper';

<TidyStepper steps={[
{
status: 'bad',
title: 'Regel 1 verletzt "Jede Variable bildet eine Spalte"',
table: {
headers: ['gemeinde_code', 'gemeinde_name', '2023', '2024', '2025'],
rows: [
['230', 'Winterthur', "118989", "120136", "120491"],
['198', 'Uster', "36279", "36457", "36941"],
]
},
reason: 'Das Jahr steckt im Spaltennamen statt als Wert in einer Spalte. Kommt ein neues Jahr hinzu, ändert sich die Tabellenstruktur.'
},
{
status: 'bad',
title: 'Regel 2 verletzt "Jede Beobachtung bildet eine Zeile"',
table: {
headers: ['gemeinde_code', 'gemeinde_name', 'jahr', 'bevoelkerung'],
rows: [
['230 & 198', 'Winterthur & Uster', '2023', "118989 / 36279"],
]
},
reason: 'Zwei Beobachtungen sind in einer einzigen Zeile zusammengefasst. Winterthur und Uster sind zwei separate Beobachtungen und müssen je eine eigene Zeile erhalten.'
},
{
status: 'bad',
title: 'Regel 3 verletzt: Jede Zelle enthält genau einen Wert',
table: {
headers: ['gemeinde_code', 'gemeinde_name', 'jahr', 'bevoelkerung'],
rows: [
['230', 'Winterthur', '2023', "118989 (bevölkerung)"],
['230', 'Winterthur', '2023', "2% (wachstum)"],
]
},
reason: 'Die Zelle "bevölkerung" enthält zwei Informationen: den Zahlenwert und die Einheit. Die Einheit gehört in eine eigene Spalte.'
},
{
status: 'ok',
title: 'Almost Tidy: akzeptabel, wenn Spalten konsistent bleiben',
table: {
headers: ['gemeinde_code', 'gemeinde_name', 'jahr', 'bevoelkerung_reformiert', 'bevoelkerung_katholisch'],
rows: [
['230', 'Winterthur', '2023', '28390', '21464'],
['230', 'Winterthur', '2024', '29269', '22089'],
['198', 'Uster', '2023', '9615', '8164'],
['198', 'Uster', '2024', '9334', '7983'],
]
},
reason: 'Die Konfession (reformiert, katholisch) steckt im Spaltennamen statt in einer eigenen Spalte - da die Spalten aber eindeutig benannt sind und konsistent bleiben, ist dies in der Praxis akzeptabel.'
},
{
status: 'good',
title: 'Perfectly Tidy',
table: {
headers: ['gemeinde_code', 'gemeinde_name', 'jahr', 'konfession', 'bevoelkerung'],
rows: [
['230', 'Winterthur', '2023', 'reformiert', '28390'],
['230', 'Winterthur', '2023', 'katholisch', '21464'],
['230', 'Winterthur', '2024', 'reformiert', '29269'],
['230', 'Winterthur', '2024', 'katholisch', '22089'],
['198', 'Uster', '2023', 'reformiert', '9615'],
['198', 'Uster', '2023', 'katholisch', '8164'],
['198', 'Uster', '2024', 'reformiert', '9334'],
['198', 'Uster', '2024', 'katholisch', '7983'],
]
},
reason: 'Jede Variable hat genau eine Spalte, jede Beobachtung genau eine Zeile, jede Zelle genau einen Wert. Die Konfession ist explizit als Variable erfasst - neue Konfessionen lassen sich ohne Strukturänderung ergänzen.'
},
]} />

---

:::tip CSV mit KI prüfen
Mit dem [CSV-Check](./csv-mit-ki-pruefen) kannst du deine Distribution auf die Einhaltung des OGD-Datenstandards prüfen.
:::
