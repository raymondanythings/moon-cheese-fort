import Button from '@/ui-lib/components/button';
import { Counter } from '@/ui-lib/components/counter';
import RatingGroup from '@/ui-lib/components/rating-group';
import Text from '@/ui-lib/components/text';
import { StopCircleIcon } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Box, Grid, HStack, Stack } from 'styled-system/jsx';

function ProductListSection() {
  return (
    <Box bg="background.01_white">
      <Box px={5} pt={5} pb={4}>
        <Text variant="H1_Bold">최근 구매한 상품</Text>
      </Box>
      <SubGNB />
      <Grid gridTemplateColumns="repeat(2, 1fr)" rowGap={9} columnGap={4} p={5}>
        <ProductItem
          id={1}
          image="/images/cheese.jpg"
          name="월레스의 오리지널 웬슬리데일"
          description="월레스가 아침마다 찾는 바로 그 치즈!"
          price={12.99}
          rating={4}
        />
        <ProductItem
          id={2}
          image="/images/cheese.jpg"
          name="월레스의 오리지널 웬슬리데일"
          description="월레스가 아침마다 찾는 바로 그 치즈!"
          price={12.99}
          rating={3}
        />
        <ProductItem
          id={3}
          image="/images/cheese.jpg"
          name="월레스의 오리지널 웬슬리데일"
          description="월레스가 아침마다 찾는 바로 그 치즈!"
          price={12.99}
          rating={5}
        />
      </Grid>
    </Box>
  );
}

const SubGNB = () => {
  return (
    <HStack gap={2} px={5} py={2.5}>
      <Button rounded="full" variant="black" size="sm">
        전체
      </Button>
      <Button rounded="full" variant="neutral" size="sm">
        치즈
      </Button>
      <Button rounded="full" variant="neutral" size="sm">
        크래커
      </Button>
      <Button rounded="full" variant="neutral" size="sm">
        티
      </Button>
    </HStack>
  );
};

const ProductItem = ({
  id,
  image,
  name,
  description,
  price,
  rating,
}: {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  rating: number;
}) => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <Stack gap={4} tabIndex={0} onClick={() => navigate(`/detail/${id}`)}>
      <img src={image} alt={name} style={{ width: '100%', aspectRatio: 1, objectFit: 'cover', borderRadius: 16 }} />
      <Stack gap={3}>
        <Stack gap={2}>
          <Stack gap={0.5}>
            <Text variant="B2_Bold">{name}</Text>
            <Text variant="C1_Medium" color="neutral.02_gray">
              {description}
            </Text>
          </Stack>
          <HStack justify="space-between">
            <Stack gap={2}>
              <RatingGroup label={`${rating}`} readOnly value={rating} size="sm" />
              <Text variant="B1_Bold">${price.toFixed(2).toLocaleString()}</Text>
            </Stack>
            <StopCircleIcon size={16} />
          </HStack>
        </Stack>
        <Counter value={count} onValueChange={setCount} />
      </Stack>
    </Stack>
  );
};

export default ProductListSection;
