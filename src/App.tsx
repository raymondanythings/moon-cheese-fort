import { RouterProvider } from 'react-router';
import router from './router';
import { CurrencyProvider } from './providers/currency-provider';
import { Suspense } from 'react';

function App() {
  return (
    <Suspense>
      <CurrencyProvider>
        <RouterProvider router={router} />
      </CurrencyProvider>
    </Suspense>
  );
}

export default App;
