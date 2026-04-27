import type { IdleObeliskExportStats } from '../types';

const STORAGE_KEY = 'torment-the-obelisk.exportStats';

export function saveExportStats(data: IdleObeliskExportStats): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function loadExportStats(): IdleObeliskExportStats | null {
  const raw = localStorage.getItem(STORAGE_KEY);

  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as IdleObeliskExportStats;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return null;
  }
}

export function clearExportStats(): void {
  localStorage.removeItem(STORAGE_KEY);
}
