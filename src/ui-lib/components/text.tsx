import { forwardRef } from 'react';
import { cva, type RecipeVariantProps } from 'styled-system/css';
import { styled, type HTMLStyledProps } from 'styled-system/jsx';

export type TextVariantProps = RecipeVariantProps<typeof textRecipe>;

export const textRecipe = cva({
  base: {
    fontSize: 16,
    fontWeight: 'regular',
    lineHeight: 1.5,
    letterSpacing: -0.025,
    color: 'neutral.01_black',
  },
  variants: {
    variant: {
      H1_Bold: { fontSize: 20, fontWeight: 'bold', lineHeight: 1.5, letterSpacing: -0.025 },
      H2_Bold: { fontSize: 18, fontWeight: 'bold', lineHeight: 1.5, letterSpacing: -0.025 },
      C1_Bold: { fontSize: 13, fontWeight: 'bold', lineHeight: 1.4, letterSpacing: -0.025 },
      C1_Medium: { fontSize: 13, fontWeight: 'medium', lineHeight: 1.4, letterSpacing: -0.025 },
      C2_Regular: { fontSize: 12, fontWeight: 'regular', lineHeight: 1.4, letterSpacing: -0.025 },
      B1_Bold: { fontSize: 16, fontWeight: 'bold', lineHeight: 1.5, letterSpacing: -0.025 },
      B2_Bold: { fontSize: 14, fontWeight: 'bold', lineHeight: 1.4, letterSpacing: -0.025 },
      B2_Medium: { fontSize: 14, fontWeight: 'medium', lineHeight: 1.4, letterSpacing: -0.025 },
      B2_Regular: { fontSize: 14, fontWeight: 'regular', lineHeight: 1.4, letterSpacing: -0.025 },
    },
  },
});

export type TextProps = HTMLStyledProps<'p'> & TextVariantProps;

const Text = forwardRef<HTMLParagraphElement, TextProps>((props, ref) => {
  const { variant = 'H1_Bold', font, children, ...rest } = props;

  const TextComponent = styled('p', textRecipe);

  return (
    <TextComponent ref={ref} variant={variant} font={font} {...rest}>
      {children}
    </TextComponent>
  );
});

Text.displayName = 'Text';

export default Text;
