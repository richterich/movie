import type {Genre as GenreDTO, Genres as GenresResponse} from '~/shared/api/dto';
import type {Genre, GenreList} from '../model';

export const mapGenre = (dto: GenreDTO): Genre => {
  return {...dto};
};

export const mapGenreList = (dto: GenresResponse): GenreList => {
  return dto.genres.reduce<GenreList>((acc, genreDTO) => {
    const genre = mapGenre(genreDTO);
    acc[genre.id || 0] = genre;
    return acc;
  }, {});
};
