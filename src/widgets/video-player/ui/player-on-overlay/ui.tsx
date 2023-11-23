import type {HTMLAttributes, PropsWithChildren} from 'react';
import {ReactNode} from 'react';
import type {VideosAttributes} from '~/features/watch-videos';
import {CloseVideoPlayer, WatchVideosContext} from '~/features/watch-videos';
import {Overlay} from '~/shared/ui/overlay';
import {Portal} from '~/shared/ui/portal';
import {SpinnerCircle} from '~/shared/ui/spinner';

interface OverlayProps {
  videosAttributes: VideosAttributes;
}

interface PlayerProps extends HTMLAttributes<HTMLDivElement> {
  isFetching: boolean;
  playerSlot: ReactNode;
}

const defaultAttributes: HTMLAttributes<HTMLDivElement> = {
  className: 'flex h-full w-full items-center justify-center',
};

export const PlayerOverlay = ({videosAttributes, children}: PropsWithChildren<OverlayProps>) => {
  const {cinematicId, videosTypes} = videosAttributes;

  if (cinematicId === null || videosTypes === null) return;

  return (
    <Portal>
      <Overlay>
        <WatchVideosContext.Provider value={videosAttributes}>
          <CloseVideoPlayer icon="close" text="Close Video Overlay" className="absolute right-4 top-4" />
          {children}
        </WatchVideosContext.Provider>
      </Overlay>
    </Portal>
  );
};

const PlayerOnOverlay = (props: PlayerProps) => {
  const {playerSlot, isFetching, ...rest} = props;
  const attributes = Object.assign({...defaultAttributes}, rest);

  return <div {...attributes}>{isFetching ? <SpinnerCircle /> : playerSlot}</div>;
};

PlayerOverlay.PlayerOnOverlay = PlayerOnOverlay;
