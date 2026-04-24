import { archaeologyAbilities } from '../data/archaeologyAbilities';
import { archaeologyAscensionRequirements } from '../data/archaeologyAscensionRequirements';
import { archaeologyBlocks } from '../data/archaeologyBlocks';
import { archaeologyBossFloors } from '../data/archaeologyBossFloors';
import { archaeologySkills } from '../data/archaeologySkills';
import { archaeologySpawnChances } from '../data/archaeologySpawnChances';
import type { BlockRarity } from '../types';

const rarityColumns: BlockRarity[] = ['dirt', 'common', 'rare', 'epic', 'legendary', 'mythic', 'divine'];

const formatChance = (value: number | undefined) => (value === undefined ? '—' : `${value}%`);
const formatCount = (value: number | undefined) => (value === undefined ? '—' : value);

export function ArchaeologyPage() {
  return (
    <section className="page-card">
      <p className="eyebrow">First module</p>
      <h2>Archaeology Sim</h2>
      <p>
        MVP 0.2 is a validated data viewer. These tables are intentionally still separated
        from calculation logic so we can verify the source data before building the simulator.
      </p>

      <section className="content-section">
        <h3>Skills</h3>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Skill</th>
                <th>Requirement</th>
                <th>Base cap</th>
                <th>Effects</th>
              </tr>
            </thead>
            <tbody>
              {archaeologySkills.map((skill) => (
                <tr key={skill.id}>
                  <td>{skill.name}</td>
                  <td>{skill.requirement ?? '—'}</td>
                  <td>{skill.baseCap}</td>
                  <td>{skill.effects.join(' · ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-section">
        <h3>Abilities</h3>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Ability</th>
                <th>Base charges</th>
                <th>Base cooldown</th>
                <th>Effect</th>
              </tr>
            </thead>
            <tbody>
              {archaeologyAbilities.map((ability) => (
                <tr key={ability.id}>
                  <td>{ability.name}</td>
                  <td>{ability.baseCharges}</td>
                  <td>{ability.baseCooldownSeconds}s</td>
                  <td>{ability.effect}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-section">
        <h3>Ascension requirements</h3>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Ascension</th>
                <th>Required Archaeology level</th>
                <th>Required highest stage</th>
              </tr>
            </thead>
            <tbody>
              {archaeologyAscensionRequirements.map((requirement) => (
                <tr key={requirement.ascension}>
                  <td>Ascension {requirement.ascension}</td>
                  <td>{requirement.requiredArchaeologyLevel}</td>
                  <td>{requirement.requiredHighestStage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-section">
        <h3>Block stats</h3>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Rarity</th>
                <th>Tier</th>
                <th>Wave</th>
                <th>HP</th>
                <th>Armor</th>
                <th>XP</th>
                <th>Fragments</th>
                <th>HP100</th>
                <th>Armor100</th>
                <th>HP150</th>
                <th>Armor150</th>
              </tr>
            </thead>
            <tbody>
              {archaeologyBlocks.map((block) => (
                <tr key={block.id}>
                  <td>{block.rarity}</td>
                  <td>{block.tier}</td>
                  <td>{block.tierWave}</td>
                  <td>{block.hp}</td>
                  <td>{block.armor ?? '—'}</td>
                  <td>{block.xp}</td>
                  <td>{block.fragments ?? '—'}</td>
                  <td>{block.hp100}</td>
                  <td>{block.armor100 ?? '—'}</td>
                  <td>{block.hp150}</td>
                  <td>{block.armor150 ?? '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-section">
        <h3>Block spawn chances</h3>
        <p>Spawn chances are overridden by boss floors.</p>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Stages</th>
                {rarityColumns.slice(0, 6).map((rarity) => (
                  <th key={rarity}>{rarity}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {archaeologySpawnChances.map((row) => (
                <tr key={row.id}>
                  <td>{row.displayLabel}</td>
                  {rarityColumns.slice(0, 6).map((rarity) => (
                    <td key={rarity}>{formatChance(row.chances[rarity])}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-section">
        <h3>Boss floors</h3>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Stage</th>
                {rarityColumns.map((rarity) => (
                  <th key={rarity}>{rarity}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {archaeologyBossFloors.map((floor) => (
                <tr key={floor.stage}>
                  <td>{floor.stage}</td>
                  {rarityColumns.map((rarity) => (
                    <td key={rarity}>{formatCount(floor.blocks[rarity])}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
}
