
Version: 1.0 <br>
Status: ENTWURF, in öffentlicher Konsultation

> - Feedback (Hinweise, Wünsche und Fragen) bitte als Issues erfassen: https://github.com/openZH/mdd-ogd-handbook/issues


# Formale Leitlinien zur Datenpublikation des Kantons Zürich

DATEI-FORMATE

Für tabellarische Daten verwenden wir standardmässig das Datei-Format [CSV](http://opendatahandbook.org/glossary/en/terms/csv/).
- [Wie erstelle ich aus einem XLS- eine CSV-Datei](https://github.com/openZH/mdd-ogd-handbook/blob/main/publikationsleitlinien/xls-zu-csv-konvertieren.md)?

>> - CSV ist besser als Excel, alle Formate sind besser als Word, PDF oder Fliesstext.
>> - Für Daten mit komplexen Strukturen und/oder um Daten einfach zwischen Programmen und Systemen zu übertragen, ist das Datei-Format [JSON](http://opendatahandbook.org/glossary/en/terms/json/) sehr gut.

Variabeln und Werte trennen wir mittels Kommas `,` voneinander (nicht mittels Semikolons `;`).

> - Ausser es gibt einen guten Grund.
> - Standardeinstellungen eines Programms, wie z.B. Excel, sind kein guter Grund.

CSV-Dateien speichern wir als Unicode (UTF-8) ab.

> - Das geht [so](https://github.com/openZH/mdd-ogd-handbook/blob/main/publikationsleitlinien/UTF-8-kodieren.md).


TIDY DATA

Wir bauen Datenstrukturen gemäss der Maxime 'Tidy Data' auf.
- Das ist wichtig, damit ... .

> Das heisst: Pro Variable eine Spalte, pro Beobachtung eine Zeile, pro Wert eine Zelle.  
> 
> ``BFS_NR,GEBIET_NAME,INDIKATOR_JAHR,INDIKATOR_VALUE,EINHEIT_KURZ``  
> ``1,Aeugst a.A.,1990,111,Fr./Einw.``  
> ``1,Aeugst a.A.,1991,102,Fr./Einw.``  
> ``1,Aeugst a.A.,1992,85,Fr./Einw.``

Keine Leerzeilen.

Keine Spalten-Hierarchien, also keine miteinander zusammengeführten Zellen (z.B. um Ober- und Unterkategorien zu repräsentieren), sondern Oberkategorien in einer ersten Spalte, Unterkategorien in einer zweiten Spalte.

Wir verzichten auf überflüssige Variablen (z.B. mit denselben Wert über die gesamte Reihe).

Keine Fussnoten und ähnliche Verweise. Hinweise vermitteln wir:
- entweder in einer eigenen Spalte oder
- (wenn kurz) in der Metadaten-Beschreibung der entsprechenden Daten-Ressource oder
- (wenn ausführlicher) als HTML-Page, TXT- oder PDF-Datei, die wir in den Metadaten unter "Weitere Informationen" referenzieren.


SPALTENÜBERSCHRIFTEN

Spaltenüberschriften (Variabeln):
- beginnen nicht mit einer Zahl,
- haben keine Leerzeichen, sondern sind entweder zusammengeschrieben (Gross- und Kleinbuchstaben sind möglich) oder mittels 'Underline' verbunden (z.B. `anzahl_fahrzeuge`),
- haben keine Umlaute, sondern sind ausgeschrieben als `ae`, `oe`, `ue` und
- haben keine Sonderzeichen, sondern sind ausgeschrieben (z.B. `prozent` statt `%`).



ZELLEN

Alle Zellen einer Spalte haben dasselbe Daten-Format. Die häufigsten sind: 
- `Text`
- Zahl
- Datum
- Zeit
- URL.

Einheitsangaben dürfen nicht zusammen mit Werten in derselben Zelle stehen.

Werte mit Daten-Format `Text`, die Kommas enthalten, klammern wir zwingend mittels Anführungs- und Schlusszeichen ein (z.B. `"Französisch, Deutsch"`). Das ist wichtig, damit diese Text-Inhalte (in der Fachsprache bezeichnet als `String` bzw. Zeichenkette) trotz Leerzeichen oder Kommas als zusammengehörend interpretiert werden.

Werte mit Daten-Format `Zahl` formatieren wir einheitlich ohne Hochkommas, Leerzeichen oder andere 1000er-Trennzeichen.
- Als Dezimaltrennzeichen verwenden wir einen Punkt.

Werte mit Daten-Format `Datum` geben wir nicht als Zeichenketten (z.B. `24. Dez. 2021`) an, sondern verwenden standardmässig das Format `YYYY-MM-DD` (z.B. `2021-12-24`).

Werte ... Zeit

Werte ... URL ... href= // URLs schreiben wir aufrufbar aus im Format `https://...`.


## Inhaltliche Standards

Wir wählen möglichst aussagekräftige Spaltenüberschriften (Variabeln). Ihre Bedeutung erklären wir:
- (wenn kurz) in der Metadaten-Beschreibung der entsprechenden Daten-Ressource oder
- (wenn ausführlicher) auf einer HTML-Page, in einer TXT- oder PDF-Datei, die wir in den Metadaten unter "Weitere Informationen" referenzieren.

Wir führen keine Variabeln auf, deren Werte sich aus den in der Datei vorhandenen Variabeln berechnen lassen (z.B. keine Prozentangaben als eigene Spalte, wenn die  Grundwerte in einer Spalte vorhanden sind).

> - Ausser es gibt einen guten Grund.

Werte, die unbekannt sind, weisen wir als `NA` aus.
