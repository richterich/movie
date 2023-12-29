import {cm} from '~/shared/lib';
import type {GenreFilterItem} from '../../model';

interface Props {
  genres: GenreFilterItem[];
  onSelectHandler: (clickedGenreName: string, isSelected: boolean) => void;
}

export const GenreSelection = ({genres, onSelectHandler}: Props) => {
  return (
    <ul className="flex flex-wrap gap-2 text-xs font-medium md:text-sm lg:text-base">
      {genres.map((genre: GenreFilterItem) => {
        return (
          <li key={genre.name}>
            <label
              className={cm(
                'relative flex cursor-pointer select-none items-center justify-center rounded-full px-2 py-1 ring-1 ring-white/25 transition-colors hover:bg-fuchsia-950',
                {
                  'hover:bg-fuchsia-800': genre.isSelected,
                  'bg-fuchsia-800': genre.isSelected,
                }
              )}>
              <input
                type="checkbox"
                name={genre.name}
                checked={genre.isSelected}
                className="invisible absolute"
                onChange={({currentTarget}) => {
                  onSelectHandler(genre.name, currentTarget.checked);
                }}
              />
              {genre.name}
            </label>
          </li>
        );
      })}
    </ul>
  );
};
