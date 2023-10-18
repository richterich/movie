import {type ReactNode} from 'react';

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
      <main className="flex flex-grow flex-col">{props.mainSlot}</main>
      <footer>{props.footerSlot}</footer>
      {props.navbarSlot}
      {props.children}
    </>
  );
}
