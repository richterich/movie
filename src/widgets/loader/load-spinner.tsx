import {cm} from '~/shared/lib';
import {SpinnerCircle} from '~/shared/ui/spinner';

interface Props {
  className?: string;
}

export const LoadSpinner = ({className}: Props) => {
  return (
    <div className={cm('flex items-center justify-center', className)}>
      <SpinnerCircle />
    </div>
  );
};
