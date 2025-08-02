import { RatingGroup, Spacing, Text } from '@/ui-lib';
import { useNavigate } from 'react-router';
import { Box, HStack, Stack, styled } from 'styled-system/jsx';

function RecommendationSection() {
  const navigate = useNavigate();

  const handleClickProduct = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <styled.section css={{ bg: 'background.01_white', px: 5, pt: 5, pb: 6 }}>
      <Text variant="H2_Bold">추천 제품</Text>

      <Spacing size={4} />

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
    </styled.section>
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
    <Box role="button" onClick={onClick} css={{ flexShrink: 0, w: '140px' }}>
      <styled.img
        src={image}
        alt={name}
        css={{
          w: 'full',
          aspectRatio: 1,
          objectFit: 'cover',
          rounded: '2xl',
        }}
      />

      <Spacing size={4} />

      <Stack gap={1}>
        <Text variant="C2_Medium">{name}</Text>
        <RatingGroup value={rating} label={`${rating.toFixed(1)}`} readOnly />
      </Stack>

      <Spacing size={2} />

      <Text variant="C1_Bold">₩{price.toLocaleString()}</Text>
    </Box>
  );
};

export default RecommendationSection;
