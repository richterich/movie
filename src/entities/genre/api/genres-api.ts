import {baseApi} from '~/shared/api';
import type {Genres as GenresResponse} from '~/shared/api/dto';
import {mapGenreList} from '../lib';
import type {GenreList} from '../model';

export const genresApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    fetchGenreList: build.query<GenreList, {language?: string}>({
      query: ({language = 'en'}) => ({
        url: `/genres/movies`,
        method: 'GET',
        params: {language},
      }),
      transformResponse: (response: GenresResponse) => mapGenreList(response),
    }),
  }),
});

export const {useFetchGenreListQuery} = genresApi;
