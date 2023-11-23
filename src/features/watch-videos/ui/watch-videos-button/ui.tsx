import {useAppDispatch} from '~/shared/model';
import {MaterialIcon} from '~/shared/ui/icon';
import type {VideoType} from '../../model';
import {setVideosAttributes} from '../../model';

interface Props {
  cinematicId: Id;
  text: string;
  videosTypes: VideoType[];
}

export const WatchVideosButton = ({cinematicId, text, videosTypes}: Props) => {
  const dispatch = useAppDispatch();

  return (
    <button
      type="button"
      className="mt-auto flex justify-center rounded-md bg-[#161616] py-1 transition-colors duration-300 hover:bg-black sm:py-2 md:py-3 [&>.material-symbols-outlined]:hover:text-fuchsia-700"
      onClick={() => {
        dispatch(setVideosAttributes({cinematicId, videosTypes}));
      }}>
      <MaterialIcon icon="play_arrow" className="transition-colors duration-300 xs:text-[2rem]" />
      <span className="block select-none font-medium xs:leading-8">{text}</span>
    </button>
  );
};
