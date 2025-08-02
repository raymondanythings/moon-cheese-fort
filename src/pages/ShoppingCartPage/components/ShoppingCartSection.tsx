import { Button, Counter, Tag, Text, XIcon, type TagType } from '@/ui-lib';
import { Center, Divider, HStack, Stack, styled } from 'styled-system/jsx';

function ShoppingCartSection() {
  return (
    <Stack gap={4} p={5}>
      <HStack justify="space-between">
        <Text variant="H2_Bold">장바구니</Text>
        <Button color={'neutral'} size="sm">
          전체삭제
        </Button>
      </HStack>
      <Stack gap={5} p={5} border="1px solid" borderColor="border.01_gray" rounded="2xl">
        <ShoppingCartItem
          type="cheese"
          image="/moon-cheese-images/cheese-1.jpg"
          name="월레스의 오리지널 웬슬리데일"
          price={12.99}
          quantity={1}
          description="월레스의 오리지널 웬슬리데일"
          onDelete={() => {}}
        />
        <Divider color="border.01_gray" />
        <ShoppingCartItem
          type="cracker"
          image="/moon-cheese-images/cheese-2.jpg"
          name="월레스의 오리지널 웬슬리데일"
          price={12.99}
          quantity={1}
          description="월레스의 오리지널 웬슬리데일"
          onDelete={() => {}}
        />
        <Divider color="border.01_gray" />
        <ShoppingCartItem
          type="tea"
          image="/moon-cheese-images/cheese-3.jpg"
          name="월레스의 오리지널 웬슬리데일"
          price={12.99}
          quantity={1}
          description="월레스의 오리지널 웬슬리데일"
          onDelete={() => {}}
        />
      </Stack>
    </Stack>
  );
}

const ShoppingCartItem = ({
  type,
  image,
  name,
  description,
  price,
  quantity,
  onDelete,
}: {
  type: TagType;
  image: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  onDelete?: () => void;
}) => {
  return (
    <HStack gap={4} alignItems="start">
      <styled.img src={image} alt={name} w="60px" h="60px" rounded="lg" />
      <Stack gap={2} flex={1}>
        <Stack gap={1}>
          <HStack justify="space-between">
            <Tag type={type} />
            <Center onClick={onDelete} color="neutral.03_gray">
              <XIcon size={16} />
            </Center>
          </HStack>
          <Text variant="B2_Bold">{name}</Text>
          <Text variant="C1_Medium" color="neutral.02_gray">
            {description}
          </Text>
        </Stack>
        <HStack justify="space-between">
          <Text variant="H1_Bold">${price.toFixed(2)}</Text>
          <Counter value={quantity} />
        </HStack>
      </Stack>
    </HStack>
  );
};

export default ShoppingCartSection;
