import { getExchangeRateQueryOptions } from '@/remotes/queries/exchange-rate';
import type { Currency } from '@/types';
import { useSuspenseQuery } from '@tanstack/react-query';
import { createContext, useContext, useMemo, useState } from 'react';

type CurrencyContextType = {
  currency: Currency;
  changeCurrency: (currency: Currency) => void;
  exchangeRate: number;
};

const CurrencyContext = createContext<CurrencyContextType>({
  currency: 'KRW',
  changeCurrency: () => {},
  exchangeRate: 0,
});

export const CurrencyProviderContainer = ({ children }: { children: React.ReactNode }) => {
  const [currency, setCurrency] = useState<Currency>('KRW');
  const { data } = useSuspenseQuery(getExchangeRateQueryOptions);

  const exchangeRate = useMemo(() => data.exchangeRate[currency] ?? 0, [data, currency]);

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        changeCurrency: currency => setCurrency(currency),
        exchangeRate,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

const CurrencyProvider = ({ children }: { children: React.ReactNode }) => {
  return <CurrencyProviderContainer>{children}</CurrencyProviderContainer>;
};

const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};

export { CurrencyProvider, useCurrency };
