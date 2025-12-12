# Publizierte open data ändern oder aufgeben

Open Data sind auf Kontinuität angelegt. Ihr Datenformat, ihr Aufbau und die Produktzuständigkeit sind von Beginn an so aufgebaut, dass die Daten möglichst wenig breaking changes erfahren. Gleichzeitig folgen Open Government Data dem Verwaltungshandeln, deswegen können sie sich ändern, wenn sich das Verwaltungshandeln ändert: Datenerhebungen werden eingestellt, datenhaltende Systeme ändern sich, die Zählweise oder das Konzept dahinter ändert sich. Diese Änderungen müssen wir in unseren Daten nachvollziehen können.

Besonders wichtig für die Kontinuität sind folgende Aspekte:
- gleichbleibende URL für den Datenzugang
- gleichbleibendes Datenformat (bei csvs inkl. Codierung und Trennzeichen)
- gleichbleibende Variablen, Variablennamen und -reihenfolge

Wir müssen bei grösseren Änderungen zwischen diesen Aspekten abwägen. Die data stewards der datenhaltenden Stelle entscheiden sich für den besten Weg in diesem Fall, dabei haben auch fachliche Abwägungen hohes Gewicht. Wir haben grundsätzlich folgende Optionen:

### 1. Variablen ergänzen
um keine Anwendung zu gefährden, die die Daten direkt anzieht, können wir eine Variable "auslaufen lassen", in dem wir sie einfach nicht mehr füllen (sondern NA angeben). An ihre Stelle tritt eine neue Variable, die ab diesem Zeitpunkt die Werte trägt und für die Zeit davor "NA" ausweist. In der Distributionsbeschreibung weisen wir auf diesen Wechsel hin.
### 2. Variablen ändern
Übersichtlicher ist es, die Variablen oder den Aufbau der Daten vollständig zu überarbeiten. Das zieht nach sich, dass Anwendungen, die die Daten eingebunden haben, nicht mehr funktionieren werden. Wenn man so grosse Änderungen angeht, lohnt es sich daher, gleich mehrere Änderungen zusammenzunehmen und gemeinsam umzusetzen. Der Vorteil davon, die bestehende Distribution zu updaten mit einem stark veränderten File ist, dass immerhin die URL stabil bleibt. Sollte die Änderung so gross sein, dass die gleichbleibende URL nicht mehr viel bringen würde, macht es womöglich mehr Sinn, eine neue Distribution anzulegen:
### 3. neue Distribution aufbereiten und die bestehende nicht weiterführen
bei sehr grossen Änderungen oder wenn das Dateiformat ändert, muss eine neue Distribution angelegt werden. Die alte  Distribution bleibt dann auf ihrem letzten Stand stehen, in den Metadaten wird vermerkt, dass sie nicht weitergeführt wird und auf die neue Distribution verwiesen. So bleibt der letzte Datenstand bestehen und Anwendungen, die die Daten eingebunden haben, bleibt gültig, veralten aber langsam.
### 4. neuen Datensatz publizieren und den bestehenden nicht weiterführen
Diese Option ist dann sinnvoll, wenn sich die Verwaltugnsaufgabe, durch die die Daten anfielen, grundlegend geändert hat oder die Aufgabe oder ihre Daten an eine neue Organisation(-seinheit) übergehen. Wir stellen in diesem Fall sicher, ob es Nachfolgedaten gibt, welche der Öffentlichkeit dieselbe Information geben und dass auch diese Daten wiederum open sind (wenn möglich). Das Vorgehen ist dann:
1. neuen Datensatz anlegen
2. in der Beschreibung des neuen Datensatzes auf den Datenbestand des "alten"  Datensatzes verweisen
3. in der Beschreibung des "alten" Datensatzes erläutern, weswegen der Datensatz nicht weitergeführt wird
4. im "alten" Datensatz das keyword "nicht_weitergefuehrt" hinzufügen
5. beide Datensätze über "verwandte Datensätze" aufeinander verweisen lassen

Bei der Entscheidung für ein Vorgehen können wir die Nutzung der Open Data einbeziehen. Weisen die Daten hohe Downloadzahlen auf, sind sie vermutlich irgendwo eingebunden. Sind Downloadzahlen und Besuchendenzahlen ähnlich, sind die Daten nirgends eingebunden. -> https://openzh.shinyapps.io/OGD_Analytics/


## Datensatz löschen
Open Data können nur schlecht gelöscht werden und ihre Publikation kann nicht vollständig rückgängig gemacht werden. Wenn Daten publiziert wurden, die falsch waren oder nicht hätten publiziert werden sollen, ersetzen wir in erster Linie die Distribution mit einer korrigierten (und machen das in den Metadaten transaprent). Nur wenn das nicht sinnvoll ist, ziehen wir den Datensatz zurück. Dafür melden sich data stewards bei der Fach- und Koordinationsstelle OGD: info@open.zh.ch
