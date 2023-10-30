import {cm} from '~/shared/lib';

interface Props {
  icon: string;
  className?: string;
}
export const MaterialIcon = ({icon, className}: Props) => {
  return (
    <span aria-hidden="true" className={cm('material-symbols-outlined select-none', className)}>
      {icon}
    </span>
  );
};
