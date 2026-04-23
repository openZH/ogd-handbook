---
id: spaltenuberschriften
title: Header und Datenzeilen
sidebar_label: Header und Datenzeilen
sidebar_position: 4
---

# Header und Datenzeilen

import Tag from '@site/src/components/Tag';

## Header

Die erste Zeile eines Datensatzes enthält immer die Spaltenüberschriften (Header). Für diese Variablennamen gelten folgende Empfehlungen:

| Empfehlung | <Tag text="✓ Gut" variant="good" /> | <Tag text="✗ Vermeiden" variant="bad" /> |
|------------|------------------------------------------------|------------------------------------------------------|
| Keine reine Zahlen | `code_3725` | `3725` |
| Eindeutig und selbsterklärend | `flaeche_ha` | `flaeche` |
| Konsequent Kleinbuchstaben | `gebiet_code` | `Gebiet_Code` |
| Keine Leerzeichen. Wörter mit Underscore verbinden | `gesuche_total` | `gesuche total` |
| Keine Sonderzeichen (ausser `_`) | `anteil_prozent` | `anteil_%`, `anteil\nprozent` |
| Umlaute sind nicht empfohlen | `bevoelkerung` | `bevölkerung` |
| Maximal 32 Zeichen lang | `bevoelkerung_reformiert` | `bevoelkerung_ohne_oder_andere_konfession` |

---

## Datenzeilen

Ab der zweiten Zeile folgen die eigentlichen Daten. Für Datenzeilen gelten weniger strenge Regeln als für Spaltenüberschriften:

| Empfehlung | <Tag text="✓ Gut" variant="good" /> | <Tag text="✗ Vermeiden" variant="bad" /> |
|------------|------------------------------------------------|------------------------------------------------------|
| Sonderzeichen und Umlaute erlaubt | `Zürich`, `Ärztekammer` | - |
| Nicht übermässig lange Zeilen | Max. ~160 Zeichen | Mehr als 8000 Zeichen (technisches max.) |
| Keine Nicht-Daten-Zeilen | Nur Header + Datenzeilen | Leerzeilen, Kommentare, Fussnoten |

---

:::tip CSV mit KI prüfen
Mit dem [CSV-Check](./csv-mit-ki-pruefen) kannst du deine Distribution auf die Einhaltung des OGD-Datenstandards prüfen.
:::