export type FragmentRarity = 'common' | 'rare' | 'epic' | 'legendary' | 'mythic' | 'divine';

export type BlockRarity = 'dirt' | FragmentRarity;

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

export interface BossFloor {
  stage: number;
  blocks: Partial<Record<BlockRarity, number>>;
  source: WikiSource;
}
