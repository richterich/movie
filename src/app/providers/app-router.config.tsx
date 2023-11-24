import {createBrowserRouter} from 'react-router-dom';
import {Error} from '~/pages/error';
import {MainLayout} from '~/pages/layouts';
import {genreListLoader} from '~/entities/genre';
import {store} from './app-store.config';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Error />,
    loader: async () => {
      return await genreListLoader(store.dispatch);
    },
    children: [
      {
        index: true,
        async lazy() {
          const Home = (await import('~/pages/home')).default;
          return {element: <Home />};
        },
      },
      {
        path: '/celebs',
        async lazy() {
          const Celebs = (await import('~/pages/celebs')).default;
          return {element: <Celebs />};
        },
      },
      {
        path: '/movies',
        async lazy() {
          const Movies = (await import('~/pages/movies')).default;
          return {element: <Movies />};
        },
      },
      {
        path: '/movies/:movieId/details',
        async lazy() {
          const MovieDetails = (await import('~/pages/movie-details')).default;
          return {element: <MovieDetails />};
        },
      },
      {
        path: '/series',
        async lazy() {
          const Series = (await import('~/pages/series')).default;
          return {element: <Series />};
        },
      },
      {
        path: '/series/:seriesId/details',
        async lazy() {
          const SeriesDetails = (await import('~/pages/series-details')).default;
          return {element: <SeriesDetails />};
        },
      },
    ],
  },
]);
