import {bindActionCreators} from '@reduxjs/toolkit';
import {selectKeywordFilter} from '../selectors';
import {setKeywordsFilter, clearKeywordsFilter} from '../slice';

export const mapKeywordsFilterState = (state: App.RootState) => {
  const keywords = selectKeywordFilter(state);
  return {keywords};
};

export const mapKeywordsFilterDispatch = (dispatch: App.BaseDispatch) => {
  return bindActionCreators({setFilter: setKeywordsFilter, clearFilter: clearKeywordsFilter}, dispatch);
};
