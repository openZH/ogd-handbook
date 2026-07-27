---
id: daten-publizieren
title: Offene Daten publizieren
sidebar_label: Offene Daten publizieren
sidebar_position: 1
---

import ProcessStepper from '@site/src/components/ProcessStepper';

# Offene Daten publizieren

## Fünf Schritte, um Daten offen verfügbar zu machen

<ProcessStepper steps={[
  {
    title: "Daten aufbereiten",
    emoji: "📂",
    text: <>Daten als maschinenlesbare Distribution aufbereiten. Siehe: <a href="/ogd-handbook/daten_struktur_format/datenformate">Empfehlungen Daten</a> &amp; <a href="/ogd-handbook/anleitungen/daten-aufbereiten">Daten mit R aufbereiten</a>.</>,
  },
  {
    title: "Mit Metadaten beschreiben",
    emoji: "🏷️",
    text: <>Daten mit aussagekräftigen Metadaten beschreiben. Siehe: <a href="/ogd-handbook/metadaten">Metadaten</a>.</>,
  },
  {
    title: "In der MDV erfassen",
    emoji: "✏️",
    text: <>Daten und Metadaten manuell in der Metadatenverwaltung (MDV) erfassen oder per Skript automatisiert einspielen. Siehe: <a href="/ogd-handbook/anleitungen/metadatenverwaltung">MDV Tutorial</a> &amp; <a href="/ogd-handbook/anleitungen/daten-aufbereiten">R-Package</a>.</>,
  },
  {
    title: "Zur Prüfung freigeben",
    emoji: "🔍",
    text: <>Datensatz mit Distributionen zur Prüfung freigeben. Ein <a href="/ogd-handbook/ogd_kanton_zh/data-governance#rollen-für-open-data">Data Guide</a> prüft den Datensatz bei seiner erstmaligen Publikation und gibt Feedback oder publiziert direkt.</>,
  },
  {
    title: "Aktualisieren",
    emoji: "🔄",
    text: <>Distributionen und Metadaten <strong>laufend</strong> aktualisieren (manuell oder per Skript) sobald neue Daten oder Änderungen vorliegen.  Siehe: <a href="/ogd-handbook/anleitungen/metadatenverwaltung">MDV Tutorial</a> &amp; <a href="/ogd-handbook/anleitungen/daten-aufbereiten">R-Package</a>.</>,
  }
]} />

---

## Du möchtest Daten veröffentlichen?

Der einfachste Weg zur Veröffentlichung von Daten als OGD im Kanton Zürich ist die Kontaktaufnahme mit dem [Data Steward der eigenen Verwaltungseinheit](https://www.zh.ch/de/direktion-der-justiz-und-des-innern/amt-fuer-statistik-und-daten/open-government-data.html). Data Stewards sind die erste Anlaufstelle für die Bereitstellung offener Daten - sie kennen den Prozess, können dich beraten und haben Zugang zur Metadaten-Verwaltung. 

In Ämtern ohne bestehende oder aktive Data Stewards besteht die Möglichkeit, diese Rolle selbst zu übernehmen. Dafür stehen folgende Unterstützungsangebote zur Verfügung:

- Beratung durch die Fach- und Koordinationsstelle OGD: info@open.zh.ch
- Einführungsschulung zur Metadaten-Verwaltung, um die Datensätze im Datenkatalog selber zu verwalten.
- Data Guides als Ansprechpersonen im Publikationsprozess

:::info Ihre Verwaltungseinheit behält Datenhoheit
Das Fachwissen, wie bestimmte Daten entstehen und was sie beinhalten, liegt bei den Verwaltungseinheiten, die sie sammeln oder erzeugen. Auch die Daten, die sie als offene Behördendaten bereitstellen, bleiben unter ihrer Hoheit.
:::
