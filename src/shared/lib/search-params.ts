export const genresParams = /^[a-zA-Z]+(?:[, ]+[a-zA-Z]+)*$/;
export const keywordsParams = /^[a-zA-Z]+(?:[, ]+[a-zA-Z]+)*$/;
export const popularityParams = /^\d+(\.\d+)?$/;
export const ratingParams = /^(0*(?:[1-9](?:\.\d+)?|10(?:\.0+)?))$/;
export const yearsParams = /^[1-9]\d{3}$/;
export const sortOptionParams = /^(?!_)(?!.*_$)[a-zA-Z_]{1,16}$/;
export const sortOrderParams = /^(desc|asc)$/i;

export const params = {
  genres: 'genres',
  keywords: 'keywords',
  popularity: {min: 'popularity.min', max: 'popularity.max'},
  rating: {min: 'rating.min', max: 'rating.max'},
  years: {min: 'years.min', max: 'years.max'},
  sort: {option: 'sort.by', order: 'sort.order'},
};

export const OrderSortParams = {
  Ascending: 'asc',
  Descending: 'desc',
} as const;

export const OptionSortParams = {
  Popularity: 'popularity',
  Rating: 'rating',
  ReleaseDate: 'release_date',
  Title: 'title',
} as const;
