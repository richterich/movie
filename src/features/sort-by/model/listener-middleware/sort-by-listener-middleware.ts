import {params} from '~/shared/lib';
import {startAppListening} from '~/shared/model';
import {mapSortByOrderParam} from '../../lib';
import {selectSortByOption, selectSortByOrder} from '../selectors';
import {setSortOption, setSortOrder, clearSortState} from '../slice';

export const unsubscribeSetSortOption = startAppListening({
  matcher: setSortOption.match,
  effect: (_, {getState}) => {
    const sortOption = selectSortByOption(getState());
    const searchParams = new URLSearchParams(location.search);
    if (sortOption) searchParams.set(params.sort.option, sortOption);
    else searchParams.delete(params.sort.option);
    history.pushState(null, '', `?${searchParams.toString()}`);
  },
});

export const unsubscribeSetSortOrder = startAppListening({
  matcher: setSortOrder.match,
  effect: (_, {getState}) => {
    const sortOrder = selectSortByOrder(getState());
    const orderParam = mapSortByOrderParam(sortOrder);
    const searchParams = new URLSearchParams(location.search);
    if (sortOrder && orderParam) searchParams.set(params.sort.order, orderParam);
    else searchParams.delete(params.sort.order);
    history.pushState(null, '', `?${searchParams.toString()}`);
  },
});

export const unsubscribeClearSortState = startAppListening({
  matcher: clearSortState.match,
  effect: () => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.delete(params.sort.option);
    searchParams.delete(params.sort.order);
    history.pushState(null, '', `?${searchParams.toString()}`);
  },
});
