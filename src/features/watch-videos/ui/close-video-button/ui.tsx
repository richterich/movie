import type {HTMLAttributes} from 'react';
import {useAppDispatch} from '~/shared/model';
import {IconButton} from '~/shared/ui/buttons';
import {clearVideosAttributes} from '../../model';

interface Props extends HTMLAttributes<HTMLElement> {
  icon: string;
  text: string;
}

export const CloseVideoPlayer = (props: Props) => {
  const dispatch = useAppDispatch();

  return (
    <IconButton
      {...props}
      handler={() => {
        dispatch(clearVideosAttributes());
      }}
    />
  );
};
