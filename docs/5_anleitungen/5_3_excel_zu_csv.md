---
id: excel-zu-csv
title: Excel zu CSV konvertieren
sidebar_label: Excel zu CSV konvertieren
sidebar_position: 3
---

# Excel zu CSV konvertieren

Für die Publikation als OGD müssen Excel-Dateien als CSV exportiert werden. Die Anforderungen an das Format sind in den [Dateiformatvorgaben](/ogd-handbook/daten_struktur_format/dateiformate) beschrieben.

## Konvertierung

Der Export funktioniert je nach Tool unterschiedlich. Eine aktuelle Schritt-für-Schritt-Anleitung für Excel, Numbers, Google Sheets oder LibreOffice lässt sich einfach über ein LLM wie Copilot oder Claude abrufen:

> «Wie exportiere ich eine Excel-Datei als CSV mit Komma als Trennzeichen und UTF-8 Kodierung in [Tool X]?»

## Prüfen

Nach dem Export unbedingt kontrollieren, ob die Vorgaben eingehalten wurden:

1. CSV-Datei per Rechtsklick öffnen mit **Notepad++**
2. Prüfen ob Trennzeichen **Komma** `,` ist
3. Prüfen ob Kodierung **UTF-8** ist (Menü «Kodierung»)
