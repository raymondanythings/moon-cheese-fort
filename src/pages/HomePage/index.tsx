import { Stack } from 'styled-system/jsx';
import BannerSection from './components/BannerSection';
import CurrentLevelSection from './components/CurrentLevelSection';
import ProductListSection from './components/ProductListSection';
import RecentPurchaseSection from './components/RecentPurchaseSection';

function HomePage() {
  return (
    <Stack gap={0}>
      <BannerSection />
      <CurrentLevelSection />
      <RecentPurchaseSection />
      <ProductListSection />
    </Stack>
  );
}

export default HomePage;
