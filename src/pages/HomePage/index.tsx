import { Suspense } from 'react';
import BannerSection from './components/BannerSection';
import CurrentLevelSection from './components/CurrentLevelSection';
import ProductListSection from './components/ProductListSection';
import RecentPurchaseSection from './components/RecentPurchaseSection';

function HomePage() {
  return (
    <>
      <BannerSection />
      <Suspense>
        <CurrentLevelSection />
      </Suspense>
      <Suspense>
        <RecentPurchaseSection />
      </Suspense>
      <Suspense>
        <ProductListSection />
      </Suspense>
    </>
  );
}

export default HomePage;
