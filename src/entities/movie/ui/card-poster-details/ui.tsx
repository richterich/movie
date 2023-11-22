import type {ReactNode} from 'react';
import {MaterialIcon} from '~/shared/ui/icon';
import type {Movie} from '../../model';

interface Props {
  movie: Movie;
  watchTrailerSlot: ReactNode;
}

export const PosterCardDetails = ({movie, watchTrailerSlot}: Props) => {
  return (
    <div className="relative h-full w-full bg-[#111] pt-[65%] xs:pt-[80%]">
      <div className="absolute inset-0 flex flex-col justify-start px-2 py-3 sm:px-3 sm:py-4 md:px-4 md:py-5 lg:px-5 lg:py-6">
        <div className="flex">
          <MaterialIcon icon="star_rate" className="text-yellow-300" />
          <span className="cursor-default">{movie.rating.toFixed(1)}</span>
        </div>
        <h3
          title={movie.title}
          className="mt-1 hidden cursor-default font-semibold xs:line-clamp-1 sm:mt-2 md:mt-3 lg:mt-4 lg:line-clamp-2">
          {movie.title}
        </h3>
        {watchTrailerSlot}
      </div>
    </div>
  );
};
