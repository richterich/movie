import {type ReactNode, type LegacyRef, forwardRef} from 'react';

interface Props {
  children: ReactNode;
}

export const Announcement = forwardRef(function Announcement({children}: Props, ref: LegacyRef<HTMLDivElement>) {
  return (
    <div
      ref={ref}
      className="w-full bg-indigo-500 px-2 py-1 text-center text-base font-semibold text-white transition-transform duration-75">
      {children}
    </div>
  );
});
