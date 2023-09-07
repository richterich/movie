import {type MouseEventHandler} from 'react';
import {cm} from '~/shared/lib';

interface Props {
  className?: string;
  text: string;
  icon: string;
  handler: MouseEventHandler;
}

export const IconButton = ({className, text, icon, handler}: Props) => {
  return (
    <button
      type="button"
      className={cm('-mx-1 -my-1 flex h-8 w-8 items-center justify-center', className)}
      onClick={handler}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="material-symbols-outlined select-none">
        {icon}
      </span>
    </button>
  );
};
