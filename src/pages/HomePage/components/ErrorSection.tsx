import { Button } from '@/ui-lib/button';
import { Spacing } from '@/ui-lib/spacing';
import { Text } from '@/ui-lib/text';

import { CircleXIcon } from 'lucide-react';
import { VStack } from 'styled-system/jsx';

export default function ErrorSection({ onRefresh }: { onRefresh: () => void }) {
  return (
    <VStack py={10}>
      <CircleXIcon />
      <Text>정보를 불러오는데 실패했어요.</Text>
      <Spacing size={12} />
      <Button onClick={onRefresh}>새로고침</Button>
    </VStack>
  );
}
