import {type ReactNode} from 'react';
import {cm} from '~/shared/lib';

interface Props {
  className?: string;
  children: ReactNode;
}

export const Announcement = ({className, children}: Props) => {
  return (
    <div
      className={cm(
        'w-full overflow-hidden bg-indigo-500 px-4 py-1 text-center text-sm leading-6 text-white transition-[transform,max-height] duration-300 sm:px-6 lg:px-8',
        className
      )}>
      {children}
    </div>
  );
};
