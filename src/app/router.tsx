import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from './layout/RootLayout';
import { HomePage } from './pages/HomePage';
import { ArchaeologyPage } from '../features/archaeology/pages/ArchaeologyPage';
import { ExportStatsPage } from '../features/exportStats/pages/ExportStatsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'export-stats', element: <ExportStatsPage /> },
      { path: 'archaeology', element: <ArchaeologyPage /> },
    ],
  },
]);
