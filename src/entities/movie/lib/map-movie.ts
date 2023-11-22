import type {MovieShortResponse, MovieListResponse} from '~/shared/api/dto';
import {MovieListType} from '~/shared/api/dto';
import {createValByKeyMapper, createKeyByValMapper} from '~/shared/lib';
import type {Movie, MovieList} from '../model';

export const mapMovie = (dto: MovieShortResponse): Movie => {
  return {...dto};
};

export const mapMovieList = (dto: MovieListResponse): MovieList => {
  return {
    page: dto.page,
    totalPages: dto.totalPages,
    totalMovies: dto.totalItems,
    movies: dto.items.map(mapMovie),
  };
};

export const mapMovieListType = createValByKeyMapper(MovieListType);

export const mapMovieListTypes = createKeyByValMapper(MovieListType);
