import { Heading } from '@/ui-lib/heading';
import { Text } from '@/ui-lib/text';
import { Box, HStack } from 'styled-system/jsx';

export default function RecentPurchaseSection() {
  return (
    <>
      <Heading size="lg">최근 구매한 상품이에요.</Heading>

      <RecentPurchaseItem
        name="월레스의 오리지널 웬슬리데일"
        description="“월레스가 아침마다 찾는 바로 그 치즈!” 전통 영국 웬슬리데일의 부드럽고 크리미한 풍미. 촘촘하고 촉촉한 질감
        속에 은은한 단맛이 어우러져, 클래식한 영국식 브렉퍼스트에 완벽하게 어울립니다."
        price={38267}
        imageUrl="/images/cheese.jpg"
      />
    </>
  );
}

function RecentPurchaseItem({
  name,
  description,
  price,
  imageUrl,
}: {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}) {
  return (
    <HStack p={4}>
      <Box w={12} h={12} rounded="lg" overflow="hidden" flexShrink={0}>
        <img src={imageUrl} alt={name} />
      </Box>
      <Box flex={1}>
        <Text size="sm" fontWeight="semibold">
          {name}
        </Text>
        <Text size="xs">{description}</Text>
      </Box>
      <Text size="lg" fontWeight="bold">
        ₩{price.toLocaleString()}
      </Text>
    </HStack>
  );
}
