export function HomePage() {
  return (
    <section className="page-card">
      <p className="eyebrow">Project start</p>
      <h2>Browser-based calculators for Idle Obelisk Miner</h2>
      <p>
        This app will grow into a multi-page simulator and calculator project. The first
        module is an updated Archaeology Sim based on source-grounded wiki extraction.
      </p>
      <div className="milestone-grid">
        <article>
          <h3>Current milestone</h3>
          <p>MVP 0.1: project scaffold, navigation, and placeholder Archaeology module.</p>
        </article>
        <article>
          <h3>Data workflow</h3>
          <p>NotebookLM extracts wiki data; TypeScript stores validated app data.</p>
        </article>
      </div>
    </section>
  );
}
