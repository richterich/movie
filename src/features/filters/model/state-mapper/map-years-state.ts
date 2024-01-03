import {bindActionCreators} from '@reduxjs/toolkit';
import {selectYearFilter} from '../selectors';
import {clearYearsFilter, setYearsFilter} from '../slice';

export interface Props {
  min: string;
  max: string;
}

export const mapYearsFilterState = (state: App.RootState, {min, max}: Props) => {
  const years = selectYearFilter(state);
  return {min, max, years};
};

export const mapYearsFilterDispatch = (dispatch: App.BaseDispatch) => {
  return bindActionCreators({clearFilter: clearYearsFilter, setFilter: setYearsFilter}, dispatch);
};
