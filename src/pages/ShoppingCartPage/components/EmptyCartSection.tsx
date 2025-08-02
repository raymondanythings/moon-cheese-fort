import { Button, Text } from '@/ui-lib';
import { WarningIcon } from '@/ui-lib/components/icons';
import { Center, styled, VStack } from 'styled-system/jsx';

function EmptyCartSection() {
  return (
    <styled.section css={{ p: 5, bgColor: 'background.01_white', h: 'screen' }}>
      <Center w="full" h="full">
        <VStack gap={4} textAlign="center">
          <WarningIcon />
          <Text variant="B2_Bold">장바구니가 비어있어요</Text>
          <Text variant="C2_Regular">{'아직 아무것도 담지 않으셨네요\n쇼핑을 시작해볼까요?'}</Text>
          <Button>쇼핑하러 가기</Button>
        </VStack>
      </Center>
    </styled.section>
  );
}

export default EmptyCartSection;
