import type {PropsWithChildren} from 'react';
import {useContext} from 'react';
import {PlayerOverlay} from '~/widgets/video-player';
import {selectVideosAttributes, WatchVideosContext} from '~/features/watch-videos';
import {mapVideoType, useFetchVideosQuery, VideoPlayer as MovieVideoPlayer} from '~/entities/movie';
import {useAppSelector} from '~/shared/model';

interface OverlayProps {}

export const VideoOverlay = ({children}: PropsWithChildren<OverlayProps>) => {
  const videosAttributes = useAppSelector(selectVideosAttributes);

  return <PlayerOverlay videosAttributes={videosAttributes}>{children}</PlayerOverlay>;
};

// TODO:
// Discuss to add a specific endpoint to fetch videos by cinematic type. /videos?cinematicId=155&videosTypes=Trailer&cinematicType=Movie
// TMDB provide endpoint only relative on cinematic type. /movies/videos?... or /series/videos?...
const VideoPlayer = () => {
  const {cinematicId, videosTypes} = useContext(WatchVideosContext);
  const {data, isFetching} = useFetchVideosQuery({
    id: cinematicId || 0,
    types: videosTypes?.map(mapVideoType),
  });

  return (
    <PlayerOverlay.PlayerOnOverlay
      isFetching={isFetching && data === undefined}
      playerSlot={
        <MovieVideoPlayer
          className="relative w-full max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8"
          videos={data?.videos || []}
        />
      }
    />
  );
};

VideoOverlay.VideoPlayer = VideoPlayer;
