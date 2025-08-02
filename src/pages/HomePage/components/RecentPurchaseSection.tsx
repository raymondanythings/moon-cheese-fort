import Text from '@/ui-lib/components/text';
import { useNavigate } from 'react-router';
import { Box, Flex, Stack, styled } from 'styled-system/jsx';

function RecentPurchaseSection() {
  const navigate = useNavigate();

  const handleClickProduct = (productId: number) => {
    navigate(`/product/${productId}`);
  };
  return (
    <Stack px={5} pt={4} pb={8} gap={4}>
      <Text variant="H1_Bold">최근 구매한 상품</Text>
      <Box bg="background.01_white" px={5} py={4} rounded={'2xl'} onClick={() => handleClickProduct(1)}>
        <Flex gap={4}>
          <styled.img
            src="/moon-cheese-images/cheese-1.jpg"
            alt="item"
            css={{ w: '60px', h: '60px', objectFit: 'cover', rounded: 'xl' }}
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
