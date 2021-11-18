
# Wie exportiere ich eine Datei mit tabellarischen Daten in eine UTF-8-kodierte CSV-Datei? (ENTWURF)

## Windows

### Wenn Du Excel verwendest

Wir raten davon ab, Excel für den Export in eine CSV-Datei zu verwenden, da es dazu neigt, unlesbare Zeichen in CSV-Dateien zu erzeugen. Falls möglich, sollte ein anderes Programm für die Umwandlung genutzt werden (einige werden hier dargestellt). 

In Excel: 
1. Speichern unter 
2. Titel eingeben und in der Leiste csv angeben
3. Bei Warnmeldung auf Ja drücken
4. Csv in Editor öffnen (nicht Excel, bspw. Sublime Text) und Semikolon durch , ersetzen (gehe auf ersetzen oder suchen & ersetzen, alle ersetzen) 
5. Speichern

### Wenn Du Notepad verwendest

1. Klicke auf 'Datei'
2. Wähle 'Speichern unter'
3. Im daraufhin angezeigten Dialogfeld 'Speichern' sind drei Punkte zu aktualisieren:
    1. Dateityp: Ändere diesen zu 'Alle Dateien'
    2. Dateiname: Gib der Datei einen Namen und füge die Erweiterung `.csv` hinzu (z.B.: `kiesstatistik.csv`)
    3. Encoding: Klicke  auf das Dropdown-Menü und wähle 'UTF-8' aus
4. Klicke 'Speichern'

## Mac

Wenn Du Excel für Mac verwendest, empfehlen wir Dir dringend, Deine Datei mit tabellarischen Daten in Numbers oder Google Sheets zu öffnen, um die endgültige CSV-Datei in die UTF-8-Kodierung zu konvertieren und zu exportieren. Excel für Mac unterstützt den Import oder Export von UTF-8-kodierten Dateien nicht von Haus aus.

### Wenn Du Numbers verwendest

1. Klicke auf 'Datei'
2. Bewege den Mauszeiger über 'Export'
3. Wähle im angezeigten Untermenü 'CSV'
4. Klicke auf 'Erweiterte Optionen', um das Dropdown-Menü 'Textkodierung' anzuzeigen
5. Wähle im Dropdown-Menu 'Unicode (UTF-8)' aus
6. Klicke auf 'Weiter'
7. Klicke 'Speichern'

### Wenn Du Google Sheets verwendest

1. Klicke auf 'Datei'
2. Klicke auf oder bewege den Mauszeiger über 'Herunterladen als'
3. Wähle  die Option 'Kommagetrennte Werte (.csv, aktuelles Blatt)'
4. Nachdem Du auf diese Option geklickt hast, wird die Datei automatisch auf Deinen Computer heruntergeladen
