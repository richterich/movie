import {type MouseEventHandler} from 'react';
import {cm} from '~/shared/lib';

interface Props {
  className?: string;
  text: string;
  icon: string;
  handler: MouseEventHandler;
}

export const FlexibleIconButton = ({className, text, icon, handler}: Props) => {
  return (
    <button type="button" onClick={handler}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className={cm('material-symbols-outlined select-none', className)}>
        {icon}
      </span>
    </button>
  );
};
