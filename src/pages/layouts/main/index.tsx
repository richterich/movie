import {Outlet, ScrollRestoration} from 'react-router-dom';
import {Announcement} from '~/widgets/announcement';
import {Footer} from '~/widgets/footer';
import {Header} from '~/widgets/header';
import {BaseLayout} from '~/shared/ui/layouts';

export const MainLayout = () => {
  return (
    <BaseLayout
      announcementSlot={<Announcement />}
      headerSlot={<Header />}
      mainSlot={<Outlet />}
      footerSlot={<Footer />}>
      <ScrollRestoration />
    </BaseLayout>
  );
};
