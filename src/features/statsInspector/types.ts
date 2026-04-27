export type StatCategoryId =
  | 'bombs'
  | 'resources'
  | 'progression'
  | 'archaeology'
  | 'drones'
  | 'fishing'
  | 'stargazing'
  | 'pets'
  | 'cards'
  | 'unknown';

export interface StatCategory {
  id: StatCategoryId;
  label: string;
  description: string;
  keywords: string[];
}

export interface ClassifiedStatEntry {
  key: string;
  value: number;
  category: StatCategory;
  isLikelyImportant: boolean;
}

export interface StatsInspectorSummary {
  totalStats: number;
  knownStats: number;
  unknownStats: number;
  importantStats: number;
}
