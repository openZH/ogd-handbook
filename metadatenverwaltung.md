
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

Die Metadaten-Verwaltung ermöglicht es den Verwaltungseinheiten und Organen (auch Gemeinden) des Kantons Zürich, die Metadaten ihrer offenen [Datensätze](https://github.com/openZH/mdd-ogd-handbook/blob/main/glossar.md#datensatz-dataset) weitgehend selbständig zu erfassen und zu aktualisieren sowie die entsprechenden Daten-[Ressourcen](https://github.com/openZH/mdd-ogd-handbook/blob/main/glossar.md#ressource-resource-oder-distribution) bereitzustellen.

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

Rolle, die für eine Verwaltungseinheit bzw. Organisation Daten erhebt und/oder bereinigt.

Um einfach nutzbare Behördendaten bereitzustellen, bereiten sie Daten gemäss [technischen und formalen Grundsätzen, Vorgaben und Empfehlungen](https://github.com/openZH/mdd-ogd-handbook/blob/main/publikationsleitlinien.md) als maschinenlesbare [Ressourcen](https://github.com/openZH/mdd-ogd-handbook/blob/main/glossar.md#ressource-resource-oder-distribution) auf. 

Sie halten die publizierten Ressourcen aktuell und stellt ihre Zugänglichkeit sicher.

### 2. 'Data Stewards' beschreiben Daten mit Metadaten und publizieren sie

Rolle, die für eine Verwaltungseinheit bzw. Organisation die Publikation von Behördendaten plant und leitet.

Sie beschreiben [Datensätze](https://github.com/openZH/mdd-ogd-handbook/blob/main/glossar.md#datensatz-dataset) und [Ressourcen](https://github.com/openZH/mdd-ogd-handbook/blob/main/glossar.md#ressource-resource-oder-distribution) in der Metadaten-Verwaltung gemäss des [Schweizer Metadatenstandards für Datenportale und Kataloge (DCAT-AP CH)](https://www.zh.ch/de/direktion-der-justiz-und-des-innern/statistisches-amt/open-government-data/fachausschuss-open-government-data.html#780472813) und machen Behördendaten so einfach findbar. 

Im Austausch mit den ['Data Custodians'](#1-data-custodians-bereiten-daten-auf-und-stellen-sie-bereit) organisieren sie die laufende Aktualisierung der publizierten Datensätze.

### 3. 'Data Guides' beraten, unterstützen und vermitteln

Rolle, die ['Data Custodians'](#1-data-custodians-bereiten-daten-auf-und-stellen-sie-bereit) und ['Data Stewards'](#2-data-stewards-beschreiben-daten-mit-metadaten-und-publizieren-sie) bei der effizienten Organisation und Erfüllung ihrer Aufgaben berät, unterstützt sowie (auf Wunsch) vertritt. 

'Data Guides' verfügen in der Metadaten-Verwaltung über Administrator-Rechte. Sie prüfen erstmalig erfasste Metadatensätze auf ihre Konformität zum geltenden [DCAT-AP CH](https://github.com/openZH/mdd-ogd-handbook/blob/main/glossar.md#dcat-ap-bzw-dcat-ap-ch)-Metadatenstandard und erstmalig bereitgestellte [Ressourcen](https://github.com/openZH/mdd-ogd-handbook/blob/main/glossar.md#ressource-resource-oder-distribution) auf ihre Konformität zu den [Leitlinien des Kantons Zürich für einfach nutzbare Behördendaten](https://github.com/openZH/mdd-ogd-handbook/blob/main/publikationsleitlinien.md).

Ist alles bereit, erstmals publiziert zu werden, planen sie mit den 'Data Stewards', per wann die Publikation erfolgend soll.

### 4. Weitere Rollen: 'Data Stewards zh.ch' und 'Guests'

'Data Stewards zh.ch' verfügen über zusätzliche Rechte, in der Metadaten-Verwaltung auch nicht offene Datensätze verwalten zu können.

'Guests' haben lediglich Lese-Zugang zur Metadaten-Verwaltung. Sie interessieren sich unter Umständen für die Übernahme einer Rolle, haben aber noch keine entsprechende Schulung gemacht.

## C. Offene Behördendaten bereitstellen, publizieren und aktualisieren
![Fünf Schritte zum Bereitstellen und Aktualisieren von offenen Behördendaten](https://www.zh.ch/content/dam/zhweb/bilder-dokumente/organisation/direktion-der-justiz-und-des-innern/statistisches-amt/open-government-data/Open-Data-Zyklus.png.zhweb-transform/content-picture-small-large/Open-Data-Zyklus.1628757879829.png "Publikationsprozess")

### 1. Daten als einfach nutzbare, maschinenlesbare 'Ressourcen' aufbereiten

Handelt es sich um tabellarische Daten, folgen Sie bei der Aufbereitung den technischen und formalen Grundsätzen, Vorgaben und Empfehlungen in den [Leitlinien des Kantons Zürich für einfach nutzbare Behördendaten](https://github.com/openZH/mdd-ogd-handbook/blob/main/publikationsleitlinien.md).

Handelt es sich um Daten mit anderen und/oder komplexen Strukturen, nehmen Sie bitte mit der [Fach- und Koordinationsstelle OGD im Statistischen Amt](https://www.zh.ch/de/direktion-der-justiz-und-des-innern/statistisches-amt/open-government-data.html) Kontakt auf: info@open.zh.ch

### 2. 'Ressourcen' offen zugänglich bereitstellen

Handelt es sich um eine Ressource, die Nutzende als Datei herunterladen können, 

> - teilen Sie diese mit einem 'Data Steward' Ihrer Verwaltungseinheit bzw. Organisation, damit sie via die Metadaten-Verwaltung bereitgesetllt werden kann, oder
> - stellen sie diese selbst auf einen frei im Web zugänglichen Server bereit, der unter Ihrer Hoheit steht. Teilen Sie darauf einem 'Data Steward' Ihrer Verwaltungseinheit bzw. Organisation die entsprechende Download-URL mit (Wichtig: Die Download-URLs müssen permament bleiben.),

### 3. Daten als 'Datensätze' erfassen und mit Metadaten beschreiben

Melden Sie sich als 'Data Steward' mit Ihrem Login in der Metadaten-Verwaltung an: [zh.ch/metadatenverwaltung](https://www.web.statistik.zh.ch/ogd/datenkatalog-verwaltung/app/#/auth/login).

Klicken Sie rechts oben auf "Neuen Datensatz erstellen".

> - Wählen Sie einen aussagekräftigen Titel, ergänzt um den geografischen Bezug (zB. "... des Kantons Zürich" oder "... der Stadt Uster") und - sofern es sich um eine Zeitreihe handelt - um das Startdatum der Zeitreihe (zB. "... ab 2011" oder "... ab Juni 2011" oder "... ab 13.06.2011".
> - Wählen Sie als "Publisher" die Verwaltungseinheit oder Organisation, unter deren Name der Datensatz publiziert werden soll. Steht die Verwaltungseinheit oder Organisation noch nicht zur Auswahl, nehmen Sie bitte mit der [Fach- und Koordinationsstelle OGD im Statistischen Amt](https://www.zh.ch/de/direktion-der-justiz-und-des-innern/statistisches-amt/open-government-data.html) Kontakt auf: info@open.zh.ch
> - Wählen Sie als Kontakt diejenige Stelle, die fachliche Auskunft zu den entsprechenden Daten geben können.
> - Wählen Sie mindestens eine der Themenkatagorien aus.

Klicken Sie auf "Erstellen". Sie haben nun einen Entwurf eines neuen Datensatzes in der Metadaten-Verwaltung angelegt.

...

### 4. Erstmalig erfasste 'Datensätze' zur Publikation freigeben

...

### 5. Publizierte 'Datensätze' und 'Ressourcen' aktualisieren

...

### 6. Aktualisierung von 'Datensätzen' und 'Ressourcen' abbrechen

...

## D. Beratung und Unterstützung

### 1. Kontakte für Fragen und Bedürfnisse
- Zu offenen Behördendaten steht die [Fach- und Koordinationsstelle OGD im Statistischen Amt](https://www.zh.ch/de/direktion-der-justiz-und-des-innern/statistisches-amt/open-government-data.html) zur Verfügung: info@open.zh.ch
- Zur Metadaten-Verwaltung und zu Behördendaten generell steht die [Abteilung 'Data Shop' im Statistischen Amt](https://www.zh.ch/de/direktion-der-justiz-und-des-innern/statistisches-amt/data-shop.html) zur Verfügung: datashop@statistik.zh.ch

### 2. Hilfsmittel 
- Begriffsdefinitionen im [Glossar des Kantons Zürich zur Metadaten-Verwaltung und offenen Behördendaten](https://github.com/openZH/mdd-ogd-handbook/blob/main/glossar.md)
- Technische und formale Grundsätze, Vorgaben und Empfehlungen zur Aufbereitung von Ressourcen in den [Leitlinien des Kantons Zürich für einfach nutzbare Behördendaten](https://github.com/openZH/mdd-ogd-handbook/blob/main/publikationsleitlinien.md)
