
Version: **1.0** <br>
Status: **bereit zur Review durch [Fachausschuss Open Government Data des Kantons Zürich](https://www.zh.ch/de/direktion-der-justiz-und-des-innern/statistisches-amt/open-government-data/fachausschuss-open-government-data.html#910522844)**

> **Feedback (Hinweise, Wünsche und Fragen)** bitte [als Issue erfassen](https://github.com/openZH/mdd-ogd-handbook/issues) oder per E-Mail senden an: info@open.zh.ch


# Leitlinien zur Publikation offener Behördendaten im Kanton Zürich

Handlungsleitende Normen, um offene Behördendaten ('Open Government Data', OGD) bereitzustellen, die einfach nutzbar sind:
- [Datei-Format](#datei-format)
- [Datenstruktur](#datenstruktur)
- [Weiteres](#)

## Datei-Format

**Grundsatz** <br>
Offene Daten stehen in einem nicht-proprietären, [offenen Format](http://opendatahandbook.org/glossary/en/terms/open-format/) zur Verfügung.

**Vorgabe** <br>
Für tabellarische Daten verwenden wir das Format [CSV](http://opendatahandbook.org/glossary/en/terms/csv/) (**nicht** XLS). <br>

Variabeln und Werte trennen wir mittels Kommata `,` (**nicht** mittels Semikolons `;`) voneinander ab.
- [So erstelle ich aus einer XLS-Datei ein CSV.](https://github.com/openZH/mdd-ogd-handbook/blob/main/publikationsleitlinien/UTF-8-kodieren.md)
- [So speichere ich ein CSV als Unicode (UTF-8) ab.](https://github.com/openZH/mdd-ogd-handbook/blob/main/publikationsleitlinien/UTF-8-kodieren.md)

**Empfehlung** <br>
Für Daten mit komplexen Strukturen oder um Daten einfach zwischen Programmen und Systemen zu übertragen, eignen sich die Formate [JSON](http://opendatahandbook.org/glossary/en/terms/json/) sehr und [XML](http://opendatahandbook.org/glossary/en/terms/xml/) gut.

## Datenstruktur

**Grundsatz** <br>
Offene Daten stehen als [strukturierte Daten](http://opendatahandbook.org/glossary/en/terms/structured-data/) zur Verfügung (**nicht** als Word, PDF oder Fliesstext).

**Vorgabe** <br>
Tabellarische Daten im Format CSV strukturieren wir gemäss dem Prinzip ['Tidy Data'](https://github.com/openZH/mdd-ogd-handbook/blob/main/publikationsleitlinien/warum_tidy_data.md). <br>

Das heisst: pro Variable eine Spalte, pro Beobachtung eine Zeile, pro Wert eine Zelle. <br>
![tidydata1](https://www.produnis.de/R/images/TidyData1.png)

*Pro Variable eine Spalte* <br>
Keine Spalten-Hierarchien, also keine miteinander zusammengeführten Zellen (z.B. um Ober- und Unterkategorien zu repräsentieren), sondern Oberkategorien in einer ersten Spalte, Unterkategorien in einer zweiten Spalte.
- Beispiel: https://www.zh.ch/de/politik-staat/opendata.html?keyword=ogd#/details/523@fachstelle-ogd-kanton-zuerich

Spaltenüberschriften (Variabeln):
- beginnen nicht mit einer Zahl,
- haben keine Leerzeichen, sondern sind entweder zusammengeschrieben (Gross- und Kleinbuchstaben sind möglich) oder mittels 'Underline' verbunden (z.B. `anzahl_fahrzeuge`),
- haben keine Umlaute, sondern sind ausgeschrieben als `ae`, `oe`, `ue` und
- haben keine Sonderzeichen, sondern sind ausgeschrieben (z.B. `prozent` statt `%`).

Wir verzichten auf überflüssige Variablen (z.B. mit denselben Wert über die gesamte Reihe). Die Anzahl Variablen ist nicht beschränkt. Dabei spielt es keine Rolle, wenn man in der Fensteransicht nicht mehr alle Variablen auf einmal sieht. <br>

*Pro Beobachtung eine Zeile* <br>
- Keine Leerzeilen.
- Keine Fussnoten und ähnliche Verweise. Hinweise vermitteln wir:
   - entweder in einer eigenen Spalte oder
   - (wenn kurz) in der Metadaten-Beschreibung der entsprechenden Daten-Ressource oder
   - (wenn ausführlicher) als HTML-Page, TXT- oder PDF-Datei, die wir in den Metadaten unter "Weitere Informationen" referenzieren.

*Pro Wert eine Zelle* <br>
Alle Zellen einer Spalte haben dasselbe Daten-Format. Die häufigsten sind: 
- `Text`
- `Zahl`
- `Datum`
- `Zeit`
- `URL`.

Einheitsangaben dürfen nicht zusammen mit Werten in derselben Zelle stehen. <br>

Werte mit Daten-Format `Text`, die Kommas enthalten, klammern wir zwingend mittels Anführungs- und Schlusszeichen ein (z.B. `"Französisch, Deutsch"`). Das ist wichtig, damit diese Text-Inhalte (in der Fachsprache bezeichnet als `String` bzw. Zeichenkette) trotz Leerzeichen oder Kommas als zusammengehörend interpretiert werden. <br>

Werte mit Daten-Format `Zahl` formatieren wir einheitlich ohne Hochkommas, Leerzeichen oder andere 1000er-Trennzeichen.
- Als Dezimaltrennzeichen verwenden wir einen Punkt.
- Ob man rundet oder nicht, kommt auf den Datensatz und seine Nutzung an. Falls gerundet wird, muss dies aber in den Metadaten deklariert werden.

Werte mit Daten-Format `Datum` geben wir nicht als Zeichenketten (z.B. `24. Dez. 2021`) an, sondern verwenden standardmässig das Format `YYYY-MM-DD` (z.B. `2021-12-24`). <br>

Werte mit Daten-Format `Zeit` geben wir standardmässig im Format `hh:mm:ss` an. Wir verwenden die Zeitzone `Bern, Zürich ...`. <br>

Werte mit Daten-Format `URL` schreiben wir standardmässig aufrufbar aus im Format `https://...`. <br>

**Empfehlungen** <br>
Wir wählen möglichst aussagekräftige Spaltenüberschriften (Variabeln). Ihre Bedeutung erklären wir:
- (wenn kurz) in der Metadaten-Beschreibung der entsprechenden Daten-Ressource oder
- (wenn ausführlicher) auf einer HTML-Page, in einer TXT- oder PDF-Datei, die wir in den Metadaten unter "Weitere Informationen" referenzieren.

Werte, die unbekannt sind, weisen wir als `NA` aus.
