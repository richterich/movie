import {params} from '~/shared/lib';
import {startAppListening} from '~/shared/model';
import {selectGenreFilter} from '../selectors';
import {setGenresFilter, clearGenresFilter} from '../slice';

export const unsubscribeSetGenresFilter = startAppListening({
  matcher: setGenresFilter.match,
  effect: (_, {getState}) => {
    const genres = selectGenreFilter(getState());
    const searchParams = new URLSearchParams(location.search);
    searchParams.set(params.genres, genres.join(','));
    history.pushState(null, '', `?${searchParams.toString()}`);
  },
});

export const unsubscribeClearGenresFilter = startAppListening({
  matcher: clearGenresFilter.match,
  effect: () => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.delete(params.genres);
    history.pushState(null, '', `?${searchParams.toString()}`);
  },
});
