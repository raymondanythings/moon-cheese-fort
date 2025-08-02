import { Spacing, Text } from '@/ui-lib';
import { useNavigate } from 'react-router';
import { Flex, styled } from 'styled-system/jsx';

function RecentPurchaseSection() {
  const navigate = useNavigate();

  return (
    <styled.section css={{ px: 5, pt: 4, pb: 8 }}>
      <Text variant="H1_Bold">최근 구매한 상품</Text>

      <Spacing size={4} />

      <Flex
        role="button"
        onClick={() => navigate('/product/1')}
        css={{
          bg: 'background.01_white',
          gap: 4,
          px: 5,
          py: 4,
          rounded: '2xl',
        }}
      >
        <styled.img
          src="/moon-cheese-images/cheese-1.jpg"
          alt="item"
          css={{
            w: '60px',
            h: '60px',
            objectFit: 'cover',
            rounded: 'xl',
          }}
        />
        <Flex flexDir="column" gap={1}>
          <Text variant="B2_Medium">월레스의 오리지널 웬슬리데일</Text>
          <Text variant="H1_Bold">$12.99</Text>
        </Flex>
      </Flex>
    </styled.section>
  );
}

export default RecentPurchaseSection;
