import {baseApi} from '~/shared/api';
import {Genres as GenresResponse} from '~/shared/api/dto';
import {mapGenreList} from '../lib';
import {GenreList} from '../model';

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
