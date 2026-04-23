---
id: csv-mit-ki-pruefen
title: CSV mit KI prüfen
sidebar_label: CSV mit KI prüfen
sidebar_position: 2
---

import DatenschutzCheck from '@site/src/components/DatenschutzCheck';
import imgOgd from '@site/static/img/datenschutz_ogd.png';
import imgUnklar from '@site/static/img/datenschutz_unklar.png';
import imgNichtOgd from '@site/static/img/datenschutz_nicht_ogd.png';

# CSV mit KI prüfen

Diese Anleitung erklärt, wie du mit einem Large Language Model (wie Claude, ChatGPT...) prüfen kannst, ob ein CSV-Datensatz die Anforderungen und Empfehlungen des OGD-Datenstandard des Kantons Zürich einhält.

:::warning Datenschutz beachten
Füge **keine personenbezogenen oder vertraulichen Daten** in öffentliche LLM-Dienste ein.
:::
---

## Schritt-für-Schritt-Anleitung

### 1. CSV-Auszug vorbereiten

Öffne deinen CSV-Datensatz in einem **Texteditor** (nicht in Excel!). Kopiere:

- die erste Zeile (Header)
- mindestens 10 repräsentative Datenzeilen


### 2. Prompt ins LLM eingeben

Kopiere den [Prüfprompt](#der-prüfprompt) weiter unten auf dieser Seite und ersetze den Platzhalter `[CSV HIER EINFÜGEN]` durch deinen CSV-Auszug. Füge ihn in das LLM-Chatfenster ein und sende die Anfrage ab.


### 3. Ergebnis lesen und interpretieren

Das LLM gibt eine Prüftabelle sowie eine Zusammenfassung aus. Interpretiere die Status-Icons wie folgt:

| Icon | Bedeutung                        | Handlung                                 |
| ---- | -------------------------------- | ---------------------------------------- |
| ✅   | Kriterium erfüllt                | Keine Aktion nötig                       |
| ❌   | Anforderung verletzt             | **Zwingend korrigieren** vor Publikation |
| ⚠️   | Empfehlung nicht eingehalten     | Nach Möglichkeit korrigieren             |
| ❓   | Nicht prüfbar anhand des Auszugs | Manuell prüfen                           |

### 4. Korrekturen vornehmen und erneut prüfen

Behebe die identifizierten Probleme im Datensatz. Führe den Prompt danach mit einem neuen Auszug nochmals aus, um sicherzustellen, dass alle Anforderungen erfüllt sind.

---

## Der Prüfprompt

Kopiere den folgenden Prompt vollständig, ersetze den Platzhalter und sende ihn an ein LLM deiner Wahl.

```markdown
Du bist ein Qualitätsprüfer für Open Government Data (OGD) des Kantons Zürich.
Prüfe das unten eingefügte CSV auf die Einhaltung der folgenden Vorgaben.

---

## LEGENDE

| Status | Bedeutung                        |
| ------ | -------------------------------- |
| ✅     | Anforderung eingehalten          |
| ❌     | Anforderung verletzt             |
| ⚠️     | Empfehlung nicht eingehalten     |
| ❓     | Nicht prüfbar anhand des Auszugs |

---

## PRÜFKRITERIEN

### A - Anforderungen (Verletzung → ❌)

| Nr  | Kriterium        | Beschreibung          |
| --- | ---------------- | --------------------- |
| 1   | Zeichenkodierung | UTF-8 oder UTF-8 BOM. |

Hinweis: Nicht prüfbar anhand eines Textauszugs. Markiere dieses Kriterium immer als ❓ und weise den Nutzer darauf hin,
die Kodierung lokal zu prüfen: CSV-Datei per Rechtsklick öffnen mit Notepad++, Prüfen ob Kodierung UTF-8 ist (Menü «Kodierung»)|
| 2 | Trennzeichen | Komma `,` - kein Semikolon oder Tab |
| 3 | Dezimaltrennzeichen | Punkt `.` - kein Komma |
| 4 | Erste Zeile ist Header | Die erste Zeile enthält Spaltenüberschriften, keine Datenwerte |

### B - Empfehlungen (Verletzung → ⚠️)

| Nr  | Kriterium                                    | Beschreibung                                                                                                                                                                                                                                                                                                                                        |
| --- | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5   | Tidy Data - eine Variable pro Spalte         |                                                                                                                                                                                                                                                                                                                                                     |
| 6   | Tidy Data - eine Beobachtung pro Zeile       |                                                                                                                                                                                                                                                                                                                                                     |
| 7   | Tidy Data - ein Wert pro Zelle               |                                                                                                                                                                                                                                                                                                                                                     |
| 8   | Langes statt breites Format                  | Zeitreihen oder Kategorien als Zeilen, nicht als Spalten (z.B. `jahr` + `wert` statt `2020`, `2021`, `2022` als Spaltenköpfe). Beispiel: `gemeinde_code,gemeinde_name,jahr,konfession,bevoelkerung` / `230,Winterthur,2023,reformiert,28390` / `230,Winterthur,2023,katholisch,21464`                                                               |
| 9   | Header - keine reinen Zahlen                 | Spaltennamen sind nicht nur Zahlen (z.B. nicht `2020`, `2021`)                                                                                                                                                                                                                                                                                      |
| 10  | Header - eindeutig und selbsterklärend       | Spaltennamen beschreiben den Inhalt klar                                                                                                                                                                                                                                                                                                            |
| 11  | Header - konsequent Kleinbuchstaben          | Keine Grossbuchstaben in Spaltennamen, mögliche Ausnahme: fixe Abkürzungen wie `WGS84`                                                                                                                                                                                                                                                              |
| 12  | Header - keine Leerzeichen                   | Wörter mit Underscore `_` verbunden                                                                                                                                                                                                                                                                                                                 |
| 13  | Header - keine Sonderzeichen ausser `_`      | Keine `%`, `\n`, `/`, Klammern etc.                                                                                                                                                                                                                                                                                                                 |
| 14  | Header - keine Umlaute                       | Keine ä, ö, ü, é etc. in Spaltennamen                                                                                                                                                                                                                                                                                                               |
| 15  | Header - max. 32 Zeichen                     | Spaltennamen nicht länger als 32 Zeichen                                                                                                                                                                                                                                                                                                            |
| 16  | Datenzeilen - Sonderzeichen erlaubt          | Umlaute sollen genutzt werden                                                                                                                                                                                                                                                                                                                       |
| 17  | Datenzeilen - keine übermässig langen Zeilen | Richtwert max. ~160 Zeichen; technisches Maximum 8000 Zeichen                                                                                                                                                                                                                                                                                       |
| 18  | Datenzeilen - keine Nicht-Daten-Zeilen       | Keine Leerzeilen, Kommentare, Fussnoten oder Zwischentitel                                                                                                                                                                                                                                                                                          |
| 19  | Datentyp - String                            | Optional in Anführungszeichen; Pflicht wenn Text ein Komma enthält                                                                                                                                                                                                                                                                                  |
| 20  | Datentyp - Zahl                              | Dezimaltrennzeichen Punkt. Keine Tausendertrennzeichen. Vorzeichen: `-` für negative Zahlen, `+` nur wenn kontextüblich. Wissenschaftliche Notation möglichst vermeiden                                                                                                                                                                             |
| 21  | Datentyp - Datum                             | Format `YYYY-MM-DDThh:mm:ss` oder in zwei separaten Spalten `datum` + `uhrzeit`. `T` oder Leerzeichen als Trennzeichen. Lokalzeit bevorzugen (CET = +01:00 im Winter, CEST = +02:00 im Sommer). Falls Zeitzone nicht eindeutig ableitbar: UTC mit `Z` kennzeichnen und in Metadaten vermerken. Zeitzone-Offset muss ISO-8601-konform sein: `+01:00` |
| 22  | Datentyp - Boolean                           | `true` / `false` (nicht `1`/`0`, `ja`/`nein`, `x`, `t`/`f`)                                                                                                                                                                                                                                                                                         |
| 23  | Datentyp - Koordinaten                       | WGS84 (empfohlen) oder LV95 (CH1903+); Spaltennamen z.B. `breitengrad_wgs84` / `laengengrad_wgs84` oder LV95-Äquivalent                                                                                                                                                                                                                             |
| 24  | Wert und Einheit in separaten Spalten        | Z.B. `laenge` + `einheit`, nicht gemischte Einheiten in einer Spalte. Wenn alle Werte einer Spalte dieselbe Einheit haben, kann die Einheit alternativ im Spaltennamen (z.B. laenge_cm) oder in den Metadaten dokumentiert werden – eine separate Einheitenspalte ist dann nicht erforderlich.                                                      |
| 25  | Räumliche Referenzierung                     | Genau ein Gebietstyp: `gemeinde_code` + `gemeinde_name`, oder `bezirk_code` + `bezirk_name` etc. Mehrere Gebietstypen: `gebietstyp_code`, `gebietstyp_name`, `gebiet_code`, `gebiet_name`. Spaltennamen sollen exakt dieser Konvention folgen (nicht z.B. `gemeinde` oder `bfs_nr` ).                                                               |
| 26  | Fehlende Werte als leeres Feld               | Keine Platzhalter wie `NA`, `n/a`, `-`, `.`                                                                                                                                                                                                                                                                                                         |

---

## EINGABE

[CSV HIER EINFÜGEN]

---

## AUSGABE

Gib die Ergebnisse in folgender Reihenfolge aus:

1. **Prüftabelle** mit den Spalten: Nr | Kriterium | Status | Befund
2. **Fazit** (2-3 Sätze): Ist der Datensatz für die OGD-Publikation geeignet?
3. **Korrekturvorschläge**: Konkrete Massnahmen pro verletzter Anforderung
```
