import { NavLink } from 'react-router-dom';

export function Navigation() {
  return (
    <header className="site-header">
      <div>
        <p className="eyebrow">Idle Obelisk Miner tools</p>
        <h1>Torment the Obelisk</h1>
      </div>
      <nav className="site-nav" aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/export-stats">ExportStats</NavLink>
        <NavLink to="/stats-inspector">Stats Inspector</NavLink>
        <NavLink to="/archaeology">Archaeology</NavLink>
      </nav>
    </header>
  );
}
