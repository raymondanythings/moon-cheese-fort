import { Button } from '@/ui-lib/button';
import { Card } from '@/ui-lib/card';
import { RatingGroup } from '@/ui-lib/rating-group';
import { Text } from '@/ui-lib/text';
import { MinusIcon, PlusIcon } from 'lucide-react';
import { Box, HStack, Stack } from 'styled-system/jsx';

export default function ProductListSection() {
  return (
    <Stack>
      <Card.Root bg="white">
        <HStack gap={4} p={4}>
          <Box w={28} h={28} rounded="lg" overflow="hidden" flexShrink={0}>
            <img src="/images/cheese.jpg" alt="cheese" />
          </Box>
          <Stack gap={1} flex={1}>
            <Text fontWeight="semibold">월레스의 오리지널 웬슬리데일</Text>
            <Text fontSize="xs" lineHeight="short" lineClamp={2}>
              “월레스가 아침마다 찾는 바로 그 치즈!” 전통 영국 웬슬리데일의 부드럽고 크리미한 풍미. 촘촘하고 촉촉한 질감
              속에 은은한 단맛이 어우러져, 클래식한 영국식 브렉퍼스트에 완벽하게 어울립니다.
            </Text>
            <HStack>
              <RatingGroup value={3.5} readOnly size="sm" />
              <Text fontSize="xs" color="gray.600">
                4.5
              </Text>
            </HStack>
            <HStack justify={'space-between'}>
              <Text fontSize="lg" fontWeight="bold" color="gray.900">
                ₩38,267
              </Text>
              <QuantityControl />
            </HStack>
          </Stack>
        </HStack>
      </Card.Root>
      <Card.Root bg="white">
        <HStack gap={4} p={4}>
          <Box w={28} h={28} rounded="lg" overflow="hidden" flexShrink={0}>
            <img src="/images/cheese.jpg" alt="cheese" />
          </Box>
          <Stack gap={1} flex={1}>
            <Text fontWeight="semibold">그랜드 데이 아웃 체다</Text>
            <Text fontSize="xs" lineHeight="short" lineClamp={2}>
              “달 착륙 기념, 한 조각의 체다.” 월레스와 그로밋의 달 탐사를 기념하며 만든 깊고 진한 풍미의 체다 치즈.
              우주선 모양의 전용 패키지에 담아, 한 입 베어물면 달까지 날아갈 듯한 진한 감칠맛을 경험하세요.
            </Text>
            <HStack>
              <RatingGroup value={3.5} readOnly size="sm" />
              <Text fontSize="xs" color="gray.600">
                3.5
              </Text>
            </HStack>
            <HStack justify={'space-between'}>
              <Text fontSize="lg" fontWeight="bold" color="gray.900">
                ₩38,267
              </Text>
              <QuantityControl />
            </HStack>
          </Stack>
        </HStack>
      </Card.Root>
    </Stack>
  );
}

function QuantityControl() {
  return (
    <HStack gap={2} alignItems="center">
      <Button size="xs" variant="outline" p={1} onClick={() => {}}>
        <MinusIcon size={16} />
      </Button>
      <Text fontSize="sm" fontWeight="medium" minW={4} textAlign="center">
        3
      </Text>
      <Button size="xs" p={1} onClick={() => {}}>
        <PlusIcon size={16} />
      </Button>
    </HStack>
  );
}
