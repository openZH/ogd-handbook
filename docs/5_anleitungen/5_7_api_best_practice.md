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

    ✅ `/gemeinden` ➡️ Liste aller Gemeinden

    ✅ `/gemeinden/120` ➡️ Eine spezifische Gemeinde

    Ab der dritten Verschachtelung wird der Inhalt oft unklar. Somit sind zu tiefe Verschachtelungen zu vermeiden:

    ❎ `/users/123/orders` ➡️ Sämtliche Bestellungen eines spezifischen Users

    ❎ `/orders/456/items` ➡️ Sämtliche Elemente einer spezifischen Bestellung

- Filtern, Sortieren und Suchen ermöglichen. Diese Features ermöglichen es den Nutzenden, den Output über die Abfrage zu organisieren. Technisch betrachtet sind Filtern, Sortieren und Suchen KEIN ENDPUNKT, sondern Query-Parameter. Ein klarer Parametername (z. B. vor dem Filter) eignet sich, um die URL für Nutzende leicht verständlich zu machen. Gute Beispiele sind: 

    ✅ `/products?category=electronics&price_min=100&price_max=500` ➡️ Filter nach Produkten der Kategorie Elektronik mit einem Preis zwischen 100 und 500 CHF.

    ✅ `/products?sort=category:asc,price:desc` ➡️ Produkte aufsteigend nach Kategorie sortieren und absteigend nach Preis.

    ✅ `/products?search=kabellos` ➡️ Suche alle Produkte mit der Bezeichnung «kabellos» im Namen.

- Nur vordefinierte Methoden verwenden. In einer REST API sind nur neun HTTP-Methoden erlaubt. Für OGD ist in den allermeisten Fällen die GET-Methode relevant. Diese Methode fordert die angegebene Ressource vom Server an (ohne Nebeneffekte zu verursachen). Die weiteren Methoden können [hier](https://de.wikipedia.org/wiki/Representational_State_Transfer#Umsetzung) gefunden werden.

:::warning Wichtig!
GET darf niemals verwendet werden, um Daten zu ändern!
:::

- Standard-HTTP-Statuscodes verwenden. Jede Anfrage (Request) erhält eine Antwort (Response). Bei einer REST API wird erwartet, dass immer ein standardisierter Response-Code zurückgegeben wird. Die häufigsten HTTP-Codes können [hier](https://do4ds.com/chapters/append/cheatsheets.html) gefunden werden.

- Sinnvolle und konsistente Fehlermeldungen implementieren. Suchen Nutzende beispielsweise nach einem Endpunkt, den es nicht gibt, soll eine Fehlermeldung zurückgegeben werden. Diese Fehlermeldungen sind über die gesamte API hinweg identisch zu halten. Zudem sollten mehrere Fehler gleichzeitig abgefangen werden können. Ein Beispiel für eine Fehlermeldung kann [hier](https://api.gov.au/sections/error-handling.html#error-samples) gefunden werden.

- API versionieren. Eine Schnittstelle ist als evolvierendes Produkt zu betrachten, das sich laufend weiterentwickeln und wandeln kann. Um diesem Fakt Rechnung zu tragen und sicherzustellen, dass eine API auffindbar bleibt, ist eine Versionsnummer nötig. Diese kann beispielsweise der folgenden Versionskonvention folgen: `<major>.<minor>.<patch>`. Geübte Nutzende erkennen umgehend, wie die neue Version zu interpretieren ist; eine Erklärung dazu findet sich [hier](https://r-pkgs.org/lifecycle.html#sec-lifecycle-version-number-tidyverse). Zudem muss die Versionsnummer zwingend angepasst werden, wenn die API verändert wird. Ein beiliegendes Changelog informiert die Nutzenden über die vorgenommenen Änderungen.

- Die API dokumentieren. Wer seine API nicht ausreichend dokumentiert, riskiert, dass Nutzende die Daten nicht finden oder nicht korrekt verwenden können. Es hat sich der Standard durchgesetzt, dass für jeden Endpunkt folgende Informationen beschrieben werden: 

    - HTTP-Methode(n) und zugehörige URL mit Kurzbeschrieb.

    - Falls zutreffend: benötigte Parameter (Feldname, Kurzbeschrieb und Parameter-Typ).

    - API-Antworten (HTTP-Codes, Beschreibung zum Code, Format-Typ der Antwort und ein Beispiel). Zur allgemeinen Beschreibung der API wird immer häufiger Swagger UI verwendet. Ein sehr detailliert beschriebenes Beispiel einer REST API kann [hier](https://api.gov.au/assets/APIs/api-example.html) gefunden werden.

- Rückwärtskompatibel entwickeln. Sobald eine API veröffentlicht ist, muss damit gerechnet werden, dass Nutzende alle Endpunkte verwenden. Das heisst für die Weiterentwicklung: Lieber neue Endpunkte hinzufügen als ältere entfernen! Das Entfernen bestehender Endpunkte führt auf Seiten der Nutzenden zu Unannehmlichkeiten (z. B. Skripte, Pipelines oder ganze Analysen, die nicht mehr funktionsfähig sind).

- HTTPS verwenden. Sämtliche API-Aufrufe müssen zwingend über HTTPS verschlüsselt erfolgen, um Authentifizierungsdaten und sensible Informationen während der Übertragung zu schützen. Da HTTP die Daten im Klartext überträgt, besteht ein Risiko, dass diese abgefangen und ausgelesen werden können.

## Weiterführende Ressourcen

- REST API [Best Practice Guide](https://blog.postman.com/rest-api-best-practices/)
- [API Design Standards](https://api.gov.au/) der australischen Behörden
- Beispiel im Kanton Zürich: [Gebietsstammdaten API](https://gebietsstammdaten.statistik.zh.ch/api/__docs__/) und das R-Paket, welches die Abfragen standardisiert: [zhGebiete](https://github.com/statistikZH/zhGebiete).
