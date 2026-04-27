# Torment the Obelisk

Browser-based simulators, calculators, and progression tools for **Idle Obelisk Miner**.

This is an unofficial fan-made tool. It is not affiliated with the game developers or wiki maintainers.

## Project goal

Build a mobile-first web app that starts from Idle Obelisk Miner's built-in `ExportStats` JSON and turns fragmented calculators/spreadsheets into guided, centralized tools.

## Current roadmap

1. ExportStats Importer
2. Stats Inspector
3. Bomb / Transmuter / Bomb of Plenty Lite
4. Progression Tracker / Planner / Guide
5. Step-by-step spreadsheet replacement modules

## Current milestone

MVP 0.1: import, validate, persist, and summarize ExportStats JSON.

## Planned modules

- ExportStats Importer
- Stats Inspector
- Bomb / Transmuter / Bomb of Plenty Lite
- Progression Tracker / Planner / Guide
- Total Resources Lite
- Archaeology data/tools later, where useful

## Tech stack

- Vite
- React
- TypeScript
- React Router
- StackBlitz as the primary browser IDE
- GitHub for repository/versioning

## Data workflow

- Primary player/profile input: in-game `ExportStats` JSON
- Source material for static game data: MediaWiki XML export of the Idle Obelisk Miner Wiki
- Source-grounded extraction: NotebookLM
- Planning, architecture, implementation guidance: ChatGPT 5.5 Thinking
- External validation and research: Perplexity Sonar when needed
- Larger repository tasks/refactoring/tests: Codex when needed

## Development

```bash
npm install
npm run dev
npm run build
```
