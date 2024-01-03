import type {GenreFilterItem} from '~/entities/genre';
import {GenreSelection} from '~/entities/genre';

interface Props {
  genres: GenreFilterItem[];
  setFilter: (genres: string[]) => void;
  clearFilter: () => void;
}

export const GenresFilter = ({genres, setFilter, clearFilter}: Props) => {
  return (
    <GenreSelection
      genres={genres}
      onSelectHandler={(clickedGenreName: string, isSelected: boolean) => {
        const clickedGenreIndex = genres.findIndex((genreFilterItem) => genreFilterItem.name === clickedGenreName);
        if (clickedGenreIndex > -1) genres[clickedGenreIndex].isSelected = isSelected;
        const selectedGenres = genres.filter((genreFilterItem) => genreFilterItem.isSelected);
        if (selectedGenres.length) setFilter(selectedGenres.map((genreFilterItem) => genreFilterItem.name));
        else clearFilter();
      }}
    />
  );
};
