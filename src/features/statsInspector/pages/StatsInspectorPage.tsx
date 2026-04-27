import { StatsInspector } from '../components/StatsInspector';

export function StatsInspectorPage() {
  return (
    <section className="page-card">
      <p className="eyebrow">MVP 0.2</p>
      <h2>Stats Inspector</h2>
      <p>
        The Stats Inspector is the bridge between raw ExportStats JSON and future modules. It
        helps us search, group, and review imported stat keys before we build calculators on top
        of them.
      </p>

      <StatsInspector />
    </section>
  );
}
