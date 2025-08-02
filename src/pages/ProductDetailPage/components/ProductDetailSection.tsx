import { Text } from '@/ui-lib';
import { Stack } from 'styled-system/jsx';

type ProductDetailSectionProps = {
  description: string;
};

function ProductDetailSection({ description }: ProductDetailSectionProps) {
  return (
    <Stack gap={4} px={5} pt={5} pb={6}>
      <Text variant="H2_Bold">상세 정보</Text>
      <Text variant="B2_Regular" color="neutral.02_gray">
        {description}
      </Text>
    </Stack>
  );
}

export default ProductDetailSection;
