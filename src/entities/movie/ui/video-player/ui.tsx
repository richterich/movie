import type {HTMLAttributes} from 'react';
import {YouTubePlayer} from '~/shared/ui/youtube-player';
import type {Video} from '../../model';

interface Props extends HTMLAttributes<HTMLDivElement> {
  videos: Video[];
}

export const VideoPlayer = (props: Props) => {
  const {videos, ...rest} = props;
  const videoKeys = videos.map((video) => video.key);

  return (
    <div {...rest}>
      {videos.length === 0 ? (
        <p className="text-center text-2xl font-semibold">{'Not found :('}</p>
      ) : (
        <YouTubePlayer className="bg-[#111]" videoKeys={videoKeys} />
      )}
    </div>
  );
};
