import { Switch, switchAnatomy } from '@ark-ui/react';
import { css, cx, sva, type RecipeVariantProps } from 'styled-system/css';

export type CurrencyToggleVariantProps = RecipeVariantProps<typeof currencyToggleRecipe>;

export const currencyToggleRecipe = sva({
  slots: [...switchAnatomy.keys(), 'symbolLeft', 'symbolRight'],
  base: {
    root: {
      alignItems: 'center',
      display: 'flex',
      position: 'relative',
    },
    control: {
      width: '66px',
      height: '36px',
      p: '3px',
      alignItems: 'center',
      background: 'background.03_gray',
      rounded: 'lg',
      cursor: 'pointer',
      display: 'inline-flex',
      flexShrink: '0',
      transitionDuration: 'normal',
      transitionProperty: 'background',
      transitionTimingFunction: 'default',
      position: 'relative',
    },
    thumb: {
      width: '30px',
      height: '30px',
      background: 'background.01_white',
      rounded: 'lg',
      boxShadow: 'xs',
      transitionDuration: 'normal',
      transitionProperty: 'transform, background',
      transitionTimingFunction: 'default',
      _checked: {
        transform: 'translateX(100%)',
        background: 'background.01_white',
      },
    },
    symbolLeft: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '36px',
      height: '36px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '14px',
      fontWeight: 'bold',
      transitionDuration: 'normal',
      transitionProperty: 'color, opacity',
      transitionTimingFunction: 'default',
      zIndex: 10,
      pointerEvents: 'none',
    },
    symbolRight: {
      position: 'absolute',
      right: 0,
      top: 0,
      width: '36px',
      height: '36px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '14px',
      fontWeight: 'bold',
      transitionDuration: 'normal',
      transitionProperty: 'color, opacity',
      transitionTimingFunction: 'default',
      zIndex: 10,
      pointerEvents: 'none',
    },
  },
});

export type CurrencyType = 'USD' | 'KRW';

export type CurrencyToggleProps = CurrencyToggleVariantProps & {
  /**
   * 현재 선택된 통화
   */
  value?: CurrencyType;
  /**
   * 기본 통화 값
   */
  defaultValue?: CurrencyType;
  /**
   * 통화 변경 시 호출되는 콜백
   */
  onValueChange?: (value: CurrencyType) => void;
  /**
   * 비활성화 상태
   */
  disabled?: boolean;
};

const CurrencyToggle = ({ value, defaultValue = 'USD', onValueChange, disabled = false }: CurrencyToggleProps) => {
  const handleChange = (details: { checked: boolean }) => {
    onValueChange?.(details.checked ? 'KRW' : 'USD');
  };

  const isCheckedKRW = value ? value === 'KRW' : defaultValue === 'KRW';

  const classes = currencyToggleRecipe();

  return (
    <Switch.Root checked={isCheckedKRW} onCheckedChange={handleChange} disabled={disabled} className={classes.root}>
      <Switch.Control className={classes.control}>
        <span className={cx(classes.symbolLeft, css({ color: isCheckedKRW ? 'neutral.04_gray' : 'neutral.01_black' }))}>
          $
        </span>
        <Switch.Thumb className={classes.thumb} />
        <span
          className={cx(classes.symbolRight, css({ color: isCheckedKRW ? 'neutral.01_black' : 'neutral.04_gray' }))}
        >
          원
        </span>
      </Switch.Control>
      <Switch.HiddenInput />
    </Switch.Root>
  );
};

CurrencyToggle.displayName = 'CurrencyToggle';

export default CurrencyToggle;
