import type { ArchaeologyBlockStat } from '../types';

const source = {
  page: 'Archaeology',
  section: 'Block Stats',
  revisionTimestamp: '2026-04-22T04:19:29Z',
};

const block = (rarity: ArchaeologyBlockStat['rarity'], tier: number, tierWave: number, hp: number, armor: number | null, xp: number, fragments: number | null, hp100: number, armor100: number | null, hp150: number, armor150: number | null): ArchaeologyBlockStat => ({
  id: `${rarity}-${tier}`,
  rarity,
  tier,
  tierWave,
  hp,
  armor,
  xp,
  fragments,
  hp100,
  armor100,
  hp150,
  armor150,
  source,
});

export const archaeologyBlocks: ArchaeologyBlockStat[] = [
  block('dirt', 1, 1, 100, null, 0.05, null, 200, null, 400, null),
  block('dirt', 2, 12, 300, null, 0.15, null, 600, null, 1200, null),
  block('dirt', 3, 24, 900, null, 0.45, null, 1800, null, 3600, null),
  block('dirt', 4, 81, 2700, null, 1.35, null, 5400, null, 10800, null),
  block('common', 1, 1, 250, 5, 0.15, 0.01, 500, 7.5, 1000, 7.5),
  block('common', 2, 18, 750, 8.25, 0.45, 0.02, 1500, 12.38, 3000, 12.38),
  block('common', 3, 30, 2250, 13.61, 1.35, 0.04, 4500, 20.42, 9000, 20.42),
  block('common', 4, 96, 6750, 22.46, 4.05, 0.08, 13500, 33.69, 27000, 33.69),
  block('rare', 1, 3, 550, 12, 0.35, 0.01, 1100, 18, 2200, 18),
  block('rare', 2, 26, 1650, 19.8, 1.05, 0.02, 3300, 29.7, 6600, 29.7),
  block('rare', 3, 36, 4950, 32.67, 3.15, 0.04, 9900, 49, 19800, 49),
  block('rare', 4, 111, 14850, 53.91, 9.45, 0.08, 29700, 80.86, 59400, 80.86),
  block('epic', 1, 6, 1150, 25, 1, 0.01, 2300, 37.5, 4600, 37.5),
  block('epic', 2, 30, 3450, 41.25, 3, 0.02, 6900, 61.88, 13800, 61.88),
  block('epic', 3, 42, 10350, 68.06, 9, 0.04, 20700, 102.09, 41400, 102.09),
  block('epic', 4, 126, 31050, 112.3, 27, 0.08, 62100, 168.45, 124200, 168.45),
  block('legendary', 1, 12, 1950, 50, 3.5, 0.01, 3900, 75, 7800, 75),
  block('legendary', 2, 32, 5850, 82.5, 10.5, 0.02, 11700, 123.75, 23400, 123.75),
  block('legendary', 3, 45, 17550, 136.12, 31.5, 0.04, 35100, 204.19, 70200, 204.19),
  block('legendary', 4, 136, 52650, 224.61, 94.5, 0.08, 105300, 336.91, 210600, 336.91),
  block('mythic', 1, 20, 3500, 150, 7.5, 0.01, 7000, 225, 14000, 225),
  block('mythic', 2, 35, 10500, 247.5, 22.5, 0.02, 21000, 371.25, 42000, 371.25),
  block('mythic', 3, 50, 31500, 408.37, 67.5, 0.04, 63000, 612.56, 126000, 612.56),
  block('mythic', 4, 141, 94500, 673.82, 202.5, 0.08, 189000, 1010.73, 378000, 1010.73),
  block('divine', 1, 50, 25000, 300, 20, 0.01, 50000, 450, 100000, 450),
  block('divine', 2, 75, 75000, 495, 60, 0.02, 150000, 742.5, 300000, 742.5),
  block('divine', 3, 100, 225000, 816.75, 180, 0.04, 450000, 1225.13, 900000, 1225.13),
  block('divine', 4, 150, 675000, 1347.64, 540, 0.08, 1350000, 2021.46, 2700000, 2021.46),
];
