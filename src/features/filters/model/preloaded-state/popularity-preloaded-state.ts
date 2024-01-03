import {params, popularityParams, isEmpty} from '~/shared/lib';
import type {PopularityFilter} from '../../model';

export const popularityFilterPreloadedState = (searchParams: URLSearchParams): PopularityFilter | null => {
  function getFilterValue(value: string) {
    const [match] = popularityParams.exec(value) || [];
    return match;
  }

  const filter: PopularityFilter = {};
  const min = getFilterValue(searchParams.get(params.popularity.min) || '');
  const max = getFilterValue(searchParams.get(params.popularity.max) || '');

  if (min) filter.min = Number.parseFloat(min);
  if (max) filter.max = Number.parseFloat(max);

  return isEmpty(filter) ? null : filter;
};
