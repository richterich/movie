import {type ReactNode, type LegacyRef, forwardRef} from 'react';
import {cm} from '~/shared/lib';

interface Props {
  className?: string;
  children: ReactNode;
}

export const Announcement = forwardRef(function Announcement(
  {className, children}: Props,
  ref: LegacyRef<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      className={cm(
        'w-full bg-indigo-500 px-4 py-1 text-center text-sm leading-6 text-white transition-transform duration-75 sm:px-6 lg:px-8',
        className
      )}>
      {children}
    </div>
  );
});
