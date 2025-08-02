import Button from '@/ui-lib/components/button';
import { Counter } from '@/ui-lib/components/counter';
import RatingGroup from '@/ui-lib/components/rating-group';
import Tag, { type TagType } from '@/ui-lib/components/tag';
import Text from '@/ui-lib/components/text';
import { Divider, HStack, Stack } from 'styled-system/jsx';

type ProductInfoSectionProps = {
  name: string;
  category: TagType;
  rating: number;
  price: number;
  quantity: number;
};

function ProductInfoSection({ name, category, rating, price, quantity }: ProductInfoSectionProps) {
  return (
    <Stack p={5} gap={5}>
      <Stack gap={4}>
        <Stack gap={2}>
          <Tag type={category} />
          <Text variant="B1_Bold">{name}</Text>
          <RatingGroup value={rating} readOnly label={`${rating.toFixed(1)}`} />
        </Stack>
        <Text variant="H1_Bold">${price.toFixed(2)}</Text>
      </Stack>

      <HStack justify="space-between" alignItems="center">
        <HStack gap={2}>
          <Text variant="C1_Medium">재고</Text>
          <Divider orientation="vertical" color="border.01_gray" h={4} />
          <Text variant="C1_Medium" color="secondary.02_orange">
            {quantity}EA
          </Text>
        </HStack>
        <Counter />
      </HStack>
      <Button fullWidth color="primary" size="lg">
        장바구니
      </Button>
    </Stack>
  );
}

export default ProductInfoSection;
