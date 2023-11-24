import {RouterProvider} from 'react-router-dom';
import {LoadSpinner} from '~/widgets/loader';
import {router} from './app-router.config';

export const AppRouter = () => {
  const Router = () => (
    <RouterProvider
      router={router}
      fallbackElement={<LoadSpinner strokeWidth={'8px'} hexColor="#86198f" className="h-screen" />}
    />
  );
  return Router;
};
