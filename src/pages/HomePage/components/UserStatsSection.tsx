import { Button } from '@/ui-lib/button';
import { Card } from '@/ui-lib/card';
import { Progress } from '@/ui-lib/progress';
import { Text } from '@/ui-lib/text';
import { RocketIcon } from 'lucide-react';
import { useNavigate } from 'react-router';
import { Grid, VStack } from 'styled-system/jsx';

export default function UserStatsSection() {
  const navigate = useNavigate();
  return (
    <Grid gridTemplateColumns="repeat(2, 1fr)">
      <Card.Root bg="white" p={4}>
        <Text fontWeight="semibold">현재등급</Text>
        <VStack mt={4}>
          <Button rounded="full" color="ButtonText" onClick={() => navigate('/current-level')}>
            <RocketIcon /> Explorer
          </Button>

          <Text fontSize="sm">합계: ₩1,650,660</Text>
        </VStack>
      </Card.Root>

      <Card.Root bg="white" p={4}>
        <Text fontWeight="semibold">문 포인트</Text>
        <VStack>
          <Text fontSize="xl" fontWeight="bold" color="amber.9">
            32,500
          </Text>
          <Progress value={40} />
          <Text fontSize="sm">다음 레벨까지 17,500</Text>
        </VStack>
      </Card.Root>
    </Grid>
  );
}
