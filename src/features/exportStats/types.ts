export type ExportStatsValue = number;

export type ExportStatsMap = Record<string, ExportStatsValue>;

export interface IdleObeliskExportStats {
  version: string;
  stats: ExportStatsMap;
  time: number;
}

export interface ParsedExportStatsSuccess {
  ok: true;
  data: IdleObeliskExportStats;
  statCount: number;
}

export interface ParsedExportStatsError {
  ok: false;
  error: string;
}

export type ParsedExportStatsResult = ParsedExportStatsSuccess | ParsedExportStatsError;
