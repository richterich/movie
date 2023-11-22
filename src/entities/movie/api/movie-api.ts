import {baseApi} from '~/shared/api';
import type {MovieListResponse, MoviesDetailParams, MovieVideosResponse, VideosDetailParams} from '~/shared/api/dto';
import {mapMovieList, mapVideoList} from '../lib';
import type {MovieList, VideoList} from '../model';

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
    fetchVideos: build.query<VideoList, VideosDetailParams>({
      query: ({id, types, language = 'en'}) => ({
        url: `/movies/${id}/videos`,
        method: 'GET',
        params: {types, language},
      }),
      transformResponse: (response: MovieVideosResponse) => mapVideoList(response),
    }),
  }),
});

export const {useFetchMovieListQuery, useFetchVideosQuery} = movieApi;
