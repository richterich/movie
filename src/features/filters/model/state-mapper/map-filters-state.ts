import {selectGenresIdsByNames} from '~/entities/genre';
import {selectFilters} from '../selectors';

export const mapFiltersState = (state: App.RootState) => {
  const {genres, popularity, rating, years} = selectFilters(state);
  const genreIds = selectGenresIdsByNames(state, genres);
  const mappedProp = genreIds.length > 0 ? genreIds : undefined;

  return {
    genres: mappedProp,
    votesMax: popularity?.max,
    votesMin: popularity?.min,
    ratingMax: rating?.max,
    ratingMin: rating?.min,
    yearsMax: years?.max,
    yearsMin: years?.min,
  };
};
