# Empfehlung
In Ergänzung zu den Publikationsleitlinien empfehlen wir oft wiederkehrende Variablen/Merkmale einheitlich zu benennen und und anzugeben. Dies dient der Interoperabilität und letztlich der einfachen Nutzung der Daten. Wir empfehlen diese Form dann, wenn das Umformen von Daten mit wenig Aufwand im Daten Management oder vor der Publikation zu machen ist.

## 1. Template

**Data** <br>

>**https://github.com/openZH/environmental_report_ZH/blob/master/template/template_ogd.csv** <br>
>*Description:* .. <br>
>*Update frequency:* .. <br>
>*Spatial unit:* mixed <br>
>*Format:* csv <br>

**Metadata**

| Fieldname / Spaltenname                       | Description (EN)                               | Beschreibung (DE)                        | Format     |
|-----------------------------------------------|------------------------------------------------|------------------------------------------|------------|
| indikator_name                                | what this indicator describes                  | was dieser Indikator beschreibt          | character  |
| raumeinheit                                   | spatial level: municipality, district, canton  | räumliche Ebene: Gemeinde, Bezirk, Kanton| character  |
| gebiet_name                                   | Name of raumeinheit                            | Name der Raumeinheit                     | character  |
| bfs_nr                                        | Number given to municipality by BFS            | Gemeindenummer des BFS                   | integer    |
| jahr                                          | yyyy                                           | yyyy                                     | integer    |
| messgegenstand/etc.| specifics of this observation. Choose the name of this variable as descriptive as possible. Several variables of this kind possible per dataset   | Details dieses Datenpunkts. Wähle einen möglichst sprechenden Namen. Diese Variabelart kann mehrfach vorkommen.               | character  |
| value                                         | value of this obersvation                      | Wert dieses Datenpunkts                  | numeric    |
| einheit                                       | measuring unit of value                        | Messeinheit von value                    | character  |
| latitude_WGS84                                | (preferred) latitude in [World Geodetic System](https://de.wikipedia.org/wiki/World_Geodetic_System)            | (bevorzugt) Breitengrad nach [World Geodetic System](https://de.wikipedia.org/wiki/World_Geodetic_System)                      | numeric         |
| longitude_WGS84          | (preferred) longitude in [World Geodetic System](https://de.wikipedia.org/wiki/World_Geodetic_System)            | (bevorzugt) Längengrad nach [World Geodetic System](https://de.wikipedia.org/wiki/World_Geodetic_System)                      | numeric         |
| latitude_LV95                                 | latitude in [Swiss coordinate system](https://en.wikipedia.org/wiki/Swiss_coordinate_system)            | Breitengrad nach [LV95](https://de.wikipedia.org/wiki/Schweizer_Landeskoordinaten)                      | numeric         |
| longitude_LV95          | longitude in [Swiss coordinate system](https://en.wikipedia.org/wiki/Swiss_coordinate_system)            | Längengrad nach [LV95](https://de.wikipedia.org/wiki/Schweizer_Landeskoordinaten)                      | numeric         |

Wir empfehlen die Variabelnamen so beizubehalten. Eine Ausnahme bildet messgegenstand/qualität/massnahme/etc. Diese Variable sollte sprechend benannt werden um aufzuzeigen, worum es sich beim Messobjekt/subjekt handelt bspw. energiequelle, wald_typ. Siehe [example.csv](https://github.com/openZH/environmental_report_ZH/blob/master/template/example.csv)

Die Angabe der Koordinaten im internationalen Bezugssystem WGS84 wird gegenüber dem Schweizerischen LV95 bevorzugt.
