import PageLayout from '@/layout/PageLayout';
import { createBrowserRouter } from 'react-router';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import ShoppingPage from './pages/ShoppingPage';

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
        path: '/product/:id',
        element: <ProductDetailPage />,
      },
      {
        path: '/shopping',
        element: <ShoppingPage />,
      },
    ],
  },
]);

export default router;
