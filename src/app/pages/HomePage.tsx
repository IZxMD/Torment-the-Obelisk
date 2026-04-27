export function HomePage() {
  return (
    <section className="page-card">
      <p className="eyebrow">Project start</p>
      <h2>ExportStats-first toolkit for Idle Obelisk Miner</h2>
      <p>
        Torment the Obelisk is a mobile-first web toolkit that starts from the game's
        ExportStats JSON. The goal is to turn fragmented calculators and spreadsheets into
        guided, centralized tools for stats inspection, bomb planning, and progression.
      </p>
      <div className="milestone-grid">
        <article>
          <h3>Current milestone</h3>
          <p>MVP 0.1: import, validate, persist, and summarize ExportStats JSON.</p>
        </article>
        <article>
          <h3>Next modules</h3>
          <p>Stats Inspector, Bomb / Transmuter / BoP Lite, then Progression Tracker.</p>
        </article>
        <article>
          <h3>Data workflow</h3>
          <p>Game export data comes first; wiki-derived data is added only where needed.</p>
        </article>
      </div>
    </section>
  );
}
