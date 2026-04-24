import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';

export function RootLayout() {
  return (
    <div className="app-shell">
      <Navigation />
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
}
