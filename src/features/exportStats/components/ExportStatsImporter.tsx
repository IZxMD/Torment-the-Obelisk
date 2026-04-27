import { useEffect, useState } from 'react';
import type { IdleObeliskExportStats } from '../types';
import { parseExportStats } from '../logic/parseExportStats';
import {
  clearExportStats,
  loadExportStats,
  saveExportStats,
} from '../logic/exportStatsStorage';

export function ExportStatsImporter() {
  const [rawInput, setRawInput] = useState('');
  const [profile, setProfile] = useState<IdleObeliskExportStats | null>(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const saved = loadExportStats();

    if (saved) {
      setProfile(saved);
      setRawInput(JSON.stringify(saved, null, 2));
      setMessage('Gespeicherter ExportStats-Import wurde geladen.');
    }
  }, []);

  function handleImport() {
    const result = parseExportStats(rawInput);

    if (!result.ok) {
      setMessage(result.error);
      return;
    }

    saveExportStats(result.data);
    setProfile(result.data);
    setMessage(
      `Import erfolgreich: ${result.statCount} Stats aus ${result.data.version} erkannt.`,
    );
  }

  function handleClear() {
    clearExportStats();
    setRawInput('');
    setProfile(null);
    setMessage('Import wurde gelöscht.');
  }

  const statCount = profile ? Object.keys(profile.stats).length : 0;

  return (
    <section className="content-section">
      <h3>ExportStats JSON</h3>
      <p>
        Füge den ExportStats-JSON aus Idle Obelisk Miner ein. Diese Daten werden lokal im
        Browser gespeichert und später von Rechnern, Progression-Planer und Guides genutzt.
      </p>

      <textarea
        className="json-input"
        value={rawInput}
        onChange={(event) => setRawInput(event.target.value)}
        placeholder='{"version":"v2.1.6","stats":{...},"time":12345}'
        spellCheck={false}
      />

      <div className="button-row">
        <button type="button" onClick={handleImport}>
          Importieren
        </button>
        <button type="button" className="secondary-button" onClick={handleClear}>
          Löschen
        </button>
      </div>

      {message && <p className="message">{message}</p>}

      {profile && (
        <div className="summary-card">
          <h4>Profil erkannt</h4>
          <dl>
            <div>
              <dt>Game-Version</dt>
              <dd>{profile.version}</dd>
            </div>
            <div>
              <dt>Stats</dt>
              <dd>{statCount}</dd>
            </div>
            <div>
              <dt>Export-Time</dt>
              <dd>{profile.time.toFixed(2)}</dd>
            </div>
          </dl>
        </div>
      )}
    </section>
  );
}
