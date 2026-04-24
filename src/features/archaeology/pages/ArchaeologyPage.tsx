import { archaeologyBlocks } from '../data/archaeologyBlocks';
import { archaeologySkills } from '../data/archaeologySkills';

export function ArchaeologyPage() {
  return (
    <section className="page-card">
      <p className="eyebrow">First module</p>
      <h2>Archaeology Sim</h2>
      <p>
        MVP 0.1 starts as a data viewer. The next step is to expand this with validated
        NotebookLM extraction results, then add calculations and simulation logic.
      </p>

      <section className="content-section">
        <h3>Skills</h3>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Skill</th>
                <th>Base cap</th>
                <th>Effects</th>
              </tr>
            </thead>
            <tbody>
              {archaeologySkills.map((skill) => (
                <tr key={skill.id}>
                  <td>{skill.name}</td>
                  <td>{skill.baseCap}</td>
                  <td>{skill.effects.join(' · ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-section">
        <h3>Sample block stats</h3>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
}
