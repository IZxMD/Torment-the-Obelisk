import type { ArchaeologyAbility } from '../types';

const source = {
  page: 'Archaeology',
  section: 'Abilities',
  revisionTimestamp: '2026-04-22T04:19:29Z',
};

export const archaeologyAbilities: ArchaeologyAbility[] = [
  {
    id: 'enrage',
    name: 'Enrage',
    baseCharges: 5,
    baseCooldownSeconds: 60,
    effect: 'Next 5 Attacks: +20% Damage, +100% Crit Damage',
    source,
  },
  {
    id: 'flurry',
    name: 'Flurry',
    baseCharges: 5,
    baseCooldownSeconds: 120,
    effect: '+100% Atk Speed, +5 Stamina On Cast',
    source,
  },
  {
    id: 'quake',
    name: 'Quake',
    baseCharges: 5,
    baseCooldownSeconds: 180,
    effect: 'Next 5 Attacks deal 20% Damage to all Blocks',
    source,
  },
];
