---
id: dateiformate
title: Dateiformate
sidebar_label: Dateiformate
sidebar_position: 2
---

# Dateiformate

Die Verwendung **offener, maschinenlesbarer Dateiformate** ist eine Pflichtanforderung für OGD im Kanton Zürich. Alle weiteren Empfehlungen in diesem Kapitel verbessern die Qualität und Weiterverwendbarkeit der Daten erheblich - sind aber keine harten Anforderungen.

---

## Tabulare Daten

<table>
<thead>
<tr><th>Format</th><th>Endung</th><th>Verwendung</th></tr>
</thead>
<tbody>
<tr>
<td><strong>CSV</strong></td>
<td><code>.csv</code></td>
<td>

CSV ist das **Standardformat** für tabellarische Daten und wird für die meisten OGD-Datensätze genutzt. Es ist einfach, offen und gut für die Weiterverwendung geeignet. Auf folgendes muss geachtet werden:
- **Zeichenkodierung:** UTF-8, bevorzugt UTF-8 BOM (verbessert die Darstellung in Programmen wie Excel)
- **Trennzeichen:** Komma `,` (kein Semikolon)
- **Dezimaltrennzeichen:** Punkt `.` (kein Komma)
- **Erste Zeile:** Spaltenüberschrift (Header)

</td>
</tr>
<tr>
<td><strong>Parquet</strong></td>
<td><code>.parquet</code></td>
<td>Für sehr grosse Datenmengen</td>
</tr>
</tbody>
</table>

:::warning Warum Excel nicht geeignet ist
 Excel-Dateien sind im Verwaltungsalltag verbreitet, für OGD jedoch ungeeignet. Das Format ist proprietär, enthält oft Formatierungen, Formeln oder mehrere Tabellenblätter und erschwert damit die maschinelle Verarbeitung.
:::

---

## Strukturierte und verschachtelte Daten

| Format | Endung | Verwendung |
|--------|--------|------------|
| **JSON** | `.json` | Verschachtelte oder hierarchische Strukturen |
| **XML** | `.xml` | Strukturierte Daten |

---

## APIs

Eine API (Application Programming Interface) ermöglicht den direkten, automatisierten Zugriff auf Daten ohne manuellen Download. APIs sind nicht nur für laufend aktualisierte Daten ideal, sondern grundsätzlich für alle Datensätze empfehlenswert. Sie lösen statische Dateidownloads schrittweise ab und machen Verwaltungsdaten zu jederzeit aktuellen Distributionen. Spannender Blog-Artikel dazu: [APIs für eine wandlungsfähige Verwaltung](https://medium.com/openzh/apis-f%C3%BCr-eine-wandlungsf%C3%A4hige-verwaltung-577ae07b6e55).

:::info API direkt aus der Fachanwendung
Stammen die Daten aus einer spezifischen Fachapplikation, bietet die Software häufig bereits eine API an. Es lohnt sich, dies gemeinsam mit dem Softwarehersteller zu prüfen.
:::

---

:::tip CSV mit KI prüfen
Mit dem [CSV-Check](/anleitungen/csv-mit-ki-pruefen) kannst du deine Distribution auf die Einhaltung des OGD-Datenstandards prüfen.
:::

