---
id: datenstruktur
title: Datenstruktur
sidebar_label: Datenstruktur
sidebar_position: 2
---

# Datenstruktur

## Tidy Data

Eine gute Datenstruktur ist die Grundlage für maschinenlesbare und weiterverwendbare OGD. Das zentrale Prinzip dabei ist **Tidy Data**, welche eine einheitliche Art beschreibt, Daten in Tabellen zu strukturieren. Dabei gilt:

1. Jede **Variable** bildet eine **Spalte**
2. Jede **Beobachtung** bildet eine **Zeile**
3. Jede **Zelle** enthält genau einen **Wert**

## Langes vs. breites Format

### Breites Format (Wide)

| gemeinde | 2020 | 2021 | 2022 |
|----------|------|------|------|
| Zürich | 421'000 | 423'000 | 425'000 |
| Winterthur | 114'000 | 115'000 | 116'000 |

Das **breite Format** ist für Menschen leicht lesbar, aber für Maschinen schwerer zu verarbeiten, wenn die Anzahl Spalten variiert.

### Langes Format (Long)

| gemeinde | jahr | wert |
|----------|------|------|
| Zürich | 2020 | 421'000 |
| Zürich | 2021 | 423'000 |
| Zürich | 2022 | 425'000 |
| Winterthur | 2020 | 114'000 |
| Winterthur | 2021 | 115'000 |
| Winterthur | 2022 | 116'000 |

Das **lange Format** wird für OGD bevorzugt: Es nimmt neue Zeitperioden ohne Strukturänderung auf, hat konsistente Spaltendefinitionen und wird von Analysetools Python, R oder SQL besser verarbeitet.

## Gute und weniger gute Beispiele

import TidyStepper from '@site/src/components/TidyStepper';

<TidyStepper steps={[
  {
    status: 'bad',
    title: 'Regel 1 verletzt "Jede Variable bildet eine Spalte"',
    table: {
      headers: ['gemeinde', '2023', '2024', '2025'],
      rows: [
        ['Winterthur', "118989", "120136", "120491"],
        ['Uster',      "36279", "36457", "36941"],
      ]
    },
    reason: 'Das Jahr steckt im Spaltennamen statt als Wert in einer Spalte. Kommt ein neues Jahr hinzu, ändert sich die Tabellenstruktur.'
  },
  {
    status: 'bad',
    title: 'Regel 2 verletzt "Jede Beobachtung bildet eine Zeile"',
    table: {
      headers: ['gemeinde', 'jahr', 'bevölkerung'],
      rows: [
        ['Winterthur & Uster', '2023', "118989 / 36279"],
      ]
    },
    reason: 'Zwei Beobachtungen sind in einer einzigen Zeile zusammengefasst. Winterthur und Uster sind zwei separate Beobachtungen und müssen je eine eigene Zeile erhalten.'
  },
  {
    status: 'bad',
    title: 'Regel 3 verletzt: Jede Zelle enthält genau einen Wert',
    table: {
      headers: ['gemeinde', 'jahr', 'bevölkerung'],
      rows: [
        ['Winterthur', '2023', "118989 (bevölkerung)"],
        ['Winterthur', '2023', "2% (wachstum)"],
      ]
    },
    reason: 'Die Zelle "bevölkerung" enthält zwei Informationen: den Zahlenwert und die Enheit. Die Einheit gehört in eine eigene Spalte.'
  },
  {
    status: 'ok',
    title: 'Fast Tidy - akzeptabel wenn Spalten konsistent bleiben',
    table: {
      headers: ['gemeinde', 'jahr', 'bevölkerung_absolut', 'bevölkerungswachstum_prozent'],
      rows: [
        ['Winterthur', '2023', "118989", '2'],
        ['Winterthur', '2024', "120136", '1'],
        ['Uster',      '2023', "36279", '1.6'],
        ['Uster',      '2024', "36457", '0.5'],
      ]
    },
    reason: 'Die Variable "Bevölkerung" ist auf zwei Spalten aufgeteilt, weil zwei verschiedene Einheiten existieren. Streng genommen nicht tidy – da die Spalten aber eindeutig benannt sind und konsistent bleiben, ist dies in der Praxis akzeptabel.'
  },
  {
    status: 'good',
    title: 'Perfectly Tidy',
    table: {
      headers: ['gemeinde', 'jahr', 'messgrösse', 'bevölkerung'],
      rows: [
        ['Winterthur', '2023', 'bevölkerung_absolut',  "118989"],
        ['Winterthur', '2023', 'bevölkerungswachstum_prozent',  '2'],
        ['Winterthur', '2024', 'bevölkerung_absolut',  "120136"],
        ['Winterthur', '2024', 'bevölkerungswachstum_prozent',  '1'],
        ['Uster',      '2023', 'bevölkerung_absolut',  "36279"],
        ['Uster',      '2023', 'bevölkerungswachstum_prozent',  '1.6'],
        ['Uster',      '2024', 'bevölkerung_absolut',  "36457"],
        ['Uster',      '2024', 'bevölkerungswachstum_prozent',  '0.5'],
      ]
    },
    reason: 'Jede Variable hat genau eine Spalte, jede Beobachtung genau eine Zeile, jede Zelle genau einen Wert. Die Messgrösse ist explizit als Variable erfasst – neue Messgrössen lassen sich ohne Strukturänderung ergänzen.'
  },
]} />
