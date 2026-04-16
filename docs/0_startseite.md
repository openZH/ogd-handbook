---
sidebar_position: 1
slug: /
---

import { CardGrid, Card } from '@site/src/components/CardGrid';

# Los geht's

<div className="startseite-hero">
  <img src={require('/img/intro.png').default} />
  <div className="startseite-hero-text">
    Dein Einstieg in Open Government Data (OGD) im Kanton Zürich - für alle, die offene Verwaltungsdaten verstehen, publizieren oder nutzen möchten.
  </div>
</div>
<p className="startseite-hero-source">Quelle Grafik: <a href="https://dribbble.com/shots/5405341-Analizing-data">Diana Traykoc</a></p>

---

## Für wen ist dieses Handbuch?

Dieses Handbuch richtet sich an zwei Zielgruppen:

**Mitarbeitende der Verwaltung** - ob du dich über Open Government Data informieren möchtest oder konkret Daten publizieren willst. Das Handbuch führt durch alle relevanten Themen: von rechtlichen Grundlagen über Daten-Standards bis hin zu Datenaufbereitungsvorlagen mit R.

**Alle, die OGD-Daten nutzen möchten** - ob aus Wissenschaft, Wirtschaft, Medien oder der Bevölkerung: Hier findest du Orientierung, [was](/ogd-handbook/ogd_grundlagen/was-ist-ogd) offene Verwaltungsdaten sind, [wo](/ogd-handbook/ogd_kanton_zh/zugang) sie im Kanton Zürich zu finden sind und [wie](/ogd-handbook/ogd_grundlagen/ogd-nutzen) du sie verwenden kannst.

---

## Was findest du in diesem Handbuch?

<CardGrid cols={3}>
  <Card title="1. OGD Grundlagen" href="/ogd-handbook/ogd_grundlagen/was-ist-ogd" emoji="💡">
    Grundlagen zu Open Government Data, Prinzipien, FAIR & CARE, Schweizer OGD-Landschaft und Nutzung offener Daten.
  </Card>
  <Card title="2. OGD im Kanton Zürich" href="/ogd-handbook/ogd_kanton_zh/zugang" emoji="🦁">
    Transparenz, Datenkatalog und weitere Datenzugänge, Data Governance, rechtliche Grundlagen, Datenschutz und Publikationsprozess im Kanton Zürich.
  </Card>
  <Card title="3. Daten" href="/ogd-handbook/daten_struktur_format/dateiformate" emoji="🗂️">
    Dateiformate, Datenstruktur, Spaltenüberschriften, Datentypen, geografische Referenzierung und Aktualisierungsstrategien.
  </Card>
  <Card title="4. Metadaten" href="/ogd-handbook/metadaten/metadaten" emoji="🏷️">
    Datensätze und ihre Distributionen, benötigte Attribute nach DCAT-AP CH und korrekte Erfassung in der Metadatenverwaltung.
  </Card>
  <Card title="5. Anleitungen" href="/ogd-handbook/anleitungen/r-skript-beispiel" emoji="🛠️">
    Schritt-für-Schritt-Anleitungen: Daten mit R automatisiert aufbereiten, Excel zu CSV, Anleitungen für die Metadatenverwaltung-Applikation.
  </Card>
  <Card title="6. Kontakt" href="/ogd-handbook/kontakt" emoji="💌">
    Das Team der Fach- und Koordinationsstelle OGD, Community-Events und Fachgremien.
  </Card>
</CardGrid>

---

## Herausgeberin

Dieses Handbuch wird vom **Statistischen Amt des Kantons Zürich** durch die [**Fach- und Koordinationsstelle OGD**](/ogd-handbook/kontakt) herausgegeben.

