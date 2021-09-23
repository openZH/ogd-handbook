
# Publikationsleitlinien für einfach nutzbare Daten

## Technische Vorgaben

Für tabellarische Daten verwenden wir standardmässig das Format [CSV](http://opendatahandbook.org/glossary/en/terms/csv/).

> - CSV ist besser als Excel, alle Formate sind besser als Word, PDF oder Fliesstext.
> - Für Daten mit komplexen Strukturen und/oder um Daten einfach zwischen Programmen und Systemen zu übertragen, ist das Format [JSON](http://opendatahandbook.org/glossary/en/terms/json/) sehr gut.

Variabeln und Werte trennen wir mittels Kommas ',' voneinander (nicht mittels Semikolons ';')

> - Ausser es gibt einen guten Grund.
> - Standardeinstellungen eines Programms, wie z.B. Excel, sind kein guter Grund.

CSV-Dateien speichern wir als Unicode (UTF-8) ab.

> - Das geht [so](https://github.com/openZH/mdd-ogd-handbook/blob/main/publikationsleitlinien/UTF-8-kodieren.md).

## Formale Vorgaben

Pro Spalte ein Datentyp

Spaltenüberschriften
- beginnen nicht mit einer Zahl
- haben keine Leerzeichen, sondern sind entweder zusammengeschrieben (Gross- und Kleinbuchsteben sind möglich) oder mittel 'Underline' verbunden 
- haben keine Umlaute, sondern sind ausgeschrieben als 'ae', 'oe' und 'ue'
- haben keine Sonderzeichen, sondern sind ausgeschrieben (z.B. 'prozent' statt '%')

Keine Strings* in Datumsangaben → sondern als  2021-12-24
*String = eine Zeichenkette, z.B. “24. Dez. 2021”
Links uncodiert abspeichern → als  https://www...
Einheitliche Formatierung für Zahlen: keine Hochkommata, Leerzeichen oder andere 1000er-Trennzeichen → 4977200

Werte, die unbekannt sind, ausweisen (nicht ‘0’) → sondern als NA

