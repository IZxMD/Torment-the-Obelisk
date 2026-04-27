import type { StatCategory } from '../types';

export const UNKNOWN_STAT_CATEGORY: StatCategory = {
  id: 'unknown',
  label: 'Unknown / unmapped',
  description: 'Stats that are not mapped yet. These stay visible so we can map them later.',
  keywords: [],
};

export const STAT_CATEGORIES: StatCategory[] = [
  {
    id: 'bombs',
    label: 'Bombs',
    description: 'Bomb capacity, damage, crits, recharge, Transmuter and Bomb of Plenty related stats.',
    keywords: ['bomb', 'transmuter', 'plenty', 'cherry'],
  },
  {
    id: 'resources',
    label: 'Resources',
    description: 'Ores, bars, gems, fragments, coins and other resource-like stats.',
    keywords: ['ore', 'bar', 'gem', 'fragment', 'coin', 'resource', 'gold'],
  },
  {
    id: 'progression',
    label: 'Progression',
    description: 'Progress gates such as levels, floors, worlds, challenges, unlocks and prestige.',
    keywords: ['level', 'floor', 'world', 'challenge', 'unlock', 'prestige', 'obelisk'],
  },
  {
    id: 'archaeology',
    label: 'Archaeology',
    description: 'Archaeology levels, stages, idols, fragments, skills and archaeology-specific bonuses.',
    keywords: ['arch', 'archaeology', 'idol', 'stage'],
  },
  {
    id: 'drones',
    label: 'Drones',
    description: 'Drone grades, fuel, juice, generators and drone power.',
    keywords: ['drone', 'fuel', 'juice', 'generator'],
  },
  {
    id: 'fishing',
    label: 'Fishing',
    description: 'Fishing, fish, docks, catches, tributes and related bonuses.',
    keywords: ['fish', 'fishing', 'dock', 'catch', 'tribute'],
  },
  {
    id: 'stargazing',
    label: 'Stargazing',
    description: 'Stars, telescope, constellations, black hole and supernova related stats.',
    keywords: ['star', 'stargazing', 'telescope', 'supernova', 'blackhole', 'black hole'],
  },
  {
    id: 'pets',
    label: 'Pets',
    description: 'Pet levels, caps, skins, ranks and pet-specific bonuses.',
    keywords: ['pet', 'skin'],
  },
  {
    id: 'cards',
    label: 'Cards',
    description: 'Cards, card odds, card tiers and card bonuses.',
    keywords: ['card', 'poly', 'polychrome', 'infernal'],
  },
];
