import Button from '@/ui-lib/components/button';
import Text from '@/ui-lib/components/text';
import { useState } from 'react';
import { Box, HStack, Stack } from 'styled-system/jsx';

interface CartItem {
  id: string;
  name: string;
  category: string;
  price: number;
  weight: string;
  quantity: number;
  image: string;
}

function ShoppingCartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: '월래스의 오리지널 웬슬리데일',
      category: 'Cheese',
      price: 12.99,
      weight: '250g',
      quantity: 1,
      image: '/cheese-image.jpg',
    },
    {
      id: '2',
      name: '치즈플 크래커',
      category: 'Cracker',
      price: 10.85,
      weight: '250g',
      quantity: 1,
      image: '/cracker-image.jpg',
    },
    {
      id: '3',
      name: '그로민의 브렉퍼스트 티',
      category: 'Tea',
      price: 6.75,
      weight: '250g',
      quantity: 1,
      image: '/tea-image.jpg',
    },
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCartItems(items => items.filter(item => item.id !== id));
    } else {
      setCartItems(items => items.map(item => (item.id === id ? { ...item, quantity: newQuantity } : item)));
    }
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0; // 무료배송
  const total = subtotal + shipping;

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Cheese':
        return '#FFA500';
      case 'Cracker':
        return '#8B4513';
      case 'Tea':
        return '#228B22';
      default:
        return '#666';
    }
  };

  return (
    <Box minH="100vh" bg="gray.50" p={4}>
      {/* Header */}
      <HStack justify="space-between" mb={6} p={4} bg="white" rounded="lg">
        <HStack>
          <Box w={6} h={6} cursor="pointer">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </Box>
          <Text variant="H1_Bold">장바구니</Text>
        </HStack>

        <HStack>
          <Box bg="gray.100" px={3} py={1} rounded="full">
            <Text variant="C1_Medium" color="gray.600">
              $
            </Text>
          </Box>
          <Box bg="gray.100" px={3} py={1} rounded="full">
            <Text variant="C1_Medium" color="gray.600">
              원
            </Text>
          </Box>
          <Box position="relative" cursor="pointer">
            <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z" />
            </svg>
            <Box
              position="absolute"
              top="-8px"
              right="-8px"
              bg="orange.500"
              color="white"
              rounded="full"
              w={5}
              h={5}
              fontSize="xs"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              3
            </Box>
          </Box>
          <Text variant="C1_Bold">전체삭제</Text>
        </HStack>
      </HStack>

      {/* Cart Items */}
      <Stack gap={4} mb={6}>
        {cartItems.map(item => (
          <Box key={item.id} bg="white" p={4} rounded="lg" shadow="sm">
            <HStack justify="space-between" alignItems="flex-start">
              <HStack gap={4} flex={1}>
                {/* Product Image */}
                <Box
                  w={16}
                  h={16}
                  bg="gray.200"
                  rounded="lg"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  overflow="hidden"
                >
                  <Box w="full" h="full" bg="gray.300" />
                </Box>

                {/* Product Info */}
                <Stack gap={2} flex={1}>
                  <HStack gap={2}>
                    <Text
                      variant="C1_Bold"
                      color={getCategoryColor(item.category)}
                      bg={`${getCategoryColor(item.category)}15`}
                      px={2}
                      py={1}
                      rounded="md"
                      fontSize="xs"
                    >
                      {item.category}
                    </Text>
                  </HStack>

                  <Text variant="B2_Bold" color="gray.900">
                    {item.name}
                  </Text>

                  <Text variant="C1_Medium" color="gray.500">
                    {item.weight}
                  </Text>

                  <Text variant="H2_Bold" color="gray.900">
                    ${item.price.toFixed(2)}
                  </Text>
                </Stack>
              </HStack>

              {/* Remove Button */}
              <Box cursor="pointer" onClick={() => removeItem(item.id)}>
                <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" color="gray.400">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </Box>
            </HStack>

            {/* Quantity Controls */}
            <HStack justify="flex-end" mt={4}>
              <HStack bg="gray.100" rounded="full" p={1}>
                <Box
                  w={8}
                  h={8}
                  bg="white"
                  rounded="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  cursor="pointer"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  <Text variant="B2_Bold">−</Text>
                </Box>

                <Text variant="B2_Medium" px={4}>
                  {item.quantity}
                </Text>

                <Box
                  w={8}
                  h={8}
                  bg="white"
                  rounded="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  cursor="pointer"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <Text variant="B2_Bold">+</Text>
                </Box>
              </HStack>
            </HStack>
          </Box>
        ))}
      </Stack>

      {/* Price Summary */}
      <Box bg="white" p={4} rounded="lg" shadow="sm" mb={6}>
        <Text variant="H2_Bold" color="gray.900" mb={4}>
          결제금액
        </Text>

        <Stack gap={3}>
          <HStack justify="space-between">
            <Text variant="B2_Regular" color="gray.600">
              주문금액({cartItems.length}개)
            </Text>
            <Text variant="B2_Bold" color="gray.900">
              ${subtotal.toFixed(2)}
            </Text>
          </HStack>

          <HStack justify="space-between">
            <Text variant="B2_Regular" color="gray.600">
              배송비
            </Text>
            <Text variant="B2_Bold" color="green.500">
              무료배송
            </Text>
          </HStack>

          <Box h="1px" bg="gray.200" my={2} />

          <HStack justify="space-between">
            <Text variant="H2_Bold" color="gray.900">
              총 금액
            </Text>
            <Text variant="H2_Bold" color="gray.900">
              ${total.toFixed(2)}
            </Text>
          </HStack>
        </Stack>
      </Box>

      {/* Checkout Button */}
      <Button w="full" color="primary" rounded="lg">
        결제 진행
      </Button>

      {/* Payment Info */}
      <Stack gap={2} mt={4} align="center">
        <Text variant="C2_Regular" color="gray.500" textAlign="center">
          우리는 신용카드, 은행 송금, 모바일 결제, 현금을 받아들입니다
        </Text>
        <Text variant="C2_Regular" color="gray.500" textAlign="center">
          안전한 체크아웃
        </Text>
        <Text variant="C2_Regular" color="gray.500" textAlign="center">
          귀하의 결제 정보는 암호화되어 안전합니다.
        </Text>
      </Stack>

      {/* Delivery Info */}
      <HStack gap={3} mt={6} p={4} bg="blue.50" rounded="lg">
        <Box>
          <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" color="blue.600">
            <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
          </svg>
        </Box>
        <Stack gap={1}>
          <Text variant="B2_Bold" color="blue.700">
            3-5일 후 도착 예정
          </Text>
          <Text variant="C2_Regular" color="blue.600">
            결제 시 익스프레스 배송 가능
          </Text>
        </Stack>
      </HStack>
    </Box>
  );
}

export default ShoppingCartPage;
