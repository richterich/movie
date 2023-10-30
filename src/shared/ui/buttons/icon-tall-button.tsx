import {type MouseEventHandler} from 'react';
import {cm} from '~/shared/lib';

interface Props {
  id?: string;
  className?: string;
  text: string;
  icon: string;
  handler?: MouseEventHandler;
}

export const IconTallButton = ({id, className, text, icon, handler}: Props) => {
  return (
    <button
      id={id}
      type="button"
      className={cm('flex items-center justify-center px-2 py-4', className)}
      onClick={handler}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="material-symbols-outlined select-none text-4xl font-semibold">
        {icon}
      </span>
    </button>
  );
};
