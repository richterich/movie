import {ReactNode} from 'react';
import {MaterialIcon} from '~/shared/ui/icon';
import {LazyImage} from '~/shared/ui/image';
import type {Movie} from '../../model';

interface Props {
  movie: Movie;
  genresSlot: ReactNode;
  watchTrailerSlot: ReactNode;
}

export const BackdropCardDetails = ({movie, genresSlot, watchTrailerSlot}: Props) => {
  const foramtter = new Intl.DateTimeFormat('en', {month: 'long', year: 'numeric'});
  const releaseDate = movie.releaseDate ? foramtter.format(new Date(movie.releaseDate)) : 'Upcoming';

  return (
    <>
      <div className="absolute left-1 top-1 flex items-center rounded-sm bg-black/50 px-1 py-0.5 text-sm shadow-md shadow-black/50 sm:rounded-md md:left-2 md:top-2 md:rounded-lg md:px-2 md:py-1 md:text-base">
        <MaterialIcon icon="star_rate" className="text-lg font-medium text-yellow-300 md:text-2xl" />
        <span className="cursor-default font-semibold">{movie.rating.toFixed(1)}</span>
      </div>
      <div className="relative pt-[8%] after:absolute after:-top-full after:left-0 after:right-0 after:h-full after:shadow-[inset_0px_-56px_34px_-40px_white,inset_0px_-56px_34px_-40px_white] dark:bg-black after:dark:shadow-[inset_0px_-56px_34px_-40px_black,inset_0px_-56px_34px_-40px_black]">
        <div className="absolute bottom-0 left-0 right-3/4 z-10 hidden px-4 pt-8 md:block lg:px-8 lg:pt-16">
          <div className="relative w-full border-2 border-white/10 bg-[#111] pt-[150%] shadow-2xl shadow-black">
            <LazyImage
              className="absolute left-0 top-0 h-full w-full overflow-hidden"
              src={`https://image.tmdb.org/t/p/w342${movie.poster}`}
              sizes="100%"
              loading="lazy"
              decoding="async"
              alt={movie.title}
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 top-0 z-10 flex flex-col justify-end md:left-1/4">
          <div className="flex items-center">
            {watchTrailerSlot}
            <div className="ml-2 flex w-full select-none flex-col sm:ml-4">
              <h3 className="line-clamp-1 text-base font-semibold md:text-lg lg:text-2xl">{movie.title}</h3>
              <div className="flex">
                <span className="text-xs md:text-sm lg:text-lg">{releaseDate}</span>
                {genresSlot}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
