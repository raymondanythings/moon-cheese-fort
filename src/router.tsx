import PageLayout from '@/layout/PageLayout';
import { createBrowserRouter } from 'react-router';
import DetailPage from './pages/ShoppingPage';
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
        path: '/detail/:id',
        element: <DetailPage />,
      },
    ],
  },
]);

export default router;
