import {baseApi} from '~/shared/api';
import type {
  MovieListResponse,
  MoviesDetailParams,
  MovieVideosResponse,
  VideosDetailParams,
  MoviesListParams,
} from '~/shared/api/dto';
import {SortOrder, SortOption} from '~/shared/api/dto';
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
    fetchMoviesByFilters: build.query<MovieList, MoviesListParams>({
      query: ({
        withGenres,
        voteCountGte,
        voteCountLte,
        ratingGte,
        ratingLte,
        primaryReleaseDateGte,
        primaryReleaseDateLte,
        withKeywords,
        sortBy = {option: SortOption.Popularity, order: SortOrder.Desc},
        page = 1,
        language = 'en-US',
      }) => ({
        url: `/discover/movies`,
        method: 'GET',
        params: {
          withGenres,
          'voteCount.gte': voteCountGte,
          'voteCount.lte': voteCountLte,
          'rating.gte': ratingGte,
          'rating.lte': ratingLte,
          'primaryReleaseDate.gte': primaryReleaseDateGte,
          'primaryReleaseDate.lte': primaryReleaseDateLte,
          withKeywords,
          'sortBy[option]': sortBy.option,
          'sortBy[order]': sortBy.order,
          page,
          language,
        },
      }),
      transformResponse: (response: MovieListResponse) => mapMovieList(response),
    }),
  }),
});

export const {useFetchMovieListQuery, useFetchVideosQuery, useFetchMoviesByFiltersQuery} = movieApi;
