import type { IdleObeliskExportStats, ParsedExportStatsResult } from '../types';

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export function parseExportStats(input: string): ParsedExportStatsResult {
  if (!input.trim()) {
    return {
      ok: false,
      error: 'Bitte füge zuerst den ExportStats-JSON ein.',
    };
  }

  let parsed: unknown;

  try {
    parsed = JSON.parse(input);
  } catch {
    return {
      ok: false,
      error: 'Das ist kein gültiger JSON. Prüfe, ob alles vollständig kopiert wurde.',
    };
  }

  if (!isObject(parsed)) {
    return {
      ok: false,
      error: 'Der Import muss ein JSON-Objekt sein.',
    };
  }

  if (typeof parsed.version !== 'string') {
    return {
      ok: false,
      error: 'Der Import enthält keine gültige "version".',
    };
  }

  if (!isObject(parsed.stats)) {
    return {
      ok: false,
      error: 'Der Import enthält kein gültiges "stats"-Objekt.',
    };
  }

  if (typeof parsed.time !== 'number') {
    return {
      ok: false,
      error: 'Der Import enthält keinen gültigen "time"-Wert.',
    };
  }

  const invalidStats = Object.entries(parsed.stats).filter(
    ([, value]) => typeof value !== 'number' || Number.isNaN(value),
  );

  if (invalidStats.length > 0) {
    return {
      ok: false,
      error: `Der Import enthält ungültige Stat-Werte. Beispiel: "${invalidStats[0][0]}".`,
    };
  }

  const data: IdleObeliskExportStats = {
    version: parsed.version,
    stats: parsed.stats as Record<string, number>,
    time: parsed.time,
  };

  return {
    ok: true,
    data,
    statCount: Object.keys(data.stats).length,
  };
}
