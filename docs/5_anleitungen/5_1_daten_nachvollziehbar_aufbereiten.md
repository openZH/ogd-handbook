---
id: daten-aufbereiten
title: Daten mit R aufbereiten
sidebar_label: Daten mit R aufbereiten
sidebar_position: 1
---

import React from 'react';

export const DataCard = ({ title, header, children, previewHeight = 220 }) => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <div style={{border:'1px solid var(--kzh-border)', borderTop:'4px solid var(--kzh-blue)', borderRadius:'4px', marginBottom:'1.5rem', background:'white'}}>
      <div style={{padding:'1rem 1.5rem 0.25rem', fontWeight:'700', fontSize:'1rem', color:'var(--kzh-black)'}}>
        {title}
      </div>
      {header && <div style={{padding:'0.25rem 1.5rem 0.75rem', fontSize:'0.92rem', color:'var(--kzh-grey)', borderBottom:'1px solid var(--kzh-border)'}}>{header}</div>}
      <div style={{position:'relative'}}>
        <div className="data-card-content" style={{maxHeight: expanded ? 'none' : previewHeight + 'px', overflowY:'hidden', overflowX:'auto', padding:0}}>
          {children}
        </div>
        {!expanded && (
          <div style={{position:'absolute', bottom:0, left:0, right:0, height:'60px', background:'linear-gradient(transparent, var(--ifm-background-color))', pointerEvents:'none'}} />
        )}
      </div>
      <div style={{textAlign:'center', padding:'0.5rem 1rem', borderTop:'1px solid var(--kzh-border)'}}>
        <button
          onClick={() => setExpanded(!expanded)}
          style={{background:'none', border:'none', color:'var(--ifm-color-primary)', cursor:'pointer', fontWeight:'600', fontSize:'0.875rem', padding:'0.25rem 0.75rem'}}>
          {expanded ? '▲ Weniger anzeigen' : '▼ Alles anzeigen'}
        </button>
      </div>
    </div>
  );
};

# R-Skript Tutorial: Daten nachvollziehbar aufbereiten
Die Daten, die du als OGD veröffentlichen möchtest, liegen jährlich (oder in anderen regelmässigen Abständen) vor? Du möchtest selbst nachvollziehen, wie du die Daten das letzte Jahr aufbereitet hast oder deine Datenaufbereitung in Zukunft einfach übergeben können?

Hier findest du für diesen Fall einige Beispiele, wie du aus einer relativ unstrukturierten Excel-Tabelle in nachvollziehbarer Art und Weise OGD erstellen kannst. Das beste daran? Du kannst die Daten auch direkt per Code in den Datenkatalog laden, ohne den Umweg über die grafische Oberfläche zu nehmen.

