---
id: datentypen
title: Datentypen
sidebar_label: Datentypen
sidebar_position: 4
---

# Datentypen

Jede Spalte enthält Werte eines einzigen Datentyps. Die folgenden Formatvorgaben stellen sicher, dass Daten maschinell korrekt verarbeitet werden können. Die Empfehlungen sind wie folgt:

import Tag from '@site/src/components/Tag';

| Datentyp | Format | <Tag text="✓ Gut" color="#00797B" bg="#E8F3F2" /> | <Tag text="✗ Vermeiden" color="#B01657" bg="#F6E3EA" /> |
|----------|--------|--------------------------------------------------|--------------------------------------------------------|
| **Text** | Strings können optional in Anführungszeichen gesetzt werden. Pflicht sind sie jedoch, wenn der Text ein Komma enthält - nur so werden sie als zusammengehörend interpretiert `.` | `"Französisch, Deutsch"` | `Französisch, Deutsch` |
| **Zahl** | Dezimaltrennzeichen Punkt `.`. Keine Tausendertrennzeichen. Vorzeichen: `-` für negative Zahlen, `+` nur wenn kontextüblich. Wissenschaftliche Notation möglichst vermeiden. Allfällige Rundungen in den Metadaten ausweisen. | `1234.56`, `-0.5` | `1'234,56`, `1E-2` |
| **Datum** | [ISO 8601](https://www.w3.org/TR/NOTE-datetime): `YYYY-MM-DD` | `2021-12-24` | `24.12.2021` |
| **Uhrzeit** | [ISO 8601](https://www.w3.org/TR/NOTE-datetime): entweder kombiniert `YYYY-MM-DDThh:mm:ss` oder in zwei separaten Spalten `datum` + `uhrzeit`. `T` oder Leerzeichen als Trennzeichen zwischen Datum und Uhrzeit sind erlaubt. <br/> Lokalzeit wenn möglich verwenden (CET im Winter, CEST im Sommer). Ist die Zeitzone nicht eindeutig ableitbar, auf UTC normalisieren, mit `Z` kennzeichnen und in den Metadaten vermerken. | `2021-12-24T19:20:30`,`2021-12-24 19:20:30` | `24.12.2021 19:20` |
| **Boolean** | Ja/Nein-Werte sollen als `true` / `false` angegeben werden | `true` | `1/0`, `ja/nein`, `x`, `t/f` |
| **Koordinaten** | [WGS84](https://www.w3.org/TR/sdw-bp/#CRS-background) (empfohlen) oder LV95 (CH1903+) | `47.3769, 8.5417` | - |

:::tip Einheit
Wert und Einheit sollten in separaten Spalten aufgeführt werden. Wenn alle Werte einer Spalte dieselbe Einheit haben, kann die Einheit weggelassen und im Spaltennamen (z.B. `laenge_cm`) oder in den Metadaten dokumentiert werden.
:::