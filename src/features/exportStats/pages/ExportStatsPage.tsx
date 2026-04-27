import { ExportStatsImporter } from '../components/ExportStatsImporter';

export function ExportStatsPage() {
  return (
    <section className="page-card">
      <p className="eyebrow">MVP 0.1</p>
      <h2>ExportStats Importer</h2>
      <p>
        The app starts with the game's built-in ExportStats JSON. This avoids manual stat
        entry and creates the shared profile foundation for the Stats Inspector, Bomb / BoP
        tools, and future progression planning.
      </p>

      <ExportStatsImporter />
    </section>
  );
}
