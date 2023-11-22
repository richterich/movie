import type {HTMLAttributes} from 'react';
import {useEffect} from 'react';
import {cm} from '~/shared/lib';

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Overlay = ({className, children}: Props) => {
  useEffect(() => {
    const originOverflow = document.body.style.overflow;
    const scrollBarWidth = window.innerWidth - document.body.offsetWidth;

    document.body.style.paddingRight = `${scrollBarWidth}px`;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originOverflow;
      document.body.style.paddingRight = '0px';
    };
  }, []);

  return <div className={cm('fixed inset-0 z-50 select-none bg-black/90 backdrop-blur-sm', className)}>{children}</div>;
};
