import type {FiltersAttributes} from '~/features/filters';
import {
  genresFilterPreloadedState,
  keywordsFilterPreloadedState,
  popularityFilterPreloadedState,
  ratingFilterPreloadedState,
  yearsFilterPreloadedState,
} from '~/features/filters';
import type {SortByAttributes} from '~/features/sort-by';
import {sortOrderPreloadedState, sortOptionPreloadedState} from '~/features/sort-by';
import {SortOptions, SortOrders} from '~/shared/model';

const filtersPreloadedState = (searchParams: URLSearchParams): FiltersAttributes => {
  return {
    genres: genresFilterPreloadedState(searchParams),
    keywords: keywordsFilterPreloadedState(searchParams),
    popularity: popularityFilterPreloadedState(searchParams),
    rating: ratingFilterPreloadedState(searchParams),
    years: yearsFilterPreloadedState(searchParams),
  };
};

const sortByPreloadedState = (searchParams: URLSearchParams): SortByAttributes => {
  return {
    option: sortOptionPreloadedState(searchParams) || SortOptions.Popularity,
    order: sortOrderPreloadedState(searchParams) || SortOrders.Descending,
  };
};

export const storePreloadedState = (): Partial<App.RootState> => {
  return {
    filters: filtersPreloadedState(new URLSearchParams(location.search)),
    sortBy: sortByPreloadedState(new URLSearchParams(location.search)),
  };
};
