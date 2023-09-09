import {RouterProvider} from 'react-router-dom';
import {LoadSpinner} from '~/widgets/loader';
import {router} from './app-router.config';

export const AppRouter = () => {
  const Router = () => <RouterProvider router={router} fallbackElement={<LoadSpinner className="h-screen" />} />;
  return Router;
};
