import {params} from '~/shared/lib';
import {startAppListening} from '~/shared/model';
import {selectRatingFilter} from '../selectors';
import {setRatingFilter, clearRatingFilter} from '../slice';

export const unsubscribeSetRatingFilter = startAppListening({
  matcher: setRatingFilter.match,
  effect: (_, {getState}) => {
    const rating = selectRatingFilter(getState());
    const searchParams = new URLSearchParams(location.search);
    if (rating?.min) searchParams.set(params.rating.min, `${rating.min}`);
    else searchParams.delete(params.rating.min);
    if (rating?.max) searchParams.set(params.rating.max, `${rating.max}`);
    else searchParams.delete(params.rating.max);
    history.pushState(null, '', `?${searchParams.toString()}`);
  },
});

export const unsubscribeClearRatingFilter = startAppListening({
  matcher: clearRatingFilter.match,
  effect: () => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.delete(params.rating.min);
    searchParams.delete(params.rating.max);
    history.pushState(null, '', `?${searchParams.toString()}`);
  },
});
