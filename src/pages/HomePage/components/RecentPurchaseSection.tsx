import { Card } from '@/ui-lib/card';
import { Heading } from '@/ui-lib/heading';
import { Text } from '@/ui-lib/text';
import { Box, HStack } from 'styled-system/jsx';

export default function RecentPurchaseSection() {
  return (
    <>
      <Heading size="lg">최근 구매한 상품이에요.</Heading>

      <Card.Root asChild bg="white">
        <HStack p={4}>
          <Box w={12} h={12} rounded="lg" overflow="hidden" flexShrink={0}>
            <img src="/images/cheese.jpg" alt="cheese" />
          </Box>
          <Box flex={1}>
            <Text size="sm" fontWeight="semibold">
              월레스의 오리지널 웬슬리데일
            </Text>
            <Text size="xs">월레스의 오리지널 웬슬리데일</Text>
          </Box>
          <Text size="lg" fontWeight="bold">
            ₩38,267
          </Text>
        </HStack>
      </Card.Root>
    </>
  );
}
