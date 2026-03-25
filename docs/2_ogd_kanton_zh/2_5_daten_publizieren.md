---
id: daten-publizieren
title: Offene Daten publizieren
sidebar_label: Offene Daten publizieren
sidebar_position: 5
---

import ProcessStepper from '@site/src/components/ProcessStepper';

# Offene Daten publizieren

## Fünf Schritte, um Daten offen verfügbar zu machen

<ProcessStepper steps={[
  {
    title: "Daten aufbereiten",
    emoji: "📂",
    text: "Daten als maschinenlesbare Distribution aufbereiten.",
    links: [
        { label: "→Struktur & Format", href: "#" },
        { label: "→ Daten mit R aufbereiten", href: "#" }
    ]
  },
  {
    title: "Metadaten beschreiben",
    emoji: "🏷️",
    text: "Daten mit aussagekräftigen Metadaten beschreiben.",
    links: [{ label: "→ Metadaten", href: "#" }]
  },
  {
    title: "In der MDV erfassen",
    emoji: "✏️",
    text: "Daten und Metadaten manuell in der Metadaten-Verwaltung (MDV) erfassen oder per Skript automatisiert einspielen.",
    links: [
      { label: "→ Manuell: MDV Tutorial", href: "#" },
      { label: "→ Skript: R-Package", href: "#" }
    ]
  },
  {
    title: "Zur Prüfung freigeben",
    emoji: "🔍",
    text: "Datensatz mit Distributionen zur Prüfung freigeben. Eine erfahrene Person prüft den Datensatz bei seiner erstmaligen Publikation und gibt Feedback oder publiziert direkt."
  },
  {
    title: "Aktualisieren",
    emoji: "🔄",
    text: "Distributionen und Metadaten laufend aktualisieren (manuell oder per Skript) sobald neue Daten oder Änderungen vorliegen.",
    links: [
      { label: "→ Manuell: MDV Tutorial", href: "#" },
      { label: "→ Skript: R-Package", href: "#" }
    ]
  }
]} />

## Du möchtest Daten veröffentlichen?

Der einfachste Weg zur Veröffentlichung von Daten als OGD im Kanton Zürich ist die Kontaktaufnahme mit dem Data Steward der eigenen Verwaltungseinheit. Data Stewards sind die erste Anlaufstelle für die Bereitstellung offener Daten - sie kennen den Prozess, können dich beraten und haben Zugang zur Metadaten-Verwaltung. → Ansprechpersonen in den Direktionen

In Ämtern ohne bestehende oder aktive Data Stewards besteht die Möglichkeit, diese Rolle selbst zu übernehmen. Dafür stehen folgende Unterstützungsangebote zur Verfügung:

- Beratung durch die Fach- und Koordinationsstelle OGD: info@open.zh.ch
- Einführungsschulung zur Metadaten-Verwaltung, um die Datensätze im Datenkatalog selber zu verwalten.
- Data Guides als Ansprechpersonen im Publikationsprozess

:::info Ihre Verwaltungseinheit behält Datenhoheit
Das Fachwissen, wie bestimmte Daten entstehen und was sie beinhalten, liegt bei den Verwaltungseinheiten, die sie sammeln oder erzeugen. Auch die Daten, die sie als offene Behördendaten bereitstellen, bleiben unter ihrer Hoheit.
:::
