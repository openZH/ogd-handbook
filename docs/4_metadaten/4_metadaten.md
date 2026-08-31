---
sidebar_position: 4
sidebar_label: 4. Metadaten
---

# Metadaten

Metadaten beschreiben einen Datensatz und setzen ihn in Kontext. Sie beschreiben, wofür die Daten erhoben wurden, welche Einschränkungen oder Brüche in der Erhebung zu beachten sind, die zeitliche und räumliche Abdeckung und geben Hinweise auf weitere Hintergrundinformationen.

---

## Metadatenstandard im Kanton Zürich

Der Kanton Zürich hält sich an die Schweizer Version des internationalen Metadatenstandards [DCAT-AP CH](https://www.dcat-ap.ch/). Dieser Standard legt fest, welche beschreibende Felder ein Datensatz haben muss und welche optional sind. Ergänzend dazu gibt es kantonale Zusatzfelder, die auf die spezifischen Bedürfnisse des Kantons Zürich ausgerichtet sind.

Die Metadaten sind gemäss DCAT in Datensatz und zugehörige Distributionen gegliedert. Ein Datensatz beschreibt die Daten auf konzeptioneller Ebene - also was die Daten enthalten und wer sie herausgibt. Eine Distribution ist die konkrete Bereitstellungsform des Datensatzes, also die eigentliche Datei oder API. Ein Datensatz kann mehrere Distributionen haben.

---

## Metadatenattribute

:::tip Wo Metadaten erfasst werden
Alle aufgeführten Metadaten müssen/können im MDV ausgefüllt werden. Weitere Metadaten können in einer separaten TXT-Distribution ergänzt werden. Ein Beispiel dazu findet sich [hier](https://www.zh.ch/de/politik-staat/statistik-daten/datenkatalog.html#/datasets/3062@tiefbauamt-kanton-zuerich).
:::

### Datensatz

| Attribut | Beschreibung | Beispiel | Typische Stolpersteine / Hinweise |
|----------|--------------|---------|---------|
| **Titel** | Knapp und allgemein verständlicher Titel. Nennt den Inhalt (z. B. „...Verkehrszähldaten Veloverkehr"), den geografischen Raum (z. B. „…im Kanton Zürich") und falls nötig eine zeitliche Abgrenzung (z. B. „…bis 2022"). | Verkehrszähldaten Veloverkehr im Kanton Zürich | Keine Abkürzungen |
| **Beschreibung** | Überblick zu Inhalt, Kontext, Erhebungsmethode und allfälligen Einschränkungen.<br />Brüche in Zeitreihen, Lücken oder Qualitätsprobleme explizit erwähnen. <br /> **Eine Hilfestellung für eine sinnvolle Beschreibung: [metafairy.datazh.ch](https://metafairy.datazh.ch/).** | Der Datensatz enthält stündliche Velozähldaten des kantonalen Velonetzes im Kanton Zürich. Die Daten werden mittels automatischer Sensoren erhoben und umfassen alle permanenten Zählstellen des Kantons seit 2016. Es handelt sich um Rohdaten, die weder plausibilisiert noch korrigiert sind. Technische Ausfälle oder temporäre Ausserbetriebnahme der Sensoren können zu Messlücken führen. | <ul><li>Verschiedene Begriffe in Titel und Beschreibung wählen (verbessert Findbarkeit)</li><li>Mit Kontext beginnen, den ersten Satz allgemein halten für alle, die den Kontext des Kantons Zürich nicht kennen oder nicht vom Fach sind</li><li>Siehe [Leitfragen unten](#datensatz-beschreibung) für die Beschreibung</li></ul> |
| **Periodizität** | In welchem Intervall werden die Daten aktualisiert? | Jährlich | Falls die Daten kontinuierlich aktualisiert werden, das Attribut "Nächste Aktualisierung" entsprechend aktuell halten. |
| **Nächste Aktualisierung** | Wann ist die nächste Aktualisierung geplant? | 2027-01-01 | - |
| **Zeitraum von & bis** | Ab wann und bis wann liegen Daten vor? Bei Jahresangaben den Stichtag nennen – falls unbekannt, 31.12. des jeweiligen Jahres verwenden. | 2016-12-31, 2026-01-01 | - |
| **Landingpage** | Link zur primären Anwendung der Daten durch die datenhaltende Stelle - z.B. Karte, Dashboard oder Bericht. | https://... | |
| **Weitere Informationen** | Ergänzende Links oder Dokumente. | https://... | |
| **Themen** | Thematische Einordnung gemäss Themenkatalog. | Verkehr, Umwelt | |
| **Keywords** | Mehrere präzise Begriffe, die das Thema beschreiben. Dazu gehören geografische Bezüge sowie alternative Begriffe, unter denen die Daten gesucht werden könnten. | langsamverkehr, verkehr, velo, messung | |
| **Verwandte Datensätze** | Verweise auf thematisch verwandte Datensätze im Datenkatalog. | Verkehrszähldaten Veloverkehr in Winterthur | |
| **Organisation** | Herausgebende Organisation. | Tiefbauamt des Kantons Zürich | Kann im Admin-Bereich angepasst werden. |
| **Abteilung** | Zuständige Abteilung innerhalb der Organisation. | Verkehr-Online | Kann im Admin-Bereich angepasst werden. |
| **Kontakt** | Ansprechperson oder -stelle für Fragen zum Datensatz. | info@... | Kann im Admin-Bereich angepasst werden. |

### Datensatz-Beschreibung

Die Beschreibung des Datensatzes liefert den Kontext für den gesamten Datensatz. Sie sollte den Datensatz- und die Distributionstitel ergänzen und gemeinsam auch Laien erläutern, welche Daten hier zu finden sind und warum. Die Beschreibung beginnt allgemein, nutzt möglichst keine Fachbegriffe oder Abkürzungen und erklärt verständlich, aber knapp.

Beschreibungen der Datensätze sollten folgende Fragen allgemein verständlich beantworten:
- **Dateninhalt**: Worum geht es? Was finde ich in diesen Daten?
- **Entstehungszusammenhang**: Wie wurden die Daten gemessen und wofür? Was ist die Quelle?
- **Datenqualität**: Sind die Daten vollständig? Gibt es Änderungen in der Erhebung? Welche Rückschlüsse lassen sich aus den Daten ziehen und welche nicht?
- <span style={{color: 'var(--ifm-color-emphasis-600)'}}>**Räumlicher Bezug**: Wie sind die Daten räumlich aggregiert? Auf Gemeinden, Bezirke, Raumplanungsregionen? Oder andere Aggregationen?</span>
- <span style={{color: 'var(--ifm-color-emphasis-600)'}}>**Zeitintervall**: Wie sind die Daten zeitlich aggregiert? Auf die Minute? Live? Auf den Monat, das Jahr?</span>

:::tip Tipp
Mit Hilfe dieser Leitfragen lässt sich ein guter erster Entwurf für eine Datensatzbeschreibung durch ein LLM prompten.
:::

### Distribution

| Attribut | Beschreibung | Beispiel | Typische Stolpersteine / Hinweise |
|----------|--------------|---------|---------|
| **Titel** | Bezeichnung der Distribution. | Verkehrszähldaten Veloverkehr im Kanton Zürich 2025 | Falls nur eine Distribution vorhanden ist, kann der Titel identisch mit dem Datensatz-Titel sein. |
| **Beschreibung** | Kurze Beschreibung des Inhalts und Formats der Distribution. | Stündliche Velozähldaten des kantonalen Velonetzes im Kanton Zürich für das Jahr 2025 | |
| **Nutzungsbedingungen** | Lizenz der Distribution. | NonCommercialAllowed-CommercialAllowed-ReferenceRequired | Open Data sind frei verwendbar, das entspricht der Lizenz CC0 beziehungsweise **reference not required**.<br/><br/>Eine Einschränkung der Nutzungsbedingungen ist nur dann zulässig, wenn ein Spezialgesetz das vorgibt. Daten, welche unter das Statistikgesetz fallen, dürfen ausschliesslich unter Angabe der Quelle genutzt werden.<br/><br/>Siehe auch: [Lizenzen](/ogd-handbook/ogd_kanton_zh/ogd-nutzen#quellenangaben-und-lizenzen) |
| **Dateityp** | Format der Datei. | CSV | Wird beim Hochladen einer Datei automatisch erkannt. |
| **Medientyp** | MIME-Type der Datei. | text/csv | Wird beim Hochladen einer Datei automatisch erkannt. |
| **Dateigrösse** | Grösse der Datei in Bytes. | 2 MB | Wird beim Hochladen einer Datei automatisch erkannt. |
| **Möchtest Du diese Daten als Offene Behördendaten veröffentlichen?** | Sollen die Daten auf opendata.swiss veröffentlicht werden? Bei "Ja" werden die Metadaten automatisch an opendata.swiss weitergeleitet. | | |


