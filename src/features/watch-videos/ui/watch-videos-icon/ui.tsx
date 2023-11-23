import {useAppDispatch} from '~/shared/model';
import {FlexibleIconButton} from '~/shared/ui/buttons';
import type {VideoType} from '../../model';
import {setVideosAttributes} from '../../model';

interface Props {
  cinematicId: Id;
  videosTypes: VideoType[];
}

export const WatchVideosIcon = ({cinematicId, videosTypes}: Props) => {
  const dispatch = useAppDispatch();

  return (
    <FlexibleIconButton
      text="Watch Trailer"
      icon="play_circle"
      className="cursor-pointer text-4xl transition-colors duration-300 hover:text-fuchsia-700 md:text-5xl lg:text-7xl"
      handler={() => {
        dispatch(setVideosAttributes({cinematicId, videosTypes}));
      }}
    />
  );
};
