import {Outlet, useNavigation, ScrollRestoration} from 'react-router-dom';
import {Announcement} from '~/widgets/announcement';
import {Footer} from '~/widgets/footer';
import {Header} from '~/widgets/header';
import {LoadSpinner} from '~/widgets/loader';
import {BaseLayout} from '~/shared/ui/layouts';

export const MainLayout = () => {
  const navigation = useNavigation();
  const loading = navigation.state === 'loading';
  return (
    <BaseLayout
      announcementSlot={<Announcement />}
      headerSlot={<Header />}
      mainSlot={loading ? <LoadSpinner strokeWidth={'8px'} hexColor="#86198f" className="my-auto" /> : <Outlet />}
      footerSlot={<Footer />}>
      <ScrollRestoration />
    </BaseLayout>
  );
};
