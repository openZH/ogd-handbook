---
id: datenkatalog-nutzen
title: Datenkatalog gezielt nutzen
sidebar_label: Datenkatalog nutzen
sidebar_position: 6
---

# Datenkatalog gezielt nutzen

Der Datenkatalog des Kantons Zürich unter **[www.zh.ch/daten](https://www.zh.ch/daten)** ist die zentrale Anlaufstelle, um offene Behördendaten zu finden und weiterzuverwenden. Diese Seite zeigt, wie du den Katalog per URL gezielt filterst und wie du ihn automatisiert über einen Web Service abfragen kannst.

---

## Datenkatalog gezielt filtern

Der Datenkatalog lässt sich auch als eigenständige (Standalone-)Anwendung ausserhalb des kantonalen Webauftritts öffnen:

```
https://datenkatalog.statistik.zh.ch/?keywords=ogd
```

Mit dieser Standalone-URL lässt sich der Datenkatalog per iframe in eine Webseite einbinden - zum Beispiel auf einer Amts- oder Projektseite, um dort nur die für dieses Thema relevanten Datensätze anzuzeigen.

Über URL-Parameter kannst du die Ansicht direkt vorfiltern. Ein Link führt gezielt auf Datensätze einer Organisation oder zu einem Thema, ohne dass Besuchende erst selbst suchen und filtern müssen. Eine Abfrage beginnt mit `?`, gefolgt vom Parameter, `=` und dem gewünschten Wert. Mehrere Parameter werden mit `&` kombiniert.

| Parameter | Typ | Beispiel | Standard | Hinweise |
|---|---|---|---|---|
| **filtered** | Number | `?filtered=false` | `true` | Blendet die Filterleiste des Katalogs aus. |
| **q** | String | `?q=wasser` | – | Findet Datensätze mit der Zeichenfolge im Titel, in der Beschreibung oder in den Keywords. Gross-/Kleinschreibung wird ignoriert. |
| **keywords** | String, kommagetrennt | `?keywords=wasser,covid19` | – | Mehrere Keywords werden als UND-Verknüpfung ausgewertet. Umlaute ausschreiben (ä→ae, ö→oe, ü→ue). |
| **org** | String | `?org=Gesundheitsdirektion des Kantons Zürich` | – | Leerschläge, Umlaute und Gross-/Kleinschreibung beibehalten. |
| **formats** | String, kommagetrennt | `?formats=json,csv&filtered=false` | – | Wirkt nur zusammen mit `filtered=false`, sonst wird der Parameter ignoriert. Mehrere Formate werden als UND-Verknüpfung ausgewertet. |
| **modified_from** | Date (`yyyy-mm-dd`) | `?modified_from=2022-01-01` | – | Findet Datensätze, deren Ressourcen nach dem angegebenen Datum aktualisiert wurden. |
| **modified_till** | Date (`yyyy-mm-dd`) | `?modified_till=2022-03-31` | – | Findet Datensätze, deren Ressourcen vor dem angegebenen Datum aktualisiert wurden. |
| **issued_from** | Date (`yyyy-mm-dd`) | `?issued_from=2022-01-01` | – | Findet Datensätze, die nach dem angegebenen Datum erstmals publiziert wurden. |

---

## Katalog via Web Service nutzen

Der gesamte Metadatenkatalog des Kantons Zürich steht auch als offene JSON-API zur Verfügung und lässt sich damit programmatisch abfragen, zum Beispiel um Datensätze automatisiert einzulesen oder auf Aktualisierungen zu prüfen: [Web Service des Metadatenkatalogs des Kantons Zürich](https://www.zh.ch/de/politik-staat/statistik-daten/datenkatalog.html#/datasets/1461@fachstelle-ogd-kanton-zuerich).
