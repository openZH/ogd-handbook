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
| **Text** | Texte können optional in Anführungszeichen gesetzt werden. Pflicht sind sie jedoch, wenn der Text ein Komma enthält – nur so werden sie als zusammengehörend interpretiert . | `"Französisch, Deutsch"` | `Französisch, Deutsch` |
| **Zahl** | Dezimaltrennzeichen Punkt, keine Tausendertrennzeichen. Allfällige Rundungen in den Metadaten ausweisen. | `1234.56` | `1'234,56` |
| **Datum** | [ISO 8601](https://www.w3.org/TR/NOTE-datetime): `YYYY-MM-DD` | `2021-12-24` | `24.12.2021` |
| **Uhrzeit** | [ISO 8601](https://www.w3.org/TR/NOTE-datetime) mit Datum und Zeitzone: `YYYY-MM-DDThh:mm:ss+hh:mm` | `2021-12-24T19:20:30+01:00` | `24.12.2021 19:20` |
| **URL** | Beginnt mit `https://...` | `https://example.com` | `example.com` |
| **Boolean** | Ja/Nein-Werte sollen als `true` / `false` angegeben werden | `true` | `1`, `ja`, `x` |
| **Koordinaten** | [WGS84](https://www.w3.org/TR/sdw-bp/#CRS-background) (empfohlen) oder LV95 (CH1903+) | `47.3769, 8.5417` | - |
| **Einheit** | Wert und Einheit in separaten Spalten. Bei einheitlicher Einheit: Einheit im Spaltennamen oder in den Metadaten. | - | - |
