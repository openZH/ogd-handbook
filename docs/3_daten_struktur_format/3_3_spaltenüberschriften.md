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
| Keine reine Zahlen | `code_3725` | `3725` |
| Eindeutig und selbsterklärend | `flaeche_ha` | `flaeche` |
| Konsequent Kleinbuchstaben | `gebiet_code` | `Gebiet_Code` |
| Keine Leerzeichen. Wörter mit Underscore verbinden | `gesuche_total` | `gesuche total` |
| Keine Sonderzeichen (ausser `_`) | `anteil_prozent` | `anteil_%`, `anteil\nprozent` |
| Umlaute sind nicht empfohlen | `bevoelkerung` | `bevölkerung` |
| Maximal 32 Zeichen lang | `bevoelkerung_reformiert` | `bevoelkerung_ohne_oder_andere_konfession` |
