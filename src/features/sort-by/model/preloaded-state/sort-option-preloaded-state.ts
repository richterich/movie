import {params, sortOptionParams} from '~/shared/lib';
import {mapSortByOption} from '../../lib';
import type {SortByOption} from '../types';

export const sortOptionPreloadedState = (searchParams: URLSearchParams): SortByOption | null => {
  const value = searchParams.get(params.sort.option) || '';
  const [param] = sortOptionParams.exec(value) || [''];
  return mapSortByOption(param);
};
