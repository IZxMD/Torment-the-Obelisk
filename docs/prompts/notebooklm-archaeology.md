# NotebookLM Prompt: Archaeology Extraction

Use this prompt with the MediaWiki XML export of the Idle Obelisk Miner Wiki.

```text
Du analysierst einen MediaWiki-XML-Export des Idle Obelisk Miner Wiki.

Fokus: Archaeology.

Extrahiere ausschließlich quellengebundene Informationen aus den Wiki-Daten. Erfinde keine Formeln, Werte oder Mechaniken.

Aufgabe:

1. Finde alle Seiten und Abschnitte, die direkt zu Archaeology gehören.
2. Extrahiere die folgenden Bereiche:
   - In-game description
   - Strategy
   - Skills
   - Abilities
   - Ascension
   - Mod Chances
   - Crosshairs
   - Upgrades
   - Upgrade Costs
   - Idols
   - Block Stats
   - Block Spawn Chance
   - Boss Floors
3. Gib alle Tabellen als strukturierte Tabellen aus.
4. Nenne für jede Tabelle:
   - Wiki-Seite
   - Abschnittsüberschrift
   - relevante Unterüberschrift
   - ob Werte direkt aus der Tabelle stammen oder interpretiert wurden
   - Unsicherheiten oder Hinweise
5. Markiere alle Werte, die für einen Simulator relevant sind.
6. Markiere alle Werte, die nur erklärend oder strategisch sind.
7. Erstelle am Ende eine Liste möglicher Datenmodelle für eine TypeScript-App.

Wichtig:
- Keine freien Annahmen.
- Keine Optimierungsratschläge.
- Keine Zusammenfassung ohne Tabellen.
- Bei unklaren Formeln bitte "unklar" schreiben.
```
