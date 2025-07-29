import { Card } from '@/ui-lib/card';
import { Heading } from '@/ui-lib/heading';
import { Text } from '@/ui-lib/text';
import { Box, HStack, Stack } from 'styled-system/jsx';

export default function RecentPurchaseSection() {
  return (
    <Stack>
      <Heading size="lg">최근 구매한 상품이에요.</Heading>

      <Card.Root bg="white" p={4}>
        <HStack>
          <Box w={12} h={12} rounded="lg" overflow="hidden">
            <img src="/images/cheese.jpg" alt="cheese" />
          </Box>
          <Stack gap={0} flex={1}>
            <Text size="sm" fontWeight="semibold">
              월레스의 오리지널 웬슬리데일
            </Text>
            <Text size="xs">월레스의 오리지널 웬슬리데일</Text>
          </Stack>
          <Text size="lg" fontWeight="bold">
            ₩38,267
          </Text>
        </HStack>
      </Card.Root>
    </Stack>
  );
}
