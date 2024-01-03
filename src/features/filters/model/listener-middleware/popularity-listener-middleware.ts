import {params} from '~/shared/lib';
import {startAppListening} from '~/shared/model';
import {selectPopularityFilter} from '../selectors';
import {setPopularityFilter, clearPopularityFilter} from '../slice';

export const unsubscribeSetPopularityFilter = startAppListening({
  matcher: setPopularityFilter.match,
  effect: (_, {getState}) => {
    const popularity = selectPopularityFilter(getState());
    const searchParams = new URLSearchParams(location.search);
    if (popularity?.min) searchParams.set(params.popularity.min, `${popularity.min}`);
    else searchParams.delete(params.popularity.min);
    if (popularity?.max) searchParams.set(params.popularity.max, `${popularity.max}`);
    else searchParams.delete(params.popularity.max);
    history.pushState(null, '', `?${searchParams.toString()}`);
  },
});

export const unsubscribeClearPopularityFilter = startAppListening({
  matcher: clearPopularityFilter.match,
  effect: () => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.delete(params.popularity.min);
    searchParams.delete(params.popularity.max);
    history.pushState(null, '', `?${searchParams.toString()}`);
  },
});
