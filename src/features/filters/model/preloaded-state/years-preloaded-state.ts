import {params, yearsParams, isEmpty} from '~/shared/lib';
import type {YearsFilter} from '../../model';

export const yearsFilterPreloadedState = (searchParams: URLSearchParams): YearsFilter | null => {
  function getFilterValue(value: string) {
    const [match] = yearsParams.exec(value) || [];
    return match;
  }

  const filter: YearsFilter = {};
  const max = getFilterValue(searchParams.get(params.years.max) || '');
  const min = getFilterValue(searchParams.get(params.years.min) || '');

  if (min) filter.min = min;
  if (max) filter.max = max;

  return isEmpty(filter) ? null : filter;
};
