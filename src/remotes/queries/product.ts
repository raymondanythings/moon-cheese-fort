import { queryOptions } from '@tanstack/react-query';
import { getProducts, getRecentProdusts } from '../fetchers';

export const getRecentProductsQueryOptions = queryOptions({
  queryKey: ['recent-products'],
  queryFn: getRecentProdusts,
});

export const getProductsQueryOptions = queryOptions({
  queryKey: ['products'],
  queryFn: getProducts,
});
