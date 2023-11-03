import {baseApi} from '~/shared/api';
import {MovieListResponse, MoviesDetailParams} from '~/shared/api/dto';
import {mapMovieList} from '../lib';
import {MovieList} from '../model';

export const movieApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    fetchMovieList: build.query<MovieList, MoviesDetailParams>({
      query: ({listType, page = 1, language = 'en', countryCode = 'US'}) => ({
        url: `/movies/${listType}`,
        method: 'GET',
        params: {page, language, countryCode},
      }),
      transformResponse: (response: MovieListResponse) => mapMovieList(response),
    }),
  }),
});

export const {useFetchMovieListQuery} = movieApi;
