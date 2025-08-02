import { HttpResponse, http } from 'msw';
import { gradePointList, gradeShippingList, products, user } from './data';

const ERROR_CHANCE = 0.33;

const EXCHANGE_RATE = Math.floor(Math.random() * (1400 - 1200 + 1)) + 1200;

export const handlers = [
  http.get('/api/product/list', async () => {
    const isError = isErrorRandomly(ERROR_CHANCE);
    if (isError) {
      return new HttpResponse(null, {
        status: 500,
        statusText: 'Internal Server Error',
      });
    }

    return HttpResponse.json(
      {
        products: products,
      },
      { status: 200 }
    );
  }),

  http.get('/api/exchange-rate', async () => {
    return HttpResponse.json(
      {
        exchangeRate: EXCHANGE_RATE,
      },
      { status: 200 }
    );
  }),

  http.get('/api/me', async () => {
    return HttpResponse.json(
      {
        id: user.id,
        name: user.name,
        email: user.email,
        point: user.point,
        grade: user.grade,
        wishList: user.wishList,
      },
      { status: 200 }
    );
  }),

  http.get('/api/grade/point', async () => {
    return HttpResponse.json(
      {
        gradePointList,
      },
      { status: 200 }
    );
  }),

  http.get('/api/grade/shipping', async () => {
    return HttpResponse.json(
      {
        gradeShippingList,
      },
      { status: 200 }
    );
  }),
];

function isErrorRandomly(threshold: number) {
  const randomNumber = Math.random();
  return randomNumber < threshold;
}
