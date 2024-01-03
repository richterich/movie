import {params} from '~/shared/lib';
import {startAppListening} from '~/shared/model';
import {selectKeywordFilter} from '../selectors';
import {setKeywordsFilter, clearKeywordsFilter} from '../slice';

export const unsubscribeSetKeywordsFilter = startAppListening({
  matcher: setKeywordsFilter.match,
  effect: (_, {getState}) => {
    const keywords = selectKeywordFilter(getState());
    const searchParams = new URLSearchParams(location.search);
    searchParams.set(params.keywords, keywords.join(','));
    history.pushState(null, '', `?${searchParams.toString()}`);
  },
});

export const unsubscribeClearKeywordsFilter = startAppListening({
  matcher: clearKeywordsFilter.match,
  effect: () => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.delete(params.keywords);
    history.pushState(null, '', `?${searchParams.toString()}`);
  },
});
