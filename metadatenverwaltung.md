
Version, Datum: **v1.0, 2022-01-31** <br>
Status: **in Review** <br>
Verwalterin: **[Fach- und Koordinationsstelle Open Government Data des Kantons Zürich](https://www.zh.ch/de/direktion-der-justiz-und-des-innern/statistisches-amt/open-government-data.html#1128196644)**

> **Feedback (Hinweise, Wünsche und Fragen)** bitte [als Issue erfassen](https://github.com/openZH/mdd-ogd-handbook/issues) oder per E-Mail senden an: info@open.zh.ch


# Handbuch des Kantons Zürich zur Metadaten-Verwaltung

Anleitung, um Daten in der kantonalen Metadaten-Verwaltung so verfügbar zu machen, dass sie einfach findbar sind, und gut verständlich ist, was sie beinhalten:

- [A. Grundlagen](#a-grundlagen)
    - [1. Sinn und Zweck der Metadaten-Verwaltung](#1-sinn-und-zweck-der-metadaten-verwaltung)
    - [2. Definition und Bedingungen von offenen Behördendaten](#2-definition-und-bedingungen-von-offenen-behördendaten)
- [B. Rollen und Verantwortlichkeiten im Publikationsprozess](#b-rollen-und-verantwortlichkeiten-im-publikationsprozess)
    - [1. 'Data Custodians' bereiten Daten auf und stellen sie bereit](#1-data-custodians-bereiten-daten-auf-und-stellen-sie-bereit)
    - [2. 'Data Stewards' beschreiben Daten mit Metadaten und publizieren sie](#2-data-stewards-beschreiben-daten-mit-metadaten-und-publizieren-sie)
    - [3. 'Data Guides' beraten, unterstützen und vermitteln](#3-data-guides-beraten-unterstützen-und-vermitteln)
    - [4. 'Data Stewards zh.ch' und 'Guests'](#4-data-stewards-zhch-und-guests)
- [C. Offene Behördendaten bereitstellen, publizieren und aktualisieren](#c-offene-behördendaten-bereitstellen-publizieren-und-aktualisieren)
    - [1. Daten als einfach nutzbare, maschinenlesbare 'Ressourcen' aufbereiten](#...)
    - [2. 'Ressourcen' offen zugänglich bereitstellen](#...)
    - [3. Daten als 'Datensätze' erfassen und mit Metadaten beschreiben](#...)
    - [4. Erstmalig erfasste 'Datensätze' zur Publikation freigeben](#...)
    - [5. Publizierte 'Datensätze' und 'Ressourcen' aktualisieren](#...)
    - [6. Aktualisierung von 'Datensätzen' und 'Ressourcen' abbrechen](#...)
- [D. Beratung und Unterstützung](#d-beratung-und-unterstützung)
    - [1. Kontakte](#kontakte)
    - [2. Hilfsmittel](#hilfsmittel)


## A. Grundlagen

### 1. Sinn und Zweck der Metadaten-Verwaltung
Der Regierungsrat des Kantons Zürich hat mit dem [Regierungsratsbeschluss 1362/2021](https://www.zh.ch/de/politik-staat/gesetze-beschluesse/beschluesse-des-regierungsrates/rrb/regierungsratsbeschluss-1362-2021.html) beschlossen, dass 

> "der Kanton alle vorhandenen nicht schützenswerten Daten der Öffentlichkeit maschinenlesbar zur freien Nutzung zur Verfügung [stellt]".

Damit die interessiete Öffentlichkeit alle offen verfügbaren Behördendaten einfach findet, werden deren Metadaten laufend aktualisiert im [kantonalen Metadatenkatalog der offenen Behördendaten](https://www.zh.ch/opendata) und im [nationalen Portal für offene Behördendaten](https://opendata.swiss/de/organization/kanton-zuerich) veröffentlicht.

Die Metadaten-Verwaltung ermöglicht es den Verwaltungseinheiten und Organen (auch Gemeinden) des Kantons Zürich, die Metadaten ihrer offenen ['Datensätze'](https://github.com/openZH/mdd-ogd-handbook/blob/main/source/content/glossar/begriffe.rst) weitgehend selbständig zu erfassen und zu aktualisieren sowie ihre entsprechenden Daten-['Ressourcen'](https://github.com/openZH/mdd-ogd-handbook/blob/main/source/content/glossar/begriffe.rst) bereitzustellen.

### 2. Definition und Bedingungen von offenen Behördendaten
Offene Behördendaten ('Open Government Data', OGD) sind gemäss [Definition der Fachstelle OGD Kanton Basel-Stadt](https://www.opendata.bs.ch/definitionen.html)

> "Daten (Rohdaten, Datensätze, Datenbestände, Datensammlungen, Digital Content, Statistikdaten, Geodaten, Inventare …), die strukturiert und  maschinenlesbar bereitgestellt werden, so dass sie gesichtet, durchsucht, gefiltert, aufbereitet, nachgeführt und weiterverarbeitet werden können".

Verwaltungseinheiten und Organe des Kantons Zürich dürfen auf der Grundlage des [Gesetzes über die Information und den Datenschutz (IDG)](http://www.zhlex.zh.ch/Erlass.html?Open&Ordnr=170.4) dürfen Verwaltungseinheiten und Organe des Kantons Zürich 'nicht schützenswerte' Daten, die unter ihrer Hoheit stehen, zur 'freien Nutzung' als offene Behördendaten publizieren.

'Nicht schützenswert' bedeutet, dass die bereitgestellten Daten

>  - nicht die Privatsphäre verletzen,
>  - nicht sicherheitskritisch sind und 
>  - keinen Drittrechten (wie zum Beispiel Copyrights) unterliegen.

'Freie Nutzung' bedeutet, dass alle Interessierten die Daten

>  - vervielfältigen, verbreiten und weiter zugänglich machen,
>  - anreichern und bearbeiten,
>  - kommerziell nutzen dürfen.

Dementsprechend stellt der Kanton Zürich offene Behördendaten unter [zwei offenen Nutzungsbedingungen bzw. Lizenzen](https://www.zh.ch/de/politik-staat/opendata.html?keyword=ogd#2105459599) zur Verfügung. 


## B. Rollen und Verantwortlichkeiten im Publikationsprozess
![Rollen und Aufgaben beim Bereitstellen von offenen Behördendaten](https://www.zh.ch/content/dam/zhweb/bilder-dokumente/organisation/direktion-der-justiz-und-des-innern/statistisches-amt/open-government-data/Datenkatalog_MDD_OGD-Rollen_Aufgaben.png.zhweb-transform/content-picture-small-large/Datenkatalog_MDD_OGD-Rollen_Aufgaben.1636051109668.png "Rollen und Aufgaben")

### 1. 'Data Custodians' bereiten Daten auf und stellen sie bereit

### 2. 'Data Stewards' beschreiben Daten mit Metadaten und publizieren sie

### 3. 'Data Guides' beraten, unterstützen und vermitteln

### 4. Weitere Rollen: 'Data Stewards zh.ch' und 'Guests'


## C. Offene Behördendaten bereitstellen, publizieren und aktualisieren
![Fünf Schritte zum Bereitstellen und Aktualisieren von offenen Behördendaten](https://www.zh.ch/content/dam/zhweb/bilder-dokumente/organisation/direktion-der-justiz-und-des-innern/statistisches-amt/open-government-data/Open-Data-Zyklus.png.zhweb-transform/content-picture-small-large/Open-Data-Zyklus.1628757879829.png "Publikationsprozess")

### 1. Daten als einfach nutzbare, maschinenlesbare 'Ressourcen' aufbereiten

### 2. 'Ressourcen' offen zugänglich bereitstellen

### 3. Daten als 'Datensätze' erfassen und mit Metadaten beschreiben

### 4. Erstmalig erfasste 'Datensätze' zur Publikation freigeben

### 5. Publizierte 'Datensätze' und 'Ressourcen' aktualisieren

### 6. Aktualisierung von 'Datensätzen' und 'Ressourcen' abbrechen


## D. Beratung und Unterstützung

### 1. Kontakte
- Für Fragen und Bedürfnisse zu offenen Behördendaten steht die [Fach- und Koordinationsstelle OGD](https://www.zh.ch/de/direktion-der-justiz-und-des-innern/statistisches-amt/open-government-data.html) zur Verfügung: info@open.zh.ch
- Für Fragen und Bedürfnisse zur Metadaten-Verwaltung und zu Behördendaten generell steht die [Abteilung 'Data Shop' des Statistischen Amts](https://www.zh.ch/de/direktion-der-justiz-und-des-innern/statistisches-amt/data-shop.html) zur Verfügung: datashop@statistik.zh.ch

### 2. Hilfsmittel 
- Begriffsdefinitionen im [Glossar des Kantons Zürich zur Metadaten-Verwaltung und offenen Behördendaten](https://github.com/openZH/mdd-ogd-handbook/blob/main/glossar.md)
- Technische und formale Grundsätze, Vorgaben und Empfehlungen zur Aufbereitung von Ressourcen in den [Leitlinien des Kantons Zürich für einfach nutzbare Behördendaten](https://github.com/openZH/mdd-ogd-handbook/blob/main/publikationsleitlinien.md)
