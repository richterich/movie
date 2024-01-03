import {FlexibleIconButton} from '~/shared/ui/buttons';

interface Props {
  onPopupOpen: () => void;
}

export const OpenFiltersButton = ({onPopupOpen}: Props) => {
  return (
    <FlexibleIconButton
      className="rounded-full px-6 py-3 transition-colors duration-300 hover:bg-[#111]"
      text="Open Filters Popup"
      icon="filter_list"
      handler={onPopupOpen}
    />
  );
};
