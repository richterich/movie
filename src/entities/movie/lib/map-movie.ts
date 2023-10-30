import {MovieShortResponse, MovieListResponse} from '~/shared/api/dto';
import {Movie, MovieList} from '../model';

export const mapMovie = (dto: MovieShortResponse): Movie => {
  return {...dto};
};

export const mapMovieList = (dto: MovieListResponse): MovieList => {
  return {
    ...dto,
    totalMovies: dto.totalItems,
    movies: dto.items.map(mapMovie),
  };
};
