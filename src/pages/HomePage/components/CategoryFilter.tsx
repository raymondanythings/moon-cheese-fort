import { Button } from '@/ui-lib/button';
import { HStack } from 'styled-system/jsx';

export default function CategoryFilter() {
  return (
    <HStack justify={'center'}>
      <Button variant={'solid'} size="xs" rounded="full" onClick={() => {}}>
        전체
      </Button>
      <Button variant={'outline'} size="xs" rounded="full" onClick={() => {}}>
        치즈
      </Button>
      <Button variant={'outline'} size="xs" rounded="full" onClick={() => {}}>
        크래커
      </Button>
      <Button variant={'outline'} size="xs" rounded="full" onClick={() => {}}>
        티
      </Button>
    </HStack>
  );
}
