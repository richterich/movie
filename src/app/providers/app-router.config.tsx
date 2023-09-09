import {createBrowserRouter} from 'react-router-dom';
import {Error} from '~/pages/error';
import {MainLayout} from '~/pages/layouts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        async lazy() {
          const Home = (await import('~/pages/home')).default;
          return {element: <Home />};
        },
      },
      {
        path: '/animations/:id?',
        async lazy() {
          const Animations = (await import('~/pages/animations')).default;
          return {element: <Animations />};
        },
      },
      {
        path: '/movies/:id?',
        async lazy() {
          const Movies = (await import('~/pages/movies')).default;
          return {element: <Movies />};
        },
      },
      {
        path: '/series/:id?',
        async lazy() {
          const Series = (await import('~/pages/series')).default;
          return {element: <Series />};
        },
      },
    ],
  },
]);
