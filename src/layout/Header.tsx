import { Badge } from '@/ui-lib/badge';
import { Button } from '@/ui-lib/button';
import { CurrencySwitch, type Currency } from '@/ui-lib/currency-switch';
import { Heading } from '@/ui-lib/heading';
import { Text } from '@/ui-lib/text';
import { ShoppingCartIcon } from 'lucide-react';
import { useState } from 'react';
import { Box, Container, HStack } from 'styled-system/jsx';

export function Header() {
  const [currency, setCurrency] = useState<Currency>('USD');

  return (
    <Box bg="white" shadow="md" position="sticky" top={0} zIndex={'docked'}>
      <Container maxW="lg" display="flex" justifyContent="space-between" py={4}>
        <HStack>
          <img src="/logo.png" alt="logo" width={45} height={45} />
          <Box>
            <Heading as="h1" size="xl">
              Moon Cheese
            </Heading>
            <Text size="xs">프리미엄 치즈 백화점</Text>
          </Box>
        </HStack>
        <HStack>
          <CurrencySwitch currency={currency} onCurrencyChange={setCurrency} />
          <Button variant="ghost">
            <ShoppingCartIcon />
            <Badge position="absolute" top={-1} right={-1} size={'sm'} bg="amber.10">
              <Text>9</Text>
            </Badge>
          </Button>
        </HStack>
      </Container>
    </Box>
  );
}
