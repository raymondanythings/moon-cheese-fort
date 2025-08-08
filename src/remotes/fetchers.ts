import type { Currency, Grade, GradePoint, Product, RecentProduct } from '@/types';
import { http } from '@/utils/http';

type ExchangeRateResponse = {
  exchangeRate: {
    [key in Currency]: number;
  };
};

export const getExchangeRate = async () => http.get<ExchangeRateResponse>('/api/exchange-rate');

type MeResponse = {
  point: number;
  grade: Grade;
};

export const getMe = async () => http.get<MeResponse>('/api/me');

type GradePointResponse = {
  gradePointList: GradePoint[];
};

export const getGradePoint = async () => http.get<GradePointResponse>('/api/grade/point');

type RecentProductResponse = {
  recentProducts: RecentProduct[];
};

export const getRecentProdusts = async () => http.get<RecentProductResponse>('/api/recent/product/list');

type ProductsResponse = {
  products: Product[];
};

export const getProducts = async () => http.get<ProductsResponse>('/api/product/list');
