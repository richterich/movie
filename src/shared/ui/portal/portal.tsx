import {type PropsWithChildren} from 'react';
import {createPortal} from 'react-dom';

interface Props {
  container?: Element | DocumentFragment;
}

export const Portal = ({children, container}: PropsWithChildren<Props>) => {
  return createPortal(children, container || document.body);
};
