import type { ArchaeologySkill } from '../types';

const archaeologySource = {
  page: 'Archaeology',
  section: 'Skills',
  revisionTimestamp: '2026-04-22T04:19:29Z',
};

export const archaeologySkills: ArchaeologySkill[] = [
  {
    id: 'strength',
    name: 'Strength',
    effects: ['Flat Damage +1', 'Damage +1.00%', 'Crit Damage +3%'],
    requirement: null,
    baseCap: 50,
    source: archaeologySource,
  },
  {
    id: 'agility',
    name: 'Agility',
    effects: ['Max Stamina +5', 'Crit Chance +1%', 'Speed Mod Chance +0.20%'],
    requirement: null,
    baseCap: 50,
    source: archaeologySource,
  },
  {
    id: 'perception',
    name: 'Perception',
    effects: ['Fragment Gain +4%', 'Loot Mod Chance +0.30%', 'Armor Penetration +2'],
    requirement: null,
    baseCap: 25,
    source: archaeologySource,
  },
  {
    id: 'intellect',
    name: 'Intellect',
    effects: ['Experience Gain +5%', 'Exp Mod Chance +0.30%', 'Armor Penetration +3%'],
    requirement: null,
    baseCap: 25,
    source: archaeologySource,
  },
  {
    id: 'luck',
    name: 'Luck',
    effects: ['Crit Chance +2%', 'All Mod Chances +0.20%', 'Gold Crosshair Chance +0.50%'],
    requirement: null,
    baseCap: 25,
    source: archaeologySource,
  },
  {
    id: 'divinity',
    name: 'Divinity',
    effects: ['Flat Damage +2', 'Super Crit Chance +2%', 'Crosshair Auto-Tap +2%'],
    requirement: 'Ascension 1',
    baseCap: 10,
    source: archaeologySource,
  },
  {
    id: 'corruption',
    name: 'Corruption',
    effects: ['Damage +6%', 'Max Stamina -3%', 'All Mod Multis +1%'],
    requirement: 'Ascension 2',
    baseCap: 10,
    source: archaeologySource,
  },
];
