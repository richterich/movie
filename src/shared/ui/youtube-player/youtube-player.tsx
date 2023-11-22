import {useState} from 'react';
import {cm} from '~/shared/lib';
import {SpinnerCircle} from '../spinner';

interface Props {
  className?: string;
  videoKeys: string[];
}

export const YouTubePlayer = ({className, videoKeys}: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const keys = videoKeys.join(',');

  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <SpinnerCircle stroke="#fff" />
        </div>
      )}
      <iframe
        onLoad={() => setIsLoading(false)}
        id="youtube-player"
        className={cm('aspect-video w-full', className)}
        title="Videos"
        src={`https://www.youtube.com/embed?playlist=${keys}&start=0&autoplay=1&controls=0`}
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </>
  );
};
