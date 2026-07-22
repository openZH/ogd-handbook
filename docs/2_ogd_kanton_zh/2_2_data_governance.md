---
id: data-governance
title: Data Governance
sidebar_label: Data Governance
sidebar_position: 2
---

import { CardGrid, Card } from '@site/src/components/CardGrid';
import DataClassification from '@site/src/components/DataClassification';

export const classificationLevels = [
  {
    key: 'oeffentlich',
    label: 'öffentlich',
    bullets: [
      'Daten, die keine Personenidentifikation ermöglichen und nicht die öffentliche Sicherheit gefährden',
      'oder: hohes Publizitätsinteresse liegt vor',
    ],
    access: 'für Alle',
    bottom: { label: 'Open Data', type: 'tag' },
  },
  {
    key: 'intern',
    label: 'intern',
    bullets: [
      'nicht kritische oder schädliche (Personen)daten',
    ],
    access: 'Innerhalb der Organisationseinheit, z.B. des Amtes',
    bottom: { label: 'Mehrfachverwendung von Daten', type: 'text' },
  },
  {
    key: 'vertraulich',
    label: 'vertraulich',
    bullets: [
      'Besondere Personendaten (§3 IDG)',
      'Bekanntmachung (auch in der Verwaltung) schädlich',
    ],
    access: 'Ausgewählter Personenkreis',
    bottom: { label: 'Mehrfachverwendung von Daten', type: 'text' },
  },
  {
    key: 'geheim',
    label: 'geheim',
    bullets: [
      'Besondere Personendaten (§3 IDG)',
      'Bekanntmachung beschädigt Staatsinteressen',
    ],
    access: 'Einzelne Personen',
    bottom: { type: 'shield' },
  },
];

# Data Governance

