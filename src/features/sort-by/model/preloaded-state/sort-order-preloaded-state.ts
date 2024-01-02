import {params, sortOrderParams} from '~/shared/lib';
import {mapSortByOrder} from '../../lib';
import type {SortByOrder} from '../types';

export const sortOrderPreloadedState = (searchParams: URLSearchParams): SortByOrder | null => {
  const value = searchParams.get(params.sort.order) || '';
  const [param] = sortOrderParams.exec(value) || [''];
  return mapSortByOrder(param);
};
