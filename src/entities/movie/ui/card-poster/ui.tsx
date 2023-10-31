import {Link} from 'react-router-dom';
import {paths} from '~/shared/lib';
import {type Movie} from '../../model';

interface Props {
  movie: Movie;
}

export const PosterCard = ({movie}: Props) => {
  const foramtter = new Intl.DateTimeFormat('en', {month: 'long', year: 'numeric'});
  const releaseDate = movie.releaseDate ? foramtter.format(new Date(movie.releaseDate)) : 'Upcoming';

  return (
    <Link className="relative z-10 h-full w-full [&>div]:hover:visible" to={paths.movieDetails(movie.id)}>
      <div className="relative bg-[#111] pt-[150%]">
        <img
          className="absolute inset-0 h-full w-full"
          src={`https://image.tmdb.org/t/p/w300${movie.poster}`}
          sizes="100%"
          loading="lazy"
          decoding="async"
          alt={movie.title}
        />
      </div>
      <div className="invisible absolute inset-0 flex flex-col justify-end bg-black/50 px-2 py-3 opacity-0 transition-[opacity,visibility,background-color] duration-300 hover:bg-white/80 hover:opacity-100 hover:dark:bg-black/80 sm:px-3 sm:py-4 md:px-4 md:py-5 lg:px-5 lg:py-6">
        <h3 className="font-semibold">{movie.title}</h3>
        <span>{releaseDate}</span>
      </div>
    </Link>
  );
};
