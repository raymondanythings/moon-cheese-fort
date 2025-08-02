import { Counter, RatingGroup, SubGNB, Text } from '@/ui-lib';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Box, Grid, HStack, Stack, styled } from 'styled-system/jsx';

function ProductListSection() {
  const [currentTab, setCurrentTab] = useState('전체');
  const navigate = useNavigate();

  const handleClickProduct = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <Box bg="background.01_white">
      <Box px={5} pt={5} pb={4}>
        <Text variant="H1_Bold">판매중인 상품</Text>
      </Box>
      <SubGNB.Root value={currentTab} onValueChange={details => setCurrentTab(details.value)}>
        <SubGNB.List>
          <SubGNB.Trigger value="전체">전체</SubGNB.Trigger>
          <SubGNB.Trigger value="치즈">치즈</SubGNB.Trigger>
          <SubGNB.Trigger value="크래커">크래커</SubGNB.Trigger>
          <SubGNB.Trigger value="티">티</SubGNB.Trigger>
        </SubGNB.List>
      </SubGNB.Root>
      <Grid gridTemplateColumns="repeat(2, 1fr)" rowGap={9} columnGap={4} p={5}>
        <ProductItem
          image="/moon-cheese-images/cheese-1.jpg"
          name="월레스의 오리지널 웬슬리데일"
          description="월레스가 아침마다 찾는 바로 그 치즈!"
          price={12.99}
          rating={4.5}
          freeTag="milk"
          onClick={() => handleClickProduct(1)}
        />
        <ProductItem
          image="/moon-cheese-images/cheese-2.jpg"
          name="월레스의 오리지널 웬슬리데일"
          description="월레스가 아침마다 찾는 바로 그 치즈!"
          price={12.99}
          rating={3}
          freeTag="caffeine"
          onClick={() => handleClickProduct(2)}
        />
        <ProductItem
          image="/moon-cheese-images/cheese-3.jpg"
          name="월레스의 오리지널 웬슬리데일"
          description="월레스가 아침마다 찾는 바로 그 치즈!"
          price={12.99}
          rating={5}
          freeTag="gluten"
          onClick={() => handleClickProduct(3)}
        />
      </Grid>
    </Box>
  );
}

const ProductItem = ({
  image,
  name,
  description,
  price,
  rating,
  freeTag,
  onClick,
}: {
  image: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  freeTag?: 'milk' | 'caffeine' | 'gluten';
  onClick?: () => void;
}) => {
  const [count, setCount] = useState(0);

  return (
    <Stack gap={4} tabIndex={0} onClick={onClick}>
      <styled.img src={image} alt={name} css={{ w: 'full', aspectRatio: 1, objectFit: 'cover', rounded: '2xl' }} />
      <Stack gap={3}>
        <Stack gap={2}>
          <Stack gap={0.5}>
            <Text variant="B2_Bold">{name}</Text>
            <Text variant="C1_Medium" color="neutral.02_gray">
              {description}
            </Text>
          </Stack>
          <HStack justify="space-between" alignItems={'start'}>
            <Stack gap={2}>
              <RatingGroup label={`${rating.toFixed(1)}`} readOnly value={rating} />
              <Text variant="B1_Bold">${price.toFixed(2).toLocaleString()}</Text>
            </Stack>
            {freeTag && <IconFree type={freeTag} />}
          </HStack>
        </Stack>
        <Counter value={count} onValueChange={setCount} />
      </Stack>
    </Stack>
  );
};

function IconFree({ type }: { type: 'milk' | 'caffeine' | 'gluten' }) {
  if (type === 'milk') {
    return <img src="/icons/no-milk.png" alt="no-milk" width={32} height={32} />;
  }
  if (type === 'caffeine') {
    return <img src="/icons/decaffeine.png" alt="decaffeine" width={32} height={32} />;
  }
  if (type === 'gluten') {
    return <img src="/icons/gluten-free.png" alt="gluten-free" width={32} height={32} />;
  }
}

export default ProductListSection;
