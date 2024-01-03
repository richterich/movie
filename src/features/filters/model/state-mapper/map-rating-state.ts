import {bindActionCreators} from '@reduxjs/toolkit';
import {selectRatingFilter} from '../selectors';
import {setRatingFilter, clearRatingFilter} from '../slice';

export interface Props {
  min: number;
  max: number;
}

export const mapRatingFilterState = (state: App.RootState, {min, max}: Props) => {
  const rating = selectRatingFilter(state);
  return {min, max, rating};
};

export const mapRatingFilterDispatch = (dispatch: App.BaseDispatch) => {
  return bindActionCreators({setFilter: setRatingFilter, clearFilter: clearRatingFilter}, dispatch);
};
