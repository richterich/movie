import type {PropsWithChildren} from 'react';
import {Category} from '~/widgets/category-preview';
import {HorizontalBackdroplList} from '~/widgets/preview-list';
import {WatchVideosIcon} from '~/features/watch-videos';
import {GenreNameList} from '~/entities/genre';
import type {MovieListTypes} from '~/entities/movie';
import {
  useFetchMovieListQuery,
  mapMovieListType,
  BackdropCard,
  BackdropCardDetails,
  VideoTypes,
} from '~/entities/movie';
import {CarouselSlide} from '~/shared/ui/carousel';

interface CategoryHeroProps {
  id: string;
}

interface PreviewMovieListProps {
  listType: KeyOf<typeof MovieListTypes>;
}

export const CategoryHero = ({id, children}: PropsWithChildren<CategoryHeroProps>) => {
  return (
    <Category id={id}>
      <Category.Preview>{children}</Category.Preview>
    </Category>
  );
};

const HorizontalMovieList = ({listType}: PreviewMovieListProps) => {
  const {data, isFetching} = useFetchMovieListQuery({listType: mapMovieListType(listType)});

  return (
    <HorizontalBackdroplList isFetching={isFetching && data === undefined}>
      {data?.movies
        .filter((movie) => !movie.isAdult)
        .map((movie) => (
          <CarouselSlide key={movie.id} className="relative">
            <BackdropCard movie={movie} />
            <BackdropCardDetails
              movie={movie}
              genresSlot={<GenreNameList genreIds={movie.genreIds || []} />}
              watchTrailerSlot={
                <WatchVideosIcon cinematicId={movie.id} videosTypes={[VideoTypes.Trailer, VideoTypes.Teaser]} />
              }
            />
          </CarouselSlide>
        ))}
    </HorizontalBackdroplList>
  );
};

CategoryHero.HorizontalMovieList = HorizontalMovieList;
