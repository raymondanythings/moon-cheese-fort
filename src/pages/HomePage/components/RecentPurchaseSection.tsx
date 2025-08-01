import Text from '@/ui-lib/components/text';
import { Box, Flex, Stack } from 'styled-system/jsx';

function RecentPurchaseSection() {
  return (
    <Stack px={5} py={4} gap={4}>
      <Text variant="H1_Bold">최근 구매한 상품</Text>
      <Box bg="background.01_white" px={5} py={4} rounded={'2xl'}>
        <Flex gap={4}>
          <img
            src="/images/cheese.jpg"
            alt="item"
            style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 8 }}
          />
          <Stack gap={1}>
            <Text variant="B2_Medium">월레스의 오리지널 웬슬리데일</Text>
            <Text variant="H1_Bold">$12.99</Text>
          </Stack>
        </Flex>
      </Box>
    </Stack>
  );
}

export default RecentPurchaseSection;
