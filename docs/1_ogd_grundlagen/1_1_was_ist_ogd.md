---
id: was-ist-ogd
title: Was ist OGD?
sidebar_label: Was ist OGD?
sidebar_position: 1
---

import CarrotStepper from '@site/src/components/CarrotStepper';

# Was ist Open Government Data?
Dieses Kapitel erklärt, was offene Behördendaten (OGD) sind, warum sie wichtig sind und wo sie genutzt werden können.

## Einführung Open Government Data

Für die Verwaltungsarbeit werden Daten benötigt. In der öffentlichen Verwaltung entstehen zahlreiche Daten, die zur Erfüllung gesetzlicher Aufgaben erhoben und verarbeitet werden. Ein Teil dieser Daten ist nicht schützenswert und kann offen bereitgestellt werden. Dieses Konzept wird als **Open Government Data** (Offene Behördendaten) bezeichnet.

Open Government Data tragen zu einer transparenten und effizienten Verwaltung bei:

- Die Daten machen die Arbeit der Verwaltung nachvollziehbar - das stärkt Transparenz und Vertrauen.
- Auf Basis der Daten können sich alle eine eigene Meinung bilden und innovative Lösungen für die öffentliche Hand oder die Privatwirtschaft entwickeln.
- Die Daten lassen sich direkt in Prozesse und Anwendungen einbinden - das ist effizient und weniger fehleranfällig.

:::info Nicht alle Verwaltungsdaten sind OGD
Ausgeschlossen sind insbesondere schützenswerte, vertrauliche oder sicherheitsrelevante Daten.
:::


## Produktsicht auf Daten

export const carrotSteps = [
  {
    title: 'Was haben Rüebli mit Daten zu tun?',
    img: require('@site/static/img/rüebli_all.png').default,
    text: 'Rüebli können roh, gewaschen oder weiterverarbeitet sein. Mit Daten verhält es sich ähnlich.',
    cta: 'Finde es heraus →',
    isIntro: true,
  },
  {
    title: '1) Rohe Rüebli - Rohdaten',
    img: require('@site/static/img/rüebli_1.png').default,
    text: 'Direkt aus der Quelle: unstrukturiert, ungesäubert, ungeprüft. Diese Daten sind intern oder noch nicht bereitgestellt.',
    cta: 'Weiter →',
  },
  {
    title: '2) Gewaschene Rüebli - Rohmaterial als Produkt',
    img: require('@site/static/img/rüebli_2.png').default,
    text: 'Strukturierte, qualitätsgesicherte, maschinenlesbare und frei zugängliche Daten. Bereit zur Weiterverwendung, aber noch nicht interpretiert.',
    cta: 'Weiter →',
  },
  {
    title: '3) Verarbeitete Rüebli - Datenprodukt',
    img: require('@site/static/img/rüebli_3.png').default,
    text: 'Verarbeitete Daten in Form von Anwendungen, Berichten, Dashboards oder Auswertungen. Hier werden Daten interpretiert, kombiniert und visualisiert.',
    cta: 'Weiter →',
  },
  {
    title: 'Und wo befinden wir uns mit OGD?',
    img: require('@site/static/img/rüebli_2.png').default,
    text: <><strong>OGD sind die gewaschenen Rüebli:</strong> Open Government Data sind strukturierte und qualitätsgesicherte Rohdaten. Sie bilden die Grundlage für Datenprodukte wie Anwendungen, Berichte und Analysen, sind jedoch selbst keine fertigen Auswertungen.</>,
    cta: null,
    isLast: true,
  },
];

<CarrotStepper steps={carrotSteps} />


## Beispiele: OGD in der Praxis

<div className="example-grid">
<div className="example-card">

### Fahrplandaten des öffentlichen Verkehrs

Der öffentliche Verkehr veröffentlicht Fahrplan- und Echtzeitdaten als OGD - darunter Haltestellen, Linienverläufe, Fahrpläne sowie aktuelle Positions- und Verspätungsinformationen. [opentransportdata.swiss](https://opentransportdata.swiss) stellt diese Daten zur freien Weiterverwendung bereit.

Auf dieser Grundlage entstehen u.a.:
- Fahrplan-Apps (z.B. [sbb.ch](https://sbb.ch)) 
- Echtzeit-Visualisierungen von Bussen und Trams
- Digitale Abfahrtsanzeigen (z.B. [tramli.ch](https://tramli.com/))
- Mobilitätsanalysen und wissenschaftliche Auswertungen

</div>
<div className="example-card">

### Wetterdaten

MeteoSchweiz stellt zahlreiche Wetter- und Klimadaten zur freien Weiterverwendung bereit - Temperatur- und Niederschlagsmessungen, Wind- und Luftdruckdaten aus verschiedenen Wetterstationen.

Auf dieser Grundlage entstehen u.a.:
- Wetter-Apps und Online-Prognosen
- Visualisierungen von Unwettern
- Entscheidungsgrundlagen für Landwirtschaft, Bauwesen und Energieversorgung
- Forschung zu Klima- und Umweltveränderungen

</div>
</div>
