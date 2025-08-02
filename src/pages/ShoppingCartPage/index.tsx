import { Stack } from 'styled-system/jsx';
import CheckoutSection from './components/CheckoutSection';
import ShoppingCartSection from './components/ShoppingCartSection';

function ShoppingCartPage() {
  return (
    <Stack gap={0} bgColor="background.01_white">
      <ShoppingCartSection />
      <CheckoutSection />
    </Stack>
  );
}

export default ShoppingCartPage;
