import { createHashRouter } from 'react-router-dom';
import { RootLayout } from './layout/RootLayout';
import { HomePage } from './pages/HomePage';
import { ArchaeologyPage } from '../features/archaeology/pages/ArchaeologyPage';
import { ExportStatsPage } from '../features/exportStats/pages/ExportStatsPage';
import { StatsInspectorPage } from '../features/statsInspector/pages/StatsInspectorPage';

export const router = createHashRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'export-stats', element: <ExportStatsPage /> },
      { path: 'stats-inspector', element: <StatsInspectorPage /> },
      { path: 'archaeology', element: <ArchaeologyPage /> },
    ],
  },
]);
