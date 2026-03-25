---
id: spaltenüberschriften
title: Spaltenüberschriften
sidebar_label: Spaltenüberschriften
sidebar_position: 3
---

# Spaltenüberschriften

Die erste Zeile eines Datensatzes enthält immer die Spaltenüberschriften - danach folgen die Datenzeilen. Für diese Spaltenüberschriften (Variablennamen) gelten folgende Empfehlungen:

import Tag from '@site/src/components/Tag';

| Empfehlung | <Tag text="✓ Gut" color="#00797B" bg="#E8F3F2" /> | <Tag text="✗ Vermeiden" color="#B01657" bg="#F6E3EA" /> |
|------------|------------------------------------------------|------------------------------------------------------|
| Beginnen nicht mit einer Zahl | `bevölkerung_absolut` | `1_bevölkerung` |
| Eindeutig und selbsterklärend | `bevölkerung_absolut` | `wert` |
| Keine alleinstehenden Jahreszahlen | `code_xy_2023` | `2023` |
| Konsequent Kleinbuchstaben | `bevölkerung_absolut` | `Bevölkerung_Absolut` |
| Keine Leerzeichen. Wörter mit Underscore verbinden | `gesuche_total` | `gesuche total` |
| Keine Sonderzeichen | `anteil_prozent` | `anteil_%` |
| Umlaute sind erlaubt | `bevölkerung` | – |
