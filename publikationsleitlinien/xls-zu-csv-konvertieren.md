# Excel Datei als CSV speichern

Um die Offenen Behördendaten einheitlich zu gestalten, publizieren wir sie den Datenstandards von w3c entsprechend als kommaseparierte csv-Dateien, die UTF-8 codiert sind. So lassen sich die Dateien ohne Kompatibilitätsprobleme aus allen Programmen öffnen und die Daten weiterverarbeiten. Microsoft speichert im deutschen Sprachraum csv-Dateien mit einem Semikolon als Trennzeichen  - um aus Microsoftsystemen mit Sprach- und Regionaleinstellung "Deutsch" kommaseparierte csvs speichern zu können, sind einige Schritte nötig:

## Ich benutze Excel in Windows:

### Ändern des Trennzeichens
1. Windows Start-Menü öffnen
2. nach "intl.cpl" suchen und öffnen 
3. im neuen Fenster "Weitere Einstellungen" öffnen
4. Listentrennzeichen ändern auf ','
5. in **beiden** Fenstern mit **mit Übernehmen** bestätigen

### Excel als csv exportieren
Du kannst jetzt das Excel als csv abspeichern:
1. den künftigen OGD-Datensatz in Excel öffnen
2. stelle sicher, dass die Daten im tidy Format [Tidy-Format?](warum_tidy_data.md) sind
3. Speichern unter -> Dateityp CSV **UTF-8** (diese Option gibt es erst für Users, die bereits auf den DAP migriert sind)
4. Speichern

### Überprüfen ob Datei korrekt exportiert wurde
1. csv-File mit Rechtsklick anwählen
2. öffnen mit: entweder Editor oder Notepad++ und sicherstellen, dass die Datenstruktur tidy ist und die Felder mit Kommas separiert sind
3. UTF-8 Codierung einstellen (wenn das nicht direkt aus Excel heraus ging)
 - Datei -> Speichern unter -> Codierung: UTF-8
4. Datei ist fertig und kann als OGD veröffentlicht werden

## Ich benutze Mac:

Wenn Du Excel für Mac verwendest, empfehlen wir Dir dringend, Deine Datei mit tabellarischen Daten in Numbers oder Google Sheets zu öffnen, um die endgültige CSV-Datei in die UTF-8-Kodierung zu konvertieren und zu exportieren. Excel für Mac unterstützt den Import oder Export von UTF-8-kodierten Dateien nicht von Haus aus.

### Wenn Du Numbers verwendest

1. Klicke auf 'Datei'
2. Bewege den Mauszeiger über 'Export'
3. Wähle im angezeigten Untermenü 'CSV'
4. Klicke auf 'Erweiterte Optionen', um das Dropdown-Menü 'Textkodierung' anzuzeigen
5. Wähle im Dropdown-Menu 'Unicode (UTF-8)' aus
6. Klicke auf 'Weiter'
7. Klicke 'Speichern'

## Wenn Du Google Sheets verwendest

1. Klicke auf 'Datei'
2. Klicke auf oder bewege den Mauszeiger über 'Herunterladen als'
3. Wähle  die Option 'Kommagetrennte Werte (.csv, aktuelles Blatt)'
4. Nachdem Du auf diese Option geklickt hast, wird die Datei automatisch auf Deinen Computer heruntergeladen

## Wenn du OpenRefine verwendest 
1. Lade das Excel-File nach OpenRefine
2. Klicke auf Export und
3. wähle "Comma-separated value"

Mehr **Hintergrundinfos** und eine generelle Anleitung (für PCs ausserhalb der Kantonsverwaltung Zürich): https://www.pctipp.ch/praxis/office/trickli-damit-excel-richtige-csv-dateien-schreibt-1996442.html
