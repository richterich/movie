import {params, ratingParams, isEmpty} from '~/shared/lib';
import type {RatingFilter} from '../../model';

export const ratingFilterPreloadedState = (searchParams: URLSearchParams): RatingFilter | null => {
  function getFilterValue(value: string) {
    const [match] = ratingParams.exec(value) || [];
    return match;
  }

  const filter: RatingFilter = {};
  const min = getFilterValue(searchParams.get(params.rating.min) || '');
  const max = getFilterValue(searchParams.get(params.rating.max) || '');

  if (min) filter.min = Number.parseFloat(min);
  if (max) filter.max = Number.parseFloat(max);

  return isEmpty(filter) ? null : filter;
};
