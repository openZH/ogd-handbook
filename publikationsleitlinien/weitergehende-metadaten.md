# Metadaten über DCAT AP CH hinaus: best practice

Metadaten beschreiben einen Datensatz, sie setzen ihn in Kontext. Sie beschreiben, wofür die Daten erhoben wurden, welche Einschränkungen oder Brüche in der Erhebung zu beachten sind, die zeitliche und räumliche Abdeckung und geben Hinweise auf weitere Hintergrundinformationen. Der Kanton Zürich hält sich an die Schweizer Version des internationalen Metadatenstandards DCAT AP CH. Für deren Erfassung steht den Behörden und behördennahen Organisationen auf dem Kantonsgebiet Zürich die Metadatenverwaltung zur Verfügung. Mit der Benutzung der Metadatenverwaltung ist die Einhaltung von DCAT AP CH gewährleistet.

DCAT AP CH und die Metadatenverwaltung bieten noch keine Möglichkeit, die einzelnen Merkmale systematisch zu beschreiben. Merkmale/Variablen werden von den Data Stewards im Kanton Zürich verschieden dokumentiert. Die folgenden drei Optionen scheinen uns besonders praktisch. Je nach Anspruch bietet sich eine andere Variante an:

## Option 1: minimale Beschreibung
Beschreibung von nicht selbsterklärenden Merkmalen in der Beschreibung der Ressource. Beschrieben werden sollte beispielsweise, wie ein Wert gemessen oder berechnet wird, welche Information erhoben wird, wie Leerwerte zu deuten sind oder wenn im Zeitverlauf Variablen anders genutzt werden. In der Beschreibung werden nur einzelne Merkmale beschrieben, nicht systematisch alle.

Besonders geeignet, wenn ein Datensatz aus wenigen Merkmalen besteht oder nur wenige der Merkmale nicht selbsterklärend sind. Der Vorteil hier ist die Übersichtlichkeit.

Beispiel: https://www.web.statistik.zh.ch/ogd/datenkatalog/standalone/datasets/2022@fachstelle-ogd-kanton-zuerich

## Option 2: als angefügtes Textdokument
Eine vollständige Merkmals- bzw. Variabeldokumentation in einem Textfile. Das kann ein offenes Format wie .txt sein oder ein fürs menschliche Auge gut lesbares Format wie html oder pdf. Dieses File kann analog einer Ressource verlinkt oder direkt via Metadatenverwaltung auf unseren Server geladen werden. In der Beschreibung des Datasets oder der Ressourcen verweisen wir dann auf die separate Dokumentation.

Besonders geeignet für grössere Datensätzen mit komplexen Merkmalen. Der Vorteil hier ist die Vollständigkeit und Lesbarkeit.

Beispiel: https://www.web.statistik.zh.ch/ogd/datenkatalog/standalone/datasets/563@awel-kanton-zuerich

## Option 3: in einem Github-Repos
Eine vollständige Merkmals- bzw. Variabeldokumentation auf Github. Diese kann laufend fortgeführt werden und kann so auch Datensätzen gerecht werden, die sich weiterentwickeln. Frühere Varianten der Dokumentation sind über die git-Versionierung weiterhin abrufbar. Die Github-Repos sollten mindestens pro Publisher getrennt sein, die vollständige Dokumentation eines Datensatzes aber in einem File zu finden. Bei Bedarf kann das Hosting des Repos über https://github.com/openZH gemacht werden. Für die Aktualisierung der Dokumentation sind die Datenpublisher zuständig.

Besonders geeignet für Datensätze, deren Variablen sich über die Zeit verändern.

Beispiel: https://www.web.statistik.zh.ch/ogd/datenkatalog/standalone/datasets/729@gesundheitsdirektion-kanton-zuerich (readme in den Links, kann auch als Ressource verlinkt werden)

## Weiterentwicklung
DCAT AP CH V2.00 enthält eine eigene [property "documentation"](https://www.dcat-ap.ch/releases/2.0/dcat-ap-ch.html#dataset-documentation). Diese sieht eine Verlinkung (IRI) vor und ist mit allen oben beschriebenen Optionen kompatibel. Eine systematische Erfassung von Merkmalen, beispielsweise als linked data, streben wir in Ergänzung zu DCAT AP CH an. Hinweise für die Umsetzung nehmen wir noch so gerne an :)
