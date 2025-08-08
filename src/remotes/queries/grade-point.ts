import { queryOptions } from '@tanstack/react-query';
import { getGradePoint } from '../fetchers';

export const getGradePointQueryOptions = queryOptions({
  queryKey: ['grade-point'],
  queryFn: getGradePoint,
});
