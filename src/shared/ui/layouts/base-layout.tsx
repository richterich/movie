import {type ReactNode, Suspense} from 'react';

interface Props {
  headerSlot: ReactNode;
  mainSlot: ReactNode;
  footerSlot: ReactNode;
  navbarSlot?: ReactNode;
  announcementSlot?: ReactNode;
  children: ReactNode;
}

export function BaseLayout(props: Props) {
  return (
    <>
      {props.announcementSlot}
      <header>{props.headerSlot}</header>
      <main>
        <Suspense fallback="...">{props.mainSlot}</Suspense>
      </main>
      <footer>{props.footerSlot}</footer>
      {props.navbarSlot}
      {props.children}
    </>
  );
}
