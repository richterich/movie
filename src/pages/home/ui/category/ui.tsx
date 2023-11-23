import type {PropsWithChildren} from 'react';
import {Category} from '~/widgets/category-preview';
import {HorizontalPosterlList} from '~/widgets/preview-list';
import {WatchVideosButton} from '~/features/watch-videos';
import type {MovieListTypes} from '~/entities/movie';
import {useFetchMovieListQuery, mapMovieListType, PosterCard, PosterCardDetails, VideoTypes} from '~/entities/movie';
import {CarouselSlide} from '~/shared/ui/carousel';

interface CategoryPreviewProps {
  id: string;
  name: string;
  url: string;
}

interface PreviewMovieListProps {
  listType: KeyOf<typeof MovieListTypes>;
}

export const CategoryPreview = ({id, name, url, children}: PropsWithChildren<CategoryPreviewProps>) => {
  return (
    <Category id={id}>
      <Category.Header href={url} name={name} />
      <Category.Preview>{children}</Category.Preview>
    </Category>
  );
};

const HorizontalMovieList = ({listType}: PreviewMovieListProps) => {
  const {data, isFetching} = useFetchMovieListQuery({listType: mapMovieListType(listType)});

  return (
    <HorizontalPosterlList isFetching={isFetching && data === undefined}>
      {data?.movies
        .filter((movie) => !movie.isAdult)
        .map((movie) => (
          <CarouselSlide key={movie.id}>
            <PosterCard movie={movie} />
            <PosterCardDetails
              movie={movie}
              watchTrailerSlot={
                <WatchVideosButton
                  text="Trailer"
                  cinematicId={movie.id}
                  videosTypes={[VideoTypes.Trailer, VideoTypes.Teaser]}
                />
              }
            />
          </CarouselSlide>
        ))}
    </HorizontalPosterlList>
  );
};

CategoryPreview.HorizontalMovieList = HorizontalMovieList;
