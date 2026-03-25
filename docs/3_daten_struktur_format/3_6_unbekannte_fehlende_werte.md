---
id: fehlende-werte
title: Unbekannte und fehlende Werte
sidebar_label: Fehlende Werte
sidebar_position: 6
---

# Unbekannte und fehlende Werte

Fehlende oder unbekannte Werte sollen einheitlich und klar gekennzeichnet sein, damit sie korrekt interpretiert werden.

## Leeres Felds für fehlende Werte

Fehlende und unbekannte Werte werden als **leeres Feld** dargestellt, und nicht als Text wie `NA`, `n/a`, `-` oder ähnliches. Zellen können aus verschiedenen Gründen leer sein:
- Kein Wert vorhanden
- Wert wurde verworfen
- Wert wurde nicht erhoben
- Wert wurde aus Datenschutzgründen nicht aufgenommen

Zusätzliche Informationen zur Interpretation leerer Felder sollen in den Metadaten dokumentiert werden.

:::tip Leer = fehlend
In den meisten Analysewerkzeugen wird ein leeres CSV-Feld automatisch als `NULL` / `NA` / `NaN` interpretiert. Leere Zellen sind daher die bevorzugte Methode.
:::

## 0 ist kein fehlender Wert

`0` ist ein gültiger Wert und bedeutet «nicht vorhanden» (z.B. 0 Gesuche eingereicht) und soll nicht mit einem fehlenden Wert verwechselt werden.
