import {useState, useMemo} from 'react';
import {deny} from '~/shared/lib';

export function useAnnouncement(deferredOpen: number, denyFrame: number): [boolean, () => void] {
  const [hidden, setHidden] = useState(false);
  const hideAnnouncement = useMemo(() => {
    const closeHandler = deny(() => {
      setHidden(true);
      const openTimeout = setTimeout(() => {
        setHidden(false);
        clearTimeout(openTimeout);
      }, deferredOpen);
    }, denyFrame);
    return closeHandler;
  }, [setHidden, deferredOpen, denyFrame]);
  return [hidden, hideAnnouncement];
}
