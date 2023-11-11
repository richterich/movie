import {type PropsWithChildren, type HTMLAttributes, useEffect} from 'react';
import {cm} from '~/shared/lib';

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Overlay = ({className, children}: PropsWithChildren<Props>) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return <div className={cm('fixed inset-0 z-50 select-none bg-black/95 backdrop-blur-sm', className)}>{children}</div>;
};
