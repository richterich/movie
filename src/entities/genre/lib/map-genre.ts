import {Genre as GenreDTO, Genres as GenresResponse} from '~/shared/api/dto';
import {Genre, GenreList} from '../model';

export const mapGenre = (dto: GenreDTO): Genre => {
  return {...dto};
};

export const mapGenreList = (dto: GenresResponse): GenreList => {
  return {genres: dto.genres.map(mapGenre)};
};
