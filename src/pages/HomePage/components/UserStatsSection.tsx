import { Button } from '@/ui-lib/button';
import { Card } from '@/ui-lib/card';
import { Heading } from '@/ui-lib/heading';
import { Progress } from '@/ui-lib/progress';
import { Text } from '@/ui-lib/text';
import { RocketIcon } from 'lucide-react';
import { useNavigate } from 'react-router';
import { Grid, VStack } from 'styled-system/jsx';

export default function UserStatsSection() {
  return (
    <Grid gridTemplateColumns="repeat(2, 1fr)">
      <CurrentLevelCard />
      <NextLevelCard />
    </Grid>
  );
}

function CurrentLevelCard() {
  const navigate = useNavigate();
  return (
    <Card.Root bg="white" p={4} gap={3}>
      <Heading>현재등급</Heading>
      <VStack>
        <Button rounded="full" color="ButtonText" onClick={() => navigate('/current-level')}>
          <RocketIcon /> Explorer
        </Button>
        <Text fontSize="sm">합계: ₩1,650,660</Text>
      </VStack>
    </Card.Root>
  );
}

function NextLevelCard() {
  return (
    <Card.Root bg="white" p={4}>
      <Heading>문 포인트</Heading>
      <VStack>
        <Text fontSize="xl" fontWeight="bold" color="amber.10">
          32,500
        </Text>
        <Progress value={40} />
        <Text fontSize="sm">다음 레벨까지 17,500</Text>
      </VStack>
    </Card.Root>
  );
}
