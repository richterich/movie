import {baseApi} from '~/shared/api';
import {MovieListResponse, MoviesDetailParams} from '~/shared/api/dto';
import {mapMovieList} from '../lib';
import {MovieList} from '../model';

export const movieApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    fetchMovieList: build.query<MovieList, MoviesDetailParams>({
      query: ({listType, page}) => ({
        url: `/movies/${listType}?page=${page}`,
        method: 'GET',
        params: {language: 'en', countryCode: 'US'},
      }),
      transformResponse: (response: MovieListResponse) => mapMovieList(response),
    }),
  }),
});

export const {useFetchMovieListQuery} = movieApi;
