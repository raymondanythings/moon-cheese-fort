import App from '@/App.tsx';
import { enableMocking } from '@/server/brower.ts';
import { EnhancedToastProvider } from '@/ui-lib/components/toast';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CartProvider } from './providers/cart-provider';

enableMocking({
  serviceWorker: {
    url: '/mockServiceWorker.js',
  },
  onUnhandledRequest: 'bypass',
}).then(() => {
  const client = new QueryClient();
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <QueryClientProvider client={client}>
        <CartProvider>
          <EnhancedToastProvider>
            <App />
          </EnhancedToastProvider>
        </CartProvider>
      </QueryClientProvider>
    </StrictMode>
  );
});
