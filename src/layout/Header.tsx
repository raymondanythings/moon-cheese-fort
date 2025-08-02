import CurrencyToggle, { type CurrencyType } from '@/ui-lib/components/currency-toggle';
import { ArrowLeftIcon, ShoppingCartIcon } from '@/ui-lib/components/icons';
import Logo from '@/ui-lib/components/logo';
import Text from '@/ui-lib/components/text';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Box, Center, Circle, Container, HStack } from 'styled-system/jsx';

export function Header() {
  const [currency, setCurrency] = useState<CurrencyType>('USD');
  const location = useLocation();
  const navigate = useNavigate();

  const isRootRoute = location.pathname === '/';

  return (
    <Box bg="background.01_white" h={14} position="sticky" top={0} zIndex={'docked'}>
      <Container maxW="md" h="full">
        <HStack justify="space-between" h="full">
          <HStack gap={2}>
            {isRootRoute ? (
              <Logo />
            ) : (
              <Center role="button" tabIndex={0} onClick={() => navigate(-1)} cursor="pointer" color="neutral.01_black">
                <ArrowLeftIcon />
              </Center>
            )}
          </HStack>

          <HStack gap={4}>
            <CurrencyToggle value={currency} onValueChange={setCurrency} />
            <Box pos="relative" color="neutral.01_black" onClick={() => navigate('/shopping')}>
              <ShoppingCartIcon size={22} />
              <Circle size={3} bg="secondary.02_orange" pos="absolute" top={-1} right={-1}>
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
