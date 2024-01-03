import {params, genresParams} from '~/shared/lib';

export const genresFilterPreloadedState = (searchParams: URLSearchParams): string[] => {
  const value = searchParams.get(params.genres) || '';
  const [match] = genresParams.exec(value.trim()) || [];
  if (match) return match.split(',').map((genre) => genre.trim());
  return [];
};
