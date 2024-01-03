import {params, keywordsParams} from '~/shared/lib';

export const keywordsFilterPreloadedState = (searchParams: URLSearchParams): string[] => {
  const value = searchParams.get(params.keywords) || '';
  const [match] = keywordsParams.exec(value.trim()) || [];
  if (match) return value.split(',').map((keyword) => keyword.trim());
  return [];
};
