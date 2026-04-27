import type { ExportStatsMap } from '../../exportStats/types';
import type { ClassifiedStatEntry, StatsInspectorSummary } from '../types';
import { STAT_CATEGORIES, UNKNOWN_STAT_CATEGORY } from './statCategories';

const IMPORTANT_KEYWORDS = [
  'bomb',
  'transmuter',
  'plenty',
  'capacity',
  'damage',
  'recharge',
  'crit',
  'level',
  'floor',
  'world',
  'challenge',
  'unlock',
  'prestige',
  'obelisk',
];

function normalizeStatKey(key: string): string {
  return key.toLowerCase().replace(/[_-]+/g, ' ');
}

export function classifyStatEntry(key: string, value: number): ClassifiedStatEntry {
  const normalizedKey = normalizeStatKey(key);
  const category =
    STAT_CATEGORIES.find((candidate) =>
      candidate.keywords.some((keyword) => normalizedKey.includes(keyword.toLowerCase())),
    ) ?? UNKNOWN_STAT_CATEGORY;

  const isLikelyImportant = IMPORTANT_KEYWORDS.some((keyword) =>
    normalizedKey.includes(keyword),
  );

  return {
    key,
    value,
    category,
    isLikelyImportant,
  };
}

export function classifyStats(stats: ExportStatsMap): ClassifiedStatEntry[] {
  return Object.entries(stats)
    .map(([key, value]) => classifyStatEntry(key, value))
    .sort((a, b) => {
      if (a.isLikelyImportant !== b.isLikelyImportant) {
        return a.isLikelyImportant ? -1 : 1;
      }

      if (a.category.id !== b.category.id) {
        return a.category.label.localeCompare(b.category.label);
      }

      return a.key.localeCompare(b.key, undefined, { numeric: true });
    });
}

export function summarizeClassifiedStats(entries: ClassifiedStatEntry[]): StatsInspectorSummary {
  const unknownStats = entries.filter((entry) => entry.category.id === 'unknown').length;

  return {
    totalStats: entries.length,
    knownStats: entries.length - unknownStats,
    unknownStats,
    importantStats: entries.filter((entry) => entry.isLikelyImportant).length,
  };
}

export function filterClassifiedStats(
  entries: ClassifiedStatEntry[],
  searchTerm: string,
  categoryId: string,
): ClassifiedStatEntry[] {
  const normalizedSearch = searchTerm.trim().toLowerCase();

  return entries.filter((entry) => {
    const matchesCategory = categoryId === 'all' || entry.category.id === categoryId;
    const matchesSearch =
      !normalizedSearch ||
      entry.key.toLowerCase().includes(normalizedSearch) ||
      String(entry.value).includes(normalizedSearch) ||
      entry.category.label.toLowerCase().includes(normalizedSearch);

    return matchesCategory && matchesSearch;
  });
}
