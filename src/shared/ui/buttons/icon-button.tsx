import {type MouseEventHandler} from 'react';

interface Props {
  text: string;
  icon: string;
  handler: MouseEventHandler;
}

export const IconButton = ({text, icon, handler}: Props) => {
  return (
    <button type="button" className="-mx-1 -my-1 flex h-8 w-8 items-center justify-center" onClick={handler}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="material-symbols-outlined">
        {icon}
      </span>
    </button>
  );
};
