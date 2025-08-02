import Badge from '@/ui-lib/components/badge';
import CurrencyToggle, { type CurrencyType } from '@/ui-lib/components/currency-toggle';
import { ArrowLeftIcon, ShoppingCartIcon } from '@/ui-lib/components/icons';
import Logo from '@/ui-lib/components/logo';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Container, Flex, styled } from 'styled-system/jsx';

export function Header() {
  const [currency, setCurrency] = useState<CurrencyType>('USD');
  const location = useLocation();

  const isRootRoute = location.pathname === '/';

  return (
    <styled.header bg="background.01_white" h={14} position="sticky" top={0} zIndex={'docked'}>
      <Container maxW="md" h="full">
        <Flex alignItems="center" justifyContent="space-between" h="full">
          {isRootRoute ? <Logo /> : <BackButton />}
          <Flex alignItems="center" gap={4}>
            <CurrencyToggle value={currency} onValueChange={setCurrency} />
            <ShoppingCartButton />
          </Flex>
        </Flex>
      </Container>
    </styled.header>
  );
}

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <styled.button onClick={() => navigate(-1)} color="neutral.01_black">
      <ArrowLeftIcon />
    </styled.button>
  );
};

const ShoppingCartButton = () => {
  const navigate = useNavigate();

  return (
    <Badge content={9} size="sm" cursor="pointer" onClick={() => navigate('/shopping-cart')}>
      <ShoppingCartIcon size={22} />
    </Badge>
  );
};
