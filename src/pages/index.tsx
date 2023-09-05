import {lazy} from 'react';
import {createBrowserRouter} from 'react-router-dom';

const Home = lazy(() => import('./home'));

export const Routing = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);