Als Tool verwenden wir die Skriptsprache R. Diese ist im Kanton Zürich weit verbreitet und ganz einfach über das Software-Center zu beziehen. Eine Anleitung findest du hier: [Datenanalyse mit R / R-Studio](https://ktzuerich.sharepoint.com/sites/zh-informatik/SitePages/Datenanalyse-mit-R---R-Studio.aspx) (Link funktioniert nur innerhalb des Kantons).

:::info R-Kurs
Du bist nach diesen Beispielen auf den Geschmack gekommen und möchtest herausfinden was mit R sonst noch so möglich ist? Hier geht's direkt zum R-Kurs für kantonale Angestellte: [rstatsZH](https://rstats.zuerich/)
:::

## Ein Beispiel mit kantonalen Fahrzeugdaten

Als Beispiel dienen uns echte Daten zu Neubeschaffungen bei der kantonalen Fahrzeugflotte. Diese werden vom Amt für Abfall, Wasser, Energie und Luft (AWEL) des Kantons Zürich erhoben und hier als OGD publiziert: [Datenkatalog | Kanton Zürich](https://www.zh.ch/de/politik-staat/statistik-daten/datenkatalog.html). Die Erhebung der Daten startet aber (wie so oft) in Excel...

<DataCard title="Ausgangslage: Die unschöne Excel-Tabelle" header="Für Menschen lesbar, für Maschinen problematisch: zusammengefasste Zellen, doppelte Spalten, gemischte Inhalte (Rohdaten, Totale, Prozentwerte) und mehrstufige Kopfzeilen erschweren die automatische Verarbeitung." previewHeight={400}>
<table>
  <thead>
    <tr>
      <th></th><th></th>
      <th >Treibstoffarten:</th>
      <th colSpan={15}></th>
    </tr>
    <tr>
        <th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th>
    </tr>
    <tr>
      <th></th><th></th><th></th><th></th>
      <th>Benzin</th><th>Diesel</th><th>Gas</th><th>Hybrid</th><th>Plugin-Hybrid</th><th>Batterie-Elektrisch</th><th>Brennstoff-Zelle</th>
      <th></th><th>Gesamt</th><th></th>
      <th>CO2-frei</th><th>Plugin Hybrid</th><th>Rest</th><th>fossil</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={5}>Personenwagen (M1)</td>
      <td>2020</td><td>Personenwagen (M1)</td><td>2020</td>
      <td>3</td><td>53</td><td>0</td><td>8</td><td>27</td><td>3</td><td>2</td><td></td><td>96</td><td></td><td>5%</td><td>28%</td><td>67%</td><td>95%</td>
    </tr>
    <tr>
      <td></td><td>Personenwagen (M1)</td><td>2021</td>
      <td>3</td><td>37</td><td>0</td><td>3</td><td>9</td><td>17</td><td>0</td><td></td><td>69</td><td></td><td>25%</td><td>13%</td><td>62%</td><td>75%</td>
    </tr>
    <tr>
      <td>2022</td><td>Personenwagen (M1)</td><td>2022</td>
      <td>2</td><td>40</td><td>0</td><td>0</td><td>6</td><td>18</td><td>0</td><td></td><td>66</td><td></td><td>27%</td><td>9%</td><td>64%</td><td>73%</td>
    </tr>
    <tr>
      <td></td><td>Personenwagen (M1)</td><td>2023</td>
      <td>2</td><td>42</td><td>0</td><td>0</td><td>0</td><td>39</td><td>0</td><td></td><td>83</td><td></td><td>47%</td><td>0%</td><td>53%</td><td>53%</td>
    </tr>
    <tr>
      <td>2024</td><td>Personenwagen (M1)</td><td>2024</td>
      <td>4</td><td>37</td><td>0</td><td>1</td><td>1</td><td>63</td><td>0</td><td></td><td>106</td><td></td><td>59%</td><td>1%</td><td>40%</td><td>40%</td>
    </tr>
    <tr>
      <td rowSpan={5}>Lieferwagen (N1)</td>
      <td>2020</td><td>Lieferwagen (N1)</td><td>2020</td>
      <td>0</td><td>20</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td></td><td>20</td><td></td><td>0%</td><td>0%</td><td>100%</td><td>100%</td>
    </tr>
    <tr>
      <td></td><td>Lieferwagen (N1)</td><td>2021</td>
      <td>0</td><td>2</td><td>0</td><td>0</td><td>0</td><td>5</td><td>0</td><td></td><td>7</td><td></td><td>71%</td><td>0%</td><td>29%</td><td>29%</td>
    </tr>
    <tr>
      <td>2022</td><td>Lieferwagen (N1)</td><td>2022</td>
      <td>0</td><td>6</td><td>0</td><td>0</td><td>0</td><td>5</td><td>0</td><td></td><td>11</td><td></td><td>45%</td><td>0%</td><td>55%</td><td>55%</td>
    </tr>
    <tr>
      <td></td><td>Lieferwagen (N1)</td><td>2023</td>
      <td>0</td><td>13</td><td>0</td><td>0</td><td>0</td><td>6</td><td>0</td><td></td><td>19</td><td></td><td>32%</td><td>0%</td><td>68%</td><td>68%</td>
    </tr>
    <tr>
      <td>2024</td><td>Lieferwagen (N1)</td><td>2024</td>
      <td>1</td><td>6</td><td>0</td><td>0</td><td>0</td><td>2</td><td>0</td><td></td><td>9</td><td></td><td>22%</td><td>0%</td><td>78%</td><td>78%</td>
    </tr>
    <tr>
      <td rowSpan={5}>Schwere Nutzfahrzeuge (N2, N3)</td>
      <td>2020</td><td>Schwere Nutzfahrzeuge (N2,N3)</td><td>2020</td>
      <td>0</td><td>5</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td></td><td>5</td><td></td><td>0%</td><td>0%</td><td>100%</td><td>100%</td>
    </tr>
    <tr>
      <td></td><td>Schwere Nutzfahrzeuge (N2,N3)</td><td>2021</td>
      <td>0</td><td>10</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td></td><td>10</td><td></td><td>0%</td><td>0%</td><td>100%</td><td>100%</td>
    </tr>
    <tr>
      <td>2022</td><td>Schwere Nutzfahrzeuge (N2,N3)</td><td>2022</td>
      <td>0</td><td>9</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td></td><td>9</td><td></td><td>0%</td><td>0%</td><td>100%</td><td>100%</td>
    </tr>
    <tr>
      <td></td><td>Schwere Nutzfahrzeuge (N2,N3)</td><td>2023</td>
      <td>0</td><td>5</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td></td><td>5</td><td></td><td>0%</td><td>0%</td><td>100%</td><td>100%</td>
    </tr>
    <tr>
      <td>2024</td><td>Schwere Nutzfahrzeuge (N2,N3)</td><td>2024</td>
      <td>0</td><td>7</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td></td><td>7</td><td></td><td>0%</td><td>0%</td><td>100%</td><td>100%</td>
    </tr>
    <tr>
      <td></td><td></td><td>Alle Fahrzeuge</td><td>2020</td>
      <td>3</td><td>78</td><td>0</td><td>8</td><td>27</td><td>3</td><td>2</td><td></td><td>121</td><td></td><td>4%</td><td>22%</td><td>74%</td><td>96%</td>
    </tr>
    <tr>
      <td></td><td></td><td>Alle Fahrzeuge</td><td>2021</td>
      <td>3</td><td>49</td><td>0</td><td>3</td><td>9</td><td>22</td><td>0</td><td></td><td>86</td><td></td><td>26%</td><td>10%</td><td>64%</td><td>74%</td>
    </tr>
    <tr>
      <td></td><td></td><td>Alle Fahrzeuge</td><td>2022</td>
      <td>2</td><td>55</td><td>0</td><td>0</td><td>6</td><td>23</td><td>0</td><td></td><td>86</td><td></td><td>27%</td><td>7%</td><td>66%</td><td>73%</td>
    </tr>
    <tr>
      <td></td><td></td><td>Alle Fahrzeuge</td><td>2023</td>
      <td>2</td><td>60</td><td>0</td><td>0</td><td>0</td><td>45</td><td>0</td><td></td><td>107</td><td></td><td>42%</td><td>0%</td><td>58%</td><td>58%</td>
    </tr>
    <tr>
      <td></td><td></td><td>Alle Fahrzeuge</td><td>2024</td>
      <td>5</td><td>50</td><td>0</td><td>1</td><td>1</td><td>65</td><td>0</td><td></td><td>122</td><td></td><td>53%</td><td>1%</td><td>46%</td><td>47%</td>
    </tr>
  </tbody>
</table>
</DataCard>

<DataCard title="Ziel: Eine OGD-konforme CSV-Datei" header={<>Die Datei wurde nach den <a href="/ogd-handbook/daten_struktur_format/datenstruktur">Prinzipien von Tidy Data</a> aufbereitet. Jede Zeile ist eine Beobachtung, jede Spalte eine Variable - keine zusammengefassten Zellen, keine Totale, keine Prozentwerte. So kann die Datei direkt maschinell weiterverarbeitet werden.</>} previewHeight={300}>
<table>
  <thead>
    <tr>
      <th>fahrzeugtyp_bezeichnung</th>
      <th>jahr</th>
      <th>treibstoff_bezeichnung</th>
      <th>anzahl</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Lieferwagen (N1)</td><td>2020</td><td>Batterieelektrisch</td><td>0</td></tr>
    <tr><td>Lieferwagen (N1)</td><td>2020</td><td>Benzin</td><td>0</td></tr>
    <tr><td>Lieferwagen (N1)</td><td>2020</td><td>Brennstoffzelle</td><td>0</td></tr>
    <tr><td>Lieferwagen (N1)</td><td>2020</td><td>Diesel</td><td>20</td></tr>
    <tr><td>Lieferwagen (N1)</td><td>2020</td><td>Gas</td><td>0</td></tr>
    <tr><td>Lieferwagen (N1)</td><td>2020</td><td>Hybrid</td><td>0</td></tr>
    <tr><td>Lieferwagen (N1)</td><td>2020</td><td>Plug-in Hybrid</td><td>0</td></tr>
    <tr><td>Lieferwagen (N1)</td><td>2021</td><td>Batterieelektrisch</td><td>5</td></tr>
    <tr><td>Lieferwagen (N1)</td><td>2021</td><td>Benzin</td><td>0</td></tr>
    <tr><td>Lieferwagen (N1)</td><td>2021</td><td>Brennstoffzelle</td><td>0</td></tr>
    <tr><td>Lieferwagen (N1)</td><td>2021</td><td>Diesel</td><td>2</td></tr>
    <tr><td>Lieferwagen (N1)</td><td>2021</td><td>Gas</td><td>0</td></tr>
    <tr><td>Lieferwagen (N1)</td><td>2021</td><td>Hybrid</td><td>0</td></tr>
    <tr><td>Lieferwagen (N1)</td><td>2021</td><td>Plug-in Hybrid</td><td>0</td></tr>
    <tr><td>Lieferwagen (N1)</td><td>2022</td><td>Batterieelektrisch</td><td>5</td></tr>
    <tr><td>Lieferwagen (N1)</td><td>2022</td><td>Benzin</td><td>0</td></tr>
    <tr><td>Lieferwagen (N1)</td><td>2022</td><td>Brennstoffzelle</td><td>0</td></tr>
    <tr><td>Lieferwagen (N1)</td><td>2022</td><td>Diesel</td><td>6</td></tr>
    <tr><td>Lieferwagen (N1)</td><td>2022</td><td>Gas</td><td>0</td></tr>
    <tr><td>Lieferwagen (N1)</td><td>2022</td><td>Hybrid</td><td>0</td></tr>
    <tr><td>Lieferwagen (N1)</td><td>2022</td><td>Plug-in Hybrid</td><td>0</td></tr>
    <tr><td>Lieferwagen (N1)</td><td>2023</td><td>Batterieelektrisch</td><td>6</td></tr>
    <tr><td>Lieferwagen (N1)</td><td>2023</td><td>Benzin</td><td>0</td></tr>
    <tr><td>Lieferwagen (N1)</td><td>2023</td><td>Brennstoffzelle</td><td>0</td></tr>
    <tr><td>Lieferwagen (N1)</td><td>2023</td><td>Diesel</td><td>13</td></tr>
    <tr><td>Lieferwagen (N1)</td><td>2023</td><td>Gas</td><td>0</td></tr>
    <tr><td>Lieferwagen (N1)</td><td>2023</td><td>Hybrid</td><td>0</td></tr>
    <tr><td>Lieferwagen (N1)</td><td>2023</td><td>Plug-in Hybrid</td><td>0</td></tr>
    <tr><td>Lieferwagen (N1)</td><td>2024</td><td>Batterieelektrisch</td><td>2</td></tr>
    <tr><td>Lieferwagen (N1)</td><td>2024</td><td>Benzin</td><td>1</td></tr>
    <tr><td>Lieferwagen (N1)</td><td>2024</td><td>Brennstoffzelle</td><td>0</td></tr>
    <tr><td>Lieferwagen (N1)</td><td>2024</td><td>Diesel</td><td>6</td></tr>
    <tr><td>Lieferwagen (N1)</td><td>2024</td><td>Gas</td><td>0</td></tr>
    <tr><td>Lieferwagen (N1)</td><td>2024</td><td>Hybrid</td><td>0</td></tr>
    <tr><td>Lieferwagen (N1)</td><td>2024</td><td>Plug-in Hybrid</td><td>0</td></tr>
    <tr><td>Personenwagen (M1)</td><td>2020</td><td>Batterieelektrisch</td><td>3</td></tr>
    <tr><td>Personenwagen (M1)</td><td>2020</td><td>Benzin</td><td>3</td></tr>
    <tr><td>Personenwagen (M1)</td><td>2020</td><td>Brennstoffzelle</td><td>2</td></tr>
    <tr><td>Personenwagen (M1)</td><td>2020</td><td>Diesel</td><td>53</td></tr>
    <tr><td>Personenwagen (M1)</td><td>2020</td><td>Gas</td><td>0</td></tr>
    <tr><td>Personenwagen (M1)</td><td>2020</td><td>Hybrid</td><td>8</td></tr>
    <tr><td>Personenwagen (M1)</td><td>2020</td><td>Plug-in Hybrid</td><td>27</td></tr>
    <tr><td>Personenwagen (M1)</td><td>2021</td><td>Batterieelektrisch</td><td>17</td></tr>
    <tr><td>Personenwagen (M1)</td><td>2021</td><td>Benzin</td><td>3</td></tr>
    <tr><td>Personenwagen (M1)</td><td>2021</td><td>Brennstoffzelle</td><td>0</td></tr>
    <tr><td>Personenwagen (M1)</td><td>2021</td><td>Diesel</td><td>37</td></tr>
    <tr><td>Personenwagen (M1)</td><td>2021</td><td>Gas</td><td>0</td></tr>
    <tr><td>Personenwagen (M1)</td><td>2021</td><td>Hybrid</td><td>3</td></tr>
    <tr><td>Personenwagen (M1)</td><td>2021</td><td>Plug-in Hybrid</td><td>9</td></tr>
    <tr><td>Personenwagen (M1)</td><td>2022</td><td>Batterieelektrisch</td><td>18</td></tr>
    <tr><td>Personenwagen (M1)</td><td>2022</td><td>Benzin</td><td>2</td></tr>
    <tr><td>Personenwagen (M1)</td><td>2022</td><td>Brennstoffzelle</td><td>0</td></tr>
    <tr><td>Personenwagen (M1)</td><td>2022</td><td>Diesel</td><td>40</td></tr>
    <tr><td>Personenwagen (M1)</td><td>2022</td><td>Gas</td><td>0</td></tr>
    <tr><td>Personenwagen (M1)</td><td>2022</td><td>Hybrid</td><td>0</td></tr>
    <tr><td>Personenwagen (M1)</td><td>2022</td><td>Plug-in Hybrid</td><td>6</td></tr>
    <tr><td>Personenwagen (M1)</td><td>2023</td><td>Batterieelektrisch</td><td>39</td></tr>
    <tr><td>Personenwagen (M1)</td><td>2023</td><td>Benzin</td><td>2</td></tr>
    <tr><td>Personenwagen (M1)</td><td>2023</td><td>Brennstoffzelle</td><td>0</td></tr>
    <tr><td>Personenwagen (M1)</td><td>2023</td><td>Diesel</td><td>42</td></tr>
    <tr><td>Personenwagen (M1)</td><td>2023</td><td>Gas</td><td>0</td></tr>
    <tr><td>Personenwagen (M1)</td><td>2023</td><td>Hybrid</td><td>0</td></tr>
    <tr><td>Personenwagen (M1)</td><td>2023</td><td>Plug-in Hybrid</td><td>0</td></tr>
    <tr><td>Personenwagen (M1)</td><td>2024</td><td>Batterieelektrisch</td><td>63</td></tr>
    <tr><td>Personenwagen (M1)</td><td>2024</td><td>Benzin</td><td>4</td></tr>
    <tr><td>Personenwagen (M1)</td><td>2024</td><td>Brennstoffzelle</td><td>0</td></tr>
    <tr><td>Personenwagen (M1)</td><td>2024</td><td>Diesel</td><td>37</td></tr>
    <tr><td>Personenwagen (M1)</td><td>2024</td><td>Gas</td><td>0</td></tr>
    <tr><td>Personenwagen (M1)</td><td>2024</td><td>Hybrid</td><td>1</td></tr>
    <tr><td>Personenwagen (M1)</td><td>2024</td><td>Plug-in Hybrid</td><td>1</td></tr>
    <tr><td>Schwere Nutzfahrzeuge (N2/N3)</td><td>2020</td><td>Batterieelektrisch</td><td>0</td></tr>
    <tr><td>Schwere Nutzfahrzeuge (N2/N3)</td><td>2020</td><td>Benzin</td><td>0</td></tr>
    <tr><td>Schwere Nutzfahrzeuge (N2/N3)</td><td>2020</td><td>Brennstoffzelle</td><td>0</td></tr>
    <tr><td>Schwere Nutzfahrzeuge (N2/N3)</td><td>2020</td><td>Diesel</td><td>5</td></tr>
    <tr><td>Schwere Nutzfahrzeuge (N2/N3)</td><td>2020</td><td>Gas</td><td>0</td></tr>
    <tr><td>Schwere Nutzfahrzeuge (N2/N3)</td><td>2020</td><td>Hybrid</td><td>0</td></tr>
    <tr><td>Schwere Nutzfahrzeuge (N2/N3)</td><td>2020</td><td>Plug-in Hybrid</td><td>0</td></tr>
    <tr><td>Schwere Nutzfahrzeuge (N2/N3)</td><td>2021</td><td>Batterieelektrisch</td><td>0</td></tr>
    <tr><td>Schwere Nutzfahrzeuge (N2/N3)</td><td>2021</td><td>Benzin</td><td>0</td></tr>
    <tr><td>Schwere Nutzfahrzeuge (N2/N3)</td><td>2021</td><td>Brennstoffzelle</td><td>0</td></tr>
    <tr><td>Schwere Nutzfahrzeuge (N2/N3)</td><td>2021</td><td>Diesel</td><td>10</td></tr>
    <tr><td>Schwere Nutzfahrzeuge (N2/N3)</td><td>2021</td><td>Gas</td><td>0</td></tr>
    <tr><td>Schwere Nutzfahrzeuge (N2/N3)</td><td>2021</td><td>Hybrid</td><td>0</td></tr>
    <tr><td>Schwere Nutzfahrzeuge (N2/N3)</td><td>2021</td><td>Plug-in Hybrid</td><td>0</td></tr>
    <tr><td>Schwere Nutzfahrzeuge (N2/N3)</td><td>2022</td><td>Batterieelektrisch</td><td>0</td></tr>
    <tr><td>Schwere Nutzfahrzeuge (N2/N3)</td><td>2022</td><td>Benzin</td><td>0</td></tr>
    <tr><td>Schwere Nutzfahrzeuge (N2/N3)</td><td>2022</td><td>Brennstoffzelle</td><td>0</td></tr>
    <tr><td>Schwere Nutzfahrzeuge (N2/N3)</td><td>2022</td><td>Diesel</td><td>9</td></tr>
    <tr><td>Schwere Nutzfahrzeuge (N2/N3)</td><td>2022</td><td>Gas</td><td>0</td></tr>
    <tr><td>Schwere Nutzfahrzeuge (N2/N3)</td><td>2022</td><td>Hybrid</td><td>0</td></tr>
    <tr><td>Schwere Nutzfahrzeuge (N2/N3)</td><td>2022</td><td>Plug-in Hybrid</td><td>0</td></tr>
    <tr><td>Schwere Nutzfahrzeuge (N2/N3)</td><td>2023</td><td>Batterieelektrisch</td><td>0</td></tr>
    <tr><td>Schwere Nutzfahrzeuge (N2/N3)</td><td>2023</td><td>Benzin</td><td>0</td></tr>
    <tr><td>Schwere Nutzfahrzeuge (N2/N3)</td><td>2023</td><td>Brennstoffzelle</td><td>0</td></tr>
    <tr><td>Schwere Nutzfahrzeuge (N2/N3)</td><td>2023</td><td>Diesel</td><td>5</td></tr>
    <tr><td>Schwere Nutzfahrzeuge (N2/N3)</td><td>2023</td><td>Gas</td><td>0</td></tr>
    <tr><td>Schwere Nutzfahrzeuge (N2/N3)</td><td>2023</td><td>Hybrid</td><td>0</td></tr>
    <tr><td>Schwere Nutzfahrzeuge (N2/N3)</td><td>2023</td><td>Plug-in Hybrid</td><td>0</td></tr>
    <tr><td>Schwere Nutzfahrzeuge (N2/N3)</td><td>2024</td><td>Batterieelektrisch</td><td>0</td></tr>
    <tr><td>Schwere Nutzfahrzeuge (N2/N3)</td><td>2024</td><td>Benzin</td><td>0</td></tr>
    <tr><td>Schwere Nutzfahrzeuge (N2/N3)</td><td>2024</td><td>Brennstoffzelle</td><td>0</td></tr>
    <tr><td>Schwere Nutzfahrzeuge (N2/N3)</td><td>2024</td><td>Diesel</td><td>7</td></tr>
    <tr><td>Schwere Nutzfahrzeuge (N2/N3)</td><td>2024</td><td>Gas</td><td>0</td></tr>
    <tr><td>Schwere Nutzfahrzeuge (N2/N3)</td><td>2024</td><td>Hybrid</td><td>0</td></tr>
    <tr><td>Schwere Nutzfahrzeuge (N2/N3)</td><td>2024</td><td>Plug-in Hybrid</td><td>0</td></tr>
  </tbody>
</table>
</DataCard>


## R-Tutorial: Von Excel zur OGD-konformen CSV-Datei

Folgendes R-Script zeigt Schritt für Schritt, wie die Excel-Datei in eine OGD-konforme CSV umgewandelt wird. Es dient als Inspiration und Vorlage für ähnliche Datensätze.


<DataCard title="R-Tutorial: Excel -> OGD" previewHeight={500}>

```r
# ============================================================
# Tutorial: Von Excel zu Open Government Data (CSV)
# ============================================================
# Ziel dieses Skripts:
# - Du liest eine Excel-Datei roh ein
# - Du entfernst leere Zeilen und Spalten
# - Du wählst die relevanten Spalten aus
# - Du vergibst klare Spaltennamen
# - Du formst die Tabelle von "breit" nach "lang" um
# - Du exportierst eine saubere CSV-Datei für OGD
#
# Benötigte Pakete:
# install.packages(c("readxl", "dplyr", "tidyr", "readr", "janitor"))
# ============================================================


# -----------------------------
# 1) Dateipfade festlegen
# -----------------------------
# Lege hier fest, wie deine Eingabe- und Ausgabedatei heissen.
# Am einfachsten ist es, wenn Excel-Datei und Quarto-Datei im gleichen Projekt liegen.

pfad_excel <- "data/AWEL_Beispiel.xlsx"
pfad_csv <- "data/Fahrzeugflotte_OGD.csv"


# -----------------------------
# 2) Excel-Datei roh einlesen
# -----------------------------
# Die Excel-Datei enthält am Anfang noch Titelzeilen und Leerzeilen.
# Darum lesen wir zuerst alles ohne feste Spaltennamen ein.

excel_roh <- readxl::read_excel(
  path = pfad_excel,
  sheet = 1,
  col_names = FALSE
)

# Optional: Rohdaten kurz ansehen
print(utils::head(excel_roh, 10))


# -----------------------------
# 3) Leere Zeilen und Spalten entfernen
# -----------------------------
# Excel-Dateien enthalten oft leere Zeilen oder leere Spalten am Rand.
# Diese brauchen wir für die weitere Verarbeitung nicht.

excel_roh <- excel_roh |>
  janitor::remove_empty("rows") |>
  janitor::remove_empty("cols")

# Optional: Bereinigte Rohdaten ansehen
print(utils::head(excel_roh, 10))


# -----------------------------
# 4) Relevante Spalten auswählen
# -----------------------------
# In dieser Beispieldatei stehen die relevanten Daten in den Spalten 3 bis 11:
# - Fahrzeugart
# - Jahr
# - 7 Spalten mit Antriebstechnologien

excel_relevant <- excel_roh |>
  dplyr::select(3:11)


# -----------------------------
# 5) Klare Spaltennamen setzen
# -----------------------------
# Die Excel-Datei bringt hier keine direkt brauchbaren Spaltennamen mit.
# Darum vergeben wir die Namen bewusst von Hand.

names(excel_relevant) <- c(
  "fahrzeugart",
  "jahr",
  "benzin",
  "diesel",
  "gas",
  "hybrid",
  "plug_in_hybrid",
  "batterieelektrisch",
  "brennstoffzelle"
)

# Optional: Spaltennamen prüfen
names(excel_relevant)


# -----------------------------
# 6) Nur echte Datenzeilen behalten
# -----------------------------
# Die ersten Zeilen enthalten noch Überschriften oder Titel.
# Echte Datenzeilen erkennst du hier daran, dass ein Jahr vorhanden ist.

excel_daten <- excel_relevant |>
  dplyr::filter(!is.na(jahr))



# -----------------------------
# 7) Summenzeilen entfernen
# -----------------------------
# In der Excel-Datei gibt es zusätzlich die Zeile "Alle Fahrzeuge".
# Diese wird in der publizierten OGD-Datei nicht verwendet. Dient höchstens der Kontrolle der abgeschlossenen Aufbereitung. 

excel_daten <- excel_daten |>
  dplyr::filter(fahrzeugart != "Alle Fahrzeuge")


# -----------------------------
# 8) Fahrzeugtyp vereinheitlichen
# -----------------------------
# Kleinere Unterschiede in der Schreibweise werden vereinheitlicht.

excel_daten <- excel_daten |>
  dplyr::mutate(
    fahrzeugart = dplyr::case_when(
      fahrzeugart == "Schwere Nutzfahrzeuge (N2,N3)" ~ "Schwere Nutzfahrzeuge (N2/N3)",
      TRUE ~ fahrzeugart
    )
  )


# -----------------------------
# 9) Von breit nach lang umformen
# -----------------------------
# Aus mehreren Spalten zu Antriebstechnologien wird:
# - eine Spalte mit der Technologie
# - eine Spalte mit dem Wert

ogd_daten <- excel_daten |>
  tidyr::pivot_longer(
    cols = c(
      benzin,
      diesel,
      gas,
      hybrid,
      plug_in_hybrid,
      batterieelektrisch,
      brennstoffzelle
    ),
    names_to = "antriebstechnologie",
    values_to = "anzahl_fzg"
  )


# -----------------------------
# 10) Namen der Antriebstechnologien lesbarer machen
# -----------------------------
# Die technischen Spaltennamen werden wieder in gut lesbare Werte umgewandelt.

ogd_daten <- ogd_daten |>
  dplyr::mutate(
    antriebstechnologie = dplyr::case_when(
      antriebstechnologie == "benzin" ~ "Benzin",
      antriebstechnologie == "diesel" ~ "Diesel",
      antriebstechnologie == "gas" ~ "Gas",
      antriebstechnologie == "hybrid" ~ "Hybrid",
      antriebstechnologie == "plug_in_hybrid" ~ "Plug-in Hybrid",
      antriebstechnologie == "batterieelektrisch" ~ "Batterieelektrisch",
      antriebstechnologie == "brennstoffzelle" ~ "Brennstoffzelle",
      TRUE ~ antriebstechnologie
    )
  )


# -----------------------------
# 11) Datentypen bereinigen
# -----------------------------
# Für OGD sollen Zahlen auch wirklich als Zahlen vorliegen. Dies ist auch eine Vorsichtsmassnahme.

ogd_daten <- ogd_daten |>
  dplyr::mutate(
    jahr = as.integer(jahr),
    anzahl_fzg = as.integer(anzahl_fzg)
  )


# -----------------------------
# 12) Lesbare Spaltennamen setzen
# -----------------------------
# Für die veröffentlichte Datei verwenden wir gut verständliche Namen.

ogd_daten <- ogd_daten |>
  dplyr::rename(
    Fahrzeugtyp = fahrzeugart,
    Jahr = jahr,
    Antriebstechnologie = antriebstechnologie,
    Anzahl_Fzg = anzahl_fzg
  )


# -----------------------------
# 13) Fehlende Werte prüfen
# -----------------------------
# Diese Prüfung hilft dir zu sehen, ob in der fertigen Tabelle
# noch wichtige Werte fehlen.

summe_na <- ogd_daten |>
  dplyr::summarise(
    fehlende_fahrzeugtypen = sum(is.na(Fahrzeugtyp)),
    fehlende_jahre = sum(is.na(Jahr)),
    fehlende_antriebe = sum(is.na(Antriebstechnologie)),
    fehlende_anzahl = sum(is.na(Anzahl_Fzg))
  )

print(summe_na)
cat("Anzahl Zeilen in der OGD-Tabelle:", nrow(ogd_daten), "\n")


# -----------------------------
# 14) Optional: Dubletten prüfen
# -----------------------------
# Dieser Schritt ist optional.
# Er zeigt dir, ob Kombinationen aus Fahrzeugtyp, Jahr und
# Antriebstechnologie mehrfach vorkommen.

duplikate <- ogd_daten |>
  janitor::get_dupes(Fahrzeugtyp, Jahr, Antriebstechnologie)

print(duplikate)


# -----------------------------
# 15) Sortieren
# -----------------------------
# Eine saubere Sortierung macht die Datei lesbarer.

ogd_daten <- ogd_daten |>
  dplyr::arrange(Fahrzeugtyp, Jahr, Antriebstechnologie)


# -----------------------------
# 16) CSV exportieren
# -----------------------------
# Die Datei wird als UTF-8-CSV geschrieben. MIT BOM um sie einfach in Excel zu öffnen.

readr::write_excel_csv2(
  x = ogd_daten,
  file = pfad_csv,
  na = ""
)

cat("Fertig. Die CSV-Datei wurde erstellt:", pfad_csv, "\n")


# -----------------------------
# 17) Ergebnis ansehen
# -----------------------------
print(utils::head(ogd_daten, 20))
```

</DataCard>


## R-Tutorial: Automatisierter Upload in den Datenkatalog

Die oben erstellte CSV-Datei wäre nun bereit um als OGD-Ressource in die Metadatenverwaltung hochgeladen zu werden. Wozu aber noch mühsam händisch die Datei hochladen, wenn wir doch auch alles in einem Rutsch per R-Skript machen könnten?

Mit nur wenigen Zeilen Code haben wir auch den Upload erledigt. Das Code-Beispiel folgt dabei grösstenteils dem readme des von uns zur Verfügung gestellten **[zhapir](https://github.com/openZH/zhapir).**


<DataCard title="R-Tutorial: zhapir" previewHeight={500}>

```r
# -----------------------------
# 18) Optional: Distribution in der MDV aktualisieren
# -----------------------------
# Dieser Schritt ist optional.
# Wenn du die fertige CSV-Datei direkt in der MDV nachführen willst,
# kannst du dafür das Paket zhapir verwenden.
#
# WICHTIG:
# - Du brauchst dafür einen gültigen API Key. Wie du diesen bekommst, steht im readme des Packages auf Github.
# - Der API Key muss als ZHAPIR_API_KEY in deiner .Renviron-Datei stehen.
# - Für produktive Änderungen immer use_dev = FALSE setzen.
#
# Installation bei Bedarf:
# remotes::install_github("openZH/zhapir")
#
# Trage hier die ID deiner bestehenden Distribution ein.
# Diese ID findest du in der grafischen Oberfläche des MDV.

distribution_id <- 12345

# Optional: nächstes geplantes Aktualisierungsdatum
naechstes_update <- "2026-01-01"

# Optional: Enddatum des aktuell beschriebenen Datenstands
enddatum <- "2025-12-31"

# Distribution aktualisieren und neue Datei hochladen
verteilung_update <- zhapir::update_distribution(
  id = distribution_id,
  file_path = pfad_csv,
  modified_next = naechstes_update,
  end_date = enddatum,
  use_dev = FALSE
)

print(verteilung_update)
cat("Die Distribution in der MDV wurde aktualisiert.\n")
```
</DataCard>

## Erklärung der wichtigsten Schritte

### Warum lesen wir die Excel-Datei zuerst roh ein?

Viele Excel-Dateien sind nicht so aufgebaut, dass die erste Zeile sofort als sauberer Tabellenkopf verwendet werden kann. In deinem Beispiel gibt es zuerst Überschriften, Strukturzeilen und leere Bereiche. Darum ist es einfacher, zuerst alles einzulesen und danach gezielt die relevanten Teile herauszunehmen.

### Warum verwenden wir `janitor::remove_empty()`?

Excel-Dateien enthalten oft leere Zeilen oder leere Spalten, die nur für das Layout da sind. `janitor::remove_empty()` entfernt diese Elemente früh im Prozess und macht die Tabelle einfacher weiterzuverarbeiten.

### Warum setzen wir die Spaltennamen hier von Hand?

In dieser Beispieldatei stehen die Daten zwar an einer gut erkennbaren Stelle, aber nicht in einer perfekt vorbereiteten Tabelle mit sofort nutzbaren Spaltennamen. Für ein Einsteiger-Tutorial ist es deshalb einfacher, zuerst die relevanten Spalten auszuwählen und ihnen dann bewusst klare Namen zu geben.

### Warum formen wir von breit nach lang um?

Breite Tabellen sind für Menschen oft gut lesbar. Für OGD und Datenverarbeitung ist eine lange Tabelle aber meistens besser.

Statt:
- eine Spalte für Benzin
- eine Spalte für Diesel
- eine Spalte für Gas

hast du dann:
- eine Spalte mit dem Namen der Technologie
- eine Spalte mit dem zugehörigen Wert

Das ist sauberer, standardisierter und einfacher auszuwerten.



## Typische Fehler und wie du damit umgehst

### Fehler 1: Datei wird nicht gefunden

Beispiel: `Error: path does not exist`

Dann stimmt meistens der Dateipfad nicht. Prüfe:

- Liegt die Excel-Datei im richtigen Ordner?
- Ist der Dateiname exakt richtig geschrieben?
- Stimmt die Dateiendung `.xlsx`?

### Fehler 2: Ein Paket fehlt

Beispiel: `there is no package called ...`

Dann installiere das fehlende Paket mit `install.packages(...)`.

### Fehler 3: Die ausgewählten Spalten passen nicht

Das Tutorial basiert auf einer konkreten Excel-Struktur. Wenn sich die Quelldatei im nächsten Jahr verändert, kann es sein, dass die relevanten Daten nicht mehr in den Spalten 3 bis 11 stehen.

Prüfe dann zuerst die Rohdaten mit: `print(utils::head(excel_roh, 10))` und passe danach die Spaltenauswahl in `dplyr::select()` an.

### Fehler 4: Eine Spalte wird nicht gefunden

Beispiel: `Can't select columns that don't exist`

Dann stimmen die Spaltennamen im Skript nicht mehr zur Excel-Datei. Prüfe mit: `names(excel_relevant)`.
Passe danach die Namen oder die Auswahl im Skript an.

### Fehler 5: zhapir kann nicht auf die MDV zugreifen. Fehler 401, 404 oder 500. 

Prüfe in diesem Fall:

- Ist das Paket `zhapir` installiert?
- Ist dein API Key als `ZHAPIR_API_KEY` in der `.Renviron` gespeichert?
- Hast du die R-Session nach dem Eintrag in `.Renviron` neu gestartet?
- Verwendest du die richtige ID für Datensatz oder Distribution?
- Ist `use_dev = FALSE` gesetzt, wenn du produktiv arbeiten willst?


## Was du ein LLM fragen kannst

Gerade am Anfang kann ein LLM sehr hilfreich sein. Gute Fragen sind zum Beispiel:

- „Erkläre mir diesen R-Code Zeile für Zeile.“
- „Warum brauche ich `pivot_longer()` in diesem Skript?“
- „Wie passe ich das Skript an, wenn meine Excel-Datei andere Spalten hat?“
- „Wie prüfe ich in R, ob meine OGD-Datei fehlende Werte enthält?“
- „Hilf mir, diese Fehlermeldung in R zu verstehen.“

Wichtig ist: Kopiere bei Problemen immer die **vollständige Fehlermeldung** mit. 


:::danger Noch wichtiger!

Kopiere keine internen oder vertraulichen Daten in das Chatfenster mit dem LLM.
:::


## Hinweis zum Beispiel

Dieses Tutorial basiert auf einer konkreten Excel-Struktur. Prüfe bei neuen Jahresdateien immer kurz,

- ob die relevanten Daten noch in denselben Spalten stehen,
- ob die Spaltennamen noch passen,
- und ob die fertige OGD-Tabelle plausibel ist.
