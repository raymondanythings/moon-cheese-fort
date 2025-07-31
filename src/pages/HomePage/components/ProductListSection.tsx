import { Card } from '@/ui-lib/card';
import { Heading } from '@/ui-lib/heading';
import { IconButton } from '@/ui-lib/icon-button';
import { RatingGroup } from '@/ui-lib/rating-group';
import { Text } from '@/ui-lib/text';
import { MinusIcon, PlusIcon } from 'lucide-react';
import { Box, HStack, Stack } from 'styled-system/jsx';

export default function ProductListSection() {
  return (
    <Stack>
      <ProductItem
        name="월레스의 오리지널 웬슬리데일"
        description="“월레스가 아침마다 찾는 바로 그 치즈!” 전통 영국 웬슬리데일의 부드럽고 크리미한 풍미. 촘촘하고 촉촉한 질감
        속에 은은한 단맛이 어우러져, 클래식한 영국식 브렉퍼스트에 완벽하게 어울립니다."
        price={38267}
        imageUrl="/images/cheese.jpg"
        rating={4.5}
      />

      <ProductItem
        name="그랜드 데이 아웃 체다"
        description="“달 착륙 기념, 한 조각의 체다.” 월레스와 그로밋의 달 탐사를 기념하며 만든 깊고 진한 풍미의 체다 치즈. 우주선
        모양의 전용 패키지에 담아, 한 입 베어물면 달까지 날아갈 듯한 진한 감칠맛을 경험하세요."
        price={38267}
        imageUrl="/images/cheese.jpg"
        rating={4.5}
      />
    </Stack>
  );
}

const ProductItem = ({
  name,
  description,
  price,
  imageUrl,
  rating,
}: {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  rating: number;
}) => {
  return (
    <Card.Root flexDir={'row'} p={4} gap={4} bg="white">
      <Box w={28} h={28} rounded="lg" overflow="hidden" flexShrink={0}>
        <img src={imageUrl} alt={name} />
      </Box>
      <Stack gap={1} flex={1} justify={'space-between'}>
        <Heading lineClamp={1} size="sm">
          {name}
        </Heading>
        <Text fontSize="xs" lineHeight="short" lineClamp={2}>
          {description}
        </Text>
        <RatingGroup value={rating} readOnly size="sm" showValue />
        <HStack justify={'space-between'}>
          <Text fontSize="md" fontWeight="bold">
            ₩{price.toLocaleString()}
          </Text>
          <QuantityControl />
        </HStack>
      </Stack>
    </Card.Root>
  );
};

function QuantityControl() {
  return (
    <HStack alignItems="center">
      <IconButton size="xs" minW={6} h={6} variant="outline" borderColor="amber.10" rounded="lg" onClick={() => {}}>
        <MinusIcon size={14} />
      </IconButton>
      <Text fontSize="sm" fontWeight="medium" textAlign="center">
        3
      </Text>
      <IconButton size="xs" minW={6} h={6} rounded="lg" onClick={() => {}}>
        <PlusIcon size={14} />
      </IconButton>
    </HStack>
  );
}
