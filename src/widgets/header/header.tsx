import {useRef, useEffect, type MouseEvent} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {IconButton} from '~/shared/ui/buttons';
import {Logo} from '~/shared/ui/logo';

const PASSIVE = 'opacity-75 hover:opacity-100 transition-opacity duration-300';

function setIndicatorPosition(target: HTMLElement, indicator: HTMLElement | null) {
  const {offsetLeft, offsetWidth} = target;
  indicator?.style.setProperty('--tw-translate-x', `${offsetLeft}px`);
  indicator?.style.setProperty('--indicator-width', `${offsetWidth}px`);
}

export const Header = () => {
  const indicator = useRef<HTMLSpanElement>(null);
  const index = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      const target = document.querySelector<HTMLElement>('[aria-current="page"]');
      if (target) {
        setIndicatorPosition(target, indicator.current);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            indicator.current?.classList.add('transition-[transform,width]', 'duration-300');
          });
        });
      }
    });
  }, [indicator]);

  return (
    <nav className="mx-auto max-w-7xl px-4 py-0.5 sm:px-6 lg:px-8">
      <div className="flex items-center py-1 text-sm font-semibold leading-9">
        <Link
          onClick={() => {
            if (index.current) setIndicatorPosition(index.current, indicator.current);
          }}
          className="transition-opacity duration-300 hover:opacity-60 lg:mr-8"
          to="/">
          <Logo text="Logo Movie" />
        </Link>
        <div className="relative mr-auto hidden lg:block">
          <span
            ref={indicator}
            className="absolute bottom-0 h-0.5 w-[var(--indicator-width)] translate-x-0 bg-slate-700 [--indicator-width:0px] dark:bg-slate-200"></span>
          <ul className="flex space-x-4">
            <li>
              <NavLink
                ref={index}
                onClick={(e: MouseEvent<HTMLElement>) => setIndicatorPosition(e.currentTarget, indicator.current)}
                className={({isActive}) => (isActive ? '' : PASSIVE)}
                to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={(e: MouseEvent<HTMLElement>) => setIndicatorPosition(e.currentTarget, indicator.current)}
                className={({isActive}) => (isActive ? '' : PASSIVE)}
                to="/movies">
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={(e: MouseEvent<HTMLElement>) => setIndicatorPosition(e.currentTarget, indicator.current)}
                className={({isActive}) => (isActive ? '' : PASSIVE)}
                to="/series">
                Series
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={(e: MouseEvent<HTMLElement>) => setIndicatorPosition(e.currentTarget, indicator.current)}
                className={({isActive}) => (isActive ? '' : PASSIVE)}
                to="/animations">
                Animations
              </NavLink>
            </li>
          </ul>
        </div>
        <IconButton
          className="ml-auto h-10 w-10 lg:ml-0"
          text="Search"
          icon="search"
          handler={() => console.log('[SEARCH] I was clicked!')}
        />
        <IconButton
          className="h-10 w-10 lg:hidden"
          text="Open Navigation"
          icon="more_vert"
          handler={() => console.log('[NAVIGATION] I was clicked!')}
        />
      </div>
    </nav>
  );
};
