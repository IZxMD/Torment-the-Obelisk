import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from './layout/RootLayout';
import { HomePage } from './pages/HomePage';
import { ArchaeologyPage } from '../features/archaeology/pages/ArchaeologyPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'archaeology', element: <ArchaeologyPage /> },
    ],
  },
]);
