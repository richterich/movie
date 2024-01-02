import {cm} from '~/shared/lib';
import {SortOrders} from '~/shared/model';
import {FlexibleIconButton} from '~/shared/ui/buttons';
import {SortByOrder} from '../../model';

interface Props {
  sortOrder: SortByOrder;
  setSortOrder: (value: SortByOrder) => void;
}

export const SortOrderButton = ({sortOrder, setSortOrder}: Props) => {
  return (
    <FlexibleIconButton
      className={cm('ml-4 rounded-full p-3 transition-colors duration-300 hover:bg-[#111]', {
        'text-fuchsia-500': sortOrder === SortOrders.Ascending,
      })}
      text="Sort Direction"
      icon="swap_vert"
      handler={() => setSortOrder(sortOrder === SortOrders.Ascending ? SortOrders.Descending : SortOrders.Ascending)}
    />
  );
};
