import type {ImgHTMLAttributes} from 'react';
import {useState} from 'react';
import {SpinnerOval} from '../spinner';

interface Props extends ImgHTMLAttributes<HTMLImageElement> {}

export const LazyImage = (props: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <SpinnerOval width={48} height={48} />
        </div>
      )}
      <img {...props} loading="lazy" decoding="async" sizes="100%" onLoad={() => setIsLoading(false)} />
    </>
  );
};
