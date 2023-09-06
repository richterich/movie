import {useRef, useState} from 'react';
import {CSSTransition} from 'react-transition-group';
import {Announcement as AnnouncementUI} from '~/shared/ui/announcement';
import {IconButton} from '~/shared/ui/buttons';

export const Announcement = () => {
  const [hidden, setHidden] = useState(false);
  const announcementRef = useRef(null);

  return (
    <CSSTransition
      nodeRef={announcementRef}
      in={!hidden}
      timeout={75}
      classNames={{
        exit: '-translate-y-full',
      }}
      unmountOnExit>
      <AnnouncementUI ref={announcementRef}>
        <div className="flex items-center justify-center">
          <span className="w-full">
            An open source frontend application built with React &#9883; and Feature-Sliced Design &#127856;
          </span>
          <IconButton
            text="Close Announcement"
            icon="close"
            handler={() => setHidden((hidden) => (hidden = !hidden))}
          />
        </div>
      </AnnouncementUI>
    </CSSTransition>
  );
};
