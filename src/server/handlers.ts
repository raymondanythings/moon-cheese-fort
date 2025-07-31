import { HttpResponse, http } from 'msw';
import { products } from './data';

const ERROR_CHANCE = 0.33;

export const handlers = [
  http.get('/api/product/list', async () => {
    const isError = isErrorRandomly(ERROR_CHANCE);
    if (isError) {
      return new HttpResponse(null, {
        status: 500,
        statusText: 'Internal Server Error',
      });
    }

    return HttpResponse.json({
      products: products,
      status: 200,
    });
  }),
];

function isErrorRandomly(threshold: number) {
  const randomNumber = Math.random();
  return randomNumber < threshold;
}
