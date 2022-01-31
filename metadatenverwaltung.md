
Version, Datum: **v1.0, 2022-01-31** <br>
Status: **in Review** <br>
Verwalterin: **[Fach- und Koordinationsstelle Open Government Data des Kantons Zürich](https://www.zh.ch/de/direktion-der-justiz-und-des-innern/statistisches-amt/open-government-data.html#1128196644)**

> **Feedback (Hinweise, Wünsche und Fragen)** bitte [als Issue erfassen](https://github.com/openZH/mdd-ogd-handbook/issues) oder per E-Mail senden an: info@open.zh.ch


# Handbuch zur Metadaten-Verwaltung des Kantons Zürich

Anleitung, um Daten in der kantonalen Metadaten-Verwaltung so verfügbar zu machen, dass sie einfach findbar sind, und gut verständlich ist, was sie beinhalten:
1. [Sinn und Zweck der kantonalen Metadaten-Verwaltung](#sinn-und-zweck-der-kantonalen-metadaten-verwaltung)
2. [Eigenschaften offener Behördendaten](#eigenschaften-offener-behoerdendaten)
3. [](#)
4. [](#)
5. [](#)
6. [](#)
7. [](#)

## Sinn und Zweck der kantonalen Metadaten-Verwaltung
Der Regierungsrat des Kantons Zürich hat mit dem [Regierungsratsbeschluss 1362/2021](https://www.zh.ch/de/politik-staat/gesetze-beschluesse/beschluesse-des-regierungsrates/rrb/regierungsratsbeschluss-1362-2021.html) beschlossen, dass 

> "der Kanton alle vorhandenen nicht schützenswerten Daten der Öffentlichkeit maschinenlesbar zur freien Nutzung zur Verfügung [stellt]".

Damit Nutzende alle offen verfügbaren Behördendaten einfach finden, werden die Metadaten laufend aktualisiert im [kantonalen Metadatenkatalog der offenen Behördendaten](https://www.zh.ch/opendata) und im [nationalen Portal für offene Behördendaten](https://opendata.swiss/de/organization/kanton-zuerich) veröffentlicht.

Die Metadaten-Verwaltung ermöglicht es den Verwaltungseinheiten und Organen (auch Gemeinden) des Kantons Zürich, die Metadaten ihrer offenen ['Datensätze'](https://github.com/openZH/mdd-ogd-handbook/blob/main/source/content/glossar/begriffe.rst) weitgehend selbständig zu erfassen und zu aktualisieren sowie ihre entsprechenden Daten-['Ressourcen'](https://github.com/openZH/mdd-ogd-handbook/blob/main/source/content/glossar/begriffe.rst)) bereitzustellen.

## Eigenschaften offener Behördendaten
Offene Behördendaten ('Open Government Data', OGD) sind 

> "Daten (Rohdaten, Datensätze, Datenbestände, Datensammlungen, Digital Content, Statistikdaten, Geodaten, Inventare …), die strukturiert und  maschinenlesbar bereitgestellt werden, so dass sie gesichtet, durchsucht, gefiltert, aufbereitet, nachgeführt und weiterverarbeitet werden können"
>  ([Definition der Fachstelle OGD Kanton Basel-Stadt](https://www.opendata.bs.ch/definitionen.html)).















## 1. Umfang und Zweck der Metadaten-Verwaltung

### Datensätze sind einfach findbar und permanent zugänglich
Verwaltungseinheiten und Organe des Kantons Zürich machen 'Datensätze' ([Begriffsdefinition](https://github.com/openZH/mdd-ogd-handbook/blob/main/source/content/glossar/begriffe.rst)) im Web via öffentliche Datenkataloge für alle Interessierten einfach findbar und permanent zugänglich.

Alle **offenen** Datensätze - d.h. Daten unter **offenen Nutzungsbedingungen** (CC-BY, Public Domain/CC-ZERO), in **offenen Datenformaten** (CSV, JSON, ...) und **ohne jegliche Zugangsbeschränkungen** (zugänglich ohne Login, ...) - sind in den folgenden öffentlichen Datenkatalogen verzeichnet:
- im kantonalen Webauftritt unter [zh.ch/opendata](https://www.zh.ch/de/politik-staat/opendata.html?keyword=ogd#/home) sowie zusätzlich in [thematisch vorgefilterten Katalogen wie zB. zum Thema 'COVID-19'](https://www.zh.ch/de/gesundheit/coronavirus/zahlen-fakten-covid-19.html?keyword=covid19#-1718033923) 
- im nationalen Portal für offene Behördendaten unter [opendata.swiss (Kanton Zürich)](https://opendata.swiss/de/organization/kanton-zuerich)

Alle weiteren Datensätze - u.a. die Publikationen des Statistischen Amts - sind mindestens in den folgenden öffentlichen Datenkatalogen verzeichnet:
- im kantonalen Webauftritt unter [zh.ch/... (Daten und Publikationen)](https://www.zh.ch/de/politik-staat/statistik-daten/datenkatalog.html#/home)
- im kantonalen Webauftritt unter [zh.ch/... (nur Publikationen)](https://www.zh.ch/de/politik-staat/statistik-daten/publikationen.zhweb-noredirect.zhweb-cache.html?keyword=statistik.info#-1026853132)

Die Datensätze haben eine permanente URL. Mit dieser URL können sie im Web referenziert werden:
- als Link auf einen Datensatz: zB. [https://www.zh.ch/de/politik-staat/opendata.html?keyword=ogd#/details/740@statistisches-amt-kanton-zuerich](https://www.zh.ch/de/politik-staat/opendata.html?keyword=ogd#/details/740@statistisches-amt-kanton-zuerich)
- als Download/Access auf eine bestimmte Ressource eines Datensatzes: zB. [Politanalysen](https://www.zh.ch/de/politik-staat/wahlen-abstimmungen/politanalysen.html)

### Daten sind aktuell
Verwaltungseinheiten und Organe des Kantons Zürich halten die 'Ressourcen' ([Begriffsdefinition](https://github.com/openZH/mdd-ogd-handbook/blob/main/source/content/glossar/begriffe.rst)) der Datensätze aktuell, die sie im Web via öffentliche Datenkataloge bereitstellen.

## 2. Rollen und Verantwortlichkeiten in der Metadaten-Verwaltung

Um Umfang und Zweck für die Nutzenden gewährleisten zu können, nehmen Mitarbeitende von Verwaltungseinheiten und Organen des Kantons Zürich bestimmte Aufgaben in folgenden Rollen wahr:
- **Data Steward**: Sie verwalten die Metadaten von *offenen* Datensätzen ihrer oder anderer Verwaltungseinheiten.
- **Data Steward zh.ch**: Sie verwalten die Metadaten von *offenen* und weiteren Datensätzen ihrer oder anderer Verwaltungseinheiten.
- **Guest**: Sie haben lediglich Lese-Zugang zur Metadaten-Verwaltung; sie interessieren sich unter Umständen für die Übernahme einer Rolle, bevor sie geschult sind.
- **Administrator**: Sie beraten und unterstützen die anderen Rollen bei der zweckmässigen Erfüllung ihrer Aufgaben.

> Die Rolle **Data Custodian** ist nicht in der Metadaten-Verwaltung abgebildet: Sie bereiten Daten gemäss [formaler Leitlinien zur Datenpublikation](https://github.com/openZH/mdd-ogd-handbook/blob/main/publikationsleitlinien.md), um maschinenlesbare Ressourcen aufzubereiten, die einfach nutzbar sind.

Bevor Mitarbeitende eine Rolle erstmals übernehmen, erhalten sie eine Schulung bzw. einen Kurs: 
- zu einer Schulung für Metadatenverwaltende (**Data Stewards**) [anmelden](https://www.zh.ch/de/direktion-der-justiz-und-des-innern/statistisches-amt/open-government-data/leitlinien.html#-792208150)
- zu einem Kurs für Datenverwaltende (**Data Custodians**) [anmelden](https://www.zh.ch/de/direktion-der-justiz-und-des-innern/statistisches-amt/open-government-data/leitlinien.html#-792458260)

Danach erhalten die Mitarbeitenden in den jeweiligen Rollen entsprechende Unterstützung:
- zu **offenen** Datensätzen (Open Government Data, OGD) in der [OGD-Community](https://www.zh.ch/de/direktion-der-justiz-und-des-innern/statistisches-amt/open-government-data/community-open-government-data.html)
- zu weiteren Datensätzen ... ((ZHweb-Zirkel tbd.))

## 3. Aufgaben je Rolle in der Metadaten-Verwaltung

### Metadatenverwaltende ('Data Steward')

### Metadatenverwaltende zh.ch ('Data Steward zh.ch')

### ('Administrator')
Die fünf Schritte, um Daten als offene Behördendaten bereitzustellen, sind:
- Daten als einfach nutzbare, maschinenlesbare Ressourcen aufbereiten.
- Maschinenlesbare Ressourcen als Dateien zum Herunterladen bzw. als Schnittstellen zum Abfragen im Datenkatalog bereitstellen.
- Daten mit Metadaten beschreiben und als Datensätze im Datenkatalog erfassen.
- Datensätze mit Ressourcen im Datenkatalog zur Publikation freigeben.
- Ressourcen und Metadaten aktualisieren, sobald neue Daten oder Änderungen vorliegen.

## Beratung und Unterstützung

> Der OGD-Zirkel berät bei allen Fragen und Bedürfnissen rund um offene Daten: info@open.zh.ch
> Der ZHweb-Zirkel berät bei der geeigneten Wahl der Referenzierung: datashop@statistik.zh.ch
