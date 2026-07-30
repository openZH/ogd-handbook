---
id: api-best-practice
title: API Best Practice
sidebar_label: API Entwickeln
sidebar_position: 6
---

# API Entwickeln

Um Daten effizient für den maschinellen Verbrauch bereitzustellen, ist die Entwicklung einer gut strukturierten API entscheidend. Die nachfolgenden Best Practices stellen sicher, dass die Schnittstellen im Kanton Zürich einheitlich aufgebaut und für alle Nutzenden interoperabel bleiben.

## Wann braucht es eine API?

Vor der Entwicklung einer API ist es sinnvoll, sich ein letztes Mal zu fragen: Ist eine API das richtige Werkzeug? Wie in «[DevOps for Data](https://do4ds.com/chapters/sec1/1-2-proj-arch.html#choose-the-right-presentation-layer)» beschrieben, ist eine API die richtige Wahl, wenn Daten (unter anderem) für den maschinellen Verbrauch gedacht sind.

## Die REST API

APIs sind eine standardisierte Art, wie Computer miteinander kommunizieren. Die Empfehlungen fokussieren sich auf eine REST API. REST (Representational State Transfer) ist ein Architekturstil insbesondere für Programmierschnittstellen (API). REST APIs eignen sich sehr gut für OGD, da ihr Hauptmerkmal eine «einheitliche Schnittstelle» ist. Dies zahlt stark auf die FAIR-Prinzipien der Zugänglichkeit und Interoperabilität ein.

## Best Practice

Es gibt einige Best-Practice-Tipps, die helfen, die REST API noch einheitlicher und leichter zugänglich zu gestalten:

- Sinnvolle und konsistente URL-Benennung. Es hat sich durchgesetzt, dass die Endpunkte durch Nomen im Plural beschrieben werden. Sinn und Zweck ist es, den Endpunkt gleich wie die Ressource zu benennen (da es sich um ein Objekt handelt, wird ein Nomen verwendet).

:::warning Wichtig!
Kein Verb verwenden, da dies in der HTTP-Methode integriert ist!
:::

- Endpunkte nicht zu tief verschachteln. Bis zu einer zweifachen Verschachtelung lässt sich der Inhalt leicht aus der URL ableiten:
✅ `/gemeinden` --> Liste aller Gemeinden
