import {cm} from '~/shared/lib';
import {SpinnerCircle} from '~/shared/ui/spinner';

interface Props {
  hexColor?: string;
  strokeWidth?: string | number;
  className?: string;
}

export const LoadSpinner = ({hexColor, strokeWidth, className}: Props) => {
  return (
    <div className={cm('flex items-center justify-center', className)}>
      <SpinnerCircle stroke={hexColor || '#fff'} strokeWidth={strokeWidth || '4px'} />
    </div>
  );
};
