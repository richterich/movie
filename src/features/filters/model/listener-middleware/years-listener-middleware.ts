import {params} from '~/shared/lib';
import {startAppListening} from '~/shared/model';
import {selectYearFilter} from '../selectors';
import {setYearsFilter, clearYearsFilter} from '../slice';

export const unsubscribeSetYearsFilter = startAppListening({
  matcher: setYearsFilter.match,
  effect: (_, {getState}) => {
    const years = selectYearFilter(getState());
    const searchParams = new URLSearchParams(location.search);
    if (years?.min) searchParams.set(params.years.min, `${years.min}`);
    else searchParams.delete(params.years.min);
    if (years?.max) searchParams.set(params.years.max, `${years.max}`);
    else searchParams.delete(params.years.max);
    history.pushState(null, '', `?${searchParams.toString()}`);
  },
});

export const unsubscribeClearYearsFilter = startAppListening({
  matcher: clearYearsFilter.match,
  effect: () => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.delete(params.years.min);
    searchParams.delete(params.years.max);
    history.pushState(null, '', `?${searchParams.toString()}`);
  },
});
