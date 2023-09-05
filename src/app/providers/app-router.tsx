import type {Router} from '@remix-run/router';
import {Suspense} from 'react';
import {RouterProvider} from 'react-router-dom';

export const AppRouter = (routing: Router) => {
  const Page = () => (
    <Suspense fallback="Loading...">
      <RouterProvider router={routing} />
    </Suspense>
  );
  return Page;
};
