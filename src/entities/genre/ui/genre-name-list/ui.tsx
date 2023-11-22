import {useAppSelector} from '~/shared/model';
import {selectGenresByIds} from '../../model';

interface Props {
  genreIds: Id[];
}

export const GenreNameList = ({genreIds}: Props) => {
  const genres = useAppSelector((state) => selectGenresByIds(state, genreIds));

  return (
    <ul className="ml-2 hidden space-x-2 text-xs font-semibold xs:flex sm:ml-4 sm:space-x-2 md:text-sm lg:text-base">
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};
