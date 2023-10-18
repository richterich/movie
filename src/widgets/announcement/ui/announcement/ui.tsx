import {Announcement as AnnouncementUI} from '~/shared/ui/announcement';
import {IconButton} from '~/shared/ui/buttons';
import {useAnnouncement} from '../../lib';

export const Announcement = () => {
  const [hidden, hideAnnouncement] = useAnnouncement(48000, 300);
  return (
    <AnnouncementUI className={hidden ? 'max-h-0 -translate-y-full' : 'max-h-20 translate-y-0'}>
      <div className="flex items-center justify-center">
        <span className="w-full">
          An open source frontend application built with React &#9883; and Feature-Sliced Design &#127856;
        </span>
        <IconButton text="Hide Announcement" icon="close" handler={hideAnnouncement} />
      </div>
    </AnnouncementUI>
  );
};
