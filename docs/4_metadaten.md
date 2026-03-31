---
sidebar_position: 5
sidebar_label: 4. Metadaten
---

# Metadaten

Metadaten beschreiben einen Datensatz und setzen ihn in Kontext. Sie beschreiben, wofür die Daten erhoben wurden, welche Einschränkungen oder Brüche in der Erhebung zu beachten sind, die zeitliche und räumliche Abdeckung und geben Hinweise auf weitere Hintergrundinformationen.

## Metadatenstandard im Kanton Zürich

Der Kanton Zürich hält sich an die Schweizer Version des internationalen Metadatenstandards [DCAT-AP CH](https://www.dcat-ap.ch/). Dieser Standard legt fest, welche beschreibende Felder ein Datensatz haben muss und welche optional sind. Ergänzend dazu gibt es kantonale Zusatzfelder, die auf die spezifischen Bedürfnisse des Kantons Zürich ausgerichtet sind.

Die Metadaten sind gemäss DCAT in Datensatz und zugehörige Distributionen gegliedert. Ein Datensatz beschreibt die Daten auf konzeptioneller Ebene - also was die Daten enthalten und wer sie herausgibt. Eine Distribution ist die konkrete Bereitstellungsform des Datensatzes, also die eigentliche Datei oder API. Ein Datensatz kann mehrere Distributionen haben.

## Metadatenattribute

### Datensatz

| Attribut | Beschreibung | Beispiel | Typische Stolpersteine / Hinweise |
|----------|--------------|---------|---------|
| **Titel** | Knapp und allgemein verständlicher Titel. Nennt den Inhalt (z. B. „...Verkehrszähldaten Veloverkehr"), den geografischen Raum (z. B. „…im Kanton Zürich") und falls nötig eine zeitliche Abgrenzung (z. B. „…bis 2022"). | Verkehrszähldaten Veloverkehr im Kanton Zürich | Keine Abkürzungen |
| **Beschreibung** | Überblick zu Inhalt, Kontext, Erhebungsmethode und allfälligen Einschränkungen. Titel und Beschreibung sollen unterschiedlich formuliert sein (verbessert SEO). | Der Datensatz enthält stündliche Velozähldaten des kantonalen Velonetzes im Kanton Zürich. Die Daten werden mittels automatischer Sensoren erhoben und umfassen alle permanenten Zählstellen des Kantons seit 2016. Es handelt sich um Rohdaten, die weder plausibilisiert noch korrigiert sind. Technische Ausfälle oder temporäre Ausserbetriebnahme der Sensoren können zu Messlücken führen. | Brüche in Zeitreihen, Lücken oder Qualitätsprobleme explizit erwähnen. Eine Hilfestellung für eine sinnvolle Beschreibungen findet sich unter: Streamlit. |
| **Periodizität** | In welchem Intervall werden die Daten aktualisiert? | Jährlich | Falls die Daten kontinuierlich aktualisiert werden, das Attribut "Nächste Aktualisierung" entsprechend aktuell halten. |
| **Nächste Aktualisierung** | Wann ist die nächste Aktualisierung geplant? | 01.01.2027 | - |
| **Zeitraum von & bis** | Ab wann und bis wann liegen Daten vor? Bei Jahresangaben den Stichtag nennen – falls unbekannt, 31.12. des jeweiligen Jahres verwenden. | 31.12.2016, 21.12.2025 | - |
| **Landingpage** | Link zur primären Anwendung der Daten durch die datenhaltende Stelle - z.B. Karte, Dashboard oder Bericht. | https://... | |
| **Weitere Informationen** | Ergänzende Links oder Dokumente. | https://... | |
| **Themen** | Thematische Einordnung gemäss Themenkatalog. | Verkehr, Umwelt | |
| **Keywords** | Mehrere präzise Begriffe, die das Thema beschreiben. Dazu gehören geografische Bezüge sowie alternative Begriffe, unter denen die Daten gesucht werden könnten. | langsamverkehr, verkehr, velo, messung | |
| **Verwandte Datensätze** | Verweise auf thematisch verwandte Datensätze im Datenkatalog. | Verkehrszähldaten Veloverkehr in Winterthur | |
| **Organisation** | Herausgebende Organisation. | Tiefbauamt des Kantons Zürich | Kann ich Admin-Bereich angepasst werden. |
| **Abteilung** | Zuständige Abteilung innerhalb der Organisation. | Verkehr-Online | Kann ich Admin-Bereich angepasst werden. |
| **Kontakt** | Ansprechperson oder -stelle für Fragen zum Datensatz. | info@... | Kann ich Admin-Bereich angepasst werden. |

### Distribution

| Attribut | Beschreibung | Beispiel | Typische Stolpersteine / Hinweise |
|----------|--------------|---------|---------|
| **Titel** | Bezeichnung der Distribution. | Verkehrszähldaten Veloverkehr im Kanton Zürich 2025 | Falls nur eine Distribution vorhanden ist, darf der Titel identisch mit dem Datensatz-Titel sein. |
| **Beschreibung** | Kurze Beschreibung des Inhalts und Formats der Distribution. | Stündliche Velozähldaten des kantonalen Velonetzes im Kanton Zürich für das Jahr 2025 | |
| **Nutzungsbedingungen** | Lizenz der Distribution. | NonCommercialAllowed-CommercialAllowed-ReferenceRequired | Siehe Kapitel "Lizenzen" |
| **Dateityp** | Format der Datei. | CSV | Wird beim Hochladen einer Datei automatisch erkannt. |
| **Medientyp** | MIME-Type der Datei. | text/csv | Wird beim Hochladen einer Datei automatisch erkannt. |
| **Dateigrösse** | Grösse der Datei in Bytes. | 2 MB | Wird beim Hochladen einer Datei automatisch erkannt. |
| **Möchtest Du diese Daten als Offene Behördendaten veröffentlichen?** | Sollen die Daten auf opendata.swiss veröffentlicht werden? Bei "Ja" werden die Metadaten automatisch an opendata.swiss weitergeleitet. | | |
