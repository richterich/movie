export const paths = {
  home: '/',
  movies: '/movies',
  series: '/series',
  animations: '/animations',

  movieDetails: (id: Id): string => `/movies/${id}/details`,
};
