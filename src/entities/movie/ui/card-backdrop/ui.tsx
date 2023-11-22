import {Link} from 'react-router-dom';
import {paths} from '~/shared/lib';
import {LazyImage} from '~/shared/ui/image';
import type {Movie} from '../../model';

interface Props {
  movie: Movie;
}

export const BackdropCard = ({movie}: Props) => {
  return (
    <Link className="relative h-full w-full" to={paths.movieDetails(movie.id)}>
      <div className="relative bg-[#111] pt-[56.25%] after:absolute after:inset-0 after:bg-black/25 after:opacity-0 after:transition-opacity after:duration-300 after:hover:opacity-100">
        <LazyImage
          className="absolute left-0 top-0 h-full w-full overflow-hidden"
          src={`https://image.tmdb.org/t/p/w1280${movie.backdrop}`}
          sizes="100%"
          loading="lazy"
          decoding="async"
          alt={movie.title}
        />
      </div>
    </Link>
  );
};
