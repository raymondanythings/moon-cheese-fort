import { Stack } from 'styled-system/jsx';
import CurrentLevelSection from './components/CurrentLevelSection';
import ProductListSection from './components/ProductListSection';
import RecentPurchaseSection from './components/RecentPurchaseSection';

function HomePage() {
  return (
    <Stack gap={0}>
      <img src="/images/cheese.jpg" alt="banner" style={{ height: 300, objectFit: 'cover' }} />
      <CurrentLevelSection />
      <RecentPurchaseSection />
      <ProductListSection />
    </Stack>
  );
}

export default HomePage;