Die Organisation, das Rollenmodell, die Standards sowie die Infrastruktur für Open Government Data (OGD) sind Teil der kantonalen Data Governance. Mit dem [Regierungsratsbeschluss RRB 444/2026](https://www.zh.ch/de/politik-staat/gesetze-beschluesse/beschluesse-des-regierungsrates/rrb/regierungsratsbeschluss-444-2026.html) wurden die Grundlagen für eine föderierte Data Governance in der Kantonsverwaltung geschaffen. Der Kanton Zürich verfolgt dabei bewusst keinen zentralistischen Ansatz: Die Verantwortung für Daten verbleibt in den Direktionen und Verwaltungseinheiten. Gleichzeitig stellt das Amt für Statistik und Daten zentrale Beratung, Schulung, Koordination sowie gemeinsame Infrastruktur bereit, damit Ämter und Fachstellen ihre Daten qualitativ hochwertig, sicher und interoperabel bewirtschaften und, im Fall von OGD, publizieren können.

---

## Vertraulichkeit von Daten

Open Data bildet nur einen kleinen Teil der Daten ab, die im Kanton vorhanden sind. Die Richtlinien zur Informationssicherheit des Kantons (BISR) unterscheiden Daten (und Information) nach ihrem Zugangskreis: öffentliche Daten, interne Daten, vertrauliche Daten und geheime Daten.

Als Open Data publizieren wir Behördendaten nur, wenn keine rechtliche Bestimmung und kein überwiegendes öffentliches oder privates Interesse entgegensteht (vgl. [§ 16 nIDG](https://parlzhcdws.cmicloud.ch/parlzh5/cdws/Files/7c3a7aefd9884bef8fac45580ea9a018-332/1/pdf)). Um die Bestimmung zu operationalisieren, können wir die Vertraulichkeitsstufen der BISR zu Hilfe nehmen. Open Data sind Daten, die als öffentlich klassiert sind und gemäss [FAIR-Prinzipien](/ogd_grundlagen/fair-care) zugänglich gemacht wurden. Interne und vertrauliche Daten sind nicht frei zugänglich, sie werden ab Inkrafttreten des [totalrevidierten IDG](https://www.kantonsrat.zh.ch/geschaefte/geschaeft/?id=bbb4248013ca433eb50e68677eaaecd0) jedoch im kantonalen Datenkatalog verzeichnet und beschrieben. Die Vorgaben der Data Governance umfassen alle Datenbestände des Kantons, sie sind daher deutlich weitergehend, aber vollständig kompatibel mit den Vorgaben für Open Government Data.

Die Klassifikation von Daten ist von der datenhaltenden Stelle zu prüfen und eine Frage der Abwägung zwischen öffentlichem und privatem Interesse. Die Zuteilung zu einer Vertraulichkeitsstufe ist nicht eindeutig: **Die folgende Darstellung ist eine starke Vereinfachung und kann im Einzelfall falsch sein. Eine automatische Zuordnung ist nicht möglich.** Gleichzeitig stärkt der Kantonsrat mit der Einführung von «open by default» für die Kantonsverwaltung deren Transparenz (vgl. [§ 44a Gesetz über die Organisation des Regierungsrates und der kantonalen Verwaltung in nIDG](https://parlzhcdws.cmicloud.ch/parlzh5/cdws/Files/7c3a7aefd9884bef8fac45580ea9a018-332/1/pdf)). Das setzt voraus, dass Daten wenn möglich als öffentlich klassifiziert werden.

<DataClassification levels={classificationLevels} />

---

## Rollen für Open Data

Open Government Data sind eine ständige Aufgabe, die OGD sind ein Produkt, das regelmässig gepflegt, entwickelt und evaluiert werden muss. Der Aufwand pro Datensatz ist nicht gross, doch die Verantwortung für die Qualität und Aktualität der Daten liegt bei der datenhaltenden Stelle. Die Ämter und Fachstellen besetzen zwei Rollen, die diese Arbeit übernehmen.

<table>
  <thead>
    <tr>
      <th></th>
      <th>Data Custodian</th>
      <th>Data Steward</th>
      <th>Data Guide</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Beschreibung</strong></td>
      <td>bereitet die Daten auf und macht sie verfügbar</td>
      <td>erfasst und publiziert Metadaten</td>
      <td>berät und unterstützt «Data Custodians» und «Data Stewards»</td>
    </tr>
    <tr>
      <td><strong>Aufgaben</strong></td>
      <td>
        <ul>
          <li>Du erhebst und/oder bereinigst Daten für deine oder eine andere Verwaltungseinheit.</li>
          <li>Du bereitest Daten gemäss [technischen und formalen Grundsätzen, Vorgaben und Empfehlungen](/ogd-handbook/daten_struktur_format/datenformate) zu einfach nutzbaren Behördendaten auf.</li>
          <li>Du hältst die aufbereiteten Daten aktuell und stellst ihre Zugänglichkeit sicher.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Du planst und leitest die Publikation offener Behördendaten deiner Verwaltungseinheit.</li>
          <li>Du beschreibst Datensätze gemäss des [Schweizer Metadatenstandards für Datenportale und Kataloge (DCAT-AP CH)](/ogd-handbook/metadaten) und machst sie damit einfach auffindbar.</li>
          <li>Mit den «Data Custodians» deiner Verwaltungseinheit organisierst du die Aufbereitung und laufende Aktualisierung einfach nutzbarer Behördendaten.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Du berätst und unterstützt «Data Custodians» und «Data Stewards» bei der effizienten Organisation und Erfüllung ihrer Aufgaben.</li>
          <li>Du gibst Schulungen, vermittelst Kurse und entwickelst Anleitungen und Hilfsmittel weiter.</li>
          <li>Du analysierst und vermittelst Bedürfnisse und Feedback von Nutzenden.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><strong>Anforderungen</strong></td>
      <td>
        <ul>
          <li>Du hast ein hohes Datenverständnis und Kenntnisse in Data Science und Data Management</li>
          <li>Du bist fachverantwortlich für die Applikation, in der die Daten liegen, bist vermutlich sogar Admin.</li>
          <li>Du tauschst dich (nach Bedarf) mit anderen «Data Custodians» aus und arbeitest mit den «Data Stewards» deiner Verwaltungseinheit zusammen.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Du hast eine Schulung für «Data Stewards» absolviert (Aufwand: 2 bis 3 Stunden).</li>
          <li>Du hast ein hohes Datenverständnis und bist in der Lage, komplexe Daten einfach zu beschreiben.</li>
          <li>Du bleibst informiert bzgl. Standards und Vorgehen und interpretierst diese für deine Datenbestände.</li>
          <li>Du tauschst dich (nach Bedarf) mit anderen «Data Stewards» aus.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Du bist erfahren im Anwenden der Leitlinien des Kantons Zürich für einfach nutzbare Behördendaten und in der Beschreibung von Datensätzen mittels einfach verständlicher Metadaten.</li>
          <li>Du tauschst dich laufend mit «Data Stewards», «Data Custodians» sowie anderen «Data Guides» aus.</li>
          <li>Du nimmst am Fachausschuss für offene Behördendaten teil und vertrittst dort (auf Wunsch) «Data Stewards» von Verwaltungseinheiten und Organen.</li>
          <li>Du engagierst dich (bei Interesse) in Arbeitsgruppen zur gemeinsamen bedarfsgerechten Weiterentwicklung bestimmter Themen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Die Data Governance kennt weitere Rollen.

---

## Governance von Open Data

Der [OGD-Fachausschuss](https://www.zh.ch/de/direktion-der-justiz-und-des-innern/amt-fuer-statistik-und-daten/open-government-data.html) verankert Open Government Data in den Direktionen, steuert die OGD-Initiative des Kantons Zürich, entscheidet über gemeinsame Standards und entscheidet in unklaren oder strittigen Fällen über die Publikation von Daten. Die Fach- und Koordinationsstelle OGD organisiert den Fachausschuss, berät, arbeitet Vorschläge aus und sorgt für die Vernetzung und Bekanntmachung von OGD in der Verwaltung und in der Öffentlichkeit.
