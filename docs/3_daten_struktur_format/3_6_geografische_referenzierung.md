---
id: raeumliche-referenzierung
title: Räumliche Referenzierung
sidebar_label: Räumliche Referenzierung
sidebar_position: 6
---

# Räumliche Referenzierung

Viele Verwaltungsdaten haben einen räumlichen Bezug wie eine Gemeinde oder ein Bezirk. Damit diese Daten mit anderen Datensätzen verknüpft werden können (unabhängig von Schreibweisen oder Namensänderungen) sollen räumliche Angaben einheitlich referenziert werden. Die offiziellen Codes und Namen zu Gemeinden, Bezirken und Raumplanungsregionen des Kantons Zürich sind im Datenkatalog verfügbar: [Gebietsstammdaten | Datenkatalog Kanton Zürich](https://www.zh.ch/de/politik-staat/statistik-daten/datenkatalog.html#/datasets/3082@statistisches-amt-kanton-zuerich)

Empfohlen wird, den Code sowie die Bezeichnung in je einer separaten Spalte anzugeben.

Wenn eine Distribution mehrere Gebietstypen enthält (z.B. Bezirke und Gemeinden), sollen sowohl `gebietstyp_code` als auch `gebiet_code` angegeben werden, damit jeder Eintrag eindeutig identifizierbar ist:

| jahr | gebietstyp_code | gebietstyp_name | gebiet_code | gebiet_name | ... |
|------|-----------------|-----------------|-------------|-------------|-----|
| 2000 | 2 | Bezirk | 101 | Bezirk Affoltern | ... |
| 2000 | 3 | Gemeinde | 230 | Winterthur | ... |

Enthält die Distribution nur einen Gebietstyp, kann die Gebietstyp-Spalte weggelassen werden:

| jahr | gemeinde_code | gemeinde_name | ... |
|------|-------------|-------------|-----|
| 2023 | 261 | Zürich | ... |
| 2023 | 230 | Winterthur | ... |
