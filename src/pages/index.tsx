import {lazy} from 'react';
import {createBrowserRouter} from 'react-router-dom';
import {Error} from './error';
import {MainLayout} from './layouts';

const Home = lazy(() => import('./home'));
const Animations = lazy(() => import('./animations'));
const Movies = lazy(() => import('./movies'));
const Series = lazy(() => import('./series'));

export const Routing = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/animations/:id?',
        element: <Animations />,
      },
      {
        path: '/movies/:id?',
        element: <Movies />,
      },
      {
        path: '/series/:id?',
        element: <Series />,
      },
    ],
  },
]);
