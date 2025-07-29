import { forwardRef } from 'react';
import { Flex } from 'styled-system/jsx';
import * as StyledSwitch from './styled/switch';
import { Text } from './text';

export type Currency = 'USD' | 'KRW';

export interface CurrencySwitchProps extends Omit<StyledSwitch.RootProps, 'children'> {
  currency?: Currency;
  onCurrencyChange?: (currency: Currency) => void;
}

export const CurrencySwitch = forwardRef<HTMLLabelElement, CurrencySwitchProps>((props, ref) => {
  const { currency, onCurrencyChange, ...rootProps } = props;

  const handleCheckedChange = (details: { checked: boolean }) => {
    const currency = details.checked ? 'KRW' : 'USD';
    onCurrencyChange?.(currency);
  };

  return (
    <StyledSwitch.Root
      ref={ref}
      {...rootProps}
      checked={currency === 'KRW'}
      onCheckedChange={handleCheckedChange}
      size="lg"
    >
      <StyledSwitch.Control>
        <Flex
          position="absolute"
          top={0}
          left={0}
          w="full"
          h="full"
          alignItems="center"
          justifyContent="space-around"
          pointerEvents="none"
          zIndex={'overlay'}
        >
          <Text size="xs" fontWeight="semibold" color={'gray.10'}>
            $
          </Text>
          <Text size="xs" fontWeight="semibold" color={'gray.10'}>
            ₩
          </Text>
        </Flex>

        <StyledSwitch.Thumb />
      </StyledSwitch.Control>
      <StyledSwitch.HiddenInput />
    </StyledSwitch.Root>
  );
});

CurrencySwitch.displayName = 'CurrencySwitch';
