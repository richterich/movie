import type {Router} from '@remix-run/router';
import {Suspense} from 'react';
import {RouterProvider} from 'react-router-dom';
import {LoadSpinner} from '~/widgets/loader';

export const AppRouter = (routing: Router) => {
  const Page = () => (
    <Suspense fallback={<LoadSpinner className="h-screen" />}>
      <RouterProvider router={routing} />
    </Suspense>
  );
  return Page;
};
