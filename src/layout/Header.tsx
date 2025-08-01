import CurrencyToggle, { type CurrencyType } from '@/ui-lib/components/currency-toggle';
import Text from '@/ui-lib/components/text';
import { ChevronLeftIcon, ShoppingCartIcon } from 'lucide-react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Box, Center, Circle, Container, HStack } from 'styled-system/jsx';

export function Header() {
  const [currency, setCurrency] = useState<CurrencyType>('USD');
  const location = useLocation();
  const navigate = useNavigate();

  const isRootRoute = location.pathname === '/';

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <Box bg="background.01_white" h={14} position="sticky" top={0} zIndex={'docked'}>
      <Container maxW="md" h="full">
        <HStack justify="space-between" h="full">
          <HStack gap={2}>
            {isRootRoute ? (
              <img src="/logo.png" alt="logo" style={{ height: 20 }} />
            ) : (
              <Center onClick={handleBackClick} cursor="pointer" color="neutral.01_black" p={1}>
                <ChevronLeftIcon size={28} />
              </Center>
            )}
          </HStack>

          <HStack gap={4}>
            <CurrencyToggle value={currency} onValueChange={setCurrency} />
            <Box pos="relative" color="neutral.01_black">
              <ShoppingCartIcon size={22} />

              <Circle size={3} bg="02_secondary" pos="absolute" top={-1} right={-1}>
                <Text fontSize={8} fontWeight={'semibold'}>
                  9
                </Text>
              </Circle>
            </Box>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
}
