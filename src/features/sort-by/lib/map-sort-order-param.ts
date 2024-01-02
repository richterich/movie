/**
 * TODO: write in generics
 */
import {OrderSortParams} from '~/shared/lib';
import {SortOrders} from '~/shared/model';
import {SortByOrder} from '../model';

export const mapSortByOrder = (value: string): SortByOrder | null => {
  function is(param: ValueOf<typeof OrderSortParams>) {
    return 0 === param.localeCompare(value, 'en', {sensitivity: 'base'});
  }

  if (is(OrderSortParams.Ascending)) return SortOrders.Ascending;
  if (is(OrderSortParams.Descending)) return SortOrders.Descending;

  return null;
};

export const mapSortByOrderParam = (value: SortByOrder | null | undefined): ValueOf<typeof OrderSortParams> | null => {
  let orderParam = null;
  if (value && OrderSortParams[value]) orderParam = OrderSortParams[value];
  return orderParam;
};
