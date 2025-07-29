import { createBrowserRouter } from 'react-router';
import PageLayout from '@/layout/PageLayout';
import CurrentLevelPage from './pages/CurrentLevelPage';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/current-level',
        element: <CurrentLevelPage />,
      },
    ],
  },
]);

export default router;
