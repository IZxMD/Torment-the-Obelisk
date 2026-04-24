import type { BossFloor } from '../types';

const source = {
  page: 'Archaeology',
  section: 'Boss Floors',
  revisionTimestamp: '2026-04-22T04:19:29Z',
  note: 'Boss floors always have a fixed layout and are not procedurally generated; each contains 24 blocks.',
};

export const archaeologyBossFloors: BossFloor[] = [
  { stage: 11, blocks: { dirt: 24 }, source },
  { stage: 17, blocks: { common: 24 }, source },
  { stage: 23, blocks: { dirt: 24 }, source },
  { stage: 25, blocks: { rare: 24 }, source },
  { stage: 29, blocks: { epic: 24 }, source },
  { stage: 31, blocks: { legendary: 24 }, source },
  { stage: 34, blocks: { common: 20, legendary: 4 }, source },
  { stage: 35, blocks: { rare: 24 }, source },
  { stage: 41, blocks: { epic: 24 }, source },
  { stage: 44, blocks: { legendary: 24 }, source },
  { stage: 49, blocks: { dirt: 6, common: 6, rare: 6, mythic: 6 }, source },
  { stage: 74, blocks: { common: 22, divine: 2 }, source },
  { stage: 95, blocks: { common: 24 }, source },
  { stage: 98, blocks: { mythic: 24 }, source },
  { stage: 99, blocks: { dirt: 4, common: 4, rare: 4, epic: 4, legendary: 4, mythic: 4 }, source },
  { stage: 149, blocks: { divine: 24 }, source },
];
