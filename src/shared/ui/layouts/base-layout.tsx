import {type ReactNode, Suspense} from 'react';
import {Outlet, ScrollRestoration} from 'react-router-dom';

interface Props {
  headerSlot: ReactNode;
  footerSlot: ReactNode;
  navbarSlot?: ReactNode;
  announcementSlot?: ReactNode;
}

export function BaseLayout(props: Props) {
  return (
    <>
      {props.announcementSlot}
      <header>{props.headerSlot}</header>
      <main>
        <Suspense fallback="...">
          <Outlet />
        </Suspense>
      </main>
      <footer>{props.footerSlot}</footer>
      {props.navbarSlot}
      <ScrollRestoration />
    </>
  );
}
