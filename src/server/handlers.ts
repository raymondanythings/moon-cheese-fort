import { HttpResponse, http } from 'msw';

const ERROR_CHANCE = 0.33;

export const handlers = [
  // test
  http.get('/api/product/list', async () => {
    return HttpResponse.json({
      product: Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        name: `Product ${index + 1}`,
        price: 10000,
        image: `https://via.placeholder.com/150?text=Product+${index + 1}`,
      })),
    });
  }),
];

function isErrorRandomly(threshold: number) {
  const randomNumber = Math.random();
  return randomNumber < threshold;
}

//상품
// - 카테고리
// - 수량
// - 금액
// - 설명
// - 이미지
// - 평점
// - 좋아요(위시리스트)
