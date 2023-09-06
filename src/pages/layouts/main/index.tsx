import {Footer} from '~/widgets/footer';
import {Header} from '~/widgets/header';
import {BaseLayout} from '~/shared/ui/layouts';

export const MainLayout = () => {
  return <BaseLayout headerSlot={<Header />} footerSlot={<Footer />} />;
};
