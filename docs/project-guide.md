# Project Guide: Torment the Obelisk

## Role of this repository

This repository contains a browser-based simulator and calculator project for Idle Obelisk Miner.

## Core workflow

- Planning and architecture: ChatGPT 5.5 Thinking inside the OB project
- Source-grounded extraction: NotebookLM using the MediaWiki XML export
- Versioning: GitHub
- Browser IDE: StackBlitz
- Browser-based execution: StackBlitz/WebContainers
- Larger repository tasks: Codex
- External research and validation: Perplexity Sonar when needed

## Architecture principles

1. Keep data, logic, and UI separate.
2. Store extracted wiki data as typed TypeScript data.
3. Keep simulator formulas in dedicated logic files.
4. Add calculations only after source data is validated.
5. Grow module by module instead of building a large app at once.

## Initial milestone

MVP 0.1:

- Vite React TypeScript scaffold
- Multi-page navigation
- Home page
- Archaeology placeholder page
- Initial typed data model for Archaeology

## First module

Archaeology Sim.

Planned order:

1. Data viewer for extracted wiki tables
2. Basic stat/input panel
3. Upgrade level input
4. Damage/reward calculations
5. Stage simulation
6. Build presets and comparison
