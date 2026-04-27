export type FragmentRarity = 'common' | 'rare' | 'epic' | 'legendary' | 'mythic' | 'divine';

export type BlockRarity = 'dirt' | FragmentRarity;

export type ArchaeologyUpgradeCostCategory = 'gems' | FragmentRarity | 'mixed';

export interface WikiSource {
  page: string;
  section: string;
  revisionTimestamp?: string;
  note?: string;
}

export interface ArchaeologySkill {
  id: string;
  name: string;
  effects: string[];
  requirement: string | null;
  baseCap: number;
  source: WikiSource;
}

export interface ArchaeologyAbility {
  id: string;
  name: string;
  baseCharges: number;
  baseCooldownSeconds: number;
  effect: string;
  source: WikiSource;
}

export interface ArchaeologyAscensionRequirement {
  ascension: 1 | 2;
  requiredArchaeologyLevel: number;
  requiredHighestStage: number;
  source: WikiSource;
}

export interface ArchaeologyUpgrade {
  id: string;
  ascension: 0 | 1 | 2;
  name: string;
  bonusPerLevel: string;
  maxLevel: number;
  stageToUnlock: number | null;
  costCategory: ArchaeologyUpgradeCostCategory;
  costLabel: string;
  source: WikiSource;
}

export interface ArchaeologyBlockStat {
  id: string;
  rarity: BlockRarity;
  tier: number;
  tierWave: number;
  hp: number;
  armor: number | null;
  xp: number;
  fragments: number | null;
  hp100: number;
  armor100: number | null;
  hp150: number;
  armor150: number | null;
  source: WikiSource;
}

export interface ArchaeologySpawnChance {
  id: string;
  displayLabel: string;
  stageMin: number;
  stageMax: number | null;
  chances: Partial<Record<BlockRarity, number>>;
  source: WikiSource;
}

export interface BossFloor {
  stage: number;
  blocks: Partial<Record<BlockRarity, number>>;
  source: WikiSource;
}
