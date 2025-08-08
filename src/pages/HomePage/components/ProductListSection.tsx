import { Counter, SubGNB, Text } from '@/ui-lib';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import { Box, Grid, styled } from 'styled-system/jsx';
import ProductItem from '../components/ProductItem';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getProductsQueryOptions } from '@/remotes/queries/product';
import { formatPriceByCurrency } from '@/format/price';
import { useCurrency } from '@/providers/currency-provider';
import type { ProductCategory } from '@/types';
import { useCart } from '@/providers/cart-provider';

function ProductListSection() {
  const {
    data: { products },
  } = useSuspenseQuery(getProductsQueryOptions);
  const [currentTab, setCurrentTab] = useState<ProductCategory | 'ALL'>('ALL');
  const { currency, exchangeRate } = useCurrency();
  const { addCart, removeCart, getCartCount } = useCart();
  const navigate = useNavigate();

  const filteredProducts = useMemo(() => {
    if (currentTab === 'ALL') {
      return products;
    }

    return products.filter(product => product.category === currentTab);
  }, [products, currentTab]);

  return (
    <styled.section bg="background.01_white">
      <Box css={{ px: 5, pt: 5, pb: 4 }}>
        <Text variant="H1_Bold">판매중인 상품</Text>
      </Box>
      <SubGNB.Root
        value={currentTab}
        onValueChange={details => setCurrentTab(details.value as ProductCategory | 'ALL')}
      >
        <SubGNB.List>
          <SubGNB.Trigger value="ALL">전체</SubGNB.Trigger>
          <SubGNB.Trigger value="CHEESE">치즈</SubGNB.Trigger>
          <SubGNB.Trigger value="CRACKER">크래커</SubGNB.Trigger>
          <SubGNB.Trigger value="TEA">티</SubGNB.Trigger>
        </SubGNB.List>
      </SubGNB.Root>
      <Grid gridTemplateColumns="repeat(2, 1fr)" rowGap={9} columnGap={4} p={5}>
        {filteredProducts.map(product => {
          const isGlutenFree = product.category === 'CRACKER' && product.isGlutenFree;
          const isCaffeineFree = product.category === 'TEA' && product.isCaffeineFree;
          const cartCount = getCartCount(product);
          const disableMinusButton = cartCount <= 0;
          const disablePlusButton = product.stock <= cartCount;

          return (
            <ProductItem.Root key={product.id} onClick={() => navigate(`/product/${product.id}`)}>
              <ProductItem.Image src={product.images[0]} alt={product.name} />
              <ProductItem.Info title={product.name} description={product.description} />
              <ProductItem.Meta>
                <ProductItem.MetaLeft>
                  <ProductItem.Rating rating={product.rating} />
                  <ProductItem.Price>{formatPriceByCurrency(product.price * exchangeRate, currency)}</ProductItem.Price>
                </ProductItem.MetaLeft>
                {isGlutenFree && <ProductItem.FreeTag type="gluten" />}
                {isCaffeineFree && <ProductItem.FreeTag type="caffeine" />}
              </ProductItem.Meta>
              <Counter.Root>
                <Counter.Minus
                  onClick={() => {
                    removeCart(product);
                  }}
                  disabled={disableMinusButton}
                />
                <Counter.Display value={cartCount} />
                <Counter.Plus onClick={() => addCart(product)} disabled={disablePlusButton} />
              </Counter.Root>
            </ProductItem.Root>
          );
        })}
      </Grid>
    </styled.section>
  );
}

export default ProductListSection;
