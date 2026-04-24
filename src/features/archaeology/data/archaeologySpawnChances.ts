import type { ArchaeologySpawnChance, BlockRarity } from '../types';

const source = {
  page: 'Archaeology',
  section: 'Block Spawn Chance',
  revisionTimestamp: '2026-04-22T04:19:29Z',
  note: 'These spawn chances are overridden by boss floors.',
};

const chance = (
  displayLabel: string,
  stageMin: number,
  stageMax: number | null,
  chances: Partial<Record<BlockRarity, number>>,
): ArchaeologySpawnChance => ({
  id: `stages-${displayLabel.replace('+', '-plus')}`,
  displayLabel,
  stageMin,
  stageMax,
  chances,
  source,
});

export const archaeologySpawnChances: ArchaeologySpawnChance[] = [
  chance('1-2', 1, 2, { dirt: 28.57, common: 14.29 }),
  chance('3-4', 3, 4, { dirt: 25.4, common: 12.7, rare: 11.11 }),
  chance('5', 5, 5, { dirt: 25.52, common: 10.94, rare: 12.5 }),
  chance('6-9', 6, 9, { dirt: 22.97, common: 9.84, rare: 11.25, epic: 10 }),
  chance('10-11', 10, 11, { dirt: 23.41, common: 8.78, rare: 9.88, epic: 11.11 }),
  chance('12-14', 12, 14, { dirt: 21.74, common: 8.15, rare: 9.17, epic: 10.32, legendary: 7.14 }),
  chance('15-19', 15, 19, { dirt: 21.27, common: 7.98, rare: 8.97, epic: 11.54, legendary: 7.69 }),
  chance('20-24', 20, 24, { dirt: 19.5, common: 7.31, rare: 8.23, epic: 12.34, legendary: 8.64, mythic: 5 }),
  chance('25-29', 25, 29, { dirt: 18.47, common: 7.92, rare: 9.05, epic: 12.06, legendary: 10.56, mythic: 5 }),
  chance('30-49', 30, 49, { dirt: 18.1, common: 9.05, rare: 7.92, epic: 11.88, legendary: 11.88, mythic: 5 }),
  chance('50-75', 50, 75, { dirt: 16.87, common: 8.43, rare: 9.84, epic: 13.77, legendary: 11.81, mythic: 5.56 }),
  chance('75+', 75, null, { dirt: 16.81, common: 10.08, rare: 10.08, epic: 11.76, legendary: 11.76, mythic: 5.88 }),
];
