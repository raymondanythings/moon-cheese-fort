import { RatingGroup, Text } from '@/ui-lib';
import { useNavigate } from 'react-router';
import { Box, HStack, Stack, styled } from 'styled-system/jsx';

function RecommendationSection() {
  const navigate = useNavigate();

  const handleClickProduct = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <Stack gap={4} px={5} pt={5} pb={6}>
      <Text variant="H2_Bold">추천 제품</Text>
      <HStack gap={1.5} overflowX="auto">
        <ProductItem
          name="크래이머 블루 치즈"
          price={38267}
          rating={4.0}
          image="/moon-cheese-images/cheese-1.jpg"
          onClick={() => handleClickProduct(1)}
        />
        <ProductItem
          name="크래이머 블루 치즈"
          price={38267}
          rating={4.0}
          image="/moon-cheese-images/cheese-2.jpg"
          onClick={() => handleClickProduct(2)}
        />
        <ProductItem
          name="크래이머 블루 치즈"
          price={38267}
          rating={4.0}
          image="/moon-cheese-images/cheese-3.jpg"
          onClick={() => handleClickProduct(3)}
        />
      </HStack>
    </Stack>
  );
}

const ProductItem = ({
  name,
  price,
  rating,
  image,
  onClick,
}: {
  name: string;
  price: number;
  rating: number;
  image: string;
  onClick?: () => void;
}) => {
  return (
    <Box role="button" flexShrink={0} w="140px" onClick={onClick}>
      <Stack gap={4}>
        <styled.img
          src={image}
          alt={name}
          css={{
            w: '120px',
            aspectRatio: 1,
            objectFit: 'cover',
            rounded: '2xl',
          }}
        />

        <Stack gap={2}>
          <Stack gap={1}>
            <Text variant="C2_Medium">{name}</Text>
            <RatingGroup value={rating} readOnly label={`${rating.toFixed(1)}`} />
          </Stack>
          <Text variant="C1_Bold">₩{price.toLocaleString()}</Text>
        </Stack>
      </Stack>
    </Box>
  );
};

export default RecommendationSection;
