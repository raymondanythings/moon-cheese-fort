import { Flex, styled } from 'styled-system/jsx';
import { Spacing, Text } from '@/ui-lib';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getRecentProductsQueryOptions } from '@/remotes/queries/product';
import { useCurrency } from '@/providers/currency-provider';
import { formatPriceByCurrency } from '@/format/price';

function RecentPurchaseSection() {
  const {
    data: { recentProducts },
  } = useSuspenseQuery(getRecentProductsQueryOptions);
  const { currency, exchangeRate } = useCurrency();

  return (
    <styled.section css={{ px: 5, pt: 4, pb: 8 }}>
      <Text variant="H1_Bold">최근 구매한 상품</Text>

      <Spacing size={4} />

      <Flex
        css={{
          bg: 'background.01_white',
          px: 5,
          py: 4,
          gap: 4,
          rounded: '2xl',
        }}
        direction={'column'}
      >
        {recentProducts.map(recentProduct => {
          return (
            <Flex
              key={recentProduct.id}
              css={{
                gap: 4,
              }}
            >
              <styled.img
                src={recentProduct.thumbnail}
                alt="item"
                css={{
                  w: '60px',
                  h: '60px',
                  objectFit: 'cover',
                  rounded: 'xl',
                }}
              />
              <Flex flexDir="column" gap={1}>
                <Text variant="B2_Medium">{recentProduct.name}</Text>
                <Text variant="H1_Bold">{formatPriceByCurrency(recentProduct.price * exchangeRate, currency)}</Text>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </styled.section>
  );
}

export default RecentPurchaseSection;
