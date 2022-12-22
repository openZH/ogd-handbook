# Aus Excel als csv speichern

Um die Offenen Behördendaten einheitlich zu gestalten, publizieren wir sie den Datenstandards von w3c entsprechend als kommaseparierte csv-Dateien, die UTF-8 codiert sind. So lassen sich die Dateien ohne Kompatibilitätsprobleme aus allen Programmen öffnen und die Daten weiterverarbeiten. Microsoft speichert im deutschen Sprachraum csv-Dateien mit einem Semikolon als Trennzeichen  - um aus Microsoftsystemen mit Sprach- und Regionaleinstellung "Deutsch" kommaseparierte csvs speichern zu können, sind einige Schritte nötig:

##Option 1: (Kurzfristiges) Umstellen der Sprachregion
1. Windows Start-Menü öffnen
2. nach "Region" suchen
3. Einstellungen -> Region -> Regionales Format öffnen
4. das **Regionale Format** umstellen auf Englisch (egal welches Land)
![Darstellung Regionales Format = Englisch in Windows 10](https://user-images.githubusercontent.com/71826877/209157607-4b1c9e60-0402-44e5-95dd-f52091c7b17d.png)
5. den künftigen OGD-Datensatz in Excel öffnen
6. Speichern unter -> Dateityp csv **oder** csv UTF-8 (diese Option gibt es erst für Users, die bereits auf den DAP migriert sind)
7. csv-File mit Rechtsklick anwählen
8. öffnen mit: entweder Editor oder Notepad++ und sicherstellen, dass die Datenstruktur tidy ist und die Felder mit Kommas separiert sind
9. UTF-8 Codierung einstellen (wenn das nicht direkt aus Excel heraus ging)
 - Datei -> Speichern unter -> Codierung: UTF-8
10. Datei ist fertig und kann als OGD veröffentlicht werden
11. evtl die Sprachregion wieder umstellen auf "Deutsch (Schweiz)". Auswirkung wenn nicht wieder zurückgestellt: die Datumsanzeige und Systemuhr unten rechts ist in internationalem Format.

##Option 2: Grundsätzliches Ändern des Trennzeichens
1. Windows Start-Menü öffnen
2. nach "Sprache" suchen
3. Einstellungen -> Sprache öffnen
4. rechts unter "Verwandte Einstellungen" die Administrativen Sprachoptionen öffnen
![Administrative Sprachoptionen in Windows 10](https://user-images.githubusercontent.com/71826877/209162146-e21f3785-05f0-4a8e-90ca-487fc79f5469.png)
5. im neuen Fenster Tab wechseln zu "Formate" -> Weitere Einstellungen
6. Listentrennzeichen ändern auf ','


Mehr **Hintergrundinfos** und eine generelle Anleitung (für PCs ausserhalb der Kantonsverwaltung Zürich): https://www.pctipp.ch/praxis/office/trickli-damit-excel-richtige-csv-dateien-schreibt-1996442.html
