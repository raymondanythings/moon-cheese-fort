import { Stack } from 'styled-system/jsx';

import CategoryFilter from './components/CategoryFilter';
import ProductListSection from './components/ProductListSection';
import RecentPurchaseSection from './components/RecentPurchaseSection';
import UserStatsSection from './components/UserStatsSection';

function HomePage() {
  return (
    <Stack gap={4}>
      <RecentPurchaseSection />
      <UserStatsSection />
      <CategoryFilter />
      <ProductListSection />
    </Stack>
  );
}

export default HomePage;
