import { useMemo, useState } from 'react';
import { loadExportStats } from '../../exportStats/logic/exportStatsStorage';
import {
  classifyStats,
  filterClassifiedStats,
  summarizeClassifiedStats,
} from '../logic/classifyStats';
import { STAT_CATEGORIES } from '../logic/statCategories';

function formatStatValue(value: number): string {
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 4,
  }).format(value);
}

export function StatsInspector() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryId, setCategoryId] = useState('all');
  const profile = loadExportStats();

  const classifiedStats = useMemo(
    () => (profile ? classifyStats(profile.stats) : []),
    [profile],
  );

  const summary = useMemo(
    () => summarizeClassifiedStats(classifiedStats),
    [classifiedStats],
  );

  const filteredStats = useMemo(
    () => filterClassifiedStats(classifiedStats, searchTerm, categoryId),
    [classifiedStats, searchTerm, categoryId],
  );

  if (!profile) {
    return (
      <section className="content-section">
        <h3>No ExportStats profile loaded</h3>
        <p>
          Import an ExportStats JSON first. The Stats Inspector reads the saved profile from
          the browser and turns the raw stat keys into a searchable overview.
        </p>
      </section>
    );
  }

  return (
    <section className="content-section">
      <h3>Imported profile</h3>
      <div className="summary-grid">
        <article>
          <span>Game version</span>
          <strong>{profile.version}</strong>
        </article>
        <article>
          <span>Total stats</span>
          <strong>{summary.totalStats}</strong>
        </article>
        <article>
          <span>Likely mapped</span>
          <strong>{summary.knownStats}</strong>
        </article>
        <article>
          <span>Needs mapping</span>
          <strong>{summary.unknownStats}</strong>
        </article>
        <article>
          <span>Likely important</span>
          <strong>{summary.importantStats}</strong>
        </article>
      </div>

      <div className="inspector-controls" aria-label="Stats Inspector filters">
        <label>
          Search stats
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search key, value, or category"
          />
        </label>

        <label>
          Category
          <select value={categoryId} onChange={(event) => setCategoryId(event.target.value)}>
            <option value="all">All categories</option>
            {STAT_CATEGORIES.map((category) => (
              <option key={category.id} value={category.id}>
                {category.label}
              </option>
            ))}
            <option value="unknown">Unknown / unmapped</option>
          </select>
        </label>
      </div>

      <p className="helper-text">
        This first Inspector uses keyword-based grouping only. It is intentionally conservative:
        unknown stats stay visible instead of being guessed into the wrong system.
      </p>

      <div className="table-wrapper stats-table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Stat key</th>
              <th>Value</th>
              <th>Category</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {filteredStats.map((entry) => (
              <tr key={entry.key}>
                <td data-label="Stat key">
                  <code>{entry.key}</code>
                </td>
                <td data-label="Value">{formatStatValue(entry.value)}</td>
                <td data-label="Category">
                  <span className={`category-pill category-${entry.category.id}`}>
                    {entry.category.label}
                  </span>
                </td>
                <td data-label="Priority">{entry.isLikelyImportant ? 'Review soon' : 'Later'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredStats.length === 0 && (
        <p className="message">No stats match the current search/filter.</p>
      )}
    </section>
  );
}
