import type {RatingFilter, PopularityFilter, YearsFilter} from './types';

export interface FiltersAttributes {
  genres: string[];
  years: YearsFilter | null;
  rating: RatingFilter | null;
  popularity: PopularityFilter | null;
  keywords: string[];
}
