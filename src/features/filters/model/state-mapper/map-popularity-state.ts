import {bindActionCreators} from '@reduxjs/toolkit';
import {selectPopularityFilter} from '../selectors';
import {setPopularityFilter, clearPopularityFilter} from '../slice';

export interface Props {
  min: number;
  max: number;
}

export const mapPopularityFilterState = (state: App.RootState, {min, max}: Props) => {
  const popularity = selectPopularityFilter(state);
  return {min, max, popularity};
};

export const mapPopularityFilterDispatch = (dispatch: App.BaseDispatch) => {
  return bindActionCreators({setFilter: setPopularityFilter, clearFilter: clearPopularityFilter}, dispatch);
};
